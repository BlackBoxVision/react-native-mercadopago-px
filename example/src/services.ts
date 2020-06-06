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
    title: 'Nike Charge Solarsoft',
    description:
      'Meet the new Nike Skateboarding Charge Solarsoft Shoes, they are made of mesh and canvas to give the best breathability and support to your feet.',
    amount: 4739.0,
    uri:
      'https://static.netshoes.com.ar/produtos/zapatillas-nike-skateboarding-charge-solarsoft/59/001-6147-059/001-6147-059_zoom1.jpg?ims=544x',
  },
  {
    id: 1,
    title: 'Nike Air Max Motion 2',
    description:
      'The Nike Air Max Motion 2 Sneakers have a U-shaped Air Max unit in the heel that provides visual impact and a cushioned sensation in the sole of the foot.',
    amount: 4999.0,
    uri:
      'https://static.netshoes.com.ar/produtos/zapatillas-nike-air-max-motion-2/88/001-5873-388/001-5873-388_zoom1.jpg?',
  },
  {
    id: 2,
    title: 'Nike Renew Riva',
    description:
      'The new construction system of the Nike Renew Rival Sneakers completely covers the foot to guarantee complete comfort.',
    amount: 4779.0,
    uri:
      'https://static.netshoes.com.ar/produtos/zapatillas-nike-renew-riva/05/001-5172-005/001-5172-005_zoom1.jpg?',
  },
  {
    id: 3,
    title: 'Nike Air Max Sequent',
    description:
      'The Nike Air Max Sequent 3 Shoe is perfect for short runs when you need plenty of cushioning. An elastic and woven upper moves with your foot with each',
    amount: 5659.0,
    uri:
      'https://static.netshoes.com.ar/produtos/zapatillas-nike-air-max-sequent/59/001-4660-059/001-4660-059_zoom1.jpg?',
  },
];
