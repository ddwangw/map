//>>built
(function(a){"object"===typeof module&&"object"===typeof module.exports?(a=a(require,exports),void 0!==a&&(module.exports=a)):"function"===typeof define&&define.amd&&define(["require","exports","./handleDecorator"],a)})(function(a,b){function c(a){return d.handleDecorator(function(b,c){b.addDecorator("afterRender",c?b[c]:a)})}Object.defineProperty(b,"__esModule",{value:!0});var d=a("./handleDecorator");b.afterRender=c;b.default=c});