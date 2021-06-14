# Requisites

## Account Credentials

### Generation

As a requisite you'll need the following before integrating the library:

1. A MercadoPago Account
2. A `publicKey` from your MercadoPago Account
3. A `preferenceId` obtained from your servers

If you don't have any of the followings, you can start from here:

1. [Creating a MercadoPago Account](https://www.mercadopago.com.ar/)
2. [Creating a MercadoPago Application](https://applications.mercadopago.com/)
3. [Creating a MercadoPago preference for Checkout Payment](https://www.mercadopago.com.ar/developers/es/reference/preferences/_checkout_preferences/post/)

### Testing

For Testing Purposes we provide a `cURL` example on how to create a Preference:

```bash
curl -X POST \
    'https://api.mercadopago.com/checkout/preferences?access_token=ACCESS_TOKEN' \
    -H 'Content-Type: application/json' \
    -d '{
      "items": [
        {
          "title": "Dummy Item",
          "description": "Multicolor Item",
          "quantity": 1,
          "currency_id": "ARS",
          "unit_price": 10.0
        }
      ],
      "payer": {
        "email": "payer@email.com"
      }
    }'
```

You'll need to replace `ACCESS_TOKEN` with your application account access token.

<div class="alert alert--warning" role="alert">
  Remember using <strong>payer@email.com</strong> payer email to test with the rest of items in this example. <strong>Another email will not work.</strong>
</div> 
<br/>

If you've more doubts you can read more documentation in this portal:

- [MercadoPago Developers](https://developers.mercadopago.com/)
