//>>built
define([],function(){return function(a){var d=a.type,e=a.normalizeArguments,f=a.applyQuery,g=a.querierFactory;return function(){var b=Array.prototype.slice.call(arguments),c=e?e.apply(this,b):b,b={type:d,arguments:b,normalizedArguments:c},a=this._getQuerierFactory(d)||g;a&&(b.querier=a.apply(this,c));c=this._createSubCollection({queryLog:this.queryLog.concat(b)});return f?f.call(this,c,b):c}}});