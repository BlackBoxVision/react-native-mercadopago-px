# React Native >= 0.64

Realizar el setup de esta biblioteca es un poco más complicado para `iOS` que para `Android`.

## 1. Agregar un Bridging Header

Como está biblioteca esta desarrollada usando `Swift`, vas a necesitar generar un `Bridging Header` desde `Xcode`.

## 2. Modificar el AppDelegate.m

Vas a tener que modificar el delegate de la siguiente forma:

```diff
- self.window.rootViewController = rootViewController;

+ UINavigationController *navController = [[UINavigationController alloc] initWithRootViewController:rootViewController];

+ [navController setToolbarHidden:YES animated:YES];
+ [navController setNavigationBarHidden:YES];

+ self.window.rootViewController = navController;
```

## 3. Actualizar el Podfile

### 3.1. Agregar el SDK de MercadoPago

Vas a necesitar configurar el SDK de MercadoPago como un framework dinámico, para poder hacer esto vas a tener que realizar los siguientes pasos:

1. Instalar la siguiente gema de Ruby: 

```bash
gem install cocoapods-user-defined-build-types
```

2. Ir al `Podfile` y agrega las siguientes lineas al comienzo del mismo:

```cocoapods
plugin 'cocoapods-user-defined-build-types'

enable_user_defined_build_types!
```

3. Siguiendo dentro del `Podfile` en la definición de targets agregar la siguiente linea: 

```cocoapods
pod 'MercadoPagoSDK', :build_type => :dynamic_framework
```

### 3.2. Deshabilitar Flipper

Como nuestra biblioteca require `use_framework` no es compatible con `Flipper`:

```diff
use_flipper!()
+ #use_flipper!()
```

## Instalar los Pods

Instalá los `Pods` corriendo el siguiente comando:

```bash
cd ios
pod deintegrate
pod install
```

Con estos pasos completados, deberías poder compilar tu aplicación iOS correctamente.
