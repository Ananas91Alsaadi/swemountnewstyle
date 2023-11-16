import{P as Ca,Q as ka,R as pi,S as Aa,U as de,V as Da,W as _a,X as Na,Y as fe,Z as ba,$ as La,a0 as Ra,_ as Ma,o as ut,c as lt,a as c,t as p,F as He,b as Kn,f as zn,n as rt,v as yi,N as xa,O as Oa}from"./index-33d6024f.js";import{_ as Pa}from"./swemount15-40c2f5c0.js";var Fa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,As=As||{},C=Fa||self;function tn(){}function yn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ke(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Va(e){return Object.prototype.hasOwnProperty.call(e,Gn)&&e[Gn]||(e[Gn]=++Ua)}var Gn="closure_uid_"+(1e9*Math.random()>>>0),Ua=0;function qa(e,t,n){return e.call.apply(e.bind,arguments)}function Ba(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function $(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$=qa:$=Ba,$.apply(null,arguments)}function je(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function Q(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function kt(){this.s=this.s,this.o=this.o}var Ha=0;kt.prototype.s=!1;kt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Ha!=0)&&Va(this)};kt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ar=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ds(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function vi(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(yn(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function Z(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};var ja=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{C.addEventListener("test",tn,t),C.removeEventListener("test",tn,t)}catch{}return e}();function en(e){return/^[\s\xa0]*$/.test(e)}var wi=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Qn(e,t){return e<t?-1:e>t?1:0}function vn(){var e=C.navigator;return e&&(e=e.userAgent)?e:""}function ct(e){return vn().indexOf(e)!=-1}function _s(e){return _s[" "](e),e}_s[" "]=tn;function Ka(e){var t=Qa;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var za=ct("Opera"),jt=ct("Trident")||ct("MSIE"),ur=ct("Edge"),ns=ur||jt,lr=ct("Gecko")&&!(vn().toLowerCase().indexOf("webkit")!=-1&&!ct("Edge"))&&!(ct("Trident")||ct("MSIE"))&&!ct("Edge"),Ga=vn().toLowerCase().indexOf("webkit")!=-1&&!ct("Edge");function cr(){var e=C.document;return e?e.documentMode:void 0}var nn;t:{var Wn="",Xn=function(){var e=vn();if(lr)return/rv:([^\);]+)(\)|;)/.exec(e);if(ur)return/Edge\/([\d\.]+)/.exec(e);if(jt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Ga)return/WebKit\/(\S+)/.exec(e);if(za)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Xn&&(Wn=Xn?Xn[1]:""),jt){var Yn=cr();if(Yn!=null&&Yn>parseFloat(Wn)){nn=String(Yn);break t}}nn=Wn}var Qa={};function Wa(){return Ka(function(){let e=0;const t=wi(String(nn)).split("."),n=wi("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=Qn(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Qn(i[2].length==0,r[2].length==0)||Qn(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var ss;if(C.document&&jt){var Ti=cr();ss=Ti||parseInt(nn,10)||void 0}else ss=void 0;var Xa=ss;function ge(e,t){if(Z.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(lr){t:{try{_s(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Ya[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ge.X.h.call(this)}}Q(ge,Z);var Ya={2:"touch",3:"pen",4:"mouse"};ge.prototype.h=function(){ge.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ae="closure_listenable_"+(1e6*Math.random()|0),Ja=0;function $a(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=i,this.key=++Ja,this.ba=this.ea=!1}function wn(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Ns(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function hr(e){const t={};for(const n in e)t[n]=e[n];return t}const Ei="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function dr(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<Ei.length;r++)n=Ei[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Tn(e){this.src=e,this.g={},this.h=0}Tn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=rs(e,t,s,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new $a(t,this.src,r,!!s,i),t.ea=n,e.push(t)),t};function is(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=ar(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(wn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function rs(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==s)return i}return-1}var bs="closure_lm_"+(1e6*Math.random()|0),Jn={};function fr(e,t,n,s,i){if(s&&s.once)return mr(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)fr(e,t[r],n,s,i);return null}return n=Ms(n),e&&e[Ae]?e.N(t,n,ke(s)?!!s.capture:!!s,i):gr(e,t,n,!1,s,i)}function gr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=ke(i)?!!i.capture:!!i,a=Rs(e);if(a||(e[bs]=a=new Tn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Za(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)ja||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(yr(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Za(){function e(n){return t.call(e.src,e.listener,n)}const t=tu;return e}function mr(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)mr(e,t[r],n,s,i);return null}return n=Ms(n),e&&e[Ae]?e.O(t,n,ke(s)?!!s.capture:!!s,i):gr(e,t,n,!0,s,i)}function pr(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)pr(e,t[r],n,s,i);else s=ke(s)?!!s.capture:!!s,n=Ms(n),e&&e[Ae]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=rs(r,n,s,i),-1<n&&(wn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Rs(e))&&(t=e.g[t.toString()],e=-1,t&&(e=rs(t,n,s,i)),(n=-1<e?t[e]:null)&&Ls(n))}function Ls(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Ae])is(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(yr(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Rs(t))?(is(n,e),n.h==0&&(n.src=null,t[bs]=null)):wn(e)}}}function yr(e){return e in Jn?Jn[e]:Jn[e]="on"+e}function tu(e,t){if(e.ba)e=!0;else{t=new ge(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&Ls(e),e=n.call(s,t)}return e}function Rs(e){return e=e[bs],e instanceof Tn?e:null}var $n="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ms(e){return typeof e=="function"?e:(e[$n]||(e[$n]=function(t){return e.handleEvent(t)}),e[$n])}function K(){kt.call(this),this.i=new Tn(this),this.P=this,this.I=null}Q(K,kt);K.prototype[Ae]=!0;K.prototype.removeEventListener=function(e,t,n,s){pr(this,e,t,n,s)};function G(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new Z(t,e);else if(t instanceof Z)t.target=t.target||e;else{var i=t;t=new Z(s,e),dr(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Ke(o,s,!0,t)&&i}if(o=t.g=e,i=Ke(o,s,!0,t)&&i,i=Ke(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Ke(o,s,!1,t)&&i}K.prototype.M=function(){if(K.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)wn(n[s]);delete e.g[t],e.h--}}this.I=null};K.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};K.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Ke(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&is(e.i,o),i=a.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var xs=C.JSON.stringify;function eu(){var e=Tr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class nu{constructor(){this.h=this.g=null}add(t,n){const s=vr.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var vr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new su,e=>e.reset());class su{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function iu(e){C.setTimeout(()=>{throw e},0)}function wr(e,t){os||ru(),as||(os(),as=!0),Tr.add(e,t)}var os;function ru(){var e=C.Promise.resolve(void 0);os=function(){e.then(ou)}}var as=!1,Tr=new nu;function ou(){for(var e;e=eu();){try{e.h.call(e.g)}catch(n){iu(n)}var t=vr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}as=!1}function En(e,t){K.call(this),this.h=e||1,this.g=t||C,this.j=$(this.lb,this),this.l=Date.now()}Q(En,K);y=En.prototype;y.ca=!1;y.R=null;y.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),G(this,"tick"),this.ca&&(Os(this),this.start()))}};y.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Os(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}y.M=function(){En.X.M.call(this),Os(this),delete this.g};function Ps(e,t,n){if(typeof e=="function")n&&(e=$(e,n));else if(e&&typeof e.handleEvent=="function")e=$(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:C.setTimeout(e,t||0)}function Er(e){e.g=Ps(()=>{e.g=null,e.i&&(e.i=!1,Er(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class au extends kt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Er(this)}M(){super.M(),this.g&&(C.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function me(e){kt.call(this),this.h=e,this.g={}}Q(me,kt);var Ii=[];function Ir(e,t,n,s){Array.isArray(n)||(n&&(Ii[0]=n.toString()),n=Ii);for(var i=0;i<n.length;i++){var r=fr(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Sr(e){Ns(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ls(t)},e),e.g={}}me.prototype.M=function(){me.X.M.call(this),Sr(this)};me.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function In(){this.g=!0}In.prototype.Aa=function(){this.g=!1};function uu(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var h=l[0];l=l[1];var d=h.split("_");o=2<=d.length&&d[1]=="type"?o+(h+"="+l+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function lu(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function qt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+hu(e,n)+(s?" "+s:"")})}function cu(e,t){e.info(function(){return"TIMEOUT: "+t})}In.prototype.info=function(){};function hu(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return xs(n)}catch{return t}}var xt={},Si=null;function Sn(){return Si=Si||new K}xt.Pa="serverreachability";function Cr(e){Z.call(this,xt.Pa,e)}Q(Cr,Z);function pe(e){const t=Sn();G(t,new Cr(t))}xt.STAT_EVENT="statevent";function kr(e,t){Z.call(this,xt.STAT_EVENT,e),this.stat=t}Q(kr,Z);function et(e){const t=Sn();G(t,new kr(t,e))}xt.Qa="timingevent";function Ar(e,t){Z.call(this,xt.Qa,e),this.size=t}Q(Ar,Z);function De(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return C.setTimeout(function(){e()},t)}var Cn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Dr={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Fs(){}Fs.prototype.h=null;function Ci(e){return e.h||(e.h=e.i())}function _r(){}var _e={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Vs(){Z.call(this,"d")}Q(Vs,Z);function Us(){Z.call(this,"c")}Q(Us,Z);var us;function kn(){}Q(kn,Fs);kn.prototype.g=function(){return new XMLHttpRequest};kn.prototype.i=function(){return{}};us=new kn;function Ne(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new me(this),this.O=du,e=ns?125:void 0,this.T=new En(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Nr}function Nr(){this.i=null,this.g="",this.h=!1}var du=45e3,ls={},sn={};y=Ne.prototype;y.setTimeout=function(e){this.O=e};function cs(e,t,n){e.K=1,e.v=Dn(pt(t)),e.s=n,e.P=!0,br(e,null)}function br(e,t){e.F=Date.now(),be(e),e.A=pt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),Vr(n.i,"t",s),e.C=0,n=e.l.H,e.h=new Nr,e.g=ro(e.l,n?t:null,!e.s),0<e.N&&(e.L=new au($(e.La,e,e.g),e.N)),Ir(e.S,e.g,"readystatechange",e.ib),t=e.H?hr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),pe(),uu(e.j,e.u,e.A,e.m,e.U,e.s)}y.ib=function(e){e=e.target;const t=this.L;t&&gt(e)==3?t.l():this.La(e)};y.La=function(e){try{if(e==this.g)t:{const h=gt(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>h)&&(h!=3||ns||this.g&&(this.h.h||this.g.fa()||_i(this.g)))){this.I||h!=4||t==7||(t==8||0>=d?pe(3):pe(2)),An(this);var n=this.g.aa();this.Y=n;e:if(Lr(this)){var s=_i(this.g);e="";var i=s.length,r=gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dt(this),ae(this);var o="";break e}this.h.i=new C.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,lu(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!en(a)){var l=a;break e}}l=null}if(n=l)qt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,hs(this,n);else{this.i=!1,this.o=3,et(12),Dt(this),ae(this);break t}}this.P?(Rr(this,h,o),ns&&this.i&&h==3&&(Ir(this.S,this.T,"tick",this.hb),this.T.start())):(qt(this.j,this.m,o,null),hs(this,o)),h==4&&Dt(this),this.i&&!this.I&&(h==4?eo(this.l,this):(this.i=!1,be(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,et(12)):(this.o=0,et(13)),Dt(this),ae(this)}}}catch{}finally{}};function Lr(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Rr(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=fu(e,n),i==sn){t==4&&(e.o=4,et(14),s=!1),qt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==ls){e.o=4,et(15),qt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else qt(e.j,e.m,i,null),hs(e,i);Lr(e)&&i!=sn&&i!=ls&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,et(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gs(t),t.K=!0,et(11))):(qt(e.j,e.m,n,"[Invalid Chunked Response]"),Dt(e),ae(e))}y.hb=function(){if(this.g){var e=gt(this.g),t=this.g.fa();this.C<t.length&&(An(this),Rr(this,e,t),this.i&&e!=4&&be(this))}};function fu(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?sn:(n=Number(t.substring(n,s)),isNaN(n)?ls:(s+=1,s+n>t.length?sn:(t=t.substr(s,n),e.C=s+n,t)))}y.cancel=function(){this.I=!0,Dt(this)};function be(e){e.V=Date.now()+e.O,Mr(e,e.O)}function Mr(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=De($(e.gb,e),t)}function An(e){e.B&&(C.clearTimeout(e.B),e.B=null)}y.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(cu(this.j,this.A),this.K!=2&&(pe(),et(17)),Dt(this),this.o=2,ae(this)):Mr(this,this.V-e)};function ae(e){e.l.G==0||e.I||eo(e.l,e)}function Dt(e){An(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Os(e.T),Sr(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function hs(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||ds(n.h,e))){if(!e.J&&ds(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)an(n),bn(n);else break t;zs(n),et(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=De($(n.cb,n),6e3));if(1>=Br(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else _t(n,11)}else if((e.J||n.g==e)&&an(n),!en(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const h=l[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const d=l[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const m=l[5];m!=null&&typeof m=="number"&&0<m&&(s=1.5*m,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const v=e.g;if(v){const A=v.g?v.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(A){var r=s.h;r.g||A.indexOf("spdy")==-1&&A.indexOf("quic")==-1&&A.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(qs(r,r.h),r.h=null))}if(s.D){const N=v.g?v.g.getResponseHeader("X-HTTP-Session-Id"):null;N&&(s.za=N,x(s.F,s.D,N))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=io(s,s.H?s.ka:null,s.V),o.J){Hr(s.h,o);var a=o,u=s.J;u&&a.setTimeout(u),a.B&&(An(a),be(a)),s.g=o}else Zr(s);0<n.i.length&&Ln(n)}else l[0]!="stop"&&l[0]!="close"||_t(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?_t(n,7):Ks(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}pe(4)}catch{}}function gu(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(yn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function mu(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(yn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function xr(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(yn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=mu(e),s=gu(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var Or=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pu(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function bt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof bt){this.h=t!==void 0?t:e.h,rn(this,e.j),this.s=e.s,this.g=e.g,on(this,e.m),this.l=e.l,t=e.i;var n=new ye;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ki(this,n),this.o=e.o}else e&&(n=String(e).match(Or))?(this.h=!!t,rn(this,n[1]||"",!0),this.s=ie(n[2]||""),this.g=ie(n[3]||"",!0),on(this,n[4]),this.l=ie(n[5]||"",!0),ki(this,n[6]||"",!0),this.o=ie(n[7]||"")):(this.h=!!t,this.i=new ye(null,this.h))}bt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(re(t,Ai,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(re(t,Ai,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(re(n,n.charAt(0)=="/"?wu:vu,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",re(n,Eu)),e.join("")};function pt(e){return new bt(e)}function rn(e,t,n){e.j=n?ie(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function on(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ki(e,t,n){t instanceof ye?(e.i=t,Iu(e.i,e.h)):(n||(t=re(t,Tu)),e.i=new ye(t,e.h))}function x(e,t,n){e.i.set(t,n)}function Dn(e){return x(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ie(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function re(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,yu),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function yu(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ai=/[#\/\?@]/g,vu=/[#\?:]/g,wu=/[#\?]/g,Tu=/[#\?@]/g,Eu=/#/g;function ye(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function At(e){e.g||(e.g=new Map,e.h=0,e.i&&pu(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}y=ye.prototype;y.add=function(e,t){At(this),this.i=null,e=Jt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Pr(e,t){At(e),t=Jt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Fr(e,t){return At(e),t=Jt(e,t),e.g.has(t)}y.forEach=function(e,t){At(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};y.oa=function(){At(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};y.W=function(e){At(this);let t=[];if(typeof e=="string")Fr(this,e)&&(t=t.concat(this.g.get(Jt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};y.set=function(e,t){return At(this),this.i=null,e=Jt(this,e),Fr(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};y.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function Vr(e,t,n){Pr(e,t),0<n.length&&(e.i=null,e.g.set(Jt(e,t),Ds(n)),e.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function Jt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Iu(e,t){t&&!e.j&&(At(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Pr(this,s),Vr(this,i,n))},e)),e.j=t}var Su=class{constructor(t,n){this.h=t,this.g=n}};function Ur(e){this.l=e||Cu,C.PerformanceNavigationTiming?(e=C.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(C.g&&C.g.Ga&&C.g.Ga()&&C.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Cu=10;function qr(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Br(e){return e.h?1:e.g?e.g.size:0}function ds(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function qs(e,t){e.g?e.g.add(t):e.h=t}function Hr(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ur.prototype.cancel=function(){if(this.i=jr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function jr(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Ds(e.i)}function Bs(){}Bs.prototype.stringify=function(e){return C.JSON.stringify(e,void 0)};Bs.prototype.parse=function(e){return C.JSON.parse(e,void 0)};function ku(){this.g=new Bs}function Au(e,t,n){const s=n||"";try{xr(e,function(i,r){let o=i;ke(i)&&(o=xs(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Du(e,t){const n=new In;if(C.Image){const s=new Image;s.onload=je(ze,n,s,"TestLoadImage: loaded",!0,t),s.onerror=je(ze,n,s,"TestLoadImage: error",!1,t),s.onabort=je(ze,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=je(ze,n,s,"TestLoadImage: timeout",!1,t),C.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function ze(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Le(e){this.l=e.ac||null,this.j=e.jb||!1}Q(Le,Fs);Le.prototype.g=function(){return new _n(this.l,this.j)};Le.prototype.i=function(e){return function(){return e}}({});function _n(e,t){K.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Hs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Q(_n,K);var Hs=0;y=_n.prototype;y.open=function(e,t){if(this.readyState!=Hs)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ve(this)};y.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||C).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Re(this)),this.readyState=Hs};y.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ve(this)),this.g&&(this.readyState=3,ve(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof C.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Kr(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function Kr(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}y.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Re(this):ve(this),this.readyState==3&&Kr(this)}};y.Va=function(e){this.g&&(this.response=this.responseText=e,Re(this))};y.Ua=function(e){this.g&&(this.response=e,Re(this))};y.ga=function(){this.g&&Re(this)};function Re(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ve(e)}y.setRequestHeader=function(e,t){this.v.append(e,t)};y.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function ve(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(_n.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var _u=C.JSON.parse;function P(e){K.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=zr,this.K=this.L=!1}Q(P,K);var zr="",Nu=/^https?$/i,bu=["POST","PUT"];y=P.prototype;y.Ka=function(e){this.L=e};y.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():us.g(),this.C=this.u?Ci(this.u):Ci(us),this.g.onreadystatechange=$(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){Di(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=C.FormData&&e instanceof C.FormData,!(0<=ar(bu,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Wr(this),0<this.B&&((this.K=Lu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$(this.qa,this)):this.A=Ps(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){Di(this,r)}};function Lu(e){return jt&&Wa()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}y.qa=function(){typeof As<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,G(this,"timeout"),this.abort(8))};function Di(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Gr(e),Nn(e)}function Gr(e){e.D||(e.D=!0,G(e,"complete"),G(e,"error"))}y.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,G(this,"complete"),G(this,"abort"),Nn(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Nn(this,!0)),P.X.M.call(this)};y.Ha=function(){this.s||(this.F||this.v||this.l?Qr(this):this.fb())};y.fb=function(){Qr(this)};function Qr(e){if(e.h&&typeof As<"u"&&(!e.C[1]||gt(e)!=4||e.aa()!=2)){if(e.v&&gt(e)==4)Ps(e.Ha,0,e);else if(G(e,"readystatechange"),gt(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Or)[1]||null;if(!i&&C.self&&C.self.location){var r=C.self.location.protocol;i=r.substr(0,r.length-1)}s=!Nu.test(i?i.toLowerCase():"")}n=s}if(n)G(e,"complete"),G(e,"success");else{e.m=6;try{var o=2<gt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",Gr(e)}}finally{Nn(e)}}}}function Nn(e,t){if(e.g){Wr(e);const n=e.g,s=e.C[0]?tn:null;e.g=null,e.C=null,t||G(e,"ready");try{n.onreadystatechange=s}catch{}}}function Wr(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(C.clearTimeout(e.A),e.A=null)}function gt(e){return e.g?e.g.readyState:0}y.aa=function(){try{return 2<gt(this)?this.g.status:-1}catch{return-1}};y.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),_u(t)}};function _i(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case zr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}y.Ea=function(){return this.m};y.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Xr(e){let t="";return Ns(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function js(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Xr(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):x(e,t,n))}function se(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Yr(e){this.Ca=0,this.i=[],this.j=new In,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=se("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=se("baseRetryDelayMs",5e3,e),this.bb=se("retryDelaySeedMs",1e4,e),this.$a=se("forwardChannelMaxRetries",2,e),this.ta=se("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Ur(e&&e.concurrentRequestLimit),this.Fa=new ku,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}y=Yr.prototype;y.ma=8;y.G=1;function Ks(e){if(Jr(e),e.G==3){var t=e.U++,n=pt(e.F);x(n,"SID",e.I),x(n,"RID",t),x(n,"TYPE","terminate"),Me(e,n),t=new Ne(e,e.j,t,void 0),t.K=2,t.v=Dn(pt(n)),n=!1,C.navigator&&C.navigator.sendBeacon&&(n=C.navigator.sendBeacon(t.v.toString(),"")),!n&&C.Image&&(new Image().src=t.v,n=!0),n||(t.g=ro(t.l,null),t.g.da(t.v)),t.F=Date.now(),be(t)}so(e)}function bn(e){e.g&&(Gs(e),e.g.cancel(),e.g=null)}function Jr(e){bn(e),e.u&&(C.clearTimeout(e.u),e.u=null),an(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&C.clearTimeout(e.m),e.m=null)}function Ln(e){qr(e.h)||e.m||(e.m=!0,wr(e.Ja,e),e.C=0)}function Ru(e,t){return Br(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=De($(e.Ja,e,t),no(e,e.C)),e.C++,!0)}y.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Ne(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=hr(r),dr(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=$r(this,i,t),n=pt(this.F),x(n,"RID",e),x(n,"CVER",22),this.D&&x(n,"X-HTTP-Session-Id",this.D),Me(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(Xr(r)))+"&"+t:this.o&&js(n,this.o,r)),qs(this.h,i),this.Ya&&x(n,"TYPE","init"),this.O?(x(n,"$req",t),x(n,"SID","null"),i.Z=!0,cs(i,n,null)):cs(i,n,t),this.G=2}}else this.G==3&&(e?Ni(this,e):this.i.length==0||qr(this.h)||Ni(this))};function Ni(e,t){var n;t?n=t.m:n=e.U++;const s=pt(e.F);x(s,"SID",e.I),x(s,"RID",n),x(s,"AID",e.T),Me(e,s),e.o&&e.s&&js(s,e.o,e.s),n=new Ne(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=$r(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),qs(e.h,n),cs(n,s,t)}function Me(e,t){e.ia&&Ns(e.ia,function(n,s){x(t,s,n)}),e.l&&xr({},function(n,s){x(t,s,n)})}function $r(e,t,n){n=Math.min(e.i.length,n);var s=e.l?$(e.l.Ra,e.l,e):null;t:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const h=i[u].g;if(l-=r,0>l)r=Math.max(0,i[u].h-100),a=!1;else try{Au(h,o,"req"+l+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function Zr(e){e.g||e.u||(e.Z=1,wr(e.Ia,e),e.A=0)}function zs(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=De($(e.Ia,e),no(e,e.A)),e.A++,!0)}y.Ia=function(){if(this.u=null,to(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=De($(this.eb,this),e)}};y.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,et(10),bn(this),to(this))};function Gs(e){e.B!=null&&(C.clearTimeout(e.B),e.B=null)}function to(e){e.g=new Ne(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=pt(e.sa);x(t,"RID","rpc"),x(t,"SID",e.I),x(t,"CI",e.L?"0":"1"),x(t,"AID",e.T),x(t,"TYPE","xmlhttp"),Me(e,t),e.o&&e.s&&js(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Dn(pt(t)),n.s=null,n.P=!0,br(n,e)}y.cb=function(){this.v!=null&&(this.v=null,bn(this),zs(this),et(19))};function an(e){e.v!=null&&(C.clearTimeout(e.v),e.v=null)}function eo(e,t){var n=null;if(e.g==t){an(e),Gs(e),e.g=null;var s=2}else if(ds(e.h,t))n=t.D,Hr(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=Sn(),G(s,new Ar(s,n)),Ln(e)}else Zr(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(s==1&&Ru(e,t)||s==2&&zs(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:_t(e,5);break;case 4:_t(e,10);break;case 3:_t(e,6);break;default:_t(e,2)}}}function no(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function _t(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=$(e.kb,e);n||(n=new bt("//www.google.com/images/cleardot.gif"),C.location&&C.location.protocol=="http"||rn(n,"https"),Dn(n)),Du(n.toString(),s)}else et(2);e.G=0,e.l&&e.l.va(t),so(e),Jr(e)}y.kb=function(e){e?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function so(e){if(e.G=0,e.la=[],e.l){const t=jr(e.h);(t.length!=0||e.i.length!=0)&&(vi(e.la,t),vi(e.la,e.i),e.h.i.length=0,Ds(e.i),e.i.length=0),e.l.ua()}}function io(e,t,n){var s=n instanceof bt?pt(n):new bt(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),on(s,s.m);else{var i=C.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new bt(null,void 0);s&&rn(r,s),t&&(r.g=t),i&&on(r,i),n&&(r.l=n),s=r}return n=e.D,t=e.za,n&&t&&x(s,n,t),x(s,"VER",e.ma),Me(e,s),s}function ro(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new P(new Le({jb:!0})):new P(e.ra),t.Ka(e.H),t}function oo(){}y=oo.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Ra=function(){};function un(){if(jt&&!(10<=Number(Xa)))throw Error("Environmental error: no available transport.")}un.prototype.g=function(e,t){return new st(e,t)};function st(e,t){K.call(this),this.g=new Yr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!en(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!en(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new $t(this)}Q(st,K);st.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;et(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=io(e,null,e.V),Ln(e)};st.prototype.close=function(){Ks(this.g)};st.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=xs(e),e=n);t.i.push(new Su(t.ab++,e)),t.G==3&&Ln(t)};st.prototype.M=function(){this.g.l=null,delete this.j,Ks(this.g),delete this.g,st.X.M.call(this)};function ao(e){Vs.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Q(ao,Vs);function uo(){Us.call(this),this.status=1}Q(uo,Us);function $t(e){this.g=e}Q($t,oo);$t.prototype.xa=function(){G(this.g,"a")};$t.prototype.wa=function(e){G(this.g,new ao(e))};$t.prototype.va=function(e){G(this.g,new uo)};$t.prototype.ua=function(){G(this.g,"b")};un.prototype.createWebChannel=un.prototype.g;st.prototype.send=st.prototype.u;st.prototype.open=st.prototype.m;st.prototype.close=st.prototype.close;Cn.NO_ERROR=0;Cn.TIMEOUT=8;Cn.HTTP_ERROR=6;Dr.COMPLETE="complete";_r.EventType=_e;_e.OPEN="a";_e.CLOSE="b";_e.ERROR="c";_e.MESSAGE="d";K.prototype.listen=K.prototype.N;P.prototype.listenOnce=P.prototype.O;P.prototype.getLastError=P.prototype.Oa;P.prototype.getLastErrorCode=P.prototype.Ea;P.prototype.getStatus=P.prototype.aa;P.prototype.getResponseJson=P.prototype.Sa;P.prototype.getResponseText=P.prototype.fa;P.prototype.send=P.prototype.da;P.prototype.setWithCredentials=P.prototype.Ka;var Mu=function(){return new un},xu=function(){return Sn()},Zn=Cn,Ou=Dr,Pu=xt,bi={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Fu=Le,Ge=_r,Vu=P;const Li="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}X.UNAUTHENTICATED=new X(null),X.GOOGLE_CREDENTIALS=new X("google-credentials-uid"),X.FIRST_PARTY=new X("first-party-uid"),X.MOCK_USER=new X("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zt="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=new Ra("@firebase/firestore");function Ri(){return Rt.logLevel}function w(e,...t){if(Rt.logLevel<=fe.DEBUG){const n=t.map(Qs);Rt.debug(`Firestore (${Zt}): ${e}`,...n)}}function yt(e,...t){if(Rt.logLevel<=fe.ERROR){const n=t.map(Qs);Rt.error(`Firestore (${Zt}): ${e}`,...n)}}function fs(e,...t){if(Rt.logLevel<=fe.WARN){const n=t.map(Qs);Rt.warn(`Firestore (${Zt}): ${e}`,...n)}}function Qs(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e="Unexpected state"){const t=`FIRESTORE (${Zt}) INTERNAL ASSERTION FAILED: `+e;throw yt(t),new Error(t)}function R(e,t){e||S()}function D(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends Aa{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Uu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(X.UNAUTHENTICATED))}shutdown(){}}class qu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Bu{constructor(t){this.t=t,this.currentUser=X.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let r=new Tt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Tt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{w("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(w("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Tt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(w("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(R(typeof s.accessToken=="string"),new lo(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return R(t===null||typeof t=="string"),new X(t)}}class Hu{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=X.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(R(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class ju{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Hu(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(X.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ku{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zu{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=r=>{r.error!=null&&w("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,w("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{w("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):w("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(R(typeof n.token=="string"),this.A=n.token,new Ku(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=Gu(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function L(e,t){return e<t?-1:e>t?1:0}function Kt(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new I(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new I(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new I(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new I(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return q.fromMillis(Date.now())}static fromDate(t){return q.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new q(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?L(this.nanoseconds,t.nanoseconds):L(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.timestamp=t}static fromTimestamp(t){return new k(t)}static min(){return new k(new q(0,0))}static max(){return new k(new q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,n,s){n===void 0?n=0:n>t.length&&S(),s===void 0?s=t.length-n:s>t.length-n&&S(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return we.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof we?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class O extends we{construct(t,n,s){return new O(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new I(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new O(n)}static emptyPath(){return new O([])}}const Qu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class J extends we{construct(t,n,s){return new J(t,n,s)}static isValidIdentifier(t){return Qu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),J.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new J(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new I(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new I(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new I(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new I(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new J(n)}static emptyPath(){return new J([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.path=t}static fromPath(t){return new T(O.fromString(t))}static fromName(t){return new T(O.fromString(t).popFirst(5))}static empty(){return new T(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&O.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return O.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new T(new O(t.slice()))}}function Wu(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=k.fromTimestamp(s===1e9?new q(n+1,0):new q(n,s));return new It(i,T.empty(),t)}function Xu(e){return new It(e.readTime,e.key,-1)}class It{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new It(k.min(),T.empty(),-1)}static max(){return new It(k.max(),T.empty(),-1)}}function Yu(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=T.comparator(e.documentKey,t.documentKey),n!==0?n:L(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $u{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==Ju)throw e;w("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,s)=>{n(t)})}static reject(t){return new g((n,s)=>{s(t)})}static waitFor(t){return new g((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},u=>s(u))}),o=!0,r===i&&n()})}static or(t){let n=g.resolve(!1);for(const s of t)n=n.next(i=>i?g.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new g((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let u=0;u<r;u++){const l=u;n(t[l]).next(h=>{o[l]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(t,n){return new g((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function Oe(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}Ws.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t,n,s,i,r,o,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Te{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Te("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Te&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function te(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ho(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(e){return e==null}function ln(e){return e===0&&1/e==-1/0}function tl(e){return typeof e=="number"&&Number.isInteger(e)&&!ln(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new el("Invalid base64 string: "+i):i}}(t);return new tt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new tt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return L(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const nl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function St(e){if(R(!!e),typeof e=="string"){let t=0;const n=nl.exec(e);if(R(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:V(e.seconds),nanos:V(e.nanos)}}function V(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function zt(e){return typeof e=="string"?tt.fromBase64String(e):tt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function go(e){const t=e.mapValue.fields.__previous_value__;return fo(t)?go(t):t}function Ee(e){const t=St(e.mapValue.fields.__local_write_time__.timestampValue);return new q(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?fo(e)?4:sl(e)?9007199254740991:10:S()}function dt(e,t){if(e===t)return!0;const n=Mt(e);if(n!==Mt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ee(e).isEqual(Ee(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=St(s.timestampValue),o=St(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return zt(s.bytesValue).isEqual(zt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return V(s.geoPointValue.latitude)===V(i.geoPointValue.latitude)&&V(s.geoPointValue.longitude)===V(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return V(s.integerValue)===V(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=V(s.doubleValue),o=V(i.doubleValue);return r===o?ln(r)===ln(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Kt(e.arrayValue.values||[],t.arrayValue.values||[],dt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Mi(r)!==Mi(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!dt(r[a],o[a])))return!1;return!0}(e,t);default:return S()}}function Ie(e,t){return(e.values||[]).find(n=>dt(n,t))!==void 0}function Gt(e,t){if(e===t)return 0;const n=Mt(e),s=Mt(t);if(n!==s)return L(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return L(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=V(i.integerValue||i.doubleValue),a=V(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return xi(e.timestampValue,t.timestampValue);case 4:return xi(Ee(e),Ee(t));case 5:return L(e.stringValue,t.stringValue);case 6:return function(i,r){const o=zt(i),a=zt(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=L(o[u],a[u]);if(l!==0)return l}return L(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=L(V(i.latitude),V(r.latitude));return o!==0?o:L(V(i.longitude),V(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=Gt(o[u],a[u]);if(l)return l}return L(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===Qe.mapValue&&r===Qe.mapValue)return 0;if(i===Qe.mapValue)return 1;if(r===Qe.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=r.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let h=0;h<a.length&&h<l.length;++h){const d=L(a[h],l[h]);if(d!==0)return d;const m=Gt(o[a[h]],u[l[h]]);if(m!==0)return m}return L(a.length,l.length)}(e.mapValue,t.mapValue);default:throw S()}}function xi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return L(e,t);const n=St(e),s=St(t),i=L(n.seconds,s.seconds);return i!==0?i:L(n.nanos,s.nanos)}function Qt(e){return gs(e)}function gs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=St(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?zt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,T.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=gs(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${gs(s.fields[a])}`;return r+"}"}(e.mapValue):S();var t,n}function ms(e){return!!e&&"integerValue"in e}function Xs(e){return!!e&&"arrayValue"in e}function Oi(e){return!!e&&"nullValue"in e}function Pi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ye(e){return!!e&&"mapValue"in e}function ue(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return te(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=ue(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ue(e.arrayValue.values[n]);return t}return Object.assign({},e)}function sl(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,n){this.position=t,this.inclusive=n}}function Fi(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=T.comparator(T.fromName(o.referenceValue),n.key):s=Gt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Vi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!dt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{}class U extends mo{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new rl(t,n,s):n==="array-contains"?new ul(t,s):n==="in"?new ll(t,s):n==="not-in"?new cl(t,s):n==="array-contains-any"?new hl(t,s):new U(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new ol(t,s):new al(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gt(n,this.value)):n!==null&&Mt(this.value)===Mt(n)&&this.matchesComparison(Gt(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ft extends mo{constructor(t,n){super(),this.filters=t,this.op=n,this.ft=null}static create(t,n){return new ft(t,n)}matches(t){return po(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.dt(n=>n.isInequality());return t!==null?t.field:null}dt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function po(e){return e.op==="and"}function yo(e){return il(e)&&po(e)}function il(e){for(const t of e.filters)if(t instanceof ft)return!1;return!0}function ps(e){if(e instanceof U)return e.field.canonicalString()+e.op.toString()+Qt(e.value);if(yo(e))return e.filters.map(t=>ps(t)).join(",");{const t=e.filters.map(n=>ps(n)).join(",");return`${e.op}(${t})`}}function vo(e,t){return e instanceof U?function(n,s){return s instanceof U&&n.op===s.op&&n.field.isEqual(s.field)&&dt(n.value,s.value)}(e,t):e instanceof ft?function(n,s){return s instanceof ft&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&vo(r,s.filters[o]),!0):!1}(e,t):void S()}function wo(e){return e instanceof U?function(t){return`${t.field.canonicalString()} ${t.op} ${Qt(t.value)}`}(e):e instanceof ft?function(t){return t.op.toString()+" {"+t.getFilters().map(wo).join(" ,")+"}"}(e):"Filter"}class rl extends U{constructor(t,n,s){super(t,n,s),this.key=T.fromName(s.referenceValue)}matches(t){const n=T.comparator(t.key,this.key);return this.matchesComparison(n)}}class ol extends U{constructor(t,n){super(t,"in",n),this.keys=To("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class al extends U{constructor(t,n){super(t,"not-in",n),this.keys=To("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function To(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>T.fromName(s.referenceValue))}class ul extends U{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Xs(n)&&Ie(n.arrayValue,this.value)}}class ll extends U{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ie(this.value.arrayValue,n)}}class cl extends U{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ie(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ie(this.value.arrayValue,n)}}class hl extends U{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Xs(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ie(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,n="asc"){this.field=t,this.dir=n}}function dl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t,n){this.comparator=t,this.root=n||z.EMPTY}insert(t,n){return new H(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,z.BLACK,null,null))}remove(t){return new H(this.comparator,this.root.remove(t,this.comparator).copy(null,null,z.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new We(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new We(this.root,t,this.comparator,!1)}getReverseIterator(){return new We(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new We(this.root,t,this.comparator,!0)}}class We{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class z{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s??z.RED,this.left=i??z.EMPTY,this.right=r??z.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new z(t??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return z.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return z.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,z.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const t=this.left.check();if(t!==this.right.check())throw S();return t+(this.isRed()?0:1)}}z.EMPTY=null,z.RED=!0,z.BLACK=!1;z.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(e,t,n,s,i){return this}insert(e,t,n){return new z(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.comparator=t,this.data=new H(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ui(this.data.getIterator())}getIteratorFrom(t){return new Ui(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof B)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new B(this.comparator);return n.data=t,n}}class Ui{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.fields=t,t.sort(J.comparator)}static empty(){return new ot([])}unionWith(t){let n=new B(J.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new ot(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Kt(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.value=t}static empty(){return new it({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Ye(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=ue(n)}setAll(t){let n=J.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=ue(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());Ye(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return dt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];Ye(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){te(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new it(ue(this.value))}}function Eo(e){const t=[];return te(e.fields,(n,s)=>{const i=new J([n]);if(Ye(s)){const r=Eo(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new ot(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,n,s,i,r,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Y(t,0,k.min(),k.min(),k.min(),it.empty(),0)}static newFoundDocument(t,n,s,i){return new Y(t,1,n,k.min(),s,i,0)}static newNoDocument(t,n){return new Y(t,2,n,k.min(),k.min(),it.empty(),0)}static newUnknownDocument(t,n){return new Y(t,3,n,k.min(),k.min(),it.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(k.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=it.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=it.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=k.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Y&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Y(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function qi(e,t=null,n=[],s=[],i=null,r=null,o=null){return new fl(e,t,n,s,i,r,o)}function Ys(e){const t=D(e);if(t._t===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>ps(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Rn(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Qt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Qt(s)).join(",")),t._t=n}return t._t}function Js(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!dl(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!vo(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Vi(e.startAt,t.startAt)&&Vi(e.endAt,t.endAt)}function ys(e){return T.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=u,this.wt=null,this.gt=null,this.startAt,this.endAt}}function gl(e,t,n,s,i,r,o,a){return new Mn(e,t,n,s,i,r,o,a)}function Io(e){return new Mn(e)}function Bi(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function ml(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function pl(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function yl(e){return e.collectionGroup!==null}function Bt(e){const t=D(e);if(t.wt===null){t.wt=[];const n=pl(t),s=ml(t);if(n!==null&&s===null)n.isKeyField()||t.wt.push(new le(n)),t.wt.push(new le(J.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new le(J.keyField(),r))}}}return t.wt}function vt(e){const t=D(e);if(!t.gt)if(t.limitType==="F")t.gt=qi(t.path,t.collectionGroup,Bt(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Bt(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new le(r.field,o))}const s=t.endAt?new cn(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new cn(t.startAt.position,t.startAt.inclusive):null;t.gt=qi(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.gt}function vs(e,t,n){return new Mn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function xn(e,t){return Js(vt(e),vt(t))&&e.limitType===t.limitType}function So(e){return`${Ys(vt(e))}|lt:${e.limitType}`}function ws(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>wo(s)).join(", ")}]`),Rn(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Qt(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Qt(s)).join(",")),`Target(${n})`}(vt(e))}; limitType=${e.limitType})`}function On(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):T.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of Bt(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Fi(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Bt(n),s)||n.endAt&&!function(i,r,o){const a=Fi(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Bt(n),s))}(e,t)}function vl(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Co(e){return(t,n)=>{let s=!1;for(const i of Bt(e)){const r=wl(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function wl(e,t,n){const s=e.field.isKeyField()?T.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Gt(a,u):S()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return S()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(e,t){if(e.yt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ln(t)?"-0":t}}function Ao(e){return{integerValue:""+e}}function Tl(e,t){return tl(t)?Ao(t):ko(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this._=void 0}}function El(e,t,n){return e instanceof hn?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof Se?_o(e,t):e instanceof Ce?No(e,t):function(s,i){const r=Do(s,i),o=Hi(r)+Hi(s.It);return ms(r)&&ms(s.It)?Ao(o):ko(s.Tt,o)}(e,t)}function Il(e,t,n){return e instanceof Se?_o(e,t):e instanceof Ce?No(e,t):n}function Do(e,t){return e instanceof dn?ms(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class hn extends Pn{}class Se extends Pn{constructor(t){super(),this.elements=t}}function _o(e,t){const n=bo(t);for(const s of e.elements)n.some(i=>dt(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ce extends Pn{constructor(t){super(),this.elements=t}}function No(e,t){let n=bo(t);for(const s of e.elements)n=n.filter(i=>!dt(i,s));return{arrayValue:{values:n}}}class dn extends Pn{constructor(t,n){super(),this.Tt=t,this.It=n}}function Hi(e){return V(e.integerValue||e.doubleValue)}function bo(e){return Xs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Sl(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Se&&s instanceof Se||n instanceof Ce&&s instanceof Ce?Kt(n.elements,s.elements,dt):n instanceof dn&&s instanceof dn?dt(n.It,s.It):n instanceof hn&&s instanceof hn}(e.transform,t.transform)}class Cl{constructor(t,n){this.version=t,this.transformResults=n}}class mt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new mt}static exists(t){return new mt(void 0,t)}static updateTime(t){return new mt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Je(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Fn{}function Lo(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Mo(e.key,mt.none()):new Pe(e.key,e.data,mt.none());{const n=e.data,s=it.empty();let i=new B(J.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Ot(e.key,s,new ot(i.toArray()),mt.none())}}function kl(e,t,n){e instanceof Pe?function(s,i,r){const o=s.value.clone(),a=Ki(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Ot?function(s,i,r){if(!Je(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Ki(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Ro(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function ce(e,t,n,s){return e instanceof Pe?function(i,r,o,a){if(!Je(i.precondition,r))return o;const u=i.value.clone(),l=zi(i.fieldTransforms,a,r);return u.setAll(l),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(e,t,n,s):e instanceof Ot?function(i,r,o,a){if(!Je(i.precondition,r))return o;const u=zi(i.fieldTransforms,a,r),l=r.data;return l.setAll(Ro(i)),l.setAll(u),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(i,r,o){return Je(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function Al(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=Do(s.transform,i||null);r!=null&&(n===null&&(n=it.empty()),n.set(s.field,r))}return n||null}function ji(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Kt(n,s,(i,r)=>Sl(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Pe extends Fn{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ot extends Fn{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Ro(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Ki(e,t,n){const s=new Map;R(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,Il(o,a,n[i]))}return s}function zi(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,El(r,o,t))}return s}class Mo extends Fn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Dl extends Fn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,b;function Nl(e){switch(e){default:return S();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function xo(e){if(e===void 0)return yt("GRPC error has no .code"),f.UNKNOWN;switch(e){case F.OK:return f.OK;case F.CANCELLED:return f.CANCELLED;case F.UNKNOWN:return f.UNKNOWN;case F.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case F.INTERNAL:return f.INTERNAL;case F.UNAVAILABLE:return f.UNAVAILABLE;case F.UNAUTHENTICATED:return f.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case F.NOT_FOUND:return f.NOT_FOUND;case F.ALREADY_EXISTS:return f.ALREADY_EXISTS;case F.PERMISSION_DENIED:return f.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case F.ABORTED:return f.ABORTED;case F.OUT_OF_RANGE:return f.OUT_OF_RANGE;case F.UNIMPLEMENTED:return f.UNIMPLEMENTED;case F.DATA_LOSS:return f.DATA_LOSS;default:return S()}}(b=F||(F={}))[b.OK=0]="OK",b[b.CANCELLED=1]="CANCELLED",b[b.UNKNOWN=2]="UNKNOWN",b[b.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",b[b.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",b[b.NOT_FOUND=5]="NOT_FOUND",b[b.ALREADY_EXISTS=6]="ALREADY_EXISTS",b[b.PERMISSION_DENIED=7]="PERMISSION_DENIED",b[b.UNAUTHENTICATED=16]="UNAUTHENTICATED",b[b.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",b[b.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",b[b.ABORTED=10]="ABORTED",b[b.OUT_OF_RANGE=11]="OUT_OF_RANGE",b[b.UNIMPLEMENTED=12]="UNIMPLEMENTED",b[b.INTERNAL=13]="INTERNAL",b[b.UNAVAILABLE=14]="UNAVAILABLE",b[b.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){te(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return ho(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl=new H(T.comparator);function wt(){return bl}const Oo=new H(T.comparator);function oe(...e){let t=Oo;for(const n of e)t=t.insert(n.key,n);return t}function Po(e){let t=Oo;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Nt(){return he()}function Fo(){return he()}function he(){return new ee(e=>e.toString(),(e,t)=>e.isEqual(t))}const Ll=new H(T.comparator),Rl=new B(T.comparator);function _(...e){let t=Rl;for(const n of e)t=t.add(n);return t}const Ml=new B(L);function Vo(){return Ml}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const i=new Map;return i.set(t,Fe.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Vn(k.min(),i,Vo(),wt(),_())}}class Fe{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Fe(s,n,_(),_(),_())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,n,s,i){this.Et=t,this.removedTargetIds=n,this.key=s,this.At=i}}class Uo{constructor(t,n){this.targetId=t,this.Rt=n}}class qo{constructor(t,n,s=tt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Gi{constructor(){this.bt=0,this.vt=Wi(),this.Pt=tt.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(t){t.approximateByteSize()>0&&(this.St=!0,this.Pt=t)}Nt(){let t=_(),n=_(),s=_();return this.vt.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:S()}}),new Fe(this.Pt,this.Vt,t,n,s)}kt(){this.St=!1,this.vt=Wi()}Ot(t,n){this.St=!0,this.vt=this.vt.insert(t,n)}Mt(t){this.St=!0,this.vt=this.vt.remove(t)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class xl{constructor(t){this.Lt=t,this.qt=new Map,this.Ut=wt(),this.Kt=Qi(),this.Gt=new B(L)}Qt(t){for(const n of t.Et)t.At&&t.At.isFoundDocument()?this.jt(n,t.At):this.zt(n,t.key,t.At);for(const n of t.removedTargetIds)this.zt(n,t.key,t.At)}Wt(t){this.forEachTarget(t,n=>{const s=this.Ht(n);switch(t.state){case 0:this.Jt(n)&&s.xt(t.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(t.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(t.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(t.resumeToken));break;default:S()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qt.forEach((s,i)=>{this.Jt(i)&&n(i)})}Zt(t){const n=t.targetId,s=t.Rt.count,i=this.Xt(n);if(i){const r=i.target;if(ys(r))if(s===0){const o=new T(r.path);this.zt(n,o,Y.newNoDocument(o,k.min()))}else R(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(t){const n=new Map;this.qt.forEach((r,o)=>{const a=this.Xt(o);if(a){if(r.current&&ys(a.target)){const u=new T(a.target.path);this.Ut.get(u)!==null||this.ne(o,u)||this.zt(o,u,Y.newNoDocument(u,t))}r.Ct&&(n.set(o,r.Nt()),r.kt())}});let s=_();this.Kt.forEach((r,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Xt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Ut.forEach((r,o)=>o.setReadTime(t));const i=new Vn(t,n,this.Gt,this.Ut,s);return this.Ut=wt(),this.Kt=Qi(),this.Gt=new B(L),i}jt(t,n){if(!this.Jt(t))return;const s=this.ne(t,n.key)?2:0;this.Ht(t).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(t))}zt(t,n,s){if(!this.Jt(t))return;const i=this.Ht(t);this.ne(t,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(t)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(t){this.qt.delete(t)}te(t){const n=this.Ht(t).Nt();return this.Lt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ft(t){this.Ht(t).Ft()}Ht(t){let n=this.qt.get(t);return n||(n=new Gi,this.qt.set(t,n)),n}se(t){let n=this.Kt.get(t);return n||(n=new B(L),this.Kt=this.Kt.insert(t,n)),n}Jt(t){const n=this.Xt(t)!==null;return n||w("WatchChangeAggregator","Detected inactive target",t),n}Xt(t){const n=this.qt.get(t);return n&&n.Dt?null:this.Lt.ie(t)}Yt(t){this.qt.set(t,new Gi),this.Lt.getRemoteKeysForTarget(t).forEach(n=>{this.zt(t,n,null)})}ne(t,n){return this.Lt.getRemoteKeysForTarget(t).has(n)}}function Qi(){return new H(T.comparator)}function Wi(){return new H(T.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Pl=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Fl=(()=>({and:"AND",or:"OR"}))();class Vl{constructor(t,n){this.databaseId=t,this.yt=n}}function fn(e,t){return e.yt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Bo(e,t){return e.yt?t.toBase64():t.toUint8Array()}function Ul(e,t){return fn(e,t.toTimestamp())}function ht(e){return R(!!e),k.fromTimestamp(function(t){const n=St(t);return new q(n.seconds,n.nanos)}(e))}function $s(e,t){return function(n){return new O(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function Ho(e){const t=O.fromString(e);return R(Go(t)),t}function Ts(e,t){return $s(e.databaseId,t.path)}function ts(e,t){const n=Ho(t);if(n.get(1)!==e.databaseId.projectId)throw new I(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new I(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new T(jo(n))}function Es(e,t){return $s(e.databaseId,t)}function ql(e){const t=Ho(e);return t.length===4?O.emptyPath():jo(t)}function Is(e){return new O(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function jo(e){return R(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Xi(e,t,n){return{name:Ts(e,t),fields:n.value.mapValue.fields}}function Bl(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:S()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(u,l){return u.yt?(R(l===void 0||typeof l=="string"),tt.fromBase64String(l||"")):(R(l===void 0||l instanceof Uint8Array),tt.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const l=u.code===void 0?f.UNKNOWN:xo(u.code);return new I(l,u.message||"")}(o);n=new qo(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=ts(e,s.document.name),r=ht(s.document.updateTime),o=s.document.createTime?ht(s.document.createTime):k.min(),a=new it({mapValue:{fields:s.document.fields}}),u=Y.newFoundDocument(i,r,o,a),l=s.targetIds||[],h=s.removedTargetIds||[];n=new $e(l,h,u.key,u)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=ts(e,s.document),r=s.readTime?ht(s.readTime):k.min(),o=Y.newNoDocument(i,r),a=s.removedTargetIds||[];n=new $e([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=ts(e,s.document),r=s.removedTargetIds||[];n=new $e([],r,i,null)}else{if(!("filter"in t))return S();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new _l(i),o=s.targetId;n=new Uo(o,r)}}return n}function Hl(e,t){let n;if(t instanceof Pe)n={update:Xi(e,t.key,t.value)};else if(t instanceof Mo)n={delete:Ts(e,t.key)};else if(t instanceof Ot)n={update:Xi(e,t.key,t.data),updateMask:Jl(t.fieldMask)};else{if(!(t instanceof Dl))return S();n={verify:Ts(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof hn)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Se)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ce)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof dn)return{fieldPath:r.field.canonicalString(),increment:o.It};throw S()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Ul(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:S()}(e,t.precondition)),n}function jl(e,t){return e&&e.length>0?(R(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?ht(s.updateTime):ht(i);return r.isEqual(k.min())&&(r=ht(i)),new Cl(r,s.transformResults||[])}(n,t))):[]}function Kl(e,t){return{documents:[Es(e,t.path)]}}function zl(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Es(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Es(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length!==0)return zo(ft.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(l=>function(h){return{field:Vt(h.field),direction:Wl(h.dir)}}(l))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(u,l){return u.yt||Rn(l)?l:{value:l}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),n}function Gl(e){let t=ql(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){R(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];n.where&&(r=function(h){const d=Ko(h);return d instanceof ft&&yo(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(d){return new le(Ut(d.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(h)));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Rn(d)?null:d}(n.limit));let u=null;n.startAt&&(u=function(h){const d=!!h.before,m=h.values||[];return new cn(m,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,m=h.values||[];return new cn(m,d)}(n.endAt)),gl(t,i,o,r,a,"F",u,l)}function Ql(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return S()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Ko(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Ut(t.unaryFilter.field);return U.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ut(t.unaryFilter.field);return U.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ut(t.unaryFilter.field);return U.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ut(t.unaryFilter.field);return U.create(r,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(e):e.fieldFilter!==void 0?function(t){return U.create(Ut(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return ft.create(t.compositeFilter.filters.map(n=>Ko(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return S()}}(t.compositeFilter.op))}(e):S()}function Wl(e){return Ol[e]}function Xl(e){return Pl[e]}function Yl(e){return Fl[e]}function Vt(e){return{fieldPath:e.canonicalString()}}function Ut(e){return J.fromServerFormat(e.fieldPath)}function zo(e){return e instanceof U?function(t){if(t.op==="=="){if(Pi(t.value))return{unaryFilter:{field:Vt(t.field),op:"IS_NAN"}};if(Oi(t.value))return{unaryFilter:{field:Vt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Pi(t.value))return{unaryFilter:{field:Vt(t.field),op:"IS_NOT_NAN"}};if(Oi(t.value))return{unaryFilter:{field:Vt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vt(t.field),op:Xl(t.op),value:t.value}}}(e):e instanceof ft?function(t){const n=t.getFilters().map(s=>zo(s));return n.length===1?n[0]:{compositeFilter:{op:Yl(t.op),filters:n}}}(e):S()}function Jl(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Go(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&kl(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=ce(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=ce(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Fo();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const u=Lo(o,a);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(k.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),_())}isEqual(t){return this.batchId===t.batchId&&Kt(this.mutations,t.mutations,(n,s)=>ji(n,s))&&Kt(this.baseMutations,t.baseMutations,(n,s)=>ji(n,s))}}class Zs{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){R(t.mutations.length===s.length);let i=Ll;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Zs(t,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t,n,s,i,r=k.min(),o=k.min(),a=tt.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Lt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t){this.oe=t}}function ec(e){const t=Gl({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?vs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this.Ze=new sc}addToCollectionParentIndex(t,n){return this.Ze.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.Ze.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(It.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(It.min())}updateCollectionGroup(t,n,s){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class sc{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new B(O.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new B(O.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.Pn=t}next(){return this.Pn+=2,this.Pn}static Vn(){return new Wt(0)}static Sn(){return new Wt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this.changes=new ee(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Y.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?g.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(s!==null&&ce(s.mutation,i,ot.empty(),q.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,_()).next(()=>s))}getLocalViewOfDocuments(t,n,s=_()){const i=Nt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=oe();return r.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Nt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,_()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=wt();const o=he(),a=he();return n.forEach((u,l)=>{const h=s.get(l.key);i.has(l.key)&&(h===void 0||h.mutation instanceof Ot)?r=r.insert(l.key,l):h!==void 0?(o.set(l.key,h.mutation.getFieldMask()),ce(h.mutation,l,h.mutation.getFieldMask(),q.now())):o.set(l.key,ot.empty())}),this.recalculateAndSaveOverlays(t,r).next(u=>(u.forEach((l,h)=>o.set(l,h)),n.forEach((l,h)=>{var d;return a.set(l,new rc(h,(d=o.get(l))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,n){const s=he();let i=new H((o,a)=>o-a),r=_();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let h=s.get(u)||ot.empty();h=a.applyToLocalView(l,h),s.set(u,h);const d=(i.get(a.batchId)||_()).add(u);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,h=u.value,d=Fo();h.forEach(m=>{if(!r.has(m)){const v=Lo(n.get(m),s.get(m));v!==null&&d.set(m,v),r=r.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,d))}return g.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return T.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):yl(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):g.resolve(Nt());let a=-1,u=r;return o.next(l=>g.forEach(l,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),r.get(h)?g.resolve():this.remoteDocumentCache.getEntry(t,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(t,l,r)).next(()=>this.computeViews(t,u,l,_())).next(h=>({batchId:a,changes:Po(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new T(n)).next(s=>{let i=oe();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=oe();return this.indexManager.getCollectionParents(t,i).next(o=>g.forEach(o,a=>{const u=function(l,h){return new Mn(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,s).next(l=>{l.forEach((h,d)=>{r=r.insert(h,d)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,i))).next(r=>{i.forEach((a,u)=>{const l=u.getKey();r.get(l)===null&&(r=r.insert(l,Y.newInvalidDocument(l)))});let o=oe();return r.forEach((a,u)=>{const l=i.get(a);l!==void 0&&ce(l.mutation,u,ot.empty(),q.now()),On(n,u)&&(o=o.insert(a,u))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t){this.Tt=t,this.es=new Map,this.ns=new Map}getBundleMetadata(t,n){return g.resolve(this.es.get(n))}saveBundleMetadata(t,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:ht(s.createTime)}),g.resolve()}getNamedQuery(t,n){return g.resolve(this.ns.get(n))}saveNamedQuery(t,n){return this.ns.set(n.name,function(s){return{name:s.name,query:ec(s.bundledQuery),readTime:ht(s.readTime)}}(n)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this.overlays=new H(T.comparator),this.ss=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Nt();return g.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.ce(t,n,r)}),g.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),g.resolve()}getOverlaysForCollection(t,n,s){const i=Nt(),r=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return g.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new H((l,h)=>l-h);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let h=r.get(l.largestBatchId);h===null&&(h=Nt(),r=r.insert(l.largestBatchId,h)),h.set(l.getKey(),l)}}const a=Nt(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,h)=>a.set(l,h)),!(a.size()>=i)););return g.resolve(a)}ce(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Zl(n,s));let r=this.ss.get(n);r===void 0&&(r=_(),this.ss.set(n,r)),this.ss.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.rs=new B(j.os),this.us=new B(j.cs)}isEmpty(){return this.rs.isEmpty()}addReference(t,n){const s=new j(t,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.ls(new j(t,n))}fs(t,n){t.forEach(s=>this.removeReference(s,n))}ds(t){const n=new T(new O([])),s=new j(n,t),i=new j(n,t+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(t=>this.ls(t))}ls(t){this.rs=this.rs.delete(t),this.us=this.us.delete(t)}ws(t){const n=new T(new O([])),s=new j(n,t),i=new j(n,t+1);let r=_();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new j(t,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class j{constructor(t,n){this.key=t,this.gs=n}static os(t,n){return T.comparator(t.key,n.key)||L(t.gs,n.gs)}static cs(t,n){return L(t.gs,n.gs)||T.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new B(j.os)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $l(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new j(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.Ts(s),r=i<0?0:i;return g.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new j(n,0),i=new j(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),g.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new B(L);return n.forEach(i=>{const r=new j(i,0),o=new j(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),g.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;T.isDocumentKey(r)||(r=r.child(""));const o=new j(new T(r),0);let a=new B(L);return this.ps.forEachWhile(u=>{const l=u.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.gs)),!0)},o),g.resolve(this.Es(a))}Es(t){const n=[];return t.forEach(s=>{const i=this.Is(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){R(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return g.forEach(n.mutations,i=>{const r=new j(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.ps=s})}bn(t){}containsKey(t,n){const s=new j(n,0),i=this.ps.firstAfterOrEqual(s);return g.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}As(t,n){return this.Ts(t)}Ts(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Is(t){const n=this.Ts(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t){this.Rs=t,this.docs=new H(T.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return g.resolve(s?s.document.mutableCopy():Y.newInvalidDocument(n))}getEntries(t,n){let s=wt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Y.newInvalidDocument(i))}),g.resolve(s)}getDocumentsMatchingQuery(t,n,s,i){let r=wt();const o=n.path,a=new T(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:h}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Yu(Xu(h),s)<=0||(i.has(h.key)||On(n,h))&&(r=r.insert(h.key,h.mutableCopy()))}return g.resolve(r)}getAllFromCollectionGroup(t,n,s,i){S()}bs(t,n){return g.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new hc(this)}getSize(t){return g.resolve(this.size)}}class hc extends ic{constructor(t){super(),this.Xn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(t,i)):this.Xn.removeEntry(s)}),g.waitFor(n)}getFromCache(t,n){return this.Xn.getEntry(t,n)}getAllFromCache(t,n){return this.Xn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t){this.persistence=t,this.vs=new ee(n=>Ys(n),Js),this.lastRemoteSnapshotVersion=k.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new ti,this.targetCount=0,this.Ss=Wt.Vn()}forEachTarget(t,n){return this.vs.forEach((s,i)=>n(i)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Ps)}allocateTargetId(t){return this.highestTargetId=this.Ss.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),g.resolve()}xn(t){this.vs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ss=new Wt(n),this.highestTargetId=n),t.sequenceNumber>this.Ps&&(this.Ps=t.sequenceNumber)}addTargetData(t,n){return this.xn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.xn(n),g.resolve()}removeTargetData(t,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),g.waitFor(r).next(()=>i)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const s=this.vs.get(n)||null;return g.resolve(s)}addMatchingKeys(t,n,s){return this.Vs.hs(n,s),g.resolve()}removeMatchingKeys(t,n,s){this.Vs.fs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),g.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Vs.ds(n),g.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Vs.ws(n);return g.resolve(s)}containsKey(t,n){return g.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t,n){this.Ds={},this.overlays={},this.Cs=new Ws(0),this.xs=!1,this.xs=!0,this.referenceDelegate=t(this),this.Ns=new dc(this),this.indexManager=new nc,this.remoteDocumentCache=function(s){return new cc(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new tc(n),this.Os=new ac(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new uc,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Ds[t.toKey()];return s||(s=new lc(n,this.referenceDelegate),this.Ds[t.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(t,n,s){w("MemoryPersistence","Starting transaction:",t);const i=new gc(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(t,n){return g.or(Object.values(this.Ds).map(s=>()=>s.containsKey(t,n)))}}class gc extends $u{constructor(t){super(),this.currentSequenceNumber=t}}class ei{constructor(t){this.persistence=t,this.Bs=new ti,this.Ls=null}static qs(t){return new ei(t)}get Us(){if(this.Ls)return this.Ls;throw S()}addReference(t,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),g.resolve()}removeReference(t,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Us.add(n.toString()),g.resolve()}removeTarget(t,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Ms(){this.Ls=new Set}Fs(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Us,s=>{const i=T.fromPath(s);return this.Ks(t,i).next(r=>{r||n.removeEntry(i,k.min())})}).next(()=>(this.Ls=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ks(t,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(t){return 0}Ks(t,n){return g.or([()=>g.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.$s(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Ci=s,this.xi=i}static Ni(t,n){let s=_(),i=_();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ni(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(){this.ki=!1}initialize(t,n){this.Oi=t,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(t,n,s,i){return this.Mi(t,n).next(r=>r||this.Fi(t,n,i,s)).next(r=>r||this.$i(t,n))}Mi(t,n){if(Bi(n))return g.resolve(null);let s=vt(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=vs(n,null,"F"),s=vt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=_(...r);return this.Oi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(u=>{const l=this.Bi(n,a);return this.Li(n,l,o,u.readTime)?this.Mi(t,vs(n,null,"F")):this.qi(t,l,n,u)}))})))}Fi(t,n,s,i){return Bi(n)||i.isEqual(k.min())?this.$i(t,n):this.Oi.getDocuments(t,s).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,s,i)?this.$i(t,n):(Ri()<=fe.DEBUG&&w("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ws(n)),this.qi(t,o,n,Wu(i,-1)))})}Bi(t,n){let s=new B(Co(t));return n.forEach((i,r)=>{On(t,r)&&(s=s.add(r))}),s}Li(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(t,n){return Ri()<=fe.DEBUG&&w("QueryEngine","Using full collection scan to execute query:",ws(n)),this.Oi.getDocumentsMatchingQuery(t,n,It.min())}qi(t,n,s,i){return this.Oi.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t,n,s,i){this.persistence=t,this.Ui=n,this.Tt=i,this.Ki=new H(L),this.Gi=new ee(r=>Ys(r),Js),this.Qi=new Map,this.ji=t.getRemoteDocumentCache(),this.Ns=t.getTargetCache(),this.Os=t.getBundleCache(),this.zi(s)}zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new oc(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ki))}}function yc(e,t,n,s){return new pc(e,t,n,s)}async function Qo(e,t){const n=D(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.zi(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let u=_();for(const l of i){o.push(l.batchId);for(const h of l.mutations)u=u.add(h.key)}for(const l of r){a.push(l.batchId);for(const h of l.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(s,u).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function vc(e,t){const n=D(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const h=u.batch,d=h.keys();let m=g.resolve();return d.forEach(v=>{m=m.next(()=>l.getEntry(a,v)).next(A=>{const N=u.docVersions.get(v);R(N!==null),A.version.compareTo(N)<0&&(h.applyToRemoteDocument(A,u),A.isValidDocument()&&(A.setReadTime(u.commitVersion),l.addEntry(A)))})}),m.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=_();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function Wo(e){const t=D(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ns.getLastRemoteSnapshotVersion(n))}function wc(e,t){const n=D(e),s=t.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];t.targetChanges.forEach((h,d)=>{const m=i.get(d);if(!m)return;a.push(n.Ns.removeMatchingKeys(r,h.removedDocuments,d).next(()=>n.Ns.addMatchingKeys(r,h.addedDocuments,d)));let v=m.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(d)?v=v.withResumeToken(tt.EMPTY_BYTE_STRING,k.min()).withLastLimboFreeSnapshotVersion(k.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,s)),i=i.insert(d,v),function(A,N,M){return A.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(m,v,h)&&a.push(n.Ns.updateTargetData(r,v))});let u=wt(),l=_();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),a.push(Tc(r,o,t.documentUpdates).next(h=>{u=h.Hi,l=h.Ji})),!s.isEqual(k.min())){const h=n.Ns.getLastRemoteSnapshotVersion(r).next(d=>n.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(h)}return g.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,l)).next(()=>u)}).then(r=>(n.Ki=i,r))}function Tc(e,t,n){let s=_(),i=_();return n.forEach(r=>s=s.add(r)),t.getEntries(e,s).next(r=>{let o=wt();return n.forEach((a,u)=>{const l=r.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(k.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):w("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Hi:o,Ji:i}})}function Ec(e,t){const n=D(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function Ic(e,t){const n=D(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ns.getTargetData(s,t).next(r=>r?(i=r,g.resolve(i)):n.Ns.allocateTargetId(s).next(o=>(i=new Lt(t,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(t,s.targetId)),s})}async function Ss(e,t,n){const s=D(e),i=s.Ki.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Oe(o))throw o;w("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ki=s.Ki.remove(t),s.Gi.delete(i.target)}function Yi(e,t,n){const s=D(e);let i=k.min(),r=_();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const h=D(a),d=h.Gi.get(l);return d!==void 0?g.resolve(h.Ki.get(d)):h.Ns.getTargetData(u,l)}(s,o,vt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(u=>{r=u})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,t,n?i:k.min(),n?r:_())).next(a=>(Sc(s,vl(t),a),{documents:a,Yi:r})))}function Sc(e,t,n){let s=e.Qi.get(t)||k.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.Qi.set(t,s)}class Ji{constructor(){this.activeTargetIds=Vo()}sr(t){this.activeTargetIds=this.activeTargetIds.add(t)}ir(t){this.activeTargetIds=this.activeTargetIds.delete(t)}nr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Cc{constructor(){this.Ur=new Ji,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Ur.sr(t),this.Kr[t]||"not-current"}updateQueryState(t,n,s){this.Kr[t]=n}removeLocalQueryTarget(t){this.Ur.ir(t)}isLocalQueryTarget(t){return this.Ur.activeTargetIds.has(t)}clearQueryState(t){delete this.Kr[t]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(t){return this.Ur.activeTargetIds.has(t)}start(){return this.Ur=new Ji,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{Gr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(t){this.Hr.push(t)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){w("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Hr)t(0)}Wr(){w("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Hr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t){this.Yr=t.Yr,this.Zr=t.Zr}Xr(t){this.eo=t}no(t){this.so=t}onMessage(t){this.io=t}close(){this.Zr()}send(t){this.Yr(t)}ro(){this.eo()}oo(t){this.so(t)}uo(t){this.io(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.co=n+"://"+t.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(t,n,s,i,r){const o=this.fo(t,n);w("RestConnection","Sending: ",o,s);const a={};return this._o(a,i,r),this.wo(t,o,a,s).then(u=>(w("RestConnection","Received: ",u),u),u=>{throw fs("RestConnection",`${t} failed with error: `,u,"url: ",o,"request:",s),u})}mo(t,n,s,i,r,o){return this.lo(t,n,s,i,r)}_o(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Zt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}fo(t,n){const s=Ac[t];return`${this.co}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}wo(t,n,s,i){return new Promise((r,o)=>{const a=new Vu;a.setWithCredentials(!0),a.listenOnce(Ou.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Zn.NO_ERROR:const l=a.getResponseJson();w("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Zn.TIMEOUT:w("Connection",'RPC "'+t+'" timed out'),o(new I(f.DEADLINE_EXCEEDED,"Request time out"));break;case Zn.HTTP_ERROR:const h=a.getStatus();if(w("Connection",'RPC "'+t+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const v=function(A){const N=A.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(N)>=0?N:f.UNKNOWN}(m.status);o(new I(v,m.message))}else o(new I(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new I(f.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{w("Connection",'RPC "'+t+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,s,15)})}yo(t,n,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Mu(),o=xu(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Fu({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const u=i.join("");w("Connection","Creating WebChannel: "+u,a);const l=r.createWebChannel(u,a);let h=!1,d=!1;const m=new Dc({Yr:A=>{d?w("Connection","Not sending because WebChannel is closed:",A):(h||(w("Connection","Opening WebChannel transport."),l.open(),h=!0),w("Connection","WebChannel sending:",A),l.send(A))},Zr:()=>l.close()}),v=(A,N,M)=>{A.listen(N,nt=>{try{M(nt)}catch(W){setTimeout(()=>{throw W},0)}})};return v(l,Ge.EventType.OPEN,()=>{d||w("Connection","WebChannel transport opened.")}),v(l,Ge.EventType.CLOSE,()=>{d||(d=!0,w("Connection","WebChannel transport closed"),m.oo())}),v(l,Ge.EventType.ERROR,A=>{d||(d=!0,fs("Connection","WebChannel transport errored:",A),m.oo(new I(f.UNAVAILABLE,"The operation could not be completed")))}),v(l,Ge.EventType.MESSAGE,A=>{var N;if(!d){const M=A.data[0];R(!!M);const nt=M,W=nt.error||((N=nt[0])===null||N===void 0?void 0:N.error);if(W){w("Connection","WebChannel received error:",W);const qe=W.status;let Ft=function(Sa){const mi=F[Sa];if(mi!==void 0)return xo(mi)}(qe),Be=W.message;Ft===void 0&&(Ft=f.INTERNAL,Be="Unknown error status: "+qe+" with message "+W.message),d=!0,m.oo(new I(Ft,Be)),l.close()}else w("Connection","WebChannel received:",M),m.uo(M)}}),v(o,Pu.STAT_EVENT,A=>{A.stat===bi.PROXY?w("Connection","Detected buffering proxy"):A.stat===bi.NOPROXY&&w("Connection","Detected no buffering proxy")}),setTimeout(()=>{m.ro()},0),m}}function es(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(e){return new Vl(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Ys=t,this.timerId=n,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(t){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-s);i>0&&w("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),t())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(t,n,s,i,r,o,a,u){this.Ys=t,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Xo(t,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(t){this.Uo(),this.stream.send(t)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(t,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,t!==4?this.ko.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(yt(n.toString()),yt("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=t,await this.listener.no(n)}Go(){}auth(){this.state=1;const t=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===n&&this.jo(s,i)},s=>{t(()=>{const i=new I(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(t,n){const s=this.Qo(this.Co);this.stream=this.Wo(t,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(t){return w("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Qo(t){return n=>{this.Ys.enqueueAndForget(()=>this.Co===t?n():(w("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Nc extends Yo{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r}Wo(t,n){return this.connection.yo("Listen",t,n)}onMessage(t){this.ko.reset();const n=Bl(this.Tt,t),s=function(i){if(!("targetChange"in i))return k.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?k.min():r.readTime?ht(r.readTime):k.min()}(t);return this.listener.Ho(n,s)}Jo(t){const n={};n.database=Is(this.Tt),n.addTarget=function(i,r){let o;const a=r.target;return o=ys(a)?{documents:Kl(i,a)}:{query:zl(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Bo(i,r.resumeToken):r.snapshotVersion.compareTo(k.min())>0&&(o.readTime=fn(i,r.snapshotVersion.toTimestamp())),o}(this.Tt,t);const s=Ql(this.Tt,t);s&&(n.labels=s),this.qo(n)}Yo(t){const n={};n.database=Is(this.Tt),n.removeTarget=t,this.qo(n)}}class bc extends Yo{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(t,n){return this.connection.yo("Write",t,n)}onMessage(t){if(R(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Zo){this.ko.reset();const n=jl(t.writeResults,t.commitTime),s=ht(t.commitTime);return this.listener.eu(s,n)}return R(!t.writeResults||t.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const t={};t.database=Is(this.Tt),this.qo(t)}tu(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>Hl(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new I(f.FAILED_PRECONDITION,"The client has already been terminated.")}lo(t,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new I(f.UNKNOWN,i.toString())})}mo(t,n,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new I(f.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class Rc{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(t){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.hu("Offline")))}set(t){this.du(),this.ou=0,t==="Online"&&(this.cu=!1),this.hu(t)}hu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}lu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(yt(n),this.cu=!1):w("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{Pt(this)&&(w("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=D(a);u.mu.add(4),await Ve(u),u.pu.set("Unknown"),u.mu.delete(4),await qn(u)}(this))})}),this.pu=new Rc(s,i)}}async function qn(e){if(Pt(e))for(const t of e.gu)await t(!0)}async function Ve(e){for(const t of e.gu)await t(!1)}function Jo(e,t){const n=D(e);n.wu.has(t.targetId)||(n.wu.set(t.targetId,t),ri(n)?ii(n):ne(n).Mo()&&si(n,t))}function $o(e,t){const n=D(e),s=ne(n);n.wu.delete(t),s.Mo()&&Zo(n,t),n.wu.size===0&&(s.Mo()?s.Bo():Pt(n)&&n.pu.set("Unknown"))}function si(e,t){e.Iu.Ft(t.targetId),ne(e).Jo(t)}function Zo(e,t){e.Iu.Ft(t),ne(e).Yo(t)}function ii(e){e.Iu=new xl({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ie:t=>e.wu.get(t)||null}),ne(e).start(),e.pu.au()}function ri(e){return Pt(e)&&!ne(e).Oo()&&e.wu.size>0}function Pt(e){return D(e).mu.size===0}function ta(e){e.Iu=void 0}async function xc(e){e.wu.forEach((t,n)=>{si(e,t)})}async function Oc(e,t){ta(e),ri(e)?(e.pu.fu(t),ii(e)):e.pu.set("Unknown")}async function Pc(e,t,n){if(e.pu.set("Online"),t instanceof qo&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.wu.delete(o),s.Iu.removeTarget(o))}(e,t)}catch(s){w("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await gn(e,s)}else if(t instanceof $e?e.Iu.Qt(t):t instanceof Uo?e.Iu.Zt(t):e.Iu.Wt(t),!n.isEqual(k.min()))try{const s=await Wo(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Iu.ee(r);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.wu.get(u);l&&i.wu.set(u,l.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const u=i.wu.get(a);if(!u)return;i.wu.set(a,u.withResumeToken(tt.EMPTY_BYTE_STRING,u.snapshotVersion)),Zo(i,a);const l=new Lt(u.target,a,1,u.sequenceNumber);si(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){w("RemoteStore","Failed to raise snapshot:",s),await gn(e,s)}}async function gn(e,t,n){if(!Oe(t))throw t;e.mu.add(1),await Ve(e),e.pu.set("Offline"),n||(n=()=>Wo(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{w("RemoteStore","Retrying IndexedDB access"),await n(),e.mu.delete(1),await qn(e)})}function ea(e,t){return t().catch(n=>gn(e,n,t))}async function Bn(e){const t=D(e),n=Ct(t);let s=t._u.length>0?t._u[t._u.length-1].batchId:-1;for(;Fc(t);)try{const i=await Ec(t.localStore,s);if(i===null){t._u.length===0&&n.Bo();break}s=i.batchId,Vc(t,i)}catch(i){await gn(t,i)}na(t)&&sa(t)}function Fc(e){return Pt(e)&&e._u.length<10}function Vc(e,t){e._u.push(t);const n=Ct(e);n.Mo()&&n.Xo&&n.tu(t.mutations)}function na(e){return Pt(e)&&!Ct(e).Oo()&&e._u.length>0}function sa(e){Ct(e).start()}async function Uc(e){Ct(e).su()}async function qc(e){const t=Ct(e);for(const n of e._u)t.tu(n.mutations)}async function Bc(e,t,n){const s=e._u.shift(),i=Zs.from(s,t,n);await ea(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Bn(e)}async function Hc(e,t){t&&Ct(e).Xo&&await async function(n,s){if(i=s.code,Nl(i)&&i!==f.ABORTED){const r=n._u.shift();Ct(n).$o(),await ea(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Bn(n)}var i}(e,t),na(e)&&sa(e)}async function Zi(e,t){const n=D(e);n.asyncQueue.verifyOperationInProgress(),w("RemoteStore","RemoteStore received new credentials");const s=Pt(n);n.mu.add(3),await Ve(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.mu.delete(3),await qn(n)}async function jc(e,t){const n=D(e);t?(n.mu.delete(2),await qn(n)):t||(n.mu.add(2),await Ve(n),n.pu.set("Unknown"))}function ne(e){return e.Tu||(e.Tu=function(t,n,s){const i=D(t);return i.ru(),new Nc(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(e.datastore,e.asyncQueue,{Xr:xc.bind(null,e),no:Oc.bind(null,e),Ho:Pc.bind(null,e)}),e.gu.push(async t=>{t?(e.Tu.$o(),ri(e)?ii(e):e.pu.set("Unknown")):(await e.Tu.stop(),ta(e))})),e.Tu}function Ct(e){return e.Eu||(e.Eu=function(t,n,s){const i=D(t);return i.ru(),new bc(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(e.datastore,e.asyncQueue,{Xr:Uc.bind(null,e),no:Hc.bind(null,e),nu:qc.bind(null,e),eu:Bc.bind(null,e)}),e.gu.push(async t=>{t?(e.Eu.$o(),await Bn(e)):(await e.Eu.stop(),e._u.length>0&&(w("RemoteStore",`Stopping write stream with ${e._u.length} pending writes`),e._u=[]))})),e.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new oi(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ai(e,t){if(yt("AsyncQueue",`${t}: ${e}`),Oe(e))return new I(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t){this.comparator=t?(n,s)=>t(n,s)||T.comparator(n.key,s.key):(n,s)=>T.comparator(n.key,s.key),this.keyedMap=oe(),this.sortedSet=new H(this.comparator)}static emptySet(t){return new Ht(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ht)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Ht;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this.Au=new H(T.comparator)}track(t){const n=t.doc.key,s=this.Au.get(n);s?t.type!==0&&s.type===3?this.Au=this.Au.insert(n,t):t.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Au=this.Au.remove(n):t.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:t.doc}):S():this.Au=this.Au.insert(n,t)}Ru(){const t=[];return this.Au.inorderTraversal((n,s)=>{t.push(s)}),t}}class Xt{constructor(t,n,s,i,r,o,a,u,l){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(t,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Xt(t,n,Ht.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&xn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this.bu=void 0,this.listeners=[]}}class zc{constructor(){this.queries=new ee(t=>So(t),xn),this.onlineState="Unknown",this.vu=new Set}}async function Gc(e,t){const n=D(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Kc),i)try{r.bu=await n.onListen(s)}catch(o){const a=ai(o,`Initialization of query '${ws(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Pu(n.onlineState),r.bu&&t.Vu(r.bu)&&ui(n)}async function Qc(e,t){const n=D(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Wc(e,t){const n=D(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Vu(i)&&(s=!0);o.bu=i}}s&&ui(n)}function Xc(e,t,n){const s=D(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function ui(e){e.vu.forEach(t=>{t.next()})}class Yc{constructor(t,n,s){this.query=t,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Xt(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Du?this.xu(t)&&(this.Su.next(t),n=!0):this.Nu(t,this.onlineState)&&(this.ku(t),n=!0),this.Cu=t,n}onError(t){this.Su.error(t)}Pu(t){this.onlineState=t;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,t)&&(this.ku(this.Cu),n=!0),n}Nu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}xu(t){if(t.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(t){t=Xt.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Du=!0,this.Su.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(t){this.key=t}}class ra{constructor(t){this.key=t}}class Jc{constructor(t,n){this.query=t,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=_(),this.mutatedKeys=_(),this.ju=Co(t),this.zu=new Ht(this.ju)}get Wu(){return this.Ku}Hu(t,n){const s=n?n.Ju:new tr,i=n?n.zu:this.zu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((h,d)=>{const m=i.get(h),v=On(this.query,d)?d:null,A=!!m&&this.mutatedKeys.has(m.key),N=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let M=!1;m&&v?m.data.isEqual(v.data)?A!==N&&(s.track({type:3,doc:v}),M=!0):this.Yu(m,v)||(s.track({type:2,doc:v}),M=!0,(u&&this.ju(v,u)>0||l&&this.ju(v,l)<0)&&(a=!0)):!m&&v?(s.track({type:0,doc:v}),M=!0):m&&!v&&(s.track({type:1,doc:m}),M=!0,(u||l)&&(a=!0)),M&&(v?(o=o.add(v),r=N?r.add(h):r.delete(h)):(o=o.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{zu:o,Ju:s,Li:a,mutatedKeys:r}}Yu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.zu;this.zu=t.zu,this.mutatedKeys=t.mutatedKeys;const r=t.Ju.Ru();r.sort((l,h)=>function(d,m){const v=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return v(d)-v(m)}(l.type,h.type)||this.ju(l.doc,h.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,u=a!==this.Gu;return this.Gu=a,r.length!==0||u?{snapshot:new Xt(this.query,t.zu,i,r,t.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new tr,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(t){return!this.Ku.has(t)&&!!this.zu.has(t)&&!this.zu.get(t).hasLocalMutations}Zu(t){t&&(t.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=t.current)}Xu(){if(!this.current)return[];const t=this.Qu;this.Qu=_(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return t.forEach(s=>{this.Qu.has(s)||n.push(new ra(s))}),this.Qu.forEach(s=>{t.has(s)||n.push(new ia(s))}),n}nc(t){this.Ku=t.Yi,this.Qu=_();const n=this.Hu(t.documents);return this.applyChanges(n,!0)}sc(){return Xt.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class $c{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Zc{constructor(t){this.key=t,this.ic=!1}}class th{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new ee(a=>So(a),xn),this.uc=new Map,this.cc=new Set,this.ac=new H(T.comparator),this.hc=new Map,this.lc=new ti,this.fc={},this.dc=new Map,this._c=Wt.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function eh(e,t){const n=hh(e);let s,i;const r=n.oc.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const o=await Ic(n.localStore,vt(t));n.isPrimaryClient&&Jo(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await nh(n,t,s,a==="current",o.resumeToken)}return i}async function nh(e,t,n,s,i){e.mc=(d,m,v)=>async function(A,N,M,nt){let W=N.view.Hu(M);W.Li&&(W=await Yi(A.localStore,N.query,!1).then(({documents:Be})=>N.view.Hu(Be,W)));const qe=nt&&nt.targetChanges.get(N.targetId),Ft=N.view.applyChanges(W,A.isPrimaryClient,qe);return nr(A,N.targetId,Ft.tc),Ft.snapshot}(e,d,m,v);const r=await Yi(e.localStore,t,!0),o=new Jc(t,r.Yi),a=o.Hu(r.documents),u=Fe.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline",i),l=o.applyChanges(a,e.isPrimaryClient,u);nr(e,n,l.tc);const h=new $c(t,n,o);return e.oc.set(t,h),e.uc.has(n)?e.uc.get(n).push(t):e.uc.set(n,[t]),l.snapshot}async function sh(e,t){const n=D(e),s=n.oc.get(t),i=n.uc.get(s.targetId);if(i.length>1)return n.uc.set(s.targetId,i.filter(r=>!xn(r,t))),void n.oc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ss(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),$o(n.remoteStore,s.targetId),Cs(n,s.targetId)}).catch(xe)):(Cs(n,s.targetId),await Ss(n.localStore,s.targetId,!0))}async function ih(e,t,n){const s=dh(e);try{const i=await function(r,o){const a=D(r),u=q.now(),l=o.reduce((m,v)=>m.add(v.key),_());let h,d;return a.persistence.runTransaction("Locally write mutations","readwrite",m=>{let v=wt(),A=_();return a.ji.getEntries(m,l).next(N=>{v=N,v.forEach((M,nt)=>{nt.isValidDocument()||(A=A.add(M))})}).next(()=>a.localDocuments.getOverlayedDocuments(m,v)).next(N=>{h=N;const M=[];for(const nt of o){const W=Al(nt,h.get(nt.key).overlayedDocument);W!=null&&M.push(new Ot(nt.key,W,Eo(W.value.mapValue),mt.exists(!0)))}return a.mutationQueue.addMutationBatch(m,u,M,o)}).next(N=>{d=N;const M=N.applyToLocalDocumentSet(h,A);return a.documentOverlayCache.saveOverlays(m,N.batchId,M)})}).then(()=>({batchId:d.batchId,changes:Po(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let u=r.fc[r.currentUser.toKey()];u||(u=new H(L)),u=u.insert(o,a),r.fc[r.currentUser.toKey()]=u}(s,i.batchId,n),await Ue(s,i.changes),await Bn(s.remoteStore)}catch(i){const r=ai(i,"Failed to persist write");n.reject(r)}}async function oa(e,t){const n=D(e);try{const s=await wc(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.hc.get(r);o&&(R(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?R(o.ic):i.removedDocuments.size>0&&(R(o.ic),o.ic=!1))}),await Ue(n,s,t)}catch(s){await xe(s)}}function er(e,t,n){const s=D(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.Pu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=D(r);a.onlineState=o;let u=!1;a.queries.forEach((l,h)=>{for(const d of h.listeners)d.Pu(o)&&(u=!0)}),u&&ui(a)}(s.eventManager,t),i.length&&s.rc.Ho(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function rh(e,t,n){const s=D(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.hc.get(t),r=i&&i.key;if(r){let o=new H(T.comparator);o=o.insert(r,Y.newNoDocument(r,k.min()));const a=_().add(r),u=new Vn(k.min(),new Map,new B(L),o,a);await oa(s,u),s.ac=s.ac.remove(r),s.hc.delete(t),li(s)}else await Ss(s.localStore,t,!1).then(()=>Cs(s,t,n)).catch(xe)}async function oh(e,t){const n=D(e),s=t.batch.batchId;try{const i=await vc(n.localStore,t);ua(n,s,null),aa(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ue(n,i)}catch(i){await xe(i)}}async function ah(e,t,n){const s=D(e);try{const i=await function(r,o){const a=D(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(h=>(R(h!==null),l=h.keys(),a.mutationQueue.removeMutationBatch(u,h))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(s.localStore,t);ua(s,t,n),aa(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Ue(s,i)}catch(i){await xe(i)}}function aa(e,t){(e.dc.get(t)||[]).forEach(n=>{n.resolve()}),e.dc.delete(t)}function ua(e,t,n){const s=D(e);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.fc[s.currentUser.toKey()]=i}}function Cs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.uc.get(t))e.oc.delete(s),n&&e.rc.gc(s,n);e.uc.delete(t),e.isPrimaryClient&&e.lc.ds(t).forEach(s=>{e.lc.containsKey(s)||la(e,s)})}function la(e,t){e.cc.delete(t.path.canonicalString());const n=e.ac.get(t);n!==null&&($o(e.remoteStore,n),e.ac=e.ac.remove(t),e.hc.delete(n),li(e))}function nr(e,t,n){for(const s of n)s instanceof ia?(e.lc.addReference(s.key,t),uh(e,s)):s instanceof ra?(w("SyncEngine","Document no longer in limbo: "+s.key),e.lc.removeReference(s.key,t),e.lc.containsKey(s.key)||la(e,s.key)):S()}function uh(e,t){const n=t.key,s=n.path.canonicalString();e.ac.get(n)||e.cc.has(s)||(w("SyncEngine","New document in limbo: "+n),e.cc.add(s),li(e))}function li(e){for(;e.cc.size>0&&e.ac.size<e.maxConcurrentLimboResolutions;){const t=e.cc.values().next().value;e.cc.delete(t);const n=new T(O.fromString(t)),s=e._c.next();e.hc.set(s,new Zc(n)),e.ac=e.ac.insert(n,s),Jo(e.remoteStore,new Lt(vt(Io(n.path)),s,2,Ws.at))}}async function Ue(e,t,n){const s=D(e),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,u)=>{o.push(s.mc(u,t,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const h=ni.Ni(u.targetId,l);r.push(h)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,u){const l=D(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(u,d=>g.forEach(d.Ci,m=>l.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>g.forEach(d.xi,m=>l.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!Oe(h))throw h;w("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const m=l.Ki.get(d),v=m.snapshotVersion,A=m.withLastLimboFreeSnapshotVersion(v);l.Ki=l.Ki.insert(d,A)}}}(s.localStore,r))}async function lh(e,t){const n=D(e);if(!n.currentUser.isEqual(t)){w("SyncEngine","User change. New user:",t.toKey());const s=await Qo(n.localStore,t);n.currentUser=t,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new I(f.CANCELLED,r))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Ue(n,s.Wi)}}function ch(e,t){const n=D(e),s=n.hc.get(t);if(s&&s.ic)return _().add(s.key);{let i=_();const r=n.uc.get(t);if(!r)return i;for(const o of r){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function hh(e){const t=D(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=oa.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=ch.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=rh.bind(null,t),t.rc.Ho=Wc.bind(null,t.eventManager),t.rc.gc=Xc.bind(null,t.eventManager),t}function dh(e){const t=D(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=oh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ah.bind(null,t),t}class fh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.Tt=Un(t.databaseInfo.databaseId),this.sharedClientState=this.Ic(t),this.persistence=this.Tc(t),await this.persistence.start(),this.localStore=this.Ec(t),this.gcScheduler=this.Ac(t,this.localStore),this.indexBackfillerScheduler=this.Rc(t,this.localStore)}Ac(t,n){return null}Rc(t,n){return null}Ec(t){return yc(this.persistence,new mc,t.initialUser,this.Tt)}Tc(t){return new fc(ei.qs,this.Tt)}Ic(t){return new Cc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gh{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>er(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=lh.bind(null,this.syncEngine),await jc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new zc}createDatastore(t){const n=Un(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new _c(i));var i;return function(r,o,a,u){return new Lc(r,o,a,u)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>er(this.syncEngine,a,0),o=$i.C()?new $i:new kc,new Mc(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,u,l){const h=new th(s,i,r,o,a,u);return l&&(h.wc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=D(t);w("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Ve(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.vc(this.observer.next,t)}error(t){this.observer.error?this.vc(this.observer.error,t):yt("Uncaught Error in snapshot listener:",t.toString())}Pc(){this.muted=!0}vc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=X.UNAUTHENTICATED,this.clientId=co.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{w("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(w("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=ai(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function yh(e,t){e.asyncQueue.verifyOperationInProgress(),w("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Qo(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function vh(e,t){e.asyncQueue.verifyOperationInProgress();const n=await wh(e);w("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>Zi(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>Zi(t.remoteStore,r)),e.onlineComponents=t}async function wh(e){return e.offlineComponents||(w("FirestoreClient","Using default OfflineComponentProvider"),await yh(e,new fh)),e.offlineComponents}async function ca(e){return e.onlineComponents||(w("FirestoreClient","Using default OnlineComponentProvider"),await vh(e,new gh)),e.onlineComponents}function Th(e){return ca(e).then(t=>t.syncEngine)}async function Eh(e){const t=await ca(e),n=t.eventManager;return n.onListen=eh.bind(null,t.syncEngine),n.onUnlisten=sh.bind(null,t.syncEngine),n}function Ih(e,t,n={}){const s=new Tt;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,u){const l=new mh({next:d=>{r.enqueueAndForget(()=>Qc(i,h)),d.fromCache&&a.source==="server"?u.reject(new I(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new Yc(o,l,{includeMetadataChanges:!0,Ou:!0});return Gc(i,h)}(await Eh(e),e.asyncQueue,t,n,s)),s.promise}const sr=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(e,t,n){if(!n)throw new I(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Sh(e,t,n,s){if(t===!0&&s===!0)throw new I(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ir(e){if(!T.isDocumentKey(e))throw new I(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function rr(e){if(T.isDocumentKey(e))throw new I(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ci(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":S()}function mn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new I(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ci(e);throw new I(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new I(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new I(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Sh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new or({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new I(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new or(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Uu;switch(n.type){case"gapi":const s=n.client;return new ju(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new I(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=sr.get(t);n&&(w("ComponentProvider","Removing Datastore"),sr.delete(t),n.terminate())}(this),Promise.resolve()}}function Ch(e,t,n,s={}){var i;const r=(e=mn(e,Hn))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&fs("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=X.MOCK_USER;else{o=ba(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new I(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new X(u)}e._authCredentials=new qu(new lo(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Et(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new at(this.firestore,t,this._key)}}class jn{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new jn(this.firestore,t,this._query)}}class Et extends jn{constructor(t,n,s){super(t,n,Io(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new at(this.firestore,null,new T(t))}withConverter(t){return new Et(this.firestore,t,this._path)}}function kh(e,t,...n){if(e=de(e),ha("collection","path",t),e instanceof Hn){const s=O.fromString(t,...n);return rr(s),new Et(e,null,s)}{if(!(e instanceof at||e instanceof Et))throw new I(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(O.fromString(t,...n));return rr(s),new Et(e.firestore,null,s)}}function Ah(e,t,...n){if(e=de(e),arguments.length===1&&(t=co.R()),ha("doc","path",t),e instanceof Hn){const s=O.fromString(t,...n);return ir(s),new at(e,null,new T(s))}{if(!(e instanceof at||e instanceof Et))throw new I(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(O.fromString(t,...n));return ir(s),new at(e.firestore,e instanceof Et?e.converter:null,new T(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Xo(this,"async_queue_retry"),this.Hc=()=>{const n=es();n&&w("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const t=es();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Jc(),this.Yc(t)}enterRestrictedMode(t){if(!this.Kc){this.Kc=!0,this.zc=t||!1;const n=es();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(t){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Tt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Uc.push(t),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(t){if(!Oe(t))throw t;w("AsyncQueue","Operation failed with retryable error: "+t)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(t){const n=this.qc.then(()=>(this.jc=!0,t().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw yt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(t,n,s){this.Jc(),this.Wc.indexOf(t)>-1&&(n=0);const i=oi.createAndSchedule(this,t,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&S()}verifyOperationInProgress(){}async ta(){let t;do t=this.qc,await t;while(t!==this.qc)}ea(t){for(const n of this.Gc)if(n.timerId===t)return!0;return!1}na(t){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ta()})}sa(t){this.Wc.push(t)}Xc(t){const n=this.Gc.indexOf(t);this.Gc.splice(n,1)}}class hi extends Hn{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new Dh,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||fa(this),this._firestoreClient.terminate()}}function _h(e,t){const n=typeof e=="object"?e:Da(),s=typeof e=="string"?e:t||"(default)",i=_a(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Na("firestore");r&&Ch(i,...r)}return i}function da(e){return e._firestoreClient||fa(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function fa(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new Zu(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new ph(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Yt(tt.fromBase64String(t))}catch(n){throw new I(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Yt(tt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new I(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new J(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new I(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new I(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return L(this._lat,t._lat)||L(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=/^__.*__$/;class bh{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Ot(t,this.data,this.fieldMask,n,this.fieldTransforms):new Pe(t,this.data,n,this.fieldTransforms)}}function ma(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class gi{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(t){return new gi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.oa({path:s,ca:!1});return i.aa(t),i}ha(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.oa({path:s,ca:!1});return i.ia(),i}la(t){return this.oa({path:void 0,ca:!0})}fa(t){return pn(t,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let t=0;t<this.path.length;t++)this.aa(this.path.get(t))}aa(t){if(t.length===0)throw this.fa("Document fields must not be empty");if(ma(this.ra)&&Nh.test(t))throw this.fa('Document fields cannot begin and end with "__"')}}class Lh{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.Tt=s||Un(t)}wa(t,n,s,i=!1){return new gi({ra:t,methodName:n,_a:s,path:J.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function Rh(e){const t=e._freezeSettings(),n=Un(e._databaseId);return new Lh(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Mh(e,t,n,s,i,r={}){const o=e.wa(r.merge||r.mergeFields?2:0,t,n,i);wa("Data must be an object, but it was:",o,s);const a=ya(s,o);let u,l;if(r.merge)u=new ot(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const d of r.mergeFields){const m=xh(t,d,n);if(!o.contains(m))throw new I(f.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Ph(h,m)||h.push(m)}u=new ot(h),l=o.fieldTransforms.filter(d=>u.covers(d.field))}else u=null,l=o.fieldTransforms;return new bh(new it(a),u,l)}function pa(e,t){if(va(e=de(e)))return wa("Unsupported field value:",t,e),ya(e,t);if(e instanceof ga)return function(n,s){if(!ma(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ca&&t.ra!==4)throw t.fa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=pa(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=de(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Tl(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=q.fromDate(n);return{timestampValue:fn(s.Tt,i)}}if(n instanceof q){const i=new q(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:fn(s.Tt,i)}}if(n instanceof fi)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Yt)return{bytesValue:Bo(s.Tt,n._byteString)};if(n instanceof at){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$s(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${ci(n)}`)}(e,t)}function ya(e,t){const n={};return ho(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):te(e,(s,i)=>{const r=pa(i,t.ua(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function va(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof q||e instanceof fi||e instanceof Yt||e instanceof at||e instanceof ga)}function wa(e,t,n){if(!va(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ci(n);throw s==="an object"?t.fa(e+" a custom object"):t.fa(e+" "+s)}}function xh(e,t,n){if((t=de(t))instanceof di)return t._internalPath;if(typeof t=="string")return Ta(e,t);throw pn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Oh=new RegExp("[~\\*/\\[\\]]");function Ta(e,t,n){if(t.search(Oh)>=0)throw pn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new di(...t.split("."))._internalPath}catch{throw pn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function pn(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new I(f.INVALID_ARGUMENT,a+e+u)}function Ph(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Fh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Ia("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Fh extends Ea{data(){return super.data()}}function Ia(e,t){return typeof t=="string"?Ta(e,t):t instanceof di?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new I(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uh{convertValue(t,n="none"){switch(Mt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return V(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(zt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw S()}}convertObject(t,n){const s={};return te(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new fi(V(t.latitude),V(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=go(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ee(t));default:return null}}convertTimestamp(t){const n=St(t);return new q(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=O.fromString(t);R(Go(s));const i=new Te(s.get(1),s.get(3)),r=new T(s.popFirst(5));return i.isEqual(n)||yt(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Bh extends Ea{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ze(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Ia("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ze extends Bh{data(t={}){return super.data(t)}}class Hh{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Xe(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Ze(this._firestore,this._userDataWriter,s.key,s,new Xe(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new I(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Ze(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Xe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ze(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Xe(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,l=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),l=r.indexOf(o.doc.key)),{type:jh(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function jh(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}class Kh extends Uh{constructor(t){super(),this.firestore=t}convertBytes(t){return new Yt(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new at(this.firestore,null,n)}}function zh(e){e=mn(e,jn);const t=mn(e.firestore,hi),n=da(t),s=new Kh(t);return Vh(e._query),Ih(n,e._query).then(i=>new Hh(t,s,e,i))}function Tf(e,t){const n=mn(e.firestore,hi),s=Ah(e),i=qh(e.converter,t);return Gh(n,[Mh(Rh(e.firestore),"addDoc",s._key,i,e.converter!==null,{}).toMutation(s._key,mt.exists(!1))]).then(()=>s)}function Gh(e,t){return function(n,s){const i=new Tt;return n.asyncQueue.enqueueAndForget(async()=>ih(await Th(n),s,i)),i.promise}(da(e),t)}(function(e,t=!0){(function(n){Zt=n})(La),Ca(new ka("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new hi(new Bu(n.getProvider("auth-internal")),new zu(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new I(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Te(a.options.projectId,u)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),pi(Li,"3.8.4",e),pi(Li,"3.8.4","esm2017")})();let ks=[];const Qh=_h();async function Wh(){ks=[],(await zh(kh(Qh,"history"))).forEach(t=>{ks.push({id:t.id,data:t.data()})})}const Xh={props:{langIsSe:Boolean,loggedInUser:Boolean,userId:String},data(){return{allData:[],admins:["AM95NMyBr0fu66qR723YlFGAKnO2","eAMIii9xQ5OnsDhZkSBgJ7rCkpj1","tkl3oQPesVat8JQTwTzBmR3ug4i2","jV1FKaHFBEhNrK7vwmdtFCEe9wc2"],notAdmin:!0,activeHistory:0}},computed:{},methods:{async allDataBring(){await Wh(),this.allData=ks,this.allData=this.allData.sort((e,t)=>e.data.reportNum-t.data.reportNum),this.notAdmin=!0;for(let e=0;e<this.admins.length;e++)this.admins[e]==this.userId.uid&&(this.notAdmin=!1);this.notAdmin&&(this.allData=this.allData.filter(e=>this.userId.uid==e.data.userID))}},mounted(){this.allDataBring()}},E=e=>(xa("data-v-610d8c00"),e=e(),Oa(),e),Yh=E(()=>c("img",{class:"head-imgs",src:Pa,alt:""},null,-1)),Jh={class:"second-head second-head-histoy"},$h=E(()=>c("hr",null,null,-1)),Zh={class:"his-body"},td={class:"history-list scroller"},ed=["onClick"],nd={key:0,class:"invoice scroller"},sd={class:"head-rapport"},id=E(()=>c("tr",null,[c("th",null,"Antal"),c("th",null,"ArtNr"),c("th",null,"Benämning"),c("th",null,"Vikt/st"),c("th",null,"Tot.vikt"),c("th",null,"Pris/st"),c("th",null,"Totalt (exkl. moms)")],-1)),rd={key:0},od={class:"head-tables"},ad={id:"Geometri"},ud=E(()=>c("td",null,"Mått A",-1)),ld=E(()=>c("td",null,"Mått B",-1)),cd={key:0},hd=E(()=>c("td",null,"Mått C",-1)),dd=E(()=>c("td",null,"Byggnadens höjd",-1)),fd={id:"Geometri2"},gd=E(()=>c("td",null,"Taklutning",-1)),md=E(()=>c("td",null,"Taktyp",-1)),pd=E(()=>c("td",null,"Typ av infästning",-1)),yd={id:"randzon"},vd=E(()=>c("td",null,"a1",-1)),wd=E(()=>c("td",null,"a2",-1)),Td={id:"Lastförutsättningar"},Ed=E(()=>c("td",null,"Adress",-1)),Id=E(()=>c("td",null,"Coordinates",-1)),Sd=E(()=>c("tr",null,[c("td",null,"Säkerhetsklass"),c("td",null,"2")],-1)),Cd=E(()=>c("tr",null,[c("td",null,"Dimensionerande livslängd"),c("td",null,"30 år")],-1)),kd=E(()=>c("td",null,"Referensvindhastighet",-1)),Ad=E(()=>c("td",null,"Terrängtyp",-1)),Dd=E(()=>c("tr",null,[c("td",null,"Lastkombination faktor 0v"),c("td",null,"0.3")],-1)),_d=E(()=>c("td",null,"Snözon",-1)),Nd=E(()=>c("td",null,"Lastkombination faktor 0s",-1)),bd=E(()=>c("td",null,"Snörasskydd",-1)),Ld=["id"],Rd=E(()=>c("td",null,"Startpunkt: Nock:",-1)),Md=E(()=>c("td",null,"Startpunkt: Vänster:",-1)),xd=E(()=>c("td",null,"Antal rader",-1)),Od=E(()=>c("td",null,"Antal paneler per rad",-1)),Pd=E(()=>c("td",null,"Avstånd skenor",-1)),Fd=E(()=>c("td",null,"Avstånd infästning (max)",-1)),Vd=E(()=>c("td",null,"Avstånd infästning (max) i randzon",-1)),Ud=E(()=>c("td",null,"Antal infästningar (min)",-1)),qd=E(()=>c("td",null,"Panellängd",-1)),Bd=E(()=>c("td",null,"Panelbredd",-1)),Hd=E(()=>c("td",null,"Panelvikt",-1)),jd=["id"],Kd=E(()=>c("tr",null,[c("th"),c("th",null,"I randzon (F, G & J)"),c("th",null,"Innanför randzon (H & I)")],-1)),zd=E(()=>c("td",null,"Lyftkraft",-1)),Gd=E(()=>c("td",null,"Tryckkraft",-1)),Qd=E(()=>c("td",null,"Horisontell kraft",-1)),Wd=["id"],Xd=E(()=>c("tr",null,[c("th"),c("th",null,"I randzon (F, G & J)"),c("th",null,"Innanför randzon (H & I)")],-1)),Yd=E(()=>c("td",null,"Lyftkraft",-1)),Jd=E(()=>c("td",null,"Tryckkraft",-1)),$d=E(()=>c("td",null,"Horisontell kraft",-1)),Zd=["id"],tf=E(()=>c("tr",null,[c("th"),c("th",null,"I randzon (F, G & J)"),c("th",null,"Innanför randzon (H & I)")],-1)),ef=E(()=>c("td",null,"Lyftkraft",-1)),nf=E(()=>c("td",null,"Tryckkraft",-1)),sf=E(()=>c("td",null,"Horisontell kraft",-1)),rf=["id"],of=E(()=>c("tr",null,[c("th"),c("th",null,"I randzon (F, G & J)"),c("th",null,"Innanför randzon (H & I)")],-1)),af=E(()=>c("td",null,"Max för lyft",-1)),uf=E(()=>c("td",null,"Max för tryck",-1)),lf=["id"],cf=E(()=>c("tr",null,[c("th"),c("th",null,"I randzon (F, G & J)"),c("th",null,"Innanför randzon (H & I)")],-1)),hf=E(()=>c("td",null,"Max för lyft",-1)),df=E(()=>c("td",null,"Max för tryck",-1)),ff=E(()=>c("td",null,"Max för horisontell kraft",-1)),gf={class:"B-history"};function mf(e,t,n,s,i,r){return ut(),lt("main",null,[Yh,c("h1",{onClick:t[0]||(t[0]=(...o)=>e.check&&e.check(...o))},p((n.langIsSe,"Min Projekthistoria")),1),c("div",Jh,[c("h1",null," User email: "+p(n.userId.email),1),$h]),c("div",Zh,[c("ul",td,[(ut(!0),lt(He,null,Kn(i.allData,(o,a)=>(ut(),lt("li",{key:a,onClick:u=>i.activeHistory=a,class:rt(["",i.activeHistory==a?"  marked":""])},[yi(p(o.data.reportNum+")  ")+" ",1),c("b",null,p(o.data.email),1),yi(p(" | "+o.data.date),1)],10,ed))),128))]),i.allData[i.activeHistory]?(ut(),lt("div",nd,[c("div",sd,[c("b",null," Rapportnummer: "+p(i.allData[i.activeHistory].data.reportNum),1),c("b",null,p(i.allData[i.activeHistory].data.date),1)]),c("table",null,[id,(ut(!0),lt(He,null,Kn(i.allData[i.activeHistory].data.invoice,(o,a)=>(ut(),lt(He,{key:a},[o.Antal>0?(ut(),lt("tr",rd,[c("td",null,p(o.Antal),1),c("td",null,p(o.ArtNr),1),c("td",null,p(o.Benämning),1),c("td",null,p(o.Vikt)+" kg",1),c("td",null,p(Math.round(o.Vikt*o.Antal*100)/100)+" kg",1),c("td",null,p(o.Pris)+" SEK",1),c("td",null,p(o.Pris*o.Antal)+" SEK",1)])):zn("",!0)],64))),128))]),c("div",od,[c("table",ad,[c("tr",null,[ud,c("td",null,p(i.allData[i.activeHistory].data.inputs.Amatt)+" m",1)]),c("tr",null,[ld,c("td",null,p(i.allData[i.activeHistory].data.inputs.Bmatt)+" m",1)]),e.Takform!=0?(ut(),lt("tr",cd,[hd,c("td",null,p(i.allData[i.activeHistory].data.inputs.Cmatt)+" m",1)])):zn("",!0),c("tr",null,[dd,c("td",null,p(i.allData[i.activeHistory].data.inputs.nockhöjd)+" m",1)])]),c("table",fd,[c("tr",null,[gd,c("td",null,p(i.allData[i.activeHistory].data.inputs.Taklutning)+"°",1)]),c("tr",null,[md,c("td",null,p(i.allData[i.activeHistory].data.inputs.TypAvTak==0?"Pulpet":"")+p(i.allData[i.activeHistory].data.inputs.TypAvTak==1?"Sadel":"")+p(i.allData[i.activeHistory].data.inputs.TypAvTak==2?"Motfallstak":""),1)]),c("tr",null,[pd,c("td",null,p(i.allData[i.activeHistory].data.inputs.Infästning),1)])]),c("table",yd,[c("tr",null,[vd,c("td",null,p(Math.round(i.allData[i.activeHistory].data.trycLyft[0].data.edgeBase.width*.1*100)/100)+" m ",1)]),c("tr",null,[wd,c("td",null,p(Math.round(i.allData[i.activeHistory].data.trycLyft[0].data.edgeBase.length*.1*100)/100)+" m ",1)])]),c("table",Td,[c("tr",null,[Ed,c("td",null,p(i.allData[i.activeHistory].data.inputs.adressInfo.address),1)]),c("tr",null,[Id,c("td",null,"Lat: "+p(i.allData[i.activeHistory].data.inputs.adressInfo.langlat.lat)+", Lng: "+p(i.allData[i.activeHistory].data.inputs.adressInfo.langlat.lng),1)]),Sd,Cd,c("tr",null,[kd,c("td",null,p(i.allData[i.activeHistory].data.inputs.vind)+" m/s",1)]),c("tr",null,[Ad,c("td",null,p(i.allData[i.activeHistory].data.inputs.places),1)]),Dd,c("tr",null,[_d,c("td",null,p(i.allData[i.activeHistory].data.inputs.sno)+" kN/m2",1)]),c("tr",null,[Nd,c("td",null,p(i.allData[i.activeHistory].data.trycLyft[0].data.reductionFactorSnow),1)]),c("tr",null,[bd,c("td",null,p(i.allData[i.activeHistory].data.inputs.snorasskydd),1)])]),(ut(!0),lt(He,null,Kn(i.allData[i.activeHistory].data.inputs.AntalPerRad,(o,a)=>(ut(),lt("div",{key:a},[c("h3",null,"Sektion "+p(a+1),1),c("table",{id:"sektion"+a},[c("tr",null,[Rd,c("td",null,p(i.allData[i.activeHistory].data.inputs.distTop[a])+" cm",1)]),c("tr",null,[Md,c("td",null,p(i.allData[i.activeHistory].data.inputs.distLeft[a])+" cm",1)]),c("tr",null,[xd,c("td",null,p(i.allData[i.activeHistory].data.inputs.panelarRows[a])+" st",1)]),c("tr",null,[Od,c("td",null,p(i.allData[i.activeHistory].data.inputs.AntalPerRad[a])+" st",1)]),c("tr",null,[Pd,c("td",null,p(i.allData[i.activeHistory].data.inputs.distMellanFästningar[a])+" cm",1)]),c("tr",null,[Fd,c("td",null,p(i.allData[i.activeHistory].data.inputs.MaxAvstandMellanFasteOut[a])+" cm",1)]),c("tr",null,[Vd,c("td",null,p(i.allData[i.activeHistory].data.inputs.MaxAvstandMellanFasteIn[a])+" cm",1)]),c("tr",null,[Ud,c("td",null,p(i.allData[i.activeHistory].data.inputs.antalFasteArr[a])+" st",1)]),c("tr",null,[qd,c("td",null,p(i.allData[i.activeHistory].data.inputs.PanelHöjd)+" mm ",1)]),c("tr",null,[Bd,c("td",null,p(i.allData[i.activeHistory].data.inputs.PanelBredd)+" mm ",1)]),c("tr",null,[Hd,c("td",null,p(i.allData[i.activeHistory].data.inputs.PanelVikt[a])+" kg",1)])],8,Ld),c("table",{id:"Utbredda"+a},[Kd,c("tr",null,[zd,c("td",null,p(Math.round(i.allData[i.activeHistory].data.trycLyft[0].data.areaLoad.ultimateLimitState.suction.verticalEdge*100)/100)+" kN/m2 ",1),c("td",null,p(Math.round(i.allData[i.activeHistory].data.trycLyft[0].data.areaLoad.ultimateLimitState.suction.verticalNonedge*100)/100)+" kN/m2 ",1)]),c("tr",null,[Gd,c("td",null,p(Math.round(i.allData[i.activeHistory].data.trycLyft[0].data.areaLoad.ultimateLimitState.pressure.verticalEdge*100)/100)+" kN/m2 ",1),c("td",null,p(Math.round(i.allData[i.activeHistory].data.trycLyft[0].data.areaLoad.ultimateLimitState.pressure.verticalNonedge*100)/100)+" kN/m2 ",1)]),c("tr",null,[Qd,c("td",null,p(Math.round(i.allData[i.activeHistory].data.trycLyft[0].data.areaLoad.ultimateLimitState.pressure.horizontal*100)/100)+" kN/m2 ",1),c("td",null,p(Math.round(i.allData[i.activeHistory].data.trycLyft[0].data.areaLoad.ultimateLimitState.pressure.horizontal*100)/100)+" kN/m2 ",1)])],8,jd),c("table",{id:"skena"+a},[Xd,c("tr",null,[Yd,c("td",null,p(Math.round(i.allData[i.activeHistory].data.trycLyft[0].data.lineLoad.ultimateLimitState.suction.verticalEdge*100)/100)+" kN/m ",1),c("td",null,p(Math.round(i.allData[i.activeHistory].data.trycLyft[0].data.lineLoad.ultimateLimitState.suction.verticalNonedge*100)/100)+" kN/m ",1)]),c("tr",null,[Jd,c("td",null,p(Math.round(i.allData[i.activeHistory].data.trycLyft[0].data.lineLoad.ultimateLimitState.pressure.verticalEdge*100)/100)+" kN/m ",1),c("td",null,p(Math.round(i.allData[i.activeHistory].data.trycLyft[0].data.lineLoad.ultimateLimitState.pressure.verticalNonedge*100)/100)+" kN/m ",1)]),c("tr",null,[$d,c("td",null,p(Math.round(i.allData[i.activeHistory].data.trycLyft[0].data.lineLoad.ultimateLimitState.pressure.horizontal*100)/100)+" kN/m ",1),c("td",null,p(Math.round(i.allData[i.activeHistory].data.trycLyft[0].data.lineLoad.ultimateLimitState.pressure.horizontal*100)/100)+" kN/m ",1)])],8,Wd),c("table",{id:"tak"+a},[tf,c("tr",null,[ef,c("td",null,p(Math.round(i.allData[i.activeHistory].data.trycLyft[0].data.lineLoad.ultimateLimitState.suction.verticalEdge*i.allData[i.activeHistory].data.inputs.MaxAvstandMellanFasteIn[a]/100*100)/100)+" kN ",1),c("td",null,p(Math.round(i.allData[i.activeHistory].data.trycLyft[0].data.lineLoad.ultimateLimitState.suction.verticalNonedge*i.allData[i.activeHistory].data.inputs.MaxAvstandMellanFasteOut[a]/100*100)/100)+" kN ",1)]),c("tr",null,[nf,c("td",null,p(Math.round(i.allData[i.activeHistory].data.trycLyft[0].data.lineLoad.ultimateLimitState.pressure.verticalEdge*i.allData[i.activeHistory].data.inputs.MaxAvstandMellanFasteIn[a]/100*100)/100)+" kN ",1),c("td",null,p(Math.round(i.allData[i.activeHistory].data.trycLyft[0].data.lineLoad.ultimateLimitState.pressure.verticalNonedge*i.allData[i.activeHistory].data.inputs.MaxAvstandMellanFasteOut[a]/100*100)/100)+" kN ",1)]),c("tr",null,[sf,c("td",null,p(Math.round(i.allData[i.activeHistory].data.trycLyft[0].data.lineLoad.ultimateLimitState.pressure.horizontal*i.allData[i.activeHistory].data.inputs.MaxAvstandMellanFasteIn[a]/100*100)/100)+" kN ",1),c("td",null,p(Math.round(i.allData[i.activeHistory].data.trycLyft[0].data.lineLoad.ultimateLimitState.pressure.horizontal*i.allData[i.activeHistory].data.inputs.MaxAvstandMellanFasteOut[a]/100*100)/100)+" kN ",1)])],8,Zd),c("table",{id:"infästningsskena"+a},[of,c("tr",null,[af,c("td",{class:rt(["",Math.abs(i.allData[i.activeHistory].data.inputs.lastPageCalc[a].a)>100?"  redAlert":""])},p(i.allData[i.activeHistory].data.inputs.lastPageCalc[a].a)+" % ",3),c("td",{class:rt(["",Math.abs(i.allData[i.activeHistory].data.inputs.lastPageCalc[a].b)>100?"  redAlert":""])},p(i.allData[i.activeHistory].data.inputs.lastPageCalc[a].b)+" % ",3)]),c("tr",null,[uf,c("td",{class:rt(["",Math.abs(i.allData[i.activeHistory].data.inputs.lastPageCalc[a].c)>100?"  redAlert":""])},p(i.allData[i.activeHistory].data.inputs.lastPageCalc[a].c)+" % ",3),c("td",{class:rt(["",Math.abs(i.allData[i.activeHistory].data.inputs.lastPageCalc[a].d)>100?"  redAlert":""])},p(i.allData[i.activeHistory].data.inputs.lastPageCalc[a].d)+" % ",3)])],8,rf),c("table",{id:"infästningar"+a},[cf,c("tr",null,[hf,c("td",{class:rt(["",Math.abs(i.allData[i.activeHistory].data.inputs.lastPageCalc[a].e)>100?"  redAlert":""])},p(i.allData[i.activeHistory].data.inputs.lastPageCalc[a].e)+" % ",3),c("td",{class:rt(["",Math.abs(i.allData[i.activeHistory].data.inputs.lastPageCalc[a].f)>100?"  redAlert":""])},p(i.allData[i.activeHistory].data.inputs.lastPageCalc[a].f)+" % ",3)]),c("tr",null,[df,c("td",{class:rt(["",Math.abs(i.allData[i.activeHistory].data.inputs.lastPageCalc[a].g)>100?"  redAlert":""])},p(i.allData[i.activeHistory].data.inputs.lastPageCalc[a].g)+" % ",3),c("td",{class:rt(["",Math.abs(i.allData[i.activeHistory].data.inputs.lastPageCalc[a].h)>100?"  redAlert":""])},p(i.allData[i.activeHistory].data.inputs.lastPageCalc[a].h)+" % ",3)]),c("tr",null,[ff,c("td",{class:rt(["",Math.abs(i.allData[i.activeHistory].data.inputs.lastPageCalc[a].i)>100?"  redAlert":""])},p(i.allData[i.activeHistory].data.inputs.lastPageCalc[a].i)+" % ",3),c("td",{class:rt(["",Math.abs(i.allData[i.activeHistory].data.inputs.lastPageCalc[a].j)>100?"  redAlert":""])},p(i.allData[i.activeHistory].data.inputs.lastPageCalc[a].j)+" % ",3)])],8,lf)]))),128))])])):zn("",!0)]),c("div",gf,[c("button",{onClick:t[1]||(t[1]=(...o)=>r.allDataBring&&r.allDataBring(...o))},"Refresh")])])}const pf=Ma(Xh,[["render",mf],["__scopeId","data-v-610d8c00"]]),Ef=Object.freeze(Object.defineProperty({__proto__:null,default:pf},Symbol.toStringTag,{value:"Module"}));export{kh as J,Tf as X,Ef as h,_h as u,zh as z};
