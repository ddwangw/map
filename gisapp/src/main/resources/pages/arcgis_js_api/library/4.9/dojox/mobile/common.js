//>>built
define("dojo/_base/array dojo/_base/config dojo/_base/connect dojo/_base/lang dojo/_base/window dojo/_base/kernel dojo/dom dojo/dom-class dojo/dom-construct dojo/domReady dojo/ready dojo/touch dijit/registry ./sniff ./uacss".split(" "),function(p,h,m,n,d,u,v,l,q,w,x,z,y,e){var a=n.getObject("dojox.mobile",!0);d.doc.dojoClick=!0;e("touch")&&(e.add("clicks-prevented",!(10===e("ie")||!e("ie")&&6<e("trident"))),e("clicks-prevented")&&(a._sendClick=function(a,c){for(var b=a;b;b=b.parentNode)if(b.dojoClick)return;
b=d.doc.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,d.global,1,c.screenX,c.screenY,c.clientX,c.clientY);a.dispatchEvent(b)}));a.getScreenSize=function(){return{h:d.global.innerHeight||d.doc.documentElement.clientHeight,w:d.global.innerWidth||d.doc.documentElement.clientWidth}};a.updateOrient=function(){var b=a.getScreenSize();l.replace(d.doc.documentElement,b.h>b.w?"dj_portrait":"dj_landscape",b.h>b.w?"dj_landscape":"dj_portrait")};a.updateOrient();a.tabletSize=500;a.detectScreenSize=
function(b){var c=a.getScreenSize(),f=Math.min(c.w,c.h),k,g;f>=a.tabletSize&&(b||!this._sz||this._sz<a.tabletSize)?(k="phone",g="tablet"):f<a.tabletSize&&(b||!this._sz||this._sz>=a.tabletSize)&&(k="tablet",g="phone");g&&(l.replace(d.doc.documentElement,"dj_"+g,"dj_"+k),m.publish("/dojox/mobile/screenSize/"+g,[c]));this._sz=f};a.detectScreenSize();a.hideAddressBarWait="number"===typeof h.mblHideAddressBarWait?h.mblHideAddressBarWait:1500;a.hide_1=function(){scrollTo(0,1);a._hidingTimer=0==a._hidingTimer?
200:2*a._hidingTimer;setTimeout(function(){a.isAddressBarHidden()||a._hidingTimer>a.hideAddressBarWait?(a.resizeAll(),a._hiding=!1):setTimeout(a.hide_1,a._hidingTimer)},50)};a.hideAddressBar=function(b){a.disableHideAddressBar||a._hiding||(a._hiding=!0,a._hidingTimer=e("ios")?200:0,b=screen.availHeight,d.body().offsetHeight<b&&(d.body().style.minHeight=b+"px",a._resetMinHeight=!0),setTimeout(a.hide_1,a._hidingTimer))};a.isAddressBarHidden=function(){return 1===pageYOffset};a.resizeAll=function(b,
c){if(!a.disableResizeAll){m.publish("/dojox/mobile/resizeAll",[b,c]);m.publish("/dojox/mobile/beforeResizeAll",[b,c]);a._resetMinHeight&&(d.body().style.minHeight=a.getScreenSize().h+"px");a.updateOrient();a.detectScreenSize();var f=function(a){var b=a.getParent&&a.getParent();return!(b&&b.resize||!a.resize)},k=function(a){p.forEach(a.getChildren(),function(a){f(a)&&a.resize();k(a)})};c?(c.resize&&c.resize(),k(c)):p.forEach(p.filter(y.toArray(),f),function(a){a.resize()});m.publish("/dojox/mobile/afterResizeAll",
[b,c])}};a.openWindow=function(a,c){d.global.open(a,c||"_blank")};a._detectWindowsTheme=function(){navigator.userAgent.match(/IEMobile\/10\.0/)&&q.create("style",{innerHTML:"@-ms-viewport {width: auto !important}"},d.doc.head);var a=function(){l.add(d.doc.documentElement,"windows_theme");u.experimental("Dojo Mobile Windows theme","Behavior and appearance of the Windows theme are experimental.")},c=e("windows-theme");if(void 0!==c)c&&a();else{for(var f,k=function(b){return b&&-1!==b.indexOf("/windows/")?
(e.add("windows-theme",!0),a(),!0):!1},g=d.doc.styleSheets,c=0;c<g.length;c++)if(!g[c].href){var h=g[c].cssRules||g[c].imports;if(h)for(f=0;f<h.length;f++)if(k(h[f].href))return}f=d.doc.getElementsByTagName("link");for(c=0;c<f.length&&!k(f[c].href);c++);}};!1!==h.mblApplyPageStyles&&l.add(d.doc.documentElement,"mobile");e("chrome")&&l.add(d.doc.documentElement,"dj_chrome");if(d.global._no_dojo_dm){n=d.global._no_dojo_dm;for(var r in n)a[r]=n[r];a.deviceTheme.setDm(a)}e.add("mblAndroidWorkaround",
!1!==h.mblAndroidWorkaround&&!0,void 0,!0);e.add("mblAndroid3Workaround",!1!==h.mblAndroid3Workaround&&!1,void 0,!0);a._detectWindowsTheme();a.setSelectable=function(a,c){var b,d;a=v.byId(a);if(9>=e("ie"))if(b=a.getElementsByTagName("*"),d=b.length,c)for(a.removeAttribute("unselectable");d--;)b[d].removeAttribute("unselectable");else for(a.setAttribute("unselectable","on");d--;)"INPUT"!==b[d].tagName&&b[d].setAttribute("unselectable","on");else l.toggle(a,"unselectable",!c)};var t=e("pointer-events")?
"touchAction":null;a._setTouchAction=t?function(a,c){a.style[t]=c}:function(){};w(function(){!1!==h.mblApplyPageStyles&&l.add(d.body(),"mblBackground")});x(function(){a.detectScreenSize(!0);e("mblAndroidWorkaround")&&q.create("style",{innerHTML:".mblView.mblAndroidWorkaround{position:absolute;top:-9999px !important;left:-9999px !important;}"},d.doc.head,"last");var b=a.resizeAll,c=-1!=navigator.appVersion.indexOf("Mobile")&&!(7<=e("ios"));if(!1!==h.mblHideAddressBar&&c||!0===h.mblForceHideAddressBar)a.hideAddressBar(),
!0===h.mblAlwaysHideAddressBar&&(b=a.hideAddressBar);var f=6<=e("ios");if(f&&void 0!==d.global.onorientationchange){var k=b,g,l,n;f?(l=d.doc.documentElement.clientWidth,n=d.doc.documentElement.clientHeight):(b=function(a){var b=m.connect(null,"onresize",null,function(a){m.disconnect(b);k(a)})},g=a.getScreenSize());m.connect(null,"onresize",null,function(b){if(f){var c=d.doc.documentElement.clientWidth,e=d.doc.documentElement.clientHeight;c==l&&e!=n&&k(b);l=c;n=e}else c=a.getScreenSize(),c.w==g.w&&
100<=Math.abs(c.h-g.h)&&k(b),g=c})}m.connect(null,void 0!==d.global.onorientationchange?"onorientationchange":"onresize",null,b);d.body().style.visibility="visible"});return a});