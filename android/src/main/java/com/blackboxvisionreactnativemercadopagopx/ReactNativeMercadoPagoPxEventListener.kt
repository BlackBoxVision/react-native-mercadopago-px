package com.blackboxvisionreactnativemercadopagopx

import android.app.Activity
import android.content.Intent
import com.blackboxvisionreactnativemercadopagopx.data.PaymentResult
import com.facebook.react.bridge.ActivityEventListener
import com.facebook.react.bridge.Promise
import com.mercadopago.android.px.core.MercadoPagoCheckout

open class ReactNativeMercadoPagoPxEventListener: ActivityEventListener {
    var mModulePromise: Promise? = null;

    override fun onActivityResult(activity: Activity?, requestCode: Int, resultCode: Int, data: Intent?) {
        try {
            if (requestCode == ReactNativeMercadopagoPxModule.MP_REQUEST_CODE) {
                if (resultCode == Activity.RESULT_CANCELED) {
                    if (data != null && data.extras != null && data.extras.containsKey(MercadoPagoCheckout.EXTRA_ERROR)) {
                        val error = PaymentResult.getError(data);
                        throw Error(error.message);
                    } else {
                        throw Error("Payment was cancelled by the user");
                    }
                }

                if (resultCode == MercadoPagoCheckout.PAYMENT_RESULT_CODE) {
                    if (data == null) {
                        throw Error("Something went wrong with payment");
                    } else if (data.extras != null && data.extras.containsKey(MercadoPagoCheckout.EXTRA_ERROR)) {
                        val error = PaymentResult.getError(data);
                        throw Error(error.message);
                    } else {
                        val payment = PaymentResult.getPayment(data);
                        mModulePromise?.resolve(payment);
                    }
                }
            }
        } catch (err: Error) {
            mModulePromise?.reject(err);
        } finally {
            mModulePromise = null;
        }
    }

    override fun onNewIntent(intent: Intent?) {}
}