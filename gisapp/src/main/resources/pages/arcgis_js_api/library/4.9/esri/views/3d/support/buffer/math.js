// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(C,c){Object.defineProperty(c,"__esModule",{value:!0});(function(c){c.transformMat4=function(b,d,a){if(b.count!==d.count)console.error("input and output buffers need to have the same number of elements");else{var c=b.count,e=a[0],z=a[1],t=a[2],u=a[3],v=a[4],w=a[5],x=a[6],y=a[7],f=a[8],h=a[9],k=a[10],l=a[11],r=a[12],A=a[13],B=a[14];a=a[15];for(var g=0;g<c;g++){var n=d.get(g,0),p=d.get(g,1),q=d.get(g,2),m=u*n+y*p+l*q+a,m=m||1;b.set(g,0,(e*n+v*p+f*q+r)/m);b.set(g,
1,(z*n+w*p+h*q+A)/m);b.set(g,2,(t*n+x*p+k*q+B)/m)}}};c.transformMat3=function(b,d,a){if(b.count!==d.count)console.error("input and output buffers need to have the same number of elements");else{var c=b.count,e=a[0],r=a[1],t=a[2],u=a[3],v=a[4],w=a[5],x=a[6],y=a[7];a=a[8];for(var f=0;f<c;f++){var h=d.get(f,0),k=d.get(f,1),l=d.get(f,2);b.set(f,0,e*h+u*k+x*l);b.set(f,1,r*h+v*k+y*l);b.set(f,2,t*h+w*k+a*l)}}}})(c.vec3||(c.vec3={}));(function(c){c.scale=function(b,d,a){for(var c=Math.min(b.count,d.count),
e=0;e<c;e++)b.set(e,0,d.get(e,0)*a),b.set(e,1,d.get(e,1)*a),b.set(e,2,d.get(e,2)*a),b.set(e,3,d.get(e,3)*a)}})(c.vec4||(c.vec4={}))});