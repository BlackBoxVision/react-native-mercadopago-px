package com.blackboxvisionreactnativemercadopagopx.configuration

import androidx.annotation.NonNull
import com.blackboxvisionreactnativemercadopagopx.ReactNativeMercadopagoPxModule
import com.facebook.react.bridge.ReadableMap
import com.mercadopago.android.px.configuration.AdvancedConfiguration

open class AdvancedOptions {
    companion object {
        private const val OPTIONS = "advancedOptions";

        private const val EXPRESS_PAYMENT_ENABLE = "expressPaymentEnable";
        private const val AMOUNT_ROWS_ENABLED = "amountRowsEnabled";
        private const val BANK_DEALS_ENABLED = "bankDealsEnabled";
        private const val PRODUCT_ID = "productId";

        fun build(@NonNull options: ReadableMap): AdvancedConfiguration? {
            if (!options.hasKey(OPTIONS)) {
                return null;
            }

            val advancedOptions = options.getMap(OPTIONS);

            if (advancedOptions == null) {
                return null;
            }

            val advancedBuilder = AdvancedConfiguration.Builder();

            // Set Express Payment Enabled
            if (advancedOptions.hasKey(EXPRESS_PAYMENT_ENABLE)) {
                val expressPaymentEnable = advancedOptions.getBoolean(EXPRESS_PAYMENT_ENABLE);
                advancedBuilder.setExpressPaymentEnable(expressPaymentEnable);
            }

            // Set Amount Rows Enabled
            if (advancedOptions.hasKey(AMOUNT_ROWS_ENABLED)) {
                val amountRowsEnabled = advancedOptions.getBoolean(AMOUNT_ROWS_ENABLED);
                advancedBuilder.setAmountRowEnabled(amountRowsEnabled);
            }

            // Set Bank Deals Enabled
            if (advancedOptions.hasKey(BANK_DEALS_ENABLED)) {
                val bankDealsEnabled = advancedOptions.getBoolean(BANK_DEALS_ENABLED);
                advancedBuilder.setBankDealsEnabled(bankDealsEnabled);
            }

            // Set Product ID
            if (advancedOptions.hasKey(PRODUCT_ID)) {
                val productId = advancedOptions.getString(PRODUCT_ID);

                if (productId != null) {
                    advancedBuilder.setProductId(productId);
                }
            }

            return advancedBuilder.build()
        }
    }
}