import * as React from 'react';
import Env from 'react-native-config';
import { Appbar } from 'react-native-paper';
import { FlatList, SafeAreaView, Alert } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import MercadoPagoCheckout from '@blackbox-vision/react-native-mercadopago-px';

import { getProducts, getPreferenceId } from './services';

import ProductCard from './components/ProductCard';
import StatusBar from './components/StatusBar';

export default function App() {
  const products = getProducts();

  const startCheckout = async ({ title, description, amount }: any) => {
    try {
      const preferenceId = await getPreferenceId('payer@email.com', {
        title,
        description,
        quantity: 1,
        currency_id: 'ARS',
        unit_price: amount,
      });

      const payment = await MercadoPagoCheckout.createPayment({
        publicKey: Env.MP_PUBLIC_KEY,
        preferenceId,
      });

      if (payment.status === 'in_process') {
        Alert.alert(
          'Payment In Progress',
          'You will receive an email when the payment of the product is complete'
        );
      } else {
        if (payment.status === 'rejected') {
          Alert.alert(
            'Payment Rejected',
            'Please retry payment. If error persists contact support'
          );
        }

        Alert.alert(
          'Payment succeed',
          'You will receive an email with the invoice of your product'
        );
      }
    } catch (err) {
      if (err.message.includes('cancel')) {
        Alert.alert(
          'Payment was cancelled',
          'You can keep checking out our products'
        );
      } else {
        Alert.alert(
          'Payment checkout issue',
          'Please retry payment. If error persists contact support'
        );
      }
    }
  };

  return (
    <PaperProvider>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <Appbar>
          <Appbar.Content title="Products" />
        </Appbar>
        <FlatList
          data={products}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <ProductCard {...item} onPress={startCheckout} />
          )}
        />
      </SafeAreaView>
    </PaperProvider>
  );
}
