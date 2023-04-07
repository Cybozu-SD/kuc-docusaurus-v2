"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[68057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,v=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return n?a.createElement(v,r(r({ref:t},c),{},{components:n})):a.createElement(v,r({ref:t},c))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const l={id:"release-notes-v1.3.0",title:"v1.3.0 Release Notes",sidebar_label:"v1.3.0 Release Notes",original_id:"release-notes-v1.3.0"},r=void 0,i={unversionedId:"releases/release-notes-v1.3.0",id:"version-1.9.0/releases/release-notes-v1.3.0",title:"v1.3.0 Release Notes",description:"Overview",source:"@site/versioned_docs/version-1.9.0/releases/release-notes-v1.3.0.md",sourceDirName:"releases",slug:"/releases/release-notes-v1.3.0",permalink:"/kuc-docusaurus-v2/docs/1.9.0/releases/release-notes-v1.3.0",draft:!1,tags:[],version:"1.9.0",frontMatter:{id:"release-notes-v1.3.0",title:"v1.3.0 Release Notes",sidebar_label:"v1.3.0 Release Notes",original_id:"release-notes-v1.3.0"},sidebar:"version-1.9.0-release-notes",previous:{title:"v1.3.1 Release Notes",permalink:"/kuc-docusaurus-v2/docs/1.9.0/releases/release-notes-v1.3.1"},next:{title:"v1.2.0 Release Notes",permalink:"/kuc-docusaurus-v2/docs/1.9.0/releases/release-notes-v1.2.0"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Update details",id:"update-details",level:2},{value:"New Components",id:"new-components",level:3},{value:"New Features",id:"new-features",level:3},{value:"Maintenance",id:"maintenance",level:3},{value:"Security Updates",id:"security-updates",level:3},{value:"Document",id:"document",level:3},{value:"Topics to share!",id:"topics-to-share",level:2},{value:"Release new components",id:"release-new-components",level:3},{value:"Accept duplicated value",id:"accept-duplicated-value",level:3}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Here are the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kintone-labs/kintone-ui-component/releases/tag/v1.3.0"},"kintone UI Component v1.3.0")," Release Notes.",(0,o.kt)("br",null),"\nNew components, features, maintenances, document updates, and security updates have been made."),(0,o.kt)("h2",{id:"update-details"},"Update details"),(0,o.kt)("h3",{id:"new-components"},"New Components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added Date/Time series components (DatePicker, TimePicker, and DateTimePicker)."),(0,o.kt)("li",{parentName:"ul"},"Added Dialog component.")),(0,o.kt)("h3",{id:"new-features"},"New Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Updated to accept duplicated value in ",(0,o.kt)("inlineCode",{parentName:"li"},"value")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Item.value")," properties and newly added ",(0,o.kt)("inlineCode",{parentName:"li"},"selectedIndex")," property on choice components (MultiChoice, Checkbox, Dropdown, RadioButton, MobileMultiChoice, MobileCheckbox, MobileDropdown, and MobileRadioButton).",(0,o.kt)("br",null),"\n*Please check the detail on each component's document page.")),(0,o.kt)("h3",{id:"maintenance"},"Maintenance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Improved Spinner component to disable any controls outside of it when opening."),(0,o.kt)("li",{parentName:"ul"},"Updated to use from LitElement and lit-html to Lit 2.0."),(0,o.kt)("li",{parentName:"ul"},"Added the function to get the information of developing version."),(0,o.kt)("li",{parentName:"ul"},"Installed Yamory for checking package vulnerability."),(0,o.kt)("li",{parentName:"ul"},"Developed ESLint Custom Rules for checking our coding rule and deleted Sider system."),(0,o.kt)("li",{parentName:"ul"},"Installed storybook controls and actions feature."),(0,o.kt)("li",{parentName:"ul"},"Updated LICENSE file."),(0,o.kt)("li",{parentName:"ul"},"Fixed build setting for ESM.")),(0,o.kt)("h3",{id:"security-updates"},"Security Updates"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Updated dependent libraries: webpack, json-schema, karma, nanoid, node-fetch, log4js, and core-js.")),(0,o.kt)("h3",{id:"document"},"Document"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added DatePicker, TimePicker, DateTimePicker, and Dialog pages."),(0,o.kt)("li",{parentName:"ul"},"Updated ",(0,o.kt)("inlineCode",{parentName:"li"},"value")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"selectedIndex")," properties' specification to follow the logic change described above on choice components' pages."),(0,o.kt)("li",{parentName:"ul"},"Added ",(0,o.kt)("inlineCode",{parentName:"li"},"Bulk update customization")," article.")),(0,o.kt)("h2",{id:"topics-to-share"},"Topics to share!"),(0,o.kt)("h3",{id:"release-new-components"},"Release new components"),(0,o.kt)("p",null,"We added several new components together this time!",(0,o.kt)("br",null),"\nAbout Date/Time series components, we considered it will be useful to provide each separately for property setting and leaning cost reasons."),(0,o.kt)("p",null,"About Dialog, we set the default size small, so you can utilize it on both desktop and mobile screens."),(0,o.kt)("h3",{id:"accept-duplicated-value"},"Accept duplicated value"),(0,o.kt)("p",null,"For choice components, we updated the specification to accept duplicated value in ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Item.value")," properties. (We used to throw error if it is duplicated.)",(0,o.kt)("br",null),"\nAnd for that, we newly added the ",(0,o.kt)("inlineCode",{parentName:"p"},"selectedIndex")," property to distinguish which duplicated value item will be selected.",(0,o.kt)("br",null),"\nYou can utilize the feature for example when you want to categorize by value and switch the display."),(0,o.kt)("p",null,"If you have any feedback or ideas, please feel free to post on GitHub issue!"))}p.isMDXComponent=!0}}]);