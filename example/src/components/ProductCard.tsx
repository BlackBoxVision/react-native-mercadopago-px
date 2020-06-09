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

const formatMoney = (amount: string | number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(amount as any);
};

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
    <Card style={{ margin: 16 }}>
      <Card.Cover source={{ uri }} />
      <Card.Content>
        <Title>
          {title} - {formatMoney(amount)}
        </Title>
        <Paragraph>{description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={startCheckout}>Buy shoes</Button>
      </Card.Actions>
    </Card>
  );
};

export default ProductCard;
