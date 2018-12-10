// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/nextTick","../../../../core/promiseUtils"],function(g,b,d,c){Object.defineProperty(b,"__esModule",{value:!0});b.createOrReuseTileRenderer=function(e,f,b){if(e&&e.supportsRenderer(f))return c.create(function(a){return d(function(){return a(e)})});if(!f)return c.resolve(null);switch(f.type){case "class-breaks":case "simple":case "unique-value":return c.create(function(a){d(function(){return g(["./tileRenderers/SymbolTileRenderer"],a)})}).then(function(a){return a.default}).then(function(a){return new a(b)});
case "heatmap":return c.create(function(a){d(function(){return g(["./tileRenderers/HeatmapTileRenderer"],a)})}).then(function(a){return a.default}).then(function(a){return new a(b)})}return c.resolve(null)}});