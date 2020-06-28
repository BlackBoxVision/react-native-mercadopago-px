import { NativeModules } from 'react-native';

export type SupportedLanguages =
  | 'es'
  | 'es-MX'
  | 'es-CO'
  | 'es-UY'
  | 'es-PE'
  | 'es-VE'
  | 'pt'
  | 'pt-BR'
  | 'en';

export type TrackingOptions = {
  /**
   * Session ID for checkout tracking. Only android support.
   */
  sessionId?: string;
};

export type AdvancedOptions = {
  /**
   * Boolean flag to determine if amount row should be enabled
   */
  amountRowEnabled?: boolean;
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
   * Sets the language for the checkout
   */
  language?: SupportedLanguages;
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
  id: number;
  /**
   * Status of the payment
   */
  status: string;
  /**
   * Status of the payment with more details
   */
  statusDetail: string;
  /**
   * The Type of operation
   */
  operationType?: string | null;
  /**
   * The description of the payment
   */
  description?: string | null;
  /**
   * The ID of the currency
   */
  currencyId?: string | null;
  /**
   * The ID of the payment method
   */
  paymentMethodId?: string | null;
  /**
   * The ID of the payment type
   */
  paymentTypeId?: string | null;
  /**
   * The ID of the card issuer
   */
  issuerId?: string | null;
  /**
   * The amount of installments
   */
  installments?: number | null;
  /**
   * If the payment is captured
   */
  captured?: Boolean | null;
  /**
   * If the payment is in live mode
   */
  liveMode?: Boolean | null;
  /**
   * The amount of the transaction
   */
  transactionAmount?: number | null;
};

export type MercadopagoPx = {
  /**
   * Method that lets you start an instance of MP Checkout to generate a payment in guest mode
   *
   * @param options - necessary payment options to start checkout
   */
  createPayment(options: PaymentOptions): Promise<Payment>;
};

const { ReactNativeMercadopagoPx } = NativeModules;

export default ReactNativeMercadopagoPx as MercadopagoPx;
