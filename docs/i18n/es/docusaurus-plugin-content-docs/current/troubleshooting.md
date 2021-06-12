# Troubleshooting

## iOS

### No funciona en un app eyectada de Expo

Si, funciona! Pero para que funcione adecuadamente con `Expo`, vas a necesitar ajustar el `Podfile` agregando la siguiente linea: 

```objective-c
install! 'cocoapods', :disable_input_output_paths => true
```

Luego corre los siguientes comandos: 

```bash
cd ios
pod deintegrate
pod install
```

Luego de este cambio deberías poder correr tu aplicación Expo eyectada correctamente.

### Al correr en modo release se pierden algunos textos

Hemos encontrado que este inconveniente es el resultado de que el SDK de MercadoPago no es expuesto como un framework dinámico. Al estar definido en forma estática, algunas referencias se quiebran resultando en la pérdida de algunos textos. 

Para corregir este problema debes seguir los siguientes pasos: 

1. Instalar la siguiente gema de Ruby: 

```bash
gem install cocoapods-user-defined-build-types
```

2. Anda al `Podfile` y agrega las siguientes lineas al comienzo del mismo:

```cocoapods
plugin 'cocoapods-user-defined-build-types'

enable_user_defined_build_types!
```

3. Siguiendo dentro del `Podfile` en la definición de targets agrega la siguiente linea: 

```cocoapods
pod 'MercadoPagoSDK', :build_type => :dynamic_framework
```

Con estos pasos, vas a estar listo para poder correr tu aplicación y que algunos textos del checkout no se pierdan más.

## Android

### El color de fondo se torna gris

Algunos usuarios reportaron tenes inconvenientes con elementos que tengan scroll como `FlatList` y `ScrollView`. Como un hotfix para este problema, recomendamos pasarle un `contentContainerStyle` con el color de fondo a usar.
