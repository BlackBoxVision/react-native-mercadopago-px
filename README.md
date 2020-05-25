# MercadoPago PX RN

RN bridge to integrate `MercadoPago` checkout into a RN app.

## Why this exists?

Currently, `MercadoPago` only brings OSS support for Native SDKs. There's currently not support for RN. Our library uses both SDKs, android and ios, to enable a bridge for calling MercadoPago Checkout from RN land.

We previously developed [react-native-mercadopago-checkout](https://github.com/BlackBoxVision/react-native-mercadopago-checkout). This newer library will suppose a deprecation of the older repository, we don't have plans for maintainance.

## Compatibility

Our package currently supports apps with **RN >= 0.61.5**. `We don't have a plan currently to support olders ones, but if you need we're open to support it.`

## Pre Requisites

As a pre requisite you'll need the following before integrating the library:

1. A MercadoPago Account
2. A `publicKey` from your MercadoPago Account
3. A `preferenceId` obtained from your servers

If you don't have any of the followings, you can start from here:

1. [Creating a MercadoPago Account](https://www.mercadopago.com.ar/)
2. [Creating a MercadoPago Application](https://applications.mercadopago.com/)
3. [Creating a MercadoPago preference for Checkout Payment](https://www.mercadopago.com.ar/developers/es/reference/preferences/_checkout_preferences/post/)

If you've more doubts you can read more documentation in this portal:

- [MercadoPago Developers](https://developers.mercadopago.com/)

## Install

You can install this library via NPM or YARN.

### NPM

```bash
npm i @blackbox-vision/react-native-mercadopago-px
```

### YARN

```bash
yarn add @blackbox-vision/react-native-mercadopago-px
```

## Use case

You're using RN for building an app, and you need to integrate MercadoPago checkout in your app.

## Example Usage

```javascript
import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

import MercadoPagoPx from '@blackbox-vision/react-native-mercadopago-px';

export default function App() {
  const [payment, setPayment] = React.useState(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={async () => {
          try {
            const payment = await MercadoPagoPx.createPayment({
              publicKey: 'yourPublicKey',
              preferenceId: 'yourPreferenceId',
            });

            setPayment(payment);
          } catch (err) {
            Alert.alert('Something went wrong', err.message);
          }
        }}
      >
        <View style={{ padding: 20 }}>
          <Text>Start Payment</Text>
        </View>
      </TouchableOpacity>
      <View style={{ padding: 20 }}>
        <Text>Payment: {JSON.stringify(payment)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## API

### createPayment

The function lets you start a MercadoPago Checkout Flow Activity/UI Controller depending on the platform that is running. 

#### Parameters

The function receives the following parameters:

- `options`: [PaymentOptions](https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/index.tsx#L26)
    - `publicKey`: string
    - `preferenceId`: string
    - `privateKey`: string
    - `advancedOptions`
        -  `expressPaymentEnable`: boolean
        -  `amountRowsEnabled`: boolean
        -  `bankDealsEnabled`: boolean
        -  `productId`: string
    - `trackingOptions`
        - `sessionId`: string

#### Return Value

The `createPayment` function is async, its return value will be always a `Promise`, but if you unwrap the promise contents you will access the following result object:

- `payment`: [Payment](https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/index.tsx#L49)
    - `id`: string
    - `status`: string

## Issues

Please, open an [issue](https://github.com/BlackBoxVision/react-native-mercadopago-px/issues) following one of the issues templates. We will do our best to fix them.

## Contributing

If you want to contribute to this project see [contributing](https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/CONTRIBUTING.md) for more information.

## License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/LICENSE) for more information.
