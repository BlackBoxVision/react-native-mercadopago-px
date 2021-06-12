(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[571],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(d,".").concat(f)]||u[f]||s[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9670:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return s}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={},d={unversionedId:"ios-setup/react-native-064",id:"ios-setup/react-native-064",isDocsHomePage:!1,title:"React Native >= 0.64",description:"Setting up this library is a little bit trickier for IOS rathen than Android.",source:"@site/docs/ios-setup/react-native-064.md",sourceDirName:"ios-setup",slug:"/ios-setup/react-native-064",permalink:"/react-native-mercadopago-px/docs/ios-setup/react-native-064",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ios-setup/react-native-064.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React Native <= 0.63",permalink:"/react-native-mercadopago-px/docs/ios-setup/react-native-063"},next:{title:"Usage",permalink:"/react-native-mercadopago-px/docs/usage"}},p=[{value:"1. Add a Bridging Header",id:"1-add-a-bridging-header",children:[]},{value:"2. Modify AppDelegate.m",id:"2-modify-appdelegatem",children:[]},{value:"3. Update Podfile",id:"3-update-podfile",children:[{value:"3.1. Add MercadoPagoSDK",id:"31-add-mercadopagosdk",children:[]},{value:"3.2. Disable Flipper",id:"32-disable-flipper",children:[]}]},{value:"4. Install Pods",id:"4-install-pods",children:[]}],c={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Setting up this library is a little bit trickier for ",(0,o.kt)("inlineCode",{parentName:"p"},"IOS")," rathen than ",(0,o.kt)("inlineCode",{parentName:"p"},"Android"),"."),(0,o.kt)("h2",{id:"1-add-a-bridging-header"},"1. Add a Bridging Header"),(0,o.kt)("p",null,"Since this library uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Swift"),", you'll need to generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"Bridging Header")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"Xcode"),"."),(0,o.kt)("h2",{id:"2-modify-appdelegatem"},"2. Modify AppDelegate.m"),(0,o.kt)("p",null,"Modify your app delegate like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"- self.window.rootViewController = rootViewController;\n\n+ UINavigationController *navController = [[UINavigationController alloc] initWithRootViewController:rootViewController];\n\n+ [navController setToolbarHidden:YES animated:YES];\n+ [navController setNavigationBarHidden:YES];\n\n+ self.window.rootViewController = navController;\n")),(0,o.kt)("h2",{id:"3-update-podfile"},"3. Update Podfile"),(0,o.kt)("h3",{id:"31-add-mercadopagosdk"},"3.1. Add MercadoPagoSDK"),(0,o.kt)("p",null,"We'll need to configure MercadoPago SDK as a ",(0,o.kt)("inlineCode",{parentName:"p"},"dynamic framework"),", in order to that we need to perform the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the following plugin with ",(0,o.kt)("inlineCode",{parentName:"li"},"ruby gem"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gem install cocoapods-user-defined-build-types\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Go to your app ",(0,o.kt)("inlineCode",{parentName:"li"},"Podfile")," and add the following lines at the top of the file:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cocoapods"},"plugin 'cocoapods-user-defined-build-types'\n\nenable_user_defined_build_types!\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"In your app ",(0,o.kt)("inlineCode",{parentName:"li"},"Podfile")," also add the following line in the target definition:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cocoapods"},"pod 'MercadoPagoSDK', :build_type => :dynamic_framework\n")),(0,o.kt)("h3",{id:"32-disable-flipper"},"3.2. Disable Flipper"),(0,o.kt)("p",null,"Since this library requires ",(0,o.kt)("inlineCode",{parentName:"p"},"use_framework")," is not compatible with ",(0,o.kt)("inlineCode",{parentName:"p"},"Flipper"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"use_flipper!()\n+ #use_flipper!()\n")),(0,o.kt)("h2",{id:"4-install-pods"},"4. Install Pods"),(0,o.kt)("p",null,"Install pods by running the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ios\npod deintegrate\npod install\n")),(0,o.kt)("p",null,"With those steps fully completed, we should be able to build the IOS app accordangly."))}s.isMDXComponent=!0}}]);