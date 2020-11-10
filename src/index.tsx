import { NativeModules } from 'react-native';

import { MercadopagoPx, PaymentOptions } from './types';

const RNMercadoPagoPx: MercadopagoPx = {
  createPayment: async (options: PaymentOptions) => {
    if (!options) {
      throw new Error('options are required');
    }

    if (!options.preferenceId) {
      throw new Error('preferenceId is required for starting MP Checkout');
    }

    if (!options.publicKey) {
      throw new Error('publicKey is required for starting MP Checkout');
    }

    return await NativeModules.ReactNativeMercadopagoPx.createPayment(options);
  },
};

export default RNMercadoPagoPx;
