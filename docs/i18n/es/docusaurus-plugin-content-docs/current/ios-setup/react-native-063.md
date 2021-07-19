# React Native <= 0.63

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

### 3.1. Actualizar la versión de iOS

Vas a tener que modificarlo de la siguiente forma:

```diff
- platform :ios, '9.0'
+ platform :ios, '10.0'
```

### 3.2. Deshabilitar Input and Output Paths

Vas a tener que modificarlo de la siguiente forma:

```diff
platform :ios, '10.0'
+ install! 'cocoapods', :disable_input_output_paths => true
```

### 3.3. Deshabilitar Module Headers en DoubleConversion, glog and Folly

Vas a tener que modificarlo de la siguiente forma:

```diff
- pod 'DoubleConversion', :podspec => '../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
- pod 'glog', :podspec => '../node_modules/react-native/third-party-podspecs/glog.podspec'
- pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec'

+ pod 'DoubleConversion', :podspec => '../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec', :modular_headers => false
+ pod 'glog', :podspec => '../node_modules/react-native/third-party-podspecs/glog.podspec', :modular_headers => false
+ pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec', :modular_headers => false
```

### 3.4. Habilitar Modular Headers

Vas a tener que modificarlo de la siguiente forma:

```diff
use_native_modules!
+ use_modular_headers!
```

## Instalar los Pods

Instalá los `Pods` corriendo el siguiente comando:

```bash
cd ios
pod deintegrate
pod install
```

Con estos pasos completados, deberías poder compilar tu aplicación iOS correctamente.
