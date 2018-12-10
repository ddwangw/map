// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/extendsHelper ../core/tsSupport/decorateHelper ../core/kebabDictionary ../core/Logger ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators ../portal/Portal ./Symbol ./support/Thumbnail".split(" "),function(k,v,l,c,m,n,p,e,b,q,r,t){var u=n.getLogger("esri.symbols.WebStyleSymbol"),f=m.strict()({styleSymbolReference:"web-style"});return function(h){function a(a){a=h.call(this,a)||this;a.styleName=null;a.portal=null;a.styleUrl=null;a.thumbnail=
null;a.name=null;a.type="web-style";return a}l(a,h);g=a;a.prototype._readStyleUrl=function(a,d,b){return e.read(a,b)};a.prototype._writeStyleUrl=function(a,d,b,c){d.styleUrl=e.write(a,c);e.isAbsolute(d.styleUrl)&&(d.styleUrl=e.normalize(d.styleUrl))};a.prototype.read=function(a,d){this.portal=d?d.portal:void 0;this.inherited(arguments,[a,d]);return this};a.prototype.clone=function(){return new g({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})};a.prototype.fetchSymbol=
function(){var a=this;return p.create(function(a){return k(["./support/styleUtils"],a)}).then(function(b){b=b.resolveWebStyleSymbol(a,{portal:a.portal});b.catch(function(a){u.error("#fetchSymbol()","Failed to create symbol from style",a)});return b})};var g;c([b.property({json:{write:!1}})],a.prototype,"color",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"styleName",void 0);c([b.property({type:q,json:{write:!1}})],a.prototype,"portal",void 0);c([b.property({type:String,json:{write:!0}})],
a.prototype,"styleUrl",void 0);c([b.reader("styleUrl")],a.prototype,"_readStyleUrl",null);c([b.writer("styleUrl")],a.prototype,"_writeStyleUrl",null);c([b.property({type:t.default,json:{read:!1}})],a.prototype,"thumbnail",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"name",void 0);c([b.property({type:f.apiValues,readOnly:!0,json:{type:f.jsonValues,read:!1,write:f.write}})],a.prototype,"type",void 0);return a=g=c([b.subclass("esri.symbols.WebStyleSymbol")],a)}(b.declared(r))});