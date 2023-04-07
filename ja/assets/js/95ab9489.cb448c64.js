"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[26200],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},k="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),k=u(n),m=i,d=k["".concat(p,".").concat(m)]||k[m]||c[m]||o;return n?a.createElement(d,r(r({ref:e},s),{},{components:n})):a.createElement(d,r({ref:e},s))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[k]="string"==typeof t?t:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8023:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const o={id:"quick-start",title:"Quick Start",sidebar_label:"Quick Start",original_id:"quick-start"},r=void 0,l={unversionedId:"getting-started/quick-start",id:"version-1.1.0/getting-started/quick-start",title:"Quick Start",description:"kintone UI Component \u3068\u306f\uff1f",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-1.1.0/getting-started/quick-start.md",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/kuc-docusaurus-v2/ja/docs/1.1.0/getting-started/quick-start",draft:!1,tags:[],version:"1.1.0",frontMatter:{id:"quick-start",title:"Quick Start",sidebar_label:"Quick Start",original_id:"quick-start"},sidebar:"version-1.1.0-docs",next:{title:"Button",permalink:"/kuc-docusaurus-v2/ja/docs/1.1.0/components/desktop/button"}},p={},u=[{value:"kintone UI Component \u3068\u306f\uff1f",id:"kintone-ui-component-\u3068\u306f",level:2},{value:"Desktop \u7528\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u4f8b",id:"desktop-\u7528\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u4f8b",level:3},{value:"Mobile \u7528\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u4f8b",id:"mobile-\u7528\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u4f8b",level:3},{value:"\u4e0b\u6e96\u5099\uff1a\u30a2\u30d7\u30ea\u4f5c\u6210",id:"\u4e0b\u6e96\u5099\u30a2\u30d7\u30ea\u4f5c\u6210",level:2},{value:"\u5c0e\u5165\u3068\u5b9f\u88c5\u65b9\u6cd5",id:"\u5c0e\u5165\u3068\u5b9f\u88c5\u65b9\u6cd5",level:2},{value:"UMD \u3092\u5229\u7528\u3059\u308b",id:"umd-\u3092\u5229\u7528\u3059\u308b",level:3},{value:"CDN \u3092\u5229\u7528\u3059\u308b",id:"cdn-\u3092\u5229\u7528\u3059\u308b",level:3},{value:"npm \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5229\u7528\u3059\u308b",id:"npm-\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5229\u7528\u3059\u308b",level:3},{value:"\u30d6\u30e9\u30a6\u30b6\u5bfe\u5fdc\u72b6\u6cc1",id:"\u30d6\u30e9\u30a6\u30b6\u5bfe\u5fdc\u72b6\u6cc1",level:2}],s={toc:u},k="wrapper";function c(t){let{components:e,...o}=t;return(0,i.kt)(k,(0,a.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"kintone-ui-component-\u3068\u306f"},"kintone UI Component \u3068\u306f\uff1f"),(0,i.kt)("p",null,"kintone UI Component \u306f\u3001kintone \u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3084\u30d7\u30e9\u30b0\u30a4\u30f3\u306e UI \u958b\u767a\u3092\u652f\u63f4\u3059\u308b\u305f\u3081\u306e UI Component \u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002",(0,i.kt)("br",null),"\n\u4ee5\u4e0b\u306e\u3088\u3046\u306a kintone \u30e9\u30a4\u30af\u306a UI \u3092\u7c21\u5358\u306b\u4f5c\u6210\u3067\u304d\u308b\u306e\u3067\u3001\u30d5\u30a9\u30fc\u30e0\u90e8\u54c1\u3092\u81ea\u4f5c\u3057\u305f\u3044\u5834\u5408\u306b\u4fbf\u5229\u306b\u304a\u4f7f\u3044\u3044\u305f\u3060\u3051\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"desktop-\u7528\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u4f8b"},"Desktop \u7528\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u4f8b"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"desktop components",src:n(60812).Z,width:"450",height:"463"})),(0,i.kt)("h3",{id:"mobile-\u7528\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u4f8b"},"Mobile \u7528\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u4f8b"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mobile components",src:n(10005).Z,width:"350",height:"437"})),(0,i.kt)("h2",{id:"\u4e0b\u6e96\u5099\u30a2\u30d7\u30ea\u4f5c\u6210"},"\u4e0b\u6e96\u5099\uff1a\u30a2\u30d7\u30ea\u4f5c\u6210"),(0,i.kt)("p",null,"\u3053\u3053\u3067\u306f\u65e2\u5b9a\u306e kintone \u4e00\u89a7\u753b\u9762\u306e\u30d8\u30c3\u30c0\u30fc\u30e1\u30cb\u30e5\u30fc\u30b9\u30da\u30fc\u30b9\u306b Button \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u914d\u7f6e\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),"\n\u307e\u305a kintone UI Component \u3092\u8a2d\u7f6e\u3059\u308b\u30a2\u30d7\u30ea\u3092\u7528\u610f\u3057\u307e\u3059\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u7a7a\u306e\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\uff08",(0,i.kt)("a",{parentName:"li",href:"https://jp.cybozu.help/k/ja/user/create_app/tutorial.html"},"\u30a2\u30d7\u30ea\u3092\u306f\u3058\u3081\u304b\u3089\u4f5c\u6210\u3059\u308b"),"\uff09",(0,i.kt)("br",null),"\n\u7279\u306b\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u8a2d\u7f6e\u306f\u5fc5\u8981\u3042\u308a\u307e\u305b\u3093\u3002")),(0,i.kt)("h2",{id:"\u5c0e\u5165\u3068\u5b9f\u88c5\u65b9\u6cd5"},"\u5c0e\u5165\u3068\u5b9f\u88c5\u65b9\u6cd5"),(0,i.kt)("p",null,"kintone UI Component \u3067\u306f UMD \u3068 CDN \u3068 npm \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u7528\u610f\u3057\u3066\u3044\u307e\u3059\u3002",(0,i.kt)("br",null),"\n\u30d6\u30e9\u30a6\u30b6\u74b0\u5883\u3084 Node.js \u74b0\u5883\u306a\u3069\u958b\u767a\u74b0\u5883\u306b\u5408\u308f\u305b\u3066\u3044\u305a\u308c\u304b\u3092\u9078\u629e\u3057\u3066\u8aad\u307f\u8fbc\u307f\u3001\u5b9f\u88c5\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,i.kt)("br",null),"\n\u672c\u8a18\u4e8b\u3067\u306f\u3001\u305d\u308c\u305e\u308c\u306e\u5c0e\u5165\u30fb\u5b9f\u88c5\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5404\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u306b\u3064\u3044\u3066\u306f\u30b5\u30a4\u30c9\u30d0\u30fc\u306e Components \u30ab\u30c6\u30b4\u30ea\u3088\u308a\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002",(0,i.kt)("br",null),"\n\uff08\u9806\u6b21\u5bfe\u5fdc\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3082\u8ffd\u52a0\u4e88\u5b9a\u3067\u3059\u3002\uff09")),(0,i.kt)("h3",{id:"umd-\u3092\u5229\u7528\u3059\u308b"},"UMD \u3092\u5229\u7528\u3059\u308b"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"kintone UI Component \u30ea\u30dd\u30b8\u30c8\u30ea\u5185\u306e",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kintone-labs/kintone-ui-component/releases"},"\u5404\u30d0\u30fc\u30b8\u30e7\u30f3 Release \u6b04"),"\u306b\u6dfb\u4ed8\u306e\u30a2\u30fc\u30ab\u30a4\u30d6\u30d5\u30a9\u30eb\u30c0\uff08kintone-ui-component-{version}.tgz\uff09\u3092\u89e3\u51cd\u3057\u3001\u4ee5\u4e0b\u306e\u30d5\u30a1\u30a4\u30eb\u3092 kintone \u30a2\u30d7\u30ea\u8a2d\u5b9a\u306e ",(0,i.kt)("inlineCode",{parentName:"li"},"JavaScript / CSS \u3067\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"),"\u306b\u3066\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"./umd/kuc.min.js\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"index.js")," \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"kintone.events.on('app.record.index.show', event => {\n  const header = kintone.app.getHeaderMenuSpaceElement();\n\n  const button = new Kuc.Button({\n    text: 'Submit',\n    type: 'submit'\n  });\n  button.addEventListener('click', event => {\n    console.log(event);\n  });\n\n  header.appendChild(button);\n  return event;\n});\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"index.js")," \u3092 kintone \u30a2\u30d7\u30ea\u8a2d\u5b9a\u306e ",(0,i.kt)("inlineCode",{parentName:"li"},"JavaScript /CSS \u3067\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"),"\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3092\u9069\u7528\u3057\u307e\u3059\u3002\uff08",(0,i.kt)("a",{parentName:"li",href:"https://jp.cybozu.help/k/ja/user/app_settings/js_customize.html"},"JavaSript\u3084CSS\u3067\u30a2\u30d7\u30ea\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b"),"\uff09")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"button customize",src:n(75323).Z,width:"1100",height:"422"})),(0,i.kt)("h3",{id:"cdn-\u3092\u5229\u7528\u3059\u308b"},"CDN \u3092\u5229\u7528\u3059\u308b"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4ee5\u4e0b\u306e CDN URL \u3092\u3001\u4f5c\u6210\u3057\u305f kintone \u30a2\u30d7\u30ea\u8a2d\u5b9a\u306e ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaScript /CSS \u3067\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"),"\u306b\u3066\u6307\u5b9a\u3057\u307e\u3059\u3002\uff08",(0,i.kt)("a",{parentName:"p",href:"https://get.kintone.help/k/ja/user/app_settings/js_customize.html"},"JavaSript\u3084CSS\u3067\u30a2\u30d7\u30ea\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b"),"\uff09",(0,i.kt)("br",null),"\nCDN \u3092\u8aad\u307f\u8fbc\u3080\u3068\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u3057\u3066 ",(0,i.kt)("inlineCode",{parentName:"p"},"Kuc")," \u304c\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6700\u65b0\u7248\u306e kintone UI Component \u3092\u8aad\u307f\u8fbc\u307f\u305f\u3044\u5834\u5408"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"https://unpkg.com/kintone-ui-component/umd/kuc.min.js\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u30d0\u30fc\u30b8\u30e7\u30f3\u6307\u5b9a\u3057\u3066\u8aad\u307f\u8fbc\u307f\u305f\u3044\u5834\u5408\uff08\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u540d\u306e\u5f8c\u308d\u306b\u30d0\u30fc\u30b8\u30e7\u30f3\u756a\u53f7\u3092\u6307\u5b9a\uff09"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"https://unpkg.com/kintone-ui-component@1.0.0/umd/kuc.min.js\n"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4ee5\u964d\u306f\u4e0a\u8a18 UMD \u3068\u540c\u69d8\u3002"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"unpkg \u306f\u30b5\u30a4\u30dc\u30a6\u30ba\u304c\u63d0\u4f9b\u3057\u3066\u3044\u308b CDN \u30b5\u30fc\u30d3\u30b9\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u691c\u8a3c\u7528\u3068\u3057\u3066\u304a\u4f7f\u3044\u3044\u305f\u3060\u304f\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002",(0,i.kt)("br",null),"\n\u672c\u756a\u74b0\u5883\u3067\u306f\u3001unpkg \u306e\u969c\u5bb3\u3084\u4e0d\u5177\u5408\u306b\u3088\u308b\u5f71\u97ff\u3092\u907f\u3051\u308b\u305f\u3081\u3001UMD \u306e ",(0,i.kt)("inlineCode",{parentName:"p"},"kuc.min.js")," \u3092\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002")),(0,i.kt)("h3",{id:"npm-\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5229\u7528\u3059\u308b"},"npm \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u5229\u7528\u3059\u308b"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"customization")," \u3068\u3044\u3046\u30d5\u30a9\u30eb\u30c0\u3092\u4f5c\u6210\u3057\u3001\u305d\u306e\u914d\u4e0b\u3067\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir customization && cd customization\nnpm init -y\nnpm install kintone-ui-component\nnpm install webpack webpack-cli --save-dev\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5fc5\u8981\u306b\u5fdc\u3058\u3066\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"babel-loader")," \u3084 ",(0,i.kt)("inlineCode",{parentName:"p"},"css-loader")," \u3082\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u304a\u4f7f\u3044\u304f\u3060\u3055\u3044\u3002")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5229\u7528\u3057\u305f\u3044\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"index.js")," \u30d5\u30a1\u30a4\u30eb\u3092 ",(0,i.kt)("inlineCode",{parentName:"li"},"src")," \u30d5\u30a9\u30eb\u30c0\u914d\u4e0b\u306b\u4f5c\u6210\u3057\u307e\u3059\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Button } from 'kintone-ui-component/lib/button';\n\nkintone.events.on('app.record.index.show', event => {\n  const header = kintone.app.getHeaderMenuSpaceElement();\n\n  const button = new Button({\n    text: 'Submit',\n    type: 'submit'\n  });\n  button.addEventListener('click', event => {\n    console.log(event);\n  });\n\n  header.appendChild(button);\n  return event;\n});\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30eb\u30fc\u30c8\u914d\u4e0b\u306b\u4ee5\u4e0b\u306e ",(0,i.kt)("inlineCode",{parentName:"li"},"webpack.config.js")," \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nmodule.exports = {\n  entry: {\n    \"customization\": './src/index.js'\n  },\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    filename: '[name].min.js',\n  }\n}\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," \u306b webpack \u3067\u30d3\u30eb\u30c9\u3059\u308b\u305f\u3081\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "build:webpack": "webpack --mode production",\n  ...\n}\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3001\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u7528\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3057\u307e\u3059\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"npm run build:webpack\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u51fa\u529b\u7d50\u679c\uff1a\n./dist/customization.min.js\n")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"\u4e0a\u8a18\u3067\u30d0\u30f3\u30c9\u30eb\u3057\u305f\u30d5\u30a1\u30a4\u30eb\u3092\u3001\u4f5c\u6210\u3057\u305f kintone \u30a2\u30d7\u30ea\u8a2d\u5b9a\u306e ",(0,i.kt)("inlineCode",{parentName:"li"},"JavaScript /CSS \u3067\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"),"\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3092\u9069\u7528\u3057\u307e\u3059\u3002\uff08",(0,i.kt)("a",{parentName:"li",href:"https://jp.cybozu.help/k/ja/user/app_settings/js_customize.html"},"JavaSript\u3084CSS\u3067\u30a2\u30d7\u30ea\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b"),"\uff09")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"button customize",src:n(75323).Z,width:"1100",height:"422"})),(0,i.kt)("h2",{id:"\u30d6\u30e9\u30a6\u30b6\u5bfe\u5fdc\u72b6\u6cc1"},"\u30d6\u30e9\u30a6\u30b6\u5bfe\u5fdc\u72b6\u6cc1"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Chrome"),(0,i.kt)("th",null,"Safari"),(0,i.kt)("th",null,"Firefox"),(0,i.kt)("th",null,"Edge"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"\u25cb"),(0,i.kt)("td",null,"\u25cb"),(0,i.kt)("td",null,"\u25cb"),(0,i.kt)("td",null,"\u25cb")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u5404\u5bfe\u5fdc\u30d6\u30e9\u30a6\u30b6\u6700\u65b0\u7248\u3067\u306e\u52d5\u4f5c\u3092\u78ba\u8a8d\u3057\u3066\u304a\u308a\u307e\u3059\u3002"),(0,i.kt)("p",{parentName:"admonition"},"\u5404\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u30da\u30fc\u30b8\u3067\u306f\u3001Overview \u306b\u3066\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ec\u30d3\u30e5\u30fc\u8868\u793a\u3092\u3057\u3066\u3044\u307e\u3059\u3002",(0,i.kt)("br",null))))}c.isMDXComponent=!0},75323:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/button_customize-fac19f838e2df23103a3a18b4c6dfafa.png"},60812:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/desktop_components-7e041db73496daf1645f1b973c675a83.png"},10005:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/mobile_components-00733770677229e424a53ef5386ef40d.png"}}]);