#import "ReactNativeMercadopagoPx.h"

@import MercadoPagoSDK;

@interface RCT_EXTERN_MODULE(ReactNativeMercadopagoPx, NSObject)

RCT_EXTERN_METHOD(createPayment:(NSDictionary *)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

@end
