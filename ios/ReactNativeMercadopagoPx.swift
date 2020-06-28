import UIKit
import Foundation
import MercadoPagoSDK

enum JsOptions {
    static let PUBLIC_KEY = "publicKey";
    static let PREFERENCE_ID = "preferenceId";

    static let LANGUAGE = "language";
    static let PRODUCT_ID = "productId";
    static let ADVANCED_OPTIONS = "advancedOptions";
    static let BANK_DEALS_ENABLED = "bankDealsEnabled";
    static let AMOUNT_ROW_ENABLED = "amountRowEnabled";
}

enum JsErrorTypes {
    static let PAYMENT_ERRORED = "mp:payment_errored";
    static let PAYMENT_CANCELLED = "mp:payment_cancelled";
    
    static let PUBLIC_KEY_REQUIRED = "mp:public_key_required";
    static let PREFERENCE_ID_REQUIRED = "mp:preference_id_required";
}

@objc(ReactNativeMercadopagoPx)
class ReactNativeMercadopagoPx: NSObject {
    private var navigationController: UINavigationController? = nil;
    
    private var resolver: RCTPromiseResolveBlock? = nil;
    private var rejecter: RCTPromiseRejectBlock? = nil;

    @objc(createPayment:resolver:rejecter:)
    func createPayment(options: NSDictionary, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        DispatchQueue.main.async {
            self.navigationController = UIApplication.shared.keyWindow?.rootViewController as? UINavigationController;
                
            self.resolver = resolve;
            self.rejecter = reject;
                
            let publicKey = options[JsOptions.PUBLIC_KEY] as! String?;
            let preferenceId = options[JsOptions.PREFERENCE_ID] as! String?;

            if (publicKey == nil) {
                // TODO: extract error to custom error
                self.rejecter?(
                    JsErrorTypes.PUBLIC_KEY_REQUIRED,
                    "Public key is required for starting MP Checkout",
                    nil
                );
            }

            if (preferenceId == nil) {
                // TODO: extract error to custom error
                self.rejecter?(
                    JsErrorTypes.PREFERENCE_ID_REQUIRED,
                    "Preference ID is required for starting MP Checkout",
                    nil
                );
            }

            let builder = MercadoPagoCheckoutBuilder(publicKey: publicKey!, preferenceId: preferenceId!);

            // TODO: add support for language in Android side
            let language = options[JsOptions.LANGUAGE] as! String?;

            if (language != nil) {
                builder.setLanguage(language!);
            }

            let advancedOptions = options[JsOptions.ADVANCED_OPTIONS] as! NSDictionary?;

            if (advancedOptions != nil) {
                let config = PXAdvancedConfiguration();
                    
                let productId = advancedOptions![JsOptions.PRODUCT_ID] as! String?;

                if productId != nil {
                    config.setProductId(id: productId!);
                }
                    
                let bankDealsEnabled = advancedOptions?[JsOptions.BANK_DEALS_ENABLED] as! Bool?;
                let amountRowEnabled = advancedOptions?[JsOptions.AMOUNT_ROW_ENABLED] as! Bool?;

                config.bankDealsEnabled = bankDealsEnabled!;
                config.amountRowEnabled = amountRowEnabled!;
                
                builder.setAdvancedConfiguration(config: config);
            }

            // TODO: add support for tracking listener
            // TODO: add support for customizing fonts
            // TODO: add support for customizing colors

            let checkout = MercadoPagoCheckout(builder: builder);

            checkout.start(navigationController: self.navigationController!, lifeCycleProtocol: self);
        };
    }
}

// TODO: review extension definition
extension ReactNativeMercadopagoPx: PXLifeCycleProtocol {
    func finishCheckout() -> ((PXResult?) -> Void)? {
        //self.navigationController?.setNavigationBarHidden(true, animated: true);
        //self.navigationController?.popToRootViewController(animated: true);
        
        return nil;
    }

    func cancelCheckout() -> (() -> Void)? {
        //self.navigationController?.setNavigationBarHidden(true, animated: true);
        //self.navigationController?.popToRootViewController(animated: true);
        
        return nil;
    }

    func changePaymentMethodTapped() -> (() -> Void)? {
        return { () in
            print("px - changePaymentMethodTapped")
        }
    }
    
    /*
    func finishCheckout() -> ((PXPayment?) -> Void)? {
        // TODO: validate this is ok?
        return (payment) {
            // TODO: review method invocation
            navigationController.setNavigationBarHidden(true);
            navigationController.popToRootViewControllerAnimated(true);

            if payment != nil {
                // TODO: generate payment object
                resolver();
                resolver = nil;
            } else {
                // TODO: obtain MercadoPago error
                // TODO: extract error to custom error
                rejecter(JsErrorTypes.PAYMENT_ERRORED, "Something went wrong when retrieving Payment, please retry", nil);
                rejecter = nil;
            }
        }
    }

    func cancelCheckout() -> (() -> Void)? {
        // TODO: validate this is ok?
        return (x) {
            // TODO: review method invocation
            navigationController.setNavigationBarHidden(true);
            navigationController.popToRootViewControllerAnimated(true);

            // TODO: extract error to custom error
            rejecter(JsErrorTypes.PAYMENT_CANCELLED, "Payment was cancelled by the user", nil);
            rejecter = nil;
        }
    } */
}
