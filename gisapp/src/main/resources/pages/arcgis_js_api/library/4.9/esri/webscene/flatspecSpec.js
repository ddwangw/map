// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../core/Error ../core/promiseUtils ./schema".split(" "),function(Y,n,l,k,r,g,h){function Z(b,c){if(c.properties){if("layerType"in c.properties)return c.properties.layerType.enum[0];if("type"in c.properties)return c.properties.type.enum[0]}switch(b){case "multipoint_geometry_schema.json":return"multipoint";case "point_geometry_schema.json":return"point";case "polyline_geometry_schema.json":return"polyline";case "polygon_geometry_schema.json":return"polygon";
case "extent_schema.json":return"extent"}}function aa(b,c){var a={cnt:b.length,refsCnt:0,typesCnt:0,distinctTypes:[],summary:""};c=new Set;for(var d in b){var e=b[d];e.$ref?a.refsCnt++:e.type&&(a.typesCnt++,c.add(e.type))}c.forEach(function(b){return a.distinctTypes.push(b)});a.refsCnt===a.cnt?a.summary="refs":2===a.cnt&&0<a.refsCnt&&1===a.distinctTypes.length&&"null"===a.distinctTypes[0]?a.summary="refsAndNull":a.typesCnt===a.cnt?(a.summary="types",a.distinctTypes=a.distinctTypes):a.summary="mix";
return a}function p(b,c,a,d){return k(this,void 0,void 0,function(){var e,m;return l(this,function(q){switch(q.label){case 0:e=[];(m=Z(b,c))&&/<\?TYPE\?>/.test(a)?a=a.replace("?TYPE?",m):a.indexOf("\x3c?TYPE?\x3e")&&(a=a.replace("\x3c?TYPE?\x3e",""));d.classPaths&&(d.classPaths[a]=b);if(!(0<d.schemaPath.indexOf(b)))return[3,1];e.push({path:a,type:"LOOP0!"});return[3,3];case 1:return d.schemaPath.push(b),[4,t(c,a,d)];case 2:e=q.sent(),d.schemaPath.pop(),q.label=3;case 3:return[2,e]}})})}function M(b,
c,a){return k(this,void 0,void 0,function(){return l(this,function(d){return[2,a.requestSchema(b.$ref).then(function(b){return p(b.schemaId,b.schema,c,a)})]})})}function ba(b,c){var a="renderer_schema.json"===c.schemaPath[c.schemaPath.length-1],d=4>c.schemaPath.length?!1:"pointCloudLayer_schema.json/layerDefinition_schema.json/drawingInfo_schema.json/renderer_schema.json"===c.schemaPath.slice(c.schemaPath.length-4).join("/");return a?b.filter(function(a){return d===("pointCloudRenderer_schema.json"===
a.$ref)}):b}function t(b,c,a){return k(this,void 0,void 0,function(){var d,e,m,q,y,k,h,g,n,p,r,z,F,A,G,u,w,x,O,P,v,Q,B,H,I,C,R,S,D,T,E,J,U,V,W,X,K,L;return l(this,function(f){switch(f.label){case 0:d=[];e=a.filteredProperties;a.filteredProperties=null;if("array"!==b.type)return[3,2];q=(m=d).concat;return[4,t(b.items,c+"[]",a)];case 1:return d=q.apply(m,[f.sent()]),[3,24];case 2:if(!("properties"in b))return[3,7];y=[];for(k in b.properties)y.push(k);h=0;f.label=3;case 3:if(!(h<y.length))return[3,6];
g=y[h];if(e&&!e.has(g))return[3,5];n=c?c+"."+g:g;r=(p=d).concat;return[4,t(b.properties[g],n,a)];case 4:d=r.apply(p,[f.sent()]),f.label=5;case 5:return h++,[3,3];case 6:return[3,24];case 7:if(!("allOf"in b))return[3,9];z=null;F=new Set;A=0;for(G=b.allOf;A<G.length;A++)if(u=G[A],"$ref"in u){if(z)throw Error("Cannot process more than 1 ref in an allOf construct");z=u}else if("properties"in u)for(w in u.properties)F.add(w);else throw Error("allOf construct only allows simple top-level property filters");
x=a.filteredProperties;a.filteredProperties=F;P=(O=d).concat;return[4,M(z,c,a)];case 8:return d=P.apply(O,[f.sent()]),a.filteredProperties=x,[3,24];case 9:if(!("oneOf"in b))return[3,21];v=aa(b.oneOf,a);if("refs"!==v.summary&&"refsAndNull"!==v.summary)return[3,15];Q=ba(b.oneOf,a);B=0;H=Q;f.label=10;case 10:if(!(B<H.length))return[3,14];I=H[B];return"null"!==I.type?[3,11]:[3,13];case 11:return C="\x3c?TYPE?\x3e",S=(R=d).concat,[4,t(I,""+c+C,a)];case 12:d=S.apply(R,[f.sent()]),f.label=13;case 13:return B++,
[3,10];case 14:return[3,20];case 15:if("types"!==v.summary)return[3,16];d.push({path:c,type:v.distinctTypes.join("|")});return[3,20];case 16:D=[];for(T in b.oneOf)D.push(T);E=0;f.label=17;case 17:if(!(E<D.length))return[3,20];J=D[E];C=".oneOf["+J+"]";V=(U=d).concat;return[4,t(b.oneOf[J],""+c+C,a)];case 18:d=V.apply(U,[f.sent()]),f.label=19;case 19:return E++,[3,17];case 20:return[3,24];case 21:if(!("$ref"in b))return[3,23];X=(W=d).concat;return[4,M(b,c,a)];case 22:return d=X.apply(W,[f.sent()]),[3,
24];case 23:K="unknown";b.type&&(K=Array.isArray(b.type)?b.type.join("|"):b.type.replace(/ /g,"").split(",").join("|"));L={path:c,type:K};if(b.enum){var l=L,N=b.enum.slice();N.sort();l.enum=N.join("|")}d.push(L);f.label=24;case 24:return a.filteredProperties=e,[2,d]}})})}function w(b){return 0===b.indexOf("#/definitions/")?b.slice(14):b}function x(b){return function(c){c=w(c);var a=b.definitions[c];return a?g.resolve({schemaId:c,schema:a}):g.reject(new r("flatspec-spec:invalid-local-schema","Schema reference is not a local reference"))}}
function ca(b,c){return k(this,void 0,void 0,function(){var a,d;return l(this,function(e){switch(e.label){case 0:if(!b)return[2,g.reject(new r("flatspec-spec:missing-base-url","The base url of the remote schema directory must be specified when using a remote schema"))];a=x(c);return[4,g.create(function(a){return Y(["../request"],a)})];case 1:return d=e.sent(),[2,function(e){return a(e).catch(function(){return d(b+"/"+e,{responseType:"json"}).then(function(a){c.definitions[w(e)]=a.data;return{schemaId:e,
schema:a.data}})})}]}})})}function da(b,c){return k(this,void 0,void 0,function(){var a,d,e;return l(this,function(m){switch(m.label){case 0:a={schemaRoot:null,definitions:{},schemaPath:[]};if(!c||!c.useRemoteSchema)return[3,3];d=a;return[4,ca(c.baseUrl,a)];case 1:return d.requestSchema=m.sent(),e=a,[4,a.requestSchema((b||"webscene")+"_schema.json")];case 2:return e.schemaRoot=m.sent().schema,[2,a];case 3:return a.requestSchema=x(a),a.definitions=h.json.definitions,a.schemaRoot=b?a.definitions[b+
"_schema.json"]:h.json,[2,a]}})})}Object.defineProperty(n,"__esModule",{value:!0});n.scan=function(b,c){return k(this,void 0,void 0,function(){var a=this;return l(this,function(d){return[2,da(b,c).then(function(c){return k(a,void 0,void 0,function(){var a;return l(this,function(d){switch(d.label){case 0:return[4,p((b||"webScene")+"_schema.json",c.schemaRoot,"",c)];case 1:return a=d.sent(),a.sort(function(a,b){return a.path.localeCompare(b.path)}),[2,a.filter(function(b,c){return 0===c||a[c-1].path!==
b.path})]}})})})]})})};n.collectClassPaths=function(b){var c={definitions:h.json.definitions,schemaRoot:h.json,schemaPath:[],classPaths:{}};p(b||"webScene",b?h.json.definitions[b+"_schema.json"]:h.json,"",c);return g.resolve(c.classPaths)}});