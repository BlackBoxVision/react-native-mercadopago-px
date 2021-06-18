# Compatibility

We're always in the search of compatibility with the vast majority versions of `React Native` and `Expo`.

<div class="alert alert--success" role="alert">
  If you found some issue you can report to us and we'll try to do our best to help you figure it out.
  <br/><br/>
  In case you need our team to align to your project times to fix an issue or add a feature, you can contact us for <strong>Enterprise Support</strong> to: <strong><a href="mailto:hello@blackbox-vision.tech">hello@blackbox-vision.tech</a></strong>
</div>

## React Native

Our library main goal is to support [React Native](https://reactnative.dev) versions >= 0.60.

We've tested our library with the following React Native versions:

- **0.61.X**
- **0.62.X**
- **0.63.X**
- **0.64.X**

## Expo

Our main goal with [Expo](https://expo.io/) is to help provide the best DX we can.

### Expo >= SDK 41

If you're using the latest version of Expo (SDK 41+) we're going to contribute developing a `config plugin` to simplify the setup required for iOS. You can keep track of the following [issue](https://github.com/BlackBoxVision/react-native-mercadopago-px/issues/45).

For now, since we don't have support for Expo Config Plugins projects using the `managed-workflow` will not work and will need to use the `bare-workflow` or `eject`.

### Expo < SDK 41

If you're using older versions of Expo, we only provide support for the `bare-workflow` or `ejected` projects.

<div class="alert alert--danger" role="alert" style={{ backgroundColor: "#D32F2F" }}>
  In older Expo versions Client App is an standalone application. Since our library requires native code in order to work, you will get the following error:
  <br /> 
  <br /> 
  <pre>
    null is not an object (evaluating '_reactNative.NativeModules.ReactNativeMercadopagoPx.createPayment')
  </pre>
  We recommend as a workaround to move on your project to the bare-workflow. 
</div>
