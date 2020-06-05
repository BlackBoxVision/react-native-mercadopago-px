import Env from 'react-native-config';

export const getPreferenceId = async (payer: string, ...items: any[]) => {
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

export const getProducts = () => [
  {
    id: 0,
    title: 'Nike Skateboarding Charge Solarsoft',
    description:
      'Meet the new Nike Skateboarding Charge Solarsoft Shoes, they are made of mesh and canvas to give the best breathability and support to your feet.',
    amount: 4739.0,
    uri:
      'https://static.netshoes.com.ar/produtos/zapatillas-nike-skateboarding-charge-solarsoft/59/001-6147-059/001-6147-059_zoom1.jpg?ims=544x',
  },
  {
    id: 1,
    title: 'Nike Skateboarding Charge Solarsoft',
    description:
      'Meet the new Nike Skateboarding Charge Solarsoft Shoes, they are made of mesh and canvas to give the best breathability and support to your feet.',
    amount: 4739.0,
    uri:
      'https://static.netshoes.com.ar/produtos/zapatillas-nike-skateboarding-charge-solarsoft/59/001-6147-059/001-6147-059_zoom1.jpg?ims=544x',
  },
  {
    id: 2,
    title: 'Nike Skateboarding Charge Solarsoft',
    description:
      'Meet the new Nike Skateboarding Charge Solarsoft Shoes, they are made of mesh and canvas to give the best breathability and support to your feet.',
    amount: 4739.0,
    uri:
      'https://static.netshoes.com.ar/produtos/zapatillas-nike-skateboarding-charge-solarsoft/59/001-6147-059/001-6147-059_zoom1.jpg?ims=544x',
  },
  {
    id: 3,
    title: 'Nike Skateboarding Charge Solarsoft',
    description:
      'Meet the new Nike Skateboarding Charge Solarsoft Shoes, they are made of mesh and canvas to give the best breathability and support to your feet.',
    amount: 4739.0,
    uri:
      'https://static.netshoes.com.ar/produtos/zapatillas-nike-skateboarding-charge-solarsoft/59/001-6147-059/001-6147-059_zoom1.jpg?ims=544x',
  },
];
