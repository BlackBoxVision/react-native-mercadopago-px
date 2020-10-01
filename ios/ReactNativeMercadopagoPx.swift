import UIKit
import Foundation
import MercadoPagoSDK

@objc(ReactNativeMercadopagoPx)
class ReactNativeMercadopagoPx: NSObject {
    private var navigationController: UINavigationController? = nil;
    
    private var resolver: RCTPromiseResolveBlock? = nil;
    private var rejecter: RCTPromiseRejectBlock? = nil;

    @objc(createPayment:resolver:rejecter:)
    func createPayment(options: NSDictionary, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
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
            
            if bankDealsEnabled != nil {
                config.bankDealsEnabled = bankDealsEnabled!;
            }
                    
            let amountRowEnabled = advancedOptions?[JsOptions.AMOUNT_ROW_ENABLED] as! Bool?;

            if amountRowEnabled != nil {
                config.amountRowEnabled = amountRowEnabled!;
            }
                
            builder.setAdvancedConfiguration(config: config);
        }
        
        // TODO: add support for tracking listener
        // TODO: add support for customizing fonts
        // TODO: add support for customizing colors

        DispatchQueue.main.async {   
            let checkout = MercadoPagoCheckout(builder: builder);

            checkout.start(navigationController: self.navigationController!, lifeCycleProtocol: self);
        };
    }
    
    func setUpNavigationController() -> Void {
        self.navigationController?.setNavigationBarHidden(true, animated: true);
        self.navigationController?.popToRootViewController(animated: true);
    }

    func cleanUp() -> Void {
        self.navigationController = nil;
        self.rejecter = nil;
        self.resolver = nil;
    }
}

extension ReactNativeMercadopagoPx: PXLifeCycleProtocol {
    func finishCheckout() -> ((PXResult?) -> Void)? {
        return ({(_ result: PXResult?) in
            if (result == nil) {
                self.rejecter?(
                    JsErrorTypes.PAYMENT_ERROR,
                    "Something went wrong when retrieving Payment, please retry",
                    nil
                );
            } else {
                var payment: [String : Any?] = [:];
                
                if let pxPayment = (result as? PXPayment?) {
                    // Default Payment values
                    payment[JsPaymentOptions.ID] = pxPayment?.id;
                    payment[JsPaymentOptions.STATUS] = pxPayment?.status;
                    payment[JsPaymentOptions.STATUS_DETAIL] = pxPayment?.statusDetail;
                    
                    // Additional Payment values
                    payment[JsPaymentOptions.DESCRIPTION] = pxPayment?._description;
                    payment[JsPaymentOptions.CURRENCY_ID] = pxPayment?.currencyId;
                    payment[JsPaymentOptions.OPERATION_TYPE] = pxPayment?.operationType;
                    payment[JsPaymentOptions.PAYMENT_METHOD_ID] = pxPayment?.paymentMethodId;
                    payment[JsPaymentOptions.PAYMENT_TYPE_ID] = pxPayment?.paymentTypeId;
                    payment[JsPaymentOptions.ISSUER_ID] = pxPayment?.issuerId;
                    payment[JsPaymentOptions.INSTALLMENTS] = pxPayment?.installments;
                    payment[JsPaymentOptions.CAPTURED] = pxPayment?.captured;
                    payment[JsPaymentOptions.LIVE_MODE] = pxPayment?.liveMode;
                    payment[JsPaymentOptions.TRANSACTION_AMOUNT] = pxPayment?.transactionAmount;
                } else {
                    // Default Payment values
                    payment[JsPaymentOptions.ID] = Int(result?.getPaymentId() ?? "");
                    payment[JsPaymentOptions.STATUS] = result?.getStatus();
                    payment[JsPaymentOptions.STATUS_DETAIL] = result?.getStatusDetail();
                
                    // Additional Payment values
                    // We fill it with empty values to match the JS Object definition
                    payment[JsPaymentOptions.DESCRIPTION] = nil;
                    payment[JsPaymentOptions.CURRENCY_ID] = nil;
                    payment[JsPaymentOptions.OPERATION_TYPE] = nil;
                    payment[JsPaymentOptions.PAYMENT_METHOD_ID] = nil;
                    payment[JsPaymentOptions.PAYMENT_TYPE_ID] = nil;
                    payment[JsPaymentOptions.ISSUER_ID] = nil;
                    payment[JsPaymentOptions.INSTALLMENTS] = nil;
                    payment[JsPaymentOptions.CAPTURED] = nil;
                    payment[JsPaymentOptions.LIVE_MODE] = nil;
                    payment[JsPaymentOptions.TRANSACTION_AMOUNT] = nil;
                }
                
                self.resolver?(payment);
            }
    
            self.setUpNavigationController();
            self.cleanUp();
        });
    }

    func cancelCheckout() -> (() -> Void)? {
        return {
            self.rejecter?(
                JsErrorTypes.PAYMENT_CANCELLED,
                "Payment was cancelled by the user",
                nil
            );
            
            self.setUpNavigationController();
            self.cleanUp();
        };
    }
}

enum JsOptions {
    // Required Options
    static let PUBLIC_KEY = "publicKey";
    static let PREFERENCE_ID = "preferenceId";

    // Additional Options
    static let LANGUAGE = "language";
    static let PRODUCT_ID = "productId";
    static let ADVANCED_OPTIONS = "advancedOptions";
    static let BANK_DEALS_ENABLED = "bankDealsEnabled";
    static let AMOUNT_ROW_ENABLED = "amountRowEnabled";
}

enum JsErrorTypes {
    // Payment Error Types
    static let PAYMENT_ERROR = "mp:payment_error";
    static let PAYMENT_CANCELLED = "mp:payment_cancelled";
    
    // Required Options Error Types
    static let PUBLIC_KEY_REQUIRED = "mp:public_key_required";
    static let PREFERENCE_ID_REQUIRED = "mp:preference_id_required";
}

enum JsPaymentOptions {
    // Default
    static let ID = "id";
    static let STATUS = "status";
    static let STATUS_DETAIL = "statusDetail";
    
    // Additional
    static let DESCRIPTION = "description";
    static let CURRENCY_ID = "currencyId";
    static let OPERATION_TYPE = "operationType";
    static let PAYMENT_METHOD_ID = "paymentMethodId";
    static let PAYMENT_TYPE_ID = "paymentTypeId";
    static let ISSUER_ID = "issuerId";
    static let INSTALLMENTS = "installments";
    static let CAPTURED = "captured";
    static let LIVE_MODE = "liveMode";
    static let TRANSACTION_AMOUNT = "transactionAmount";
}
