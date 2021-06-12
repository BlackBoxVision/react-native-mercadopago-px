(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[601],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2781:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),c=["components"],i={},s={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"Uso",description:"1. Crear un servicio",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/usage.md",sourceDirName:".",slug:"/usage",permalink:"/react-native-mercadopago-px/es/docs/usage",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/usage.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React Native >= 0.64",permalink:"/react-native-mercadopago-px/es/docs/ios-setup/react-native-064"},next:{title:"Referencia de API",permalink:"/react-native-mercadopago-px/es/docs/api-reference"}},u=[{value:"1. Crear un servicio",id:"1-crear-un-servicio",children:[]},{value:"2. Inicializar el checkout de MP",id:"2-inicializar-el-checkout-de-mp",children:[]}],l={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-crear-un-servicio"},"1. Crear un servicio"),(0,o.kt)("p",null,"Vas a necesitar crear un servicio que permita obtener el ",(0,o.kt)("inlineCode",{parentName:"p"},"ID de preferencia")," de tu propia API (en este ejemplo vamos directo contra la API de MercadoPago por cuestiones de simplicidad):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// mercadopago-service.js\nimport Env from 'react-native-config';\n\n// You should create the preference server-side, not client-side \n// but we show client-side for the sake of simplicity\nexport const getPreferenceId = async (payer, ...items) => {\n  const response = await fetch(\n    `https://api.mercadopago.com/checkout/preferences?access_token=${Env.MP_ACCESS_TOKEN}`,\n    {\n      method: 'POST',\n      body: JSON.stringify({\n        items,\n        payer: {\n          email: payer,\n        },\n      }),\n    }\n  );\n\n  const preference = await response.json();\n\n  return preference.id;\n};\n")),(0,o.kt)("h2",{id:"2-inicializar-el-checkout-de-mp"},"2. Inicializar el checkout de MP"),(0,o.kt)("p",null,"Vas a necesitar crear una funci\xf3n que se pase a un componente. Esta funci\xf3n va a ejecutar los siguientes pasos: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Invocar la funci\xf3n que llame el servicio para obtener el ",(0,o.kt)("inlineCode",{parentName:"li"},"ID de preferencia"),"."),(0,o.kt)("li",{parentName:"ul"},"Inicializar el checkout con tu ",(0,o.kt)("inlineCode",{parentName:"li"},"llave p\xfablica")," y el ",(0,o.kt)("inlineCode",{parentName:"li"},"ID de preferencia"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import Env from 'react-native-config';\nimport React, { useState } from 'react';\nimport { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';\n\nimport MercadoPagoCheckout from '@blackbox-vision/react-native-mercadopago-px';\n\nimport * as MercadoPagoService from './mercadopago-service';\n\nimport styles from './styles';\n\nexport default function App() {\n  const [paymentResult, setPaymentResult] = useState(null);\n\n  const startCheckout = async () => {\n    try {\n      const preferenceId = await MercadoPagoService.getPreferenceId('payer@email.com', {\n        title: 'Dummy Item Title',\n        description: 'Dummy Item Description',\n        quantity: 1,\n        currency_id: 'ARS',\n        unit_price: 10.0,\n      });\n\n      const payment = await MercadoPagoCheckout.createPayment({\n        publicKey: Env.MP_PUBLIC_KEY,\n        preferenceId,\n      });\n\n      setPaymentResult(payment);\n    } catch (err) {\n      Alert.alert('Something went wrong', err.message);\n    }\n  };\n\n  return (\n    <View style={styles.container}>\n      <TouchableOpacity onPress={startCheckout}>\n        <Text style={styles.text}>Start Payment</Text>\n      </TouchableOpacity>\n      <Text style={styles.text}>Payment: {JSON.stringify(paymentResult)}</Text>\n    </View>\n  );\n}\n")))}p.isMDXComponent=!0}}]);