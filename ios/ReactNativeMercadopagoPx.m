#import "ReactNativeMercadopagoPx.h"

@import MercadoPagoSDK;

@implementation ReactNativeMercadopagoPx

RCT_EXPORT_MODULE()

- (dispatch_queue_t) methodQueue {
    return dispatch_get_main_queue();
}

RCT_REMAP_METHOD(createPayment, 
    options:(NSDictionary *)options
    createPaymentWithResolver:(RCTPromiseResolveBlock)resolve
    rejecter:(RCTPromiseRejectBlock)reject
) {
    //Get UINavigationController from AppDelegate from RN app
    UINavigationController *uiNavigationController = (UINavigationController *) [UIApplication sharedApplication].keyWindow.rootViewController;
    
    // Obtain keys from options object
    NSString *publicKey = [options objectForKey:@"publicKey"];
    NSString *preferenceId = [options objectForKey:@"preferenceId"];
    
    // TODO: validate publicKey existence
    // TODO: validate preferenceId existence
    
    // TODO: add support for advanced options
 
    // Create an instance of MercadoPago checkout builder
    MercadoPagoCheckoutBuilder *checkoutBuilder = [[MercadoPagoCheckoutBuilder alloc] initWithPublicKey:publicKey preferenceId:preferenceId];
    
    // Create an instance from MercadoPago checkout
    MercadoPagoCheckout *mpCheckout = [[MercadoPagoCheckout alloc] initWithBuilder:checkoutBuilder];
    
    // TODO: setup lifeCycleProtocol to listen for diferent checkout callbacks
    
    // Start MercadoPago checkout UI
    [mpCheckout startWithNavigationController:uiNavigationController lifeCycleProtocol:nil];
}

@end
