# Uso

## 1. Crear un servicio

Vas a necesitar crear un servicio que permita obtener el `ID de preferencia` de tu propia API (en este ejemplo vamos directo contra la API de MercadoPago por cuestiones de simplicidad):

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

## 2. Inicializar el checkout de MP

Vas a necesitar crear una función que se pase a un componente. Esta función va a ejecutar los siguientes pasos: 

- Invocar la función que llame el servicio para obtener el `ID de preferencia`.
- Inicializar el checkout con tu `llave pública` y el `ID de preferencia`.

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