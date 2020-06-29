package com.blackboxvisionreactnativemercadopagopx

import android.app.Activity
import android.content.Intent
import com.blackboxvisionreactnativemercadopagopx.data.PaymentResult
import com.facebook.react.bridge.ActivityEventListener
import com.facebook.react.bridge.Promise
import com.mercadopago.android.px.core.MercadoPagoCheckout
import com.mercadopago.android.px.model.exceptions.MercadoPagoError

open class ReactNativeMercadoPagoPxEventListener: ActivityEventListener {
    var mModulePromise: Promise? = null;

    // TODO: review how to simplify this code
    override fun onActivityResult(activity: Activity?, requestCode: Int, resultCode: Int, data: Intent?) {
        if (requestCode == ReactNativeMercadopagoPxModule.REQUEST_CODE) {
            if (resultCode == Activity.RESULT_CANCELED) {
                if (data != null && data.extras != null && data.extras.containsKey(MercadoPagoCheckout.EXTRA_ERROR)) {
                    val error = data?.getSerializableExtra(MercadoPagoCheckout.EXTRA_ERROR) as MercadoPagoError
                    mModulePromise?.reject(ReactNativeMercadopagoPxModule.PAYMENT_ERROR, error.message);
                } else {
                    mModulePromise?.reject(ReactNativeMercadopagoPxModule.PAYMENT_CANCELLED, "Payment was cancelled by the user");
                }
            }

            if (resultCode == MercadoPagoCheckout.PAYMENT_RESULT_CODE) {
                if (data == null) {
                    mModulePromise?.reject(ReactNativeMercadopagoPxModule.PAYMENT_ERROR, "Something went wrong when retrieving Payment, please retry");
                } else if (data.extras != null && data.extras.containsKey(MercadoPagoCheckout.EXTRA_ERROR)) {
                    val error = data?.getSerializableExtra(MercadoPagoCheckout.EXTRA_ERROR) as MercadoPagoError
                    mModulePromise?.reject(ReactNativeMercadopagoPxModule.PAYMENT_ERROR, error.message);
                } else {
                    val payment = PaymentResult.getPayment(data);
                    mModulePromise?.resolve(payment);
                }
            }
        }

        mModulePromise = null;
    }

    override fun onNewIntent(intent: Intent?) {}
}