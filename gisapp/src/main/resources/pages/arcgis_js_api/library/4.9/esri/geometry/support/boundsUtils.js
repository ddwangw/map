// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(A,y){function z(b){return function(h,l){return null==h?l:null==l?h:b(h,l)}}Object.defineProperty(y,"__esModule",{value:!0});var r=z(Math.min),t=z(Math.max);y.getRingsOrPathsBounds=function(b,h,l){var w=h?3:2;if(!b.length||!b[0].length)return null;for(var e=b[0][0],p=e[0],e=e[1],a=b[0][0],f=a[0],a=a[1],c=void 0,k=void 0,m=void 0,d=void 0,u=0;u<b.length;u++)for(var q=b[u],v=0;v<q.length;v++){var g=q[v],n=g[0],x=g[1],p=r(p,n),e=r(e,x),f=t(f,n),a=t(a,x);h&&2<g.length&&
(n=g[2],c=r(c,n),k=t(k,n));l&&g.length>w&&(d=g[w],m=r(c,d),d=t(k,d))}return h?l?[p,e,c,m,f,a,k,d]:[p,e,c,f,a,k]:l?[p,e,m,f,a,d]:[p,e,f,a]};y.getPointsBounds=function(b,h,l,w,e){var p=h?3:2;l=l&&e;h=h&&w;if(!b.length||!b[0].length)return null;for(var a=b[0],f=a[0],a=a[1],c=b[0],k=c[0],c=c[1],m=void 0,d=void 0,u=void 0,q=void 0,v=0;v<b.length;v++){var g=b[v],n=g[0],x=g[1],f=r(f,n),a=r(a,x),k=t(k,n),c=t(c,x);h&&2<g.length&&(n=g[2],m=r(m,n),d=t(d,n));l&&g.length>p&&(q=g[p],u=r(m,q),q=t(d,q))}return w?
(m=m||0,d=d||0,e?[f,a,m,u||0,k,c,d,q||0]:[f,a,m,k,c,d]):e?[f,a,u||0,k,c,q||0]:[f,a,k,c]}});