(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2307:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],c={},l={unversionedId:"requisites",id:"requisites",isDocsHomePage:!1,title:"Requisitos",description:"Credenciales de cuenta",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/requisites.md",sourceDirName:".",slug:"/requisites",permalink:"/react-native-mercadopago-px/es/docs/requisites",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/requisites.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n",permalink:"/react-native-mercadopago-px/es/docs/intro"},next:{title:"Instalaci\xf3n",permalink:"/react-native-mercadopago-px/es/docs/install"}},p=[{value:"Credenciales de cuenta",id:"credenciales-de-cuenta",children:[{value:"Generaci\xf3n",id:"generaci\xf3n",children:[]},{value:"Pruebas",id:"pruebas",children:[]}]}],s={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"credenciales-de-cuenta"},"Credenciales de cuenta"),(0,o.kt)("h3",{id:"generaci\xf3n"},"Generaci\xf3n"),(0,o.kt)("p",null,"Como requisito vas a necesitar tener lo siguiente antes de integrarte con nuestra biblioteca: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Una cuenta en MercadoPago"),(0,o.kt)("li",{parentName:"ol"},"Una ",(0,o.kt)("inlineCode",{parentName:"li"},"llave p\xfablica")," asociada a tu cuenta"),(0,o.kt)("li",{parentName:"ol"},"Un ",(0,o.kt)("inlineCode",{parentName:"li"},"ID de preferencia")," obtenido desde tus servidores")),(0,o.kt)("p",null,"Si no tenes nada de esto, podes empezar ac\xe1:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.mercadopago.com.ar"},"Crear una cuenta en MercadoPago")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://applications.mercadopago.com"},"Crear una aplicaci\xf3n en MercadoPago")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.mercadopago.com.ar/developers/es/reference/preferences/_checkout_preferences/post/"},"Crear una preferencia de pago en MercadoPago"))),(0,o.kt)("h3",{id:"pruebas"},"Pruebas"),(0,o.kt)("p",null,"A prop\xf3sitos de pruebas te proveemos un ejemplo de ",(0,o.kt)("inlineCode",{parentName:"p"},"cURL")," sobre como crear una preferencia: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n    \'https://api.mercadopago.com/checkout/preferences?access_token=ACCESS_TOKEN\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n      "items": [\n        {\n          "title": "Dummy Item",\n          "description": "Multicolor Item",\n          "quantity": 1,\n          "currency_id": "ARS",\n          "unit_price": 10.0\n        }\n      ],\n      "payer": {\n        "email": "payer@email.com"\n      }\n    }\'\n')),(0,o.kt)("p",null,"Vas a necesitar reemplazar en ",(0,o.kt)("inlineCode",{parentName:"p"},"ACCESS_TOKEN")," con el token de acceso de la aplicaci\xf3n que hayas generado con tu cuenta de ",(0,o.kt)("inlineCode",{parentName:"p"},"MercadoPago"),". "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Aviso:")," record\xe1 usar ",(0,o.kt)("inlineCode",{parentName:"p"},"payer@email.com")," para poder probar el ejemplo de ",(0,o.kt)("inlineCode",{parentName:"p"},"cURL"),". ",(0,o.kt)("strong",{parentName:"p"},"Otro email no va a funcionar"),"."),(0,o.kt)("p",null,"Si tenes m\xe1s dudas podes leer m\xe1s documentaci\xf3n en este portal: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.mercadopago.com"},"Portal de desarrollo de MercadoPago"))))}u.isMDXComponent=!0}}]);