# Usage

## 1. Create a Service

You'll need to create a service that fetches the `preferenceId` from your own API (in this example we'll go directly to MP API for simplicity): 

```javascript
// mercadopago-service.js
import Env from 'react-native-config';

// You should create the preference server-side, not client-side 
// but we show client-side for the sake of simplicity
export const getPreferenceId = async (payer, ...items) => {
  const response = await fetch(
    `https://api.mercadopago.com/checkout/preferences?access_token=${Env.MP_ACCESS_TOKEN}`,
    {
      method: 'POST',
      body: JSON.stringify({
        items,
        payer: {
          email: payer,
        },
      }),
    }
  );

  const preference = await response.json();

  return preference.id;
};
```

## 2. Initialize MP Checkout

You'll need to setup a callback that will be passed to a component, the callback will perform the following steps: 

- Invoke the previous generated service to obtain the `preferenceId`.
- Initialize checkout with your `publicKey` and the `preferenceId`.

```jsx
import Env from 'react-native-config';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

import MercadoPagoCheckout from '@blackbox-vision/react-native-mercadopago-px';

import * as MercadoPagoService from './mercadopago-service';

import styles from './styles';

export default function App() {
  const [paymentResult, setPaymentResult] = useState(null);

  const startCheckout = async () => {
    try {
      const preferenceId = await MercadoPagoService.getPreferenceId('payer@email.com', {
        title: 'Dummy Item Title',
        description: 'Dummy Item Description',
        quantity: 1,
        currency_id: 'ARS',
        unit_price: 10.0,
      });

      const payment = await MercadoPagoCheckout.createPayment({
        publicKey: Env.MP_PUBLIC_KEY,
        preferenceId,
      });

      setPaymentResult(payment);
    } catch (err) {
      Alert.alert('Something went wrong', err.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={startCheckout}>
        <Text style={styles.text}>Start Payment</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Payment: {JSON.stringify(paymentResult)}</Text>
    </View>
  );
}
```