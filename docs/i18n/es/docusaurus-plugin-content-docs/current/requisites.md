# Requisitos

## Credenciales de cuenta

### Generación

Como requisito vas a necesitar tener lo siguiente antes de integrarte con nuestra biblioteca: 

1. Una cuenta en MercadoPago
2. Una `llave pública` asociada a tu cuenta
3. Un `ID de preferencia` obtenido desde tus servidores

Si no tenes nada de esto, podes empezar acá:

1. [Crear una cuenta en MercadoPago](https://www.mercadopago.com.ar)
2. [Crear una aplicación en MercadoPago](https://applications.mercadopago.com)
3. [Crear una preferencia de pago en MercadoPago](https://www.mercadopago.com.ar/developers/es/reference/preferences/_checkout_preferences/post/)

### Pruebas 

A propósitos de pruebas te proveemos un ejemplo de `cURL` sobre como crear una preferencia: 

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

Vas a necesitar reemplazar en `ACCESS_TOKEN` con el token de acceso de la aplicación que hayas generado con tu cuenta de `MercadoPago`. 

<div class="alert alert--warning" role="alert">
  Recordá usar <strong>payer@email.com</strong> para poder probar el ejemplo de `cURL`. <strong>Otro email no va a funcionar</strong>.
</div> 
<br/>

Si tenes más dudas podes leer más documentación en este portal: 

- [Portal de desarrollo de MercadoPago](https://developers.mercadopago.com)