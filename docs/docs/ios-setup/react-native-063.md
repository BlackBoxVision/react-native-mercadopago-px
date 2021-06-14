# React Native <= 0.63

Setting up this library is a little bit trickier for `IOS` rathen than `Android`.

## 1. Add a Bridging Header

Since this library uses `Swift`, you'll need to generate a `Bridging Header` from `Xcode`.

## 2. Modify AppDelegate.m

Modify your app delegate like the following:

```diff
- self.window.rootViewController = rootViewController;

+ UINavigationController *navController = [[UINavigationController alloc] initWithRootViewController:rootViewController];

+ [navController setToolbarHidden:YES animated:YES];
+ [navController setNavigationBarHidden:YES];

+ self.window.rootViewController = navController;
```

## 3. Update Podfile

### 3.1. Update IOS Target

Modify the IOS target like the following:

```diff
- platform :ios, '9.0'
+ platform :ios, '10.0'
```

### 3.2. Disable Input and Output Paths

Add disable input output paths like the following:

```diff
platform :ios, '10.0'
+ install! 'cocoapods', :disable_input_output_paths => true
```

### 3.3. Disable Module Headers in DoubleConversion, glog and Folly

Disable module headers for DoubleConversion, Glog and Folly like the following:

```diff
- pod 'DoubleConversion', :podspec => '../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
- pod 'glog', :podspec => '../node_modules/react-native/third-party-podspecs/glog.podspec'
- pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec'

+ pod 'DoubleConversion', :podspec => '../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec', :modular_headers => false
+ pod 'glog', :podspec => '../node_modules/react-native/third-party-podspecs/glog.podspec', :modular_headers => false
+ pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec', :modular_headers => false
```

### 3.4. Enable Modular Headers

Add support for module headers like the following:

```diff
use_native_modules!
+ use_modular_headers!
```

## Install Pods

Install pods by running the following commands:

```bash
cd ios
pod deintegrate
pod install
```

With those steps fully completed, we should be able to build the IOS app accordangly.
