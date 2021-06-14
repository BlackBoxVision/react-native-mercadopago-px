# React Native >= 0.64

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

### 3.1. Add MercadoPagoSDK

We'll need to configure MercadoPago SDK as a `dynamic framework`, in order to that we need to perform the following steps:

1. Install the following plugin with `ruby gem`:

```bash
gem install cocoapods-user-defined-build-types
```

2. Go to your app `Podfile` and add the following lines at the top of the file:

```cocoapods
plugin 'cocoapods-user-defined-build-types'

enable_user_defined_build_types!
```

3. In your app `Podfile` also add the following line in the target definition:

```cocoapods
pod 'MercadoPagoSDK', :build_type => :dynamic_framework
```

### 3.2. Disable Flipper

Since this library requires `use_framework` is not compatible with `Flipper`:

```diff
use_flipper!()
+ #use_flipper!()
```

## 4. Install Pods

Install pods by running the following commands:

```bash
cd ios
pod deintegrate
pod install
```

With those steps fully completed, we should be able to build the IOS app accordangly.
