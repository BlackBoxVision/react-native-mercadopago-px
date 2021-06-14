# Troubleshooting

## iOS

### It doesn't work with an Expo ejected App

Yes. It does! But to be able to work with `Expo`, you need to do the following adjustment in your `Podfile`.

After the following line:

```objective-c
install! 'cocoapods', :disable_input_output_paths => true
```

Then, run the following commands:

```bash
cd ios
pod deintegrate
pod install
```

After this change you should be able to run your Expo ejected app.

### When running some strings are missing

We've found that this issue is a result of `MercadoPagoSDK` not being exposed as Dynamic Framework. Since it's statically defined, some references get messed up and strings results missing.

To workaround this issue we recommend performing the following steps:

1. Install the following plugin with ruby gem:

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

With those steps, you'll be able to run a build of your app and see that the checkout doesn't loss strings anymore.

## Android

### BackgroundColor turns gray

Some users report an issue with `FlatList` and `ScrollView` getting a backgroundColor gray when using our library. We're currently taking efforts to see if there's an issue in the library. 

As a quick workaround you can fix this by using `contentContainerStyle` in `FlatList` and `ScrollView`.
