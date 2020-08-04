import{LoaderResource as t}from"pixi.js";import*as e from"fontfaceobserver";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var n=function(){function n(){}return n.add=function(){t.setExtensionLoadType("css",t.LOAD_TYPE.XHR),t.setExtensionXhrType("css",t.XHR_RESPONSE_TYPE.TEXT)},n.use=function(t,s){if("css"===t.extension){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.href=t.url,document.head.appendChild(o);for(var i,a=n.parseCss(t.data),l=[],f=[],u=t.metadata,c=null==u?void 0:u.testString,y=null==u?void 0:u.timeout,p=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return r(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,void 0):void 0}}(t))){n&&(t=n);var s=0;return function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}(a);!(i=p()).done;){var d=i.value;"string"==typeof d.style["font-family"]&&(l.push(new e(d.style["font-family"].replace(/['|"]/gi,""),{style:d.style["font-style"],weight:d.style["font-weight"],stretch:d.style["font-stretch"]}).load(c,y)),f.push({fontFamily:d.style["font-family"].replace(/['|"]/gi,""),fontStyle:d.style["font-style"],fontWeight:d.style["font-weight"]}))}t.data=f,Promise.all(l).finally(function(){return s()})}else s()},n.parseCss=function(t){var e,r,s=/([\s\S]+?)\{([\s\S]*?)\}/gi,o=[];for(t=t.replace(/\/\*[\s\S]*?\*\//g,"");r=s.exec(t);){var i=n.parseRule(r[2].trim());i.cssText=n.stringifyRule(i),(e={selectorText:r[1].trim().replace(/\s*\,\s*/,", "),style:i,cssText:""}).cssText=e.selectorText+" { "+e.style.cssText+" }",o.push(e)}return o},n.parseRule=function(t){for(var e,r=/\s*([a-z\-]+)\s*:\s*((?:[^;]*url\(.*?\)[^;]*|[^;]*)*)\s*(?:;|$)/gi,n={};e=r.exec(t);)n[e[1].toLowerCase()]=e[2];return n},n.stringifyRule=function(t){for(var e="",r=Object.keys(t).sort(),n=0;n<r.length;n++)e+=" "+r[n]+": "+t[r[n]]+";";return e.substring(1)},n}();export default n;
//# sourceMappingURL=pixi-webfont-loader.m.js.map