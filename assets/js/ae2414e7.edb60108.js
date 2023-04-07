"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[1198],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A=a.createContext({}),p=function(e){var t=a.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(A.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,A=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,k=s["".concat(A,".").concat(m)]||s[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var A in t)hasOwnProperty.call(t,A)&&(o[A]=t[A]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62814:(e,t,n)=>{n.d(t,{a:()=>r});var a=n(67294);const r=()=>{const e=(0,a.useRef)();return(0,a.useEffect)((()=>{const t=Kucs["1.10.0"],n=new t.Button({text:"OK",type:"submit"}),a=new t.Button({text:"Cancel",type:"normal"});a.style.marginRight="16px";const r=document.createElement("div");r.style.display="flex",r.appendChild(a),r.appendChild(n);const l=new t.Dialog({title:"Title",content:"<div><p style='margin: 0;'>This is Content</p></div>",footer:r,icon:"info",className:"dialog"});l.open(),e.current.appendChild(l)}),[]),a.createElement("div",{className:"sample-container",id:"dialog"},a.createElement("div",{id:"sample-container__components",ref:e}))}},52882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>A,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),l=n(62814);const i={id:"dialog",title:"Dialog",sidebar_label:"Dialog",original_id:"dialog"},o=void 0,A={unversionedId:"components/desktop/dialog",id:"version-1.5.0/components/desktop/dialog",title:"Dialog",description:"Overview",source:"@site/versioned_docs/version-1.5.0/components/desktop/dialog.md",sourceDirName:"components/desktop",slug:"/components/desktop/dialog",permalink:"/kuc-docusaurus-v2/docs/1.5.0/components/desktop/dialog",draft:!1,tags:[],version:"1.5.0",frontMatter:{id:"dialog",title:"Dialog",sidebar_label:"Dialog",original_id:"dialog"},sidebar:"version-1.5.0-docs",previous:{title:"DateTimePicker",permalink:"/kuc-docusaurus-v2/docs/1.5.0/components/desktop/datetime-picker"},next:{title:"Dropdown",permalink:"/kuc-docusaurus-v2/docs/1.5.0/components/desktop/dropdown"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Event",id:"event",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Method",id:"method",level:3},{value:"open()",id:"open",level:4},{value:"Parameter",id:"parameter-1",level:5},{value:"Return",id:"return",level:5},{value:"close()",id:"close",level:4},{value:"Parameter",id:"parameter-2",level:5},{value:"Return",id:"return-1",level:5},{value:"Sample Code",id:"sample-code",level:2}],s={toc:d},c="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Dialog component displays a dialog box."),(0,r.kt)(l.a,{mdxType:"DialogComponent"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("p",null,"Here is a list of properties that can be used for modifying the component:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"icon"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"The icon displayed in upper left of content area"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Available options:",(0,r.kt)("li",null,'"info" : ',(0,r.kt)("img",{alt:"info",src:n(25003).Z,width:"18",height:"18"})),(0,r.kt)("li",null,'"success" : ',(0,r.kt)("img",{alt:"success",src:n(99188).Z,width:"18",height:"18"})),(0,r.kt)("li",null,'"error" : ',(0,r.kt)("img",{alt:"error",src:n(48817).Z,width:"18",height:"18"})),(0,r.kt)("li",null,'"warning" : ',(0,r.kt)("img",{alt:"warning",src:n(4447).Z,width:"18",height:"18"})),(0,r.kt)("li",null,'"question" : ',(0,r.kt)("img",{alt:"question",src:n(29956).Z,width:"18",height:"18"})),(0,r.kt)("li",null,'"" : No icon'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Header Title"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"content *1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string/HTMLElement"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"DOM inside content"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If a string with HTML is set, it will be automatically converted to HTML and displayed as it is")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"footer *1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string/HTMLElement"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"DOM inside footer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If a string with HTML is set, it will be automatically converted to HTML and displayed as it is")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"*1: ","[Security]"," Kintone UI Component does NOT sanitize this property value. It is the developer's responsibility to escape any user input when using this option so that XSS attacks would be prevented.")),(0,r.kt)("h3",{id:"event"},"Event"),(0,r.kt)("p",null,"Here is a list of events that can be specified:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"close"),(0,r.kt)("td",{parentName:"tr",align:"left"},"function"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Event handler when the component has been closed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"It will pass the event object as the argument")))),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,"Dialog(options)",(0,r.kt)("br",null),"\nHere is a list of available constructors:"),(0,r.kt)("h4",{id:"parameter"},"Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object that includes component properties"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"method"},"Method"),(0,r.kt)("p",null,"Here is a list of available methods:"),(0,r.kt)("h4",{id:"open"},"open()"),(0,r.kt)("p",null,"Show the Dialog"),(0,r.kt)("h5",{id:"parameter-1"},"Parameter"),(0,r.kt)("p",null,"none"),(0,r.kt)("h5",{id:"return"},"Return"),(0,r.kt)("p",null,"none"),(0,r.kt)("h4",{id:"close"},"close()"),(0,r.kt)("p",null,"Hide the Dialog"),(0,r.kt)("h5",{id:"parameter-2"},"Parameter"),(0,r.kt)("p",null,"none"),(0,r.kt)("h5",{id:"return-1"},"Return"),(0,r.kt)("p",null,"none"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sample-code"},"Sample Code"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please check the ",(0,r.kt)("a",{parentName:"p",href:"../../getting-started/quick-start#installation"},"package installation")," method first.")),(0,r.kt)("p",null,"Here is a sample code when all parameters are specified:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Kuc = Kucs['1.x.x'];\n\nconst dialog = new Kuc.Dialog({\n  title:  'Title',\n  content: '<div>This is Content</div>',\n  footer: 'Footer',\n  icon: 'info'\n});\n\ndialog.addEventListener('close', event => {\n  console.log(event);\n});\n\ndialog.open();\ndialog.close();\n")))}m.isMDXComponent=!0},48817:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABXUExURQAAAN9QQORKOudMPOZNPeVMPOhNPedLO+hMPOdMPOhMPOdLO+hMPOdMPOhURexwY+14bO15bfOooPSvp/W1r/ra1/rf3Pve3Pvj4fzm5Pzo5fzo5v///104GHUAAAANdFJOUwAQMEBQgI+fr7/P3+//B4LmAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAo0lEQVQoU1WP6xYCIQiEcW/aisvWZrnl+z9nDHo6NT9QPhkBMo3zyrwuQ8tUbkldSydD7EDFI4hbe2piILg2QSqbhkA0gdxeyqQcYBPNeH7WUyTXgmJP9pOmZ675ijtTa6esE0VsJ9BpPVL6GrN6jUWbQUrNu+I3WKBB43YU/Uce9zYEBTCz2KgeC/2sqP0cNvpbW20m30G6WI1p8jFxDCgh+gC1VQ6XTzxqtQAAAABJRU5ErkJggg=="},25003:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABjUExURQAAAECPz0CHx0WKykSHx0OJyUKKykSJyESJyUSLy0OKykSKy0SKykSKykOKykSKykSKylCRzVuZ0Weg1HOn136v24q23pa94aHE5a3M6LnT68Xa7tDi8tzp9ejw+PP4/P///xOhKp4AAAAQdFJOUwAQIDBAUGBwgI+fr7/P3+8jGoKKAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAnElEQVQoU02Q2xqDIAyDi6J4GFo3dAec9v2fcpKi33JBfnLTNgQZ6/q+sUZ/SXZglcuBaXNwyBeIzuSRniElFf7M8/5N1hyRR8Ac5AMvqIQzT3NQcFQrhFU2pZ46+LS8ZAXxeM3b5Kngz4Gz7JNSR0YhSgx3UE2kx2wSF8BojwNB74jlddVrAOS1jb/spmcTlbmc8SwnqXJtrpDoB8aEECWvwHxCAAAAAElFTkSuQmCC"},29956:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABRUExURQAAAGBgYGhoaGVlZWRkZGZmZmVlZWZmZmdnZ2ZmZmVlZczMzL+/v9jY2KOjo2ZmZpWVlYiIiPn5+WZmZnx8fP39/WZmZnFxcf7+/mZmZv///2bTdFkAAAAZdFJOUwAQIDBAUGCPn6+/v8DAyM/P2Njf4+Pv8PCxXtwTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAnklEQVQoUz2P2RaDIAxEpyJ1qUqtGCD//6HNQjsvuczJhASmcUpE1zz6SxSW1pWG7lA3VNY4uJOzFQpirUrvD/N9KCUgas2VKzNbY8SkZeNaMvOmPOPSUs5TbLYk4fedOHsx+luV904elOh9+xbt8vGi4qnWFowOMurlFIFkoNMNVj3I6KjVusiO7FETSUwVPCta9WhXnGUXWp4PAPgCY/wXHtDEt1oAAAAASUVORK5CYII="},99188:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABdUExURQAAADDPcDDHcDDKcCzLcC3McC3KcC7LcC7LcC7Nci/Nci/Mci3McS7McS7McS7McS7McTvPekjSg1XWjG/cnXzfponir5bmuLHsyr7v08vy29j15OX57fL89v///+H3HSkAAAAQdFJOUwAQIDBAUGBwgI+fr7/P3+8jGoKKAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAmklEQVQoU1XQ2RKDIAwF0KC4UvTSxVqp/P9nNoEwY++Dk5wHQ0I5xg7OjdaUTmIXlAwKZlLg+CbTRYBFpNNGMzJ5rTlbDEBDrbacLaUoI3qun1VOrhzNwOs8WN5FsMq8I6UPdhV4GRgi/4TlIYKZDH/F0veeBT2RLMNWZbW8oBRhV8lP/V/Il2tc7FbWJmr1OGs9jqQbJj0h0Q8jSxDEKlEKWwAAAABJRU5ErkJggg=="},4447:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABXUExURQAAAP/PAP/HAP/KAP/LAP/MAP/KAP/LAP/LAP/NAP/NAP/MAP/MAP/MAP/MAP/MADMzM0A9MGZZJnNjI4x2HZmAGaaJFr+cEMymDdmvCuW5BvLCA//MAOM429UAAAAQdFJOUwAQIDBAUGBwgI+fr7/P3+8jGoKKAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAl0lEQVQoU02Q3RaDIAyDi6L4M6RO3WT2/Z9z0NRzzA0fuWibkMr5MM+Dd/hV+UWgYIYbzSiKjVrqXDn/6rtUp6skF/OuMBQrKhXroyANtQBZ+QsI1APkzRkw0wSQnXW8SMK+omyjJNrChyZyRsd2AnoihDmZN4XkS0ClctehUE+9F+CGiDYesV+ITdRaOekup6oLo1VI9AfQ6RejphO2ewAAAABJRU5ErkJggg=="}}]);