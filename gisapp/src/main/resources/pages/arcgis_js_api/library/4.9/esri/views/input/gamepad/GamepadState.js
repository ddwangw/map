// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../../3d/support/mathUtils"],function(f,d,e){Object.defineProperty(d,"__esModule",{value:!0});d.extractState=function(c){var a=c.native;return{buttons:a.buttons.map(function(b){return b.pressed?b.value?b.value:1:0}),axes:a.axes.map(function(b){var a=c.axisThreshold,d=Math.abs(b);b=d<a?0:e.sign(b)*(d-a)/(1-a);return b})}};d.stateEqual=function(c,a){if(c.axes.length!==a.axes.length||c.buttons.length!==a.buttons.length)return!1;for(var b=0;b<c.axes.length;b++)if(c.axes[b]!==
a.axes[b])return!1;for(b=0;b<c.buttons.length;b++)if(c.buttons[b]!==a.buttons[b])return!1;return!0};d.stateIdle=function(c){for(var a=0;a<c.axes.length;a++)if(0!==c.axes[a])return!1;for(a=0;a<c.buttons.length;a++)if(0!==c.buttons[a])return!1;return!0}});