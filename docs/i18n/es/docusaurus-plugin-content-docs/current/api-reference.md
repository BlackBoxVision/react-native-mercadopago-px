# Referencia de API

## Métodos

### `createPayment`

```javascript
static async createPayment(options: PaymentOptions): Promise<Payment>
```

Esta función te permite levantar el checkout de MercadoPago en forma nativa dependiendo de la plataforma donde este corriendo.

#### Argumentos

| Nombre      | Tipo                                               | Descripción                                                            |
| --------- | -------------------------------------------------- | ---------------------------------------------------------------------- |
| `options` | [`PaymentOptions`](https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/types/index.ts#L34)                               | Un objeto el cual contiene la configuración del checkout.                                                      |

#### Valor de Retorno

| Nombre      | Tipo                                               | Descripción                                                            |
| --------- | -------------------------------------------------- | ---------------------------------------------------------------------- |
| `payment` | [`Payment`](https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/types/index.ts#L68)                                | Un objeto que tiene la información de un pago.                                                       |

## Definiciones de Tipos

### PaymentOptions

- `options`: **[PaymentOptions](https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/index.tsx#L26)**
  - `publicKey`: **string** - Llave pública generada en tu cuenta que permite levantar el checkout
  - `preferenceId`: **string** - El ID de la preferencia de pago
  - `language`: **[`SupportedLanguages`](https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/types/index.ts#L1)** - Permite levantar el checkout en un lenguaje especificado. **Solo en IOS**
  - `advancedOptions`: **[`AdvancedOptions`](https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/types/index.ts#L19)**
    - `amountRowEnabled`: **boolean** - Permite habilitar o deshabilitar la fila de monto
    - `bankDealsEnabled`: **boolean** - Permite habilitar o deshabilitar los acuerdos bancarios
    - `productId`: **string** - ID de producto customizado
  - `trackingOptions`: **[TrackingOptions](https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/types/index.ts#L12)**
    - `sessionId`: **string** - ID de sesión para realizar trackeo, **Solo en Android**

### Payment

- `payment`: **[Payment](https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/index.tsx#L49)**
  - `id`: **string** - El ID del pago
  - `status`: **[`PaymentStatus`](https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/types/index.ts#L57)** - El estado del pago
  - `statusDetail`: **string** - El estado del pago con mayor detalle
  - `operationType`: **string | null** - El tipo de operación
  - `description`: **string | null** - La descripción del pago
  - `currencyId`: **string | null** - El ID de la moneda del pago
  - `paymentMethodId`: **string | null** - El ID del medio de pago
  - `paymentTypeId`: **string | null** - El ID del tipo de pago
  - `issuerId`: **string | null** - El ID del proveedor de la tarjeta
  - `installments`: **number | null** - La cantidad de cuotas (solo en caso de pagar con crédito)
  - `captured`: **boolean | null** - Flag que dice si el pago fue capturado
  - `liveMode`: **boolean | null** - Flag que dice si el pago esta en live mode
  - `transactionAmount`: **number | null** - El monto total de la transacción 