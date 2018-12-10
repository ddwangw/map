//>>built
(function(b){"object"===typeof module&&"object"===typeof module.exports?(b=b(require,exports),void 0!==b&&(module.exports=b)):"function"===typeof define&&define.amd&&define("require exports tslib ../../core/lang ../animations/cssTransitions ./../decorators/afterRender ./../d ./../vdom".split(" "),b)})(function(b,e){function h(b){return function(b){function c(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];a=b.apply(this,g.__spread(a))||this;a._root=document.body;a._async=!0;a._projectorProperties=
{};a._projectionOptions={transitions:l.default};a.root=document.body;a.projectorState=d.Detached;return a}g.__extends(c,b);c.prototype.append=function(a){return this._attach({type:f.Append,root:a})};c.prototype.merge=function(a){return this._attach({type:f.Merge,root:a})};Object.defineProperty(c.prototype,"root",{get:function(){return this._root},set:function(a){if(this.projectorState===d.Attached)throw Error("Projector already attached, cannot change root element");this._root=a},enumerable:!0,configurable:!0});
Object.defineProperty(c.prototype,"async",{get:function(){return this._async},set:function(a){if(this.projectorState===d.Attached)throw Error("Projector already attached, cannot change async mode");this._async=a},enumerable:!0,configurable:!0});c.prototype.sandbox=function(a){var b=this;void 0===a&&(a=document);if(this.projectorState===d.Attached)throw Error("Projector already attached, cannot create sandbox");this._async=!1;var c=this.root;this.own({destroy:function(){b._root=c}});this._attach({root:a.createDocumentFragment(),
type:f.Append})};c.prototype.setChildren=function(a){this.__setChildren__(a)};c.prototype.setProperties=function(a){this.__setProperties__(a)};c.prototype.__setProperties__=function(a){this._projectorProperties&&this._projectorProperties.registry!==a.registry&&this._projectorProperties.registry&&this._projectorProperties.registry.destroy();this._projectorProperties=m.assign({},a);b.prototype.__setCoreProperties__.call(this,{bind:this,baseRegistry:a.registry});b.prototype.__setProperties__.call(this,
a)};c.prototype.toHtml=function(){if(this.projectorState!==d.Attached||!this._projection)throw Error("Projector is not attached, cannot return an HTML string of projection.");return this._projection.domNode.childNodes[0].outerHTML};c.prototype.afterRender=function(a){var b=a;if("string"===typeof a||null===a||void 0===a)b=n.v("span",{},[a]);return b};c.prototype.destroy=function(){b.prototype.destroy.call(this)};c.prototype._attach=function(a){var b=this,c=a.type;if(a=a.root)this.root=a;if(this._attachHandle)return this._attachHandle;
this.projectorState=d.Attached;a={destroy:function(){b.projectorState===d.Attached&&(b._projection=void 0,b.projectorState=d.Detached)}};this.own(a);this._attachHandle=a;this._projectionOptions=g.__assign({},this._projectionOptions,{sync:!this._async});switch(c){case f.Append:this._projection=k.dom.append(this.root,this,this._projectionOptions);break;case f.Merge:this._projection=k.dom.merge(this.root,this,this._projectionOptions)}return this._attachHandle};g.__decorate([p.afterRender()],c.prototype,
"afterRender",null);return c}(b)}Object.defineProperty(e,"__esModule",{value:!0});var g=b("tslib"),m=b("../../core/lang"),l=b("../animations/cssTransitions"),p=b("./../decorators/afterRender"),n=b("./../d"),k=b("./../vdom"),d;(function(b){b[b.Attached=1]="Attached";b[b.Detached=2]="Detached"})(d=e.ProjectorAttachState||(e.ProjectorAttachState={}));var f;(function(b){b[b.Append=1]="Append";b[b.Merge=2]="Merge"})(f=e.AttachType||(e.AttachType={}));e.ProjectorMixin=h;e.default=h});