# Solución de problemas

## iOS

### No funciona en un app eyectada de Expo

¡Si, funciona! Pero para que funcione adecuadamente con `Expo`, vas a necesitar ajustar el `Podfile` agregando la siguiente linea: 

```objective-c
install! 'cocoapods', :disable_input_output_paths => true
```

Ejecutá los siguientes comandos: 

```bash
cd ios
pod deintegrate
pod install
```

Luego de este cambio deberías poder correr tu aplicación Expo eyectada correctamente.

### Al correr en modo release se pierden algunos textos

Hemos encontrado que este inconveniente es el resultado de que el SDK de MercadoPago no es expuesto como un framework dinámico. Al estar definido en forma estática, algunas referencias se quiebran resultando en la pérdida de algunos textos. 

Para corregir este problema debés seguir los siguientes pasos: 

1. Instalar la siguiente gema de Ruby: 

```bash
gem install cocoapods-user-defined-build-types
```

2. En el `Podfile` agregá las siguientes lineas al comienzo del mismo:

```cocoapods
plugin 'cocoapods-user-defined-build-types'

enable_user_defined_build_types!
```

3. Siguiendo dentro del `Podfile` en la definición de targets agregá la siguiente linea: 

```cocoapods
pod 'MercadoPagoSDK', :build_type => :dynamic_framework
```

Con estos pasos, vas a poder ejecutar tu aplicación y los textos del checkout se verán correctamente.

## Android

### El color de fondo se torna gris

Algunos usuarios reportaron tales inconvenientes con elementos que poseen scroll como `FlatList` y `ScrollView`. Como un hotfix para este problema, recomendamos pasarle un `contentContainerStyle` con el color de fondo a usar.
