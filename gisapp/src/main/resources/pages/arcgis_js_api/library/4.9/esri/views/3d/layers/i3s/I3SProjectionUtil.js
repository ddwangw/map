// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../../lib/gl-matrix","../../support/earthUtils","../../support/projectionUtils"],function(B,m,q,A,r){function x(a,c,d){var e=q.vec3d.create(),b=Math.ceil(Math.log(a[3])*Math.LOG2E/y),k=Math.pow(2,b*y+z),g;if(d.isGeographic){g=k/A.earthRadius*180/Math.PI;d=Math.round(a[1]/g);var l=Math.max(-90,Math.min(90,d*g)),h=g/Math.cos((Math.abs(l)-g/2)/180*Math.PI);g=Math.round(a[0]/h);e[0]=g*h;e[1]=l}else g=Math.round(a[0]/k),d=Math.round(a[1]/k),e[0]=g*k,e[1]=d*k;a=Math.round((a[2]+
c)/k);e[2]=a*k;return{center:e,id:b+"_"+g+"_"+d+"_"+a}}Object.defineProperty(m,"__esModule",{value:!0});var h=new Float64Array(3E3),t=q.vec3d.create(),b=q.mat4d.create();m.computeGlobalTransformation=function(a,c,d,b){a=x(a,c,d).center;c=q.mat4d.create();r.computeLinearTransformation(d,a,c,b);return c};m.reprojectPoints=function(a,c,d,e,n,k,g){var l=a.data,m=a.offsetIdx;a=a.strideIdx;q.mat4d.inverse(d,b);q.vec3d.set(c,t);t[2]+=e;c=[0,0,0];d=l.length/a;r.vectorToVector(t,n,c,k);for(n=0;n<d;n+=1E3){e=
Math.min(1E3,d-n);for(var f=0;f<e;f++){var p=m+a*(n+f);h[3*f]=l[p]+c[0];h[3*f+1]=l[p+1]+c[1];h[3*f+2]=l[p+2]+c[2]}r.bufferToBuffer(h,k,0,h,g,0,e);for(f=0;f<e;f++){var p=h[3*f],u=h[3*f+1],v=h[3*f+2],w=m+a*(n+f);l[w]=b[0]*p+b[4]*u+b[8]*v+b[12];l[w+1]=b[1]*p+b[5]*u+b[9]*v+b[13];l[w+2]=b[2]*p+b[6]*u+b[10]*v+b[14]}}};m.createOrigin=function(a,c,b,e){c=x(a,c,b);a=c.center;c=c.id;r.vectorToVector(a,b,a,e);return{vec3:a,id:c}};var z=1,y=5-z});