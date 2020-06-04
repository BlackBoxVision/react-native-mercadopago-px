import { NativeModules } from 'react-native';

export type TrackingOptions = {
  sessionId?: string;
};

export type AdvancedOptions = {
  /**
   * Boolean flag to determine if amount rows should be enabled
   */
  amountRowsEnabled?: boolean;
  /**
   * Boolean flag to determine if bank deals should be enabled
   */
  bankDealsEnabled?: boolean;
  /**
   * Custom product ID
   */
  productId?: string;
};

export type PaymentOptions = {
  /**
   * Key generated from your account to launch a checkout
   */
  publicKey: string;
  /**
   * ID of the payment preference
   */
  preferenceId: string;
  /**
   * Options to enable user-tracking specific features
   */
  trackingOptions?: TrackingOptions | null;
  /**
   * Options to customize checkout behaviour
   */
  advancedOptions?: AdvancedOptions | null;
};

export type Payment = {
  /**
   * ID of the payment
   */
  id: string;
  /**
   * Status of the payment
   */
  status: string;
};

export type MercadopagoPx = {
  createPayment(options: PaymentOptions): Promise<Payment>;
};

const { ReactNativeMercadopagoPx } = NativeModules;

export default ReactNativeMercadopagoPx as MercadopagoPx;
