/**
* @preserve Copyright 2012 Twitter, Inc.
* @license http://www.apache.org/licenses/LICENSE-2.0.txt
*/
var Hogan={};(function(a,b){function i(a){return String(a===null||a===undefined?"":a)}function j(a){return a=i(a),h.test(a)?a.replace(c,"&amp;").replace(d,"&lt;").replace(e,"&gt;").replace(f,"&#39;").replace(g,"&quot;"):a}a.Template=function(a,c,d,e){this.r=a||this.r,this.c=d,this.options=e,this.text=c||"",this.buf=b?[]:""},a.Template.prototype={r:function(a,b,c){return""},v:j,t:i,render:function(b,c,d){return this.ri([b],c||{},d)},ri:function(a,b,c){return this.r(a,b,c)},rp:function(a,b,c,d){var e=c[a];return e?(this.c&&typeof e=="string"&&(e=this.c.compile(e,this.options)),e.ri(b,c,d)):""},rs:function(a,b,c){var d=a[a.length-1];if(!k(d)){c(a,b,this);return}for(var e=0;e<d.length;e++)a.push(d[e]),c(a,b,this),a.pop()},s:function(a,b,c,d,e,f,g){var h;return k(a)&&a.length===0?!1:(typeof a=="function"&&(a=this.ls(a,b,c,d,e,f,g)),h=a===""||!!a,!d&&h&&b&&b.push(typeof a=="object"?a:b[b.length-1]),h)},d:function(a,b,c,d){var e=a.split("."),f=this.f(e[0],b,c,d),g=null;if(a==="."&&k(b[b.length-2]))return b[b.length-1];for(var h=1;h<e.length;h++)f&&typeof f=="object"&&e[h]in f?(g=f,f=f[e[h]]):f="";return d&&!f?!1:(!d&&typeof f=="function"&&(b.push(g),f=this.lv(f,b,c),b.pop()),f)},f:function(a,b,c,d){var e=!1,f=null,g=!1;for(var h=b.length-1;h>=0;h--){f=b[h];if(f&&typeof f=="object"&&a in f){e=f[a],g=!0;break}}return g?(!d&&typeof e=="function"&&(e=this.lv(e,b,c)),e):d?!1:""},ho:function(a,b,c,d,e){var f=this.c,g=this.options;g.delimiters=e;var d=a.call(b,d);return d=d==null?String(d):d.toString(),this.b(f.compile(d,g).render(b,c)),!1},b:b?function(a){this.buf.push(a)}:function(a){this.buf+=a},fl:b?function(){var a=this.buf.join("");return this.buf=[],a}:function(){var a=this.buf;return this.buf="",a},ls:function(a,b,c,d,e,f,g){var h=b[b.length-1],i=null;if(!d&&this.c&&a.length>0)return this.ho(a,h,c,this.text.substring(e,f),g);i=a.call(h);if(typeof i=="function"){if(d)return!0;if(this.c)return this.ho(i,h,c,this.text.substring(e,f),g)}return i},lv:function(a,b,c){var d=b[b.length-1],e=a.call(d);if(typeof e=="function"){e=i(e.call(d));if(this.c&&~e.indexOf("{{"))return this.c.compile(e,this.options).render(d,c)}return i(e)}};var c=/&/g,d=/</g,e=/>/g,f=/\'/g,g=/\"/g,h=/[&<>\"\']/,k=Array.isArray||function(a){return Object.prototype.toString.call(a)==="[object Array]"}})(typeof exports!="undefined"?exports:Hogan)

// Copyright 2014 Mikhail Kalashnik
var part=function(){var e=!1,t=[],a={},n=function(e){return e.map(function(e){return a[e]})};return"undefined"!=typeof window?document.addEventListener("DOMContentLoaded",function(){for(e=!0;t.length;){var a=t.shift();a()}},!1):e=!0,function(r,o,i){var l=function(){"string"==typeof r?a[r]=i?i.apply(null,n(o)):o():o.apply(null,n(r))};e?l():t.push(l)}}();part("dom",function(){"use strict";var e,t=function(e,t){var a,n="ontouchstart"in window;if(n){var r;e.addEventListener("touchstart",function(){"mouse"===a?(a=null,r=!1):(a="touch",r=!0)},!1),e.addEventListener("touchmove",function(){r=!1},!1),e.addEventListener("touchcancel",function(){r=!1},!1),e.addEventListener("touchend",function(e){r&&t(e)},!1)}window.mkIsMobile&&n||e.addEventListener("click",function(e){"touch"===a?a=null:(a="mouse",t(e))},!1)},a=function(e,a,n){"universalClick"===a?t(e,n):"transitionend"===a?["transitionend","webkitTransitionEnd"].forEach(function(t){e.addEventListener(t,n,!1)}):"animationend"===a?["animationend","webkitAnimationEnd","MSAnimationEnd"].forEach(function(t){e.addEventListener(t,n,!1)}):e.addEventListener(a,n)},n=function(e,t,a){e.classList[a?"add":"remove"](t)},r=function(e){this.elements=e?e:[],this.iterate=function(e){for(var t=-1,a=this.elements.length;++t<a;)e(this.elements[t])},this.toggleClass=function(e,t){this.iterate(function(a){n(a,e,t)})},this.listen=function(e,t){this.iterate(function(n){a(n,e,t)})}},o=function(t){var a=t.target;"setSelectionRange"in a&&""!==a.value&&(clearTimeout(e),e=setTimeout(function(){a.setSelectionRange(0,a.value.length)},0))},i={},l=function(e){return i[e]||(i[e]=document.getElementById(e)),i[e]},s=function(){var e={},t={},a={text:function(e,t){e.textContent=t},html:function(e,t){e.innerHTML=t},display:function(e,t){e.style.display=t}},n=function(t,n,r){e[t]||(e[t]={type:null,value:null});var o=e[t];(o.type!==n||o.value!==n)&&(o.type=n,o.value=r,a[n](l(t),r))},r=function(){Object.keys(t).forEach(function(e){n(e,t[e].type,t[e].value)}),t={}};return{defer:function(e,a,n){t[e]={type:a,value:n}},runDeferred:function(){r()},instantly:n}}();return{id:l,find:function(e,t){return new r((t||document).querySelectorAll(e))},selectOnFocus:function(e,t){a(e,"focus",function(e){o(e),t&&t()})},toggleClass:n,updater:s,listen:a,trigger:function(e,t){var a=document.createEvent("HTMLEvents");a.initEvent(t,!0,!1),e.dispatchEvent(a)},listenCustom:function(e,t){a(window,e,function(e){t(e.detail)})},triggerCustom:function(e,t){var a=document.createEvent("CustomEvent");a.initCustomEvent(e,!1,!1,t||{}),window.dispatchEvent(a)}}}),part("goal",["dom"],function(e){"use strict";var t,a=[],n={},r=!1,o=!0,i=function(){return r&&o},l=function(e,a){t.reachGoal(e,a)},s=function(){i()&&Object.keys(n).forEach(function(e){l(e,n[e])})};e.listen(window,"load",function(){o=!0,s()}),window.yandexMetrikaLoadCallback=function(e){r=!0,t=e,s()};var c=function(e,t){if(-1===a.indexOf(e)){a.push(e);var r=t||null;i()?l(e,r):n[e]=r}},u=function(){c("PRINT")};if(window.matchMedia){var d=window.matchMedia("print");d.addListener(function(e){e.matches||u()})}return window.addEventListener("afterprint",u,!1),{reach:c}}),part("navigation",["dom"],function(e){"use strict";var t=function(e){var t=0;do t+=e.offsetTop;while(e=e.offsetParent);return t},a=15;if(!window.mkIsMobile){var n=12,r=15,o=e.id("menu"),i=o.offsetHeight;a+=i+n+r,e.id("menu-wrapper").style.height=i+"px";var l=t(o)-n,s=!1;e.listen(window,"scroll",function(){var e=window.pageYOffset;e>l?s||(o.classList.add("button-group_menu-fixed"),s=!0):s&&(o.classList.remove("button-group_menu-fixed"),s=!1)})}var c=function(e,n){var r=window.pageYOffset,o=t(e)-a,i=r>o,l=i?r-o:o-r,s=100+l/20,c=16,u=Math.round(l/(s/c));!function d(){setTimeout(function(){i?(r-=u,o>r&&(r=o)):(r+=u,r>o&&(r=o)),window.scrollTo(window.pageXOffset,r),r!==o?d():n&&n()},c)}()};return e.find(".js-anchor").listen("universalClick",function(t){t.preventDefault(),c(e.id(t.currentTarget.getAttribute("data-for")))}),{scrollTo:c}}),part("localStorageSet",["dom","goal","navigation"],function(e,t,a){"use strict";var n=["data5","light-boosted-1","light-boosted-2","light-boosted-3","light-boosted-4","dark-boosted-1","dark-boosted-2","spells-boosted","settingsMode"],r="storage-quota-exceeded",o=e.id(r);return function(i,l,s){void 0===s&&(s=-2);var c;try{localStorage.setItem(i,l)}catch(u){t.reach("QUOTA_EXCEEDED",{quotaExceededFavoritesCount:""+s});var d={};n.forEach(function(e){d[e]=localStorage.getItem(e)}),localStorage.clear(),Object.keys(d).forEach(function(e){d[e]&&localStorage.setItem(e,d[e])}),d=null;try{localStorage.setItem(i,l)}catch(u){if(c="<strong>Attention!</strong> Looks like we have exceeded the quota to store Clash Calc data.",s>0)t.reach("QUOTA_EXCEEDED_AGAIN",{quotaExceededAgainFavoritesCount:""+s}),c+=" Please remove unused army compositions from favorites.";else{var f=-1,p=localStorage.getItem(n[0]);p&&(f=p.length),t.reach("QUOTA_EXCEEDED_UNKNOWN",{quotaExceededDataLength:""+f}),c+=" Normally this shouldn’t have happened.Perhaps your browser is configured in a special way.To fix the problem please check the settings related to the Local Storage."}}}return c?(e.updater.instantly(r,"html",c),e.updater.instantly(r,"display",""),a.scrollTo(o),!1):(e.updater.instantly(r,"display","none"),!0)}}),part("common",function(){"use strict";return{objectCopy:function(e){var t=e.constructor();return Object.keys(e).forEach(function(a){t[a]=e[a]}),t},numberFormat:function(e){return(""+e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},convertToTitle:function(e){return e.replace("_"," ").replace(/-/g,".")},getFormattedTime:function(e,t){var a="",n=e;if(n>3599&&(a+=Math.floor(n/3600)+"h&thinsp;",n%=3600,t=!0),n>59){var r=Math.floor(n/60);n%=60,t&&n&&r++,a+=r+"m&thinsp;"}else a+="0m&thinsp;";return""!==a&&t||(a+=n+"s"),a},Dict:function(e){this.data=e,this.get=function(e,t){var a=this.data[e];return void 0===t||void 0!==a&&null!==a?a:t},this.set=function(e,t){this.data[e]=t},this.getAll=function(){return this.data}}}}),part("converter",["goal"],function(e){"use strict";var t=function(e,t){var a=[28,29,30,31,32,33,34,35,36,37,54,55,56,57,62],n=63,r=0;a.forEach(function(t){void 0!==e[t-r]&&(e.splice(t-r,1),r++)}),void 0!==e[n-r]&&(t&&localStorage.setItem("settingsMode",2===e[n-r]?"off":"on"),e.splice(n-r,1))},a=function(e){var t=[0,18,19,20,21,22,23,24,25,26,27,32,33,34,35,40,41,42,43,45,47];t.forEach(function(t){e[t]||(e[t]=0),e[t]++})};if(localStorage.getItem("data3")&&!localStorage.getItem("data4")){var n=JSON.parse(localStorage.getItem("data3"));n.forEach(function(e,a){t(e,0===a)}),localStorage.setItem("data4",JSON.stringify(n)),e.reach("CONVERTED3TO4")}if(localStorage.getItem("data4")&&!localStorage.getItem("data5")){var r=JSON.parse(localStorage.getItem("data4"));r.forEach(a),localStorage.setItem("data5",JSON.stringify(r)),e.reach("CONVERTED4TO5")}return["savedData","savedCalculations","data","data2","data3","data4"].forEach(function(e){localStorage.removeItem(e)}),{oldConvert3to4:t,oldConvert4to5:a}}),part("types",function(){"use strict";var e={light:{Barbarian:[20,[0,25,40,60,80,100,150],1,1,{1:1,3:2,5:3,7:4,8:5,9:6}],Archer:[25,[0,50,80,120,160,200,300],1,2,{1:1,3:2,5:3,7:4,8:5,9:6}],Goblin:[30,[0,25,40,60,80,100,150],1,3,{1:1,3:2,5:3,7:4,8:5,10:6}],Giant:[120,[0,500,1e3,1500,2e3,2500,3e3],5,4,{1:1,2:1,4:2,6:3,7:4,8:5,9:6}],Wall_Breaker:[120,[0,1e3,1500,2e3,2500,3e3,3500],2,5,{1:1,3:1,4:2,6:3,7:4,8:5,10:6}],Balloon:[480,[0,2e3,2500,3e3,3500,4e3,4500],5,6,{1:1,4:2,6:3,7:4,8:5,9:6}],Wizard:[480,[0,1500,2e3,2500,3e3,3500,4e3],4,7,{1:1,5:2,6:3,7:4,8:5,10:6}],Healer:[900,[0,5e3,6e3,8e3,1e4],14,8,{1:1,6:1,7:2,8:3,9:4}],Dragon:[1800,[0,25e3,3e4,36e3,42e3],20,9,{1:1,7:2,8:3,10:4}],"P-E-K-K-A-":[2700,[0,3e4,35e3,42e3,5e4],25,10,{1:1,8:3,10:4}]},dark:{Minion:[45,[0,6,7,8,9,10,11],2,1,{1:1,7:2,8:4,9:5,10:6}],Hog_Rider:[120,[0,40,45,52,58,65],5,2,{1:1,7:2,8:4,9:5}],Valkyrie:[900,[0,70,100,130,160],8,3,{1:1,7:1,8:2,9:4}],Golem:[2700,[0,450,525,600,675,750],30,4,{1:1,8:2,9:4,10:5}],Witch:[1200,[0,250,350],12,5,{1:1,9:2}]},spells:{Lightning:[1800,[0,15e3,16500,18e3,2e4,22e3,24e3],1,1,{1:1,5:4,8:5,10:6}],Healing:[1800,[0,15e3,16500,18e3,2e4,22e3,24e3],1,2,{1:1,6:3,7:4,8:5,9:6}],Rage:[2700,[0,23e3,25e3,27e3,3e4,33e3],1,3,{1:1,7:4,8:5}],Jump:[2700,[0,23e3,29e3],1,4,{1:1,9:2}],Freeze:[2700,[0,26e3,29e3,31e3,33e3,35e3],1,5,{1:1,10:5}]}};return{data:e,iterateTree:function(t){Object.keys(e).forEach(function(a){Object.keys(e[a]).forEach(function(n){t(a,n,e[a][n])})})},buildings:{light:{count:4,queue:[0,20,25,30,35,40,45,50,55,60,75],maxLevel:10,firstRequired:!0,th:{1:[3,0,0,0],2:[4,4,0,0],3:[5,5,0,0],4:[6,6,6,0],5:[7,7,7,0],6:[8,8,8,0],7:[9,9,9,9],8:[10,10,10,10]}},dark:{count:2,queue:[0,40,50,60,70,80],maxLevel:5,th:{1:[0,0],7:[2,0],8:[4,4],9:[5,5]}},spells:{max:5}}}}),part("storage",["common","localStorageSet"],function(e,t){"use strict";var a=["light-level-1","light-level-2","light-level-3","light-level-4","dark-level-1","dark-level-2","army-camps","spells-level","Barbarian","Archer","Goblin","Giant","Wall_Breaker","Balloon","Wizard","Healer","Dragon","P-E-K-K-A-","Barbarian-level","Archer-level","Goblin-level","Giant-level","Wall_Breaker-level","Balloon-level","Wizard-level","Healer-level","Dragon-level","P-E-K-K-A--level","Lightning","Healing","Rage","Jump","Lightning-level","Healing-level","Rage-level","Jump-level","Minion","Hog_Rider","Valkyrie","Golem","Minion-level","Hog_Rider-level","Valkyrie-level","Golem-level","Freeze","Freeze-level","Witch","Witch-level"],n=function(e){var t=[];return a.forEach(function(a){var n;n=e.hasOwnProperty(a)?e[a]:0,t.push(n)}),t},r=function(e){var t={};return a.forEach(function(a,n){t[a]=void 0===e[n]?0:e[n]}),t},o="data5",i=function(e){var t=localStorage.getItem(o);return t=t&&JSON.parse(t)||[],e?t:t=t.map(r)},l=i().map(function(t){return new e.Dict(t)});return{getRaw:function(){return i(!0)},all:l,current:l[0]||new e.Dict({}),save:function(){l[0]=this.current;var e=l.map(function(e){return e.getAll()}),a=e.map(n);return t(o,JSON.stringify(a),l.length-1)},dataArrayToObject:r,dataObjectToArray:n}}),part("calculate",["storage","types","dom","goal"],function(e,t,a,n){"use strict";var r={};Object.keys(t.data).forEach(function(e){r[e]=[],Object.keys(t.data[e]).forEach(function(a){r[e].unshift(t.data[e][a].concat(a))})});var o=function(e,t){var a=e.getActualTime(),n=t.getActualTime();return n>a?-1:a>n?1:e.space<t.space?-1:e.space>t.space?1:e.maxSpace<t.maxSpace?-1:e.maxSpace>t.maxSpace?1:0},i=function(e,t){return e.level<t.level?-1:e.level>t.level?1:o(e,t)},l=function(e,t,a,n,r){var l=e.filter(function(e){return e.level>=t&&e.space+a<=e.maxSpace});if(!l.length)return null;if(l.length>1){if(1===a){var s=l.filter(function(e){return e.getActualTime()+n<=r});if(s.length)return s.length>1&&s.sort(i),s[0]}l.sort(o)}return l[0]},s=function(e,t,a,n){var r=!0,o=0,i=0;t.forEach(function(e){r&&e[1]%n!==0&&(r=!1),o=Math.max(e[2],o),i+=e[1]*e[4]});var s=!0,c=0,u=[];e.forEach(function(t){if(0!==t.level){var a=t.isBoosted===e[0].isBoosted;!r||t.level>=o&&a||(r=!1),!s||t.level===e[0].level&&a||(s=!1),u.push(t.num),c+=t.maxSpace}}),r=r&&c>=i;for(var d=!1;t.length;){var f=t.shift(),p=f[0],v=f[1],m=f[2],g=f[3],h=f[4];if(r){var b=v/n,y=b*g,T=b*h;e.forEach(function(e){0!==e.level&&(e.units[p]=b,e.time+=y,e.space+=T)})}else for(var S=null;v--;){var C=!0;if(S){var E=S.getActualTime()+g,k=S.space+h;1===h&&a>=E&&k<=S.maxSpace&&(C=!1)}if(C&&(S=l(e,m,h,g,a)),null===S){d=!0;break}S.units[p]?S.units[p]++:S.units[p]=1,S.time+=g,S.space+=h}}return d||!s||r||(e.sort(function(e,t){return t.getActualTime()-e.getActualTime()}),e.forEach(function(e,t){0!==e.level&&(e.num=u[t])})),!d},c=function(e,o){var i;if("spells"===e)i=o.storage.get("spells-level");else{for(var l=[],c=0;++c<=t.buildings[e].count;)l.push(o.storage.get(e+"-level-"+c));i=Math.max.apply(null,l)}for(var u={capLevel:o.capLevel,levelValue:i,objects:[]},d=0,f=0,p=0,v=0,m=0,g=[],h=-1,b=r[e].length;++h<b;){var y={},T=r[e][h];if(!(T[3]>i)){var S=T[5],C=o.storage.get(S,0),E=o.storage.get(S+"-level"),k=T[1][E],x=k*C;if(y.name=S,y.summaryCost=x,y.level=E,y.minBarrackLevel=T[3],d+=x,p+=T[2]*C,"spells"===e)v+=T[0]*C;else{var w=0;o.current&&(w=parseInt(a.id(S+"-subtract").value,10)||0),w&&n.reach("SUBTRACT"),C-=w,0>C&&(C=0),C&&(g.push([h,C,T[3],T[0],T[2]]),m=Math.max(m,T[0]),v+=T[0]*C),f+=k*C}y.quantity=C,u.objects.push(y)}}if(u.typesSortedLevel=r[e],u.totalCost=d,u.totalSpace=p,"spells"===e)u.totalTime=v;else{var A=l.map(function(a,n){var r=n+1,i=!1;return o.current&&(i="yes"===localStorage.getItem(e+"-boosted-"+r)),{num:r,time:0,space:0,maxSpace:t.buildings[e].queue[a],units:{},level:a,isBoosted:i,getActualTime:function(){return this.isBoosted?Math.floor(this.time/4):this.time}}}),j=A.filter(function(e){return e.isBoosted===!0}).length;j&&(m=Math.ceil(m/4));var L=A.filter(function(e){return e.level>0}).length,O=L+4*j,M=Math.max(Math.ceil(v/O),m);u.fillSuccess=s(A,g,M,L),u.barracksQueue=A,u.subtractedCost=f}return u},u=function(e){var a={params:e};return a.armyCampsSpace=e.storage.get("army-camps"),["light","dark","spells"].forEach(function(n){var r;r="spells"===n?t.buildings.spells.max:t.buildings[n].maxLevel,a[n]=c(n,{storage:e.storage,current:e.current,capLevel:r})}),a};return u}),part("calculateCurrent",["storage","dom","types","common","calculate"],function(e,t,a,n,r){"use strict";var o=function(e,a,n){var r=e-a;0>r&&(r='<span class="limit-exceeded">'+r+"</span>"),t.updater.defer(n+"-quantity","html","("+r+" free)");var o=a;a>e&&(o='<span class="limit-exceeded">'+a+"</span>"),o=o+"&thinsp;/&thinsp;"+("light"===n?"":e),t.updater.defer(n+"-space","html",o)},i=function(e,a){var r=[];if(e.fillSuccess){t.updater.defer(a+"-exceeded","display","none");for(var o=0,i=1;e.barracksQueue.length;){var l=e.barracksQueue.shift();for(var s in l.units)l.units[s]&&t.updater.defer("quantity-"+e.typesSortedLevel[s][5]+"-"+l.num,"text","×"+l.units[s]);var c=l.getActualTime();c>o&&(o=c,i=parseInt(l.num,10));var u=c?n.getFormattedTime(c):"";l.isBoosted&&(u='<span class="boosted">'+u+"</span>"),r[l.num]=u;var d="";0!==l.maxSpace&&(d=l.space+" / "),t.updater.defer(a+"-space-"+l.num,"text",d)}r.forEach(function(e,n){n===i&&(e='<span class="result">'+e+"</span>"),t.updater.defer(a+"-time-"+n,"html",e)})}else{t.updater.defer(a+"-exceeded","display","");for(var f=[],p=0;e.barracksQueue.length;){var l=e.barracksQueue.shift();t.updater.defer(a+"-time-"+l.num,"text",""),f[l.num]=l.space,p+=l.space}var v=!0;f.forEach(function(n,r){var o=a+"-space-"+r;0===n?t.updater.defer(o,"text",""):v?(n+=e.totalSpace-p,t.updater.defer(o,"html",'<span class="limit-exceeded result">'+n+"</span> / "),v=!1):t.updater.defer(o,"text",n+" / ")})}},l=t.find(".js-dark-object"),s=t.find(".js-spells-object");return t.listenCustom("calculateDone",function(e){if(("all"===e.params.type||"barrack-dark"===e.params.type)&&l.toggleClass("setting-mode-empty",0===e.dark.levelValue),"all"===e.params.type||"spells"!==e.params.type){var r=e.light.totalSpace+e.dark.totalSpace;o(e.armyCampsSpace,r,"light"),o(e.armyCampsSpace,r,"dark")}if("all"===e.params.type||"spells"===e.params.type){o(e.spells.levelValue,e.spells.totalSpace,"spells");var c="spells-time",u="";e.spells.totalTime&&(u="yes"===localStorage.getItem("spells-boosted")?'<span class="boosted">'+n.getFormattedTime(Math.floor(e.spells.totalTime/4),!0)+"</span>":n.getFormattedTime(e.spells.totalTime,!0)),t.updater.defer(c,"html",u),s.toggleClass("setting-mode-empty",0===e.spells.levelValue)}["light","dark","spells"].forEach(function(r){if(-1!==["all","barrack-"+r,r].indexOf(e.params.type)){for(var o=e[r].capLevel+1;--o>0;)t.updater.defer(r+"-building-level-"+o,"display",o>e[r].levelValue?"none":"");if(e[r].objects.forEach(function(e){if(t.updater.defer(e.name+"-summary","text",e.summaryCost?n.numberFormat(e.summaryCost):""),"spells"!==r)for(var o=0,i=a.buildings[r].count;++o<=i;)t.updater.defer("quantity-"+e.name+"-"+o,"text","")}),t.updater.defer(r+"-cost","text",n.numberFormat(e[r].totalCost)),"spells"!==r){i(e[r],r);var l=r+"-subtracted-cost";e[r].subtractedCost===e[r].totalCost?t.updater.defer(l,"text",""):t.updater.defer(l,"html","−&thinsp;"+n.numberFormat(e[r].totalCost-e[r].subtractedCost)+'&thinsp;=&thinsp;<span class="result">'+n.numberFormat(e[r].subtractedCost)+"</span>")}}}),t.updater.runDeferred()}),function(a){var n={type:a,storage:e.current,current:!0},o=r(n);e.save()&&t.triggerCustom("calculateDone",o)}}),part("collection",["dom","storage","calculateCurrent"],function(e,t,a){"use strict";var n=function(){var n={},r=function(n,r,o,i){Array.isArray(i)&&(i=i[r.index-1]),t.current.set(n,parseInt(i,10)),"dom"===o&&a(r.calculateType),("storage"===o||"settings"===o)&&(r.el.value=i),e.updater.instantly(n+"-text","text",i),r.onUpdate&&r.onUpdate(n,r)};return{add:function(t,a){a.el=e.id(t),"__fromAttr"===a.calculateType&&(a.calculateType=a.el.getAttribute("data-type")),a.update||(a.update=r),n[t]=a},update:function(e){var t=n[e];t.update(e,t,"dom",t.el.value)},updateFromStorage:function(){Object.keys(n).forEach(function(e){var a=n[e];a.update(e,a,"storage",t.current.get(e,a.el.value))})},updateSetting:function(e,t){Object.keys(n).forEach(function(a){var r=n[a];r.update(a,r,"settings",t(e,r.th))})}}}();return e.listenCustom("storageUpdated",n.updateFromStorage),n}),part("boostedCollection",["dom","goal","calculateCurrent","localStorageSet","storage"],function(e,t,a,n,r){"use strict";var o=function(){var o={};return{add:function(t,a){var n={type:a,el:e.id(t)};o[t]=n,"yes"===localStorage.getItem(t)&&(n.el.checked=!0)},update:function(e){var i=n(e,o[e].el.checked?"yes":"no",r.all.length-1);i&&(t.reach("BOOSTED",{boostedType:o[e].type}),a(o[e].type))}}}();return o}),part(["dom","goal","collection","calculateCurrent","localStorageSet","storage"],function(e,t,a,n,r,o){"use strict";var i=e.id("settings-toggle-button"),l=e.id("settings-toggle-mode"),s=function(){var t=r("settingsMode",l.checked?"on":"off",o.all.length-1);t&&(e.toggleClass(document.documentElement,"setting-mode-disabled",!l.checked),e.toggleClass(document.documentElement,"setting-mode-enabled",l.checked),e.toggleClass(i,"button_pressed",l.checked))};e.listen(l,"change",function(){s(),t.reach("SETTINGS_SWITCH")});var c=localStorage.getItem("settingsMode");"off"!==c&&(c="on"),l.checked="on"===c,s(),window.yandexMetrikaParams.settingsMode=c;var u=function(e,t){for(;!t.hasOwnProperty(e)&&e>0;)e--;return t[e]},d=function(e){a.updateSetting(e,u),t.reach("SETTINGS_TH",{settingsLevel:""+e}),n("all")};e.find(".js-settings-level").listen("universalClick",function(e){d(parseInt(e.currentTarget.textContent,10))})}),part("favorites",["storage","dom","calculate","common","navigation","goal","calculateCurrent"],function(e,t,a,n,r,o,i){"use strict";var l=function(){t.updater.instantly("view-shared","display","none")},s=t.id("light-anchor"),c=t.id("favorites"),u=new Hogan.Template(function(e,t,a){var n=this;return n.b(a=a||""),n.b('<div class="favorite js-favorite" data-num="'),n.b(n.v(n.f("index",e,t,0))),n.b('">'),n.b("\n"+a),n.s(n.f("types",e,t,1),e,t,0,66,462,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.s(n.f("totalCapacity",e,t,1),e,t,0,85,178,"{{ }}")&&(n.rs(e,t,function(e,t,a){a.b('<div class="favorite__capacity">'),a.b(a.v(a.f("totalCapacity",e,t,0))),a.b("&thinsp;/&thinsp;"),a.b(a.v(a.f("maximumCapacity",e,t,0))),a.b("</div>"),a.b("\n")}),e.pop()),n.b('<table class="favorite__objects">'),n.b("\n"+a),n.s(n.f("items",e,t,1),e,t,0,241,309,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b("<tr>"),n.b("\n"+a),n.b('<td class="number">×'),n.b(n.v(n.f("quantity",e,t,0))),n.b("</td>"),n.b("\n"+a),n.b("<td>"),n.b(n.v(n.f("name",e,t,0))),n.b("</td>"),n.b("\n"+a),n.b("</tr>"),n.b("\n")}),e.pop()),n.b("</table>"),n.b("\n"+a),n.b('<div class="favorite__time">'),n.b(n.t(n.f("time",e,t,0))),n.b("</div>"),n.b("\n"+a),n.b('<div class="favorite__cost">'),n.b("\n"+a),n.b('<span class="icon-'),n.b(n.v(n.f("costModifier",e,t,0))),n.b('">'),n.b(n.v(n.f("cost",e,t,0))),n.b("</span>"),n.b("\n"+a),n.b("</div>"),n.b("\n")}),e.pop()),n.b('<div class="favorite__actions">'),n.b("\n"+a),n.b('<button class="button js-favorite-load" data-num="'),n.b(n.v(n.f("index",e,t,0))),n.b('">'),n.b("\n"+a),n.b("Load"),n.b("\n"+a),n.b("</button>"),n.b("\n"+a),n.b('<button class="button js-favorite-delete" data-num="'),n.b(n.v(n.f("index",e,t,0))),n.b('">Remove</button>'),n.b("\n"+a),n.b("</div>"),n.b("\n"+a),n.b("</div>"),n.fl()}),d=function(a){o.reach("LOAD_SAVED");var c=n.objectCopy(e.all[a.currentTarget.getAttribute("data-num")].getAll());e.current=new n.Dict(c),t.triggerCustom("storageUpdated"),i("all"),l(),r.scrollTo(s)},f=function(a){o.reach("DELETE_SAVED");var n=a.currentTarget.getAttribute("data-num"),r=c.querySelector('.js-favorite[data-num="'+n+'"]');t.listen(r,"transitionend",function(){r.parentNode.removeChild(r),t.find(".js-favorite",c).iterate(function(e){var a=parseInt(e.getAttribute("data-num"),10);if(a>n){var r=""+(a-1);e.setAttribute("data-num",r),t.find("[data-num]",e).iterate(function(e){e.setAttribute("data-num",r)})}})}),r.classList.add("favorite_deleted"),e.all.splice(n,1),e.save()},p=function(e){e.currentTarget.classList.remove("favorite_added")},v=function(e,a){t.find(".js-favorite-load",e).listen("universalClick",d),t.find(".js-favorite-delete",e).listen("universalClick",f),a?t.listen(e,"animationend",p):t.find(".js-favorite",e).listen("animationend",p)},m=function(e,t){if(0!==t){var r={index:t,types:[]},o=a({type:"all",current:!1,storage:e}),i={light:"elixir",dark:"dark-elixir",spells:"elixir"};["light","dark","spells"].forEach(function(e){var t=[];if("spells"!==e&&o[e].objects.sort(function(e,t){return e.minBarrackLevel-t.minBarrackLevel}),o[e].objects.forEach(function(e){e.quantity&&t.push({name:n.convertToTitle(e.name),quantity:e.quantity})}),t.length){var a={items:t,cost:n.numberFormat(o[e].totalCost),costModifier:i[e]};if("spells"===e)a.totalCapacity=o[e].totalSpace,a.maximumCapacity=o[e].levelValue,a.time=n.getFormattedTime(o[e].totalTime,!0);else{var l;o[e].fillSuccess&&(l=Math.max.apply(null,o[e].barracksQueue.map(function(e){return e.time})),l=n.getFormattedTime(l)),a.time=l}r.types.push(a)}});var l=o.light.totalSpace+o.dark.totalSpace;return l&&(r.types[0].totalCapacity=l,r.types[0].maximumCapacity=o.armyCampsSpace),u.render(r)}},g=function(e){var t=c.querySelector('.js-favorite[data-num="'+e+'"]');r.scrollTo(t,function(){t.classList.add("favorite_added")})},h=function(){var t={},a=e.getRaw();if(a[0]){for(var r=JSON.stringify(a[0]),o=0,i=a.length;++o<i;){var l=JSON.stringify(a[o]);if(r===l)return t.exists=!0,t.index=o,t}var s=e.all.length,u=new n.Dict(n.objectCopy(e.current.getAll()));e.all.push(u),e.save()?(c.insertAdjacentHTML("beforeend",m(u,s)),v(c.lastChild,!0),t.added=!0,t.index=s):e.all.pop()}return t};t.find(".js-favorite-add").listen("universalClick",function(e){e.preventDefault();var t=h(!0);t.added&&o.reach("SAVE_COMPOSITION",{favoriteButton:e.target.textContent}),t.index&&g(t.index)}),setTimeout(function(){c.innerHTML=e.all.map(m).join(""),v(c)},0);var b=e.all.length;return window.yandexMetrikaParams.favoritesCount=""+(b?b-1:0),{addBeforeShare:function(){var e=h();(e.added||e.exists)&&(t.listen(t.id("view-shared"),"universalClick",l),t.updater.instantly("view-shared","display",""))}}}),part(["storage","dom","common","converter","favorites","goal"],function(e,t,a,n,r,o){"use strict";var i=0;if(-1!==location.search.indexOf("?l=")?i=1:-1!==location.search.indexOf("?s=")?i=2:-1!==location.search.indexOf("?s3=")&&(i=3),0!==i){var l=location.search.substr(3===i?4:3);l=decodeURIComponent(l);var s={};s["shareV"+i]=l,o.reach("SHARE",s),l=l.replace(/[a-z]/g,","),l=l.replace(/,(?=,)/g,",0"),","===l[0]&&(l="0"+l),l="["+l+"]";try{l=JSON.parse(l)}catch(c){l=!1}history.replaceState({},"",location.protocol+"//"+location.host+location.pathname),l&&(1===i?n.oldConvert3to4(l):2===i&&n.oldConvert4to5(l),l=e.dataArrayToObject(l),r.addBeforeShare(),e.current=new a.Dict(l),e.save())}var u=t.find(".js-share-link"),d=t.id("share-permalink");t.selectOnFocus(d,function(){o.reach("SHARE_LINK")});var f,p=function(){var t="http://mkln.ru/clash-of-clans/?s3=",n=a.objectCopy(e.current.getAll());n.settingsMode=1,n=e.dataObjectToArray(n),n=JSON.stringify(n),n=n.replace(/\b(?:null|0)\b/g,""),n=n.substr(1,n.length-2),n=n.replace(/,+$/,"");var r=97;n=n.replace(/,/g,function(){var e=String.fromCharCode(r);return 122===r?r=97:r++,e}),d.value=t+n;var o=encodeURIComponent(t+n);u.iterate(function(e){e.setAttribute("href",e.getAttribute("data-share-link").replace("{url}",o))})},v=t.find(".js-share"),m=function(e){var t="",a=["light","dark","spells"].some(function(t){return e[t].totalCost?!0:void 0});a?p():t="none",v.iterate(function(e){e.style.display=t})};t.listenCustom("calculateDone",function(e){clearTimeout(f),f=setTimeout(function(){m(e)},300)})}),part(["storage","types","dom","collection","boostedCollection","calculateCurrent"],function(e,t,a,n,r,o){"use strict";a.listen(document.body,"change",function(e){e.target.classList.contains("js-comp-level")?n.update(e.target.getAttribute("id")):e.target.classList.contains("js-comp-boosted")&&r.update(e.target.getAttribute("id"))}),n.add("army-camps",{calculateType:"all",th:{1:20,2:30,3:70,4:80,5:135,6:150,7:200,9:220,10:240}}),n.add("spells-level",{calculateType:"spells",th:{1:0,5:1,6:2,7:3,9:4,10:5},onUpdate:function(t){a.updater.instantly("spells-boosted-wrapper","display",0===e.current.get(t)?"none":"")}}),r.add("spells-boosted","spells"),["light","dark"].forEach(function(o){for(var i=t.buildings[o],l=0;++l<=i.count;)n.add(o+"-level-"+l,{index:l,calculateType:"barrack-"+o,th:i.th,onUpdate:function(t,n){var r="",l=e.current.get(t);0!==l&&(r=i.queue[l]),a.updater.instantly(o+"-maxSpace-"+n.index,"text",r),a.updater.instantly(o+"-boosted-wrapper-"+n.index,"display",0===l?"none":"")}}),r.add(o+"-boosted-"+l,o)}),t.iterateTree(function(e,t,a){n.add(t+"-level",{calculateType:"__fromAttr",th:a[4],attachEvent:!1})}),a.listen(document.body,"input",function(t){var a=t.target,n=a.classList.contains("js-comp-quantity"),r=a.classList.contains("js-comp-subtract");if(n||r){var i=parseInt(a.value,10)||0;0>i&&(i=0),a.value=i||"",n&&e.current.set(a.getAttribute("id"),i),o(a.getAttribute("data-type"))}}),a.listenCustom("storageUpdated",function(){t.iterateTree(function(t,n){a.id(n).value=e.current.get(n)||""})}),a.triggerCustom("storageUpdated"),o("all")}),part(["dom","goal"],function(e,t){"use strict";e.find(".js-fold").iterate(function(a){var n=a.querySelector(".js-fold-switcher"),r=n.getAttribute("data-goal");e.listen(n,"universalClick",function(){a.classList.toggle("fold_opened"),t.reach(r)})})}),part(["dom"],function(e){"use strict";var t=function(t,a){var n=parseInt(t.value,10);t.value="+"===a?isNaN(n)?1:++n:isNaN(n)||1>=n?"":--n,e.trigger(t,"input")},a={target:null,click:!1,firstTimeout:null,secondTimeout:null,x:0,y:0},n=function(){if(a.target){var n=e.id(a.target.getAttribute("data-for"));t(n,a.target.textContent)}},r=function(e){a.target=e,a.click=!0,a.firstTimeout=setTimeout(function(){a.click=!1,function e(){a.secondTimeout=setTimeout(function(){n(),e()},100)}()},500)},o=function(e,t){a.click=!1,(e>16||t>16)&&(a.target=null,clearTimeout(a.firstTimeout),clearTimeout(a.secondTimeout))},i=function(){a.target&&(a.click&&n(),a.target=null,clearTimeout(a.firstTimeout),clearTimeout(a.secondTimeout))},l="ontouchstart"in window;if(window.mkIsMobile&&l||(e.listen(document.body,"mousedown",function(e){e.target.classList.contains("js-spinner")&&(a.x=e.screenX,a.y=e.screenY,r(e.target))}),e.listen(document.body,"mousemove",function(e){if(a.target){var t=Math.abs(e.screenX-a.x),n=Math.abs(e.screenY-a.y);o(t,n)}}),e.listen(document.body,"mouseup",function(){i()})),l){var s=0;e.listen(document.body,"touchstart",function(e){e.target.classList.contains("js-spinner")&&(e.timeStamp-s<500&&e.preventDefault(),s=e.timeStamp,a.x=e.touches[0].screenX,a.y=e.touches[0].screenY,r(e.target))}),e.listen(document.body,"touchmove",function(e){if(a.target){var t=Math.abs(e.touches[0].screenX-a.x)/2,n=Math.abs(e.touches[0].screenY-a.y)/2;o(t,n)}}),e.listen(document.body,"touchcancel",function(){i()}),e.listen(document.body,"touchend",function(){i()})}e.listen(document.body,"keydown",function(e){!e.target.classList.contains("js-number")||e.metaKey||e.shiftKey||e.ctrlKey||e.altKey||-1===[38,40].indexOf(e.keyCode)||(t(e.target,38===e.keyCode?"+":"-"),e.preventDefault())}),e.find(".js-number").iterate(e.selectOnFocus)}),part(["dom","goal"],function(e,t){"use strict";e.find(".js-reset").listen("universalClick",function(a){var n=a.currentTarget.getAttribute("data-reset"),r=a.currentTarget.getAttribute("data-scope");e.find("input.js-comp-"+r+'[data-type="'+n+'"]').iterate(function(t){t.value="",e.trigger(t,"input")}),t.reach("RESET",{resetType:n})})});