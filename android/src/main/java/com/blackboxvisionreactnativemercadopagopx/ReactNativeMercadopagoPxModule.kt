package com.blackboxvisionreactnativemercadopagopx

import android.content.Context
import androidx.annotation.NonNull
import com.blackboxvisionreactnativemercadopagopx.configuration.AdvancedOptions
import com.blackboxvisionreactnativemercadopagopx.configuration.TrackingOptions
import com.facebook.react.bridge.*
import com.mercadopago.android.px.core.MercadoPagoCheckout

class ReactNativeMercadopagoPxModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    companion object {
        const val PUBLIC_KEY = "publicKey"
        const val PREFERENCE_KEY = "preferenceId"

        const val PAYMENT_ERROR = "mp:payment_error";
        const val PAYMENT_CANCELLED = "mp:payment_cancelled";

        const val PUBLIC_KEY_REQUIRED = "mp:public_key_required";
        const val PREFERENCE_ID_REQUIRED = "mp:preference_id_required";

        const val REQUEST_CODE = 101;
    }

    private var mActivityEventListener = ReactNativeMercadoPagoPxEventListener();

    init {
        reactContext.addActivityEventListener(mActivityEventListener);
    }

    override fun getName(): String {
        return "ReactNativeMercadopagoPx";
    }

    @ReactMethod
    fun createPayment(@NonNull options: ReadableMap, @NonNull promise: Promise) {
        mActivityEventListener.mModulePromise = promise;

        val publicKey = options.getString(PUBLIC_KEY);
        val preferenceId = options.getString(PREFERENCE_KEY);

        if (publicKey == null) {
            promise.reject(PUBLIC_KEY_REQUIRED, "Public key is required for starting MP Checkout");
        }

        if (preferenceId == null) {
            promise.reject(PREFERENCE_ID_REQUIRED, "Preference ID is required for starting MP Checkout");
        }

        val builder = MercadoPagoCheckout.Builder(publicKey as String, preferenceId as String);

        val advancedOptions = AdvancedOptions.build(options);

        if (advancedOptions != null) {
            builder.setAdvancedConfiguration(advancedOptions);
        }

        val trackingOptions = TrackingOptions.build(options);

        if (trackingOptions != null) {
            builder.setTrackingConfiguration(trackingOptions);
        }

        val checkout = builder.build();

        checkout.startPayment(currentActivity as Context, REQUEST_CODE);
    }
}
