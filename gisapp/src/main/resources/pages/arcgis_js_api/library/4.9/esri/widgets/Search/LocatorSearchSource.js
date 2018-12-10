// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/assignHelper ../../core/lang ../../core/accessorSupport/decorators ../../tasks/Locator ./SearchSource ./support/locatorUtils".split(" "),function(n,p,l,c,g,d,b,h,m,k){return function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;a.categories=null;a.countryCode=null;a.localSearchOptions=null;a.locationToAddressDistance=1500;a.locator=null;a.name="";a.placeholder=
"";a.searchTemplate="";a.singleLineFieldName=null;a.suggestionsEnabled=null;a.zoomScale=null;return a}l(a,e);f=a;a.prototype.readLocator=function(a,b){return(a=b.url)?new h({url:a}):null};a.prototype.writeLocator=function(a,b){b.url=a?a.url:null};a.prototype.clone=function(){return new f({autoNavigate:this.autoNavigate,filter:this.filter,maxResults:this.maxResults,maxSuggestions:this.maxSuggestions,minSuggestCharacters:this.minSuggestCharacters,outFields:this.outFields?d.clone(this.outFields):null,
placeholder:this.placeholder,popupEnabled:this.popupEnabled,prefix:this.prefix,resultGraphicEnabled:this.resultGraphicEnabled,resultSymbol:this.resultSymbol?this.resultSymbol.clone():null,searchExtent:this.searchExtent?this.searchExtent.clone():null,suggestionsEnabled:this.suggestionsEnabled,suffix:this.suffix,withinViewEnabled:this.withinViewEnabled,categories:this.categories?d.clone(this.categories):null,countryCode:this.countryCode,localSearchOptions:this.localSearchOptions?d.clone(this.localSearchOptions):
null,locationToAddressDistance:this.locationToAddressDistance,locator:this.locator,searchTemplate:this.searchTemplate,singleLineFieldName:this.singleLineFieldName,zoomScale:this.zoomScale})};a.prototype.getResults=function(a){return k.getResults(g({source:this},a))};a.prototype.getSuggestions=function(a){return k.getSuggestions(g({source:this},a))};var f;c([b.property()],a.prototype,"categories",void 0);c([b.property()],a.prototype,"countryCode",void 0);c([b.property()],a.prototype,"localSearchOptions",
void 0);c([b.property()],a.prototype,"locationToAddressDistance",void 0);c([b.property({type:h})],a.prototype,"locator",void 0);c([b.reader("locator",["url"])],a.prototype,"readLocator",null);c([b.writer("locator")],a.prototype,"writeLocator",null);c([b.property({json:{write:!0}})],a.prototype,"name",void 0);c([b.property({json:{write:!0}})],a.prototype,"placeholder",void 0);c([b.property()],a.prototype,"searchTemplate",void 0);c([b.property({json:{write:!0}})],a.prototype,"singleLineFieldName",void 0);
c([b.property({json:{read:{source:"suggest"},write:{target:"suggest"}}})],a.prototype,"suggestionsEnabled",void 0);c([b.property({json:{write:!0}})],a.prototype,"zoomScale",void 0);return a=f=c([b.subclass("esri.widgets.Search.LocatorSearchSource")],a)}(b.declared(m))});