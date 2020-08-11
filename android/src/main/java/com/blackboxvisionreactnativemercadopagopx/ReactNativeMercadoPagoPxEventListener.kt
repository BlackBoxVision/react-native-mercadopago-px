package com.blackboxvisionreactnativemercadopagopx

import android.app.Activity
import android.content.Intent
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ActivityEventListener
import com.mercadopago.android.px.core.MercadoPagoCheckout
import com.mercadopago.android.px.model.exceptions.MercadoPagoError

import com.blackboxvisionreactnativemercadopagopx.data.PaymentResult

open class ReactNativeMercadoPagoPxEventListener: ActivityEventListener {
    var mModulePromise: Promise? = null;

    override fun onActivityResult(activity: Activity?, requestCode: Int, resultCode: Int, data: Intent?) {
        if (requestCode == ReactNativeMercadopagoPxModule.REQUEST_CODE) {
            if (resultCode == MercadoPagoCheckout.PAYMENT_RESULT_CODE) {
              val payment = PaymentResult.getPayment(data);
              mModulePromise?.resolve(payment);
            } else if (resultCode == Activity.RESULT_CANCELED) {
              if (data != null && data.extras?.containsKey(MercadoPagoCheckout.EXTRA_ERROR) as Boolean) {
                val error = data.getSerializableExtra(MercadoPagoCheckout.EXTRA_ERROR) as MercadoPagoError
                mModulePromise?.reject(ReactNativeMercadopagoPxModule.PAYMENT_ERROR, error.message);
              } else {
                mModulePromise?.reject(ReactNativeMercadopagoPxModule.PAYMENT_CANCELLED, "Payment was cancelled by the user");
              }
            } else {
              mModulePromise?.reject(ReactNativeMercadopagoPxModule.PAYMENT_ERROR, "Something went wrong when retrieving Payment, please retry");
            }
        }

        mModulePromise = null;
    }

    override fun onNewIntent(intent: Intent?) {}
}
