//>>built
define(["./global","require","module"],function(h,e,b){var a=e.has||function(){};if(!a("dojo-has-api")){var g=(e="undefined"!=typeof window&&"undefined"!=typeof location&&"undefined"!=typeof document&&window.location==location&&window.document==document)&&document,k=g&&g.createElement("DiV"),c=b.config&&b.config()||{},a=function(a){return"function"==typeof c[a]?c[a]=c[a](h,g,k):c[a]};a.cache=c;a.add=function(d,b,l,e){("undefined"==typeof c[d]||e)&&(c[d]=b);return l&&a(d)};a.add("host-browser",e);
a.add("dom",e)}a("host-browser")&&(a.add("touch","ontouchstart"in document||"onpointerdown"in document&&0<navigator.maxTouchPoints||window.navigator.msMaxTouchPoints),a.add("touch-events","ontouchstart"in document),a.add("pointer-events","pointerEnabled"in window.navigator?window.navigator.pointerEnabled:"PointerEvent"in window),a.add("device-width",screen.availWidth||innerWidth),b=document.createElement("form"),a.add("dom-attributes-specified-flag",0<b.attributes.length&&40>b.attributes.length));
a.clearElement=function(a){a.innerHTML="";return a};a.normalize=function(d,b){var c=d.match(/[\?:]|[^:\?]*/g),e=0,f=function(d){var b=c[e++];if(":"==b)return 0;if("?"==c[e++]){if(!d&&a(b))return f();f(!0);return f(d)}return b||0};return(d=f())&&b(d)};a.load=function(a,b,c){a?b([a],c):c()};return a});