import * as React from 'react';
import Env from 'react-native-config';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import MercadoPagoCheckout from '@blackbox-vision/react-native-mercadopago-px';

import { getPreferenceId } from '../services';
import { Alert } from 'react-native';

interface ProductCardProps {
  uri: string;
  title: string;
  description: string;
  amount: string | number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  uri,
  title,
  amount,
  description,
}) => {
  const startCheckout = async () => {
    try {
      const preferenceId = await getPreferenceId('payer@email.com', {
        title,
        description,
        quantity: 1,
        currency_id: 'ARS',
        unit_price: amount,
      });

      await MercadoPagoCheckout.createPayment({
        publicKey: Env.MP_PUBLIC_KEY,
        preferenceId,
      });

      Alert.alert(
        'Payment succeed',
        'You will receive an email with the invoice of your product'
      );
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
    <Card style={{ margin: 16 }}>
      <Card.Cover source={{ uri }} />
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={startCheckout}>Buy with MP</Button>
      </Card.Actions>
    </Card>
  );
};

export default ProductCard;
