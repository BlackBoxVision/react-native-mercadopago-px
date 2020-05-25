# MercadoPago PX RN
 
RN bridge to integrate MercadoPago checkout into a react-native app.

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

You're using react-native for building an app, and you need to integrate MercadoPago checkout in your app.

## Example Usage

```javascript
import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

import MercadoPagoPx from '@blackbox-vision/react-native-mercadopago-px';

export default function App() {
  const [result, setResult] = React.useState<any>(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          MercadoPagoPx.createPayment({
            publicKey: 'yourPublicKey',
            preferenceId: 'yourPreferenceId',
          })
            .then((payment) => {
              setResult(payment);
            })
            .catch((err) => {
              Alert.alert('Something went wrong', err.message);
            });
        }}
      >
        <View style={{ padding: 20 }}>
          <Text>Start Payment</Text>
        </View>
      </TouchableOpacity>
      <Text>Result: {JSON.stringify(result)}</Text>
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

## Issues

Please, open an [issue](https://github.com/BlackBoxVision/react-native-mercadopago-px/issues) following one of the issues templates. We will do our best to fix them.

## Contributing

If you want to contribute to this project see [contributing](https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/CONTRIBUTING.md) for more information.

## License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/LICENSE) for more information.
