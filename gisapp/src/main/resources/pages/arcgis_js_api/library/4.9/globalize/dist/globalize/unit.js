//>>built
(function(l,a){"function"===typeof define&&define.amd?define(["cldr","../globalize","./number","./plural"],a):"object"===typeof exports?module.exports=a(require("cldrjs"),require("../globalize")):a(l.Cldr,l.Globalize)})(this,function(l,a){function q(b){var g,a;if(b)for(a in g={},b)g[a.replace(/unitPattern-count-/,"")]=b[a];return g}var k=a._formatMessage,r=a._runtimeBind,m=a._validateParameterPresence,t=a._validateParameterTypePlainObject,n=a._validateParameterTypeNumber,u=a._validateParameterTypeString,
v=function(b,g,a){return function(c){m(c,"value");n(c,"value");var f;var e=a;f=e.compoundUnitPattern;var d,h,e=e.unitProperties;d=b(c);h=g(c);e instanceof Array?(d=e[0],e=e[1],c=k(d[h],[c]),h=k(e.one,[""]).trim(),f=k(f,[c,h])):f=k(e[h],[d]);return f}},w="acceleration angle area digital duration length mass power pressure speed temperature volume".split(" "),p=function(b,a,d){var c;b=b.replace(/\//,"-per-");[""].concat(w).some(function(g){return c=d.main(["units",a,g.length?g+"-"+b:b])});c=q(c);return c||
!/-per-/.test(b)||(b=b.split("-per-"),c=b.map(function(b){return p(b,a,d)}),c[0]&&c[1])?c:void 0},x=p;a.formatUnit=a.prototype.formatUnit=function(b,a,d){m(b,"value");n(b,"value");return this.unitFormatter(a,d)(b)};a.unitFormatter=a.prototype.unitFormatter=function(b,a){var d,c,f;m(b,"unit");u(b,"unit");t(a,"options");a=a||{};d=[b,a];c=a.form||"long";var e=this.cldr;f=e.main(["units",c,"per/compoundUnitPattern"]);b=x(b,c,e);f={compoundUnitPattern:f,unitProperties:b};a=a.numberFormatter||this.numberFormatter();
b=this.pluralGenerator();c=v(a,b,f);r(d,this.cldr,c,[a,b,f]);return c};return a});