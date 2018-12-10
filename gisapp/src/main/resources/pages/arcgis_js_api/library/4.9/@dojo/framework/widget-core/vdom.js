//>>built
(function(r){"object"===typeof module&&"object"===typeof module.exports?(r=r(require,exports),void 0!==r&&(module.exports=r)):"function"===typeof define&&define.amd&&define("require exports tslib ../shim/global ../shim/array ./d ./Registry ../shim/WeakMap".split(" "),r)})(function(r,m){function D(a,b){return q.isVNode(a)&&q.isVNode(b)?(q.isDomVNode(a)||q.isDomVNode(b))&&a.domNode!==b.domNode||a.tag!==b.tag||a.properties.key!==b.properties.key?!1:!0:q.isWNode(a)&&q.isWNode(b)?void 0===a.instance&&
"string"===typeof b.widgetConstructor||a.widgetConstructor!==b.widgetConstructor||a.properties.key!==b.properties.key?!1:!0:!1}function ca(a,b){return w.__assign({},{namespace:void 0,styleApplyer:function(a,b,e){a.style[b]=e},transitions:{enter:L,exit:L},depth:0,merge:!1,sync:!1,projectorInstance:b},a)}function E(a,b,c,d,e,f){d=t.get(d.projectorInstance);var k=d.nodeMap.get(a)||new u.default;f&&(f=k.get(f),a.removeEventListener(b,f));f=c.bind(e);"input"===b&&(f=function(a){c.call(this,a);a.target["oninput-value"]=
a.target.value}.bind(e));a.addEventListener(b,f);k.set(c,f);d.nodeMap.set(a,k)}function M(a,b){if(b){b=b.split(" ");for(var c=0;c<b.length;c++)a.classList.add(b[c])}}function A(a,b){if(b){b=b.split(" ");for(var c=0;c<b.length;c++)a.classList.remove(b[c])}}function da(a,b,c){var d=c.diffType,e=c.properties;c=c.attributes;if(!d||"vdom"===d)return{properties:b.properties,attributes:b.attributes,events:b.events};if("none"===d)return{properties:{},attributes:b.attributes?{}:void 0,events:b.events};var f=
{properties:{}};if(c)return f.attributes={},f.events=b.events,Object.keys(e).forEach(function(b){f.properties[b]=a[b]}),Object.keys(c).forEach(function(b){f.attributes[b]=a.getAttribute(b)}),f;f.properties=Object.keys(e).reduce(function(b,c){b[c]=a.getAttribute(c)||a[c];return b},{});return f}function ea(a,b,c,d,e){!0===("function"===typeof b?b():b&&!c)&&t.get(e.projectorInstance).deferredRenderCallbacks.push(function(){d[a]()})}function F(a,b,c,d,e){void 0===e&&(e=!1);var f=t.get(d.projectorInstance).nodeMap.get(a);
f&&Object.keys(b).forEach(function(d){var k="on"===d.substr(0,2)||e,n=e?d:d.substr(2);k&&!c[d]&&(d=f.get(b[d]))&&a.removeEventListener(n,d)})}function N(a,b,c,d){"http://www.w3.org/2000/svg"===d.namespace&&"href"===b?a.setAttributeNS("http://www.w3.org/1999/xlink",b,c):"role"===b&&""===c||void 0===c?a.removeAttribute(b):a.setAttribute(b,c)}function O(a,b,c,d){for(var e=Object.keys(c),f=e.length,k=0;k<f;k++){var l=e[k],n=c[l];n!==b[l]&&N(a,l,n,d)}}function z(a,b,c,d,e){void 0===e&&(e=!0);var f=!1,
k=Object.keys(c),l=k.length;if(-1===k.indexOf("classes")&&b.classes)if(Array.isArray(b.classes))for(var n=0;n<b.classes.length;n++)A(a,b.classes[n]);else A(a,b.classes);e&&F(a,b,c,d);for(n=0;n<l;n++){var h=k[n],g=c[h],p=b[h];if("classes"===h)if(p=Array.isArray(p)?p:[p],h=Array.isArray(g)?g:[g],p&&0<p.length)if(g&&0!==g.length){g=w.__spread(h);for(h=0;h<p.length;h++){var q=p[h];if(q){var m=g.indexOf(q);-1===m?A(a,q):g.splice(m,1)}}for(p=0;p<g.length;p++)M(a,g[p])}else for(g=0;g<p.length;g++)A(a,p[g]);
else for(g=0;g<h.length;g++)M(a,h[g]);else if(-1!==fa.indexOf(h))ea(h,g,p,a,d);else if("styles"===h)for(h=Object.keys(g),q=h.length,m=0;m<q;m++){var t=h[m],x=g[t];if(x!==(p&&p[t]))if(f=!0,x){if("string"!==typeof x)throw Error("Style values must be strings");d.styleApplyer(a,t,x)}else d.styleApplyer(a,t,"")}else g||"string"!==typeof p||(g=""),"value"===h?(q=a[h],q!==g&&(a["oninput-value"]?q===a["oninput-value"]:g!==p)&&(a[h]=g,a["oninput-value"]=void 0),g!==p&&(f=!0)):"key"!==h&&g!==p&&(f=typeof g,
"function"===f&&0===h.lastIndexOf("on",0)&&e?E(a,h.substr(2),g,d,c.bind,p):"string"===f&&"innerHTML"!==h&&e?N(a,h,g,d):"scrollLeft"===h||"scrollTop"===h?a[h]!==g&&(a[h]=g):a[h]=g,f=!0)}return f}function P(a,b,c){for(;c<a.length;c++)if(D(a[c],b))return c;return-1}function Q(a){return{tag:"",properties:{},children:void 0,domNode:a,type:q.VNODE}}function R(a){return{tag:"",properties:{},children:void 0,text:""+a,domNode:void 0,type:q.VNODE}}function S(a,b){return{instance:a,rendered:[],coreProperties:b.coreProperties,
children:a.children,widgetConstructor:a.constructor,properties:b.inputProperties,type:q.WNODE}}function y(a,b){if(void 0===a)return G;a=Array.isArray(a)?a:[a];for(var c=0;c<a.length;){var d=a[c];if(void 0===d||null===d)a.splice(c,1);else{if("string"===typeof d)a[c]=R(d);else if(q.isVNode(d))void 0===d.properties.bind&&(d.properties.bind=b,d.children&&0<d.children.length&&y(d.children,b));else{if(!d.coreProperties){var e=m.widgetInstanceMap.get(b);d.coreProperties={bind:b,baseRegistry:e.coreProperties.baseRegistry}}d.children&&
0<d.children.length&&y(d.children,b)}c++}}return a}function T(a,b){if(q.isVNode(a)&&a.properties){var c=a.properties.enterAnimation;c&&("function"===typeof c?c(a.domNode,a.properties):b.enter(a.domNode,a.properties,c))}}function B(a,b,c){if(q.isWNode(a)){var d=v.get(a.instance),d=(d?d.dnode.rendered:a.rendered)||G;a.instance&&(m.widgetInstanceMap.get(a.instance).onDetach(),v.delete(a.instance));for(var e=0;e<d.length;e++)B(d[e],b,c)}else{var f=a.domNode,d=a.properties;if(a.children&&0<a.children.length)for(e=
0;e<a.children.length;e++)B(a.children[e],b,c);c=d.exitAnimation;d&&c?(f.style.pointerEvents="none",e=function(){f&&f.parentNode&&f.parentNode.removeChild(f);a.domNode=void 0},"function"===typeof c?c(f,e,d):b.exit(a.domNode,d,c,e)):(f&&f.parentNode&&f.parentNode.removeChild(f),a.domNode=void 0)}}function H(a,b,c){var d=a[b];if(!q.isVNode(d)||d.tag){var e=d.properties.key;if(void 0===e||null===e)for(e=0;e<a.length;e++)if(e!==b&&D(a[e],d)){a=void 0;c=c.constructor.name||"unknown";a=q.isWNode(d)?d.widgetConstructor.name||
"unknown":d.tag;console.warn("A widget ("+c+") has had a child addded or removed, but they were not able to uniquely identified. It is recommended to provide a unique 'key' property when using the same widget or element ("+a+") multiple times as siblings");break}}}function U(a,b,c,d,e,f){c=c||G;var k=c.length,l=d.length,n=f.transitions,h=t.get(f.projectorInstance);f=w.__assign({},f,{depth:f.depth+1});for(var g=0,p=0,m,r=!1,u=function(){var l=g<k?c[g]:void 0,m=d[p];q.isVNode(m)&&"function"===typeof m.deferredPropertiesCallback&&
(m.inserted=q.isVNode(l)&&l.inserted,V(m,f));if(void 0!==l&&D(l,m))return g++,p++,r=I(l,m,f,a,e,c.slice(g),d.slice(p))||r,"continue";var t=P(c,m,g+1),u=function(){var k=void 0,l=c,t=g+1,r=c[g];r||(r=b[0],t=1,l=b);if(r)for(r=[r];r.length;){var u=r.shift();if(q.isWNode(u))(u=v.get(u.instance))&&u.dnode.rendered&&r.push.apply(r,w.__spread(u.dnode.rendered));else if(u.domNode){if(u.domNode.parentElement!==a.domNode)break;k=u.domNode;break}0===r.length&&l[t]&&(r.push(l[t]),t++)}J(m,a,d.slice(p+1),k,f,
e);T(m,n);var x=p;h.afterRenderCallbacks.push(function(){H(d,x,e)})};if(!l||-1===t)return u(),p++,"continue";t=function(){var a=g;h.afterRenderCallbacks.push(function(){H(c,a,e)});if(q.isWNode(l)){var b=v.get(l.instance);b&&(l=b.dnode)}B(l,n,f)};if(-1===P(d,l,p+1))return t(),g++,"continue";u();t();g++;p++};p<l;)u();if(k>g)for(l=function(){var a=m;h.afterRenderCallbacks.push(function(){H(c,a,e)});var b=c[m];if(q.isWNode(b)){var d=v.get(b.instance);d&&(b=d.dnode)}B(b,n,f)},m=g;m<k;m++)l();return r}
function W(a,b,c,d,e,f){void 0===e&&(e=void 0);if(void 0!==b){var k=t.get(c.projectorInstance);k.merge&&void 0===f&&(f=ga.from(a.domNode.childNodes));var l=c.transitions;c=w.__assign({},c,{depth:c.depth+1});for(var n=0;n<b.length;n++){var h=b[n],g=b.slice(n+1);if(q.isVNode(h)){if(k.merge&&f)for(var p=void 0;void 0===h.domNode&&0<f.length;)(p=f.shift())&&p.tagName===(h.tag.toUpperCase()||void 0)&&(h.domNode=p);J(h,a,g,e,c,d)}else J(h,a,g,e,c,d,f);T(h,l)}}}function X(a,b,c,d){W(b,b.children,d,c,void 0);
"function"===typeof b.deferredPropertiesCallback&&void 0===b.inserted&&V(b,d);if(b.attributes&&b.events){O(a,{},b.attributes,d);z(a,{},b.properties,d,!1);F(a,{},b.events,d,!0);var e=b.events;Object.keys(e).forEach(function(c){E(a,c,e[c],d,b.properties.bind)})}else z(a,{},b.properties,d);null!==b.properties.key&&void 0!==b.properties.key&&m.widgetInstanceMap.get(c).nodeHandler.add(a,""+b.properties.key);b.inserted=!0}function J(a,b,c,d,e,f,k){var l=t.get(e.projectorInstance);if(q.isWNode(a)){var n=
a.widgetConstructor;f=m.widgetInstanceMap.get(f);if(!ha.isWidgetBaseConstructor(n)){f=f.registry().get(n);if(null===f)return;n=f}var h=new n;a.instance=h;K.set(h,c);var g=m.widgetInstanceMap.get(h);g.invalidate=function(){g.dirty=!0;!1===g.rendering&&(l.renderQueue.push({instance:h,depth:e.depth}),Y(e))};g.rendering=!0;h.__setCoreProperties__(a.coreProperties);h.__setChildren__(a.children);h.__setProperties__(a.properties);c=h.__render__();g.rendering=!1;c&&(c=y(c,h),a.rendered=c,W(b,c,e,h,d,k));
v.set(h,{dnode:a,parentVNode:b});g.nodeHandler.addRoot();l.afterRenderCallbacks.push(function(){g.onAttach()})}else l.merge&&void 0!==l.mergeElement?(k=a.domNode=e.mergeElement,l.mergeElement=void 0,X(k,a,f,e)):(k=b.domNode.ownerDocument,a.tag||"string"!==typeof a.text?(void 0===a.domNode?("svg"===a.tag&&(e=w.__assign({},e,{namespace:"http://www.w3.org/2000/svg"})),k=void 0!==e.namespace?a.domNode=k.createElementNS(e.namespace,a.tag):a.domNode=a.domNode||k.createElement(a.tag)):k=a.domNode,X(k,a,
f,e),void 0!==d?b.domNode.insertBefore(k,d):k.parentNode!==b.domNode&&b.domNode.appendChild(k)):void 0!==a.domNode&&b.domNode?(d=a.domNode.ownerDocument.createTextNode(a.text),b.domNode===a.domNode.parentNode?b.domNode.replaceChild(d,a.domNode):(b.domNode.appendChild(d),a.domNode.parentNode&&a.domNode.parentNode.removeChild(a.domNode)),a.domNode=d):(k=a.domNode=k.createTextNode(a.text),void 0!==d?b.domNode.insertBefore(k,d):b.domNode.appendChild(k)))}function I(a,b,c,d,e,f,k){if(q.isWNode(b)){e=a.instance;
var l=v.get(e);d=l.parentVNode;a=(l=l.dnode)?l.rendered:a.rendered;l=m.widgetInstanceMap.get(e);l.rendering=!0;e.__setCoreProperties__(b.coreProperties);e.__setChildren__(b.children);e.__setProperties__(b.properties);K.set(e,k);b.instance=e;!0===l.dirty?(k=e.__render__(),l.rendering=!1,b.rendered=y(k,e),U(d,f,a,b.rendered,e,c)):(l.rendering=!1,b.rendered=a);v.set(e,{dnode:b,parentVNode:d});l.nodeHandler.addRoot()}else{if(a===b)return!1;var n=b.domNode=a.domNode;k=!1;if(b.tag||"string"!==typeof b.text){b.tag&&
0===b.tag.lastIndexOf("svg",0)&&(c=w.__assign({},c,{namespace:"http://www.w3.org/2000/svg"}));a.children!==b.children&&(d=y(b.children,e),b.children=d,k=U(b,f,a.children,d,e,c)||k);var h=da(n,a,b);if(b.attributes&&b.events){O(n,h.attributes,b.attributes,c);k=z(n,h.properties,b.properties,c,!1)||k;F(n,h.events,b.events,c,!0);var g=b.events;Object.keys(g).forEach(function(a){E(n,a,g[a],c,b.properties.bind,h.events[a])})}else k=z(n,h.properties,b.properties,c)||k;null!==b.properties.key&&void 0!==b.properties.key&&
(l=m.widgetInstanceMap.get(e),l.nodeHandler.add(n,""+b.properties.key))}else if(b.text!==a.text)return f=n.ownerDocument.createTextNode(b.text),n.parentNode.replaceChild(f,n),b.domNode=f,!0;k&&b.properties&&b.properties.updateAnimation&&b.properties.updateAnimation(n,b.properties,a.properties)}}function V(a,b){a.decoratedDeferredProperties=a.properties;var c=a.deferredPropertiesCallback(!!a.inserted),d=t.get(b.projectorInstance);a.properties=w.__assign({},c,a.decoratedDeferredProperties);d.deferredRenderCallbacks.push(function(){var c=
w.__assign({},a.deferredPropertiesCallback(!!a.inserted),a.decoratedDeferredProperties);z(a.domNode,a.properties,c,b);a.properties=c})}function Z(a){var b=t.get(a.projectorInstance);if(b.deferredRenderCallbacks.length)if(a.sync)for(;b.deferredRenderCallbacks.length;)(a=b.deferredRenderCallbacks.shift())&&a();else C.default.requestAnimationFrame(function(){for(;b.deferredRenderCallbacks.length;){var a=b.deferredRenderCallbacks.shift();a&&a()}})}function aa(a){var b=t.get(a.projectorInstance);if(a.sync)for(;b.afterRenderCallbacks.length;)(a=
b.afterRenderCallbacks.shift())&&a();else C.default.requestIdleCallback?C.default.requestIdleCallback(function(){for(;b.afterRenderCallbacks.length;){var a=b.afterRenderCallbacks.shift();a&&a()}}):setTimeout(function(){for(;b.afterRenderCallbacks.length;){var a=b.afterRenderCallbacks.shift();a&&a()}})}function Y(a){var b=t.get(a.projectorInstance);a.sync?ba(a):void 0===b.renderScheduled&&(b.renderScheduled=C.default.requestAnimationFrame(function(){ba(a)}))}function ba(a){var b=t.get(a.projectorInstance);
b.renderScheduled=void 0;var c=w.__spread(b.renderQueue);b.renderQueue=[];c.sort(function(a,b){return a.depth-b.depth});for(b=[];c.length;){var d=c.shift().instance;if(v.has(d)&&-1===b.indexOf(d)){b.push(d);var e=v.get(d),f=e.parentVNode,e=e.dnode,k=m.widgetInstanceMap.get(d),l=K.get(d);I(e,S(d,k),a,f,d,l,l)}}aa(a);Z(a)}Object.defineProperty(m,"__esModule",{value:!0});var w=r("tslib"),C=r("../shim/global"),ga=r("../shim/array"),q=r("./d"),ha=r("./Registry"),u=r("../shim/WeakMap"),G=[],fa=["focus",
"blur","scrollIntoView","click"];m.widgetInstanceMap=new u.default;var v=new u.default,K=new u.default,t=new u.default,L=function(){throw Error("Provide a transitions object to the projectionOptions to do animations");};m.toParentVNode=Q;m.toTextVNode=R;m.filterAndDecorateChildren=y;m.dom={append:function(a,b,c){void 0===c&&(c={});var d=m.widgetInstanceMap.get(b),e=ca(c,b),f={afterRenderCallbacks:[],deferredRenderCallbacks:[],nodeMap:new u.default,renderScheduled:void 0,renderQueue:[],merge:c.merge||
!1,mergeElement:c.mergeElement};t.set(b,f);e.rootNode=a;a=Q(e.rootNode);c=S(b,d);v.set(b,{dnode:c,parentVNode:a});d.invalidate=function(){d.dirty=!0;!1===d.rendering&&(f.renderQueue.push({instance:b,depth:e.depth}),Y(e))};I(c,c,e,a,b,[],[]);f.afterRenderCallbacks.push(function(){d.onAttach()});Z(e);aa(e);return{domNode:e.rootNode}},create:function(a,b){return this.append(document.createElement("div"),a,b)},merge:function(a,b,c){void 0===c&&(c={});c.merge=!0;c.mergeElement=a;a=this.append(a.parentNode,
b,c);t.get(b).merge=!1;return a}}});