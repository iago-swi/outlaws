(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yr="172",Pc=0,pa=1,Lc=2,Ll=1,Il=2,Tn=3,Wn=0,kt=1,gt=2,Rn=0,Pi=1,cs=2,ma=3,ga=4,Ic=5,ni=100,Dc=101,Uc=102,Nc=103,Fc=104,Oc=200,Bc=201,zc=202,kc=203,er=204,tr=205,Hc=206,Gc=207,Vc=208,Wc=209,Xc=210,qc=211,Yc=212,Zc=213,$c=214,nr=0,ir=1,sr=2,Di=3,or=4,rr=5,ar=6,lr=7,Dl=0,jc=1,Kc=2,Hn=0,Ul=1,Nl=2,Fl=3,Zr=4,Jc=5,Ol=6,Bl=7,zl=300,Ui=301,Ni=302,cr=303,hr=304,uo=306,hs=1e3,At=1001,dr=1002,hn=1003,Qc=1004,Ts=1005,mn=1006,wo=1007,si=1008,Ln=1009,kl=1010,Hl=1011,ds=1012,$r=1013,ri=1014,En=1015,Cn=1016,jr=1017,Kr=1018,Fi=1020,Gl=35902,Vl=1021,Wl=1022,cn=1023,Xl=1024,ql=1025,Li=1026,Oi=1027,Yl=1028,Jr=1029,Zl=1030,Qr=1031,ea=1033,Qs=33776,eo=33777,to=33778,no=33779,ur=35840,fr=35841,pr=35842,mr=35843,gr=36196,xr=37492,vr=37496,_r=37808,wr=37809,Mr=37810,yr=37811,Sr=37812,br=37813,Tr=37814,Er=37815,Ar=37816,Rr=37817,Cr=37818,Pr=37819,Lr=37820,Ir=37821,io=36492,Dr=36494,Ur=36495,$l=36283,Nr=36284,Fr=36285,Or=36286,eh=3200,th=3201,jl=0,nh=1,kn="",Yt="srgb",Bi="srgb-linear",ro="linear",ft="srgb",ui=7680,xa=519,ih=512,sh=513,oh=514,Kl=515,rh=516,ah=517,lh=518,ch=519,va=35044,_a="300 es",An=2e3,ao=2001;class Hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const o=i.indexOf(t);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wa=1234567;const ss=Math.PI/180,us=180/Math.PI;function li(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[s&255]+Nt[s>>8&255]+Nt[s>>16&255]+Nt[s>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function nt(s,e,t){return Math.max(e,Math.min(t,s))}function ta(s,e){return(s%e+e)%e}function hh(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function dh(s,e,t){return s!==e?(t-s)/(e-s):0}function os(s,e,t){return(1-t)*s+t*e}function uh(s,e,t,n){return os(s,e,1-Math.exp(-t*n))}function fh(s,e=1){return e-Math.abs(ta(s,e*2)-e)}function ph(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function mh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function gh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function xh(s,e){return s+Math.random()*(e-s)}function vh(s){return s*(.5-Math.random())}function _h(s){s!==void 0&&(wa=s);let e=wa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wh(s){return s*ss}function Mh(s){return s*us}function yh(s){return(s&s-1)===0&&s!==0}function Sh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function bh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Th(s,e,t,n,i){const o=Math.cos,r=Math.sin,a=o(t/2),l=r(t/2),c=o((e+n)/2),h=r((e+n)/2),d=o((e-n)/2),u=r((e-n)/2),f=o((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ei(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Bt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Eh={DEG2RAD:ss,RAD2DEG:us,generateUUID:li,clamp:nt,euclideanModulo:ta,mapLinear:hh,inverseLerp:dh,lerp:os,damp:uh,pingpong:fh,smoothstep:ph,smootherstep:mh,randInt:gh,randFloat:xh,randFloatSpread:vh,seededRandom:_h,degToRad:wh,radToDeg:Mh,isPowerOfTwo:yh,ceilPowerOfTwo:Sh,floorPowerOfTwo:bh,setQuaternionFromProperEuler:Th,normalize:Bt,denormalize:Ei};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*n-r*i+e.x,this.y=o*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,n,i,o,r,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,o,r,a,l,c)}set(e,t,n,i,o,r,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],v=i[0],x=i[3],p=i[6],y=i[1],M=i[4],w=i[7],P=i[2],C=i[5],L=i[8];return o[0]=r*v+a*y+l*P,o[3]=r*x+a*M+l*C,o[6]=r*p+a*w+l*L,o[1]=c*v+h*y+d*P,o[4]=c*x+h*M+d*C,o[7]=c*p+h*w+d*L,o[2]=u*v+f*y+g*P,o[5]=u*x+f*M+g*C,o[8]=u*p+f*w+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*a*c-n*o*h+n*a*l+i*o*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*r-a*c,u=a*l-h*o,f=c*o-r*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(i*c-h*n)*v,e[2]=(a*n-i*r)*v,e[3]=u*v,e[4]=(h*t-i*l)*v,e[5]=(i*o-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(r*t-n*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+e,-i*c,i*l,-i*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Mo.makeScale(e,t)),this}rotate(e){return this.premultiply(Mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mo=new et;function Jl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function lo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ah(){const s=lo("canvas");return s.style.display="block",s}const Ma={};function Ai(s){s in Ma||(Ma[s]=!0,console.warn(s))}function Rh(s,e,t){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function Ch(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ph(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ya=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sa=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lh(){const s={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(i,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===ft&&(i.r=Pn(i.r),i.g=Pn(i.g),i.b=Pn(i.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ft&&(i.r=Ii(i.r),i.g=Ii(i.g),i.b=Ii(i.b))),i},fromWorkingColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},toWorkingColorSpace:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===kn?ro:this.spaces[i].transfer},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,r){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Bi]:{primaries:e,whitePoint:n,transfer:ro,toXYZ:ya,fromXYZ:Sa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:ya,fromXYZ:Sa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),s}const rt=Lh();function Pn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ii(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let fi;class Ih{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fi===void 0&&(fi=lo("canvas")),fi.width=e.width,fi.height=e.height;const n=fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=Pn(o[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pn(t[n]/255)*255):t[n]=Pn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dh=0;class Ql{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=li(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(yo(i[r].image)):o.push(yo(i[r]))}else o=yo(i);n.url=o}return t||(e.images[this.uuid]=n),n}}function yo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ih.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uh=0;class Ht extends Hi{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=At,i=At,o=mn,r=si,a=cn,l=Ln,c=Ht.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=li(),this.name="",this.source=new Ql(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hs:e.x=e.x-Math.floor(e.x);break;case At:e.x=e.x<0?0:1;break;case dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hs:e.y=e.y-Math.floor(e.y);break;case At:e.y=e.y<0?0:1;break;case dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=zl;Ht.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,i=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,o;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],x=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+x)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,w=(f+1)/2,P=(p+1)/2,C=(h+u)/4,L=(d+v)/4,D=(g+x)/4;return M>w&&M>P?M<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(M),i=C/n,o=L/n):w>P?w<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(w),n=C/i,o=D/i):P<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(P),n=L/o,i=D/o),this.set(n,i,o,t),this}let y=Math.sqrt((x-g)*(x-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(x-g)/y,this.y=(d-v)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nh extends Hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ht(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Ql(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dn extends Nh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ec extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=At,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fh extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=At,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,o,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=o[r+0],f=o[r+1],g=o[r+2],v=o[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==u||c!==f||h!==g){let x=1-a;const p=l*u+c*f+h*g+d*v,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const P=Math.sqrt(M),C=Math.atan2(P,p*y);x=Math.sin(x*C)/P,a=Math.sin(a*C)/P}const w=a*y;if(l=l*x+u*w,c=c*x+f*w,h=h*x+g*w,d=d*x+v*w,x===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=P,c*=P,h*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,o,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=o[r],u=o[r+1],f=o[r+2],g=o[r+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,o=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(o/2),u=l(n/2),f=l(i/2),g=l(o/2);switch(r){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],o=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(r-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(o+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(o-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(r-i)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,o=e._z,r=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*a+i*c-o*l,this._y=i*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=o*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(e=0,t=0,n=0){S.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ba.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ba.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*i,this.y=o[1]*t+o[4]*n+o[7]*i,this.z=o[2]*t+o[5]*n+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,o=e.elements,r=1/(o[3]*t+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*t+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*t+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,o=e.x,r=e.y,a=e.z,l=e.w,c=2*(r*i-a*n),h=2*(a*t-o*i),d=2*(o*n-r*t);return this.x=t+l*c+r*d-a*h,this.y=n+l*h+a*c-o*d,this.z=i+l*d+o*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i,this.y=o[1]*t+o[5]*n+o[9]*i,this.z=o[2]*t+o[6]*n+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,o=e.z,r=t.x,a=t.y,l=t.z;return this.x=i*l-o*a,this.y=o*r-n*l,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return So.copy(this).projectOnVector(e),this.sub(So)}reflect(e){return this.sub(So.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const So=new S,ba=new xs;class vs{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,sn):sn.fromBufferAttribute(o,r),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Es.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Es.copy(n.boundingBox)),Es.applyMatrix4(e.matrixWorld),this.union(Es)}const i=e.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),As.subVectors(this.max,Ki),pi.subVectors(e.a,Ki),mi.subVectors(e.b,Ki),gi.subVectors(e.c,Ki),Un.subVectors(mi,pi),Nn.subVectors(gi,mi),Zn.subVectors(pi,gi);let t=[0,-Un.z,Un.y,0,-Nn.z,Nn.y,0,-Zn.z,Zn.y,Un.z,0,-Un.x,Nn.z,0,-Nn.x,Zn.z,0,-Zn.x,-Un.y,Un.x,0,-Nn.y,Nn.x,0,-Zn.y,Zn.x,0];return!bo(t,pi,mi,gi,As)||(t=[1,0,0,0,1,0,0,0,1],!bo(t,pi,mi,gi,As))?!1:(Rs.crossVectors(Un,Nn),t=[Rs.x,Rs.y,Rs.z],bo(t,pi,mi,gi,As))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new S,new S,new S,new S,new S,new S,new S,new S],sn=new S,Es=new vs,pi=new S,mi=new S,gi=new S,Un=new S,Nn=new S,Zn=new S,Ki=new S,As=new S,Rs=new S,$n=new S;function bo(s,e,t,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){$n.fromArray(s,o);const a=i.x*Math.abs($n.x)+i.y*Math.abs($n.y)+i.z*Math.abs($n.z),l=e.dot($n),c=t.dot($n),h=n.dot($n);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Oh=new vs,Ji=new S,To=new S;class _s{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Oh.setFromPoints(e).getCenter(n);let i=0;for(let o=0,r=e.length;o<r;o++)i=Math.max(i,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ji.subVectors(e,this.center);const t=Ji.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ji,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(To.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ji.copy(e.center).add(To)),this.expandByPoint(Ji.copy(e.center).sub(To))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new S,Eo=new S,Cs=new S,Fn=new S,Ao=new S,Ps=new S,Ro=new S;class fo{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Eo.copy(e).add(t).multiplyScalar(.5),Cs.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(Eo);const o=e.distanceTo(t)*.5,r=-this.direction.dot(Cs),a=Fn.dot(this.direction),l=-Fn.dot(Cs),c=Fn.lengthSq(),h=Math.abs(1-r*r);let d,u,f,g;if(h>0)if(d=r*l-a,u=r*a-l,g=o*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,f=d*(d+r*u+2*a)+u*(r*d+u+2*l)+c}else u=o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u=-o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*o+a)),u=d>0?-o:Math.min(Math.max(-o,-l),o),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-o,-l),o),f=u*(u+2*l)+c):(d=Math.max(0,-(r*o+a)),u=d>0?o:Math.min(Math.max(-o,-l),o),f=-d*d+u*(u+2*l)+c);else u=r>0?-o:o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Eo).addScaledVector(Cs,u),f}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),i=Mn.dot(Mn)-n*n,o=e.radius*e.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(o=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(o=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,i,o){Ao.subVectors(t,e),Ps.subVectors(n,e),Ro.crossVectors(Ao,Ps);let r=this.direction.dot(Ro),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Fn.subVectors(this.origin,e);const l=a*this.direction.dot(Ps.crossVectors(Fn,Ps));if(l<0)return null;const c=a*this.direction.dot(Ao.cross(Fn));if(c<0||l+c>r)return null;const h=-a*Fn.dot(Ro);return h<0?null:this.at(h/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,n,i,o,r,a,l,c,h,d,u,f,g,v,x){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,o,r,a,l,c,h,d,u,f,g,v,x)}set(e,t,n,i,o,r,a,l,c,h,d,u,f,g,v,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/xi.setFromMatrixColumn(e,0).length(),o=1/xi.setFromMatrixColumn(e,1).length(),r=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,o=e.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const u=r*h,f=r*d,g=a*h,v=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-v*c,t[9]=-a*l,t[2]=v-u*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,v=c*d;t[0]=u+v*a,t[4]=g*a-f,t[8]=r*c,t[1]=r*d,t[5]=r*h,t[9]=-a,t[2]=f*a-g,t[6]=v+u*a,t[10]=r*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,v=c*d;t[0]=u-v*a,t[4]=-r*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=r*h,t[9]=v-u*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const u=r*h,f=r*d,g=a*h,v=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const u=r*l,f=r*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-u*d,t[8]=g*d+f,t[1]=d,t[5]=r*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-v*d}else if(e.order==="XZY"){const u=r*l,f=r*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=r*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bh,e,zh)}lookAt(e,t,n){const i=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),On.crossVectors(n,Xt),On.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),On.crossVectors(n,Xt)),On.normalize(),Ls.crossVectors(Xt,On),i[0]=On.x,i[4]=Ls.x,i[8]=Xt.x,i[1]=On.y,i[5]=Ls.y,i[9]=Xt.y,i[2]=On.z,i[6]=Ls.z,i[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],v=n[6],x=n[10],p=n[14],y=n[3],M=n[7],w=n[11],P=n[15],C=i[0],L=i[4],D=i[8],T=i[12],b=i[1],O=i[5],ae=i[9],ne=i[13],fe=i[2],j=i[6],$=i[10],F=i[14],I=i[3],H=i[7],q=i[11],J=i[15];return o[0]=r*C+a*b+l*fe+c*I,o[4]=r*L+a*O+l*j+c*H,o[8]=r*D+a*ae+l*$+c*q,o[12]=r*T+a*ne+l*F+c*J,o[1]=h*C+d*b+u*fe+f*I,o[5]=h*L+d*O+u*j+f*H,o[9]=h*D+d*ae+u*$+f*q,o[13]=h*T+d*ne+u*F+f*J,o[2]=g*C+v*b+x*fe+p*I,o[6]=g*L+v*O+x*j+p*H,o[10]=g*D+v*ae+x*$+p*q,o[14]=g*T+v*ne+x*F+p*J,o[3]=y*C+M*b+w*fe+P*I,o[7]=y*L+M*O+w*j+P*H,o[11]=y*D+M*ae+w*$+P*q,o[15]=y*T+M*ne+w*F+P*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],o=e[12],r=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],v=e[7],x=e[11],p=e[15];return g*(+o*l*d-i*c*d-o*a*u+n*c*u+i*a*f-n*l*f)+v*(+t*l*f-t*c*u+o*r*u-i*r*f+i*c*h-o*l*h)+x*(+t*c*d-t*a*f-o*r*d+n*r*f+o*a*h-n*c*h)+p*(-i*a*h-t*l*d+t*a*u+i*r*d-n*r*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],v=e[13],x=e[14],p=e[15],y=d*x*c-v*u*c+v*l*f-a*x*f-d*l*p+a*u*p,M=g*u*c-h*x*c-g*l*f+r*x*f+h*l*p-r*u*p,w=h*v*c-g*d*c+g*a*f-r*v*f-h*a*p+r*d*p,P=g*d*l-h*v*l-g*a*u+r*v*u+h*a*x-r*d*x,C=t*y+n*M+i*w+o*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=y*L,e[1]=(v*u*o-d*x*o-v*i*f+n*x*f+d*i*p-n*u*p)*L,e[2]=(a*x*o-v*l*o+v*i*c-n*x*c-a*i*p+n*l*p)*L,e[3]=(d*l*o-a*u*o-d*i*c+n*u*c+a*i*f-n*l*f)*L,e[4]=M*L,e[5]=(h*x*o-g*u*o+g*i*f-t*x*f-h*i*p+t*u*p)*L,e[6]=(g*l*o-r*x*o-g*i*c+t*x*c+r*i*p-t*l*p)*L,e[7]=(r*u*o-h*l*o+h*i*c-t*u*c-r*i*f+t*l*f)*L,e[8]=w*L,e[9]=(g*d*o-h*v*o-g*n*f+t*v*f+h*n*p-t*d*p)*L,e[10]=(r*v*o-g*a*o+g*n*c-t*v*c-r*n*p+t*a*p)*L,e[11]=(h*a*o-r*d*o-h*n*c+t*d*c+r*n*f-t*a*f)*L,e[12]=P*L,e[13]=(h*v*i-g*d*i+g*n*u-t*v*u-h*n*x+t*d*x)*L,e[14]=(g*a*i-r*v*i-g*n*l+t*v*l+r*n*x-t*a*x)*L,e[15]=(r*d*i-h*a*i+h*n*l-t*d*l-r*n*u+t*a*u)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,o=e.z;return t[0]*=n,t[4]*=i,t[8]*=o,t[1]*=n,t[5]*=i,t[9]*=o,t[2]*=n,t[6]*=i,t[10]*=o,t[3]*=n,t[7]*=i,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),o=1-n,r=e.x,a=e.y,l=e.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,o,r){return this.set(1,n,o,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,o=t._x,r=t._y,a=t._z,l=t._w,c=o+o,h=r+r,d=a+a,u=o*c,f=o*h,g=o*d,v=r*h,x=r*d,p=a*d,y=l*c,M=l*h,w=l*d,P=n.x,C=n.y,L=n.z;return i[0]=(1-(v+p))*P,i[1]=(f+w)*P,i[2]=(g-M)*P,i[3]=0,i[4]=(f-w)*C,i[5]=(1-(u+p))*C,i[6]=(x+y)*C,i[7]=0,i[8]=(g+M)*L,i[9]=(x-y)*L,i[10]=(1-(u+v))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let o=xi.set(i[0],i[1],i[2]).length();const r=xi.set(i[4],i[5],i[6]).length(),a=xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],on.copy(this);const c=1/o,h=1/r,d=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,t.setFromRotationMatrix(on),n.x=o,n.y=r,n.z=a,this}makePerspective(e,t,n,i,o,r,a=An){const l=this.elements,c=2*o/(t-e),h=2*o/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let f,g;if(a===An)f=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===ao)f=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,o,r,a=An){const l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(r-o),u=(t+e)*c,f=(n+i)*h;let g,v;if(a===An)g=(r+o)*d,v=-2*d;else if(a===ao)g=o*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xi=new S,on=new mt,Bh=new S(0,0,0),zh=new S(1,1,1),On=new S,Ls=new S,Xt=new S,Ta=new mt,Ea=new xs;class xn{constructor(e=0,t=0,n=0,i=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,o=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-nt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ta.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ta,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ea.setFromEuler(this),this.setFromQuaternion(Ea,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class na{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kh=0;const Aa=new S,vi=new xs,yn=new mt,Is=new S,Qi=new S,Hh=new S,Gh=new xs,Ra=new S(1,0,0),Ca=new S(0,1,0),Pa=new S(0,0,1),La={type:"added"},Vh={type:"removed"},_i={type:"childadded",child:null},Co={type:"childremoved",child:null};class Ct extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new S,t=new xn,n=new xs,i=new S(1,1,1);function o(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new mt},normalMatrix:{value:new et}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(Ra,e)}rotateY(e){return this.rotateOnAxis(Ca,e)}rotateZ(e){return this.rotateOnAxis(Pa,e)}translateOnAxis(e,t){return Aa.copy(e).applyQuaternion(this.quaternion),this.position.add(Aa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ra,e)}translateY(e){return this.translateOnAxis(Ca,e)}translateZ(e){return this.translateOnAxis(Pa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Is.copy(e):Is.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(Qi,Is,this.up):yn.lookAt(Is,Qi,this.up),this.quaternion.setFromRotationMatrix(yn),i&&(yn.extractRotation(i.matrixWorld),vi.setFromRotationMatrix(yn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(La),_i.child=e,this.dispatchEvent(_i),_i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vh),Co.child=e,this.dispatchEvent(Co),Co.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(La),_i.child=e,this.dispatchEvent(_i),_i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,e,Hh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,Gh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));i.material=a}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),d=r(e.shapes),u=r(e.skeletons),f=r(e.animations),g=r(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ct.DEFAULT_UP=new S(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new S,Sn=new S,Po=new S,bn=new S,wi=new S,Mi=new S,Ia=new S,Lo=new S,Io=new S,Do=new S,Uo=new pt,No=new pt,Fo=new pt;class ln{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),rn.subVectors(e,t),i.cross(rn);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,t,n,i,o){rn.subVectors(i,t),Sn.subVectors(n,t),Po.subVectors(e,t);const r=rn.dot(rn),a=rn.dot(Sn),l=rn.dot(Po),c=Sn.dot(Sn),h=Sn.dot(Po),d=r*c-a*a;if(d===0)return o.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(r*h-a*l)*u;return o.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(e,t,n,i,o,r,a,l){return this.getBarycoord(e,t,n,i,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,bn.x),l.addScaledVector(r,bn.y),l.addScaledVector(a,bn.z),l)}static getInterpolatedAttribute(e,t,n,i,o,r){return Uo.setScalar(0),No.setScalar(0),Fo.setScalar(0),Uo.fromBufferAttribute(e,t),No.fromBufferAttribute(e,n),Fo.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(Uo,o.x),r.addScaledVector(No,o.y),r.addScaledVector(Fo,o.z),r}static isFrontFacing(e,t,n,i){return rn.subVectors(n,t),Sn.subVectors(e,t),rn.cross(Sn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),rn.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,o){return ln.getInterpolation(e,this.a,this.b,this.c,t,n,i,o)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,o=this.c;let r,a;wi.subVectors(i,n),Mi.subVectors(o,n),Lo.subVectors(e,n);const l=wi.dot(Lo),c=Mi.dot(Lo);if(l<=0&&c<=0)return t.copy(n);Io.subVectors(e,i);const h=wi.dot(Io),d=Mi.dot(Io);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(wi,r);Do.subVectors(e,o);const f=wi.dot(Do),g=Mi.dot(Do);if(g>=0&&f<=g)return t.copy(o);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Mi,a);const x=h*g-f*d;if(x<=0&&d-h>=0&&f-g>=0)return Ia.subVectors(o,i),a=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(Ia,a);const p=1/(x+v+u);return r=v*p,a=u*p,t.copy(n).addScaledVector(wi,r).addScaledVector(Mi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function Oo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=rt.workingColorSpace){if(e=ta(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,r=2*n-o;this.r=Oo(r,o,e+1/3),this.g=Oo(r,o,e),this.b=Oo(r,o,e-1/3)}return rt.toWorkingColorSpace(this,i),this}setStyle(e,t=Yt){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=tc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return rt.fromWorkingColorSpace(Ft.copy(this),e),Math.round(nt(Ft.r*255,0,255))*65536+Math.round(nt(Ft.g*255,0,255))*256+Math.round(nt(Ft.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Ft.copy(this),t);const n=Ft.r,i=Ft.g,o=Ft.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=h<=.5?d/(r+a):d/(2-r-a),r){case n:l=(i-o)/d+(i<o?6:0);break;case i:l=(o-n)/d+2;break;case o:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Yt){rt.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,i=Ft.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(Ds);const n=os(Bn.h,Ds.h,t),i=os(Bn.s,Ds.s,t),o=os(Bn.l,Ds.l,t);return this.setHSL(n,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*i,this.g=o[1]*t+o[4]*n+o[7]*i,this.b=o[2]*t+o[5]*n+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new $e;$e.NAMES=tc;let Wh=0;class ci extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=li(),this.name="",this.type="Material",this.blending=Pi,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=er,this.blendDst=tr,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==er&&(n.blendSrc=this.blendSrc),this.blendDst!==tr&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(t){const o=i(e.textures),r=i(e.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class st extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new S,Us=new De;class en{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=va,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Us.fromBufferAttribute(this,t),Us.applyMatrix3(e),this.setXY(t,Us.x,Us.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,o){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array),o=Bt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==va&&(e.usage=this.usage),e}}class nc extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ic extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ut extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xh=0;const Jt=new mt,Bo=new Ct,yi=new S,qt=new vs,es=new vs,It=new S;class Et extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jl(e)?ic:nc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new et().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Bo.lookAt(e),Bo.updateMatrix(),this.applyMatrix4(Bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,o=e.length;i<o;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ut(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const o=e[i];t.setXYZ(i,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const o=t[n];qt.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const a=t[o];es.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(qt.min,es.min),qt.expandByPoint(It),It.addVectors(qt.max,es.max),qt.expandByPoint(It)):(qt.expandByPoint(es.min),qt.expandByPoint(es.max))}qt.getCenter(n);let i=0;for(let o=0,r=e.count;o<r;o++)It.fromBufferAttribute(e,o),i=Math.max(i,n.distanceToSquared(It));if(t)for(let o=0,r=t.length;o<r;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)It.fromBufferAttribute(a,c),l&&(yi.fromBufferAttribute(e,c),It.add(yi)),i=Math.max(i,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new S,l[D]=new S;const c=new S,h=new S,d=new S,u=new De,f=new De,g=new De,v=new S,x=new S;function p(D,T,b){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,b),u.fromBufferAttribute(o,D),f.fromBufferAttribute(o,T),g.fromBufferAttribute(o,b),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const O=1/(f.x*g.y-g.x*f.y);isFinite(O)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(O),x.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(O),a[D].add(v),a[T].add(v),a[b].add(v),l[D].add(x),l[T].add(x),l[b].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,T=y.length;D<T;++D){const b=y[D],O=b.start,ae=b.count;for(let ne=O,fe=O+ae;ne<fe;ne+=3)p(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const M=new S,w=new S,P=new S,C=new S;function L(D){P.fromBufferAttribute(i,D),C.copy(P);const T=a[D];M.copy(T),M.sub(P.multiplyScalar(P.dot(T))).normalize(),w.crossVectors(C,T);const O=w.dot(l[D])<0?-1:1;r.setXYZW(D,M.x,M.y,M.z,O)}for(let D=0,T=y.length;D<T;++D){const b=y[D],O=b.start,ae=b.count;for(let ne=O,fe=O+ae;ne<fe;ne+=3)L(e.getX(ne+0)),L(e.getX(ne+1)),L(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new S,o=new S,r=new S,a=new S,l=new S,c=new S,h=new S,d=new S;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),v=e.getX(u+1),x=e.getX(u+2);i.fromBufferAttribute(t,g),o.fromBufferAttribute(t,v),r.fromBufferAttribute(t,x),h.subVectors(r,o),d.subVectors(i,o),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),o.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,o),d.subVectors(i,o),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,x=l.length;v<x;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new en(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const o=e.morphAttributes;for(const c in o){const h=[],d=o[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Da=new mt,jn=new fo,Ns=new _s,Ua=new S,Fs=new S,Os=new S,Bs=new S,zo=new S,zs=new S,Na=new S,ks=new S;class m extends Ct{constructor(e=new Et,t=new st){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(o&&a){zs.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],d=o[l];h!==0&&(zo.fromBufferAttribute(d,e),r?zs.addScaledVector(zo,h):zs.addScaledVector(zo.sub(t),h))}t.add(zs)}return t}raycast(e,t){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(o),jn.copy(e.ray).recast(e.near),!(Ns.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Ns,Ua)===null||jn.origin.distanceToSquared(Ua)>(e.far-e.near)**2))&&(Da.copy(o).invert(),jn.copy(e.ray).applyMatrix4(Da),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,jn)))}_computeIntersections(e,t,n){let i;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,u=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,v=u.length;g<v;g++){const x=u[g],p=r[x.materialIndex],y=Math.max(x.start,f.start),M=Math.min(a.count,Math.min(x.start+x.count,f.start+f.count));for(let w=y,P=M;w<P;w+=3){const C=a.getX(w),L=a.getX(w+1),D=a.getX(w+2);i=Hs(this,p,e,n,c,h,d,C,L,D),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let x=g,p=v;x<p;x+=3){const y=a.getX(x),M=a.getX(x+1),w=a.getX(x+2);i=Hs(this,r,e,n,c,h,d,y,M,w),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,v=u.length;g<v;g++){const x=u[g],p=r[x.materialIndex],y=Math.max(x.start,f.start),M=Math.min(l.count,Math.min(x.start+x.count,f.start+f.count));for(let w=y,P=M;w<P;w+=3){const C=w,L=w+1,D=w+2;i=Hs(this,p,e,n,c,h,d,C,L,D),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let x=g,p=v;x<p;x+=3){const y=x,M=x+1,w=x+2;i=Hs(this,r,e,n,c,h,d,y,M,w),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function qh(s,e,t,n,i,o,r,a){let l;if(e.side===kt?l=n.intersectTriangle(r,o,i,!0,a):l=n.intersectTriangle(i,o,r,e.side===Wn,a),l===null)return null;ks.copy(a),ks.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ks);return c<t.near||c>t.far?null:{distance:c,point:ks.clone(),object:s}}function Hs(s,e,t,n,i,o,r,a,l,c){s.getVertexPosition(a,Fs),s.getVertexPosition(l,Os),s.getVertexPosition(c,Bs);const h=qh(s,e,t,n,Fs,Os,Bs,Na);if(h){const d=new S;ln.getBarycoord(Na,Fs,Os,Bs,d),i&&(h.uv=ln.getInterpolatedAttribute(i,a,l,c,d,new De)),o&&(h.uv1=ln.getInterpolatedAttribute(o,a,l,c,d,new De)),r&&(h.normal=ln.getInterpolatedAttribute(r,a,l,c,d,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new S,materialIndex:0};ln.getNormal(Fs,Os,Bs,u.normal),h.face=u,h.barycoord=d}return h}class N extends Et{constructor(e=1,t=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,r,o,0),g("z","y","x",1,-1,n,t,-e,r,o,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,o,4),g("x","y","z",-1,-1,e,t,-n,i,o,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(d,2));function g(v,x,p,y,M,w,P,C,L,D,T){const b=w/L,O=P/D,ae=w/2,ne=P/2,fe=C/2,j=L+1,$=D+1;let F=0,I=0;const H=new S;for(let q=0;q<$;q++){const J=q*O-ne;for(let he=0;he<j;he++){const _e=he*b-ae;H[v]=_e*y,H[x]=J*M,H[p]=fe,c.push(H.x,H.y,H.z),H[v]=0,H[x]=0,H[p]=C>0?1:-1,h.push(H.x,H.y,H.z),d.push(he/L),d.push(1-q/D),F+=1}}for(let q=0;q<D;q++)for(let J=0;J<L;J++){const he=u+J+j*q,_e=u+J+j*(q+1),U=u+(J+1)+j*(q+1),k=u+(J+1)+j*q;l.push(he,_e,k),l.push(_e,U,k),I+=6}a.addGroup(f,I,T),f+=I,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new N(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function zt(s){const e={};for(let t=0;t<s.length;t++){const n=zi(s[t]);for(const i in n)e[i]=n[i]}return e}function Yh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function sc(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const fs={clone:zi,merge:zt};var Zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$h=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rt extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zh,this.fragmentShader=$h,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=Yh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class oc extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=An}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new S,Fa=new De,Oa=new De;class Zt extends oc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,Fa,Oa),t.subVectors(Oa,Fa)}setViewOffset(e,t,n,i,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ss*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Si=-90,bi=1;class jh extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Zt(Si,bi,e,t);i.layers=this.layers,this.add(i);const o=new Zt(Si,bi,e,t);o.layers=this.layers,this.add(o);const r=new Zt(Si,bi,e,t);r.layers=this.layers,this.add(r);const a=new Zt(Si,bi,e,t);a.layers=this.layers,this.add(a);const l=new Zt(Si,bi,e,t);l.layers=this.layers,this.add(l);const c=new Zt(Si,bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,o,r,a,l]=t;for(const c of t)this.remove(c);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,o),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class rc extends Ht{constructor(e,t,n,i,o,r,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ui,super(e,t,n,i,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kh extends dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new rc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new N(5,5,5),o=new Rt({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Rn});o.uniforms.tEquirect.value=t;const r=new m(i,o),a=t.minFilter;return t.minFilter===si&&(t.minFilter=mn),new jh(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(o)}}class Xn{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=t}clone(){return new Xn(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Jh extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ko=new S,Qh=new S,ed=new et;class ei{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ko.subVectors(n,t).cross(Qh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ko),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ed.getNormalMatrix(e),i=this.coplanarPoint(ko).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new _s,Gs=new S;class ia{constructor(e=new ei,t=new ei,n=new ei,i=new ei,o=new ei,r=new ei){this.planes=[e,t,n,i,o,r]}set(e,t,n,i,o,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An){const n=this.planes,i=e.elements,o=i[0],r=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],v=i[10],x=i[11],p=i[12],y=i[13],M=i[14],w=i[15];if(n[0].setComponents(l-o,u-c,x-f,w-p).normalize(),n[1].setComponents(l+o,u+c,x+f,w+p).normalize(),n[2].setComponents(l+r,u+h,x+g,w+y).normalize(),n[3].setComponents(l-r,u-h,x-g,w-y).normalize(),n[4].setComponents(l-a,u-d,x-v,w-M).normalize(),t===An)n[5].setComponents(l+a,u+d,x+v,w+M).normalize();else if(t===ao)n[5].setComponents(a,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(e){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Gs.x=i.normal.x>0?e.max.x:e.min.x,Gs.y=i.normal.y>0?e.max.y:e.min.y,Gs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Br extends ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const co=new S,ho=new S,Ba=new mt,ts=new fo,Vs=new _s,Ho=new S,za=new S;class ka extends Ct{constructor(e=new Et,t=new Br){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,o=t.count;i<o;i++)co.fromBufferAttribute(t,i-1),ho.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=co.distanceTo(ho);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,o=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(i),Vs.radius+=o,e.ray.intersectsSphere(Vs)===!1)return;Ba.copy(i).invert(),ts.copy(e.ray).applyMatrix4(Ba);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let v=f,x=g-1;v<x;v+=c){const p=h.getX(v),y=h.getX(v+1),M=Ws(this,e,ts,l,p,y);M&&t.push(M)}if(this.isLineLoop){const v=h.getX(g-1),x=h.getX(f),p=Ws(this,e,ts,l,v,x);p&&t.push(p)}}else{const f=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let v=f,x=g-1;v<x;v+=c){const p=Ws(this,e,ts,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=Ws(this,e,ts,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ws(s,e,t,n,i,o){const r=s.geometry.attributes.position;if(co.fromBufferAttribute(r,i),ho.fromBufferAttribute(r,o),t.distanceSqToSegment(co,ho,Ho,za)>n)return;Ho.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ho);if(!(l<e.near||l>e.far))return{distance:l,point:za.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}class ac extends ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ha=new mt,zr=new fo,Xs=new _s,qs=new S;class td extends Ct{constructor(e=new Et,t=new ac){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,o=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(i),Xs.radius+=o,e.ray.intersectsSphere(Xs)===!1)return;Ha.copy(i).invert(),zr.copy(e.ray).applyMatrix4(Ha);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=u,v=f;g<v;g++){const x=c.getX(g);qs.fromBufferAttribute(d,x),Ga(qs,x,l,i,e,t,this)}}else{const u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=u,v=f;g<v;g++)qs.fromBufferAttribute(d,g),Ga(qs,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ga(s,e,t,n,i,o,r){const a=zr.distanceSqToPoint(s);if(a<t){const l=new S;zr.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Xe extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}class nd extends Ht{constructor(e,t,n,i,o,r,a,l,c){super(e,t,n,i,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lc extends Ht{constructor(e,t,n,i,o,r,a,l,c,h=Li){if(h!==Li&&h!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Li&&(n=ri),n===void 0&&h===Oi&&(n=Fi),super(null,i,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),o=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),o+=n.distanceTo(i),t.push(o),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const o=n.length;let r;t?r=t:r=e*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(o-1);const h=n[i],u=n[i+1]-h,f=(r-h)/u;return(i+f)/(o-1)}getTangent(e,t){let i=e-1e-4,o=e+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),l=t||(r.isVector2?new De:new S);return l.copy(a).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new S,i=[],o=[],r=[],a=new S,l=new mt;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new S)}o[0]=new S,r[0]=new S;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let f=1;f<=e;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(nt(i[f-1].dot(i[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,g))}r[f].crossVectors(i[f],o[f])}if(t===!0){let f=Math.acos(nt(o[0].dot(o[e]),-1,1));f/=e,i[0].dot(a.crossVectors(o[0],o[e]))>0&&(f=-f);for(let g=1;g<=e;g++)o[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),r[g].crossVectors(i[g],o[g])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class sa extends vn{constructor(e=0,t=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new De){const n=t,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+e*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class id extends sa{constructor(e,t,n,i,o,r){super(e,t,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function oa(){let s=0,e=0,t=0,n=0;function i(o,r,a,l){s=o,e=a,t=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){i(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,d){let u=(r-o)/c-(a-o)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+d)+(l-a)/d;u*=h,f*=h,i(r,a,u,f)},calc:function(o){const r=o*o,a=r*o;return s+e*o+t*r+n*a}}}const Ys=new S,Go=new oa,Vo=new oa,Wo=new oa;class sd extends vn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new S){const n=t,i=this.points,o=i.length,r=(o-(this.closed?0:1))*e;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%o]:(Ys.subVectors(i[0],i[1]).add(i[0]),c=Ys);const d=i[a%o],u=i[(a+1)%o];if(this.closed||a+2<o?h=i[(a+2)%o]:(Ys.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=Ys),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),x<1e-4&&(x=v),Go.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,x),Vo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,x),Wo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,x)}else this.curveType==="catmullrom"&&(Go.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Vo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Wo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Go.calc(l),Vo.calc(l),Wo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new S().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Va(s,e,t,n,i){const o=(n-e)*.5,r=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+o+r)*l+(-3*t+3*n-2*o-r)*a+o*s+t}function od(s,e){const t=1-s;return t*t*e}function rd(s,e){return 2*(1-s)*s*e}function ad(s,e){return s*s*e}function rs(s,e,t,n){return od(s,e)+rd(s,t)+ad(s,n)}function ld(s,e){const t=1-s;return t*t*t*e}function cd(s,e){const t=1-s;return 3*t*t*s*e}function hd(s,e){return 3*(1-s)*s*s*e}function dd(s,e){return s*s*s*e}function as(s,e,t,n,i){return ld(s,e)+cd(s,t)+hd(s,n)+dd(s,i)}class cc extends vn{constructor(e=new De,t=new De,n=new De,i=new De){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new De){const n=t,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(as(e,i.x,o.x,r.x,a.x),as(e,i.y,o.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ud extends vn{constructor(e=new S,t=new S,n=new S,i=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new S){const n=t,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(as(e,i.x,o.x,r.x,a.x),as(e,i.y,o.y,r.y,a.y),as(e,i.z,o.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hc extends vn{constructor(e=new De,t=new De){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new De){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new De){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fd extends vn{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dc extends vn{constructor(e=new De,t=new De,n=new De){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new De){const n=t,i=this.v0,o=this.v1,r=this.v2;return n.set(rs(e,i.x,o.x,r.x),rs(e,i.y,o.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pd extends vn{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){const n=t,i=this.v0,o=this.v1,r=this.v2;return n.set(rs(e,i.x,o.x,r.x),rs(e,i.y,o.y,r.y),rs(e,i.z,o.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uc extends vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new De){const n=t,i=this.points,o=(i.length-1)*e,r=Math.floor(o),a=o-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],d=i[r>i.length-3?i.length-1:r+2];return n.set(Va(a,l.x,c.x,h.x,d.x),Va(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new De().fromArray(i))}return this}}var kr=Object.freeze({__proto__:null,ArcCurve:id,CatmullRomCurve3:sd,CubicBezierCurve:cc,CubicBezierCurve3:ud,EllipseCurve:sa,LineCurve:hc,LineCurve3:fd,QuadraticBezierCurve:dc,QuadraticBezierCurve3:pd,SplineCurve:uc});class md extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kr[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new kr[i.type]().fromJSON(i))}return this}}class Hr extends md{constructor(e){super(),this.type="Path",this.currentPoint=new De,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new hc(this.currentPoint.clone(),new De(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const o=new dc(this.currentPoint.clone(),new De(e,t),new De(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,o,r){const a=new cc(this.currentPoint.clone(),new De(e,t),new De(n,i),new De(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new uc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,o,r),this}absarc(e,t,n,i,o,r){return this.absellipse(e,t,n,n,i,o,r),this}ellipse(e,t,n,i,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,o,r,a,l),this}absellipse(e,t,n,i,o,r,a,l){const c=new sa(e,t,n,i,o,r,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ra extends Et{constructor(e=[new De(0,-.5),new De(.5,0),new De(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=nt(i,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],h=1/t,d=new S,u=new De,f=new S,g=new S,v=new S;let x=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:x=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-x,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:x=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-x,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=t;y++){const M=n+y*h*i,w=Math.sin(M),P=Math.cos(M);for(let C=0;C<=e.length-1;C++){d.x=e[C].x*w,d.y=e[C].y,d.z=e[C].x*P,r.push(d.x,d.y,d.z),u.x=y/t,u.y=C/(e.length-1),a.push(u.x,u.y);const L=l[3*C+0]*w,D=l[3*C+1],T=l[3*C+0]*P;c.push(L,D,T)}}for(let y=0;y<t;y++)for(let M=0;M<e.length-1;M++){const w=M+y*e.length,P=w,C=w+e.length,L=w+e.length+1,D=w+1;o.push(P,C,D),o.push(L,D,C)}this.setIndex(o),this.setAttribute("position",new ut(r,3)),this.setAttribute("uv",new ut(a,2)),this.setAttribute("normal",new ut(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.points,e.segments,e.phiStart,e.phiLength)}}class aa extends ra{constructor(e=1,t=1,n=4,i=8){const o=new Hr;o.absarc(0,-t/2,e,Math.PI*1.5,0),o.absarc(0,t/2,e,0,Math.PI*.5),super(o.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new aa(e.radius,e.length,e.capSegments,e.radialSegments)}}class oe extends Et{constructor(e=1,t=1,n=1,i=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),o=Math.floor(o);const h=[],d=[],u=[],f=[];let g=0;const v=[],x=n/2;let p=0;y(),r===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ut(d,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(f,2));function y(){const w=new S,P=new S;let C=0;const L=(t-e)/n;for(let D=0;D<=o;D++){const T=[],b=D/o,O=b*(t-e)+e;for(let ae=0;ae<=i;ae++){const ne=ae/i,fe=ne*l+a,j=Math.sin(fe),$=Math.cos(fe);P.x=O*j,P.y=-b*n+x,P.z=O*$,d.push(P.x,P.y,P.z),w.set(j,L,$).normalize(),u.push(w.x,w.y,w.z),f.push(ne,1-b),T.push(g++)}v.push(T)}for(let D=0;D<i;D++)for(let T=0;T<o;T++){const b=v[T][D],O=v[T+1][D],ae=v[T+1][D+1],ne=v[T][D+1];(e>0||T!==0)&&(h.push(b,O,ne),C+=3),(t>0||T!==o-1)&&(h.push(O,ae,ne),C+=3)}c.addGroup(p,C,0),p+=C}function M(w){const P=g,C=new De,L=new S;let D=0;const T=w===!0?e:t,b=w===!0?1:-1;for(let ae=1;ae<=i;ae++)d.push(0,x*b,0),u.push(0,b,0),f.push(.5,.5),g++;const O=g;for(let ae=0;ae<=i;ae++){const fe=ae/i*l+a,j=Math.cos(fe),$=Math.sin(fe);L.x=T*$,L.y=x*b,L.z=T*j,d.push(L.x,L.y,L.z),u.push(0,b,0),C.x=j*.5+.5,C.y=$*.5*b+.5,f.push(C.x,C.y),g++}for(let ae=0;ae<i;ae++){const ne=P+ae,fe=O+ae;w===!0?h.push(fe,fe+1,ne):h.push(fe+1,fe,ne),D+=3}c.addGroup(p,D,w===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oe(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ze extends oe{constructor(e=1,t=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,e,t,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(e){return new ze(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class po extends Et{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const o=[],r=[];a(i),c(n),h(),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(o.slice(),3)),this.setAttribute("uv",new ut(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const M=new S,w=new S,P=new S;for(let C=0;C<t.length;C+=3)f(t[C+0],M),f(t[C+1],w),f(t[C+2],P),l(M,w,P,y)}function l(y,M,w,P){const C=P+1,L=[];for(let D=0;D<=C;D++){L[D]=[];const T=y.clone().lerp(w,D/C),b=M.clone().lerp(w,D/C),O=C-D;for(let ae=0;ae<=O;ae++)ae===0&&D===C?L[D][ae]=T:L[D][ae]=T.clone().lerp(b,ae/O)}for(let D=0;D<C;D++)for(let T=0;T<2*(C-D)-1;T++){const b=Math.floor(T/2);T%2===0?(u(L[D][b+1]),u(L[D+1][b]),u(L[D][b])):(u(L[D][b+1]),u(L[D+1][b+1]),u(L[D+1][b]))}}function c(y){const M=new S;for(let w=0;w<o.length;w+=3)M.x=o[w+0],M.y=o[w+1],M.z=o[w+2],M.normalize().multiplyScalar(y),o[w+0]=M.x,o[w+1]=M.y,o[w+2]=M.z}function h(){const y=new S;for(let M=0;M<o.length;M+=3){y.x=o[M+0],y.y=o[M+1],y.z=o[M+2];const w=x(y)/2/Math.PI+.5,P=p(y)/Math.PI+.5;r.push(w,1-P)}g(),d()}function d(){for(let y=0;y<r.length;y+=6){const M=r[y+0],w=r[y+2],P=r[y+4],C=Math.max(M,w,P),L=Math.min(M,w,P);C>.9&&L<.1&&(M<.2&&(r[y+0]+=1),w<.2&&(r[y+2]+=1),P<.2&&(r[y+4]+=1))}}function u(y){o.push(y.x,y.y,y.z)}function f(y,M){const w=y*3;M.x=e[w+0],M.y=e[w+1],M.z=e[w+2]}function g(){const y=new S,M=new S,w=new S,P=new S,C=new De,L=new De,D=new De;for(let T=0,b=0;T<o.length;T+=9,b+=6){y.set(o[T+0],o[T+1],o[T+2]),M.set(o[T+3],o[T+4],o[T+5]),w.set(o[T+6],o[T+7],o[T+8]),C.set(r[b+0],r[b+1]),L.set(r[b+2],r[b+3]),D.set(r[b+4],r[b+5]),P.copy(y).add(M).add(w).divideScalar(3);const O=x(P);v(C,b+0,y,O),v(L,b+2,M,O),v(D,b+4,w,O)}}function v(y,M,w,P){P<0&&y.x===1&&(r[M]=y.x-1),w.x===0&&w.z===0&&(r[M]=P/2/Math.PI+.5)}function x(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.vertices,e.indices,e.radius,e.details)}}class un extends po{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new un(e.radius,e.detail)}}class mo extends Hr{constructor(e){super(e),this.uuid=li(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Hr().fromJSON(i))}return this}}const gd={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let o=fc(s,0,i,t,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,d,u,f;if(n&&(o=Md(s,e,o,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let g=t;g<i;g+=t)d=s[g],u=s[g+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return ps(o,r,t,a,l,f,0),r}};function fc(s,e,t,n,i){let o,r;if(i===Id(s,e,t,n)>0)for(o=e;o<t;o+=n)r=Wa(o,s[o],s[o+1],r);else for(o=t-n;o>=e;o-=n)r=Wa(o,s[o],s[o+1],r);return r&&go(r,r.next)&&(gs(r),r=r.next),r}function ai(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(go(t,t.next)||_t(t.prev,t,t.next)===0)){if(gs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ps(s,e,t,n,i,o,r){if(!s)return;!r&&o&&Ed(s,n,i,o);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,o?vd(s,n,i,o):xd(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),gs(s),s=c.next,a=c.next;continue}if(s=c,s===a){r?r===1?(s=_d(ai(s),e,t),ps(s,e,t,n,i,o,2)):r===2&&wd(s,e,t,n,i,o):ps(ai(s),e,t,n,i,o,1);break}}}function xd(s){const e=s.prev,t=s,n=s.next;if(_t(e,t,n)>=0)return!1;const i=e.x,o=t.x,r=n.x,a=e.y,l=t.y,c=n.y,h=i<o?i<r?i:r:o<r?o:r,d=a<l?a<c?a:c:l<c?l:c,u=i>o?i>r?i:r:o>r?o:r,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Ri(i,a,o,l,r,c,g.x,g.y)&&_t(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vd(s,e,t,n){const i=s.prev,o=s,r=s.next;if(_t(i,o,r)>=0)return!1;const a=i.x,l=o.x,c=r.x,h=i.y,d=o.y,u=r.y,f=a<l?a<c?a:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,v=a>l?a>c?a:c:l>c?l:c,x=h>d?h>u?h:u:d>u?d:u,p=Gr(f,g,e,t,n),y=Gr(v,x,e,t,n);let M=s.prevZ,w=s.nextZ;for(;M&&M.z>=p&&w&&w.z<=y;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=x&&M!==i&&M!==r&&Ri(a,h,l,d,c,u,M.x,M.y)&&_t(M.prev,M,M.next)>=0||(M=M.prevZ,w.x>=f&&w.x<=v&&w.y>=g&&w.y<=x&&w!==i&&w!==r&&Ri(a,h,l,d,c,u,w.x,w.y)&&_t(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=x&&M!==i&&M!==r&&Ri(a,h,l,d,c,u,M.x,M.y)&&_t(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;w&&w.z<=y;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=x&&w!==i&&w!==r&&Ri(a,h,l,d,c,u,w.x,w.y)&&_t(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function _d(s,e,t){let n=s;do{const i=n.prev,o=n.next.next;!go(i,o)&&pc(i,n,n.next,o)&&ms(i,o)&&ms(o,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(o.i/t|0),gs(n),gs(n.next),n=s=o),n=n.next}while(n!==s);return ai(n)}function wd(s,e,t,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Cd(r,a)){let l=mc(r,a);r=ai(r,r.next),l=ai(l,l.next),ps(r,e,t,n,i,o,0),ps(l,e,t,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function Md(s,e,t,n){const i=[];let o,r,a,l,c;for(o=0,r=e.length;o<r;o++)a=e[o]*n,l=o<r-1?e[o+1]*n:s.length,c=fc(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Rd(c));for(i.sort(yd),o=0;o<i.length;o++)t=Sd(i[o],t);return t}function yd(s,e){return s.x-e.x}function Sd(s,e){const t=bd(s,e);if(!t)return e;const n=mc(t,s);return ai(n,n.next),ai(t,t.next)}function bd(s,e){let t=e,n=-1/0,i;const o=s.x,r=s.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=o&&u>n&&(n=u,i=t.x<t.next.x?t:t.next,u===o))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,d;t=i;do o>=t.x&&t.x>=l&&o!==t.x&&Ri(r<c?o:n,r,l,c,r<c?n:o,r,t.x,t.y)&&(d=Math.abs(r-t.y)/(o-t.x),ms(t,s)&&(d<h||d===h&&(t.x>i.x||t.x===i.x&&Td(i,t)))&&(i=t,h=d)),t=t.next;while(t!==a);return i}function Td(s,e){return _t(s.prev,s,e.prev)<0&&_t(e.next,s,s.next)<0}function Ed(s,e,t,n){let i=s;do i.z===0&&(i.z=Gr(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Ad(i)}function Ad(s){let e,t,n,i,o,r,a,l,c=1;do{for(t=s,s=null,o=null,r=0;t;){for(r++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;t=n}o.nextZ=null,c*=2}while(r>1);return s}function Gr(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Rd(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ri(s,e,t,n,i,o,r,a){return(i-r)*(e-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(t-r)*(e-a)&&(t-r)*(o-a)>=(i-r)*(n-a)}function Cd(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Pd(s,e)&&(ms(s,e)&&ms(e,s)&&Ld(s,e)&&(_t(s.prev,s,e.prev)||_t(s,e.prev,e))||go(s,e)&&_t(s.prev,s,s.next)>0&&_t(e.prev,e,e.next)>0)}function _t(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function go(s,e){return s.x===e.x&&s.y===e.y}function pc(s,e,t,n){const i=$s(_t(s,e,t)),o=$s(_t(s,e,n)),r=$s(_t(t,n,s)),a=$s(_t(t,n,e));return!!(i!==o&&r!==a||i===0&&Zs(s,t,e)||o===0&&Zs(s,n,e)||r===0&&Zs(t,s,n)||a===0&&Zs(t,e,n))}function Zs(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function $s(s){return s>0?1:s<0?-1:0}function Pd(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&pc(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ms(s,e){return _t(s.prev,s,s.next)<0?_t(s,e,s.next)>=0&&_t(s,s.prev,e)>=0:_t(s,e,s.prev)<0||_t(s,s.next,e)<0}function Ld(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,o=(s.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&i<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function mc(s,e){const t=new Vr(s.i,s.x,s.y),n=new Vr(e.i,e.x,e.y),i=s.next,o=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function Wa(s,e,t,n){const i=new Vr(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function gs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Vr(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Id(s,e,t,n){let i=0;for(let o=e,r=t-n;o<t;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}class ls{static area(e){const t=e.length;let n=0;for(let i=t-1,o=0;o<t;i=o++)n+=e[i].x*e[o].y-e[o].x*e[i].y;return n*.5}static isClockWise(e){return ls.area(e)<0}static triangulateShape(e,t){const n=[],i=[],o=[];Xa(e),qa(n,e);let r=e.length;t.forEach(Xa);for(let l=0;l<t.length;l++)i.push(r),r+=t[l].length,qa(n,t[l]);const a=gd.triangulate(n,i);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Xa(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function qa(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class ws extends Et{constructor(e=new mo([new De(.5,.5),new De(-.5,.5),new De(-.5,-.5),new De(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r(c)}this.setAttribute("position",new ut(i,3)),this.setAttribute("uv",new ut(o,2)),this.computeVertexNormals();function r(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Dd;let M,w=!1,P,C,L,D;p&&(M=p.getSpacedPoints(h),w=!0,u=!1,P=p.computeFrenetFrames(h,!1),C=new S,L=new S,D=new S),u||(x=0,f=0,g=0,v=0);const T=a.extractPoints(c);let b=T.shape;const O=T.holes;if(!ls.isClockWise(b)){b=b.reverse();for(let xe=0,re=O.length;xe<re;xe++){const E=O[xe];ls.isClockWise(E)&&(O[xe]=E.reverse())}}const ne=ls.triangulateShape(b,O),fe=b;for(let xe=0,re=O.length;xe<re;xe++){const E=O[xe];b=b.concat(E)}function j(xe,re,E){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),xe.clone().addScaledVector(re,E)}const $=b.length,F=ne.length;function I(xe,re,E){let se,W,le;const Y=xe.x-re.x,Se=xe.y-re.y,Ee=E.x-xe.x,A=E.y-xe.y,_=Y*Y+Se*Se,z=Y*A-Se*Ee;if(Math.abs(z)>Number.EPSILON){const X=Math.sqrt(_),Z=Math.sqrt(Ee*Ee+A*A),B=re.x-Se/X,ce=re.y+Y/X,pe=E.x-A/Z,ye=E.y+Ee/Z,Te=((pe-B)*A-(ye-ce)*Ee)/(Y*A-Se*Ee);se=B+Y*Te-xe.x,W=ce+Se*Te-xe.y;const Me=se*se+W*W;if(Me<=2)return new De(se,W);le=Math.sqrt(Me/2)}else{let X=!1;Y>Number.EPSILON?Ee>Number.EPSILON&&(X=!0):Y<-Number.EPSILON?Ee<-Number.EPSILON&&(X=!0):Math.sign(Se)===Math.sign(A)&&(X=!0),X?(se=-Se,W=Y,le=Math.sqrt(_)):(se=Y,W=Se,le=Math.sqrt(_/2))}return new De(se/le,W/le)}const H=[];for(let xe=0,re=fe.length,E=re-1,se=xe+1;xe<re;xe++,E++,se++)E===re&&(E=0),se===re&&(se=0),H[xe]=I(fe[xe],fe[E],fe[se]);const q=[];let J,he=H.concat();for(let xe=0,re=O.length;xe<re;xe++){const E=O[xe];J=[];for(let se=0,W=E.length,le=W-1,Y=se+1;se<W;se++,le++,Y++)le===W&&(le=0),Y===W&&(Y=0),J[se]=I(E[se],E[le],E[Y]);q.push(J),he=he.concat(J)}for(let xe=0;xe<x;xe++){const re=xe/x,E=f*Math.cos(re*Math.PI/2),se=g*Math.sin(re*Math.PI/2)+v;for(let W=0,le=fe.length;W<le;W++){const Y=j(fe[W],H[W],se);V(Y.x,Y.y,-E)}for(let W=0,le=O.length;W<le;W++){const Y=O[W];J=q[W];for(let Se=0,Ee=Y.length;Se<Ee;Se++){const A=j(Y[Se],J[Se],se);V(A.x,A.y,-E)}}}const _e=g+v;for(let xe=0;xe<$;xe++){const re=u?j(b[xe],he[xe],_e):b[xe];w?(L.copy(P.normals[0]).multiplyScalar(re.x),C.copy(P.binormals[0]).multiplyScalar(re.y),D.copy(M[0]).add(L).add(C),V(D.x,D.y,D.z)):V(re.x,re.y,0)}for(let xe=1;xe<=h;xe++)for(let re=0;re<$;re++){const E=u?j(b[re],he[re],_e):b[re];w?(L.copy(P.normals[xe]).multiplyScalar(E.x),C.copy(P.binormals[xe]).multiplyScalar(E.y),D.copy(M[xe]).add(L).add(C),V(D.x,D.y,D.z)):V(E.x,E.y,d/h*xe)}for(let xe=x-1;xe>=0;xe--){const re=xe/x,E=f*Math.cos(re*Math.PI/2),se=g*Math.sin(re*Math.PI/2)+v;for(let W=0,le=fe.length;W<le;W++){const Y=j(fe[W],H[W],se);V(Y.x,Y.y,d+E)}for(let W=0,le=O.length;W<le;W++){const Y=O[W];J=q[W];for(let Se=0,Ee=Y.length;Se<Ee;Se++){const A=j(Y[Se],J[Se],se);w?V(A.x,A.y+M[h-1].y,M[h-1].x+E):V(A.x,A.y,d+E)}}}U(),k();function U(){const xe=i.length/3;if(u){let re=0,E=$*re;for(let se=0;se<F;se++){const W=ne[se];ie(W[2]+E,W[1]+E,W[0]+E)}re=h+x*2,E=$*re;for(let se=0;se<F;se++){const W=ne[se];ie(W[0]+E,W[1]+E,W[2]+E)}}else{for(let re=0;re<F;re++){const E=ne[re];ie(E[2],E[1],E[0])}for(let re=0;re<F;re++){const E=ne[re];ie(E[0]+$*h,E[1]+$*h,E[2]+$*h)}}n.addGroup(xe,i.length/3-xe,0)}function k(){const xe=i.length/3;let re=0;K(fe,re),re+=fe.length;for(let E=0,se=O.length;E<se;E++){const W=O[E];K(W,re),re+=W.length}n.addGroup(xe,i.length/3-xe,1)}function K(xe,re){let E=xe.length;for(;--E>=0;){const se=E;let W=E-1;W<0&&(W=xe.length-1);for(let le=0,Y=h+x*2;le<Y;le++){const Se=$*le,Ee=$*(le+1),A=re+se+Se,_=re+W+Se,z=re+W+Ee,X=re+se+Ee;be(A,_,z,X)}}}function V(xe,re,E){l.push(xe),l.push(re),l.push(E)}function ie(xe,re,E){Pe(xe),Pe(re),Pe(E);const se=i.length/3,W=y.generateTopUV(n,i,se-3,se-2,se-1);Oe(W[0]),Oe(W[1]),Oe(W[2])}function be(xe,re,E,se){Pe(xe),Pe(re),Pe(se),Pe(re),Pe(E),Pe(se);const W=i.length/3,le=y.generateSideWallUV(n,i,W-6,W-3,W-2,W-1);Oe(le[0]),Oe(le[1]),Oe(le[3]),Oe(le[1]),Oe(le[2]),Oe(le[3])}function Pe(xe){i.push(l[xe*3+0]),i.push(l[xe*3+1]),i.push(l[xe*3+2])}function Oe(xe){o.push(xe.x),o.push(xe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ud(t,n,e)}static fromJSON(e,t){const n=[];for(let o=0,r=e.shapes.length;o<r;o++){const a=t[e.shapes[o]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new kr[i.type]().fromJSON(i)),new ws(n,e.options)}}const Dd={generateTopUV:function(s,e,t,n,i){const o=e[t*3],r=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new De(o,r),new De(a,l),new De(c,h)]},generateSideWallUV:function(s,e,t,n,i,o){const r=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[i*3],f=e[i*3+1],g=e[i*3+2],v=e[o*3],x=e[o*3+1],p=e[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new De(r,1-l),new De(c,1-d),new De(u,1-g),new De(v,1-p)]:[new De(a,1-l),new De(h,1-d),new De(f,1-g),new De(x,1-p)]}};function Ud(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const o=s[n];t.shapes.push(o.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ms extends po{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ms(e.radius,e.detail)}}class dt extends Et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const o=e/2,r=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],v=[],x=[];for(let p=0;p<h;p++){const y=p*u-r;for(let M=0;M<c;M++){const w=M*d-o;g.push(w,-y,0),v.push(0,0,1),x.push(M/a),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const M=y+c*p,w=y+c*(p+1),P=y+1+c*(p+1),C=y+1+c*p;f.push(M,w,C),f.push(w,P,C)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(v,3)),this.setAttribute("uv",new ut(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dt(e.width,e.height,e.widthSegments,e.heightSegments)}}class la extends Et{constructor(e=.5,t=1,n=32,i=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let d=e;const u=(t-e)/i,f=new S,g=new De;for(let v=0;v<=i;v++){for(let x=0;x<=n;x++){const p=o+x/n*r;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<i;v++){const x=v*(n+1);for(let p=0;p<n;p++){const y=p+x,M=y,w=y+n+1,P=y+n+2,C=y+1;a.push(M,w,C),a.push(w,P,C)}}this.setIndex(a),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ze extends Et{constructor(e=1,t=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],d=new S,u=new S,f=[],g=[],v=[],x=[];for(let p=0;p<=n;p++){const y=[],M=p/n;let w=0;p===0&&r===0?w=.5/t:p===n&&l===Math.PI&&(w=-.5/t);for(let P=0;P<=t;P++){const C=P/t;d.x=-e*Math.cos(i+C*o)*Math.sin(r+M*a),d.y=e*Math.cos(r+M*a),d.z=e*Math.sin(i+C*o)*Math.sin(r+M*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),x.push(C+w,1-M),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const M=h[p][y+1],w=h[p][y],P=h[p+1][y],C=h[p+1][y+1];(p!==0||r>0)&&f.push(M,w,C),(p!==n-1||l<Math.PI)&&f.push(w,P,C)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(v,3)),this.setAttribute("uv",new ut(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ze(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vt extends Et{constructor(e=1,t=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],l=[],c=[],h=new S,d=new S,u=new S;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*o,x=f/n*Math.PI*2;d.x=(e+t*Math.cos(x))*Math.cos(v),d.y=(e+t*Math.cos(x))*Math.sin(v),d.z=t*Math.sin(x),a.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,x=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;r.push(v,x,y),r.push(x,p,y)}this.setIndex(r),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Nd extends Rt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ee extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fd extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Od extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ca extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Gi extends ca{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Xo=new mt,Ya=new S,Za=new S;class gc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ia,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ya.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ya),Za.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Za),t.updateMatrixWorld(),Xo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $a=new mt,ns=new S,qo=new S;class Bd extends gc{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),ns.setFromMatrixPosition(e.matrixWorld),n.position.copy(ns),qo.copy(n.position),qo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(qo),n.updateMatrixWorld(),i.makeTranslation(-ns.x,-ns.y,-ns.z),$a.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a)}}class gn extends ca{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Bd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ha extends oc{constructor(e=-1,t=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-e,r=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class zd extends gc{constructor(){super(new ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tn extends ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new zd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kd extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ja(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ja();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ja(){return performance.now()}const Ka=new mt;class Hd{constructor(e,t,n=0,i=1/0){this.ray=new fo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ka.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ka),this}intersectObject(e,t=!0,n=[]){return Wr(e,this,n,t),n.sort(Ja),n}intersectObjects(e,t=!0,n=[]){for(let i=0,o=e.length;i<o;i++)Wr(e[i],this,n,t);return n.sort(Ja),n}}function Ja(s,e){return s.distance-e.distance}function Wr(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const o=s.children;for(let r=0,a=o.length;r<a;r++)Wr(o[r],e,t,!0)}}function Qa(s,e,t,n){const i=Gd(n);switch(t){case Vl:return s*e;case Xl:return s*e;case ql:return s*e*2;case Yl:return s*e/i.components*i.byteLength;case Jr:return s*e/i.components*i.byteLength;case Zl:return s*e*2/i.components*i.byteLength;case Qr:return s*e*2/i.components*i.byteLength;case Wl:return s*e*3/i.components*i.byteLength;case cn:return s*e*4/i.components*i.byteLength;case ea:return s*e*4/i.components*i.byteLength;case Qs:case eo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case to:case no:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fr:case mr:return Math.max(s,16)*Math.max(e,8)/4;case ur:case pr:return Math.max(s,8)*Math.max(e,8)/2;case gr:case xr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _r:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wr:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Mr:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case yr:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Sr:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case br:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Tr:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Er:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ar:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Rr:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Cr:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Pr:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Lr:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ir:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case io:case Dr:case Ur:return Math.ceil(s/4)*Math.ceil(e/4)*16;case $l:case Nr:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Fr:case Or:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gd(s){switch(s){case Ln:case kl:return{byteLength:1,components:1};case ds:case Hl:case Cn:return{byteLength:2,components:1};case jr:case Kr:return{byteLength:2,components:4};case ri:case $r:case En:return{byteLength:4,components:1};case Gl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yr);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vc(){let s=null,e=!1,t=null,n=null;function i(o,r){t(o,r),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){s=o}}}function Vd(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const v=d[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:o,update:r}}var Wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$d=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,su=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Su=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Au=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ru=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Iu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ou=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ku=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$u=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ju=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ku=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ju=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ef=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,of=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,af=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ff=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_f=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Af=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Pf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,If=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Df=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Of=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Jf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ap=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,up=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:Wd,alphahash_pars_fragment:Xd,alphamap_fragment:qd,alphamap_pars_fragment:Yd,alphatest_fragment:Zd,alphatest_pars_fragment:$d,aomap_fragment:jd,aomap_pars_fragment:Kd,batching_pars_vertex:Jd,batching_vertex:Qd,begin_vertex:eu,beginnormal_vertex:tu,bsdfs:nu,iridescence_fragment:iu,bumpmap_pars_fragment:su,clipping_planes_fragment:ou,clipping_planes_pars_fragment:ru,clipping_planes_pars_vertex:au,clipping_planes_vertex:lu,color_fragment:cu,color_pars_fragment:hu,color_pars_vertex:du,color_vertex:uu,common:fu,cube_uv_reflection_fragment:pu,defaultnormal_vertex:mu,displacementmap_pars_vertex:gu,displacementmap_vertex:xu,emissivemap_fragment:vu,emissivemap_pars_fragment:_u,colorspace_fragment:wu,colorspace_pars_fragment:Mu,envmap_fragment:yu,envmap_common_pars_fragment:Su,envmap_pars_fragment:bu,envmap_pars_vertex:Tu,envmap_physical_pars_fragment:Fu,envmap_vertex:Eu,fog_vertex:Au,fog_pars_vertex:Ru,fog_fragment:Cu,fog_pars_fragment:Pu,gradientmap_pars_fragment:Lu,lightmap_pars_fragment:Iu,lights_lambert_fragment:Du,lights_lambert_pars_fragment:Uu,lights_pars_begin:Nu,lights_toon_fragment:Ou,lights_toon_pars_fragment:Bu,lights_phong_fragment:zu,lights_phong_pars_fragment:ku,lights_physical_fragment:Hu,lights_physical_pars_fragment:Gu,lights_fragment_begin:Vu,lights_fragment_maps:Wu,lights_fragment_end:Xu,logdepthbuf_fragment:qu,logdepthbuf_pars_fragment:Yu,logdepthbuf_pars_vertex:Zu,logdepthbuf_vertex:$u,map_fragment:ju,map_pars_fragment:Ku,map_particle_fragment:Ju,map_particle_pars_fragment:Qu,metalnessmap_fragment:ef,metalnessmap_pars_fragment:tf,morphinstance_vertex:nf,morphcolor_vertex:sf,morphnormal_vertex:of,morphtarget_pars_vertex:rf,morphtarget_vertex:af,normal_fragment_begin:lf,normal_fragment_maps:cf,normal_pars_fragment:hf,normal_pars_vertex:df,normal_vertex:uf,normalmap_pars_fragment:ff,clearcoat_normal_fragment_begin:pf,clearcoat_normal_fragment_maps:mf,clearcoat_pars_fragment:gf,iridescence_pars_fragment:xf,opaque_fragment:vf,packing:_f,premultiplied_alpha_fragment:wf,project_vertex:Mf,dithering_fragment:yf,dithering_pars_fragment:Sf,roughnessmap_fragment:bf,roughnessmap_pars_fragment:Tf,shadowmap_pars_fragment:Ef,shadowmap_pars_vertex:Af,shadowmap_vertex:Rf,shadowmask_pars_fragment:Cf,skinbase_vertex:Pf,skinning_pars_vertex:Lf,skinning_vertex:If,skinnormal_vertex:Df,specularmap_fragment:Uf,specularmap_pars_fragment:Nf,tonemapping_fragment:Ff,tonemapping_pars_fragment:Of,transmission_fragment:Bf,transmission_pars_fragment:zf,uv_pars_fragment:kf,uv_pars_vertex:Hf,uv_vertex:Gf,worldpos_vertex:Vf,background_vert:Wf,background_frag:Xf,backgroundCube_vert:qf,backgroundCube_frag:Yf,cube_vert:Zf,cube_frag:$f,depth_vert:jf,depth_frag:Kf,distanceRGBA_vert:Jf,distanceRGBA_frag:Qf,equirect_vert:ep,equirect_frag:tp,linedashed_vert:np,linedashed_frag:ip,meshbasic_vert:sp,meshbasic_frag:op,meshlambert_vert:rp,meshlambert_frag:ap,meshmatcap_vert:lp,meshmatcap_frag:cp,meshnormal_vert:hp,meshnormal_frag:dp,meshphong_vert:up,meshphong_frag:fp,meshphysical_vert:pp,meshphysical_frag:mp,meshtoon_vert:gp,meshtoon_frag:xp,points_vert:vp,points_frag:_p,shadow_vert:wp,shadow_frag:Mp,sprite_vert:yp,sprite_frag:Sp},Be={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},pn={basic:{uniforms:zt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:zt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new $e(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:zt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:zt([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:zt([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new $e(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:zt([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:zt([Be.points,Be.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:zt([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:zt([Be.common,Be.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:zt([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:zt([Be.sprite,Be.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:zt([Be.common,Be.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:zt([Be.lights,Be.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};pn.physical={uniforms:zt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const js={r:0,b:0,g:0},Jn=new xn,bp=new mt;function Tp(s,e,t,n,i,o,r){const a=new $e(0);let l=o===!0?0:1,c,h,d=null,u=0,f=null;function g(M){let w=M.isScene===!0?M.background:null;return w&&w.isTexture&&(w=(M.backgroundBlurriness>0?t:e).get(w)),w}function v(M){let w=!1;const P=g(M);P===null?p(a,l):P&&P.isColor&&(p(P,1),w=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(M,w){const P=g(w);P&&(P.isCubeTexture||P.mapping===uo)?(h===void 0&&(h=new m(new N(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:zi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Jn.copy(w.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bp.makeRotationFromEuler(Jn)),h.material.toneMapped=rt.getTransfer(P.colorSpace)!==ft,(d!==P||u!==P.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=P,u=P.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new m(new dt(2,2),new Rt({name:"BackgroundMaterial",uniforms:zi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=rt.getTransfer(P.colorSpace)!==ft,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||u!==P.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=P,u=P.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,w){M.getRGB(js,sc(s)),n.buffers.color.setClear(js.r,js.g,js.b,w,r)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),l=w,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:v,addToRenderList:x,dispose:y}}function Ep(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let o=i,r=!1;function a(b,O,ae,ne,fe){let j=!1;const $=d(ne,ae,O);o!==$&&(o=$,c(o.object)),j=f(b,ne,ae,fe),j&&g(b,ne,ae,fe),fe!==null&&e.update(fe,s.ELEMENT_ARRAY_BUFFER),(j||r)&&(r=!1,w(b,O,ae,ne),fe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function d(b,O,ae){const ne=ae.wireframe===!0;let fe=n[b.id];fe===void 0&&(fe={},n[b.id]=fe);let j=fe[O.id];j===void 0&&(j={},fe[O.id]=j);let $=j[ne];return $===void 0&&($=u(l()),j[ne]=$),$}function u(b){const O=[],ae=[],ne=[];for(let fe=0;fe<t;fe++)O[fe]=0,ae[fe]=0,ne[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:ae,attributeDivisors:ne,object:b,attributes:{},index:null}}function f(b,O,ae,ne){const fe=o.attributes,j=O.attributes;let $=0;const F=ae.getAttributes();for(const I in F)if(F[I].location>=0){const q=fe[I];let J=j[I];if(J===void 0&&(I==="instanceMatrix"&&b.instanceMatrix&&(J=b.instanceMatrix),I==="instanceColor"&&b.instanceColor&&(J=b.instanceColor)),q===void 0||q.attribute!==J||J&&q.data!==J.data)return!0;$++}return o.attributesNum!==$||o.index!==ne}function g(b,O,ae,ne){const fe={},j=O.attributes;let $=0;const F=ae.getAttributes();for(const I in F)if(F[I].location>=0){let q=j[I];q===void 0&&(I==="instanceMatrix"&&b.instanceMatrix&&(q=b.instanceMatrix),I==="instanceColor"&&b.instanceColor&&(q=b.instanceColor));const J={};J.attribute=q,q&&q.data&&(J.data=q.data),fe[I]=J,$++}o.attributes=fe,o.attributesNum=$,o.index=ne}function v(){const b=o.newAttributes;for(let O=0,ae=b.length;O<ae;O++)b[O]=0}function x(b){p(b,0)}function p(b,O){const ae=o.newAttributes,ne=o.enabledAttributes,fe=o.attributeDivisors;ae[b]=1,ne[b]===0&&(s.enableVertexAttribArray(b),ne[b]=1),fe[b]!==O&&(s.vertexAttribDivisor(b,O),fe[b]=O)}function y(){const b=o.newAttributes,O=o.enabledAttributes;for(let ae=0,ne=O.length;ae<ne;ae++)O[ae]!==b[ae]&&(s.disableVertexAttribArray(ae),O[ae]=0)}function M(b,O,ae,ne,fe,j,$){$===!0?s.vertexAttribIPointer(b,O,ae,fe,j):s.vertexAttribPointer(b,O,ae,ne,fe,j)}function w(b,O,ae,ne){v();const fe=ne.attributes,j=ae.getAttributes(),$=O.defaultAttributeValues;for(const F in j){const I=j[F];if(I.location>=0){let H=fe[F];if(H===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(H=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(H=b.instanceColor)),H!==void 0){const q=H.normalized,J=H.itemSize,he=e.get(H);if(he===void 0)continue;const _e=he.buffer,U=he.type,k=he.bytesPerElement,K=U===s.INT||U===s.UNSIGNED_INT||H.gpuType===$r;if(H.isInterleavedBufferAttribute){const V=H.data,ie=V.stride,be=H.offset;if(V.isInstancedInterleavedBuffer){for(let Pe=0;Pe<I.locationSize;Pe++)p(I.location+Pe,V.meshPerAttribute);b.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Pe=0;Pe<I.locationSize;Pe++)x(I.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let Pe=0;Pe<I.locationSize;Pe++)M(I.location+Pe,J/I.locationSize,U,q,ie*k,(be+J/I.locationSize*Pe)*k,K)}else{if(H.isInstancedBufferAttribute){for(let V=0;V<I.locationSize;V++)p(I.location+V,H.meshPerAttribute);b.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let V=0;V<I.locationSize;V++)x(I.location+V);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let V=0;V<I.locationSize;V++)M(I.location+V,J/I.locationSize,U,q,J*k,J/I.locationSize*V*k,K)}}else if($!==void 0){const q=$[F];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(I.location,q);break;case 3:s.vertexAttrib3fv(I.location,q);break;case 4:s.vertexAttrib4fv(I.location,q);break;default:s.vertexAttrib1fv(I.location,q)}}}}y()}function P(){D();for(const b in n){const O=n[b];for(const ae in O){const ne=O[ae];for(const fe in ne)h(ne[fe].object),delete ne[fe];delete O[ae]}delete n[b]}}function C(b){if(n[b.id]===void 0)return;const O=n[b.id];for(const ae in O){const ne=O[ae];for(const fe in ne)h(ne[fe].object),delete ne[fe];delete O[ae]}delete n[b.id]}function L(b){for(const O in n){const ae=n[O];if(ae[b.id]===void 0)continue;const ne=ae[b.id];for(const fe in ne)h(ne[fe].object),delete ne[fe];delete ae[b.id]}}function D(){T(),r=!0,o!==i&&(o=i,c(o.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:x,disableUnusedAttributes:y}}function Ap(s,e,t){let n;function i(c){n=c}function o(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function r(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*u[v];t.update(g,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Rp(s,e,t,n){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(L){return!(L!==cn&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const D=L===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Ln&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==En&&!D)}function l(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:w,vertexTextures:P,maxSamples:C}}function Cp(s){const e=this;let t=null,n=0,i=!1,o=!1;const r=new ei,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,x=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||o&&!x)o?h(null):c();else{const y=o?0:n,M=y*4;let w=p.clippingState||null;l.value=w,w=h(g,u,M,f);for(let P=0;P!==M;++P)w[P]=t[P];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let x=null;if(v!==0){if(x=l.value,g!==!0||x===null){const p=f+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(x===null||x.length<p)&&(x=new Float32Array(p));for(let M=0,w=f;M!==v;++M,w+=4)r.copy(d[M]).applyMatrix4(y,a),r.normal.toArray(x,w),x[w+3]=r.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function Pp(s){let e=new WeakMap;function t(r,a){return a===cr?r.mapping=Ui:a===hr&&(r.mapping=Ni),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===cr||a===hr)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Kh(l.height);return c.fromEquirectangularTexture(s,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const Ci=4,el=[.125,.215,.35,.446,.526,.582],ii=20,Yo=new ha,tl=new $e;let Zo=null,$o=0,jo=0,Ko=!1;const ti=(1+Math.sqrt(5))/2,Ti=1/ti,nl=[new S(-ti,Ti,0),new S(ti,Ti,0),new S(-Ti,0,ti),new S(Ti,0,ti),new S(0,ti,-Ti),new S(0,ti,Ti),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)];class il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Zo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,i,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zo,$o,jo),this._renderer.xr.enabled=Ko,e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Cn,format:cn,colorSpace:Bi,depthBuffer:!1},i=sl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lp(o)),this._blurMaterial=Ip(o,e,t)}return i}_compileMaterial(e){const t=new m(this._lodPlanes[0],e);this._renderer.compile(t,Yo)}_sceneToCubeUV(e,t,n,i){const a=new Zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(tl),h.toneMapping=Hn,h.autoClear=!1;const f=new st({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new m(new N,f);let v=!1;const x=e.background;x?x.isColor&&(f.color.copy(x),e.background=null,v=!0):(f.color.copy(tl),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;Ks(i,y*M,p>2?M:0,M,M),h.setRenderTarget(i),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ui||e.mapping===Ni;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ol());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new m(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Ks(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Yo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=nl[(i-o-1)%nl.length];this._blur(e,o-1,o,r,a)}t.autoClear=n}_blur(e,t,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",o),this._halfBlur(r,e,n,n,i,"longitudinal",o)}_halfBlur(e,t,n,i,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new m(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*ii-1),v=o/g,x=isFinite(o)?1+Math.floor(h*v):ii;x>ii&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ii}`);const p=[];let y=0;for(let L=0;L<ii;++L){const D=L/v,T=Math.exp(-D*D/2);p.push(T),L===0?y+=T:L<x&&(y+=2*T)}for(let L=0;L<p.length;L++)p[L]=p[L]/y;u.envMap.value=e.texture,u.samples.value=x,u.weights.value=p,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;const w=this._sizeLods[i],P=3*w*(i>M-Ci?i-M+Ci:0),C=4*(this._cubeSize-w);Ks(t,P,C,3*w,2*w),l.setRenderTarget(t),l.render(d,Yo)}}function Lp(s){const e=[],t=[],n=[];let i=s;const o=s-Ci+1+el.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);t.push(a);let l=1/a;r>s-Ci?l=el[r-s+Ci-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,x=2,p=1,y=new Float32Array(v*g*f),M=new Float32Array(x*g*f),w=new Float32Array(p*g*f);for(let C=0;C<f;C++){const L=C%3*2/3-1,D=C>2?0:-1,T=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];y.set(T,v*g*C),M.set(u,x*g*C);const b=[C,C,C,C,C,C];w.set(b,p*g*C)}const P=new Et;P.setAttribute("position",new en(y,v)),P.setAttribute("uv",new en(M,x)),P.setAttribute("faceIndex",new en(w,p)),e.push(P),i>Ci&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sl(s,e,t){const n=new dn(s,e,t);return n.texture.mapping=uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ks(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ip(s,e,t){const n=new Float32Array(ii),i=new S(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ol(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function rl(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function da(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dp(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===cr||l===hr,h=l===Ui||l===Ni;if(c||h){let d=e.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new il(s)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new il(s)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Up(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ai("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Np(s,e,t,n){const i={},o=new WeakMap;function r(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete i[u.id];const f=o.get(u);f&&(e.remove(f),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)e.update(u[f],s.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let M=0,w=y.length;M<w;M+=3){const P=y[M+0],C=y[M+1],L=y[M+2];u.push(P,C,C,L,L,P)}}else if(g!==void 0){const y=g.array;v=g.version;for(let M=0,w=y.length/3-1;M<w;M+=3){const P=M+0,C=M+1,L=M+2;u.push(P,C,C,L,L,P)}}else return;const x=new(Jl(u)?ic:nc)(u,1);x.version=v;const p=o.get(d);p&&e.remove(p),o.set(d,x)}function h(d){const u=o.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Fp(s,e,t){let n;function i(u){n=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function l(u,f){s.drawElements(n,f,o,u*r),t.update(f,n,1)}function c(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,o,u*r,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,u,0,g);let x=0;for(let p=0;p<g;p++)x+=f[p];t.update(x,n,1)}function d(u,f,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<u.length;p++)c(u[p]/r,f[p],v[p]);else{x.multiDrawElementsInstancedWEBGL(n,f,0,o,u,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*v[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Op(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(t.calls++,r){case s.TRIANGLES:t.triangles+=a*(o/3);break;case s.LINES:t.lines+=a*(o/2);break;case s.LINE_STRIP:t.lines+=a*(o-1);break;case s.LINE_LOOP:t.lines+=a*o;break;case s.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Bp(s,e,t){const n=new WeakMap,i=new pt;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let b=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let w=0;g===!0&&(w=1),v===!0&&(w=2),x===!0&&(w=3);let P=a.attributes.position.count*w,C=1;P>e.maxTextureSize&&(C=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const L=new Float32Array(P*C*4*d),D=new ec(L,P,C,d);D.type=En,D.needsUpdate=!0;const T=w*4;for(let O=0;O<d;O++){const ae=p[O],ne=y[O],fe=M[O],j=P*C*4*O;for(let $=0;$<ae.count;$++){const F=$*T;g===!0&&(i.fromBufferAttribute(ae,$),L[j+F+0]=i.x,L[j+F+1]=i.y,L[j+F+2]=i.z,L[j+F+3]=0),v===!0&&(i.fromBufferAttribute(ne,$),L[j+F+4]=i.x,L[j+F+5]=i.y,L[j+F+6]=i.z,L[j+F+7]=0),x===!0&&(i.fromBufferAttribute(fe,$),L[j+F+8]=i.x,L[j+F+9]=i.y,L[j+F+10]=i.z,L[j+F+11]=fe.itemSize===4?i.w:1)}}u={count:d,texture:D,size:new De(P,C)},n.set(a,u),a.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let g=0;for(let x=0;x<c.length;x++)g+=c[x];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:o}}function zp(s,e,t,n){let i=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:r}}const _c=new Ht,al=new lc(1,1),wc=new ec,Mc=new Fh,yc=new rc,ll=[],cl=[],hl=new Float32Array(16),dl=new Float32Array(9),ul=new Float32Array(4);function Vi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let o=ll[i];if(o===void 0&&(o=new Float32Array(i),ll[i]=o),e!==0){n.toArray(o,0);for(let r=1,a=0;r!==e;++r)a+=t,s[r].toArray(o,a)}return o}function Pt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Lt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function xo(s,e){let t=cl[e];t===void 0&&(t=new Int32Array(e),cl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function kp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Hp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2fv(this.addr,e),Lt(t,e)}}function Gp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;s.uniform3fv(this.addr,e),Lt(t,e)}}function Vp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4fv(this.addr,e),Lt(t,e)}}function Wp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;ul.set(n),s.uniformMatrix2fv(this.addr,!1,ul),Lt(t,n)}}function Xp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;dl.set(n),s.uniformMatrix3fv(this.addr,!1,dl),Lt(t,n)}}function qp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;hl.set(n),s.uniformMatrix4fv(this.addr,!1,hl),Lt(t,n)}}function Yp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Zp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2iv(this.addr,e),Lt(t,e)}}function $p(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;s.uniform3iv(this.addr,e),Lt(t,e)}}function jp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4iv(this.addr,e),Lt(t,e)}}function Kp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Jp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2uiv(this.addr,e),Lt(t,e)}}function Qp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;s.uniform3uiv(this.addr,e),Lt(t,e)}}function e0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4uiv(this.addr,e),Lt(t,e)}}function t0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(al.compareFunction=Kl,o=al):o=_c,t.setTexture2D(e||o,i)}function n0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Mc,i)}function i0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||yc,i)}function s0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||wc,i)}function o0(s){switch(s){case 5126:return kp;case 35664:return Hp;case 35665:return Gp;case 35666:return Vp;case 35674:return Wp;case 35675:return Xp;case 35676:return qp;case 5124:case 35670:return Yp;case 35667:case 35671:return Zp;case 35668:case 35672:return $p;case 35669:case 35673:return jp;case 5125:return Kp;case 36294:return Jp;case 36295:return Qp;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}function r0(s,e){s.uniform1fv(this.addr,e)}function a0(s,e){const t=Vi(e,this.size,2);s.uniform2fv(this.addr,t)}function l0(s,e){const t=Vi(e,this.size,3);s.uniform3fv(this.addr,t)}function c0(s,e){const t=Vi(e,this.size,4);s.uniform4fv(this.addr,t)}function h0(s,e){const t=Vi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function d0(s,e){const t=Vi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function u0(s,e){const t=Vi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function f0(s,e){s.uniform1iv(this.addr,e)}function p0(s,e){s.uniform2iv(this.addr,e)}function m0(s,e){s.uniform3iv(this.addr,e)}function g0(s,e){s.uniform4iv(this.addr,e)}function x0(s,e){s.uniform1uiv(this.addr,e)}function v0(s,e){s.uniform2uiv(this.addr,e)}function _0(s,e){s.uniform3uiv(this.addr,e)}function w0(s,e){s.uniform4uiv(this.addr,e)}function M0(s,e,t){const n=this.cache,i=e.length,o=xo(t,i);Pt(n,o)||(s.uniform1iv(this.addr,o),Lt(n,o));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||_c,o[r])}function y0(s,e,t){const n=this.cache,i=e.length,o=xo(t,i);Pt(n,o)||(s.uniform1iv(this.addr,o),Lt(n,o));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Mc,o[r])}function S0(s,e,t){const n=this.cache,i=e.length,o=xo(t,i);Pt(n,o)||(s.uniform1iv(this.addr,o),Lt(n,o));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||yc,o[r])}function b0(s,e,t){const n=this.cache,i=e.length,o=xo(t,i);Pt(n,o)||(s.uniform1iv(this.addr,o),Lt(n,o));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||wc,o[r])}function T0(s){switch(s){case 5126:return r0;case 35664:return a0;case 35665:return l0;case 35666:return c0;case 35674:return h0;case 35675:return d0;case 35676:return u0;case 5124:case 35670:return f0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return x0;case 36294:return v0;case 36295:return _0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return b0}}class E0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=o0(t.type)}}class A0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=T0(t.type)}}class R0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(e,t[a.id],n)}}}const Jo=/(\w+)(\])?(\[|\.)?/g;function fl(s,e){s.seq.push(e),s.map[e.id]=e}function C0(s,e,t){const n=s.name,i=n.length;for(Jo.lastIndex=0;;){const o=Jo.exec(n),r=Jo.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){fl(t,c===void 0?new E0(a,s,e):new A0(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new R0(a),fl(t,d)),t=d}}}class so{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=e.getActiveUniform(t,i),r=e.getUniformLocation(t,o.name);C0(o,r,this)}}setValue(e,t,n,i){const o=this.map[t];o!==void 0&&o.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let o=0,r=t.length;o!==r;++o){const a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,o=e.length;i!==o;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function pl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const P0=37297;let L0=0;function I0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}const ml=new et;function D0(s){rt._getMatrix(ml,rt.workingColorSpace,s);const e=`mat3( ${ml.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(s)){case ro:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function gl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+i+`

`+I0(s.getShaderSource(e),r)}else return i}function U0(s,e){const t=D0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function N0(s,e){let t;switch(e){case Ul:t="Linear";break;case Nl:t="Reinhard";break;case Fl:t="Cineon";break;case Zr:t="ACESFilmic";break;case Ol:t="AgX";break;case Bl:t="Neutral";break;case Jc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Js=new S;function F0(){rt.getLuminanceCoefficients(Js);const s=Js.x.toFixed(4),e=Js.y.toFixed(4),t=Js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)}function B0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function z0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(e,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),t[r]={type:o.type,location:s.getAttribLocation(e,r),locationSize:a}}return t}function is(s){return s!==""}function xl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xr(s){return s.replace(k0,G0)}const H0=new Map;function G0(s,e){let t=tt[e];if(t===void 0){const n=H0.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xr(t)}const V0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(s){return s.replace(V0,W0)}function W0(s,e,t,n){let i="";for(let o=parseInt(e);o<parseInt(t);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function wl(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function X0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ll?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Il?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Tn&&(e="SHADOWMAP_TYPE_VSM"),e}function q0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ui:case Ni:e="ENVMAP_TYPE_CUBE";break;case uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ni:e="ENVMAP_MODE_REFRACTION";break}return e}function Z0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Dl:e="ENVMAP_BLENDING_MULTIPLY";break;case jc:e="ENVMAP_BLENDING_MIX";break;case Kc:e="ENVMAP_BLENDING_ADD";break}return e}function $0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function j0(s,e,t,n){const i=s.getContext(),o=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=X0(t),c=q0(t),h=Y0(t),d=Z0(t),u=$0(t),f=O0(t),g=B0(o),v=i.createProgram();let x,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(is).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(is).join(`
`),p.length>0&&(p+=`
`)):(x=[wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),p=[wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Hn?N0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,U0("linearToOutputTexel",t.outputColorSpace),F0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(is).join(`
`)),r=Xr(r),r=xl(r,t),r=vl(r,t),a=Xr(a),a=xl(a,t),a=vl(a,t),r=_l(r),a=_l(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===_a?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+x+r,w=y+p+a,P=pl(i,i.VERTEX_SHADER,M),C=pl(i,i.FRAGMENT_SHADER,w);i.attachShader(v,P),i.attachShader(v,C),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function L(O){if(s.debug.checkShaderErrors){const ae=i.getProgramInfoLog(v).trim(),ne=i.getShaderInfoLog(P).trim(),fe=i.getShaderInfoLog(C).trim();let j=!0,$=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,P,C);else{const F=gl(i,P,"vertex"),I=gl(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+ae+`
`+F+`
`+I)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(ne===""||fe==="")&&($=!1);$&&(O.diagnostics={runnable:j,programLog:ae,vertexShader:{log:ne,prefix:x},fragmentShader:{log:fe,prefix:p}})}i.deleteShader(P),i.deleteShader(C),D=new so(i,v),T=z0(i,v)}let D;this.getUniforms=function(){return D===void 0&&L(this),D};let T;this.getAttributes=function(){return T===void 0&&L(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(v,P0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=L0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=C,this}let K0=0;class J0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Q0(e),t.set(e,n)),n}}class Q0{constructor(e){this.id=K0++,this.code=e,this.usedTimes=0}}function em(s,e,t,n,i,o,r){const a=new na,l=new J0,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function x(T,b,O,ae,ne){const fe=ae.fog,j=ne.geometry,$=T.isMeshStandardMaterial?ae.environment:null,F=(T.isMeshStandardMaterial?t:e).get(T.envMap||$),I=F&&F.mapping===uo?F.image.height:null,H=g[T.type];T.precision!==null&&(f=i.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const q=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,J=q!==void 0?q.length:0;let he=0;j.morphAttributes.position!==void 0&&(he=1),j.morphAttributes.normal!==void 0&&(he=2),j.morphAttributes.color!==void 0&&(he=3);let _e,U,k,K;if(H){const it=pn[H];_e=it.vertexShader,U=it.fragmentShader}else _e=T.vertexShader,U=T.fragmentShader,l.update(T),k=l.getVertexShaderID(T),K=l.getFragmentShaderID(T);const V=s.getRenderTarget(),ie=s.state.buffers.depth.getReversed(),be=ne.isInstancedMesh===!0,Pe=ne.isBatchedMesh===!0,Oe=!!T.map,xe=!!T.matcap,re=!!F,E=!!T.aoMap,se=!!T.lightMap,W=!!T.bumpMap,le=!!T.normalMap,Y=!!T.displacementMap,Se=!!T.emissiveMap,Ee=!!T.metalnessMap,A=!!T.roughnessMap,_=T.anisotropy>0,z=T.clearcoat>0,X=T.dispersion>0,Z=T.iridescence>0,B=T.sheen>0,ce=T.transmission>0,pe=_&&!!T.anisotropyMap,ye=z&&!!T.clearcoatMap,Te=z&&!!T.clearcoatNormalMap,Me=z&&!!T.clearcoatRoughnessMap,Ie=Z&&!!T.iridescenceMap,Fe=Z&&!!T.iridescenceThicknessMap,we=B&&!!T.sheenColorMap,ve=B&&!!T.sheenRoughnessMap,Le=!!T.specularMap,Ue=!!T.specularColorMap,He=!!T.specularIntensityMap,G=ce&&!!T.transmissionMap,Ae=ce&&!!T.thicknessMap,de=!!T.gradientMap,ge=!!T.alphaMap,Re=T.alphaTest>0,Ce=!!T.alphaHash,Ge=!!T.extensions;let Qe=Hn;T.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Qe=s.toneMapping);const lt={shaderID:H,shaderType:T.type,shaderName:T.name,vertexShader:_e,fragmentShader:U,defines:T.defines,customVertexShaderID:k,customFragmentShaderID:K,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Pe,batchingColor:Pe&&ne._colorsTexture!==null,instancing:be,instancingColor:be&&ne.instanceColor!==null,instancingMorph:be&&ne.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:V===null?s.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Bi,alphaToCoverage:!!T.alphaToCoverage,map:Oe,matcap:xe,envMap:re,envMapMode:re&&F.mapping,envMapCubeUVHeight:I,aoMap:E,lightMap:se,bumpMap:W,normalMap:le,displacementMap:u&&Y,emissiveMap:Se,normalMapObjectSpace:le&&T.normalMapType===nh,normalMapTangentSpace:le&&T.normalMapType===jl,metalnessMap:Ee,roughnessMap:A,anisotropy:_,anisotropyMap:pe,clearcoat:z,clearcoatMap:ye,clearcoatNormalMap:Te,clearcoatRoughnessMap:Me,dispersion:X,iridescence:Z,iridescenceMap:Ie,iridescenceThicknessMap:Fe,sheen:B,sheenColorMap:we,sheenRoughnessMap:ve,specularMap:Le,specularColorMap:Ue,specularIntensityMap:He,transmission:ce,transmissionMap:G,thicknessMap:Ae,gradientMap:de,opaque:T.transparent===!1&&T.blending===Pi&&T.alphaToCoverage===!1,alphaMap:ge,alphaTest:Re,alphaHash:Ce,combine:T.combine,mapUv:Oe&&v(T.map.channel),aoMapUv:E&&v(T.aoMap.channel),lightMapUv:se&&v(T.lightMap.channel),bumpMapUv:W&&v(T.bumpMap.channel),normalMapUv:le&&v(T.normalMap.channel),displacementMapUv:Y&&v(T.displacementMap.channel),emissiveMapUv:Se&&v(T.emissiveMap.channel),metalnessMapUv:Ee&&v(T.metalnessMap.channel),roughnessMapUv:A&&v(T.roughnessMap.channel),anisotropyMapUv:pe&&v(T.anisotropyMap.channel),clearcoatMapUv:ye&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Te&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:we&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(T.sheenRoughnessMap.channel),specularMapUv:Le&&v(T.specularMap.channel),specularColorMapUv:Ue&&v(T.specularColorMap.channel),specularIntensityMapUv:He&&v(T.specularIntensityMap.channel),transmissionMapUv:G&&v(T.transmissionMap.channel),thicknessMapUv:Ae&&v(T.thicknessMap.channel),alphaMapUv:ge&&v(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(le||_),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!j.attributes.uv&&(Oe||ge),fog:!!fe,useFog:T.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ie,skinning:ne.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:he,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:Qe,decodeVideoTexture:Oe&&T.map.isVideoTexture===!0&&rt.getTransfer(T.map.colorSpace)===ft,decodeVideoTextureEmissive:Se&&T.emissiveMap.isVideoTexture===!0&&rt.getTransfer(T.emissiveMap.colorSpace)===ft,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===gt,flipSided:T.side===kt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&T.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function p(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const O in T.defines)b.push(O),b.push(T.defines[O]);return T.isRawShaderMaterial===!1&&(y(b,T),M(b,T),b.push(s.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function y(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function M(T,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),T.push(a.mask)}function w(T){const b=g[T.type];let O;if(b){const ae=pn[b];O=fs.clone(ae.uniforms)}else O=T.uniforms;return O}function P(T,b){let O;for(let ae=0,ne=h.length;ae<ne;ae++){const fe=h[ae];if(fe.cacheKey===b){O=fe,++O.usedTimes;break}}return O===void 0&&(O=new j0(s,b,T,o),h.push(O)),O}function C(T){if(--T.usedTimes===0){const b=h.indexOf(T);h[b]=h[h.length-1],h.pop(),T.destroy()}}function L(T){l.remove(T)}function D(){l.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:w,acquireProgram:P,releaseProgram:C,releaseShaderCache:L,programs:h,dispose:D}}function tm(){let s=new WeakMap;function e(r){return s.has(r)}function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,l){s.get(r)[a]=l}function o(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:o}}function nm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ml(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function yl(){const s=[];let e=0;const t=[],n=[],i=[];function o(){e=0,t.length=0,n.length=0,i.length=0}function r(d,u,f,g,v,x){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:x},s[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=x),e++,p}function a(d,u,f,g,v,x){const p=r(d,u,f,g,v,x);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(d,u,f,g,v,x){const p=r(d,u,f,g,v,x);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||nm),n.length>1&&n.sort(u||Ml),i.length>1&&i.sort(u||Ml)}function h(){for(let d=e,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:o,push:a,unshift:l,finish:h,sort:c}}function im(){let s=new WeakMap;function e(n,i){const o=s.get(n);let r;return o===void 0?(r=new yl,s.set(n,[r])):i>=o.length?(r=new yl,o.push(r)):r=o[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function sm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new $e};break;case"SpotLight":t={position:new S,direction:new S,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new S,halfWidth:new S,halfHeight:new S};break}return s[e.id]=t,t}}}function om(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let rm=0;function am(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function lm(s){const e=new sm,t=om(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new S);const i=new S,o=new mt,r=new mt;function a(c){let h=0,d=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,v=0,x=0,p=0,y=0,M=0,w=0,P=0,C=0,L=0;c.sort(am);for(let T=0,b=c.length;T<b;T++){const O=c[T],ae=O.color,ne=O.intensity,fe=O.distance,j=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=ae.r*ne,d+=ae.g*ne,u+=ae.b*ne;else if(O.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(O.sh.coefficients[$],ne);L++}else if(O.isDirectionalLight){const $=e.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const F=O.shadow,I=t.get(O);I.shadowIntensity=F.intensity,I.shadowBias=F.bias,I.shadowNormalBias=F.normalBias,I.shadowRadius=F.radius,I.shadowMapSize=F.mapSize,n.directionalShadow[f]=I,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=O.shadow.matrix,y++}n.directional[f]=$,f++}else if(O.isSpotLight){const $=e.get(O);$.position.setFromMatrixPosition(O.matrixWorld),$.color.copy(ae).multiplyScalar(ne),$.distance=fe,$.coneCos=Math.cos(O.angle),$.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),$.decay=O.decay,n.spot[v]=$;const F=O.shadow;if(O.map&&(n.spotLightMap[P]=O.map,P++,F.updateMatrices(O),O.castShadow&&C++),n.spotLightMatrix[v]=F.matrix,O.castShadow){const I=t.get(O);I.shadowIntensity=F.intensity,I.shadowBias=F.bias,I.shadowNormalBias=F.normalBias,I.shadowRadius=F.radius,I.shadowMapSize=F.mapSize,n.spotShadow[v]=I,n.spotShadowMap[v]=j,w++}v++}else if(O.isRectAreaLight){const $=e.get(O);$.color.copy(ae).multiplyScalar(ne),$.halfWidth.set(O.width*.5,0,0),$.halfHeight.set(0,O.height*.5,0),n.rectArea[x]=$,x++}else if(O.isPointLight){const $=e.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity),$.distance=O.distance,$.decay=O.decay,O.castShadow){const F=O.shadow,I=t.get(O);I.shadowIntensity=F.intensity,I.shadowBias=F.bias,I.shadowNormalBias=F.normalBias,I.shadowRadius=F.radius,I.shadowMapSize=F.mapSize,I.shadowCameraNear=F.camera.near,I.shadowCameraFar=F.camera.far,n.pointShadow[g]=I,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=O.shadow.matrix,M++}n.point[g]=$,g++}else if(O.isHemisphereLight){const $=e.get(O);$.skyColor.copy(O.color).multiplyScalar(ne),$.groundColor.copy(O.groundColor).multiplyScalar(ne),n.hemi[p]=$,p++}}x>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==x||D.hemiLength!==p||D.numDirectionalShadows!==y||D.numPointShadows!==M||D.numSpotShadows!==w||D.numSpotMaps!==P||D.numLightProbes!==L)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=x,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=w+P-C,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=L,D.directionalLength=f,D.pointLength=g,D.spotLength=v,D.rectAreaLength=x,D.hemiLength=p,D.numDirectionalShadows=y,D.numPointShadows=M,D.numSpotShadows=w,D.numSpotMaps=P,D.numLightProbes=L,n.version=rm++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0;const x=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(x),d++}else if(M.isSpotLight){const w=n.spot[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(x),f++}else if(M.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(x),r.identity(),o.copy(M.matrixWorld),o.premultiply(x),r.extractRotation(o),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),g++}else if(M.isPointLight){const w=n.point[u];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(x),u++}else if(M.isHemisphereLight){const w=n.hemi[v];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(x),v++}}}return{setup:a,setupView:l,state:n}}function Sl(s){const e=new lm(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function o(h){t.push(h)}function r(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function cm(s){let e=new WeakMap;function t(i,o=0){const r=e.get(i);let a;return r===void 0?(a=new Sl(s),e.set(i,[a])):o>=r.length?(a=new Sl(s),r.push(a)):a=r[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function um(s,e,t){let n=new ia;const i=new De,o=new De,r=new pt,a=new Fd({depthPacking:th}),l=new Od,c={},h=t.maxTextureSize,d={[Wn]:kt,[kt]:Wn,[gt]:gt},u=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:hm,fragmentShader:dm}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new m(g,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ll;let p=this.type;this.render=function(C,L,D){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;const T=s.getRenderTarget(),b=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(Rn),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const ne=p!==Tn&&this.type===Tn,fe=p===Tn&&this.type!==Tn;for(let j=0,$=C.length;j<$;j++){const F=C[j],I=F.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const H=I.getFrameExtents();if(i.multiply(H),o.copy(I.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/H.x),i.x=o.x*H.x,I.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/H.y),i.y=o.y*H.y,I.mapSize.y=o.y)),I.map===null||ne===!0||fe===!0){const J=this.type!==Tn?{minFilter:hn,magFilter:hn}:{};I.map!==null&&I.map.dispose(),I.map=new dn(i.x,i.y,J),I.map.texture.name=F.name+".shadowMap",I.camera.updateProjectionMatrix()}s.setRenderTarget(I.map),s.clear();const q=I.getViewportCount();for(let J=0;J<q;J++){const he=I.getViewport(J);r.set(o.x*he.x,o.y*he.y,o.x*he.z,o.y*he.w),ae.viewport(r),I.updateMatrices(F,J),n=I.getFrustum(),w(L,D,I.camera,F,this.type)}I.isPointLightShadow!==!0&&this.type===Tn&&y(I,D),I.needsUpdate=!1}p=this.type,x.needsUpdate=!1,s.setRenderTarget(T,b,O)};function y(C,L){const D=e.update(v);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new dn(i.x,i.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(L,null,D,u,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(L,null,D,f,v,null)}function M(C,L,D,T){let b=null;const O=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(O!==void 0)b=O;else if(b=D.isPointLight===!0?l:a,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const ae=b.uuid,ne=L.uuid;let fe=c[ae];fe===void 0&&(fe={},c[ae]=fe);let j=fe[ne];j===void 0&&(j=b.clone(),fe[ne]=j,L.addEventListener("dispose",P)),b=j}if(b.visible=L.visible,b.wireframe=L.wireframe,T===Tn?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:d[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const ae=s.properties.get(b);ae.light=D}return b}function w(C,L,D,T,b){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Tn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const ne=e.update(C),fe=C.material;if(Array.isArray(fe)){const j=ne.groups;for(let $=0,F=j.length;$<F;$++){const I=j[$],H=fe[I.materialIndex];if(H&&H.visible){const q=M(C,H,T,b);C.onBeforeShadow(s,C,L,D,ne,q,I),s.renderBufferDirect(D,null,ne,q,C,I),C.onAfterShadow(s,C,L,D,ne,q,I)}}}else if(fe.visible){const j=M(C,fe,T,b);C.onBeforeShadow(s,C,L,D,ne,j,null),s.renderBufferDirect(D,null,ne,j,C,null),C.onAfterShadow(s,C,L,D,ne,j,null)}}const ae=C.children;for(let ne=0,fe=ae.length;ne<fe;ne++)w(ae[ne],L,D,T,b)}function P(C){C.target.removeEventListener("dispose",P);for(const D in c){const T=c[D],b=C.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const fm={[nr]:ir,[sr]:ar,[or]:lr,[Di]:rr,[ir]:nr,[ar]:sr,[lr]:or,[rr]:Di};function pm(s,e){function t(){let G=!1;const Ae=new pt;let de=null;const ge=new pt(0,0,0,0);return{setMask:function(Re){de!==Re&&!G&&(s.colorMask(Re,Re,Re,Re),de=Re)},setLocked:function(Re){G=Re},setClear:function(Re,Ce,Ge,Qe,lt){lt===!0&&(Re*=Qe,Ce*=Qe,Ge*=Qe),Ae.set(Re,Ce,Ge,Qe),ge.equals(Ae)===!1&&(s.clearColor(Re,Ce,Ge,Qe),ge.copy(Ae))},reset:function(){G=!1,de=null,ge.set(-1,0,0,0)}}}function n(){let G=!1,Ae=!1,de=null,ge=null,Re=null;return{setReversed:function(Ce){if(Ae!==Ce){const Ge=e.get("EXT_clip_control");Ae?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const Qe=Re;Re=null,this.setClear(Qe)}Ae=Ce},getReversed:function(){return Ae},setTest:function(Ce){Ce?V(s.DEPTH_TEST):ie(s.DEPTH_TEST)},setMask:function(Ce){de!==Ce&&!G&&(s.depthMask(Ce),de=Ce)},setFunc:function(Ce){if(Ae&&(Ce=fm[Ce]),ge!==Ce){switch(Ce){case nr:s.depthFunc(s.NEVER);break;case ir:s.depthFunc(s.ALWAYS);break;case sr:s.depthFunc(s.LESS);break;case Di:s.depthFunc(s.LEQUAL);break;case or:s.depthFunc(s.EQUAL);break;case rr:s.depthFunc(s.GEQUAL);break;case ar:s.depthFunc(s.GREATER);break;case lr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=Ce}},setLocked:function(Ce){G=Ce},setClear:function(Ce){Re!==Ce&&(Ae&&(Ce=1-Ce),s.clearDepth(Ce),Re=Ce)},reset:function(){G=!1,de=null,ge=null,Re=null,Ae=!1}}}function i(){let G=!1,Ae=null,de=null,ge=null,Re=null,Ce=null,Ge=null,Qe=null,lt=null;return{setTest:function(it){G||(it?V(s.STENCIL_TEST):ie(s.STENCIL_TEST))},setMask:function(it){Ae!==it&&!G&&(s.stencilMask(it),Ae=it)},setFunc:function(it,St,$t){(de!==it||ge!==St||Re!==$t)&&(s.stencilFunc(it,St,$t),de=it,ge=St,Re=$t)},setOp:function(it,St,$t){(Ce!==it||Ge!==St||Qe!==$t)&&(s.stencilOp(it,St,$t),Ce=it,Ge=St,Qe=$t)},setLocked:function(it){G=it},setClear:function(it){lt!==it&&(s.clearStencil(it),lt=it)},reset:function(){G=!1,Ae=null,de=null,ge=null,Re=null,Ce=null,Ge=null,Qe=null,lt=null}}}const o=new t,r=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,v=!1,x=null,p=null,y=null,M=null,w=null,P=null,C=null,L=new $e(0,0,0),D=0,T=!1,b=null,O=null,ae=null,ne=null,fe=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,F=0;const I=s.getParameter(s.VERSION);I.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(I)[1]),$=F>=1):I.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),$=F>=2);let H=null,q={};const J=s.getParameter(s.SCISSOR_BOX),he=s.getParameter(s.VIEWPORT),_e=new pt().fromArray(J),U=new pt().fromArray(he);function k(G,Ae,de,ge){const Re=new Uint8Array(4),Ce=s.createTexture();s.bindTexture(G,Ce),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ge=0;Ge<de;Ge++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,Re):s.texImage2D(Ae+Ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Re);return Ce}const K={};K[s.TEXTURE_2D]=k(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=k(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=k(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=k(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),V(s.DEPTH_TEST),r.setFunc(Di),W(!1),le(pa),V(s.CULL_FACE),E(Rn);function V(G){h[G]!==!0&&(s.enable(G),h[G]=!0)}function ie(G){h[G]!==!1&&(s.disable(G),h[G]=!1)}function be(G,Ae){return d[G]!==Ae?(s.bindFramebuffer(G,Ae),d[G]=Ae,G===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Ae),G===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Pe(G,Ae){let de=f,ge=!1;if(G){de=u.get(Ae),de===void 0&&(de=[],u.set(Ae,de));const Re=G.textures;if(de.length!==Re.length||de[0]!==s.COLOR_ATTACHMENT0){for(let Ce=0,Ge=Re.length;Ce<Ge;Ce++)de[Ce]=s.COLOR_ATTACHMENT0+Ce;de.length=Re.length,ge=!0}}else de[0]!==s.BACK&&(de[0]=s.BACK,ge=!0);ge&&s.drawBuffers(de)}function Oe(G){return g!==G?(s.useProgram(G),g=G,!0):!1}const xe={[ni]:s.FUNC_ADD,[Dc]:s.FUNC_SUBTRACT,[Uc]:s.FUNC_REVERSE_SUBTRACT};xe[Nc]=s.MIN,xe[Fc]=s.MAX;const re={[Oc]:s.ZERO,[Bc]:s.ONE,[zc]:s.SRC_COLOR,[er]:s.SRC_ALPHA,[Xc]:s.SRC_ALPHA_SATURATE,[Vc]:s.DST_COLOR,[Hc]:s.DST_ALPHA,[kc]:s.ONE_MINUS_SRC_COLOR,[tr]:s.ONE_MINUS_SRC_ALPHA,[Wc]:s.ONE_MINUS_DST_COLOR,[Gc]:s.ONE_MINUS_DST_ALPHA,[qc]:s.CONSTANT_COLOR,[Yc]:s.ONE_MINUS_CONSTANT_COLOR,[Zc]:s.CONSTANT_ALPHA,[$c]:s.ONE_MINUS_CONSTANT_ALPHA};function E(G,Ae,de,ge,Re,Ce,Ge,Qe,lt,it){if(G===Rn){v===!0&&(ie(s.BLEND),v=!1);return}if(v===!1&&(V(s.BLEND),v=!0),G!==Ic){if(G!==x||it!==T){if((p!==ni||w!==ni)&&(s.blendEquation(s.FUNC_ADD),p=ni,w=ni),it)switch(G){case Pi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cs:s.blendFunc(s.ONE,s.ONE);break;case ma:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ga:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Pi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cs:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ma:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ga:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}y=null,M=null,P=null,C=null,L.set(0,0,0),D=0,x=G,T=it}return}Re=Re||Ae,Ce=Ce||de,Ge=Ge||ge,(Ae!==p||Re!==w)&&(s.blendEquationSeparate(xe[Ae],xe[Re]),p=Ae,w=Re),(de!==y||ge!==M||Ce!==P||Ge!==C)&&(s.blendFuncSeparate(re[de],re[ge],re[Ce],re[Ge]),y=de,M=ge,P=Ce,C=Ge),(Qe.equals(L)===!1||lt!==D)&&(s.blendColor(Qe.r,Qe.g,Qe.b,lt),L.copy(Qe),D=lt),x=G,T=!1}function se(G,Ae){G.side===gt?ie(s.CULL_FACE):V(s.CULL_FACE);let de=G.side===kt;Ae&&(de=!de),W(de),G.blending===Pi&&G.transparent===!1?E(Rn):E(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),r.setFunc(G.depthFunc),r.setTest(G.depthTest),r.setMask(G.depthWrite),o.setMask(G.colorWrite);const ge=G.stencilWrite;a.setTest(ge),ge&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Se(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?V(s.SAMPLE_ALPHA_TO_COVERAGE):ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function W(G){b!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),b=G)}function le(G){G!==Pc?(V(s.CULL_FACE),G!==O&&(G===pa?s.cullFace(s.BACK):G===Lc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ie(s.CULL_FACE),O=G}function Y(G){G!==ae&&($&&s.lineWidth(G),ae=G)}function Se(G,Ae,de){G?(V(s.POLYGON_OFFSET_FILL),(ne!==Ae||fe!==de)&&(s.polygonOffset(Ae,de),ne=Ae,fe=de)):ie(s.POLYGON_OFFSET_FILL)}function Ee(G){G?V(s.SCISSOR_TEST):ie(s.SCISSOR_TEST)}function A(G){G===void 0&&(G=s.TEXTURE0+j-1),H!==G&&(s.activeTexture(G),H=G)}function _(G,Ae,de){de===void 0&&(H===null?de=s.TEXTURE0+j-1:de=H);let ge=q[de];ge===void 0&&(ge={type:void 0,texture:void 0},q[de]=ge),(ge.type!==G||ge.texture!==Ae)&&(H!==de&&(s.activeTexture(de),H=de),s.bindTexture(G,Ae||K[G]),ge.type=G,ge.texture=Ae)}function z(){const G=q[H];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function X(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function B(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ce(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(G){_e.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),_e.copy(G))}function ve(G){U.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),U.copy(G))}function Le(G,Ae){let de=c.get(Ae);de===void 0&&(de=new WeakMap,c.set(Ae,de));let ge=de.get(G);ge===void 0&&(ge=s.getUniformBlockIndex(Ae,G.name),de.set(G,ge))}function Ue(G,Ae){const ge=c.get(Ae).get(G);l.get(Ae)!==ge&&(s.uniformBlockBinding(Ae,ge,G.__bindingPointIndex),l.set(Ae,ge))}function He(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},H=null,q={},d={},u=new WeakMap,f=[],g=null,v=!1,x=null,p=null,y=null,M=null,w=null,P=null,C=null,L=new $e(0,0,0),D=0,T=!1,b=null,O=null,ae=null,ne=null,fe=null,_e.set(0,0,s.canvas.width,s.canvas.height),U.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:V,disable:ie,bindFramebuffer:be,drawBuffers:Pe,useProgram:Oe,setBlending:E,setMaterial:se,setFlipSided:W,setCullFace:le,setLineWidth:Y,setPolygonOffset:Se,setScissorTest:Ee,activeTexture:A,bindTexture:_,unbindTexture:z,compressedTexImage2D:X,compressedTexImage3D:Z,texImage2D:Ie,texImage3D:Fe,updateUBOMapping:Le,uniformBlockBinding:Ue,texStorage2D:Te,texStorage3D:Me,texSubImage2D:B,texSubImage3D:ce,compressedTexSubImage2D:pe,compressedTexSubImage3D:ye,scissor:we,viewport:ve,reset:He}}function mm(s,e,t,n,i,o,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return f?new OffscreenCanvas(A,_):lo("canvas")}function v(A,_,z){let X=1;const Z=Ee(A);if((Z.width>z||Z.height>z)&&(X=z/Math.max(Z.width,Z.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const B=Math.floor(X*Z.width),ce=Math.floor(X*Z.height);d===void 0&&(d=g(B,ce));const pe=_?g(B,ce):d;return pe.width=B,pe.height=ce,pe.getContext("2d").drawImage(A,0,0,B,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+B+"x"+ce+")."),pe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function x(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(A,_,z,X,Z=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let B=_;if(_===s.RED&&(z===s.FLOAT&&(B=s.R32F),z===s.HALF_FLOAT&&(B=s.R16F),z===s.UNSIGNED_BYTE&&(B=s.R8)),_===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(B=s.R8UI),z===s.UNSIGNED_SHORT&&(B=s.R16UI),z===s.UNSIGNED_INT&&(B=s.R32UI),z===s.BYTE&&(B=s.R8I),z===s.SHORT&&(B=s.R16I),z===s.INT&&(B=s.R32I)),_===s.RG&&(z===s.FLOAT&&(B=s.RG32F),z===s.HALF_FLOAT&&(B=s.RG16F),z===s.UNSIGNED_BYTE&&(B=s.RG8)),_===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(B=s.RG8UI),z===s.UNSIGNED_SHORT&&(B=s.RG16UI),z===s.UNSIGNED_INT&&(B=s.RG32UI),z===s.BYTE&&(B=s.RG8I),z===s.SHORT&&(B=s.RG16I),z===s.INT&&(B=s.RG32I)),_===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(B=s.RGB8UI),z===s.UNSIGNED_SHORT&&(B=s.RGB16UI),z===s.UNSIGNED_INT&&(B=s.RGB32UI),z===s.BYTE&&(B=s.RGB8I),z===s.SHORT&&(B=s.RGB16I),z===s.INT&&(B=s.RGB32I)),_===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(B=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(B=s.RGBA16UI),z===s.UNSIGNED_INT&&(B=s.RGBA32UI),z===s.BYTE&&(B=s.RGBA8I),z===s.SHORT&&(B=s.RGBA16I),z===s.INT&&(B=s.RGBA32I)),_===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(B=s.RGB9_E5),_===s.RGBA){const ce=Z?ro:rt.getTransfer(X);z===s.FLOAT&&(B=s.RGBA32F),z===s.HALF_FLOAT&&(B=s.RGBA16F),z===s.UNSIGNED_BYTE&&(B=ce===ft?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(B=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(B=s.RGB5_A1)}return(B===s.R16F||B===s.R32F||B===s.RG16F||B===s.RG32F||B===s.RGBA16F||B===s.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function w(A,_){let z;return A?_===null||_===ri||_===Fi?z=s.DEPTH24_STENCIL8:_===En?z=s.DEPTH32F_STENCIL8:_===ds&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ri||_===Fi?z=s.DEPTH_COMPONENT24:_===En?z=s.DEPTH_COMPONENT32F:_===ds&&(z=s.DEPTH_COMPONENT16),z}function P(A,_){return x(A)===!0||A.isFramebufferTexture&&A.minFilter!==hn&&A.minFilter!==mn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function C(A){const _=A.target;_.removeEventListener("dispose",C),D(_),_.isVideoTexture&&h.delete(_)}function L(A){const _=A.target;_.removeEventListener("dispose",L),b(_)}function D(A){const _=n.get(A);if(_.__webglInit===void 0)return;const z=A.source,X=u.get(z);if(X){const Z=X[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(A),Object.keys(X).length===0&&u.delete(z)}n.remove(A)}function T(A){const _=n.get(A);s.deleteTexture(_.__webglTexture);const z=A.source,X=u.get(z);delete X[_.__cacheKey],r.memory.textures--}function b(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let Z=0;Z<_.__webglFramebuffer[X].length;Z++)s.deleteFramebuffer(_.__webglFramebuffer[X][Z]);else s.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)s.deleteFramebuffer(_.__webglFramebuffer[X]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=A.textures;for(let X=0,Z=z.length;X<Z;X++){const B=n.get(z[X]);B.__webglTexture&&(s.deleteTexture(B.__webglTexture),r.memory.textures--),n.remove(z[X])}n.remove(A)}let O=0;function ae(){O=0}function ne(){const A=O;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),O+=1,A}function fe(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function j(A,_){const z=n.get(A);if(A.isVideoTexture&&Y(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const X=A.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{U(z,A,_);return}}t.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+_)}function $(A,_){const z=n.get(A);if(A.version>0&&z.__version!==A.version){U(z,A,_);return}t.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+_)}function F(A,_){const z=n.get(A);if(A.version>0&&z.__version!==A.version){U(z,A,_);return}t.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+_)}function I(A,_){const z=n.get(A);if(A.version>0&&z.__version!==A.version){k(z,A,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+_)}const H={[hs]:s.REPEAT,[At]:s.CLAMP_TO_EDGE,[dr]:s.MIRRORED_REPEAT},q={[hn]:s.NEAREST,[Qc]:s.NEAREST_MIPMAP_NEAREST,[Ts]:s.NEAREST_MIPMAP_LINEAR,[mn]:s.LINEAR,[wo]:s.LINEAR_MIPMAP_NEAREST,[si]:s.LINEAR_MIPMAP_LINEAR},J={[ih]:s.NEVER,[ch]:s.ALWAYS,[sh]:s.LESS,[Kl]:s.LEQUAL,[oh]:s.EQUAL,[lh]:s.GEQUAL,[rh]:s.GREATER,[ah]:s.NOTEQUAL};function he(A,_){if(_.type===En&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===mn||_.magFilter===wo||_.magFilter===Ts||_.magFilter===si||_.minFilter===mn||_.minFilter===wo||_.minFilter===Ts||_.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,H[_.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,H[_.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,H[_.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,q[_.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,q[_.minFilter]),_.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,J[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===hn||_.minFilter!==Ts&&_.minFilter!==si||_.type===En&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function _e(A,_){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",C));const X=_.source;let Z=u.get(X);Z===void 0&&(Z={},u.set(X,Z));const B=fe(_);if(B!==A.__cacheKey){Z[B]===void 0&&(Z[B]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,z=!0),Z[B].usedTimes++;const ce=Z[A.__cacheKey];ce!==void 0&&(Z[A.__cacheKey].usedTimes--,ce.usedTimes===0&&T(_)),A.__cacheKey=B,A.__webglTexture=Z[B].texture}return z}function U(A,_,z){let X=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=s.TEXTURE_3D);const Z=_e(A,_),B=_.source;t.bindTexture(X,A.__webglTexture,s.TEXTURE0+z);const ce=n.get(B);if(B.version!==ce.__version||Z===!0){t.activeTexture(s.TEXTURE0+z);const pe=rt.getPrimaries(rt.workingColorSpace),ye=_.colorSpace===kn?null:rt.getPrimaries(_.colorSpace),Te=_.colorSpace===kn||pe===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Me=v(_.image,!1,i.maxTextureSize);Me=Se(_,Me);const Ie=o.convert(_.format,_.colorSpace),Fe=o.convert(_.type);let we=M(_.internalFormat,Ie,Fe,_.colorSpace,_.isVideoTexture);he(X,_);let ve;const Le=_.mipmaps,Ue=_.isVideoTexture!==!0,He=ce.__version===void 0||Z===!0,G=B.dataReady,Ae=P(_,Me);if(_.isDepthTexture)we=w(_.format===Oi,_.type),He&&(Ue?t.texStorage2D(s.TEXTURE_2D,1,we,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,we,Me.width,Me.height,0,Ie,Fe,null));else if(_.isDataTexture)if(Le.length>0){Ue&&He&&t.texStorage2D(s.TEXTURE_2D,Ae,we,Le[0].width,Le[0].height);for(let de=0,ge=Le.length;de<ge;de++)ve=Le[de],Ue?G&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,ve.width,ve.height,Ie,Fe,ve.data):t.texImage2D(s.TEXTURE_2D,de,we,ve.width,ve.height,0,Ie,Fe,ve.data);_.generateMipmaps=!1}else Ue?(He&&t.texStorage2D(s.TEXTURE_2D,Ae,we,Me.width,Me.height),G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Ie,Fe,Me.data)):t.texImage2D(s.TEXTURE_2D,0,we,Me.width,Me.height,0,Ie,Fe,Me.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ue&&He&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,we,Le[0].width,Le[0].height,Me.depth);for(let de=0,ge=Le.length;de<ge;de++)if(ve=Le[de],_.format!==cn)if(Ie!==null)if(Ue){if(G)if(_.layerUpdates.size>0){const Re=Qa(ve.width,ve.height,_.format,_.type);for(const Ce of _.layerUpdates){const Ge=ve.data.subarray(Ce*Re/ve.data.BYTES_PER_ELEMENT,(Ce+1)*Re/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,Ce,ve.width,ve.height,1,Ie,Ge)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,ve.width,ve.height,Me.depth,Ie,ve.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,de,we,ve.width,ve.height,Me.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?G&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,ve.width,ve.height,Me.depth,Ie,Fe,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,de,we,ve.width,ve.height,Me.depth,0,Ie,Fe,ve.data)}else{Ue&&He&&t.texStorage2D(s.TEXTURE_2D,Ae,we,Le[0].width,Le[0].height);for(let de=0,ge=Le.length;de<ge;de++)ve=Le[de],_.format!==cn?Ie!==null?Ue?G&&t.compressedTexSubImage2D(s.TEXTURE_2D,de,0,0,ve.width,ve.height,Ie,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,de,we,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?G&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,ve.width,ve.height,Ie,Fe,ve.data):t.texImage2D(s.TEXTURE_2D,de,we,ve.width,ve.height,0,Ie,Fe,ve.data)}else if(_.isDataArrayTexture)if(Ue){if(He&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,we,Me.width,Me.height,Me.depth),G)if(_.layerUpdates.size>0){const de=Qa(Me.width,Me.height,_.format,_.type);for(const ge of _.layerUpdates){const Re=Me.data.subarray(ge*de/Me.data.BYTES_PER_ELEMENT,(ge+1)*de/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ge,Me.width,Me.height,1,Ie,Fe,Re)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ie,Fe,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,we,Me.width,Me.height,Me.depth,0,Ie,Fe,Me.data);else if(_.isData3DTexture)Ue?(He&&t.texStorage3D(s.TEXTURE_3D,Ae,we,Me.width,Me.height,Me.depth),G&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ie,Fe,Me.data)):t.texImage3D(s.TEXTURE_3D,0,we,Me.width,Me.height,Me.depth,0,Ie,Fe,Me.data);else if(_.isFramebufferTexture){if(He)if(Ue)t.texStorage2D(s.TEXTURE_2D,Ae,we,Me.width,Me.height);else{let de=Me.width,ge=Me.height;for(let Re=0;Re<Ae;Re++)t.texImage2D(s.TEXTURE_2D,Re,we,de,ge,0,Ie,Fe,null),de>>=1,ge>>=1}}else if(Le.length>0){if(Ue&&He){const de=Ee(Le[0]);t.texStorage2D(s.TEXTURE_2D,Ae,we,de.width,de.height)}for(let de=0,ge=Le.length;de<ge;de++)ve=Le[de],Ue?G&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,Ie,Fe,ve):t.texImage2D(s.TEXTURE_2D,de,we,Ie,Fe,ve);_.generateMipmaps=!1}else if(Ue){if(He){const de=Ee(Me);t.texStorage2D(s.TEXTURE_2D,Ae,we,de.width,de.height)}G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,Fe,Me)}else t.texImage2D(s.TEXTURE_2D,0,we,Ie,Fe,Me);x(_)&&p(X),ce.__version=B.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function k(A,_,z){if(_.image.length!==6)return;const X=_e(A,_),Z=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+z);const B=n.get(Z);if(Z.version!==B.__version||X===!0){t.activeTexture(s.TEXTURE0+z);const ce=rt.getPrimaries(rt.workingColorSpace),pe=_.colorSpace===kn?null:rt.getPrimaries(_.colorSpace),ye=_.colorSpace===kn||ce===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Te=_.isCompressedTexture||_.image[0].isCompressedTexture,Me=_.image[0]&&_.image[0].isDataTexture,Ie=[];for(let ge=0;ge<6;ge++)!Te&&!Me?Ie[ge]=v(_.image[ge],!0,i.maxCubemapSize):Ie[ge]=Me?_.image[ge].image:_.image[ge],Ie[ge]=Se(_,Ie[ge]);const Fe=Ie[0],we=o.convert(_.format,_.colorSpace),ve=o.convert(_.type),Le=M(_.internalFormat,we,ve,_.colorSpace),Ue=_.isVideoTexture!==!0,He=B.__version===void 0||X===!0,G=Z.dataReady;let Ae=P(_,Fe);he(s.TEXTURE_CUBE_MAP,_);let de;if(Te){Ue&&He&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,Le,Fe.width,Fe.height);for(let ge=0;ge<6;ge++){de=Ie[ge].mipmaps;for(let Re=0;Re<de.length;Re++){const Ce=de[Re];_.format!==cn?we!==null?Ue?G&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Re,0,0,Ce.width,Ce.height,we,Ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Re,Le,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Re,0,0,Ce.width,Ce.height,we,ve,Ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Re,Le,Ce.width,Ce.height,0,we,ve,Ce.data)}}}else{if(de=_.mipmaps,Ue&&He){de.length>0&&Ae++;const ge=Ee(Ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,Le,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Me){Ue?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ie[ge].width,Ie[ge].height,we,ve,Ie[ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Le,Ie[ge].width,Ie[ge].height,0,we,ve,Ie[ge].data);for(let Re=0;Re<de.length;Re++){const Ge=de[Re].image[ge].image;Ue?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Re+1,0,0,Ge.width,Ge.height,we,ve,Ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Re+1,Le,Ge.width,Ge.height,0,we,ve,Ge.data)}}else{Ue?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,we,ve,Ie[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Le,we,ve,Ie[ge]);for(let Re=0;Re<de.length;Re++){const Ce=de[Re];Ue?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Re+1,0,0,we,ve,Ce.image[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Re+1,Le,we,ve,Ce.image[ge])}}}x(_)&&p(s.TEXTURE_CUBE_MAP),B.__version=Z.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function K(A,_,z,X,Z,B){const ce=o.convert(z.format,z.colorSpace),pe=o.convert(z.type),ye=M(z.internalFormat,ce,pe,z.colorSpace),Te=n.get(_),Me=n.get(z);if(Me.__renderTarget=_,!Te.__hasExternalTextures){const Ie=Math.max(1,_.width>>B),Fe=Math.max(1,_.height>>B);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,B,ye,Ie,Fe,_.depth,0,ce,pe,null):t.texImage2D(Z,B,ye,Ie,Fe,0,ce,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),le(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,Z,Me.__webglTexture,0,W(_)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,Z,Me.__webglTexture,B),t.bindFramebuffer(s.FRAMEBUFFER,null)}function V(A,_,z){if(s.bindRenderbuffer(s.RENDERBUFFER,A),_.depthBuffer){const X=_.depthTexture,Z=X&&X.isDepthTexture?X.type:null,B=w(_.stencilBuffer,Z),ce=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=W(_);le(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,B,_.width,_.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,B,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,B,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,A)}else{const X=_.textures;for(let Z=0;Z<X.length;Z++){const B=X[Z],ce=o.convert(B.format,B.colorSpace),pe=o.convert(B.type),ye=M(B.internalFormat,ce,pe,B.colorSpace),Te=W(_);z&&le(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,ye,_.width,_.height):le(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,ye,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,ye,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ie(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(_.depthTexture);X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const Z=X.__webglTexture,B=W(_);if(_.depthTexture.format===Li)le(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,B):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(_.depthTexture.format===Oi)le(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,B):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function be(A){const _=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const X=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",Z)};X.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=X}if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ie(_.__webglFramebuffer,A)}else if(z){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=s.createRenderbuffer(),V(_.__webglDepthbuffer[X],A,!1);else{const Z=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,B=_.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,B),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,B)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),V(_.__webglDepthbuffer,A,!1);else{const X=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,Z)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(A,_,z){const X=n.get(A);_!==void 0&&K(X.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&be(A)}function Oe(A){const _=A.texture,z=n.get(A),X=n.get(_);A.addEventListener("dispose",L);const Z=A.textures,B=A.isWebGLCubeRenderTarget===!0,ce=Z.length>1;if(ce||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=_.version,r.memory.textures++),B){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let ye=0;ye<_.mipmaps.length;ye++)z.__webglFramebuffer[pe][ye]=s.createFramebuffer()}else z.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<_.mipmaps.length;pe++)z.__webglFramebuffer[pe]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(ce)for(let pe=0,ye=Z.length;pe<ye;pe++){const Te=n.get(Z[pe]);Te.__webglTexture===void 0&&(Te.__webglTexture=s.createTexture(),r.memory.textures++)}if(A.samples>0&&le(A)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pe=0;pe<Z.length;pe++){const ye=Z[pe];z.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[pe]);const Te=o.convert(ye.format,ye.colorSpace),Me=o.convert(ye.type),Ie=M(ye.internalFormat,Te,Me,ye.colorSpace,A.isXRRenderTarget===!0),Fe=W(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,Ie,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,z.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),V(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(B){t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),he(s.TEXTURE_CUBE_MAP,_);for(let pe=0;pe<6;pe++)if(_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)K(z.__webglFramebuffer[pe][ye],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye);else K(z.__webglFramebuffer[pe],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);x(_)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let pe=0,ye=Z.length;pe<ye;pe++){const Te=Z[pe],Me=n.get(Te);t.bindTexture(s.TEXTURE_2D,Me.__webglTexture),he(s.TEXTURE_2D,Te),K(z.__webglFramebuffer,A,Te,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,0),x(Te)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pe=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,X.__webglTexture),he(pe,_),_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)K(z.__webglFramebuffer[ye],A,_,s.COLOR_ATTACHMENT0,pe,ye);else K(z.__webglFramebuffer,A,_,s.COLOR_ATTACHMENT0,pe,0);x(_)&&p(pe),t.unbindTexture()}A.depthBuffer&&be(A)}function xe(A){const _=A.textures;for(let z=0,X=_.length;z<X;z++){const Z=_[z];if(x(Z)){const B=y(A),ce=n.get(Z).__webglTexture;t.bindTexture(B,ce),p(B),t.unbindTexture()}}}const re=[],E=[];function se(A){if(A.samples>0){if(le(A)===!1){const _=A.textures,z=A.width,X=A.height;let Z=s.COLOR_BUFFER_BIT;const B=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=n.get(A),pe=_.length>1;if(pe)for(let ye=0;ye<_.length;ye++)t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ye=0;ye<_.length;ye++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ce.__webglColorRenderbuffer[ye]);const Te=n.get(_[ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Te,0)}s.blitFramebuffer(0,0,z,X,0,0,z,X,Z,s.NEAREST),l===!0&&(re.length=0,E.length=0,re.push(s.COLOR_ATTACHMENT0+ye),A.depthBuffer&&A.resolveDepthBuffer===!1&&(re.push(B),E.push(B),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,E)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let ye=0;ye<_.length;ye++){t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,ce.__webglColorRenderbuffer[ye]);const Te=n.get(_[ye]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,Te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const _=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function W(A){return Math.min(i.maxSamples,A.samples)}function le(A){const _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Y(A){const _=r.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Se(A,_){const z=A.colorSpace,X=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Bi&&z!==kn&&(rt.getTransfer(z)===ft?(X!==cn||Z!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function Ee(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=ne,this.resetTextureUnits=ae,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=F,this.setTextureCube=I,this.rebindTextures=Pe,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=K,this.useMultisampledRTT=le}function gm(s,e){function t(n,i=kn){let o;const r=rt.getTransfer(i);if(n===Ln)return s.UNSIGNED_BYTE;if(n===jr)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Kr)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Gl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===kl)return s.BYTE;if(n===Hl)return s.SHORT;if(n===ds)return s.UNSIGNED_SHORT;if(n===$r)return s.INT;if(n===ri)return s.UNSIGNED_INT;if(n===En)return s.FLOAT;if(n===Cn)return s.HALF_FLOAT;if(n===Vl)return s.ALPHA;if(n===Wl)return s.RGB;if(n===cn)return s.RGBA;if(n===Xl)return s.LUMINANCE;if(n===ql)return s.LUMINANCE_ALPHA;if(n===Li)return s.DEPTH_COMPONENT;if(n===Oi)return s.DEPTH_STENCIL;if(n===Yl)return s.RED;if(n===Jr)return s.RED_INTEGER;if(n===Zl)return s.RG;if(n===Qr)return s.RG_INTEGER;if(n===ea)return s.RGBA_INTEGER;if(n===Qs||n===eo||n===to||n===no)if(r===ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Qs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===to)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===no)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Qs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===to)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===no)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ur||n===fr||n===pr||n===mr)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ur)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gr||n===xr||n===vr)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===gr||n===xr)return r===ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===vr)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_r||n===wr||n===Mr||n===yr||n===Sr||n===br||n===Tr||n===Er||n===Ar||n===Rr||n===Cr||n===Pr||n===Lr||n===Ir)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===_r)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wr)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mr)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yr)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sr)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===br)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tr)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Er)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ar)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rr)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cr)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pr)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lr)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ir)return r===ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===io||n===Dr||n===Ur)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===io)return r===ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dr)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ur)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$l||n===Nr||n===Fr||n===Or)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===io)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Nr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Or)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const xm={type:"move"};class Qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,n),p=this._getHandJoint(c,v);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const vm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_m=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ht,o=e.properties.get(i);o.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rt({vertexShader:vm,fragmentShader:_m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new m(new dt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mm extends Hi{constructor(e,t){super();const n=this;let i=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const v=new wm,x=t.getContextAttributes();let p=null,y=null;const M=[],w=[],P=new De;let C=null;const L=new Zt;L.viewport=new pt;const D=new Zt;D.viewport=new pt;const T=[L,D],b=new kd;let O=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let k=M[U];return k===void 0&&(k=new Qo,M[U]=k),k.getTargetRaySpace()},this.getControllerGrip=function(U){let k=M[U];return k===void 0&&(k=new Qo,M[U]=k),k.getGripSpace()},this.getHand=function(U){let k=M[U];return k===void 0&&(k=new Qo,M[U]=k),k.getHandSpace()};function ne(U){const k=w.indexOf(U.inputSource);if(k===-1)return;const K=M[k];K!==void 0&&(K.update(U.inputSource,U.frame,c||r),K.dispatchEvent({type:U.type,data:U.inputSource}))}function fe(){i.removeEventListener("select",ne),i.removeEventListener("selectstart",ne),i.removeEventListener("selectend",ne),i.removeEventListener("squeeze",ne),i.removeEventListener("squeezestart",ne),i.removeEventListener("squeezeend",ne),i.removeEventListener("end",fe),i.removeEventListener("inputsourceschange",j);for(let U=0;U<M.length;U++){const k=w[U];k!==null&&(w[U]=null,M[U].disconnect(k))}O=null,ae=null,v.reset(),e.setRenderTarget(p),f=null,u=null,d=null,i=null,y=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){o=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",ne),i.addEventListener("selectstart",ne),i.addEventListener("selectend",ne),i.addEventListener("squeeze",ne),i.addEventListener("squeezestart",ne),i.addEventListener("squeezeend",ne),i.addEventListener("end",fe),i.addEventListener("inputsourceschange",j),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let K=null,V=null,ie=null;x.depth&&(ie=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=x.stencil?Oi:Li,V=x.stencil?Fi:ri);const be={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:o};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(be),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new dn(u.textureWidth,u.textureHeight,{format:cn,type:Ln,depthTexture:new lc(u.textureWidth,u.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}else{const K={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new dn(f.framebufferWidth,f.framebufferHeight,{format:cn,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),_e.setContext(i),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(U){for(let k=0;k<U.removed.length;k++){const K=U.removed[k],V=w.indexOf(K);V>=0&&(w[V]=null,M[V].disconnect(K))}for(let k=0;k<U.added.length;k++){const K=U.added[k];let V=w.indexOf(K);if(V===-1){for(let be=0;be<M.length;be++)if(be>=w.length){w.push(K),V=be;break}else if(w[be]===null){w[be]=K,V=be;break}if(V===-1)break}const ie=M[V];ie&&ie.connect(K)}}const $=new S,F=new S;function I(U,k,K){$.setFromMatrixPosition(k.matrixWorld),F.setFromMatrixPosition(K.matrixWorld);const V=$.distanceTo(F),ie=k.projectionMatrix.elements,be=K.projectionMatrix.elements,Pe=ie[14]/(ie[10]-1),Oe=ie[14]/(ie[10]+1),xe=(ie[9]+1)/ie[5],re=(ie[9]-1)/ie[5],E=(ie[8]-1)/ie[0],se=(be[8]+1)/be[0],W=Pe*E,le=Pe*se,Y=V/(-E+se),Se=Y*-E;if(k.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Se),U.translateZ(Y),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),ie[10]===-1)U.projectionMatrix.copy(k.projectionMatrix),U.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const Ee=Pe+Y,A=Oe+Y,_=W-Se,z=le+(V-Se),X=xe*Oe/A*Ee,Z=re*Oe/A*Ee;U.projectionMatrix.makePerspective(_,z,X,Z,Ee,A),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function H(U,k){k===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(k.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;let k=U.near,K=U.far;v.texture!==null&&(v.depthNear>0&&(k=v.depthNear),v.depthFar>0&&(K=v.depthFar)),b.near=D.near=L.near=k,b.far=D.far=L.far=K,(O!==b.near||ae!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),O=b.near,ae=b.far),L.layers.mask=U.layers.mask|2,D.layers.mask=U.layers.mask|4,b.layers.mask=L.layers.mask|D.layers.mask;const V=U.parent,ie=b.cameras;H(b,V);for(let be=0;be<ie.length;be++)H(ie[be],V);ie.length===2?I(b,L,D):b.projectionMatrix.copy(L.projectionMatrix),q(U,b,V)};function q(U,k,K){K===null?U.matrix.copy(k.matrixWorld):(U.matrix.copy(K.matrixWorld),U.matrix.invert(),U.matrix.multiply(k.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(k.projectionMatrix),U.projectionMatrixInverse.copy(k.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=us*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(U){l=U,u!==null&&(u.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let J=null;function he(U,k){if(h=k.getViewerPose(c||r),g=k,h!==null){const K=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let V=!1;K.length!==b.cameras.length&&(b.cameras.length=0,V=!0);for(let be=0;be<K.length;be++){const Pe=K[be];let Oe=null;if(f!==null)Oe=f.getViewport(Pe);else{const re=d.getViewSubImage(u,Pe);Oe=re.viewport,be===0&&(e.setRenderTargetTextures(y,re.colorTexture,u.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(y))}let xe=T[be];xe===void 0&&(xe=new Zt,xe.layers.enable(be),xe.viewport=new pt,T[be]=xe),xe.matrix.fromArray(Pe.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Pe.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),be===0&&(b.matrix.copy(xe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),V===!0&&b.cameras.push(xe)}const ie=i.enabledFeatures;if(ie&&ie.includes("depth-sensing")){const be=d.getDepthInformation(K[0]);be&&be.isValid&&be.texture&&v.init(e,be,i.renderState)}}for(let K=0;K<M.length;K++){const V=w[K],ie=M[K];V!==null&&ie!==void 0&&ie.update(V,k,c||r)}J&&J(U,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}const _e=new vc;_e.setAnimationLoop(he),this.setAnimationLoop=function(U){J=U},this.dispose=function(){}}}const Qn=new xn,ym=new mt;function Sm(s,e){function t(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,sc(s)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function i(x,p,y,M,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(x,p):p.isMeshToonMaterial?(o(x,p),d(x,p)):p.isMeshPhongMaterial?(o(x,p),h(x,p)):p.isMeshStandardMaterial?(o(x,p),u(x,p),p.isMeshPhysicalMaterial&&f(x,p,w)):p.isMeshMatcapMaterial?(o(x,p),g(x,p)):p.isMeshDepthMaterial?o(x,p):p.isMeshDistanceMaterial?(o(x,p),v(x,p)):p.isMeshNormalMaterial?o(x,p):p.isLineBasicMaterial?(r(x,p),p.isLineDashedMaterial&&a(x,p)):p.isPointsMaterial?l(x,p,y,M):p.isSpriteMaterial?c(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,t(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===kt&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,t(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===kt&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,t(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,t(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const y=e.get(p),M=y.envMap,w=y.envMapRotation;M&&(x.envMap.value=M,Qn.copy(w),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),x.envMapRotation.value.setFromMatrix4(ym.makeRotationFromEuler(Qn)),x.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,x.aoMapTransform))}function r(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform))}function a(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,y,M){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*y,x.scale.value=M*.5,p.map&&(x.map.value=p.map,t(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function c(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function h(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function d(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function u(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function f(x,p,y){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,p){p.matcap&&(x.matcap.value=p.matcap)}function v(x,p){const y=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function bm(s,e,t,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const w=M.program;n.uniformBlockBinding(y,w)}function c(y,M){let w=i[y.id];w===void 0&&(g(y),w=h(y),i[y.id]=w,y.addEventListener("dispose",x));const P=M.program;n.updateUBOMapping(y,P);const C=e.render.frame;o[y.id]!==C&&(u(y),o[y.id]=C)}function h(y){const M=d();y.__bindingPointIndex=M;const w=s.createBuffer(),P=y.__size,C=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,P,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,w),w}function d(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const M=i[y.id],w=y.uniforms,P=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let C=0,L=w.length;C<L;C++){const D=Array.isArray(w[C])?w[C]:[w[C]];for(let T=0,b=D.length;T<b;T++){const O=D[T];if(f(O,C,T,P)===!0){const ae=O.__offset,ne=Array.isArray(O.value)?O.value:[O.value];let fe=0;for(let j=0;j<ne.length;j++){const $=ne[j],F=v($);typeof $=="number"||typeof $=="boolean"?(O.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,ae+fe,O.__data)):$.isMatrix3?(O.__data[0]=$.elements[0],O.__data[1]=$.elements[1],O.__data[2]=$.elements[2],O.__data[3]=0,O.__data[4]=$.elements[3],O.__data[5]=$.elements[4],O.__data[6]=$.elements[5],O.__data[7]=0,O.__data[8]=$.elements[6],O.__data[9]=$.elements[7],O.__data[10]=$.elements[8],O.__data[11]=0):($.toArray(O.__data,fe),fe+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,M,w,P){const C=y.value,L=M+"_"+w;if(P[L]===void 0)return typeof C=="number"||typeof C=="boolean"?P[L]=C:P[L]=C.clone(),!0;{const D=P[L];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return P[L]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(y){const M=y.uniforms;let w=0;const P=16;for(let L=0,D=M.length;L<D;L++){const T=Array.isArray(M[L])?M[L]:[M[L]];for(let b=0,O=T.length;b<O;b++){const ae=T[b],ne=Array.isArray(ae.value)?ae.value:[ae.value];for(let fe=0,j=ne.length;fe<j;fe++){const $=ne[fe],F=v($),I=w%P,H=I%F.boundary,q=I+H;w+=H,q!==0&&P-q<F.storage&&(w+=P-q),ae.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=w,w+=F.storage}}}const C=w%P;return C>0&&(w+=P-C),y.__size=w,y.__cache={},this}function v(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function x(y){const M=y.target;M.removeEventListener("dispose",x);const w=r.indexOf(M.__bindingPointIndex);r.splice(w,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete o[M.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);r=[],i={},o={}}return{bind:l,update:c,dispose:p}}class Tm{constructor(e={}){const{canvas:t=Ah(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),v=new Int32Array(4);let x=null,p=null;const y=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=Hn,this.toneMappingExposure=1;const w=this;let P=!1,C=0,L=0,D=null,T=-1,b=null;const O=new pt,ae=new pt;let ne=null;const fe=new $e(0);let j=0,$=t.width,F=t.height,I=1,H=null,q=null;const J=new pt(0,0,$,F),he=new pt(0,0,$,F);let _e=!1;const U=new ia;let k=!1,K=!1;this.transmissionResolutionScale=1;const V=new mt,ie=new mt,be=new S,Pe=new pt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function re(){return D===null?I:1}let E=n;function se(R,Q){return t.getContext(R,Q)}try{const R={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yr}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),E===null){const Q="webgl2";if(E=se(Q,R),E===null)throw se(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let W,le,Y,Se,Ee,A,_,z,X,Z,B,ce,pe,ye,Te,Me,Ie,Fe,we,ve,Le,Ue,He,G;function Ae(){W=new Up(E),W.init(),Ue=new gm(E,W),le=new Rp(E,W,e,Ue),Y=new pm(E,W),le.reverseDepthBuffer&&u&&Y.buffers.depth.setReversed(!0),Se=new Op(E),Ee=new tm,A=new mm(E,W,Y,Ee,le,Ue,Se),_=new Pp(w),z=new Dp(w),X=new Vd(E),He=new Ep(E,X),Z=new Np(E,X,Se,He),B=new zp(E,Z,X,Se),we=new Bp(E,le,A),Me=new Cp(Ee),ce=new em(w,_,z,W,le,He,Me),pe=new Sm(w,Ee),ye=new im,Te=new cm(W),Fe=new Tp(w,_,z,Y,B,f,l),Ie=new um(w,B,le),G=new bm(E,Se,le,Y),ve=new Ap(E,W,Se),Le=new Fp(E,W,Se),Se.programs=ce.programs,w.capabilities=le,w.extensions=W,w.properties=Ee,w.renderLists=ye,w.shadowMap=Ie,w.state=Y,w.info=Se}Ae();const de=new Mm(w,E);this.xr=de,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const R=W.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=W.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(R){R!==void 0&&(I=R,this.setSize($,F,!1))},this.getSize=function(R){return R.set($,F)},this.setSize=function(R,Q,ue=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=R,F=Q,t.width=Math.floor(R*I),t.height=Math.floor(Q*I),ue===!0&&(t.style.width=R+"px",t.style.height=Q+"px"),this.setViewport(0,0,R,Q)},this.getDrawingBufferSize=function(R){return R.set($*I,F*I).floor()},this.setDrawingBufferSize=function(R,Q,ue){$=R,F=Q,I=ue,t.width=Math.floor(R*ue),t.height=Math.floor(Q*ue),this.setViewport(0,0,R,Q)},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(J)},this.setViewport=function(R,Q,ue,me){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,Q,ue,me),Y.viewport(O.copy(J).multiplyScalar(I).round())},this.getScissor=function(R){return R.copy(he)},this.setScissor=function(R,Q,ue,me){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,Q,ue,me),Y.scissor(ae.copy(he).multiplyScalar(I).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(R){Y.setScissorTest(_e=R)},this.setOpaqueSort=function(R){H=R},this.setTransparentSort=function(R){q=R},this.getClearColor=function(R){return R.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(R=!0,Q=!0,ue=!0){let me=0;if(R){let te=!1;if(D!==null){const Ne=D.texture.format;te=Ne===ea||Ne===Qr||Ne===Jr}if(te){const Ne=D.texture.type,ke=Ne===Ln||Ne===ri||Ne===ds||Ne===Fi||Ne===jr||Ne===Kr,Ve=Fe.getClearColor(),We=Fe.getClearAlpha(),je=Ve.r,Je=Ve.g,qe=Ve.b;ke?(g[0]=je,g[1]=Je,g[2]=qe,g[3]=We,E.clearBufferuiv(E.COLOR,0,g)):(v[0]=je,v[1]=Je,v[2]=qe,v[3]=We,E.clearBufferiv(E.COLOR,0,v))}else me|=E.COLOR_BUFFER_BIT}Q&&(me|=E.DEPTH_BUFFER_BIT),ue&&(me|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(me)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Fe.dispose(),ye.dispose(),Te.dispose(),Ee.dispose(),_.dispose(),z.dispose(),B.dispose(),He.dispose(),G.dispose(),ce.dispose(),de.dispose(),de.removeEventListener("sessionstart",hi),de.removeEventListener("sessionend",Zi),Ut.stop()};function ge(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const R=Se.autoReset,Q=Ie.enabled,ue=Ie.autoUpdate,me=Ie.needsUpdate,te=Ie.type;Ae(),Se.autoReset=R,Ie.enabled=Q,Ie.autoUpdate=ue,Ie.needsUpdate=me,Ie.type=te}function Ce(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ge(R){const Q=R.target;Q.removeEventListener("dispose",Ge),Qe(Q)}function Qe(R){lt(R),Ee.remove(R)}function lt(R){const Q=Ee.get(R).programs;Q!==void 0&&(Q.forEach(function(ue){ce.releaseProgram(ue)}),R.isShaderMaterial&&ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,Q,ue,me,te,Ne){Q===null&&(Q=Oe);const ke=te.isMesh&&te.matrixWorld.determinant()<0,Ve=vo(R,Q,ue,me,te);Y.setMaterial(me,ke);let We=ue.index,je=1;if(me.wireframe===!0){if(We=Z.getWireframeAttribute(ue),We===void 0)return;je=2}const Je=ue.drawRange,qe=ue.attributes.position;let ot=Je.start*je,ct=(Je.start+Je.count)*je;Ne!==null&&(ot=Math.max(ot,Ne.start*je),ct=Math.min(ct,(Ne.start+Ne.count)*je)),We!==null?(ot=Math.max(ot,0),ct=Math.min(ct,We.count)):qe!=null&&(ot=Math.max(ot,0),ct=Math.min(ct,qe.count));const bt=ct-ot;if(bt<0||bt===1/0)return;He.setup(te,me,Ve,ue,We);let wt,at=ve;if(We!==null&&(wt=X.get(We),at=Le,at.setIndex(wt)),te.isMesh)me.wireframe===!0?(Y.setLineWidth(me.wireframeLinewidth*re()),at.setMode(E.LINES)):at.setMode(E.TRIANGLES);else if(te.isLine){let Ye=me.linewidth;Ye===void 0&&(Ye=1),Y.setLineWidth(Ye*re()),te.isLineSegments?at.setMode(E.LINES):te.isLineLoop?at.setMode(E.LINE_LOOP):at.setMode(E.LINE_STRIP)}else te.isPoints?at.setMode(E.POINTS):te.isSprite&&at.setMode(E.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)at.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(W.get("WEBGL_multi_draw"))at.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Ye=te._multiDrawStarts,Dt=te._multiDrawCounts,ht=te._multiDrawCount,nn=We?X.get(We).bytesPerElement:1,di=Ee.get(me).currentProgram.getUniforms();for(let Wt=0;Wt<ht;Wt++)di.setValue(E,"_gl_DrawID",Wt),at.render(Ye[Wt]/nn,Dt[Wt])}else if(te.isInstancedMesh)at.renderInstances(ot,bt,te.count);else if(ue.isInstancedBufferGeometry){const Ye=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Dt=Math.min(ue.instanceCount,Ye);at.renderInstances(ot,bt,Dt)}else at.render(ot,bt)};function it(R,Q,ue){R.transparent===!0&&R.side===gt&&R.forceSinglePass===!1?(R.side=kt,R.needsUpdate=!0,In(R,Q,ue),R.side=Wn,R.needsUpdate=!0,In(R,Q,ue),R.side=gt):In(R,Q,ue)}this.compile=function(R,Q,ue=null){ue===null&&(ue=R),p=Te.get(ue),p.init(Q),M.push(p),ue.traverseVisible(function(te){te.isLight&&te.layers.test(Q.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),R!==ue&&R.traverseVisible(function(te){te.isLight&&te.layers.test(Q.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),p.setupLights();const me=new Set;return R.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ne=te.material;if(Ne)if(Array.isArray(Ne))for(let ke=0;ke<Ne.length;ke++){const Ve=Ne[ke];it(Ve,ue,te),me.add(Ve)}else it(Ne,ue,te),me.add(Ne)}),M.pop(),p=null,me},this.compileAsync=function(R,Q,ue=null){const me=this.compile(R,Q,ue);return new Promise(te=>{function Ne(){if(me.forEach(function(ke){Ee.get(ke).currentProgram.isReady()&&me.delete(ke)}),me.size===0){te(R);return}setTimeout(Ne,10)}W.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let St=null;function $t(R){St&&St(R)}function hi(){Ut.stop()}function Zi(){Ut.start()}const Ut=new vc;Ut.setAnimationLoop($t),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(R){St=R,de.setAnimationLoop(R),R===null?Ut.stop():Ut.start()},de.addEventListener("sessionstart",hi),de.addEventListener("sessionend",Zi),this.render=function(R,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(Q),Q=de.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,Q,D),p=Te.get(R,M.length),p.init(Q),M.push(p),ie.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),U.setFromProjectionMatrix(ie),K=this.localClippingEnabled,k=Me.init(this.clippingPlanes,K),x=ye.get(R,y.length),x.init(),y.push(x),de.enabled===!0&&de.isPresenting===!0){const Ne=w.xr.getDepthSensingMesh();Ne!==null&&Vt(Ne,Q,-1/0,w.sortObjects)}Vt(R,Q,0,w.sortObjects),x.finish(),w.sortObjects===!0&&x.sort(H,q),xe=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,xe&&Fe.addToRenderList(x,R),this.info.render.frame++,k===!0&&Me.beginShadows();const ue=p.state.shadowsArray;Ie.render(ue,R,Q),k===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const me=x.opaque,te=x.transmissive;if(p.setupLights(),Q.isArrayCamera){const Ne=Q.cameras;if(te.length>0)for(let ke=0,Ve=Ne.length;ke<Ve;ke++){const We=Ne[ke];$i(me,te,R,We)}xe&&Fe.render(R);for(let ke=0,Ve=Ne.length;ke<Ve;ke++){const We=Ne[ke];_n(x,R,We,We.viewport)}}else te.length>0&&$i(me,te,R,Q),xe&&Fe.render(R),_n(x,R,Q);D!==null&&L===0&&(A.updateMultisampleRenderTarget(D),A.updateRenderTargetMipmap(D)),R.isScene===!0&&R.onAfterRender(w,R,Q),He.resetDefaultState(),T=-1,b=null,M.pop(),M.length>0?(p=M[M.length-1],k===!0&&Me.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?x=y[y.length-1]:x=null};function Vt(R,Q,ue,me){if(R.visible===!1)return;if(R.layers.test(Q.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Q);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||U.intersectsSprite(R)){me&&Pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ie);const ke=B.update(R),Ve=R.material;Ve.visible&&x.push(R,ke,Ve,ue,Pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||U.intersectsObject(R))){const ke=B.update(R),Ve=R.material;if(me&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Pe.copy(R.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Pe.copy(ke.boundingSphere.center)),Pe.applyMatrix4(R.matrixWorld).applyMatrix4(ie)),Array.isArray(Ve)){const We=ke.groups;for(let je=0,Je=We.length;je<Je;je++){const qe=We[je],ot=Ve[qe.materialIndex];ot&&ot.visible&&x.push(R,ke,ot,ue,Pe.z,qe)}}else Ve.visible&&x.push(R,ke,Ve,ue,Pe.z,null)}}const Ne=R.children;for(let ke=0,Ve=Ne.length;ke<Ve;ke++)Vt(Ne[ke],Q,ue,me)}function _n(R,Q,ue,me){const te=R.opaque,Ne=R.transmissive,ke=R.transparent;p.setupLightsView(ue),k===!0&&Me.setGlobalState(w.clippingPlanes,ue),me&&Y.viewport(O.copy(me)),te.length>0&&qn(te,Q,ue),Ne.length>0&&qn(Ne,Q,ue),ke.length>0&&qn(ke,Q,ue),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function $i(R,Q,ue,me){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[me.id]===void 0&&(p.state.transmissionRenderTarget[me.id]=new dn(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float")?Cn:Ln,minFilter:si,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const Ne=p.state.transmissionRenderTarget[me.id],ke=me.viewport||O;Ne.setSize(ke.z*w.transmissionResolutionScale,ke.w*w.transmissionResolutionScale);const Ve=w.getRenderTarget();w.setRenderTarget(Ne),w.getClearColor(fe),j=w.getClearAlpha(),j<1&&w.setClearColor(16777215,.5),w.clear(),xe&&Fe.render(ue);const We=w.toneMapping;w.toneMapping=Hn;const je=me.viewport;if(me.viewport!==void 0&&(me.viewport=void 0),p.setupLightsView(me),k===!0&&Me.setGlobalState(w.clippingPlanes,me),qn(R,ue,me),A.updateMultisampleRenderTarget(Ne),A.updateRenderTargetMipmap(Ne),W.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let qe=0,ot=Q.length;qe<ot;qe++){const ct=Q[qe],bt=ct.object,wt=ct.geometry,at=ct.material,Ye=ct.group;if(at.side===gt&&bt.layers.test(me.layers)){const Dt=at.side;at.side=kt,at.needsUpdate=!0,ys(bt,ue,me,wt,at,Ye),at.side=Dt,at.needsUpdate=!0,Je=!0}}Je===!0&&(A.updateMultisampleRenderTarget(Ne),A.updateRenderTargetMipmap(Ne))}w.setRenderTarget(Ve),w.setClearColor(fe,j),je!==void 0&&(me.viewport=je),w.toneMapping=We}function qn(R,Q,ue){const me=Q.isScene===!0?Q.overrideMaterial:null;for(let te=0,Ne=R.length;te<Ne;te++){const ke=R[te],Ve=ke.object,We=ke.geometry,je=me===null?ke.material:me,Je=ke.group;Ve.layers.test(ue.layers)&&ys(Ve,Q,ue,We,je,Je)}}function ys(R,Q,ue,me,te,Ne){R.onBeforeRender(w,Q,ue,me,te,Ne),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),te.onBeforeRender(w,Q,ue,me,R,Ne),te.transparent===!0&&te.side===gt&&te.forceSinglePass===!1?(te.side=kt,te.needsUpdate=!0,w.renderBufferDirect(ue,Q,me,te,R,Ne),te.side=Wn,te.needsUpdate=!0,w.renderBufferDirect(ue,Q,me,te,R,Ne),te.side=gt):w.renderBufferDirect(ue,Q,me,te,R,Ne),R.onAfterRender(w,Q,ue,me,te,Ne)}function In(R,Q,ue){Q.isScene!==!0&&(Q=Oe);const me=Ee.get(R),te=p.state.lights,Ne=p.state.shadowsArray,ke=te.state.version,Ve=ce.getParameters(R,te.state,Ne,Q,ue),We=ce.getProgramCacheKey(Ve);let je=me.programs;me.environment=R.isMeshStandardMaterial?Q.environment:null,me.fog=Q.fog,me.envMap=(R.isMeshStandardMaterial?z:_).get(R.envMap||me.environment),me.envMapRotation=me.environment!==null&&R.envMap===null?Q.environmentRotation:R.envMapRotation,je===void 0&&(R.addEventListener("dispose",Ge),je=new Map,me.programs=je);let Je=je.get(We);if(Je!==void 0){if(me.currentProgram===Je&&me.lightsStateVersion===ke)return Ss(R,Ve),Je}else Ve.uniforms=ce.getUniforms(R),R.onBeforeCompile(Ve,w),Je=ce.acquireProgram(Ve,We),je.set(We,Je),me.uniforms=Ve.uniforms;const qe=me.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=Me.uniform),Ss(R,Ve),me.needsLights=Ec(R),me.lightsStateVersion=ke,me.needsLights&&(qe.ambientLightColor.value=te.state.ambient,qe.lightProbe.value=te.state.probe,qe.directionalLights.value=te.state.directional,qe.directionalLightShadows.value=te.state.directionalShadow,qe.spotLights.value=te.state.spot,qe.spotLightShadows.value=te.state.spotShadow,qe.rectAreaLights.value=te.state.rectArea,qe.ltc_1.value=te.state.rectAreaLTC1,qe.ltc_2.value=te.state.rectAreaLTC2,qe.pointLights.value=te.state.point,qe.pointLightShadows.value=te.state.pointShadow,qe.hemisphereLights.value=te.state.hemi,qe.directionalShadowMap.value=te.state.directionalShadowMap,qe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,qe.spotShadowMap.value=te.state.spotShadowMap,qe.spotLightMatrix.value=te.state.spotLightMatrix,qe.spotLightMap.value=te.state.spotLightMap,qe.pointShadowMap.value=te.state.pointShadowMap,qe.pointShadowMatrix.value=te.state.pointShadowMatrix),me.currentProgram=Je,me.uniformsList=null,Je}function Dn(R){if(R.uniformsList===null){const Q=R.currentProgram.getUniforms();R.uniformsList=so.seqWithValue(Q.seq,R.uniforms)}return R.uniformsList}function Ss(R,Q){const ue=Ee.get(R);ue.outputColorSpace=Q.outputColorSpace,ue.batching=Q.batching,ue.batchingColor=Q.batchingColor,ue.instancing=Q.instancing,ue.instancingColor=Q.instancingColor,ue.instancingMorph=Q.instancingMorph,ue.skinning=Q.skinning,ue.morphTargets=Q.morphTargets,ue.morphNormals=Q.morphNormals,ue.morphColors=Q.morphColors,ue.morphTargetsCount=Q.morphTargetsCount,ue.numClippingPlanes=Q.numClippingPlanes,ue.numIntersection=Q.numClipIntersection,ue.vertexAlphas=Q.vertexAlphas,ue.vertexTangents=Q.vertexTangents,ue.toneMapping=Q.toneMapping}function vo(R,Q,ue,me,te){Q.isScene!==!0&&(Q=Oe),A.resetTextureUnits();const Ne=Q.fog,ke=me.isMeshStandardMaterial?Q.environment:null,Ve=D===null?w.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Bi,We=(me.isMeshStandardMaterial?z:_).get(me.envMap||ke),je=me.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,Je=!!ue.attributes.tangent&&(!!me.normalMap||me.anisotropy>0),qe=!!ue.morphAttributes.position,ot=!!ue.morphAttributes.normal,ct=!!ue.morphAttributes.color;let bt=Hn;me.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(bt=w.toneMapping);const wt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,at=wt!==void 0?wt.length:0,Ye=Ee.get(me),Dt=p.state.lights;if(k===!0&&(K===!0||R!==b)){const Ot=R===b&&me.id===T;Me.setState(me,R,Ot)}let ht=!1;me.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Dt.state.version||Ye.outputColorSpace!==Ve||te.isBatchedMesh&&Ye.batching===!1||!te.isBatchedMesh&&Ye.batching===!0||te.isBatchedMesh&&Ye.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Ye.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Ye.instancing===!1||!te.isInstancedMesh&&Ye.instancing===!0||te.isSkinnedMesh&&Ye.skinning===!1||!te.isSkinnedMesh&&Ye.skinning===!0||te.isInstancedMesh&&Ye.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ye.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ye.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ye.instancingMorph===!1&&te.morphTexture!==null||Ye.envMap!==We||me.fog===!0&&Ye.fog!==Ne||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==je||Ye.vertexTangents!==Je||Ye.morphTargets!==qe||Ye.morphNormals!==ot||Ye.morphColors!==ct||Ye.toneMapping!==bt||Ye.morphTargetsCount!==at)&&(ht=!0):(ht=!0,Ye.__version=me.version);let nn=Ye.currentProgram;ht===!0&&(nn=In(me,Q,te));let di=!1,Wt=!1,ji=!1;const xt=nn.getUniforms(),jt=Ye.uniforms;if(Y.useProgram(nn.program)&&(di=!0,Wt=!0,ji=!0),me.id!==T&&(T=me.id,Wt=!0),di||b!==R){Y.buffers.depth.getReversed()?(V.copy(R.projectionMatrix),Ch(V),Ph(V),xt.setValue(E,"projectionMatrix",V)):xt.setValue(E,"projectionMatrix",R.projectionMatrix),xt.setValue(E,"viewMatrix",R.matrixWorldInverse);const Gt=xt.map.cameraPosition;Gt!==void 0&&Gt.setValue(E,be.setFromMatrixPosition(R.matrixWorld)),le.logarithmicDepthBuffer&&xt.setValue(E,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(me.isMeshPhongMaterial||me.isMeshToonMaterial||me.isMeshLambertMaterial||me.isMeshBasicMaterial||me.isMeshStandardMaterial||me.isShaderMaterial)&&xt.setValue(E,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Wt=!0,ji=!0)}if(te.isSkinnedMesh){xt.setOptional(E,te,"bindMatrix"),xt.setOptional(E,te,"bindMatrixInverse");const Ot=te.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),xt.setValue(E,"boneTexture",Ot.boneTexture,A))}te.isBatchedMesh&&(xt.setOptional(E,te,"batchingTexture"),xt.setValue(E,"batchingTexture",te._matricesTexture,A),xt.setOptional(E,te,"batchingIdTexture"),xt.setValue(E,"batchingIdTexture",te._indirectTexture,A),xt.setOptional(E,te,"batchingColorTexture"),te._colorsTexture!==null&&xt.setValue(E,"batchingColorTexture",te._colorsTexture,A));const Kt=ue.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&we.update(te,ue,nn),(Wt||Ye.receiveShadow!==te.receiveShadow)&&(Ye.receiveShadow=te.receiveShadow,xt.setValue(E,"receiveShadow",te.receiveShadow)),me.isMeshGouraudMaterial&&me.envMap!==null&&(jt.envMap.value=We,jt.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),me.isMeshStandardMaterial&&me.envMap===null&&Q.environment!==null&&(jt.envMapIntensity.value=Q.environmentIntensity),Wt&&(xt.setValue(E,"toneMappingExposure",w.toneMappingExposure),Ye.needsLights&&bs(jt,ji),Ne&&me.fog===!0&&pe.refreshFogUniforms(jt,Ne),pe.refreshMaterialUniforms(jt,me,I,F,p.state.transmissionRenderTarget[R.id]),so.upload(E,Dn(Ye),jt,A)),me.isShaderMaterial&&me.uniformsNeedUpdate===!0&&(so.upload(E,Dn(Ye),jt,A),me.uniformsNeedUpdate=!1),me.isSpriteMaterial&&xt.setValue(E,"center",te.center),xt.setValue(E,"modelViewMatrix",te.modelViewMatrix),xt.setValue(E,"normalMatrix",te.normalMatrix),xt.setValue(E,"modelMatrix",te.matrixWorld),me.isShaderMaterial||me.isRawShaderMaterial){const Ot=me.uniformsGroups;for(let Gt=0,_o=Ot.length;Gt<_o;Gt++){const Yn=Ot[Gt];G.update(Yn,nn),G.bind(Yn,nn)}}return nn}function bs(R,Q){R.ambientLightColor.needsUpdate=Q,R.lightProbe.needsUpdate=Q,R.directionalLights.needsUpdate=Q,R.directionalLightShadows.needsUpdate=Q,R.pointLights.needsUpdate=Q,R.pointLightShadows.needsUpdate=Q,R.spotLights.needsUpdate=Q,R.spotLightShadows.needsUpdate=Q,R.rectAreaLights.needsUpdate=Q,R.hemisphereLights.needsUpdate=Q}function Ec(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(R,Q,ue){Ee.get(R.texture).__webglTexture=Q,Ee.get(R.depthTexture).__webglTexture=ue;const me=Ee.get(R);me.__hasExternalTextures=!0,me.__autoAllocateDepthBuffer=ue===void 0,me.__autoAllocateDepthBuffer||W.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),me.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Q){const ue=Ee.get(R);ue.__webglFramebuffer=Q,ue.__useDefaultFramebuffer=Q===void 0};const Ac=E.createFramebuffer();this.setRenderTarget=function(R,Q=0,ue=0){D=R,C=Q,L=ue;let me=!0,te=null,Ne=!1,ke=!1;if(R){const We=Ee.get(R);if(We.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(E.FRAMEBUFFER,null),me=!1;else if(We.__webglFramebuffer===void 0)A.setupRenderTarget(R);else if(We.__hasExternalTextures)A.rebindTextures(R,Ee.get(R.texture).__webglTexture,Ee.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const qe=R.depthTexture;if(We.__boundDepthTexture!==qe){if(qe!==null&&Ee.has(qe)&&(R.width!==qe.image.width||R.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(R)}}const je=R.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(ke=!0);const Je=Ee.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Je[Q])?te=Je[Q][ue]:te=Je[Q],Ne=!0):R.samples>0&&A.useMultisampledRTT(R)===!1?te=Ee.get(R).__webglMultisampledFramebuffer:Array.isArray(Je)?te=Je[ue]:te=Je,O.copy(R.viewport),ae.copy(R.scissor),ne=R.scissorTest}else O.copy(J).multiplyScalar(I).floor(),ae.copy(he).multiplyScalar(I).floor(),ne=_e;if(ue!==0&&(te=Ac),Y.bindFramebuffer(E.FRAMEBUFFER,te)&&me&&Y.drawBuffers(R,te),Y.viewport(O),Y.scissor(ae),Y.setScissorTest(ne),Ne){const We=Ee.get(R.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+Q,We.__webglTexture,ue)}else if(ke){const We=Ee.get(R.texture),je=Q;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,We.__webglTexture,ue,je)}else if(R!==null&&ue!==0){const We=Ee.get(R.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,We.__webglTexture,ue)}T=-1},this.readRenderTargetPixels=function(R,Q,ue,me,te,Ne,ke){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(Ve=Ve[ke]),Ve){Y.bindFramebuffer(E.FRAMEBUFFER,Ve);try{const We=R.texture,je=We.format,Je=We.type;if(!le.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=R.width-me&&ue>=0&&ue<=R.height-te&&E.readPixels(Q,ue,me,te,Ue.convert(je),Ue.convert(Je),Ne)}finally{const We=D!==null?Ee.get(D).__webglFramebuffer:null;Y.bindFramebuffer(E.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(R,Q,ue,me,te,Ne,ke){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Ee.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(Ve=Ve[ke]),Ve){const We=R.texture,je=We.format,Je=We.type;if(!le.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Q>=0&&Q<=R.width-me&&ue>=0&&ue<=R.height-te){Y.bindFramebuffer(E.FRAMEBUFFER,Ve);const qe=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,qe),E.bufferData(E.PIXEL_PACK_BUFFER,Ne.byteLength,E.STREAM_READ),E.readPixels(Q,ue,me,te,Ue.convert(je),Ue.convert(Je),0);const ot=D!==null?Ee.get(D).__webglFramebuffer:null;Y.bindFramebuffer(E.FRAMEBUFFER,ot);const ct=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Rh(E,ct,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,qe),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Ne),E.deleteBuffer(qe),E.deleteSync(ct),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Q=null,ue=0){R.isTexture!==!0&&(Ai("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Q=arguments[0]||null,R=arguments[1]);const me=Math.pow(2,-ue),te=Math.floor(R.image.width*me),Ne=Math.floor(R.image.height*me),ke=Q!==null?Q.x:0,Ve=Q!==null?Q.y:0;A.setTexture2D(R,0),E.copyTexSubImage2D(E.TEXTURE_2D,ue,0,0,ke,Ve,te,Ne),Y.unbindTexture()};const Rc=E.createFramebuffer(),Cc=E.createFramebuffer();this.copyTextureToTexture=function(R,Q,ue=null,me=null,te=0,Ne=null){R.isTexture!==!0&&(Ai("WebGLRenderer: copyTextureToTexture function signature has changed."),me=arguments[0]||null,R=arguments[1],Q=arguments[2],Ne=arguments[3]||0,ue=null),Ne===null&&(te!==0?(Ai("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=te,te=0):Ne=0);let ke,Ve,We,je,Je,qe,ot,ct,bt;const wt=R.isCompressedTexture?R.mipmaps[Ne]:R.image;if(ue!==null)ke=ue.max.x-ue.min.x,Ve=ue.max.y-ue.min.y,We=ue.isBox3?ue.max.z-ue.min.z:1,je=ue.min.x,Je=ue.min.y,qe=ue.isBox3?ue.min.z:0;else{const Kt=Math.pow(2,-te);ke=Math.floor(wt.width*Kt),Ve=Math.floor(wt.height*Kt),R.isDataArrayTexture?We=wt.depth:R.isData3DTexture?We=Math.floor(wt.depth*Kt):We=1,je=0,Je=0,qe=0}me!==null?(ot=me.x,ct=me.y,bt=me.z):(ot=0,ct=0,bt=0);const at=Ue.convert(Q.format),Ye=Ue.convert(Q.type);let Dt;Q.isData3DTexture?(A.setTexture3D(Q,0),Dt=E.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(A.setTexture2DArray(Q,0),Dt=E.TEXTURE_2D_ARRAY):(A.setTexture2D(Q,0),Dt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,Q.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,Q.unpackAlignment);const ht=E.getParameter(E.UNPACK_ROW_LENGTH),nn=E.getParameter(E.UNPACK_IMAGE_HEIGHT),di=E.getParameter(E.UNPACK_SKIP_PIXELS),Wt=E.getParameter(E.UNPACK_SKIP_ROWS),ji=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,wt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,wt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,je),E.pixelStorei(E.UNPACK_SKIP_ROWS,Je),E.pixelStorei(E.UNPACK_SKIP_IMAGES,qe);const xt=R.isDataArrayTexture||R.isData3DTexture,jt=Q.isDataArrayTexture||Q.isData3DTexture;if(R.isDepthTexture){const Kt=Ee.get(R),Ot=Ee.get(Q),Gt=Ee.get(Kt.__renderTarget),_o=Ee.get(Ot.__renderTarget);Y.bindFramebuffer(E.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Y.bindFramebuffer(E.DRAW_FRAMEBUFFER,_o.__webglFramebuffer);for(let Yn=0;Yn<We;Yn++)xt&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ee.get(R).__webglTexture,te,qe+Yn),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ee.get(Q).__webglTexture,Ne,bt+Yn)),E.blitFramebuffer(je,Je,ke,Ve,ot,ct,ke,Ve,E.DEPTH_BUFFER_BIT,E.NEAREST);Y.bindFramebuffer(E.READ_FRAMEBUFFER,null),Y.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(te!==0||R.isRenderTargetTexture||Ee.has(R)){const Kt=Ee.get(R),Ot=Ee.get(Q);Y.bindFramebuffer(E.READ_FRAMEBUFFER,Rc),Y.bindFramebuffer(E.DRAW_FRAMEBUFFER,Cc);for(let Gt=0;Gt<We;Gt++)xt?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Kt.__webglTexture,te,qe+Gt):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Kt.__webglTexture,te),jt?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ot.__webglTexture,Ne,bt+Gt):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ot.__webglTexture,Ne),te!==0?E.blitFramebuffer(je,Je,ke,Ve,ot,ct,ke,Ve,E.COLOR_BUFFER_BIT,E.NEAREST):jt?E.copyTexSubImage3D(Dt,Ne,ot,ct,bt+Gt,je,Je,ke,Ve):E.copyTexSubImage2D(Dt,Ne,ot,ct,je,Je,ke,Ve);Y.bindFramebuffer(E.READ_FRAMEBUFFER,null),Y.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else jt?R.isDataTexture||R.isData3DTexture?E.texSubImage3D(Dt,Ne,ot,ct,bt,ke,Ve,We,at,Ye,wt.data):Q.isCompressedArrayTexture?E.compressedTexSubImage3D(Dt,Ne,ot,ct,bt,ke,Ve,We,at,wt.data):E.texSubImage3D(Dt,Ne,ot,ct,bt,ke,Ve,We,at,Ye,wt):R.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,Ne,ot,ct,ke,Ve,at,Ye,wt.data):R.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,Ne,ot,ct,wt.width,wt.height,at,wt.data):E.texSubImage2D(E.TEXTURE_2D,Ne,ot,ct,ke,Ve,at,Ye,wt);E.pixelStorei(E.UNPACK_ROW_LENGTH,ht),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,nn),E.pixelStorei(E.UNPACK_SKIP_PIXELS,di),E.pixelStorei(E.UNPACK_SKIP_ROWS,Wt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,ji),Ne===0&&Q.generateMipmaps&&E.generateMipmap(Dt),Y.unbindTexture()},this.copyTextureToTexture3D=function(R,Q,ue=null,me=null,te=0){return R.isTexture!==!0&&(Ai("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ue=arguments[0]||null,me=arguments[1]||null,R=arguments[2],Q=arguments[3],te=arguments[4]||0),Ai('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Q,ue,me,te)},this.initRenderTarget=function(R){Ee.get(R).__webglFramebuffer===void 0&&A.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),Y.unbindTexture()},this.resetState=function(){C=0,L=0,D=null,Y.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const Sc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Wi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Em=new ha(-1,1,1,-1,0,1);class Am extends Et{constructor(){super(),this.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ut([0,2,0,0,2,0],2))}}const Rm=new Am;class ua{constructor(e){this._mesh=new m(Rm,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Em)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Cm extends Wi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Rt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fs.clone(e.uniforms),this.material=new Rt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ua(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class bl extends Wi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),o.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(i.EQUAL,1,4294967295),o.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),o.buffers.stencil.setLocked(!0)}}class Pm extends Wi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Lm{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new De);this._width=n.width,this._height=n.height,t=new dn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Cn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cm(Sc),this.copyPass.material.blending=Rn,this.clock=new xc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,o=this.passes.length;i<o;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}bl!==void 0&&(r instanceof bl?n=!0:r instanceof Pm&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new De);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Im extends Wi{constructor(e,t,n=null,i=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new $e}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=i}}const Dm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new $e(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ki extends Wi{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new De(e.x,e.y):new De(256,256),this.clearColor=new $e(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new dn(o,r,{type:Cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new dn(o,r,{type:Cn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new dn(o,r,{type:Cn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),r=Math.round(r/2)}const a=Dm;this.highPassUniforms=fs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new De(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Sc;this.copyUniforms=fs.clone(h.uniforms),this.blendMaterial=new Rt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:cs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new $e,this.oldClearAlpha=1,this.basic=new st,this.fsQuad=new ua(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,i),this.renderTargetsVertical[o].setSize(n,i),this.separableBlurMaterials[o].uniforms.invSize.value=new De(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,o){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ki.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ki.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Rt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new De(.5,.5)},direction:{value:new De(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Rt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ki.BlurDirectionX=new De(1,0);ki.BlurDirectionY=new De(0,1);const Um={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Nm extends Wi{constructor(){super();const e=Um;this.uniforms=fs.clone(e.uniforms),this.material=new Nd({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ua(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rt.getTransfer(this._outputColorSpace)===ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ul?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Nl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Fl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Zr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ol?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Bl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Tl{constructor(e={minX:-60,maxX:60,minZ:-60,maxZ:60}){this.boxes=[],this.walkables=[],this.bounds=e,this.heightFn=()=>0}setHeightFunction(e){this.heightFn=e}addBox(e,t,n,i,o,r,a="solid"){const l=i*.5,c=o*.5,h=r*.5;this.boxes.push({minX:e-l,maxX:e+l,minY:t-c,maxY:t+c,minZ:n-h,maxZ:n+h,tag:a})}addBoxMinMax(e,t,n,i,o,r,a="solid"){this.boxes.push({minX:e,minY:t,minZ:n,maxX:i,maxY:o,maxZ:r,tag:a})}addWalkable(e,t,n,i,o){this.walkables.push({minX:e-n*.5,maxX:e+n*.5,minZ:t-i*.5,maxZ:t+i*.5,topY:o})}getFloorHeight(e,t,n=0){let i=this.heightFn(e,t);for(const o of this.walkables)e>=o.minX&&e<=o.maxX&&t>=o.minZ&&t<=o.maxZ&&n>=o.topY-.65&&(i=Math.max(i,o.topY));return i}resolveHorizontal(e,t,n,i=1.75){e.x=Math.max(this.bounds.minX+t,Math.min(this.bounds.maxX-t,e.x)),e.z=Math.max(this.bounds.minZ+t,Math.min(this.bounds.maxZ-t,e.z));for(let o=0;o<2;o++)for(const r of this.boxes){if(n+i<=r.minY+.05||n>=r.maxY-.15)continue;const a=Math.max(r.minX,Math.min(e.x,r.maxX)),l=Math.max(r.minZ,Math.min(e.z,r.maxZ)),c=e.x-a,h=e.z-l,d=c*c+h*h;if(d<t*t)if(d>1e-5){const u=Math.sqrt(d),f=t-u;e.x+=c/u*f,e.z+=h/u*f}else{const u=Math.abs(e.x-r.minX),f=Math.abs(r.maxX-e.x),g=Math.abs(e.z-r.minZ),v=Math.abs(r.maxZ-e.z),x=Math.min(u,f,g,v);x===u?e.x=r.minX-t:x===f?e.x=r.maxX+t:x===g?e.z=r.minZ-t:e.z=r.maxZ+t}}}raycast(e,t,n=200){let i=n,o=null,r=new S(0,1,0);const a=t.x!==0?1/t.x:1e9,l=t.y!==0?1/t.y:1e9,c=t.z!==0?1/t.z:1e9;for(const d of this.boxes){const u=(d.minX-e.x)*a,f=(d.maxX-e.x)*a,g=(d.minY-e.y)*l,v=(d.maxY-e.y)*l,x=(d.minZ-e.z)*c,p=(d.maxZ-e.z)*c,y=Math.min(u,f),M=Math.max(u,f),w=Math.min(g,v),P=Math.max(g,v),C=Math.min(x,p),L=Math.max(x,p),D=Math.max(y,w,C),T=Math.min(M,P,L);T>=0&&D<=T&&D>.02&&D<i&&(i=D,o=d,D===y?r.set(t.x>0?-1:1,0,0):D===w?r.set(0,t.y>0?-1:1,0):r.set(0,0,t.z>0?-1:1))}if(t.y<-.001){const u=(this.heightFn(e.x,e.z)-e.y)/t.y;u>.02&&u<i&&(i=u,o={tag:"ground"},r.set(0,1,0))}if(!o)return null;const h=e.clone().addScaledVector(t,i);return{hit:!0,dist:i,point:h,normal:r,tag:o.tag}}hasLineOfSight(e,t){const n=new S().subVectors(t,e),i=n.length();return i<.01?!0:(n.divideScalar(i),!this.raycast(e,n,i-.25))}}class Fm{constructor(e){this.scene=e,this.bursts=[],this.tracers=[],this.rings=[],this.ambient=null,this.ambientVel=[],this.ambientBounds=null,this.tumbleweeds=[],this.mistEmitters=[],this.sharedBoxGeo=new N(1,1,1),this.sharedSphereGeo=new Ze(.5,6,6)}initAmbient(e,t){this.ambientBounds=t;const n=e==="sakura"?520:e==="snow"?620:e==="alpine"?420:340,i=new Float32Array(n*3),o=new Float32Array(n*3);this.ambientVel=[];const r=new $e(e==="sakura"?16758735:e==="snow"?16777215:e==="aegean"?16774338:e==="alpine"?15268351:16765578),a=new $e(e==="sakura"?16770284:e==="snow"?13363455:e==="aegean"?10088703:e==="alpine"?16774604:14917204),l=t.maxX-t.minX,c=t.maxZ-t.minZ,h=new $e;for(let f=0;f<n;f++)i[f*3]=t.minX+Math.random()*l,i[f*3+1]=.5+Math.random()*16,i[f*3+2]=t.minZ+Math.random()*c,h.copy(r).lerp(a,Math.random()),o[f*3]=h.r,o[f*3+1]=h.g,o[f*3+2]=h.b,e==="sakura"?this.ambientVel.push({vx:.9+Math.random()*1.1,vy:-(.55+Math.random()*.7),vz:.35+Math.random()*.6,phase:Math.random()*Math.PI*2}):e==="snow"?this.ambientVel.push({vx:.5+Math.random()*.9,vy:-(1.1+Math.random()*1.2),vz:-.4+Math.random()*.8,phase:Math.random()*Math.PI*2}):e==="alpine"||e==="aegean"?this.ambientVel.push({vx:.4+Math.random()*.7,vy:-.15+Math.random()*.35,vz:-.3+Math.random()*.6,phase:Math.random()*Math.PI*2}):this.ambientVel.push({vx:1.4+Math.random()*1.5,vy:-.05+Math.random()*.25,vz:-.3+Math.random()*.6,phase:Math.random()*Math.PI*2});const d=new Et;d.setAttribute("position",new en(i,3)),d.setAttribute("color",new en(o,3));const u=new ac({size:e==="sakura"?.26:e==="snow"?.22:e==="alpine"?.19:.16,vertexColors:!0,transparent:!0,opacity:e==="sakura"||e==="snow"?.9:.68,depthWrite:!1});this.ambient=new td(d,u),this.scene.add(this.ambient)}addTumbleweed(e,t=1){const n=new Xe,i=new ee({color:8215864,roughness:.95,wireframe:!0}),o=new m(new Ms(.65,1),i),r=new m(new un(.72,0),i);n.add(o,r),n.position.copy(e),this.scene.add(n),this.tumbleweeds.push({mesh:n,vx:t*(2.6+Math.random()*1.4),vz:(Math.random()-.5)*.8,bouncePhase:Math.random()*Math.PI*2})}addMistEmitter(e,t=3.5){this.mistEmitters.push({pos:e.clone(),radius:t,timer:0})}spawnImpact(e,t=16764006,n=12,i=7){for(let o=0;o<n;o++){const r=new st({color:t,transparent:!0,opacity:1}),a=new m(this.sharedBoxGeo,r),l=.06+Math.random()*.09;a.scale.set(l,l,l),a.position.copy(e);const c=new S((Math.random()-.5)*2,Math.random()*1.4+.3,(Math.random()-.5)*2).normalize().multiplyScalar(i*(.4+Math.random()*.8));this.scene.add(a),this.bursts.push({mesh:a,vel:c,gravity:15,life:.28+Math.random()*.32,maxLife:.6,grow:0})}}spawnSmoke(e,t=14537926,n=6,i=.4){for(let o=0;o<n;o++){const r=new st({color:t,transparent:!0,opacity:.55,depthWrite:!1}),a=new m(this.sharedSphereGeo,r),l=i*(.6+Math.random()*.7);a.scale.set(l,l,l),a.position.copy(e).add(new S((Math.random()-.5)*.3,(Math.random()-.5)*.3,(Math.random()-.5)*.3));const c=new S((Math.random()-.5)*1.4,1.1+Math.random()*1.6,(Math.random()-.5)*1.4);this.scene.add(a),this.bursts.push({mesh:a,vel:c,gravity:-.8,life:.45+Math.random()*.45,maxLife:.9,grow:1.6})}}spawnExplosion(e,t=6){this.spawnImpact(e,16756275,28,14),this.spawnImpact(e,16729364,22,10),this.spawnSmoke(e,3681833,14,1.3);const n=new la(.4,.9,28);n.rotateX(-Math.PI/2);const i=new st({color:16757575,transparent:!0,opacity:.9,side:gt,depthWrite:!1}),o=new m(n,i);o.position.copy(e),o.position.y+=.25,this.scene.add(o),this.rings.push({mesh:o,life:.45,maxLife:.45,targetScale:t*1.4});const r=new st({color:16770196,transparent:!0,opacity:.95}),a=new m(new Ze(1,12,10),r);a.position.copy(e),this.scene.add(a),this.rings.push({mesh:a,life:.25,maxLife:.25,targetScale:t*.72})}spawnTracer(e,t,n=16770457,i=.085){const o=new Et().setFromPoints([e,t]),r=new Br({color:n,transparent:!0,opacity:.95}),a=new ka(o,r);this.scene.add(a),this.tracers.push({line:a,life:i,maxLife:i})}spawnSlashArc(e,t,n,i=14677759){const o=[];for(let c=0;c<=12;c++){const h=-1.05+c/12*2.1,d=e.clone().addScaledVector(t,Math.cos(h)*1.9).addScaledVector(n,Math.sin(h)*1.7);d.y+=Math.sin(h)*.22-.15,o.push(d)}const r=new Et().setFromPoints(o),a=new Br({color:i,transparent:!0,opacity:1}),l=new ka(r,a);this.scene.add(l),this.tracers.push({line:l,life:.16,maxLife:.16})}update(e,t){if(this.ambient&&this.ambientBounds){const n=this.ambient.geometry.attributes.position.array,i=this.ambientBounds;for(let o=0;o<this.ambientVel.length;o++){const r=this.ambientVel[o],a=o*3;n[a]+=(r.vx+Math.sin(t*1.5+r.phase)*.5)*e,n[a+1]+=r.vy*e,n[a+2]+=(r.vz+Math.cos(t*1.3+r.phase)*.4)*e,n[a]>i.maxX&&(n[a]=i.minX),n[a]<i.minX&&(n[a]=i.maxX),n[a+2]>i.maxZ&&(n[a+2]=i.minZ),n[a+2]<i.minZ&&(n[a+2]=i.maxZ),n[a+1]<.2&&(n[a+1]=15+Math.random()*4),n[a+1]>20&&(n[a+1]=1)}this.ambient.geometry.attributes.position.needsUpdate=!0}for(const n of this.tumbleweeds)n.mesh.position.x+=n.vx*e,n.mesh.position.z+=n.vz*e,n.mesh.rotation.z-=n.vx*e*1.4,n.mesh.rotation.x+=n.vz*e*.8,n.mesh.position.y=.68+Math.abs(Math.sin(t*3.8+n.bouncePhase))*.35,this.ambientBounds&&(n.mesh.position.x>this.ambientBounds.maxX-4&&(n.mesh.position.x=this.ambientBounds.minX+4),n.mesh.position.x<this.ambientBounds.minX+4&&(n.mesh.position.x=this.ambientBounds.maxX-4));for(const n of this.mistEmitters)if(n.timer-=e,n.timer<=0){n.timer=.12;const i=n.pos.clone().add(new S((Math.random()-.5)*n.radius*2,Math.random()*1.2,(Math.random()-.5)*n.radius));this.spawnSmoke(i,15268351,1,1.35)}for(let n=this.bursts.length-1;n>=0;n--){const i=this.bursts[n];if(i.life-=e,i.life<=0){this.scene.remove(i.mesh),i.mesh.material.dispose(),this.bursts.splice(n,1);continue}i.vel.y-=i.gravity*e,i.mesh.position.addScaledVector(i.vel,e),i.mesh.rotation.x+=e*4,i.mesh.rotation.y+=e*3,i.grow>0&&i.mesh.scale.addScalar(i.grow*e),i.mesh.material.opacity=Math.max(0,i.life/i.maxLife*.85)}for(let n=this.tracers.length-1;n>=0;n--){const i=this.tracers[n];if(i.life-=e,i.life<=0){this.scene.remove(i.line),i.line.geometry.dispose(),i.line.material.dispose(),this.tracers.splice(n,1);continue}i.line.material.opacity=i.life/i.maxLife}for(let n=this.rings.length-1;n>=0;n--){const i=this.rings[n];if(i.life-=e,i.life<=0){this.scene.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material.dispose(),this.rings.splice(n,1);continue}const o=1-i.life/i.maxLife,r=.5+o*i.targetScale;i.mesh.scale.set(r,r,r),i.mesh.material.opacity=(1-o)*.85}}}class Om{constructor(){this.ctx=null,this.master=null,this.musicGain=null,this.sfxGain=null,this.muted=!1,this.musicTimer=null,this.currentTheme=null,this.step=0,this.noiseBuffer=null}ensureInit(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.72,this.master.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.28,this.musicGain.connect(this.master),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.85,this.sfxGain.connect(this.master);const t=this.ctx.sampleRate,n=Math.floor(t*1.5);this.noiseBuffer=this.ctx.createBuffer(1,n,t);const i=this.noiseBuffer.getChannelData(0);for(let o=0;o<n;o++)i[o]=Math.random()*2-1}setMuted(e){this.muted=e,this.master&&this.master.gain.setTargetAtTime(e?0:.72,this.ctx.currentTime,.04)}toggleMute(){return this.setMuted(!this.muted),this.muted}stopMusic(){this.musicTimer&&(clearInterval(this.musicTimer),this.musicTimer=null),this.currentTheme=null}startMusic(e){if(this.ensureInit(),!!this.ctx&&!(this.currentTheme===e&&this.musicTimer)){if(this.stopMusic(),this.currentTheme=e,this.step=0,e==="west"){const t=[73.42,73.42,110,87.31,73.42,73.42,65.41,82.41],n=[293.66,349.23,440,329.63,293.66,0,261.63,329.63],i=[587.33,659.25,698.46,880,0,698.46,659.25,587.33];this.musicTimer=setInterval(()=>{if(!this.ctx||this.muted)return;const o=this.step++,r=this.ctx.currentTime;this._tone(t[o%t.length],"triangle",.24,.26,r,this.musicGain,320);const a=n[o%n.length];if(a>0&&this._tone(a,"sawtooth",.34,.14,r,this.musicGain,1100),o%2===0&&Math.floor(o/8)%2===0){const l=i[(o>>1)%i.length];l>0&&this._whistle(l,.65,.11,r)}},340)}else if(e==="japan"){const t=[293.66,329.63,349.23,440,466.16,587.33,440,349.23],n=[587.33,0,659.25,698.46,880,0,698.46,587.33];this.musicTimer=setInterval(()=>{if(!this.ctx||this.muted)return;const i=this.step++,o=this.ctx.currentTime;if((i%8===0||i%8===5)&&this._taiko(o,i%8===0?.32:.18),i%2===0||i%7===0){const r=t[i*3%t.length];this._tone(r,"triangle",.52,.17,o,this.musicGain,2200)}if(i%4===1){const r=n[(i>>2)%n.length];r>0&&this._whistle(r,1.1,.1,o)}},380)}else if(e==="swiss"){const t=[174.61,261.63,349.23,440,523.25,440,349.23,261.63],n=[349.23,440,523.25,349.23,293.66,392,523.25,440];this.musicTimer=setInterval(()=>{if(!this.ctx||this.muted)return;const i=this.step++,o=this.ctx.currentTime,r=n[i%n.length];if(this._tone(r,"triangle",.36,.15,o,this.musicGain,1600),i%4===0){const a=t[(i>>2)%t.length];this._alphorn(a,1.25,.2,o)}},360)}else if(e==="greece"){const t=[293.66,329.63,349.23,440,493.88,440,349.23,329.63],n=[146.83,146.83,164.81,146.83,130.81,146.83,164.81,146.83],i=[587.33,659.25,587.33,523.25,440,0,523.25,587.33];this.musicTimer=setInterval(()=>{if(!this.ctx||this.muted)return;const o=this.step++,r=this.ctx.currentTime;if(o%2===0&&this._tone(n[(o>>1)%n.length],"triangle",.42,.2,r,this.musicGain,900),this._tone(t[o%t.length],"triangle",.34,.16,r,this.musicGain,2600),o%4===2){const a=i[(o>>2)%i.length];a>0&&this._whistle(a,.9,.1,r)}},310)}else if(e==="scandinavia"){const t=[73.42,73.42,110,73.42,65.41,73.42,87.31,73.42],n=[293.66,349.23,329.63,293.66,261.63,293.66,440,392];this.musicTimer=setInterval(()=>{if(!this.ctx||this.muted)return;const i=this.step++,o=this.ctx.currentTime;(i%4===0||i%8===6)&&this._taiko(o,i%8===0?.3:.18),i%2===0&&this._tone(t[(i>>1)%t.length],"sawtooth",.65,.15,o,this.musicGain,480),i%2===1&&this._tone(n[(i>>1)%n.length],"triangle",.48,.14,o,this.musicGain,1500),i%8===0&&this._alphorn(146.83,1.5,.16,o)},400)}else if(e==="normandy"){const t=[110,110,103.83,98,110,110,130.81,123.47],n=[220,0,261.63,246.94,220,0,196,207.65];this.musicTimer=setInterval(()=>{if(!this.ctx||this.muted)return;const i=this.step++,o=this.ctx.currentTime;if(i%2===0&&this._noiseBurst(.05,.09,1800,"bandpass",2.2),i%2===0&&this._tone(t[(i>>1)%t.length],"sawtooth",.62,.13,o,this.musicGain,520),i%4===0){const r=n[(i>>2)%n.length];r>0&&this._alphorn(r,1.15,.12,o)}i%16===7&&this._taiko(o,.18)},370)}}}_tone(e,t,n,i,o,r,a=1800){const l=this.ctx.createOscillator(),c=this.ctx.createBiquadFilter(),h=this.ctx.createGain();l.type=t,l.frequency.setValueAtTime(e,o),c.type="lowpass",c.frequency.setValueAtTime(a,o),c.frequency.exponentialRampToValueAtTime(220,o+n),h.gain.setValueAtTime(.001,o),h.gain.linearRampToValueAtTime(i,o+.015),h.gain.exponentialRampToValueAtTime(8e-4,o+n),l.connect(c),c.connect(h),h.connect(r),l.start(o),l.stop(o+n+.02)}_whistle(e,t,n,i){const o=this.ctx.createOscillator(),r=this.ctx.createOscillator(),a=this.ctx.createGain(),l=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(e*.96,i),o.frequency.exponentialRampToValueAtTime(e,i+.09),r.frequency.value=5.5,a.gain.value=e*.012,r.connect(a),a.connect(o.frequency),l.gain.setValueAtTime(.001,i),l.gain.linearRampToValueAtTime(n,i+.12),l.gain.exponentialRampToValueAtTime(8e-4,i+t),o.connect(l),l.connect(this.musicGain),o.start(i),r.start(i),o.stop(i+t+.03),r.stop(i+t+.03)}_alphorn(e,t,n,i){const o=this.ctx.createOscillator(),r=this.ctx.createOscillator(),a=this.ctx.createBiquadFilter(),l=this.ctx.createGain();o.type="sawtooth",r.type="triangle",o.frequency.setValueAtTime(e,i),r.frequency.setValueAtTime(e*.5,i),a.type="lowpass",a.frequency.setValueAtTime(750,i),a.Q.value=2,l.gain.setValueAtTime(.001,i),l.gain.linearRampToValueAtTime(n,i+.18),l.gain.setValueAtTime(n*.85,i+t*.7),l.gain.exponentialRampToValueAtTime(8e-4,i+t),o.connect(a),r.connect(a),a.connect(l),l.connect(this.musicGain),o.start(i),r.start(i),o.stop(i+t+.05),r.stop(i+t+.05)}_taiko(e,t){const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(115,e),n.frequency.exponentialRampToValueAtTime(42,e+.35),i.gain.setValueAtTime(t,e),i.gain.exponentialRampToValueAtTime(.001,e+.45),n.connect(i),i.connect(this.musicGain),n.start(e),n.stop(e+.48)}_noiseBurst(e,t,n,i="bandpass",o=1){if(!this.ctx||!this.noiseBuffer)return;const r=this.ctx.currentTime,a=this.ctx.createBufferSource();a.buffer=this.noiseBuffer;const l=this.ctx.createBiquadFilter();l.type=i,l.frequency.setValueAtTime(n,r),l.Q.value=o;const c=this.ctx.createGain();c.gain.setValueAtTime(t,r),c.gain.exponentialRampToValueAtTime(.001,r+e),a.connect(l),l.connect(c),c.connect(this.sfxGain),a.start(r),a.stop(r+e+.02)}playShot(e="revolver"){if(this.ensureInit(),!this.ctx)return;const t=this.ctx.currentTime;if(e==="revolver"||e==="rifle"){const n=e==="rifle";this._noiseBurst(n?.32:.22,n?.9:.72,n?1150:1450,"lowpass");const i=this.ctx.createOscillator(),o=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(n?240:320,t),i.frequency.exponentialRampToValueAtTime(42,t+(n?.22:.14)),o.gain.setValueAtTime(n?.65:.5,t),o.gain.exponentialRampToValueAtTime(.001,t+.22),i.connect(o),o.connect(this.sfxGain),i.start(t),i.stop(t+.24)}else if(e==="shotgun"||e==="musket"){this._noiseBurst(.45,1,950,"lowpass");const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(175,t),n.frequency.exponentialRampToValueAtTime(28,t+.32),i.gain.setValueAtTime(.85,t),i.gain.exponentialRampToValueAtTime(.001,t+.34),n.connect(i),i.connect(this.sfxGain),n.start(t),n.stop(t+.36)}else if(e==="bow"||e==="crossbow"){this._noiseBurst(.11,.45,2200,"bandpass",2);const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(e==="crossbow"?420:280,t),n.frequency.exponentialRampToValueAtTime(110,t+.16),i.gain.setValueAtTime(.55,t),i.gain.exponentialRampToValueAtTime(.001,t+.18),n.connect(i),i.connect(this.sfxGain),n.start(t),n.stop(t+.2)}else if(e==="shuriken")this._noiseBurst(.09,.4,3800,"highpass"),this._tone(1650,"sine",.08,.22,t,this.sfxGain,4e3);else if(e==="slash"){this._noiseBurst(.18,.6,2600,"bandpass",1.4);const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(900,t),n.frequency.exponentialRampToValueAtTime(220,t+.16),i.gain.setValueAtTime(.28,t),i.gain.exponentialRampToValueAtTime(.001,t+.18),n.connect(i),i.connect(this.sfxGain),n.start(t),n.stop(t+.19)}else if(e==="javelin"||e==="axe_throw"){const n=e==="axe_throw";this._noiseBurst(n?.17:.13,n?.52:.45,n?1500:2500,"bandpass",1.5);const i=this.ctx.createOscillator(),o=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(n?240:480,t),i.frequency.exponentialRampToValueAtTime(n?95:170,t+.14),o.gain.setValueAtTime(.38,t),o.gain.exponentialRampToValueAtTime(.001,t+.16),i.connect(o),o.connect(this.sfxGain),i.start(t),i.stop(t+.17)}else if(e==="smg")this._noiseBurst(.09,.52,1950,"bandpass",1.1),this._tone(210,"sawtooth",.075,.34,t,this.sfxGain,950);else if(e==="sniper"){this._noiseBurst(.42,.96,1250,"lowpass");const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(220,t),n.frequency.exponentialRampToValueAtTime(34,t+.28),i.gain.setValueAtTime(.75,t),i.gain.exponentialRampToValueAtTime(.001,t+.3),n.connect(i),i.connect(this.sfxGain),n.start(t),n.stop(t+.32)}else e==="throw"&&this._noiseBurst(.14,.35,1600,"bandpass")}playReload(){if(this.ensureInit(),!this.ctx)return;const e=this.ctx.currentTime;this._tone(780,"square",.045,.16,e,this.sfxGain,2200),this._tone(1120,"square",.055,.18,e+.18,this.sfxGain,2600),this._tone(640,"triangle",.06,.2,e+.36,this.sfxGain,1800)}playExplosion(){if(this.ensureInit(),!this.ctx)return;const e=this.ctx.currentTime;this._noiseBurst(.95,1,520,"lowpass");const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(110,e),t.frequency.exponentialRampToValueAtTime(22,e+.7),n.gain.setValueAtTime(.95,e),n.gain.exponentialRampToValueAtTime(.001,e+.8),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.85)}playHit(e=!1){if(this.ensureInit(),!this.ctx)return;const t=this.ctx.currentTime;this._tone(e?1320:840,"triangle",.09,.32,t,this.sfxGain,3200),e&&this._tone(1760,"sine",.14,.34,t+.04,this.sfxGain,4200)}playHurt(){if(this.ensureInit(),!this.ctx)return;const e=this.ctx.currentTime;this._noiseBurst(.16,.45,650,"lowpass"),this._tone(130,"sawtooth",.18,.38,e,this.sfxGain,450)}playPickup(){if(this.ensureInit(),!this.ctx)return;const e=this.ctx.currentTime;this._tone(587.33,"triangle",.11,.28,e,this.sfxGain,2800),this._tone(880,"triangle",.18,.28,e+.09,this.sfxGain,3200)}playBossHorn(){if(this.ensureInit(),!this.ctx)return;const e=this.ctx.currentTime;this._alphorn(146.83,1.4,.45,e),this._alphorn(220,1.4,.35,e+.15)}playDogBark(){if(this.ensureInit(),!this.ctx)return;const e=this.ctx.currentTime;for(const t of[0,.17]){const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(360,e+t),n.frequency.exponentialRampToValueAtTime(145,e+t+.11),i.gain.setValueAtTime(.001,e+t),i.gain.linearRampToValueAtTime(.36,e+t+.018),i.gain.exponentialRampToValueAtTime(.001,e+t+.12),n.connect(i),i.connect(this.sfxGain),n.start(e+t),n.stop(e+t+.13),this._noiseBurst(.09,.28,950,"bandpass",1.6)}}}const Bm={west:[{id:"revolver",name:".45 PEACEMAKER",shortName:"Revolver",kind:"hitscan",sound:"revolver",damage:38,headMult:2.1,pellets:1,spread:.012,fireRate:.28,magSize:6,reserve:48,reloadTime:1.05,recoil:.14,altMode:"fan",altHint:"RMB: Fan Hammer",tracerColor:16770206},{id:"shotgun",name:"10-GAUGE COACH GUN",shortName:"Shotgun",kind:"hitscan",sound:"shotgun",damage:19,headMult:1.5,pellets:8,spread:.085,fireRate:.65,magSize:2,reserve:24,reloadTime:1.15,recoil:.28,altMode:"double",altHint:"RMB: Both Barrels",tracerColor:16762480},{id:"rifle",name:"HENRY .44 SCOPED",shortName:"Rifle",kind:"hitscan",sound:"rifle",damage:74,headMult:2.4,pellets:1,spread:.004,fireRate:.72,magSize:8,reserve:32,reloadTime:1.3,recoil:.18,altMode:"scope",scopeLabel:"HENRY .44 BRASS OPTIC",scopeFov:26,altHint:"RMB: Brass Scope Zoom",tracerColor:16774084},{id:"dynamite",name:"DYNAMITE STICKS",shortName:"Dynamite",kind:"throwable",sound:"throw",damage:145,blastRadius:7.5,fireRate:.85,magSize:1,reserve:6,reloadTime:.55,recoil:.12,altMode:"none",altHint:"Arc Throw Explosive",projColor:14235170}],japan:[{id:"katana",name:"MURAMASA KATANA",shortName:"Katana",kind:"melee",sound:"slash",damage:68,headMult:1.5,range:4,fireRate:.36,magSize:99,reserve:99,infinite:!0,reloadTime:.1,recoil:.22,altMode:"heavy_slash",altHint:"RMB: Iaido Power Cleave",slashColor:15137279},{id:"yumi",name:"YUMI LONGBOW",shortName:"Yumi Bow",kind:"hitscan",sound:"bow",damage:78,headMult:2.3,pellets:1,spread:.005,fireRate:.62,magSize:1,reserve:40,reloadTime:.45,recoil:.11,altMode:"scope",scopeLabel:"KYUDO SPIRIT FOCUS",scopeFov:30,altHint:"RMB: Spirit Focus Zoom",tracerColor:16773314},{id:"shuriken",name:"SHINOBI SHURIKEN",shortName:"Shuriken",kind:"hitscan",sound:"shuriken",damage:34,headMult:2,pellets:1,spread:.018,fireRate:.2,magSize:9,reserve:63,reloadTime:.85,recoil:.07,altMode:"fan_stars",altHint:"RMB: 3-Star Fan Throw",tracerColor:13692159},{id:"matchlock",name:"TANEGASHIMA MUSKET",shortName:"Matchlock",kind:"hitscan",sound:"musket",damage:115,headMult:1.9,pellets:4,spread:.045,fireRate:1.05,magSize:1,reserve:18,reloadTime:1.25,recoil:.3,altMode:"none",altHint:"Heavy Edo Firepower",tracerColor:16757596}],swiss:[{id:"crossbow",name:"TELL'S ARMBRUST",shortName:"Crossbow",kind:"hitscan",sound:"crossbow",damage:86,headMult:2.5,pellets:1,spread:.003,fireRate:.65,magSize:1,reserve:45,reloadTime:.62,recoil:.14,altMode:"scope",scopeLabel:"WILHELM TELL EAGLE-EYE",scopeFov:24,altHint:"RMB: Eagle-Eye Zoom",tracerColor:16054783},{id:"halberd",name:"SWISS HALBERD",shortName:"Halberd",kind:"melee",sound:"slash",damage:78,headMult:1.5,range:4.4,fireRate:.48,magSize:99,reserve:99,infinite:!0,reloadTime:.1,recoil:.25,altMode:"heavy_slash",altHint:"RMB: Armor-Breaker Sweep",slashColor:14676735},{id:"repeater",name:"ALPINE REPEATER",shortName:"Repeater",kind:"hitscan",sound:"crossbow",damage:36,headMult:2,pellets:1,spread:.016,fireRate:.22,magSize:8,reserve:56,reloadTime:1.1,recoil:.09,altMode:"fan",altHint:"RMB: Rapid Volley",tracerColor:15135487},{id:"firepot",name:"ALPINE FIRE-POT",shortName:"Fire-Pot",kind:"throwable",sound:"throw",damage:150,blastRadius:7.5,fireRate:.9,magSize:1,reserve:6,reloadTime:.6,recoil:.12,altMode:"none",altHint:"Arc Throw Fire-Bomb",projColor:16739876}],greece:[{id:"javelin",name:"BRONZE JAVELIN",shortName:"Javelin",kind:"hitscan",sound:"javelin",damage:56,headMult:2.1,pellets:1,spread:.009,fireRate:.56,magSize:5,reserve:45,reloadTime:.88,recoil:.16,altMode:"scope",scopeLabel:"AEGEAN SPEAR SIGHT",scopeFov:36,altHint:"RMB: Steady Aim Focus",tracerColor:16770206},{id:"xiphos",name:"XIPHOS SHORT SWORD",shortName:"Short Sword",kind:"melee",sound:"slash",damage:66,headMult:1.5,range:3.9,fireRate:.34,magSize:99,reserve:99,infinite:!0,reloadTime:.1,recoil:.22,altMode:"heavy_slash",altHint:"RMB: Heroic Thrust Cleave",slashColor:16770723}],scandinavia:[{id:"throwing_axe",name:"THROWING AXE",shortName:"Throwing Axe",kind:"hitscan",sound:"axe_throw",damage:58,headMult:2.1,pellets:1,spread:.011,fireRate:.54,magSize:5,reserve:45,reloadTime:.85,recoil:.17,altMode:"scope",scopeLabel:"NORSE RAIDER AIM",scopeFov:38,altHint:"RMB: Steady Aim Focus",tracerColor:12776959},{id:"viking_sword",name:"ULFBERHT SWORD",shortName:"Viking Sword",kind:"melee",sound:"slash",damage:72,headMult:1.5,range:4.1,fireRate:.38,magSize:99,reserve:99,infinite:!0,reloadTime:.1,recoil:.24,altMode:"heavy_slash",altHint:"RMB: Shield-Breaker Cleave",slashColor:10417640}],normandy:[{id:"mosin_scoped",name:"BOLT-ACTION SNIPER RIFLE",shortName:"Sniper Rifle",kind:"hitscan",sound:"sniper",damage:105,headMult:2.2,pellets:1,spread:.002,fireRate:1.25,magSize:5,reserve:30,reloadTime:1.65,recoil:.24,altMode:"scope",scopeLabel:"PU 3.5× TELESCOPIC SIGHT",scopeFov:18,altHint:"RMB: Telescopic Scope",tracerColor:16774084},{id:"sten_smg",name:"STEN MK II SMG",shortName:"Sten SMG",kind:"hitscan",sound:"smg",autoFire:!0,damage:19,headMult:1.75,pellets:1,spread:.032,fireRate:.11,magSize:32,reserve:160,reloadTime:1.15,recoil:.065,altMode:"none",altHint:"Hold LMB: Full-Auto Fire",tracerColor:16765562},{id:"heavy_pistol",name:"BAVAUD HEAVY PISTOL",shortName:"Heavy Pistol",kind:"hitscan",sound:"revolver",damage:58,headMult:2,pellets:1,spread:.008,fireRate:.34,magSize:8,reserve:64,reloadTime:.95,recoil:.15,altMode:"none",altHint:"High-Impact Sidearm",tracerColor:16770206},{id:"combat_knife",name:"RESISTANCE KNIFE",shortName:"Knife",kind:"melee",sound:"slash",damage:65,headMult:1.6,range:3.3,fireRate:.32,magSize:99,reserve:99,infinite:!0,reloadTime:.1,recoil:.16,altMode:"heavy_slash",altHint:"RMB: Close Thrust",slashColor:14216447}]};function zm(s){const e=new Xe,t=new ee({color:3817546,metalness:.85,roughness:.26}),n=new ee({color:14213354,metalness:.92,roughness:.16}),i=new ee({color:14263361,metalness:.82,roughness:.28}),o=new ee({color:6042653,roughness:.72,metalness:.05}),r=new ee({color:3087122,roughness:.75}),a=new ee({color:12067869,roughness:.5}),l=new st({color:16759603});if(s==="revolver"){const c=new m(new oe(.022,.024,.44,10),t);c.rotation.x=Math.PI/2,c.position.set(0,.03,-.32);const h=new m(new oe(.011,.011,.36,8),t);h.rotation.x=Math.PI/2,h.position.set(0,.004,-.28);const d=new m(new N(.048,.095,.17),i);d.position.set(0,0,-.05);const u=new m(new oe(.038,.038,.09,12),t);u.rotation.x=Math.PI/2,u.position.set(0,.015,-.055),u.name="cylinder";const f=new m(new N(.008,.026,.02),i);f.position.set(0,.058,-.51);const g=new m(new N(.014,.04,.03),t);g.position.set(0,.052,.03),g.rotation.x=-.35;const v=new m(new N(.042,.16,.068),o);v.position.set(0,-.09,.05),v.rotation.x=.28,e.add(c,h,d,u,f,g,v),e.position.set(.24,-.22,-.35)}else if(s==="shotgun"){for(const u of[-.024,.024]){const f=new m(new oe(.022,.024,.72,12),t);f.rotation.x=Math.PI/2,f.position.set(u,.02,-.45),e.add(f)}const c=new m(new N(.078,.048,.28),o);c.position.set(0,-.012,-.32);const h=new m(new N(.082,.078,.18),i);h.position.set(0,0,-.04);const d=new m(new N(.065,.11,.36),o);d.position.set(0,-.055,.18),d.rotation.x=.16,e.add(c,h,d),e.position.set(.24,-.24,-.32)}else if(s==="rifle"){const c=new m(new oe(.018,.021,.88,8),t);c.rotation.x=Math.PI/2,c.position.set(0,.025,-.52);const h=new m(new oe(.014,.014,.78,8),i);h.rotation.x=Math.PI/2,h.position.set(0,-.006,-.48);const d=new m(new N(.054,.088,.22),i);d.position.set(0,0,-.04);const u=new m(new oe(.02,.024,.48,12),i);u.rotation.x=Math.PI/2,u.position.set(0,.078,-.22);const f=new m(new oe(.018,.018,.01,12),new st({color:9099519}));f.rotation.x=Math.PI/2,f.position.set(0,.078,.02);const g=new m(new N(.052,.11,.36),o);g.position.set(0,-.048,.2),g.rotation.x=.12,e.add(c,h,d,u,f,g),e.position.set(.24,-.24,-.32)}else if(s==="dynamite"){for(const[f,g]of[[-.024,0],[.024,0],[0,.032]]){const v=new m(new oe(.022,.022,.26,10),a);v.position.set(f,g,0),e.add(v)}const c=new m(new oe(.054,.054,.022,12),r);c.position.y=.06;const h=c.clone();h.position.y=-.06;const d=new m(new oe(.006,.006,.09,6),o);d.position.set(.01,.17,0),d.rotation.z=-.35;const u=new m(new Ze(.022,8,8),l);u.position.set(.028,.21,0),u.name="spark",e.add(c,h,d,u),e.rotation.set(.25,.2,.15),e.position.set(.26,-.24,-.45)}else if(s==="katana"){const c=new m(new N(.014,.92,.044),n);c.position.set(0,.44,0);const h=new m(new N(.005,.92,.014),new st({color:16777215}));h.position.set(0,.44,-.023);const d=new m(new N(.024,.05,.052),i);d.position.set(0,.01,0);const u=new m(new oe(.065,.065,.014,16),i);u.position.set(0,-.02,0);const f=new m(new oe(.024,.026,.28,10),a);f.position.set(0,-.16,0),e.add(c,h,d,u,f),e.rotation.set(-.35,-.28,.28),e.position.set(.32,-.34,-.52)}else if(s==="yumi"){const c=new m(new vt(.52,.018,8,22,Math.PI*.88),r);c.rotation.z=-Math.PI*.44,c.position.set(0,.06,-.22);const h=new m(new oe(.003,.003,.96,6),new st({color:16050385}));h.position.set(0,.06,.04);const d=new m(new oe(.008,.008,.72,6),o);d.rotation.x=Math.PI/2,d.position.set(.02,.02,-.24);const u=new m(new ze(.02,.07,4),n);u.rotation.x=-Math.PI/2,u.position.set(.02,.02,-.62);const f=new m(new N(.05,.004,.1),a);f.position.set(.02,.02,.07),e.add(c,h,d,u,f),e.position.set(.25,-.18,-.45)}else if(s==="shuriken"){const c=new Xe;for(let d=0;d<4;d++){const u=new m(new ze(.036,.12,4),n),f=d*Math.PI/2;u.position.set(Math.cos(f)*.06,0,Math.sin(f)*.06),u.rotation.z=-Math.PI/2,u.rotation.y=-f,c.add(u)}const h=new m(new oe(.032,.032,.012,10),t);c.add(h),c.name="spinner",e.add(c),e.rotation.set(.35,.2,.1),e.position.set(.24,-.2,-.48)}else if(s==="matchlock"){const c=new m(new oe(.026,.03,.92,8),t);c.rotation.x=Math.PI/2,c.position.set(0,.03,-.5);const h=new m(new N(.064,.075,.72),r);h.position.set(0,-.01,-.25);for(const u of[-.15,-.42,-.68]){const f=new m(new N(.07,.082,.032),i);f.position.set(0,.005,u),e.add(f)}const d=new m(new Ze(.016,6,6),l);d.position.set(.045,.045,-.08),e.add(c,h,d),e.position.set(.25,-.25,-.3)}else if(s==="crossbow"||s==="repeater"){const c=s==="repeater",h=new m(new N(.072,.082,c?.62:.74),o);h.position.set(0,-.01,-.28);const d=new m(new N(.035,.022,.6),i);d.position.set(0,.036,-.32);const u=new m(new N(c?.26:.36,.024,.038),t);u.position.set(c?-.14:-.19,.025,-.55),u.rotation.y=.24;const f=u.clone();f.position.x=-u.position.x,f.rotation.y=-.24;const g=new m(new oe(.003,.003,c?.3:.42,6),new st({color:15261384}));g.rotation.z=Math.PI/2,g.rotation.y=-.52,g.position.set(c?-.12:-.16,.032,-.44);const v=g.clone();v.position.x=-g.position.x,v.rotation.y=.52;const x=new m(new oe(.009,.009,.44,6),r);x.rotation.x=Math.PI/2,x.position.set(0,.048,-.44);const p=new m(new ze(.022,.075,4),n);if(p.rotation.x=-Math.PI/2,p.position.set(0,.048,-.68),c){const y=new m(new N(.068,.085,.22),r);y.position.set(0,.078,-.24),e.add(y)}e.add(h,d,u,f,g,v,x,p),e.position.set(.22,-.23,-.32)}else if(s==="halberd"){const c=new m(new oe(.022,.024,1.35,8),o);c.position.set(0,.15,0);const h=new m(new ze(.028,.38,4),n);h.position.set(0,.98,0);const d=new m(new N(.014,.28,.25),n);d.position.set(0,.68,-.12);const u=new m(new ze(.024,.2,4),t);u.rotation.x=Math.PI/2,u.position.set(0,.68,.1);const f=new m(new oe(.032,.032,.16,8),i);f.position.set(0,.68,0);const g=new m(new ze(.045,.14,8),new ee({color:15910441,roughness:.6}));g.position.set(0,.54,0);const v=new m(new vt(.035,.014,6,10),a);v.rotation.x=Math.PI/2,v.position.set(0,.6,0),e.add(c,h,d,u,f,g,v),e.rotation.set(-.34,-.22,.22),e.position.set(.36,-.42,-.56)}else if(s==="firepot"){const c=new m(new Ze(.095,12,10),new ee({color:9193255,roughness:.85})),h=new m(new oe(.042,.055,.06,10),new ee({color:7222812,roughness:.85}));h.position.y=.095;const d=new m(new ze(.038,.095,8),l);d.position.y=.165,d.name="spark",e.add(c,h,d),e.position.set(.26,-.24,-.46)}else if(s==="javelin"){const c=new ee({color:14394187,metalness:.86,roughness:.24}),h=new m(new oe(.014,.016,1.35,8),o);h.rotation.x=Math.PI/2,h.position.set(0,.02,-.35);const d=new m(new oe(.018,.018,.24,8),a);d.rotation.x=Math.PI/2,d.position.set(0,.02,-.05);const u=new m(new oe(.018,.016,.12,8),c);u.rotation.x=Math.PI/2,u.position.set(0,.02,-1);const f=new m(new ze(.036,.24,4),c);f.rotation.x=-Math.PI/2,f.position.set(0,.02,-1.16),e.add(h,d,u,f),e.rotation.set(.06,.08,0),e.position.set(.27,-.2,-.25)}else if(s==="xiphos"){const c=new ee({color:14920786,metalness:.88,roughness:.22}),h=new m(new N(.016,.66,.068),c);h.position.set(0,.34,0);const d=new m(new ze(.036,.16,4),c);d.position.set(0,.74,0);const u=new m(new N(.036,.036,.18),i);u.position.set(0,.01,0);const f=new m(new oe(.024,.024,.22,8),r);f.position.set(0,-.12,0);const g=new m(new Ze(.036,8,8),i);g.position.set(0,-.24,0),e.add(h,d,u,f,g),e.rotation.set(-.38,-.26,.26),e.position.set(.32,-.32,-.52)}else if(s==="throwing_axe"){const c=new m(new oe(.018,.022,.56,8),o);c.position.set(0,.06,0);const h=new m(new oe(.024,.024,.16,8),r);h.position.set(0,-.14,0);const d=new m(new N(.022,.14,.16),t);d.position.set(0,.28,-.06);const u=new m(new N(.014,.22,.12),n);u.position.set(0,.23,-.15),e.add(c,h,d,u),e.rotation.set(.28,-.18,.18),e.position.set(.28,-.26,-.48)}else if(s==="viking_sword"){const c=new m(new N(.016,.88,.064),n);c.position.set(0,.44,0);const h=new m(new N(.02,.72,.02),t);h.position.set(0,.42,0);const d=new m(new ze(.034,.14,4),n);d.position.set(0,.94,0);const u=new m(new N(.036,.036,.22),t);u.position.set(0,0,0);const f=new m(new oe(.024,.026,.22,8),r);f.position.set(0,-.12,0);const g=new m(new N(.05,.055,.1),i);g.position.set(0,-.24,0),e.add(c,h,d,u,f,g),e.rotation.set(-.34,-.24,.24),e.position.set(.32,-.34,-.52)}else if(s==="mosin_scoped"){const c=new m(new oe(.017,.02,.96,8),t);c.rotation.x=Math.PI/2,c.position.set(0,.028,-.56);const h=new m(new N(.056,.072,.78),o);h.position.set(0,-.008,-.26);const d=new m(new oe(.01,.01,.09,6),n);d.rotation.z=Math.PI/2,d.position.set(.05,.02,-.06);const u=new m(new oe(.022,.025,.38,12),t);u.rotation.x=Math.PI/2,u.position.set(0,.082,-.18);const f=new m(new N(.028,.048,.12),t);f.position.set(0,.052,-.16);const g=new m(new oe(.019,.019,.01,12),new st({color:10216191}));g.rotation.x=Math.PI/2,g.position.set(0,.082,.015);const v=new m(new N(.052,.11,.34),o);v.position.set(0,-.048,.2),v.rotation.x=.12,e.add(c,h,d,u,f,g,v),e.position.set(.24,-.24,-.32)}else if(s==="sten_smg"){const c=new m(new oe(.032,.032,.42,12),t);c.rotation.x=Math.PI/2,c.position.set(0,.01,-.16);const h=new m(new oe(.028,.028,.28,12),t);h.rotation.x=Math.PI/2,h.position.set(0,.01,-.48);const d=new m(new oe(.014,.014,.14,8),t);d.rotation.x=Math.PI/2,d.position.set(0,.01,-.66);const u=new m(new N(.26,.028,.046),t);u.position.set(-.14,.01,-.24);const f=new m(new oe(.012,.012,.34,8),t);f.rotation.x=Math.PI/2,f.position.set(0,-.02,.18);const g=new m(new N(.036,.13,.05),r);g.position.set(0,-.08,.05),g.rotation.x=.22,e.add(c,h,d,u,f,g),e.position.set(.24,-.22,-.34)}else if(s==="heavy_pistol"){const c=new m(new N(.048,.068,.34),t);c.position.set(0,.035,-.22);const h=new m(new N(.044,.044,.28),r);h.position.set(0,-.01,-.18);const d=new m(new N(.008,.02,.02),n);d.position.set(0,.075,-.37);const u=new m(new N(.042,.15,.068),r);u.position.set(0,-.09,-.05),u.rotation.x=.26,e.add(c,h,d,u),e.position.set(.23,-.22,-.36)}else if(s==="combat_knife"){const c=new m(new N(.012,.34,.045),n);c.position.set(0,.18,0);const h=new m(new ze(.024,.1,4),n);h.position.set(0,.39,0);const d=new m(new N(.028,.022,.11),t);d.position.set(0,.01,0);const u=new m(new oe(.02,.022,.16,8),r);u.position.set(0,-.08,0),e.add(c,h,d,u),e.rotation.set(-.42,-.28,.32),e.position.set(.28,-.26,-.48)}return e.userData.basePos=e.position.clone(),e.userData.baseRot=e.rotation.clone(),e}const an={west:[{id:"earp",era:"west",name:"Wyatt Earp",bio:"Lawman of Tombstone, 1881.",strengthLabel:"Iron Lawman",strengthDesc:"Takes 25% less damage from enemy fire.",hudTag:"-25% DMG",defaultWeaponIdx:0,mods:{damageTakenMult:.75}},{id:"jane",era:"west",name:"Calamity Jane",bio:"Scout and sharpshooter of Deadwood.",strengthLabel:"Deadwood Scout",strengthDesc:"Moves 18% faster across streets and cover.",hudTag:"+18% SPEED",defaultWeaponIdx:2,mods:{moveSpeedMult:1.18}},{id:"billy",era:"west",name:"Billy the Kid",bio:"Young gunman of New Mexico.",strengthLabel:"Quick Draw",strengthDesc:"Fires 22% faster and reloads 28% faster.",hudTag:"FAST DRAW",defaultWeaponIdx:0,mods:{fireRateMult:.78,reloadTimeMult:.72}}],japan:[{id:"musashi",era:"japan",name:"Miyamoto Musashi",bio:"Undefeated duellist, master of two swords.",strengthLabel:"Two Heavens Style",strengthDesc:"Faster katana strikes (+28% speed) with +1.2 m reach.",hudTag:"SWIFT BLADE",defaultWeaponIdx:0,mods:{meleeFireRateMult:.72,meleeRangeBonus:1.2}},{id:"tomoe",era:"japan",name:"Tomoe Gozen",bio:"Woman warrior of the Genpei War, famous archer.",strengthLabel:"Genpei Archer",strengthDesc:"Shoots and nocks the Yumi Longbow nearly twice as fast.",hudTag:"2× BOW RATE",defaultWeaponIdx:1,mods:{weaponOverrides:{yumi:{fireRateMult:.52,reloadTimeMult:.52}}}},{id:"masamune",era:"japan",name:"Date Masamune",bio:"The One-Eyed Dragon of Sendai.",strengthLabel:"Black Lacquer Armor",strengthDesc:"Takes 30% less damage from enemy attacks.",hudTag:"-30% DMG",defaultWeaponIdx:0,mods:{damageTakenMult:.7}}],swiss:[{id:"tell",era:"swiss",name:"Wilhelm Tell",bio:"The crossbowman of Uri.",strengthLabel:"Uri Marksman",strengthDesc:"Reloads the crossbow 40% faster.",hudTag:"40% FASTER BOLTS",defaultWeaponIdx:0,mods:{weaponOverrides:{crossbow:{reloadTimeMult:.6,fireRateMult:.8},repeater:{reloadTimeMult:.6}}}},{id:"winkelried",era:"swiss",name:"Arnold von Winkelried",bio:"Hero of Sempach, from Nidwalden.",strengthLabel:"Heart of Sempach",strengthDesc:"Starts with 50% more health.",hudTag:"+50% HEALTH",defaultWeaponIdx:1,mods:{maxHpMult:1.5}},{id:"stauffacher",era:"swiss",name:"Werner Stauffacher",bio:"Man of Schwyz, of the Rütli oath.",strengthLabel:"Elder of Schwyz",strengthDesc:"Slowly recovers health when out of danger.",hudTag:"OUT-OF-COMBAT REGEN",defaultWeaponIdx:0,mods:{regenRate:5,regenDelay:4}}],greece:[{id:"ulysses",era:"greece",name:"Ulysses",bio:"King of Ithaca, the cunning one.",strengthLabel:"King of Ithaca",strengthDesc:"Throws javelins 25% faster and 25% harder.",hudTag:"+25% JAVELIN",defaultWeaponIdx:0,mods:{weaponOverrides:{javelin:{fireRateMult:.78,reloadTimeMult:.8,damageMult:1.25}}}},{id:"achilles",era:"greece",name:"Achilles",bio:"Greatest warrior of the Trojan War.",strengthLabel:"Bronze Panoply",strengthDesc:"Takes 33% less damage from enemy attacks.",hudTag:"-33% DMG",defaultWeaponIdx:0,mods:{damageTakenMult:.67}},{id:"heracles",era:"greece",name:"Heracles",bio:"Strongest of heroes.",strengthLabel:"Twelve Labors",strengthDesc:"Starts with 60% more health.",hudTag:"+60% HEALTH",defaultWeaponIdx:1,mods:{maxHpMult:1.6}}],scandinavia:[{id:"erik",era:"scandinavia",name:"Erik the Red",bio:"Outlaw and founder of Greenland.",strengthLabel:"Greenland Outlaw",strengthDesc:"Throws axes 30% faster and reloads 25% faster.",hudTag:"FAST AXES",defaultWeaponIdx:0,mods:{weaponOverrides:{throwing_axe:{fireRateMult:.7,reloadTimeMult:.75}}}},{id:"leif",era:"scandinavia",name:"Leif Erikson",bio:"His son, who sailed to Vinland.",strengthLabel:"Vinland Voyager",strengthDesc:"Takes 33% less damage from enemy attacks.",hudTag:"-33% DMG",defaultWeaponIdx:0,mods:{damageTakenMult:.67}},{id:"ragnar",era:"scandinavia",name:"Ragnar Lothbrok",bio:"Legendary sea-king and raider.",strengthLabel:"Sea-King Blade",strengthDesc:"Strikes 28% faster and 35% harder with the Viking Sword.",hudTag:"FIERCE SWORD",defaultWeaponIdx:1,mods:{meleeFireRateMult:.72,meleeDamageMult:1.35}}],normandy:[{id:"pavlichenko",era:"normandy",name:"Lyudmila Pavlichenko",bio:"Soviet sniper of the Eastern Front.",strengthLabel:"Scoped Bolt Rifle",strengthDesc:"Telescopic bolt-action rifle (RMB scope); one shot fells an ordinary soldier, slow fire & 5-round clip.",hudTag:"SNIPER RIFLE",defaultWeaponIdx:0,weaponIds:["mosin_scoped","combat_knife"],mods:{}},{id:"hall",era:"normandy",name:"Virginia Hall",bio:'American spy with the French Resistance, "the limping lady".',strengthLabel:"Sten SMG & Stealth",strengthDesc:"Full-auto 32-round Sten SMG; enemies notice her later by sight and sound.",hudTag:"STEN + STEALTH",defaultWeaponIdx:0,weaponIds:["sten_smg","combat_knife"],mods:{stealthMult:.42,soundAlertRadius:13}},{id:"bavaud",era:"normandy",name:"Maurice Bavaud",bio:"Young man from Neuchâtel, Switzerland, who set out to shoot Hitler in 1938.",strengthLabel:"Heavy Pistol",strengthDesc:"Carries a hard-hitting semi-automatic pistol that deals high damage per shot.",hudTag:"HEAVY PISTOL",defaultWeaponIdx:0,weaponIds:["heavy_pistol","combat_knife"],mods:{}}]};function El(s,e){const t=an[s]||an.west;return t.find(n=>n.id===e)||t[0]}function km(s){const e=new Xe,t=new ee({color:15120018,roughness:.7}),n=new ee({color:14263422,roughness:.74}),i=new ee({color:14858394,roughness:.76}),o=new ee({color:1578776,roughness:.82}),r=new ee({color:1447967,metalness:.62,roughness:.32}),a=new ee({color:2763826,roughness:.8}),l=new ee({color:15722196,roughness:.84}),c=new ee({color:16184300,roughness:.78}),h=new ee({color:12067362,roughness:.62}),d=new ee({color:12751448,roughness:.88}),u=new ee({color:10054968,roughness:.9}),f=new ee({color:7035458,roughness:.9}),g=new ee({color:3875862,roughness:.8}),v=new ee({color:1709331,roughness:.88}),x=new ee({color:7027488,roughness:.85}),p=new ee({color:4862238,roughness:.92}),y=new ee({color:15394784,roughness:.9}),M=new ee({color:10003634,metalness:.78,roughness:.42}),w=new ee({color:14213868,metalness:.92,roughness:.18}),P=new ee({color:15909444,metalness:.88,roughness:.22}),C=new ee({color:4532247,roughness:.82}),L=new st({color:1445900});function D({torsoMat:F,legsMat:I,armsMat:H,bootsMat:q=g,skin:J=t,slim:he=!1}){const _e=he?.095:.11,U=new oe(_e,_e*.88,.84,10),k=new m(U,I);k.position.set(-.15,.42,0);const K=new m(U,I);K.position.set(.15,.42,0);const V=new N(.16,.22,.27),ie=new m(V,q);ie.position.set(0,-.34,.04),k.add(ie),K.add(ie.clone());const be=he?.48:.56,Pe=new m(new N(be,.74,.3),F);Pe.position.set(0,1.18,0);const Oe=he?.072:.085,xe=new oe(Oe,Oe*.86,.64,8),re=new m(xe,H);re.position.set(-(be*.5+.1),1.18,.04),re.rotation.z=.12;const E=new m(xe,H);E.position.set(be*.5+.1,1.18,.14),E.rotation.x=-.65,E.rotation.z=-.1;const se=new Ze(.068,8,8),W=new m(se,J);W.position.set(0,-.33,0),re.add(W);const le=new m(se,J);le.position.set(0,-.33,0),E.add(le);const Y=new m(new Ze(.205,14,12),J);Y.position.set(0,1.74,0);const Se=new m(new Ze(.023,6,6),L);Se.position.set(-.07,.03,.185);const Ee=Se.clone();return Ee.position.x=.07,Y.add(Se,Ee),e.add(k,K,Pe,re,E,Y),{legL:k,legR:K,torso:Pe,armL:re,armR:E,head:Y,eyeL:Se,eyeR:Ee}}function T(){const F=new Xe,I=new m(new oe(.022,.024,.38,8),w);I.rotation.x=Math.PI/2,I.position.set(0,.02,.22);const H=new m(new N(.055,.09,.15),P);H.position.set(0,0,.03);const q=new m(new N(.045,.13,.065),C);return q.position.set(0,-.07,-.04),q.rotation.x=-.25,F.add(I,H,q),F}function b(){const F=new Xe,I=new m(new oe(.02,.022,1.15,8),w);I.rotation.x=Math.PI/2,I.position.set(0,.02,.35);const H=new m(new N(.055,.08,.24),P);H.position.set(0,0,-.05);const q=new m(new N(.05,.11,.42),C);return q.position.set(0,-.04,-.34),F.add(I,H,q),F}function O(F=1.05){const I=new Xe,H=new m(new N(.024,F,.048),w);H.position.y=F*.5+.08;const q=new m(new oe(.055,.055,.016,12),P);q.position.y=.08;const J=new m(new oe(.024,.024,.24,8),h);return J.position.y=-.04,I.add(H,q,J),I}function ae(){const F=new Xe,I=new m(new N(.08,.08,.72),C);I.position.set(0,0,.18);const H=new m(new N(.76,.032,.045),w);H.position.set(0,.03,.48);const q=new m(new N(.72,.008,.008),c);q.position.set(0,.03,.36);const J=new m(new oe(.01,.01,.42,6),w);return J.rotation.x=Math.PI/2,J.position.set(0,.055,.38),F.add(I,H,q,J),F}function ne(){const F=new Xe,I=new m(new oe(.028,.032,2.35,8),C);I.position.y=.55;const H=new m(new ze(.038,.44,4),w);H.position.y=1.92;const q=new m(new N(.025,.36,.3),w);q.position.set(0,1.54,.15);const J=new m(new ze(.032,.22,4),w);J.rotation.x=-Math.PI/2,J.position.set(0,1.54,-.12);const he=new m(new ze(.06,.18,8),h);return he.position.y=1.32,F.add(I,H,q,J,he),F}if(s==="earp"){const F=D({torsoMat:o,legsMat:o,armsMat:o,bootsMat:o,skin:n}),I=new m(new N(.62,.72,.14),o);I.position.set(0,.58,-.14);const H=new m(new N(.22,.72,.24),o);H.position.set(-.22,.58,.04);const q=H.clone();q.position.x=.22,e.add(I,H,q);const J=new m(new N(.2,.42,.04),c);J.position.set(0,1.28,.15);const he=new m(new N(.05,.3,.05),o);he.position.set(0,1.26,.165);const _e=new m(new oe(.068,.068,.02,6),P);_e.rotation.x=Math.PI/2,_e.position.set(.16,1.34,.165),e.add(J,he,_e);const U=new m(new N(.22,.055,.07),v);U.position.set(0,-.055,.18);const k=new m(new N(.08,.075,.06),v);k.position.set(-.11,-.085,.17),k.rotation.z=-.35;const K=k.clone();K.position.x=.11,K.rotation.z=.35,F.head.add(U,k,K);const V=new m(new oe(.45,.46,.036,18),o);V.position.y=.14;const ie=new m(new oe(.22,.23,.17,16),o);ie.position.y=.23;const be=new m(new oe(.235,.235,.035,16),P);be.position.y=.17,F.head.add(V,ie,be);const Pe=T();Pe.position.set(0,-.34,.04),Pe.rotation.x=.6,F.armR.add(Pe)}else if(s==="jane"){const F=D({torsoMat:d,legsMat:d,armsMat:d,bootsMat:g,skin:n,slim:!0}),I=new m(new N(.54,.18,.33),u);I.position.set(0,1.45,0);const H=new m(new N(.52,.28,.32),u);H.position.set(0,.78,0);const q=new m(new N(.54,.1,.34),g);q.position.set(0,.92,0),e.add(I,H,q);const J=new m(new vt(.17,.055,8,14),h);J.rotation.x=Math.PI/2,J.position.set(0,1.54,0);const he=new m(new ze(.16,.24,5),h);he.rotation.x=Math.PI,he.position.set(0,1.44,.16),e.add(J,he);const _e=new m(new N(.36,.56,.16),x);_e.position.set(0,-.14,-.14);const U=new m(new oe(.065,.05,.44,8),x);U.position.set(-.18,-.1,-.02);const k=U.clone();k.position.x=.18,F.head.add(_e,U,k);const K=new m(new oe(.42,.44,.036,16),g);K.position.y=.15;const V=new m(new oe(.19,.22,.21,12),g);V.position.y=.25,F.head.add(K,V);const ie=b();ie.position.set(-.08,-.25,.12),ie.rotation.set(.3,-.45,0),F.armR.add(ie)}else if(s==="billy"){const F=D({torsoMat:a,legsMat:a,armsMat:l,bootsMat:g,skin:t,slim:!0}),I=new m(new N(.16,.34,.04),l);I.position.set(0,1.38,.15);const H=new m(new vt(.15,.04,6,12),a);H.rotation.x=Math.PI/2,H.position.set(0,1.54,0);const q=new m(new N(.54,.11,.34),g);q.position.set(0,.88,0),q.rotation.z=-.14;for(let U=0;U<3;U++){const k=new m(new Ze(.022,6,6),P);k.position.set(0,1.24-U*.12,.16),e.add(k)}e.add(I,H,q);const J=new m(new oe(.38,.46,.06,16),g);J.position.set(.02,.14,0),J.rotation.set(.12,0,-.14);const he=new m(new ze(.22,.28,10),g);he.position.set(.04,.27,-.01),he.rotation.z=-.14,F.head.add(J,he);const _e=T();_e.position.set(0,-.34,.06),_e.rotation.x=.65,F.armR.add(_e)}else if(s==="musashi"){const F=new ee({color:2238e3,roughness:.88}),I=D({torsoMat:F,legsMat:F,armsMat:F,bootsMat:l,skin:n}),H=new m(new oe(.28,.42,.86,10),F);H.position.set(0,.56,0);const q=new m(new N(.59,.18,.34),l);q.position.set(0,.96,0);const J=new m(new N(.14,.48,.04),a);J.position.set(-.08,1.32,.155),J.rotation.z=-.35;const he=J.clone();he.position.x=.08,he.rotation.z=.35,e.add(H,q,J,he);const _e=new m(new Ze(.225,10,8),v);_e.position.set(0,.06,-.04);const U=new m(new un(.26,0),v);U.position.set(0,-.06,-.18),U.scale.set(1.2,1.45,.85);const k=new m(new ze(.08,.44,6),v);k.rotation.x=Math.PI,k.position.set(-.2,-.08,.02);const K=k.clone();K.position.x=.2;const V=new m(new vt(.215,.024,6,16),l);V.rotation.x=Math.PI/2,V.position.y=.09,I.head.add(_e,U,k,K,V);const ie=O(1.08);ie.position.set(0,-.32,.06),ie.rotation.set(.85,0,-.2),I.armR.add(ie),I.armL.rotation.x=-.55;const be=O(.68);be.position.set(0,-.32,.06),be.rotation.set(.95,0,.25),I.armL.add(be)}else if(s==="tomoe"){const F=D({torsoMat:c,legsMat:h,armsMat:c,bootsMat:l,skin:t,slim:!0}),I=new m(new oe(.26,.4,.84,12),h);I.position.set(0,.56,0);const H=new m(new N(.51,.46,.33),h);H.position.set(0,1.18,0);const q=new m(new N(.53,.08,.35),P);q.position.set(0,1.4,0);const J=new m(new N(.12,.32,.26),h);J.position.set(-.34,1.38,0);const he=J.clone();he.position.x=.34;const _e=new m(new N(.54,.14,.35),c);_e.position.set(0,.94,0),e.add(I,H,q,J,he,_e);const U=new m(new Ze(.215,12,10),v);U.position.set(0,.06,-.02);const k=new m(new N(.32,.88,.14),v);k.position.set(0,-.32,-.17);const K=new m(new vt(.21,.026,6,16),h);K.rotation.x=Math.PI/2,K.position.y=.09,F.head.add(U,k,K),F.armL.rotation.x=-.85;const V=new m(new vt(.75,.022,8,22,Math.PI*.9),C);V.rotation.y=Math.PI/2,V.rotation.z=-Math.PI*.45,V.position.set(0,-.15,.24);const ie=new m(new oe(.005,.005,1.42,6),c);ie.position.set(0,-.15,-.08),F.armL.add(V,ie);const be=new m(new oe(.01,.01,.85,6),C);be.rotation.x=Math.PI/2,be.position.set(0,-.32,.18),F.armR.add(be)}else if(s==="masamune"){const F=D({torsoMat:r,legsMat:r,armsMat:r,bootsMat:o,skin:n}),I=new m(new oe(.32,.46,.56,8),r);I.position.set(0,.72,0);const H=new m(new N(.16,.38,.32),r);H.position.set(-.39,1.4,0);const q=H.clone();q.position.x=.39;const J=new m(new N(.6,.12,.35),P);J.position.set(0,.96,0),e.add(I,H,q,J);const he=new m(new Ze(.062,8,8),o);he.scale.set(1.15,.9,.45),he.position.set(-.072,.02,.198);const _e=new m(new vt(.208,.015,6,16),o);_e.rotation.set(Math.PI/2,.22,0),_e.position.y=.04,F.head.add(he,_e);const U=new m(new Ze(.245,14,10,0,Math.PI*2,0,Math.PI*.5),r);U.position.y=.095;const k=new m(new oe(.24,.32,.18,12,1,!0,Math.PI*.45,Math.PI*1.1),r);k.position.set(0,-.01,-.02);const K=new m(new vt(.34,.036,8,22,Math.PI*1.15),P);K.position.set(.12,.47,.19),K.rotation.z=-Math.PI*.85;const V=new m(new oe(.045,.045,.04,10),P);V.rotation.x=Math.PI/2,V.position.set(0,.23,.23),F.head.add(U,k,K,V);const ie=O(1.06);ie.position.set(0,-.32,.06),ie.rotation.set(.85,0,-.15),F.armR.add(ie)}else if(s==="tell"){const F=D({torsoMat:f,legsMat:g,armsMat:f,bootsMat:g,skin:n}),I=new m(new oe(.3,.38,.46,10),f);I.position.set(0,.72,0);const H=new m(new N(.6,.15,.34),P);H.position.set(0,.96,0);const q=new m(new N(.58,.86,.09),h);q.position.set(0,1.06,-.2),q.rotation.x=.12,e.add(I,H,q);const J=new m(new ze(.19,.34,10),p);J.rotation.x=Math.PI,J.position.set(0,-.21,.1);const he=new m(new N(.24,.065,.08),p);he.position.set(0,-.07,.18);const _e=new m(new oe(.24,.26,.17,12),h);_e.position.y=.17;const U=new m(new ze(.05,.44,6),c);U.position.set(.18,.36,-.02),U.rotation.z=-.38,F.head.add(J,he,_e,U);const k=ae();k.position.set(-.08,-.28,.06),k.rotation.set(.45,-.25,0),F.armR.add(k)}else if(s==="winkelried"){const F=D({torsoMat:h,legsMat:M,armsMat:M,bootsMat:g,skin:n}),I=new m(new N(.29,.76,.32),c);I.position.set(.145,1.18,.005);const H=new m(new N(.3,.44,.32),h);H.position.set(-.15,.68,0);const q=new m(new N(.3,.44,.32),c);q.position.set(.15,.68,0);const J=new m(new N(.62,.11,.35),g);J.position.set(0,.92,0);const he=new m(new vt(.2,.065,8,14),M);he.rotation.x=Math.PI/2,he.position.set(0,1.54,0),e.add(I,H,q,J,he);const _e=new m(new Ze(.228,12,10,0,Math.PI*2,0,Math.PI*.72),M);_e.position.set(0,.03,-.02);const U=new m(new ze(.19,.32,10),p);U.rotation.x=Math.PI,U.position.set(0,-.2,.11);const k=new m(new N(.24,.06,.08),p);k.position.set(0,-.07,.18),F.head.add(_e,U,k);const K=ne();K.position.set(.06,-.58,.1),K.rotation.x=.62,F.armR.add(K)}else if(s==="stauffacher"){const F=D({torsoMat:a,legsMat:g,armsMat:a,bootsMat:g,skin:i}),I=new m(new oe(.3,.42,.62,10),a);I.position.set(0,.62,0);const H=new m(new ze(.46,.48,12),h);H.position.set(0,1.44,0);const q=new m(new N(.58,.11,.34),g);q.position.set(0,.96,0);const J=new m(new N(.04,.15,.03),c);J.position.set(-.14,1.35,.25);const he=new m(new N(.15,.04,.03),c);he.position.set(-.14,1.35,.25),e.add(I,H,q,J,he);const _e=new m(new ze(.17,.46,12),y);_e.rotation.x=Math.PI,_e.position.set(0,-.3,.11);const U=new m(new N(.22,.055,.07),y);U.position.set(0,-.08,.18);const k=new m(new N(.21,.028,.04),y);k.position.set(0,.085,.185);const K=new m(new Ze(.245,14,12,0,Math.PI*2,0,Math.PI*.56),h);K.position.set(0,.095,-.05);const V=new m(new oe(.23,.25,.26,12,1,!0,Math.PI*.55,Math.PI*.9),h);V.position.set(0,-.02,-.05);const ie=new m(new ze(.12,.45,8),h);ie.position.set(0,.12,-.32),ie.rotation.x=-1.15,F.head.add(_e,U,k,K,V,ie);const be=ae();be.position.set(-.06,-.28,.08),be.rotation.set(.45,-.2,0),F.armR.add(be)}else if(s==="ulysses"){const F=new ee({color:2383260,roughness:.8}),I=new ee({color:9403748,roughness:.94}),H=D({torsoMat:l,legsMat:n,armsMat:n,bootsMat:g,skin:n}),q=new m(new oe(.28,.35,.42,10),l);q.position.set(0,.76,0);const J=new m(new N(.58,.1,.33),P);J.position.set(0,.95,0);const he=new m(new N(.62,1.05,.1),F);he.position.set(0,1.04,-.2),he.rotation.x=.12;const _e=new m(new Ze(.05,8,8),P);_e.position.set(.18,1.48,.16),e.add(q,J,he,_e);const U=new m(new ze(.18,.32,10),p);U.rotation.x=Math.PI,U.position.set(0,-.22,.1);const k=new m(new N(.22,.055,.07),p);k.position.set(0,-.07,.18);const K=new m(new ze(.24,.38,14),I);K.position.set(0,.27,-.01),H.head.add(U,k,K);const V=new m(new oe(.02,.022,1.95,8),C);V.position.set(0,.2,.08),V.rotation.x=.65;const ie=new m(new ze(.042,.24,4),P);ie.position.set(0,1.06,.68),ie.rotation.x=.65,H.armR.add(V,ie)}else if(s==="achilles"){const F=new ee({color:14459972,metalness:.86,roughness:.24}),I=D({torsoMat:F,legsMat:n,armsMat:n,bootsMat:F,skin:n}),H=new m(new oe(.29,.36,.4,10),h);H.position.set(0,.76,0);const q=new m(new N(.6,1.08,.09),h);q.position.set(0,1.04,-.21),q.rotation.x=.13;const J=new m(new oe(.115,.1,.44,10),F);J.position.set(0,-.18,0),I.legL.add(J),I.legR.add(J.clone()),e.add(H,q);const he=new m(new Ze(.245,14,10,0,Math.PI*2,0,Math.PI*.56),F);he.position.y=.085;const _e=new m(new N(.055,.16,.13),F);_e.position.set(-.17,-.05,.12);const U=_e.clone();U.position.x=.17;const k=new m(new N(.11,.26,.58),h);k.position.set(0,.36,-.04),I.head.add(he,_e,U,k);const K=new m(new oe(.46,.46,.06,22),F);K.rotation.x=Math.PI/2,K.position.set(-.08,-.16,.22);const V=new m(new Ze(.12,10,8),P);V.position.set(0,.03,0),K.add(V),I.armL.add(K);const ie=O(.76);ie.position.set(0,-.3,.08),ie.rotation.set(.85,0,-.15),I.armR.add(ie)}else if(s==="heracles"){const F=new ee({color:13210428,roughness:.92}),I=new ee({color:9394974,roughness:.95}),H=D({torsoMat:n,legsMat:n,armsMat:n,bootsMat:g,skin:n});H.torso.scale.set(1.16,1.06,1.14);const q=new m(new N(.76,.3,.44),I);q.position.set(0,1.48,-.02);const J=new m(new N(.68,1.1,.12),F);J.position.set(0,1,-.23),J.rotation.x=.12;const he=new m(new oe(.32,.38,.44,10),F);he.position.set(0,.78,0),e.add(q,J,he);const _e=new m(new Ze(.26,12,10,0,Math.PI*2,0,Math.PI*.58),F);_e.position.set(0,.09,-.02);const U=new m(new vt(.25,.075,8,14),I);U.position.set(0,.04,-.02);const k=new m(new Ze(.065,8,8),F);k.position.set(-.18,.26,.02);const K=k.clone();K.position.x=.18;const V=new m(new ze(.18,.3,10),p);V.rotation.x=Math.PI,V.position.set(0,-.22,.1),H.head.add(_e,U,k,K,V);const ie=new m(new oe(.11,.042,1.15,8),C);ie.position.set(0,-.05,.25),ie.rotation.x=.85,H.armR.add(ie)}else if(s==="erik"){const F=new ee({color:12074520,roughness:.88}),I=new ee({color:3877922,roughness:.95}),H=new ee({color:5195324,roughness:.88}),q=D({torsoMat:H,legsMat:g,armsMat:H,bootsMat:g,skin:t}),J=new m(new N(.74,.28,.42),I);J.position.set(0,1.48,-.02);const he=new m(new N(.68,1.12,.12),I);he.position.set(0,1,-.22),he.rotation.x=.12;const _e=new m(new N(.6,.11,.34),g);_e.position.set(0,.94,0),e.add(J,he,_e);const U=new m(new Ze(.225,12,10,0,Math.PI*2,0,Math.PI*.6),F);U.position.set(0,.07,-.02);const k=new m(new N(.36,.44,.16),F);k.position.set(0,-.08,-.15);const K=new m(new ze(.2,.38,10),F);K.rotation.x=Math.PI,K.position.set(0,-.24,.1);const V=new m(new N(.24,.06,.08),F);V.position.set(0,-.07,.18),q.head.add(U,k,K,V);const ie=new m(new oe(.024,.026,.85,8),C);ie.position.set(0,-.12,.22),ie.rotation.x=.85;const be=new m(new N(.028,.24,.2),w);be.position.set(0,.18,.56),q.armR.add(ie,be)}else if(s==="leif"){const F=new ee({color:15123557,roughness:.86}),I=new ee({color:1985932,roughness:.78}),H=D({torsoMat:M,legsMat:a,armsMat:I,bootsMat:g,skin:t}),q=new m(new N(.68,.24,.38),I);q.position.set(0,1.48,-.01);const J=new m(new N(.66,1.14,.1),I);J.position.set(0,1,-.22),J.rotation.x=.12;const he=new m(new Ze(.055,8,8),w);he.position.set(.18,1.48,.18);const _e=new m(new N(.59,.1,.34),g);_e.position.set(0,.94,0),e.add(q,J,he,_e);const U=new m(new Ze(.22,12,10,0,Math.PI*2,0,Math.PI*.58),F);U.position.set(0,.075,-.02);const k=new m(new N(.32,.36,.14),F);k.position.set(0,-.06,-.14);const K=new m(new ze(.17,.3,10),F);K.rotation.x=Math.PI,K.position.set(0,-.22,.1);const V=new m(new N(.22,.055,.07),F);V.position.set(0,-.07,.18),H.head.add(U,k,K,V);const ie=new m(new oe(.024,.026,.85,8),C);ie.position.set(0,-.12,.22),ie.rotation.x=.85;const be=new m(new N(.028,.24,.2),w);be.position.set(0,.18,.56),H.armR.add(ie,be)}else if(s==="ragnar"){const F=new ee({color:3154972,roughness:.76}),I=new ee({color:5393480,roughness:.95}),H=D({torsoMat:F,legsMat:a,armsMat:F,bootsMat:g,skin:n}),q=new m(new N(.74,.26,.42),I);q.position.set(0,1.48,-.02);const J=new m(new N(.6,.1,.34),g);J.position.set(0,1.24,0),J.rotation.z=.42;const he=new m(new oe(.3,.38,.42,8),F);he.position.set(0,.74,0),e.add(q,J,he);const _e=new m(new Ze(.22,12,10,0,Math.PI*2,0,Math.PI*.58),v);_e.position.set(0,.07,-.02);const U=new m(new oe(.042,.032,.48,6),v);U.position.set(-.18,-.12,-.06);const k=U.clone();k.position.x=.18;const K=new m(new oe(.055,.04,.56,6),v);K.position.set(0,-.14,-.19);const V=new m(new ze(.18,.44,10),v);V.rotation.x=Math.PI,V.position.set(0,-.27,.1);const ie=new m(new vt(.055,.016,6,10),P);ie.rotation.x=Math.PI/2,ie.position.set(0,-.34,.11),H.head.add(_e,U,k,K,V,ie);const be=O(1);be.position.set(0,-.3,.06),be.rotation.set(.85,0,-.15),H.armR.add(be)}else if(s==="pavlichenko"){const F=new ee({color:6120514,roughness:.84}),I=D({torsoMat:F,legsMat:F,armsMat:F,bootsMat:o,skin:t,slim:!0}),H=new m(new oe(.24,.34,.44,10),F);H.position.set(0,.74,0);const q=new m(new N(.52,.1,.33),g);q.position.set(0,.96,0);const J=new m(new N(.24,.09,.32),F);J.position.set(0,1.54,0),e.add(H,q,J);const he=new m(new N(.32,.32,.14),v);he.position.set(0,-.05,-.13);const _e=new m(new oe(.055,.05,.24,8),v);_e.position.set(-.17,-.04,-.02);const U=_e.clone();U.position.x=.17;const k=new m(new N(.18,.15,.42),F);k.position.set(.03,.21,.02),k.rotation.z=-.18;const K=new m(new Ze(.028,6,6),h);K.position.set(.05,.21,.23),I.head.add(he,_e,U,k,K);const V=b(),ie=new m(new oe(.022,.024,.36,10),a);ie.rotation.x=Math.PI/2,ie.position.set(0,.08,.05),V.add(ie),V.position.set(-.08,-.24,.12),V.rotation.set(.3,-.45,0),I.armR.add(V)}else if(s==="hall"){const F=new ee({color:10259309,roughness:.85}),I=new ee({color:2500660,roughness:.88}),H=D({torsoMat:F,legsMat:a,armsMat:F,bootsMat:g,skin:t,slim:!0}),q=new m(new oe(.27,.38,.66,12),F);q.position.set(0,.64,0);const J=new m(new N(.54,.1,.34),F);J.position.set(0,.96,0);const he=new m(new N(.24,.32,.04),a);he.position.set(0,1.36,.155);const _e=new m(new oe(.06,.055,.36,8),C);_e.position.set(0,-.18,0),H.legL.add(_e),e.add(q,J,he);const U=new m(new N(.32,.34,.14),x);U.position.set(0,-.05,-.13);const k=new m(new oe(.26,.21,.1,16),I);k.position.set(-.04,.19,-.01),k.rotation.z=.22,H.head.add(U,k);const K=new Xe,V=new m(new oe(.026,.026,.62,10),a);V.rotation.x=Math.PI/2,V.position.set(0,0,.22);const ie=new m(new N(.24,.026,.042),a);ie.position.set(-.12,0,.18),K.add(V,ie),K.position.set(0,-.32,.06),K.rotation.x=.65,H.armR.add(K)}else if(s==="bavaud"){const F=new ee({color:2237998,roughness:.82}),I=D({torsoMat:F,legsMat:a,armsMat:F,bootsMat:o,skin:t,slim:!0}),H=new m(new N(.54,.68,.32),F);H.position.set(0,.62,0);const q=new m(new N(.16,.26,.04),c);q.position.set(0,1.38,.155);const J=new m(new N(.045,.22,.05),a);J.position.set(0,1.35,.165),e.add(H,q,J);const he=new m(new Ze(.215,12,10,0,Math.PI*2,0,Math.PI*.54),v);he.position.set(0,.065,-.02),I.head.add(he);const _e=new Xe,U=new m(new N(.048,.068,.28),a);U.position.set(0,.02,.16);const k=new m(new N(.042,.12,.06),g);k.position.set(0,-.06,.02),_e.add(U,k),_e.position.set(0,-.34,.05),_e.rotation.x=.62,I.armR.add(_e)}const fe=s==="earp"||s==="jane"||s==="billy"?7029800:s==="musashi"||s==="tomoe"||s==="masamune"?4540738:s==="ulysses"||s==="achilles"||s==="heracles"?15261904:s==="erik"||s==="leif"||s==="ragnar"?4938862:s==="pavlichenko"||s==="hall"||s==="bavaud"?6053980:6120041,j=new m(new oe(.72,.82,.16,20),new ee({color:fe,roughness:.78}));j.position.y=-.08;const $=new m(new vt(.76,.025,8,28),P);return $.rotation.x=Math.PI/2,$.position.y=.01,e.add(j,$),e}const Ke=new Map;function Mt(s,e){const t=document.createElement("canvas");return t.width=s,t.height=e,t}function yt(s,e=1,t=1,n=!0){const i=new nd(s);return i.wrapS=hs,i.wrapT=hs,i.repeat.set(e,t),n&&(i.colorSpace=Yt),i.anisotropy=8,i.needsUpdate=!0,i}function Gn(s,e){const t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function Vn(s="western",e=2,t=2){const n=`wood_${s}_${e}_${t}`;if(Ke.has(n))return Ke.get(n);const i=512,o=Mt(i,i),r=o.getContext("2d"),a=Mt(i,i),l=a.getContext("2d"),c={western:["#8b5a34","#7a4c2a","#9c673c","#6e4223","#a67346"],saloon:["#6a3820","#5b2e19","#794126","#4f2614","#864c2e"],weathered:["#9c8669","#8a765c","#ab9578","#7d6a52","#b39e82"],darkJapan:["#3d271c","#332017","#493022","#2b1a12","#523626"],cedar:["#7d4e2d","#6f4426","#8a5935","#633c20","#94623c"],alpine:["#6b4428","#5c3920","#7a4f30","#4f301a","#855838"],redLacquer:["#b8291e","#a32118","#c73226","#911c14","#cf3b2e"]},h=c[s]||c.western,d=8,u=i/d;for(let g=0;g<d;g++){const v=g*u,x=h[g%h.length];r.fillStyle=x,r.fillRect(0,v,i,u),l.fillStyle="#9a9a9a",l.fillRect(0,v,i,u);for(let y=0;y<36;y++){const M=v+Math.random()*u,w=.05+Math.random()*.1;r.strokeStyle=Math.random()>.5?`rgba(255,220,180,${w})`:`rgba(20,10,4,${w*1.4})`,r.lineWidth=1+Math.random()*2,r.beginPath(),r.moveTo(0,M);for(let P=0;P<=i;P+=64)r.lineTo(P,M+Math.sin(P*.02+g*2.1+y)*2.2);r.stroke(),l.strokeStyle=Math.random()>.5?"rgba(220,220,220,0.16)":"rgba(60,60,60,0.18)",l.lineWidth=1.2,l.beginPath(),l.moveTo(0,M),l.lineTo(i,M),l.stroke()}if(Gn(g,3.7)>.45){const y=60+Gn(g,9.1)*(i-120),M=v+u*(.3+Gn(g,5.2)*.4),w=r.createRadialGradient(y,M,1,y,M,12);w.addColorStop(0,"rgba(30,15,6,0.65)"),w.addColorStop(1,"rgba(30,15,6,0)"),r.fillStyle=w,r.beginPath(),r.ellipse(y,M,14,7,0,0,Math.PI*2),r.fill()}r.fillStyle="rgba(15, 8, 3, 0.85)",r.fillRect(0,v,i,3),r.fillStyle="rgba(255, 225, 185, 0.14)",r.fillRect(0,v+3,i,2),l.fillStyle="#141414",l.fillRect(0,v,i,3.5);const p=(g*173+95)%(i-80)+40;r.fillStyle="rgba(12,6,2,0.75)",r.fillRect(p,v,2.5,u),l.fillStyle="#1a1a1a",l.fillRect(p,v,2.5,u);for(const y of[p-10,p+12])for(const M of[v+12,v+u-12])r.fillStyle="#241c16",r.beginPath(),r.arc(y,M,2.6,0,Math.PI*2),r.fill()}const f={map:yt(o,e,t,!0),bumpMap:yt(a,e,t,!1)};return Ke.set(n,f),f}function fn(s="desert",e=24,t=24){const n=`ground_${s}_${e}_${t}`;if(Ke.has(n))return Ke.get(n);const i=512,o=Mt(i,i),r=o.getContext("2d"),a=Mt(i,i),l=a.getContext("2d");if(s==="desert"){r.fillStyle="#c48f56",r.fillRect(0,0,i,i),l.fillStyle="#808080",l.fillRect(0,0,i,i);for(let h=0;h<420;h++){const d=Math.random()*i,u=Math.random()*i,f=6+Math.random()*34,g=Math.random();r.fillStyle=g>.6?"rgba(218, 168, 108, 0.16)":g>.25?"rgba(155, 96, 48, 0.16)":"rgba(122, 74, 38, 0.12)",r.beginPath(),r.ellipse(d,u,f*1.4,f*.7,Math.random()*Math.PI,0,Math.PI*2),r.fill(),l.fillStyle=g>.5?"rgba(195,195,195,0.18)":"rgba(65,65,65,0.18)",l.beginPath(),l.arc(d,u,f*.45,0,Math.PI*2),l.fill()}for(let h=0;h<240;h++){const d=Math.random()*i,u=Math.random()*i;r.fillStyle=Math.random()>.5?"#8f5d34":"#dcb27b",r.fillRect(d,u,2+Math.random()*3,2+Math.random()*2)}}else if(s==="japan_moss"){r.fillStyle="#4e6338",r.fillRect(0,0,i,i),l.fillStyle="#808080",l.fillRect(0,0,i,i);for(let h=0;h<500;h++){const d=Math.random()*i,u=Math.random()*i,f=8+Math.random()*26,g=Math.random();r.fillStyle=g>.65?"rgba(98, 128, 62, 0.22)":g>.3?"rgba(64, 84, 42, 0.22)":"rgba(115, 92, 62, 0.18)",r.beginPath(),r.arc(d,u,f,0,Math.PI*2),r.fill(),l.fillStyle=g>.5?"rgba(200,200,200,0.16)":"rgba(60,60,60,0.16)",l.beginPath(),l.arc(d,u,f*.5,0,Math.PI*2),l.fill()}for(let h=0;h<95;h++)r.fillStyle="rgba(255, 196, 214, 0.65)",r.beginPath(),r.ellipse(Math.random()*i,Math.random()*i,3,1.8,Math.random()*3,0,Math.PI*2),r.fill()}else if(s==="zen_sand"){r.fillStyle="#dfd8c8",r.fillRect(0,0,i,i),l.fillStyle="#808080",l.fillRect(0,0,i,i);for(let h=0;h<i;h+=16){r.strokeStyle="rgba(145, 136, 120, 0.55)",r.lineWidth=5,r.beginPath();for(let d=0;d<=i;d+=16){const u=h+Math.sin(d/i*Math.PI*4)*5;d===0?r.moveTo(d,u):r.lineTo(d,u)}r.stroke(),l.strokeStyle="#303030",l.lineWidth=6,l.beginPath();for(let d=0;d<=i;d+=16){const u=h+Math.sin(d/i*Math.PI*4)*5;d===0?l.moveTo(d,u):l.lineTo(d,u)}l.stroke()}}else if(s==="alpine_meadow"){r.fillStyle="#4f8236",r.fillRect(0,0,i,i),l.fillStyle="#808080",l.fillRect(0,0,i,i);for(let d=0;d<650;d++){const u=Math.random()*i,f=Math.random()*i,g=6+Math.random()*26,v=Math.random();r.fillStyle=v>.6?"rgba(112, 162, 62, 0.24)":v>.25?"rgba(62, 110, 42, 0.22)":"rgba(146, 178, 72, 0.16)",r.beginPath(),r.arc(u,f,g,0,Math.PI*2),r.fill(),l.fillStyle=v>.5?"rgba(200,200,200,0.16)":"rgba(70,70,70,0.16)",l.beginPath(),l.arc(u,f,g*.4,0,Math.PI*2),l.fill()}const h=["#ffe359","#ffffff","#63a8ff","#ff94b8"];for(let d=0;d<110;d++)r.fillStyle=h[d%h.length],r.beginPath(),r.arc(Math.random()*i,Math.random()*i,2.2,0,Math.PI*2),r.fill()}else if(s==="cobble"){r.fillStyle="#6c655d",r.fillRect(0,0,i,i),l.fillStyle="#252525",l.fillRect(0,0,i,i);const h=8,d=8,u=i/d,f=i/h;for(let g=0;g<h;g++)for(let v=0;v<d;v++){const x=g%2*(u*.5),p=(v*u+x)%i,y=g*f,M=118+Math.floor(Gn(v,g)*44);r.fillStyle=`rgb(${M}, ${M-4}, ${M-10})`,r.fillRect(p+3,y+3,u-6,f-6),l.fillStyle="#d4d4d4",l.fillRect(p+3,y+3,u-6,f-6)}}else if(s==="greek_sand"){r.fillStyle="#e5cf9c",r.fillRect(0,0,i,i),l.fillStyle="#808080",l.fillRect(0,0,i,i);for(let h=0;h<420;h++){const d=Math.random()*i,u=Math.random()*i,f=8+Math.random()*28;r.fillStyle=Math.random()>.5?"rgba(248, 234, 198, 0.24)":"rgba(196, 162, 104, 0.16)",r.beginPath(),r.ellipse(d,u,f*1.5,f*.65,.25,0,Math.PI*2),r.fill(),l.fillStyle=Math.random()>.5?"rgba(190,190,190,0.16)":"rgba(70,70,70,0.16)",l.beginPath(),l.arc(d,u,f*.4,0,Math.PI*2),l.fill()}}else if(s==="arctic_snow"){r.fillStyle="#e6eff8",r.fillRect(0,0,i,i),l.fillStyle="#828282",l.fillRect(0,0,i,i);for(let h=0;h<380;h++){const d=Math.random()*i,u=Math.random()*i,f=10+Math.random()*34;r.fillStyle=Math.random()>.5?"rgba(255, 255, 255, 0.35)":"rgba(176, 202, 230, 0.22)",r.beginPath(),r.ellipse(d,u,f*1.4,f*.7,.4,0,Math.PI*2),r.fill(),l.fillStyle=Math.random()>.5?"rgba(210,210,210,0.18)":"rgba(65,65,65,0.18)",l.beginPath(),l.arc(d,u,f*.45,0,Math.PI*2),l.fill()}for(let h=0;h<120;h++)r.fillStyle="rgba(255, 255, 255, 0.8)",r.fillRect(Math.random()*i,Math.random()*i,2,2)}const c={map:yt(o,e,t,!0),bumpMap:yt(a,e,t,!1)};return Ke.set(n,c),c}function Xi(s="castle",e=2,t=2){const n=`stone_${s}_${e}_${t}`;if(Ke.has(n))return Ke.get(n);const i=512,o=Mt(i,i),r=o.getContext("2d"),a=Mt(i,i),l=a.getContext("2d"),c=s==="redrock"?"#7a3b22":s==="temple"?"#4a4d46":"#57534e";if(r.fillStyle=c,r.fillRect(0,0,i,i),l.fillStyle="#222222",l.fillRect(0,0,i,i),s==="redrock")for(let d=0;d<i;d+=6){const u=Math.sin(d*.045)*18+Math.cos(d*.11)*10,f=Math.min(255,Math.max(80,178+u)),g=Math.min(255,Math.max(40,86+u*.6)),v=Math.min(255,Math.max(25,50+u*.4));r.fillStyle=`rgb(${f|0},${g|0},${v|0})`,r.fillRect(0,d,i,7);const x=Math.min(240,Math.max(40,128+u*2.5))|0;l.fillStyle=`rgb(${x},${x},${x})`,l.fillRect(0,d,i,7)}else{const u=i/8;for(let f=0;f<8;f++){let g=f%2*-36;for(;g<i;){const v=64+Math.floor(Gn(g,f)*58),x=s==="temple"?108+Math.floor(Gn(g+3,f+5)*42):122+Math.floor(Gn(g+1,f+9)*52),p=s==="temple"?6:0;r.fillStyle=`rgb(${x}, ${x+p}, ${x-4})`,r.fillRect(g+3,f*u+3,v-5,u-5),r.fillStyle="rgba(255,255,255,0.12)",r.fillRect(g+3,f*u+3,v-5,4),l.fillStyle="#cfcfcf",l.fillRect(g+3,f*u+3,v-5,u-5),g+=v}}for(let f=0;f<90;f++)r.fillStyle=s==="temple"?"rgba(72, 108, 52, 0.22)":"rgba(60, 56, 48, 0.16)",r.beginPath(),r.arc(Math.random()*i,Math.random()*i,6+Math.random()*18,0,Math.PI*2),r.fill()}const h={map:yt(o,e,t,!0),bumpMap:yt(a,e,t,!1)};return Ke.set(n,h),h}function Hm(s=2,e=1){const t=`shoji_${s}_${e}`;if(Ke.has(t))return Ke.get(t);const n=512,i=Mt(n,n),o=i.getContext("2d"),r=o.createLinearGradient(0,0,0,n);r.addColorStop(0,"#fff2d2"),r.addColorStop(.55,"#f6dfb2"),r.addColorStop(1,"#e6c388"),o.fillStyle=r,o.fillRect(0,0,n,n);for(let h=0;h<200;h++)o.fillStyle="rgba(255,255,255,0.14)",o.fillRect(Math.random()*n,Math.random()*n,12,1);o.fillStyle="#2d1a11";const a=6,l=8;for(let h=0;h<=a;h++){const d=h/a*n;o.fillRect(d-5,0,10,n)}for(let h=0;h<=l;h++){const d=h/l*n;o.fillRect(0,d-4,n,8)}o.lineWidth=24,o.strokeStyle="#23130c",o.strokeRect(0,0,n,n);const c=yt(i,s,e,!0);return Ke.set(t,c),c}function fa(s="japan",e=4,t=2){const n=`roof_${s}_${e}_${t}`;if(Ke.has(n))return Ke.get(n);const i=512,o=Mt(i,i),r=o.getContext("2d"),a=Mt(i,i),l=a.getContext("2d");if(s==="japan"){r.fillStyle="#2e353f",r.fillRect(0,0,i,i),l.fillStyle="#404040",l.fillRect(0,0,i,i);const h=10,d=10,u=i/h,f=i/d;for(let g=0;g<d;g++)for(let v=0;v<h;v++){const x=v*u,p=g*f,y=r.createLinearGradient(x,p,x+u,p);y.addColorStop(0,"#1e242c"),y.addColorStop(.5,"#4c5766"),y.addColorStop(1,"#1d232b"),r.fillStyle=y,r.fillRect(x+2,p+2,u-4,f-3),r.fillStyle="rgba(0,0,0,0.55)",r.fillRect(x,p+f-4,u,4),l.fillStyle="#cccccc",l.beginPath(),l.arc(x+u/2,p+f/2,u*.42,0,Math.PI*2),l.fill()}}else if(s==="terracotta"){r.fillStyle="#a8472a",r.fillRect(0,0,i,i),l.fillStyle="#404040",l.fillRect(0,0,i,i);const h=10,d=9,u=i/h,f=i/d;for(let g=0;g<d;g++)for(let v=0;v<h;v++){const x=v*u,p=g*f,y=r.createLinearGradient(x,p,x+u,p);y.addColorStop(0,"#8c351e"),y.addColorStop(.5,"#d46b44"),y.addColorStop(1,"#7a2b17"),r.fillStyle=y,r.fillRect(x+2,p+2,u-4,f-3),r.fillStyle="rgba(0,0,0,0.4)",r.fillRect(x,p+f-4,u,4),l.fillStyle="#d0d0d0",l.fillRect(x+2,p+2,u-4,f-4)}}else{r.fillStyle="#4a3525",r.fillRect(0,0,i,i),l.fillStyle="#333333",l.fillRect(0,0,i,i);const h=12,d=10,u=i/d,f=i/h;for(let g=0;g<h;g++)for(let v=0;v<d;v++){const x=g%2*(u*.5),p=(v*u+x)%i,y=g*f,M=78+Math.floor(Gn(v,g)*34);r.fillStyle=`rgb(${M+18}, ${M}, ${M-16})`,r.fillRect(p+1,y+1,u-3,f-3),l.fillStyle="#c8c8c8",l.fillRect(p+1,y+1,u-3,f-3)}}const c={map:yt(o,e,t,!0),bumpMap:yt(a,e,t,!1)};return Ke.set(n,c),c}function Gm(s=1,e=1){const t=`alpine_fachwerk_${s}_${e}`;if(Ke.has(t))return Ke.get(t);const n=512,i=Mt(n,n),o=i.getContext("2d");o.fillStyle="#ebe1cd",o.fillRect(0,0,n,n);for(let a=0;a<300;a++)o.fillStyle=Math.random()>.5?"rgba(255,255,255,0.16)":"rgba(145,125,95,0.12)",o.beginPath(),o.arc(Math.random()*n,Math.random()*n,6+Math.random()*20,0,Math.PI*2),o.fill();o.strokeStyle="#3e2718",o.fillStyle="#3e2718",o.fillRect(0,0,n,28),o.fillRect(0,n-28,n,28),o.fillRect(0,n/2-12,n,24),o.fillRect(0,0,26,n),o.fillRect(n-26,0,26,n),o.fillRect(n/2-12,0,24,n),o.lineWidth=20,o.beginPath(),o.moveTo(20,n/2),o.lineTo(n/2,20),o.moveTo(n-20,n/2),o.lineTo(n/2,20),o.stroke();const r=yt(i,s,e,!0);return Ke.set(t,r),r}function Vm(s,e={}){const{bg:t="#3b2112",border:n="#d49a45",fg:i="#f8e6c1",sub:o="",width:r=512,height:a=160,font:l="bold 72px Georgia, serif"}=e,c=`sign_${s}_${o}_${t}_${i}`;if(Ke.has(c))return Ke.get(c);const h=Mt(r,a),d=h.getContext("2d");d.fillStyle=t,d.fillRect(0,0,r,a);for(let f=0;f<6;f++)d.fillStyle="rgba(0,0,0,0.16)",d.fillRect(0,f/6*a,r,2);d.strokeStyle=n,d.lineWidth=10,d.strokeRect(10,10,r-20,a-20),d.lineWidth=3,d.strokeRect(20,20,r-40,a-40),d.fillStyle=i,d.font=l,d.textAlign="center",d.textBaseline="middle",d.shadowColor="rgba(0,0,0,0.7)",d.shadowBlur=4,d.shadowOffsetY=3,d.fillText(s,r/2,o?a*.44:a*.52),o&&(d.font="bold 24px Georgia, serif",d.fillStyle=n,d.fillText(o,r/2,a*.78));const u=yt(h,1,1,!0);return u.wrapS=At,u.wrapT=At,Ke.set(c,u),u}function oo(s="austria"){const e=`banner_${s}`;if(Ke.has(e))return Ke.get(e);const t=Mt(256,512),n=t.getContext("2d");s==="austria"?(n.fillStyle="#c41e22",n.fillRect(0,0,256,512),n.fillStyle="#f2ede0",n.fillRect(0,170,256,170),n.strokeStyle="#d4a63e",n.lineWidth=14,n.strokeRect(7,7,242,498),n.fillStyle="#1d1916",n.beginPath(),n.moveTo(128,195),n.lineTo(170,245),n.lineTo(148,258),n.lineTo(160,315),n.lineTo(128,294),n.lineTo(96,315),n.lineTo(108,258),n.lineTo(86,245),n.closePath(),n.fill()):s==="uri"?(n.fillStyle="#f2c629",n.fillRect(0,0,256,512),n.strokeStyle="#1a1510",n.lineWidth=10,n.strokeRect(5,5,246,502),n.strokeStyle="#141210",n.lineWidth=22,n.lineCap="round",n.beginPath(),n.moveTo(78,178),n.quadraticCurveTo(32,130,56,78),n.moveTo(178,178),n.quadraticCurveTo(224,130,200,78),n.stroke(),n.fillStyle="#141210",n.beginPath(),n.ellipse(54,194,24,11,-.3,0,Math.PI*2),n.ellipse(202,194,24,11,.3,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(70,172),n.lineTo(186,172),n.lineTo(166,305),n.quadraticCurveTo(128,336,90,305),n.closePath(),n.fill(),n.fillStyle="#fff5dc",n.beginPath(),n.ellipse(98,224,14,9,.15,0,Math.PI*2),n.ellipse(158,224,14,9,-.15,0,Math.PI*2),n.fill(),n.fillStyle="#c41e22",n.beginPath(),n.arc(100,224,5,0,Math.PI*2),n.arc(156,224,5,0,Math.PI*2),n.fill(),n.fillStyle="#d12026",n.beginPath(),n.moveTo(116,316),n.quadraticCurveTo(128,378,140,316),n.closePath(),n.fill(),n.strokeStyle="#d12026",n.lineWidth=11,n.beginPath(),n.arc(128,304,22,.15*Math.PI,.85*Math.PI),n.stroke(),n.fillStyle="#1a1510",n.font="bold 34px Georgia, serif",n.textAlign="center",n.fillText("URI • 1307",128,456)):s==="swiss"?(n.fillStyle="#c92323",n.fillRect(0,0,256,512),n.fillStyle="#ffffff",n.fillRect(102,130,52,190),n.fillRect(33,199,190,52),n.strokeStyle="#e8c468",n.lineWidth=10,n.strokeRect(5,5,246,502)):s==="japan"&&(n.fillStyle="#1b2845",n.fillRect(0,0,256,512),n.strokeStyle="#e3b859",n.lineWidth=10,n.strokeRect(8,8,240,496),n.strokeStyle="#f0c663",n.lineWidth=12,n.beginPath(),n.arc(128,180,62,0,Math.PI*2),n.stroke(),n.fillStyle="#f0c663",n.font="bold 94px Georgia, serif",n.textAlign="center",n.fillText("武",128,212),n.fillText("士",128,370));const i=yt(t,1,1,!0);return i.wrapS=At,i.wrapT=At,Ke.set(e,i),i}function Wm(){const s="wanted_poster";if(Ke.has(s))return Ke.get(s);const e=Mt(256,340),t=e.getContext("2d");t.fillStyle="#e5cf9e",t.fillRect(0,0,256,340),t.strokeStyle="#4a3118",t.lineWidth=8,t.strokeRect(10,10,236,320),t.fillStyle="#2d180a",t.font="bold 40px Georgia, serif",t.textAlign="center",t.fillText("WANTED",128,56),t.fillStyle="#3b2412",t.beginPath(),t.ellipse(128,130,56,12,0,0,Math.PI*2),t.fill(),t.fillRect(98,96,60,34),t.beginPath(),t.arc(128,162,26,0,Math.PI*2),t.fill(),t.fillRect(88,190,80,46),t.font="bold 26px Georgia, serif",t.fillText("DEAD OR ALIVE",128,272),t.fillStyle="#992214",t.font="bold 34px Georgia, serif",t.fillText("$5,000",128,312);const n=yt(e,1,1,!0);return Ke.set(s,n),n}function Xm(s=2,e=2){const t=`marble_${s}_${e}`;if(Ke.has(t))return Ke.get(t);const n=512,i=Mt(n,n),o=i.getContext("2d"),r=Mt(n,n),a=r.getContext("2d");o.fillStyle="#f5f1e8",o.fillRect(0,0,n,n),a.fillStyle="#909090",a.fillRect(0,0,n,n);for(let c=0;c<26;c++){o.strokeStyle=c%3===0?"rgba(186, 174, 152, 0.26)":"rgba(155, 162, 172, 0.2)",o.lineWidth=1.5+Math.random()*3.5,o.beginPath();let h=Math.random()*n;o.moveTo(0,h);for(let d=0;d<=n;d+=32)h+=Math.sin(d*.02+c)*8+(Math.random()-.5)*6,o.lineTo(d,h);o.stroke()}o.strokeStyle="rgba(140, 128, 108, 0.35)",o.lineWidth=2,a.strokeStyle="#383838",a.lineWidth=3;for(let c=0;c<4;c++){const h=c/4*n;o.beginPath(),o.moveTo(0,h),o.lineTo(n,h),o.stroke(),a.beginPath(),a.moveTo(0,h),a.lineTo(n,h),a.stroke()}const l={map:yt(i,s,e,!0),bumpMap:yt(r,s,e,!1)};return Ke.set(t,l),l}function qm(){const s="spartan_shield_lambda";if(Ke.has(s))return Ke.get(s);const e=256,t=Mt(e,e),n=t.getContext("2d"),i=n.createRadialGradient(128,128,12,128,128,126);i.addColorStop(0,"#f3ca6b"),i.addColorStop(.7,"#c78f34"),i.addColorStop(.92,"#8c5d19"),i.addColorStop(1,"#5e3c0e"),n.fillStyle=i,n.beginPath(),n.arc(128,128,126,0,Math.PI*2),n.fill(),n.strokeStyle="#ffe394",n.lineWidth=10,n.beginPath(),n.arc(128,128,114,0,Math.PI*2),n.stroke(),n.strokeStyle="#9e1919",n.lineWidth=24,n.lineCap="round",n.lineJoin="miter",n.beginPath(),n.moveTo(64,198),n.lineTo(128,54),n.lineTo(192,198),n.stroke();const o=yt(t,1,1,!0);return o.wrapS=At,o.wrapT=At,Ke.set(s,o),o}function qr(s=0){const e=`viking_shield_${s}`;if(Ke.has(e))return Ke.get(e);const t=256,n=Mt(t,t),i=n.getContext("2d"),o=[["#a82424","#e8dec8"],["#204b7a","#e8dec8"],["#1e523a","#d9a438"],["#8c2420","#d9a438"]],[r,a]=o[s%o.length];for(let h=0;h<8;h++)i.fillStyle=h%2===0?r:a,i.beginPath(),i.moveTo(128,128),i.arc(128,128,122,h*Math.PI/4,(h+1)*Math.PI/4),i.closePath(),i.fill();i.strokeStyle="#4a3a2a",i.lineWidth=14,i.beginPath(),i.arc(128,128,118,0,Math.PI*2),i.stroke();const l=i.createRadialGradient(122,122,4,128,128,30);l.addColorStop(0,"#eef3f7"),l.addColorStop(.6,"#7a8490"),l.addColorStop(1,"#2b3036"),i.fillStyle=l,i.beginPath(),i.arc(128,128,28,0,Math.PI*2),i.fill();const c=yt(n,1,1,!0);return c.wrapS=At,c.wrapT=At,Ke.set(e,c),c}function bc(s="greece"){const e=`sail_${s}`;if(Ke.has(e))return Ke.get(e);const t=Mt(256,256),n=t.getContext("2d"),i=6,o=256/i,r=s==="greece"?"#f5efe2":"#f2e8d5",a=s==="greece"?"#2366a8":"#a82222";for(let c=0;c<i;c++)n.fillStyle=c%2===0?r:a,n.fillRect(c*o,0,o+1,256);n.strokeStyle="rgba(0,0,0,0.18)",n.lineWidth=4,n.strokeRect(2,2,252,252);const l=yt(t,1,1,!0);return l.wrapS=At,l.wrapT=At,Ke.set(e,l),l}function Ym(s=2,e=2){const t=`concrete_${s}_${e}`;if(Ke.has(t))return Ke.get(t);const n=512,i=Mt(n,n),o=i.getContext("2d"),r=Mt(n,n),a=r.getContext("2d");o.fillStyle="#7e817d",o.fillRect(0,0,n,n),a.fillStyle="#808080",a.fillRect(0,0,n,n);for(let c=0;c<n;c+=64)o.fillStyle="rgba(42, 45, 42, 0.35)",o.fillRect(0,c,n,3),a.fillStyle="#383838",a.fillRect(0,c,n,3);for(let c=0;c<360;c++){const h=Math.random()*n,d=Math.random()*n,u=6+Math.random()*24;o.fillStyle=Math.random()>.5?"rgba(170,174,168,0.14)":"rgba(55,58,54,0.16)",o.beginPath(),o.arc(h,d,u,0,Math.PI*2),o.fill()}for(let c=0;c<45;c++){const h=Math.random()*n;o.fillStyle="rgba(45, 50, 42, 0.16)",o.fillRect(h,0,3+Math.random()*6,n)}const l={map:yt(i,s,e,!0),bumpMap:yt(r,s,e,!1)};return Ke.set(t,l),l}function Zm(s="#565c52"){const e=`balkenkreuz_${s}`;if(Ke.has(e))return Ke.get(e);const t=256,n=Mt(t,t),i=n.getContext("2d");i.fillStyle=s,i.fillRect(0,0,t,t),i.fillStyle="#ebe8df",i.fillRect(100,32,56,192),i.fillRect(32,100,192,56),i.fillStyle="#1b1d1c",i.fillRect(110,42,36,172),i.fillRect(42,110,172,36);const o=yt(n,1,1,!0);return o.wrapS=At,o.wrapT=At,Ke.set(e,o),o}const Tc={cowboy:{name:"Outlaw Cowboy",hp:65,speed:3.6,range:34,fireRate:1.55,damage:11,score:150,style:"ranged",projectileColor:16765542},bandito:{name:"Mexican Bandito",hp:75,speed:4.5,range:30,fireRate:1.25,damage:13,score:200,style:"ranged",projectileColor:16756290},boss_west:{name:"EL DIABLO — KING OF RED GULCH",hp:360,speed:4.2,range:42,fireRate:.78,damage:16,score:1200,style:"boss_ranged",scale:1.28,projectileColor:16739115},ninja:{name:"Shadow Ninja",hp:60,speed:6.4,range:24,fireRate:1.15,damage:12,score:200,style:"skirmisher",projectileColor:13955583},ronin:{name:"Rōnin Samurai",hp:95,speed:4.6,range:22,fireRate:1.4,damage:16,score:260,style:"hybrid",projectileColor:16758876},boss_japan:{name:"LORD KUROGANE — IRON SHOGUN",hp:420,speed:5,range:34,fireRate:.85,damage:18,score:1500,style:"boss_hybrid",scale:1.32,projectileColor:16734774},halberdier:{name:"Austrian Halberdier",hp:95,speed:4.9,range:3.4,fireRate:1.05,damage:18,score:220,style:"melee",projectileColor:16777215},arquebusier:{name:"Habsburg Arquebusier",hp:75,speed:3.4,range:38,fireRate:1.5,damage:15,score:240,style:"ranged",projectileColor:16770204},boss_swiss:{name:"CAPTAIN VON GESSLER — HABSBURG VOGT",hp:460,speed:4.6,range:38,fireRate:.8,damage:19,score:1800,style:"boss_ranged",scale:1.32,projectileColor:16732728},spartan_hoplite:{name:"Spartan Hoplite",hp:95,speed:4.8,range:3.5,fireRate:1.05,damage:17,score:230,style:"melee",projectileColor:16765542},spartan_skirmisher:{name:"Spartan Javelineer",hp:78,speed:4.1,range:35,fireRate:1.4,damage:14,score:240,style:"ranged",projectileColor:16765542},boss_greece:{name:"ARCHIDAMOS — SPARTAN POLEMARCH",hp:460,speed:4.7,range:36,fireRate:.85,damage:18,score:1800,style:"boss_hybrid",scale:1.32,projectileColor:16747563},viking_warrior:{name:"Viking Huscarl",hp:95,speed:4.6,range:24,fireRate:1.35,damage:16,score:240,style:"hybrid",projectileColor:11464959},viking_archer:{name:"Norse Bowman",hp:74,speed:3.8,range:38,fireRate:1.45,damage:14,score:230,style:"ranged",projectileColor:14284543},viking_berserker:{name:"Viking Berserker",hp:105,speed:6.2,range:3.4,fireRate:.88,damage:19,score:280,style:"melee",projectileColor:16777215},boss_scandinavia:{name:"JARL HAKON — LORD OF THE FJORD",hp:490,speed:4.9,range:36,fireRate:.82,damage:19,score:2e3,style:"boss_hybrid",scale:1.34,projectileColor:6484680},german_rifleman:{name:"German Rifleman",hp:85,speed:3.9,range:40,fireRate:1.45,damage:15,score:240,style:"ranged",projectileColor:16769162},german_officer:{name:"German Officer",hp:85,speed:4.5,range:32,fireRate:1.05,damage:13,score:270,style:"ranged",projectileColor:16762470},german_mg:{name:"MG Bunker Gunner",hp:115,speed:0,range:44,fireRate:.36,damage:7,score:340,style:"turret",projectileColor:16752194},guard_dog:{name:"Guard Dog",hp:38,speed:7.8,range:2.35,fireRate:.85,damage:14,score:180,style:"dog",projectileColor:16777215},boss_normandy:{name:"MAJOR VOGEL — BATTERY COMMANDER",hp:460,speed:4.4,range:42,fireRate:.65,damage:15,score:2200,style:"boss_ranged",scale:1.28,projectileColor:16739896}};function $m(s){const e=new Xe,t=s.startsWith("boss_");if(s==="guard_dog"){const j=new ee({color:9397820,roughness:.92}),$=new ee({color:2498330,roughness:.94}),F=new ee({color:1315088,roughness:.6}),I=new ee({color:7349276,roughness:.7}),H=new m(new N(.32,.32,.78),j);H.position.set(0,.5,0),H.castShadow=!0,H.userData.hitZone="body";const q=new m(new N(.34,.2,.48),$);q.position.set(0,.58,-.02);const J=new m(new vt(.14,.032,6,12),I);J.position.set(0,.56,.34);const he=new oe(.052,.044,.42,7),_e=new m(he,j);_e.position.set(-.11,.21,.26);const U=new m(he,j);U.position.set(.11,.21,.26);const k=new m(he,j);k.position.set(-.11,.21,-.26);const K=new m(he,j);K.position.set(.11,.21,-.26);const V=new m(new N(.24,.24,.3),j);V.position.set(0,.68,.44),V.userData.hitZone="head";const ie=new m(new N(.14,.13,.22),$);ie.position.set(0,-.03,.2);const be=new m(new Ze(.036,6,6),F);be.position.set(0,0,.31);const Pe=new m(new ze(.055,.16,4),$);Pe.position.set(-.08,.17,-.02);const Oe=Pe.clone();Oe.position.x=.08;const xe=new st({color:16769126}),re=new m(new Ze(.022,6,6),xe);re.position.set(-.06,.04,.14);const E=re.clone();E.position.x=.06,V.add(ie,be,Pe,Oe,re,E);const se=new m(new oe(.03,.045,.42,6),$);se.position.set(0,.56,-.5),se.rotation.x=-.65;const W=new m(new Ze(.05,4,4),new st({color:16765530,transparent:!0,opacity:0}));V.add(W);const le=new m(new dt(.75,.09),new st({color:1445130,side:gt}));le.position.set(0,1.15,0),le.visible=!1;const Y=new m(new dt(.7,.06),new st({color:15219500,side:gt}));return Y.position.set(0,0,.01),le.add(Y),e.add(H,q,J,_e,U,k,K,V,se,le),{root:e,legL:_e,legR:U,armL:k,armR:K,torso:H,head:V,muzzle:W,hpBg:le,hpFill:Y}}const n=new ee({color:s==="bandito"?13011548:14922122,roughness:.72}),i=new ee({color:2759700,roughness:.8}),o=new ee({color:11977423,metalness:.85,roughness:.25}),r=new ee({color:15119943,metalness:.85,roughness:.25}),a=new ee({color:12067362,roughness:.6}),l=new ee({color:15657180,roughness:.7});let c=6044708,h=3091240;s==="bandito"?(c=10368030,h=3877920):s==="boss_west"?(c=1971988,h=1446416):s==="ninja"?(c=1580070,h=1316640):s==="ronin"?(c=2374492,h=1975344):s==="boss_japan"?(c=8197140,h=1709076):s==="halberdier"||s==="arquebusier"?(c=11871268,h=3551792):s==="boss_swiss"?(c=9377816,h=2631208):s==="spartan_hoplite"||s==="spartan_skirmisher"||s==="boss_greece"?(c=12090925,h=11018272):s==="viking_warrior"||s==="viking_archer"?(c=4935512,h=3812901):s==="viking_berserker"?(c=6046512,h=2958108):s==="boss_scandinavia"?(c=2700098,h=2498588):s==="german_rifleman"||s==="german_mg"?(c=5660245,h=4672838):(s==="german_officer"||s==="boss_normandy")&&(c=3949372,h=3159600);const d=new ee({color:c,roughness:.68}),u=new ee({color:h,roughness:.78}),f=new oe(.11,.095,.82,8),g=new m(f,u);g.position.set(-.15,.41,0),g.castShadow=!0;const v=new m(f,u);v.position.set(.15,.41,0),v.castShadow=!0;const x=new N(.17,.22,.28),p=new m(x,i);p.position.set(0,-.34,.04),g.add(p);const y=p.clone();v.add(y);const M=new m(new N(.56,.72,.32),d);M.position.set(0,1.16,0),M.castShadow=!0,M.userData.hitZone="body";const w=new oe(.085,.075,.62,8),P=new m(w,d);P.position.set(-.37,1.18,.08),P.rotation.x=-.35,P.castShadow=!0;const C=new m(w,d);C.position.set(.37,1.18,.2),C.rotation.x=-1.1,C.castShadow=!0;const L=new m(new Ze(.21,12,10),s==="ninja"?d:n);L.position.set(0,1.72,0),L.castShadow=!0,L.userData.hitZone="head";const D=new st({color:t?16759603:1182728}),T=new m(new Ze(.026,6,6),D);T.position.set(-.07,.03,.19);const b=T.clone();if(b.position.x=.07,L.add(T,b),s==="cowboy"||s==="boss_west"){const j=new m(new oe(.42,.44,.04,14),i);j.position.y=.15;const $=new m(new oe(.19,.23,.22,12),i);$.position.y=.26;const F=new m(new oe(.22,.23,.05,12),t?r:a);F.position.y=.19,L.add(j,$,F);const I=new m(new ze(.24,.26,5),a);I.rotation.x=Math.PI,I.position.set(0,1.48,.12),e.add(I);const H=new m(new N(.58,.56,.12),d);H.position.set(0,.72,-.14),e.add(H);const q=new m(new N(.06,.08,.46),o);q.position.set(0,-.28,.22),C.add(q)}else if(s==="bandito"){const j=new m(new oe(.56,.62,.05,18),new ee({color:13212757,roughness:.75}));j.position.y=.15;const $=new m(new vt(.58,.025,6,20),a);$.rotation.x=Math.PI/2,$.position.y=.15;const F=new m(new ze(.22,.34,12),new ee({color:12093762,roughness:.75}));F.position.y=.32,L.add(j,$,F);const I=new m(new ze(.48,.62,8),new ee({color:13189668,roughness:.8}));I.position.set(0,1.24,0);const H=new m(new oe(.36,.44,.12,8),r);H.position.set(0,1.04,0),e.add(I,H);const q=new m(new oe(.028,.032,.88,8),i);q.rotation.x=Math.PI/2,q.position.set(0,-.26,.32),C.add(q)}else if(s==="ninja"){const j=new m(new vt(.215,.022,6,14),o);j.rotation.x=Math.PI/2,j.position.y=.08,L.add(j);const $=new m(new vt(.22,.055,6,12),a);$.rotation.x=Math.PI/2,$.position.set(0,1.52,0);const F=new m(new N(.14,.58,.03),a);F.position.set(.08,1.32,-.26),F.rotation.x=.35,e.add($,F);const I=new m(new N(.03,.75,.05),o);I.position.set(0,-.35,.28),I.rotation.x=Math.PI/2,C.add(I)}else if(s==="ronin"||s==="boss_japan"){if(t){const H=new m(new Ze(.25,12,8,0,Math.PI*2,0,Math.PI*.6),new ee({color:1906455,metalness:.7,roughness:.3}));H.position.y=.08;const q=new m(new N(.05,.36,.04),r);q.position.set(-.14,.34,.16),q.rotation.z=.45;const J=q.clone();J.position.x=.14,J.rotation.z=-.45,L.add(H,q,J)}else{const H=new m(new ze(.52,.25,16),new ee({color:12755556,roughness:.9}));H.position.y=.22,L.add(H)}const j=new N(.14,.34,.28),$=new m(j,t?r:a);$.position.set(-.38,1.4,0);const F=$.clone();F.position.x=.38,e.add($,F);const I=new m(new N(.035,1.05,.055),o);I.position.set(0,-.35,.42),I.rotation.x=Math.PI/2,C.add(I)}else if(s==="halberdier"||s==="arquebusier"||s==="boss_swiss"){const j=new m(new N(.58,.52,.35),t?r:o);j.position.set(0,1.22,0);const $=new m(new N(.6,.16,.36),l);$.position.set(0,1.06,0),e.add(j,$);const F=new m(new Ze(.24,12,8,0,Math.PI*2,0,Math.PI*.62),t?r:o);F.position.y=.08;const I=new m(new oe(.32,.36,.04,14),t?r:o);I.position.y=.09;const H=new m(new ze(.08,.42,8),a);if(H.position.set(0,.34,-.08),H.rotation.x=-.38,L.add(F,I,H),s==="halberdier"){const q=new m(new oe(.025,.025,2.2,8),i);q.position.set(0,.1,.34);const J=new m(new N(.03,.42,.28),o);J.position.set(0,1,.44),C.add(q,J)}else{const q=new m(new oe(.03,.035,1.05,8),o);q.rotation.x=Math.PI/2,q.position.set(0,-.25,.42),C.add(q)}}else if(s==="spartan_hoplite"||s==="spartan_skirmisher"||s==="boss_greece"){const j=new ee({color:t?15381832:13209398,metalness:.84,roughness:.28}),$=new m(new N(.58,.56,.34),j);$.position.set(0,1.2,0);const F=new m(new N(.64,1.15,.1),a);F.position.set(0,1.02,-.22),F.rotation.x=.14;const I=new m(new oe(.28,.34,.36,8),a);I.position.set(0,.78,0),e.add($,F,I);const H=new m(new Ze(.245,12,10,0,Math.PI*2,0,Math.PI*.72),j);H.position.y=.06;const q=new m(new N(.06,.18,.14),j);q.position.set(-.17,-.05,.12);const J=q.clone();J.position.x=.17;const he=new m(t?new N(.58,.24,.11):new N(.11,.24,.54),a);he.position.set(0,.34,t?0:-.04),L.add(H,q,J,he);const _e=new ee({map:qm(),metalness:.5,roughness:.38}),U=new m(new oe(.46,.46,.06,20),[j,_e,j]);U.rotation.x=Math.PI/2,U.position.set(-.08,-.18,.24),P.add(U);const k=s==="spartan_hoplite"?2.25:1.75,K=new m(new oe(.024,.026,k,8),i);K.rotation.x=Math.PI/2,K.position.set(0,-.26,.45);const V=new m(new ze(.045,.28,4),j);V.rotation.x=Math.PI/2,V.position.set(0,-.26,.45+k*.5+.1),C.add(K,V)}else if(s==="viking_warrior"||s==="viking_archer"||s==="viking_berserker"||s==="boss_scandinavia"){const j=new ee({color:s==="viking_berserker"?4863269:3879725,roughness:.95}),$=s==="viking_berserker"?8141598:5061160,F=new ee({color:$,roughness:.92}),I=t?r:o,H=new m(new N(.68,.26,.4),j);H.position.set(0,1.48,-.02);const q=new m(new N(.6,.95,.1),t?a:j);q.position.set(0,1,-.22),e.add(H,q);const J=new m(new ze(.18,.34,10),F);if(J.rotation.x=Math.PI,J.position.set(0,-.2,.1),L.add(J),s==="viking_berserker"){const he=new m(new Ze(.245,10,8,0,Math.PI*2,0,Math.PI*.62),j);he.position.set(0,.08,-.03),L.add(he)}else{const he=new m(new Ze(.24,12,10,0,Math.PI*2,0,Math.PI*.56),I);he.position.y=.08;const _e=new m(new vt(.235,.022,6,16),I);_e.rotation.x=Math.PI/2,_e.position.y=.08;const U=new m(new N(.04,.15,.03),I);U.position.set(0,.01,.22),L.add(he,_e,U)}if(s!=="viking_berserker"&&s!=="viking_archer"){const he=qr(t?3:0),_e=new ee({map:he,roughness:.72}),U=new m(new oe(.45,.45,.06,18),[i,_e,i]);U.rotation.x=Math.PI/2,U.position.set(-.08,-.18,.24),P.add(U)}if(s==="viking_archer"){const he=new m(new vt(.55,.024,6,14,Math.PI*.9),i);he.rotation.y=Math.PI/2,he.rotation.z=-Math.PI*.45,he.position.set(0,-.18,.28),P.add(he)}else{const he=_e=>{const U=new m(new oe(.024,.026,.92,8),i);U.rotation.x=Math.PI/2,U.position.set(0,-.26,.34);const k=new m(new N(.03,.26,.22),o);k.position.set(0,-.26,.74),_e.add(U,k)};he(C),s==="viking_berserker"&&(P.rotation.x=-1.1,he(P))}}else if(s==="german_rifleman"||s==="german_officer"||s==="german_mg"||s==="boss_normandy"){const j=new ee({color:3883580,metalness:.45,roughness:.48}),$=new ee({color:2961974,metalness:.8,roughness:.32}),F=new m(new N(.58,.1,.34),i);if(F.position.set(0,.92,0),e.add(F),s==="german_officer"||t){const I=new m(new N(.6,.62,.34),d);I.position.set(0,.64,-.02),e.add(I);const H=new m(new oe(.25,.21,.16,14),d);H.position.y=.18;const q=new m(new N(.26,.03,.22),i);q.position.set(0,.1,.18),q.rotation.x=.18,L.add(H,q);const J=new m(new N(.06,.09,t?.68:.36),$);J.position.set(0,-.26,t?.34:.2),C.add(J)}else{const I=new m(new Ze(.245,14,10,0,Math.PI*2,0,Math.PI*.58),j);I.position.y=.08;const H=new m(new oe(.24,.28,.1,14,1,!0),j);if(H.position.y=.04,L.add(I,H),s==="german_mg"){const q=new m(new oe(.042,.046,1.15,8),$);q.rotation.x=Math.PI/2,q.position.set(0,-.22,.56),C.add(q)}else{const q=new m(new oe(.025,.03,1.05,8),i);q.rotation.x=Math.PI/2,q.position.set(0,-.26,.42),C.add(q)}}}const O=new m(new Ze(.14,6,6),new st({color:16765530,transparent:!0,opacity:0}));O.position.set(0,-.28,.68),C.add(O);const ae=new m(new dt(.95,.11),new st({color:1445130,side:gt}));ae.position.set(0,2.35,0),ae.visible=!1;const ne=new m(new dt(.9,.075),new st({color:t?16755234:15219500,side:gt}));ne.position.set(0,0,.01),ae.add(ne),e.add(g,v,M,P,C,L,ae);const fe=Tc[s];return fe.scale&&e.scale.setScalar(fe.scale),{root:e,legL:g,legR:v,armL:P,armR:C,torso:M,head:L,muzzle:O,hpBg:ae,hpFill:ne}}class Al{constructor(e,t,n=1){const i=Tc[e];this.type=e,this.name=i.name,this.isBoss=e.startsWith("boss_"),this.maxHp=Math.round(i.hp*n),this.hp=this.maxHp,this.speed=i.speed,this.range=i.range,this.fireRate=i.fireRate/(.8+n*.2),this.damage=Math.round(i.damage*n),this.score=i.score,this.style=i.style,this.projectileColor=i.projectileColor,this.parts=$m(e),this.mesh=this.parts.root,this.mesh.position.copy(t),this.spawnPos=t.clone(),this.alive=!0,this.alert=!1,this.fireCooldown=.6+Math.random()*.9,this.strafeDir=Math.random()>.5?1:-1,this.strafeTimer=1.2+Math.random()*2,this.hurtFlash=0,this.muzzleFlash=0,this.deathTimer=0,this.walkPhase=Math.random()*Math.PI*2,this.radius=this.style==="dog"?.36:this.isBoss?.68:.46,this.headHeight=this.style==="dog"?.72:this.isBoss?2.15:1.72}getHitMeshes(){if(!this.alive)return[];const e=[];return this.mesh.traverse(t=>{t.isMesh&&t!==this.parts.hpBg&&t!==this.parts.hpFill&&t!==this.parts.muzzle&&(t.userData.enemy=this,e.push(t))}),e}takeDamage(e,t=!1){if(!this.alive)return!1;if(this.alert=!0,this.hp-=e,this.hurtFlash=.16,!this.isBoss){this.parts.hpBg.visible=!0;const n=Math.max(0,this.hp/this.maxHp);this.parts.hpFill.scale.x=Math.max(.001,n),this.parts.hpFill.position.x=-(1-n)*.45}return this.hp<=0?(this.alive=!1,this.hp=0,this.parts.hpBg.visible=!1,!0):!1}update(e,t,n,i,o=1){if(!this.alive){this.deathTimer=Math.min(1,this.deathTimer+e*2.8),this.mesh.rotation.x=-this.deathTimer*(Math.PI*.48),this.mesh.position.y=Math.max(n.getFloorHeight(this.mesh.position.x,this.mesh.position.z,this.mesh.position.y)+.18,this.mesh.position.y-e*1.4);return}if(this.parts.hpBg.visible&&this.parts.hpBg.lookAt(t.x,this.mesh.position.y+(this.style==="dog"?1.15:2.3),t.z),this.hurtFlash>0){this.hurtFlash-=e;const D=this.hurtFlash>0?6689041:0;this.parts.torso.material.emissive.setHex(D)}this.muzzleFlash>0&&(this.muzzleFlash-=e,this.parts.muzzle.material.opacity=Math.max(0,this.muzzleFlash*8));const r=new S().subVectors(t,this.mesh.position),a=Math.hypot(r.x,r.z),l=this.style==="dog"?.7:1.55,c=new S(this.mesh.position.x,this.mesh.position.y+l,this.mesh.position.z),h=new S(t.x,t.y+1.45,t.z),d=42*o,u=(this.style==="dog"?28:26)*o,f=a<54&&n.hasLineOfSight(c,h);if(!this.alert)if(a<u||f&&a<d)this.alert=!0,this.style==="dog"&&i.onDogBark&&i.onDogBark(this);else{const D=this.style==="dog"?.5:1.16;this.parts.torso.position.y=D+Math.sin(performance.now()*.002+this.walkPhase)*.02;return}const g=Math.atan2(r.x,r.z);let v=g-this.mesh.rotation.y;for(;v>Math.PI;)v-=Math.PI*2;for(;v<-Math.PI;)v+=Math.PI*2;this.mesh.rotation.y+=v*Math.min(1,e*8),this.strafeTimer-=e,this.strafeTimer<=0&&(this.strafeTimer=1.1+Math.random()*1.6,this.strafeDir*=-1);const x=new S(Math.sin(g),0,Math.cos(g)),p=new S(Math.cos(g),0,-Math.sin(g)),y=new S,M=this.style==="melee"||this.style==="dog",w=this.style==="turret",P=this.style==="hybrid"||this.style==="boss_hybrid",C=this.style==="dog"?1.55:M?2.1:P?7:12.5,L=this.style==="dog"?2:M?2.6:P?15:25;if(w||(!f||a>L?y.add(x):a<C&&!M&&y.addScaledVector(x,-.55),a<L+6&&this.style!=="dog"&&y.addScaledVector(p,this.strafeDir*(this.style==="skirmisher"?1.15:.65))),y.lengthSq()>.01&&this.speed>0){y.normalize().multiplyScalar(this.speed*e),this.mesh.position.x+=y.x,this.mesh.position.z+=y.z,n.resolveHorizontal(this.mesh.position,this.radius,this.mesh.position.y);const D=n.getFloorHeight(this.mesh.position.x,this.mesh.position.z,this.mesh.position.y);this.mesh.position.y+=(D-this.mesh.position.y)*Math.min(1,e*14),this.walkPhase+=e*this.speed*(this.style==="dog"?2.8:2.2),this.parts.legL.rotation.x=Math.sin(this.walkPhase)*.6,this.parts.legR.rotation.x=-Math.sin(this.walkPhase)*.6,this.style==="dog"?(this.parts.armL.rotation.x=-Math.sin(this.walkPhase)*.6,this.parts.armR.rotation.x=Math.sin(this.walkPhase)*.6):this.parts.armL.rotation.x=-.35-Math.sin(this.walkPhase)*.35}if(this.fireCooldown-=e,this.fireCooldown<=0){const D=this.style==="dog"?2.45:3.5;if(M||P&&a<3.6)a<D&&(this.fireCooldown=this.fireRate,this.style==="dog"?(this.parts.head.rotation.x=.35,setTimeout(()=>{this.parts.head&&(this.parts.head.rotation.x=0)},160)):(this.parts.armR.rotation.x=-2.1,setTimeout(()=>{this.parts.armR&&(this.parts.armR.rotation.x=-1.1)},160)),i.onMeleeHitPlayer(this.damage,this));else if(f&&a<=this.range){this.fireCooldown=this.fireRate*(.85+Math.random()*.35),this.muzzleFlash=.14;const T=new S;this.parts.muzzle.getWorldPosition(T),i.onEnemyFire(this,T,h)}}}}function qi(s){const{topColor:e=2759739,midColor:t=14248747,horizonColor:n=16761192,sunColor:i=16773830,sunDirection:o=new S(.45,.22,-.86).normalize(),cloudTint:r=16766364,cloudDensity:a=.45}=s,l=new Ze(420,40,28),c={uTopColor:{value:new $e(e)},uMidColor:{value:new $e(t)},uHorizonColor:{value:new $e(n)},uSunColor:{value:new $e(i)},uCloudTint:{value:new $e(r)},uSunDir:{value:o.clone().normalize()},uCloudDensity:{value:a},uTime:{value:0}},h=new Rt({side:kt,depthWrite:!1,uniforms:c,vertexShader:`
      varying vec3 vWorldDir;
      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldDir = normalize(position);
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,fragmentShader:`
      uniform vec3 uTopColor;
      uniform vec3 uMidColor;
      uniform vec3 uHorizonColor;
      uniform vec3 uSunColor;
      uniform vec3 uCloudTint;
      uniform vec3 uSunDir;
      uniform float uCloudDensity;
      uniform float uTime;
      varying vec3 vWorldDir;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 4; i++) {
          v += a * noise(p);
          p *= 2.04;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec3 dir = normalize(vWorldDir);
        float h = clamp(dir.y, 0.0, 1.0);

        // 3-band atmospheric sky gradient
        vec3 sky = mix(uHorizonColor, uMidColor, smoothstep(0.0, 0.28, h));
        sky = mix(sky, uTopColor, smoothstep(0.22, 0.85, h));

        // Sun glow & crisp solar disc
        float sunDot = max(dot(dir, normalize(uSunDir)), 0.0);
        float halo = pow(sunDot, 7.0) * 0.45 + pow(sunDot, 48.0) * 0.65;
        float disc = smoothstep(0.9965, 0.9988, sunDot);
        sky += uSunColor * halo * 0.85;
        sky = mix(sky, uSunColor * 1.5, disc);

        // Stylized drifting cloud bands
        if (dir.y > 0.03) {
          vec2 uv = dir.xz / (dir.y + 0.22) * 1.35;
          uv.x += uTime * 0.012;
          uv.y -= uTime * 0.005;
          float n = fbm(uv * 1.5);
          float clouds = smoothstep(0.48, 0.78, n) * uCloudDensity * smoothstep(0.03, 0.22, dir.y) * smoothstep(0.95, 0.4, dir.y);
          vec3 cCol = mix(uCloudTint, uSunColor * 1.15, pow(sunDot, 4.0) * 0.65);
          sky = mix(sky, cCol, clouds);
        }

        // Horizon atmospheric warmth
        float horizBand = exp(-abs(dir.y) * 10.0) * 0.25;
        sky += uHorizonColor * horizBand;

        gl_FragColor = vec4(sky, 1.0);
      }
    `}),d=new m(l,h);return d.frustumCulled=!1,{mesh:d,uniforms:c}}function oi(s,e,t={}){const{deepColor:n=741993,shallowColor:i=3056552,foamColor:o=14678271,sunColor:r=16774614,sunDir:a=new S(.4,.6,-.6).normalize(),opacity:l=.88,waveScale:c=.14}=t,h=new dt(s,e,64,64);h.rotateX(-Math.PI/2);const d={uTime:{value:0},uDeepColor:{value:new $e(n)},uShallowColor:{value:new $e(i)},uFoamColor:{value:new $e(o)},uSunColor:{value:new $e(r)},uSunDir:{value:a.clone().normalize()},uOpacity:{value:l},uWaveScale:{value:c}},u=new Rt({transparent:!0,uniforms:d,vertexShader:`
      uniform float uTime;
      uniform float uWaveScale;
      varying vec3 vWorldPos;
      varying vec2 vUv;
      varying float vWave;
      void main() {
        vUv = uv;
        vec3 pos = position;
        float w1 = sin(pos.x * 0.45 + uTime * 1.9) * cos(pos.z * 0.38 + uTime * 1.4);
        float w2 = sin((pos.x * 0.9 - pos.z * 0.7) + uTime * 2.7) * 0.45;
        float h = (w1 + w2) * uWaveScale;
        pos.y += h;
        vWave = h;
        vec4 wp = modelMatrix * vec4(pos, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uDeepColor;
      uniform vec3 uShallowColor;
      uniform vec3 uFoamColor;
      uniform vec3 uSunColor;
      uniform vec3 uSunDir;
      uniform float uOpacity;
      varying vec3 vWorldPos;
      varying vec2 vUv;
      varying float vWave;

      void main() {
        vec2 p = vWorldPos.xz * 0.22;
        float r1 = sin(p.x * 3.1 + uTime * 2.2) * cos(p.y * 2.7 - uTime * 1.6);
        float r2 = sin((p.x * 5.2 - p.y * 4.4) + uTime * 3.1);
        vec3 normal = normalize(vec3((r1 + r2) * 0.08, 1.0, (r1 - r2) * 0.08));

        vec3 viewDir = normalize(cameraPosition - vWorldPos);
        float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 3.0);

        vec3 col = mix(uDeepColor, uShallowColor, clamp(0.35 + fresnel * 0.75 + vWave * 1.4, 0.0, 1.0));

        // Sun sparkle specular
        vec3 halfVec = normalize(normalize(uSunDir) + viewDir);
        float spec = pow(max(dot(normal, halfVec), 0.0), 96.0);
        col += uSunColor * spec * 1.45;

        // Subtle shoreline / crest foam
        float edge = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
        float edgeFoam = (1.0 - smoothstep(0.0, 0.055, edge)) * (0.55 + 0.45 * sin(vWorldPos.x * 1.4 + uTime * 3.0));
        col = mix(col, uFoamColor, clamp(edgeFoam * 0.75, 0.0, 0.85));

        gl_FragColor = vec4(col, uOpacity);
      }
    `}),f=new m(h,u);return f.receiveShadow=!0,{mesh:f,uniforms:d}}function Rl(s,e){const t=new dt(s,e,12,24),n={uTime:{value:0}},i=new Rt({transparent:!0,side:gt,depthWrite:!1,uniforms:n,vertexShader:`
      uniform float uTime;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec3 pos = position;
        pos.z += sin(uv.y * 12.0 + uTime * 6.0) * 0.16;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      varying vec2 vUv;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(41.1, 289.7))) * 43758.5453);
      }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
          mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
          f.y
        );
      }

      void main() {
        vec2 flow1 = vec2(vUv.x * 6.0, vUv.y * 3.5 + uTime * 2.6);
        vec2 flow2 = vec2(vUv.x * 11.0, vUv.y * 6.0 + uTime * 4.1);
        float n1 = noise(flow1);
        float n2 = noise(flow2);
        float streaks = smoothstep(0.32, 0.78, n1 * 0.65 + n2 * 0.55);

        float edgeFade = smoothstep(0.0, 0.16, vUv.x) * smoothstep(1.0, 0.84, vUv.x);
        float bottomSpray = smoothstep(0.28, 0.0, vUv.y);
        float topCrest = smoothstep(0.85, 1.0, vUv.y);

        vec3 waterCol = mix(vec3(0.36, 0.74, 0.86), vec3(0.95, 0.99, 1.0), clamp(streaks + bottomSpray * 0.75 + topCrest * 0.6, 0.0, 1.0));
        float alpha = (0.58 + streaks * 0.36 + bottomSpray * 0.25) * edgeFade;

        gl_FragColor = vec4(waterCol, clamp(alpha, 0.0, 0.95));
      }
    `});return{mesh:new m(t,i),uniforms:n}}function Cl(s=240,e=65){const t=new dt(s,e,64,12),n={uTime:{value:0}},i=new Rt({transparent:!0,side:gt,depthWrite:!1,blending:cs,uniforms:n,vertexShader:`
      uniform float uTime;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec3 pos = position;
        float wave = sin(uv.x * 9.0 + uTime * 0.55) * 9.0 + cos(uv.x * 16.0 - uTime * 0.35) * 4.5;
        pos.z += wave;
        pos.y += sin(uv.x * 6.0 + uTime * 0.4) * 3.0;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      varying vec2 vUv;

      void main() {
        float bands = sin(vUv.x * 28.0 + uTime * 0.9) * 0.5 + 0.5;
        float rays = pow(sin(vUv.x * 54.0 - uTime * 1.3) * 0.5 + 0.5, 2.0);
        float vertical = smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.22, vUv.y);
        float horizFade = smoothstep(0.0, 0.14, vUv.x) * smoothstep(1.0, 0.86, vUv.x);

        vec3 greenCol = vec3(0.16, 0.96, 0.58);
        vec3 tealCol  = vec3(0.12, 0.78, 0.92);
        vec3 violetCol = vec3(0.55, 0.24, 0.88);

        vec3 col = mix(greenCol, tealCol, smoothstep(0.2, 0.65, vUv.y));
        col = mix(col, violetCol, smoothstep(0.6, 0.98, vUv.y));

        float intensity = (0.35 + 0.45 * bands + 0.45 * rays) * vertical * horizFade;
        gl_FragColor = vec4(col * intensity * 1.25, intensity * 0.85);
      }
    `});return{mesh:new m(t,i),uniforms:n}}const jm={id:"west",index:0,themeClass:"",act:"ACT I • 1884",title:"RED GULCH",subtitle:"Dust & Reckoning",heroName:"MARSHAL ANDERSON",objective:"Clear Red Gulch of Outlaws & Defeat El Diablo",quote:'"They burned my homestead and took everything I loved. Today, Red Gulch learns that a marshal never buries his badge."',musicTheme:"west",enemyIcon:"★",currency:"$",arsenalSummary:[["1 • .45 Peacemaker","Reliable 6-shooter. RMB fans the hammer."],["2 • 10-Gauge Coach Gun","Devastating spread for saloon clearouts."],["3 • Henry .44 Scoped","Vintage brass telescope zoom (RMB)."],["4 • Dynamite Sticks","Blasts outlaws out from behind cover."]],spawnPos:new S(0,0,44),spawnYaw:0,cameraPreview:{center:new S(0,4,2),radius:36,height:12,speed:.14}};function Km(s,e,t){const n=[],i=[],o=[];e.bounds={minX:-54,maxX:54,minZ:-54,maxZ:54};const r=new S(.35,.24,-.9).normalize(),a=qi({topColor:2497858,midColor:13195302,horizonColor:16760678,sunColor:16774084,sunDirection:r,cloudTint:16755299,cloudDensity:.42});s.add(a.mesh),i.push(re=>{a.uniforms.uTime.value=re}),s.fog=new Xn(14255434,.0085);const l=new Gi(16763788,7027234,.85);s.add(l);const c=new tn(16764802,2.75);c.position.copy(r).multiplyScalar(95),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),c.shadow.camera.left=-65,c.shadow.camera.right=65,c.shadow.camera.top=65,c.shadow.camera.bottom=-65,c.shadow.camera.near=10,c.shadow.camera.far=210,c.shadow.bias=-5e-4,s.add(c);const h=new tn(8936596,.45);h.position.set(-40,20,60),s.add(h);const d=fn("desert",26,26),u=new ee({map:d.map,bumpMap:d.bumpMap,bumpScale:.28,roughness:.94,metalness:.02}),f=new m(new dt(340,340),u);f.rotation.x=-Math.PI/2,f.receiveShadow=!0,s.add(f);const g=Vn("western",2,2),v=Vn("saloon",2,2),x=Vn("weathered",2,2),p=Xi("redrock",3,2),y=new ee({map:g.map,bumpMap:g.bumpMap,bumpScale:.12,roughness:.85}),M=new ee({map:v.map,bumpMap:v.bumpMap,bumpScale:.14,roughness:.8}),w=new ee({map:x.map,bumpMap:x.bumpMap,bumpScale:.12,roughness:.9}),P=new ee({color:3875604,roughness:.88}),C=new ee({map:p.map,bumpMap:p.bumpMap,bumpScale:.35,roughness:.92}),L=new ee({color:16765562,emissive:16751150,emissiveIntensity:1.4,roughness:.25}),D=new ee({color:13740363,roughness:.95}),T=new ee({color:4156214,roughness:.82}),b=new ee({color:15391680,roughness:.92,side:gt}),O=new ee({color:4537914,metalness:.72,roughness:.4}),ae=new ee({map:Wm(),roughness:.85});function ne(re){const{x:E,z:se,w:W,h:le,d:Y,rotY:Se=0,wallMat:Ee=y,signText:A="",signSub:_="",twoStory:z=!1,addLantern:X=!0}=re,Z=new Xe;Z.position.set(E,0,se),Z.rotation.y=Se;const B=new m(new N(W,le,Y),Ee);B.position.y=le*.5,B.castShadow=!0,B.receiveShadow=!0,Z.add(B);const ce=z?2.4:1.9,pe=new m(new N(W+.3,ce,.45),Ee);pe.position.set(0,le+ce*.5-.1,Y*.5-.15),pe.castShadow=!0,Z.add(pe);const ye=new m(new N(W+.75,.32,.75),P);ye.position.set(0,le+ce-.05,Y*.5-.05),Z.add(ye);const Te=2.8,Me=new m(new N(W+.4,.36,Te),w);Me.position.set(0,.18,Y*.5+Te*.5),Me.receiveShadow=!0,Z.add(Me);const Ie=z?4.2:le-.4,Fe=new m(new N(W+.6,.22,Te+.5),P);Fe.position.set(0,Ie,Y*.5+Te*.5),Fe.rotation.x=.14,Fe.castShadow=!0,Z.add(Fe);const we=Math.max(2,Math.floor(W/3.4)+1);for(let ge=0;ge<we;ge++){const Re=-W*.46+ge/(we-1)*(W*.92),Ce=new m(new N(.24,Ie-.2,.24),P);Ce.position.set(Re,(Ie+.2)*.5,Y*.5+Te-.22),Ce.castShadow=!0,Z.add(Ce)}if(z){const ge=new m(new N(W+.3,.14,.14),P);ge.position.set(0,Ie+1.15,Y*.5+Te-.2),Z.add(ge);for(let Re=-W*.45;Re<=W*.45;Re+=1.1){const Ce=new m(new N(.1,1,.1),P);Ce.position.set(Re,Ie+.65,Y*.5+Te-.2),Z.add(Ce)}}const ve=new m(new N(2.1,2.9,.24),P);ve.position.set(0,1.8,Y*.5+.04),Z.add(ve);const Le=new m(new N(1.72,2.55,.28),L);if(Le.position.set(0,1.75,Y*.5+.05),Z.add(Le),A==="SALOON")for(const ge of[-1,1]){const Re=new m(new N(.78,1.55,.1),M);Re.position.set(ge*.44,1.5,Y*.5+.22),Re.rotation.y=ge*.22,Z.add(Re)}const Ue=[-W*.32,W*.32];for(const ge of Ue){const Re=new m(new N(1.65,1.75,.2),P);Re.position.set(ge,2.1,Y*.5+.04);const Ce=new m(new N(1.35,1.45,.24),L);if(Ce.position.set(ge,2.1,Y*.5+.06),Z.add(Re,Ce),z){const Ge=Re.clone();Ge.position.y=6.2;const Qe=Ce.clone();Qe.position.y=6.2,Z.add(Ge,Qe)}}if(A){const ge=Vm(A,{sub:_,bg:A==="SALOON"?"#4a1812":"#2d1b10",border:"#e8ad4a",fg:"#fff2d2"}),Re=Math.min(W*.82,7.6),Ce=2.1,Ge=new m(new N(Re,Ce,.18),[P,P,P,P,new ee({map:ge,roughness:.65}),P]);Ge.position.set(0,le+ce*.45,Y*.5+.16),Z.add(Ge)}if(X){const ge=new m(new oe(.16,.12,.36,8),L);ge.position.set(0,Ie-.55,Y*.5+Te-.35),Z.add(ge);const Re=new gn(16755015,7.5,16,1.6);Re.position.set(0,Ie-.7,Y*.5+Te-.35),Z.add(Re),i.push(Ce=>{Re.intensity=7+Math.sin(Ce*7.2+E)*1.1})}const He=new m(new dt(.75,1),ae);He.position.set(W*.16,2,Y*.5+.16),Z.add(He),s.add(Z);const G=Math.abs(Math.cos(Se)),Ae=G>.5?W:Y,de=G>.5?Y:W;e.addBox(E,le*.5,se,Ae,le+3,de,"wood")}ne({x:0,z:-30,w:17,h:8.6,d:11,rotY:0,wallMat:M,signText:"SALOON",signSub:"WHISKEY • FARO • POKER",twoStory:!0}),ne({x:-20,z:-10,w:11,h:5.5,d:9,rotY:Math.PI/2,wallMat:y,signText:"SHERIFF",signSub:"RED GULCH JAIL"}),ne({x:-21,z:8,w:12,h:6.2,d:9,rotY:Math.PI/2,wallMat:w,signText:"BANK",signSub:"GOLD & BULLION"}),ne({x:-20,z:26,w:10,h:5,d:8.5,rotY:Math.PI/2,wallMat:y,signText:"LIVERY",signSub:"STABLES & FEED",addLantern:!1}),ne({x:20,z:-11,w:11.5,h:5.8,d:9,rotY:-Math.PI/2,wallMat:w,signText:"GENERAL",signSub:"DRY GOODS & AMMO"}),ne({x:21,z:7,w:11,h:5.4,d:8.5,rotY:-Math.PI/2,wallMat:M,signText:"HOTEL",signSub:"FRONTIER INN"});const fe=new Xe,j=24,$=27,F=16,I=14;function H(re,E,se,W){const le=se-re,Y=W-E,Se=Math.hypot(le,Y),Ee=Math.atan2(le,Y),A=new Xe;A.position.set((re+se)*.5,0,(E+W)*.5),A.rotation.y=Ee;for(const z of[.55,1.15,1.7]){const X=new m(new N(.14,.14,Se),w);X.position.y=z,X.castShadow=!0,A.add(X)}const _=Math.max(2,Math.round(Se/3));for(let z=0;z<=_;z++){const X=-Se*.5+z/_*Se,Z=new m(new N(.22,2,.22),P);Z.position.set(0,1,X),Z.castShadow=!0,A.add(Z)}fe.add(A),e.addBox((re+se)*.5,1,(E+W)*.5,Math.abs(le)+.5,2,Math.abs(Y)+.5,"wood")}H(j-F/2,$-I/2,j+F/2,$-I/2),H(j+F/2,$-I/2,j+F/2,$+I/2),H(j-F/2,$+I/2,j+F/2,$+I/2),H(j-F/2,$-I/2,j-F/2,$-2.5),H(j-F/2,$+2.5,j-F/2,$+I/2),s.add(fe);const q=[[23,25],[25,25],[24,24,1.1],[27,30],[18,22],[-9,18],[9,12],[-8,-6],[8,-14]];for(const[re,E,se=.55]of q){const W=new m(new N(1.9,1.1,1.3),D);W.position.set(re,se,E),W.rotation.y=re*.37%1.2,W.castShadow=!0,W.receiveShadow=!0,s.add(W),se<.8&&e.addBox(re,.55,E,1.9,1.1,1.3,"wood")}function J(re,E,se){const W=new Xe;W.position.set(re,0,E),W.rotation.y=se;const le=new m(new N(2.4,.9,4.6),y);le.position.y=1.25,le.castShadow=!0,W.add(le);const Y=new m(new oe(1.25,1.25,4.4,12,1,!0,0,Math.PI),b);Y.rotation.z=Math.PI/2,Y.rotation.y=Math.PI/2,Y.position.y=1.72,Y.castShadow=!0,W.add(Y);for(const[Se,Ee]of[[-1.3,-1.5],[1.3,-1.5],[-1.3,1.5],[1.3,1.5]]){const A=new m(new vt(.68,.08,6,14),P);A.rotation.y=Math.PI/2,A.position.set(Se,.72,Ee),A.castShadow=!0,W.add(A)}s.add(W),e.addBox(re,1.4,E,3,2.8,4.8,"wood")}J(6.5,22,.35),J(-7.5,2,-.25);const he=new Xe;he.position.set(-22,0,-28);for(const[re,E]of[[-2,-2],[2,-2],[-2,2],[2,2]]){const se=new m(new N(.45,9.5,.45),P);se.position.set(re,4.75,E),se.castShadow=!0,he.add(se)}const _e=new m(new oe(3.2,3.2,4.8,16),w);_e.position.y=11.4,_e.castShadow=!0;const U=new m(new vt(3.25,.09,6,20),O);U.rotation.x=Math.PI/2,U.position.y=10.2;const k=U.clone();k.position.y=12.6;const K=new m(new ze(3.7,2.4,16),P);K.position.y=15,K.castShadow=!0,he.add(_e,U,k,K),s.add(he),e.addBox(-22,4.5,-28,4.8,9,4.8,"wood");const V=[[-6,30],[7,34],[-11,14],[11,4],[-5,-16],[6,-18],[13,-24],[-13,-22]];for(const[re,E]of V){const se=new m(new N(1.45,1.35,1.45),y);se.position.set(re,.675,E),se.rotation.y=re*.5,se.castShadow=!0,se.receiveShadow=!0,s.add(se);const W=new m(new oe(.48,.44,1.25,12),M);W.position.set(re+1.15,.625,E+.4),W.castShadow=!0,s.add(W),e.addBox(re+.4,.7,E+.15,2.5,1.4,1.9,"wood")}function ie(re,E,se=1){const W=new Xe;W.position.set(re,0,E);const le=new m(new oe(.32,.38,4.2,10),T);le.position.y=2.1,le.castShadow=!0;const Y=new m(new oe(.22,.24,1.6,8),T);Y.position.set(.75,2.7,0);const Se=new m(new N(.75,.38,.38),T);Se.position.set(.42,2,0);const Ee=new m(new oe(.22,.24,1.4,8),T);Ee.position.set(-.72,3.1,0);const A=new m(new N(.7,.38,.38),T);A.position.set(-.4,2.5,0),W.add(le,Y,Se,Ee,A),W.rotation.y=re*.8,W.scale.setScalar(se),s.add(W)}const be=[[-34,38,1.1],[36,40,1.2],[-38,-22,1.3],[38,-28,1.05],[-42,6,1.15],[44,12,1.25],[14,44,.95],[-16,42,1]];for(const[re,E,se]of be)ie(re,E,se);const Pe=[[0,-115,58,36,26],[-82,-96,44,42,32],[85,-90,48,38,30],[-118,-10,34,34,54],[118,5,36,32,58],[-85,95,52,28,34],[76,102,56,30,32]];for(const[re,E,se,W,le]of Pe){const Y=new m(new oe(se*.42,se*.68,W,7),C);Y.position.set(re,W*.5-1,E),Y.rotation.y=re*.1,s.add(Y);const Se=new m(new oe(se*.46,se*.42,4.5,7),C);Se.position.set(re,W-1.5,E),Se.rotation.y=re*.1,s.add(Se)}t.initAmbient("dust",e.bounds),t.addTumbleweed(new S(-25,.7,15),1),t.addTumbleweed(new S(20,.7,-4),-1);const Oe=[{type:"health",pos:new S(-12,.8,20),label:"FRONTIER ELIXIR (+35 HP)"},{type:"ammo",pos:new S(12,.8,10),label:"AMMO BANDOLIER"},{type:"health",pos:new S(24,.8,28),label:"CORRAL MEDKIT (+35 HP)"},{type:"ammo",pos:new S(-10,.8,-14),label:"RIFLE & SHELL BOX"},{type:"health",pos:new S(11,.8,-22),label:"SALOON TONIC (+35 HP)"}];for(const re of Oe){const E=Yi(re.type);E.position.copy(re.pos),s.add(E),o.push({...re,mesh:E,collected:!1})}return{enemySpawns:[{type:"cowboy",pos:new S(-6,0,18)},{type:"cowboy",pos:new S(9,0,14)},{type:"bandito",pos:new S(-11,0,3)},{type:"cowboy",pos:new S(11,0,-2)},{type:"bandito",pos:new S(23,0,24)},{type:"bandito",pos:new S(-4,0,-10)},{type:"cowboy",pos:new S(9,0,-15)},{type:"bandito",pos:new S(-11,0,-20)},{type:"cowboy",pos:new S(12,0,-24)},{type:"bandito",pos:new S(0,0,-18)},{type:"boss_west",pos:new S(0,0,-21),isBossWave:!0}],pickups:o,animated:i,disposables:n}}function Yi(s){const e=new Xe,t=s==="health",n=new ee({color:t?3066993:15906633,emissive:t?1474627:11760658,emissiveIntensity:.75,metalness:.35,roughness:.3}),i=t?new m(new oe(.28,.34,.72,10),n):new m(new N(.75,.48,.52),n),o=new m(new vt(.55,.04,6,18),new st({color:t?7208874:16770180}));return o.rotation.x=Math.PI/2,o.position.y=-.32,e.add(i,o),e}const Jm={id:"japan",index:1,themeClass:"theme-japan",act:"ACT II • 1603",title:"KYOTO MIST",subtitle:"Blossom & Steel",heroName:"KENSHIN THE SAMURAI",objective:"Purge the Shrine of Ninjas & Rōnin, Defeat Lord Kurogane",quote:'"Beneath falling blossoms, honor is weighed by the quiet edge of steel. Step through the Torii gate and reclaim the sacred hill."',musicTheme:"japan",enemyIcon:"⚔",currency:"両 ",arsenalSummary:[["1 • Muramasa Katana","Swift folded-steel blade. RMB unleashes Iaido cleave."],["2 • Yumi Longbow","Silent piercing arrows with Spirit Focus Zoom (RMB)."],["3 • Shinobi Shuriken","Rapid steel stars. RMB throws a 3-star fan."],["4 • Tanegashima Musket","Thunderous Edo black-powder firepower."]],spawnPos:new S(0,0,46),spawnYaw:0,cameraPreview:{center:new S(0,5,-4),radius:38,height:14,speed:.13}};function Qm(s,e,t){const n=[],i=[],o=[];e.bounds={minX:-54,maxX:54,minZ:-54,maxZ:54};const r=new S(-.35,.22,-.9).normalize(),a=qi({topColor:1778503,midColor:9391725,horizonColor:16762029,sunColor:16771276,sunDirection:r,cloudTint:16757690,cloudDensity:.48});s.add(a.mesh),i.push(_=>{a.uniforms.uTime.value=_}),s.fog=new Xn(8149614,.0092);const l=new Gi(16765142,2964268,.9);s.add(l);const c=new tn(16764856,2.35);c.position.copy(r).multiplyScalar(95),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),c.shadow.camera.left=-65,c.shadow.camera.right=65,c.shadow.camera.top=65,c.shadow.camera.bottom=-65,c.shadow.near=10,c.shadow.far=210,c.shadow.bias=-5e-4,s.add(c);const h=new tn(7968488,.55);h.position.set(50,26,55),s.add(h);const d=fn("japan_moss",26,26),u=new m(new dt(340,340),new ee({map:d.map,bumpMap:d.bumpMap,bumpScale:.22,roughness:.92}));u.rotation.x=-Math.PI/2,u.receiveShadow=!0,s.add(u);const f=fn("cobble",3,22),g=new m(new dt(6.8,92),new ee({map:f.map,bumpMap:f.bumpMap,bumpScale:.2,roughness:.85}));g.rotation.x=-Math.PI/2,g.position.set(0,.04,2),g.receiveShadow=!0,s.add(g);const v=Vn("darkJapan",2,2),x=Vn("redLacquer",2,2),p=Xi("temple",2,2),y=fa("japan",4,2),M=Hm(2,1),w=fn("zen_sand",4,4),P=oo("japan"),C=new ee({map:v.map,bumpMap:v.bumpMap,bumpScale:.1,roughness:.78}),L=new ee({map:x.map,roughness:.48,metalness:.08}),D=new ee({map:p.map,bumpMap:p.bumpMap,bumpScale:.2,roughness:.88}),T=new ee({map:y.map,bumpMap:y.bumpMap,bumpScale:.18,roughness:.58,metalness:.15}),b=new ee({map:M,emissive:16757596,emissiveIntensity:.52,roughness:.55}),O=new ee({color:16770216,emissive:16749622,emissiveIntensity:1.9,roughness:.2}),ae=new ee({color:15119943,metalness:.85,roughness:.28}),ne=new ee({color:4949820,roughness:.45}),fe=new ee({color:3894834,roughness:.8}),j=new ee({color:16757707,emissive:6036016,emissiveIntensity:.22,roughness:.85}),$=new ee({color:16766692,emissive:7021627,emissiveIntensity:.25,roughness:.85}),F=new ee({map:P,side:gt,roughness:.7});function I(_,z,X=1,Z=0){const B=new Xe;B.position.set(_,0,z),B.rotation.y=Z,B.scale.setScalar(X);for(const we of[-3.2,3.2]){const ve=new m(new oe(.46,.55,1.1,10),D);ve.position.set(we,.55,0),ve.castShadow=!0;const Le=new m(new oe(.32,.38,6.8,12),L);Le.position.set(we,4,0),Le.castShadow=!0,B.add(ve,Le)}const ce=new m(new N(8.6,.42,.44),L);ce.position.set(0,5.9,0),ce.castShadow=!0;const pe=new m(new N(9.8,.54,.68),L);pe.position.set(0,7.25,0),pe.castShadow=!0;const ye=new m(new N(10.3,.34,.86),T);ye.position.set(0,7.62,0);const Te=new m(new N(.9,1.15,.26),C);Te.position.set(0,6.55,0);const Me=new m(new N(.98,1.24,.16),ae);Me.position.set(0,6.55,0),B.add(ce,pe,ye,Te,Me),s.add(B);const Ie=Math.cos(Z),Fe=Math.sin(Z);for(const we of[-3.2*X,3.2*X]){const ve=_+we*Ie,Le=z-we*Fe;e.addBox(ve,3.5,Le,1.1*X,7.5*X,1.1*X,"wood")}}I(0,34,1.15),I(0,21,1),I(0,-14,1.1);const H=oi(24,15,{deepColor:1064005,shallowColor:2520440,foamColor:16767462,sunColor:16765109,sunDir:r,opacity:.9,waveScale:.05});H.mesh.position.set(16,.08,4),s.add(H.mesh),i.push(_=>{H.uniforms.uTime.value=_});const q=[[6,-3],[11,-3.5],[18,-3.5],[26,-3],[28,3],[27,10],[22,11.5],[12,11.5],[6,10],[4.5,4]];for(const[_,z]of q){const X=new m(new un(1.1+_*7%1,1),D);X.position.set(_,.45,z),X.scale.set(1.3,.72,1.1),X.castShadow=!0,s.add(X)}const J=new st({color:16739886}),he=new st({color:16773350});for(let _=0;_<6;_++){const z=new m(new aa(.12,.45,4,6),_%2===0?J:he);z.rotation.x=Math.PI/2,s.add(z);const X=3.2+_%3*1.9,Z=.45+_*.1,B=_*1.1;i.push(ce=>{const pe=ce*Z+B;z.position.set(16+Math.cos(pe)*X,.05,4+Math.sin(pe)*(X*.65)),z.rotation.z=pe})}const _e=new Xe;_e.position.set(16,0,4);const U=new m(new N(4.4,.35,16),C);U.position.y=.75,U.receiveShadow=!0,U.castShadow=!0,_e.add(U);for(const _ of[-2,2]){const z=new m(new N(.18,.16,16),L);z.position.set(_,1.85,0),_e.add(z);for(let X=-7;X<=7;X+=3.5){const Z=new m(new N(.24,1.35,.24),L);Z.position.set(_,1.35,X);const B=new m(new Ze(.16,8,8),ae);B.position.set(_,2.08,X),_e.add(Z,B)}}s.add(_e),e.addWalkable(16,4,4.4,16.5,.92);const k=-19,K=4,V=18,ie=16,be=new m(new N(V,.26,ie),new ee({map:w.map,bumpMap:w.bumpMap,bumpScale:.24,roughness:.95}));be.position.set(k,.13,K),be.receiveShadow=!0,s.add(be);for(const[_,z,X,Z]of[[k,K-ie/2,V+.5,.45],[k,K+ie/2,V+.5,.45],[k-V/2,K,.45,ie],[k+V/2,K,.45,ie]]){const B=new m(new N(X,.45,Z),C);B.position.set(_,.22,z),s.add(B)}const Pe=[[-22,2,1.7],[-15,7,1.4],[-20,8,1.15],[-16,-1,1.55]];for(const[_,z,X]of Pe){const Z=new m(new un(X,1),D);Z.position.set(_,X*.65,z),Z.scale.set(1.25,.95,1),Z.castShadow=!0,Z.receiveShadow=!0,s.add(Z),e.addBox(_,X*.6,z,X*2.1,X*1.6,X*1.8,"stone")}function Oe(_){const{x:z,z:X,w:Z,h:B,d:ce,rotY:pe=0,isTemple:ye=!1}=_,Te=new Xe;Te.position.set(z,0,X),Te.rotation.y=pe;const Me=ye?1.4:.7,Ie=new m(new N(Z+2.2,Me,ce+2.2),D);Ie.position.y=Me*.5,Ie.receiveShadow=!0,Ie.castShadow=!0,Te.add(Ie);const Fe=new m(new N(Z+1.6,.22,ce+1.6),C);Fe.position.y=Me+.11,Fe.receiveShadow=!0,Te.add(Fe);const we=Me+.22+B*.5,ve=new m(new N(Z,B,ce),b);ve.position.y=we,ve.castShadow=!0,ve.receiveShadow=!0,Te.add(ve);const Le=ye?L:C;for(const Ge of[-Z*.52,0,Z*.52])for(const Qe of[-ce*.52,ce*.52]){const lt=new m(new oe(.22,.25,B+.3,10),Le);lt.position.set(Ge,we,Qe),lt.castShadow=!0,Te.add(lt)}const Ue=Me+.22+B,He=new m(new ze(Math.max(Z,ce)*.92,ye?3.2:2.6,4),T);He.rotation.y=Math.PI/4,He.scale.set(Z/Math.max(Z,ce)*1.15,1,ce/Math.max(Z,ce)*1.15),He.position.y=Ue+(ye?1.4:1.1),He.castShadow=!0,Te.add(He);const G=new m(new N(Z*.72,.36,.42),ae);if(G.position.y=Ue+(ye?2.85:2.35),Te.add(G),ye){const Ge=new m(new N(Z*.56,2.8,ce*.56),L);Ge.position.y=Ue+3.4,Ge.castShadow=!0;const Qe=new m(new ze(Math.max(Z,ce)*.62,3,4),T);Qe.rotation.y=Math.PI/4,Qe.position.y=Ue+5.9,Qe.castShadow=!0;const lt=new m(new oe(.08,.18,2.4,8),ae);lt.position.y=Ue+8.3,Te.add(Ge,Qe,lt);for(const it of[-Z*.32,Z*.32]){const St=new m(new dt(1.5,3.4),F);St.position.set(it,we+.2,ce*.5+.55),Te.add(St)}}const Ae=new m(new Ze(.32,10,8),O);Ae.scale.set(.85,1.3,.85),Ae.position.set(0,Ue-.5,ce*.5+.9),Te.add(Ae);const de=new gn(16752706,ye?11:7,20,1.6);de.position.set(0,Ue-.8,ce*.5+1.2),Te.add(de),s.add(Te);const ge=Math.abs(Math.cos(pe)),Re=(ge>.5?Z:ce)+1.8,Ce=(ge>.5?ce:Z)+1.8;e.addBox(z,(Me+B)*.5,X,Re,Me+B+2,Ce,"wood")}Oe({x:0,z:-34,w:16,h:5.4,d:11,rotY:0,isTemple:!0}),Oe({x:-24,z:-18,w:11,h:4,d:8.5,rotY:Math.PI/3}),Oe({x:24,z:-17,w:11,h:4,d:8.5,rotY:-Math.PI/3}),Oe({x:-28,z:24,w:10.5,h:3.8,d:8,rotY:Math.PI/2});function xe(_,z){const X=new Xe;X.position.set(_,0,z);const Z=new m(new oe(.18,.26,1.5,8),D);Z.position.y=.75;const B=new m(new N(.45,.45,.45),O);B.position.y=1.72;const ce=new m(new ze(.58,.38,6),D);ce.position.y=2.12,X.add(Z,B,ce),s.add(X),e.addBox(_,1,z,.75,2.2,.75,"stone")}for(const _ of[28,14,0,-10,-22])xe(-4.5,_),xe(4.5,_);function re(_,z,X=1){const Z=new Xe;Z.position.set(_,0,z);const B=new m(new oe(.32,.56,4.4,8),C);B.position.y=2.2,B.rotation.z=.12,B.castShadow=!0,Z.add(B);const ce=[[0,5.2,0,2.7,j],[-1.9,4.5,.8,2.1,$],[1.8,4.7,-.7,2.2,j],[.4,6.2,.5,1.9,$],[-.9,4.3,-1.6,1.85,j]];for(const[pe,ye,Te,Me,Ie]of ce){const Fe=new m(new Ms(Me,1),Ie);Fe.position.set(pe,ye,Te),Fe.scale.set(1.25,.72,1.15),Fe.castShadow=!0,Z.add(Fe)}Z.scale.setScalar(X),s.add(Z),e.addBox(_,2,z,1.2*X,4.2*X,1.2*X,"wood")}const E=[[-12,-26,1.2],[12,-26,1.25],[-10,16,1.05],[10,18,1.1],[-31,4,1.3],[32,-4,1.2],[-14,-6,1],[30,16,1.15]];for(const[_,z,X]of E)re(_,z,X);function se(_,z,X=12,Z=4.5){const B=new Xe;for(let ce=0;ce<X;ce++){const pe=ce/X*Math.PI*2+_*.3,ye=.6+ce*1.37%1*Z,Te=_+Math.cos(pe)*ye,Me=z+Math.sin(pe)*ye,Ie=11+ce*3.1%6,Fe=new m(new oe(.11,.15,Ie,6),ne);if(Fe.position.set(Te,Ie*.5,Me),Fe.rotation.z=(ce%3-1)*.04,Fe.castShadow=!0,B.add(Fe),ce%2===0){const we=new m(new un(1.5,0),fe);we.position.set(Te,Ie-1,Me),we.scale.set(1.4,.48,1.4),B.add(we)}}s.add(B),e.addBox(_,3,z,Z*1.1,6,Z*1.1,"wood")}const W=[[-14,38,14,5],[14,38,14,5],[-26,42,12,5.5],[26,36,14,5.5],[36,26,14,5.5],[38,6,14,5.5],[-40,-6,14,5.5],[38,-26,14,5.5],[-38,-32,14,5.5],[20,26,10,3.6]];for(const[_,z,X,Z]of W)se(_,z,X,Z);const le=new Xe,Y=new m(new ze(92,68,24),new ee({color:3882339,roughness:.95}));Y.position.set(0,32,-165);const Se=new m(new ze(34,25,24),new ee({color:16772070,emissive:3875370,emissiveIntensity:.2,roughness:.85}));Se.position.set(0,54,-165),le.add(Y,Se),s.add(le);for(let _=0;_<10;_++){const z=_/10*Math.PI*2;if(Math.abs(Math.sin(z)+1)<.2)continue;const X=new m(new ze(46+_%3*14,28+_%4*8,9),new ee({color:3095356,roughness:.95}));X.position.set(Math.cos(z)*138,12,Math.sin(z)*138),s.add(X)}t.initAmbient("sakura",e.bounds);const Ee=[{type:"health",pos:new S(-12,.8,26),label:"MATCHA TEA ELIXIR (+35 HP)"},{type:"ammo",pos:new S(16,1.5,4),label:"ARROWS & SHURIKEN POUCH"},{type:"health",pos:new S(-18,.8,4),label:"ZEN SANCTUARY HERBS (+35 HP)"},{type:"ammo",pos:new S(11,.8,-14),label:"POWDER & QUIVER CACHE"},{type:"health",pos:new S(-11,.8,-20),label:"SHRINE BLESSING (+35 HP)"}];for(const _ of Ee){const z=Yi(_.type);z.position.copy(_.pos),s.add(z),o.push({..._,mesh:z,collected:!1})}return{enemySpawns:[{type:"ninja",pos:new S(-8,0,26)},{type:"ninja",pos:new S(9,0,24)},{type:"ronin",pos:new S(-15,0,8)},{type:"ninja",pos:new S(16,.95,4)},{type:"ronin",pos:new S(4,0,6)},{type:"ninja",pos:new S(-17,0,-4)},{type:"ronin",pos:new S(12,0,-10)},{type:"ninja",pos:new S(-9,0,-18)},{type:"ronin",pos:new S(8,0,-21)},{type:"ninja",pos:new S(0,0,-23)},{type:"boss_japan",pos:new S(0,0,-24),isBossWave:!0}],pickups:o,animated:i,disposables:n}}const eg={id:"swiss",index:2,themeClass:"theme-swiss",act:"ACT III • 1307",title:"RÜTLI VALLEY",subtitle:"Tell's Arrow & The Uri Banner",heroName:"WILHELM TELL (URI)",objective:"Drive the Austrian Army from the Valley & Defeat Capt. von Gessler",quote:'"Upon the Rütli meadow we swore our oath beneath the Uri Bull: Uri, Schwyz, and Unterwalden shall bow to no tyrant’s hat!"',musicTheme:"swiss",enemyIcon:"✚",currency:"Fl ",arsenalSummary:[["1 • Tell's Armbrust","Precision Swiss crossbow with Eagle-Eye Zoom (RMB)."],["2 • Swiss Halberd","Cleaves Austrian steel armor at close quarters."],["3 • Alpine Repeater","Rapid-fire light crossbow for skirmishes."],["4 • Alpine Fire-Pot","Blazing medieval black-powder grenade."]],spawnPos:new S(-4,0,44),spawnYaw:0,cameraPreview:{center:new S(-4,6,-4),radius:42,height:15,speed:.12}};function tg(s,e,t){const n=[],i=[],o=[];e.bounds={minX:-52,maxX:44,minZ:-54,maxZ:54};const r=new S(.48,.52,-.7).normalize(),a=qi({topColor:1463976,midColor:6137064,horizonColor:14283007,sunColor:16776160,sunDirection:r,cloudTint:16777215,cloudDensity:.48});s.add(a.mesh),i.push(B=>{a.uniforms.uTime.value=B}),s.fog=new Xn(12902386,.0052);const l=new Gi(14676735,3892017,.95);s.add(l);const c=new tn(16774620,2.7);c.position.copy(r).multiplyScalar(110),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),c.shadow.camera.left=-70,c.shadow.camera.right=70,c.shadow.camera.top=70,c.shadow.camera.bottom=-70,c.shadow.near=10,c.shadow.far=230,c.shadow.bias=-5e-4,s.add(c);const h=new tn(9426175,.5);h.position.set(-55,22,40),s.add(h);const d=fn("alpine_meadow",26,26),u=new m(new dt(360,360),new ee({map:d.map,bumpMap:d.bumpMap,bumpScale:.22,roughness:.92}));u.rotation.x=-Math.PI/2,u.receiveShadow=!0,s.add(u);const f=fn("cobble",3,24),g=new m(new dt(6.5,86),new ee({map:f.map,bumpMap:f.bumpMap,bumpScale:.18,roughness:.88}));g.rotation.x=-Math.PI/2,g.position.set(-4,.04,2),g.receiveShadow=!0,s.add(g);const v=Vn("alpine",2,2),x=Xi("castle",2,2),p=fa("swiss",4,2),y=Gm(2,1),M=new ee({map:v.map,bumpMap:v.bumpMap,bumpScale:.14,roughness:.85}),w=new ee({color:3547155,roughness:.86}),P=new ee({map:x.map,bumpMap:x.bumpMap,bumpScale:.26,roughness:.88}),C=new ee({map:p.map,bumpMap:p.bumpMap,bumpScale:.18,roughness:.84}),L=new ee({map:y,roughness:.82}),D=new ee({color:16054783,roughness:.72}),T=new ee({color:6777712,roughness:.92}),b=new ee({color:2051371,roughness:.88}),O=new ee({color:2843446,roughness:.88}),ae=new ee({color:14232363,roughness:.7}),ne=new ee({color:16767882,emissive:16752691,emissiveIntensity:.75}),fe=new ee({map:oo("austria"),side:gt,roughness:.65}),j=new ee({map:oo("uri"),side:gt,roughness:.65}),$=new ee({map:oo("swiss"),side:gt,roughness:.65}),F=oi(140,220,{deepColor:743544,shallowColor:3065036,foamColor:15465727,sunColor:16776416,sunDir:r,opacity:.9,waveScale:.16});F.mesh.position.set(92,.08,0),s.add(F.mesh),i.push(B=>{F.uniforms.uTime.value=B});for(let B=-52;B<=52;B+=6.5){const ce=new m(new un(1.5+Math.abs(B)*3%1.4,1),P);ce.position.set(22.5+Math.sin(B*.14)*2.5,.35,B),ce.scale.set(1.4,.65,1.3),s.add(ce)}e.addBox(34,2,0,20,4,120,"water");const I=new m(new N(10,.35,3.6),M);I.position.set(26,.6,16),I.castShadow=!0,s.add(I);for(const B of[22,26,30])for(const ce of[14.5,17.5]){const pe=new m(new oe(.16,.18,1.8,8),w);pe.position.set(B,.3,ce),s.add(pe)}const H=new m(new N(3.2,.65,1.35),M);H.position.set(32,.25,19),s.add(H),i.push(B=>{H.position.y=.28+Math.sin(B*2.2)*.1,H.rotation.z=Math.sin(B*1.7)*.05});const q=new Xe;for(let B=0;B<6;B++){const ce=-40+B*16,pe=28+B%3*8,ye=new m(new un(14,1),T);ye.position.set(-64,pe*.45,ce),ye.scale.set(1.1,pe/14,1.45),ye.castShadow=!0,q.add(ye);const Te=new m(new un(9,1),D);Te.position.set(-66,pe*.9,ce),Te.scale.set(1.2,.45,1.3),q.add(Te)}s.add(q);const J=Rl(9.5,31);J.mesh.position.set(-48.5,15,-18),J.mesh.rotation.y=Math.PI/2-.28,s.add(J.mesh);const he=Rl(6.2,23);he.mesh.position.set(-47.5,11.5,-26),he.mesh.rotation.y=Math.PI/2-.18,s.add(he.mesh),i.push(B=>{J.uniforms.uTime.value=B,he.uniforms.uTime.value=B*1.15});const _e=oi(20,24,{deepColor:1472662,shallowColor:6480363,foamColor:16777215,sunColor:16776416,sunDir:r,opacity:.92,waveScale:.12});_e.mesh.position.set(-44,.09,-18),s.add(_e.mesh),i.push(B=>{_e.uniforms.uTime.value=B*1.3}),t.addMistEmitter(new S(-46,.8,-18),4.5),t.addMistEmitter(new S(-46,.8,-25),3.2);const U=oi(68,6.4,{deepColor:1800598,shallowColor:6085864,foamColor:16777215,sunColor:16776416,sunDir:r,opacity:.88,waveScale:.08});U.mesh.position.set(-10,.06,-8),s.add(U.mesh),i.push(B=>{U.uniforms.uTime.value=B*1.5});const k=new Xe;k.position.set(-4,0,-8);const K=new m(new N(7.2,.35,9.2),M);K.position.y=.55,K.receiveShadow=!0,k.add(K);for(const B of[-3.4,3.4]){const ce=new m(new N(.22,.2,9.2),w);ce.position.set(B,1.55,0),k.add(ce);for(const pe of[-4.2,0,4.2]){const ye=new m(new N(.26,1.35,.26),w);ye.position.set(B,1.1,pe),k.add(ye)}}s.add(k),e.addWalkable(-4,-8,7.2,9.5,.72);function V(B,ce,pe=0,ye=!0){const Te=new Xe;Te.position.set(B,0,ce),Te.rotation.y=pe;const Me=new ee({color:14922122,roughness:.72}),Ie=new ee({color:5059360,roughness:.92}),Fe=new ee({color:6048308,roughness:.85}),we=new ee({color:9380900,roughness:.8}),ve=new ee({color:2825492,roughness:.85}),Le=new ee({color:15910441,roughness:.65}),Ue=new ee({color:13687526,metalness:.88,roughness:.22});for(const Ut of[-.17,.17]){const Vt=new m(new oe(.11,.1,.84,8),ve);Vt.position.set(Ut,.42,0),Vt.castShadow=!0,Te.add(Vt)}const He=new m(new N(.62,.78,.36),Fe);He.position.set(0,1.18,0),He.castShadow=!0;const G=new m(new N(.65,.18,.38),Le);G.position.set(0,1,0);const Ae=new m(new N(.64,.95,.1),we);Ae.position.set(0,1.05,-.22),Ae.rotation.x=.12,Te.add(He,G,Ae);const de=new m(new Ze(.22,12,10),Me);de.position.set(0,1.76,0),de.castShadow=!0;const ge=new m(new ze(.21,.38,10),Ie);ge.rotation.x=Math.PI,ge.position.set(0,1.54,.11);const Re=new m(new N(.26,.07,.09),Ie);Re.position.set(0,1.67,.19);const Ce=new m(new oe(.24,.25,.16,12),we);Ce.position.set(0,1.94,0);const Ge=new m(new ze(.05,.42,6),D);Ge.position.set(.18,2.1,-.04),Ge.rotation.z=-.35,Te.add(de,ge,Re,Ce,Ge);const Qe=new m(new oe(.09,.08,.62,8),Fe);Qe.position.set(-.42,1.24,.16),Qe.rotation.x=-.85;const lt=new m(new oe(.09,.08,.66,8),Fe);lt.position.set(.42,1.28,.22),lt.rotation.x=-1.1,Te.add(Qe,lt);const it=new m(new oe(.036,.04,3.05,8),w);it.position.set(-.46,1.55,.35),it.castShadow=!0;const St=new m(new ze(.045,.55,4),Ue);St.position.set(-.46,3.3,.35);const $t=new m(new N(.03,.44,.36),Ue);$t.position.set(-.46,2.86,.52);const hi=new m(new ze(.04,.28,4),Ue);hi.rotation.x=-Math.PI/2,hi.position.set(-.46,2.86,.18);const Zi=new m(new ze(.075,.22,8),Le);if(Zi.position.set(-.46,2.58,.35),Te.add(it,St,$t,hi,Zi),ye){const Ut=new m(new oe(.045,.055,5.4,8),w);Ut.position.set(.48,2.7,.42),Ut.castShadow=!0;const Vt=new m(new ze(.09,.3,6),Le);Vt.position.set(.48,5.5,.42);const _n=new dt(1.75,2.6,8,4),$i=new m(_n,j);$i.position.set(1.36,4.05,.42),Te.add(Ut,Vt,$i);const qn=_n.attributes.position.array.slice();i.push(ys=>{const In=_n.attributes.position;for(let Dn=0;Dn<In.count;Dn++){const Ss=qn[Dn*3],vo=qn[Dn*3+1],bs=Ss+.875;In.setZ(Dn,Math.sin(ys*4.5+bs*2.6+vo*.8)*.14*bs)}In.needsUpdate=!0})}else{const Ut=new m(new oe(.036,.04,2.9,8),w);Ut.position.set(.48,1.48,.36);const Vt=new m(new ze(.045,.5,4),Ue);Vt.position.set(.48,3.12,.36);const _n=new m(new N(.03,.4,.34),Ue);_n.position.set(.48,2.72,.52),Te.add(Ut,Vt,_n)}s.add(Te),e.addBox(B,1.2,ce,1.2,2.4,1.2,"wood")}V(2.8,37.5,-.55,!0),V(-9.2,37.2,.45,!1);function ie(B,ce,pe){const ye=new m(new oe(.06,.08,6.2,8),w);ye.position.set(B,3.1,ce),ye.castShadow=!0;const Te=new m(new dt(1.9,3),pe);Te.position.set(B+.98,4.5,ce),s.add(ye,Te),i.push(Me=>{Te.rotation.y=Math.sin(Me*2.8+B)*.18})}ie(-13.8,39.5,$),ie(-15.2,33.5,j);const be=new gn(16747571,8,16,1.6);be.position.set(-9,1.1,39),s.add(be);const Pe=new m(new ze(.42,.95,7),new st({color:16754739}));Pe.position.set(-9,.55,39),s.add(Pe),i.push(B=>{be.intensity=7.5+Math.sin(B*11)*1.4,Pe.scale.y=.85+Math.sin(B*14)*.2});const Oe=new m(new oe(.08,.1,1.75,8),w);Oe.position.set(5.5,.875,33),s.add(Oe);const xe=new m(new Ze(.24,12,10),new ee({color:14229793,roughness:.3,emissive:3802373,emissiveIntensity:.35}));xe.position.set(5.5,1.92,33),xe.userData.isTellApple=!0,s.add(xe);function re(B,ce,pe,ye,Te,Me=0,Ie=!1){const Fe=new Xe;Fe.position.set(B,0,ce),Fe.rotation.y=Me;const we=new m(new N(pe+.4,1.1,Te+.4),P);we.position.y=.55,we.castShadow=!0,we.receiveShadow=!0,Fe.add(we);const ve=new m(new N(pe,ye,Te),Ie?L:M);ve.position.y=1.1+ye*.5,ve.castShadow=!0,ve.receiveShadow=!0,Fe.add(ve);const Le=2.9,Ue=new ze(Math.max(pe,Te)*.84,Le,4),He=new m(Ue,C);if(He.rotation.y=Math.PI/4,He.scale.set((pe+2.4)/Math.max(pe,Te),1,(Te+2.4)/Math.max(pe,Te)),He.position.y=1.1+ye+Le*.48,He.castShadow=!0,Fe.add(He),Ie){const Ce=new m(new N(pe*.72,.22,1.3),M);Ce.position.set(0,3.6,Te*.5+.65);const Ge=new m(new N(pe*.72,.85,.14),w);Ge.position.set(0,4.1,Te*.5+1.22);const Qe=new m(new N(pe*.65,.34,.36),ae);Qe.position.set(0,4.58,Te*.5+1.32),Fe.add(Ce,Ge,Qe)}const G=new m(new N(2.2,2.7,.2),w);G.position.set(0,2.35,Te*.5+.08),Fe.add(G);for(const Ce of[-pe*.32,pe*.32]){const Ge=new m(new N(1.25,1.25,.18),ne);Ge.position.set(Ce,2.8,Te*.5+.08),Fe.add(Ge)}const Ae=new m(new N(1.1,1.2,3.4),w);Ae.position.set(pe*.5+.6,.6,0),Ae.castShadow=!0,Fe.add(Ae),s.add(Fe);const de=Math.abs(Math.cos(Me)),ge=de>.5?pe+.8:Te+.8,Re=de>.5?Te+.8:pe+.8;e.addBox(B,(ye+2)*.5,ce,ge,ye+3,Re,"wood")}re(-21,22,10,4.6,8.5,Math.PI/2,!0),re(12,21,9.5,4.2,8,-Math.PI/2,!1),re(-24,3,10.5,4.4,8.5,Math.PI/2.2,!1),re(11,-19,9.5,4.5,8,-Math.PI/2.5,!0);const E=-4,se=-35,W=new Xe;W.position.set(E,0,se);const le=new m(new N(11,14,11),P);le.position.y=7,le.castShadow=!0,le.receiveShadow=!0,W.add(le);for(let B=-4.8;B<=4.8;B+=2.4)for(const ce of[-5.2,5.2]){const pe=new m(new N(1.3,1.4,.8),P);pe.position.set(B,14.7,ce),W.add(pe)}for(const B of[-10.5,10.5]){const ce=new m(new N(11,5.2,2.4),P);ce.position.set(B,2.6,3.2),ce.castShadow=!0,ce.receiveShadow=!0,W.add(ce)}for(const B of[-3.4,3.4]){const ce=new m(new dt(2.3,5.6),fe);ce.position.set(B,8.6,5.75),W.add(ce)}const Y=new m(new oe(.1,.12,6,8),w);Y.position.set(0,17,0);const Se=new m(new dt(3.2,2),fe);Se.position.set(1.6,18.6,0),W.add(Y,Se),i.push(B=>{Se.rotation.y=Math.sin(B*3.4)*.25}),s.add(W),e.addBox(E,7,se,11.4,14.5,11.4,"stone"),e.addBox(E-10.5,2.6,se+3.2,11.2,5.4,2.8,"stone"),e.addBox(E+10.5,2.6,se+3.2,11.2,5.4,2.8,"stone");const Ee=[[-11,14,5.5,1.35,1.1],[4,10,5.2,1.35,1.1],[-12,-18,5.5,1.4,1.1],[3,-22,5.5,1.4,1.1]];for(const[B,ce,pe,ye,Te]of Ee){const Me=new m(new N(pe,ye,Te),P);Me.position.set(B,ye*.5,ce),Me.castShadow=!0,Me.receiveShadow=!0,s.add(Me),e.addBox(B,ye*.5,ce,pe,ye,Te,"stone")}function A(B,ce,pe=1){const ye=new Xe;ye.position.set(B,0,ce);const Te=new m(new oe(.24,.36,2.6,7),w);Te.position.y=1.3,Te.castShadow=!0,ye.add(Te);const Me=[[3.4,2.4,3.2,b],[5.2,1.9,2.8,O],[6.9,1.35,2.4,b],[8.3,.85,1.9,O]];for(const[Ie,Fe,we,ve]of Me){const Le=new m(new ze(Fe,we,8),ve);Le.position.y=Ie,Le.castShadow=!0,ye.add(Le)}ye.scale.setScalar(pe),s.add(ye),e.addBox(B,2,ce,1.1*pe,4*pe,1.1*pe,"wood")}const _=[[-34,34,1.25],[-38,18,1.35],[-34,-22,1.2],[-30,-36,1.4],[16,36,1.15],[17,6,1.1],[16,-34,1.3],[-18,-32,1.25],[-26,44,1.2],[9,44,1.15],[-34,6,1.15],[-16,11,.95]];for(const[B,ce,pe]of _)A(B,ce,pe);const z=[[-110,-150,75,92],[-20,-165,86,115],[75,-150,78,102],[165,-90,72,95],[175,20,82,108],[155,115,76,88],[60,160,80,96],[-45,165,76,88],[-145,115,78,95],[-155,-25,82,104]];for(const[B,ce,pe,ye]of z){const Te=new m(new ze(pe,ye,7),T);Te.position.set(B,ye*.45,ce),Te.rotation.y=B*.2,s.add(Te);const Me=new m(new ze(pe*.56,ye*.52,7),D);Me.position.set(B,ye*.72,ce),Me.rotation.y=B*.2,s.add(Me)}t.initAmbient("alpine",e.bounds);const X=[{type:"health",pos:new S(-14,.8,22),label:"ALPINE CHEESE & CIDER (+35 HP)"},{type:"ammo",pos:new S(7,.8,16),label:"STEEL QUARREL BOLTS"},{type:"health",pos:new S(-18,.8,-1),label:"MOUNTAIN HERB TONIC (+35 HP)"},{type:"ammo",pos:new S(6,.8,-16),label:"CROSSBOW & FIRE-POT CRATE"},{type:"health",pos:new S(-12,.8,-22),label:"WALDSTÄTTEN RATIONS (+35 HP)"}];for(const B of X){const ce=Yi(B.type);ce.position.copy(B.pos),s.add(ce),o.push({...B,mesh:ce,collected:!1})}return{enemySpawns:[{type:"halberdier",pos:new S(-10,0,20)},{type:"arquebusier",pos:new S(5,0,15)},{type:"halberdier",pos:new S(-2,0,7)},{type:"arquebusier",pos:new S(-15,0,2)},{type:"halberdier",pos:new S(8,0,1)},{type:"arquebusier",pos:new S(-4,.75,-8)},{type:"halberdier",pos:new S(-14,0,-16)},{type:"arquebusier",pos:new S(6,0,-18)},{type:"halberdier",pos:new S(-6,0,-24)},{type:"arquebusier",pos:new S(2,0,-26)},{type:"boss_swiss",pos:new S(-4,0,-26),isBossWave:!0}],pickups:o,animated:i,disposables:n,tellApple:xe}}const ng={id:"greece",index:3,themeClass:"theme-greece",act:"ACT IV • 480 BC",title:"AEGEAN ISLE",subtitle:"Marble & Turquoise Sea",heroName:"ULYSSES",objective:"Break the Spartan Garrison & Claim the Marble Temple",quote:'"Under the blazing Aegean sun, bronze rings against marble. Walk from the sandy shore to the pillared sanctuary."',musicTheme:"greece",enemyIcon:"Λ",currency:"Δ ",spawnPos:new S(0,0,44),spawnYaw:0,cameraPreview:{center:new S(0,6,-4),radius:42,height:15,speed:.13}};function ig(s,e,t){const n=[],i=[],o=[];e.bounds={minX:-46,maxX:46,minZ:-52,maxZ:50};const r=new S(.45,.58,-.68).normalize(),a=qi({topColor:673948,midColor:3905259,horizonColor:14677503,sunColor:16776160,sunDirection:r,cloudTint:16777215,cloudDensity:.34});s.add(a.mesh),i.push(se=>{a.uniforms.uTime.value=se}),s.fog=new Xn(12904695,.0044);const l=new Gi(15267583,13085044,.85);s.add(l);const c=new tn(16774876,2.35);c.position.copy(r).multiplyScalar(115),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),c.shadow.camera.left=-68,c.shadow.camera.right=68,c.shadow.camera.top=68,c.shadow.camera.bottom=-68,c.shadow.near=10,c.shadow.far=230,c.shadow.bias=-5e-4,s.add(c);const h=new tn(6611179,.55);h.position.set(-55,18,40),s.add(h);const d=oi(440,440,{deepColor:416903,shallowColor:2543822,foamColor:15793663,sunColor:16776416,sunDir:r,opacity:.92,waveScale:.16});d.mesh.position.set(0,-.22,0),s.add(d.mesh),i.push(se=>{d.uniforms.uTime.value=se});const u=fn("greek_sand",18,20),f=new N(102,1.2,114),g=new m(f,new ee({map:u.map,bumpMap:u.bumpMap,bumpScale:.2,roughness:.92}));g.position.set(0,-.6,-2),g.receiveShadow=!0,s.add(g);const v=Xm(3,22),x=new m(new dt(7.2,86),new ee({map:v.map,roughness:.68,metalness:.04}));x.rotation.x=-Math.PI/2,x.position.set(0,.04,1),x.receiveShadow=!0,s.add(x);const p=new ee({map:v.map,roughness:.62,metalness:.05}),y=new ee({color:16447472,roughness:.84}),M=new ee({color:1928898,roughness:.55}),w=fa("terracotta",3,2),P=new ee({map:w.map,bumpMap:w.bumpMap,bumpScale:.18,roughness:.78}),C=new ee({color:12739900,roughness:.78}),L=Xi("castle",2,2),D=new ee({map:L.map,color:14273976,roughness:.9}),T=new ee({color:7029798,roughness:.85}),b=new ee({color:14459970,metalness:.85,roughness:.28}),O=new ee({color:7310422,roughness:.85}),ae=new ee({color:2379050,roughness:.88}),ne=new ee({map:bc("greece"),side:gt,roughness:.8}),fe=new st({color:16757560}),j=new Xe;j.position.set(0,0,-36);const $=new m(new N(24,.55,17),p);$.position.y=.275,$.receiveShadow=!0;const F=new m(new N(22.4,.55,15.6),p);F.position.y=.825,F.receiveShadow=!0;const I=new m(new N(20.8,.55,14.2),p);I.position.y=1.375,I.receiveShadow=!0,j.add($,F,I);const H=new m(new N(11.5,7.2,8.2),p);H.position.set(0,1.65+3.6,-.5),H.castShadow=!0,H.receiveShadow=!0,j.add(H);const q=[[-9.2,5.8],[-5.5,5.8],[-1.85,5.8],[1.85,5.8],[5.5,5.8],[9.2,5.8],[-9.2,-5.8],[-5.5,-5.8],[-1.85,-5.8],[1.85,-5.8],[5.5,-5.8],[9.2,-5.8],[-9.2,0],[9.2,0]];for(const[se,W]of q){const le=new m(new oe(.46,.56,7.6,14),p);le.position.set(se,1.65+3.8,W),le.castShadow=!0;const Y=new m(new N(1.25,.36,1.25),p);Y.position.set(se,1.65+7.75,W),j.add(le,Y)}const J=new m(new N(21.2,1.15,14.4),p);J.position.y=1.65+8.45,J.castShadow=!0;const he=new mo;he.moveTo(-10.8,0),he.lineTo(10.8,0),he.lineTo(0,3.5),he.closePath();const _e=new ws(he,{depth:14.6,bevelEnabled:!1});_e.translate(0,0,-7.3);const U=new m(_e,p);U.position.y=1.65+9,U.castShadow=!0,j.add(J,U);for(const se of[-5.2,5.2]){const W=new m(new oe(.55,.25,1.35,10),b);W.position.set(se,1.65+.65,8.2);const le=new m(new ze(.35,.85,7),fe);le.position.set(se,1.65+1.65,8.2);const Y=new gn(16753723,9,20,1.6);Y.position.set(se,1.65+2,8.2),j.add(W,le,Y),i.push(Se=>{Y.intensity=8.5+Math.sin(Se*9+se)*1.4,le.scale.y=.85+Math.sin(Se*13+se)*.2})}s.add(j),e.addBox(0,5,-36,22,10,15,"stone");function k(se,W,le,Y,Se,Ee=0){const A=new Xe;A.position.set(se,0,W),A.rotation.y=Ee;const _=new m(new N(le,Y,Se),y);_.position.y=Y*.5,_.castShadow=!0,_.receiveShadow=!0,A.add(_);const z=new m(new ze(Math.max(le,Se)*.82,2.2,4),P);z.rotation.y=Math.PI/4,z.scale.set((le+1.2)/Math.max(le,Se),1,(Se+1.2)/Math.max(le,Se)),z.position.y=Y+1.05,z.castShadow=!0,A.add(z);const X=new m(new N(1.7,2.5,.2),M);X.position.set(0,1.25,Se*.5+.04),A.add(X);for(const B of[-le*.3,le*.3]){const ce=new m(new N(1.25,1.25,.18),M);ce.position.set(B,Y*.58,Se*.5+.04),A.add(ce)}for(const B of[-1.45,1.55]){const ce=new m(new oe(.18,.3,.88,10),C);ce.position.set(B,.44,Se*.5+.52),ce.castShadow=!0,A.add(ce)}s.add(A);const Z=Math.abs(Math.cos(Ee));e.addBox(se,Y*.5,W,Z>.5?le:Se,Y+2.5,Z>.5?Se:le,"stone")}k(-20,22,10,4.8,8.2,Math.PI/2),k(20,20,10.5,5.2,8.4,-Math.PI/2),k(-22,0,11,5,8.6,Math.PI/2.1),k(21,-4,9.5,4.6,8,-Math.PI/1.9),k(-19,-20,9.5,4.5,7.8,Math.PI/3);function K(se,W,le){const Y=new Xe;Y.position.set(se,.1,W),Y.rotation.y=le;const Se=new m(new N(3.6,1.4,13.5),T);Se.position.y=.7,Se.castShadow=!0;const Ee=new m(new ze(1.6,3.8,4),T);Ee.rotation.x=Math.PI/2,Ee.position.set(0,.85,8.2);const A=new m(new ze(.42,1.8,6),b);A.rotation.x=Math.PI/2,A.position.set(0,.42,10.2);const _=new m(new oe(.35,.6,3.2,8),T);_.position.set(0,2.2,-6.5),_.rotation.x=-.35;const z=new m(new oe(.16,.2,8.5,8),T);z.position.set(0,5,0);const X=new m(new oe(.1,.1,6.2,8),T);X.rotation.z=Math.PI/2,X.position.set(0,7.2,.2);const Z=new m(new dt(5.8,4.6,6,4),ne);Z.position.set(0,4.9,.5),Y.add(Se,Ee,A,_,z,X,Z),s.add(Y),i.push(B=>{Y.position.y=.15+Math.sin(B*1.7+se)*.12,Y.rotation.z=Math.sin(B*1.3+W)*.04})}K(54,24,-.45),K(-54,14,.55),K(34,48,-1.25);const V=[[-8.5,28,5.4,1.4,1.1],[8.5,16,5.2,1.4,1.1],[-9.5,6,5.6,1.4,1.1],[9.5,-14,5.4,1.45,1.1],[-8.5,-18,5.4,1.45,1.1]];for(const[se,W,le,Y,Se]of V){const Ee=new m(new N(le,Y,Se),p);Ee.position.set(se,Y*.5,W),Ee.castShadow=!0,Ee.receiveShadow=!0,s.add(Ee),e.addBox(se,Y*.5,W,le,Y,Se,"stone");const A=new m(new oe(.45,.5,2.8,12),p);A.position.set(se+le*.5+.6,1.4,W),A.castShadow=!0,s.add(A),e.addBox(se+le*.5+.6,1.4,W,1.1,2.8,1.1,"stone")}function ie(se,W,le=1){const Y=new Xe;Y.position.set(se,0,W);const Se=new m(new oe(.28,.45,2.6,8),T);Se.position.y=1.3,Se.rotation.z=.14,Se.castShadow=!0,Y.add(Se);for(const[Ee,A,_,z]of[[0,3.2,0,2],[-1.3,2.8,.6,1.4],[1.4,2.9,-.5,1.5]]){const X=new m(new Ms(z,1),O);X.position.set(Ee,A,_),X.scale.set(1.3,.72,1.2),X.castShadow=!0,Y.add(X)}Y.scale.setScalar(le),s.add(Y),e.addBox(se,1.6,W,1*le,3.2*le,1*le,"wood")}function be(se,W,le=1){const Y=new Xe;Y.position.set(se,0,W);const Se=new m(new oe(.16,.24,2,7),T);Se.position.y=1;const Ee=new m(new ze(1.15,9.5,10),ae);Ee.position.y=6,Ee.castShadow=!0,Y.add(Se,Ee),Y.scale.setScalar(le),s.add(Y),e.addBox(se,2,W,.9*le,4*le,.9*le,"wood")}const Pe=[[-13,34,1.1],[14,32,1],[-30,12,1.25],[32,8,1.2],[-32,-14,1.15],[30,-18,1.2]];for(const[se,W,le]of Pe)ie(se,W,le);const Oe=[[-12,-26,1.15],[12,-26,1.15],[-14,-34,1.25],[14,-34,1.25],[-14,14,1],[14,10,1.05],[-28,30,1.1],[28,-28,1.2]];for(const[se,W,le]of Oe)be(se,W,le);const xe=[[-115,-95,38,22],[110,-85,42,26],[-125,45,34,18],[128,52,40,20],[10,-145,58,34]];for(const[se,W,le,Y]of xe){const Se=new m(new ze(le,Y,8),D);Se.position.set(se,Y*.42-1,W),s.add(Se)}t.initAmbient("aegean",e.bounds);const re=[{type:"health",pos:new S(-11,.8,24),label:"AEGEAN AMBROSIA (+35 HP)"},{type:"ammo",pos:new S(11,.8,14),label:"BRONZE JAVELIN BUNDLE"},{type:"health",pos:new S(-12,.8,2),label:"OLIVE OIL & HONEY (+35 HP)"},{type:"ammo",pos:new S(12,.8,-14),label:"HOPLITE JAVELIN RACK"},{type:"health",pos:new S(-11,.8,-22),label:"TEMPLE OFFERING (+35 HP)"}];for(const se of re){const W=Yi(se.type);W.position.copy(se.pos),s.add(W),o.push({...se,mesh:W,collected:!1})}return{enemySpawns:[{type:"spartan_hoplite",pos:new S(-8,0,22)},{type:"spartan_skirmisher",pos:new S(9,0,18)},{type:"spartan_hoplite",pos:new S(-4,0,10)},{type:"spartan_skirmisher",pos:new S(-12,0,4)},{type:"spartan_hoplite",pos:new S(10,0,-2)},{type:"spartan_skirmisher",pos:new S(0,0,-8)},{type:"spartan_hoplite",pos:new S(-10,0,-14)},{type:"spartan_skirmisher",pos:new S(10,0,-18)},{type:"spartan_hoplite",pos:new S(-5,0,-24)},{type:"spartan_skirmisher",pos:new S(6,0,-24)},{type:"boss_greece",pos:new S(0,0,-25),isBossWave:!0}],pickups:o,animated:i,disposables:n}}const sg={id:"scandinavia",index:4,themeClass:"theme-scandinavia",act:"ACT V • 985 AD",title:"FJORD OF THE NORTH",subtitle:"Frost, Iron & Northern Lights",heroName:"ERIK THE RED",objective:"Storm the Palisade & Defeat Rival Jarl Hakon at the Great Hall",quote:'"Beneath dancing northern lights, longships grind upon frozen shingle. Cross the timber palisade and claim the Great Hall."',musicTheme:"scandinavia",enemyIcon:"ᛟ",currency:"ℳ ",spawnPos:new S(0,0,46),spawnYaw:0,cameraPreview:{center:new S(0,6,-4),radius:42,height:15,speed:.12}};function og(s,e,t){const n=[],i=[],o=[];e.bounds={minX:-48,maxX:48,minZ:-54,maxZ:52};const r=new S(-.35,.42,-.84).normalize(),a=qi({topColor:330788,midColor:860743,horizonColor:2116974,sunColor:14284799,sunDirection:r,cloudTint:4422300,cloudDensity:.25});s.add(a.mesh),i.push(U=>{a.uniforms.uTime.value=U});const l=Cl(280,68);l.mesh.position.set(0,68,-110),l.mesh.rotation.x=.22,s.add(l.mesh);const c=Cl(240,56);c.mesh.position.set(35,76,-80),c.mesh.rotation.y=-.35,c.mesh.rotation.x=.26,s.add(c.mesh),i.push(U=>{l.uniforms.uTime.value=U,c.uniforms.uTime.value=U*.85+2.1}),s.fog=new Xn(1453383,.0068);const h=new Gi(8050376,2767695,1.05);s.add(h);const d=new tn(13363455,1.95);d.position.copy(r).multiplyScalar(110),d.castShadow=!0,d.shadow.mapSize.set(2048,2048),d.shadow.camera.left=-68,d.shadow.camera.right=68,d.shadow.camera.top=68,d.shadow.camera.bottom=-68,d.shadow.near=10,d.shadow.far=230,d.shadow.bias=-5e-4,s.add(d);const u=new tn(3862704,.65);u.position.set(45,55,-70),s.add(u);const f=oi(440,440,{deepColor:400694,shallowColor:1460846,foamColor:13363455,sunColor:11466726,sunDir:r,opacity:.92,waveScale:.14});f.mesh.position.set(0,-.25,0),s.add(f.mesh),i.push(U=>{f.uniforms.uTime.value=U});const g=fn("arctic_snow",20,22),v=new m(new N(106,1.2,118),new ee({map:g.map,bumpMap:g.bumpMap,bumpScale:.22,roughness:.85}));v.position.set(0,-.6,-2),v.receiveShadow=!0,s.add(v);const x=fn("cobble",3,24),p=new m(new dt(6.8,88),new ee({map:x.map,color:11188164,bumpMap:x.bumpMap,bumpScale:.2,roughness:.88}));p.rotation.x=-Math.PI/2,p.position.set(0,.04,1),p.receiveShadow=!0,s.add(p);const y=Vn("alpine",2,2),M=Xi("castle",2,2),w=new ee({map:y.map,bumpMap:y.bumpMap,bumpScale:.16,roughness:.86}),P=new ee({color:2825492,roughness:.88}),C=new ee({map:M.map,color:7305861,bumpMap:M.bumpMap,bumpScale:.25,roughness:.9}),L=new ee({color:15595263,roughness:.72}),D=new ee({color:3753042,roughness:.94}),T=new ee({color:1456169,roughness:.88}),b=new ee({color:16762470,emissive:16745508,emissiveIntensity:1.5,roughness:.3}),O=new ee({map:bc("scandinavia"),side:gt,roughness:.8}),ae=new st({color:16755251});function ne(U,k,K,V){const ie=K-U,be=V-k,Pe=Math.hypot(ie,be),Oe=Math.atan2(ie,be),xe=Math.max(3,Math.floor(Pe/.65)),re=new Xe;re.position.set((U+K)*.5,0,(k+V)*.5),re.rotation.y=Oe;for(let se=0;se<=xe;se++){const W=-Pe*.5+se/xe*Pe,le=3.4+se*19%5*.14,Y=new m(new oe(.16,.26,le,7),w);Y.position.set(0,le*.5,W),Y.castShadow=!0,re.add(Y)}const E=new m(new N(.45,.26,Pe),P);E.position.y=2.1,re.add(E),s.add(re),e.addBox((U+K)*.5,1.8,(k+V)*.5,Math.abs(ie)+.7,3.6,Math.abs(be)+.7,"wood")}ne(-34,24,-6,24),ne(6,24,34,24);for(const U of[-6,6]){const k=new m(new oe(.42,.48,6.2,8),P);k.position.set(U,3.1,24),k.castShadow=!0,s.add(k)}const fe=new m(new N(13.6,.65,.85),P);fe.position.set(0,5.7,24),s.add(fe);function j(U,k,K,V,ie,be=0,Pe=!1){const Oe=new Xe;Oe.position.set(U,0,k),Oe.rotation.y=be;const xe=new m(new N(K+1,1,ie+1),C);xe.position.y=.5,xe.receiveShadow=!0,Oe.add(xe);const re=new m(new N(K,V,ie),w);re.position.y=1+V*.5,re.castShadow=!0,re.receiveShadow=!0,Oe.add(re);const E=Pe?4.8:3.2,se=new mo;se.moveTo(-(K*.62),0),se.lineTo(K*.62,0),se.lineTo(0,E),se.closePath();const W=new ws(se,{depth:ie+2.2,bevelEnabled:!1});W.translate(0,0,-(ie+2.2)*.5);const le=new m(W,L);le.position.y=1+V-.15,le.castShadow=!0,Oe.add(le);const Y=new m(new N(.45,.45,ie+3.2),P);Y.position.y=1+V+E-.1,Oe.add(Y);for(const z of[-(ie*.5+1.4),ie*.5+1.4]){const X=new m(new ze(.32,1.4,5),P);X.position.set(0,1+V+E+.45,z),X.rotation.x=z>0?.4:-.4,Oe.add(X)}const Se=new m(new N(Pe?3.2:2.1,Pe?3.8:2.8,.25),b);Se.position.set(0,1+(Pe?1.9:1.4),ie*.5+.06),Oe.add(Se);const Ee=new ee({map:qr(Pe?3:1),roughness:.7});for(const z of[-K*.3,K*.3]){const X=new m(new oe(.68,.68,.1,16),[P,Ee,P]);X.rotation.x=Math.PI/2,X.position.set(z,3,ie*.5+.14),Oe.add(X)}const A=new gn(16749112,Pe?14:8,Pe?28:18,1.5);A.position.set(0,3.2,ie*.5+2.2),Oe.add(A),i.push(z=>{A.intensity=(Pe?13:7.5)+Math.sin(z*9.5+U)*1.6}),s.add(Oe);const _=Math.abs(Math.cos(be));e.addBox(U,(V+2)*.5,k,_>.5?K+.8:ie+.8,V+3,_>.5?ie+.8:K+.8,"wood")}j(0,-35,16,6.2,13,0,!0),j(-22,8,9.5,4.2,13.5,Math.PI/2.2),j(22,6,9.5,4.2,13.5,-Math.PI/2.2),j(-21,-15,9,4,12,Math.PI/3),j(21,-16,9,4,12,-Math.PI/3);function $(U,k,K){const V=new Xe;V.position.set(U,.08,k),V.rotation.y=K;const ie=new m(new N(3.4,1.25,14.5),w);ie.position.y=.65,ie.castShadow=!0;const be=new m(new oe(.24,.55,4.2,8),P);be.position.set(0,2.2,7.6),be.rotation.x=.38;const Pe=new m(new N(.45,.55,1.15),P);Pe.position.set(0,4,8.5);const Oe=be.clone();Oe.position.set(0,2,-7.5),Oe.rotation.x=-.35;const xe=new m(new oe(.14,.18,8.6,8),P);xe.position.set(0,5,0);const re=new m(new oe(.09,.09,6.4,8),P);re.rotation.z=Math.PI/2,re.position.set(0,7.3,.15);const E=new m(new dt(5.9,4.8),O);E.position.set(0,4.9,.35),V.add(ie,be,Pe,Oe,xe,re,E);for(let se=0;se<6;se++){const W=-4.5+se*1.8,le=new ee({map:qr(se),roughness:.7});for(const Y of[-1,1]){const Se=new m(new oe(.55,.55,.08,14),[P,le,P]);Se.rotation.z=Math.PI/2,Se.position.set(Y*1.78,1.15,W),V.add(Se)}}s.add(V),i.push(se=>{V.position.y=.12+Math.sin(se*1.6+U)*.11,V.rotation.z=Math.sin(se*1.2+k)*.035})}$(56,20,-.38),$(-56,12,.42),$(36,48,-1.15);function F(U,k){const K=new m(new oe(.45,.24,1.3,8),C);K.position.set(U,.65,k);const V=new m(new ze(.32,.85,7),ae);V.position.set(U,1.65,k);const ie=new gn(16748075,8.5,19,1.6);ie.position.set(U,2,k),s.add(K,V,ie),i.push(be=>{ie.intensity=8+Math.sin(be*11+U)*1.5,V.scale.y=.82+Math.sin(be*15+k)*.22}),e.addBox(U,.7,k,.9,1.5,.9,"stone")}for(const U of[34,14,-6,-24])F(-5.2,U),F(5.2,U);const I=[[-9,16,4.6,1.4,1.2],[9,10,4.6,1.4,1.2],[-9,-4,4.8,1.45,1.2],[9,-14,4.8,1.45,1.2]];for(const[U,k,K,V,ie]of I){const be=new m(new N(K,V,ie),w);be.position.set(U,V*.5,k),be.castShadow=!0;const Pe=new m(new N(K+.1,.22,ie+.1),L);Pe.position.set(U,V+.08,k),s.add(be,Pe),e.addBox(U,V*.5,k,K,V,ie,"wood")}function H(U,k,K=1){const V=new Xe;V.position.set(U,0,k);const ie=new m(new oe(.24,.36,2.6,7),P);ie.position.y=1.3,ie.castShadow=!0,V.add(ie);for(const[be,Pe,Oe]of[[3.5,2.4,3.2],[5.4,1.85,2.8],[7.1,1.3,2.4],[8.5,.8,1.8]]){const xe=new m(new ze(Pe,Oe,8),T);xe.position.y=be,xe.castShadow=!0;const re=new m(new ze(Pe*.88,Oe*.45,8),L);re.position.y=be+Oe*.28,V.add(xe,re)}V.scale.setScalar(K),s.add(V),e.addBox(U,2,k,1.1*K,4*K,1.1*K,"wood")}const q=[[-14,38,1.2],[14,38,1.15],[-34,34,1.3],[34,32,1.25],[-36,0,1.35],[36,-2,1.3],[-34,-26,1.25],[34,-26,1.3],[-15,-28,1.15],[15,-28,1.15]];for(const[U,k,K]of q)H(U,k,K);const J=[[-125,-135,76,95],[-10,-165,88,110],[105,-130,80,98],[-155,-20,74,88],[155,-15,76,92],[-135,110,68,76],[135,110,70,78]];for(const[U,k,K,V]of J){const ie=new m(new ze(K,V,7),D);ie.position.set(U,V*.44,k),ie.rotation.y=U*.2;const be=new m(new ze(K*.58,V*.48,7),L);be.position.set(U,V*.72,k),be.rotation.y=U*.2,s.add(ie,be)}t.initAmbient("snow",e.bounds);const he=[{type:"health",pos:new S(-11,.8,30),label:"WARM MEAD HORN (+35 HP)"},{type:"ammo",pos:new S(11,.8,16),label:"THROWING AXE BUNDLE"},{type:"health",pos:new S(-12,.8,2),label:"LONGHOUSE FEAST (+35 HP)"},{type:"ammo",pos:new S(12,.8,-12),label:"RAIDER AXE RACK"},{type:"health",pos:new S(-11,.8,-22),label:"HEARTH TONIC (+35 HP)"}];for(const U of he){const k=Yi(U.type);k.position.copy(U.pos),s.add(k),o.push({...U,mesh:k,collected:!1})}return{enemySpawns:[{type:"viking_archer",pos:new S(-8,0,20)},{type:"viking_warrior",pos:new S(8,0,18)},{type:"viking_berserker",pos:new S(0,0,11)},{type:"viking_archer",pos:new S(-12,0,4)},{type:"viking_warrior",pos:new S(11,0,-2)},{type:"viking_berserker",pos:new S(-6,0,-9)},{type:"viking_archer",pos:new S(10,0,-15)},{type:"viking_warrior",pos:new S(-10,0,-20)},{type:"viking_berserker",pos:new S(6,0,-23)},{type:"viking_archer",pos:new S(-4,0,-26)},{type:"boss_scandinavia",pos:new S(0,0,-25),isBossWave:!0}],pickups:o,animated:i,disposables:n}}const rg={id:"normandy",index:5,themeClass:"theme-normandy",act:"ACT VI • 6 JUNE 1944",title:"NORMANDY",subtitle:"Before First Light",heroName:"LYUDMILA PAVLICHENKO",objective:"Cross the Village & Silence the Coastal Gun Battery Before Dawn",quote:'"The armada waits on the dark Channel horizon. Cross the bocage lanes and occupied village, and silence the cliffside battery before first light."',historicalNote:"Historical note: these three real resistance figures did not meet in Normandy in June 1944; they appear together here as legends.",musicTheme:"normandy",enemyIcon:"✚",currency:"★ ",spawnPos:new S(0,0,48),spawnYaw:0,cameraPreview:{center:new S(0,6,-6),radius:44,height:15,speed:.11}};function ag(s,e,t){const n=[],i=[],o=[];e.bounds={minX:-48,maxX:48,minZ:-52,maxZ:52};const r=new S(.32,.24,-.92).normalize(),a=qi({topColor:1054774,midColor:4930150,horizonColor:14261128,sunColor:16766901,sunDirection:r,cloudTint:10058918,cloudDensity:.42});s.add(a.mesh),i.push(we=>{a.uniforms.uTime.value=we}),s.fog=new Xn(3815250,.0062);const l=new Gi(10730726,3884342,1.15);s.add(l);const c=new tn(13426943,2.25);c.position.set(-48,72,62),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),c.shadow.camera.left=-72,c.shadow.camera.right=72,c.shadow.camera.top=72,c.shadow.camera.bottom=-72,c.shadow.near=10,c.shadow.far=230,c.shadow.bias=-5e-4,s.add(c);const h=new tn(16760739,.65);h.position.copy(r).multiplyScalar(100),s.add(h);const d=oi(460,260,{deepColor:860472,shallowColor:2246502,foamColor:11454174,sunColor:16764853,sunDir:r,opacity:.94,waveScale:.16});d.mesh.position.set(0,-4.5,-182),s.add(d.mesh),i.push(we=>{d.uniforms.uTime.value=we});const u=new st({color:1448745}),f=new st({color:16770211});for(let we=0;we<16;we++){const ve=-150+we*20+we*13%9,Le=-170-we%4*26,Ue=we%3===0,He=new m(new N(Ue?14:7.5,Ue?3.2:1.8,3.6),u);He.position.set(ve,-3.2,Le);const G=new m(new N(Ue?4.2:2.2,Ue?4.5:2.2,2.4),u);G.position.set(ve,-.5,Le);const Ae=new m(new Ze(.32,6,6),f);Ae.position.set(ve,Ue?2.1:.8,Le),s.add(He,G,Ae)}const g=new st({color:14281983,transparent:!0,opacity:.16,blending:cs,depthWrite:!1,side:gt}),v=[{x:-24,z:-46,phase:0,speed:.45,range:.48},{x:0,z:-48,phase:2.1,speed:.36,range:.42},{x:25,z:-45,phase:4,speed:.52,range:.5}];for(const we of v){const ve=new Xe;ve.position.set(we.x,4.5,we.z);const Le=new m(new ze(9.5,115,14,1,!0),g);Le.position.y=57.5,Le.rotation.x=Math.PI,ve.add(Le),s.add(ve),i.push(Ue=>{ve.rotation.z=Math.sin(Ue*we.speed+we.phase)*we.range,ve.rotation.x=-.22+Math.cos(Ue*we.speed*.7+we.phase)*.14})}const x=[];for(let we=0;we<6;we++){const ve=new m(new Ze(1.9,8,8),new st({color:16757575,transparent:!0,opacity:0}));ve.position.set(-55+we*22,34+we%3*10,-110-we%2*25),s.add(ve),x.push({mesh:ve,offset:we*1.35,period:3.8+we%3*1.1})}i.push(we=>{for(const ve of x){const Le=(we+ve.offset)%ve.period;if(Le<.28){const Ue=1-Le/.28;ve.mesh.material.opacity=Ue*.95,ve.mesh.scale.setScalar(.6+(1-Ue)*2.2)}else ve.mesh.material.opacity=0}});const p=fn("alpine_meadow",22,22),y=new m(new N(116,8,120),new ee({map:p.map,color:8098920,bumpMap:p.bumpMap,bumpScale:.2,roughness:.94}));y.position.set(0,-4,2),y.receiveShadow=!0,s.add(y);const M=fn("cobble",3,28),w=new m(new dt(7.2,98),new ee({map:M.map,color:11382957,bumpMap:M.bumpMap,bumpScale:.22,roughness:.88}));w.rotation.x=-Math.PI/2,w.position.set(0,.04,2),w.receiveShadow=!0,s.add(w);const P=Xi("castle",2,2),C=Ym(2,2),L=Vn("weathered",2,2),D=Zm("#535950"),T=new ee({map:P.map,color:13222578,bumpMap:P.bumpMap,bumpScale:.22,roughness:.88}),b=new ee({color:3883597,roughness:.78}),O=new ee({map:C.map,bumpMap:C.bumpMap,bumpScale:.24,roughness:.92}),ae=new ee({map:L.map,roughness:.86}),ne=new ee({color:3549214,roughness:.88}),fe=new ee({color:3099944,roughness:.94}),j=new ee({color:4022578,roughness:.94}),$=new ee({color:10259307,roughness:.95}),F=new ee({color:5199182,roughness:.72,metalness:.25}),I=new ee({color:2895916,roughness:.65,metalness:.45}),H=new ee({map:D,roughness:.72,side:gt}),q=new ee({color:16766346,emissive:16751931,emissiveIntensity:.65}),J=new ee({color:12069926,roughness:.7}),he=new ee({color:15460058,roughness:.75});function _e(we,ve,Le,Ue,He=2.4){const G=new Xe;G.position.set(we,0,ve);const Ae=new m(new N(Le,He,Ue),fe);Ae.position.y=He*.5,Ae.castShadow=!0,Ae.receiveShadow=!0,G.add(Ae);const de=Math.max(2,Math.floor(Math.max(Le,Ue)/3.2));for(let ge=0;ge<de;ge++){const Re=(ge+.5)/de-.5,Ce=new m(new un(1.35,0),j);Ce.position.set(Le>Ue?Re*Le:0,He+.2,Ue>=Le?Re*Ue:0),Ce.scale.set(1.2,.75,1.2),G.add(Ce)}s.add(G),e.addBox(we,He*.5,ve,Le,He+.6,Ue,"wood")}_e(-7.5,36,2.6,18,2.3),_e(7.5,36,2.6,18,2.3),_e(-22,42,26,2.8,2.5),_e(22,42,26,2.8,2.5),_e(-30,22,14,2.6,2.4),_e(30,22,14,2.6,2.4);function U(we,ve,Le,Ue,He,G=0){const Ae=new Xe;Ae.position.set(we,0,ve),Ae.rotation.y=G;const de=new m(new N(Le,Ue,He),T);de.position.y=Ue*.5,de.castShadow=!0,de.receiveShadow=!0,Ae.add(de);const ge=2.8,Re=new mo;Re.moveTo(-(Le*.55),0),Re.lineTo(Le*.55,0),Re.lineTo(0,ge),Re.closePath();const Ce=new ws(Re,{depth:He+.8,bevelEnabled:!1});Ce.translate(0,0,-(He+.8)*.5);const Ge=new m(Ce,b);Ge.position.y=Ue-.05,Ge.castShadow=!0,Ae.add(Ge);const Qe=new m(new N(1.6,2.5,.2),ne);Qe.position.set(0,1.25,He*.5+.04),Ae.add(Qe);for(const it of[-Le*.3,Le*.3]){const St=new m(new N(1.15,1.35,.18),q);St.position.set(it,Ue*.62,He*.5+.04),Ae.add(St)}s.add(Ae);const lt=Math.abs(Math.cos(G));e.addBox(we,Ue*.5,ve,lt>.5?Le:He,Ue+3,lt>.5?He:Le,"stone")}U(-19,32,11,4.8,8.5,Math.PI/2),U(19,14,10.5,5.6,8.5,-Math.PI/2),U(-20,-2,11,5.8,9,Math.PI/2),U(21,-8,10,5.2,8.5,-Math.PI/2);const k=new Xe;k.position.set(-20,0,14),k.rotation.y=Math.PI/2;const K=new m(new N(9.5,6.8,14.5),T);K.position.y=3.4,K.castShadow=!0,K.receiveShadow=!0;const V=new m(new N(4.8,13.5,4.8),T);V.position.set(0,6.75,5.4),V.castShadow=!0;const ie=new m(new ze(3.2,8.2,4),b);ie.rotation.y=Math.PI/4,ie.position.set(0,17.5,5.4),ie.castShadow=!0;const be=new m(new N(2.4,3.6,.25),ne);be.position.set(0,1.8,7.9),k.add(K,V,ie,be),s.add(k),e.addBox(-20,4,14,15,14,10,"stone");for(const[we,ve]of[[-5.2,18],[5.2,6],[-5.2,-10],[5.2,-22]]){const Le=new m(new oe(.1,.14,4.4,8),I);Le.position.set(we,2.2,ve);const Ue=new m(new Ze(.22,8,8),q);Ue.position.set(we,4.5,ve);const He=new gn(16758886,7.5,19,1.5);He.position.set(we,4.3,ve),s.add(Le,Ue,He)}const Pe=new Xe;Pe.position.set(10.2,0,22),Pe.rotation.y=-.22;const Oe=new m(new N(2.3,2.1,2.4),F);Oe.position.set(0,1.55,2.1),Oe.castShadow=!0;const xe=new m(new N(2.5,2.3,4.8),$);xe.position.set(0,1.9,-1.6),xe.castShadow=!0;const re=new m(new N(2.55,.65,5),F);re.position.set(0,.85,-1.6);for(const[we,ve]of[[-1.2,2.2],[1.2,2.2],[-1.2,-2.6],[1.2,-2.6]]){const Le=new m(new oe(.56,.56,.36,12),I);Le.rotation.z=Math.PI/2,Le.position.set(we,.56,ve),Pe.add(Le)}const E=new m(new dt(.85,.85),H);E.position.set(-1.18,1.45,2.1),E.rotation.y=-Math.PI/2,Pe.add(Oe,xe,re,E),s.add(Pe),e.addBox(10.2,1.5,22,3.2,3,7.6,"stone");const se=new Xe;se.position.set(-9.5,0,2),se.rotation.y=.34;const W=new m(new N(3.2,1.35,6),F);W.position.y=1.05,W.castShadow=!0;const le=new m(new N(.68,1.05,6.2),I);le.position.set(-1.55,.55,0);const Y=le.clone();Y.position.x=1.55;const Se=new m(new N(2.2,1,2.5),F);Se.position.set(0,2.15,-.2),Se.castShadow=!0;const Ee=new m(new oe(.11,.14,4.2,10),I);Ee.rotation.x=Math.PI/2,Ee.position.set(0,2.15,2.7);const A=new m(new dt(.85,.85),H);A.position.set(1.13,2.15,-.2),A.rotation.y=Math.PI/2;const _=A.clone();_.position.x=-1.13,_.rotation.y=-Math.PI/2,se.add(W,le,Y,Se,Ee,A,_),s.add(se),e.addBox(-9.5,1.4,2,4.4,2.8,6.6,"stone");const z=new m(new N(2.2,2.9,2.2),ae);z.position.set(6.5,1.45,-14),z.castShadow=!0;const X=new m(new ze(1.9,1.1,4),b);X.rotation.y=Math.PI/4,X.position.set(6.5,3.45,-14),s.add(z,X),e.addBox(6.5,1.5,-14,2.4,3,2.4,"wood");for(let we=0;we<6;we++){const ve=new m(new N(1.2,.18,.18),we%2===0?J:he);ve.position.set(4.5-we*1.1,2.5+we*.26,-14),ve.rotation.z=-.24,s.add(ve)}function Z(we,ve,Le=5.4){const Ue=new Xe;Ue.position.set(we,0,ve);for(let He=0;He<3;He++){const G=Math.floor(Le/.85);for(let Ae=0;Ae<G;Ae++){const de=new m(new N(.82,.44,.72),$);de.position.set(-Le*.5+.45+Ae*.85+He%2*.2,.22+He*.42,0),de.castShadow=!0,de.receiveShadow=!0,Ue.add(de)}}s.add(Ue),e.addBox(we,.65,ve,Le,1.3,1,"stone")}Z(-2.5,-16,5.2),Z(8.5,-4,4.4),Z(-8.5,-26,4.8),Z(8.5,-26,4.8);const B=new Xe;B.position.set(0,0,-40);const ce=new m(new N(20,6.2,12),O);ce.position.y=3.1,ce.castShadow=!0,ce.receiveShadow=!0;const pe=new m(new N(22.4,1.4,14),O);pe.position.y=6.5,pe.castShadow=!0;const ye=new m(new N(11.5,1.6,.6),I);ye.position.set(0,3.6,5.9);for(const we of[-3.6,3.6]){const ve=new m(new oe(.24,.34,7.2,12),I);ve.rotation.x=Math.PI/2-.08,ve.position.set(we,3.6,8.2),ve.castShadow=!0,B.add(ve)}for(const we of[-16,16]){const ve=new m(new N(8.5,4.6,8.5),O);ve.position.set(we,2.3,1.5),ve.castShadow=!0;const Le=new m(new N(9.4,1,9.4),O);Le.position.set(we,4.9,1.5),B.add(ve,Le)}const Te=new m(new oe(.08,.1,6.5,8),I);Te.position.set(0,10.2,0);const Me=new m(new dt(2.8,1.8),H);Me.position.set(1.4,12.2,0),B.add(ce,pe,ye,Te,Me),i.push(we=>{Me.rotation.y=Math.sin(we*3.1)*.22}),s.add(B),e.addBox(0,3.5,-40,21,7.5,12.5,"stone"),e.addBox(-16,2.5,-38.5,9,5.5,9,"stone"),e.addBox(16,2.5,-38.5,9,5.5,9,"stone"),t.initAmbient("alpine",e.bounds);const Ie=[{type:"health",pos:new S(-10,.8,30),label:"FIELD BANDAGE (+35 HP)"},{type:"ammo",pos:new S(9,.8,14),label:"AMMUNITION CASE"},{type:"health",pos:new S(-11,.8,8),label:"RESISTANCE MEDKIT (+35 HP)"},{type:"ammo",pos:new S(10,.8,-14),label:"CHECKPOINT AMMO CRATE"},{type:"health",pos:new S(-9,.8,-22),label:"FIELD RATIONS (+35 HP)"}];for(const we of Ie){const ve=Yi(we.type);ve.position.copy(we.pos),s.add(ve),o.push({...we,mesh:ve,collected:!1})}return{enemySpawns:[{type:"german_rifleman",pos:new S(-4,0,24)},{type:"guard_dog",pos:new S(3.5,0,20)},{type:"german_officer",pos:new S(9,0,12)},{type:"german_rifleman",pos:new S(-9,0,10)},{type:"german_rifleman",pos:new S(6,0,-1)},{type:"guard_dog",pos:new S(-6,0,-6)},{type:"german_mg",pos:new S(-2.5,0,-17.5)},{type:"german_officer",pos:new S(8,0,-18)},{type:"german_rifleman",pos:new S(-8,0,-28)},{type:"german_rifleman",pos:new S(8,0,-28)},{type:"boss_normandy",pos:new S(0,0,-30),isBossWave:!0}],pickups:o,animated:i,disposables:n}}const Qt=[{meta:jm,builder:Km},{meta:Jm,builder:Qm},{meta:eg,builder:tg},{meta:ng,builder:ig},{meta:sg,builder:og},{meta:rg,builder:ag}],Pl={good:{label:"THE GOOD",enemyMult:.72,playerHp:130},bad:{label:"THE BAD",enemyMult:1,playerHp:100},ugly:{label:"THE UGLY",enemyMult:1.4,playerHp:75}};class lg{constructor(){this.container=document.getElementById("game-container"),this.sound=new Om,this.renderer=new Tm({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Il,this.renderer.toneMapping=Zr,this.renderer.toneMappingExposure=1.12,this.container.appendChild(this.renderer.domElement),this.scene=new Jh,this.camera=new Zt(72,window.innerWidth/window.innerHeight,.1,600),this.scene.add(this.camera),this.weaponHolder=new Xe,this.camera.add(this.weaponHolder),this.muzzleLight=new gn(16758861,0,12,2),this.muzzleLight.position.set(.25,-.1,-.9),this.camera.add(this.muzzleLight),this.heroStage=new Xe,this.heroStage.visible=!1,this.heroFigureHolder=new Xe,this.heroStage.add(this.heroFigureHolder);const e=new gn(16773590,9,10,1.4);e.position.set(1.4,2.2,2.2);const t=new gn(10406655,4.5,10,1.5);t.position.set(-1.8,1.9,-1.6),this.heroStage.add(e,t),this.camera.add(this.heroStage),this.heroStagePop=1,this.composer=new Lm(this.renderer),this.renderPass=new Im(this.scene,this.camera),this.bloomPass=new ki(new De(window.innerWidth,window.innerHeight),.34,.55,.82),this.outputPass=new Nm,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(this.outputPass),this.state="title",this.levelIndex=0,this.difficultyKey="bad",this.selectedHeroIds={west:an.west[0].id,japan:an.japan[0].id,swiss:an.swiss[0].id,greece:an.greece[0].id,scandinavia:an.scandinavia[0].id,normandy:an.normandy[0].id},this.activeHero=an.west[0],this.timeSinceLastDamage=999,this.practiceMode=!1,this.usedPracticeThisRun=!1,this.paxBuffer="",this.clock=new xc,this.elapsed=0,this.worldGroup=new Xe,this.scene.add(this.worldGroup),this.collision=new Tl,this.particles=null,this.animatedCallbacks=[],this.enemies=[],this.bossSpawnPending=null,this.activeBoss=null,this.pickups=[],this.enemyProjectiles=[],this.playerThrowables=[],this.tellApple=null,this.player={pos:new S,vel:new S,yaw:0,pitch:0,hp:100,maxHp:100,stamina:100,grounded:!0,bobPhase:0},this.weapons=[],this.weaponMeshes=[],this.currentWeaponIdx=0,this.fireTimer=0,this.reloading=!1,this.reloadTimer=0,this.scoped=!1,this.recoilOffset=0,this.slashAnim=0,this.baseFov=72,this.stats={score:0,shots:0,hits:0,headshots:0,kills:0},this.keys={},this.mouseDownL=!1,this.mouseDownR=!1,this.pointerLocked=!1,this.raycaster=new Hd,this._cacheDom(),this._bindEvents();const n=new URLSearchParams(window.location.search),i=window.location.hash.replace("#","").toLowerCase(),o={west:0,japan:1,swiss:2,greece:3,scandinavia:4,normandy:5};let r=0;if(i in o)r=o[i];else if(n.has("level")){const a=n.get("level").toLowerCase();r=a in o?o[a]:Math.max(0,Math.min(Qt.length-1,parseInt(a,10)||0))}if(this.loadLevel(r,!0),document.querySelectorAll(".level-card").forEach((a,l)=>a.classList.toggle("active",l===r)),n.has("hero")){const a=Qt[r].meta.id,l=El(a,n.get("hero").toLowerCase());this.selectedHeroIds[a]=l.id,this.activeHero=l}n.get("select")==="1"?this.showIntroCard():n.get("autostart")==="1"&&(this.startMission(),this.dom.callout.classList.add("hidden")),window.__outlawsGame=this,this._loop()}_cacheDom(){this.dom={titleScreen:document.getElementById("title-screen"),introCard:document.getElementById("intro-card"),pauseScreen:document.getElementById("pause-screen"),endScreen:document.getElementById("end-screen"),hud:document.getElementById("hud"),crosshair:document.getElementById("hud-crosshair"),hitmarker:document.getElementById("hitmarker"),scopeOverlay:document.getElementById("scope-overlay"),scopeLabel:document.getElementById("scope-label"),damageOverlay:document.getElementById("damage-overlay"),hitFlash:document.getElementById("hit-flash"),paxBadge:document.getElementById("pax-badge"),callout:document.getElementById("callout-banner"),pickupToast:document.getElementById("pickup-toast"),eraBadge:document.getElementById("hud-era-badge"),objective:document.getElementById("hud-objective"),enemyIcon:document.getElementById("hud-enemy-icon"),enemiesLeft:document.getElementById("hud-enemies-left"),bossBarWrap:document.getElementById("boss-bar-wrap"),bossName:document.getElementById("boss-name"),bossBarFill:document.getElementById("boss-bar-fill"),scoreVal:document.getElementById("hud-score"),heroName:document.getElementById("hud-hero-name"),heroPerk:document.getElementById("hud-hero-perk"),hpText:document.getElementById("hud-hp-text"),hpBar:document.getElementById("hud-hp-bar"),staminaBar:document.getElementById("hud-stamina-bar"),weaponStrip:document.getElementById("hud-weapon-strip"),weaponName:document.getElementById("hud-weapon-name"),ammoPips:document.getElementById("hud-ammo-pips"),ammoMag:document.getElementById("hud-ammo-mag"),ammoReserve:document.getElementById("hud-ammo-reserve"),altHint:document.getElementById("hud-alt-hint"),comicAct:document.getElementById("comic-act"),comicTitle:document.getElementById("comic-title"),comicQuote:document.getElementById("comic-quote"),heroHistoricalNote:document.getElementById("hero-historical-note"),heroCardsList:document.getElementById("hero-cards-list"),heroPreviewName:document.getElementById("hero-preview-name"),heroPreviewBio:document.getElementById("hero-preview-bio"),heroPreviewStrength:document.getElementById("hero-preview-strength"),pauseLevelName:document.getElementById("pause-level-name"),btnToggleAudio:document.getElementById("btn-toggle-audio"),endEyebrow:document.getElementById("end-eyebrow"),endTitle:document.getElementById("end-title"),endPracticeNote:document.getElementById("end-practice-note"),endSummary:document.getElementById("end-summary"),endStats:document.getElementById("end-stats"),btnNextLevel:document.getElementById("btn-next-level")}}_bindEvents(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)}),document.querySelectorAll(".level-card").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".level-card").forEach(n=>n.classList.remove("active")),e.classList.add("active");const t=parseInt(e.dataset.level,10);this.loadLevel(t,!0)})}),document.querySelectorAll(".diff-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".diff-btn").forEach(t=>t.classList.remove("active")),e.classList.add("active"),this.difficultyKey=e.dataset.diff})}),document.getElementById("btn-play").addEventListener("click",()=>{this.sound.ensureInit(),this.showIntroCard()}),document.getElementById("btn-start-mission").addEventListener("click",()=>{this.startMission()}),document.getElementById("btn-hero-back").addEventListener("click",()=>{this.returnToTitle()}),document.getElementById("btn-resume").addEventListener("click",()=>this.resumeGame()),document.getElementById("btn-restart").addEventListener("click",()=>this.restartLevel()),document.getElementById("btn-pause-change-hero").addEventListener("click",()=>this.showIntroCard()),document.getElementById("btn-main-menu").addEventListener("click",()=>this.returnToTitle()),document.getElementById("btn-end-restart").addEventListener("click",()=>this.restartLevel()),document.getElementById("btn-end-change-hero").addEventListener("click",()=>this.showIntroCard()),document.getElementById("btn-end-menu").addEventListener("click",()=>this.returnToTitle()),document.getElementById("btn-next-level").addEventListener("click",()=>{const e=(this.levelIndex+1)%Qt.length;this.loadLevel(e,!0),this.showIntroCard()}),this.dom.btnToggleAudio.addEventListener("click",()=>{const e=this.sound.toggleMute();this.dom.btnToggleAudio.textContent=e?"SOUND: OFF":"SOUND: ON"}),window.addEventListener("keydown",e=>{if(this.keys[e.code]=!0,!e.ctrlKey&&!e.metaKey&&!e.altKey&&e.key&&e.key.length===1){const t=e.key.toLowerCase();t>="a"&&t<="z"&&(this.paxBuffer=(this.paxBuffer+t).slice(-3),this.paxBuffer==="pax"&&(this.paxBuffer="",this.togglePracticeMode()))}if(e.code==="KeyM"){const t=this.sound.toggleMute();this.dom.btnToggleAudio.textContent=t?"SOUND: OFF":"SOUND: ON",this.toast(t?"AUDIO MUTED":"AUDIO ENABLED")}if(this.state==="intro"){e.code==="Digit1"||e.code==="Numpad1"?(e.preventDefault(),this.selectHeroByIndex(0)):e.code==="Digit2"||e.code==="Numpad2"?(e.preventDefault(),this.selectHeroByIndex(1)):e.code==="Digit3"||e.code==="Numpad3"?(e.preventDefault(),this.selectHeroByIndex(2)):e.code==="Enter"||e.code==="NumpadEnter"?(e.preventDefault(),this.startMission()):e.code==="Escape"&&(e.preventDefault(),this.returnToTitle());return}this.state==="playing"&&(e.code==="Digit1"&&this.switchWeapon(0),e.code==="Digit2"&&this.switchWeapon(1),e.code==="Digit3"&&this.switchWeapon(2),e.code==="Digit4"&&this.switchWeapon(3),e.code==="KeyR"&&this.startReload(),e.code==="Escape"&&this.pauseGame())}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),window.addEventListener("wheel",e=>{if(this.state!=="playing")return;const t=e.deltaY>0?1:-1,n=(this.currentWeaponIdx+t+this.weapons.length)%this.weapons.length;this.switchWeapon(n)}),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===this.renderer.domElement,!this.pointerLocked&&this.state==="playing"&&this.pauseGame()}),window.addEventListener("mousemove",e=>{if(this.state!=="playing"||!this.pointerLocked)return;const t=this.scoped?85e-5:.0021;this.player.yaw-=e.movementX*t,this.player.pitch=Math.max(-1.28,Math.min(1.28,this.player.pitch-e.movementY*t))}),window.addEventListener("mousedown",e=>{if(this.state==="playing"){if(!this.pointerLocked){this._requestLock();return}e.button===0?(this.mouseDownL=!0,this.tryFire(!1)):e.button===2&&(this.mouseDownR=!0,this.handleRightClickDown())}}),window.addEventListener("mouseup",e=>{e.button===0&&(this.mouseDownL=!1),e.button===2&&(this.mouseDownR=!1,this.setScope(!1))}),window.addEventListener("contextmenu",e=>e.preventDefault())}_clearWorld(){for(;this.worldGroup.children.length>0;){const e=this.worldGroup.children[0];this.worldGroup.remove(e)}for(;this.weaponHolder.children.length>0;)this.weaponHolder.remove(this.weaponHolder.children[0]);this.animatedCallbacks=[],this.enemies=[],this.bossSpawnPending=null,this.activeBoss=null,this.pickups=[],this.enemyProjectiles=[],this.playerThrowables=[],this.tellApple=null,this.setScope(!1)}loadLevel(e,t=!1){this._clearWorld(),this.levelIndex=e;const{meta:n,builder:i}=Qt[e];document.body.className=n.themeClass,this.practiceMode&&document.body.classList.add("pax-active"),this.collision=new Tl,this.particles=new Fm(this.worldGroup);const o=i(this.worldGroup,this.collision,this.particles);this.animatedCallbacks=o.animated||[],this.pickups=o.pickups||[],this.tellApple=o.tellApple||null;const r=Pl[this.difficultyKey],a=El(n.id,this.selectedHeroIds[n.id]);this.activeHero=a;const l=a.mods||{},c=Math.round(r.playerHp*(l.maxHpMult||1));this.player.pos.copy(n.spawnPos),this.player.vel.set(0,0,0),this.player.yaw=n.spawnYaw,this.player.pitch=0,this.player.maxHp=c,this.player.hp=c,this.player.stamina=100,this.player.grounded=!0,this.timeSinceLastDamage=999,this.stats={score:0,shots:0,hits:0,headshots:0,kills:0};for(const f of o.enemySpawns)if(f.isBossWave)this.bossSpawnPending=f;else{const g=new Al(f.type,f.pos,r.enemyMult);this.worldGroup.add(g.mesh),this.enemies.push(g)}const h=Bm[n.id],d=a.weaponIds?a.weaponIds.map(f=>h.find(g=>g.id===f)).filter(Boolean):h;this.weapons=d.map(f=>{const g=l.weaponOverrides&&l.weaponOverrides[f.id]||{},v=(f.kind==="melee"&&l.meleeFireRateMult?l.meleeFireRateMult:1)*(l.fireRateMult||1)*(g.fireRateMult||1),x=(l.reloadTimeMult||1)*(g.reloadTimeMult||1),p=(f.kind==="melee"&&l.meleeDamageMult?l.meleeDamageMult:1)*(l.damageMult||1)*(g.damageMult||1),y=f.kind==="melee"&&l.meleeRangeBonus?l.meleeRangeBonus:0;return{...f,damage:Math.round(f.damage*p),fireRate:+(f.fireRate*v).toFixed(3),reloadTime:+(f.reloadTime*x).toFixed(3),range:f.range?+(f.range+y).toFixed(2):f.range,mag:f.magSize,curReserve:f.reserve}}),this.weaponMeshes=this.weapons.map(f=>{const g=zm(f.id);return g.visible=!1,this.weaponHolder.add(g),g});const u=Math.min(this.weapons.length-1,Math.max(0,a.defaultWeaponIdx||0));this.currentWeaponIdx=u,this.reloading=!1,this.fireTimer=0,t||(this.weaponMeshes[u].visible=!0),this._buildWeaponStripUI(),this._updateHud(),this.dom.bossBarWrap.classList.add("hidden")}selectHeroByIndex(e){const t=Qt[this.levelIndex].meta.id,n=an[t];if(!n||e<0||e>=n.length)return;const i=n[e];for(this.selectedHeroIds[t]=i.id,this.activeHero=i,this.dom.heroCardsList.querySelectorAll(".hero-card").forEach((r,a)=>{const l=a===e;r.classList.toggle("active",l),r.setAttribute("aria-checked",l?"true":"false")}),this.dom.heroPreviewName.textContent=i.name,this.dom.heroPreviewBio.textContent=i.bio,this.dom.heroPreviewStrength.textContent=i.strengthDesc;this.heroFigureHolder.children.length>0;)this.heroFigureHolder.remove(this.heroFigureHolder.children[0]);const o=km(i.id);this.heroFigureHolder.add(o),this.heroFigureHolder.rotation.y=.25,this.heroStagePop=.82}showIntroCard(){this.state="intro",this.setScope(!1),document.pointerLockElement&&document.exitPointerLock();const e=Qt[this.levelIndex].meta,t=an[e.id],n=this.selectedHeroIds[e.id]||t[0].id,i=Math.max(0,t.findIndex(o=>o.id===n));this.dom.titleScreen.classList.add("hidden"),this.dom.endScreen.classList.add("hidden"),this.dom.pauseScreen.classList.add("hidden"),this.dom.hud.classList.add("hidden"),this.dom.crosshair.classList.add("hidden"),this.dom.introCard.classList.remove("hidden"),this.dom.comicAct.textContent=`${e.act} — ${e.subtitle}`,this.dom.comicTitle.textContent=e.title,this.dom.comicQuote.textContent=e.quote,this.dom.heroHistoricalNote&&(e.historicalNote?(this.dom.heroHistoricalNote.textContent=e.historicalNote,this.dom.heroHistoricalNote.classList.remove("hidden")):this.dom.heroHistoricalNote.classList.add("hidden")),this.dom.heroCardsList.innerHTML=t.map((o,r)=>`
      <button type="button" class="hero-card" data-hero-idx="${r}" role="radio" aria-checked="false">
        <div class="hero-card-key">${r+1}</div>
        <div class="hero-card-body">
          <div class="hero-card-name">${o.name}</div>
          <div class="hero-card-bio">${o.bio}</div>
          <div class="hero-card-strength"><span>${o.strengthLabel}</span>${o.strengthDesc}</div>
        </div>
      </button>
    `).join(""),this.dom.heroCardsList.querySelectorAll(".hero-card").forEach((o,r)=>{o.addEventListener("mouseenter",()=>this.selectHeroByIndex(r)),o.addEventListener("focus",()=>this.selectHeroByIndex(r)),o.addEventListener("click",()=>this.selectHeroByIndex(r)),o.addEventListener("dblclick",()=>{this.selectHeroByIndex(r),this.startMission()})}),this.weaponHolder.visible=!1,this.heroStage.visible=!0,this.selectHeroByIndex(i),this.sound.startMusic(e.musicTheme)}_requestLock(){try{const e=this.renderer.domElement.requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}}togglePracticeMode(){this.practiceMode=!this.practiceMode,this.practiceMode&&this.state==="playing"&&(this.usedPracticeThisRun=!0),document.body.classList.toggle("pax-active",this.practiceMode),this.dom.paxBadge&&this.dom.paxBadge.classList.toggle("hidden",!this.practiceMode),this.state==="playing"&&this.toast(this.practiceMode?"Practice mode: they cannot hurt you":"Practice mode off")}startMission(){this.heroStage.visible=!1,this.usedPracticeThisRun=this.practiceMode,this.loadLevel(this.levelIndex,!1),this.state="playing",this.dom.introCard.classList.add("hidden"),this.dom.titleScreen.classList.add("hidden"),this.dom.pauseScreen.classList.add("hidden"),this.dom.endScreen.classList.add("hidden"),this.dom.hud.classList.remove("hidden"),this.dom.crosshair.classList.remove("hidden"),this.weaponHolder.visible=!0;const e=Qt[this.levelIndex].meta;this.camera.rotation.set(0,e.spawnYaw,0,"YXZ"),this.sound.startMusic(e.musicTheme),this._requestLock(),this.showCallout(`${this.activeHero.name.toUpperCase()} — DRAW!`)}pauseGame(){if(this.state!=="playing")return;this.state="paused",this.mouseDownL=!1,this.mouseDownR=!1,this.setScope(!1),this.dom.pauseScreen.classList.remove("hidden"),this.dom.crosshair.classList.add("hidden");const e=Qt[this.levelIndex].meta;this.dom.pauseLevelName.textContent=`${e.act} — ${e.title}`,document.pointerLockElement&&document.exitPointerLock()}resumeGame(){this.state="playing",this.dom.pauseScreen.classList.add("hidden"),this.dom.crosshair.classList.remove("hidden"),this._requestLock()}restartLevel(){this.startMission()}returnToTitle(){this.state="title",this.setScope(!1),this.weaponHolder.visible=!1,this.heroStage.visible=!1,this.dom.hud.classList.add("hidden"),this.dom.crosshair.classList.add("hidden"),this.dom.pauseScreen.classList.add("hidden"),this.dom.endScreen.classList.add("hidden"),this.dom.introCard.classList.add("hidden"),this.dom.titleScreen.classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),this.sound.stopMusic(),this.loadLevel(this.levelIndex,!0)}switchWeapon(e){e===this.currentWeaponIdx||e<0||e>=this.weapons.length||(this.setScope(!1),this.reloading=!1,this.weaponMeshes[this.currentWeaponIdx].visible=!1,this.currentWeaponIdx=e,this.weaponMeshes[e].visible=!0,this.recoilOffset=-.18,this._updateHud())}setScope(e){const t=this.weapons[this.currentWeaponIdx],n=e&&t&&t.altMode==="scope"&&!this.reloading&&this.state==="playing";this.scoped=n,n?(this.dom.scopeOverlay.classList.remove("hidden"),this.dom.scopeLabel.textContent=t.scopeLabel||"OPTIC ZOOM",this.dom.crosshair.classList.add("hidden"),this.weaponHolder.visible=!1):(this.dom.scopeOverlay.classList.add("hidden"),this.state==="playing"&&(this.dom.crosshair.classList.remove("hidden"),this.weaponHolder.visible=!0))}handleRightClickDown(){const e=this.weapons[this.currentWeaponIdx];e&&(e.altMode==="scope"?this.setScope(!0):this.tryFire(!0))}startReload(){const e=this.weapons[this.currentWeaponIdx];!e||e.infinite||this.reloading||e.mag>=e.magSize||e.curReserve<=0||(this.setScope(!1),this.reloading=!0,this.reloadTimer=e.reloadTime,this.sound.playReload(),this.toast("RELOADING..."))}tryFire(e){if(this.fireTimer>0||this.reloading)return;const t=this.weapons[this.currentWeaponIdx];if(!t)return;if(!t.infinite&&t.mag<=0){t.curReserve>0?this.startReload():this.toast("OUT OF AMMO!");return}if(t.kind==="melee"){const v=e&&t.altMode==="heavy_slash";this.fireTimer=v?t.fireRate*1.45:t.fireRate,this.slashAnim=1,this.sound.playShot("slash");const x=new S;this.camera.getWorldDirection(x);const p=new S().crossVectors(x,new S(0,1,0)).normalize(),y=this.camera.getWorldPosition(new S);this.particles.spawnSlashArc(y,x,p,t.slashColor);const M=v?t.damage*1.65:t.damage,w=v?t.range+1:t.range;let P=!1;for(const C of this.enemies){if(!C.alive)continue;const L=new S(C.mesh.position.x-y.x,C.mesh.position.y+1.1-y.y,C.mesh.position.z-y.z);L.length()<=w&&(L.normalize(),L.dot(x)>.35&&(P=!0,this._damageEnemy(C,M,v,C.mesh.position.clone().add(new S(0,1.3,0)))))}P&&this._flashHitmarker(v);return}if(t.kind==="throwable"){t.mag--,this.fireTimer=t.fireRate,this.recoilOffset=t.recoil,this.sound.playShot("throw");const v=this.camera.getWorldPosition(new S),x=new S;this.camera.getWorldDirection(x);const p=new m(new Ze(.16,8,8),new st({color:t.projColor}));p.position.copy(v).addScaledVector(x,.8),this.worldGroup.add(p),this.playerThrowables.push({mesh:p,vel:x.multiplyScalar(22).add(new S(0,6.2,0)),fuse:1.65,damage:t.damage,radius:t.blastRadius}),t.mag===0&&t.curReserve>0&&this.startReload(),this._updateHud();return}let n=1,i=t.pellets,o=this.scoped?t.spread*.12:t.spread,r=t.fireRate;if(e&&t.altMode==="fan"?(r=t.fireRate*.42,o=t.spread*3.5):e&&t.altMode==="double"&&t.mag>=2?(n=2,i=t.pellets*2,o=t.spread*1.35,r=t.fireRate*1.25):e&&t.altMode==="fan_stars"&&(n=Math.min(3,t.mag),i=n,o=.095,r=t.fireRate*1.5),t.mag=Math.max(0,t.mag-n),this.fireTimer=r,this.recoilOffset=t.recoil*(n>1?1.5:1),this.stats.shots++,this.sound.playShot(t.sound),["revolver","shotgun","rifle","musket","smg","sniper"].includes(t.sound)){this.muzzleLight.intensity=t.sound==="smg"?7:10;const x=(this.activeHero&&this.activeHero.mods||{}).soundAlertRadius||34;for(const p of this.enemies){if(!p.alive||p.alert)continue;Math.hypot(p.mesh.position.x-this.player.pos.x,p.mesh.position.z-this.player.pos.z)<=x&&(p.alert=!0,p.style==="dog"&&this.sound.playDogBark())}}this.dom.crosshair.classList.add("spread"),setTimeout(()=>this.dom.crosshair.classList.remove("spread"),95);const l=this.camera.getWorldPosition(new S),c=new S;this.camera.getWorldDirection(c);const h=new S().crossVectors(c,new S(0,1,0)).normalize(),d=l.clone().addScaledVector(c,.75).addScaledVector(h,this.scoped?0:.18).add(new S(0,-.1,0)),u=[];for(const v of this.enemies)v.alive&&u.push(...v.getHitMeshes());this.tellApple&&this.tellApple.visible&&u.push(this.tellApple);let f=!1,g=!1;for(let v=0;v<i;v++){const x=c.clone();o>0&&(x.x+=(Math.random()-.5)*o*2,x.y+=(Math.random()-.5)*o*2,x.z+=(Math.random()-.5)*o*2,x.normalize());const p=this.collision.raycast(l,x,150),y=p?p.dist:150;this.raycaster.set(l,x),this.raycaster.far=y;const M=this.raycaster.intersectObjects(u,!1);if(M.length>0){const w=M[0];if(this.particles.spawnTracer(d,w.point,t.tracerColor),w.object.userData.isTellApple){this.tellApple.visible=!1,this.particles.spawnImpact(w.point,16765517,22,9),this.sound.playHit(!0),this.stats.score+=500,this.showCallout("APPLE SPLIT! +500"),this._flashHitmarker(!0);continue}const P=w.object.userData.enemy;if(P&&P.alive){const C=w.object.userData.hitZone==="head",L=C?t.damage*t.headMult:t.damage;f=!0,C&&(g=!0),this._damageEnemy(P,L,C,w.point)}}else{const w=p?p.point:l.clone().addScaledVector(x,90);this.particles.spawnTracer(d,w,t.tracerColor),p&&this.particles.spawnImpact(p.point,p.tag==="stone"?14275269:13410664,5,5)}}f&&(this.stats.hits++,this._flashHitmarker(g)),t.mag===0&&t.curReserve>0&&this.startReload(),this._updateHud()}_damageEnemy(e,t,n,i){this.particles.spawnImpact(i,n?16765517:14234662,n?14:9,7);const o=e.takeDamage(t,n);if(this.sound.playHit(n),e.isBoss&&this.activeBoss===e){const r=Math.max(0,e.hp/e.maxHp*100);this.dom.bossBarFill.style.width=`${r}%`}if(o){if(this.stats.kills++,this.stats.score+=e.score+(n?75:0),n?(this.stats.headshots++,this.showCallout(this.levelIndex===2?"BULLSEYE!":"HEADSHOT!")):e.isBoss&&this.showCallout(`${e.name.split("—")[0].trim()} DEFEATED!`),!e.isBoss&&Math.random()<.35){const r=this.player.hp<this.player.maxHp*.65?"health":"ammo",a=e.mesh.position.clone();a.y+=.8;const l=this._spawnRuntimePickup(r,a);this.pickups.push({type:r,pos:a,mesh:l,label:r==="health"?"FIELD TONIC (+30 HP)":"LOOTED AMMO",collected:!1})}this._checkStageProgression()}this._updateHud()}_spawnRuntimePickup(e,t){const n=new Xe,i=e==="health",o=new m(i?new oe(.24,.28,.62,10):new N(.62,.4,.45),new ee({color:i?3066993:15906633,emissive:i?1474627:11760658,emissiveIntensity:.85}));return n.add(o),n.position.copy(t),this.worldGroup.add(n),n}_checkStageProgression(){const e=this.enemies.filter(t=>t.alive).length;if(this.bossSpawnPending&&e<=3){const t=this.bossSpawnPending;this.bossSpawnPending=null;const n=Pl[this.difficultyKey],i=new Al(t.type,t.pos,n.enemyMult);i.alert=!0,this.worldGroup.add(i.mesh),this.enemies.push(i),this.activeBoss=i,this.dom.bossBarWrap.classList.remove("hidden"),this.dom.bossName.textContent=i.name,this.dom.bossBarFill.style.width="100%",this.sound.playBossHorn(),this.showCallout(`SHOWDOWN: ${i.name.split("—")[0].trim()}`),this.particles.spawnSmoke(t.pos.clone().add(new S(0,1.5,0)),16764006,12,1)}!this.bossSpawnPending&&e===0&&(this.dom.bossBarWrap.classList.add("hidden"),setTimeout(()=>{this.state==="playing"&&this._showEndScreen(!0)},950))}_damagePlayer(e){if(this.state!=="playing")return;if(this.practiceMode){this.usedPracticeThisRun=!0;return}const t=this.activeHero&&this.activeHero.mods||{},n=e*(t.damageTakenMult||1);this.timeSinceLastDamage=0,this.player.hp=Math.max(0,this.player.hp-n),this.sound.playHurt(),this.dom.damageOverlay.style.opacity="0.9",setTimeout(()=>{const i=this.player.hp<30?.35:0;this.dom.damageOverlay.style.opacity=String(i)},150),this._updateHud(),this.player.hp<=0&&this._showEndScreen(!1)}_showEndScreen(e){this.state="ended",this.setScope(!1),document.pointerLockElement&&document.exitPointerLock(),this.dom.hud.classList.add("hidden"),this.dom.crosshair.classList.add("hidden"),this.dom.endScreen.classList.remove("hidden");const t=Qt[this.levelIndex].meta,n=this.stats.shots>0?Math.round(this.stats.hits/this.stats.shots*100):100,i=this.practiceMode||this.usedPracticeThisRun;if(this.dom.endPracticeNote&&this.dom.endPracticeNote.classList.toggle("hidden",!i),e){const o=this.levelIndex===Qt.length-1,r=o?"ALL SIX HORIZONS CONQUERED":`${t.act} COMPLETE`;this.dom.endEyebrow.textContent=i?`${r} • PRACTICE MODE`:r,this.dom.endTitle.textContent=o?"LEGEND OF SIX ERAS":"HORIZON CLEARED",this.dom.endSummary.textContent=o?"From Red Gulch and Kyoto Mist to Rütli Valley, the Aegean Isle, the Fjord of the North, and the beaches of Normandy — your legend endures across six eras!":`${t.title} is free. Ready your gear for the next horizon!`,this.dom.btnNextLevel.classList.remove("hidden"),this.dom.btnNextLevel.textContent=o?"REPLAY FROM ACT I ▶":`PROCEED TO ACT ${this.levelIndex+2} ▶`}else this.dom.endEyebrow.textContent=`${t.act} — FALLEN`,this.dom.endTitle.textContent="OUTGUNNED",this.dom.endSummary.textContent="Dust yourself off, steady your aim, and ride back into the fray.",this.dom.btnNextLevel.classList.add("hidden");this.dom.endStats.innerHTML=`
      <div class="stat-card"><div class="stat-val">${t.currency}${this.stats.score}</div><div class="stat-lbl">BOUNTY</div></div>
      <div class="stat-card"><div class="stat-val">${this.stats.headshots}</div><div class="stat-lbl">CRIT SHOTS</div></div>
      <div class="stat-card"><div class="stat-val">${n}%</div><div class="stat-lbl">ACCURACY</div></div>
    `}_buildWeaponStripUI(){this.dom.weaponStrip.innerHTML=this.weapons.map((e,t)=>`
      <div class="w-slot ${t===this.currentWeaponIdx?"active":""}" data-slot="${t}">
        <div class="w-slot-key">[${t+1}]</div>
        <div class="w-slot-name">${e.shortName}</div>
      </div>
    `).join("")}_updateHud(){const e=Qt[this.levelIndex].meta,t=this.enemies.filter(i=>i.alive).length+(this.bossSpawnPending?1:0);this.dom.eraBadge.textContent=`${e.act} • ${e.title}`,this.dom.objective.textContent=e.objective,this.dom.enemyIcon.textContent=e.enemyIcon,this.dom.enemiesLeft.textContent=String(t),this.dom.scoreVal.textContent=`${e.currency}${this.stats.score}`,this.dom.heroName.textContent=(this.activeHero?this.activeHero.name:e.heroName).toUpperCase(),this.dom.heroPerk&&this.activeHero&&(this.dom.heroPerk.textContent=`${this.activeHero.strengthLabel} • ${this.activeHero.hudTag}`),this.dom.hpText.textContent=`${Math.ceil(this.player.hp)} / ${this.player.maxHp}`,this.dom.hpBar.style.width=`${this.player.hp/this.player.maxHp*100}%`,this.dom.staminaBar.style.width=`${this.player.stamina}%`;const n=this.weapons[this.currentWeaponIdx];if(n)if(this.dom.weaponName.textContent=n.name,this.dom.altHint.textContent=this.reloading?"RELOADING...":n.altHint,this.dom.ammoMag.textContent=n.infinite?"∞":String(n.mag),this.dom.ammoReserve.textContent=n.infinite?"∞":String(n.curReserve),n.infinite)this.dom.ammoPips.innerHTML="";else{const i=Math.min(n.magSize,10);let o="";for(let r=0;r<i;r++)o+=`<span class="ammo-pip ${r<n.mag?"":"spent"}"></span>`;this.dom.ammoPips.innerHTML=o}document.querySelectorAll(".w-slot").forEach((i,o)=>{i.classList.toggle("active",o===this.currentWeaponIdx)})}_flashHitmarker(e){this.dom.hitmarker.classList.remove("hidden"),this.dom.hitmarker.classList.toggle("crit",e),this.dom.hitFlash.style.opacity=e?"0.9":"0.45",clearTimeout(this._hmTimeout),this._hmTimeout=setTimeout(()=>{this.dom.hitmarker.classList.add("hidden"),this.dom.hitFlash.style.opacity="0"},115)}showCallout(e){this.dom.callout.textContent=e,this.dom.callout.classList.remove("hidden"),clearTimeout(this._calloutTimer),this._calloutTimer=setTimeout(()=>{this.dom.callout.classList.add("hidden")},2200)}toast(e){const t=document.createElement("div");t.className="toast-item",t.textContent=e,this.dom.pickupToast.appendChild(t),setTimeout(()=>t.remove(),1950)}_updatePlayer(e){const t=this.weapons[this.currentWeaponIdx],n=this.scoped&&t&&t.scopeFov?t.scopeFov:this.baseFov;Math.abs(this.camera.fov-n)>.1&&(this.camera.fov+=(n-this.camera.fov)*Math.min(1,e*14),this.camera.updateProjectionMatrix());const i=this.activeHero&&this.activeHero.mods||{},o=i.moveSpeedMult||1,r=(this.keys.KeyW||this.keys.ArrowUp?1:0)-(this.keys.KeyS||this.keys.ArrowDown?1:0),a=(this.keys.KeyD||this.keys.ArrowRight?1:0)-(this.keys.KeyA||this.keys.ArrowLeft?1:0),l=(this.keys.ShiftLeft||this.keys.ShiftRight)&&r>0&&!this.scoped&&this.player.stamina>6,c=(this.scoped?4.2:l?11.4:7.6)*o;this.timeSinceLastDamage+=e;let h=!1;i.regenRate&&this.player.hp>0&&this.player.hp<this.player.maxHp&&this.timeSinceLastDamage>=(i.regenDelay||4)&&(h=!0,this.player.hp=Math.min(this.player.maxHp,this.player.hp+i.regenRate*e),this.dom.hpText.textContent=`${Math.ceil(this.player.hp)} / ${this.player.maxHp}`,this.dom.hpBar.style.width=`${this.player.hp/this.player.maxHp*100}%`,this.player.hp>=30&&(this.dom.damageOverlay.style.opacity="0")),this.dom.heroPerk&&this.dom.heroPerk.classList.toggle("regen-active",h),l?this.player.stamina=Math.max(0,this.player.stamina-e*26):this.player.stamina=Math.min(100,this.player.stamina+e*20),this.dom.staminaBar.style.width=`${this.player.stamina}%`;const d=new S(-Math.sin(this.player.yaw),0,-Math.cos(this.player.yaw)),u=new S(Math.cos(this.player.yaw),0,-Math.sin(this.player.yaw)),f=new S().addScaledVector(d,r).addScaledVector(u,a),g=f.lengthSq()>.01;g&&f.normalize().multiplyScalar(c),this.player.pos.x+=f.x*e,this.player.pos.z+=f.z*e,this.keys.Space&&this.player.grounded&&(this.player.vel.y=7.4,this.player.grounded=!1),this.player.vel.y-=20.5*e,this.player.pos.y+=this.player.vel.y*e,this.collision.resolveHorizontal(this.player.pos,.55,this.player.pos.y);const v=this.collision.getFloorHeight(this.player.pos.x,this.player.pos.z,this.player.pos.y);this.player.pos.y<=v&&(this.player.pos.y=v,this.player.vel.y=0,this.player.grounded=!0),g&&this.player.grounded&&(this.player.bobPhase+=e*(l?12.5:8.5));const x=g&&this.player.grounded&&!this.scoped?Math.sin(this.player.bobPhase)*.055:0;if(this.camera.position.set(this.player.pos.x,this.player.pos.y+1.68+x,this.player.pos.z),this.camera.rotation.order="YXZ",this.camera.rotation.z=0,this.camera.rotation.y=this.player.yaw,this.camera.rotation.x=this.player.pitch+this.recoilOffset*.22,this.fireTimer>0&&(this.fireTimer-=e),this.reloading&&(this.reloadTimer-=e,this.reloadTimer<=0)){this.reloading=!1;const y=t.magSize-t.mag,M=Math.min(y,t.curReserve);t.mag+=M,t.curReserve-=M,this._updateHud()}this.mouseDownL&&this.fireTimer<=0&&!this.reloading&&t&&(t.autoFire||t.fireRate<=.4)&&this.tryFire(!1),this.recoilOffset*=Math.max(0,1-e*13),this.slashAnim>0&&(this.slashAnim=Math.max(0,this.slashAnim-e*4.5)),this.muzzleLight.intensity>0&&(this.muzzleLight.intensity=Math.max(0,this.muzzleLight.intensity-e*85));const p=this.weaponMeshes[this.currentWeaponIdx];if(p&&p.visible){const y=p.userData.basePos,M=p.userData.baseRot,w=g?Math.cos(this.player.bobPhase*.5)*.014:0,P=g?Math.abs(Math.sin(this.player.bobPhase*.5))*.014:0;p.position.set(y.x+w-this.slashAnim*.35,y.y-P-(this.reloading?.14:0),y.z+this.recoilOffset*.45),p.rotation.set(M.x+this.recoilOffset*1.15-(this.reloading?.65:0)+this.slashAnim*1.1,M.y+this.slashAnim*1.25,M.z+this.slashAnim*.85);const C=p.getObjectByName("spark");if(C){const D=.85+Math.sin(this.elapsed*28)*.35;C.scale.setScalar(D)}const L=p.getObjectByName("spinner");L&&(L.rotation.y+=e*4.5)}for(const y of this.pickups){if(y.collected)continue;if(y.mesh.rotation.y+=e*2.1,y.mesh.position.y=y.pos.y+Math.sin(this.elapsed*3+y.pos.x)*.16,Math.hypot(y.pos.x-this.player.pos.x,y.pos.z-this.player.pos.z)<2.1){if(y.type==="health"&&this.player.hp>=this.player.maxHp)continue;if(y.collected=!0,y.mesh.visible=!1,this.sound.playPickup(),y.type==="health")this.player.hp=Math.min(this.player.maxHp,this.player.hp+35);else for(const w of this.weapons)w.infinite||(w.curReserve=Math.min(w.reserve*2,w.curReserve+Math.ceil(w.reserve*.45)));this.toast(y.label),this._updateHud()}}}_updateProjectiles(e){for(let n=this.playerThrowables.length-1;n>=0;n--){const i=this.playerThrowables[n];i.fuse-=e,i.vel.y-=17.5*e,i.mesh.position.addScaledVector(i.vel,e),i.mesh.rotation.x+=e*9,i.mesh.rotation.z+=e*7;const o=this.collision.getFloorHeight(i.mesh.position.x,i.mesh.position.z,i.mesh.position.y);if(i.mesh.position.y<=o+.16&&(i.mesh.position.y=o+.16,i.vel.y*=-.4,i.vel.x*=.65,i.vel.z*=.65),i.fuse<=0){this.particles.spawnExplosion(i.mesh.position,i.radius),this.sound.playExplosion();for(const r of this.enemies){if(!r.alive)continue;const a=r.mesh.position.distanceTo(i.mesh.position);if(a<i.radius){const l=1-a/i.radius*.55;this._damageEnemy(r,i.damage*l,!1,r.mesh.position.clone().add(new S(0,1.2,0)))}}this.worldGroup.remove(i.mesh),this.playerThrowables.splice(n,1)}}const t=new S(this.player.pos.x,this.player.pos.y+1.2,this.player.pos.z);for(let n=this.enemyProjectiles.length-1;n>=0;n--){const i=this.enemyProjectiles[n];i.life-=e;const o=i.vel.clone().multiplyScalar(e),r=o.length(),a=o.clone().normalize(),l=this.collision.raycast(i.mesh.position,a,r+.15);if(l||i.life<=0){l&&this.particles.spawnImpact(l.point,16765562,4,4),this.worldGroup.remove(i.mesh),this.enemyProjectiles.splice(n,1);continue}i.mesh.position.add(o),i.mesh.position.distanceTo(t)<.85&&(this._damagePlayer(i.damage),this.worldGroup.remove(i.mesh),this.enemyProjectiles.splice(n,1))}}_updateEnemies(e){const n=(this.activeHero&&this.activeHero.mods||{}).stealthMult||1,i={onDogBark:()=>{this.sound.playDogBark()},onMeleeHitPlayer:o=>{this._damagePlayer(o)},onEnemyFire:(o,r,a)=>{const l=new S().subVectors(a,r).normalize(),c=o.isBoss?.04:.07;l.x+=(Math.random()-.5)*c,l.y+=(Math.random()-.5)*c*.6,l.z+=(Math.random()-.5)*c,l.normalize();const h=new m(new Ze(.11,6,6),new st({color:o.projectileColor}));h.position.copy(r),this.worldGroup.add(h),this.particles.spawnTracer(r,r.clone().addScaledVector(l,3.5),o.projectileColor,.08),this.enemyProjectiles.push({mesh:h,vel:l.multiplyScalar(o.isBoss?38:30),damage:o.damage,life:2.8})}};for(const o of this.enemies)o.update(e,this.player.pos,this.collision,i,n);this.bossSpawnPending&&this.player.pos.z<-12&&this._checkStageProgression()}_loop(){requestAnimationFrame(()=>this._loop());const e=Math.min(.05,this.clock.getDelta());this.elapsed+=e;for(const t of this.animatedCallbacks)t(this.elapsed,e);if(this.particles&&this.particles.update(e,this.elapsed),this.state==="playing")this._updatePlayer(e),this._updateEnemies(e),this._updateProjectiles(e);else if(this.state==="title"||this.state==="intro"){const t=Qt[this.levelIndex].meta.cameraPreview,n=this.elapsed*t.speed;if(this.camera.position.set(t.center.x+Math.sin(n)*t.radius,t.height+Math.sin(this.elapsed*.45)*1.8,t.center.z+Math.cos(n)*t.radius),this.camera.lookAt(t.center),this.weaponHolder.visible=!1,this.state==="intro"&&this.heroStage.visible){const r=Math.tan(Eh.degToRad(this.camera.fov*.5))*3.25*this.camera.aspect,a=window.innerWidth<=860,l=a?0:-r*.45,c=a?.15:-.96;this.heroStage.position.set(l,c,-3.25),this.heroStagePop+=(1-this.heroStagePop)*Math.min(1,e*10);const h=(a?.72:.96)*this.heroStagePop;this.heroFigureHolder.scale.setScalar(h),this.heroFigureHolder.rotation.y+=e*.55}}this.composer.render()}}window.addEventListener("DOMContentLoaded",()=>{new lg});
