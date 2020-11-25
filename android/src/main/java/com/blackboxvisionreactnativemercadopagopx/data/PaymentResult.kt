package com.blackboxvisionreactnativemercadopagopx.data

import android.content.Intent
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap
import com.mercadopago.android.px.core.MercadoPagoCheckout
import com.mercadopago.android.px.model.Payment

open class PaymentResult {
    companion object {
        private const val ID = "id";
        private const val STATUS = "status";
        private const val STATUS_DETAIL = "statusDetail";
        private const val DESCRIPTION = "description"
        private const val CURRENCY_ID = "currencyId"
        private const val OPERATION_TYPE = "operationType"
        private const val PAYMENT_METHOD_ID = "paymentMethodId"
        private const val PAYMENT_TYPE_ID = "paymentTypeId"
        private const val ISSUER_ID = "issuerId"
        private const val INSTALLMENTS = "installments"
        private const val CAPTURED = "captured"
        private const val LIVE_MODE = "liveMode"
        private const val TRANSACTION_AMOUNT = "transactionAmount"

        fun getPayment(data: Intent?): WritableMap {
            val pxPayment = data?.getSerializableExtra(MercadoPagoCheckout.EXTRA_PAYMENT_RESULT) as Payment?;
            val payment = Arguments.createMap();

            // Default Payment values
            if (pxPayment != null) {
                if (pxPayment.id != null) {
                    payment.putString(ID, pxPayment.id!!.toString());
                } else {
                    payment.putNull(ID);
                }

                if (pxPayment.paymentStatus != null) {
                    payment.putString(STATUS, pxPayment.paymentStatus);
                } else {
                    payment.putNull(STATUS);
                }

                if (pxPayment.paymentStatusDetail != null) {
                    payment.putString(STATUS_DETAIL, pxPayment.paymentStatusDetail);
                } else {
                    payment.putNull(STATUS_DETAIL);
                }

                // Additional Payment values
                if (pxPayment.description != null) {
                    payment.putString(DESCRIPTION, pxPayment.description);
                } else {
                    payment.putNull(DESCRIPTION);
                }

                if (pxPayment.currencyId != null) {
                    payment.putString(CURRENCY_ID, pxPayment.currencyId);
                } else {
                    payment.putNull(CURRENCY_ID);
                }

                if (pxPayment.operationType != null) {
                    payment.putString(OPERATION_TYPE, pxPayment.operationType);
                } else {
                    payment.putNull(OPERATION_TYPE);
                }

                if (pxPayment.paymentMethodId != null) {
                    payment.putString(PAYMENT_METHOD_ID, pxPayment.paymentMethodId);
                } else {
                    payment.putNull(PAYMENT_METHOD_ID);
                }

                if (pxPayment.paymentTypeId != null) {
                    payment.putString(PAYMENT_TYPE_ID, pxPayment.paymentTypeId);
                } else {
                    payment.putNull(PAYMENT_TYPE_ID);
                }

                if (pxPayment.issuerId != null) {
                    payment.putString(ISSUER_ID, pxPayment.issuerId);
                } else {
                    payment.putNull(ISSUER_ID);
                }

                if (pxPayment.installments != null) {
                    payment.putInt(INSTALLMENTS, pxPayment.installments);
                } else {
                    payment.putNull(INSTALLMENTS);
                }

                if (pxPayment.captured != null) {
                    payment.putBoolean(CAPTURED, pxPayment.captured);
                } else {
                    payment.putNull(CAPTURED);
                }

                if (pxPayment.liveMode != null) {
                    payment.putBoolean(LIVE_MODE, pxPayment.liveMode);
                } else {
                    payment.putNull(LIVE_MODE);
                }

                if (pxPayment.transactionAmount != null) {
                    payment.putDouble(TRANSACTION_AMOUNT, pxPayment.transactionAmount.toDouble());
                } else {
                    payment.putNull(TRANSACTION_AMOUNT);
                }
            }

            return payment;
        }
    }
}
