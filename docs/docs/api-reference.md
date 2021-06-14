# API Reference 

## Methods

### `createPayment`

```javascript
static async createPayment(options: PaymentOptions): Promise<Payment>
```

This function lets you start a MercadoPago Checkout Flow Activity or UI Controller depending on the platform that is running.

#### Parameters

| Name      | Type                                               | Description                                                            |
| --------- | -------------------------------------------------- | ---------------------------------------------------------------------- |
| `options` | [`PaymentOptions`](https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/types/index.ts#L34)                               | An object which contains the payment configuration.                                                       |

#### Return value

| Name      | Type                                               | Description                                                            |
| --------- | -------------------------------------------------- | ---------------------------------------------------------------------- |
| `payment` | [`Payment`](https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/types/index.ts#L68)                                | An object which contains the payment information.                                                       |

## Type Definitions

### PaymentOptions

- `options`: **[PaymentOptions](https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/index.tsx#L26)**
  - `publicKey`: **string** - Key generated from your account to launch a checkout
  - `preferenceId`: **string** - ID of the payment preference
  - `language`: **[`SupportedLanguages`](https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/types/index.ts#L1)** - Sets the language for the checkout, **IOS only**
  - `advancedOptions`: **[`AdvancedOptions`](https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/types/index.ts#L19)**
    - `amountRowEnabled`: **boolean** - Boolean flag to determine if amount row should be enabled
    - `bankDealsEnabled`: **boolean** - Boolean flag to determine if bank deals should be enabled
    - `productId`: **string** - Custom product ID
  - `trackingOptions`: **[TrackingOptions](https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/types/index.ts#L12)**
    - `sessionId`: **string** - Session ID for checkout tracking, **Android only**

### Payment

- `payment`: **[Payment](https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/index.tsx#L49)**
  - `id`: **string** - ID of the payment
  - `status`: **[`PaymentStatus`](https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/types/index.ts#L57)** - Status of the payment
  - `statusDetail`: **string** - Status of the payment with more details
  - `operationType`: **string | null** - The Type of operation
  - `description`: **string | null** - The description of the payment
  - `currencyId`: **string | null** - The ID of the currency
  - `paymentMethodId`: **string | null** - The ID of the payment method
  - `paymentTypeId`: **string | null** - The ID of the payment type
  - `issuerId`: **string | null** - The ID of the card issuer
  - `installments`: **number | null** - The amount of installments
  - `captured`: **boolean | null** - If the payment is captured
  - `liveMode`: **boolean | null** - If the payment is in live mode
  - `transactionAmount`: **number | null** - The amount of the transaction