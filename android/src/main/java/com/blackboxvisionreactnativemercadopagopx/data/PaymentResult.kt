package com.blackboxvisionreactnativemercadopagopx.data

import android.content.Intent
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap
import com.mercadopago.android.px.core.MercadoPagoCheckout
import com.mercadopago.android.px.model.Payment
import com.mercadopago.android.px.model.exceptions.MercadoPagoError

open class PaymentResult {
    companion object {
        private const val ID = "id";
        private const val STATUS = "status";

        fun getPayment(data: Intent?): WritableMap {
            val paymentData = data?.getSerializableExtra(MercadoPagoCheckout.EXTRA_PAYMENT_RESULT) as Payment;
            val payment = Arguments.createMap();

            payment.putString(ID, paymentData.id.toString());
            payment.putString(STATUS, paymentData.paymentStatus);

            // TODO: add more fields

            return payment;
        }

        fun getError(data: Intent?): MercadoPagoError {
            return data?.getSerializableExtra(MercadoPagoCheckout.EXTRA_ERROR) as MercadoPagoError
        }
    }
}