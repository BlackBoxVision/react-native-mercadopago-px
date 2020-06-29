import * as React from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

interface ProductCardProps {
  uri: string;
  title: string;
  description: string;
  amount: string | number;
  onPress: any;
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
  onPress,
}) => {
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
        <Button
          onPress={() =>
            onPress && onPress({ uri, title, amount, description })
          }
        >
          Buy shoes
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default ProductCard;
