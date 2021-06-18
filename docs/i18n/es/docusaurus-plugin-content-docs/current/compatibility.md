# Compatibility

Siempre buscamos tener compatibilidad con las mayor cantidad de versiones de `React Native` y `Expo`.

<div class="alert alert--success" role="alert">
  Si encontrás algún inconveniente podes reportarlo y vamos a tratar de hacer lo mejor para ayudarte.
  <br/><br/>
  En caso de necesitar <strong>Soporte Empresarial</strong> para poder ayudarte a resolver algo alineado a los tiempos de tu proyecto, podes contactarnos a: <strong><a href="mailto:hello@blackbox-vision.tech">hello@blackbox-vision.tech</a></strong>
</div>

## React Native

**Nuestro objetivo principal es soportar versiones de [React Native](https://reactnative.dev) >= 0.60.**

Hemos testeado nuestra biblioteca con las siguientes versiones:

- **0.61.X**
- **0.62.X**
- **0.63.X**
- **0.64.X**

## Expo

Nuestro objetivo principal con [Expo](https://expo.io/) es ayudar a proveer la mejor DX que podamos.

### Expo >= SDK 41

Si estás usando la última versión de Expo (SDK 41+), vamos a contribuir desarrollando un `Plugin de configuración` que ayude a simplificar los pasos requeridos para poder soportar iOS. Podes seguir el estado del desarrollo en esta [`tarea`](https://github.com/BlackBoxVision/react-native-mercadopago-px/issues/45).

Por ahora, como no tenemos desarrollo el `Plugin de configuración` los únicos proyectos de Expo que podrán usar nuestra biblioteca serán aquellos que hayan sido `eyectados` o creados mediante el `bare-workflow`.

### Expo < SDK 41

Si estás usando versiones viejas de Expo (SDK < 41), solamente tenemos soporte para proyectos que hayan sido `eyectados` o creados con el `bare-workflow`.

<div class="alert alert--danger" role="alert" style={{ backgroundColor: "#D32F2F" }}>
  En versiones viejas de Expo, la aplicación cliente de Expo para testear tu código es una aplicación standalone. 
  <br /> 
  <br /> 
  Como nuestra biblioteca require código nativo para funcionar, vas a obtener el siguiente error:
  <br /> 
  <br /> 
  <pre>
    null is not an object (evaluating '_reactNative.NativeModules.ReactNativeMercadopagoPx.createPayment')
  </pre>
  Como workaround recomendamos eyectar o migrar el código al bare-workflow.
</div>
