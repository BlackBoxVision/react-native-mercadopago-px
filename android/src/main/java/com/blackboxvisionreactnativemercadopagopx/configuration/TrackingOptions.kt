package com.blackboxvisionreactnativemercadopagopx.configuration

import androidx.annotation.NonNull
import com.facebook.react.bridge.ReadableMap
import com.mercadopago.android.px.configuration.TrackingConfiguration

open class TrackingOptions {
    companion object {
        private const val OPTIONS = "trackingOptions";
        private const val SESSION_ID = "sessionId"

        fun build(@NonNull options: ReadableMap): TrackingConfiguration? {
            if (!options.hasKey(OPTIONS)) {
                return null;
            }

            val trackingOptions = options.getMap(OPTIONS);

            if (trackingOptions == null) {
                return null;
            }

            val trackingBuilder = TrackingConfiguration.Builder();

            if (trackingOptions.hasKey(SESSION_ID)) {
                val sessionId = trackingOptions.getString(SESSION_ID);

                if (sessionId != null) {
                    trackingBuilder.sessionId(sessionId);
                }
            }

            return trackingBuilder.build()
        }
    }
}