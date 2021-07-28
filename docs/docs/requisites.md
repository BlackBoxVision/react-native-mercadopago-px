# Requisites

## Account Credentials

### Generation

You'll need to meet the following requisites before integrating the library:

1. Owning a MercadoPago Account
2. Having a `publicKey` from your MercadoPago Account
3. Having a `preferenceId` obtained from your servers

If you don't meet any of the previous requisites, you can start from here:

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

<div class="alert alert--warning" role="alert" style={{ backgroundColor: '#FFD026', color: '#002b40' }}>
  Remember using <strong>payer@email.com</strong> payer email to test with the rest of the items in this example. <strong>Any other email will not work.</strong>
</div> 
<br/>

If you have any more doubts you can read the documentation in this portal:

- [MercadoPago Developers](https://developers.mercadopago.com/)
