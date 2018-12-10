// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports dojox/gfx/_base ../../core/Error ../../core/promiseUtils ../../core/screenUtils ../SimpleMarkerSymbol ./gfxUtils ./previewUtils ./renderUtils".split(" "),function(D,r,x,y,v,n,l,t,z,A){function B(g,c){var b=C.getContext("2d"),e=[];c&&(c.weight&&e.push(c.weight),c.size&&e.push(c.size+"px"),c.family&&e.push(c.family));b.font=e.join(" ");return b.measureText(g).width}Object.defineProperty(r,"__esModule",{value:!0});var C=document.createElement("canvas");r.previewSymbol2D=function(g,
c){var b=c&&c.size?n.pt2px(c.size):null,e=c&&c.maxSize?n.pt2px(c.maxSize):null,m=c&&null!=c.opacity?c.opacity:null,r=c&&null!=c.rotation?c.rotation:null,a=t.getStroke(g),h={shape:null,fill:null,stroke:a};a&&a.width&&(a.width=Math.min(a.width,80));var f=0,d=0,k=a&&a.width||0,u=!1,w=null;switch(g.type){case "simple-marker":a=l.defaultProps;m=g.style;d=f=b=Math.min(b||n.pt2px(g.size||a.size),e||120);switch(m){case l.STYLE_CIRCLE:h.shape={type:"circle",cx:0,cy:0,r:.5*b};break;case l.STYLE_CROSS:h.shape=
{type:"path",path:[{command:"M",values:[0,.5*d]},{command:"L",values:[f,.5*d]},{command:"M",values:[.5*f,0]},{command:"L",values:[.5*f,d]},{command:"E",values:[]}]};break;case l.STYLE_DIAMOND:h.shape={type:"path",path:[{command:"M",values:[0,.5*d]},{command:"L",values:[.5*f,0]},{command:"L",values:[f,.5*d]},{command:"L",values:[.5*f,d]},{command:"Z",values:[]}]};break;case l.STYLE_SQUARE:h.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[f,0]},{command:"L",values:[f,d]},{command:"L",
values:[0,d]},{command:"Z",values:[]}]};break;case l.STYLE_X:h.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[f,d]},{command:"M",values:[f,0]},{command:"L",values:[0,d]},{command:"E",values:[]}]};break;case l.STYLE_PATH:u=!0,h.shape={type:"path",path:g.path||""}}break;case "simple-line":k=Math.min(b||k,e||80);f=22<k?2*k:40;d=k;a.width=k;k=0;h.shape={type:"path",path:[{command:"M",values:[0,.5*d]},{command:"L",values:[f,.5*d]},{command:"E",values:[]}]};break;case "picture-fill":case "simple-fill":d=
f=b=Math.min(b,e||120);u=!0;h.shape=z.shapes.fill[0];break;case "picture-marker":var p=e||120,e=n.pt2px(g.width),a=n.pt2px(g.height),b=Math.min(b||Math.max(e,a),p),a=e/a,e=1>=a?Math.ceil(b*a):b,a=1>=a?b:Math.ceil(b/a),f=e,d=a,w=m;h.shape={type:"image",x:-Math.round(e/2),y:-Math.round(a/2),width:e,height:a,src:g.url||""};break;case "text":m=g.text||"Aa",a=g.font,b=Math.min(b||n.pt2px(a.size),e||120),p=B(m,{weight:a.weight,size:b,family:a.family}),f=(e=/[\uE600-\uE6FF]/.test(m))?b:p,d=b,p=.25*x.normalizedLength((a?
b:0).toString()),e&&(p+=5),h.shape={type:"text",text:m,x:0,y:p,align:"middle",decoration:g.decoration||a&&a.decoration,rotated:g.rotated,kerning:g.kerning},h.font=a&&{size:b,style:a.style,decoration:a.decoration,weight:a.weight,family:a.family}}if(!h.shape)return v.reject(new y("symbolPreview: renderPreviewHTML2D","symbol not supported."));var f=(f||22)+2*k,d=(d||22)+2*k,q=t.getFill(g),k=g.color,b=null;q&&"pattern"===q.type&&k&&"picture-fill"!==g.type?b=t.getPatternUrlWithColor(q.src,k.toCss(!0)).then(function(a){q.src=
a;h.fill=q;return h}):(h.fill=q,b=v.resolve(h));return b.then(function(a){return A.renderSymbol([[a]],[f,d],{node:c&&c.node,scale:u,opacity:w,rotation:r})})}});