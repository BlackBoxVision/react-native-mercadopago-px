(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[535],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6609:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),i=["components"],l={},d={unversionedId:"ios-setup/react-native-063",id:"ios-setup/react-native-063",isDocsHomePage:!1,title:"React Native <= 0.63",description:"Realizar el setup de esta biblioteca es un poco m\xe1s complicado para iOS que para Android.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/ios-setup/react-native-063.md",sourceDirName:"ios-setup",slug:"/ios-setup/react-native-063",permalink:"/es/docs/ios-setup/react-native-063",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ios-setup/react-native-063.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n",permalink:"/es/docs/install"},next:{title:"React Native >= 0.64",permalink:"/es/docs/ios-setup/react-native-064"}},s=[{value:"1. Agregar un Bridging Header",id:"1-agregar-un-bridging-header",children:[]},{value:"2. Modificar el AppDelegate.m",id:"2-modificar-el-appdelegatem",children:[]},{value:"3. Actualizar el Podfile",id:"3-actualizar-el-podfile",children:[{value:"3.1. Actualizar la versi\xf3n de iOS",id:"31-actualizar-la-versi\xf3n-de-ios",children:[]},{value:"3.2. Deshabilitar Input and Output Paths",id:"32-deshabilitar-input-and-output-paths",children:[]},{value:"3.3. Deshabilitar Module Headers en DoubleConversion, glog and Folly",id:"33-deshabilitar-module-headers-en-doubleconversion-glog-and-folly",children:[]},{value:"3.4. Habilitar Modular Headers",id:"34-habilitar-modular-headers",children:[]}]},{value:"Instalar los Pods",id:"instalar-los-pods",children:[]}],p={toc:s};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Realizar el setup de esta biblioteca es un poco m\xe1s complicado para ",(0,o.kt)("inlineCode",{parentName:"p"},"iOS")," que para ",(0,o.kt)("inlineCode",{parentName:"p"},"Android"),"."),(0,o.kt)("h2",{id:"1-agregar-un-bridging-header"},"1. Agregar un Bridging Header"),(0,o.kt)("p",null,"Como est\xe1 biblioteca esta desarrollada usando ",(0,o.kt)("inlineCode",{parentName:"p"},"Swift"),", vas a necesitar generar un ",(0,o.kt)("inlineCode",{parentName:"p"},"Bridging Header")," desde ",(0,o.kt)("inlineCode",{parentName:"p"},"Xcode"),"."),(0,o.kt)("h2",{id:"2-modificar-el-appdelegatem"},"2. Modificar el AppDelegate.m"),(0,o.kt)("p",null,"Vas a tener que modificar el delegate de la siguiente forma:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"- self.window.rootViewController = rootViewController;\n\n+ UINavigationController *navController = [[UINavigationController alloc] initWithRootViewController:rootViewController];\n\n+ [navController setToolbarHidden:YES animated:YES];\n+ [navController setNavigationBarHidden:YES];\n\n+ self.window.rootViewController = navController;\n")),(0,o.kt)("h2",{id:"3-actualizar-el-podfile"},"3. Actualizar el Podfile"),(0,o.kt)("h3",{id:"31-actualizar-la-versi\xf3n-de-ios"},"3.1. Actualizar la versi\xf3n de iOS"),(0,o.kt)("p",null,"Vas a tener que modificarlo de la siguiente forma:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"- platform :ios, '9.0'\n+ platform :ios, '10.0'\n")),(0,o.kt)("h3",{id:"32-deshabilitar-input-and-output-paths"},"3.2. Deshabilitar Input and Output Paths"),(0,o.kt)("p",null,"Vas a tener que modificarlo de la siguiente forma:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"platform :ios, '10.0'\n+ install! 'cocoapods', :disable_input_output_paths => true\n")),(0,o.kt)("h3",{id:"33-deshabilitar-module-headers-en-doubleconversion-glog-and-folly"},"3.3. Deshabilitar Module Headers en DoubleConversion, glog and Folly"),(0,o.kt)("p",null,"Vas a tener que modificarlo de la siguiente forma:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"- pod 'DoubleConversion', :podspec => '../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'\n- pod 'glog', :podspec => '../node_modules/react-native/third-party-podspecs/glog.podspec'\n- pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec'\n\n+ pod 'DoubleConversion', :podspec => '../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec', :modular_headers => false\n+ pod 'glog', :podspec => '../node_modules/react-native/third-party-podspecs/glog.podspec', :modular_headers => false\n+ pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec', :modular_headers => false\n")),(0,o.kt)("h3",{id:"34-habilitar-modular-headers"},"3.4. Habilitar Modular Headers"),(0,o.kt)("p",null,"Vas a tener que modificarlo de la siguiente forma:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"use_native_modules!\n+ use_modular_headers!\n")),(0,o.kt)("h2",{id:"instalar-los-pods"},"Instalar los Pods"),(0,o.kt)("p",null,"Instala los ",(0,o.kt)("inlineCode",{parentName:"p"},"Pods")," corriendo el siguiente comando:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ios\npod deintegrate\npod install\n")),(0,o.kt)("p",null,"Con estos pasos completados, deber\xedas poder compilar tu aplicaci\xf3n iOS correctamente."))}u.isMDXComponent=!0}}]);