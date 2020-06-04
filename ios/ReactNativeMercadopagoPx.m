#import "ReactNativeMercadopagoPx.h"

@import MercadoPagoSDK;

// Define module interface and inheritance
@interface ReactNativeMercadopagoPx : NSObject <RCTBridgeModule,PXLifeCycleProtocol>
@end

// Start implementing the module interface
@implementation ReactNativeMercadopagoPx
{
    UINavigationController *uiNavigationController;

    RCTPromiseResolveBlock resolve;
    RCTPromiseRejectBlock  reject;
}

RCT_EXPORT_MODULE()

- (dispatch_queue_t) methodQueue {
    return dispatch_get_main_queue();
}

RCT_REMAP_METHOD(createPayment, 
    options:(NSDictionary *)options
    resolver:(RCTPromiseResolveBlock)resolve
    rejecter:(RCTPromiseRejectBlock)reject
) {
    // Setup promises globally
    self->resolve = resolve;
    self->reject = reject;

    //Get UINavigationController from AppDelegate from RN app
    self->uiNavigationController = (UINavigationController *) [UIApplication sharedApplication].keyWindow.rootViewController;
    
    // Obtain keys from options object
    NSString *publicKey = [options objectForKey:@"publicKey"];
    NSString *preferenceId = [options objectForKey:@"preferenceId"];
    
    if (publicKey == nil || preferenceId == nil) {
        self->reject(@"CREDENTIALS_REQUIRED", @"publicKey and preferenceId are required for starting MercadoPago checkout", nil);
    }
    
    // TODO: add support for advanced options
    // TODO: add support for tracking listener
    // TODO: add support for customizing fonts
    // TODO: add support for customizing colors
 
    // Create an instance of MercadoPago checkout builder
    MercadoPagoCheckoutBuilder *mpCheckoutBuilder = [[MercadoPagoCheckoutBuilder alloc] initWithPublicKey:publicKey preferenceId:preferenceId];
    
    // Create an instance from MercadoPago checkout
    MercadoPagoCheckout *mpCheckout = [[MercadoPagoCheckout alloc] initWithBuilder:mpCheckoutBuilder];
    
    // Start MercadoPago checkout UI
    [mpCheckout startWithNavigationController:self->uiNavigationController lifeCycleProtocol:self];
}

-(void (^ _Nullable)(void))cancelCheckout {
    return ^ {
        [self->uiNavigationController setNavigationBarHidden:TRUE];
        [self->uiNavigationController popToRootViewControllerAnimated:YES];

        self->reject(@"PAYMENT_CANCELLED", @"Payment was cancelled by the user", nil);
        
        // Cleanup promise rejecter
        self->reject = nil;
    };
}

- (void (^)(id<PXResult> _Nullable))finishCheckout {
    return ^(id<PXResult>  _Nullable result){
        [self->uiNavigationController setNavigationBarHidden:TRUE];
        [self->uiNavigationController popToRootViewControllerAnimated:YES];
        
        PXGenericPayment *genericPayment = (PXGenericPayment *) result;

        if (genericPayment != nil) {
            NSDictionary *payment = @{@"id": genericPayment.paymentId, @"status": genericPayment.status};

            self->resolve(payment);

            // Cleanup promise resolver
            self->resolve = nil;
        } else {
            self->reject(@"PAYMENT_ERROR", @"Something went wrong when retrieving Payment, please retry", nil);

            // Cleanup promise rejecter
            self->reject = nil;
        }
    };
}

@end
