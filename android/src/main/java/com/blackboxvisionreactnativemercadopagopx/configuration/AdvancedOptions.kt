package com.blackboxvisionreactnativemercadopagopx.configuration

import androidx.annotation.NonNull
import com.blackboxvisionreactnativemercadopagopx.ReactNativeMercadopagoPxModule
import com.facebook.react.bridge.ReadableMap
import com.mercadopago.android.px.configuration.AdvancedConfiguration

open class AdvancedOptions {
    companion object {
        private const val OPTIONS = "advancedOptions";

        private const val PRODUCT_ID = "productId";
        private const val AMOUNT_ROW_ENABLED = "amountRowEnabled";
        private const val BANK_DEALS_ENABLED = "bankDealsEnabled";

        fun build(@NonNull options: ReadableMap): AdvancedConfiguration? {
            if (!options.hasKey(OPTIONS)) {
                return null;
            }

            val advancedOptions = options.getMap(OPTIONS);

            if (advancedOptions == null) {
                return null;
            }

            val advancedBuilder = AdvancedConfiguration.Builder();

            // Set Amount Rows Enabled
            if (advancedOptions.hasKey(AMOUNT_ROW_ENABLED)) {
                val amountRowEnabled = advancedOptions.getBoolean(AMOUNT_ROW_ENABLED);
                advancedBuilder.setAmountRowEnabled(amountRowEnabled);
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