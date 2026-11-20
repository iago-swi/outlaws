(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qr="172",Pc=0,pa=1,Lc=2,Ll=1,Il=2,Sn=3,Vn=0,kt=1,wt=2,Tn=0,Ci=1,so=2,ma=3,ga=4,Ic=5,ei=100,Dc=101,Uc=102,Nc=103,Fc=104,Oc=200,Bc=201,zc=202,kc=203,Qo=204,er=205,Hc=206,Gc=207,Vc=208,Wc=209,Xc=210,qc=211,Yc=212,Zc=213,$c=214,tr=0,nr=1,ir=2,Di=3,sr=4,or=5,rr=6,ar=7,Dl=0,jc=1,Kc=2,Hn=0,Ul=1,Nl=2,Fl=3,Yr=4,Jc=5,Ol=6,Bl=7,zl=300,Ui=301,Ni=302,lr=303,cr=304,ho=306,os=1e3,Dt=1001,hr=1002,ln=1003,Qc=1004,Ss=1005,dn=1006,_o=1007,ni=1008,Ln=1009,kl=1010,Hl=1011,rs=1012,Zr=1013,si=1014,bn=1015,An=1016,$r=1017,jr=1018,Fi=1020,Gl=35902,Vl=1021,Wl=1022,an=1023,Xl=1024,ql=1025,Pi=1026,Oi=1027,Yl=1028,Kr=1029,Zl=1030,Jr=1031,Qr=1033,Ks=33776,Js=33777,Qs=33778,eo=33779,ur=35840,dr=35841,fr=35842,pr=35843,mr=36196,gr=37492,xr=37496,vr=37808,_r=37809,wr=37810,Mr=37811,yr=37812,Sr=37813,br=37814,Er=37815,Tr=37816,Ar=37817,Rr=37818,Cr=37819,Pr=37820,Lr=37821,to=36492,Ir=36494,Dr=36495,$l=36283,Ur=36284,Nr=36285,Fr=36286,eh=3200,th=3201,jl=0,nh=1,kn="",Yt="srgb",Bi="srgb-linear",oo="linear",ht="srgb",ui=7680,xa=519,ih=512,sh=513,oh=514,Kl=515,rh=516,ah=517,lh=518,ch=519,va=35044,_a="300 es",En=2e3,ro=2001;class Hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const o=i.indexOf(t);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wa=1234567;const es=Math.PI/180,as=180/Math.PI;function ri(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[s&255]+Nt[s>>8&255]+Nt[s>>16&255]+Nt[s>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function tt(s,e,t){return Math.max(e,Math.min(t,s))}function ea(s,e){return(s%e+e)%e}function hh(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function uh(s,e,t){return s!==e?(t-s)/(e-s):0}function ts(s,e,t){return(1-t)*s+t*e}function dh(s,e,t,n){return ts(s,e,1-Math.exp(-t*n))}function fh(s,e=1){return e-Math.abs(ea(s,e*2)-e)}function ph(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function mh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function gh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function xh(s,e){return s+Math.random()*(e-s)}function vh(s){return s*(.5-Math.random())}function _h(s){s!==void 0&&(wa=s);let e=wa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wh(s){return s*es}function Mh(s){return s*as}function yh(s){return(s&s-1)===0&&s!==0}function Sh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function bh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Eh(s,e,t,n,i){const o=Math.cos,r=Math.sin,a=o(t/2),l=r(t/2),c=o((e+n)/2),h=r((e+n)/2),u=o((e-n)/2),d=r((e-n)/2),f=o((n-e)/2),m=r((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ei(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Bt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Th={DEG2RAD:es,RAD2DEG:as,generateUUID:ri,clamp:tt,euclideanModulo:ea,mapLinear:hh,inverseLerp:uh,lerp:ts,damp:dh,pingpong:fh,smoothstep:ph,smootherstep:mh,randInt:gh,randFloat:xh,randFloatSpread:vh,seededRandom:_h,degToRad:wh,radToDeg:Mh,isPowerOfTwo:yh,ceilPowerOfTwo:Sh,floorPowerOfTwo:bh,setQuaternionFromProperEuler:Eh,normalize:Bt,denormalize:Ei};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*n-r*i+e.x,this.y=o*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,i,o,r,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,o,r,a,l,c)}set(e,t,n,i,o,r,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=i[0],g=i[3],p=i[6],y=i[1],M=i[4],w=i[7],C=i[2],P=i[5],L=i[8];return o[0]=r*v+a*y+l*C,o[3]=r*g+a*M+l*P,o[6]=r*p+a*w+l*L,o[1]=c*v+h*y+u*C,o[4]=c*g+h*M+u*P,o[7]=c*p+h*w+u*L,o[2]=d*v+f*y+m*C,o[5]=d*g+f*M+m*P,o[8]=d*p+f*w+m*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*a*c-n*o*h+n*a*l+i*o*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*r-a*c,d=a*l-h*o,f=c*o-r*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(a*n-i*r)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*o-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(r*t-n*o)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+e,-i*c,i*l,-i*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wo.makeScale(e,t)),this}rotate(e){return this.premultiply(wo.makeRotation(-e)),this}translate(e,t){return this.premultiply(wo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wo=new Je;function Jl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ao(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ah(){const s=ao("canvas");return s.style.display="block",s}const Ma={};function Ti(s){s in Ma||(Ma[s]=!0,console.warn(s))}function Rh(s,e,t){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function Ch(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ph(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ya=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sa=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lh(){const s={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(i,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===ht&&(i.r=Rn(i.r),i.g=Rn(i.g),i.b=Rn(i.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[o].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ht&&(i.r=Li(i.r),i.g=Li(i.g),i.b=Li(i.b))),i},fromWorkingColorSpace:function(i,o){return this.convert(i,this.workingColorSpace,o)},toWorkingColorSpace:function(i,o){return this.convert(i,o,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===kn?oo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,o=this.workingColorSpace){return i.fromArray(this.spaces[o].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,o,r){return i.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Bi]:{primaries:e,whitePoint:n,transfer:oo,toXYZ:ya,fromXYZ:Sa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:ya,fromXYZ:Sa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),s}const ot=Lh();function Rn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Li(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let di;class Ih{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{di===void 0&&(di=ao("canvas")),di.width=e.width,di.height=e.height;const n=di.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ao("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=Rn(o[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rn(t[n]/255)*255):t[n]=Rn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dh=0;class Ql{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=ri(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Mo(i[r].image)):o.push(Mo(i[r]))}else o=Mo(i);n.url=o}return t||(e.images[this.uuid]=n),n}}function Mo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ih.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uh=0;class Ht extends Hi{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=Dt,i=Dt,o=dn,r=ni,a=an,l=Ln,c=Ht.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=ri(),this.name="",this.source=new Ql(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case os:e.x=e.x-Math.floor(e.x);break;case Dt:e.x=e.x<0?0:1;break;case hr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case os:e.y=e.y-Math.floor(e.y);break;case Dt:e.y=e.y<0?0:1;break;case hr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=zl;Ht.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,i=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,o;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,w=(f+1)/2,C=(p+1)/2,P=(h+d)/4,L=(u+v)/4,I=(m+g)/4;return M>w&&M>C?M<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(M),i=P/n,o=L/n):w>C?w<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(w),n=P/i,o=I/i):C<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(C),n=L/o,i=I/o),this.set(n,i,o,t),this}let y=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nh extends Hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ht(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Ql(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cn extends Nh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ec extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fh extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ds{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,o,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=o[r+0],f=o[r+1],m=o[r+2],v=o[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==m){let g=1-a;const p=l*d+c*f+h*m+u*v,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const C=Math.sqrt(M),P=Math.atan2(C,p*y);g=Math.sin(g*P)/C,a=Math.sin(a*P)/C}const w=a*y;if(l=l*g+d*w,c=c*g+f*w,h=h*g+m*w,u=u*g+v*w,g===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,o,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=o[r],d=o[r+1],f=o[r+2],m=o[r+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,o=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(o/2),d=l(n/2),f=l(i/2),m=l(o/2);switch(r){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],o=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(r-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(o+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(o-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(r-i)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,o=e._z,r=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*a+i*c-o*l,this._y=i*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,n=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ba.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ba.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*i,this.y=o[1]*t+o[4]*n+o[7]*i,this.z=o[2]*t+o[5]*n+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,o=e.elements,r=1/(o[3]*t+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*t+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*t+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,o=e.x,r=e.y,a=e.z,l=e.w,c=2*(r*i-a*n),h=2*(a*t-o*i),u=2*(o*n-r*t);return this.x=t+l*c+r*u-a*h,this.y=n+l*h+a*c-o*u,this.z=i+l*u+o*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i,this.y=o[1]*t+o[5]*n+o[9]*i,this.z=o[2]*t+o[6]*n+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,o=e.z,r=t.x,a=t.y,l=t.z;return this.x=i*l-o*a,this.y=o*r-n*l,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yo.copy(this).projectOnVector(e),this.sub(yo)}reflect(e){return this.sub(yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yo=new b,ba=new ds;class fs{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,nn):nn.fromBufferAttribute(o,r),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bs.copy(n.boundingBox)),bs.applyMatrix4(e.matrixWorld),this.union(bs)}const i=e.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yi),Es.subVectors(this.max,Yi),fi.subVectors(e.a,Yi),pi.subVectors(e.b,Yi),mi.subVectors(e.c,Yi),Un.subVectors(pi,fi),Nn.subVectors(mi,pi),qn.subVectors(fi,mi);let t=[0,-Un.z,Un.y,0,-Nn.z,Nn.y,0,-qn.z,qn.y,Un.z,0,-Un.x,Nn.z,0,-Nn.x,qn.z,0,-qn.x,-Un.y,Un.x,0,-Nn.y,Nn.x,0,-qn.y,qn.x,0];return!So(t,fi,pi,mi,Es)||(t=[1,0,0,0,1,0,0,0,1],!So(t,fi,pi,mi,Es))?!1:(Ts.crossVectors(Un,Nn),t=[Ts.x,Ts.y,Ts.z],So(t,fi,pi,mi,Es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vn=[new b,new b,new b,new b,new b,new b,new b,new b],nn=new b,bs=new fs,fi=new b,pi=new b,mi=new b,Un=new b,Nn=new b,qn=new b,Yi=new b,Es=new b,Ts=new b,Yn=new b;function So(s,e,t,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){Yn.fromArray(s,o);const a=i.x*Math.abs(Yn.x)+i.y*Math.abs(Yn.y)+i.z*Math.abs(Yn.z),l=e.dot(Yn),c=t.dot(Yn),h=n.dot(Yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Oh=new fs,Zi=new b,bo=new b;class ps{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Oh.setFromPoints(e).getCenter(n);let i=0;for(let o=0,r=e.length;o<r;o++)i=Math.max(i,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zi.subVectors(e,this.center);const t=Zi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zi.copy(e.center).add(bo)),this.expandByPoint(Zi.copy(e.center).sub(bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new b,Eo=new b,As=new b,Fn=new b,To=new b,Rs=new b,Ao=new b;class uo{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Eo.copy(e).add(t).multiplyScalar(.5),As.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(Eo);const o=e.distanceTo(t)*.5,r=-this.direction.dot(As),a=Fn.dot(this.direction),l=-Fn.dot(As),c=Fn.lengthSq(),h=Math.abs(1-r*r);let u,d,f,m;if(h>0)if(u=r*l-a,d=r*a-l,m=o*h,u>=0)if(d>=-m)if(d<=m){const v=1/h;u*=v,d*=v,f=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-o,-l),o),f=d*(d+2*l)+c):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Eo).addScaledVector(As,d),f}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const n=_n.dot(this.direction),i=_n.dot(_n)-n*n,o=e.radius*e.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(o=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(o=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,i,o){To.subVectors(t,e),Rs.subVectors(n,e),Ao.crossVectors(To,Rs);let r=this.direction.dot(Ao),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Fn.subVectors(this.origin,e);const l=a*this.direction.dot(Rs.crossVectors(Fn,Rs));if(l<0)return null;const c=a*this.direction.dot(To.cross(Fn));if(c<0||l+c>r)return null;const h=-a*Fn.dot(Ao);return h<0?null:this.at(h/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,n,i,o,r,a,l,c,h,u,d,f,m,v,g){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,o,r,a,l,c,h,u,d,f,m,v,g)}set(e,t,n,i,o,r,a,l,c,h,u,d,f,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/gi.setFromMatrixColumn(e,0).length(),o=1/gi.setFromMatrixColumn(e,1).length(),r=1/gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,o=e.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(o),u=Math.sin(o);if(e.order==="XYZ"){const d=r*h,f=r*u,m=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=m+f*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d+v*a,t[4]=m*a-f,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-a,t[2]=f*a-m,t[6]=v+d*a,t[10]=r*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d-v*a,t[4]=-r*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=r*h,t[9]=v-d*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const d=r*h,f=r*u,m=a*h,v=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,f=r*c,m=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=m*u+f,t[1]=u,t[5]=r*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-v*u}else if(e.order==="XZY"){const d=r*l,f=r*c,m=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=r*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bh,e,zh)}lookAt(e,t,n){const i=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),On.crossVectors(n,Xt),On.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),On.crossVectors(n,Xt)),On.normalize(),Cs.crossVectors(Xt,On),i[0]=On.x,i[4]=Cs.x,i[8]=Xt.x,i[1]=On.y,i[5]=Cs.y,i[9]=Xt.y,i[2]=On.z,i[6]=Cs.z,i[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],y=n[3],M=n[7],w=n[11],C=n[15],P=i[0],L=i[4],I=i[8],E=i[12],S=i[1],N=i[5],ne=i[9],ee=i[13],he=i[2],j=i[6],$=i[10],O=i[14],U=i[3],W=i[7],K=i[11],te=i[15];return o[0]=r*P+a*S+l*he+c*U,o[4]=r*L+a*N+l*j+c*W,o[8]=r*I+a*ne+l*$+c*K,o[12]=r*E+a*ee+l*O+c*te,o[1]=h*P+u*S+d*he+f*U,o[5]=h*L+u*N+d*j+f*W,o[9]=h*I+u*ne+d*$+f*K,o[13]=h*E+u*ee+d*O+f*te,o[2]=m*P+v*S+g*he+p*U,o[6]=m*L+v*N+g*j+p*W,o[10]=m*I+v*ne+g*$+p*K,o[14]=m*E+v*ee+g*O+p*te,o[3]=y*P+M*S+w*he+C*U,o[7]=y*L+M*N+w*j+C*W,o[11]=y*I+M*ne+w*$+C*K,o[15]=y*E+M*ee+w*O+C*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],o=e[12],r=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+o*l*u-i*c*u-o*a*d+n*c*d+i*a*f-n*l*f)+v*(+t*l*f-t*c*d+o*r*d-i*r*f+i*c*h-o*l*h)+g*(+t*c*u-t*a*f-o*r*u+n*r*f+o*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*r*u-n*r*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],y=u*g*c-v*d*c+v*l*f-a*g*f-u*l*p+a*d*p,M=m*d*c-h*g*c-m*l*f+r*g*f+h*l*p-r*d*p,w=h*v*c-m*u*c+m*a*f-r*v*f-h*a*p+r*u*p,C=m*u*l-h*v*l-m*a*d+r*v*d+h*a*g-r*u*g,P=t*y+n*M+i*w+o*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=y*L,e[1]=(v*d*o-u*g*o-v*i*f+n*g*f+u*i*p-n*d*p)*L,e[2]=(a*g*o-v*l*o+v*i*c-n*g*c-a*i*p+n*l*p)*L,e[3]=(u*l*o-a*d*o-u*i*c+n*d*c+a*i*f-n*l*f)*L,e[4]=M*L,e[5]=(h*g*o-m*d*o+m*i*f-t*g*f-h*i*p+t*d*p)*L,e[6]=(m*l*o-r*g*o-m*i*c+t*g*c+r*i*p-t*l*p)*L,e[7]=(r*d*o-h*l*o+h*i*c-t*d*c-r*i*f+t*l*f)*L,e[8]=w*L,e[9]=(m*u*o-h*v*o-m*n*f+t*v*f+h*n*p-t*u*p)*L,e[10]=(r*v*o-m*a*o+m*n*c-t*v*c-r*n*p+t*a*p)*L,e[11]=(h*a*o-r*u*o-h*n*c+t*u*c+r*n*f-t*a*f)*L,e[12]=C*L,e[13]=(h*v*i-m*u*i+m*n*d-t*v*d-h*n*g+t*u*g)*L,e[14]=(m*a*i-r*v*i-m*n*l+t*v*l+r*n*g-t*a*g)*L,e[15]=(r*u*i-h*a*i+h*n*l-t*u*l-r*n*d+t*a*d)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,o=e.z;return t[0]*=n,t[4]*=i,t[8]*=o,t[1]*=n,t[5]*=i,t[9]*=o,t[2]*=n,t[6]*=i,t[10]*=o,t[3]*=n,t[7]*=i,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),o=1-n,r=e.x,a=e.y,l=e.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,o,r){return this.set(1,n,o,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,o=t._x,r=t._y,a=t._z,l=t._w,c=o+o,h=r+r,u=a+a,d=o*c,f=o*h,m=o*u,v=r*h,g=r*u,p=a*u,y=l*c,M=l*h,w=l*u,C=n.x,P=n.y,L=n.z;return i[0]=(1-(v+p))*C,i[1]=(f+w)*C,i[2]=(m-M)*C,i[3]=0,i[4]=(f-w)*P,i[5]=(1-(d+p))*P,i[6]=(g+y)*P,i[7]=0,i[8]=(m+M)*L,i[9]=(g-y)*L,i[10]=(1-(d+v))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let o=gi.set(i[0],i[1],i[2]).length();const r=gi.set(i[4],i[5],i[6]).length(),a=gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],sn.copy(this);const c=1/o,h=1/r,u=1/a;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,t.setFromRotationMatrix(sn),n.x=o,n.y=r,n.z=a,this}makePerspective(e,t,n,i,o,r,a=En){const l=this.elements,c=2*o/(t-e),h=2*o/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,m;if(a===En)f=-(r+o)/(r-o),m=-2*r*o/(r-o);else if(a===ro)f=-r/(r-o),m=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,o,r,a=En){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(r-o),d=(t+e)*c,f=(n+i)*h;let m,v;if(a===En)m=(r+o)*u,v=-2*u;else if(a===ro)m=o*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gi=new b,sn=new ft,Bh=new b(0,0,0),zh=new b(1,1,1),On=new b,Cs=new b,Xt=new b,Ea=new ft,Ta=new ds;class pn{constructor(e=0,t=0,n=0,i=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,o=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-tt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ea.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ea,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ta.setFromEuler(this),this.setFromQuaternion(Ta,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class ta{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kh=0;const Aa=new b,xi=new ds,wn=new ft,Ps=new b,$i=new b,Hh=new b,Gh=new ds,Ra=new b(1,0,0),Ca=new b(0,1,0),Pa=new b(0,0,1),La={type:"added"},Vh={type:"removed"},vi={type:"childadded",child:null},Ro={type:"childremoved",child:null};class Et extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new b,t=new pn,n=new ds,i=new b(1,1,1);function o(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ft},normalMatrix:{value:new Je}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(Ra,e)}rotateY(e){return this.rotateOnAxis(Ca,e)}rotateZ(e){return this.rotateOnAxis(Pa,e)}translateOnAxis(e,t){return Aa.copy(e).applyQuaternion(this.quaternion),this.position.add(Aa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ra,e)}translateY(e){return this.translateOnAxis(Ca,e)}translateZ(e){return this.translateOnAxis(Pa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ps.copy(e):Ps.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt($i,Ps,this.up):wn.lookAt(Ps,$i,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),xi.setFromRotationMatrix(wn),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(La),vi.child=e,this.dispatchEvent(vi),vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vh),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(La),vi.child=e,this.dispatchEvent(vi),vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,Hh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Gh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(e.shapes,u)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));i.material=a}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),f=r(e.animations),m=r(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Et.DEFAULT_UP=new b(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new b,Mn=new b,Co=new b,yn=new b,_i=new b,wi=new b,Ia=new b,Po=new b,Lo=new b,Io=new b,Do=new ut,Uo=new ut,No=new ut;class rn{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),on.subVectors(e,t),i.cross(on);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,t,n,i,o){on.subVectors(i,t),Mn.subVectors(n,t),Co.subVectors(e,t);const r=on.dot(on),a=on.dot(Mn),l=on.dot(Co),c=Mn.dot(Mn),h=Mn.dot(Co),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,m=(r*h-a*l)*d;return o.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,n,i,o,r,a,l){return this.getBarycoord(e,t,n,i,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,yn.x),l.addScaledVector(r,yn.y),l.addScaledVector(a,yn.z),l)}static getInterpolatedAttribute(e,t,n,i,o,r){return Do.setScalar(0),Uo.setScalar(0),No.setScalar(0),Do.fromBufferAttribute(e,t),Uo.fromBufferAttribute(e,n),No.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(Do,o.x),r.addScaledVector(Uo,o.y),r.addScaledVector(No,o.z),r}static isFrontFacing(e,t,n,i){return on.subVectors(n,t),Mn.subVectors(e,t),on.cross(Mn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),on.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,o){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,i,o)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,o=this.c;let r,a;_i.subVectors(i,n),wi.subVectors(o,n),Po.subVectors(e,n);const l=_i.dot(Po),c=wi.dot(Po);if(l<=0&&c<=0)return t.copy(n);Lo.subVectors(e,i);const h=_i.dot(Lo),u=wi.dot(Lo);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(_i,r);Io.subVectors(e,o);const f=_i.dot(Io),m=wi.dot(Io);if(m>=0&&f<=m)return t.copy(o);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(wi,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Ia.subVectors(o,i),a=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Ia,a);const p=1/(g+v+d);return r=v*p,a=d*p,t.copy(n).addScaledVector(_i,r).addScaledVector(wi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function Fo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=ea(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,r=2*n-o;this.r=Fo(r,o,e+1/3),this.g=Fo(r,o,e),this.b=Fo(r,o,e-1/3)}return ot.toWorkingColorSpace(this,i),this}setStyle(e,t=Yt){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=tc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return ot.fromWorkingColorSpace(Ft.copy(this),e),Math.round(tt(Ft.r*255,0,255))*65536+Math.round(tt(Ft.g*255,0,255))*256+Math.round(tt(Ft.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Ft.copy(this),t);const n=Ft.r,i=Ft.g,o=Ft.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(i-o)/u+(i<o?6:0);break;case i:l=(o-n)/u+2;break;case o:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Yt){ot.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,i=Ft.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(Ls);const n=ts(Bn.h,Ls.h,t),i=ts(Bn.s,Ls.s,t),o=ts(Bn.l,Ls.l,t);return this.setHSL(n,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*i,this.g=o[1]*t+o[4]*n+o[7]*i,this.b=o[2]*t+o[5]*n+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new qe;qe.NAMES=tc;let Wh=0;class ai extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=Ci,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=er,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qo&&(n.blendSrc=this.blendSrc),this.blendDst!==er&&(n.blendDst=this.blendDst),this.blendEquation!==ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(t){const o=i(e.textures),r=i(e.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pt extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Dl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new b,Is=new Re;class en{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=va,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Is.fromBufferAttribute(this,t),Is.applyMatrix3(e),this.setXY(t,Is.x,Is.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,o){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array),o=Bt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==va&&(e.usage=this.usage),e}}class nc extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ic extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ct extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xh=0;const Jt=new ft,Oo=new Et,Mi=new b,qt=new fs,ji=new fs,Rt=new b;class St extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jl(e)?ic:nc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Je().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Oo.lookAt(e),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,o=e.length;i<o;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ct(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const o=e[i];t.setXYZ(i,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const o=t[n];qt.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const a=t[o];ji.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(qt.min,ji.min),qt.expandByPoint(Rt),Rt.addVectors(qt.max,ji.max),qt.expandByPoint(Rt)):(qt.expandByPoint(ji.min),qt.expandByPoint(ji.max))}qt.getCenter(n);let i=0;for(let o=0,r=e.count;o<r;o++)Rt.fromBufferAttribute(e,o),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let o=0,r=t.length;o<r;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Rt.fromBufferAttribute(a,c),l&&(Mi.fromBufferAttribute(e,c),Rt.add(Mi)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new b,l[I]=new b;const c=new b,h=new b,u=new b,d=new Re,f=new Re,m=new Re,v=new b,g=new b;function p(I,E,S){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,S),d.fromBufferAttribute(o,I),f.fromBufferAttribute(o,E),m.fromBufferAttribute(o,S),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const N=1/(f.x*m.y-m.x*f.y);isFinite(N)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(N),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(N),a[I].add(v),a[E].add(v),a[S].add(v),l[I].add(g),l[E].add(g),l[S].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,E=y.length;I<E;++I){const S=y[I],N=S.start,ne=S.count;for(let ee=N,he=N+ne;ee<he;ee+=3)p(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const M=new b,w=new b,C=new b,P=new b;function L(I){C.fromBufferAttribute(i,I),P.copy(C);const E=a[I];M.copy(E),M.sub(C.multiplyScalar(C.dot(E))).normalize(),w.crossVectors(P,E);const N=w.dot(l[I])<0?-1:1;r.setXYZW(I,M.x,M.y,M.z,N)}for(let I=0,E=y.length;I<E;++I){const S=y[I],N=S.start,ne=S.count;for(let ee=N,he=N+ne;ee<he;ee+=3)L(e.getX(ee+0)),L(e.getX(ee+1)),L(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new b,o=new b,r=new b,a=new b,l=new b,c=new b,h=new b,u=new b;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),o.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),o.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new en(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const o=e.morphAttributes;for(const c in o){const h=[],u=o[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Da=new ft,Zn=new uo,Ds=new ps,Ua=new b,Us=new b,Ns=new b,Fs=new b,Bo=new b,Os=new b,Na=new b,Bs=new b;class x extends Et{constructor(e=new St,t=new pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(o&&a){Os.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],u=o[l];h!==0&&(Bo.fromBufferAttribute(u,e),r?Os.addScaledVector(Bo,h):Os.addScaledVector(Bo.sub(t),h))}t.add(Os)}return t}raycast(e,t){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(o),Zn.copy(e.ray).recast(e.near),!(Ds.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(Ds,Ua)===null||Zn.origin.distanceToSquared(Ua)>(e.far-e.near)**2))&&(Da.copy(o).invert(),Zn.copy(e.ray).applyMatrix4(Da),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zn)))}_computeIntersections(e,t,n){let i;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=r[g.materialIndex],y=Math.max(g.start,f.start),M=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let w=y,C=M;w<C;w+=3){const P=a.getX(w),L=a.getX(w+1),I=a.getX(w+2);i=zs(this,p,e,n,c,h,u,P,L,I),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const y=a.getX(g),M=a.getX(g+1),w=a.getX(g+2);i=zs(this,r,e,n,c,h,u,y,M,w),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=r[g.materialIndex],y=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let w=y,C=M;w<C;w+=3){const P=w,L=w+1,I=w+2;i=zs(this,p,e,n,c,h,u,P,L,I),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const y=g,M=g+1,w=g+2;i=zs(this,r,e,n,c,h,u,y,M,w),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function qh(s,e,t,n,i,o,r,a){let l;if(e.side===kt?l=n.intersectTriangle(r,o,i,!0,a):l=n.intersectTriangle(i,o,r,e.side===Vn,a),l===null)return null;Bs.copy(a),Bs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Bs);return c<t.near||c>t.far?null:{distance:c,point:Bs.clone(),object:s}}function zs(s,e,t,n,i,o,r,a,l,c){s.getVertexPosition(a,Us),s.getVertexPosition(l,Ns),s.getVertexPosition(c,Fs);const h=qh(s,e,t,n,Us,Ns,Fs,Na);if(h){const u=new b;rn.getBarycoord(Na,Us,Ns,Fs,u),i&&(h.uv=rn.getInterpolatedAttribute(i,a,l,c,u,new Re)),o&&(h.uv1=rn.getInterpolatedAttribute(o,a,l,c,u,new Re)),r&&(h.normal=rn.getInterpolatedAttribute(r,a,l,c,u,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new b,materialIndex:0};rn.getNormal(Us,Ns,Fs,d.normal),h.face=d,h.barycoord=u}return h}class z extends St{constructor(e=1,t=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,r,o,0),m("z","y","x",1,-1,n,t,-e,r,o,1),m("x","z","y",1,1,e,n,t,i,r,2),m("x","z","y",1,-1,e,n,-t,i,r,3),m("x","y","z",1,-1,e,t,n,i,o,4),m("x","y","z",-1,-1,e,t,-n,i,o,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2));function m(v,g,p,y,M,w,C,P,L,I,E){const S=w/L,N=C/I,ne=w/2,ee=C/2,he=P/2,j=L+1,$=I+1;let O=0,U=0;const W=new b;for(let K=0;K<$;K++){const te=K*N-ee;for(let de=0;de<j;de++){const Se=de*S-ne;W[v]=Se*y,W[g]=te*M,W[p]=he,c.push(W.x,W.y,W.z),W[v]=0,W[g]=0,W[p]=P>0?1:-1,h.push(W.x,W.y,W.z),u.push(de/L),u.push(1-K/I),O+=1}}for(let K=0;K<I;K++)for(let te=0;te<L;te++){const de=d+te+j*K,Se=d+te+j*(K+1),D=d+(te+1)+j*(K+1),k=d+(te+1)+j*K;l.push(de,Se,k),l.push(Se,D,k),U+=6}a.addGroup(f,U,E),f+=U,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new z(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function zt(s){const e={};for(let t=0;t<s.length;t++){const n=zi(s[t]);for(const i in n)e[i]=n[i]}return e}function Yh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function sc(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const ls={clone:zi,merge:zt};var Zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$h=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bt extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zh,this.fragmentShader=$h,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=Yh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class oc extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=En}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new b,Fa=new Re,Oa=new Re;class Zt extends oc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=as*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return as*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,Fa,Oa),t.subVectors(Oa,Fa)}setViewOffset(e,t,n,i,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(es*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yi=-90,Si=1;class jh extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Zt(yi,Si,e,t);i.layers=this.layers,this.add(i);const o=new Zt(yi,Si,e,t);o.layers=this.layers,this.add(o);const r=new Zt(yi,Si,e,t);r.layers=this.layers,this.add(r);const a=new Zt(yi,Si,e,t);a.layers=this.layers,this.add(a);const l=new Zt(yi,Si,e,t);l.layers=this.layers,this.add(l);const c=new Zt(yi,Si,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,o,r,a,l]=t;for(const c of t)this.remove(c);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,o),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class rc extends Ht{constructor(e,t,n,i,o,r,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ui,super(e,t,n,i,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kh extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new rc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new z(5,5,5),o=new bt({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Tn});o.uniforms.tEquirect.value=t;const r=new x(i,o),a=t.minFilter;return t.minFilter===ni&&(t.minFilter=dn),new jh(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(o)}}class li{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new qe(e),this.density=t}clone(){return new li(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Jh extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const zo=new b,Qh=new b,eu=new Je;class Jn{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=zo.subVectors(n,t).cross(Qh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(zo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||eu.getNormalMatrix(e),i=this.coplanarPoint(zo).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new ps,ks=new b;class na{constructor(e=new Jn,t=new Jn,n=new Jn,i=new Jn,o=new Jn,r=new Jn){this.planes=[e,t,n,i,o,r]}set(e,t,n,i,o,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En){const n=this.planes,i=e.elements,o=i[0],r=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],v=i[10],g=i[11],p=i[12],y=i[13],M=i[14],w=i[15];if(n[0].setComponents(l-o,d-c,g-f,w-p).normalize(),n[1].setComponents(l+o,d+c,g+f,w+p).normalize(),n[2].setComponents(l+r,d+h,g+m,w+y).normalize(),n[3].setComponents(l-r,d-h,g-m,w-y).normalize(),n[4].setComponents(l-a,d-u,g-v,w-M).normalize(),t===En)n[5].setComponents(l+a,d+u,g+v,w+M).normalize();else if(t===ro)n[5].setComponents(a,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ks.x=i.normal.x>0?e.max.x:e.min.x,ks.y=i.normal.y>0?e.max.y:e.min.y,ks.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Or extends ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const lo=new b,co=new b,Ba=new ft,Ki=new uo,Hs=new ps,ko=new b,za=new b;class ka extends Et{constructor(e=new St,t=new Or){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,o=t.count;i<o;i++)lo.fromBufferAttribute(t,i-1),co.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=lo.distanceTo(co);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,o=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(i),Hs.radius+=o,e.ray.intersectsSphere(Hs)===!1)return;Ba.copy(i).invert(),Ki.copy(e.ray).applyMatrix4(Ba);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let v=f,g=m-1;v<g;v+=c){const p=h.getX(v),y=h.getX(v+1),M=Gs(this,e,Ki,l,p,y);M&&t.push(M)}if(this.isLineLoop){const v=h.getX(m-1),g=h.getX(f),p=Gs(this,e,Ki,l,v,g);p&&t.push(p)}}else{const f=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let v=f,g=m-1;v<g;v+=c){const p=Gs(this,e,Ki,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=Gs(this,e,Ki,l,m-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Gs(s,e,t,n,i,o){const r=s.geometry.attributes.position;if(lo.fromBufferAttribute(r,i),co.fromBufferAttribute(r,o),t.distanceSqToSegment(lo,co,ko,za)>n)return;ko.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ko);if(!(l<e.near||l>e.far))return{distance:l,point:za.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}class ac extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ha=new ft,Br=new uo,Vs=new ps,Ws=new b;class tu extends Et{constructor(e=new St,t=new ac){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,o=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(i),Vs.radius+=o,e.ray.intersectsSphere(Vs)===!1)return;Ha.copy(i).invert(),Br.copy(e.ray).applyMatrix4(Ha);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let m=d,v=f;m<v;m++){const g=c.getX(m);Ws.fromBufferAttribute(u,g),Ga(Ws,g,l,i,e,t,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let m=d,v=f;m<v;m++)Ws.fromBufferAttribute(u,m),Ga(Ws,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ga(s,e,t,n,i,o,r){const a=Br.distanceSqToPoint(s);if(a<t){const l=new b;Br.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Ye extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}class nu extends Ht{constructor(e,t,n,i,o,r,a,l,c){super(e,t,n,i,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lc extends Ht{constructor(e,t,n,i,o,r,a,l,c,h=Pi){if(h!==Pi&&h!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Pi&&(n=si),n===void 0&&h===Oi&&(n=Fi),super(null,i,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),o=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),o+=n.distanceTo(i),t.push(o),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const o=n.length;let r;t?r=t:r=e*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(o-1);const h=n[i],d=n[i+1]-h,f=(r-h)/d;return(i+f)/(o-1)}getTangent(e,t){let i=e-1e-4,o=e+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),l=t||(r.isVector2?new Re:new b);return l.copy(a).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new b,i=[],o=[],r=[],a=new b,l=new ft;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new b)}o[0]=new b,r[0]=new b;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let f=1;f<=e;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(tt(i[f-1].dot(i[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,m))}r[f].crossVectors(i[f],o[f])}if(t===!0){let f=Math.acos(tt(o[0].dot(o[e]),-1,1));f/=e,i[0].dot(a.crossVectors(o[0],o[e]))>0&&(f=-f);for(let m=1;m<=e;m++)o[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),r[m].crossVectors(i[m],o[m])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ia extends gn{constructor(e=0,t=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Re){const n=t,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+e*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class iu extends ia{constructor(e,t,n,i,o,r){super(e,t,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function sa(){let s=0,e=0,t=0,n=0;function i(o,r,a,l){s=o,e=a,t=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){i(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,u){let d=(r-o)/c-(a-o)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+u)+(l-a)/u;d*=h,f*=h,i(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return s+e*o+t*r+n*a}}}const Xs=new b,Ho=new sa,Go=new sa,Vo=new sa;class su extends gn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new b){const n=t,i=this.points,o=i.length,r=(o-(this.closed?0:1))*e;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%o]:(Xs.subVectors(i[0],i[1]).add(i[0]),c=Xs);const u=i[a%o],d=i[(a+1)%o];if(this.closed||a+2<o?h=i[(a+2)%o]:(Xs.subVectors(i[o-1],i[o-2]).add(i[o-1]),h=Xs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Ho.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,v,g),Go.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,v,g),Vo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(Ho.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Go.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Vo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ho.calc(l),Go.calc(l),Vo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new b().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Va(s,e,t,n,i){const o=(n-e)*.5,r=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+o+r)*l+(-3*t+3*n-2*o-r)*a+o*s+t}function ou(s,e){const t=1-s;return t*t*e}function ru(s,e){return 2*(1-s)*s*e}function au(s,e){return s*s*e}function ns(s,e,t,n){return ou(s,e)+ru(s,t)+au(s,n)}function lu(s,e){const t=1-s;return t*t*t*e}function cu(s,e){const t=1-s;return 3*t*t*s*e}function hu(s,e){return 3*(1-s)*s*s*e}function uu(s,e){return s*s*s*e}function is(s,e,t,n,i){return lu(s,e)+cu(s,t)+hu(s,n)+uu(s,i)}class cc extends gn{constructor(e=new Re,t=new Re,n=new Re,i=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Re){const n=t,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(is(e,i.x,o.x,r.x,a.x),is(e,i.y,o.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class du extends gn{constructor(e=new b,t=new b,n=new b,i=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new b){const n=t,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(is(e,i.x,o.x,r.x,a.x),is(e,i.y,o.y,r.y,a.y),is(e,i.z,o.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hc extends gn{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fu extends gn{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uc extends gn{constructor(e=new Re,t=new Re,n=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Re){const n=t,i=this.v0,o=this.v1,r=this.v2;return n.set(ns(e,i.x,o.x,r.x),ns(e,i.y,o.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pu extends gn{constructor(e=new b,t=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){const n=t,i=this.v0,o=this.v1,r=this.v2;return n.set(ns(e,i.x,o.x,r.x),ns(e,i.y,o.y,r.y),ns(e,i.z,o.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dc extends gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const n=t,i=this.points,o=(i.length-1)*e,r=Math.floor(o),a=o-r,l=i[r===0?r:r-1],c=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(Va(a,l.x,c.x,h.x,u.x),Va(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Re().fromArray(i))}return this}}var zr=Object.freeze({__proto__:null,ArcCurve:iu,CatmullRomCurve3:su,CubicBezierCurve:cc,CubicBezierCurve3:du,EllipseCurve:ia,LineCurve:hc,LineCurve3:fu,QuadraticBezierCurve:uc,QuadraticBezierCurve3:pu,SplineCurve:dc});class mu extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zr[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new zr[i.type]().fromJSON(i))}return this}}class kr extends mu{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new hc(this.currentPoint.clone(),new Re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const o=new uc(this.currentPoint.clone(),new Re(e,t),new Re(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,o,r){const a=new cc(this.currentPoint.clone(),new Re(e,t),new Re(n,i),new Re(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new dc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,o,r),this}absarc(e,t,n,i,o,r){return this.absellipse(e,t,n,n,i,o,r),this}ellipse(e,t,n,i,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,o,r,a,l),this}absellipse(e,t,n,i,o,r,a,l){const c=new ia(e,t,n,i,o,r,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class oa extends St{constructor(e=[new Re(0,-.5),new Re(.5,0),new Re(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=tt(i,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],h=1/t,u=new b,d=new Re,f=new b,m=new b,v=new b;let g=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(m)}for(let y=0;y<=t;y++){const M=n+y*h*i,w=Math.sin(M),C=Math.cos(M);for(let P=0;P<=e.length-1;P++){u.x=e[P].x*w,u.y=e[P].y,u.z=e[P].x*C,r.push(u.x,u.y,u.z),d.x=y/t,d.y=P/(e.length-1),a.push(d.x,d.y);const L=l[3*P+0]*w,I=l[3*P+1],E=l[3*P+0]*C;c.push(L,I,E)}}for(let y=0;y<t;y++)for(let M=0;M<e.length-1;M++){const w=M+y*e.length,C=w,P=w+e.length,L=w+e.length+1,I=w+1;o.push(C,P,I),o.push(L,I,P)}this.setIndex(o),this.setAttribute("position",new ct(r,3)),this.setAttribute("uv",new ct(a,2)),this.setAttribute("normal",new ct(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.points,e.segments,e.phiStart,e.phiLength)}}class ra extends oa{constructor(e=1,t=1,n=4,i=8){const o=new kr;o.absarc(0,-t/2,e,Math.PI*1.5,0),o.absarc(0,t/2,e,0,Math.PI*.5),super(o.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new ra(e.radius,e.length,e.capSegments,e.radialSegments)}}class me extends St{constructor(e=1,t=1,n=1,i=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),o=Math.floor(o);const h=[],u=[],d=[],f=[];let m=0;const v=[],g=n/2;let p=0;y(),r===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(f,2));function y(){const w=new b,C=new b;let P=0;const L=(t-e)/n;for(let I=0;I<=o;I++){const E=[],S=I/o,N=S*(t-e)+e;for(let ne=0;ne<=i;ne++){const ee=ne/i,he=ee*l+a,j=Math.sin(he),$=Math.cos(he);C.x=N*j,C.y=-S*n+g,C.z=N*$,u.push(C.x,C.y,C.z),w.set(j,L,$).normalize(),d.push(w.x,w.y,w.z),f.push(ee,1-S),E.push(m++)}v.push(E)}for(let I=0;I<i;I++)for(let E=0;E<o;E++){const S=v[E][I],N=v[E+1][I],ne=v[E+1][I+1],ee=v[E][I+1];(e>0||E!==0)&&(h.push(S,N,ee),P+=3),(t>0||E!==o-1)&&(h.push(N,ne,ee),P+=3)}c.addGroup(p,P,0),p+=P}function M(w){const C=m,P=new Re,L=new b;let I=0;const E=w===!0?e:t,S=w===!0?1:-1;for(let ne=1;ne<=i;ne++)u.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),m++;const N=m;for(let ne=0;ne<=i;ne++){const he=ne/i*l+a,j=Math.cos(he),$=Math.sin(he);L.x=E*$,L.y=g*S,L.z=E*j,u.push(L.x,L.y,L.z),d.push(0,S,0),P.x=j*.5+.5,P.y=$*.5*S+.5,f.push(P.x,P.y),m++}for(let ne=0;ne<i;ne++){const ee=C+ne,he=N+ne;w===!0?h.push(he,he+1,ee):h.push(he+1,he,ee),I+=3}c.addGroup(p,I,w===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new me(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Be extends me{constructor(e=1,t=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,e,t,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(e){return new Be(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fo extends St{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const o=[],r=[];a(i),c(n),h(),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(o.slice(),3)),this.setAttribute("uv",new ct(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const M=new b,w=new b,C=new b;for(let P=0;P<t.length;P+=3)f(t[P+0],M),f(t[P+1],w),f(t[P+2],C),l(M,w,C,y)}function l(y,M,w,C){const P=C+1,L=[];for(let I=0;I<=P;I++){L[I]=[];const E=y.clone().lerp(w,I/P),S=M.clone().lerp(w,I/P),N=P-I;for(let ne=0;ne<=N;ne++)ne===0&&I===P?L[I][ne]=E:L[I][ne]=E.clone().lerp(S,ne/N)}for(let I=0;I<P;I++)for(let E=0;E<2*(P-I)-1;E++){const S=Math.floor(E/2);E%2===0?(d(L[I][S+1]),d(L[I+1][S]),d(L[I][S])):(d(L[I][S+1]),d(L[I+1][S+1]),d(L[I+1][S]))}}function c(y){const M=new b;for(let w=0;w<o.length;w+=3)M.x=o[w+0],M.y=o[w+1],M.z=o[w+2],M.normalize().multiplyScalar(y),o[w+0]=M.x,o[w+1]=M.y,o[w+2]=M.z}function h(){const y=new b;for(let M=0;M<o.length;M+=3){y.x=o[M+0],y.y=o[M+1],y.z=o[M+2];const w=g(y)/2/Math.PI+.5,C=p(y)/Math.PI+.5;r.push(w,1-C)}m(),u()}function u(){for(let y=0;y<r.length;y+=6){const M=r[y+0],w=r[y+2],C=r[y+4],P=Math.max(M,w,C),L=Math.min(M,w,C);P>.9&&L<.1&&(M<.2&&(r[y+0]+=1),w<.2&&(r[y+2]+=1),C<.2&&(r[y+4]+=1))}}function d(y){o.push(y.x,y.y,y.z)}function f(y,M){const w=y*3;M.x=e[w+0],M.y=e[w+1],M.z=e[w+2]}function m(){const y=new b,M=new b,w=new b,C=new b,P=new Re,L=new Re,I=new Re;for(let E=0,S=0;E<o.length;E+=9,S+=6){y.set(o[E+0],o[E+1],o[E+2]),M.set(o[E+3],o[E+4],o[E+5]),w.set(o[E+6],o[E+7],o[E+8]),P.set(r[S+0],r[S+1]),L.set(r[S+2],r[S+3]),I.set(r[S+4],r[S+5]),C.copy(y).add(M).add(w).divideScalar(3);const N=g(C);v(P,S+0,y,N),v(L,S+2,M,N),v(I,S+4,w,N)}}function v(y,M,w,C){C<0&&y.x===1&&(r[M]=y.x-1),w.x===0&&w.z===0&&(r[M]=C/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.vertices,e.indices,e.radius,e.details)}}class fn extends fo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fn(e.radius,e.detail)}}class aa extends kr{constructor(e){super(e),this.uuid=ri(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new kr().fromJSON(i))}return this}}const gu={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let o=fc(s,0,i,t,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,u,d,f;if(n&&(o=Mu(s,e,o,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let m=t;m<i;m+=t)u=s[m],d=s[m+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return cs(o,r,t,a,l,f,0),r}};function fc(s,e,t,n,i){let o,r;if(i===Iu(s,e,t,n)>0)for(o=e;o<t;o+=n)r=Wa(o,s[o],s[o+1],r);else for(o=t-n;o>=e;o-=n)r=Wa(o,s[o],s[o+1],r);return r&&po(r,r.next)&&(us(r),r=r.next),r}function oi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(po(t,t.next)||vt(t.prev,t,t.next)===0)){if(us(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function cs(s,e,t,n,i,o,r){if(!s)return;!r&&o&&Tu(s,n,i,o);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,o?vu(s,n,i,o):xu(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),us(s),s=c.next,a=c.next;continue}if(s=c,s===a){r?r===1?(s=_u(oi(s),e,t),cs(s,e,t,n,i,o,2)):r===2&&wu(s,e,t,n,i,o):cs(oi(s),e,t,n,i,o,1);break}}}function xu(s){const e=s.prev,t=s,n=s.next;if(vt(e,t,n)>=0)return!1;const i=e.x,o=t.x,r=n.x,a=e.y,l=t.y,c=n.y,h=i<o?i<r?i:r:o<r?o:r,u=a<l?a<c?a:c:l<c?l:c,d=i>o?i>r?i:r:o>r?o:r,f=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Ai(i,a,o,l,r,c,m.x,m.y)&&vt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function vu(s,e,t,n){const i=s.prev,o=s,r=s.next;if(vt(i,o,r)>=0)return!1;const a=i.x,l=o.x,c=r.x,h=i.y,u=o.y,d=r.y,f=a<l?a<c?a:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,v=a>l?a>c?a:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,p=Hr(f,m,e,t,n),y=Hr(v,g,e,t,n);let M=s.prevZ,w=s.nextZ;for(;M&&M.z>=p&&w&&w.z<=y;){if(M.x>=f&&M.x<=v&&M.y>=m&&M.y<=g&&M!==i&&M!==r&&Ai(a,h,l,u,c,d,M.x,M.y)&&vt(M.prev,M,M.next)>=0||(M=M.prevZ,w.x>=f&&w.x<=v&&w.y>=m&&w.y<=g&&w!==i&&w!==r&&Ai(a,h,l,u,c,d,w.x,w.y)&&vt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=v&&M.y>=m&&M.y<=g&&M!==i&&M!==r&&Ai(a,h,l,u,c,d,M.x,M.y)&&vt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;w&&w.z<=y;){if(w.x>=f&&w.x<=v&&w.y>=m&&w.y<=g&&w!==i&&w!==r&&Ai(a,h,l,u,c,d,w.x,w.y)&&vt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function _u(s,e,t){let n=s;do{const i=n.prev,o=n.next.next;!po(i,o)&&pc(i,n,n.next,o)&&hs(i,o)&&hs(o,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(o.i/t|0),us(n),us(n.next),n=s=o),n=n.next}while(n!==s);return oi(n)}function wu(s,e,t,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Cu(r,a)){let l=mc(r,a);r=oi(r,r.next),l=oi(l,l.next),cs(r,e,t,n,i,o,0),cs(l,e,t,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function Mu(s,e,t,n){const i=[];let o,r,a,l,c;for(o=0,r=e.length;o<r;o++)a=e[o]*n,l=o<r-1?e[o+1]*n:s.length,c=fc(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Ru(c));for(i.sort(yu),o=0;o<i.length;o++)t=Su(i[o],t);return t}function yu(s,e){return s.x-e.x}function Su(s,e){const t=bu(s,e);if(!t)return e;const n=mc(t,s);return oi(n,n.next),oi(t,t.next)}function bu(s,e){let t=e,n=-1/0,i;const o=s.x,r=s.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=o&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===o))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;t=i;do o>=t.x&&t.x>=l&&o!==t.x&&Ai(r<c?o:n,r,l,c,r<c?n:o,r,t.x,t.y)&&(u=Math.abs(r-t.y)/(o-t.x),hs(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Eu(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function Eu(s,e){return vt(s.prev,s,e.prev)<0&&vt(e.next,s,s.next)<0}function Tu(s,e,t,n){let i=s;do i.z===0&&(i.z=Hr(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Au(i)}function Au(s){let e,t,n,i,o,r,a,l,c=1;do{for(t=s,s=null,o=null,r=0;t;){for(r++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;t=n}o.nextZ=null,c*=2}while(r>1);return s}function Hr(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Ru(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ai(s,e,t,n,i,o,r,a){return(i-r)*(e-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(t-r)*(e-a)&&(t-r)*(o-a)>=(i-r)*(n-a)}function Cu(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Pu(s,e)&&(hs(s,e)&&hs(e,s)&&Lu(s,e)&&(vt(s.prev,s,e.prev)||vt(s,e.prev,e))||po(s,e)&&vt(s.prev,s,s.next)>0&&vt(e.prev,e,e.next)>0)}function vt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function po(s,e){return s.x===e.x&&s.y===e.y}function pc(s,e,t,n){const i=Ys(vt(s,e,t)),o=Ys(vt(s,e,n)),r=Ys(vt(t,n,s)),a=Ys(vt(t,n,e));return!!(i!==o&&r!==a||i===0&&qs(s,t,e)||o===0&&qs(s,n,e)||r===0&&qs(t,s,n)||a===0&&qs(t,e,n))}function qs(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ys(s){return s>0?1:s<0?-1:0}function Pu(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&pc(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function hs(s,e){return vt(s.prev,s,s.next)<0?vt(s,e,s.next)>=0&&vt(s,s.prev,e)>=0:vt(s,e,s.prev)<0||vt(s,s.next,e)<0}function Lu(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,o=(s.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&i<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function mc(s,e){const t=new Gr(s.i,s.x,s.y),n=new Gr(e.i,e.x,e.y),i=s.next,o=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function Wa(s,e,t,n){const i=new Gr(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function us(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Gr(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Iu(s,e,t,n){let i=0;for(let o=e,r=t-n;o<t;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}class ss{static area(e){const t=e.length;let n=0;for(let i=t-1,o=0;o<t;i=o++)n+=e[i].x*e[o].y-e[o].x*e[i].y;return n*.5}static isClockWise(e){return ss.area(e)<0}static triangulateShape(e,t){const n=[],i=[],o=[];Xa(e),qa(n,e);let r=e.length;t.forEach(Xa);for(let l=0;l<t.length;l++)i.push(r),r+=t[l].length,qa(n,t[l]);const a=gu.triangulate(n,i);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function Xa(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function qa(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class mo extends St{constructor(e=new aa([new Re(.5,.5),new Re(-.5,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r(c)}this.setAttribute("position",new ct(i,3)),this.setAttribute("uv",new ct(o,2)),this.computeVertexNormals();function r(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Du;let M,w=!1,C,P,L,I;p&&(M=p.getSpacedPoints(h),w=!0,d=!1,C=p.computeFrenetFrames(h,!1),P=new b,L=new b,I=new b),d||(g=0,f=0,m=0,v=0);const E=a.extractPoints(c);let S=E.shape;const N=E.holes;if(!ss.isClockWise(S)){S=S.reverse();for(let xe=0,se=N.length;xe<se;xe++){const R=N[xe];ss.isClockWise(R)&&(N[xe]=R.reverse())}}const ee=ss.triangulateShape(S,N),he=S;for(let xe=0,se=N.length;xe<se;xe++){const R=N[xe];S=S.concat(R)}function j(xe,se,R){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),xe.clone().addScaledVector(se,R)}const $=S.length,O=ee.length;function U(xe,se,R){let ie,G,ae;const Y=xe.x-se.x,we=xe.y-se.y,be=R.x-xe.x,A=R.y-xe.y,_=Y*Y+we*we,B=Y*A-we*be;if(Math.abs(B)>Number.EPSILON){const H=Math.sqrt(_),q=Math.sqrt(be*be+A*A),F=se.x-we/H,re=se.y+Y/H,pe=R.x-A/q,_e=R.y+be/q,ye=((pe-F)*A-(_e-re)*be)/(Y*A-we*be);ie=F+Y*ye-xe.x,G=re+we*ye-xe.y;const ve=ie*ie+G*G;if(ve<=2)return new Re(ie,G);ae=Math.sqrt(ve/2)}else{let H=!1;Y>Number.EPSILON?be>Number.EPSILON&&(H=!0):Y<-Number.EPSILON?be<-Number.EPSILON&&(H=!0):Math.sign(we)===Math.sign(A)&&(H=!0),H?(ie=-we,G=Y,ae=Math.sqrt(_)):(ie=Y,G=we,ae=Math.sqrt(_/2))}return new Re(ie/ae,G/ae)}const W=[];for(let xe=0,se=he.length,R=se-1,ie=xe+1;xe<se;xe++,R++,ie++)R===se&&(R=0),ie===se&&(ie=0),W[xe]=U(he[xe],he[R],he[ie]);const K=[];let te,de=W.concat();for(let xe=0,se=N.length;xe<se;xe++){const R=N[xe];te=[];for(let ie=0,G=R.length,ae=G-1,Y=ie+1;ie<G;ie++,ae++,Y++)ae===G&&(ae=0),Y===G&&(Y=0),te[ie]=U(R[ie],R[ae],R[Y]);K.push(te),de=de.concat(te)}for(let xe=0;xe<g;xe++){const se=xe/g,R=f*Math.cos(se*Math.PI/2),ie=m*Math.sin(se*Math.PI/2)+v;for(let G=0,ae=he.length;G<ae;G++){const Y=j(he[G],W[G],ie);X(Y.x,Y.y,-R)}for(let G=0,ae=N.length;G<ae;G++){const Y=N[G];te=K[G];for(let we=0,be=Y.length;we<be;we++){const A=j(Y[we],te[we],ie);X(A.x,A.y,-R)}}}const Se=m+v;for(let xe=0;xe<$;xe++){const se=d?j(S[xe],de[xe],Se):S[xe];w?(L.copy(C.normals[0]).multiplyScalar(se.x),P.copy(C.binormals[0]).multiplyScalar(se.y),I.copy(M[0]).add(L).add(P),X(I.x,I.y,I.z)):X(se.x,se.y,0)}for(let xe=1;xe<=h;xe++)for(let se=0;se<$;se++){const R=d?j(S[se],de[se],Se):S[se];w?(L.copy(C.normals[xe]).multiplyScalar(R.x),P.copy(C.binormals[xe]).multiplyScalar(R.y),I.copy(M[xe]).add(L).add(P),X(I.x,I.y,I.z)):X(R.x,R.y,u/h*xe)}for(let xe=g-1;xe>=0;xe--){const se=xe/g,R=f*Math.cos(se*Math.PI/2),ie=m*Math.sin(se*Math.PI/2)+v;for(let G=0,ae=he.length;G<ae;G++){const Y=j(he[G],W[G],ie);X(Y.x,Y.y,u+R)}for(let G=0,ae=N.length;G<ae;G++){const Y=N[G];te=K[G];for(let we=0,be=Y.length;we<be;we++){const A=j(Y[we],te[we],ie);w?X(A.x,A.y+M[h-1].y,M[h-1].x+R):X(A.x,A.y,u+R)}}}D(),k();function D(){const xe=i.length/3;if(d){let se=0,R=$*se;for(let ie=0;ie<O;ie++){const G=ee[ie];oe(G[2]+R,G[1]+R,G[0]+R)}se=h+g*2,R=$*se;for(let ie=0;ie<O;ie++){const G=ee[ie];oe(G[0]+R,G[1]+R,G[2]+R)}}else{for(let se=0;se<O;se++){const R=ee[se];oe(R[2],R[1],R[0])}for(let se=0;se<O;se++){const R=ee[se];oe(R[0]+$*h,R[1]+$*h,R[2]+$*h)}}n.addGroup(xe,i.length/3-xe,0)}function k(){const xe=i.length/3;let se=0;Q(he,se),se+=he.length;for(let R=0,ie=N.length;R<ie;R++){const G=N[R];Q(G,se),se+=G.length}n.addGroup(xe,i.length/3-xe,1)}function Q(xe,se){let R=xe.length;for(;--R>=0;){const ie=R;let G=R-1;G<0&&(G=xe.length-1);for(let ae=0,Y=h+g*2;ae<Y;ae++){const we=$*ae,be=$*(ae+1),A=se+ie+we,_=se+G+we,B=se+G+be,H=se+ie+be;Me(A,_,B,H)}}}function X(xe,se,R){l.push(xe),l.push(se),l.push(R)}function oe(xe,se,R){Pe(xe),Pe(se),Pe(R);const ie=i.length/3,G=y.generateTopUV(n,i,ie-3,ie-2,ie-1);Oe(G[0]),Oe(G[1]),Oe(G[2])}function Me(xe,se,R,ie){Pe(xe),Pe(se),Pe(ie),Pe(se),Pe(R),Pe(ie);const G=i.length/3,ae=y.generateSideWallUV(n,i,G-6,G-3,G-2,G-1);Oe(ae[0]),Oe(ae[1]),Oe(ae[3]),Oe(ae[1]),Oe(ae[2]),Oe(ae[3])}function Pe(xe){i.push(l[xe*3+0]),i.push(l[xe*3+1]),i.push(l[xe*3+2])}function Oe(xe){o.push(xe.x),o.push(xe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Uu(t,n,e)}static fromJSON(e,t){const n=[];for(let o=0,r=e.shapes.length;o<r;o++){const a=t[e.shapes[o]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new zr[i.type]().fromJSON(i)),new mo(n,e.options)}}const Du={generateTopUV:function(s,e,t,n,i){const o=e[t*3],r=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Re(o,r),new Re(a,l),new Re(c,h)]},generateSideWallUV:function(s,e,t,n,i,o){const r=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],v=e[o*3],g=e[o*3+1],p=e[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new Re(r,1-l),new Re(c,1-u),new Re(d,1-m),new Re(v,1-p)]:[new Re(a,1-l),new Re(h,1-u),new Re(f,1-m),new Re(g,1-p)]}};function Uu(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const o=s[n];t.shapes.push(o.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ms extends fo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ms(e.radius,e.detail)}}class gt extends St{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const o=e/2,r=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){const y=p*d-r;for(let M=0;M<c;M++){const w=M*u-o;m.push(w,-y,0),v.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const M=y+c*p,w=y+c*(p+1),C=y+1+c*(p+1),P=y+1+c*p;f.push(M,w,P),f.push(w,C,P)}this.setIndex(f),this.setAttribute("position",new ct(m,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gt(e.width,e.height,e.widthSegments,e.heightSegments)}}class la extends St{constructor(e=.5,t=1,n=32,i=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new b,m=new Re;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){const p=o+g/n*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let v=0;v<i;v++){const g=v*(n+1);for(let p=0;p<n;p++){const y=p+g,M=y,w=y+n+1,C=y+n+2,P=y+1;a.push(M,w,P),a.push(w,C,P)}}this.setIndex(a),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ke extends St{constructor(e=1,t=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new b,d=new b,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const y=[],M=p/n;let w=0;p===0&&r===0?w=.5/t:p===n&&l===Math.PI&&(w=-.5/t);for(let C=0;C<=t;C++){const P=C/t;u.x=-e*Math.cos(i+P*o)*Math.sin(r+M*a),u.y=e*Math.cos(r+M*a),u.z=e*Math.sin(i+P*o)*Math.sin(r+M*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(P+w,1-M),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const M=h[p][y+1],w=h[p][y],C=h[p+1][y],P=h[p+1][y+1];(p!==0||r>0)&&f.push(M,w,P),(p!==n-1||l<Math.PI)&&f.push(w,C,P)}this.setIndex(f),this.setAttribute("position",new ct(m,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ke(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xt extends St{constructor(e=1,t=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],l=[],c=[],h=new b,u=new b,d=new b;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){const v=m/i*o,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){const v=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,y=(i+1)*f+m;r.push(v,g,y),r.push(g,p,y)}this.setIndex(r),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Nu extends bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class le extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fu extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ou extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ca extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class gs extends ca{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Wo=new ft,Ya=new b,Za=new b;class gc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new na,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ya.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ya),Za.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Za),t.updateMatrixWorld(),Wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $a=new ft,Ji=new b,Xo=new b;class Bu extends gc{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Ji.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ji),Xo.copy(n.position),Xo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Xo),n.updateMatrixWorld(),i.makeTranslation(-Ji.x,-Ji.y,-Ji.z),$a.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a)}}class Cn extends ca{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Bu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ha extends oc{constructor(e=-1,t=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-e,r=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class zu extends gc{constructor(){super(new ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mn extends ca{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new zu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ku extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ja(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ja();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ja(){return performance.now()}const Ka=new ft;class Hu{constructor(e,t,n=0,i=1/0){this.ray=new uo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ka.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ka),this}intersectObject(e,t=!0,n=[]){return Vr(e,this,n,t),n.sort(Ja),n}intersectObjects(e,t=!0,n=[]){for(let i=0,o=e.length;i<o;i++)Vr(e[i],this,n,t);return n.sort(Ja),n}}function Ja(s,e){return s.distance-e.distance}function Vr(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const o=s.children;for(let r=0,a=o.length;r<a;r++)Vr(o[r],e,t,!0)}}function Qa(s,e,t,n){const i=Gu(n);switch(t){case Vl:return s*e;case Xl:return s*e;case ql:return s*e*2;case Yl:return s*e/i.components*i.byteLength;case Kr:return s*e/i.components*i.byteLength;case Zl:return s*e*2/i.components*i.byteLength;case Jr:return s*e*2/i.components*i.byteLength;case Wl:return s*e*3/i.components*i.byteLength;case an:return s*e*4/i.components*i.byteLength;case Qr:return s*e*4/i.components*i.byteLength;case Ks:case Js:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Qs:case eo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case dr:case pr:return Math.max(s,16)*Math.max(e,8)/4;case ur:case fr:return Math.max(s,8)*Math.max(e,8)/2;case mr:case gr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _r:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case wr:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Mr:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case yr:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Sr:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case br:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Er:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Tr:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ar:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Rr:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Cr:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Pr:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Lr:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case to:case Ir:case Dr:return Math.ceil(s/4)*Math.ceil(e/4)*16;case $l:case Ur:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Nr:case Fr:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gu(s){switch(s){case Ln:case kl:return{byteLength:1,components:1};case rs:case Hl:case An:return{byteLength:2,components:1};case $r:case jr:return{byteLength:2,components:4};case si:case Zr:case bn:return{byteLength:4,components:1};case Gl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qr);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vc(){let s=null,e=!1,t=null,n=null;function i(o,r){t(o,r),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){s=o}}}function Vu(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const v=u[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:o,update:r}}var Wu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xu=`#ifdef USE_ALPHAHASH
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
#endif`,qu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$u=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ju=`#ifdef USE_AOMAP
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
#endif`,Ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ju=`#ifdef USE_BATCHING
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
#endif`,Qu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,id=`#ifdef USE_IRIDESCENCE
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
#endif`,sd=`#ifdef USE_BUMPMAP
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
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fd=`#define PI 3.141592653589793
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
} // validated`,pd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,md=`vec3 transformedNormal = objectNormal;
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
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_d=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Md=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yd=`#ifdef USE_ENVMAP
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
#endif`,Sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bd=`#ifdef USE_ENVMAP
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
#endif`,Ed=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
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
#endif`,Ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ld=`#ifdef USE_GRADIENTMAP
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
}`,Id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nd=`uniform bool receiveShadow;
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
#endif`,Fd=`#ifdef USE_ENVMAP
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
#endif`,Od=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hd=`PhysicalMaterial material;
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
#endif`,Gd=`struct PhysicalMaterial {
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
}`,Vd=`
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
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$d=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qd=`#if defined( USE_POINTS_UV )
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
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
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
#endif`,Ef=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
}`,up=`#define NORMAL
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
}`,dp=`#define PHONG
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
}`,Qe={alphahash_fragment:Wu,alphahash_pars_fragment:Xu,alphamap_fragment:qu,alphamap_pars_fragment:Yu,alphatest_fragment:Zu,alphatest_pars_fragment:$u,aomap_fragment:ju,aomap_pars_fragment:Ku,batching_pars_vertex:Ju,batching_vertex:Qu,begin_vertex:ed,beginnormal_vertex:td,bsdfs:nd,iridescence_fragment:id,bumpmap_pars_fragment:sd,clipping_planes_fragment:od,clipping_planes_pars_fragment:rd,clipping_planes_pars_vertex:ad,clipping_planes_vertex:ld,color_fragment:cd,color_pars_fragment:hd,color_pars_vertex:ud,color_vertex:dd,common:fd,cube_uv_reflection_fragment:pd,defaultnormal_vertex:md,displacementmap_pars_vertex:gd,displacementmap_vertex:xd,emissivemap_fragment:vd,emissivemap_pars_fragment:_d,colorspace_fragment:wd,colorspace_pars_fragment:Md,envmap_fragment:yd,envmap_common_pars_fragment:Sd,envmap_pars_fragment:bd,envmap_pars_vertex:Ed,envmap_physical_pars_fragment:Fd,envmap_vertex:Td,fog_vertex:Ad,fog_pars_vertex:Rd,fog_fragment:Cd,fog_pars_fragment:Pd,gradientmap_pars_fragment:Ld,lightmap_pars_fragment:Id,lights_lambert_fragment:Dd,lights_lambert_pars_fragment:Ud,lights_pars_begin:Nd,lights_toon_fragment:Od,lights_toon_pars_fragment:Bd,lights_phong_fragment:zd,lights_phong_pars_fragment:kd,lights_physical_fragment:Hd,lights_physical_pars_fragment:Gd,lights_fragment_begin:Vd,lights_fragment_maps:Wd,lights_fragment_end:Xd,logdepthbuf_fragment:qd,logdepthbuf_pars_fragment:Yd,logdepthbuf_pars_vertex:Zd,logdepthbuf_vertex:$d,map_fragment:jd,map_pars_fragment:Kd,map_particle_fragment:Jd,map_particle_pars_fragment:Qd,metalnessmap_fragment:ef,metalnessmap_pars_fragment:tf,morphinstance_vertex:nf,morphcolor_vertex:sf,morphnormal_vertex:of,morphtarget_pars_vertex:rf,morphtarget_vertex:af,normal_fragment_begin:lf,normal_fragment_maps:cf,normal_pars_fragment:hf,normal_pars_vertex:uf,normal_vertex:df,normalmap_pars_fragment:ff,clearcoat_normal_fragment_begin:pf,clearcoat_normal_fragment_maps:mf,clearcoat_pars_fragment:gf,iridescence_pars_fragment:xf,opaque_fragment:vf,packing:_f,premultiplied_alpha_fragment:wf,project_vertex:Mf,dithering_fragment:yf,dithering_pars_fragment:Sf,roughnessmap_fragment:bf,roughnessmap_pars_fragment:Ef,shadowmap_pars_fragment:Tf,shadowmap_pars_vertex:Af,shadowmap_vertex:Rf,shadowmask_pars_fragment:Cf,skinbase_vertex:Pf,skinning_pars_vertex:Lf,skinning_vertex:If,skinnormal_vertex:Df,specularmap_fragment:Uf,specularmap_pars_fragment:Nf,tonemapping_fragment:Ff,tonemapping_pars_fragment:Of,transmission_fragment:Bf,transmission_pars_fragment:zf,uv_pars_fragment:kf,uv_pars_vertex:Hf,uv_vertex:Gf,worldpos_vertex:Vf,background_vert:Wf,background_frag:Xf,backgroundCube_vert:qf,backgroundCube_frag:Yf,cube_vert:Zf,cube_frag:$f,depth_vert:jf,depth_frag:Kf,distanceRGBA_vert:Jf,distanceRGBA_frag:Qf,equirect_vert:ep,equirect_frag:tp,linedashed_vert:np,linedashed_frag:ip,meshbasic_vert:sp,meshbasic_frag:op,meshlambert_vert:rp,meshlambert_frag:ap,meshmatcap_vert:lp,meshmatcap_frag:cp,meshnormal_vert:hp,meshnormal_frag:up,meshphong_vert:dp,meshphong_frag:fp,meshphysical_vert:pp,meshphysical_frag:mp,meshtoon_vert:gp,meshtoon_frag:xp,points_vert:vp,points_frag:_p,shadow_vert:wp,shadow_frag:Mp,sprite_vert:yp,sprite_frag:Sp},Ue={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},un={basic:{uniforms:zt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:zt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new qe(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:zt([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:zt([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:zt([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new qe(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:zt([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:zt([Ue.points,Ue.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:zt([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:zt([Ue.common,Ue.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:zt([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:zt([Ue.sprite,Ue.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:zt([Ue.common,Ue.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:zt([Ue.lights,Ue.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};un.physical={uniforms:zt([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Zs={r:0,b:0,g:0},jn=new pn,bp=new ft;function Ep(s,e,t,n,i,o,r){const a=new qe(0);let l=o===!0?0:1,c,h,u=null,d=0,f=null;function m(M){let w=M.isScene===!0?M.background:null;return w&&w.isTexture&&(w=(M.backgroundBlurriness>0?t:e).get(w)),w}function v(M){let w=!1;const C=m(M);C===null?p(a,l):C&&C.isColor&&(p(C,1),w=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(M,w){const C=m(w);C&&(C.isCubeTexture||C.mapping===ho)?(h===void 0&&(h=new x(new z(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:zi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),jn.copy(w.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bp.makeRotationFromEuler(jn)),h.material.toneMapped=ot.getTransfer(C.colorSpace)!==ht,(u!==C||d!==C.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=C,d=C.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new x(new gt(2,2),new bt({name:"BackgroundMaterial",uniforms:zi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ot.getTransfer(C.colorSpace)!==ht,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||d!==C.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=C,d=C.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,w){M.getRGB(Zs,sc(s)),n.buffers.color.setClear(Zs.r,Zs.g,Zs.b,w,r)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),l=w,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:v,addToRenderList:g,dispose:y}}function Tp(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let o=i,r=!1;function a(S,N,ne,ee,he){let j=!1;const $=u(ee,ne,N);o!==$&&(o=$,c(o.object)),j=f(S,ee,ne,he),j&&m(S,ee,ne,he),he!==null&&e.update(he,s.ELEMENT_ARRAY_BUFFER),(j||r)&&(r=!1,w(S,N,ne,ee),he!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,N,ne){const ee=ne.wireframe===!0;let he=n[S.id];he===void 0&&(he={},n[S.id]=he);let j=he[N.id];j===void 0&&(j={},he[N.id]=j);let $=j[ee];return $===void 0&&($=d(l()),j[ee]=$),$}function d(S){const N=[],ne=[],ee=[];for(let he=0;he<t;he++)N[he]=0,ne[he]=0,ee[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:ne,attributeDivisors:ee,object:S,attributes:{},index:null}}function f(S,N,ne,ee){const he=o.attributes,j=N.attributes;let $=0;const O=ne.getAttributes();for(const U in O)if(O[U].location>=0){const K=he[U];let te=j[U];if(te===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),K===void 0||K.attribute!==te||te&&K.data!==te.data)return!0;$++}return o.attributesNum!==$||o.index!==ee}function m(S,N,ne,ee){const he={},j=N.attributes;let $=0;const O=ne.getAttributes();for(const U in O)if(O[U].location>=0){let K=j[U];K===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(K=S.instanceColor));const te={};te.attribute=K,K&&K.data&&(te.data=K.data),he[U]=te,$++}o.attributes=he,o.attributesNum=$,o.index=ee}function v(){const S=o.newAttributes;for(let N=0,ne=S.length;N<ne;N++)S[N]=0}function g(S){p(S,0)}function p(S,N){const ne=o.newAttributes,ee=o.enabledAttributes,he=o.attributeDivisors;ne[S]=1,ee[S]===0&&(s.enableVertexAttribArray(S),ee[S]=1),he[S]!==N&&(s.vertexAttribDivisor(S,N),he[S]=N)}function y(){const S=o.newAttributes,N=o.enabledAttributes;for(let ne=0,ee=N.length;ne<ee;ne++)N[ne]!==S[ne]&&(s.disableVertexAttribArray(ne),N[ne]=0)}function M(S,N,ne,ee,he,j,$){$===!0?s.vertexAttribIPointer(S,N,ne,he,j):s.vertexAttribPointer(S,N,ne,ee,he,j)}function w(S,N,ne,ee){v();const he=ee.attributes,j=ne.getAttributes(),$=N.defaultAttributeValues;for(const O in j){const U=j[O];if(U.location>=0){let W=he[O];if(W===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(W=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(W=S.instanceColor)),W!==void 0){const K=W.normalized,te=W.itemSize,de=e.get(W);if(de===void 0)continue;const Se=de.buffer,D=de.type,k=de.bytesPerElement,Q=D===s.INT||D===s.UNSIGNED_INT||W.gpuType===Zr;if(W.isInterleavedBufferAttribute){const X=W.data,oe=X.stride,Me=W.offset;if(X.isInstancedInterleavedBuffer){for(let Pe=0;Pe<U.locationSize;Pe++)p(U.location+Pe,X.meshPerAttribute);S.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Pe=0;Pe<U.locationSize;Pe++)g(U.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let Pe=0;Pe<U.locationSize;Pe++)M(U.location+Pe,te/U.locationSize,D,K,oe*k,(Me+te/U.locationSize*Pe)*k,Q)}else{if(W.isInstancedBufferAttribute){for(let X=0;X<U.locationSize;X++)p(U.location+X,W.meshPerAttribute);S.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let X=0;X<U.locationSize;X++)g(U.location+X);s.bindBuffer(s.ARRAY_BUFFER,Se);for(let X=0;X<U.locationSize;X++)M(U.location+X,te/U.locationSize,D,K,te*k,te/U.locationSize*X*k,Q)}}else if($!==void 0){const K=$[O];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(U.location,K);break;case 3:s.vertexAttrib3fv(U.location,K);break;case 4:s.vertexAttrib4fv(U.location,K);break;default:s.vertexAttrib1fv(U.location,K)}}}}y()}function C(){I();for(const S in n){const N=n[S];for(const ne in N){const ee=N[ne];for(const he in ee)h(ee[he].object),delete ee[he];delete N[ne]}delete n[S]}}function P(S){if(n[S.id]===void 0)return;const N=n[S.id];for(const ne in N){const ee=N[ne];for(const he in ee)h(ee[he].object),delete ee[he];delete N[ne]}delete n[S.id]}function L(S){for(const N in n){const ne=n[N];if(ne[S.id]===void 0)continue;const ee=ne[S.id];for(const he in ee)h(ee[he].object),delete ee[he];delete ne[S.id]}}function I(){E(),r=!0,o!==i&&(o=i,c(o.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function Ap(s,e,t){let n;function i(c){n=c}function o(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function r(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)r(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v]*d[v];t.update(m,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Rp(s,e,t,n){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(L){return!(L!==an&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const I=L===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Ln&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==bn&&!I)}function l(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:w,vertexTextures:C,maxSamples:P}}function Cp(s){const e=this;let t=null,n=0,i=!1,o=!1;const r=new Jn,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||o&&!g)o?h(null):c();else{const y=o?0:n,M=y*4;let w=p.clippingState||null;l.value=w,w=h(m,d,M,f);for(let C=0;C!==M;++C)w[C]=t[C];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=f+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,w=f;M!==v;++M,w+=4)r.copy(u[M]).applyMatrix4(y,a),r.normal.toArray(g,w),g[w+3]=r.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Pp(s){let e=new WeakMap;function t(r,a){return a===lr?r.mapping=Ui:a===cr&&(r.mapping=Ni),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===lr||a===cr)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Kh(l.height);return c.fromEquirectangularTexture(s,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const Ri=4,el=[.125,.215,.35,.446,.526,.582],ti=20,qo=new ha,tl=new qe;let Yo=null,Zo=0,$o=0,jo=!1;const Qn=(1+Math.sqrt(5))/2,bi=1/Qn,nl=[new b(-Qn,bi,0),new b(Qn,bi,0),new b(-bi,0,Qn),new b(bi,0,Qn),new b(0,Qn,-bi),new b(0,Qn,bi),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Yo=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,i,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ol(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yo,Zo,$o),this._renderer.xr.enabled=jo,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yo=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:An,format:an,colorSpace:Bi,depthBuffer:!1},i=sl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lp(o)),this._blurMaterial=Ip(o,e,t)}return i}_compileMaterial(e){const t=new x(this._lodPlanes[0],e);this._renderer.compile(t,qo)}_sceneToCubeUV(e,t,n,i){const a=new Zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(tl),h.toneMapping=Hn,h.autoClear=!1;const f=new pt({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),m=new x(new z,f);let v=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(tl),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;$s(i,y*M,p>2?M:0,M,M),h.setRenderTarget(i),v&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ui||e.mapping===Ni;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ol());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new x(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;$s(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,qo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=nl[(i-o-1)%nl.length];this._blur(e,o-1,o,r,a)}t.autoClear=n}_blur(e,t,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",o),this._halfBlur(r,e,n,n,i,"longitudinal",o)}_halfBlur(e,t,n,i,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new x(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*ti-1),v=o/m,g=isFinite(o)?1+Math.floor(h*v):ti;g>ti&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ti}`);const p=[];let y=0;for(let L=0;L<ti;++L){const I=L/v,E=Math.exp(-I*I/2);p.push(E),L===0?y+=E:L<g&&(y+=2*E)}for(let L=0;L<p.length;L++)p[L]=p[L]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-n;const w=this._sizeLods[i],C=3*w*(i>M-Ri?i-M+Ri:0),P=4*(this._cubeSize-w);$s(t,C,P,3*w,2*w),l.setRenderTarget(t),l.render(u,qo)}}function Lp(s){const e=[],t=[],n=[];let i=s;const o=s-Ri+1+el.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);t.push(a);let l=1/a;r>s-Ri?l=el[r-s+Ri-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,g=2,p=1,y=new Float32Array(v*m*f),M=new Float32Array(g*m*f),w=new Float32Array(p*m*f);for(let P=0;P<f;P++){const L=P%3*2/3-1,I=P>2?0:-1,E=[L,I,0,L+2/3,I,0,L+2/3,I+1,0,L,I,0,L+2/3,I+1,0,L,I+1,0];y.set(E,v*m*P),M.set(d,g*m*P);const S=[P,P,P,P,P,P];w.set(S,p*m*P)}const C=new St;C.setAttribute("position",new en(y,v)),C.setAttribute("uv",new en(M,g)),C.setAttribute("faceIndex",new en(w,p)),e.push(C),i>Ri&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sl(s,e,t){const n=new cn(s,e,t);return n.texture.mapping=ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ip(s,e,t){const n=new Float32Array(ti),i=new b(0,1,0);return new bt({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ua(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function ol(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ua(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function rl(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function ua(){return`

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
	`}function Dp(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===lr||l===cr,h=l===Ui||l===Ni;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new il(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new il(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Up(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ti("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Np(s,e,t,n){const i={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",r),delete i[d.id];const f=o.get(d);f&&(e.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,m=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let M=0,w=y.length;M<w;M+=3){const C=y[M+0],P=y[M+1],L=y[M+2];d.push(C,P,P,L,L,C)}}else if(m!==void 0){const y=m.array;v=m.version;for(let M=0,w=y.length/3-1;M<w;M+=3){const C=M+0,P=M+1,L=M+2;d.push(C,P,P,L,L,C)}}else return;const g=new(Jl(d)?ic:nc)(d,1);g.version=v;const p=o.get(u);p&&e.remove(p),o.set(u,g)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Fp(s,e,t){let n;function i(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function l(d,f){s.drawElements(n,f,o,d*r),t.update(f,n,1)}function c(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,o,d*r,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/r,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,v,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*v[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Op(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(t.calls++,r){case s.TRIANGLES:t.triangles+=a*(o/3);break;case s.LINES:t.lines+=a*(o/2);break;case s.LINE_STRIP:t.lines+=a*(o-1);break;case s.LINE_LOOP:t.lines+=a*o;break;case s.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Bp(s,e,t){const n=new WeakMap,i=new ut;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let w=0;m===!0&&(w=1),v===!0&&(w=2),g===!0&&(w=3);let C=a.attributes.position.count*w,P=1;C>e.maxTextureSize&&(P=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const L=new Float32Array(C*P*4*u),I=new ec(L,C,P,u);I.type=bn,I.needsUpdate=!0;const E=w*4;for(let N=0;N<u;N++){const ne=p[N],ee=y[N],he=M[N],j=C*P*4*N;for(let $=0;$<ne.count;$++){const O=$*E;m===!0&&(i.fromBufferAttribute(ne,$),L[j+O+0]=i.x,L[j+O+1]=i.y,L[j+O+2]=i.z,L[j+O+3]=0),v===!0&&(i.fromBufferAttribute(ee,$),L[j+O+4]=i.x,L[j+O+5]=i.y,L[j+O+6]=i.z,L[j+O+7]=0),g===!0&&(i.fromBufferAttribute(he,$),L[j+O+8]=i.x,L[j+O+9]=i.y,L[j+O+10]=i.z,L[j+O+11]=he.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new Re(C,P)},n.set(a,d),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:o}}function zp(s,e,t,n){let i=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:r}}const _c=new Ht,al=new lc(1,1),wc=new ec,Mc=new Fh,yc=new rc,ll=[],cl=[],hl=new Float32Array(16),ul=new Float32Array(9),dl=new Float32Array(4);function Gi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let o=ll[i];if(o===void 0&&(o=new Float32Array(i),ll[i]=o),e!==0){n.toArray(o,0);for(let r=1,a=0;r!==e;++r)a+=t,s[r].toArray(o,a)}return o}function Tt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function At(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function go(s,e){let t=cl[e];t===void 0&&(t=new Int32Array(e),cl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function kp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Hp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2fv(this.addr,e),At(t,e)}}function Gp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;s.uniform3fv(this.addr,e),At(t,e)}}function Vp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4fv(this.addr,e),At(t,e)}}function Wp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;dl.set(n),s.uniformMatrix2fv(this.addr,!1,dl),At(t,n)}}function Xp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;ul.set(n),s.uniformMatrix3fv(this.addr,!1,ul),At(t,n)}}function qp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;hl.set(n),s.uniformMatrix4fv(this.addr,!1,hl),At(t,n)}}function Yp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Zp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2iv(this.addr,e),At(t,e)}}function $p(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3iv(this.addr,e),At(t,e)}}function jp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4iv(this.addr,e),At(t,e)}}function Kp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Jp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;s.uniform2uiv(this.addr,e),At(t,e)}}function Qp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;s.uniform3uiv(this.addr,e),At(t,e)}}function e0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;s.uniform4uiv(this.addr,e),At(t,e)}}function t0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(al.compareFunction=Kl,o=al):o=_c,t.setTexture2D(e||o,i)}function n0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Mc,i)}function i0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||yc,i)}function s0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||wc,i)}function o0(s){switch(s){case 5126:return kp;case 35664:return Hp;case 35665:return Gp;case 35666:return Vp;case 35674:return Wp;case 35675:return Xp;case 35676:return qp;case 5124:case 35670:return Yp;case 35667:case 35671:return Zp;case 35668:case 35672:return $p;case 35669:case 35673:return jp;case 5125:return Kp;case 36294:return Jp;case 36295:return Qp;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}function r0(s,e){s.uniform1fv(this.addr,e)}function a0(s,e){const t=Gi(e,this.size,2);s.uniform2fv(this.addr,t)}function l0(s,e){const t=Gi(e,this.size,3);s.uniform3fv(this.addr,t)}function c0(s,e){const t=Gi(e,this.size,4);s.uniform4fv(this.addr,t)}function h0(s,e){const t=Gi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function u0(s,e){const t=Gi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function d0(s,e){const t=Gi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function f0(s,e){s.uniform1iv(this.addr,e)}function p0(s,e){s.uniform2iv(this.addr,e)}function m0(s,e){s.uniform3iv(this.addr,e)}function g0(s,e){s.uniform4iv(this.addr,e)}function x0(s,e){s.uniform1uiv(this.addr,e)}function v0(s,e){s.uniform2uiv(this.addr,e)}function _0(s,e){s.uniform3uiv(this.addr,e)}function w0(s,e){s.uniform4uiv(this.addr,e)}function M0(s,e,t){const n=this.cache,i=e.length,o=go(t,i);Tt(n,o)||(s.uniform1iv(this.addr,o),At(n,o));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||_c,o[r])}function y0(s,e,t){const n=this.cache,i=e.length,o=go(t,i);Tt(n,o)||(s.uniform1iv(this.addr,o),At(n,o));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Mc,o[r])}function S0(s,e,t){const n=this.cache,i=e.length,o=go(t,i);Tt(n,o)||(s.uniform1iv(this.addr,o),At(n,o));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||yc,o[r])}function b0(s,e,t){const n=this.cache,i=e.length,o=go(t,i);Tt(n,o)||(s.uniform1iv(this.addr,o),At(n,o));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||wc,o[r])}function E0(s){switch(s){case 5126:return r0;case 35664:return a0;case 35665:return l0;case 35666:return c0;case 35674:return h0;case 35675:return u0;case 35676:return d0;case 5124:case 35670:return f0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return x0;case 36294:return v0;case 36295:return _0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return b0}}class T0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=o0(t.type)}}class A0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E0(t.type)}}class R0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(e,t[a.id],n)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function fl(s,e){s.seq.push(e),s.map[e.id]=e}function C0(s,e,t){const n=s.name,i=n.length;for(Ko.lastIndex=0;;){const o=Ko.exec(n),r=Ko.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){fl(t,c===void 0?new T0(a,s,e):new A0(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new R0(a),fl(t,u)),t=u}}}class no{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=e.getActiveUniform(t,i),r=e.getUniformLocation(t,o.name);C0(o,r,this)}}setValue(e,t,n,i){const o=this.map[t];o!==void 0&&o.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let o=0,r=t.length;o!==r;++o){const a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,o=e.length;i!==o;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function pl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const P0=37297;let L0=0;function I0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}const ml=new Je;function D0(s){ot._getMatrix(ml,ot.workingColorSpace,s);const e=`mat3( ${ml.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(s)){case oo:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function gl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+i+`

`+I0(s.getShaderSource(e),r)}else return i}function U0(s,e){const t=D0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function N0(s,e){let t;switch(e){case Ul:t="Linear";break;case Nl:t="Reinhard";break;case Fl:t="Cineon";break;case Yr:t="ACESFilmic";break;case Ol:t="AgX";break;case Bl:t="Neutral";break;case Jc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const js=new b;function F0(){ot.getLuminanceCoefficients(js);const s=js.x.toFixed(4),e=js.y.toFixed(4),t=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qi).join(`
`)}function B0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function z0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(e,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),t[r]={type:o.type,location:s.getAttribLocation(e,r),locationSize:a}}return t}function Qi(s){return s!==""}function xl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wr(s){return s.replace(k0,G0)}const H0=new Map;function G0(s,e){let t=Qe[e];if(t===void 0){const n=H0.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wr(t)}const V0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(s){return s.replace(V0,W0)}function W0(s,e,t,n){let i="";for(let o=parseInt(e);o<parseInt(t);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function wl(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function X0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ll?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Il?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Sn&&(e="SHADOWMAP_TYPE_VSM"),e}function q0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ui:case Ni:e="ENVMAP_TYPE_CUBE";break;case ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ni:e="ENVMAP_MODE_REFRACTION";break}return e}function Z0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Dl:e="ENVMAP_BLENDING_MULTIPLY";break;case jc:e="ENVMAP_BLENDING_MIX";break;case Kc:e="ENVMAP_BLENDING_ADD";break}return e}function $0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function j0(s,e,t,n){const i=s.getContext(),o=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=X0(t),c=q0(t),h=Y0(t),u=Z0(t),d=$0(t),f=O0(t),m=B0(o),v=i.createProgram();let g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Qi).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Qi).join(`
`),p.length>0&&(p+=`
`)):(g=[wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),p=[wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Hn?N0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,U0("linearToOutputTexel",t.outputColorSpace),F0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qi).join(`
`)),r=Wr(r),r=xl(r,t),r=vl(r,t),a=Wr(a),a=xl(a,t),a=vl(a,t),r=_l(r),a=_l(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===_a?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+g+r,w=y+p+a,C=pl(i,i.VERTEX_SHADER,M),P=pl(i,i.FRAGMENT_SHADER,w);i.attachShader(v,C),i.attachShader(v,P),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function L(N){if(s.debug.checkShaderErrors){const ne=i.getProgramInfoLog(v).trim(),ee=i.getShaderInfoLog(C).trim(),he=i.getShaderInfoLog(P).trim();let j=!0,$=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,C,P);else{const O=gl(i,C,"vertex"),U=gl(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+ne+`
`+O+`
`+U)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(ee===""||he==="")&&($=!1);$&&(N.diagnostics={runnable:j,programLog:ne,vertexShader:{log:ee,prefix:g},fragmentShader:{log:he,prefix:p}})}i.deleteShader(C),i.deleteShader(P),I=new no(i,v),E=z0(i,v)}let I;this.getUniforms=function(){return I===void 0&&L(this),I};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,P0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=L0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=P,this}let K0=0;class J0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Q0(e),t.set(e,n)),n}}class Q0{constructor(e){this.id=K0++,this.code=e,this.usedTimes=0}}function em(s,e,t,n,i,o,r){const a=new ta,l=new J0,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,S,N,ne,ee){const he=ne.fog,j=ee.geometry,$=E.isMeshStandardMaterial?ne.environment:null,O=(E.isMeshStandardMaterial?t:e).get(E.envMap||$),U=O&&O.mapping===ho?O.image.height:null,W=m[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const K=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,te=K!==void 0?K.length:0;let de=0;j.morphAttributes.position!==void 0&&(de=1),j.morphAttributes.normal!==void 0&&(de=2),j.morphAttributes.color!==void 0&&(de=3);let Se,D,k,Q;if(W){const it=un[W];Se=it.vertexShader,D=it.fragmentShader}else Se=E.vertexShader,D=E.fragmentShader,l.update(E),k=l.getVertexShaderID(E),Q=l.getFragmentShaderID(E);const X=s.getRenderTarget(),oe=s.state.buffers.depth.getReversed(),Me=ee.isInstancedMesh===!0,Pe=ee.isBatchedMesh===!0,Oe=!!E.map,xe=!!E.matcap,se=!!O,R=!!E.aoMap,ie=!!E.lightMap,G=!!E.bumpMap,ae=!!E.normalMap,Y=!!E.displacementMap,we=!!E.emissiveMap,be=!!E.metalnessMap,A=!!E.roughnessMap,_=E.anisotropy>0,B=E.clearcoat>0,H=E.dispersion>0,q=E.iridescence>0,F=E.sheen>0,re=E.transmission>0,pe=_&&!!E.anisotropyMap,_e=B&&!!E.clearcoatMap,ye=B&&!!E.clearcoatNormalMap,ve=B&&!!E.clearcoatRoughnessMap,Ae=q&&!!E.iridescenceMap,Le=q&&!!E.iridescenceThicknessMap,Ne=F&&!!E.sheenColorMap,Ie=F&&!!E.sheenRoughnessMap,Ve=!!E.specularMap,Ge=!!E.specularColorMap,Ze=!!E.specularIntensityMap,V=re&&!!E.transmissionMap,De=re&&!!E.thicknessMap,fe=!!E.gradientMap,ge=!!E.alphaMap,Ee=E.alphaTest>0,Te=!!E.alphaHash,ke=!!E.extensions;let et=Hn;E.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(et=s.toneMapping);const dt={shaderID:W,shaderType:E.type,shaderName:E.name,vertexShader:Se,fragmentShader:D,defines:E.defines,customVertexShaderID:k,customFragmentShaderID:Q,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Pe,batchingColor:Pe&&ee._colorsTexture!==null,instancing:Me,instancingColor:Me&&ee.instanceColor!==null,instancingMorph:Me&&ee.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:X===null?s.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Bi,alphaToCoverage:!!E.alphaToCoverage,map:Oe,matcap:xe,envMap:se,envMapMode:se&&O.mapping,envMapCubeUVHeight:U,aoMap:R,lightMap:ie,bumpMap:G,normalMap:ae,displacementMap:d&&Y,emissiveMap:we,normalMapObjectSpace:ae&&E.normalMapType===nh,normalMapTangentSpace:ae&&E.normalMapType===jl,metalnessMap:be,roughnessMap:A,anisotropy:_,anisotropyMap:pe,clearcoat:B,clearcoatMap:_e,clearcoatNormalMap:ye,clearcoatRoughnessMap:ve,dispersion:H,iridescence:q,iridescenceMap:Ae,iridescenceThicknessMap:Le,sheen:F,sheenColorMap:Ne,sheenRoughnessMap:Ie,specularMap:Ve,specularColorMap:Ge,specularIntensityMap:Ze,transmission:re,transmissionMap:V,thicknessMap:De,gradientMap:fe,opaque:E.transparent===!1&&E.blending===Ci&&E.alphaToCoverage===!1,alphaMap:ge,alphaTest:Ee,alphaHash:Te,combine:E.combine,mapUv:Oe&&v(E.map.channel),aoMapUv:R&&v(E.aoMap.channel),lightMapUv:ie&&v(E.lightMap.channel),bumpMapUv:G&&v(E.bumpMap.channel),normalMapUv:ae&&v(E.normalMap.channel),displacementMapUv:Y&&v(E.displacementMap.channel),emissiveMapUv:we&&v(E.emissiveMap.channel),metalnessMapUv:be&&v(E.metalnessMap.channel),roughnessMapUv:A&&v(E.roughnessMap.channel),anisotropyMapUv:pe&&v(E.anisotropyMap.channel),clearcoatMapUv:_e&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ye&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&v(E.sheenRoughnessMap.channel),specularMapUv:Ve&&v(E.specularMap.channel),specularColorMapUv:Ge&&v(E.specularColorMap.channel),specularIntensityMapUv:Ze&&v(E.specularIntensityMap.channel),transmissionMapUv:V&&v(E.transmissionMap.channel),thicknessMapUv:De&&v(E.thicknessMap.channel),alphaMapUv:ge&&v(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ae||_),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!j.attributes.uv&&(Oe||ge),fog:!!he,useFog:E.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:oe,skinning:ee.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:de,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:et,decodeVideoTexture:Oe&&E.map.isVideoTexture===!0&&ot.getTransfer(E.map.colorSpace)===ht,decodeVideoTextureEmissive:we&&E.emissiveMap.isVideoTexture===!0&&ot.getTransfer(E.emissiveMap.colorSpace)===ht,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===wt,flipSided:E.side===kt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ke&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&E.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const N in E.defines)S.push(N),S.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(y(S,E),M(S,E),S.push(s.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function y(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function M(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function w(E){const S=m[E.type];let N;if(S){const ne=un[S];N=ls.clone(ne.uniforms)}else N=E.uniforms;return N}function C(E,S){let N;for(let ne=0,ee=h.length;ne<ee;ne++){const he=h[ne];if(he.cacheKey===S){N=he,++N.usedTimes;break}}return N===void 0&&(N=new j0(s,S,E,o),h.push(N)),N}function P(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function L(E){l.remove(E)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:w,acquireProgram:C,releaseProgram:P,releaseShaderCache:L,programs:h,dispose:I}}function tm(){let s=new WeakMap;function e(r){return s.has(r)}function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,l){s.get(r)[a]=l}function o(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:o}}function nm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ml(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function yl(){const s=[];let e=0;const t=[],n=[],i=[];function o(){e=0,t.length=0,n.length=0,i.length=0}function r(u,d,f,m,v,g){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),e++,p}function a(u,d,f,m,v,g){const p=r(u,d,f,m,v,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,m,v,g){const p=r(u,d,f,m,v,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||nm),n.length>1&&n.sort(d||Ml),i.length>1&&i.sort(d||Ml)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:o,push:a,unshift:l,finish:h,sort:c}}function im(){let s=new WeakMap;function e(n,i){const o=s.get(n);let r;return o===void 0?(r=new yl,s.set(n,[r])):i>=o.length?(r=new yl,o.push(r)):r=o[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function sm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new qe};break;case"SpotLight":t={position:new b,direction:new b,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new b,halfWidth:new b,halfHeight:new b};break}return s[e.id]=t,t}}}function om(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let rm=0;function am(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function lm(s){const e=new sm,t=om(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new b);const i=new b,o=new ft,r=new ft;function a(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,y=0,M=0,w=0,C=0,P=0,L=0;c.sort(am);for(let E=0,S=c.length;E<S;E++){const N=c[E],ne=N.color,ee=N.intensity,he=N.distance,j=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=ne.r*ee,u+=ne.g*ee,d+=ne.b*ee;else if(N.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(N.sh.coefficients[$],ee);L++}else if(N.isDirectionalLight){const $=e.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const O=N.shadow,U=t.get(N);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,n.directionalShadow[f]=U,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=N.shadow.matrix,y++}n.directional[f]=$,f++}else if(N.isSpotLight){const $=e.get(N);$.position.setFromMatrixPosition(N.matrixWorld),$.color.copy(ne).multiplyScalar(ee),$.distance=he,$.coneCos=Math.cos(N.angle),$.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),$.decay=N.decay,n.spot[v]=$;const O=N.shadow;if(N.map&&(n.spotLightMap[C]=N.map,C++,O.updateMatrices(N),N.castShadow&&P++),n.spotLightMatrix[v]=O.matrix,N.castShadow){const U=t.get(N);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,n.spotShadow[v]=U,n.spotShadowMap[v]=j,w++}v++}else if(N.isRectAreaLight){const $=e.get(N);$.color.copy(ne).multiplyScalar(ee),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),n.rectArea[g]=$,g++}else if(N.isPointLight){const $=e.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity),$.distance=N.distance,$.decay=N.decay,N.castShadow){const O=N.shadow,U=t.get(N);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,U.shadowCameraNear=O.camera.near,U.shadowCameraFar=O.camera.far,n.pointShadow[m]=U,n.pointShadowMap[m]=j,n.pointShadowMatrix[m]=N.shadow.matrix,M++}n.point[m]=$,m++}else if(N.isHemisphereLight){const $=e.get(N);$.skyColor.copy(N.color).multiplyScalar(ee),$.groundColor.copy(N.groundColor).multiplyScalar(ee),n.hemi[p]=$,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==y||I.numPointShadows!==M||I.numSpotShadows!==w||I.numSpotMaps!==C||I.numLightProbes!==L)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=w+C-P,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=L,I.directionalLength=f,I.pointLength=m,I.spotLength=v,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=y,I.numPointShadows=M,I.numSpotShadows=w,I.numSpotMaps=C,I.numLightProbes=L,n.version=rm++)}function l(c,h){let u=0,d=0,f=0,m=0,v=0;const g=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),u++}else if(M.isSpotLight){const w=n.spot[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),f++}else if(M.isRectAreaLight){const w=n.rectArea[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(g),r.identity(),o.copy(M.matrixWorld),o.premultiply(g),r.extractRotation(o),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),m++}else if(M.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){const w=n.hemi[v];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function Sl(s){const e=new lm(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function o(h){t.push(h)}function r(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function cm(s){let e=new WeakMap;function t(i,o=0){const r=e.get(i);let a;return r===void 0?(a=new Sl(s),e.set(i,[a])):o>=r.length?(a=new Sl(s),r.push(a)):a=r[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,um=`uniform sampler2D shadow_pass;
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
}`;function dm(s,e,t){let n=new na;const i=new Re,o=new Re,r=new ut,a=new Fu({depthPacking:th}),l=new Ou,c={},h=t.maxTextureSize,u={[Vn]:kt,[kt]:Vn,[wt]:wt},d=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:hm,fragmentShader:um}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new St;m.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new x(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ll;let p=this.type;this.render=function(P,L,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;const E=s.getRenderTarget(),S=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(Tn),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const ee=p!==Sn&&this.type===Sn,he=p===Sn&&this.type!==Sn;for(let j=0,$=P.length;j<$;j++){const O=P[j],U=O.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const W=U.getFrameExtents();if(i.multiply(W),o.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/W.x),i.x=o.x*W.x,U.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/W.y),i.y=o.y*W.y,U.mapSize.y=o.y)),U.map===null||ee===!0||he===!0){const te=this.type!==Sn?{minFilter:ln,magFilter:ln}:{};U.map!==null&&U.map.dispose(),U.map=new cn(i.x,i.y,te),U.map.texture.name=O.name+".shadowMap",U.camera.updateProjectionMatrix()}s.setRenderTarget(U.map),s.clear();const K=U.getViewportCount();for(let te=0;te<K;te++){const de=U.getViewport(te);r.set(o.x*de.x,o.y*de.y,o.x*de.z,o.y*de.w),ne.viewport(r),U.updateMatrices(O,te),n=U.getFrustum(),w(L,I,U.camera,O,this.type)}U.isPointLightShadow!==!0&&this.type===Sn&&y(U,I),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(E,S,N)};function y(P,L){const I=e.update(v);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new cn(i.x,i.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(L,null,I,d,v,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(L,null,I,f,v,null)}function M(P,L,I,E){let S=null;const N=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(N!==void 0)S=N;else if(S=I.isPointLight===!0?l:a,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const ne=S.uuid,ee=L.uuid;let he=c[ne];he===void 0&&(he={},c[ne]=he);let j=he[ee];j===void 0&&(j=S.clone(),he[ee]=j,L.addEventListener("dispose",C)),S=j}if(S.visible=L.visible,S.wireframe=L.wireframe,E===Sn?S.side=L.shadowSide!==null?L.shadowSide:L.side:S.side=L.shadowSide!==null?L.shadowSide:u[L.side],S.alphaMap=L.alphaMap,S.alphaTest=L.alphaTest,S.map=L.map,S.clipShadows=L.clipShadows,S.clippingPlanes=L.clippingPlanes,S.clipIntersection=L.clipIntersection,S.displacementMap=L.displacementMap,S.displacementScale=L.displacementScale,S.displacementBias=L.displacementBias,S.wireframeLinewidth=L.wireframeLinewidth,S.linewidth=L.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const ne=s.properties.get(S);ne.light=I}return S}function w(P,L,I,E,S){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===Sn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const ee=e.update(P),he=P.material;if(Array.isArray(he)){const j=ee.groups;for(let $=0,O=j.length;$<O;$++){const U=j[$],W=he[U.materialIndex];if(W&&W.visible){const K=M(P,W,E,S);P.onBeforeShadow(s,P,L,I,ee,K,U),s.renderBufferDirect(I,null,ee,K,P,U),P.onAfterShadow(s,P,L,I,ee,K,U)}}}else if(he.visible){const j=M(P,he,E,S);P.onBeforeShadow(s,P,L,I,ee,j,null),s.renderBufferDirect(I,null,ee,j,P,null),P.onAfterShadow(s,P,L,I,ee,j,null)}}const ne=P.children;for(let ee=0,he=ne.length;ee<he;ee++)w(ne[ee],L,I,E,S)}function C(P){P.target.removeEventListener("dispose",C);for(const I in c){const E=c[I],S=P.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const fm={[tr]:nr,[ir]:rr,[sr]:ar,[Di]:or,[nr]:tr,[rr]:ir,[ar]:sr,[or]:Di};function pm(s,e){function t(){let V=!1;const De=new ut;let fe=null;const ge=new ut(0,0,0,0);return{setMask:function(Ee){fe!==Ee&&!V&&(s.colorMask(Ee,Ee,Ee,Ee),fe=Ee)},setLocked:function(Ee){V=Ee},setClear:function(Ee,Te,ke,et,dt){dt===!0&&(Ee*=et,Te*=et,ke*=et),De.set(Ee,Te,ke,et),ge.equals(De)===!1&&(s.clearColor(Ee,Te,ke,et),ge.copy(De))},reset:function(){V=!1,fe=null,ge.set(-1,0,0,0)}}}function n(){let V=!1,De=!1,fe=null,ge=null,Ee=null;return{setReversed:function(Te){if(De!==Te){const ke=e.get("EXT_clip_control");De?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const et=Ee;Ee=null,this.setClear(et)}De=Te},getReversed:function(){return De},setTest:function(Te){Te?X(s.DEPTH_TEST):oe(s.DEPTH_TEST)},setMask:function(Te){fe!==Te&&!V&&(s.depthMask(Te),fe=Te)},setFunc:function(Te){if(De&&(Te=fm[Te]),ge!==Te){switch(Te){case tr:s.depthFunc(s.NEVER);break;case nr:s.depthFunc(s.ALWAYS);break;case ir:s.depthFunc(s.LESS);break;case Di:s.depthFunc(s.LEQUAL);break;case sr:s.depthFunc(s.EQUAL);break;case or:s.depthFunc(s.GEQUAL);break;case rr:s.depthFunc(s.GREATER);break;case ar:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=Te}},setLocked:function(Te){V=Te},setClear:function(Te){Ee!==Te&&(De&&(Te=1-Te),s.clearDepth(Te),Ee=Te)},reset:function(){V=!1,fe=null,ge=null,Ee=null,De=!1}}}function i(){let V=!1,De=null,fe=null,ge=null,Ee=null,Te=null,ke=null,et=null,dt=null;return{setTest:function(it){V||(it?X(s.STENCIL_TEST):oe(s.STENCIL_TEST))},setMask:function(it){De!==it&&!V&&(s.stencilMask(it),De=it)},setFunc:function(it,Lt,$t){(fe!==it||ge!==Lt||Ee!==$t)&&(s.stencilFunc(it,Lt,$t),fe=it,ge=Lt,Ee=$t)},setOp:function(it,Lt,$t){(Te!==it||ke!==Lt||et!==$t)&&(s.stencilOp(it,Lt,$t),Te=it,ke=Lt,et=$t)},setLocked:function(it){V=it},setClear:function(it){dt!==it&&(s.clearStencil(it),dt=it)},reset:function(){V=!1,De=null,fe=null,ge=null,Ee=null,Te=null,ke=null,et=null,dt=null}}}const o=new t,r=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,y=null,M=null,w=null,C=null,P=null,L=new qe(0,0,0),I=0,E=!1,S=null,N=null,ne=null,ee=null,he=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,O=0;const U=s.getParameter(s.VERSION);U.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(U)[1]),$=O>=1):U.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),$=O>=2);let W=null,K={};const te=s.getParameter(s.SCISSOR_BOX),de=s.getParameter(s.VIEWPORT),Se=new ut().fromArray(te),D=new ut().fromArray(de);function k(V,De,fe,ge){const Ee=new Uint8Array(4),Te=s.createTexture();s.bindTexture(V,Te),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ke=0;ke<fe;ke++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(De+ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return Te}const Q={};Q[s.TEXTURE_2D]=k(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=k(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=k(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=k(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),X(s.DEPTH_TEST),r.setFunc(Di),G(!1),ae(pa),X(s.CULL_FACE),R(Tn);function X(V){h[V]!==!0&&(s.enable(V),h[V]=!0)}function oe(V){h[V]!==!1&&(s.disable(V),h[V]=!1)}function Me(V,De){return u[V]!==De?(s.bindFramebuffer(V,De),u[V]=De,V===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=De),V===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=De),!0):!1}function Pe(V,De){let fe=f,ge=!1;if(V){fe=d.get(De),fe===void 0&&(fe=[],d.set(De,fe));const Ee=V.textures;if(fe.length!==Ee.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let Te=0,ke=Ee.length;Te<ke;Te++)fe[Te]=s.COLOR_ATTACHMENT0+Te;fe.length=Ee.length,ge=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,ge=!0);ge&&s.drawBuffers(fe)}function Oe(V){return m!==V?(s.useProgram(V),m=V,!0):!1}const xe={[ei]:s.FUNC_ADD,[Dc]:s.FUNC_SUBTRACT,[Uc]:s.FUNC_REVERSE_SUBTRACT};xe[Nc]=s.MIN,xe[Fc]=s.MAX;const se={[Oc]:s.ZERO,[Bc]:s.ONE,[zc]:s.SRC_COLOR,[Qo]:s.SRC_ALPHA,[Xc]:s.SRC_ALPHA_SATURATE,[Vc]:s.DST_COLOR,[Hc]:s.DST_ALPHA,[kc]:s.ONE_MINUS_SRC_COLOR,[er]:s.ONE_MINUS_SRC_ALPHA,[Wc]:s.ONE_MINUS_DST_COLOR,[Gc]:s.ONE_MINUS_DST_ALPHA,[qc]:s.CONSTANT_COLOR,[Yc]:s.ONE_MINUS_CONSTANT_COLOR,[Zc]:s.CONSTANT_ALPHA,[$c]:s.ONE_MINUS_CONSTANT_ALPHA};function R(V,De,fe,ge,Ee,Te,ke,et,dt,it){if(V===Tn){v===!0&&(oe(s.BLEND),v=!1);return}if(v===!1&&(X(s.BLEND),v=!0),V!==Ic){if(V!==g||it!==E){if((p!==ei||w!==ei)&&(s.blendEquation(s.FUNC_ADD),p=ei,w=ei),it)switch(V){case Ci:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case so:s.blendFunc(s.ONE,s.ONE);break;case ma:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ga:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ci:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case so:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ma:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ga:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}y=null,M=null,C=null,P=null,L.set(0,0,0),I=0,g=V,E=it}return}Ee=Ee||De,Te=Te||fe,ke=ke||ge,(De!==p||Ee!==w)&&(s.blendEquationSeparate(xe[De],xe[Ee]),p=De,w=Ee),(fe!==y||ge!==M||Te!==C||ke!==P)&&(s.blendFuncSeparate(se[fe],se[ge],se[Te],se[ke]),y=fe,M=ge,C=Te,P=ke),(et.equals(L)===!1||dt!==I)&&(s.blendColor(et.r,et.g,et.b,dt),L.copy(et),I=dt),g=V,E=!1}function ie(V,De){V.side===wt?oe(s.CULL_FACE):X(s.CULL_FACE);let fe=V.side===kt;De&&(fe=!fe),G(fe),V.blending===Ci&&V.transparent===!1?R(Tn):R(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),r.setFunc(V.depthFunc),r.setTest(V.depthTest),r.setMask(V.depthWrite),o.setMask(V.colorWrite);const ge=V.stencilWrite;a.setTest(ge),ge&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),we(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?X(s.SAMPLE_ALPHA_TO_COVERAGE):oe(s.SAMPLE_ALPHA_TO_COVERAGE)}function G(V){S!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),S=V)}function ae(V){V!==Pc?(X(s.CULL_FACE),V!==N&&(V===pa?s.cullFace(s.BACK):V===Lc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):oe(s.CULL_FACE),N=V}function Y(V){V!==ne&&($&&s.lineWidth(V),ne=V)}function we(V,De,fe){V?(X(s.POLYGON_OFFSET_FILL),(ee!==De||he!==fe)&&(s.polygonOffset(De,fe),ee=De,he=fe)):oe(s.POLYGON_OFFSET_FILL)}function be(V){V?X(s.SCISSOR_TEST):oe(s.SCISSOR_TEST)}function A(V){V===void 0&&(V=s.TEXTURE0+j-1),W!==V&&(s.activeTexture(V),W=V)}function _(V,De,fe){fe===void 0&&(W===null?fe=s.TEXTURE0+j-1:fe=W);let ge=K[fe];ge===void 0&&(ge={type:void 0,texture:void 0},K[fe]=ge),(ge.type!==V||ge.texture!==De)&&(W!==fe&&(s.activeTexture(fe),W=fe),s.bindTexture(V,De||Q[V]),ge.type=V,ge.texture=De)}function B(){const V=K[W];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function H(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function F(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function re(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ae(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(V){Se.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Se.copy(V))}function Ie(V){D.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),D.copy(V))}function Ve(V,De){let fe=c.get(De);fe===void 0&&(fe=new WeakMap,c.set(De,fe));let ge=fe.get(V);ge===void 0&&(ge=s.getUniformBlockIndex(De,V.name),fe.set(V,ge))}function Ge(V,De){const ge=c.get(De).get(V);l.get(De)!==ge&&(s.uniformBlockBinding(De,ge,V.__bindingPointIndex),l.set(De,ge))}function Ze(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},W=null,K={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,y=null,M=null,w=null,C=null,P=null,L=new qe(0,0,0),I=0,E=!1,S=null,N=null,ne=null,ee=null,he=null,Se.set(0,0,s.canvas.width,s.canvas.height),D.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:X,disable:oe,bindFramebuffer:Me,drawBuffers:Pe,useProgram:Oe,setBlending:R,setMaterial:ie,setFlipSided:G,setCullFace:ae,setLineWidth:Y,setPolygonOffset:we,setScissorTest:be,activeTexture:A,bindTexture:_,unbindTexture:B,compressedTexImage2D:H,compressedTexImage3D:q,texImage2D:Ae,texImage3D:Le,updateUBOMapping:Ve,uniformBlockBinding:Ge,texStorage2D:ye,texStorage3D:ve,texSubImage2D:F,texSubImage3D:re,compressedTexSubImage2D:pe,compressedTexSubImage3D:_e,scissor:Ne,viewport:Ie,reset:Ze}}function mm(s,e,t,n,i,o,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,_){return f?new OffscreenCanvas(A,_):ao("canvas")}function v(A,_,B){let H=1;const q=be(A);if((q.width>B||q.height>B)&&(H=B/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const F=Math.floor(H*q.width),re=Math.floor(H*q.height);u===void 0&&(u=m(F,re));const pe=_?m(F,re):u;return pe.width=F,pe.height=re,pe.getContext("2d").drawImage(A,0,0,F,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+F+"x"+re+")."),pe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(A,_,B,H,q=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let F=_;if(_===s.RED&&(B===s.FLOAT&&(F=s.R32F),B===s.HALF_FLOAT&&(F=s.R16F),B===s.UNSIGNED_BYTE&&(F=s.R8)),_===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(F=s.R8UI),B===s.UNSIGNED_SHORT&&(F=s.R16UI),B===s.UNSIGNED_INT&&(F=s.R32UI),B===s.BYTE&&(F=s.R8I),B===s.SHORT&&(F=s.R16I),B===s.INT&&(F=s.R32I)),_===s.RG&&(B===s.FLOAT&&(F=s.RG32F),B===s.HALF_FLOAT&&(F=s.RG16F),B===s.UNSIGNED_BYTE&&(F=s.RG8)),_===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(F=s.RG8UI),B===s.UNSIGNED_SHORT&&(F=s.RG16UI),B===s.UNSIGNED_INT&&(F=s.RG32UI),B===s.BYTE&&(F=s.RG8I),B===s.SHORT&&(F=s.RG16I),B===s.INT&&(F=s.RG32I)),_===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(F=s.RGB8UI),B===s.UNSIGNED_SHORT&&(F=s.RGB16UI),B===s.UNSIGNED_INT&&(F=s.RGB32UI),B===s.BYTE&&(F=s.RGB8I),B===s.SHORT&&(F=s.RGB16I),B===s.INT&&(F=s.RGB32I)),_===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(F=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(F=s.RGBA16UI),B===s.UNSIGNED_INT&&(F=s.RGBA32UI),B===s.BYTE&&(F=s.RGBA8I),B===s.SHORT&&(F=s.RGBA16I),B===s.INT&&(F=s.RGBA32I)),_===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(F=s.RGB9_E5),_===s.RGBA){const re=q?oo:ot.getTransfer(H);B===s.FLOAT&&(F=s.RGBA32F),B===s.HALF_FLOAT&&(F=s.RGBA16F),B===s.UNSIGNED_BYTE&&(F=re===ht?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(F=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(F=s.RGB5_A1)}return(F===s.R16F||F===s.R32F||F===s.RG16F||F===s.RG32F||F===s.RGBA16F||F===s.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function w(A,_){let B;return A?_===null||_===si||_===Fi?B=s.DEPTH24_STENCIL8:_===bn?B=s.DEPTH32F_STENCIL8:_===rs&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===si||_===Fi?B=s.DEPTH_COMPONENT24:_===bn?B=s.DEPTH_COMPONENT32F:_===rs&&(B=s.DEPTH_COMPONENT16),B}function C(A,_){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==ln&&A.minFilter!==dn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function P(A){const _=A.target;_.removeEventListener("dispose",P),I(_),_.isVideoTexture&&h.delete(_)}function L(A){const _=A.target;_.removeEventListener("dispose",L),S(_)}function I(A){const _=n.get(A);if(_.__webglInit===void 0)return;const B=A.source,H=d.get(B);if(H){const q=H[_.__cacheKey];q.usedTimes--,q.usedTimes===0&&E(A),Object.keys(H).length===0&&d.delete(B)}n.remove(A)}function E(A){const _=n.get(A);s.deleteTexture(_.__webglTexture);const B=A.source,H=d.get(B);delete H[_.__cacheKey],r.memory.textures--}function S(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let q=0;q<_.__webglFramebuffer[H].length;q++)s.deleteFramebuffer(_.__webglFramebuffer[H][q]);else s.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)s.deleteFramebuffer(_.__webglFramebuffer[H]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=A.textures;for(let H=0,q=B.length;H<q;H++){const F=n.get(B[H]);F.__webglTexture&&(s.deleteTexture(F.__webglTexture),r.memory.textures--),n.remove(B[H])}n.remove(A)}let N=0;function ne(){N=0}function ee(){const A=N;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),N+=1,A}function he(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function j(A,_){const B=n.get(A);if(A.isVideoTexture&&Y(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const H=A.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(B,A,_);return}}t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+_)}function $(A,_){const B=n.get(A);if(A.version>0&&B.__version!==A.version){D(B,A,_);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+_)}function O(A,_){const B=n.get(A);if(A.version>0&&B.__version!==A.version){D(B,A,_);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+_)}function U(A,_){const B=n.get(A);if(A.version>0&&B.__version!==A.version){k(B,A,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+_)}const W={[os]:s.REPEAT,[Dt]:s.CLAMP_TO_EDGE,[hr]:s.MIRRORED_REPEAT},K={[ln]:s.NEAREST,[Qc]:s.NEAREST_MIPMAP_NEAREST,[Ss]:s.NEAREST_MIPMAP_LINEAR,[dn]:s.LINEAR,[_o]:s.LINEAR_MIPMAP_NEAREST,[ni]:s.LINEAR_MIPMAP_LINEAR},te={[ih]:s.NEVER,[ch]:s.ALWAYS,[sh]:s.LESS,[Kl]:s.LEQUAL,[oh]:s.EQUAL,[lh]:s.GEQUAL,[rh]:s.GREATER,[ah]:s.NOTEQUAL};function de(A,_){if(_.type===bn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===dn||_.magFilter===_o||_.magFilter===Ss||_.magFilter===ni||_.minFilter===dn||_.minFilter===_o||_.minFilter===Ss||_.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,W[_.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,W[_.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,W[_.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,K[_.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,K[_.minFilter]),_.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,te[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ln||_.minFilter!==Ss&&_.minFilter!==ni||_.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Se(A,_){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",P));const H=_.source;let q=d.get(H);q===void 0&&(q={},d.set(H,q));const F=he(_);if(F!==A.__cacheKey){q[F]===void 0&&(q[F]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,B=!0),q[F].usedTimes++;const re=q[A.__cacheKey];re!==void 0&&(q[A.__cacheKey].usedTimes--,re.usedTimes===0&&E(_)),A.__cacheKey=F,A.__webglTexture=q[F].texture}return B}function D(A,_,B){let H=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=s.TEXTURE_3D);const q=Se(A,_),F=_.source;t.bindTexture(H,A.__webglTexture,s.TEXTURE0+B);const re=n.get(F);if(F.version!==re.__version||q===!0){t.activeTexture(s.TEXTURE0+B);const pe=ot.getPrimaries(ot.workingColorSpace),_e=_.colorSpace===kn?null:ot.getPrimaries(_.colorSpace),ye=_.colorSpace===kn||pe===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ve=v(_.image,!1,i.maxTextureSize);ve=we(_,ve);const Ae=o.convert(_.format,_.colorSpace),Le=o.convert(_.type);let Ne=M(_.internalFormat,Ae,Le,_.colorSpace,_.isVideoTexture);de(H,_);let Ie;const Ve=_.mipmaps,Ge=_.isVideoTexture!==!0,Ze=re.__version===void 0||q===!0,V=F.dataReady,De=C(_,ve);if(_.isDepthTexture)Ne=w(_.format===Oi,_.type),Ze&&(Ge?t.texStorage2D(s.TEXTURE_2D,1,Ne,ve.width,ve.height):t.texImage2D(s.TEXTURE_2D,0,Ne,ve.width,ve.height,0,Ae,Le,null));else if(_.isDataTexture)if(Ve.length>0){Ge&&Ze&&t.texStorage2D(s.TEXTURE_2D,De,Ne,Ve[0].width,Ve[0].height);for(let fe=0,ge=Ve.length;fe<ge;fe++)Ie=Ve[fe],Ge?V&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,Ie.width,Ie.height,Ae,Le,Ie.data):t.texImage2D(s.TEXTURE_2D,fe,Ne,Ie.width,Ie.height,0,Ae,Le,Ie.data);_.generateMipmaps=!1}else Ge?(Ze&&t.texStorage2D(s.TEXTURE_2D,De,Ne,ve.width,ve.height),V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve.width,ve.height,Ae,Le,ve.data)):t.texImage2D(s.TEXTURE_2D,0,Ne,ve.width,ve.height,0,Ae,Le,ve.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ge&&Ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,Ne,Ve[0].width,Ve[0].height,ve.depth);for(let fe=0,ge=Ve.length;fe<ge;fe++)if(Ie=Ve[fe],_.format!==an)if(Ae!==null)if(Ge){if(V)if(_.layerUpdates.size>0){const Ee=Qa(Ie.width,Ie.height,_.format,_.type);for(const Te of _.layerUpdates){const ke=Ie.data.subarray(Te*Ee/Ie.data.BYTES_PER_ELEMENT,(Te+1)*Ee/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,Te,Ie.width,Ie.height,1,Ae,ke)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Ie.width,Ie.height,ve.depth,Ae,Ie.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,Ne,Ie.width,Ie.height,ve.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?V&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Ie.width,Ie.height,ve.depth,Ae,Le,Ie.data):t.texImage3D(s.TEXTURE_2D_ARRAY,fe,Ne,Ie.width,Ie.height,ve.depth,0,Ae,Le,Ie.data)}else{Ge&&Ze&&t.texStorage2D(s.TEXTURE_2D,De,Ne,Ve[0].width,Ve[0].height);for(let fe=0,ge=Ve.length;fe<ge;fe++)Ie=Ve[fe],_.format!==an?Ae!==null?Ge?V&&t.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,Ie.width,Ie.height,Ae,Ie.data):t.compressedTexImage2D(s.TEXTURE_2D,fe,Ne,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?V&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,Ie.width,Ie.height,Ae,Le,Ie.data):t.texImage2D(s.TEXTURE_2D,fe,Ne,Ie.width,Ie.height,0,Ae,Le,Ie.data)}else if(_.isDataArrayTexture)if(Ge){if(Ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,Ne,ve.width,ve.height,ve.depth),V)if(_.layerUpdates.size>0){const fe=Qa(ve.width,ve.height,_.format,_.type);for(const ge of _.layerUpdates){const Ee=ve.data.subarray(ge*fe/ve.data.BYTES_PER_ELEMENT,(ge+1)*fe/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ge,ve.width,ve.height,1,Ae,Le,Ee)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ae,Le,ve.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,ve.width,ve.height,ve.depth,0,Ae,Le,ve.data);else if(_.isData3DTexture)Ge?(Ze&&t.texStorage3D(s.TEXTURE_3D,De,Ne,ve.width,ve.height,ve.depth),V&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ae,Le,ve.data)):t.texImage3D(s.TEXTURE_3D,0,Ne,ve.width,ve.height,ve.depth,0,Ae,Le,ve.data);else if(_.isFramebufferTexture){if(Ze)if(Ge)t.texStorage2D(s.TEXTURE_2D,De,Ne,ve.width,ve.height);else{let fe=ve.width,ge=ve.height;for(let Ee=0;Ee<De;Ee++)t.texImage2D(s.TEXTURE_2D,Ee,Ne,fe,ge,0,Ae,Le,null),fe>>=1,ge>>=1}}else if(Ve.length>0){if(Ge&&Ze){const fe=be(Ve[0]);t.texStorage2D(s.TEXTURE_2D,De,Ne,fe.width,fe.height)}for(let fe=0,ge=Ve.length;fe<ge;fe++)Ie=Ve[fe],Ge?V&&t.texSubImage2D(s.TEXTURE_2D,fe,0,0,Ae,Le,Ie):t.texImage2D(s.TEXTURE_2D,fe,Ne,Ae,Le,Ie);_.generateMipmaps=!1}else if(Ge){if(Ze){const fe=be(ve);t.texStorage2D(s.TEXTURE_2D,De,Ne,fe.width,fe.height)}V&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,Le,ve)}else t.texImage2D(s.TEXTURE_2D,0,Ne,Ae,Le,ve);g(_)&&p(H),re.__version=F.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function k(A,_,B){if(_.image.length!==6)return;const H=Se(A,_),q=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);const F=n.get(q);if(q.version!==F.__version||H===!0){t.activeTexture(s.TEXTURE0+B);const re=ot.getPrimaries(ot.workingColorSpace),pe=_.colorSpace===kn?null:ot.getPrimaries(_.colorSpace),_e=_.colorSpace===kn||re===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const ye=_.isCompressedTexture||_.image[0].isCompressedTexture,ve=_.image[0]&&_.image[0].isDataTexture,Ae=[];for(let ge=0;ge<6;ge++)!ye&&!ve?Ae[ge]=v(_.image[ge],!0,i.maxCubemapSize):Ae[ge]=ve?_.image[ge].image:_.image[ge],Ae[ge]=we(_,Ae[ge]);const Le=Ae[0],Ne=o.convert(_.format,_.colorSpace),Ie=o.convert(_.type),Ve=M(_.internalFormat,Ne,Ie,_.colorSpace),Ge=_.isVideoTexture!==!0,Ze=F.__version===void 0||H===!0,V=q.dataReady;let De=C(_,Le);de(s.TEXTURE_CUBE_MAP,_);let fe;if(ye){Ge&&Ze&&t.texStorage2D(s.TEXTURE_CUBE_MAP,De,Ve,Le.width,Le.height);for(let ge=0;ge<6;ge++){fe=Ae[ge].mipmaps;for(let Ee=0;Ee<fe.length;Ee++){const Te=fe[Ee];_.format!==an?Ne!==null?Ge?V&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ee,0,0,Te.width,Te.height,Ne,Te.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ee,Ve,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ee,0,0,Te.width,Te.height,Ne,Ie,Te.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ee,Ve,Te.width,Te.height,0,Ne,Ie,Te.data)}}}else{if(fe=_.mipmaps,Ge&&Ze){fe.length>0&&De++;const ge=be(Ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,De,Ve,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(ve){Ge?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ae[ge].width,Ae[ge].height,Ne,Ie,Ae[ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ve,Ae[ge].width,Ae[ge].height,0,Ne,Ie,Ae[ge].data);for(let Ee=0;Ee<fe.length;Ee++){const ke=fe[Ee].image[ge].image;Ge?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ee+1,0,0,ke.width,ke.height,Ne,Ie,ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ee+1,Ve,ke.width,ke.height,0,Ne,Ie,ke.data)}}else{Ge?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ne,Ie,Ae[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ve,Ne,Ie,Ae[ge]);for(let Ee=0;Ee<fe.length;Ee++){const Te=fe[Ee];Ge?V&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ee+1,0,0,Ne,Ie,Te.image[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ee+1,Ve,Ne,Ie,Te.image[ge])}}}g(_)&&p(s.TEXTURE_CUBE_MAP),F.__version=q.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Q(A,_,B,H,q,F){const re=o.convert(B.format,B.colorSpace),pe=o.convert(B.type),_e=M(B.internalFormat,re,pe,B.colorSpace),ye=n.get(_),ve=n.get(B);if(ve.__renderTarget=_,!ye.__hasExternalTextures){const Ae=Math.max(1,_.width>>F),Le=Math.max(1,_.height>>F);q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?t.texImage3D(q,F,_e,Ae,Le,_.depth,0,re,pe,null):t.texImage2D(q,F,_e,Ae,Le,0,re,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),ae(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,H,q,ve.__webglTexture,0,G(_)):(q===s.TEXTURE_2D||q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,H,q,ve.__webglTexture,F),t.bindFramebuffer(s.FRAMEBUFFER,null)}function X(A,_,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),_.depthBuffer){const H=_.depthTexture,q=H&&H.isDepthTexture?H.type:null,F=w(_.stencilBuffer,q),re=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=G(_);ae(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,F,_.width,_.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,F,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,F,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,A)}else{const H=_.textures;for(let q=0;q<H.length;q++){const F=H[q],re=o.convert(F.format,F.colorSpace),pe=o.convert(F.type),_e=M(F.internalFormat,re,pe,F.colorSpace),ye=G(_);B&&ae(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,_e,_.width,_.height):ae(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,_e,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,_e,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function oe(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=n.get(_.depthTexture);H.__renderTarget=_,(!H.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const q=H.__webglTexture,F=G(_);if(_.depthTexture.format===Pi)ae(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,q,0,F):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,q,0);else if(_.depthTexture.format===Oi)ae(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,q,0,F):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Me(A){const _=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const H=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){const q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),_.__depthDisposeCallback=q}_.__boundDepthTexture=H}if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");oe(_.__webglFramebuffer,A)}else if(B){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=s.createRenderbuffer(),X(_.__webglDepthbuffer[H],A,!1);else{const q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,F=_.__webglDepthbuffer[H];s.bindRenderbuffer(s.RENDERBUFFER,F),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,F)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),X(_.__webglDepthbuffer,A,!1);else{const H=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,H,s.RENDERBUFFER,q)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(A,_,B){const H=n.get(A);_!==void 0&&Q(H.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Me(A)}function Oe(A){const _=A.texture,B=n.get(A),H=n.get(_);A.addEventListener("dispose",L);const q=A.textures,F=A.isWebGLCubeRenderTarget===!0,re=q.length>1;if(re||(H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture()),H.__version=_.version,r.memory.textures++),F){B.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[pe]=[];for(let _e=0;_e<_.mipmaps.length;_e++)B.__webglFramebuffer[pe][_e]=s.createFramebuffer()}else B.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let pe=0;pe<_.mipmaps.length;pe++)B.__webglFramebuffer[pe]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(re)for(let pe=0,_e=q.length;pe<_e;pe++){const ye=n.get(q[pe]);ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture(),r.memory.textures++)}if(A.samples>0&&ae(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let pe=0;pe<q.length;pe++){const _e=q[pe];B.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[pe]);const ye=o.convert(_e.format,_e.colorSpace),ve=o.convert(_e.type),Ae=M(_e.internalFormat,ye,ve,_e.colorSpace,A.isXRRenderTarget===!0),Le=G(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,Ae,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,B.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),X(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(F){t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture),de(s.TEXTURE_CUBE_MAP,_);for(let pe=0;pe<6;pe++)if(_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)Q(B.__webglFramebuffer[pe][_e],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else Q(B.__webglFramebuffer[pe],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(_)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let pe=0,_e=q.length;pe<_e;pe++){const ye=q[pe],ve=n.get(ye);t.bindTexture(s.TEXTURE_2D,ve.__webglTexture),de(s.TEXTURE_2D,ye),Q(B.__webglFramebuffer,A,ye,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,0),g(ye)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pe=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,H.__webglTexture),de(pe,_),_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)Q(B.__webglFramebuffer[_e],A,_,s.COLOR_ATTACHMENT0,pe,_e);else Q(B.__webglFramebuffer,A,_,s.COLOR_ATTACHMENT0,pe,0);g(_)&&p(pe),t.unbindTexture()}A.depthBuffer&&Me(A)}function xe(A){const _=A.textures;for(let B=0,H=_.length;B<H;B++){const q=_[B];if(g(q)){const F=y(A),re=n.get(q).__webglTexture;t.bindTexture(F,re),p(F),t.unbindTexture()}}}const se=[],R=[];function ie(A){if(A.samples>0){if(ae(A)===!1){const _=A.textures,B=A.width,H=A.height;let q=s.COLOR_BUFFER_BIT;const F=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=n.get(A),pe=_.length>1;if(pe)for(let _e=0;_e<_.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let _e=0;_e<_.length;_e++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(q|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(q|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,re.__webglColorRenderbuffer[_e]);const ye=n.get(_[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,B,H,0,0,B,H,q,s.NEAREST),l===!0&&(se.length=0,R.length=0,se.push(s.COLOR_ATTACHMENT0+_e),A.depthBuffer&&A.resolveDepthBuffer===!1&&(se.push(F),R.push(F),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,R)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let _e=0;_e<_.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,re.__webglColorRenderbuffer[_e]);const ye=n.get(_[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const _=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function G(A){return Math.min(i.maxSamples,A.samples)}function ae(A){const _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Y(A){const _=r.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function we(A,_){const B=A.colorSpace,H=A.format,q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Bi&&B!==kn&&(ot.getTransfer(B)===ht?(H!==an||q!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=ne,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=O,this.setTextureCube=U,this.rebindTextures=Pe,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ae}function gm(s,e){function t(n,i=kn){let o;const r=ot.getTransfer(i);if(n===Ln)return s.UNSIGNED_BYTE;if(n===$r)return s.UNSIGNED_SHORT_4_4_4_4;if(n===jr)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Gl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===kl)return s.BYTE;if(n===Hl)return s.SHORT;if(n===rs)return s.UNSIGNED_SHORT;if(n===Zr)return s.INT;if(n===si)return s.UNSIGNED_INT;if(n===bn)return s.FLOAT;if(n===An)return s.HALF_FLOAT;if(n===Vl)return s.ALPHA;if(n===Wl)return s.RGB;if(n===an)return s.RGBA;if(n===Xl)return s.LUMINANCE;if(n===ql)return s.LUMINANCE_ALPHA;if(n===Pi)return s.DEPTH_COMPONENT;if(n===Oi)return s.DEPTH_STENCIL;if(n===Yl)return s.RED;if(n===Kr)return s.RED_INTEGER;if(n===Zl)return s.RG;if(n===Jr)return s.RG_INTEGER;if(n===Qr)return s.RGBA_INTEGER;if(n===Ks||n===Js||n===Qs||n===eo)if(r===ht)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ks)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===eo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ks)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Js)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===eo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ur||n===dr||n===fr||n===pr)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ur)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mr||n===gr||n===xr)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===mr||n===gr)return r===ht?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===xr)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vr||n===_r||n===wr||n===Mr||n===yr||n===Sr||n===br||n===Er||n===Tr||n===Ar||n===Rr||n===Cr||n===Pr||n===Lr)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===vr)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_r)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wr)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mr)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yr)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sr)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===br)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Er)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tr)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ar)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rr)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cr)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pr)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lr)return r===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===to||n===Ir||n===Dr)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===to)return r===ht?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ir)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dr)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$l||n===Ur||n===Nr||n===Fr)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===to)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Ur)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fr)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const xm={type:"move"};class Jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const vm=`
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

}`;class wm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ht,o=e.properties.get(i);o.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bt({vertexShader:vm,fragmentShader:_m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new x(new gt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mm extends Hi{constructor(e,t){super();const n=this;let i=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const v=new wm,g=t.getContextAttributes();let p=null,y=null;const M=[],w=[],C=new Re;let P=null;const L=new Zt;L.viewport=new ut;const I=new Zt;I.viewport=new ut;const E=[L,I],S=new ku;let N=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let k=M[D];return k===void 0&&(k=new Jo,M[D]=k),k.getTargetRaySpace()},this.getControllerGrip=function(D){let k=M[D];return k===void 0&&(k=new Jo,M[D]=k),k.getGripSpace()},this.getHand=function(D){let k=M[D];return k===void 0&&(k=new Jo,M[D]=k),k.getHandSpace()};function ee(D){const k=w.indexOf(D.inputSource);if(k===-1)return;const Q=M[k];Q!==void 0&&(Q.update(D.inputSource,D.frame,c||r),Q.dispatchEvent({type:D.type,data:D.inputSource}))}function he(){i.removeEventListener("select",ee),i.removeEventListener("selectstart",ee),i.removeEventListener("selectend",ee),i.removeEventListener("squeeze",ee),i.removeEventListener("squeezestart",ee),i.removeEventListener("squeezeend",ee),i.removeEventListener("end",he),i.removeEventListener("inputsourceschange",j);for(let D=0;D<M.length;D++){const k=w[D];k!==null&&(w[D]=null,M[D].disconnect(k))}N=null,ne=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){o=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",ee),i.addEventListener("selectstart",ee),i.addEventListener("selectend",ee),i.addEventListener("squeeze",ee),i.addEventListener("squeezestart",ee),i.addEventListener("squeezeend",ee),i.addEventListener("end",he),i.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let Q=null,X=null,oe=null;g.depth&&(oe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=g.stencil?Oi:Pi,X=g.stencil?Fi:si);const Me={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:o};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Me),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new cn(d.textureWidth,d.textureHeight,{format:an,type:Ln,depthTexture:new lc(d.textureWidth,d.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const Q={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new cn(f.framebufferWidth,f.framebufferHeight,{format:an,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),Se.setContext(i),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(D){for(let k=0;k<D.removed.length;k++){const Q=D.removed[k],X=w.indexOf(Q);X>=0&&(w[X]=null,M[X].disconnect(Q))}for(let k=0;k<D.added.length;k++){const Q=D.added[k];let X=w.indexOf(Q);if(X===-1){for(let Me=0;Me<M.length;Me++)if(Me>=w.length){w.push(Q),X=Me;break}else if(w[Me]===null){w[Me]=Q,X=Me;break}if(X===-1)break}const oe=M[X];oe&&oe.connect(Q)}}const $=new b,O=new b;function U(D,k,Q){$.setFromMatrixPosition(k.matrixWorld),O.setFromMatrixPosition(Q.matrixWorld);const X=$.distanceTo(O),oe=k.projectionMatrix.elements,Me=Q.projectionMatrix.elements,Pe=oe[14]/(oe[10]-1),Oe=oe[14]/(oe[10]+1),xe=(oe[9]+1)/oe[5],se=(oe[9]-1)/oe[5],R=(oe[8]-1)/oe[0],ie=(Me[8]+1)/Me[0],G=Pe*R,ae=Pe*ie,Y=X/(-R+ie),we=Y*-R;if(k.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(we),D.translateZ(Y),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),oe[10]===-1)D.projectionMatrix.copy(k.projectionMatrix),D.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const be=Pe+Y,A=Oe+Y,_=G-we,B=ae+(X-we),H=xe*Oe/A*be,q=se*Oe/A*be;D.projectionMatrix.makePerspective(_,B,H,q,be,A),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function W(D,k){k===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(k.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;let k=D.near,Q=D.far;v.texture!==null&&(v.depthNear>0&&(k=v.depthNear),v.depthFar>0&&(Q=v.depthFar)),S.near=I.near=L.near=k,S.far=I.far=L.far=Q,(N!==S.near||ne!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,ne=S.far),L.layers.mask=D.layers.mask|2,I.layers.mask=D.layers.mask|4,S.layers.mask=L.layers.mask|I.layers.mask;const X=D.parent,oe=S.cameras;W(S,X);for(let Me=0;Me<oe.length;Me++)W(oe[Me],X);oe.length===2?U(S,L,I):S.projectionMatrix.copy(L.projectionMatrix),K(D,S,X)};function K(D,k,Q){Q===null?D.matrix.copy(k.matrixWorld):(D.matrix.copy(Q.matrixWorld),D.matrix.invert(),D.matrix.multiply(k.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(k.projectionMatrix),D.projectionMatrixInverse.copy(k.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=as*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(D){l=D,d!==null&&(d.fixedFoveation=D),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=D)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let te=null;function de(D,k){if(h=k.getViewerPose(c||r),m=k,h!==null){const Q=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let X=!1;Q.length!==S.cameras.length&&(S.cameras.length=0,X=!0);for(let Me=0;Me<Q.length;Me++){const Pe=Q[Me];let Oe=null;if(f!==null)Oe=f.getViewport(Pe);else{const se=u.getViewSubImage(d,Pe);Oe=se.viewport,Me===0&&(e.setRenderTargetTextures(y,se.colorTexture,d.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(y))}let xe=E[Me];xe===void 0&&(xe=new Zt,xe.layers.enable(Me),xe.viewport=new ut,E[Me]=xe),xe.matrix.fromArray(Pe.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Pe.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Me===0&&(S.matrix.copy(xe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),X===!0&&S.cameras.push(xe)}const oe=i.enabledFeatures;if(oe&&oe.includes("depth-sensing")){const Me=u.getDepthInformation(Q[0]);Me&&Me.isValid&&Me.texture&&v.init(e,Me,i.renderState)}}for(let Q=0;Q<M.length;Q++){const X=w[Q],oe=M[Q];X!==null&&oe!==void 0&&oe.update(X,k,c||r)}te&&te(D,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),m=null}const Se=new vc;Se.setAnimationLoop(de),this.setAnimationLoop=function(D){te=D},this.dispose=function(){}}}const Kn=new pn,ym=new ft;function Sm(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,sc(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,M,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),u(g,p)):p.isMeshPhongMaterial?(o(g,p),h(g,p)):p.isMeshStandardMaterial?(o(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,w)):p.isMeshMatcapMaterial?(o(g,p),m(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),v(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===kt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===kt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=e.get(p),M=y.envMap,w=y.envMapRotation;M&&(g.envMap.value=M,Kn.copy(w),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),g.envMapRotation.value.setFromMatrix4(ym.makeRotationFromEuler(Kn)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function bm(s,e,t,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const w=M.program;n.uniformBlockBinding(y,w)}function c(y,M){let w=i[y.id];w===void 0&&(m(y),w=h(y),i[y.id]=w,y.addEventListener("dispose",g));const C=M.program;n.updateUBOMapping(y,C);const P=e.render.frame;o[y.id]!==P&&(d(y),o[y.id]=P)}function h(y){const M=u();y.__bindingPointIndex=M;const w=s.createBuffer(),C=y.__size,P=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,C,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,w),w}function u(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const M=i[y.id],w=y.uniforms,C=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let P=0,L=w.length;P<L;P++){const I=Array.isArray(w[P])?w[P]:[w[P]];for(let E=0,S=I.length;E<S;E++){const N=I[E];if(f(N,P,E,C)===!0){const ne=N.__offset,ee=Array.isArray(N.value)?N.value:[N.value];let he=0;for(let j=0;j<ee.length;j++){const $=ee[j],O=v($);typeof $=="number"||typeof $=="boolean"?(N.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,ne+he,N.__data)):$.isMatrix3?(N.__data[0]=$.elements[0],N.__data[1]=$.elements[1],N.__data[2]=$.elements[2],N.__data[3]=0,N.__data[4]=$.elements[3],N.__data[5]=$.elements[4],N.__data[6]=$.elements[5],N.__data[7]=0,N.__data[8]=$.elements[6],N.__data[9]=$.elements[7],N.__data[10]=$.elements[8],N.__data[11]=0):($.toArray(N.__data,he),he+=O.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,M,w,C){const P=y.value,L=M+"_"+w;if(C[L]===void 0)return typeof P=="number"||typeof P=="boolean"?C[L]=P:C[L]=P.clone(),!0;{const I=C[L];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return C[L]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function m(y){const M=y.uniforms;let w=0;const C=16;for(let L=0,I=M.length;L<I;L++){const E=Array.isArray(M[L])?M[L]:[M[L]];for(let S=0,N=E.length;S<N;S++){const ne=E[S],ee=Array.isArray(ne.value)?ne.value:[ne.value];for(let he=0,j=ee.length;he<j;he++){const $=ee[he],O=v($),U=w%C,W=U%O.boundary,K=U+W;w+=W,K!==0&&C-K<O.storage&&(w+=C-K),ne.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=w,w+=O.storage}}}const P=w%C;return P>0&&(w+=C-P),y.__size=w,y.__cache={},this}function v(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function g(y){const M=y.target;M.removeEventListener("dispose",g);const w=r.indexOf(M.__bindingPointIndex);r.splice(w,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete o[M.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);r=[],i={},o={}}return{bind:l,update:c,dispose:p}}class Em{constructor(e={}){const{canvas:t=Ah(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const y=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=Hn,this.toneMappingExposure=1;const w=this;let C=!1,P=0,L=0,I=null,E=-1,S=null;const N=new ut,ne=new ut;let ee=null;const he=new qe(0);let j=0,$=t.width,O=t.height,U=1,W=null,K=null;const te=new ut(0,0,$,O),de=new ut(0,0,$,O);let Se=!1;const D=new na;let k=!1,Q=!1;this.transmissionResolutionScale=1;const X=new ft,oe=new ft,Me=new b,Pe=new ut,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function se(){return I===null?U:1}let R=n;function ie(T,Z){return t.getContext(T,Z)}try{const T={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qr}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Te,!1),R===null){const Z="webgl2";if(R=ie(Z,T),R===null)throw ie(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let G,ae,Y,we,be,A,_,B,H,q,F,re,pe,_e,ye,ve,Ae,Le,Ne,Ie,Ve,Ge,Ze,V;function De(){G=new Up(R),G.init(),Ge=new gm(R,G),ae=new Rp(R,G,e,Ge),Y=new pm(R,G),ae.reverseDepthBuffer&&d&&Y.buffers.depth.setReversed(!0),we=new Op(R),be=new tm,A=new mm(R,G,Y,be,ae,Ge,we),_=new Pp(w),B=new Dp(w),H=new Vu(R),Ze=new Tp(R,H),q=new Np(R,H,we,Ze),F=new zp(R,q,H,we),Ne=new Bp(R,ae,A),ve=new Cp(be),re=new em(w,_,B,G,ae,Ze,ve),pe=new Sm(w,be),_e=new im,ye=new cm(G),Le=new Ep(w,_,B,Y,F,f,l),Ae=new dm(w,F,ae),V=new bm(R,we,ae,Y),Ie=new Ap(R,G,we),Ve=new Fp(R,G,we),we.programs=re.programs,w.capabilities=ae,w.extensions=G,w.properties=be,w.renderLists=_e,w.shadowMap=Ae,w.state=Y,w.info=we}De();const fe=new Mm(w,R);this.xr=fe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const T=G.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=G.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize($,O,!1))},this.getSize=function(T){return T.set($,O)},this.setSize=function(T,Z,ce=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,O=Z,t.width=Math.floor(T*U),t.height=Math.floor(Z*U),ce===!0&&(t.style.width=T+"px",t.style.height=Z+"px"),this.setViewport(0,0,T,Z)},this.getDrawingBufferSize=function(T){return T.set($*U,O*U).floor()},this.setDrawingBufferSize=function(T,Z,ce){$=T,O=Z,U=ce,t.width=Math.floor(T*ce),t.height=Math.floor(Z*ce),this.setViewport(0,0,T,Z)},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(te)},this.setViewport=function(T,Z,ce,ue){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,Z,ce,ue),Y.viewport(N.copy(te).multiplyScalar(U).round())},this.getScissor=function(T){return T.copy(de)},this.setScissor=function(T,Z,ce,ue){T.isVector4?de.set(T.x,T.y,T.z,T.w):de.set(T,Z,ce,ue),Y.scissor(ne.copy(de).multiplyScalar(U).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(T){Y.setScissorTest(Se=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(T=!0,Z=!0,ce=!0){let ue=0;if(T){let J=!1;if(I!==null){const Ce=I.texture.format;J=Ce===Qr||Ce===Jr||Ce===Kr}if(J){const Ce=I.texture.type,Fe=Ce===Ln||Ce===si||Ce===rs||Ce===Fi||Ce===$r||Ce===jr,ze=Le.getClearColor(),He=Le.getClearAlpha(),$e=ze.r,je=ze.g,We=ze.b;Fe?(m[0]=$e,m[1]=je,m[2]=We,m[3]=He,R.clearBufferuiv(R.COLOR,0,m)):(v[0]=$e,v[1]=je,v[2]=We,v[3]=He,R.clearBufferiv(R.COLOR,0,v))}else ue|=R.COLOR_BUFFER_BIT}Z&&(ue|=R.DEPTH_BUFFER_BIT),ce&&(ue|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Le.dispose(),_e.dispose(),ye.dispose(),be.dispose(),_.dispose(),B.dispose(),F.dispose(),Ze.dispose(),V.dispose(),re.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ci),fe.removeEventListener("sessionend",Wi),Ut.stop()};function ge(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=we.autoReset,Z=Ae.enabled,ce=Ae.autoUpdate,ue=Ae.needsUpdate,J=Ae.type;De(),we.autoReset=T,Ae.enabled=Z,Ae.autoUpdate=ce,Ae.needsUpdate=ue,Ae.type=J}function Te(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ke(T){const Z=T.target;Z.removeEventListener("dispose",ke),et(Z)}function et(T){dt(T),be.remove(T)}function dt(T){const Z=be.get(T).programs;Z!==void 0&&(Z.forEach(function(ce){re.releaseProgram(ce)}),T.isShaderMaterial&&re.releaseShaderCache(T))}this.renderBufferDirect=function(T,Z,ce,ue,J,Ce){Z===null&&(Z=Oe);const Fe=J.isMesh&&J.matrixWorld.determinant()<0,ze=xo(T,Z,ce,ue,J);Y.setMaterial(ue,Fe);let He=ce.index,$e=1;if(ue.wireframe===!0){if(He=q.getWireframeAttribute(ce),He===void 0)return;$e=2}const je=ce.drawRange,We=ce.attributes.position;let st=je.start*$e,at=(je.start+je.count)*$e;Ce!==null&&(st=Math.max(st,Ce.start*$e),at=Math.min(at,(Ce.start+Ce.count)*$e)),He!==null?(st=Math.max(st,0),at=Math.min(at,He.count)):We!=null&&(st=Math.max(st,0),at=Math.min(at,We.count));const Mt=at-st;if(Mt<0||Mt===1/0)return;Ze.setup(J,ue,ze,ce,He);let _t,rt=Ie;if(He!==null&&(_t=H.get(He),rt=Ve,rt.setIndex(_t)),J.isMesh)ue.wireframe===!0?(Y.setLineWidth(ue.wireframeLinewidth*se()),rt.setMode(R.LINES)):rt.setMode(R.TRIANGLES);else if(J.isLine){let Xe=ue.linewidth;Xe===void 0&&(Xe=1),Y.setLineWidth(Xe*se()),J.isLineSegments?rt.setMode(R.LINES):J.isLineLoop?rt.setMode(R.LINE_LOOP):rt.setMode(R.LINE_STRIP)}else J.isPoints?rt.setMode(R.POINTS):J.isSprite&&rt.setMode(R.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)rt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))rt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Xe=J._multiDrawStarts,It=J._multiDrawCounts,lt=J._multiDrawCount,tn=He?H.get(He).bytesPerElement:1,hi=be.get(ue).currentProgram.getUniforms();for(let Wt=0;Wt<lt;Wt++)hi.setValue(R,"_gl_DrawID",Wt),rt.render(Xe[Wt]/tn,It[Wt])}else if(J.isInstancedMesh)rt.renderInstances(st,Mt,J.count);else if(ce.isInstancedBufferGeometry){const Xe=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,It=Math.min(ce.instanceCount,Xe);rt.renderInstances(st,Mt,It)}else rt.render(st,Mt)};function it(T,Z,ce){T.transparent===!0&&T.side===wt&&T.forceSinglePass===!1?(T.side=kt,T.needsUpdate=!0,In(T,Z,ce),T.side=Vn,T.needsUpdate=!0,In(T,Z,ce),T.side=wt):In(T,Z,ce)}this.compile=function(T,Z,ce=null){ce===null&&(ce=T),p=ye.get(ce),p.init(Z),M.push(p),ce.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),T!==ce&&T.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(p.pushLight(J),J.castShadow&&p.pushShadow(J))}),p.setupLights();const ue=new Set;return T.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ce=J.material;if(Ce)if(Array.isArray(Ce))for(let Fe=0;Fe<Ce.length;Fe++){const ze=Ce[Fe];it(ze,ce,J),ue.add(ze)}else it(Ce,ce,J),ue.add(Ce)}),M.pop(),p=null,ue},this.compileAsync=function(T,Z,ce=null){const ue=this.compile(T,Z,ce);return new Promise(J=>{function Ce(){if(ue.forEach(function(Fe){be.get(Fe).currentProgram.isReady()&&ue.delete(Fe)}),ue.size===0){J(T);return}setTimeout(Ce,10)}G.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Lt=null;function $t(T){Lt&&Lt(T)}function ci(){Ut.stop()}function Wi(){Ut.start()}const Ut=new vc;Ut.setAnimationLoop($t),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(T){Lt=T,fe.setAnimationLoop(T),T===null?Ut.stop():Ut.start()},fe.addEventListener("sessionstart",ci),fe.addEventListener("sessionend",Wi),this.render=function(T,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(Z),Z=fe.getCamera()),T.isScene===!0&&T.onBeforeRender(w,T,Z,I),p=ye.get(T,M.length),p.init(Z),M.push(p),oe.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),D.setFromProjectionMatrix(oe),Q=this.localClippingEnabled,k=ve.init(this.clippingPlanes,Q),g=_e.get(T,y.length),g.init(),y.push(g),fe.enabled===!0&&fe.isPresenting===!0){const Ce=w.xr.getDepthSensingMesh();Ce!==null&&Vt(Ce,Z,-1/0,w.sortObjects)}Vt(T,Z,0,w.sortObjects),g.finish(),w.sortObjects===!0&&g.sort(W,K),xe=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,xe&&Le.addToRenderList(g,T),this.info.render.frame++,k===!0&&ve.beginShadows();const ce=p.state.shadowsArray;Ae.render(ce,T,Z),k===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=g.opaque,J=g.transmissive;if(p.setupLights(),Z.isArrayCamera){const Ce=Z.cameras;if(J.length>0)for(let Fe=0,ze=Ce.length;Fe<ze;Fe++){const He=Ce[Fe];Xi(ue,J,T,He)}xe&&Le.render(T);for(let Fe=0,ze=Ce.length;Fe<ze;Fe++){const He=Ce[Fe];xn(g,T,He,He.viewport)}}else J.length>0&&Xi(ue,J,T,Z),xe&&Le.render(T),xn(g,T,Z);I!==null&&L===0&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(w,T,Z),Ze.resetDefaultState(),E=-1,S=null,M.pop(),M.length>0?(p=M[M.length-1],k===!0&&ve.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function Vt(T,Z,ce,ue){if(T.visible===!1)return;if(T.layers.test(Z.layers)){if(T.isGroup)ce=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(Z);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||D.intersectsSprite(T)){ue&&Pe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(oe);const Fe=F.update(T),ze=T.material;ze.visible&&g.push(T,Fe,ze,ce,Pe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||D.intersectsObject(T))){const Fe=F.update(T),ze=T.material;if(ue&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Pe.copy(T.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Pe.copy(Fe.boundingSphere.center)),Pe.applyMatrix4(T.matrixWorld).applyMatrix4(oe)),Array.isArray(ze)){const He=Fe.groups;for(let $e=0,je=He.length;$e<je;$e++){const We=He[$e],st=ze[We.materialIndex];st&&st.visible&&g.push(T,Fe,st,ce,Pe.z,We)}}else ze.visible&&g.push(T,Fe,ze,ce,Pe.z,null)}}const Ce=T.children;for(let Fe=0,ze=Ce.length;Fe<ze;Fe++)Vt(Ce[Fe],Z,ce,ue)}function xn(T,Z,ce,ue){const J=T.opaque,Ce=T.transmissive,Fe=T.transparent;p.setupLightsView(ce),k===!0&&ve.setGlobalState(w.clippingPlanes,ce),ue&&Y.viewport(N.copy(ue)),J.length>0&&Wn(J,Z,ce),Ce.length>0&&Wn(Ce,Z,ce),Fe.length>0&&Wn(Fe,Z,ce),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function Xi(T,Z,ce,ue){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ue.id]===void 0&&(p.state.transmissionRenderTarget[ue.id]=new cn(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?An:Ln,minFilter:ni,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const Ce=p.state.transmissionRenderTarget[ue.id],Fe=ue.viewport||N;Ce.setSize(Fe.z*w.transmissionResolutionScale,Fe.w*w.transmissionResolutionScale);const ze=w.getRenderTarget();w.setRenderTarget(Ce),w.getClearColor(he),j=w.getClearAlpha(),j<1&&w.setClearColor(16777215,.5),w.clear(),xe&&Le.render(ce);const He=w.toneMapping;w.toneMapping=Hn;const $e=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),p.setupLightsView(ue),k===!0&&ve.setGlobalState(w.clippingPlanes,ue),Wn(T,ce,ue),A.updateMultisampleRenderTarget(Ce),A.updateRenderTargetMipmap(Ce),G.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let We=0,st=Z.length;We<st;We++){const at=Z[We],Mt=at.object,_t=at.geometry,rt=at.material,Xe=at.group;if(rt.side===wt&&Mt.layers.test(ue.layers)){const It=rt.side;rt.side=kt,rt.needsUpdate=!0,ws(Mt,ce,ue,_t,rt,Xe),rt.side=It,rt.needsUpdate=!0,je=!0}}je===!0&&(A.updateMultisampleRenderTarget(Ce),A.updateRenderTargetMipmap(Ce))}w.setRenderTarget(ze),w.setClearColor(he,j),$e!==void 0&&(ue.viewport=$e),w.toneMapping=He}function Wn(T,Z,ce){const ue=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,Ce=T.length;J<Ce;J++){const Fe=T[J],ze=Fe.object,He=Fe.geometry,$e=ue===null?Fe.material:ue,je=Fe.group;ze.layers.test(ce.layers)&&ws(ze,Z,ce,He,$e,je)}}function ws(T,Z,ce,ue,J,Ce){T.onBeforeRender(w,Z,ce,ue,J,Ce),T.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),J.onBeforeRender(w,Z,ce,ue,T,Ce),J.transparent===!0&&J.side===wt&&J.forceSinglePass===!1?(J.side=kt,J.needsUpdate=!0,w.renderBufferDirect(ce,Z,ue,J,T,Ce),J.side=Vn,J.needsUpdate=!0,w.renderBufferDirect(ce,Z,ue,J,T,Ce),J.side=wt):w.renderBufferDirect(ce,Z,ue,J,T,Ce),T.onAfterRender(w,Z,ce,ue,J,Ce)}function In(T,Z,ce){Z.isScene!==!0&&(Z=Oe);const ue=be.get(T),J=p.state.lights,Ce=p.state.shadowsArray,Fe=J.state.version,ze=re.getParameters(T,J.state,Ce,Z,ce),He=re.getProgramCacheKey(ze);let $e=ue.programs;ue.environment=T.isMeshStandardMaterial?Z.environment:null,ue.fog=Z.fog,ue.envMap=(T.isMeshStandardMaterial?B:_).get(T.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&T.envMap===null?Z.environmentRotation:T.envMapRotation,$e===void 0&&(T.addEventListener("dispose",ke),$e=new Map,ue.programs=$e);let je=$e.get(He);if(je!==void 0){if(ue.currentProgram===je&&ue.lightsStateVersion===Fe)return Ms(T,ze),je}else ze.uniforms=re.getUniforms(T),T.onBeforeCompile(ze,w),je=re.acquireProgram(ze,He),$e.set(He,je),ue.uniforms=ze.uniforms;const We=ue.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(We.clippingPlanes=ve.uniform),Ms(T,ze),ue.needsLights=Tc(T),ue.lightsStateVersion=Fe,ue.needsLights&&(We.ambientLightColor.value=J.state.ambient,We.lightProbe.value=J.state.probe,We.directionalLights.value=J.state.directional,We.directionalLightShadows.value=J.state.directionalShadow,We.spotLights.value=J.state.spot,We.spotLightShadows.value=J.state.spotShadow,We.rectAreaLights.value=J.state.rectArea,We.ltc_1.value=J.state.rectAreaLTC1,We.ltc_2.value=J.state.rectAreaLTC2,We.pointLights.value=J.state.point,We.pointLightShadows.value=J.state.pointShadow,We.hemisphereLights.value=J.state.hemi,We.directionalShadowMap.value=J.state.directionalShadowMap,We.directionalShadowMatrix.value=J.state.directionalShadowMatrix,We.spotShadowMap.value=J.state.spotShadowMap,We.spotLightMatrix.value=J.state.spotLightMatrix,We.spotLightMap.value=J.state.spotLightMap,We.pointShadowMap.value=J.state.pointShadowMap,We.pointShadowMatrix.value=J.state.pointShadowMatrix),ue.currentProgram=je,ue.uniformsList=null,je}function Dn(T){if(T.uniformsList===null){const Z=T.currentProgram.getUniforms();T.uniformsList=no.seqWithValue(Z.seq,T.uniforms)}return T.uniformsList}function Ms(T,Z){const ce=be.get(T);ce.outputColorSpace=Z.outputColorSpace,ce.batching=Z.batching,ce.batchingColor=Z.batchingColor,ce.instancing=Z.instancing,ce.instancingColor=Z.instancingColor,ce.instancingMorph=Z.instancingMorph,ce.skinning=Z.skinning,ce.morphTargets=Z.morphTargets,ce.morphNormals=Z.morphNormals,ce.morphColors=Z.morphColors,ce.morphTargetsCount=Z.morphTargetsCount,ce.numClippingPlanes=Z.numClippingPlanes,ce.numIntersection=Z.numClipIntersection,ce.vertexAlphas=Z.vertexAlphas,ce.vertexTangents=Z.vertexTangents,ce.toneMapping=Z.toneMapping}function xo(T,Z,ce,ue,J){Z.isScene!==!0&&(Z=Oe),A.resetTextureUnits();const Ce=Z.fog,Fe=ue.isMeshStandardMaterial?Z.environment:null,ze=I===null?w.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Bi,He=(ue.isMeshStandardMaterial?B:_).get(ue.envMap||Fe),$e=ue.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,je=!!ce.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),We=!!ce.morphAttributes.position,st=!!ce.morphAttributes.normal,at=!!ce.morphAttributes.color;let Mt=Hn;ue.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Mt=w.toneMapping);const _t=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,rt=_t!==void 0?_t.length:0,Xe=be.get(ue),It=p.state.lights;if(k===!0&&(Q===!0||T!==S)){const Ot=T===S&&ue.id===E;ve.setState(ue,T,Ot)}let lt=!1;ue.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==It.state.version||Xe.outputColorSpace!==ze||J.isBatchedMesh&&Xe.batching===!1||!J.isBatchedMesh&&Xe.batching===!0||J.isBatchedMesh&&Xe.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Xe.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Xe.instancing===!1||!J.isInstancedMesh&&Xe.instancing===!0||J.isSkinnedMesh&&Xe.skinning===!1||!J.isSkinnedMesh&&Xe.skinning===!0||J.isInstancedMesh&&Xe.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Xe.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Xe.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Xe.instancingMorph===!1&&J.morphTexture!==null||Xe.envMap!==He||ue.fog===!0&&Xe.fog!==Ce||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ve.numPlanes||Xe.numIntersection!==ve.numIntersection)||Xe.vertexAlphas!==$e||Xe.vertexTangents!==je||Xe.morphTargets!==We||Xe.morphNormals!==st||Xe.morphColors!==at||Xe.toneMapping!==Mt||Xe.morphTargetsCount!==rt)&&(lt=!0):(lt=!0,Xe.__version=ue.version);let tn=Xe.currentProgram;lt===!0&&(tn=In(ue,Z,J));let hi=!1,Wt=!1,qi=!1;const mt=tn.getUniforms(),jt=Xe.uniforms;if(Y.useProgram(tn.program)&&(hi=!0,Wt=!0,qi=!0),ue.id!==E&&(E=ue.id,Wt=!0),hi||S!==T){Y.buffers.depth.getReversed()?(X.copy(T.projectionMatrix),Ch(X),Ph(X),mt.setValue(R,"projectionMatrix",X)):mt.setValue(R,"projectionMatrix",T.projectionMatrix),mt.setValue(R,"viewMatrix",T.matrixWorldInverse);const Gt=mt.map.cameraPosition;Gt!==void 0&&Gt.setValue(R,Me.setFromMatrixPosition(T.matrixWorld)),ae.logarithmicDepthBuffer&&mt.setValue(R,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&mt.setValue(R,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,Wt=!0,qi=!0)}if(J.isSkinnedMesh){mt.setOptional(R,J,"bindMatrix"),mt.setOptional(R,J,"bindMatrixInverse");const Ot=J.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),mt.setValue(R,"boneTexture",Ot.boneTexture,A))}J.isBatchedMesh&&(mt.setOptional(R,J,"batchingTexture"),mt.setValue(R,"batchingTexture",J._matricesTexture,A),mt.setOptional(R,J,"batchingIdTexture"),mt.setValue(R,"batchingIdTexture",J._indirectTexture,A),mt.setOptional(R,J,"batchingColorTexture"),J._colorsTexture!==null&&mt.setValue(R,"batchingColorTexture",J._colorsTexture,A));const Kt=ce.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&Ne.update(J,ce,tn),(Wt||Xe.receiveShadow!==J.receiveShadow)&&(Xe.receiveShadow=J.receiveShadow,mt.setValue(R,"receiveShadow",J.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(jt.envMap.value=He,jt.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&Z.environment!==null&&(jt.envMapIntensity.value=Z.environmentIntensity),Wt&&(mt.setValue(R,"toneMappingExposure",w.toneMappingExposure),Xe.needsLights&&ys(jt,qi),Ce&&ue.fog===!0&&pe.refreshFogUniforms(jt,Ce),pe.refreshMaterialUniforms(jt,ue,U,O,p.state.transmissionRenderTarget[T.id]),no.upload(R,Dn(Xe),jt,A)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(no.upload(R,Dn(Xe),jt,A),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&mt.setValue(R,"center",J.center),mt.setValue(R,"modelViewMatrix",J.modelViewMatrix),mt.setValue(R,"normalMatrix",J.normalMatrix),mt.setValue(R,"modelMatrix",J.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const Ot=ue.uniformsGroups;for(let Gt=0,vo=Ot.length;Gt<vo;Gt++){const Xn=Ot[Gt];V.update(Xn,tn),V.bind(Xn,tn)}}return tn}function ys(T,Z){T.ambientLightColor.needsUpdate=Z,T.lightProbe.needsUpdate=Z,T.directionalLights.needsUpdate=Z,T.directionalLightShadows.needsUpdate=Z,T.pointLights.needsUpdate=Z,T.pointLightShadows.needsUpdate=Z,T.spotLights.needsUpdate=Z,T.spotLightShadows.needsUpdate=Z,T.rectAreaLights.needsUpdate=Z,T.hemisphereLights.needsUpdate=Z}function Tc(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,Z,ce){be.get(T.texture).__webglTexture=Z,be.get(T.depthTexture).__webglTexture=ce;const ue=be.get(T);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=ce===void 0,ue.__autoAllocateDepthBuffer||G.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,Z){const ce=be.get(T);ce.__webglFramebuffer=Z,ce.__useDefaultFramebuffer=Z===void 0};const Ac=R.createFramebuffer();this.setRenderTarget=function(T,Z=0,ce=0){I=T,P=Z,L=ce;let ue=!0,J=null,Ce=!1,Fe=!1;if(T){const He=be.get(T);if(He.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(R.FRAMEBUFFER,null),ue=!1;else if(He.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(He.__hasExternalTextures)A.rebindTextures(T,be.get(T.texture).__webglTexture,be.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const We=T.depthTexture;if(He.__boundDepthTexture!==We){if(We!==null&&be.has(We)&&(T.width!==We.image.width||T.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const $e=T.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Fe=!0);const je=be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(je[Z])?J=je[Z][ce]:J=je[Z],Ce=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?J=be.get(T).__webglMultisampledFramebuffer:Array.isArray(je)?J=je[ce]:J=je,N.copy(T.viewport),ne.copy(T.scissor),ee=T.scissorTest}else N.copy(te).multiplyScalar(U).floor(),ne.copy(de).multiplyScalar(U).floor(),ee=Se;if(ce!==0&&(J=Ac),Y.bindFramebuffer(R.FRAMEBUFFER,J)&&ue&&Y.drawBuffers(T,J),Y.viewport(N),Y.scissor(ne),Y.setScissorTest(ee),Ce){const He=be.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+Z,He.__webglTexture,ce)}else if(Fe){const He=be.get(T.texture),$e=Z;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,He.__webglTexture,ce,$e)}else if(T!==null&&ce!==0){const He=be.get(T.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,He.__webglTexture,ce)}E=-1},this.readRenderTargetPixels=function(T,Z,ce,ue,J,Ce,Fe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze){Y.bindFramebuffer(R.FRAMEBUFFER,ze);try{const He=T.texture,$e=He.format,je=He.type;if(!ae.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=T.width-ue&&ce>=0&&ce<=T.height-J&&R.readPixels(Z,ce,ue,J,Ge.convert($e),Ge.convert(je),Ce)}finally{const He=I!==null?be.get(I).__webglFramebuffer:null;Y.bindFramebuffer(R.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(T,Z,ce,ue,J,Ce,Fe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze){const He=T.texture,$e=He.format,je=He.type;if(!ae.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=T.width-ue&&ce>=0&&ce<=T.height-J){Y.bindFramebuffer(R.FRAMEBUFFER,ze);const We=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,We),R.bufferData(R.PIXEL_PACK_BUFFER,Ce.byteLength,R.STREAM_READ),R.readPixels(Z,ce,ue,J,Ge.convert($e),Ge.convert(je),0);const st=I!==null?be.get(I).__webglFramebuffer:null;Y.bindFramebuffer(R.FRAMEBUFFER,st);const at=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Rh(R,at,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,We),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Ce),R.deleteBuffer(We),R.deleteSync(at),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,Z=null,ce=0){T.isTexture!==!0&&(Ti("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,T=arguments[1]);const ue=Math.pow(2,-ce),J=Math.floor(T.image.width*ue),Ce=Math.floor(T.image.height*ue),Fe=Z!==null?Z.x:0,ze=Z!==null?Z.y:0;A.setTexture2D(T,0),R.copyTexSubImage2D(R.TEXTURE_2D,ce,0,0,Fe,ze,J,Ce),Y.unbindTexture()};const Rc=R.createFramebuffer(),Cc=R.createFramebuffer();this.copyTextureToTexture=function(T,Z,ce=null,ue=null,J=0,Ce=null){T.isTexture!==!0&&(Ti("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,T=arguments[1],Z=arguments[2],Ce=arguments[3]||0,ce=null),Ce===null&&(J!==0?(Ti("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ce=J,J=0):Ce=0);let Fe,ze,He,$e,je,We,st,at,Mt;const _t=T.isCompressedTexture?T.mipmaps[Ce]:T.image;if(ce!==null)Fe=ce.max.x-ce.min.x,ze=ce.max.y-ce.min.y,He=ce.isBox3?ce.max.z-ce.min.z:1,$e=ce.min.x,je=ce.min.y,We=ce.isBox3?ce.min.z:0;else{const Kt=Math.pow(2,-J);Fe=Math.floor(_t.width*Kt),ze=Math.floor(_t.height*Kt),T.isDataArrayTexture?He=_t.depth:T.isData3DTexture?He=Math.floor(_t.depth*Kt):He=1,$e=0,je=0,We=0}ue!==null?(st=ue.x,at=ue.y,Mt=ue.z):(st=0,at=0,Mt=0);const rt=Ge.convert(Z.format),Xe=Ge.convert(Z.type);let It;Z.isData3DTexture?(A.setTexture3D(Z,0),It=R.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(A.setTexture2DArray(Z,0),It=R.TEXTURE_2D_ARRAY):(A.setTexture2D(Z,0),It=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,Z.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,Z.unpackAlignment);const lt=R.getParameter(R.UNPACK_ROW_LENGTH),tn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),hi=R.getParameter(R.UNPACK_SKIP_PIXELS),Wt=R.getParameter(R.UNPACK_SKIP_ROWS),qi=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,_t.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,_t.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,$e),R.pixelStorei(R.UNPACK_SKIP_ROWS,je),R.pixelStorei(R.UNPACK_SKIP_IMAGES,We);const mt=T.isDataArrayTexture||T.isData3DTexture,jt=Z.isDataArrayTexture||Z.isData3DTexture;if(T.isDepthTexture){const Kt=be.get(T),Ot=be.get(Z),Gt=be.get(Kt.__renderTarget),vo=be.get(Ot.__renderTarget);Y.bindFramebuffer(R.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Y.bindFramebuffer(R.DRAW_FRAMEBUFFER,vo.__webglFramebuffer);for(let Xn=0;Xn<He;Xn++)mt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,be.get(T).__webglTexture,J,We+Xn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,be.get(Z).__webglTexture,Ce,Mt+Xn)),R.blitFramebuffer($e,je,Fe,ze,st,at,Fe,ze,R.DEPTH_BUFFER_BIT,R.NEAREST);Y.bindFramebuffer(R.READ_FRAMEBUFFER,null),Y.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(J!==0||T.isRenderTargetTexture||be.has(T)){const Kt=be.get(T),Ot=be.get(Z);Y.bindFramebuffer(R.READ_FRAMEBUFFER,Rc),Y.bindFramebuffer(R.DRAW_FRAMEBUFFER,Cc);for(let Gt=0;Gt<He;Gt++)mt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Kt.__webglTexture,J,We+Gt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Kt.__webglTexture,J),jt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ot.__webglTexture,Ce,Mt+Gt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ot.__webglTexture,Ce),J!==0?R.blitFramebuffer($e,je,Fe,ze,st,at,Fe,ze,R.COLOR_BUFFER_BIT,R.NEAREST):jt?R.copyTexSubImage3D(It,Ce,st,at,Mt+Gt,$e,je,Fe,ze):R.copyTexSubImage2D(It,Ce,st,at,$e,je,Fe,ze);Y.bindFramebuffer(R.READ_FRAMEBUFFER,null),Y.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else jt?T.isDataTexture||T.isData3DTexture?R.texSubImage3D(It,Ce,st,at,Mt,Fe,ze,He,rt,Xe,_t.data):Z.isCompressedArrayTexture?R.compressedTexSubImage3D(It,Ce,st,at,Mt,Fe,ze,He,rt,_t.data):R.texSubImage3D(It,Ce,st,at,Mt,Fe,ze,He,rt,Xe,_t):T.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Ce,st,at,Fe,ze,rt,Xe,_t.data):T.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Ce,st,at,_t.width,_t.height,rt,_t.data):R.texSubImage2D(R.TEXTURE_2D,Ce,st,at,Fe,ze,rt,Xe,_t);R.pixelStorei(R.UNPACK_ROW_LENGTH,lt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,tn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,hi),R.pixelStorei(R.UNPACK_SKIP_ROWS,Wt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,qi),Ce===0&&Z.generateMipmaps&&R.generateMipmap(It),Y.unbindTexture()},this.copyTextureToTexture3D=function(T,Z,ce=null,ue=null,J=0){return T.isTexture!==!0&&(Ti("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ce=arguments[0]||null,ue=arguments[1]||null,T=arguments[2],Z=arguments[3],J=arguments[4]||0),Ti('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,Z,ce,ue,J)},this.initRenderTarget=function(T){be.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Y.unbindTexture()},this.resetState=function(){P=0,L=0,I=null,Y.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}const Sc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Vi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Tm=new ha(-1,1,1,-1,0,1);class Am extends St{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}}const Rm=new Am;class da{constructor(e){this._mesh=new x(Rm,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Tm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Cm extends Vi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ls.clone(e.uniforms),this.material=new bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new da(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class bl extends Vi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),o.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(i.EQUAL,1,4294967295),o.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),o.buffers.stencil.setLocked(!0)}}class Pm extends Vi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Lm{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Re);this._width=n.width,this._height=n.height,t=new cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:An}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cm(Sc),this.copyPass.material.blending=Tn,this.clock=new xc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,o=this.passes.length;i<o;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}bl!==void 0&&(r instanceof bl?n=!0:r instanceof Pm&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Im extends Vi{constructor(e,t,n=null,i=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new qe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=i}}const Dm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new qe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ki extends Vi{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Re(e.x,e.y):new Re(256,256),this.clearColor=new qe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new cn(o,r,{type:An}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new cn(o,r,{type:An});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new cn(o,r,{type:An});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),r=Math.round(r/2)}const a=Dm;this.highPassUniforms=ls.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new bt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Re(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Sc;this.copyUniforms=ls.clone(h.uniforms),this.blendMaterial=new bt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:so,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new qe,this.oldClearAlpha=1,this.basic=new pt,this.fsQuad=new da(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,i),this.renderTargetsVertical[o].setSize(n,i),this.separableBlurMaterials[o].uniforms.invSize.value=new Re(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,o){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ki.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ki.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new bt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Re(.5,.5)},direction:{value:new Re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ki.BlurDirectionX=new Re(1,0);ki.BlurDirectionY=new Re(0,1);const Um={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Nm extends Vi{constructor(){super();const e=Um;this.uniforms=ls.clone(e.uniforms),this.material=new Nu({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new da(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ul?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Nl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Fl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Yr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ol?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Bl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class El{constructor(e={minX:-60,maxX:60,minZ:-60,maxZ:60}){this.boxes=[],this.walkables=[],this.bounds=e,this.heightFn=()=>0}setHeightFunction(e){this.heightFn=e}addBox(e,t,n,i,o,r,a="solid"){const l=i*.5,c=o*.5,h=r*.5;this.boxes.push({minX:e-l,maxX:e+l,minY:t-c,maxY:t+c,minZ:n-h,maxZ:n+h,tag:a})}addBoxMinMax(e,t,n,i,o,r,a="solid"){this.boxes.push({minX:e,minY:t,minZ:n,maxX:i,maxY:o,maxZ:r,tag:a})}addWalkable(e,t,n,i,o){this.walkables.push({minX:e-n*.5,maxX:e+n*.5,minZ:t-i*.5,maxZ:t+i*.5,topY:o})}getFloorHeight(e,t,n=0){let i=this.heightFn(e,t);for(const o of this.walkables)e>=o.minX&&e<=o.maxX&&t>=o.minZ&&t<=o.maxZ&&n>=o.topY-.65&&(i=Math.max(i,o.topY));return i}resolveHorizontal(e,t,n,i=1.75){e.x=Math.max(this.bounds.minX+t,Math.min(this.bounds.maxX-t,e.x)),e.z=Math.max(this.bounds.minZ+t,Math.min(this.bounds.maxZ-t,e.z));for(let o=0;o<2;o++)for(const r of this.boxes){if(n+i<=r.minY+.05||n>=r.maxY-.15)continue;const a=Math.max(r.minX,Math.min(e.x,r.maxX)),l=Math.max(r.minZ,Math.min(e.z,r.maxZ)),c=e.x-a,h=e.z-l,u=c*c+h*h;if(u<t*t)if(u>1e-5){const d=Math.sqrt(u),f=t-d;e.x+=c/d*f,e.z+=h/d*f}else{const d=Math.abs(e.x-r.minX),f=Math.abs(r.maxX-e.x),m=Math.abs(e.z-r.minZ),v=Math.abs(r.maxZ-e.z),g=Math.min(d,f,m,v);g===d?e.x=r.minX-t:g===f?e.x=r.maxX+t:g===m?e.z=r.minZ-t:e.z=r.maxZ+t}}}raycast(e,t,n=200){let i=n,o=null,r=new b(0,1,0);const a=t.x!==0?1/t.x:1e9,l=t.y!==0?1/t.y:1e9,c=t.z!==0?1/t.z:1e9;for(const u of this.boxes){const d=(u.minX-e.x)*a,f=(u.maxX-e.x)*a,m=(u.minY-e.y)*l,v=(u.maxY-e.y)*l,g=(u.minZ-e.z)*c,p=(u.maxZ-e.z)*c,y=Math.min(d,f),M=Math.max(d,f),w=Math.min(m,v),C=Math.max(m,v),P=Math.min(g,p),L=Math.max(g,p),I=Math.max(y,w,P),E=Math.min(M,C,L);E>=0&&I<=E&&I>.02&&I<i&&(i=I,o=u,I===y?r.set(t.x>0?-1:1,0,0):I===w?r.set(0,t.y>0?-1:1,0):r.set(0,0,t.z>0?-1:1))}if(t.y<-.001){const d=(this.heightFn(e.x,e.z)-e.y)/t.y;d>.02&&d<i&&(i=d,o={tag:"ground"},r.set(0,1,0))}if(!o)return null;const h=e.clone().addScaledVector(t,i);return{hit:!0,dist:i,point:h,normal:r,tag:o.tag}}hasLineOfSight(e,t){const n=new b().subVectors(t,e),i=n.length();return i<.01?!0:(n.divideScalar(i),!this.raycast(e,n,i-.25))}}class Fm{constructor(e){this.scene=e,this.bursts=[],this.tracers=[],this.rings=[],this.ambient=null,this.ambientVel=[],this.ambientBounds=null,this.tumbleweeds=[],this.mistEmitters=[],this.sharedBoxGeo=new z(1,1,1),this.sharedSphereGeo=new Ke(.5,6,6)}initAmbient(e,t){this.ambientBounds=t;const n=e==="sakura"?520:e==="snow"?620:e==="alpine"?420:340,i=new Float32Array(n*3),o=new Float32Array(n*3);this.ambientVel=[];const r=new qe(e==="sakura"?16758735:e==="snow"?16777215:e==="aegean"?16774338:e==="alpine"?15268351:16765578),a=new qe(e==="sakura"?16770284:e==="snow"?13363455:e==="aegean"?10088703:e==="alpine"?16774604:14917204),l=t.maxX-t.minX,c=t.maxZ-t.minZ,h=new qe;for(let f=0;f<n;f++)i[f*3]=t.minX+Math.random()*l,i[f*3+1]=.5+Math.random()*16,i[f*3+2]=t.minZ+Math.random()*c,h.copy(r).lerp(a,Math.random()),o[f*3]=h.r,o[f*3+1]=h.g,o[f*3+2]=h.b,e==="sakura"?this.ambientVel.push({vx:.9+Math.random()*1.1,vy:-(.55+Math.random()*.7),vz:.35+Math.random()*.6,phase:Math.random()*Math.PI*2}):e==="snow"?this.ambientVel.push({vx:.5+Math.random()*.9,vy:-(1.1+Math.random()*1.2),vz:-.4+Math.random()*.8,phase:Math.random()*Math.PI*2}):e==="alpine"||e==="aegean"?this.ambientVel.push({vx:.4+Math.random()*.7,vy:-.15+Math.random()*.35,vz:-.3+Math.random()*.6,phase:Math.random()*Math.PI*2}):this.ambientVel.push({vx:1.4+Math.random()*1.5,vy:-.05+Math.random()*.25,vz:-.3+Math.random()*.6,phase:Math.random()*Math.PI*2});const u=new St;u.setAttribute("position",new en(i,3)),u.setAttribute("color",new en(o,3));const d=new ac({size:e==="sakura"?.26:e==="snow"?.22:e==="alpine"?.19:.16,vertexColors:!0,transparent:!0,opacity:e==="sakura"||e==="snow"?.9:.68,depthWrite:!1});this.ambient=new tu(u,d),this.scene.add(this.ambient)}addTumbleweed(e,t=1){const n=new Ye,i=new le({color:8215864,roughness:.95,wireframe:!0}),o=new x(new ms(.65,1),i),r=new x(new fn(.72,0),i);n.add(o,r),n.position.copy(e),this.scene.add(n),this.tumbleweeds.push({mesh:n,vx:t*(2.6+Math.random()*1.4),vz:(Math.random()-.5)*.8,bouncePhase:Math.random()*Math.PI*2})}addMistEmitter(e,t=3.5){this.mistEmitters.push({pos:e.clone(),radius:t,timer:0})}spawnImpact(e,t=16764006,n=12,i=7){for(let o=0;o<n;o++){const r=new pt({color:t,transparent:!0,opacity:1}),a=new x(this.sharedBoxGeo,r),l=.06+Math.random()*.09;a.scale.set(l,l,l),a.position.copy(e);const c=new b((Math.random()-.5)*2,Math.random()*1.4+.3,(Math.random()-.5)*2).normalize().multiplyScalar(i*(.4+Math.random()*.8));this.scene.add(a),this.bursts.push({mesh:a,vel:c,gravity:15,life:.28+Math.random()*.32,maxLife:.6,grow:0})}}spawnSmoke(e,t=14537926,n=6,i=.4){for(let o=0;o<n;o++){const r=new pt({color:t,transparent:!0,opacity:.55,depthWrite:!1}),a=new x(this.sharedSphereGeo,r),l=i*(.6+Math.random()*.7);a.scale.set(l,l,l),a.position.copy(e).add(new b((Math.random()-.5)*.3,(Math.random()-.5)*.3,(Math.random()-.5)*.3));const c=new b((Math.random()-.5)*1.4,1.1+Math.random()*1.6,(Math.random()-.5)*1.4);this.scene.add(a),this.bursts.push({mesh:a,vel:c,gravity:-.8,life:.45+Math.random()*.45,maxLife:.9,grow:1.6})}}spawnExplosion(e,t=6){this.spawnImpact(e,16756275,28,14),this.spawnImpact(e,16729364,22,10),this.spawnSmoke(e,3681833,14,1.3);const n=new la(.4,.9,28);n.rotateX(-Math.PI/2);const i=new pt({color:16757575,transparent:!0,opacity:.9,side:wt,depthWrite:!1}),o=new x(n,i);o.position.copy(e),o.position.y+=.25,this.scene.add(o),this.rings.push({mesh:o,life:.45,maxLife:.45,targetScale:t*1.4});const r=new pt({color:16770196,transparent:!0,opacity:.95}),a=new x(new Ke(1,12,10),r);a.position.copy(e),this.scene.add(a),this.rings.push({mesh:a,life:.25,maxLife:.25,targetScale:t*.72})}spawnTracer(e,t,n=16770457,i=.085){const o=new St().setFromPoints([e,t]),r=new Or({color:n,transparent:!0,opacity:.95}),a=new ka(o,r);this.scene.add(a),this.tracers.push({line:a,life:i,maxLife:i})}spawnSlashArc(e,t,n,i=14677759){const o=[];for(let c=0;c<=12;c++){const h=-1.05+c/12*2.1,u=e.clone().addScaledVector(t,Math.cos(h)*1.9).addScaledVector(n,Math.sin(h)*1.7);u.y+=Math.sin(h)*.22-.15,o.push(u)}const r=new St().setFromPoints(o),a=new Or({color:i,transparent:!0,opacity:1}),l=new ka(r,a);this.scene.add(l),this.tracers.push({line:l,life:.16,maxLife:.16})}update(e,t){if(this.ambient&&this.ambientBounds){const n=this.ambient.geometry.attributes.position.array,i=this.ambientBounds;for(let o=0;o<this.ambientVel.length;o++){const r=this.ambientVel[o],a=o*3;n[a]+=(r.vx+Math.sin(t*1.5+r.phase)*.5)*e,n[a+1]+=r.vy*e,n[a+2]+=(r.vz+Math.cos(t*1.3+r.phase)*.4)*e,n[a]>i.maxX&&(n[a]=i.minX),n[a]<i.minX&&(n[a]=i.maxX),n[a+2]>i.maxZ&&(n[a+2]=i.minZ),n[a+2]<i.minZ&&(n[a+2]=i.maxZ),n[a+1]<.2&&(n[a+1]=15+Math.random()*4),n[a+1]>20&&(n[a+1]=1)}this.ambient.geometry.attributes.position.needsUpdate=!0}for(const n of this.tumbleweeds)n.mesh.position.x+=n.vx*e,n.mesh.position.z+=n.vz*e,n.mesh.rotation.z-=n.vx*e*1.4,n.mesh.rotation.x+=n.vz*e*.8,n.mesh.position.y=.68+Math.abs(Math.sin(t*3.8+n.bouncePhase))*.35,this.ambientBounds&&(n.mesh.position.x>this.ambientBounds.maxX-4&&(n.mesh.position.x=this.ambientBounds.minX+4),n.mesh.position.x<this.ambientBounds.minX+4&&(n.mesh.position.x=this.ambientBounds.maxX-4));for(const n of this.mistEmitters)if(n.timer-=e,n.timer<=0){n.timer=.12;const i=n.pos.clone().add(new b((Math.random()-.5)*n.radius*2,Math.random()*1.2,(Math.random()-.5)*n.radius));this.spawnSmoke(i,15268351,1,1.35)}for(let n=this.bursts.length-1;n>=0;n--){const i=this.bursts[n];if(i.life-=e,i.life<=0){this.scene.remove(i.mesh),i.mesh.material.dispose(),this.bursts.splice(n,1);continue}i.vel.y-=i.gravity*e,i.mesh.position.addScaledVector(i.vel,e),i.mesh.rotation.x+=e*4,i.mesh.rotation.y+=e*3,i.grow>0&&i.mesh.scale.addScalar(i.grow*e),i.mesh.material.opacity=Math.max(0,i.life/i.maxLife*.85)}for(let n=this.tracers.length-1;n>=0;n--){const i=this.tracers[n];if(i.life-=e,i.life<=0){this.scene.remove(i.line),i.line.geometry.dispose(),i.line.material.dispose(),this.tracers.splice(n,1);continue}i.line.material.opacity=i.life/i.maxLife}for(let n=this.rings.length-1;n>=0;n--){const i=this.rings[n];if(i.life-=e,i.life<=0){this.scene.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material.dispose(),this.rings.splice(n,1);continue}const o=1-i.life/i.maxLife,r=.5+o*i.targetScale;i.mesh.scale.set(r,r,r),i.mesh.material.opacity=(1-o)*.85}}}class Om{constructor(){this.ctx=null,this.master=null,this.musicGain=null,this.sfxGain=null,this.muted=!1,this.musicTimer=null,this.currentTheme=null,this.step=0,this.noiseBuffer=null}ensureInit(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.72,this.master.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.28,this.musicGain.connect(this.master),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.85,this.sfxGain.connect(this.master);const t=this.ctx.sampleRate,n=Math.floor(t*1.5);this.noiseBuffer=this.ctx.createBuffer(1,n,t);const i=this.noiseBuffer.getChannelData(0);for(let o=0;o<n;o++)i[o]=Math.random()*2-1}setMuted(e){this.muted=e,this.master&&this.master.gain.setTargetAtTime(e?0:.72,this.ctx.currentTime,.04)}toggleMute(){return this.setMuted(!this.muted),this.muted}stopMusic(){this.musicTimer&&(clearInterval(this.musicTimer),this.musicTimer=null),this.currentTheme=null}startMusic(e){if(this.ensureInit(),!!this.ctx&&!(this.currentTheme===e&&this.musicTimer)){if(this.stopMusic(),this.currentTheme=e,this.step=0,e==="west"){const t=[73.42,73.42,110,87.31,73.42,73.42,65.41,82.41],n=[293.66,349.23,440,329.63,293.66,0,261.63,329.63],i=[587.33,659.25,698.46,880,0,698.46,659.25,587.33];this.musicTimer=setInterval(()=>{if(!this.ctx||this.muted)return;const o=this.step++,r=this.ctx.currentTime;this._tone(t[o%t.length],"triangle",.24,.26,r,this.musicGain,320);const a=n[o%n.length];if(a>0&&this._tone(a,"sawtooth",.34,.14,r,this.musicGain,1100),o%2===0&&Math.floor(o/8)%2===0){const l=i[(o>>1)%i.length];l>0&&this._whistle(l,.65,.11,r)}},340)}else if(e==="japan"){const t=[293.66,329.63,349.23,440,466.16,587.33,440,349.23],n=[587.33,0,659.25,698.46,880,0,698.46,587.33];this.musicTimer=setInterval(()=>{if(!this.ctx||this.muted)return;const i=this.step++,o=this.ctx.currentTime;if((i%8===0||i%8===5)&&this._taiko(o,i%8===0?.32:.18),i%2===0||i%7===0){const r=t[i*3%t.length];this._tone(r,"triangle",.52,.17,o,this.musicGain,2200)}if(i%4===1){const r=n[(i>>2)%n.length];r>0&&this._whistle(r,1.1,.1,o)}},380)}else if(e==="swiss"){const t=[174.61,261.63,349.23,440,523.25,440,349.23,261.63],n=[349.23,440,523.25,349.23,293.66,392,523.25,440];this.musicTimer=setInterval(()=>{if(!this.ctx||this.muted)return;const i=this.step++,o=this.ctx.currentTime,r=n[i%n.length];if(this._tone(r,"triangle",.36,.15,o,this.musicGain,1600),i%4===0){const a=t[(i>>2)%t.length];this._alphorn(a,1.25,.2,o)}},360)}else if(e==="greece"){const t=[293.66,329.63,349.23,440,493.88,440,349.23,329.63],n=[146.83,146.83,164.81,146.83,130.81,146.83,164.81,146.83],i=[587.33,659.25,587.33,523.25,440,0,523.25,587.33];this.musicTimer=setInterval(()=>{if(!this.ctx||this.muted)return;const o=this.step++,r=this.ctx.currentTime;if(o%2===0&&this._tone(n[(o>>1)%n.length],"triangle",.42,.2,r,this.musicGain,900),this._tone(t[o%t.length],"triangle",.34,.16,r,this.musicGain,2600),o%4===2){const a=i[(o>>2)%i.length];a>0&&this._whistle(a,.9,.1,r)}},310)}else if(e==="scandinavia"){const t=[73.42,73.42,110,73.42,65.41,73.42,87.31,73.42],n=[293.66,349.23,329.63,293.66,261.63,293.66,440,392];this.musicTimer=setInterval(()=>{if(!this.ctx||this.muted)return;const i=this.step++,o=this.ctx.currentTime;(i%4===0||i%8===6)&&this._taiko(o,i%8===0?.3:.18),i%2===0&&this._tone(t[(i>>1)%t.length],"sawtooth",.65,.15,o,this.musicGain,480),i%2===1&&this._tone(n[(i>>1)%n.length],"triangle",.48,.14,o,this.musicGain,1500),i%8===0&&this._alphorn(146.83,1.5,.16,o)},400)}}}_tone(e,t,n,i,o,r,a=1800){const l=this.ctx.createOscillator(),c=this.ctx.createBiquadFilter(),h=this.ctx.createGain();l.type=t,l.frequency.setValueAtTime(e,o),c.type="lowpass",c.frequency.setValueAtTime(a,o),c.frequency.exponentialRampToValueAtTime(220,o+n),h.gain.setValueAtTime(.001,o),h.gain.linearRampToValueAtTime(i,o+.015),h.gain.exponentialRampToValueAtTime(8e-4,o+n),l.connect(c),c.connect(h),h.connect(r),l.start(o),l.stop(o+n+.02)}_whistle(e,t,n,i){const o=this.ctx.createOscillator(),r=this.ctx.createOscillator(),a=this.ctx.createGain(),l=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(e*.96,i),o.frequency.exponentialRampToValueAtTime(e,i+.09),r.frequency.value=5.5,a.gain.value=e*.012,r.connect(a),a.connect(o.frequency),l.gain.setValueAtTime(.001,i),l.gain.linearRampToValueAtTime(n,i+.12),l.gain.exponentialRampToValueAtTime(8e-4,i+t),o.connect(l),l.connect(this.musicGain),o.start(i),r.start(i),o.stop(i+t+.03),r.stop(i+t+.03)}_alphorn(e,t,n,i){const o=this.ctx.createOscillator(),r=this.ctx.createOscillator(),a=this.ctx.createBiquadFilter(),l=this.ctx.createGain();o.type="sawtooth",r.type="triangle",o.frequency.setValueAtTime(e,i),r.frequency.setValueAtTime(e*.5,i),a.type="lowpass",a.frequency.setValueAtTime(750,i),a.Q.value=2,l.gain.setValueAtTime(.001,i),l.gain.linearRampToValueAtTime(n,i+.18),l.gain.setValueAtTime(n*.85,i+t*.7),l.gain.exponentialRampToValueAtTime(8e-4,i+t),o.connect(a),r.connect(a),a.connect(l),l.connect(this.musicGain),o.start(i),r.start(i),o.stop(i+t+.05),r.stop(i+t+.05)}_taiko(e,t){const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(115,e),n.frequency.exponentialRampToValueAtTime(42,e+.35),i.gain.setValueAtTime(t,e),i.gain.exponentialRampToValueAtTime(.001,e+.45),n.connect(i),i.connect(this.musicGain),n.start(e),n.stop(e+.48)}_noiseBurst(e,t,n,i="bandpass",o=1){if(!this.ctx||!this.noiseBuffer)return;const r=this.ctx.currentTime,a=this.ctx.createBufferSource();a.buffer=this.noiseBuffer;const l=this.ctx.createBiquadFilter();l.type=i,l.frequency.setValueAtTime(n,r),l.Q.value=o;const c=this.ctx.createGain();c.gain.setValueAtTime(t,r),c.gain.exponentialRampToValueAtTime(.001,r+e),a.connect(l),l.connect(c),c.connect(this.sfxGain),a.start(r),a.stop(r+e+.02)}playShot(e="revolver"){if(this.ensureInit(),!this.ctx)return;const t=this.ctx.currentTime;if(e==="revolver"||e==="rifle"){const n=e==="rifle";this._noiseBurst(n?.32:.22,n?.9:.72,n?1150:1450,"lowpass");const i=this.ctx.createOscillator(),o=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(n?240:320,t),i.frequency.exponentialRampToValueAtTime(42,t+(n?.22:.14)),o.gain.setValueAtTime(n?.65:.5,t),o.gain.exponentialRampToValueAtTime(.001,t+.22),i.connect(o),o.connect(this.sfxGain),i.start(t),i.stop(t+.24)}else if(e==="shotgun"||e==="musket"){this._noiseBurst(.45,1,950,"lowpass");const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(175,t),n.frequency.exponentialRampToValueAtTime(28,t+.32),i.gain.setValueAtTime(.85,t),i.gain.exponentialRampToValueAtTime(.001,t+.34),n.connect(i),i.connect(this.sfxGain),n.start(t),n.stop(t+.36)}else if(e==="bow"||e==="crossbow"){this._noiseBurst(.11,.45,2200,"bandpass",2);const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(e==="crossbow"?420:280,t),n.frequency.exponentialRampToValueAtTime(110,t+.16),i.gain.setValueAtTime(.55,t),i.gain.exponentialRampToValueAtTime(.001,t+.18),n.connect(i),i.connect(this.sfxGain),n.start(t),n.stop(t+.2)}else if(e==="shuriken")this._noiseBurst(.09,.4,3800,"highpass"),this._tone(1650,"sine",.08,.22,t,this.sfxGain,4e3);else if(e==="slash"){this._noiseBurst(.18,.6,2600,"bandpass",1.4);const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(900,t),n.frequency.exponentialRampToValueAtTime(220,t+.16),i.gain.setValueAtTime(.28,t),i.gain.exponentialRampToValueAtTime(.001,t+.18),n.connect(i),i.connect(this.sfxGain),n.start(t),n.stop(t+.19)}else if(e==="javelin"||e==="axe_throw"){const n=e==="axe_throw";this._noiseBurst(n?.17:.13,n?.52:.45,n?1500:2500,"bandpass",1.5);const i=this.ctx.createOscillator(),o=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(n?240:480,t),i.frequency.exponentialRampToValueAtTime(n?95:170,t+.14),o.gain.setValueAtTime(.38,t),o.gain.exponentialRampToValueAtTime(.001,t+.16),i.connect(o),o.connect(this.sfxGain),i.start(t),i.stop(t+.17)}else e==="throw"&&this._noiseBurst(.14,.35,1600,"bandpass")}playReload(){if(this.ensureInit(),!this.ctx)return;const e=this.ctx.currentTime;this._tone(780,"square",.045,.16,e,this.sfxGain,2200),this._tone(1120,"square",.055,.18,e+.18,this.sfxGain,2600),this._tone(640,"triangle",.06,.2,e+.36,this.sfxGain,1800)}playExplosion(){if(this.ensureInit(),!this.ctx)return;const e=this.ctx.currentTime;this._noiseBurst(.95,1,520,"lowpass");const t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(110,e),t.frequency.exponentialRampToValueAtTime(22,e+.7),n.gain.setValueAtTime(.95,e),n.gain.exponentialRampToValueAtTime(.001,e+.8),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.85)}playHit(e=!1){if(this.ensureInit(),!this.ctx)return;const t=this.ctx.currentTime;this._tone(e?1320:840,"triangle",.09,.32,t,this.sfxGain,3200),e&&this._tone(1760,"sine",.14,.34,t+.04,this.sfxGain,4200)}playHurt(){if(this.ensureInit(),!this.ctx)return;const e=this.ctx.currentTime;this._noiseBurst(.16,.45,650,"lowpass"),this._tone(130,"sawtooth",.18,.38,e,this.sfxGain,450)}playPickup(){if(this.ensureInit(),!this.ctx)return;const e=this.ctx.currentTime;this._tone(587.33,"triangle",.11,.28,e,this.sfxGain,2800),this._tone(880,"triangle",.18,.28,e+.09,this.sfxGain,3200)}playBossHorn(){if(this.ensureInit(),!this.ctx)return;const e=this.ctx.currentTime;this._alphorn(146.83,1.4,.45,e),this._alphorn(220,1.4,.35,e+.15)}}const Bm={west:[{id:"revolver",name:".45 PEACEMAKER",shortName:"Revolver",kind:"hitscan",sound:"revolver",damage:38,headMult:2.1,pellets:1,spread:.012,fireRate:.28,magSize:6,reserve:48,reloadTime:1.05,recoil:.14,altMode:"fan",altHint:"RMB: Fan Hammer",tracerColor:16770206},{id:"shotgun",name:"10-GAUGE COACH GUN",shortName:"Shotgun",kind:"hitscan",sound:"shotgun",damage:19,headMult:1.5,pellets:8,spread:.085,fireRate:.65,magSize:2,reserve:24,reloadTime:1.15,recoil:.28,altMode:"double",altHint:"RMB: Both Barrels",tracerColor:16762480},{id:"rifle",name:"HENRY .44 SCOPED",shortName:"Rifle",kind:"hitscan",sound:"rifle",damage:74,headMult:2.4,pellets:1,spread:.004,fireRate:.72,magSize:8,reserve:32,reloadTime:1.3,recoil:.18,altMode:"scope",scopeLabel:"HENRY .44 BRASS OPTIC",scopeFov:26,altHint:"RMB: Brass Scope Zoom",tracerColor:16774084},{id:"dynamite",name:"DYNAMITE STICKS",shortName:"Dynamite",kind:"throwable",sound:"throw",damage:145,blastRadius:7.5,fireRate:.85,magSize:1,reserve:6,reloadTime:.55,recoil:.12,altMode:"none",altHint:"Arc Throw Explosive",projColor:14235170}],japan:[{id:"katana",name:"MURAMASA KATANA",shortName:"Katana",kind:"melee",sound:"slash",damage:68,headMult:1.5,range:4,fireRate:.36,magSize:99,reserve:99,infinite:!0,reloadTime:.1,recoil:.22,altMode:"heavy_slash",altHint:"RMB: Iaido Power Cleave",slashColor:15137279},{id:"yumi",name:"YUMI LONGBOW",shortName:"Yumi Bow",kind:"hitscan",sound:"bow",damage:78,headMult:2.3,pellets:1,spread:.005,fireRate:.62,magSize:1,reserve:40,reloadTime:.45,recoil:.11,altMode:"scope",scopeLabel:"KYUDO SPIRIT FOCUS",scopeFov:30,altHint:"RMB: Spirit Focus Zoom",tracerColor:16773314},{id:"shuriken",name:"SHINOBI SHURIKEN",shortName:"Shuriken",kind:"hitscan",sound:"shuriken",damage:34,headMult:2,pellets:1,spread:.018,fireRate:.2,magSize:9,reserve:63,reloadTime:.85,recoil:.07,altMode:"fan_stars",altHint:"RMB: 3-Star Fan Throw",tracerColor:13692159},{id:"matchlock",name:"TANEGASHIMA MUSKET",shortName:"Matchlock",kind:"hitscan",sound:"musket",damage:115,headMult:1.9,pellets:4,spread:.045,fireRate:1.05,magSize:1,reserve:18,reloadTime:1.25,recoil:.3,altMode:"none",altHint:"Heavy Edo Firepower",tracerColor:16757596}],swiss:[{id:"crossbow",name:"TELL'S ARMBRUST",shortName:"Crossbow",kind:"hitscan",sound:"crossbow",damage:86,headMult:2.5,pellets:1,spread:.003,fireRate:.65,magSize:1,reserve:45,reloadTime:.62,recoil:.14,altMode:"scope",scopeLabel:"WILHELM TELL EAGLE-EYE",scopeFov:24,altHint:"RMB: Eagle-Eye Zoom",tracerColor:16054783},{id:"halberd",name:"SWISS HALBERD",shortName:"Halberd",kind:"melee",sound:"slash",damage:78,headMult:1.5,range:4.4,fireRate:.48,magSize:99,reserve:99,infinite:!0,reloadTime:.1,recoil:.25,altMode:"heavy_slash",altHint:"RMB: Armor-Breaker Sweep",slashColor:14676735},{id:"repeater",name:"ALPINE REPEATER",shortName:"Repeater",kind:"hitscan",sound:"crossbow",damage:36,headMult:2,pellets:1,spread:.016,fireRate:.22,magSize:8,reserve:56,reloadTime:1.1,recoil:.09,altMode:"fan",altHint:"RMB: Rapid Volley",tracerColor:15135487},{id:"firepot",name:"ALPINE FIRE-POT",shortName:"Fire-Pot",kind:"throwable",sound:"throw",damage:150,blastRadius:7.5,fireRate:.9,magSize:1,reserve:6,reloadTime:.6,recoil:.12,altMode:"none",altHint:"Arc Throw Fire-Bomb",projColor:16739876}],greece:[{id:"javelin",name:"BRONZE JAVELIN",shortName:"Javelin",kind:"hitscan",sound:"javelin",damage:56,headMult:2.1,pellets:1,spread:.009,fireRate:.56,magSize:5,reserve:45,reloadTime:.88,recoil:.16,altMode:"scope",scopeLabel:"AEGEAN SPEAR SIGHT",scopeFov:36,altHint:"RMB: Steady Aim Focus",tracerColor:16770206},{id:"xiphos",name:"XIPHOS SHORT SWORD",shortName:"Short Sword",kind:"melee",sound:"slash",damage:66,headMult:1.5,range:3.9,fireRate:.34,magSize:99,reserve:99,infinite:!0,reloadTime:.1,recoil:.22,altMode:"heavy_slash",altHint:"RMB: Heroic Thrust Cleave",slashColor:16770723}],scandinavia:[{id:"throwing_axe",name:"THROWING AXE",shortName:"Throwing Axe",kind:"hitscan",sound:"axe_throw",damage:58,headMult:2.1,pellets:1,spread:.011,fireRate:.54,magSize:5,reserve:45,reloadTime:.85,recoil:.17,altMode:"scope",scopeLabel:"NORSE RAIDER AIM",scopeFov:38,altHint:"RMB: Steady Aim Focus",tracerColor:12776959},{id:"viking_sword",name:"ULFBERHT SWORD",shortName:"Viking Sword",kind:"melee",sound:"slash",damage:72,headMult:1.5,range:4.1,fireRate:.38,magSize:99,reserve:99,infinite:!0,reloadTime:.1,recoil:.24,altMode:"heavy_slash",altHint:"RMB: Shield-Breaker Cleave",slashColor:10417640}]};function zm(s){const e=new Ye,t=new le({color:3817546,metalness:.85,roughness:.26}),n=new le({color:14213354,metalness:.92,roughness:.16}),i=new le({color:14263361,metalness:.82,roughness:.28}),o=new le({color:6042653,roughness:.72,metalness:.05}),r=new le({color:3087122,roughness:.75}),a=new le({color:12067869,roughness:.5}),l=new pt({color:16759603});if(s==="revolver"){const c=new x(new me(.022,.024,.44,10),t);c.rotation.x=Math.PI/2,c.position.set(0,.03,-.32);const h=new x(new me(.011,.011,.36,8),t);h.rotation.x=Math.PI/2,h.position.set(0,.004,-.28);const u=new x(new z(.048,.095,.17),i);u.position.set(0,0,-.05);const d=new x(new me(.038,.038,.09,12),t);d.rotation.x=Math.PI/2,d.position.set(0,.015,-.055),d.name="cylinder";const f=new x(new z(.008,.026,.02),i);f.position.set(0,.058,-.51);const m=new x(new z(.014,.04,.03),t);m.position.set(0,.052,.03),m.rotation.x=-.35;const v=new x(new z(.042,.16,.068),o);v.position.set(0,-.09,.05),v.rotation.x=.28,e.add(c,h,u,d,f,m,v),e.position.set(.24,-.22,-.35)}else if(s==="shotgun"){for(const d of[-.024,.024]){const f=new x(new me(.022,.024,.72,12),t);f.rotation.x=Math.PI/2,f.position.set(d,.02,-.45),e.add(f)}const c=new x(new z(.078,.048,.28),o);c.position.set(0,-.012,-.32);const h=new x(new z(.082,.078,.18),i);h.position.set(0,0,-.04);const u=new x(new z(.065,.11,.36),o);u.position.set(0,-.055,.18),u.rotation.x=.16,e.add(c,h,u),e.position.set(.24,-.24,-.32)}else if(s==="rifle"){const c=new x(new me(.018,.021,.88,8),t);c.rotation.x=Math.PI/2,c.position.set(0,.025,-.52);const h=new x(new me(.014,.014,.78,8),i);h.rotation.x=Math.PI/2,h.position.set(0,-.006,-.48);const u=new x(new z(.054,.088,.22),i);u.position.set(0,0,-.04);const d=new x(new me(.02,.024,.48,12),i);d.rotation.x=Math.PI/2,d.position.set(0,.078,-.22);const f=new x(new me(.018,.018,.01,12),new pt({color:9099519}));f.rotation.x=Math.PI/2,f.position.set(0,.078,.02);const m=new x(new z(.052,.11,.36),o);m.position.set(0,-.048,.2),m.rotation.x=.12,e.add(c,h,u,d,f,m),e.position.set(.24,-.24,-.32)}else if(s==="dynamite"){for(const[f,m]of[[-.024,0],[.024,0],[0,.032]]){const v=new x(new me(.022,.022,.26,10),a);v.position.set(f,m,0),e.add(v)}const c=new x(new me(.054,.054,.022,12),r);c.position.y=.06;const h=c.clone();h.position.y=-.06;const u=new x(new me(.006,.006,.09,6),o);u.position.set(.01,.17,0),u.rotation.z=-.35;const d=new x(new Ke(.022,8,8),l);d.position.set(.028,.21,0),d.name="spark",e.add(c,h,u,d),e.rotation.set(.25,.2,.15),e.position.set(.26,-.24,-.45)}else if(s==="katana"){const c=new x(new z(.014,.92,.044),n);c.position.set(0,.44,0);const h=new x(new z(.005,.92,.014),new pt({color:16777215}));h.position.set(0,.44,-.023);const u=new x(new z(.024,.05,.052),i);u.position.set(0,.01,0);const d=new x(new me(.065,.065,.014,16),i);d.position.set(0,-.02,0);const f=new x(new me(.024,.026,.28,10),a);f.position.set(0,-.16,0),e.add(c,h,u,d,f),e.rotation.set(-.35,-.28,.28),e.position.set(.32,-.34,-.52)}else if(s==="yumi"){const c=new x(new xt(.52,.018,8,22,Math.PI*.88),r);c.rotation.z=-Math.PI*.44,c.position.set(0,.06,-.22);const h=new x(new me(.003,.003,.96,6),new pt({color:16050385}));h.position.set(0,.06,.04);const u=new x(new me(.008,.008,.72,6),o);u.rotation.x=Math.PI/2,u.position.set(.02,.02,-.24);const d=new x(new Be(.02,.07,4),n);d.rotation.x=-Math.PI/2,d.position.set(.02,.02,-.62);const f=new x(new z(.05,.004,.1),a);f.position.set(.02,.02,.07),e.add(c,h,u,d,f),e.position.set(.25,-.18,-.45)}else if(s==="shuriken"){const c=new Ye;for(let u=0;u<4;u++){const d=new x(new Be(.036,.12,4),n),f=u*Math.PI/2;d.position.set(Math.cos(f)*.06,0,Math.sin(f)*.06),d.rotation.z=-Math.PI/2,d.rotation.y=-f,c.add(d)}const h=new x(new me(.032,.032,.012,10),t);c.add(h),c.name="spinner",e.add(c),e.rotation.set(.35,.2,.1),e.position.set(.24,-.2,-.48)}else if(s==="matchlock"){const c=new x(new me(.026,.03,.92,8),t);c.rotation.x=Math.PI/2,c.position.set(0,.03,-.5);const h=new x(new z(.064,.075,.72),r);h.position.set(0,-.01,-.25);for(const d of[-.15,-.42,-.68]){const f=new x(new z(.07,.082,.032),i);f.position.set(0,.005,d),e.add(f)}const u=new x(new Ke(.016,6,6),l);u.position.set(.045,.045,-.08),e.add(c,h,u),e.position.set(.25,-.25,-.3)}else if(s==="crossbow"||s==="repeater"){const c=s==="repeater",h=new x(new z(.072,.082,c?.62:.74),o);h.position.set(0,-.01,-.28);const u=new x(new z(.035,.022,.6),i);u.position.set(0,.036,-.32);const d=new x(new z(c?.26:.36,.024,.038),t);d.position.set(c?-.14:-.19,.025,-.55),d.rotation.y=.24;const f=d.clone();f.position.x=-d.position.x,f.rotation.y=-.24;const m=new x(new me(.003,.003,c?.3:.42,6),new pt({color:15261384}));m.rotation.z=Math.PI/2,m.rotation.y=-.52,m.position.set(c?-.12:-.16,.032,-.44);const v=m.clone();v.position.x=-m.position.x,v.rotation.y=.52;const g=new x(new me(.009,.009,.44,6),r);g.rotation.x=Math.PI/2,g.position.set(0,.048,-.44);const p=new x(new Be(.022,.075,4),n);if(p.rotation.x=-Math.PI/2,p.position.set(0,.048,-.68),c){const y=new x(new z(.068,.085,.22),r);y.position.set(0,.078,-.24),e.add(y)}e.add(h,u,d,f,m,v,g,p),e.position.set(.22,-.23,-.32)}else if(s==="halberd"){const c=new x(new me(.022,.024,1.35,8),o);c.position.set(0,.15,0);const h=new x(new Be(.028,.38,4),n);h.position.set(0,.98,0);const u=new x(new z(.014,.28,.25),n);u.position.set(0,.68,-.12);const d=new x(new Be(.024,.2,4),t);d.rotation.x=Math.PI/2,d.position.set(0,.68,.1);const f=new x(new me(.032,.032,.16,8),i);f.position.set(0,.68,0);const m=new x(new Be(.045,.14,8),new le({color:15910441,roughness:.6}));m.position.set(0,.54,0);const v=new x(new xt(.035,.014,6,10),a);v.rotation.x=Math.PI/2,v.position.set(0,.6,0),e.add(c,h,u,d,f,m,v),e.rotation.set(-.34,-.22,.22),e.position.set(.36,-.42,-.56)}else if(s==="firepot"){const c=new x(new Ke(.095,12,10),new le({color:9193255,roughness:.85})),h=new x(new me(.042,.055,.06,10),new le({color:7222812,roughness:.85}));h.position.y=.095;const u=new x(new Be(.038,.095,8),l);u.position.y=.165,u.name="spark",e.add(c,h,u),e.position.set(.26,-.24,-.46)}else if(s==="javelin"){const c=new le({color:14394187,metalness:.86,roughness:.24}),h=new x(new me(.014,.016,1.35,8),o);h.rotation.x=Math.PI/2,h.position.set(0,.02,-.35);const u=new x(new me(.018,.018,.24,8),a);u.rotation.x=Math.PI/2,u.position.set(0,.02,-.05);const d=new x(new me(.018,.016,.12,8),c);d.rotation.x=Math.PI/2,d.position.set(0,.02,-1);const f=new x(new Be(.036,.24,4),c);f.rotation.x=-Math.PI/2,f.position.set(0,.02,-1.16),e.add(h,u,d,f),e.rotation.set(.06,.08,0),e.position.set(.27,-.2,-.25)}else if(s==="xiphos"){const c=new le({color:14920786,metalness:.88,roughness:.22}),h=new x(new z(.016,.66,.068),c);h.position.set(0,.34,0);const u=new x(new Be(.036,.16,4),c);u.position.set(0,.74,0);const d=new x(new z(.036,.036,.18),i);d.position.set(0,.01,0);const f=new x(new me(.024,.024,.22,8),r);f.position.set(0,-.12,0);const m=new x(new Ke(.036,8,8),i);m.position.set(0,-.24,0),e.add(h,u,d,f,m),e.rotation.set(-.38,-.26,.26),e.position.set(.32,-.32,-.52)}else if(s==="throwing_axe"){const c=new x(new me(.018,.022,.56,8),o);c.position.set(0,.06,0);const h=new x(new me(.024,.024,.16,8),r);h.position.set(0,-.14,0);const u=new x(new z(.022,.14,.16),t);u.position.set(0,.28,-.06);const d=new x(new z(.014,.22,.12),n);d.position.set(0,.23,-.15),e.add(c,h,u,d),e.rotation.set(.28,-.18,.18),e.position.set(.28,-.26,-.48)}else if(s==="viking_sword"){const c=new x(new z(.016,.88,.064),n);c.position.set(0,.44,0);const h=new x(new z(.02,.72,.02),t);h.position.set(0,.42,0);const u=new x(new Be(.034,.14,4),n);u.position.set(0,.94,0);const d=new x(new z(.036,.036,.22),t);d.position.set(0,0,0);const f=new x(new me(.024,.026,.22,8),r);f.position.set(0,-.12,0);const m=new x(new z(.05,.055,.1),i);m.position.set(0,-.24,0),e.add(c,h,u,d,f,m),e.rotation.set(-.34,-.24,.24),e.position.set(.32,-.34,-.52)}return e.userData.basePos=e.position.clone(),e.userData.baseRot=e.rotation.clone(),e}const hn={west:[{id:"earp",era:"west",name:"Wyatt Earp",bio:"Lawman of Tombstone, 1881.",strengthLabel:"Iron Lawman",strengthDesc:"Takes 25% less damage from enemy fire.",hudTag:"-25% DMG",defaultWeaponIdx:0,mods:{damageTakenMult:.75}},{id:"jane",era:"west",name:"Calamity Jane",bio:"Scout and sharpshooter of Deadwood.",strengthLabel:"Deadwood Scout",strengthDesc:"Moves 18% faster across streets and cover.",hudTag:"+18% SPEED",defaultWeaponIdx:2,mods:{moveSpeedMult:1.18}},{id:"billy",era:"west",name:"Billy the Kid",bio:"Young gunman of New Mexico.",strengthLabel:"Quick Draw",strengthDesc:"Fires 22% faster and reloads 28% faster.",hudTag:"FAST DRAW",defaultWeaponIdx:0,mods:{fireRateMult:.78,reloadTimeMult:.72}}],japan:[{id:"musashi",era:"japan",name:"Miyamoto Musashi",bio:"Undefeated duellist, master of two swords.",strengthLabel:"Two Heavens Style",strengthDesc:"Faster katana strikes (+28% speed) with +1.2 m reach.",hudTag:"SWIFT BLADE",defaultWeaponIdx:0,mods:{meleeFireRateMult:.72,meleeRangeBonus:1.2}},{id:"tomoe",era:"japan",name:"Tomoe Gozen",bio:"Woman warrior of the Genpei War, famous archer.",strengthLabel:"Genpei Archer",strengthDesc:"Shoots and nocks the Yumi Longbow nearly twice as fast.",hudTag:"2× BOW RATE",defaultWeaponIdx:1,mods:{weaponOverrides:{yumi:{fireRateMult:.52,reloadTimeMult:.52}}}},{id:"masamune",era:"japan",name:"Date Masamune",bio:"The One-Eyed Dragon of Sendai.",strengthLabel:"Black Lacquer Armor",strengthDesc:"Takes 30% less damage from enemy attacks.",hudTag:"-30% DMG",defaultWeaponIdx:0,mods:{damageTakenMult:.7}}],swiss:[{id:"tell",era:"swiss",name:"Wilhelm Tell",bio:"The crossbowman of Uri.",strengthLabel:"Uri Marksman",strengthDesc:"Reloads the crossbow 40% faster.",hudTag:"40% FASTER BOLTS",defaultWeaponIdx:0,mods:{weaponOverrides:{crossbow:{reloadTimeMult:.6,fireRateMult:.8},repeater:{reloadTimeMult:.6}}}},{id:"winkelried",era:"swiss",name:"Arnold von Winkelried",bio:"Hero of Sempach, from Nidwalden.",strengthLabel:"Heart of Sempach",strengthDesc:"Starts with 50% more health.",hudTag:"+50% HEALTH",defaultWeaponIdx:1,mods:{maxHpMult:1.5}},{id:"stauffacher",era:"swiss",name:"Werner Stauffacher",bio:"Man of Schwyz, of the Rütli oath.",strengthLabel:"Elder of Schwyz",strengthDesc:"Slowly recovers health when out of danger.",hudTag:"OUT-OF-COMBAT REGEN",defaultWeaponIdx:0,mods:{regenRate:5,regenDelay:4}}],greece:[{id:"ulysses",era:"greece",name:"Ulysses",bio:"King of Ithaca, the cunning one.",strengthLabel:"King of Ithaca",strengthDesc:"Throws javelins 25% faster and 25% harder.",hudTag:"+25% JAVELIN",defaultWeaponIdx:0,mods:{weaponOverrides:{javelin:{fireRateMult:.78,reloadTimeMult:.8,damageMult:1.25}}}},{id:"achilles",era:"greece",name:"Achilles",bio:"Greatest warrior of the Trojan War.",strengthLabel:"Bronze Panoply",strengthDesc:"Takes 33% less damage from enemy attacks.",hudTag:"-33% DMG",defaultWeaponIdx:0,mods:{damageTakenMult:.67}},{id:"heracles",era:"greece",name:"Heracles",bio:"Strongest of heroes.",strengthLabel:"Twelve Labors",strengthDesc:"Starts with 60% more health.",hudTag:"+60% HEALTH",defaultWeaponIdx:1,mods:{maxHpMult:1.6}}],scandinavia:[{id:"erik",era:"scandinavia",name:"Erik the Red",bio:"Outlaw and founder of Greenland.",strengthLabel:"Greenland Outlaw",strengthDesc:"Throws axes 30% faster and reloads 25% faster.",hudTag:"FAST AXES",defaultWeaponIdx:0,mods:{weaponOverrides:{throwing_axe:{fireRateMult:.7,reloadTimeMult:.75}}}},{id:"leif",era:"scandinavia",name:"Leif Erikson",bio:"His son, who sailed to Vinland.",strengthLabel:"Vinland Voyager",strengthDesc:"Takes 33% less damage from enemy attacks.",hudTag:"-33% DMG",defaultWeaponIdx:0,mods:{damageTakenMult:.67}},{id:"ragnar",era:"scandinavia",name:"Ragnar Lothbrok",bio:"Legendary sea-king and raider.",strengthLabel:"Sea-King Blade",strengthDesc:"Strikes 28% faster and 35% harder with the Viking Sword.",hudTag:"FIERCE SWORD",defaultWeaponIdx:1,mods:{meleeFireRateMult:.72,meleeDamageMult:1.35}}]};function Tl(s,e){const t=hn[s]||hn.west;return t.find(n=>n.id===e)||t[0]}function km(s){const e=new Ye,t=new le({color:15120018,roughness:.7}),n=new le({color:14263422,roughness:.74}),i=new le({color:14858394,roughness:.76}),o=new le({color:1578776,roughness:.82}),r=new le({color:1447967,metalness:.62,roughness:.32}),a=new le({color:2763826,roughness:.8}),l=new le({color:15722196,roughness:.84}),c=new le({color:16184300,roughness:.78}),h=new le({color:12067362,roughness:.62}),u=new le({color:12751448,roughness:.88}),d=new le({color:10054968,roughness:.9}),f=new le({color:7035458,roughness:.9}),m=new le({color:3875862,roughness:.8}),v=new le({color:1709331,roughness:.88}),g=new le({color:7027488,roughness:.85}),p=new le({color:4862238,roughness:.92}),y=new le({color:15394784,roughness:.9}),M=new le({color:10003634,metalness:.78,roughness:.42}),w=new le({color:14213868,metalness:.92,roughness:.18}),C=new le({color:15909444,metalness:.88,roughness:.22}),P=new le({color:4532247,roughness:.82}),L=new pt({color:1445900});function I({torsoMat:O,legsMat:U,armsMat:W,bootsMat:K=m,skin:te=t,slim:de=!1}){const Se=de?.095:.11,D=new me(Se,Se*.88,.84,10),k=new x(D,U);k.position.set(-.15,.42,0);const Q=new x(D,U);Q.position.set(.15,.42,0);const X=new z(.16,.22,.27),oe=new x(X,K);oe.position.set(0,-.34,.04),k.add(oe),Q.add(oe.clone());const Me=de?.48:.56,Pe=new x(new z(Me,.74,.3),O);Pe.position.set(0,1.18,0);const Oe=de?.072:.085,xe=new me(Oe,Oe*.86,.64,8),se=new x(xe,W);se.position.set(-(Me*.5+.1),1.18,.04),se.rotation.z=.12;const R=new x(xe,W);R.position.set(Me*.5+.1,1.18,.14),R.rotation.x=-.65,R.rotation.z=-.1;const ie=new Ke(.068,8,8),G=new x(ie,te);G.position.set(0,-.33,0),se.add(G);const ae=new x(ie,te);ae.position.set(0,-.33,0),R.add(ae);const Y=new x(new Ke(.205,14,12),te);Y.position.set(0,1.74,0);const we=new x(new Ke(.023,6,6),L);we.position.set(-.07,.03,.185);const be=we.clone();return be.position.x=.07,Y.add(we,be),e.add(k,Q,Pe,se,R,Y),{legL:k,legR:Q,torso:Pe,armL:se,armR:R,head:Y,eyeL:we,eyeR:be}}function E(){const O=new Ye,U=new x(new me(.022,.024,.38,8),w);U.rotation.x=Math.PI/2,U.position.set(0,.02,.22);const W=new x(new z(.055,.09,.15),C);W.position.set(0,0,.03);const K=new x(new z(.045,.13,.065),P);return K.position.set(0,-.07,-.04),K.rotation.x=-.25,O.add(U,W,K),O}function S(){const O=new Ye,U=new x(new me(.02,.022,1.15,8),w);U.rotation.x=Math.PI/2,U.position.set(0,.02,.35);const W=new x(new z(.055,.08,.24),C);W.position.set(0,0,-.05);const K=new x(new z(.05,.11,.42),P);return K.position.set(0,-.04,-.34),O.add(U,W,K),O}function N(O=1.05){const U=new Ye,W=new x(new z(.024,O,.048),w);W.position.y=O*.5+.08;const K=new x(new me(.055,.055,.016,12),C);K.position.y=.08;const te=new x(new me(.024,.024,.24,8),h);return te.position.y=-.04,U.add(W,K,te),U}function ne(){const O=new Ye,U=new x(new z(.08,.08,.72),P);U.position.set(0,0,.18);const W=new x(new z(.76,.032,.045),w);W.position.set(0,.03,.48);const K=new x(new z(.72,.008,.008),c);K.position.set(0,.03,.36);const te=new x(new me(.01,.01,.42,6),w);return te.rotation.x=Math.PI/2,te.position.set(0,.055,.38),O.add(U,W,K,te),O}function ee(){const O=new Ye,U=new x(new me(.028,.032,2.35,8),P);U.position.y=.55;const W=new x(new Be(.038,.44,4),w);W.position.y=1.92;const K=new x(new z(.025,.36,.3),w);K.position.set(0,1.54,.15);const te=new x(new Be(.032,.22,4),w);te.rotation.x=-Math.PI/2,te.position.set(0,1.54,-.12);const de=new x(new Be(.06,.18,8),h);return de.position.y=1.32,O.add(U,W,K,te,de),O}if(s==="earp"){const O=I({torsoMat:o,legsMat:o,armsMat:o,bootsMat:o,skin:n}),U=new x(new z(.62,.72,.14),o);U.position.set(0,.58,-.14);const W=new x(new z(.22,.72,.24),o);W.position.set(-.22,.58,.04);const K=W.clone();K.position.x=.22,e.add(U,W,K);const te=new x(new z(.2,.42,.04),c);te.position.set(0,1.28,.15);const de=new x(new z(.05,.3,.05),o);de.position.set(0,1.26,.165);const Se=new x(new me(.068,.068,.02,6),C);Se.rotation.x=Math.PI/2,Se.position.set(.16,1.34,.165),e.add(te,de,Se);const D=new x(new z(.22,.055,.07),v);D.position.set(0,-.055,.18);const k=new x(new z(.08,.075,.06),v);k.position.set(-.11,-.085,.17),k.rotation.z=-.35;const Q=k.clone();Q.position.x=.11,Q.rotation.z=.35,O.head.add(D,k,Q);const X=new x(new me(.45,.46,.036,18),o);X.position.y=.14;const oe=new x(new me(.22,.23,.17,16),o);oe.position.y=.23;const Me=new x(new me(.235,.235,.035,16),C);Me.position.y=.17,O.head.add(X,oe,Me);const Pe=E();Pe.position.set(0,-.34,.04),Pe.rotation.x=.6,O.armR.add(Pe)}else if(s==="jane"){const O=I({torsoMat:u,legsMat:u,armsMat:u,bootsMat:m,skin:n,slim:!0}),U=new x(new z(.54,.18,.33),d);U.position.set(0,1.45,0);const W=new x(new z(.52,.28,.32),d);W.position.set(0,.78,0);const K=new x(new z(.54,.1,.34),m);K.position.set(0,.92,0),e.add(U,W,K);const te=new x(new xt(.17,.055,8,14),h);te.rotation.x=Math.PI/2,te.position.set(0,1.54,0);const de=new x(new Be(.16,.24,5),h);de.rotation.x=Math.PI,de.position.set(0,1.44,.16),e.add(te,de);const Se=new x(new z(.36,.56,.16),g);Se.position.set(0,-.14,-.14);const D=new x(new me(.065,.05,.44,8),g);D.position.set(-.18,-.1,-.02);const k=D.clone();k.position.x=.18,O.head.add(Se,D,k);const Q=new x(new me(.42,.44,.036,16),m);Q.position.y=.15;const X=new x(new me(.19,.22,.21,12),m);X.position.y=.25,O.head.add(Q,X);const oe=S();oe.position.set(-.08,-.25,.12),oe.rotation.set(.3,-.45,0),O.armR.add(oe)}else if(s==="billy"){const O=I({torsoMat:a,legsMat:a,armsMat:l,bootsMat:m,skin:t,slim:!0}),U=new x(new z(.16,.34,.04),l);U.position.set(0,1.38,.15);const W=new x(new xt(.15,.04,6,12),a);W.rotation.x=Math.PI/2,W.position.set(0,1.54,0);const K=new x(new z(.54,.11,.34),m);K.position.set(0,.88,0),K.rotation.z=-.14;for(let D=0;D<3;D++){const k=new x(new Ke(.022,6,6),C);k.position.set(0,1.24-D*.12,.16),e.add(k)}e.add(U,W,K);const te=new x(new me(.38,.46,.06,16),m);te.position.set(.02,.14,0),te.rotation.set(.12,0,-.14);const de=new x(new Be(.22,.28,10),m);de.position.set(.04,.27,-.01),de.rotation.z=-.14,O.head.add(te,de);const Se=E();Se.position.set(0,-.34,.06),Se.rotation.x=.65,O.armR.add(Se)}else if(s==="musashi"){const O=new le({color:2238e3,roughness:.88}),U=I({torsoMat:O,legsMat:O,armsMat:O,bootsMat:l,skin:n}),W=new x(new me(.28,.42,.86,10),O);W.position.set(0,.56,0);const K=new x(new z(.59,.18,.34),l);K.position.set(0,.96,0);const te=new x(new z(.14,.48,.04),a);te.position.set(-.08,1.32,.155),te.rotation.z=-.35;const de=te.clone();de.position.x=.08,de.rotation.z=.35,e.add(W,K,te,de);const Se=new x(new Ke(.225,10,8),v);Se.position.set(0,.06,-.04);const D=new x(new fn(.26,0),v);D.position.set(0,-.06,-.18),D.scale.set(1.2,1.45,.85);const k=new x(new Be(.08,.44,6),v);k.rotation.x=Math.PI,k.position.set(-.2,-.08,.02);const Q=k.clone();Q.position.x=.2;const X=new x(new xt(.215,.024,6,16),l);X.rotation.x=Math.PI/2,X.position.y=.09,U.head.add(Se,D,k,Q,X);const oe=N(1.08);oe.position.set(0,-.32,.06),oe.rotation.set(.85,0,-.2),U.armR.add(oe),U.armL.rotation.x=-.55;const Me=N(.68);Me.position.set(0,-.32,.06),Me.rotation.set(.95,0,.25),U.armL.add(Me)}else if(s==="tomoe"){const O=I({torsoMat:c,legsMat:h,armsMat:c,bootsMat:l,skin:t,slim:!0}),U=new x(new me(.26,.4,.84,12),h);U.position.set(0,.56,0);const W=new x(new z(.51,.46,.33),h);W.position.set(0,1.18,0);const K=new x(new z(.53,.08,.35),C);K.position.set(0,1.4,0);const te=new x(new z(.12,.32,.26),h);te.position.set(-.34,1.38,0);const de=te.clone();de.position.x=.34;const Se=new x(new z(.54,.14,.35),c);Se.position.set(0,.94,0),e.add(U,W,K,te,de,Se);const D=new x(new Ke(.215,12,10),v);D.position.set(0,.06,-.02);const k=new x(new z(.32,.88,.14),v);k.position.set(0,-.32,-.17);const Q=new x(new xt(.21,.026,6,16),h);Q.rotation.x=Math.PI/2,Q.position.y=.09,O.head.add(D,k,Q),O.armL.rotation.x=-.85;const X=new x(new xt(.75,.022,8,22,Math.PI*.9),P);X.rotation.y=Math.PI/2,X.rotation.z=-Math.PI*.45,X.position.set(0,-.15,.24);const oe=new x(new me(.005,.005,1.42,6),c);oe.position.set(0,-.15,-.08),O.armL.add(X,oe);const Me=new x(new me(.01,.01,.85,6),P);Me.rotation.x=Math.PI/2,Me.position.set(0,-.32,.18),O.armR.add(Me)}else if(s==="masamune"){const O=I({torsoMat:r,legsMat:r,armsMat:r,bootsMat:o,skin:n}),U=new x(new me(.32,.46,.56,8),r);U.position.set(0,.72,0);const W=new x(new z(.16,.38,.32),r);W.position.set(-.39,1.4,0);const K=W.clone();K.position.x=.39;const te=new x(new z(.6,.12,.35),C);te.position.set(0,.96,0),e.add(U,W,K,te);const de=new x(new Ke(.062,8,8),o);de.scale.set(1.15,.9,.45),de.position.set(-.072,.02,.198);const Se=new x(new xt(.208,.015,6,16),o);Se.rotation.set(Math.PI/2,.22,0),Se.position.y=.04,O.head.add(de,Se);const D=new x(new Ke(.245,14,10,0,Math.PI*2,0,Math.PI*.5),r);D.position.y=.095;const k=new x(new me(.24,.32,.18,12,1,!0,Math.PI*.45,Math.PI*1.1),r);k.position.set(0,-.01,-.02);const Q=new x(new xt(.34,.036,8,22,Math.PI*1.15),C);Q.position.set(.12,.47,.19),Q.rotation.z=-Math.PI*.85;const X=new x(new me(.045,.045,.04,10),C);X.rotation.x=Math.PI/2,X.position.set(0,.23,.23),O.head.add(D,k,Q,X);const oe=N(1.06);oe.position.set(0,-.32,.06),oe.rotation.set(.85,0,-.15),O.armR.add(oe)}else if(s==="tell"){const O=I({torsoMat:f,legsMat:m,armsMat:f,bootsMat:m,skin:n}),U=new x(new me(.3,.38,.46,10),f);U.position.set(0,.72,0);const W=new x(new z(.6,.15,.34),C);W.position.set(0,.96,0);const K=new x(new z(.58,.86,.09),h);K.position.set(0,1.06,-.2),K.rotation.x=.12,e.add(U,W,K);const te=new x(new Be(.19,.34,10),p);te.rotation.x=Math.PI,te.position.set(0,-.21,.1);const de=new x(new z(.24,.065,.08),p);de.position.set(0,-.07,.18);const Se=new x(new me(.24,.26,.17,12),h);Se.position.y=.17;const D=new x(new Be(.05,.44,6),c);D.position.set(.18,.36,-.02),D.rotation.z=-.38,O.head.add(te,de,Se,D);const k=ne();k.position.set(-.08,-.28,.06),k.rotation.set(.45,-.25,0),O.armR.add(k)}else if(s==="winkelried"){const O=I({torsoMat:h,legsMat:M,armsMat:M,bootsMat:m,skin:n}),U=new x(new z(.29,.76,.32),c);U.position.set(.145,1.18,.005);const W=new x(new z(.3,.44,.32),h);W.position.set(-.15,.68,0);const K=new x(new z(.3,.44,.32),c);K.position.set(.15,.68,0);const te=new x(new z(.62,.11,.35),m);te.position.set(0,.92,0);const de=new x(new xt(.2,.065,8,14),M);de.rotation.x=Math.PI/2,de.position.set(0,1.54,0),e.add(U,W,K,te,de);const Se=new x(new Ke(.228,12,10,0,Math.PI*2,0,Math.PI*.72),M);Se.position.set(0,.03,-.02);const D=new x(new Be(.19,.32,10),p);D.rotation.x=Math.PI,D.position.set(0,-.2,.11);const k=new x(new z(.24,.06,.08),p);k.position.set(0,-.07,.18),O.head.add(Se,D,k);const Q=ee();Q.position.set(.06,-.58,.1),Q.rotation.x=.62,O.armR.add(Q)}else if(s==="stauffacher"){const O=I({torsoMat:a,legsMat:m,armsMat:a,bootsMat:m,skin:i}),U=new x(new me(.3,.42,.62,10),a);U.position.set(0,.62,0);const W=new x(new Be(.46,.48,12),h);W.position.set(0,1.44,0);const K=new x(new z(.58,.11,.34),m);K.position.set(0,.96,0);const te=new x(new z(.04,.15,.03),c);te.position.set(-.14,1.35,.25);const de=new x(new z(.15,.04,.03),c);de.position.set(-.14,1.35,.25),e.add(U,W,K,te,de);const Se=new x(new Be(.17,.46,12),y);Se.rotation.x=Math.PI,Se.position.set(0,-.3,.11);const D=new x(new z(.22,.055,.07),y);D.position.set(0,-.08,.18);const k=new x(new z(.21,.028,.04),y);k.position.set(0,.085,.185);const Q=new x(new Ke(.245,14,12,0,Math.PI*2,0,Math.PI*.56),h);Q.position.set(0,.095,-.05);const X=new x(new me(.23,.25,.26,12,1,!0,Math.PI*.55,Math.PI*.9),h);X.position.set(0,-.02,-.05);const oe=new x(new Be(.12,.45,8),h);oe.position.set(0,.12,-.32),oe.rotation.x=-1.15,O.head.add(Se,D,k,Q,X,oe);const Me=ne();Me.position.set(-.06,-.28,.08),Me.rotation.set(.45,-.2,0),O.armR.add(Me)}else if(s==="ulysses"){const O=new le({color:2383260,roughness:.8}),U=new le({color:9403748,roughness:.94}),W=I({torsoMat:l,legsMat:n,armsMat:n,bootsMat:m,skin:n}),K=new x(new me(.28,.35,.42,10),l);K.position.set(0,.76,0);const te=new x(new z(.58,.1,.33),C);te.position.set(0,.95,0);const de=new x(new z(.62,1.05,.1),O);de.position.set(0,1.04,-.2),de.rotation.x=.12;const Se=new x(new Ke(.05,8,8),C);Se.position.set(.18,1.48,.16),e.add(K,te,de,Se);const D=new x(new Be(.18,.32,10),p);D.rotation.x=Math.PI,D.position.set(0,-.22,.1);const k=new x(new z(.22,.055,.07),p);k.position.set(0,-.07,.18);const Q=new x(new Be(.24,.38,14),U);Q.position.set(0,.27,-.01),W.head.add(D,k,Q);const X=new x(new me(.02,.022,1.95,8),P);X.position.set(0,.2,.08),X.rotation.x=.65;const oe=new x(new Be(.042,.24,4),C);oe.position.set(0,1.06,.68),oe.rotation.x=.65,W.armR.add(X,oe)}else if(s==="achilles"){const O=new le({color:14459972,metalness:.86,roughness:.24}),U=I({torsoMat:O,legsMat:n,armsMat:n,bootsMat:O,skin:n}),W=new x(new me(.29,.36,.4,10),h);W.position.set(0,.76,0);const K=new x(new z(.6,1.08,.09),h);K.position.set(0,1.04,-.21),K.rotation.x=.13;const te=new x(new me(.115,.1,.44,10),O);te.position.set(0,-.18,0),U.legL.add(te),U.legR.add(te.clone()),e.add(W,K);const de=new x(new Ke(.245,14,10,0,Math.PI*2,0,Math.PI*.56),O);de.position.y=.085;const Se=new x(new z(.055,.16,.13),O);Se.position.set(-.17,-.05,.12);const D=Se.clone();D.position.x=.17;const k=new x(new z(.11,.26,.58),h);k.position.set(0,.36,-.04),U.head.add(de,Se,D,k);const Q=new x(new me(.46,.46,.06,22),O);Q.rotation.x=Math.PI/2,Q.position.set(-.08,-.16,.22);const X=new x(new Ke(.12,10,8),C);X.position.set(0,.03,0),Q.add(X),U.armL.add(Q);const oe=N(.76);oe.position.set(0,-.3,.08),oe.rotation.set(.85,0,-.15),U.armR.add(oe)}else if(s==="heracles"){const O=new le({color:13210428,roughness:.92}),U=new le({color:9394974,roughness:.95}),W=I({torsoMat:n,legsMat:n,armsMat:n,bootsMat:m,skin:n});W.torso.scale.set(1.16,1.06,1.14);const K=new x(new z(.76,.3,.44),U);K.position.set(0,1.48,-.02);const te=new x(new z(.68,1.1,.12),O);te.position.set(0,1,-.23),te.rotation.x=.12;const de=new x(new me(.32,.38,.44,10),O);de.position.set(0,.78,0),e.add(K,te,de);const Se=new x(new Ke(.26,12,10,0,Math.PI*2,0,Math.PI*.58),O);Se.position.set(0,.09,-.02);const D=new x(new xt(.25,.075,8,14),U);D.position.set(0,.04,-.02);const k=new x(new Ke(.065,8,8),O);k.position.set(-.18,.26,.02);const Q=k.clone();Q.position.x=.18;const X=new x(new Be(.18,.3,10),p);X.rotation.x=Math.PI,X.position.set(0,-.22,.1),W.head.add(Se,D,k,Q,X);const oe=new x(new me(.11,.042,1.15,8),P);oe.position.set(0,-.05,.25),oe.rotation.x=.85,W.armR.add(oe)}else if(s==="erik"){const O=new le({color:12074520,roughness:.88}),U=new le({color:3877922,roughness:.95}),W=new le({color:5195324,roughness:.88}),K=I({torsoMat:W,legsMat:m,armsMat:W,bootsMat:m,skin:t}),te=new x(new z(.74,.28,.42),U);te.position.set(0,1.48,-.02);const de=new x(new z(.68,1.12,.12),U);de.position.set(0,1,-.22),de.rotation.x=.12;const Se=new x(new z(.6,.11,.34),m);Se.position.set(0,.94,0),e.add(te,de,Se);const D=new x(new Ke(.225,12,10,0,Math.PI*2,0,Math.PI*.6),O);D.position.set(0,.07,-.02);const k=new x(new z(.36,.44,.16),O);k.position.set(0,-.08,-.15);const Q=new x(new Be(.2,.38,10),O);Q.rotation.x=Math.PI,Q.position.set(0,-.24,.1);const X=new x(new z(.24,.06,.08),O);X.position.set(0,-.07,.18),K.head.add(D,k,Q,X);const oe=new x(new me(.024,.026,.85,8),P);oe.position.set(0,-.12,.22),oe.rotation.x=.85;const Me=new x(new z(.028,.24,.2),w);Me.position.set(0,.18,.56),K.armR.add(oe,Me)}else if(s==="leif"){const O=new le({color:15123557,roughness:.86}),U=new le({color:1985932,roughness:.78}),W=I({torsoMat:M,legsMat:a,armsMat:U,bootsMat:m,skin:t}),K=new x(new z(.68,.24,.38),U);K.position.set(0,1.48,-.01);const te=new x(new z(.66,1.14,.1),U);te.position.set(0,1,-.22),te.rotation.x=.12;const de=new x(new Ke(.055,8,8),w);de.position.set(.18,1.48,.18);const Se=new x(new z(.59,.1,.34),m);Se.position.set(0,.94,0),e.add(K,te,de,Se);const D=new x(new Ke(.22,12,10,0,Math.PI*2,0,Math.PI*.58),O);D.position.set(0,.075,-.02);const k=new x(new z(.32,.36,.14),O);k.position.set(0,-.06,-.14);const Q=new x(new Be(.17,.3,10),O);Q.rotation.x=Math.PI,Q.position.set(0,-.22,.1);const X=new x(new z(.22,.055,.07),O);X.position.set(0,-.07,.18),W.head.add(D,k,Q,X);const oe=new x(new me(.024,.026,.85,8),P);oe.position.set(0,-.12,.22),oe.rotation.x=.85;const Me=new x(new z(.028,.24,.2),w);Me.position.set(0,.18,.56),W.armR.add(oe,Me)}else if(s==="ragnar"){const O=new le({color:3154972,roughness:.76}),U=new le({color:5393480,roughness:.95}),W=I({torsoMat:O,legsMat:a,armsMat:O,bootsMat:m,skin:n}),K=new x(new z(.74,.26,.42),U);K.position.set(0,1.48,-.02);const te=new x(new z(.6,.1,.34),m);te.position.set(0,1.24,0),te.rotation.z=.42;const de=new x(new me(.3,.38,.42,8),O);de.position.set(0,.74,0),e.add(K,te,de);const Se=new x(new Ke(.22,12,10,0,Math.PI*2,0,Math.PI*.58),v);Se.position.set(0,.07,-.02);const D=new x(new me(.042,.032,.48,6),v);D.position.set(-.18,-.12,-.06);const k=D.clone();k.position.x=.18;const Q=new x(new me(.055,.04,.56,6),v);Q.position.set(0,-.14,-.19);const X=new x(new Be(.18,.44,10),v);X.rotation.x=Math.PI,X.position.set(0,-.27,.1);const oe=new x(new xt(.055,.016,6,10),C);oe.rotation.x=Math.PI/2,oe.position.set(0,-.34,.11),W.head.add(Se,D,k,Q,X,oe);const Me=N(1);Me.position.set(0,-.3,.06),Me.rotation.set(.85,0,-.15),W.armR.add(Me)}const he=s==="earp"||s==="jane"||s==="billy"?7029800:s==="musashi"||s==="tomoe"||s==="masamune"?4540738:s==="ulysses"||s==="achilles"||s==="heracles"?15261904:s==="erik"||s==="leif"||s==="ragnar"?4938862:6120041,j=new x(new me(.72,.82,.16,20),new le({color:he,roughness:.78}));j.position.y=-.08;const $=new x(new xt(.76,.025,8,28),C);return $.rotation.x=Math.PI/2,$.position.y=.01,e.add(j,$),e}const nt=new Map;function Ct(s,e){const t=document.createElement("canvas");return t.width=s,t.height=e,t}function Pt(s,e=1,t=1,n=!0){const i=new nu(s);return i.wrapS=os,i.wrapT=os,i.repeat.set(e,t),n&&(i.colorSpace=Yt),i.anisotropy=8,i.needsUpdate=!0,i}function Gn(s,e){const t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function ii(s="western",e=2,t=2){const n=`wood_${s}_${e}_${t}`;if(nt.has(n))return nt.get(n);const i=512,o=Ct(i,i),r=o.getContext("2d"),a=Ct(i,i),l=a.getContext("2d"),c={western:["#8b5a34","#7a4c2a","#9c673c","#6e4223","#a67346"],saloon:["#6a3820","#5b2e19","#794126","#4f2614","#864c2e"],weathered:["#9c8669","#8a765c","#ab9578","#7d6a52","#b39e82"],darkJapan:["#3d271c","#332017","#493022","#2b1a12","#523626"],cedar:["#7d4e2d","#6f4426","#8a5935","#633c20","#94623c"],alpine:["#6b4428","#5c3920","#7a4f30","#4f301a","#855838"],redLacquer:["#b8291e","#a32118","#c73226","#911c14","#cf3b2e"]},h=c[s]||c.western,u=8,d=i/u;for(let m=0;m<u;m++){const v=m*d,g=h[m%h.length];r.fillStyle=g,r.fillRect(0,v,i,d),l.fillStyle="#9a9a9a",l.fillRect(0,v,i,d);for(let y=0;y<36;y++){const M=v+Math.random()*d,w=.05+Math.random()*.1;r.strokeStyle=Math.random()>.5?`rgba(255,220,180,${w})`:`rgba(20,10,4,${w*1.4})`,r.lineWidth=1+Math.random()*2,r.beginPath(),r.moveTo(0,M);for(let C=0;C<=i;C+=64)r.lineTo(C,M+Math.sin(C*.02+m*2.1+y)*2.2);r.stroke(),l.strokeStyle=Math.random()>.5?"rgba(220,220,220,0.16)":"rgba(60,60,60,0.18)",l.lineWidth=1.2,l.beginPath(),l.moveTo(0,M),l.lineTo(i,M),l.stroke()}if(Gn(m,3.7)>.45){const y=60+Gn(m,9.1)*(i-120),M=v+d*(.3+Gn(m,5.2)*.4),w=r.createRadialGradient(y,M,1,y,M,12);w.addColorStop(0,"rgba(30,15,6,0.65)"),w.addColorStop(1,"rgba(30,15,6,0)"),r.fillStyle=w,r.beginPath(),r.ellipse(y,M,14,7,0,0,Math.PI*2),r.fill()}r.fillStyle="rgba(15, 8, 3, 0.85)",r.fillRect(0,v,i,3),r.fillStyle="rgba(255, 225, 185, 0.14)",r.fillRect(0,v+3,i,2),l.fillStyle="#141414",l.fillRect(0,v,i,3.5);const p=(m*173+95)%(i-80)+40;r.fillStyle="rgba(12,6,2,0.75)",r.fillRect(p,v,2.5,d),l.fillStyle="#1a1a1a",l.fillRect(p,v,2.5,d);for(const y of[p-10,p+12])for(const M of[v+12,v+d-12])r.fillStyle="#241c16",r.beginPath(),r.arc(y,M,2.6,0,Math.PI*2),r.fill()}const f={map:Pt(o,e,t,!0),bumpMap:Pt(a,e,t,!1)};return nt.set(n,f),f}function Pn(s="desert",e=24,t=24){const n=`ground_${s}_${e}_${t}`;if(nt.has(n))return nt.get(n);const i=512,o=Ct(i,i),r=o.getContext("2d"),a=Ct(i,i),l=a.getContext("2d");if(s==="desert"){r.fillStyle="#c48f56",r.fillRect(0,0,i,i),l.fillStyle="#808080",l.fillRect(0,0,i,i);for(let h=0;h<420;h++){const u=Math.random()*i,d=Math.random()*i,f=6+Math.random()*34,m=Math.random();r.fillStyle=m>.6?"rgba(218, 168, 108, 0.16)":m>.25?"rgba(155, 96, 48, 0.16)":"rgba(122, 74, 38, 0.12)",r.beginPath(),r.ellipse(u,d,f*1.4,f*.7,Math.random()*Math.PI,0,Math.PI*2),r.fill(),l.fillStyle=m>.5?"rgba(195,195,195,0.18)":"rgba(65,65,65,0.18)",l.beginPath(),l.arc(u,d,f*.45,0,Math.PI*2),l.fill()}for(let h=0;h<240;h++){const u=Math.random()*i,d=Math.random()*i;r.fillStyle=Math.random()>.5?"#8f5d34":"#dcb27b",r.fillRect(u,d,2+Math.random()*3,2+Math.random()*2)}}else if(s==="japan_moss"){r.fillStyle="#4e6338",r.fillRect(0,0,i,i),l.fillStyle="#808080",l.fillRect(0,0,i,i);for(let h=0;h<500;h++){const u=Math.random()*i,d=Math.random()*i,f=8+Math.random()*26,m=Math.random();r.fillStyle=m>.65?"rgba(98, 128, 62, 0.22)":m>.3?"rgba(64, 84, 42, 0.22)":"rgba(115, 92, 62, 0.18)",r.beginPath(),r.arc(u,d,f,0,Math.PI*2),r.fill(),l.fillStyle=m>.5?"rgba(200,200,200,0.16)":"rgba(60,60,60,0.16)",l.beginPath(),l.arc(u,d,f*.5,0,Math.PI*2),l.fill()}for(let h=0;h<95;h++)r.fillStyle="rgba(255, 196, 214, 0.65)",r.beginPath(),r.ellipse(Math.random()*i,Math.random()*i,3,1.8,Math.random()*3,0,Math.PI*2),r.fill()}else if(s==="zen_sand"){r.fillStyle="#dfd8c8",r.fillRect(0,0,i,i),l.fillStyle="#808080",l.fillRect(0,0,i,i);for(let h=0;h<i;h+=16){r.strokeStyle="rgba(145, 136, 120, 0.55)",r.lineWidth=5,r.beginPath();for(let u=0;u<=i;u+=16){const d=h+Math.sin(u/i*Math.PI*4)*5;u===0?r.moveTo(u,d):r.lineTo(u,d)}r.stroke(),l.strokeStyle="#303030",l.lineWidth=6,l.beginPath();for(let u=0;u<=i;u+=16){const d=h+Math.sin(u/i*Math.PI*4)*5;u===0?l.moveTo(u,d):l.lineTo(u,d)}l.stroke()}}else if(s==="alpine_meadow"){r.fillStyle="#4f8236",r.fillRect(0,0,i,i),l.fillStyle="#808080",l.fillRect(0,0,i,i);for(let u=0;u<650;u++){const d=Math.random()*i,f=Math.random()*i,m=6+Math.random()*26,v=Math.random();r.fillStyle=v>.6?"rgba(112, 162, 62, 0.24)":v>.25?"rgba(62, 110, 42, 0.22)":"rgba(146, 178, 72, 0.16)",r.beginPath(),r.arc(d,f,m,0,Math.PI*2),r.fill(),l.fillStyle=v>.5?"rgba(200,200,200,0.16)":"rgba(70,70,70,0.16)",l.beginPath(),l.arc(d,f,m*.4,0,Math.PI*2),l.fill()}const h=["#ffe359","#ffffff","#63a8ff","#ff94b8"];for(let u=0;u<110;u++)r.fillStyle=h[u%h.length],r.beginPath(),r.arc(Math.random()*i,Math.random()*i,2.2,0,Math.PI*2),r.fill()}else if(s==="cobble"){r.fillStyle="#6c655d",r.fillRect(0,0,i,i),l.fillStyle="#252525",l.fillRect(0,0,i,i);const h=8,u=8,d=i/u,f=i/h;for(let m=0;m<h;m++)for(let v=0;v<u;v++){const g=m%2*(d*.5),p=(v*d+g)%i,y=m*f,M=118+Math.floor(Gn(v,m)*44);r.fillStyle=`rgb(${M}, ${M-4}, ${M-10})`,r.fillRect(p+3,y+3,d-6,f-6),l.fillStyle="#d4d4d4",l.fillRect(p+3,y+3,d-6,f-6)}}else if(s==="greek_sand"){r.fillStyle="#e5cf9c",r.fillRect(0,0,i,i),l.fillStyle="#808080",l.fillRect(0,0,i,i);for(let h=0;h<420;h++){const u=Math.random()*i,d=Math.random()*i,f=8+Math.random()*28;r.fillStyle=Math.random()>.5?"rgba(248, 234, 198, 0.24)":"rgba(196, 162, 104, 0.16)",r.beginPath(),r.ellipse(u,d,f*1.5,f*.65,.25,0,Math.PI*2),r.fill(),l.fillStyle=Math.random()>.5?"rgba(190,190,190,0.16)":"rgba(70,70,70,0.16)",l.beginPath(),l.arc(u,d,f*.4,0,Math.PI*2),l.fill()}}else if(s==="arctic_snow"){r.fillStyle="#e6eff8",r.fillRect(0,0,i,i),l.fillStyle="#828282",l.fillRect(0,0,i,i);for(let h=0;h<380;h++){const u=Math.random()*i,d=Math.random()*i,f=10+Math.random()*34;r.fillStyle=Math.random()>.5?"rgba(255, 255, 255, 0.35)":"rgba(176, 202, 230, 0.22)",r.beginPath(),r.ellipse(u,d,f*1.4,f*.7,.4,0,Math.PI*2),r.fill(),l.fillStyle=Math.random()>.5?"rgba(210,210,210,0.18)":"rgba(65,65,65,0.18)",l.beginPath(),l.arc(u,d,f*.45,0,Math.PI*2),l.fill()}for(let h=0;h<120;h++)r.fillStyle="rgba(255, 255, 255, 0.8)",r.fillRect(Math.random()*i,Math.random()*i,2,2)}const c={map:Pt(o,e,t,!0),bumpMap:Pt(a,e,t,!1)};return nt.set(n,c),c}function xs(s="castle",e=2,t=2){const n=`stone_${s}_${e}_${t}`;if(nt.has(n))return nt.get(n);const i=512,o=Ct(i,i),r=o.getContext("2d"),a=Ct(i,i),l=a.getContext("2d"),c=s==="redrock"?"#7a3b22":s==="temple"?"#4a4d46":"#57534e";if(r.fillStyle=c,r.fillRect(0,0,i,i),l.fillStyle="#222222",l.fillRect(0,0,i,i),s==="redrock")for(let u=0;u<i;u+=6){const d=Math.sin(u*.045)*18+Math.cos(u*.11)*10,f=Math.min(255,Math.max(80,178+d)),m=Math.min(255,Math.max(40,86+d*.6)),v=Math.min(255,Math.max(25,50+d*.4));r.fillStyle=`rgb(${f|0},${m|0},${v|0})`,r.fillRect(0,u,i,7);const g=Math.min(240,Math.max(40,128+d*2.5))|0;l.fillStyle=`rgb(${g},${g},${g})`,l.fillRect(0,u,i,7)}else{const d=i/8;for(let f=0;f<8;f++){let m=f%2*-36;for(;m<i;){const v=64+Math.floor(Gn(m,f)*58),g=s==="temple"?108+Math.floor(Gn(m+3,f+5)*42):122+Math.floor(Gn(m+1,f+9)*52),p=s==="temple"?6:0;r.fillStyle=`rgb(${g}, ${g+p}, ${g-4})`,r.fillRect(m+3,f*d+3,v-5,d-5),r.fillStyle="rgba(255,255,255,0.12)",r.fillRect(m+3,f*d+3,v-5,4),l.fillStyle="#cfcfcf",l.fillRect(m+3,f*d+3,v-5,d-5),m+=v}}for(let f=0;f<90;f++)r.fillStyle=s==="temple"?"rgba(72, 108, 52, 0.22)":"rgba(60, 56, 48, 0.16)",r.beginPath(),r.arc(Math.random()*i,Math.random()*i,6+Math.random()*18,0,Math.PI*2),r.fill()}const h={map:Pt(o,e,t,!0),bumpMap:Pt(a,e,t,!1)};return nt.set(n,h),h}function Hm(s=2,e=1){const t=`shoji_${s}_${e}`;if(nt.has(t))return nt.get(t);const n=512,i=Ct(n,n),o=i.getContext("2d"),r=o.createLinearGradient(0,0,0,n);r.addColorStop(0,"#fff2d2"),r.addColorStop(.55,"#f6dfb2"),r.addColorStop(1,"#e6c388"),o.fillStyle=r,o.fillRect(0,0,n,n);for(let h=0;h<200;h++)o.fillStyle="rgba(255,255,255,0.14)",o.fillRect(Math.random()*n,Math.random()*n,12,1);o.fillStyle="#2d1a11";const a=6,l=8;for(let h=0;h<=a;h++){const u=h/a*n;o.fillRect(u-5,0,10,n)}for(let h=0;h<=l;h++){const u=h/l*n;o.fillRect(0,u-4,n,8)}o.lineWidth=24,o.strokeStyle="#23130c",o.strokeRect(0,0,n,n);const c=Pt(i,s,e,!0);return nt.set(t,c),c}function fa(s="japan",e=4,t=2){const n=`roof_${s}_${e}_${t}`;if(nt.has(n))return nt.get(n);const i=512,o=Ct(i,i),r=o.getContext("2d"),a=Ct(i,i),l=a.getContext("2d");if(s==="japan"){r.fillStyle="#2e353f",r.fillRect(0,0,i,i),l.fillStyle="#404040",l.fillRect(0,0,i,i);const h=10,u=10,d=i/h,f=i/u;for(let m=0;m<u;m++)for(let v=0;v<h;v++){const g=v*d,p=m*f,y=r.createLinearGradient(g,p,g+d,p);y.addColorStop(0,"#1e242c"),y.addColorStop(.5,"#4c5766"),y.addColorStop(1,"#1d232b"),r.fillStyle=y,r.fillRect(g+2,p+2,d-4,f-3),r.fillStyle="rgba(0,0,0,0.55)",r.fillRect(g,p+f-4,d,4),l.fillStyle="#cccccc",l.beginPath(),l.arc(g+d/2,p+f/2,d*.42,0,Math.PI*2),l.fill()}}else if(s==="terracotta"){r.fillStyle="#a8472a",r.fillRect(0,0,i,i),l.fillStyle="#404040",l.fillRect(0,0,i,i);const h=10,u=9,d=i/h,f=i/u;for(let m=0;m<u;m++)for(let v=0;v<h;v++){const g=v*d,p=m*f,y=r.createLinearGradient(g,p,g+d,p);y.addColorStop(0,"#8c351e"),y.addColorStop(.5,"#d46b44"),y.addColorStop(1,"#7a2b17"),r.fillStyle=y,r.fillRect(g+2,p+2,d-4,f-3),r.fillStyle="rgba(0,0,0,0.4)",r.fillRect(g,p+f-4,d,4),l.fillStyle="#d0d0d0",l.fillRect(g+2,p+2,d-4,f-4)}}else{r.fillStyle="#4a3525",r.fillRect(0,0,i,i),l.fillStyle="#333333",l.fillRect(0,0,i,i);const h=12,u=10,d=i/u,f=i/h;for(let m=0;m<h;m++)for(let v=0;v<u;v++){const g=m%2*(d*.5),p=(v*d+g)%i,y=m*f,M=78+Math.floor(Gn(v,m)*34);r.fillStyle=`rgb(${M+18}, ${M}, ${M-16})`,r.fillRect(p+1,y+1,d-3,f-3),l.fillStyle="#c8c8c8",l.fillRect(p+1,y+1,d-3,f-3)}}const c={map:Pt(o,e,t,!0),bumpMap:Pt(a,e,t,!1)};return nt.set(n,c),c}function Gm(s=1,e=1){const t=`alpine_fachwerk_${s}_${e}`;if(nt.has(t))return nt.get(t);const n=512,i=Ct(n,n),o=i.getContext("2d");o.fillStyle="#ebe1cd",o.fillRect(0,0,n,n);for(let a=0;a<300;a++)o.fillStyle=Math.random()>.5?"rgba(255,255,255,0.16)":"rgba(145,125,95,0.12)",o.beginPath(),o.arc(Math.random()*n,Math.random()*n,6+Math.random()*20,0,Math.PI*2),o.fill();o.strokeStyle="#3e2718",o.fillStyle="#3e2718",o.fillRect(0,0,n,28),o.fillRect(0,n-28,n,28),o.fillRect(0,n/2-12,n,24),o.fillRect(0,0,26,n),o.fillRect(n-26,0,26,n),o.fillRect(n/2-12,0,24,n),o.lineWidth=20,o.beginPath(),o.moveTo(20,n/2),o.lineTo(n/2,20),o.moveTo(n-20,n/2),o.lineTo(n/2,20),o.stroke();const r=Pt(i,s,e,!0);return nt.set(t,r),r}function Vm(s,e={}){const{bg:t="#3b2112",border:n="#d49a45",fg:i="#f8e6c1",sub:o="",width:r=512,height:a=160,font:l="bold 72px Georgia, serif"}=e,c=`sign_${s}_${o}_${t}_${i}`;if(nt.has(c))return nt.get(c);const h=Ct(r,a),u=h.getContext("2d");u.fillStyle=t,u.fillRect(0,0,r,a);for(let f=0;f<6;f++)u.fillStyle="rgba(0,0,0,0.16)",u.fillRect(0,f/6*a,r,2);u.strokeStyle=n,u.lineWidth=10,u.strokeRect(10,10,r-20,a-20),u.lineWidth=3,u.strokeRect(20,20,r-40,a-40),u.fillStyle=i,u.font=l,u.textAlign="center",u.textBaseline="middle",u.shadowColor="rgba(0,0,0,0.7)",u.shadowBlur=4,u.shadowOffsetY=3,u.fillText(s,r/2,o?a*.44:a*.52),o&&(u.font="bold 24px Georgia, serif",u.fillStyle=n,u.fillText(o,r/2,a*.78));const d=Pt(h,1,1,!0);return d.wrapS=Dt,d.wrapT=Dt,nt.set(c,d),d}function io(s="austria"){const e=`banner_${s}`;if(nt.has(e))return nt.get(e);const t=Ct(256,512),n=t.getContext("2d");s==="austria"?(n.fillStyle="#c41e22",n.fillRect(0,0,256,512),n.fillStyle="#f2ede0",n.fillRect(0,170,256,170),n.strokeStyle="#d4a63e",n.lineWidth=14,n.strokeRect(7,7,242,498),n.fillStyle="#1d1916",n.beginPath(),n.moveTo(128,195),n.lineTo(170,245),n.lineTo(148,258),n.lineTo(160,315),n.lineTo(128,294),n.lineTo(96,315),n.lineTo(108,258),n.lineTo(86,245),n.closePath(),n.fill()):s==="uri"?(n.fillStyle="#f2c629",n.fillRect(0,0,256,512),n.strokeStyle="#1a1510",n.lineWidth=10,n.strokeRect(5,5,246,502),n.strokeStyle="#141210",n.lineWidth=22,n.lineCap="round",n.beginPath(),n.moveTo(78,178),n.quadraticCurveTo(32,130,56,78),n.moveTo(178,178),n.quadraticCurveTo(224,130,200,78),n.stroke(),n.fillStyle="#141210",n.beginPath(),n.ellipse(54,194,24,11,-.3,0,Math.PI*2),n.ellipse(202,194,24,11,.3,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(70,172),n.lineTo(186,172),n.lineTo(166,305),n.quadraticCurveTo(128,336,90,305),n.closePath(),n.fill(),n.fillStyle="#fff5dc",n.beginPath(),n.ellipse(98,224,14,9,.15,0,Math.PI*2),n.ellipse(158,224,14,9,-.15,0,Math.PI*2),n.fill(),n.fillStyle="#c41e22",n.beginPath(),n.arc(100,224,5,0,Math.PI*2),n.arc(156,224,5,0,Math.PI*2),n.fill(),n.fillStyle="#d12026",n.beginPath(),n.moveTo(116,316),n.quadraticCurveTo(128,378,140,316),n.closePath(),n.fill(),n.strokeStyle="#d12026",n.lineWidth=11,n.beginPath(),n.arc(128,304,22,.15*Math.PI,.85*Math.PI),n.stroke(),n.fillStyle="#1a1510",n.font="bold 34px Georgia, serif",n.textAlign="center",n.fillText("URI • 1307",128,456)):s==="swiss"?(n.fillStyle="#c92323",n.fillRect(0,0,256,512),n.fillStyle="#ffffff",n.fillRect(102,130,52,190),n.fillRect(33,199,190,52),n.strokeStyle="#e8c468",n.lineWidth=10,n.strokeRect(5,5,246,502)):s==="japan"&&(n.fillStyle="#1b2845",n.fillRect(0,0,256,512),n.strokeStyle="#e3b859",n.lineWidth=10,n.strokeRect(8,8,240,496),n.strokeStyle="#f0c663",n.lineWidth=12,n.beginPath(),n.arc(128,180,62,0,Math.PI*2),n.stroke(),n.fillStyle="#f0c663",n.font="bold 94px Georgia, serif",n.textAlign="center",n.fillText("武",128,212),n.fillText("士",128,370));const i=Pt(t,1,1,!0);return i.wrapS=Dt,i.wrapT=Dt,nt.set(e,i),i}function Wm(){const s="wanted_poster";if(nt.has(s))return nt.get(s);const e=Ct(256,340),t=e.getContext("2d");t.fillStyle="#e5cf9e",t.fillRect(0,0,256,340),t.strokeStyle="#4a3118",t.lineWidth=8,t.strokeRect(10,10,236,320),t.fillStyle="#2d180a",t.font="bold 40px Georgia, serif",t.textAlign="center",t.fillText("WANTED",128,56),t.fillStyle="#3b2412",t.beginPath(),t.ellipse(128,130,56,12,0,0,Math.PI*2),t.fill(),t.fillRect(98,96,60,34),t.beginPath(),t.arc(128,162,26,0,Math.PI*2),t.fill(),t.fillRect(88,190,80,46),t.font="bold 26px Georgia, serif",t.fillText("DEAD OR ALIVE",128,272),t.fillStyle="#992214",t.font="bold 34px Georgia, serif",t.fillText("$5,000",128,312);const n=Pt(e,1,1,!0);return nt.set(s,n),n}function Xm(s=2,e=2){const t=`marble_${s}_${e}`;if(nt.has(t))return nt.get(t);const n=512,i=Ct(n,n),o=i.getContext("2d"),r=Ct(n,n),a=r.getContext("2d");o.fillStyle="#f5f1e8",o.fillRect(0,0,n,n),a.fillStyle="#909090",a.fillRect(0,0,n,n);for(let c=0;c<26;c++){o.strokeStyle=c%3===0?"rgba(186, 174, 152, 0.26)":"rgba(155, 162, 172, 0.2)",o.lineWidth=1.5+Math.random()*3.5,o.beginPath();let h=Math.random()*n;o.moveTo(0,h);for(let u=0;u<=n;u+=32)h+=Math.sin(u*.02+c)*8+(Math.random()-.5)*6,o.lineTo(u,h);o.stroke()}o.strokeStyle="rgba(140, 128, 108, 0.35)",o.lineWidth=2,a.strokeStyle="#383838",a.lineWidth=3;for(let c=0;c<4;c++){const h=c/4*n;o.beginPath(),o.moveTo(0,h),o.lineTo(n,h),o.stroke(),a.beginPath(),a.moveTo(0,h),a.lineTo(n,h),a.stroke()}const l={map:Pt(i,s,e,!0),bumpMap:Pt(r,s,e,!1)};return nt.set(t,l),l}function qm(){const s="spartan_shield_lambda";if(nt.has(s))return nt.get(s);const e=256,t=Ct(e,e),n=t.getContext("2d"),i=n.createRadialGradient(128,128,12,128,128,126);i.addColorStop(0,"#f3ca6b"),i.addColorStop(.7,"#c78f34"),i.addColorStop(.92,"#8c5d19"),i.addColorStop(1,"#5e3c0e"),n.fillStyle=i,n.beginPath(),n.arc(128,128,126,0,Math.PI*2),n.fill(),n.strokeStyle="#ffe394",n.lineWidth=10,n.beginPath(),n.arc(128,128,114,0,Math.PI*2),n.stroke(),n.strokeStyle="#9e1919",n.lineWidth=24,n.lineCap="round",n.lineJoin="miter",n.beginPath(),n.moveTo(64,198),n.lineTo(128,54),n.lineTo(192,198),n.stroke();const o=Pt(t,1,1,!0);return o.wrapS=Dt,o.wrapT=Dt,nt.set(s,o),o}function Xr(s=0){const e=`viking_shield_${s}`;if(nt.has(e))return nt.get(e);const t=256,n=Ct(t,t),i=n.getContext("2d"),o=[["#a82424","#e8dec8"],["#204b7a","#e8dec8"],["#1e523a","#d9a438"],["#8c2420","#d9a438"]],[r,a]=o[s%o.length];for(let h=0;h<8;h++)i.fillStyle=h%2===0?r:a,i.beginPath(),i.moveTo(128,128),i.arc(128,128,122,h*Math.PI/4,(h+1)*Math.PI/4),i.closePath(),i.fill();i.strokeStyle="#4a3a2a",i.lineWidth=14,i.beginPath(),i.arc(128,128,118,0,Math.PI*2),i.stroke();const l=i.createRadialGradient(122,122,4,128,128,30);l.addColorStop(0,"#eef3f7"),l.addColorStop(.6,"#7a8490"),l.addColorStop(1,"#2b3036"),i.fillStyle=l,i.beginPath(),i.arc(128,128,28,0,Math.PI*2),i.fill();const c=Pt(n,1,1,!0);return c.wrapS=Dt,c.wrapT=Dt,nt.set(e,c),c}function bc(s="greece"){const e=`sail_${s}`;if(nt.has(e))return nt.get(e);const t=Ct(256,256),n=t.getContext("2d"),i=6,o=256/i,r=s==="greece"?"#f5efe2":"#f2e8d5",a=s==="greece"?"#2366a8":"#a82222";for(let c=0;c<i;c++)n.fillStyle=c%2===0?r:a,n.fillRect(c*o,0,o+1,256);n.strokeStyle="rgba(0,0,0,0.18)",n.lineWidth=4,n.strokeRect(2,2,252,252);const l=Pt(t,1,1,!0);return l.wrapS=Dt,l.wrapT=Dt,nt.set(e,l),l}const Ec={cowboy:{name:"Outlaw Cowboy",hp:65,speed:3.6,range:34,fireRate:1.55,damage:11,score:150,style:"ranged",projectileColor:16765542},bandito:{name:"Mexican Bandito",hp:75,speed:4.5,range:30,fireRate:1.25,damage:13,score:200,style:"ranged",projectileColor:16756290},boss_west:{name:"EL DIABLO — KING OF RED GULCH",hp:360,speed:4.2,range:42,fireRate:.78,damage:16,score:1200,style:"boss_ranged",scale:1.28,projectileColor:16739115},ninja:{name:"Shadow Ninja",hp:60,speed:6.4,range:24,fireRate:1.15,damage:12,score:200,style:"skirmisher",projectileColor:13955583},ronin:{name:"Rōnin Samurai",hp:95,speed:4.6,range:22,fireRate:1.4,damage:16,score:260,style:"hybrid",projectileColor:16758876},boss_japan:{name:"LORD KUROGANE — IRON SHOGUN",hp:420,speed:5,range:34,fireRate:.85,damage:18,score:1500,style:"boss_hybrid",scale:1.32,projectileColor:16734774},halberdier:{name:"Austrian Halberdier",hp:95,speed:4.9,range:3.4,fireRate:1.05,damage:18,score:220,style:"melee",projectileColor:16777215},arquebusier:{name:"Habsburg Arquebusier",hp:75,speed:3.4,range:38,fireRate:1.5,damage:15,score:240,style:"ranged",projectileColor:16770204},boss_swiss:{name:"CAPTAIN VON GESSLER — HABSBURG VOGT",hp:460,speed:4.6,range:38,fireRate:.8,damage:19,score:1800,style:"boss_ranged",scale:1.32,projectileColor:16732728},spartan_hoplite:{name:"Spartan Hoplite",hp:95,speed:4.8,range:3.5,fireRate:1.05,damage:17,score:230,style:"melee",projectileColor:16765542},spartan_skirmisher:{name:"Spartan Javelineer",hp:78,speed:4.1,range:35,fireRate:1.4,damage:14,score:240,style:"ranged",projectileColor:16765542},boss_greece:{name:"ARCHIDAMOS — SPARTAN POLEMARCH",hp:460,speed:4.7,range:36,fireRate:.85,damage:18,score:1800,style:"boss_hybrid",scale:1.32,projectileColor:16747563},viking_warrior:{name:"Viking Huscarl",hp:95,speed:4.6,range:24,fireRate:1.35,damage:16,score:240,style:"hybrid",projectileColor:11464959},viking_archer:{name:"Norse Bowman",hp:74,speed:3.8,range:38,fireRate:1.45,damage:14,score:230,style:"ranged",projectileColor:14284543},viking_berserker:{name:"Viking Berserker",hp:105,speed:6.2,range:3.4,fireRate:.88,damage:19,score:280,style:"melee",projectileColor:16777215},boss_scandinavia:{name:"JARL HAKON — LORD OF THE FJORD",hp:490,speed:4.9,range:36,fireRate:.82,damage:19,score:2e3,style:"boss_hybrid",scale:1.34,projectileColor:6484680}};function Ym(s){const e=new Ye,t=s.startsWith("boss_"),n=new le({color:s==="bandito"?13011548:14922122,roughness:.72}),i=new le({color:2759700,roughness:.8}),o=new le({color:11977423,metalness:.85,roughness:.25}),r=new le({color:15119943,metalness:.85,roughness:.25}),a=new le({color:12067362,roughness:.6}),l=new le({color:15657180,roughness:.7});let c=6044708,h=3091240;s==="bandito"?(c=10368030,h=3877920):s==="boss_west"?(c=1971988,h=1446416):s==="ninja"?(c=1580070,h=1316640):s==="ronin"?(c=2374492,h=1975344):s==="boss_japan"?(c=8197140,h=1709076):s==="halberdier"||s==="arquebusier"?(c=11871268,h=3551792):s==="boss_swiss"?(c=9377816,h=2631208):s==="spartan_hoplite"||s==="spartan_skirmisher"||s==="boss_greece"?(c=12090925,h=11018272):s==="viking_warrior"||s==="viking_archer"?(c=4935512,h=3812901):s==="viking_berserker"?(c=6046512,h=2958108):s==="boss_scandinavia"&&(c=2700098,h=2498588);const u=new le({color:c,roughness:.68}),d=new le({color:h,roughness:.78}),f=new me(.11,.095,.82,8),m=new x(f,d);m.position.set(-.15,.41,0),m.castShadow=!0;const v=new x(f,d);v.position.set(.15,.41,0),v.castShadow=!0;const g=new z(.17,.22,.28),p=new x(g,i);p.position.set(0,-.34,.04),m.add(p);const y=p.clone();v.add(y);const M=new x(new z(.56,.72,.32),u);M.position.set(0,1.16,0),M.castShadow=!0,M.userData.hitZone="body";const w=new me(.085,.075,.62,8),C=new x(w,u);C.position.set(-.37,1.18,.08),C.rotation.x=-.35,C.castShadow=!0;const P=new x(w,u);P.position.set(.37,1.18,.2),P.rotation.x=-1.1,P.castShadow=!0;const L=new x(new Ke(.21,12,10),s==="ninja"?u:n);L.position.set(0,1.72,0),L.castShadow=!0,L.userData.hitZone="head";const I=new pt({color:t?16759603:1182728}),E=new x(new Ke(.026,6,6),I);E.position.set(-.07,.03,.19);const S=E.clone();if(S.position.x=.07,L.add(E,S),s==="cowboy"||s==="boss_west"){const j=new x(new me(.42,.44,.04,14),i);j.position.y=.15;const $=new x(new me(.19,.23,.22,12),i);$.position.y=.26;const O=new x(new me(.22,.23,.05,12),t?r:a);O.position.y=.19,L.add(j,$,O);const U=new x(new Be(.24,.26,5),a);U.rotation.x=Math.PI,U.position.set(0,1.48,.12),e.add(U);const W=new x(new z(.58,.56,.12),u);W.position.set(0,.72,-.14),e.add(W);const K=new x(new z(.06,.08,.46),o);K.position.set(0,-.28,.22),P.add(K)}else if(s==="bandito"){const j=new x(new me(.56,.62,.05,18),new le({color:13212757,roughness:.75}));j.position.y=.15;const $=new x(new xt(.58,.025,6,20),a);$.rotation.x=Math.PI/2,$.position.y=.15;const O=new x(new Be(.22,.34,12),new le({color:12093762,roughness:.75}));O.position.y=.32,L.add(j,$,O);const U=new x(new Be(.48,.62,8),new le({color:13189668,roughness:.8}));U.position.set(0,1.24,0);const W=new x(new me(.36,.44,.12,8),r);W.position.set(0,1.04,0),e.add(U,W);const K=new x(new me(.028,.032,.88,8),i);K.rotation.x=Math.PI/2,K.position.set(0,-.26,.32),P.add(K)}else if(s==="ninja"){const j=new x(new xt(.215,.022,6,14),o);j.rotation.x=Math.PI/2,j.position.y=.08,L.add(j);const $=new x(new xt(.22,.055,6,12),a);$.rotation.x=Math.PI/2,$.position.set(0,1.52,0);const O=new x(new z(.14,.58,.03),a);O.position.set(.08,1.32,-.26),O.rotation.x=.35,e.add($,O);const U=new x(new z(.03,.75,.05),o);U.position.set(0,-.35,.28),U.rotation.x=Math.PI/2,P.add(U)}else if(s==="ronin"||s==="boss_japan"){if(t){const W=new x(new Ke(.25,12,8,0,Math.PI*2,0,Math.PI*.6),new le({color:1906455,metalness:.7,roughness:.3}));W.position.y=.08;const K=new x(new z(.05,.36,.04),r);K.position.set(-.14,.34,.16),K.rotation.z=.45;const te=K.clone();te.position.x=.14,te.rotation.z=-.45,L.add(W,K,te)}else{const W=new x(new Be(.52,.25,16),new le({color:12755556,roughness:.9}));W.position.y=.22,L.add(W)}const j=new z(.14,.34,.28),$=new x(j,t?r:a);$.position.set(-.38,1.4,0);const O=$.clone();O.position.x=.38,e.add($,O);const U=new x(new z(.035,1.05,.055),o);U.position.set(0,-.35,.42),U.rotation.x=Math.PI/2,P.add(U)}else if(s==="halberdier"||s==="arquebusier"||s==="boss_swiss"){const j=new x(new z(.58,.52,.35),t?r:o);j.position.set(0,1.22,0);const $=new x(new z(.6,.16,.36),l);$.position.set(0,1.06,0),e.add(j,$);const O=new x(new Ke(.24,12,8,0,Math.PI*2,0,Math.PI*.62),t?r:o);O.position.y=.08;const U=new x(new me(.32,.36,.04,14),t?r:o);U.position.y=.09;const W=new x(new Be(.08,.42,8),a);if(W.position.set(0,.34,-.08),W.rotation.x=-.38,L.add(O,U,W),s==="halberdier"){const K=new x(new me(.025,.025,2.2,8),i);K.position.set(0,.1,.34);const te=new x(new z(.03,.42,.28),o);te.position.set(0,1,.44),P.add(K,te)}else{const K=new x(new me(.03,.035,1.05,8),o);K.rotation.x=Math.PI/2,K.position.set(0,-.25,.42),P.add(K)}}else if(s==="spartan_hoplite"||s==="spartan_skirmisher"||s==="boss_greece"){const j=new le({color:t?15381832:13209398,metalness:.84,roughness:.28}),$=new x(new z(.58,.56,.34),j);$.position.set(0,1.2,0);const O=new x(new z(.64,1.15,.1),a);O.position.set(0,1.02,-.22),O.rotation.x=.14;const U=new x(new me(.28,.34,.36,8),a);U.position.set(0,.78,0),e.add($,O,U);const W=new x(new Ke(.245,12,10,0,Math.PI*2,0,Math.PI*.72),j);W.position.y=.06;const K=new x(new z(.06,.18,.14),j);K.position.set(-.17,-.05,.12);const te=K.clone();te.position.x=.17;const de=new x(t?new z(.58,.24,.11):new z(.11,.24,.54),a);de.position.set(0,.34,t?0:-.04),L.add(W,K,te,de);const Se=new le({map:qm(),metalness:.5,roughness:.38}),D=new x(new me(.46,.46,.06,20),[j,Se,j]);D.rotation.x=Math.PI/2,D.position.set(-.08,-.18,.24),C.add(D);const k=s==="spartan_hoplite"?2.25:1.75,Q=new x(new me(.024,.026,k,8),i);Q.rotation.x=Math.PI/2,Q.position.set(0,-.26,.45);const X=new x(new Be(.045,.28,4),j);X.rotation.x=Math.PI/2,X.position.set(0,-.26,.45+k*.5+.1),P.add(Q,X)}else if(s==="viking_warrior"||s==="viking_archer"||s==="viking_berserker"||s==="boss_scandinavia"){const j=new le({color:s==="viking_berserker"?4863269:3879725,roughness:.95}),$=s==="viking_berserker"?8141598:5061160,O=new le({color:$,roughness:.92}),U=t?r:o,W=new x(new z(.68,.26,.4),j);W.position.set(0,1.48,-.02);const K=new x(new z(.6,.95,.1),t?a:j);K.position.set(0,1,-.22),e.add(W,K);const te=new x(new Be(.18,.34,10),O);if(te.rotation.x=Math.PI,te.position.set(0,-.2,.1),L.add(te),s==="viking_berserker"){const de=new x(new Ke(.245,10,8,0,Math.PI*2,0,Math.PI*.62),j);de.position.set(0,.08,-.03),L.add(de)}else{const de=new x(new Ke(.24,12,10,0,Math.PI*2,0,Math.PI*.56),U);de.position.y=.08;const Se=new x(new xt(.235,.022,6,16),U);Se.rotation.x=Math.PI/2,Se.position.y=.08;const D=new x(new z(.04,.15,.03),U);D.position.set(0,.01,.22),L.add(de,Se,D)}if(s!=="viking_berserker"&&s!=="viking_archer"){const de=Xr(t?3:0),Se=new le({map:de,roughness:.72}),D=new x(new me(.45,.45,.06,18),[i,Se,i]);D.rotation.x=Math.PI/2,D.position.set(-.08,-.18,.24),C.add(D)}if(s==="viking_archer"){const de=new x(new xt(.55,.024,6,14,Math.PI*.9),i);de.rotation.y=Math.PI/2,de.rotation.z=-Math.PI*.45,de.position.set(0,-.18,.28),C.add(de)}else{const de=Se=>{const D=new x(new me(.024,.026,.92,8),i);D.rotation.x=Math.PI/2,D.position.set(0,-.26,.34);const k=new x(new z(.03,.26,.22),o);k.position.set(0,-.26,.74),Se.add(D,k)};de(P),s==="viking_berserker"&&(C.rotation.x=-1.1,de(C))}}const N=new x(new Ke(.14,6,6),new pt({color:16765530,transparent:!0,opacity:0}));N.position.set(0,-.28,.68),P.add(N);const ne=new x(new gt(.95,.11),new pt({color:1445130,side:wt}));ne.position.set(0,2.35,0),ne.visible=!1;const ee=new x(new gt(.9,.075),new pt({color:t?16755234:15219500,side:wt}));ee.position.set(0,0,.01),ne.add(ee),e.add(m,v,M,C,P,L,ne);const he=Ec[s];return he.scale&&e.scale.setScalar(he.scale),{root:e,legL:m,legR:v,armL:C,armR:P,torso:M,head:L,muzzle:N,hpBg:ne,hpFill:ee}}class Al{constructor(e,t,n=1){const i=Ec[e];this.type=e,this.name=i.name,this.isBoss=e.startsWith("boss_"),this.maxHp=Math.round(i.hp*n),this.hp=this.maxHp,this.speed=i.speed,this.range=i.range,this.fireRate=i.fireRate/(.8+n*.2),this.damage=Math.round(i.damage*n),this.score=i.score,this.style=i.style,this.projectileColor=i.projectileColor,this.parts=Ym(e),this.mesh=this.parts.root,this.mesh.position.copy(t),this.spawnPos=t.clone(),this.alive=!0,this.alert=!1,this.fireCooldown=.6+Math.random()*.9,this.strafeDir=Math.random()>.5?1:-1,this.strafeTimer=1.2+Math.random()*2,this.hurtFlash=0,this.muzzleFlash=0,this.deathTimer=0,this.walkPhase=Math.random()*Math.PI*2,this.radius=this.isBoss?.68:.46,this.headHeight=this.isBoss?2.15:1.72}getHitMeshes(){if(!this.alive)return[];const e=[];return this.mesh.traverse(t=>{t.isMesh&&t!==this.parts.hpBg&&t!==this.parts.hpFill&&t!==this.parts.muzzle&&(t.userData.enemy=this,e.push(t))}),e}takeDamage(e,t=!1){if(!this.alive)return!1;if(this.alert=!0,this.hp-=e,this.hurtFlash=.16,!this.isBoss){this.parts.hpBg.visible=!0;const n=Math.max(0,this.hp/this.maxHp);this.parts.hpFill.scale.x=Math.max(.001,n),this.parts.hpFill.position.x=-(1-n)*.45}return this.hp<=0?(this.alive=!1,this.hp=0,this.parts.hpBg.visible=!1,!0):!1}update(e,t,n,i){if(!this.alive){this.deathTimer=Math.min(1,this.deathTimer+e*2.8),this.mesh.rotation.x=-this.deathTimer*(Math.PI*.48),this.mesh.position.y=Math.max(n.getFloorHeight(this.mesh.position.x,this.mesh.position.z,this.mesh.position.y)+.18,this.mesh.position.y-e*1.4);return}if(this.parts.hpBg.visible&&this.parts.hpBg.lookAt(t.x,this.mesh.position.y+2.3,t.z),this.hurtFlash>0){this.hurtFlash-=e;const M=this.hurtFlash>0?6689041:0;this.parts.torso.material.emissive.setHex(M)}this.muzzleFlash>0&&(this.muzzleFlash-=e,this.parts.muzzle.material.opacity=Math.max(0,this.muzzleFlash*8));const o=new b().subVectors(t,this.mesh.position),r=Math.hypot(o.x,o.z),a=new b(this.mesh.position.x,this.mesh.position.y+1.55,this.mesh.position.z),l=new b(t.x,t.y+1.45,t.z),c=r<54&&n.hasLineOfSight(a,l);if(!this.alert)if(r<26||c&&r<42)this.alert=!0;else{this.parts.torso.position.y=1.16+Math.sin(performance.now()*.002+this.walkPhase)*.025;return}const h=Math.atan2(o.x,o.z);let u=h-this.mesh.rotation.y;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;this.mesh.rotation.y+=u*Math.min(1,e*8),this.strafeTimer-=e,this.strafeTimer<=0&&(this.strafeTimer=1.1+Math.random()*1.6,this.strafeDir*=-1);const d=new b(Math.sin(h),0,Math.cos(h)),f=new b(Math.cos(h),0,-Math.sin(h)),m=new b,v=this.style==="melee",g=this.style==="hybrid"||this.style==="boss_hybrid",p=v?2.1:g?7:12.5,y=v?2.6:g?15:25;if(!c||r>y?m.add(d):r<p&&!v&&m.addScaledVector(d,-.55),r<y+6&&m.addScaledVector(f,this.strafeDir*(this.style==="skirmisher"?1.15:.65)),m.lengthSq()>.01){m.normalize().multiplyScalar(this.speed*e),this.mesh.position.x+=m.x,this.mesh.position.z+=m.z,n.resolveHorizontal(this.mesh.position,this.radius,this.mesh.position.y);const M=n.getFloorHeight(this.mesh.position.x,this.mesh.position.z,this.mesh.position.y);this.mesh.position.y+=(M-this.mesh.position.y)*Math.min(1,e*14),this.walkPhase+=e*this.speed*2.2,this.parts.legL.rotation.x=Math.sin(this.walkPhase)*.55,this.parts.legR.rotation.x=-Math.sin(this.walkPhase)*.55,this.parts.armL.rotation.x=-.35-Math.sin(this.walkPhase)*.35}if(this.fireCooldown-=e,this.fireCooldown<=0){if(v||g&&r<3.6)r<3.5&&(this.fireCooldown=this.fireRate,this.parts.armR.rotation.x=-2.1,setTimeout(()=>{this.parts.armR&&(this.parts.armR.rotation.x=-1.1)},160),i.onMeleeHitPlayer(this.damage,this));else if(c&&r<=this.range){this.fireCooldown=this.fireRate*(.85+Math.random()*.35),this.muzzleFlash=.14;const M=new b;this.parts.muzzle.getWorldPosition(M),i.onEnemyFire(this,M,l)}}}}function vs(s){const{topColor:e=2759739,midColor:t=14248747,horizonColor:n=16761192,sunColor:i=16773830,sunDirection:o=new b(.45,.22,-.86).normalize(),cloudTint:r=16766364,cloudDensity:a=.45}=s,l=new Ke(420,40,28),c={uTopColor:{value:new qe(e)},uMidColor:{value:new qe(t)},uHorizonColor:{value:new qe(n)},uSunColor:{value:new qe(i)},uCloudTint:{value:new qe(r)},uSunDir:{value:o.clone().normalize()},uCloudDensity:{value:a},uTime:{value:0}},h=new bt({side:kt,depthWrite:!1,uniforms:c,vertexShader:`
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
    `}),u=new x(l,h);return u.frustumCulled=!1,{mesh:u,uniforms:c}}function Ii(s,e,t={}){const{deepColor:n=741993,shallowColor:i=3056552,foamColor:o=14678271,sunColor:r=16774614,sunDir:a=new b(.4,.6,-.6).normalize(),opacity:l=.88,waveScale:c=.14}=t,h=new gt(s,e,64,64);h.rotateX(-Math.PI/2);const u={uTime:{value:0},uDeepColor:{value:new qe(n)},uShallowColor:{value:new qe(i)},uFoamColor:{value:new qe(o)},uSunColor:{value:new qe(r)},uSunDir:{value:a.clone().normalize()},uOpacity:{value:l},uWaveScale:{value:c}},d=new bt({transparent:!0,uniforms:u,vertexShader:`
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
    `}),f=new x(h,d);return f.receiveShadow=!0,{mesh:f,uniforms:u}}function Rl(s,e){const t=new gt(s,e,12,24),n={uTime:{value:0}},i=new bt({transparent:!0,side:wt,depthWrite:!1,uniforms:n,vertexShader:`
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
    `});return{mesh:new x(t,i),uniforms:n}}function Cl(s=240,e=65){const t=new gt(s,e,64,12),n={uTime:{value:0}},i=new bt({transparent:!0,side:wt,depthWrite:!1,blending:so,uniforms:n,vertexShader:`
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
    `});return{mesh:new x(t,i),uniforms:n}}const Zm={id:"west",index:0,themeClass:"",act:"ACT I • 1884",title:"RED GULCH",subtitle:"Dust & Reckoning",heroName:"MARSHAL ANDERSON",objective:"Clear Red Gulch of Outlaws & Defeat El Diablo",quote:'"They burned my homestead and took everything I loved. Today, Red Gulch learns that a marshal never buries his badge."',musicTheme:"west",enemyIcon:"★",currency:"$",arsenalSummary:[["1 • .45 Peacemaker","Reliable 6-shooter. RMB fans the hammer."],["2 • 10-Gauge Coach Gun","Devastating spread for saloon clearouts."],["3 • Henry .44 Scoped","Vintage brass telescope zoom (RMB)."],["4 • Dynamite Sticks","Blasts outlaws out from behind cover."]],spawnPos:new b(0,0,44),spawnYaw:0,cameraPreview:{center:new b(0,4,2),radius:36,height:12,speed:.14}};function $m(s,e,t){const n=[],i=[],o=[];e.bounds={minX:-54,maxX:54,minZ:-54,maxZ:54};const r=new b(.35,.24,-.9).normalize(),a=vs({topColor:2497858,midColor:13195302,horizonColor:16760678,sunColor:16774084,sunDirection:r,cloudTint:16755299,cloudDensity:.42});s.add(a.mesh),i.push(se=>{a.uniforms.uTime.value=se}),s.fog=new li(14255434,.0085);const l=new gs(16763788,7027234,.85);s.add(l);const c=new mn(16764802,2.75);c.position.copy(r).multiplyScalar(95),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),c.shadow.camera.left=-65,c.shadow.camera.right=65,c.shadow.camera.top=65,c.shadow.camera.bottom=-65,c.shadow.camera.near=10,c.shadow.camera.far=210,c.shadow.bias=-5e-4,s.add(c);const h=new mn(8936596,.45);h.position.set(-40,20,60),s.add(h);const u=Pn("desert",26,26),d=new le({map:u.map,bumpMap:u.bumpMap,bumpScale:.28,roughness:.94,metalness:.02}),f=new x(new gt(340,340),d);f.rotation.x=-Math.PI/2,f.receiveShadow=!0,s.add(f);const m=ii("western",2,2),v=ii("saloon",2,2),g=ii("weathered",2,2),p=xs("redrock",3,2),y=new le({map:m.map,bumpMap:m.bumpMap,bumpScale:.12,roughness:.85}),M=new le({map:v.map,bumpMap:v.bumpMap,bumpScale:.14,roughness:.8}),w=new le({map:g.map,bumpMap:g.bumpMap,bumpScale:.12,roughness:.9}),C=new le({color:3875604,roughness:.88}),P=new le({map:p.map,bumpMap:p.bumpMap,bumpScale:.35,roughness:.92}),L=new le({color:16765562,emissive:16751150,emissiveIntensity:1.4,roughness:.25}),I=new le({color:13740363,roughness:.95}),E=new le({color:4156214,roughness:.82}),S=new le({color:15391680,roughness:.92,side:wt}),N=new le({color:4537914,metalness:.72,roughness:.4}),ne=new le({map:Wm(),roughness:.85});function ee(se){const{x:R,z:ie,w:G,h:ae,d:Y,rotY:we=0,wallMat:be=y,signText:A="",signSub:_="",twoStory:B=!1,addLantern:H=!0}=se,q=new Ye;q.position.set(R,0,ie),q.rotation.y=we;const F=new x(new z(G,ae,Y),be);F.position.y=ae*.5,F.castShadow=!0,F.receiveShadow=!0,q.add(F);const re=B?2.4:1.9,pe=new x(new z(G+.3,re,.45),be);pe.position.set(0,ae+re*.5-.1,Y*.5-.15),pe.castShadow=!0,q.add(pe);const _e=new x(new z(G+.75,.32,.75),C);_e.position.set(0,ae+re-.05,Y*.5-.05),q.add(_e);const ye=2.8,ve=new x(new z(G+.4,.36,ye),w);ve.position.set(0,.18,Y*.5+ye*.5),ve.receiveShadow=!0,q.add(ve);const Ae=B?4.2:ae-.4,Le=new x(new z(G+.6,.22,ye+.5),C);Le.position.set(0,Ae,Y*.5+ye*.5),Le.rotation.x=.14,Le.castShadow=!0,q.add(Le);const Ne=Math.max(2,Math.floor(G/3.4)+1);for(let ge=0;ge<Ne;ge++){const Ee=-G*.46+ge/(Ne-1)*(G*.92),Te=new x(new z(.24,Ae-.2,.24),C);Te.position.set(Ee,(Ae+.2)*.5,Y*.5+ye-.22),Te.castShadow=!0,q.add(Te)}if(B){const ge=new x(new z(G+.3,.14,.14),C);ge.position.set(0,Ae+1.15,Y*.5+ye-.2),q.add(ge);for(let Ee=-G*.45;Ee<=G*.45;Ee+=1.1){const Te=new x(new z(.1,1,.1),C);Te.position.set(Ee,Ae+.65,Y*.5+ye-.2),q.add(Te)}}const Ie=new x(new z(2.1,2.9,.24),C);Ie.position.set(0,1.8,Y*.5+.04),q.add(Ie);const Ve=new x(new z(1.72,2.55,.28),L);if(Ve.position.set(0,1.75,Y*.5+.05),q.add(Ve),A==="SALOON")for(const ge of[-1,1]){const Ee=new x(new z(.78,1.55,.1),M);Ee.position.set(ge*.44,1.5,Y*.5+.22),Ee.rotation.y=ge*.22,q.add(Ee)}const Ge=[-G*.32,G*.32];for(const ge of Ge){const Ee=new x(new z(1.65,1.75,.2),C);Ee.position.set(ge,2.1,Y*.5+.04);const Te=new x(new z(1.35,1.45,.24),L);if(Te.position.set(ge,2.1,Y*.5+.06),q.add(Ee,Te),B){const ke=Ee.clone();ke.position.y=6.2;const et=Te.clone();et.position.y=6.2,q.add(ke,et)}}if(A){const ge=Vm(A,{sub:_,bg:A==="SALOON"?"#4a1812":"#2d1b10",border:"#e8ad4a",fg:"#fff2d2"}),Ee=Math.min(G*.82,7.6),Te=2.1,ke=new x(new z(Ee,Te,.18),[C,C,C,C,new le({map:ge,roughness:.65}),C]);ke.position.set(0,ae+re*.45,Y*.5+.16),q.add(ke)}if(H){const ge=new x(new me(.16,.12,.36,8),L);ge.position.set(0,Ae-.55,Y*.5+ye-.35),q.add(ge);const Ee=new Cn(16755015,7.5,16,1.6);Ee.position.set(0,Ae-.7,Y*.5+ye-.35),q.add(Ee),i.push(Te=>{Ee.intensity=7+Math.sin(Te*7.2+R)*1.1})}const Ze=new x(new gt(.75,1),ne);Ze.position.set(G*.16,2,Y*.5+.16),q.add(Ze),s.add(q);const V=Math.abs(Math.cos(we)),De=V>.5?G:Y,fe=V>.5?Y:G;e.addBox(R,ae*.5,ie,De,ae+3,fe,"wood")}ee({x:0,z:-30,w:17,h:8.6,d:11,rotY:0,wallMat:M,signText:"SALOON",signSub:"WHISKEY • FARO • POKER",twoStory:!0}),ee({x:-20,z:-10,w:11,h:5.5,d:9,rotY:Math.PI/2,wallMat:y,signText:"SHERIFF",signSub:"RED GULCH JAIL"}),ee({x:-21,z:8,w:12,h:6.2,d:9,rotY:Math.PI/2,wallMat:w,signText:"BANK",signSub:"GOLD & BULLION"}),ee({x:-20,z:26,w:10,h:5,d:8.5,rotY:Math.PI/2,wallMat:y,signText:"LIVERY",signSub:"STABLES & FEED",addLantern:!1}),ee({x:20,z:-11,w:11.5,h:5.8,d:9,rotY:-Math.PI/2,wallMat:w,signText:"GENERAL",signSub:"DRY GOODS & AMMO"}),ee({x:21,z:7,w:11,h:5.4,d:8.5,rotY:-Math.PI/2,wallMat:M,signText:"HOTEL",signSub:"FRONTIER INN"});const he=new Ye,j=24,$=27,O=16,U=14;function W(se,R,ie,G){const ae=ie-se,Y=G-R,we=Math.hypot(ae,Y),be=Math.atan2(ae,Y),A=new Ye;A.position.set((se+ie)*.5,0,(R+G)*.5),A.rotation.y=be;for(const B of[.55,1.15,1.7]){const H=new x(new z(.14,.14,we),w);H.position.y=B,H.castShadow=!0,A.add(H)}const _=Math.max(2,Math.round(we/3));for(let B=0;B<=_;B++){const H=-we*.5+B/_*we,q=new x(new z(.22,2,.22),C);q.position.set(0,1,H),q.castShadow=!0,A.add(q)}he.add(A),e.addBox((se+ie)*.5,1,(R+G)*.5,Math.abs(ae)+.5,2,Math.abs(Y)+.5,"wood")}W(j-O/2,$-U/2,j+O/2,$-U/2),W(j+O/2,$-U/2,j+O/2,$+U/2),W(j-O/2,$+U/2,j+O/2,$+U/2),W(j-O/2,$-U/2,j-O/2,$-2.5),W(j-O/2,$+2.5,j-O/2,$+U/2),s.add(he);const K=[[23,25],[25,25],[24,24,1.1],[27,30],[18,22],[-9,18],[9,12],[-8,-6],[8,-14]];for(const[se,R,ie=.55]of K){const G=new x(new z(1.9,1.1,1.3),I);G.position.set(se,ie,R),G.rotation.y=se*.37%1.2,G.castShadow=!0,G.receiveShadow=!0,s.add(G),ie<.8&&e.addBox(se,.55,R,1.9,1.1,1.3,"wood")}function te(se,R,ie){const G=new Ye;G.position.set(se,0,R),G.rotation.y=ie;const ae=new x(new z(2.4,.9,4.6),y);ae.position.y=1.25,ae.castShadow=!0,G.add(ae);const Y=new x(new me(1.25,1.25,4.4,12,1,!0,0,Math.PI),S);Y.rotation.z=Math.PI/2,Y.rotation.y=Math.PI/2,Y.position.y=1.72,Y.castShadow=!0,G.add(Y);for(const[we,be]of[[-1.3,-1.5],[1.3,-1.5],[-1.3,1.5],[1.3,1.5]]){const A=new x(new xt(.68,.08,6,14),C);A.rotation.y=Math.PI/2,A.position.set(we,.72,be),A.castShadow=!0,G.add(A)}s.add(G),e.addBox(se,1.4,R,3,2.8,4.8,"wood")}te(6.5,22,.35),te(-7.5,2,-.25);const de=new Ye;de.position.set(-22,0,-28);for(const[se,R]of[[-2,-2],[2,-2],[-2,2],[2,2]]){const ie=new x(new z(.45,9.5,.45),C);ie.position.set(se,4.75,R),ie.castShadow=!0,de.add(ie)}const Se=new x(new me(3.2,3.2,4.8,16),w);Se.position.y=11.4,Se.castShadow=!0;const D=new x(new xt(3.25,.09,6,20),N);D.rotation.x=Math.PI/2,D.position.y=10.2;const k=D.clone();k.position.y=12.6;const Q=new x(new Be(3.7,2.4,16),C);Q.position.y=15,Q.castShadow=!0,de.add(Se,D,k,Q),s.add(de),e.addBox(-22,4.5,-28,4.8,9,4.8,"wood");const X=[[-6,30],[7,34],[-11,14],[11,4],[-5,-16],[6,-18],[13,-24],[-13,-22]];for(const[se,R]of X){const ie=new x(new z(1.45,1.35,1.45),y);ie.position.set(se,.675,R),ie.rotation.y=se*.5,ie.castShadow=!0,ie.receiveShadow=!0,s.add(ie);const G=new x(new me(.48,.44,1.25,12),M);G.position.set(se+1.15,.625,R+.4),G.castShadow=!0,s.add(G),e.addBox(se+.4,.7,R+.15,2.5,1.4,1.9,"wood")}function oe(se,R,ie=1){const G=new Ye;G.position.set(se,0,R);const ae=new x(new me(.32,.38,4.2,10),E);ae.position.y=2.1,ae.castShadow=!0;const Y=new x(new me(.22,.24,1.6,8),E);Y.position.set(.75,2.7,0);const we=new x(new z(.75,.38,.38),E);we.position.set(.42,2,0);const be=new x(new me(.22,.24,1.4,8),E);be.position.set(-.72,3.1,0);const A=new x(new z(.7,.38,.38),E);A.position.set(-.4,2.5,0),G.add(ae,Y,we,be,A),G.rotation.y=se*.8,G.scale.setScalar(ie),s.add(G)}const Me=[[-34,38,1.1],[36,40,1.2],[-38,-22,1.3],[38,-28,1.05],[-42,6,1.15],[44,12,1.25],[14,44,.95],[-16,42,1]];for(const[se,R,ie]of Me)oe(se,R,ie);const Pe=[[0,-115,58,36,26],[-82,-96,44,42,32],[85,-90,48,38,30],[-118,-10,34,34,54],[118,5,36,32,58],[-85,95,52,28,34],[76,102,56,30,32]];for(const[se,R,ie,G,ae]of Pe){const Y=new x(new me(ie*.42,ie*.68,G,7),P);Y.position.set(se,G*.5-1,R),Y.rotation.y=se*.1,s.add(Y);const we=new x(new me(ie*.46,ie*.42,4.5,7),P);we.position.set(se,G-1.5,R),we.rotation.y=se*.1,s.add(we)}t.initAmbient("dust",e.bounds),t.addTumbleweed(new b(-25,.7,15),1),t.addTumbleweed(new b(20,.7,-4),-1);const Oe=[{type:"health",pos:new b(-12,.8,20),label:"FRONTIER ELIXIR (+35 HP)"},{type:"ammo",pos:new b(12,.8,10),label:"AMMO BANDOLIER"},{type:"health",pos:new b(24,.8,28),label:"CORRAL MEDKIT (+35 HP)"},{type:"ammo",pos:new b(-10,.8,-14),label:"RIFLE & SHELL BOX"},{type:"health",pos:new b(11,.8,-22),label:"SALOON TONIC (+35 HP)"}];for(const se of Oe){const R=_s(se.type);R.position.copy(se.pos),s.add(R),o.push({...se,mesh:R,collected:!1})}return{enemySpawns:[{type:"cowboy",pos:new b(-6,0,18)},{type:"cowboy",pos:new b(9,0,14)},{type:"bandito",pos:new b(-11,0,3)},{type:"cowboy",pos:new b(11,0,-2)},{type:"bandito",pos:new b(23,0,24)},{type:"bandito",pos:new b(-4,0,-10)},{type:"cowboy",pos:new b(9,0,-15)},{type:"bandito",pos:new b(-11,0,-20)},{type:"cowboy",pos:new b(12,0,-24)},{type:"bandito",pos:new b(0,0,-18)},{type:"boss_west",pos:new b(0,0,-21),isBossWave:!0}],pickups:o,animated:i,disposables:n}}function _s(s){const e=new Ye,t=s==="health",n=new le({color:t?3066993:15906633,emissive:t?1474627:11760658,emissiveIntensity:.75,metalness:.35,roughness:.3}),i=t?new x(new me(.28,.34,.72,10),n):new x(new z(.75,.48,.52),n),o=new x(new xt(.55,.04,6,18),new pt({color:t?7208874:16770180}));return o.rotation.x=Math.PI/2,o.position.y=-.32,e.add(i,o),e}const jm={id:"japan",index:1,themeClass:"theme-japan",act:"ACT II • 1603",title:"KYOTO MIST",subtitle:"Blossom & Steel",heroName:"KENSHIN THE SAMURAI",objective:"Purge the Shrine of Ninjas & Rōnin, Defeat Lord Kurogane",quote:'"Beneath falling blossoms, honor is weighed by the quiet edge of steel. Step through the Torii gate and reclaim the sacred hill."',musicTheme:"japan",enemyIcon:"⚔",currency:"両 ",arsenalSummary:[["1 • Muramasa Katana","Swift folded-steel blade. RMB unleashes Iaido cleave."],["2 • Yumi Longbow","Silent piercing arrows with Spirit Focus Zoom (RMB)."],["3 • Shinobi Shuriken","Rapid steel stars. RMB throws a 3-star fan."],["4 • Tanegashima Musket","Thunderous Edo black-powder firepower."]],spawnPos:new b(0,0,46),spawnYaw:0,cameraPreview:{center:new b(0,5,-4),radius:38,height:14,speed:.13}};function Km(s,e,t){const n=[],i=[],o=[];e.bounds={minX:-54,maxX:54,minZ:-54,maxZ:54};const r=new b(-.35,.22,-.9).normalize(),a=vs({topColor:1778503,midColor:9391725,horizonColor:16762029,sunColor:16771276,sunDirection:r,cloudTint:16757690,cloudDensity:.48});s.add(a.mesh),i.push(_=>{a.uniforms.uTime.value=_}),s.fog=new li(8149614,.0092);const l=new gs(16765142,2964268,.9);s.add(l);const c=new mn(16764856,2.35);c.position.copy(r).multiplyScalar(95),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),c.shadow.camera.left=-65,c.shadow.camera.right=65,c.shadow.camera.top=65,c.shadow.camera.bottom=-65,c.shadow.near=10,c.shadow.far=210,c.shadow.bias=-5e-4,s.add(c);const h=new mn(7968488,.55);h.position.set(50,26,55),s.add(h);const u=Pn("japan_moss",26,26),d=new x(new gt(340,340),new le({map:u.map,bumpMap:u.bumpMap,bumpScale:.22,roughness:.92}));d.rotation.x=-Math.PI/2,d.receiveShadow=!0,s.add(d);const f=Pn("cobble",3,22),m=new x(new gt(6.8,92),new le({map:f.map,bumpMap:f.bumpMap,bumpScale:.2,roughness:.85}));m.rotation.x=-Math.PI/2,m.position.set(0,.04,2),m.receiveShadow=!0,s.add(m);const v=ii("darkJapan",2,2),g=ii("redLacquer",2,2),p=xs("temple",2,2),y=fa("japan",4,2),M=Hm(2,1),w=Pn("zen_sand",4,4),C=io("japan"),P=new le({map:v.map,bumpMap:v.bumpMap,bumpScale:.1,roughness:.78}),L=new le({map:g.map,roughness:.48,metalness:.08}),I=new le({map:p.map,bumpMap:p.bumpMap,bumpScale:.2,roughness:.88}),E=new le({map:y.map,bumpMap:y.bumpMap,bumpScale:.18,roughness:.58,metalness:.15}),S=new le({map:M,emissive:16757596,emissiveIntensity:.52,roughness:.55}),N=new le({color:16770216,emissive:16749622,emissiveIntensity:1.9,roughness:.2}),ne=new le({color:15119943,metalness:.85,roughness:.28}),ee=new le({color:4949820,roughness:.45}),he=new le({color:3894834,roughness:.8}),j=new le({color:16757707,emissive:6036016,emissiveIntensity:.22,roughness:.85}),$=new le({color:16766692,emissive:7021627,emissiveIntensity:.25,roughness:.85}),O=new le({map:C,side:wt,roughness:.7});function U(_,B,H=1,q=0){const F=new Ye;F.position.set(_,0,B),F.rotation.y=q,F.scale.setScalar(H);for(const Ne of[-3.2,3.2]){const Ie=new x(new me(.46,.55,1.1,10),I);Ie.position.set(Ne,.55,0),Ie.castShadow=!0;const Ve=new x(new me(.32,.38,6.8,12),L);Ve.position.set(Ne,4,0),Ve.castShadow=!0,F.add(Ie,Ve)}const re=new x(new z(8.6,.42,.44),L);re.position.set(0,5.9,0),re.castShadow=!0;const pe=new x(new z(9.8,.54,.68),L);pe.position.set(0,7.25,0),pe.castShadow=!0;const _e=new x(new z(10.3,.34,.86),E);_e.position.set(0,7.62,0);const ye=new x(new z(.9,1.15,.26),P);ye.position.set(0,6.55,0);const ve=new x(new z(.98,1.24,.16),ne);ve.position.set(0,6.55,0),F.add(re,pe,_e,ye,ve),s.add(F);const Ae=Math.cos(q),Le=Math.sin(q);for(const Ne of[-3.2*H,3.2*H]){const Ie=_+Ne*Ae,Ve=B-Ne*Le;e.addBox(Ie,3.5,Ve,1.1*H,7.5*H,1.1*H,"wood")}}U(0,34,1.15),U(0,21,1),U(0,-14,1.1);const W=Ii(24,15,{deepColor:1064005,shallowColor:2520440,foamColor:16767462,sunColor:16765109,sunDir:r,opacity:.9,waveScale:.05});W.mesh.position.set(16,.08,4),s.add(W.mesh),i.push(_=>{W.uniforms.uTime.value=_});const K=[[6,-3],[11,-3.5],[18,-3.5],[26,-3],[28,3],[27,10],[22,11.5],[12,11.5],[6,10],[4.5,4]];for(const[_,B]of K){const H=new x(new fn(1.1+_*7%1,1),I);H.position.set(_,.45,B),H.scale.set(1.3,.72,1.1),H.castShadow=!0,s.add(H)}const te=new pt({color:16739886}),de=new pt({color:16773350});for(let _=0;_<6;_++){const B=new x(new ra(.12,.45,4,6),_%2===0?te:de);B.rotation.x=Math.PI/2,s.add(B);const H=3.2+_%3*1.9,q=.45+_*.1,F=_*1.1;i.push(re=>{const pe=re*q+F;B.position.set(16+Math.cos(pe)*H,.05,4+Math.sin(pe)*(H*.65)),B.rotation.z=pe})}const Se=new Ye;Se.position.set(16,0,4);const D=new x(new z(4.4,.35,16),P);D.position.y=.75,D.receiveShadow=!0,D.castShadow=!0,Se.add(D);for(const _ of[-2,2]){const B=new x(new z(.18,.16,16),L);B.position.set(_,1.85,0),Se.add(B);for(let H=-7;H<=7;H+=3.5){const q=new x(new z(.24,1.35,.24),L);q.position.set(_,1.35,H);const F=new x(new Ke(.16,8,8),ne);F.position.set(_,2.08,H),Se.add(q,F)}}s.add(Se),e.addWalkable(16,4,4.4,16.5,.92);const k=-19,Q=4,X=18,oe=16,Me=new x(new z(X,.26,oe),new le({map:w.map,bumpMap:w.bumpMap,bumpScale:.24,roughness:.95}));Me.position.set(k,.13,Q),Me.receiveShadow=!0,s.add(Me);for(const[_,B,H,q]of[[k,Q-oe/2,X+.5,.45],[k,Q+oe/2,X+.5,.45],[k-X/2,Q,.45,oe],[k+X/2,Q,.45,oe]]){const F=new x(new z(H,.45,q),P);F.position.set(_,.22,B),s.add(F)}const Pe=[[-22,2,1.7],[-15,7,1.4],[-20,8,1.15],[-16,-1,1.55]];for(const[_,B,H]of Pe){const q=new x(new fn(H,1),I);q.position.set(_,H*.65,B),q.scale.set(1.25,.95,1),q.castShadow=!0,q.receiveShadow=!0,s.add(q),e.addBox(_,H*.6,B,H*2.1,H*1.6,H*1.8,"stone")}function Oe(_){const{x:B,z:H,w:q,h:F,d:re,rotY:pe=0,isTemple:_e=!1}=_,ye=new Ye;ye.position.set(B,0,H),ye.rotation.y=pe;const ve=_e?1.4:.7,Ae=new x(new z(q+2.2,ve,re+2.2),I);Ae.position.y=ve*.5,Ae.receiveShadow=!0,Ae.castShadow=!0,ye.add(Ae);const Le=new x(new z(q+1.6,.22,re+1.6),P);Le.position.y=ve+.11,Le.receiveShadow=!0,ye.add(Le);const Ne=ve+.22+F*.5,Ie=new x(new z(q,F,re),S);Ie.position.y=Ne,Ie.castShadow=!0,Ie.receiveShadow=!0,ye.add(Ie);const Ve=_e?L:P;for(const ke of[-q*.52,0,q*.52])for(const et of[-re*.52,re*.52]){const dt=new x(new me(.22,.25,F+.3,10),Ve);dt.position.set(ke,Ne,et),dt.castShadow=!0,ye.add(dt)}const Ge=ve+.22+F,Ze=new x(new Be(Math.max(q,re)*.92,_e?3.2:2.6,4),E);Ze.rotation.y=Math.PI/4,Ze.scale.set(q/Math.max(q,re)*1.15,1,re/Math.max(q,re)*1.15),Ze.position.y=Ge+(_e?1.4:1.1),Ze.castShadow=!0,ye.add(Ze);const V=new x(new z(q*.72,.36,.42),ne);if(V.position.y=Ge+(_e?2.85:2.35),ye.add(V),_e){const ke=new x(new z(q*.56,2.8,re*.56),L);ke.position.y=Ge+3.4,ke.castShadow=!0;const et=new x(new Be(Math.max(q,re)*.62,3,4),E);et.rotation.y=Math.PI/4,et.position.y=Ge+5.9,et.castShadow=!0;const dt=new x(new me(.08,.18,2.4,8),ne);dt.position.y=Ge+8.3,ye.add(ke,et,dt);for(const it of[-q*.32,q*.32]){const Lt=new x(new gt(1.5,3.4),O);Lt.position.set(it,Ne+.2,re*.5+.55),ye.add(Lt)}}const De=new x(new Ke(.32,10,8),N);De.scale.set(.85,1.3,.85),De.position.set(0,Ge-.5,re*.5+.9),ye.add(De);const fe=new Cn(16752706,_e?11:7,20,1.6);fe.position.set(0,Ge-.8,re*.5+1.2),ye.add(fe),s.add(ye);const ge=Math.abs(Math.cos(pe)),Ee=(ge>.5?q:re)+1.8,Te=(ge>.5?re:q)+1.8;e.addBox(B,(ve+F)*.5,H,Ee,ve+F+2,Te,"wood")}Oe({x:0,z:-34,w:16,h:5.4,d:11,rotY:0,isTemple:!0}),Oe({x:-24,z:-18,w:11,h:4,d:8.5,rotY:Math.PI/3}),Oe({x:24,z:-17,w:11,h:4,d:8.5,rotY:-Math.PI/3}),Oe({x:-28,z:24,w:10.5,h:3.8,d:8,rotY:Math.PI/2});function xe(_,B){const H=new Ye;H.position.set(_,0,B);const q=new x(new me(.18,.26,1.5,8),I);q.position.y=.75;const F=new x(new z(.45,.45,.45),N);F.position.y=1.72;const re=new x(new Be(.58,.38,6),I);re.position.y=2.12,H.add(q,F,re),s.add(H),e.addBox(_,1,B,.75,2.2,.75,"stone")}for(const _ of[28,14,0,-10,-22])xe(-4.5,_),xe(4.5,_);function se(_,B,H=1){const q=new Ye;q.position.set(_,0,B);const F=new x(new me(.32,.56,4.4,8),P);F.position.y=2.2,F.rotation.z=.12,F.castShadow=!0,q.add(F);const re=[[0,5.2,0,2.7,j],[-1.9,4.5,.8,2.1,$],[1.8,4.7,-.7,2.2,j],[.4,6.2,.5,1.9,$],[-.9,4.3,-1.6,1.85,j]];for(const[pe,_e,ye,ve,Ae]of re){const Le=new x(new ms(ve,1),Ae);Le.position.set(pe,_e,ye),Le.scale.set(1.25,.72,1.15),Le.castShadow=!0,q.add(Le)}q.scale.setScalar(H),s.add(q),e.addBox(_,2,B,1.2*H,4.2*H,1.2*H,"wood")}const R=[[-12,-26,1.2],[12,-26,1.25],[-10,16,1.05],[10,18,1.1],[-31,4,1.3],[32,-4,1.2],[-14,-6,1],[30,16,1.15]];for(const[_,B,H]of R)se(_,B,H);function ie(_,B,H=12,q=4.5){const F=new Ye;for(let re=0;re<H;re++){const pe=re/H*Math.PI*2+_*.3,_e=.6+re*1.37%1*q,ye=_+Math.cos(pe)*_e,ve=B+Math.sin(pe)*_e,Ae=11+re*3.1%6,Le=new x(new me(.11,.15,Ae,6),ee);if(Le.position.set(ye,Ae*.5,ve),Le.rotation.z=(re%3-1)*.04,Le.castShadow=!0,F.add(Le),re%2===0){const Ne=new x(new fn(1.5,0),he);Ne.position.set(ye,Ae-1,ve),Ne.scale.set(1.4,.48,1.4),F.add(Ne)}}s.add(F),e.addBox(_,3,B,q*1.1,6,q*1.1,"wood")}const G=[[-14,38,14,5],[14,38,14,5],[-26,42,12,5.5],[26,36,14,5.5],[36,26,14,5.5],[38,6,14,5.5],[-40,-6,14,5.5],[38,-26,14,5.5],[-38,-32,14,5.5],[20,26,10,3.6]];for(const[_,B,H,q]of G)ie(_,B,H,q);const ae=new Ye,Y=new x(new Be(92,68,24),new le({color:3882339,roughness:.95}));Y.position.set(0,32,-165);const we=new x(new Be(34,25,24),new le({color:16772070,emissive:3875370,emissiveIntensity:.2,roughness:.85}));we.position.set(0,54,-165),ae.add(Y,we),s.add(ae);for(let _=0;_<10;_++){const B=_/10*Math.PI*2;if(Math.abs(Math.sin(B)+1)<.2)continue;const H=new x(new Be(46+_%3*14,28+_%4*8,9),new le({color:3095356,roughness:.95}));H.position.set(Math.cos(B)*138,12,Math.sin(B)*138),s.add(H)}t.initAmbient("sakura",e.bounds);const be=[{type:"health",pos:new b(-12,.8,26),label:"MATCHA TEA ELIXIR (+35 HP)"},{type:"ammo",pos:new b(16,1.5,4),label:"ARROWS & SHURIKEN POUCH"},{type:"health",pos:new b(-18,.8,4),label:"ZEN SANCTUARY HERBS (+35 HP)"},{type:"ammo",pos:new b(11,.8,-14),label:"POWDER & QUIVER CACHE"},{type:"health",pos:new b(-11,.8,-20),label:"SHRINE BLESSING (+35 HP)"}];for(const _ of be){const B=_s(_.type);B.position.copy(_.pos),s.add(B),o.push({..._,mesh:B,collected:!1})}return{enemySpawns:[{type:"ninja",pos:new b(-8,0,26)},{type:"ninja",pos:new b(9,0,24)},{type:"ronin",pos:new b(-15,0,8)},{type:"ninja",pos:new b(16,.95,4)},{type:"ronin",pos:new b(4,0,6)},{type:"ninja",pos:new b(-17,0,-4)},{type:"ronin",pos:new b(12,0,-10)},{type:"ninja",pos:new b(-9,0,-18)},{type:"ronin",pos:new b(8,0,-21)},{type:"ninja",pos:new b(0,0,-23)},{type:"boss_japan",pos:new b(0,0,-24),isBossWave:!0}],pickups:o,animated:i,disposables:n}}const Jm={id:"swiss",index:2,themeClass:"theme-swiss",act:"ACT III • 1307",title:"RÜTLI VALLEY",subtitle:"Tell's Arrow & The Uri Banner",heroName:"WILHELM TELL (URI)",objective:"Drive the Austrian Army from the Valley & Defeat Capt. von Gessler",quote:'"Upon the Rütli meadow we swore our oath beneath the Uri Bull: Uri, Schwyz, and Unterwalden shall bow to no tyrant’s hat!"',musicTheme:"swiss",enemyIcon:"✚",currency:"Fl ",arsenalSummary:[["1 • Tell's Armbrust","Precision Swiss crossbow with Eagle-Eye Zoom (RMB)."],["2 • Swiss Halberd","Cleaves Austrian steel armor at close quarters."],["3 • Alpine Repeater","Rapid-fire light crossbow for skirmishes."],["4 • Alpine Fire-Pot","Blazing medieval black-powder grenade."]],spawnPos:new b(-4,0,44),spawnYaw:0,cameraPreview:{center:new b(-4,6,-4),radius:42,height:15,speed:.12}};function Qm(s,e,t){const n=[],i=[],o=[];e.bounds={minX:-52,maxX:44,minZ:-54,maxZ:54};const r=new b(.48,.52,-.7).normalize(),a=vs({topColor:1463976,midColor:6137064,horizonColor:14283007,sunColor:16776160,sunDirection:r,cloudTint:16777215,cloudDensity:.48});s.add(a.mesh),i.push(F=>{a.uniforms.uTime.value=F}),s.fog=new li(12902386,.0052);const l=new gs(14676735,3892017,.95);s.add(l);const c=new mn(16774620,2.7);c.position.copy(r).multiplyScalar(110),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),c.shadow.camera.left=-70,c.shadow.camera.right=70,c.shadow.camera.top=70,c.shadow.camera.bottom=-70,c.shadow.near=10,c.shadow.far=230,c.shadow.bias=-5e-4,s.add(c);const h=new mn(9426175,.5);h.position.set(-55,22,40),s.add(h);const u=Pn("alpine_meadow",26,26),d=new x(new gt(360,360),new le({map:u.map,bumpMap:u.bumpMap,bumpScale:.22,roughness:.92}));d.rotation.x=-Math.PI/2,d.receiveShadow=!0,s.add(d);const f=Pn("cobble",3,24),m=new x(new gt(6.5,86),new le({map:f.map,bumpMap:f.bumpMap,bumpScale:.18,roughness:.88}));m.rotation.x=-Math.PI/2,m.position.set(-4,.04,2),m.receiveShadow=!0,s.add(m);const v=ii("alpine",2,2),g=xs("castle",2,2),p=fa("swiss",4,2),y=Gm(2,1),M=new le({map:v.map,bumpMap:v.bumpMap,bumpScale:.14,roughness:.85}),w=new le({color:3547155,roughness:.86}),C=new le({map:g.map,bumpMap:g.bumpMap,bumpScale:.26,roughness:.88}),P=new le({map:p.map,bumpMap:p.bumpMap,bumpScale:.18,roughness:.84}),L=new le({map:y,roughness:.82}),I=new le({color:16054783,roughness:.72}),E=new le({color:6777712,roughness:.92}),S=new le({color:2051371,roughness:.88}),N=new le({color:2843446,roughness:.88}),ne=new le({color:14232363,roughness:.7}),ee=new le({color:16767882,emissive:16752691,emissiveIntensity:.75}),he=new le({map:io("austria"),side:wt,roughness:.65}),j=new le({map:io("uri"),side:wt,roughness:.65}),$=new le({map:io("swiss"),side:wt,roughness:.65}),O=Ii(140,220,{deepColor:743544,shallowColor:3065036,foamColor:15465727,sunColor:16776416,sunDir:r,opacity:.9,waveScale:.16});O.mesh.position.set(92,.08,0),s.add(O.mesh),i.push(F=>{O.uniforms.uTime.value=F});for(let F=-52;F<=52;F+=6.5){const re=new x(new fn(1.5+Math.abs(F)*3%1.4,1),C);re.position.set(22.5+Math.sin(F*.14)*2.5,.35,F),re.scale.set(1.4,.65,1.3),s.add(re)}e.addBox(34,2,0,20,4,120,"water");const U=new x(new z(10,.35,3.6),M);U.position.set(26,.6,16),U.castShadow=!0,s.add(U);for(const F of[22,26,30])for(const re of[14.5,17.5]){const pe=new x(new me(.16,.18,1.8,8),w);pe.position.set(F,.3,re),s.add(pe)}const W=new x(new z(3.2,.65,1.35),M);W.position.set(32,.25,19),s.add(W),i.push(F=>{W.position.y=.28+Math.sin(F*2.2)*.1,W.rotation.z=Math.sin(F*1.7)*.05});const K=new Ye;for(let F=0;F<6;F++){const re=-40+F*16,pe=28+F%3*8,_e=new x(new fn(14,1),E);_e.position.set(-64,pe*.45,re),_e.scale.set(1.1,pe/14,1.45),_e.castShadow=!0,K.add(_e);const ye=new x(new fn(9,1),I);ye.position.set(-66,pe*.9,re),ye.scale.set(1.2,.45,1.3),K.add(ye)}s.add(K);const te=Rl(9.5,31);te.mesh.position.set(-48.5,15,-18),te.mesh.rotation.y=Math.PI/2-.28,s.add(te.mesh);const de=Rl(6.2,23);de.mesh.position.set(-47.5,11.5,-26),de.mesh.rotation.y=Math.PI/2-.18,s.add(de.mesh),i.push(F=>{te.uniforms.uTime.value=F,de.uniforms.uTime.value=F*1.15});const Se=Ii(20,24,{deepColor:1472662,shallowColor:6480363,foamColor:16777215,sunColor:16776416,sunDir:r,opacity:.92,waveScale:.12});Se.mesh.position.set(-44,.09,-18),s.add(Se.mesh),i.push(F=>{Se.uniforms.uTime.value=F*1.3}),t.addMistEmitter(new b(-46,.8,-18),4.5),t.addMistEmitter(new b(-46,.8,-25),3.2);const D=Ii(68,6.4,{deepColor:1800598,shallowColor:6085864,foamColor:16777215,sunColor:16776416,sunDir:r,opacity:.88,waveScale:.08});D.mesh.position.set(-10,.06,-8),s.add(D.mesh),i.push(F=>{D.uniforms.uTime.value=F*1.5});const k=new Ye;k.position.set(-4,0,-8);const Q=new x(new z(7.2,.35,9.2),M);Q.position.y=.55,Q.receiveShadow=!0,k.add(Q);for(const F of[-3.4,3.4]){const re=new x(new z(.22,.2,9.2),w);re.position.set(F,1.55,0),k.add(re);for(const pe of[-4.2,0,4.2]){const _e=new x(new z(.26,1.35,.26),w);_e.position.set(F,1.1,pe),k.add(_e)}}s.add(k),e.addWalkable(-4,-8,7.2,9.5,.72);function X(F,re,pe=0,_e=!0){const ye=new Ye;ye.position.set(F,0,re),ye.rotation.y=pe;const ve=new le({color:14922122,roughness:.72}),Ae=new le({color:5059360,roughness:.92}),Le=new le({color:6048308,roughness:.85}),Ne=new le({color:9380900,roughness:.8}),Ie=new le({color:2825492,roughness:.85}),Ve=new le({color:15910441,roughness:.65}),Ge=new le({color:13687526,metalness:.88,roughness:.22});for(const Ut of[-.17,.17]){const Vt=new x(new me(.11,.1,.84,8),Ie);Vt.position.set(Ut,.42,0),Vt.castShadow=!0,ye.add(Vt)}const Ze=new x(new z(.62,.78,.36),Le);Ze.position.set(0,1.18,0),Ze.castShadow=!0;const V=new x(new z(.65,.18,.38),Ve);V.position.set(0,1,0);const De=new x(new z(.64,.95,.1),Ne);De.position.set(0,1.05,-.22),De.rotation.x=.12,ye.add(Ze,V,De);const fe=new x(new Ke(.22,12,10),ve);fe.position.set(0,1.76,0),fe.castShadow=!0;const ge=new x(new Be(.21,.38,10),Ae);ge.rotation.x=Math.PI,ge.position.set(0,1.54,.11);const Ee=new x(new z(.26,.07,.09),Ae);Ee.position.set(0,1.67,.19);const Te=new x(new me(.24,.25,.16,12),Ne);Te.position.set(0,1.94,0);const ke=new x(new Be(.05,.42,6),I);ke.position.set(.18,2.1,-.04),ke.rotation.z=-.35,ye.add(fe,ge,Ee,Te,ke);const et=new x(new me(.09,.08,.62,8),Le);et.position.set(-.42,1.24,.16),et.rotation.x=-.85;const dt=new x(new me(.09,.08,.66,8),Le);dt.position.set(.42,1.28,.22),dt.rotation.x=-1.1,ye.add(et,dt);const it=new x(new me(.036,.04,3.05,8),w);it.position.set(-.46,1.55,.35),it.castShadow=!0;const Lt=new x(new Be(.045,.55,4),Ge);Lt.position.set(-.46,3.3,.35);const $t=new x(new z(.03,.44,.36),Ge);$t.position.set(-.46,2.86,.52);const ci=new x(new Be(.04,.28,4),Ge);ci.rotation.x=-Math.PI/2,ci.position.set(-.46,2.86,.18);const Wi=new x(new Be(.075,.22,8),Ve);if(Wi.position.set(-.46,2.58,.35),ye.add(it,Lt,$t,ci,Wi),_e){const Ut=new x(new me(.045,.055,5.4,8),w);Ut.position.set(.48,2.7,.42),Ut.castShadow=!0;const Vt=new x(new Be(.09,.3,6),Ve);Vt.position.set(.48,5.5,.42);const xn=new gt(1.75,2.6,8,4),Xi=new x(xn,j);Xi.position.set(1.36,4.05,.42),ye.add(Ut,Vt,Xi);const Wn=xn.attributes.position.array.slice();i.push(ws=>{const In=xn.attributes.position;for(let Dn=0;Dn<In.count;Dn++){const Ms=Wn[Dn*3],xo=Wn[Dn*3+1],ys=Ms+.875;In.setZ(Dn,Math.sin(ws*4.5+ys*2.6+xo*.8)*.14*ys)}In.needsUpdate=!0})}else{const Ut=new x(new me(.036,.04,2.9,8),w);Ut.position.set(.48,1.48,.36);const Vt=new x(new Be(.045,.5,4),Ge);Vt.position.set(.48,3.12,.36);const xn=new x(new z(.03,.4,.34),Ge);xn.position.set(.48,2.72,.52),ye.add(Ut,Vt,xn)}s.add(ye),e.addBox(F,1.2,re,1.2,2.4,1.2,"wood")}X(2.8,37.5,-.55,!0),X(-9.2,37.2,.45,!1);function oe(F,re,pe){const _e=new x(new me(.06,.08,6.2,8),w);_e.position.set(F,3.1,re),_e.castShadow=!0;const ye=new x(new gt(1.9,3),pe);ye.position.set(F+.98,4.5,re),s.add(_e,ye),i.push(ve=>{ye.rotation.y=Math.sin(ve*2.8+F)*.18})}oe(-13.8,39.5,$),oe(-15.2,33.5,j);const Me=new Cn(16747571,8,16,1.6);Me.position.set(-9,1.1,39),s.add(Me);const Pe=new x(new Be(.42,.95,7),new pt({color:16754739}));Pe.position.set(-9,.55,39),s.add(Pe),i.push(F=>{Me.intensity=7.5+Math.sin(F*11)*1.4,Pe.scale.y=.85+Math.sin(F*14)*.2});const Oe=new x(new me(.08,.1,1.75,8),w);Oe.position.set(5.5,.875,33),s.add(Oe);const xe=new x(new Ke(.24,12,10),new le({color:14229793,roughness:.3,emissive:3802373,emissiveIntensity:.35}));xe.position.set(5.5,1.92,33),xe.userData.isTellApple=!0,s.add(xe);function se(F,re,pe,_e,ye,ve=0,Ae=!1){const Le=new Ye;Le.position.set(F,0,re),Le.rotation.y=ve;const Ne=new x(new z(pe+.4,1.1,ye+.4),C);Ne.position.y=.55,Ne.castShadow=!0,Ne.receiveShadow=!0,Le.add(Ne);const Ie=new x(new z(pe,_e,ye),Ae?L:M);Ie.position.y=1.1+_e*.5,Ie.castShadow=!0,Ie.receiveShadow=!0,Le.add(Ie);const Ve=2.9,Ge=new Be(Math.max(pe,ye)*.84,Ve,4),Ze=new x(Ge,P);if(Ze.rotation.y=Math.PI/4,Ze.scale.set((pe+2.4)/Math.max(pe,ye),1,(ye+2.4)/Math.max(pe,ye)),Ze.position.y=1.1+_e+Ve*.48,Ze.castShadow=!0,Le.add(Ze),Ae){const Te=new x(new z(pe*.72,.22,1.3),M);Te.position.set(0,3.6,ye*.5+.65);const ke=new x(new z(pe*.72,.85,.14),w);ke.position.set(0,4.1,ye*.5+1.22);const et=new x(new z(pe*.65,.34,.36),ne);et.position.set(0,4.58,ye*.5+1.32),Le.add(Te,ke,et)}const V=new x(new z(2.2,2.7,.2),w);V.position.set(0,2.35,ye*.5+.08),Le.add(V);for(const Te of[-pe*.32,pe*.32]){const ke=new x(new z(1.25,1.25,.18),ee);ke.position.set(Te,2.8,ye*.5+.08),Le.add(ke)}const De=new x(new z(1.1,1.2,3.4),w);De.position.set(pe*.5+.6,.6,0),De.castShadow=!0,Le.add(De),s.add(Le);const fe=Math.abs(Math.cos(ve)),ge=fe>.5?pe+.8:ye+.8,Ee=fe>.5?ye+.8:pe+.8;e.addBox(F,(_e+2)*.5,re,ge,_e+3,Ee,"wood")}se(-21,22,10,4.6,8.5,Math.PI/2,!0),se(12,21,9.5,4.2,8,-Math.PI/2,!1),se(-24,3,10.5,4.4,8.5,Math.PI/2.2,!1),se(11,-19,9.5,4.5,8,-Math.PI/2.5,!0);const R=-4,ie=-35,G=new Ye;G.position.set(R,0,ie);const ae=new x(new z(11,14,11),C);ae.position.y=7,ae.castShadow=!0,ae.receiveShadow=!0,G.add(ae);for(let F=-4.8;F<=4.8;F+=2.4)for(const re of[-5.2,5.2]){const pe=new x(new z(1.3,1.4,.8),C);pe.position.set(F,14.7,re),G.add(pe)}for(const F of[-10.5,10.5]){const re=new x(new z(11,5.2,2.4),C);re.position.set(F,2.6,3.2),re.castShadow=!0,re.receiveShadow=!0,G.add(re)}for(const F of[-3.4,3.4]){const re=new x(new gt(2.3,5.6),he);re.position.set(F,8.6,5.75),G.add(re)}const Y=new x(new me(.1,.12,6,8),w);Y.position.set(0,17,0);const we=new x(new gt(3.2,2),he);we.position.set(1.6,18.6,0),G.add(Y,we),i.push(F=>{we.rotation.y=Math.sin(F*3.4)*.25}),s.add(G),e.addBox(R,7,ie,11.4,14.5,11.4,"stone"),e.addBox(R-10.5,2.6,ie+3.2,11.2,5.4,2.8,"stone"),e.addBox(R+10.5,2.6,ie+3.2,11.2,5.4,2.8,"stone");const be=[[-11,14,5.5,1.35,1.1],[4,10,5.2,1.35,1.1],[-12,-18,5.5,1.4,1.1],[3,-22,5.5,1.4,1.1]];for(const[F,re,pe,_e,ye]of be){const ve=new x(new z(pe,_e,ye),C);ve.position.set(F,_e*.5,re),ve.castShadow=!0,ve.receiveShadow=!0,s.add(ve),e.addBox(F,_e*.5,re,pe,_e,ye,"stone")}function A(F,re,pe=1){const _e=new Ye;_e.position.set(F,0,re);const ye=new x(new me(.24,.36,2.6,7),w);ye.position.y=1.3,ye.castShadow=!0,_e.add(ye);const ve=[[3.4,2.4,3.2,S],[5.2,1.9,2.8,N],[6.9,1.35,2.4,S],[8.3,.85,1.9,N]];for(const[Ae,Le,Ne,Ie]of ve){const Ve=new x(new Be(Le,Ne,8),Ie);Ve.position.y=Ae,Ve.castShadow=!0,_e.add(Ve)}_e.scale.setScalar(pe),s.add(_e),e.addBox(F,2,re,1.1*pe,4*pe,1.1*pe,"wood")}const _=[[-34,34,1.25],[-38,18,1.35],[-34,-22,1.2],[-30,-36,1.4],[16,36,1.15],[17,6,1.1],[16,-34,1.3],[-18,-32,1.25],[-26,44,1.2],[9,44,1.15],[-34,6,1.15],[-16,11,.95]];for(const[F,re,pe]of _)A(F,re,pe);const B=[[-110,-150,75,92],[-20,-165,86,115],[75,-150,78,102],[165,-90,72,95],[175,20,82,108],[155,115,76,88],[60,160,80,96],[-45,165,76,88],[-145,115,78,95],[-155,-25,82,104]];for(const[F,re,pe,_e]of B){const ye=new x(new Be(pe,_e,7),E);ye.position.set(F,_e*.45,re),ye.rotation.y=F*.2,s.add(ye);const ve=new x(new Be(pe*.56,_e*.52,7),I);ve.position.set(F,_e*.72,re),ve.rotation.y=F*.2,s.add(ve)}t.initAmbient("alpine",e.bounds);const H=[{type:"health",pos:new b(-14,.8,22),label:"ALPINE CHEESE & CIDER (+35 HP)"},{type:"ammo",pos:new b(7,.8,16),label:"STEEL QUARREL BOLTS"},{type:"health",pos:new b(-18,.8,-1),label:"MOUNTAIN HERB TONIC (+35 HP)"},{type:"ammo",pos:new b(6,.8,-16),label:"CROSSBOW & FIRE-POT CRATE"},{type:"health",pos:new b(-12,.8,-22),label:"WALDSTÄTTEN RATIONS (+35 HP)"}];for(const F of H){const re=_s(F.type);re.position.copy(F.pos),s.add(re),o.push({...F,mesh:re,collected:!1})}return{enemySpawns:[{type:"halberdier",pos:new b(-10,0,20)},{type:"arquebusier",pos:new b(5,0,15)},{type:"halberdier",pos:new b(-2,0,7)},{type:"arquebusier",pos:new b(-15,0,2)},{type:"halberdier",pos:new b(8,0,1)},{type:"arquebusier",pos:new b(-4,.75,-8)},{type:"halberdier",pos:new b(-14,0,-16)},{type:"arquebusier",pos:new b(6,0,-18)},{type:"halberdier",pos:new b(-6,0,-24)},{type:"arquebusier",pos:new b(2,0,-26)},{type:"boss_swiss",pos:new b(-4,0,-26),isBossWave:!0}],pickups:o,animated:i,disposables:n,tellApple:xe}}const eg={id:"greece",index:3,themeClass:"theme-greece",act:"ACT IV • 480 BC",title:"AEGEAN ISLE",subtitle:"Marble & Turquoise Sea",heroName:"ULYSSES",objective:"Break the Spartan Garrison & Claim the Marble Temple",quote:'"Under the blazing Aegean sun, bronze rings against marble. Walk from the sandy shore to the pillared sanctuary."',musicTheme:"greece",enemyIcon:"Λ",currency:"Δ ",spawnPos:new b(0,0,44),spawnYaw:0,cameraPreview:{center:new b(0,6,-4),radius:42,height:15,speed:.13}};function tg(s,e,t){const n=[],i=[],o=[];e.bounds={minX:-46,maxX:46,minZ:-52,maxZ:50};const r=new b(.45,.58,-.68).normalize(),a=vs({topColor:673948,midColor:3905259,horizonColor:14677503,sunColor:16776160,sunDirection:r,cloudTint:16777215,cloudDensity:.34});s.add(a.mesh),i.push(ie=>{a.uniforms.uTime.value=ie}),s.fog=new li(12904695,.0044);const l=new gs(15267583,13085044,.85);s.add(l);const c=new mn(16774876,2.35);c.position.copy(r).multiplyScalar(115),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),c.shadow.camera.left=-68,c.shadow.camera.right=68,c.shadow.camera.top=68,c.shadow.camera.bottom=-68,c.shadow.near=10,c.shadow.far=230,c.shadow.bias=-5e-4,s.add(c);const h=new mn(6611179,.55);h.position.set(-55,18,40),s.add(h);const u=Ii(440,440,{deepColor:416903,shallowColor:2543822,foamColor:15793663,sunColor:16776416,sunDir:r,opacity:.92,waveScale:.16});u.mesh.position.set(0,-.22,0),s.add(u.mesh),i.push(ie=>{u.uniforms.uTime.value=ie});const d=Pn("greek_sand",18,20),f=new z(102,1.2,114),m=new x(f,new le({map:d.map,bumpMap:d.bumpMap,bumpScale:.2,roughness:.92}));m.position.set(0,-.6,-2),m.receiveShadow=!0,s.add(m);const v=Xm(3,22),g=new x(new gt(7.2,86),new le({map:v.map,roughness:.68,metalness:.04}));g.rotation.x=-Math.PI/2,g.position.set(0,.04,1),g.receiveShadow=!0,s.add(g);const p=new le({map:v.map,roughness:.62,metalness:.05}),y=new le({color:16447472,roughness:.84}),M=new le({color:1928898,roughness:.55}),w=fa("terracotta",3,2),C=new le({map:w.map,bumpMap:w.bumpMap,bumpScale:.18,roughness:.78}),P=new le({color:12739900,roughness:.78}),L=xs("castle",2,2),I=new le({map:L.map,color:14273976,roughness:.9}),E=new le({color:7029798,roughness:.85}),S=new le({color:14459970,metalness:.85,roughness:.28}),N=new le({color:7310422,roughness:.85}),ne=new le({color:2379050,roughness:.88}),ee=new le({map:bc("greece"),side:wt,roughness:.8}),he=new pt({color:16757560}),j=new Ye;j.position.set(0,0,-36);const $=new x(new z(24,.55,17),p);$.position.y=.275,$.receiveShadow=!0;const O=new x(new z(22.4,.55,15.6),p);O.position.y=.825,O.receiveShadow=!0;const U=new x(new z(20.8,.55,14.2),p);U.position.y=1.375,U.receiveShadow=!0,j.add($,O,U);const W=new x(new z(11.5,7.2,8.2),p);W.position.set(0,1.65+3.6,-.5),W.castShadow=!0,W.receiveShadow=!0,j.add(W);const K=[[-9.2,5.8],[-5.5,5.8],[-1.85,5.8],[1.85,5.8],[5.5,5.8],[9.2,5.8],[-9.2,-5.8],[-5.5,-5.8],[-1.85,-5.8],[1.85,-5.8],[5.5,-5.8],[9.2,-5.8],[-9.2,0],[9.2,0]];for(const[ie,G]of K){const ae=new x(new me(.46,.56,7.6,14),p);ae.position.set(ie,1.65+3.8,G),ae.castShadow=!0;const Y=new x(new z(1.25,.36,1.25),p);Y.position.set(ie,1.65+7.75,G),j.add(ae,Y)}const te=new x(new z(21.2,1.15,14.4),p);te.position.y=1.65+8.45,te.castShadow=!0;const de=new aa;de.moveTo(-10.8,0),de.lineTo(10.8,0),de.lineTo(0,3.5),de.closePath();const Se=new mo(de,{depth:14.6,bevelEnabled:!1});Se.translate(0,0,-7.3);const D=new x(Se,p);D.position.y=1.65+9,D.castShadow=!0,j.add(te,D);for(const ie of[-5.2,5.2]){const G=new x(new me(.55,.25,1.35,10),S);G.position.set(ie,1.65+.65,8.2);const ae=new x(new Be(.35,.85,7),he);ae.position.set(ie,1.65+1.65,8.2);const Y=new Cn(16753723,9,20,1.6);Y.position.set(ie,1.65+2,8.2),j.add(G,ae,Y),i.push(we=>{Y.intensity=8.5+Math.sin(we*9+ie)*1.4,ae.scale.y=.85+Math.sin(we*13+ie)*.2})}s.add(j),e.addBox(0,5,-36,22,10,15,"stone");function k(ie,G,ae,Y,we,be=0){const A=new Ye;A.position.set(ie,0,G),A.rotation.y=be;const _=new x(new z(ae,Y,we),y);_.position.y=Y*.5,_.castShadow=!0,_.receiveShadow=!0,A.add(_);const B=new x(new Be(Math.max(ae,we)*.82,2.2,4),C);B.rotation.y=Math.PI/4,B.scale.set((ae+1.2)/Math.max(ae,we),1,(we+1.2)/Math.max(ae,we)),B.position.y=Y+1.05,B.castShadow=!0,A.add(B);const H=new x(new z(1.7,2.5,.2),M);H.position.set(0,1.25,we*.5+.04),A.add(H);for(const F of[-ae*.3,ae*.3]){const re=new x(new z(1.25,1.25,.18),M);re.position.set(F,Y*.58,we*.5+.04),A.add(re)}for(const F of[-1.45,1.55]){const re=new x(new me(.18,.3,.88,10),P);re.position.set(F,.44,we*.5+.52),re.castShadow=!0,A.add(re)}s.add(A);const q=Math.abs(Math.cos(be));e.addBox(ie,Y*.5,G,q>.5?ae:we,Y+2.5,q>.5?we:ae,"stone")}k(-20,22,10,4.8,8.2,Math.PI/2),k(20,20,10.5,5.2,8.4,-Math.PI/2),k(-22,0,11,5,8.6,Math.PI/2.1),k(21,-4,9.5,4.6,8,-Math.PI/1.9),k(-19,-20,9.5,4.5,7.8,Math.PI/3);function Q(ie,G,ae){const Y=new Ye;Y.position.set(ie,.1,G),Y.rotation.y=ae;const we=new x(new z(3.6,1.4,13.5),E);we.position.y=.7,we.castShadow=!0;const be=new x(new Be(1.6,3.8,4),E);be.rotation.x=Math.PI/2,be.position.set(0,.85,8.2);const A=new x(new Be(.42,1.8,6),S);A.rotation.x=Math.PI/2,A.position.set(0,.42,10.2);const _=new x(new me(.35,.6,3.2,8),E);_.position.set(0,2.2,-6.5),_.rotation.x=-.35;const B=new x(new me(.16,.2,8.5,8),E);B.position.set(0,5,0);const H=new x(new me(.1,.1,6.2,8),E);H.rotation.z=Math.PI/2,H.position.set(0,7.2,.2);const q=new x(new gt(5.8,4.6,6,4),ee);q.position.set(0,4.9,.5),Y.add(we,be,A,_,B,H,q),s.add(Y),i.push(F=>{Y.position.y=.15+Math.sin(F*1.7+ie)*.12,Y.rotation.z=Math.sin(F*1.3+G)*.04})}Q(54,24,-.45),Q(-54,14,.55),Q(34,48,-1.25);const X=[[-8.5,28,5.4,1.4,1.1],[8.5,16,5.2,1.4,1.1],[-9.5,6,5.6,1.4,1.1],[9.5,-14,5.4,1.45,1.1],[-8.5,-18,5.4,1.45,1.1]];for(const[ie,G,ae,Y,we]of X){const be=new x(new z(ae,Y,we),p);be.position.set(ie,Y*.5,G),be.castShadow=!0,be.receiveShadow=!0,s.add(be),e.addBox(ie,Y*.5,G,ae,Y,we,"stone");const A=new x(new me(.45,.5,2.8,12),p);A.position.set(ie+ae*.5+.6,1.4,G),A.castShadow=!0,s.add(A),e.addBox(ie+ae*.5+.6,1.4,G,1.1,2.8,1.1,"stone")}function oe(ie,G,ae=1){const Y=new Ye;Y.position.set(ie,0,G);const we=new x(new me(.28,.45,2.6,8),E);we.position.y=1.3,we.rotation.z=.14,we.castShadow=!0,Y.add(we);for(const[be,A,_,B]of[[0,3.2,0,2],[-1.3,2.8,.6,1.4],[1.4,2.9,-.5,1.5]]){const H=new x(new ms(B,1),N);H.position.set(be,A,_),H.scale.set(1.3,.72,1.2),H.castShadow=!0,Y.add(H)}Y.scale.setScalar(ae),s.add(Y),e.addBox(ie,1.6,G,1*ae,3.2*ae,1*ae,"wood")}function Me(ie,G,ae=1){const Y=new Ye;Y.position.set(ie,0,G);const we=new x(new me(.16,.24,2,7),E);we.position.y=1;const be=new x(new Be(1.15,9.5,10),ne);be.position.y=6,be.castShadow=!0,Y.add(we,be),Y.scale.setScalar(ae),s.add(Y),e.addBox(ie,2,G,.9*ae,4*ae,.9*ae,"wood")}const Pe=[[-13,34,1.1],[14,32,1],[-30,12,1.25],[32,8,1.2],[-32,-14,1.15],[30,-18,1.2]];for(const[ie,G,ae]of Pe)oe(ie,G,ae);const Oe=[[-12,-26,1.15],[12,-26,1.15],[-14,-34,1.25],[14,-34,1.25],[-14,14,1],[14,10,1.05],[-28,30,1.1],[28,-28,1.2]];for(const[ie,G,ae]of Oe)Me(ie,G,ae);const xe=[[-115,-95,38,22],[110,-85,42,26],[-125,45,34,18],[128,52,40,20],[10,-145,58,34]];for(const[ie,G,ae,Y]of xe){const we=new x(new Be(ae,Y,8),I);we.position.set(ie,Y*.42-1,G),s.add(we)}t.initAmbient("aegean",e.bounds);const se=[{type:"health",pos:new b(-11,.8,24),label:"AEGEAN AMBROSIA (+35 HP)"},{type:"ammo",pos:new b(11,.8,14),label:"BRONZE JAVELIN BUNDLE"},{type:"health",pos:new b(-12,.8,2),label:"OLIVE OIL & HONEY (+35 HP)"},{type:"ammo",pos:new b(12,.8,-14),label:"HOPLITE JAVELIN RACK"},{type:"health",pos:new b(-11,.8,-22),label:"TEMPLE OFFERING (+35 HP)"}];for(const ie of se){const G=_s(ie.type);G.position.copy(ie.pos),s.add(G),o.push({...ie,mesh:G,collected:!1})}return{enemySpawns:[{type:"spartan_hoplite",pos:new b(-8,0,22)},{type:"spartan_skirmisher",pos:new b(9,0,18)},{type:"spartan_hoplite",pos:new b(-4,0,10)},{type:"spartan_skirmisher",pos:new b(-12,0,4)},{type:"spartan_hoplite",pos:new b(10,0,-2)},{type:"spartan_skirmisher",pos:new b(0,0,-8)},{type:"spartan_hoplite",pos:new b(-10,0,-14)},{type:"spartan_skirmisher",pos:new b(10,0,-18)},{type:"spartan_hoplite",pos:new b(-5,0,-24)},{type:"spartan_skirmisher",pos:new b(6,0,-24)},{type:"boss_greece",pos:new b(0,0,-25),isBossWave:!0}],pickups:o,animated:i,disposables:n}}const ng={id:"scandinavia",index:4,themeClass:"theme-scandinavia",act:"ACT V • 985 AD",title:"FJORD OF THE NORTH",subtitle:"Frost, Iron & Northern Lights",heroName:"ERIK THE RED",objective:"Storm the Palisade & Defeat Rival Jarl Hakon at the Great Hall",quote:'"Beneath dancing northern lights, longships grind upon frozen shingle. Cross the timber palisade and claim the Great Hall."',musicTheme:"scandinavia",enemyIcon:"ᛟ",currency:"ℳ ",spawnPos:new b(0,0,46),spawnYaw:0,cameraPreview:{center:new b(0,6,-4),radius:42,height:15,speed:.12}};function ig(s,e,t){const n=[],i=[],o=[];e.bounds={minX:-48,maxX:48,minZ:-54,maxZ:52};const r=new b(-.35,.42,-.84).normalize(),a=vs({topColor:330788,midColor:860743,horizonColor:2116974,sunColor:14284799,sunDirection:r,cloudTint:4422300,cloudDensity:.25});s.add(a.mesh),i.push(D=>{a.uniforms.uTime.value=D});const l=Cl(280,68);l.mesh.position.set(0,68,-110),l.mesh.rotation.x=.22,s.add(l.mesh);const c=Cl(240,56);c.mesh.position.set(35,76,-80),c.mesh.rotation.y=-.35,c.mesh.rotation.x=.26,s.add(c.mesh),i.push(D=>{l.uniforms.uTime.value=D,c.uniforms.uTime.value=D*.85+2.1}),s.fog=new li(1453383,.0068);const h=new gs(8050376,2767695,1.05);s.add(h);const u=new mn(13363455,1.95);u.position.copy(r).multiplyScalar(110),u.castShadow=!0,u.shadow.mapSize.set(2048,2048),u.shadow.camera.left=-68,u.shadow.camera.right=68,u.shadow.camera.top=68,u.shadow.camera.bottom=-68,u.shadow.near=10,u.shadow.far=230,u.shadow.bias=-5e-4,s.add(u);const d=new mn(3862704,.65);d.position.set(45,55,-70),s.add(d);const f=Ii(440,440,{deepColor:400694,shallowColor:1460846,foamColor:13363455,sunColor:11466726,sunDir:r,opacity:.92,waveScale:.14});f.mesh.position.set(0,-.25,0),s.add(f.mesh),i.push(D=>{f.uniforms.uTime.value=D});const m=Pn("arctic_snow",20,22),v=new x(new z(106,1.2,118),new le({map:m.map,bumpMap:m.bumpMap,bumpScale:.22,roughness:.85}));v.position.set(0,-.6,-2),v.receiveShadow=!0,s.add(v);const g=Pn("cobble",3,24),p=new x(new gt(6.8,88),new le({map:g.map,color:11188164,bumpMap:g.bumpMap,bumpScale:.2,roughness:.88}));p.rotation.x=-Math.PI/2,p.position.set(0,.04,1),p.receiveShadow=!0,s.add(p);const y=ii("alpine",2,2),M=xs("castle",2,2),w=new le({map:y.map,bumpMap:y.bumpMap,bumpScale:.16,roughness:.86}),C=new le({color:2825492,roughness:.88}),P=new le({map:M.map,color:7305861,bumpMap:M.bumpMap,bumpScale:.25,roughness:.9}),L=new le({color:15595263,roughness:.72}),I=new le({color:3753042,roughness:.94}),E=new le({color:1456169,roughness:.88}),S=new le({color:16762470,emissive:16745508,emissiveIntensity:1.5,roughness:.3}),N=new le({map:bc("scandinavia"),side:wt,roughness:.8}),ne=new pt({color:16755251});function ee(D,k,Q,X){const oe=Q-D,Me=X-k,Pe=Math.hypot(oe,Me),Oe=Math.atan2(oe,Me),xe=Math.max(3,Math.floor(Pe/.65)),se=new Ye;se.position.set((D+Q)*.5,0,(k+X)*.5),se.rotation.y=Oe;for(let ie=0;ie<=xe;ie++){const G=-Pe*.5+ie/xe*Pe,ae=3.4+ie*19%5*.14,Y=new x(new me(.16,.26,ae,7),w);Y.position.set(0,ae*.5,G),Y.castShadow=!0,se.add(Y)}const R=new x(new z(.45,.26,Pe),C);R.position.y=2.1,se.add(R),s.add(se),e.addBox((D+Q)*.5,1.8,(k+X)*.5,Math.abs(oe)+.7,3.6,Math.abs(Me)+.7,"wood")}ee(-34,24,-6,24),ee(6,24,34,24);for(const D of[-6,6]){const k=new x(new me(.42,.48,6.2,8),C);k.position.set(D,3.1,24),k.castShadow=!0,s.add(k)}const he=new x(new z(13.6,.65,.85),C);he.position.set(0,5.7,24),s.add(he);function j(D,k,Q,X,oe,Me=0,Pe=!1){const Oe=new Ye;Oe.position.set(D,0,k),Oe.rotation.y=Me;const xe=new x(new z(Q+1,1,oe+1),P);xe.position.y=.5,xe.receiveShadow=!0,Oe.add(xe);const se=new x(new z(Q,X,oe),w);se.position.y=1+X*.5,se.castShadow=!0,se.receiveShadow=!0,Oe.add(se);const R=Pe?4.8:3.2,ie=new aa;ie.moveTo(-(Q*.62),0),ie.lineTo(Q*.62,0),ie.lineTo(0,R),ie.closePath();const G=new mo(ie,{depth:oe+2.2,bevelEnabled:!1});G.translate(0,0,-(oe+2.2)*.5);const ae=new x(G,L);ae.position.y=1+X-.15,ae.castShadow=!0,Oe.add(ae);const Y=new x(new z(.45,.45,oe+3.2),C);Y.position.y=1+X+R-.1,Oe.add(Y);for(const B of[-(oe*.5+1.4),oe*.5+1.4]){const H=new x(new Be(.32,1.4,5),C);H.position.set(0,1+X+R+.45,B),H.rotation.x=B>0?.4:-.4,Oe.add(H)}const we=new x(new z(Pe?3.2:2.1,Pe?3.8:2.8,.25),S);we.position.set(0,1+(Pe?1.9:1.4),oe*.5+.06),Oe.add(we);const be=new le({map:Xr(Pe?3:1),roughness:.7});for(const B of[-Q*.3,Q*.3]){const H=new x(new me(.68,.68,.1,16),[C,be,C]);H.rotation.x=Math.PI/2,H.position.set(B,3,oe*.5+.14),Oe.add(H)}const A=new Cn(16749112,Pe?14:8,Pe?28:18,1.5);A.position.set(0,3.2,oe*.5+2.2),Oe.add(A),i.push(B=>{A.intensity=(Pe?13:7.5)+Math.sin(B*9.5+D)*1.6}),s.add(Oe);const _=Math.abs(Math.cos(Me));e.addBox(D,(X+2)*.5,k,_>.5?Q+.8:oe+.8,X+3,_>.5?oe+.8:Q+.8,"wood")}j(0,-35,16,6.2,13,0,!0),j(-22,8,9.5,4.2,13.5,Math.PI/2.2),j(22,6,9.5,4.2,13.5,-Math.PI/2.2),j(-21,-15,9,4,12,Math.PI/3),j(21,-16,9,4,12,-Math.PI/3);function $(D,k,Q){const X=new Ye;X.position.set(D,.08,k),X.rotation.y=Q;const oe=new x(new z(3.4,1.25,14.5),w);oe.position.y=.65,oe.castShadow=!0;const Me=new x(new me(.24,.55,4.2,8),C);Me.position.set(0,2.2,7.6),Me.rotation.x=.38;const Pe=new x(new z(.45,.55,1.15),C);Pe.position.set(0,4,8.5);const Oe=Me.clone();Oe.position.set(0,2,-7.5),Oe.rotation.x=-.35;const xe=new x(new me(.14,.18,8.6,8),C);xe.position.set(0,5,0);const se=new x(new me(.09,.09,6.4,8),C);se.rotation.z=Math.PI/2,se.position.set(0,7.3,.15);const R=new x(new gt(5.9,4.8),N);R.position.set(0,4.9,.35),X.add(oe,Me,Pe,Oe,xe,se,R);for(let ie=0;ie<6;ie++){const G=-4.5+ie*1.8,ae=new le({map:Xr(ie),roughness:.7});for(const Y of[-1,1]){const we=new x(new me(.55,.55,.08,14),[C,ae,C]);we.rotation.z=Math.PI/2,we.position.set(Y*1.78,1.15,G),X.add(we)}}s.add(X),i.push(ie=>{X.position.y=.12+Math.sin(ie*1.6+D)*.11,X.rotation.z=Math.sin(ie*1.2+k)*.035})}$(56,20,-.38),$(-56,12,.42),$(36,48,-1.15);function O(D,k){const Q=new x(new me(.45,.24,1.3,8),P);Q.position.set(D,.65,k);const X=new x(new Be(.32,.85,7),ne);X.position.set(D,1.65,k);const oe=new Cn(16748075,8.5,19,1.6);oe.position.set(D,2,k),s.add(Q,X,oe),i.push(Me=>{oe.intensity=8+Math.sin(Me*11+D)*1.5,X.scale.y=.82+Math.sin(Me*15+k)*.22}),e.addBox(D,.7,k,.9,1.5,.9,"stone")}for(const D of[34,14,-6,-24])O(-5.2,D),O(5.2,D);const U=[[-9,16,4.6,1.4,1.2],[9,10,4.6,1.4,1.2],[-9,-4,4.8,1.45,1.2],[9,-14,4.8,1.45,1.2]];for(const[D,k,Q,X,oe]of U){const Me=new x(new z(Q,X,oe),w);Me.position.set(D,X*.5,k),Me.castShadow=!0;const Pe=new x(new z(Q+.1,.22,oe+.1),L);Pe.position.set(D,X+.08,k),s.add(Me,Pe),e.addBox(D,X*.5,k,Q,X,oe,"wood")}function W(D,k,Q=1){const X=new Ye;X.position.set(D,0,k);const oe=new x(new me(.24,.36,2.6,7),C);oe.position.y=1.3,oe.castShadow=!0,X.add(oe);for(const[Me,Pe,Oe]of[[3.5,2.4,3.2],[5.4,1.85,2.8],[7.1,1.3,2.4],[8.5,.8,1.8]]){const xe=new x(new Be(Pe,Oe,8),E);xe.position.y=Me,xe.castShadow=!0;const se=new x(new Be(Pe*.88,Oe*.45,8),L);se.position.y=Me+Oe*.28,X.add(xe,se)}X.scale.setScalar(Q),s.add(X),e.addBox(D,2,k,1.1*Q,4*Q,1.1*Q,"wood")}const K=[[-14,38,1.2],[14,38,1.15],[-34,34,1.3],[34,32,1.25],[-36,0,1.35],[36,-2,1.3],[-34,-26,1.25],[34,-26,1.3],[-15,-28,1.15],[15,-28,1.15]];for(const[D,k,Q]of K)W(D,k,Q);const te=[[-125,-135,76,95],[-10,-165,88,110],[105,-130,80,98],[-155,-20,74,88],[155,-15,76,92],[-135,110,68,76],[135,110,70,78]];for(const[D,k,Q,X]of te){const oe=new x(new Be(Q,X,7),I);oe.position.set(D,X*.44,k),oe.rotation.y=D*.2;const Me=new x(new Be(Q*.58,X*.48,7),L);Me.position.set(D,X*.72,k),Me.rotation.y=D*.2,s.add(oe,Me)}t.initAmbient("snow",e.bounds);const de=[{type:"health",pos:new b(-11,.8,30),label:"WARM MEAD HORN (+35 HP)"},{type:"ammo",pos:new b(11,.8,16),label:"THROWING AXE BUNDLE"},{type:"health",pos:new b(-12,.8,2),label:"LONGHOUSE FEAST (+35 HP)"},{type:"ammo",pos:new b(12,.8,-12),label:"RAIDER AXE RACK"},{type:"health",pos:new b(-11,.8,-22),label:"HEARTH TONIC (+35 HP)"}];for(const D of de){const k=_s(D.type);k.position.copy(D.pos),s.add(k),o.push({...D,mesh:k,collected:!1})}return{enemySpawns:[{type:"viking_archer",pos:new b(-8,0,20)},{type:"viking_warrior",pos:new b(8,0,18)},{type:"viking_berserker",pos:new b(0,0,11)},{type:"viking_archer",pos:new b(-12,0,4)},{type:"viking_warrior",pos:new b(11,0,-2)},{type:"viking_berserker",pos:new b(-6,0,-9)},{type:"viking_archer",pos:new b(10,0,-15)},{type:"viking_warrior",pos:new b(-10,0,-20)},{type:"viking_berserker",pos:new b(6,0,-23)},{type:"viking_archer",pos:new b(-4,0,-26)},{type:"boss_scandinavia",pos:new b(0,0,-25),isBossWave:!0}],pickups:o,animated:i,disposables:n}}const Qt=[{meta:Zm,builder:$m},{meta:jm,builder:Km},{meta:Jm,builder:Qm},{meta:eg,builder:tg},{meta:ng,builder:ig}],Pl={good:{label:"THE GOOD",enemyMult:.72,playerHp:130},bad:{label:"THE BAD",enemyMult:1,playerHp:100},ugly:{label:"THE UGLY",enemyMult:1.4,playerHp:75}};class sg{constructor(){this.container=document.getElementById("game-container"),this.sound=new Om,this.renderer=new Em({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Il,this.renderer.toneMapping=Yr,this.renderer.toneMappingExposure=1.12,this.container.appendChild(this.renderer.domElement),this.scene=new Jh,this.camera=new Zt(72,window.innerWidth/window.innerHeight,.1,600),this.scene.add(this.camera),this.weaponHolder=new Ye,this.camera.add(this.weaponHolder),this.muzzleLight=new Cn(16758861,0,12,2),this.muzzleLight.position.set(.25,-.1,-.9),this.camera.add(this.muzzleLight),this.heroStage=new Ye,this.heroStage.visible=!1,this.heroFigureHolder=new Ye,this.heroStage.add(this.heroFigureHolder);const e=new Cn(16773590,9,10,1.4);e.position.set(1.4,2.2,2.2);const t=new Cn(10406655,4.5,10,1.5);t.position.set(-1.8,1.9,-1.6),this.heroStage.add(e,t),this.camera.add(this.heroStage),this.heroStagePop=1,this.composer=new Lm(this.renderer),this.renderPass=new Im(this.scene,this.camera),this.bloomPass=new ki(new Re(window.innerWidth,window.innerHeight),.34,.55,.82),this.outputPass=new Nm,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(this.outputPass),this.state="title",this.levelIndex=0,this.difficultyKey="bad",this.selectedHeroIds={west:hn.west[0].id,japan:hn.japan[0].id,swiss:hn.swiss[0].id,greece:hn.greece[0].id,scandinavia:hn.scandinavia[0].id},this.activeHero=hn.west[0],this.timeSinceLastDamage=999,this.practiceMode=!1,this.usedPracticeThisRun=!1,this.paxBuffer="",this.clock=new xc,this.elapsed=0,this.worldGroup=new Ye,this.scene.add(this.worldGroup),this.collision=new El,this.particles=null,this.animatedCallbacks=[],this.enemies=[],this.bossSpawnPending=null,this.activeBoss=null,this.pickups=[],this.enemyProjectiles=[],this.playerThrowables=[],this.tellApple=null,this.player={pos:new b,vel:new b,yaw:0,pitch:0,hp:100,maxHp:100,stamina:100,grounded:!0,bobPhase:0},this.weapons=[],this.weaponMeshes=[],this.currentWeaponIdx=0,this.fireTimer=0,this.reloading=!1,this.reloadTimer=0,this.scoped=!1,this.recoilOffset=0,this.slashAnim=0,this.baseFov=72,this.stats={score:0,shots:0,hits:0,headshots:0,kills:0},this.keys={},this.mouseDownL=!1,this.mouseDownR=!1,this.pointerLocked=!1,this.raycaster=new Hu,this._cacheDom(),this._bindEvents();const n=new URLSearchParams(window.location.search),i=window.location.hash.replace("#","").toLowerCase(),o={west:0,japan:1,swiss:2,greece:3,scandinavia:4};let r=0;if(i in o)r=o[i];else if(n.has("level")){const a=n.get("level").toLowerCase();r=a in o?o[a]:Math.max(0,Math.min(Qt.length-1,parseInt(a,10)||0))}if(this.loadLevel(r,!0),document.querySelectorAll(".level-card").forEach((a,l)=>a.classList.toggle("active",l===r)),n.has("hero")){const a=Qt[r].meta.id,l=Tl(a,n.get("hero").toLowerCase());this.selectedHeroIds[a]=l.id,this.activeHero=l}n.get("select")==="1"?this.showIntroCard():n.get("autostart")==="1"&&(this.startMission(),this.dom.callout.classList.add("hidden")),window.__outlawsGame=this,this._loop()}_cacheDom(){this.dom={titleScreen:document.getElementById("title-screen"),introCard:document.getElementById("intro-card"),pauseScreen:document.getElementById("pause-screen"),endScreen:document.getElementById("end-screen"),hud:document.getElementById("hud"),crosshair:document.getElementById("hud-crosshair"),hitmarker:document.getElementById("hitmarker"),scopeOverlay:document.getElementById("scope-overlay"),scopeLabel:document.getElementById("scope-label"),damageOverlay:document.getElementById("damage-overlay"),hitFlash:document.getElementById("hit-flash"),paxBadge:document.getElementById("pax-badge"),callout:document.getElementById("callout-banner"),pickupToast:document.getElementById("pickup-toast"),eraBadge:document.getElementById("hud-era-badge"),objective:document.getElementById("hud-objective"),enemyIcon:document.getElementById("hud-enemy-icon"),enemiesLeft:document.getElementById("hud-enemies-left"),bossBarWrap:document.getElementById("boss-bar-wrap"),bossName:document.getElementById("boss-name"),bossBarFill:document.getElementById("boss-bar-fill"),scoreVal:document.getElementById("hud-score"),heroName:document.getElementById("hud-hero-name"),heroPerk:document.getElementById("hud-hero-perk"),hpText:document.getElementById("hud-hp-text"),hpBar:document.getElementById("hud-hp-bar"),staminaBar:document.getElementById("hud-stamina-bar"),weaponStrip:document.getElementById("hud-weapon-strip"),weaponName:document.getElementById("hud-weapon-name"),ammoPips:document.getElementById("hud-ammo-pips"),ammoMag:document.getElementById("hud-ammo-mag"),ammoReserve:document.getElementById("hud-ammo-reserve"),altHint:document.getElementById("hud-alt-hint"),comicAct:document.getElementById("comic-act"),comicTitle:document.getElementById("comic-title"),comicQuote:document.getElementById("comic-quote"),heroCardsList:document.getElementById("hero-cards-list"),heroPreviewName:document.getElementById("hero-preview-name"),heroPreviewBio:document.getElementById("hero-preview-bio"),heroPreviewStrength:document.getElementById("hero-preview-strength"),pauseLevelName:document.getElementById("pause-level-name"),btnToggleAudio:document.getElementById("btn-toggle-audio"),endEyebrow:document.getElementById("end-eyebrow"),endTitle:document.getElementById("end-title"),endPracticeNote:document.getElementById("end-practice-note"),endSummary:document.getElementById("end-summary"),endStats:document.getElementById("end-stats"),btnNextLevel:document.getElementById("btn-next-level")}}_bindEvents(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)}),document.querySelectorAll(".level-card").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".level-card").forEach(n=>n.classList.remove("active")),e.classList.add("active");const t=parseInt(e.dataset.level,10);this.loadLevel(t,!0)})}),document.querySelectorAll(".diff-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".diff-btn").forEach(t=>t.classList.remove("active")),e.classList.add("active"),this.difficultyKey=e.dataset.diff})}),document.getElementById("btn-play").addEventListener("click",()=>{this.sound.ensureInit(),this.showIntroCard()}),document.getElementById("btn-start-mission").addEventListener("click",()=>{this.startMission()}),document.getElementById("btn-hero-back").addEventListener("click",()=>{this.returnToTitle()}),document.getElementById("btn-resume").addEventListener("click",()=>this.resumeGame()),document.getElementById("btn-restart").addEventListener("click",()=>this.restartLevel()),document.getElementById("btn-pause-change-hero").addEventListener("click",()=>this.showIntroCard()),document.getElementById("btn-main-menu").addEventListener("click",()=>this.returnToTitle()),document.getElementById("btn-end-restart").addEventListener("click",()=>this.restartLevel()),document.getElementById("btn-end-change-hero").addEventListener("click",()=>this.showIntroCard()),document.getElementById("btn-end-menu").addEventListener("click",()=>this.returnToTitle()),document.getElementById("btn-next-level").addEventListener("click",()=>{const e=(this.levelIndex+1)%Qt.length;this.loadLevel(e,!0),this.showIntroCard()}),this.dom.btnToggleAudio.addEventListener("click",()=>{const e=this.sound.toggleMute();this.dom.btnToggleAudio.textContent=e?"SOUND: OFF":"SOUND: ON"}),window.addEventListener("keydown",e=>{if(this.keys[e.code]=!0,!e.ctrlKey&&!e.metaKey&&!e.altKey&&e.key&&e.key.length===1){const t=e.key.toLowerCase();t>="a"&&t<="z"&&(this.paxBuffer=(this.paxBuffer+t).slice(-3),this.paxBuffer==="pax"&&(this.paxBuffer="",this.togglePracticeMode()))}if(e.code==="KeyM"){const t=this.sound.toggleMute();this.dom.btnToggleAudio.textContent=t?"SOUND: OFF":"SOUND: ON",this.toast(t?"AUDIO MUTED":"AUDIO ENABLED")}if(this.state==="intro"){e.code==="Digit1"||e.code==="Numpad1"?(e.preventDefault(),this.selectHeroByIndex(0)):e.code==="Digit2"||e.code==="Numpad2"?(e.preventDefault(),this.selectHeroByIndex(1)):e.code==="Digit3"||e.code==="Numpad3"?(e.preventDefault(),this.selectHeroByIndex(2)):e.code==="Enter"||e.code==="NumpadEnter"?(e.preventDefault(),this.startMission()):e.code==="Escape"&&(e.preventDefault(),this.returnToTitle());return}this.state==="playing"&&(e.code==="Digit1"&&this.switchWeapon(0),e.code==="Digit2"&&this.switchWeapon(1),e.code==="Digit3"&&this.switchWeapon(2),e.code==="Digit4"&&this.switchWeapon(3),e.code==="KeyR"&&this.startReload(),e.code==="Escape"&&this.pauseGame())}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),window.addEventListener("wheel",e=>{if(this.state!=="playing")return;const t=e.deltaY>0?1:-1,n=(this.currentWeaponIdx+t+this.weapons.length)%this.weapons.length;this.switchWeapon(n)}),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===this.renderer.domElement,!this.pointerLocked&&this.state==="playing"&&this.pauseGame()}),window.addEventListener("mousemove",e=>{if(this.state!=="playing"||!this.pointerLocked)return;const t=this.scoped?85e-5:.0021;this.player.yaw-=e.movementX*t,this.player.pitch=Math.max(-1.28,Math.min(1.28,this.player.pitch-e.movementY*t))}),window.addEventListener("mousedown",e=>{if(this.state==="playing"){if(!this.pointerLocked){this._requestLock();return}e.button===0?(this.mouseDownL=!0,this.tryFire(!1)):e.button===2&&(this.mouseDownR=!0,this.handleRightClickDown())}}),window.addEventListener("mouseup",e=>{e.button===0&&(this.mouseDownL=!1),e.button===2&&(this.mouseDownR=!1,this.setScope(!1))}),window.addEventListener("contextmenu",e=>e.preventDefault())}_clearWorld(){for(;this.worldGroup.children.length>0;){const e=this.worldGroup.children[0];this.worldGroup.remove(e)}for(;this.weaponHolder.children.length>0;)this.weaponHolder.remove(this.weaponHolder.children[0]);this.animatedCallbacks=[],this.enemies=[],this.bossSpawnPending=null,this.activeBoss=null,this.pickups=[],this.enemyProjectiles=[],this.playerThrowables=[],this.tellApple=null,this.setScope(!1)}loadLevel(e,t=!1){this._clearWorld(),this.levelIndex=e;const{meta:n,builder:i}=Qt[e];document.body.className=n.themeClass,this.practiceMode&&document.body.classList.add("pax-active"),this.collision=new El,this.particles=new Fm(this.worldGroup);const o=i(this.worldGroup,this.collision,this.particles);this.animatedCallbacks=o.animated||[],this.pickups=o.pickups||[],this.tellApple=o.tellApple||null;const r=Pl[this.difficultyKey],a=Tl(n.id,this.selectedHeroIds[n.id]);this.activeHero=a;const l=a.mods||{},c=Math.round(r.playerHp*(l.maxHpMult||1));this.player.pos.copy(n.spawnPos),this.player.vel.set(0,0,0),this.player.yaw=n.spawnYaw,this.player.pitch=0,this.player.maxHp=c,this.player.hp=c,this.player.stamina=100,this.player.grounded=!0,this.timeSinceLastDamage=999,this.stats={score:0,shots:0,hits:0,headshots:0,kills:0};for(const d of o.enemySpawns)if(d.isBossWave)this.bossSpawnPending=d;else{const f=new Al(d.type,d.pos,r.enemyMult);this.worldGroup.add(f.mesh),this.enemies.push(f)}const h=Bm[n.id];this.weapons=h.map(d=>{const f=l.weaponOverrides&&l.weaponOverrides[d.id]||{},m=(d.kind==="melee"&&l.meleeFireRateMult?l.meleeFireRateMult:1)*(l.fireRateMult||1)*(f.fireRateMult||1),v=(l.reloadTimeMult||1)*(f.reloadTimeMult||1),g=(d.kind==="melee"&&l.meleeDamageMult?l.meleeDamageMult:1)*(l.damageMult||1)*(f.damageMult||1),p=d.kind==="melee"&&l.meleeRangeBonus?l.meleeRangeBonus:0;return{...d,damage:Math.round(d.damage*g),fireRate:+(d.fireRate*m).toFixed(3),reloadTime:+(d.reloadTime*v).toFixed(3),range:d.range?+(d.range+p).toFixed(2):d.range,mag:d.magSize,curReserve:d.reserve}}),this.weaponMeshes=this.weapons.map(d=>{const f=zm(d.id);return f.visible=!1,this.weaponHolder.add(f),f});const u=Math.min(this.weapons.length-1,Math.max(0,a.defaultWeaponIdx||0));this.currentWeaponIdx=u,this.reloading=!1,this.fireTimer=0,t||(this.weaponMeshes[u].visible=!0),this._buildWeaponStripUI(),this._updateHud(),this.dom.bossBarWrap.classList.add("hidden")}selectHeroByIndex(e){const t=Qt[this.levelIndex].meta.id,n=hn[t];if(!n||e<0||e>=n.length)return;const i=n[e];for(this.selectedHeroIds[t]=i.id,this.activeHero=i,this.dom.heroCardsList.querySelectorAll(".hero-card").forEach((r,a)=>{const l=a===e;r.classList.toggle("active",l),r.setAttribute("aria-checked",l?"true":"false")}),this.dom.heroPreviewName.textContent=i.name,this.dom.heroPreviewBio.textContent=i.bio,this.dom.heroPreviewStrength.textContent=i.strengthDesc;this.heroFigureHolder.children.length>0;)this.heroFigureHolder.remove(this.heroFigureHolder.children[0]);const o=km(i.id);this.heroFigureHolder.add(o),this.heroFigureHolder.rotation.y=.25,this.heroStagePop=.82}showIntroCard(){this.state="intro",this.setScope(!1),document.pointerLockElement&&document.exitPointerLock();const e=Qt[this.levelIndex].meta,t=hn[e.id],n=this.selectedHeroIds[e.id]||t[0].id,i=Math.max(0,t.findIndex(o=>o.id===n));this.dom.titleScreen.classList.add("hidden"),this.dom.endScreen.classList.add("hidden"),this.dom.pauseScreen.classList.add("hidden"),this.dom.hud.classList.add("hidden"),this.dom.crosshair.classList.add("hidden"),this.dom.introCard.classList.remove("hidden"),this.dom.comicAct.textContent=`${e.act} — ${e.subtitle}`,this.dom.comicTitle.textContent=e.title,this.dom.comicQuote.textContent=e.quote,this.dom.heroCardsList.innerHTML=t.map((o,r)=>`
      <button type="button" class="hero-card" data-hero-idx="${r}" role="radio" aria-checked="false">
        <div class="hero-card-key">${r+1}</div>
        <div class="hero-card-body">
          <div class="hero-card-name">${o.name}</div>
          <div class="hero-card-bio">${o.bio}</div>
          <div class="hero-card-strength"><span>${o.strengthLabel}</span>${o.strengthDesc}</div>
        </div>
      </button>
    `).join(""),this.dom.heroCardsList.querySelectorAll(".hero-card").forEach((o,r)=>{o.addEventListener("mouseenter",()=>this.selectHeroByIndex(r)),o.addEventListener("focus",()=>this.selectHeroByIndex(r)),o.addEventListener("click",()=>this.selectHeroByIndex(r)),o.addEventListener("dblclick",()=>{this.selectHeroByIndex(r),this.startMission()})}),this.weaponHolder.visible=!1,this.heroStage.visible=!0,this.selectHeroByIndex(i),this.sound.startMusic(e.musicTheme)}_requestLock(){try{const e=this.renderer.domElement.requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>{})}catch{}}togglePracticeMode(){this.practiceMode=!this.practiceMode,this.practiceMode&&this.state==="playing"&&(this.usedPracticeThisRun=!0),document.body.classList.toggle("pax-active",this.practiceMode),this.dom.paxBadge&&this.dom.paxBadge.classList.toggle("hidden",!this.practiceMode),this.state==="playing"&&this.toast(this.practiceMode?"Practice mode: they cannot hurt you":"Practice mode off")}startMission(){this.heroStage.visible=!1,this.usedPracticeThisRun=this.practiceMode,this.loadLevel(this.levelIndex,!1),this.state="playing",this.dom.introCard.classList.add("hidden"),this.dom.titleScreen.classList.add("hidden"),this.dom.pauseScreen.classList.add("hidden"),this.dom.endScreen.classList.add("hidden"),this.dom.hud.classList.remove("hidden"),this.dom.crosshair.classList.remove("hidden"),this.weaponHolder.visible=!0;const e=Qt[this.levelIndex].meta;this.camera.rotation.set(0,e.spawnYaw,0,"YXZ"),this.sound.startMusic(e.musicTheme),this._requestLock(),this.showCallout(`${this.activeHero.name.toUpperCase()} — DRAW!`)}pauseGame(){if(this.state!=="playing")return;this.state="paused",this.mouseDownL=!1,this.mouseDownR=!1,this.setScope(!1),this.dom.pauseScreen.classList.remove("hidden"),this.dom.crosshair.classList.add("hidden");const e=Qt[this.levelIndex].meta;this.dom.pauseLevelName.textContent=`${e.act} — ${e.title}`,document.pointerLockElement&&document.exitPointerLock()}resumeGame(){this.state="playing",this.dom.pauseScreen.classList.add("hidden"),this.dom.crosshair.classList.remove("hidden"),this._requestLock()}restartLevel(){this.startMission()}returnToTitle(){this.state="title",this.setScope(!1),this.weaponHolder.visible=!1,this.heroStage.visible=!1,this.dom.hud.classList.add("hidden"),this.dom.crosshair.classList.add("hidden"),this.dom.pauseScreen.classList.add("hidden"),this.dom.endScreen.classList.add("hidden"),this.dom.introCard.classList.add("hidden"),this.dom.titleScreen.classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),this.sound.stopMusic(),this.loadLevel(this.levelIndex,!0)}switchWeapon(e){e===this.currentWeaponIdx||e<0||e>=this.weapons.length||(this.setScope(!1),this.reloading=!1,this.weaponMeshes[this.currentWeaponIdx].visible=!1,this.currentWeaponIdx=e,this.weaponMeshes[e].visible=!0,this.recoilOffset=-.18,this._updateHud())}setScope(e){const t=this.weapons[this.currentWeaponIdx],n=e&&t&&t.altMode==="scope"&&!this.reloading&&this.state==="playing";this.scoped=n,n?(this.dom.scopeOverlay.classList.remove("hidden"),this.dom.scopeLabel.textContent=t.scopeLabel||"OPTIC ZOOM",this.dom.crosshair.classList.add("hidden"),this.weaponHolder.visible=!1):(this.dom.scopeOverlay.classList.add("hidden"),this.state==="playing"&&(this.dom.crosshair.classList.remove("hidden"),this.weaponHolder.visible=!0))}handleRightClickDown(){const e=this.weapons[this.currentWeaponIdx];e&&(e.altMode==="scope"?this.setScope(!0):this.tryFire(!0))}startReload(){const e=this.weapons[this.currentWeaponIdx];!e||e.infinite||this.reloading||e.mag>=e.magSize||e.curReserve<=0||(this.setScope(!1),this.reloading=!0,this.reloadTimer=e.reloadTime,this.sound.playReload(),this.toast("RELOADING..."))}tryFire(e){if(this.fireTimer>0||this.reloading)return;const t=this.weapons[this.currentWeaponIdx];if(!t)return;if(!t.infinite&&t.mag<=0){t.curReserve>0?this.startReload():this.toast("OUT OF AMMO!");return}if(t.kind==="melee"){const m=e&&t.altMode==="heavy_slash";this.fireTimer=m?t.fireRate*1.45:t.fireRate,this.slashAnim=1,this.sound.playShot("slash");const v=new b;this.camera.getWorldDirection(v);const g=new b().crossVectors(v,new b(0,1,0)).normalize(),p=this.camera.getWorldPosition(new b);this.particles.spawnSlashArc(p,v,g,t.slashColor);const y=m?t.damage*1.65:t.damage,M=m?t.range+1:t.range;let w=!1;for(const C of this.enemies){if(!C.alive)continue;const P=new b(C.mesh.position.x-p.x,C.mesh.position.y+1.1-p.y,C.mesh.position.z-p.z);P.length()<=M&&(P.normalize(),P.dot(v)>.35&&(w=!0,this._damageEnemy(C,y,m,C.mesh.position.clone().add(new b(0,1.3,0)))))}w&&this._flashHitmarker(m);return}if(t.kind==="throwable"){t.mag--,this.fireTimer=t.fireRate,this.recoilOffset=t.recoil,this.sound.playShot("throw");const m=this.camera.getWorldPosition(new b),v=new b;this.camera.getWorldDirection(v);const g=new x(new Ke(.16,8,8),new pt({color:t.projColor}));g.position.copy(m).addScaledVector(v,.8),this.worldGroup.add(g),this.playerThrowables.push({mesh:g,vel:v.multiplyScalar(22).add(new b(0,6.2,0)),fuse:1.65,damage:t.damage,radius:t.blastRadius}),t.mag===0&&t.curReserve>0&&this.startReload(),this._updateHud();return}let n=1,i=t.pellets,o=this.scoped?t.spread*.12:t.spread,r=t.fireRate;e&&t.altMode==="fan"?(r=t.fireRate*.42,o=t.spread*3.5):e&&t.altMode==="double"&&t.mag>=2?(n=2,i=t.pellets*2,o=t.spread*1.35,r=t.fireRate*1.25):e&&t.altMode==="fan_stars"&&(n=Math.min(3,t.mag),i=n,o=.095,r=t.fireRate*1.5),t.mag=Math.max(0,t.mag-n),this.fireTimer=r,this.recoilOffset=t.recoil*(n>1?1.5:1),this.stats.shots++,this.sound.playShot(t.sound),(t.sound==="revolver"||t.sound==="shotgun"||t.sound==="rifle"||t.sound==="musket")&&(this.muzzleLight.intensity=10),this.dom.crosshair.classList.add("spread"),setTimeout(()=>this.dom.crosshair.classList.remove("spread"),95);const a=this.camera.getWorldPosition(new b),l=new b;this.camera.getWorldDirection(l);const c=new b().crossVectors(l,new b(0,1,0)).normalize(),h=a.clone().addScaledVector(l,.75).addScaledVector(c,this.scoped?0:.18).add(new b(0,-.1,0)),u=[];for(const m of this.enemies)m.alive&&u.push(...m.getHitMeshes());this.tellApple&&this.tellApple.visible&&u.push(this.tellApple);let d=!1,f=!1;for(let m=0;m<i;m++){const v=l.clone();o>0&&(v.x+=(Math.random()-.5)*o*2,v.y+=(Math.random()-.5)*o*2,v.z+=(Math.random()-.5)*o*2,v.normalize());const g=this.collision.raycast(a,v,150),p=g?g.dist:150;this.raycaster.set(a,v),this.raycaster.far=p;const y=this.raycaster.intersectObjects(u,!1);if(y.length>0){const M=y[0];if(this.particles.spawnTracer(h,M.point,t.tracerColor),M.object.userData.isTellApple){this.tellApple.visible=!1,this.particles.spawnImpact(M.point,16765517,22,9),this.sound.playHit(!0),this.stats.score+=500,this.showCallout("APPLE SPLIT! +500"),this._flashHitmarker(!0);continue}const w=M.object.userData.enemy;if(w&&w.alive){const C=M.object.userData.hitZone==="head",P=C?t.damage*t.headMult:t.damage;d=!0,C&&(f=!0),this._damageEnemy(w,P,C,M.point)}}else{const M=g?g.point:a.clone().addScaledVector(v,90);this.particles.spawnTracer(h,M,t.tracerColor),g&&this.particles.spawnImpact(g.point,g.tag==="stone"?14275269:13410664,5,5)}}d&&(this.stats.hits++,this._flashHitmarker(f)),t.mag===0&&t.curReserve>0&&this.startReload(),this._updateHud()}_damageEnemy(e,t,n,i){this.particles.spawnImpact(i,n?16765517:14234662,n?14:9,7);const o=e.takeDamage(t,n);if(this.sound.playHit(n),e.isBoss&&this.activeBoss===e){const r=Math.max(0,e.hp/e.maxHp*100);this.dom.bossBarFill.style.width=`${r}%`}if(o){if(this.stats.kills++,this.stats.score+=e.score+(n?75:0),n?(this.stats.headshots++,this.showCallout(this.levelIndex===2?"BULLSEYE!":"HEADSHOT!")):e.isBoss&&this.showCallout(`${e.name.split("—")[0].trim()} DEFEATED!`),!e.isBoss&&Math.random()<.35){const r=this.player.hp<this.player.maxHp*.65?"health":"ammo",a=e.mesh.position.clone();a.y+=.8;const l=this._spawnRuntimePickup(r,a);this.pickups.push({type:r,pos:a,mesh:l,label:r==="health"?"FIELD TONIC (+30 HP)":"LOOTED AMMO",collected:!1})}this._checkStageProgression()}this._updateHud()}_spawnRuntimePickup(e,t){const n=new Ye,i=e==="health",o=new x(i?new me(.24,.28,.62,10):new z(.62,.4,.45),new le({color:i?3066993:15906633,emissive:i?1474627:11760658,emissiveIntensity:.85}));return n.add(o),n.position.copy(t),this.worldGroup.add(n),n}_checkStageProgression(){const e=this.enemies.filter(t=>t.alive).length;if(this.bossSpawnPending&&e<=3){const t=this.bossSpawnPending;this.bossSpawnPending=null;const n=Pl[this.difficultyKey],i=new Al(t.type,t.pos,n.enemyMult);i.alert=!0,this.worldGroup.add(i.mesh),this.enemies.push(i),this.activeBoss=i,this.dom.bossBarWrap.classList.remove("hidden"),this.dom.bossName.textContent=i.name,this.dom.bossBarFill.style.width="100%",this.sound.playBossHorn(),this.showCallout(`SHOWDOWN: ${i.name.split("—")[0].trim()}`),this.particles.spawnSmoke(t.pos.clone().add(new b(0,1.5,0)),16764006,12,1)}!this.bossSpawnPending&&e===0&&(this.dom.bossBarWrap.classList.add("hidden"),setTimeout(()=>{this.state==="playing"&&this._showEndScreen(!0)},950))}_damagePlayer(e){if(this.state!=="playing")return;if(this.practiceMode){this.usedPracticeThisRun=!0;return}const t=this.activeHero&&this.activeHero.mods||{},n=e*(t.damageTakenMult||1);this.timeSinceLastDamage=0,this.player.hp=Math.max(0,this.player.hp-n),this.sound.playHurt(),this.dom.damageOverlay.style.opacity="0.9",setTimeout(()=>{const i=this.player.hp<30?.35:0;this.dom.damageOverlay.style.opacity=String(i)},150),this._updateHud(),this.player.hp<=0&&this._showEndScreen(!1)}_showEndScreen(e){this.state="ended",this.setScope(!1),document.pointerLockElement&&document.exitPointerLock(),this.dom.hud.classList.add("hidden"),this.dom.crosshair.classList.add("hidden"),this.dom.endScreen.classList.remove("hidden");const t=Qt[this.levelIndex].meta,n=this.stats.shots>0?Math.round(this.stats.hits/this.stats.shots*100):100,i=this.practiceMode||this.usedPracticeThisRun;if(this.dom.endPracticeNote&&this.dom.endPracticeNote.classList.toggle("hidden",!i),e){const o=this.levelIndex===Qt.length-1,r=o?"ALL FIVE HORIZONS CONQUERED":`${t.act} COMPLETE`;this.dom.endEyebrow.textContent=i?`${r} • PRACTICE MODE`:r,this.dom.endTitle.textContent=o?"LEGEND OF FIVE ERAS":"HORIZON CLEARED",this.dom.endSummary.textContent=o?"From Red Gulch and Kyoto Mist to Rütli Valley, the Aegean Isle, and the Fjord of the North — your legend echoes across five ages!":`${t.title} is free. Ready your gear for the next horizon!`,this.dom.btnNextLevel.classList.remove("hidden"),this.dom.btnNextLevel.textContent=o?"REPLAY FROM ACT I ▶":`PROCEED TO ACT ${this.levelIndex+2} ▶`}else this.dom.endEyebrow.textContent=`${t.act} — FALLEN`,this.dom.endTitle.textContent="OUTGUNNED",this.dom.endSummary.textContent="Dust yourself off, steady your aim, and ride back into the fray.",this.dom.btnNextLevel.classList.add("hidden");this.dom.endStats.innerHTML=`
      <div class="stat-card"><div class="stat-val">${t.currency}${this.stats.score}</div><div class="stat-lbl">BOUNTY</div></div>
      <div class="stat-card"><div class="stat-val">${this.stats.headshots}</div><div class="stat-lbl">CRIT SHOTS</div></div>
      <div class="stat-card"><div class="stat-val">${n}%</div><div class="stat-lbl">ACCURACY</div></div>
    `}_buildWeaponStripUI(){this.dom.weaponStrip.innerHTML=this.weapons.map((e,t)=>`
      <div class="w-slot ${t===this.currentWeaponIdx?"active":""}" data-slot="${t}">
        <div class="w-slot-key">[${t+1}]</div>
        <div class="w-slot-name">${e.shortName}</div>
      </div>
    `).join("")}_updateHud(){const e=Qt[this.levelIndex].meta,t=this.enemies.filter(i=>i.alive).length+(this.bossSpawnPending?1:0);this.dom.eraBadge.textContent=`${e.act} • ${e.title}`,this.dom.objective.textContent=e.objective,this.dom.enemyIcon.textContent=e.enemyIcon,this.dom.enemiesLeft.textContent=String(t),this.dom.scoreVal.textContent=`${e.currency}${this.stats.score}`,this.dom.heroName.textContent=(this.activeHero?this.activeHero.name:e.heroName).toUpperCase(),this.dom.heroPerk&&this.activeHero&&(this.dom.heroPerk.textContent=`${this.activeHero.strengthLabel} • ${this.activeHero.hudTag}`),this.dom.hpText.textContent=`${Math.ceil(this.player.hp)} / ${this.player.maxHp}`,this.dom.hpBar.style.width=`${this.player.hp/this.player.maxHp*100}%`,this.dom.staminaBar.style.width=`${this.player.stamina}%`;const n=this.weapons[this.currentWeaponIdx];if(n)if(this.dom.weaponName.textContent=n.name,this.dom.altHint.textContent=this.reloading?"RELOADING...":n.altHint,this.dom.ammoMag.textContent=n.infinite?"∞":String(n.mag),this.dom.ammoReserve.textContent=n.infinite?"∞":String(n.curReserve),n.infinite)this.dom.ammoPips.innerHTML="";else{const i=Math.min(n.magSize,10);let o="";for(let r=0;r<i;r++)o+=`<span class="ammo-pip ${r<n.mag?"":"spent"}"></span>`;this.dom.ammoPips.innerHTML=o}document.querySelectorAll(".w-slot").forEach((i,o)=>{i.classList.toggle("active",o===this.currentWeaponIdx)})}_flashHitmarker(e){this.dom.hitmarker.classList.remove("hidden"),this.dom.hitmarker.classList.toggle("crit",e),this.dom.hitFlash.style.opacity=e?"0.9":"0.45",clearTimeout(this._hmTimeout),this._hmTimeout=setTimeout(()=>{this.dom.hitmarker.classList.add("hidden"),this.dom.hitFlash.style.opacity="0"},115)}showCallout(e){this.dom.callout.textContent=e,this.dom.callout.classList.remove("hidden"),clearTimeout(this._calloutTimer),this._calloutTimer=setTimeout(()=>{this.dom.callout.classList.add("hidden")},2200)}toast(e){const t=document.createElement("div");t.className="toast-item",t.textContent=e,this.dom.pickupToast.appendChild(t),setTimeout(()=>t.remove(),1950)}_updatePlayer(e){const t=this.weapons[this.currentWeaponIdx],n=this.scoped&&t&&t.scopeFov?t.scopeFov:this.baseFov;Math.abs(this.camera.fov-n)>.1&&(this.camera.fov+=(n-this.camera.fov)*Math.min(1,e*14),this.camera.updateProjectionMatrix());const i=this.activeHero&&this.activeHero.mods||{},o=i.moveSpeedMult||1,r=(this.keys.KeyW||this.keys.ArrowUp?1:0)-(this.keys.KeyS||this.keys.ArrowDown?1:0),a=(this.keys.KeyD||this.keys.ArrowRight?1:0)-(this.keys.KeyA||this.keys.ArrowLeft?1:0),l=(this.keys.ShiftLeft||this.keys.ShiftRight)&&r>0&&!this.scoped&&this.player.stamina>6,c=(this.scoped?4.2:l?11.4:7.6)*o;this.timeSinceLastDamage+=e;let h=!1;i.regenRate&&this.player.hp>0&&this.player.hp<this.player.maxHp&&this.timeSinceLastDamage>=(i.regenDelay||4)&&(h=!0,this.player.hp=Math.min(this.player.maxHp,this.player.hp+i.regenRate*e),this.dom.hpText.textContent=`${Math.ceil(this.player.hp)} / ${this.player.maxHp}`,this.dom.hpBar.style.width=`${this.player.hp/this.player.maxHp*100}%`,this.player.hp>=30&&(this.dom.damageOverlay.style.opacity="0")),this.dom.heroPerk&&this.dom.heroPerk.classList.toggle("regen-active",h),l?this.player.stamina=Math.max(0,this.player.stamina-e*26):this.player.stamina=Math.min(100,this.player.stamina+e*20),this.dom.staminaBar.style.width=`${this.player.stamina}%`;const u=new b(-Math.sin(this.player.yaw),0,-Math.cos(this.player.yaw)),d=new b(Math.cos(this.player.yaw),0,-Math.sin(this.player.yaw)),f=new b().addScaledVector(u,r).addScaledVector(d,a),m=f.lengthSq()>.01;m&&f.normalize().multiplyScalar(c),this.player.pos.x+=f.x*e,this.player.pos.z+=f.z*e,this.keys.Space&&this.player.grounded&&(this.player.vel.y=7.4,this.player.grounded=!1),this.player.vel.y-=20.5*e,this.player.pos.y+=this.player.vel.y*e,this.collision.resolveHorizontal(this.player.pos,.55,this.player.pos.y);const v=this.collision.getFloorHeight(this.player.pos.x,this.player.pos.z,this.player.pos.y);this.player.pos.y<=v&&(this.player.pos.y=v,this.player.vel.y=0,this.player.grounded=!0),m&&this.player.grounded&&(this.player.bobPhase+=e*(l?12.5:8.5));const g=m&&this.player.grounded&&!this.scoped?Math.sin(this.player.bobPhase)*.055:0;if(this.camera.position.set(this.player.pos.x,this.player.pos.y+1.68+g,this.player.pos.z),this.camera.rotation.order="YXZ",this.camera.rotation.z=0,this.camera.rotation.y=this.player.yaw,this.camera.rotation.x=this.player.pitch+this.recoilOffset*.22,this.fireTimer>0&&(this.fireTimer-=e),this.reloading&&(this.reloadTimer-=e,this.reloadTimer<=0)){this.reloading=!1;const y=t.magSize-t.mag,M=Math.min(y,t.curReserve);t.mag+=M,t.curReserve-=M,this._updateHud()}this.mouseDownL&&this.fireTimer<=0&&!this.reloading&&t&&t.fireRate<=.4&&this.tryFire(!1),this.recoilOffset*=Math.max(0,1-e*13),this.slashAnim>0&&(this.slashAnim=Math.max(0,this.slashAnim-e*4.5)),this.muzzleLight.intensity>0&&(this.muzzleLight.intensity=Math.max(0,this.muzzleLight.intensity-e*85));const p=this.weaponMeshes[this.currentWeaponIdx];if(p&&p.visible){const y=p.userData.basePos,M=p.userData.baseRot,w=m?Math.cos(this.player.bobPhase*.5)*.014:0,C=m?Math.abs(Math.sin(this.player.bobPhase*.5))*.014:0;p.position.set(y.x+w-this.slashAnim*.35,y.y-C-(this.reloading?.14:0),y.z+this.recoilOffset*.45),p.rotation.set(M.x+this.recoilOffset*1.15-(this.reloading?.65:0)+this.slashAnim*1.1,M.y+this.slashAnim*1.25,M.z+this.slashAnim*.85);const P=p.getObjectByName("spark");if(P){const I=.85+Math.sin(this.elapsed*28)*.35;P.scale.setScalar(I)}const L=p.getObjectByName("spinner");L&&(L.rotation.y+=e*4.5)}for(const y of this.pickups){if(y.collected)continue;if(y.mesh.rotation.y+=e*2.1,y.mesh.position.y=y.pos.y+Math.sin(this.elapsed*3+y.pos.x)*.16,Math.hypot(y.pos.x-this.player.pos.x,y.pos.z-this.player.pos.z)<2.1){if(y.type==="health"&&this.player.hp>=this.player.maxHp)continue;if(y.collected=!0,y.mesh.visible=!1,this.sound.playPickup(),y.type==="health")this.player.hp=Math.min(this.player.maxHp,this.player.hp+35);else for(const w of this.weapons)w.infinite||(w.curReserve=Math.min(w.reserve*2,w.curReserve+Math.ceil(w.reserve*.45)));this.toast(y.label),this._updateHud()}}}_updateProjectiles(e){for(let n=this.playerThrowables.length-1;n>=0;n--){const i=this.playerThrowables[n];i.fuse-=e,i.vel.y-=17.5*e,i.mesh.position.addScaledVector(i.vel,e),i.mesh.rotation.x+=e*9,i.mesh.rotation.z+=e*7;const o=this.collision.getFloorHeight(i.mesh.position.x,i.mesh.position.z,i.mesh.position.y);if(i.mesh.position.y<=o+.16&&(i.mesh.position.y=o+.16,i.vel.y*=-.4,i.vel.x*=.65,i.vel.z*=.65),i.fuse<=0){this.particles.spawnExplosion(i.mesh.position,i.radius),this.sound.playExplosion();for(const r of this.enemies){if(!r.alive)continue;const a=r.mesh.position.distanceTo(i.mesh.position);if(a<i.radius){const l=1-a/i.radius*.55;this._damageEnemy(r,i.damage*l,!1,r.mesh.position.clone().add(new b(0,1.2,0)))}}this.worldGroup.remove(i.mesh),this.playerThrowables.splice(n,1)}}const t=new b(this.player.pos.x,this.player.pos.y+1.2,this.player.pos.z);for(let n=this.enemyProjectiles.length-1;n>=0;n--){const i=this.enemyProjectiles[n];i.life-=e;const o=i.vel.clone().multiplyScalar(e),r=o.length(),a=o.clone().normalize(),l=this.collision.raycast(i.mesh.position,a,r+.15);if(l||i.life<=0){l&&this.particles.spawnImpact(l.point,16765562,4,4),this.worldGroup.remove(i.mesh),this.enemyProjectiles.splice(n,1);continue}i.mesh.position.add(o),i.mesh.position.distanceTo(t)<.85&&(this._damagePlayer(i.damage),this.worldGroup.remove(i.mesh),this.enemyProjectiles.splice(n,1))}}_updateEnemies(e){const t={onMeleeHitPlayer:n=>{this._damagePlayer(n)},onEnemyFire:(n,i,o)=>{const r=new b().subVectors(o,i).normalize(),a=n.isBoss?.04:.07;r.x+=(Math.random()-.5)*a,r.y+=(Math.random()-.5)*a*.6,r.z+=(Math.random()-.5)*a,r.normalize();const l=new x(new Ke(.11,6,6),new pt({color:n.projectileColor}));l.position.copy(i),this.worldGroup.add(l),this.particles.spawnTracer(i,i.clone().addScaledVector(r,3.5),n.projectileColor,.08),this.enemyProjectiles.push({mesh:l,vel:r.multiplyScalar(n.isBoss?38:30),damage:n.damage,life:2.8})}};for(const n of this.enemies)n.update(e,this.player.pos,this.collision,t);this.bossSpawnPending&&this.player.pos.z<-12&&this._checkStageProgression()}_loop(){requestAnimationFrame(()=>this._loop());const e=Math.min(.05,this.clock.getDelta());this.elapsed+=e;for(const t of this.animatedCallbacks)t(this.elapsed,e);if(this.particles&&this.particles.update(e,this.elapsed),this.state==="playing")this._updatePlayer(e),this._updateEnemies(e),this._updateProjectiles(e);else if(this.state==="title"||this.state==="intro"){const t=Qt[this.levelIndex].meta.cameraPreview,n=this.elapsed*t.speed;if(this.camera.position.set(t.center.x+Math.sin(n)*t.radius,t.height+Math.sin(this.elapsed*.45)*1.8,t.center.z+Math.cos(n)*t.radius),this.camera.lookAt(t.center),this.weaponHolder.visible=!1,this.state==="intro"&&this.heroStage.visible){const r=Math.tan(Th.degToRad(this.camera.fov*.5))*3.25*this.camera.aspect,a=window.innerWidth<=860,l=a?0:-r*.45,c=a?.15:-.96;this.heroStage.position.set(l,c,-3.25),this.heroStagePop+=(1-this.heroStagePop)*Math.min(1,e*10);const h=(a?.72:.96)*this.heroStagePop;this.heroFigureHolder.scale.setScalar(h),this.heroFigureHolder.rotation.y+=e*.55}}this.composer.render()}}window.addEventListener("DOMContentLoaded",()=>{new sg});
