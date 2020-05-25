import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import ReactNativeMercadopagoPx from '@blackbox-vision/react-native-mercadopago-px';

export default function App() {
  const [result, setResult] = React.useState<any>(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          // TODO: add values
          ReactNativeMercadopagoPx.createPayment({
            publicKey: 'TEST-ad365c37-8012-4014-84f5-6c895b3f8e0a',
            preferenceId: '150216849-ceed1ee4-8ab9-4449-869f-f4a8565d386f',
            privateKey: null,
            advancedOptions: {
              expressPaymentEnable: true,
              amountRowsEnabled: true,
              bankDealsEnabled: false,
              productId: 'prueba',
            },
          })
            .then((payment) => {
              console.info('Payment', payment);
              setResult(payment);
            })
            .catch((err) => {
              console.info('Error', err);
              Alert.alert('Something went wrong', err.message);
            });
        }}
      >
        <View style={{ padding: 20, backgroundColor: 'blue' }}>
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
