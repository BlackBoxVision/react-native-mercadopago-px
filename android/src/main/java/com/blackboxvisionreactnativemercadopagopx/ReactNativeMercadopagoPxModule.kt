package com.blackboxvisionreactnativemercadopagopx

import android.content.Context
import androidx.annotation.NonNull
import com.blackboxvisionreactnativemercadopagopx.configuration.AdvancedOptions
import com.blackboxvisionreactnativemercadopagopx.configuration.TrackingOptions
import com.facebook.react.bridge.*
import com.mercadopago.android.px.core.MercadoPagoCheckout

class ReactNativeMercadopagoPxModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    companion object {
        const val MP_NAME = "ReactNativeMercadopagoPx";

        const val MP_PREFERENCE_KEY = "preferenceId"
        const val MP_PRIVATE_KEY = "privateKey"
        const val MP_PUBLIC_KEY = "publicKey"

        const val MP_REQUEST_CODE = 101;
    }

    private var mActivityEventListener = ReactNativeMercadoPagoPxEventListener();

    init {
        reactContext.addActivityEventListener(mActivityEventListener);
    }

    override fun getName(): String {
        return MP_NAME;
    }

    @ReactMethod
    fun createPayment(@NonNull options: ReadableMap, @NonNull promise: Promise) {
        try {
            mActivityEventListener.mModulePromise = promise;

            if (!options.hasKey(MP_PUBLIC_KEY) || !options.hasKey(MP_PREFERENCE_KEY)) {
                throw Error("publicKey and preferenceId are required for starting MercadoPago checkout");
            }

            val publicKey = options.getString(MP_PUBLIC_KEY);
            val preferenceId = options.getString(MP_PREFERENCE_KEY);

            if (publicKey == null || preferenceId == null) {
                throw Error("publicKey and preferenceId are required for starting MercadoPago checkout");
            }

            val checkoutBuilder = MercadoPagoCheckout.Builder(publicKey, preferenceId);

            val advancedOptions = AdvancedOptions.build(options);
            val trackingOptions = TrackingOptions.build(options);

            if (advancedOptions != null) {
                checkoutBuilder.setAdvancedConfiguration(advancedOptions);
            }

            if (trackingOptions != null) {
                checkoutBuilder.setTrackingConfiguration(trackingOptions);
            }

            if (options.hasKey(MP_PRIVATE_KEY)) {
                val privateKey = options.getString(MP_PRIVATE_KEY);

                if (privateKey != null) {
                    checkoutBuilder.setPrivateKey(privateKey);
                }
            }

            val checkout = checkoutBuilder.build();

            checkout.startPayment(currentActivity as Context, MP_REQUEST_CODE);
        } catch (err: Error) {
            mActivityEventListener.mModulePromise?.reject(err);
        }
    }
}
