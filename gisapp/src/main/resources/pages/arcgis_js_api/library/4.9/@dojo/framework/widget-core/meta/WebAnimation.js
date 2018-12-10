//>>built
(function(b){"object"===typeof module&&"object"===typeof module.exports?(b=b(require,exports),void 0!==b&&(module.exports=b)):"function"===typeof define&&define.amd&&define("require exports tslib ./Base ../../shim/Map ../../shim/global".split(" "),b)})(function(b,e){Object.defineProperty(e,"__esModule",{value:!0});var k=b("tslib"),l=b("./Base"),m=b("../../shim/Map"),n=b("../../shim/global");b=function(b){function d(){var a=null!==b&&b.apply(this,arguments)||this;a._animationMap=new m.default;return a}
k.__extends(d,b);d.prototype._createPlayer=function(a,c){var b=c.effects;c=c.timing;c=void 0===c?{}:c;b="function"===typeof b?b():b;a=new KeyframeEffect(a,b,c);return new Animation(a,n.default.document.timeline)};d.prototype._updatePlayer=function(a,c){var b=c.play,d=c.reverse,p=c.cancel,q=c.finish,f=c.onFinish,e=c.onCancel,g=c.playbackRate,h=c.startTime;c=c.currentTime;void 0!==g&&(a.playbackRate=g);d&&a.reverse();p&&a.cancel();q&&a.finish();void 0!==h&&(a.startTime=h);void 0!==c&&(a.currentTime=
c);b?a.play():a.pause();f&&(a.onfinish=f.bind(this._bind));e&&(a.oncancel=e.bind(this._bind))};d.prototype.animate=function(a,c){var b=this,d=this.getNode(a);d&&(Array.isArray(c)||(c=[c]),c.forEach(function(a){if(a="function"===typeof a?a():a){var c=a.id;b._animationMap.has(c)||b._animationMap.set(c,{player:b._createPlayer(d,a),used:!0});var e=b._animationMap.get(c);a=a.controls;a=void 0===a?{}:a;e&&(b._updatePlayer(e.player,a),b._animationMap.set(c,{player:e.player,used:!0}))}}))};d.prototype.get=
function(a){if(a=this._animationMap.get(a))return a=a.player,{currentTime:a.currentTime,playState:a.playState,playbackRate:a.playbackRate,startTime:a.startTime}};d.prototype.afterRender=function(){var a=this;this._animationMap.forEach(function(c,b){c.used||(c.player.cancel(),a._animationMap.delete(b));c.used=!1})};return d}(l.Base);e.WebAnimations=b;e.default=b});