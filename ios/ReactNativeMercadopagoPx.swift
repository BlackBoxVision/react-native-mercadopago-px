import UIKit
import Foundation
import MercadoPagoSDK

@objc(ReactNativeMercadopagoPx)
class ReactNativeMercadopagoPx: NSObject {
    private let PUBLIC_KEY = "publicKey";
    private let PREFERENCE_ID = "preferenceId";

    private let LANGUAGE = "language";
    private let PRODUCT_ID = "productId";
    private let ADVANCED_OPTIONS = "advancedOptions";
    private let BANK_DEALS_ENABLED = "bankDealsEnabled";
    private let AMOUNT_ROW_ENABLED = "amountRowEnabled";

    private var navigationController: UINavigationController? = nil;
    private var resolver: RCTPromiseResolveBlock? = nil;
    private var rejecter: RCTPromiseRejectBlock? = nil;

    @objc(createPayment:resolver:rejecter:)
    func createPayment(options: NSDictionary, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        navigationController = UIApplication.shared.keyWindow?.rootViewController as? UINavigationController;
        
        resolver = resolve;
        rejecter = reject;
        
        let publicKey = options[PUBLIC_KEY] as! String?;
        let preferenceId = options[PREFERENCE_ID] as! String?;

        if publicKey == nil {
            // TODO: extract error to custom error
            rejecter!(
                "PUBLIC_KEY_REQUIRED",
                "Public key is required for starting MP Checkout",
                nil
            );
        }

        if (preferenceId == nil) {
            // TODO: extract error to custom error
            rejecter!(
                "PREFERENCE_ID_REQUIRED",
                "Preference ID is required for starting MP Checkout",
                nil
            );
        }

        let builder = MercadoPagoCheckoutBuilder(publicKey: publicKey!, preferenceId: preferenceId!);

        // TODO: add support for language in Android side
        let language = options[LANGUAGE] as! String?;

        if language != nil {
            builder.setLanguage(language!);
        }

        let advancedOptions = options[ADVANCED_OPTIONS] as! NSDictionary?;

        if advancedOptions != nil {
            let config = PXAdvancedConfiguration();
            
            let productId = advancedOptions![PRODUCT_ID] as! String?;

            if productId != nil {
                config.setProductId(id: productId!);
            }
            
            let bankDealsEnabled = advancedOptions![BANK_DEALS_ENABLED] as! Bool?;
            let amountRowEnabled = advancedOptions![AMOUNT_ROW_ENABLED] as! Bool?;

            config.bankDealsEnabled = bankDealsEnabled!;
            config.amountRowEnabled = amountRowEnabled!;

            builder.setAdvancedConfiguration(config: config);
        }

        // TODO: add support for tracking listener
        // TODO: add support for customizing fonts
        // TODO: add support for customizing colors

        let checkout = MercadoPagoCheckout(builder: builder);

        checkout.start(navigationController: navigationController!, lifeCycleProtocol: self);
    }
}

// TODO: review extension definition
extension ReactNativeMercadopagoPx: PXLifeCycleProtocol {
    func finishCheckout() -> ((PXResult?) -> Void)? {
        return nil
    }

    func cancelCheckout() -> (() -> Void)? {
        return nil
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
                rejecter("PAYMENT_ERROR", "Something went wrong when retrieving Payment, please retry", nil);
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
            rejecter("PAYMENT_CANCELLED", "Payment was cancelled by the user", nil);
            rejecter = nil;
        }
    } */
}
