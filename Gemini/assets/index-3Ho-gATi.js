(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kr="172",Wc=0,Sa=1,Xc=2,zl=1,Hl=2,Pn=3,jn=0,Xe=1,_e=2,Dn=0,Bi=1,gs=2,ba=3,Ta=4,Yc=5,hi=100,qc=101,Zc=102,jc=103,$c=104,Kc=200,Jc=201,Qc=202,th=203,sr=204,or=205,eh=206,nh=207,ih=208,sh=209,oh=210,rh=211,ah=212,lh=213,ch=214,rr=0,ar=1,lr=2,Vi=3,cr=4,hr=5,dr=6,ur=7,Gl=0,hh=1,dh=2,Zn=0,Vl=1,Wl=2,Xl=3,Jr=4,uh=5,Yl=6,ql=7,Zl=300,Wi=301,Xi=302,fr=303,pr=304,_o=306,ws=1e3,Te=1001,mr=1002,mn=1003,fh=1004,Ls=1005,xn=1006,bo=1007,ui=1008,kn=1009,jl=1010,$l=1011,xs=1012,Qr=1013,fi=1014,Ln=1015,Un=1016,ta=1017,ea=1018,Yi=1020,Kl=35902,Jl=1021,Ql=1022,pn=1023,tc=1024,ec=1025,ki=1026,qi=1027,nc=1028,na=1029,ic=1030,ia=1031,sa=1033,ro=33776,ao=33777,lo=33778,co=33779,gr=35840,wr=35841,xr=35842,_r=35843,vr=36196,Mr=37492,yr=37496,Sr=37808,br=37809,Tr=37810,Er=37811,Ar=37812,Rr=37813,Cr=37814,Pr=37815,Lr=37816,Ir=37817,Dr=37818,Ur=37819,Nr=37820,Fr=37821,ho=36492,Or=36494,Br=36495,sc=36283,kr=36284,zr=36285,Hr=36286,ph=3200,mh=3201,oc=0,gh=1,Yn="",tn="srgb",Zi="srgb-linear",po="linear",ge="srgb",_i=7680,Ea=519,wh=512,xh=513,_h=514,rc=515,vh=516,Mh=517,yh=518,Sh=519,Aa=35044,Ra="300 es",In=2e3,mo=2001;class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ca=1234567;const hs=Math.PI/180,_s=180/Math.PI;function mi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function re(i,t,e){return Math.max(t,Math.min(e,i))}function oa(i,t){return(i%t+t)%t}function bh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Th(i,t,e){return i!==t?(e-i)/(t-i):0}function ds(i,t,e){return(1-e)*i+e*t}function Eh(i,t,e,n){return ds(i,t,1-Math.exp(-e*n))}function Ah(i,t=1){return t-Math.abs(oa(i,t*2)-t)}function Rh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ch(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ph(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Lh(i,t){return i+Math.random()*(t-i)}function Ih(i){return i*(.5-Math.random())}function Dh(i){i!==void 0&&(Ca=i);let t=Ca+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Uh(i){return i*hs}function Nh(i){return i*_s}function Fh(i){return(i&i-1)===0&&i!==0}function Oh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kh(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),d=o((t-n)/2),u=r((t-n)/2),p=o((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ui(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const zh={DEG2RAD:hs,RAD2DEG:_s,generateUUID:mi,clamp:re,euclideanModulo:oa,mapLinear:bh,inverseLerp:Th,lerp:ds,damp:Eh,pingpong:Ah,smoothstep:Rh,smootherstep:Ch,randInt:Ph,randFloat:Lh,randFloatSpread:Ih,seededRandom:Dh,degToRad:Uh,radToDeg:Nh,isPowerOfTwo:Fh,ceilPowerOfTwo:Oh,floorPowerOfTwo:Bh,setQuaternionFromProperEuler:kh,normalize:Ge,denormalize:Ui};class Ut{constructor(t=0,e=0){Ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ne{constructor(t,e,n,s,o,r,a,l,c){ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=s[0],x=s[3],m=s[6],S=s[1],M=s[4],v=s[7],A=s[2],b=s[5],U=s[8];return o[0]=r*_+a*S+l*A,o[3]=r*x+a*M+l*b,o[6]=r*m+a*v+l*U,o[1]=c*_+h*S+d*A,o[4]=c*x+h*M+d*b,o[7]=c*m+h*v+d*U,o[2]=u*_+p*S+g*A,o[5]=u*x+p*M+g*b,o[8]=u*m+p*v+g*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*r-a*c,u=a*l-h*o,p=c*o-r*l,g=e*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*r)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*o-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(To.makeScale(t,e)),this}rotate(t){return this.premultiply(To.makeRotation(-t)),this}translate(t,e){return this.premultiply(To.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const To=new ne;function ac(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function go(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hh(){const i=go("canvas");return i.style.display="block",i}const Pa={};function Ni(i){i in Pa||(Pa[i]=!0,console.warn(i))}function Gh(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Vh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const La=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ia=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xh(){const i={enabled:!0,workingColorSpace:Zi,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===ge&&(s.r=Nn(s.r),s.g=Nn(s.g),s.b=Nn(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ge&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b))),s},fromWorkingColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},toWorkingColorSpace:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?po:this.spaces[s].transfer},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zi]:{primaries:t,whitePoint:n,transfer:po,toXYZ:La,fromXYZ:Ia,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:La,fromXYZ:Ia,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),i}const he=Xh();function Nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vi;class Yh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vi===void 0&&(vi=go("canvas")),vi.width=t.width,vi.height=t.height;const n=vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=go("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Nn(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Nn(e[n]/255)*255):e[n]=Nn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qh=0;class lc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Eo(s[r].image)):o.push(Eo(s[r]))}else o=Eo(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zh=0;class Ye extends Ji{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=Te,s=Te,o=xn,r=ui,a=pn,l=kn,c=Ye.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=mi(),this.name="",this.source=new lc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ws:t.x=t.x-Math.floor(t.x);break;case Te:t.x=t.x<0?0:1;break;case mr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ws:t.y=t.y-Math.floor(t.y);break;case Te:t.y=t.y<0?0:1;break;case mr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Zl;Ye.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,s=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],_=l[2],x=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+x)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(p+1)/2,A=(m+1)/2,b=(h+u)/4,U=(d+_)/4,L=(g+x)/4;return M>v&&M>A?M<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(M),s=b/n,o=U/n):v>A?v<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),n=b/s,o=L/s):A<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(A),n=U/o,s=L/o),this.set(n,s,o,e),this}let S=Math.sqrt((x-g)*(x-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(x-g)/S,this.y=(d-_)/S,this.z=(u-h)/S,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jh extends Ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new lc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends jh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class cc extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Te,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $h extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=mn,this.minFilter=mn,this.wrapR=Te,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const u=o[r+0],p=o[r+1],g=o[r+2],_=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==u||c!==p||h!==g){let x=1-a;const m=l*u+c*p+h*g+d*_,S=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const A=Math.sqrt(M),b=Math.atan2(A,m*S);x=Math.sin(x*b)/A,a=Math.sin(a*b)/A}const v=a*S;if(l=l*x+u*v,c=c*x+p*v,h=h*x+g*v,d=d*x+_*v,x===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=o[r],u=o[r+1],p=o[r+2],g=o[r+3];return t[e]=a*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-a*p,t[e+2]=c*g+h*p+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(o/2),u=l(n/2),p=l(s/2),g=l(o/2);switch(r){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(o-c)*p,this._z=(r-s)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(o-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(r-s)/p,this._x=(o+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=o*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,n=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Da.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Da.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),d=2*(o*n-r*e);return this.x=e+l*c+r*d-a*h,this.y=n+l*h+a*c-o*d,this.z=s+l*d+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ao.copy(this).projectOnVector(t),this.sub(Ao)}reflect(t){return this.sub(Ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ao=new w,Da=new bs;class Ts{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,hn):hn.fromBufferAttribute(o,r),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Is.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox)),Is.applyMatrix4(t.matrixWorld),this.union(Is)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(is),Ds.subVectors(this.max,is),Mi.subVectors(t.a,is),yi.subVectors(t.b,is),Si.subVectors(t.c,is),zn.subVectors(yi,Mi),Hn.subVectors(Si,yi),ni.subVectors(Mi,Si);let e=[0,-zn.z,zn.y,0,-Hn.z,Hn.y,0,-ni.z,ni.y,zn.z,0,-zn.x,Hn.z,0,-Hn.x,ni.z,0,-ni.x,-zn.y,zn.x,0,-Hn.y,Hn.x,0,-ni.y,ni.x,0];return!Ro(e,Mi,yi,Si,Ds)||(e=[1,0,0,0,1,0,0,0,1],!Ro(e,Mi,yi,Si,Ds))?!1:(Us.crossVectors(zn,Hn),e=[Us.x,Us.y,Us.z],Ro(e,Mi,yi,Si,Ds))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Tn=[new w,new w,new w,new w,new w,new w,new w,new w],hn=new w,Is=new Ts,Mi=new w,yi=new w,Si=new w,zn=new w,Hn=new w,ni=new w,is=new w,Ds=new w,Us=new w,ii=new w;function Ro(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){ii.fromArray(i,o);const a=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),l=t.dot(ii),c=e.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Kh=new Ts,ss=new w,Co=new w;class Es{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Kh.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ss.subVectors(t,this.center);const e=ss.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ss,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Co.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ss.copy(t.center).add(Co)),this.expandByPoint(ss.copy(t.center).sub(Co))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new w,Po=new w,Ns=new w,Gn=new w,Lo=new w,Fs=new w,Io=new w;class vo{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Po.copy(t).add(e).multiplyScalar(.5),Ns.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(Po);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ns),a=Gn.dot(this.direction),l=-Gn.dot(Ns),c=Gn.lengthSq(),h=Math.abs(1-r*r);let d,u,p,g;if(h>0)if(d=r*l-a,u=r*a-l,g=o*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+r*u+2*a)+u*(r*d+u+2*l)+c}else u=o,d=Math.max(0,-(r*u+a)),p=-d*d+u*(u+2*l)+c;else u=-o,d=Math.max(0,-(r*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*o+a)),u=d>0?-o:Math.min(Math.max(-o,-l),o),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-o,-l),o),p=u*(u+2*l)+c):(d=Math.max(0,-(r*o+a)),u=d>0?o:Math.min(Math.max(-o,-l),o),p=-d*d+u*(u+2*l)+c);else u=r>0?-o:o,d=Math.max(0,-(r*u+a)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Po).addScaledVector(Ns,u),p}intersectSphere(t,e){En.subVectors(t.center,this.origin);const n=En.dot(this.direction),s=En.dot(En)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,s,o){Lo.subVectors(e,t),Fs.subVectors(n,t),Io.crossVectors(Lo,Fs);let r=this.direction.dot(Io),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Gn.subVectors(this.origin,t);const l=a*this.direction.dot(Fs.crossVectors(Gn,Fs));if(l<0)return null;const c=a*this.direction.dot(Lo.cross(Gn));if(c<0||l+c>r)return null;const h=-a*Gn.dot(Io);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(t,e,n,s,o,r,a,l,c,h,d,u,p,g,_,x){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,d,u,p,g,_,x)}set(t,e,n,s,o,r,a,l,c,h,d,u,p,g,_,x){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=p,m[7]=g,m[11]=_,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/bi.setFromMatrixColumn(t,0).length(),o=1/bi.setFromMatrixColumn(t,1).length(),r=1/bi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const u=r*h,p=r*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+p*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,g=c*h,_=c*d;e[0]=u+_*a,e[4]=g*a-p,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-a,e[2]=p*a-g,e[6]=_+u*a,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,g=c*h,_=c*d;e[0]=u-_*a,e[4]=-r*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=r*h,e[9]=_-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,p=r*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,p=r*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+p,e[1]=d,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=r*l,p=r*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=r*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jh,t,Qh)}lookAt(t,e,n){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Vn.crossVectors(n,Ke),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Vn.crossVectors(n,Ke)),Vn.normalize(),Os.crossVectors(Ke,Vn),s[0]=Vn.x,s[4]=Os.x,s[8]=Ke.x,s[1]=Vn.y,s[5]=Os.y,s[9]=Ke.y,s[2]=Vn.z,s[6]=Os.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],x=n[10],m=n[14],S=n[3],M=n[7],v=n[11],A=n[15],b=s[0],U=s[4],L=s[8],T=s[12],E=s[1],O=s[5],J=s[9],j=s[13],Q=s[2],Y=s[6],X=s[10],I=s[14],C=s[3],k=s[7],B=s[11],G=s[15];return o[0]=r*b+a*E+l*Q+c*C,o[4]=r*U+a*O+l*Y+c*k,o[8]=r*L+a*J+l*X+c*B,o[12]=r*T+a*j+l*I+c*G,o[1]=h*b+d*E+u*Q+p*C,o[5]=h*U+d*O+u*Y+p*k,o[9]=h*L+d*J+u*X+p*B,o[13]=h*T+d*j+u*I+p*G,o[2]=g*b+_*E+x*Q+m*C,o[6]=g*U+_*O+x*Y+m*k,o[10]=g*L+_*J+x*X+m*B,o[14]=g*T+_*j+x*I+m*G,o[3]=S*b+M*E+v*Q+A*C,o[7]=S*U+M*O+v*Y+A*k,o[11]=S*L+M*J+v*X+A*B,o[15]=S*T+M*j+v*I+A*G,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],x=t[11],m=t[15];return g*(+o*l*d-s*c*d-o*a*u+n*c*u+s*a*p-n*l*p)+_*(+e*l*p-e*c*u+o*r*u-s*r*p+s*c*h-o*l*h)+x*(+e*c*d-e*a*p-o*r*d+n*r*p+o*a*h-n*c*h)+m*(-s*a*h-e*l*d+e*a*u+s*r*d-n*r*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],x=t[14],m=t[15],S=d*x*c-_*u*c+_*l*p-a*x*p-d*l*m+a*u*m,M=g*u*c-h*x*c-g*l*p+r*x*p+h*l*m-r*u*m,v=h*_*c-g*d*c+g*a*p-r*_*p-h*a*m+r*d*m,A=g*d*l-h*_*l-g*a*u+r*_*u+h*a*x-r*d*x,b=e*S+n*M+s*v+o*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/b;return t[0]=S*U,t[1]=(_*u*o-d*x*o-_*s*p+n*x*p+d*s*m-n*u*m)*U,t[2]=(a*x*o-_*l*o+_*s*c-n*x*c-a*s*m+n*l*m)*U,t[3]=(d*l*o-a*u*o-d*s*c+n*u*c+a*s*p-n*l*p)*U,t[4]=M*U,t[5]=(h*x*o-g*u*o+g*s*p-e*x*p-h*s*m+e*u*m)*U,t[6]=(g*l*o-r*x*o-g*s*c+e*x*c+r*s*m-e*l*m)*U,t[7]=(r*u*o-h*l*o+h*s*c-e*u*c-r*s*p+e*l*p)*U,t[8]=v*U,t[9]=(g*d*o-h*_*o-g*n*p+e*_*p+h*n*m-e*d*m)*U,t[10]=(r*_*o-g*a*o+g*n*c-e*_*c-r*n*m+e*a*m)*U,t[11]=(h*a*o-r*d*o-h*n*c+e*d*c+r*n*p-e*a*p)*U,t[12]=A*U,t[13]=(h*_*s-g*d*s+g*n*u-e*_*u-h*n*x+e*d*x)*U,t[14]=(g*a*s-r*_*s-g*n*l+e*_*l+r*n*x-e*a*x)*U,t[15]=(r*d*s-h*a*s+h*n*l-e*d*l-r*n*u+e*a*u)*U,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,d=a+a,u=o*c,p=o*h,g=o*d,_=r*h,x=r*d,m=a*d,S=l*c,M=l*h,v=l*d,A=n.x,b=n.y,U=n.z;return s[0]=(1-(_+m))*A,s[1]=(p+v)*A,s[2]=(g-M)*A,s[3]=0,s[4]=(p-v)*b,s[5]=(1-(u+m))*b,s[6]=(x+S)*b,s[7]=0,s[8]=(g+M)*U,s[9]=(x-S)*U,s[10]=(1-(u+_))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=bi.set(s[0],s[1],s[2]).length();const r=bi.set(s[4],s[5],s[6]).length(),a=bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],dn.copy(this);const c=1/o,h=1/r,d=1/a;return dn.elements[0]*=c,dn.elements[1]*=c,dn.elements[2]*=c,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=d,dn.elements[9]*=d,dn.elements[10]*=d,e.setFromRotationMatrix(dn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=In){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let p,g;if(a===In)p=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===mo)p=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=In){const l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(r-o),u=(e+t)*c,p=(n+s)*h;let g,_;if(a===In)g=(r+o)*d,_=-2*d;else if(a===mo)g=o*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const bi=new w,dn=new xe,Jh=new w(0,0,0),Qh=new w(1,1,1),Vn=new w,Os=new w,Ke=new w,Ua=new xe,Na=new bs;class Mn{constructor(t=0,e=0,n=0,s=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-re(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ua.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ua,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Na.setFromEuler(this),this.setFromQuaternion(Na,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class ra{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let td=0;const Fa=new w,Ti=new bs,An=new xe,Bs=new w,os=new w,ed=new w,nd=new bs,Oa=new w(1,0,0),Ba=new w(0,1,0),ka=new w(0,0,1),za={type:"added"},id={type:"removed"},Ei={type:"childadded",child:null},Do={type:"childremoved",child:null};class Le extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new w,e=new Mn,n=new bs,s=new w(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new ne}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(Oa,t)}rotateY(t){return this.rotateOnAxis(Ba,t)}rotateZ(t){return this.rotateOnAxis(ka,t)}translateOnAxis(t,e){return Fa.copy(t).applyQuaternion(this.quaternion),this.position.add(Fa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oa,t)}translateY(t){return this.translateOnAxis(Ba,t)}translateZ(t){return this.translateOnAxis(ka,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bs.copy(t):Bs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(os,Bs,this.up):An.lookAt(Bs,os,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Ti.setFromRotationMatrix(An),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(za),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(id),Do.child=t,this.dispatchEvent(Do),Do.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(za),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,ed),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,nd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),p=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Le.DEFAULT_UP=new w(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new w,Rn=new w,Uo=new w,Cn=new w,Ai=new w,Ri=new w,Ha=new w,No=new w,Fo=new w,Oo=new w,Bo=new we,ko=new we,zo=new we;class fn{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),un.subVectors(t,e),s.cross(un);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){un.subVectors(s,e),Rn.subVectors(n,e),Uo.subVectors(t,e);const r=un.dot(un),a=un.dot(Rn),l=un.dot(Uo),c=Rn.dot(Rn),h=Rn.dot(Uo),d=r*c-a*a;if(d===0)return o.set(0,0,0),null;const u=1/d,p=(c*l-a*h)*u,g=(r*h-a*l)*u;return o.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Cn.x),l.addScaledVector(r,Cn.y),l.addScaledVector(a,Cn.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return Bo.setScalar(0),ko.setScalar(0),zo.setScalar(0),Bo.fromBufferAttribute(t,e),ko.fromBufferAttribute(t,n),zo.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Bo,o.x),r.addScaledVector(ko,o.y),r.addScaledVector(zo,o.z),r}static isFrontFacing(t,e,n,s){return un.subVectors(n,e),Rn.subVectors(t,e),un.cross(Rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),un.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return fn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Ai.subVectors(s,n),Ri.subVectors(o,n),No.subVectors(t,n);const l=Ai.dot(No),c=Ri.dot(No);if(l<=0&&c<=0)return e.copy(n);Fo.subVectors(t,s);const h=Ai.dot(Fo),d=Ri.dot(Fo);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Ai,r);Oo.subVectors(t,o);const p=Ai.dot(Oo),g=Ri.dot(Oo);if(g>=0&&p<=g)return e.copy(o);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ri,a);const x=h*g-p*d;if(x<=0&&d-h>=0&&p-g>=0)return Ha.subVectors(o,s),a=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(Ha,a);const m=1/(x+_+u);return r=_*m,a=u*m,e.copy(n).addScaledVector(Ai,r).addScaledVector(Ri,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},ks={h:0,s:0,l:0};function Ho(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=oa(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Ho(r,o,t+1/3),this.g=Ho(r,o,t),this.b=Ho(r,o,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=tn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const n=hc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}copyLinearToSRGB(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return he.fromWorkingColorSpace(ke.copy(this),t),Math.round(re(ke.r*255,0,255))*65536+Math.round(re(ke.g*255,0,255))*256+Math.round(re(ke.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(ke.copy(this),e);const n=ke.r,s=ke.g,o=ke.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=h<=.5?d/(r+a):d/(2-r-a),r){case n:l=(s-o)/d+(s<o?6:0);break;case s:l=(o-n)/d+2;break;case o:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=tn){he.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,s=ke.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(ks);const n=ds(Wn.h,ks.h,e),s=ds(Wn.s,ks.s,e),o=ds(Wn.l,ks.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new Jt;Jt.NAMES=hc;let sd=0;class gi extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Bi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sr,this.blendDst=or,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ea,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sr&&(n.blendSrc=this.blendSrc),this.blendDst!==or&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ea&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class oe extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new w,zs=new Ut;class ln{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Aa,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zs.fromBufferAttribute(this,e),zs.applyMatrix3(t),this.setXY(e,zs.x,zs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Ge(e,this.array),n=Ge(n,this.array),s=Ge(s,this.array),o=Ge(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Aa&&(t.usage=this.usage),t}}class dc extends ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class uc extends ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends ln{constructor(t,e,n){super(new Float32Array(t),e,n)}}let od=0;const rn=new xe,Go=new Le,Ci=new w,Je=new Ts,rs=new Ts,Ue=new w;class Ce extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ac(t)?uc:dc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ne().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return Go.lookAt(t),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new me(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Je.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(Je.min,rs.min),Je.expandByPoint(Ue),Ue.addVectors(Je.max,rs.max),Je.expandByPoint(Ue)):(Je.expandByPoint(rs.min),Je.expandByPoint(rs.max))}Je.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Ue.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ue.fromBufferAttribute(a,c),l&&(Ci.fromBufferAttribute(t,c),Ue.add(Ci)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new w,l[L]=new w;const c=new w,h=new w,d=new w,u=new Ut,p=new Ut,g=new Ut,_=new w,x=new w;function m(L,T,E){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,E),u.fromBufferAttribute(o,L),p.fromBufferAttribute(o,T),g.fromBufferAttribute(o,E),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const O=1/(p.x*g.y-g.x*p.y);isFinite(O)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(O),x.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(O),a[L].add(_),a[T].add(_),a[E].add(_),l[L].add(x),l[T].add(x),l[E].add(x))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let L=0,T=S.length;L<T;++L){const E=S[L],O=E.start,J=E.count;for(let j=O,Q=O+J;j<Q;j+=3)m(t.getX(j+0),t.getX(j+1),t.getX(j+2))}const M=new w,v=new w,A=new w,b=new w;function U(L){A.fromBufferAttribute(s,L),b.copy(A);const T=a[L];M.copy(T),M.sub(A.multiplyScalar(A.dot(T))).normalize(),v.crossVectors(b,T);const O=v.dot(l[L])<0?-1:1;r.setXYZW(L,M.x,M.y,M.z,O)}for(let L=0,T=S.length;L<T;++L){const E=S[L],O=E.start,J=E.count;for(let j=O,Q=O+J;j<Q;j+=3)U(t.getX(j+0)),U(t.getX(j+1)),U(t.getX(j+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new w,o=new w,r=new w,a=new w,l=new w,c=new w,h=new w,d=new w;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),_=t.getX(u+1),x=t.getX(u+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,x=l.length;_<x;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let m=0;m<h;m++)u[g++]=c[p++]}return new ln(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],d=o[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ga=new xe,si=new vo,Hs=new Es,Va=new w,Gs=new w,Vs=new w,Ws=new w,Vo=new w,Xs=new w,Wa=new w,Ys=new w;class f extends Le{constructor(t=new Ce,e=new oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Xs.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],d=o[l];h!==0&&(Vo.fromBufferAttribute(d,t),r?Xs.addScaledVector(Vo,h):Xs.addScaledVector(Vo.sub(e),h))}e.add(Xs)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(o),si.copy(t.ray).recast(t.near),!(Hs.containsPoint(si.origin)===!1&&(si.intersectSphere(Hs,Va)===null||si.origin.distanceToSquared(Va)>(t.far-t.near)**2))&&(Ga.copy(o).invert(),si.copy(t.ray).applyMatrix4(Ga),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,u=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const x=u[g],m=r[x.materialIndex],S=Math.max(x.start,p.start),M=Math.min(a.count,Math.min(x.start+x.count,p.start+p.count));for(let v=S,A=M;v<A;v+=3){const b=a.getX(v),U=a.getX(v+1),L=a.getX(v+2);s=qs(this,m,t,n,c,h,d,b,U,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let x=g,m=_;x<m;x+=3){const S=a.getX(x),M=a.getX(x+1),v=a.getX(x+2);s=qs(this,r,t,n,c,h,d,S,M,v),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=u.length;g<_;g++){const x=u[g],m=r[x.materialIndex],S=Math.max(x.start,p.start),M=Math.min(l.count,Math.min(x.start+x.count,p.start+p.count));for(let v=S,A=M;v<A;v+=3){const b=v,U=v+1,L=v+2;s=qs(this,m,t,n,c,h,d,b,U,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let x=g,m=_;x<m;x+=3){const S=x,M=x+1,v=x+2;s=qs(this,r,t,n,c,h,d,S,M,v),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}}function rd(i,t,e,n,s,o,r,a){let l;if(t.side===Xe?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===jn,a),l===null)return null;Ys.copy(a),Ys.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ys);return c<e.near||c>e.far?null:{distance:c,point:Ys.clone(),object:i}}function qs(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,Gs),i.getVertexPosition(l,Vs),i.getVertexPosition(c,Ws);const h=rd(i,t,e,n,Gs,Vs,Ws,Wa);if(h){const d=new w;fn.getBarycoord(Wa,Gs,Vs,Ws,d),s&&(h.uv=fn.getInterpolatedAttribute(s,a,l,c,d,new Ut)),o&&(h.uv1=fn.getInterpolatedAttribute(o,a,l,c,d,new Ut)),r&&(h.normal=fn.getInterpolatedAttribute(r,a,l,c,d,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new w,materialIndex:0};fn.getNormal(Gs,Vs,Ws,u.normal),h.face=u,h.barycoord=d}return h}class N extends Ce{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new me(c,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(d,2));function g(_,x,m,S,M,v,A,b,U,L,T){const E=v/U,O=A/L,J=v/2,j=A/2,Q=b/2,Y=U+1,X=L+1;let I=0,C=0;const k=new w;for(let B=0;B<X;B++){const G=B*O-j;for(let tt=0;tt<Y;tt++){const at=tt*E-J;k[_]=at*S,k[x]=G*M,k[m]=Q,c.push(k.x,k.y,k.z),k[_]=0,k[x]=0,k[m]=b>0?1:-1,h.push(k.x,k.y,k.z),d.push(tt/U),d.push(1-B/L),I+=1}}for(let B=0;B<L;B++)for(let G=0;G<U;G++){const tt=u+G+Y*B,at=u+G+Y*(B+1),F=u+(G+1)+Y*(B+1),z=u+(G+1)+Y*B;l.push(tt,at,z),l.push(at,F,z),C+=6}a.addGroup(p,C,T),p+=C,u+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new N(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ji(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){const t={};for(let e=0;e<i.length;e++){const n=ji(i[e]);for(const s in n)t[s]=n[s]}return t}function ad(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function fc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const vs={clone:ji,merge:Ve};var ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pe extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ld,this.fragmentShader=cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=ad(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class pc extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new w,Xa=new Ut,Ya=new Ut;class en extends pc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,Xa,Ya),e.subVectors(Ya,Xa)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Pi=-90,Li=1;class hd extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(Pi,Li,t,e);s.layers=this.layers,this.add(s);const o=new en(Pi,Li,t,e);o.layers=this.layers,this.add(o);const r=new en(Pi,Li,t,e);r.layers=this.layers,this.add(r);const a=new en(Pi,Li,t,e);a.layers=this.layers,this.add(a);const l=new en(Pi,Li,t,e);l.layers=this.layers,this.add(l);const c=new en(Pi,Li,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class mc extends Ye{constructor(t,e,n,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Wi,super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dd extends gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new mc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new N(5,5,5),o=new Pe({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Dn});o.uniforms.tEquirect.value=e;const r=new f(s,o),a=e.minFilter;return e.minFilter===ui&&(e.minFilter=xn),new hd(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}class yn{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Jt(t),this.density=e}clone(){return new yn(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ud extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Wo=new w,fd=new w,pd=new ne;class li{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Wo.subVectors(n,e).cross(fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Wo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pd.getNormalMatrix(t),s=this.coplanarPoint(Wo).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new Es,Zs=new w;class aa{constructor(t=new li,e=new li,n=new li,s=new li,o=new li,r=new li){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],g=s[9],_=s[10],x=s[11],m=s[12],S=s[13],M=s[14],v=s[15];if(n[0].setComponents(l-o,u-c,x-p,v-m).normalize(),n[1].setComponents(l+o,u+c,x+p,v+m).normalize(),n[2].setComponents(l+r,u+h,x+g,v+S).normalize(),n[3].setComponents(l-r,u-h,x-g,v-S).normalize(),n[4].setComponents(l-a,u-d,x-_,v-M).normalize(),e===In)n[5].setComponents(l+a,u+d,x+_,v+M).normalize();else if(e===mo)n[5].setComponents(a,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Zs.x=s.normal.x>0?t.max.x:t.min.x,Zs.y=s.normal.y>0?t.max.y:t.min.y,Zs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gr extends gi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wo=new w,xo=new w,qa=new xe,as=new vo,js=new Es,Xo=new w,Za=new w;class ja extends Le{constructor(t=new Ce,e=new Gr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)wo.fromBufferAttribute(e,s-1),xo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=wo.distanceTo(xo);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(s),js.radius+=o,t.ray.intersectsSphere(js)===!1)return;qa.copy(s).invert(),as.copy(t.ray).applyMatrix4(qa);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=p,x=g-1;_<x;_+=c){const m=h.getX(_),S=h.getX(_+1),M=$s(this,t,as,l,m,S);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),x=h.getX(p),m=$s(this,t,as,l,_,x);m&&e.push(m)}}else{const p=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let _=p,x=g-1;_<x;_+=c){const m=$s(this,t,as,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=$s(this,t,as,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function $s(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(wo.fromBufferAttribute(r,s),xo.fromBufferAttribute(r,o),e.distanceSqToSegment(wo,xo,Xo,Za)>n)return;Xo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Xo);if(!(l<t.near||l>t.far))return{distance:l,point:Za.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class gc extends gi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $a=new xe,Vr=new vo,Ks=new Es,Js=new w;class md extends Le{constructor(t=new Ce,e=new gc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(s),Ks.radius+=o,t.ray.intersectsSphere(Ks)===!1)return;$a.copy(s).invert(),Vr.copy(t.ray).applyMatrix4($a);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=u,_=p;g<_;g++){const x=c.getX(g);Js.fromBufferAttribute(d,x),Ka(Js,x,l,s,t,e,this)}}else{const u=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let g=u,_=p;g<_;g++)Js.fromBufferAttribute(d,g),Ka(Js,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Ka(i,t,e,n,s,o,r){const a=Vr.distanceSqToPoint(i);if(a<e){const l=new w;Vr.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class $t extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}class gd extends Ye{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wc extends Ye{constructor(t,e,n,s,o,r,a,l,c,h=ki){if(h!==ki&&h!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ki&&(n=fi),n===void 0&&h===qi&&(n=Yi),super(null,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const h=n[s],u=n[s+1]-h,p=(r-h)/u;return(s+p)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new Ut:new w);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new w,s=[],o=[],r=[],a=new w,l=new xe;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new w)}o[0]=new w,r[0]=new w;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(re(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(l.makeRotationAxis(a,g))}r[p].crossVectors(s[p],o[p])}if(e===!0){let p=Math.acos(re(o[0].dot(o[t]),-1,1));p/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class la extends Sn{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ut){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class wd extends la{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function ca(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,d){let u=(r-o)/c-(a-o)/(c+h)+(a-r)/h,p=(a-r)/h-(l-r)/(h+d)+(l-a)/d;u*=h,p*=h,s(r,a,u,p)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Qs=new w,Yo=new ca,qo=new ca,Zo=new ca;class xd extends Sn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new w){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(Qs.subVectors(s[0],s[1]).add(s[0]),c=Qs);const d=s[a%o],u=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Qs.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Qs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),x<1e-4&&(x=_),Yo.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,_,x),qo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,_,x),Zo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,_,x)}else this.curveType==="catmullrom"&&(Yo.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),qo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Zo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Yo.calc(l),qo.calc(l),Zo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ja(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function _d(i,t){const e=1-i;return e*e*t}function vd(i,t){return 2*(1-i)*i*t}function Md(i,t){return i*i*t}function us(i,t,e,n){return _d(i,t)+vd(i,e)+Md(i,n)}function yd(i,t){const e=1-i;return e*e*e*t}function Sd(i,t){const e=1-i;return 3*e*e*i*t}function bd(i,t){return 3*(1-i)*i*i*t}function Td(i,t){return i*i*i*t}function fs(i,t,e,n,s){return yd(i,t)+Sd(i,e)+bd(i,n)+Td(i,s)}class xc extends Sn{constructor(t=new Ut,e=new Ut,n=new Ut,s=new Ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ut){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(fs(t,s.x,o.x,r.x,a.x),fs(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ed extends Sn{constructor(t=new w,e=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new w){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(fs(t,s.x,o.x,r.x,a.x),fs(t,s.y,o.y,r.y,a.y),fs(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _c extends Sn{constructor(t=new Ut,e=new Ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ad extends Sn{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vc extends Sn{constructor(t=new Ut,e=new Ut,n=new Ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ut){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(us(t,s.x,o.x,r.x),us(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rd extends Sn{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(us(t,s.x,o.x,r.x),us(t,s.y,o.y,r.y),us(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mc extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ut){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return n.set(Ja(a,l.x,c.x,h.x,d.x),Ja(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Ut().fromArray(s))}return this}}var Wr=Object.freeze({__proto__:null,ArcCurve:wd,CatmullRomCurve3:xd,CubicBezierCurve:xc,CubicBezierCurve3:Ed,EllipseCurve:la,LineCurve:_c,LineCurve3:Ad,QuadraticBezierCurve:vc,QuadraticBezierCurve3:Rd,SplineCurve:Mc});class Cd extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Wr[s.type]().fromJSON(s))}return this}}class Xr extends Cd{constructor(t){super(),this.type="Path",this.currentPoint=new Ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new _c(this.currentPoint.clone(),new Ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new vc(this.currentPoint.clone(),new Ut(t,e),new Ut(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new xc(this.currentPoint.clone(),new Ut(t,e),new Ut(n,s),new Ut(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Mc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new la(t,e,n,s,o,r,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ha extends Ce{constructor(t=[new Ut(0,-.5),new Ut(.5,0),new Ut(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=re(s,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],h=1/e,d=new w,u=new Ut,p=new w,g=new w,_=new w;let x=0,m=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:x=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,p.x=m*1,p.y=-x,p.z=m*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:x=t[S+1].x-t[S].x,m=t[S+1].y-t[S].y,p.x=m*1,p.y=-x,p.z=m*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let S=0;S<=e;S++){const M=n+S*h*s,v=Math.sin(M),A=Math.cos(M);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*v,d.y=t[b].y,d.z=t[b].x*A,r.push(d.x,d.y,d.z),u.x=S/e,u.y=b/(t.length-1),a.push(u.x,u.y);const U=l[3*b+0]*v,L=l[3*b+1],T=l[3*b+0]*A;c.push(U,L,T)}}for(let S=0;S<e;S++)for(let M=0;M<t.length-1;M++){const v=M+S*t.length,A=v,b=v+t.length,U=v+t.length+1,L=v+1;o.push(A,b,L),o.push(U,L,b)}this.setIndex(o),this.setAttribute("position",new me(r,3)),this.setAttribute("uv",new me(a,2)),this.setAttribute("normal",new me(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ha(t.points,t.segments,t.phiStart,t.phiLength)}}class da extends ha{constructor(t=1,e=1,n=4,s=8){const o=new Xr;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new da(t.radius,t.length,t.capSegments,t.radialSegments)}}class W extends Ce{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],d=[],u=[],p=[];let g=0;const _=[],x=n/2;let m=0;S(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new me(d,3)),this.setAttribute("normal",new me(u,3)),this.setAttribute("uv",new me(p,2));function S(){const v=new w,A=new w;let b=0;const U=(e-t)/n;for(let L=0;L<=o;L++){const T=[],E=L/o,O=E*(e-t)+t;for(let J=0;J<=s;J++){const j=J/s,Q=j*l+a,Y=Math.sin(Q),X=Math.cos(Q);A.x=O*Y,A.y=-E*n+x,A.z=O*X,d.push(A.x,A.y,A.z),v.set(Y,U,X).normalize(),u.push(v.x,v.y,v.z),p.push(j,1-E),T.push(g++)}_.push(T)}for(let L=0;L<s;L++)for(let T=0;T<o;T++){const E=_[T][L],O=_[T+1][L],J=_[T+1][L+1],j=_[T][L+1];(t>0||T!==0)&&(h.push(E,O,j),b+=3),(e>0||T!==o-1)&&(h.push(O,J,j),b+=3)}c.addGroup(m,b,0),m+=b}function M(v){const A=g,b=new Ut,U=new w;let L=0;const T=v===!0?t:e,E=v===!0?1:-1;for(let J=1;J<=s;J++)d.push(0,x*E,0),u.push(0,E,0),p.push(.5,.5),g++;const O=g;for(let J=0;J<=s;J++){const Q=J/s*l+a,Y=Math.cos(Q),X=Math.sin(Q);U.x=T*X,U.y=x*E,U.z=T*Y,d.push(U.x,U.y,U.z),u.push(0,E,0),b.x=Y*.5+.5,b.y=X*.5*E+.5,p.push(b.x,b.y),g++}for(let J=0;J<s;J++){const j=A+J,Q=O+J;v===!0?h.push(Q,Q+1,j):h.push(Q+1,Q,j),L+=3}c.addGroup(m,L,v===!0?1:2),m+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new W(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class kt extends W{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new kt(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class As extends Ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),h(),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(o.slice(),3)),this.setAttribute("uv",new me(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const M=new w,v=new w,A=new w;for(let b=0;b<e.length;b+=3)p(e[b+0],M),p(e[b+1],v),p(e[b+2],A),l(M,v,A,S)}function l(S,M,v,A){const b=A+1,U=[];for(let L=0;L<=b;L++){U[L]=[];const T=S.clone().lerp(v,L/b),E=M.clone().lerp(v,L/b),O=b-L;for(let J=0;J<=O;J++)J===0&&L===b?U[L][J]=T:U[L][J]=T.clone().lerp(E,J/O)}for(let L=0;L<b;L++)for(let T=0;T<2*(b-L)-1;T++){const E=Math.floor(T/2);T%2===0?(u(U[L][E+1]),u(U[L+1][E]),u(U[L][E])):(u(U[L][E+1]),u(U[L+1][E+1]),u(U[L+1][E]))}}function c(S){const M=new w;for(let v=0;v<o.length;v+=3)M.x=o[v+0],M.y=o[v+1],M.z=o[v+2],M.normalize().multiplyScalar(S),o[v+0]=M.x,o[v+1]=M.y,o[v+2]=M.z}function h(){const S=new w;for(let M=0;M<o.length;M+=3){S.x=o[M+0],S.y=o[M+1],S.z=o[M+2];const v=x(S)/2/Math.PI+.5,A=m(S)/Math.PI+.5;r.push(v,1-A)}g(),d()}function d(){for(let S=0;S<r.length;S+=6){const M=r[S+0],v=r[S+2],A=r[S+4],b=Math.max(M,v,A),U=Math.min(M,v,A);b>.9&&U<.1&&(M<.2&&(r[S+0]+=1),v<.2&&(r[S+2]+=1),A<.2&&(r[S+4]+=1))}}function u(S){o.push(S.x,S.y,S.z)}function p(S,M){const v=S*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){const S=new w,M=new w,v=new w,A=new w,b=new Ut,U=new Ut,L=new Ut;for(let T=0,E=0;T<o.length;T+=9,E+=6){S.set(o[T+0],o[T+1],o[T+2]),M.set(o[T+3],o[T+4],o[T+5]),v.set(o[T+6],o[T+7],o[T+8]),b.set(r[E+0],r[E+1]),U.set(r[E+2],r[E+3]),L.set(r[E+4],r[E+5]),A.copy(S).add(M).add(v).divideScalar(3);const O=x(A);_(b,E+0,S,O),_(U,E+2,M,O),_(L,E+4,v,O)}}function _(S,M,v,A){A<0&&S.x===1&&(r[M]=S.x-1),v.x===0&&v.z===0&&(r[M]=A/2/Math.PI+.5)}function x(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new As(t.vertices,t.indices,t.radius,t.details)}}class $n extends As{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new $n(t.radius,t.detail)}}class yc extends Xr{constructor(t){super(t),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Xr().fromJSON(s))}return this}}const Pd={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=Sc(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,l,c,h,d,u,p;if(n&&(o=Nd(i,t,o,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)d=i[g],u=i[g+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return Ms(o,r,e,a,l,p,0),r}};function Sc(i,t,e,n,s){let o,r;if(s===Yd(i,t,e,n)>0)for(o=t;o<e;o+=n)r=Qa(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=Qa(o,i[o],i[o+1],r);return r&&Mo(r,r.next)&&(Ss(r),r=r.next),r}function pi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Mo(e,e.next)||be(e.prev,e,e.next)===0)){if(Ss(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ms(i,t,e,n,s,o,r){if(!i)return;!r&&o&&zd(i,n,s,o);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,o?Id(i,n,s,o):Ld(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Ss(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=Dd(pi(i),t,e),Ms(i,t,e,n,s,o,2)):r===2&&Ud(i,t,e,n,s,o):Ms(pi(i),t,e,n,s,o,1);break}}}function Ld(i){const t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,h=s<o?s<r?s:r:o<r?o:r,d=a<l?a<c?a:c:l<c?l:c,u=s>o?s>r?s:r:o>r?o:r,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&Fi(s,a,o,l,r,c,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Id(i,t,e,n){const s=i.prev,o=i,r=i.next;if(be(s,o,r)>=0)return!1;const a=s.x,l=o.x,c=r.x,h=s.y,d=o.y,u=r.y,p=a<l?a<c?a:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,_=a>l?a>c?a:c:l>c?l:c,x=h>d?h>u?h:u:d>u?d:u,m=Yr(p,g,t,e,n),S=Yr(_,x,t,e,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=m&&v&&v.z<=S;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=x&&M!==s&&M!==r&&Fi(a,h,l,d,c,u,M.x,M.y)&&be(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=p&&v.x<=_&&v.y>=g&&v.y<=x&&v!==s&&v!==r&&Fi(a,h,l,d,c,u,v.x,v.y)&&be(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=m;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=x&&M!==s&&M!==r&&Fi(a,h,l,d,c,u,M.x,M.y)&&be(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=S;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=x&&v!==s&&v!==r&&Fi(a,h,l,d,c,u,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Dd(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!Mo(s,o)&&bc(s,n,n.next,o)&&ys(s,o)&&ys(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Ss(n),Ss(n.next),n=i=o),n=n.next}while(n!==i);return pi(n)}function Ud(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&Vd(r,a)){let l=Tc(r,a);r=pi(r,r.next),l=pi(l,l.next),Ms(r,t,e,n,s,o,0),Ms(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function Nd(i,t,e,n){const s=[];let o,r,a,l,c;for(o=0,r=t.length;o<r;o++)a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=Sc(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Gd(c));for(s.sort(Fd),o=0;o<s.length;o++)e=Od(s[o],e);return e}function Fd(i,t){return i.x-t.x}function Od(i,t){const e=Bd(i,t);if(!e)return t;const n=Tc(e,i);return pi(n,n.next),pi(e,e.next)}function Bd(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=o&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,d;e=s;do o>=e.x&&e.x>=l&&o!==e.x&&Fi(r<c?o:n,r,l,c,r<c?n:o,r,e.x,e.y)&&(d=Math.abs(r-e.y)/(o-e.x),ys(e,i)&&(d<h||d===h&&(e.x>s.x||e.x===s.x&&kd(s,e)))&&(s=e,h=d)),e=e.next;while(e!==a);return s}function kd(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function zd(i,t,e,n){let s=i;do s.z===0&&(s.z=Yr(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hd(s)}function Hd(i){let t,e,n,s,o,r,a,l,c=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,c*=2}while(r>1);return i}function Yr(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Gd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Fi(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function Vd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Wd(i,t)&&(ys(i,t)&&ys(t,i)&&Xd(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||Mo(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Mo(i,t){return i.x===t.x&&i.y===t.y}function bc(i,t,e,n){const s=eo(be(i,t,e)),o=eo(be(i,t,n)),r=eo(be(e,n,i)),a=eo(be(e,n,t));return!!(s!==o&&r!==a||s===0&&to(i,e,t)||o===0&&to(i,n,t)||r===0&&to(e,i,n)||a===0&&to(e,t,n))}function to(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function eo(i){return i>0?1:i<0?-1:0}function Wd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&bc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ys(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function Xd(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Tc(i,t){const e=new qr(i.i,i.x,i.y),n=new qr(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Qa(i,t,e,n){const s=new qr(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ss(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qr(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Yd(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class ps{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return ps.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];tl(t),el(n,t);let r=t.length;e.forEach(tl);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,el(n,e[l]);const a=Pd.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}}function tl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function el(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ua extends Ce{constructor(t=new yc([new Ut(.5,.5),new Ut(-.5,.5),new Ut(-.5,-.5),new Ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];r(c)}this.setAttribute("position",new me(s,3)),this.setAttribute("uv",new me(o,2)),this.computeVertexNormals();function r(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:qd;let M,v=!1,A,b,U,L;m&&(M=m.getSpacedPoints(h),v=!0,u=!1,A=m.computeFrenetFrames(h,!1),b=new w,U=new w,L=new w),u||(x=0,p=0,g=0,_=0);const T=a.extractPoints(c);let E=T.shape;const O=T.holes;if(!ps.isClockWise(E)){E=E.reverse();for(let it=0,mt=O.length;it<mt;it++){const D=O[it];ps.isClockWise(D)&&(O[it]=D.reverse())}}const j=ps.triangulateShape(E,O),Q=E;for(let it=0,mt=O.length;it<mt;it++){const D=O[it];E=E.concat(D)}function Y(it,mt,D){return mt||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(mt,D)}const X=E.length,I=j.length;function C(it,mt,D){let Pt,vt,It;const ht=it.x-mt.x,Ct=it.y-mt.y,dt=D.x-it.x,R=D.y-it.y,y=ht*ht+Ct*Ct,V=ht*R-Ct*dt;if(Math.abs(V)>Number.EPSILON){const nt=Math.sqrt(y),ct=Math.sqrt(dt*dt+R*R),rt=mt.x-Ct/nt,ft=mt.y+ht/nt,ut=D.x-R/ct,bt=D.y+dt/ct,Lt=((ut-rt)*R-(bt-ft)*dt)/(ht*R-Ct*dt);Pt=rt+ht*Lt-it.x,vt=ft+Ct*Lt-it.y;const wt=Pt*Pt+vt*vt;if(wt<=2)return new Ut(Pt,vt);It=Math.sqrt(wt/2)}else{let nt=!1;ht>Number.EPSILON?dt>Number.EPSILON&&(nt=!0):ht<-Number.EPSILON?dt<-Number.EPSILON&&(nt=!0):Math.sign(Ct)===Math.sign(R)&&(nt=!0),nt?(Pt=-Ct,vt=ht,It=Math.sqrt(y)):(Pt=ht,vt=Ct,It=Math.sqrt(y/2))}return new Ut(Pt/It,vt/It)}const k=[];for(let it=0,mt=Q.length,D=mt-1,Pt=it+1;it<mt;it++,D++,Pt++)D===mt&&(D=0),Pt===mt&&(Pt=0),k[it]=C(Q[it],Q[D],Q[Pt]);const B=[];let G,tt=k.concat();for(let it=0,mt=O.length;it<mt;it++){const D=O[it];G=[];for(let Pt=0,vt=D.length,It=vt-1,ht=Pt+1;Pt<vt;Pt++,It++,ht++)It===vt&&(It=0),ht===vt&&(ht=0),G[Pt]=C(D[Pt],D[It],D[ht]);B.push(G),tt=tt.concat(G)}for(let it=0;it<x;it++){const mt=it/x,D=p*Math.cos(mt*Math.PI/2),Pt=g*Math.sin(mt*Math.PI/2)+_;for(let vt=0,It=Q.length;vt<It;vt++){const ht=Y(Q[vt],k[vt],Pt);Z(ht.x,ht.y,-D)}for(let vt=0,It=O.length;vt<It;vt++){const ht=O[vt];G=B[vt];for(let Ct=0,dt=ht.length;Ct<dt;Ct++){const R=Y(ht[Ct],G[Ct],Pt);Z(R.x,R.y,-D)}}}const at=g+_;for(let it=0;it<X;it++){const mt=u?Y(E[it],tt[it],at):E[it];v?(U.copy(A.normals[0]).multiplyScalar(mt.x),b.copy(A.binormals[0]).multiplyScalar(mt.y),L.copy(M[0]).add(U).add(b),Z(L.x,L.y,L.z)):Z(mt.x,mt.y,0)}for(let it=1;it<=h;it++)for(let mt=0;mt<X;mt++){const D=u?Y(E[mt],tt[mt],at):E[mt];v?(U.copy(A.normals[it]).multiplyScalar(D.x),b.copy(A.binormals[it]).multiplyScalar(D.y),L.copy(M[it]).add(U).add(b),Z(L.x,L.y,L.z)):Z(D.x,D.y,d/h*it)}for(let it=x-1;it>=0;it--){const mt=it/x,D=p*Math.cos(mt*Math.PI/2),Pt=g*Math.sin(mt*Math.PI/2)+_;for(let vt=0,It=Q.length;vt<It;vt++){const ht=Y(Q[vt],k[vt],Pt);Z(ht.x,ht.y,d+D)}for(let vt=0,It=O.length;vt<It;vt++){const ht=O[vt];G=B[vt];for(let Ct=0,dt=ht.length;Ct<dt;Ct++){const R=Y(ht[Ct],G[Ct],Pt);v?Z(R.x,R.y+M[h-1].y,M[h-1].x+D):Z(R.x,R.y,d+D)}}}F(),z();function F(){const it=s.length/3;if(u){let mt=0,D=X*mt;for(let Pt=0;Pt<I;Pt++){const vt=j[Pt];ot(vt[2]+D,vt[1]+D,vt[0]+D)}mt=h+x*2,D=X*mt;for(let Pt=0;Pt<I;Pt++){const vt=j[Pt];ot(vt[0]+D,vt[1]+D,vt[2]+D)}}else{for(let mt=0;mt<I;mt++){const D=j[mt];ot(D[2],D[1],D[0])}for(let mt=0;mt<I;mt++){const D=j[mt];ot(D[0]+X*h,D[1]+X*h,D[2]+X*h)}}n.addGroup(it,s.length/3-it,0)}function z(){const it=s.length/3;let mt=0;$(Q,mt),mt+=Q.length;for(let D=0,Pt=O.length;D<Pt;D++){const vt=O[D];$(vt,mt),mt+=vt.length}n.addGroup(it,s.length/3-it,1)}function $(it,mt){let D=it.length;for(;--D>=0;){const Pt=D;let vt=D-1;vt<0&&(vt=it.length-1);for(let It=0,ht=h+x*2;It<ht;It++){const Ct=X*It,dt=X*(It+1),R=mt+Pt+Ct,y=mt+vt+Ct,V=mt+vt+dt,nt=mt+Pt+dt;_t(R,y,V,nt)}}}function Z(it,mt,D){l.push(it),l.push(mt),l.push(D)}function ot(it,mt,D){Rt(it),Rt(mt),Rt(D);const Pt=s.length/3,vt=S.generateTopUV(n,s,Pt-3,Pt-2,Pt-1);xt(vt[0]),xt(vt[1]),xt(vt[2])}function _t(it,mt,D,Pt){Rt(it),Rt(mt),Rt(Pt),Rt(mt),Rt(D),Rt(Pt);const vt=s.length/3,It=S.generateSideWallUV(n,s,vt-6,vt-3,vt-2,vt-1);xt(It[0]),xt(It[1]),xt(It[3]),xt(It[1]),xt(It[2]),xt(It[3])}function Rt(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function xt(it){o.push(it.x),o.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Zd(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Wr[s.type]().fromJSON(s)),new ua(n,t.options)}}const qd={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Ut(o,r),new Ut(a,l),new Ut(c,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[o*3],x=t[o*3+1],m=t[o*3+2];return Math.abs(a-h)<Math.abs(r-c)?[new Ut(r,1-l),new Ut(c,1-d),new Ut(u,1-g),new Ut(_,1-m)]:[new Ut(a,1-l),new Ut(h,1-d),new Ut(p,1-g),new Ut(x,1-m)]}};function Zd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class wi extends As{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wi(t.radius,t.detail)}}class Rs extends As{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Rs(t.radius,t.detail)}}class ae extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,p=[],g=[],_=[],x=[];for(let m=0;m<h;m++){const S=m*u-r;for(let M=0;M<c;M++){const v=M*d-o;g.push(v,-S,0),_.push(0,0,1),x.push(M/a),x.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const M=S+c*m,v=S+c*(m+1),A=S+1+c*(m+1),b=S+1+c*m;p.push(M,v,b),p.push(v,A,b)}this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ae(t.width,t.height,t.widthSegments,t.heightSegments)}}class fa extends Ce{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,p=new w,g=new Ut;for(let _=0;_<=s;_++){for(let x=0;x<=n;x++){const m=o+x/n*r;p.x=d*Math.cos(m),p.y=d*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<s;_++){const x=_*(n+1);for(let m=0;m<n;m++){const S=m+x,M=S,v=S+n+1,A=S+n+2,b=S+1;a.push(M,v,b),a.push(v,A,b)}}this.setIndex(a),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Xt extends Ce{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],d=new w,u=new w,p=[],g=[],_=[],x=[];for(let m=0;m<=n;m++){const S=[],M=m/n;let v=0;m===0&&r===0?v=.5/e:m===n&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const b=A/e;d.x=-t*Math.cos(s+b*o)*Math.sin(r+M*a),d.y=t*Math.cos(r+M*a),d.z=t*Math.sin(s+b*o)*Math.sin(r+M*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),x.push(b+v,1-M),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<e;S++){const M=h[m][S+1],v=h[m][S],A=h[m+1][S],b=h[m+1][S+1];(m!==0||r>0)&&p.push(M,v,b),(m!==n-1||l<Math.PI)&&p.push(v,A,b)}this.setIndex(p),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(_,3)),this.setAttribute("uv",new me(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ee extends Ce{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],l=[],c=[],h=new w,d=new w,u=new w;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*o,x=p/n*Math.PI*2;d.x=(t+e*Math.cos(x))*Math.cos(_),d.y=(t+e*Math.cos(x))*Math.sin(_),d.z=e*Math.sin(x),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,x=(s+1)*(p-1)+g-1,m=(s+1)*(p-1)+g,S=(s+1)*p+g;r.push(_,x,S),r.push(x,m,S)}this.setIndex(r),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class jd extends Pe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class H extends gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $d extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Kd extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class pa extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Jn extends pa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const jo=new xe,nl=new w,il=new w;class Ec{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new aa,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;nl.setFromMatrixPosition(t.matrixWorld),e.position.copy(nl),il.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(il),e.updateMatrixWorld(),jo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const sl=new xe,ls=new w,$o=new w;class Jd extends Ec{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new we(2,1,1,1),new we(0,1,1,1),new we(3,1,1,1),new we(1,1,1,1),new we(3,0,1,1),new we(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),ls.setFromMatrixPosition(t.matrixWorld),n.position.copy(ls),$o.copy(n.position),$o.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt($o),n.updateMatrixWorld(),s.makeTranslation(-ls.x,-ls.y,-ls.z),sl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sl)}}class Hi extends pa{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ma extends pc{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Qd extends Ec{constructor(){super(new ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class je extends pa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Qd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class t0 extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ac{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ol(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ol();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ol(){return performance.now()}const rl=new xe;class e0{constructor(t,e,n=0,s=1/0){this.ray=new vo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ra,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return rl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rl),this}intersectObject(t,e=!0,n=[]){return Zr(t,this,n,e),n.sort(al),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)Zr(t[s],this,n,e);return n.sort(al),n}}function al(i,t){return i.distance-t.distance}function Zr(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let r=0,a=o.length;r<a;r++)Zr(o[r],t,e,!0)}}function ll(i,t,e,n){const s=n0(n);switch(e){case Jl:return i*t;case tc:return i*t;case ec:return i*t*2;case nc:return i*t/s.components*s.byteLength;case na:return i*t/s.components*s.byteLength;case ic:return i*t*2/s.components*s.byteLength;case ia:return i*t*2/s.components*s.byteLength;case Ql:return i*t*3/s.components*s.byteLength;case pn:return i*t*4/s.components*s.byteLength;case sa:return i*t*4/s.components*s.byteLength;case ro:case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lo:case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wr:case _r:return Math.max(i,16)*Math.max(t,8)/4;case gr:case xr:return Math.max(i,8)*Math.max(t,8)/2;case vr:case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case br:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Tr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Er:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ar:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Rr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Cr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Pr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Lr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ir:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Dr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ur:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Nr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ho:case Or:case Br:return Math.ceil(i/4)*Math.ceil(t/4)*16;case sc:case kr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case zr:case Hr:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function n0(i){switch(i){case kn:case jl:return{byteLength:1,components:1};case xs:case $l:case Un:return{byteLength:2,components:1};case ta:case ea:return{byteLength:2,components:4};case fi:case Qr:case Ln:return{byteLength:4,components:1};case Kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kr);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rc(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function i0(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}var s0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o0=`#ifdef USE_ALPHAHASH
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
#endif`,r0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h0=`#ifdef USE_AOMAP
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
#endif`,d0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u0=`#ifdef USE_BATCHING
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
#endif`,f0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,p0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w0=`#ifdef USE_IRIDESCENCE
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
#endif`,x0=`#ifdef USE_BUMPMAP
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
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,A0=`#define PI 3.141592653589793
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
} // validated`,R0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,C0=`vec3 transformedNormal = objectNormal;
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
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U0="gl_FragColor = linearToOutputTexel( gl_FragColor );",N0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
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
#endif`,H0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X0=`#ifdef USE_GRADIENTMAP
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
}`,Y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j0=`uniform bool receiveShadow;
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
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,K0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eu=`PhysicalMaterial material;
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
#endif`,nu=`struct PhysicalMaterial {
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
}`,iu=`
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
#endif`,su=`#if defined( RE_IndirectDiffuse )
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
#endif`,ou=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ru=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,au=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,du=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fu=`#if defined( USE_POINTS_UV )
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
#endif`,pu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_u=`#ifdef USE_MORPHTARGETS
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
#endif`,vu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Su=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eu=`#ifdef USE_NORMALMAP
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
#endif`,Au=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ru=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Iu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Du=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ou=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ku=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gu=`float getShadowMask() {
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
}`,Vu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wu=`#ifdef USE_SKINNING
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
#endif`,Xu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yu=`#ifdef USE_SKINNING
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
#endif`,qu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ju=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$u=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ku=`#ifdef USE_TRANSMISSION
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
#endif`,Ju=`#ifdef USE_TRANSMISSION
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
#endif`,Qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,of=`uniform sampler2D t2D;
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
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,af=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hf=`#include <common>
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
}`,df=`#if DEPTH_PACKING == 3200
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
}`,uf=`#define DISTANCE
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
}`,ff=`#define DISTANCE
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
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`uniform float scale;
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
}`,wf=`uniform vec3 diffuse;
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
}`,xf=`#include <common>
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
}`,_f=`uniform vec3 diffuse;
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
}`,vf=`#define LAMBERT
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
}`,Mf=`#define LAMBERT
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
}`,yf=`#define MATCAP
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
}`,Sf=`#define MATCAP
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
}`,bf=`#define NORMAL
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
}`,Tf=`#define NORMAL
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
}`,Ef=`#define PHONG
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
}`,Af=`#define PHONG
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
}`,Rf=`#define STANDARD
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
}`,Cf=`#define STANDARD
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
}`,Pf=`#define TOON
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
}`,Lf=`#define TOON
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
}`,If=`uniform float size;
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
}`,Df=`uniform vec3 diffuse;
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
}`,Uf=`#include <common>
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
}`,Nf=`uniform vec3 color;
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
}`,Ff=`uniform float rotation;
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
}`,Of=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:s0,alphahash_pars_fragment:o0,alphamap_fragment:r0,alphamap_pars_fragment:a0,alphatest_fragment:l0,alphatest_pars_fragment:c0,aomap_fragment:h0,aomap_pars_fragment:d0,batching_pars_vertex:u0,batching_vertex:f0,begin_vertex:p0,beginnormal_vertex:m0,bsdfs:g0,iridescence_fragment:w0,bumpmap_pars_fragment:x0,clipping_planes_fragment:_0,clipping_planes_pars_fragment:v0,clipping_planes_pars_vertex:M0,clipping_planes_vertex:y0,color_fragment:S0,color_pars_fragment:b0,color_pars_vertex:T0,color_vertex:E0,common:A0,cube_uv_reflection_fragment:R0,defaultnormal_vertex:C0,displacementmap_pars_vertex:P0,displacementmap_vertex:L0,emissivemap_fragment:I0,emissivemap_pars_fragment:D0,colorspace_fragment:U0,colorspace_pars_fragment:N0,envmap_fragment:F0,envmap_common_pars_fragment:O0,envmap_pars_fragment:B0,envmap_pars_vertex:k0,envmap_physical_pars_fragment:$0,envmap_vertex:z0,fog_vertex:H0,fog_pars_vertex:G0,fog_fragment:V0,fog_pars_fragment:W0,gradientmap_pars_fragment:X0,lightmap_pars_fragment:Y0,lights_lambert_fragment:q0,lights_lambert_pars_fragment:Z0,lights_pars_begin:j0,lights_toon_fragment:K0,lights_toon_pars_fragment:J0,lights_phong_fragment:Q0,lights_phong_pars_fragment:tu,lights_physical_fragment:eu,lights_physical_pars_fragment:nu,lights_fragment_begin:iu,lights_fragment_maps:su,lights_fragment_end:ou,logdepthbuf_fragment:ru,logdepthbuf_pars_fragment:au,logdepthbuf_pars_vertex:lu,logdepthbuf_vertex:cu,map_fragment:hu,map_pars_fragment:du,map_particle_fragment:uu,map_particle_pars_fragment:fu,metalnessmap_fragment:pu,metalnessmap_pars_fragment:mu,morphinstance_vertex:gu,morphcolor_vertex:wu,morphnormal_vertex:xu,morphtarget_pars_vertex:_u,morphtarget_vertex:vu,normal_fragment_begin:Mu,normal_fragment_maps:yu,normal_pars_fragment:Su,normal_pars_vertex:bu,normal_vertex:Tu,normalmap_pars_fragment:Eu,clearcoat_normal_fragment_begin:Au,clearcoat_normal_fragment_maps:Ru,clearcoat_pars_fragment:Cu,iridescence_pars_fragment:Pu,opaque_fragment:Lu,packing:Iu,premultiplied_alpha_fragment:Du,project_vertex:Uu,dithering_fragment:Nu,dithering_pars_fragment:Fu,roughnessmap_fragment:Ou,roughnessmap_pars_fragment:Bu,shadowmap_pars_fragment:ku,shadowmap_pars_vertex:zu,shadowmap_vertex:Hu,shadowmask_pars_fragment:Gu,skinbase_vertex:Vu,skinning_pars_vertex:Wu,skinning_vertex:Xu,skinnormal_vertex:Yu,specularmap_fragment:qu,specularmap_pars_fragment:Zu,tonemapping_fragment:ju,tonemapping_pars_fragment:$u,transmission_fragment:Ku,transmission_pars_fragment:Ju,uv_pars_fragment:Qu,uv_pars_vertex:tf,uv_vertex:ef,worldpos_vertex:nf,background_vert:sf,background_frag:of,backgroundCube_vert:rf,backgroundCube_frag:af,cube_vert:lf,cube_frag:cf,depth_vert:hf,depth_frag:df,distanceRGBA_vert:uf,distanceRGBA_frag:ff,equirect_vert:pf,equirect_frag:mf,linedashed_vert:gf,linedashed_frag:wf,meshbasic_vert:xf,meshbasic_frag:_f,meshlambert_vert:vf,meshlambert_frag:Mf,meshmatcap_vert:yf,meshmatcap_frag:Sf,meshnormal_vert:bf,meshnormal_frag:Tf,meshphong_vert:Ef,meshphong_frag:Af,meshphysical_vert:Rf,meshphysical_frag:Cf,meshtoon_vert:Pf,meshtoon_frag:Lf,points_vert:If,points_frag:Df,shadow_vert:Uf,shadow_frag:Nf,sprite_vert:Ff,sprite_frag:Of},Ht={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},wn={basic:{uniforms:Ve([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Ve([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Jt(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Ve([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Ve([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Ve([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Jt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Ve([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Ve([Ht.points,Ht.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Ve([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Ve([Ht.common,Ht.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Ve([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Ve([Ht.sprite,Ht.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Ve([Ht.common,Ht.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Ve([Ht.lights,Ht.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};wn.physical={uniforms:Ve([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const no={r:0,b:0,g:0},ri=new Mn,Bf=new xe;function kf(i,t,e,n,s,o,r){const a=new Jt(0);let l=o===!0?0:1,c,h,d=null,u=0,p=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const A=g(M);A===null?m(a,l):A&&A.isColor&&(m(A,1),v=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===_o)?(h===void 0&&(h=new f(new N(1,1,1),new Pe({name:"BackgroundCubeMaterial",uniforms:ji(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,U,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ri.copy(v.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bf.makeRotationFromEuler(ri)),h.material.toneMapped=he.getTransfer(A.colorSpace)!==ge,(d!==A||u!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=A,u=A.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new f(new ae(2,2),new Pe({name:"BackgroundMaterial",uniforms:ji(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=he.getTransfer(A.colorSpace)!==ge,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||u!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=A,u=A.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,v){M.getRGB(no,fc(i)),n.buffers.color.setClear(no.r,no.g,no.b,v,r)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:_,addToRenderList:x,dispose:S}}function zf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let o=s,r=!1;function a(E,O,J,j,Q){let Y=!1;const X=d(j,J,O);o!==X&&(o=X,c(o.object)),Y=p(E,j,J,Q),Y&&g(E,j,J,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,v(E,O,J,j),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function d(E,O,J){const j=J.wireframe===!0;let Q=n[E.id];Q===void 0&&(Q={},n[E.id]=Q);let Y=Q[O.id];Y===void 0&&(Y={},Q[O.id]=Y);let X=Y[j];return X===void 0&&(X=u(l()),Y[j]=X),X}function u(E){const O=[],J=[],j=[];for(let Q=0;Q<e;Q++)O[Q]=0,J[Q]=0,j[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:J,attributeDivisors:j,object:E,attributes:{},index:null}}function p(E,O,J,j){const Q=o.attributes,Y=O.attributes;let X=0;const I=J.getAttributes();for(const C in I)if(I[C].location>=0){const B=Q[C];let G=Y[C];if(G===void 0&&(C==="instanceMatrix"&&E.instanceMatrix&&(G=E.instanceMatrix),C==="instanceColor"&&E.instanceColor&&(G=E.instanceColor)),B===void 0||B.attribute!==G||G&&B.data!==G.data)return!0;X++}return o.attributesNum!==X||o.index!==j}function g(E,O,J,j){const Q={},Y=O.attributes;let X=0;const I=J.getAttributes();for(const C in I)if(I[C].location>=0){let B=Y[C];B===void 0&&(C==="instanceMatrix"&&E.instanceMatrix&&(B=E.instanceMatrix),C==="instanceColor"&&E.instanceColor&&(B=E.instanceColor));const G={};G.attribute=B,B&&B.data&&(G.data=B.data),Q[C]=G,X++}o.attributes=Q,o.attributesNum=X,o.index=j}function _(){const E=o.newAttributes;for(let O=0,J=E.length;O<J;O++)E[O]=0}function x(E){m(E,0)}function m(E,O){const J=o.newAttributes,j=o.enabledAttributes,Q=o.attributeDivisors;J[E]=1,j[E]===0&&(i.enableVertexAttribArray(E),j[E]=1),Q[E]!==O&&(i.vertexAttribDivisor(E,O),Q[E]=O)}function S(){const E=o.newAttributes,O=o.enabledAttributes;for(let J=0,j=O.length;J<j;J++)O[J]!==E[J]&&(i.disableVertexAttribArray(J),O[J]=0)}function M(E,O,J,j,Q,Y,X){X===!0?i.vertexAttribIPointer(E,O,J,Q,Y):i.vertexAttribPointer(E,O,J,j,Q,Y)}function v(E,O,J,j){_();const Q=j.attributes,Y=J.getAttributes(),X=O.defaultAttributeValues;for(const I in Y){const C=Y[I];if(C.location>=0){let k=Q[I];if(k===void 0&&(I==="instanceMatrix"&&E.instanceMatrix&&(k=E.instanceMatrix),I==="instanceColor"&&E.instanceColor&&(k=E.instanceColor)),k!==void 0){const B=k.normalized,G=k.itemSize,tt=t.get(k);if(tt===void 0)continue;const at=tt.buffer,F=tt.type,z=tt.bytesPerElement,$=F===i.INT||F===i.UNSIGNED_INT||k.gpuType===Qr;if(k.isInterleavedBufferAttribute){const Z=k.data,ot=Z.stride,_t=k.offset;if(Z.isInstancedInterleavedBuffer){for(let Rt=0;Rt<C.locationSize;Rt++)m(C.location+Rt,Z.meshPerAttribute);E.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Rt=0;Rt<C.locationSize;Rt++)x(C.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,at);for(let Rt=0;Rt<C.locationSize;Rt++)M(C.location+Rt,G/C.locationSize,F,B,ot*z,(_t+G/C.locationSize*Rt)*z,$)}else{if(k.isInstancedBufferAttribute){for(let Z=0;Z<C.locationSize;Z++)m(C.location+Z,k.meshPerAttribute);E.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Z=0;Z<C.locationSize;Z++)x(C.location+Z);i.bindBuffer(i.ARRAY_BUFFER,at);for(let Z=0;Z<C.locationSize;Z++)M(C.location+Z,G/C.locationSize,F,B,G*z,G/C.locationSize*Z*z,$)}}else if(X!==void 0){const B=X[I];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(C.location,B);break;case 3:i.vertexAttrib3fv(C.location,B);break;case 4:i.vertexAttrib4fv(C.location,B);break;default:i.vertexAttrib1fv(C.location,B)}}}}S()}function A(){L();for(const E in n){const O=n[E];for(const J in O){const j=O[J];for(const Q in j)h(j[Q].object),delete j[Q];delete O[J]}delete n[E]}}function b(E){if(n[E.id]===void 0)return;const O=n[E.id];for(const J in O){const j=O[J];for(const Q in j)h(j[Q].object),delete j[Q];delete O[J]}delete n[E.id]}function U(E){for(const O in n){const J=n[O];if(J[E.id]===void 0)continue;const j=J[E.id];for(const Q in j)h(j[Q].object),delete j[Q];delete J[E.id]}}function L(){T(),r=!0,o!==s&&(o=s,c(o.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:x,disableUnusedAttributes:S}}function Hf(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function l(c,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Gf(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(U){return!(U!==pn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){const L=U===Un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==kn&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Ln&&!L)}function l(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:A,maxSamples:b}}function Vf(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new li,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,x=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||o&&!x)o?h(null):c();else{const S=o?0:n,M=S*4;let v=m.clippingState||null;l.value=v,v=h(g,u,M,p);for(let A=0;A!==M;++A)v[A]=e[A];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let x=null;if(_!==0){if(x=l.value,g!==!0||x===null){const m=p+_*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(x===null||x.length<m)&&(x=new Float32Array(m));for(let M=0,v=p;M!==_;++M,v+=4)r.copy(d[M]).applyMatrix4(S,a),r.normal.toArray(x,v),x[v+3]=r.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,x}}function Wf(i){let t=new WeakMap;function e(r,a){return a===fr?r.mapping=Wi:a===pr&&(r.mapping=Xi),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===fr||a===pr)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new dd(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}const Oi=4,cl=[.125,.215,.35,.446,.526,.582],di=20,Ko=new ma,hl=new Jt;let Jo=null,Qo=0,tr=0,er=!1;const ci=(1+Math.sqrt(5))/2,Ii=1/ci,dl=[new w(-ci,Ii,0),new w(ci,Ii,0),new w(-Ii,0,ci),new w(Ii,0,ci),new w(0,ci,-Ii),new w(0,ci,Ii),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)];class ul{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),tr=this._renderer.getActiveMipmapLevel(),er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jo,Qo,tr),this._renderer.xr.enabled=er,t.scissorTest=!1,io(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),tr=this._renderer.getActiveMipmapLevel(),er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Un,format:pn,colorSpace:Zi,depthBuffer:!1},s=fl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fl(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xf(o)),this._blurMaterial=Yf(o,t,e)}return s}_compileMaterial(t){const e=new f(this._lodPlanes[0],t);this._renderer.compile(e,Ko)}_sceneToCubeUV(t,e,n,s){const a=new en(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(hl),h.toneMapping=Zn,h.autoClear=!1;const p=new oe({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),g=new f(new N,p);let _=!1;const x=t.background;x?x.isColor&&(p.color.copy(x),t.background=null,_=!0):(p.color.copy(hl),_=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const M=this._cubeSize;io(s,S*M,m>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Wi||t.mapping===Xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pl());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new f(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;io(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Ko)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=dl[(s-o-1)%dl.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new f(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*di-1),_=o/g,x=isFinite(o)?1+Math.floor(h*_):di;x>di&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${di}`);const m=[];let S=0;for(let U=0;U<di;++U){const L=U/_,T=Math.exp(-L*L/2);m.push(T),U===0?S+=T:U<x&&(S+=2*T)}for(let U=0;U<m.length;U++)m[U]=m[U]/S;u.envMap.value=t.texture,u.samples.value=x,u.weights.value=m,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;const v=this._sizeLods[s],A=3*v*(s>M-Oi?s-M+Oi:0),b=4*(this._cubeSize-v);io(e,A,b,3*v,2*v),l.setRenderTarget(e),l.render(d,Ko)}}function Xf(i){const t=[],e=[],n=[];let s=i;const o=i-Oi+1+cl.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>i-Oi?l=cl[r-i+Oi-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,x=2,m=1,S=new Float32Array(_*g*p),M=new Float32Array(x*g*p),v=new Float32Array(m*g*p);for(let b=0;b<p;b++){const U=b%3*2/3-1,L=b>2?0:-1,T=[U,L,0,U+2/3,L,0,U+2/3,L+1,0,U,L,0,U+2/3,L+1,0,U,L+1,0];S.set(T,_*g*b),M.set(u,x*g*b);const E=[b,b,b,b,b,b];v.set(E,m*g*b)}const A=new Ce;A.setAttribute("position",new ln(S,_)),A.setAttribute("uv",new ln(M,x)),A.setAttribute("faceIndex",new ln(v,m)),t.push(A),s>Oi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fl(i,t,e){const n=new gn(i,t,e);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function io(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Yf(i,t,e){const n=new Float32Array(di),s=new w(0,1,0);return new Pe({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ga(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function pl(){return new Pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ga(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ml(){return new Pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ga(){return`

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
	`}function qf(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===fr||l===pr,h=l===Wi||l===Xi;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new ul(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new ul(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Zf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ni("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function jf(i,t,e,n){const s={},o=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete s[u.id];const p=o.get(u);p&&(t.remove(p),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)t.update(u[p],i.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let M=0,v=S.length;M<v;M+=3){const A=S[M+0],b=S[M+1],U=S[M+2];u.push(A,b,b,U,U,A)}}else if(g!==void 0){const S=g.array;_=g.version;for(let M=0,v=S.length/3-1;M<v;M+=3){const A=M+0,b=M+1,U=M+2;u.push(A,b,b,U,U,A)}}else return;const x=new(ac(u)?uc:dc)(u,1);x.version=_;const m=o.get(d);m&&t.remove(m),o.set(d,x)}function h(d){const u=o.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function $f(i,t,e){let n;function s(u){n=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function l(u,p){i.drawElements(n,p,o,u*r),e.update(p,n,1)}function c(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,o,u*r,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,u,0,g);let x=0;for(let m=0;m<g;m++)x+=p[m];e.update(x,n,1)}function d(u,p,g,_){if(g===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<u.length;m++)c(u[m]/r,p[m],_[m]);else{x.multiDrawElementsInstancedWEBGL(n,p,0,o,u,0,_,0,g);let m=0;for(let S=0;S<g;S++)m+=p[S]*_[S];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Kf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Jf(i,t,e){const n=new WeakMap,s=new we;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let E=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var p=E;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),x===!0&&(v=3);let A=a.attributes.position.count*v,b=1;A>t.maxTextureSize&&(b=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const U=new Float32Array(A*b*4*d),L=new cc(U,A,b,d);L.type=Ln,L.needsUpdate=!0;const T=v*4;for(let O=0;O<d;O++){const J=m[O],j=S[O],Q=M[O],Y=A*b*4*O;for(let X=0;X<J.count;X++){const I=X*T;g===!0&&(s.fromBufferAttribute(J,X),U[Y+I+0]=s.x,U[Y+I+1]=s.y,U[Y+I+2]=s.z,U[Y+I+3]=0),_===!0&&(s.fromBufferAttribute(j,X),U[Y+I+4]=s.x,U[Y+I+5]=s.y,U[Y+I+6]=s.z,U[Y+I+7]=0),x===!0&&(s.fromBufferAttribute(Q,X),U[Y+I+8]=s.x,U[Y+I+9]=s.y,U[Y+I+10]=s.z,U[Y+I+11]=Q.itemSize===4?s.w:1)}}u={count:d,texture:L,size:new Ut(A,b)},n.set(a,u),a.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let x=0;x<c.length;x++)g+=c[x];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:o}}function Qf(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}const Cc=new Ye,gl=new wc(1,1),Pc=new cc,Lc=new $h,Ic=new mc,wl=[],xl=[],_l=new Float32Array(16),vl=new Float32Array(9),Ml=new Float32Array(4);function Qi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=wl[s];if(o===void 0&&(o=new Float32Array(s),wl[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yo(i,t){let e=xl[t];e===void 0&&(e=new Int32Array(t),xl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function tp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function sp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;Ml.set(n),i.uniformMatrix2fv(this.addr,!1,Ml),De(e,n)}}function op(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;vl.set(n),i.uniformMatrix3fv(this.addr,!1,vl),De(e,n)}}function rp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;_l.set(n),i.uniformMatrix4fv(this.addr,!1,_l),De(e,n)}}function ap(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function dp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function mp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(gl.compareFunction=rc,o=gl):o=Cc,e.setTexture2D(t||o,s)}function gp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Lc,s)}function wp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ic,s)}function xp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Pc,s)}function _p(i){switch(i){case 5126:return tp;case 35664:return ep;case 35665:return np;case 35666:return ip;case 35674:return sp;case 35675:return op;case 35676:return rp;case 5124:case 35670:return ap;case 35667:case 35671:return lp;case 35668:case 35672:return cp;case 35669:case 35673:return hp;case 5125:return dp;case 36294:return up;case 36295:return fp;case 36296:return pp;case 35678:case 36198:case 36298:case 36306:case 35682:return mp;case 35679:case 36299:case 36307:return gp;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return xp}}function vp(i,t){i.uniform1fv(this.addr,t)}function Mp(i,t){const e=Qi(t,this.size,2);i.uniform2fv(this.addr,e)}function yp(i,t){const e=Qi(t,this.size,3);i.uniform3fv(this.addr,e)}function Sp(i,t){const e=Qi(t,this.size,4);i.uniform4fv(this.addr,e)}function bp(i,t){const e=Qi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Tp(i,t){const e=Qi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ep(i,t){const e=Qi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ap(i,t){i.uniform1iv(this.addr,t)}function Rp(i,t){i.uniform2iv(this.addr,t)}function Cp(i,t){i.uniform3iv(this.addr,t)}function Pp(i,t){i.uniform4iv(this.addr,t)}function Lp(i,t){i.uniform1uiv(this.addr,t)}function Ip(i,t){i.uniform2uiv(this.addr,t)}function Dp(i,t){i.uniform3uiv(this.addr,t)}function Up(i,t){i.uniform4uiv(this.addr,t)}function Np(i,t,e){const n=this.cache,s=t.length,o=yo(e,s);Ie(n,o)||(i.uniform1iv(this.addr,o),De(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Cc,o[r])}function Fp(i,t,e){const n=this.cache,s=t.length,o=yo(e,s);Ie(n,o)||(i.uniform1iv(this.addr,o),De(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Lc,o[r])}function Op(i,t,e){const n=this.cache,s=t.length,o=yo(e,s);Ie(n,o)||(i.uniform1iv(this.addr,o),De(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Ic,o[r])}function Bp(i,t,e){const n=this.cache,s=t.length,o=yo(e,s);Ie(n,o)||(i.uniform1iv(this.addr,o),De(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Pc,o[r])}function kp(i){switch(i){case 5126:return vp;case 35664:return Mp;case 35665:return yp;case 35666:return Sp;case 35674:return bp;case 35675:return Tp;case 35676:return Ep;case 5124:case 35670:return Ap;case 35667:case 35671:return Rp;case 35668:case 35672:return Cp;case 35669:case 35673:return Pp;case 5125:return Lp;case 36294:return Ip;case 36295:return Dp;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Op;case 36289:case 36303:case 36311:case 36292:return Bp}}class zp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_p(e.type)}}class Hp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kp(e.type)}}class Gp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const nr=/(\w+)(\])?(\[|\.)?/g;function yl(i,t){i.seq.push(t),i.map[t.id]=t}function Vp(i,t,e){const n=i.name,s=n.length;for(nr.lastIndex=0;;){const o=nr.exec(n),r=nr.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){yl(e,c===void 0?new zp(a,i,t):new Hp(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Gp(a),yl(e,d)),e=d}}}class uo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Vp(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Sl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Wp=37297;let Xp=0;function Yp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const bl=new ne;function qp(i){he._getMatrix(bl,he.workingColorSpace,i);const t=`mat3( ${bl.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case po:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Tl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Yp(i.getShaderSource(t),r)}else return s}function Zp(i,t){const e=qp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function jp(i,t){let e;switch(t){case Vl:e="Linear";break;case Wl:e="Reinhard";break;case Xl:e="Cineon";break;case Jr:e="ACESFilmic";break;case Yl:e="AgX";break;case ql:e="Neutral";break;case uh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const so=new w;function $p(){he.getLuminanceCoefficients(so);const i=so.x.toFixed(4),t=so.y.toFixed(4),e=so.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function Jp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function cs(i){return i!==""}function El(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Al(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function jr(i){return i.replace(tm,nm)}const em=new Map;function nm(i,t){let e=se[t];if(e===void 0){const n=em.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jr(e)}const im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rl(i){return i.replace(im,sm)}function sm(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Cl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function om(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function rm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wi:case Xi:t="ENVMAP_TYPE_CUBE";break;case _o:t="ENVMAP_TYPE_CUBE_UV";break}return t}function am(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xi:t="ENVMAP_MODE_REFRACTION";break}return t}function lm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gl:t="ENVMAP_BLENDING_MULTIPLY";break;case hh:t="ENVMAP_BLENDING_MIX";break;case dh:t="ENVMAP_BLENDING_ADD";break}return t}function cm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function hm(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=om(e),c=rm(e),h=am(e),d=lm(e),u=cm(e),p=Kp(e),g=Jp(o),_=s.createProgram();let x,m,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cs).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cs).join(`
`),m.length>0&&(m+=`
`)):(x=[Cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),m=[Cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?se.tonemapping_pars_fragment:"",e.toneMapping!==Zn?jp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,Zp("linearToOutputTexel",e.outputColorSpace),$p(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cs).join(`
`)),r=jr(r),r=El(r,e),r=Al(r,e),a=jr(a),a=El(a,e),a=Al(a,e),r=Rl(r),a=Rl(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=S+x+r,v=S+m+a,A=Sl(s,s.VERTEX_SHADER,M),b=Sl(s,s.FRAGMENT_SHADER,v);s.attachShader(_,A),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function U(O){if(i.debug.checkShaderErrors){const J=s.getProgramInfoLog(_).trim(),j=s.getShaderInfoLog(A).trim(),Q=s.getShaderInfoLog(b).trim();let Y=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,b);else{const I=Tl(s,A,"vertex"),C=Tl(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+J+`
`+I+`
`+C)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(j===""||Q==="")&&(X=!1);X&&(O.diagnostics={runnable:Y,programLog:J,vertexShader:{log:j,prefix:x},fragmentShader:{log:Q,prefix:m}})}s.deleteShader(A),s.deleteShader(b),L=new uo(s,_),T=Qp(s,_)}let L;this.getUniforms=function(){return L===void 0&&U(this),L};let T;this.getAttributes=function(){return T===void 0&&U(this),T};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,Wp)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=b,this}let dm=0;class um{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new fm(t),e.set(t,n)),n}}class fm{constructor(t){this.id=dm++,this.code=t,this.usedTimes=0}}function pm(i,t,e,n,s,o,r){const a=new ra,l=new um,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function x(T,E,O,J,j){const Q=J.fog,Y=j.geometry,X=T.isMeshStandardMaterial?J.environment:null,I=(T.isMeshStandardMaterial?e:t).get(T.envMap||X),C=I&&I.mapping===_o?I.image.height:null,k=g[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const B=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,G=B!==void 0?B.length:0;let tt=0;Y.morphAttributes.position!==void 0&&(tt=1),Y.morphAttributes.normal!==void 0&&(tt=2),Y.morphAttributes.color!==void 0&&(tt=3);let at,F,z,$;if(k){const ie=wn[k];at=ie.vertexShader,F=ie.fragmentShader}else at=T.vertexShader,F=T.fragmentShader,l.update(T),z=l.getVertexShaderID(T),$=l.getFragmentShaderID(T);const Z=i.getRenderTarget(),ot=i.state.buffers.depth.getReversed(),_t=j.isInstancedMesh===!0,Rt=j.isBatchedMesh===!0,xt=!!T.map,it=!!T.matcap,mt=!!I,D=!!T.aoMap,Pt=!!T.lightMap,vt=!!T.bumpMap,It=!!T.normalMap,ht=!!T.displacementMap,Ct=!!T.emissiveMap,dt=!!T.metalnessMap,R=!!T.roughnessMap,y=T.anisotropy>0,V=T.clearcoat>0,nt=T.dispersion>0,ct=T.iridescence>0,rt=T.sheen>0,ft=T.transmission>0,ut=y&&!!T.anisotropyMap,bt=V&&!!T.clearcoatMap,Lt=V&&!!T.clearcoatNormalMap,wt=V&&!!T.clearcoatRoughnessMap,At=ct&&!!T.iridescenceMap,Ot=ct&&!!T.iridescenceThicknessMap,Bt=rt&&!!T.sheenColorMap,Dt=rt&&!!T.sheenRoughnessMap,Mt=!!T.specularMap,yt=!!T.specularColorMap,Vt=!!T.specularIntensityMap,q=ft&&!!T.transmissionMap,Et=ft&&!!T.thicknessMap,K=!!T.gradientMap,lt=!!T.alphaMap,St=T.alphaTest>0,Tt=!!T.alphaHash,zt=!!T.extensions;let qt=Zn;T.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(qt=i.toneMapping);const de={shaderID:k,shaderType:T.type,shaderName:T.name,vertexShader:at,fragmentShader:F,defines:T.defines,customVertexShaderID:z,customFragmentShaderID:$,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Rt,batchingColor:Rt&&j._colorsTexture!==null,instancing:_t,instancingColor:_t&&j.instanceColor!==null,instancingMorph:_t&&j.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Zi,alphaToCoverage:!!T.alphaToCoverage,map:xt,matcap:it,envMap:mt,envMapMode:mt&&I.mapping,envMapCubeUVHeight:C,aoMap:D,lightMap:Pt,bumpMap:vt,normalMap:It,displacementMap:u&&ht,emissiveMap:Ct,normalMapObjectSpace:It&&T.normalMapType===gh,normalMapTangentSpace:It&&T.normalMapType===oc,metalnessMap:dt,roughnessMap:R,anisotropy:y,anisotropyMap:ut,clearcoat:V,clearcoatMap:bt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:wt,dispersion:nt,iridescence:ct,iridescenceMap:At,iridescenceThicknessMap:Ot,sheen:rt,sheenColorMap:Bt,sheenRoughnessMap:Dt,specularMap:Mt,specularColorMap:yt,specularIntensityMap:Vt,transmission:ft,transmissionMap:q,thicknessMap:Et,gradientMap:K,opaque:T.transparent===!1&&T.blending===Bi&&T.alphaToCoverage===!1,alphaMap:lt,alphaTest:St,alphaHash:Tt,combine:T.combine,mapUv:xt&&_(T.map.channel),aoMapUv:D&&_(T.aoMap.channel),lightMapUv:Pt&&_(T.lightMap.channel),bumpMapUv:vt&&_(T.bumpMap.channel),normalMapUv:It&&_(T.normalMap.channel),displacementMapUv:ht&&_(T.displacementMap.channel),emissiveMapUv:Ct&&_(T.emissiveMap.channel),metalnessMapUv:dt&&_(T.metalnessMap.channel),roughnessMapUv:R&&_(T.roughnessMap.channel),anisotropyMapUv:ut&&_(T.anisotropyMap.channel),clearcoatMapUv:bt&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(T.sheenRoughnessMap.channel),specularMapUv:Mt&&_(T.specularMap.channel),specularColorMapUv:yt&&_(T.specularColorMap.channel),specularIntensityMapUv:Vt&&_(T.specularIntensityMap.channel),transmissionMapUv:q&&_(T.transmissionMap.channel),thicknessMapUv:Et&&_(T.thicknessMap.channel),alphaMapUv:lt&&_(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(It||y),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!Y.attributes.uv&&(xt||lt),fog:!!Q,useFog:T.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ot,skinning:j.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:tt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:xt&&T.map.isVideoTexture===!0&&he.getTransfer(T.map.colorSpace)===ge,decodeVideoTextureEmissive:Ct&&T.emissiveMap.isVideoTexture===!0&&he.getTransfer(T.emissiveMap.colorSpace)===ge,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===_e,flipSided:T.side===Xe,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:zt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&T.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function m(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const O in T.defines)E.push(O),E.push(T.defines[O]);return T.isRawShaderMaterial===!1&&(S(E,T),M(E,T),E.push(i.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function S(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function M(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function v(T){const E=g[T.type];let O;if(E){const J=wn[E];O=vs.clone(J.uniforms)}else O=T.uniforms;return O}function A(T,E){let O;for(let J=0,j=h.length;J<j;J++){const Q=h[J];if(Q.cacheKey===E){O=Q,++O.usedTimes;break}}return O===void 0&&(O=new hm(i,E,T,o),h.push(O)),O}function b(T){if(--T.usedTimes===0){const E=h.indexOf(T);h[E]=h[h.length-1],h.pop(),T.destroy()}}function U(T){l.remove(T)}function L(){l.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:v,acquireProgram:A,releaseProgram:b,releaseShaderCache:U,programs:h,dispose:L}}function mm(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function gm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Pl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ll(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(d,u,p,g,_,x){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:x},i[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=p,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=x),t++,m}function a(d,u,p,g,_,x){const m=r(d,u,p,g,_,x);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):e.push(m)}function l(d,u,p,g,_,x){const m=r(d,u,p,g,_,x);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function c(d,u){e.length>1&&e.sort(d||gm),n.length>1&&n.sort(u||Pl),s.length>1&&s.sort(u||Pl)}function h(){for(let d=t,u=i.length;d<u;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function wm(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Ll,i.set(n,[r])):s>=o.length?(r=new Ll,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function xm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new Jt};break;case"SpotLight":e={position:new w,direction:new w,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function _m(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let vm=0;function Mm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ym(i){const t=new xm,e=_m(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);const s=new w,o=new xe,r=new xe;function a(c){let h=0,d=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,g=0,_=0,x=0,m=0,S=0,M=0,v=0,A=0,b=0,U=0;c.sort(Mm);for(let T=0,E=c.length;T<E;T++){const O=c[T],J=O.color,j=O.intensity,Q=O.distance,Y=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=J.r*j,d+=J.g*j,u+=J.b*j;else if(O.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(O.sh.coefficients[X],j);U++}else if(O.isDirectionalLight){const X=t.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const I=O.shadow,C=e.get(O);C.shadowIntensity=I.intensity,C.shadowBias=I.bias,C.shadowNormalBias=I.normalBias,C.shadowRadius=I.radius,C.shadowMapSize=I.mapSize,n.directionalShadow[p]=C,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=O.shadow.matrix,S++}n.directional[p]=X,p++}else if(O.isSpotLight){const X=t.get(O);X.position.setFromMatrixPosition(O.matrixWorld),X.color.copy(J).multiplyScalar(j),X.distance=Q,X.coneCos=Math.cos(O.angle),X.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),X.decay=O.decay,n.spot[_]=X;const I=O.shadow;if(O.map&&(n.spotLightMap[A]=O.map,A++,I.updateMatrices(O),O.castShadow&&b++),n.spotLightMatrix[_]=I.matrix,O.castShadow){const C=e.get(O);C.shadowIntensity=I.intensity,C.shadowBias=I.bias,C.shadowNormalBias=I.normalBias,C.shadowRadius=I.radius,C.shadowMapSize=I.mapSize,n.spotShadow[_]=C,n.spotShadowMap[_]=Y,v++}_++}else if(O.isRectAreaLight){const X=t.get(O);X.color.copy(J).multiplyScalar(j),X.halfWidth.set(O.width*.5,0,0),X.halfHeight.set(0,O.height*.5,0),n.rectArea[x]=X,x++}else if(O.isPointLight){const X=t.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity),X.distance=O.distance,X.decay=O.decay,O.castShadow){const I=O.shadow,C=e.get(O);C.shadowIntensity=I.intensity,C.shadowBias=I.bias,C.shadowNormalBias=I.normalBias,C.shadowRadius=I.radius,C.shadowMapSize=I.mapSize,C.shadowCameraNear=I.camera.near,C.shadowCameraFar=I.camera.far,n.pointShadow[g]=C,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=O.shadow.matrix,M++}n.point[g]=X,g++}else if(O.isHemisphereLight){const X=t.get(O);X.skyColor.copy(O.color).multiplyScalar(j),X.groundColor.copy(O.groundColor).multiplyScalar(j),n.hemi[m]=X,m++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==x||L.hemiLength!==m||L.numDirectionalShadows!==S||L.numPointShadows!==M||L.numSpotShadows!==v||L.numSpotMaps!==A||L.numLightProbes!==U)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=x,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=U,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=x,L.hemiLength=m,L.numDirectionalShadows=S,L.numPointShadows=M,L.numSpotShadows=v,L.numSpotMaps=A,L.numLightProbes=U,n.version=vm++)}function l(c,h){let d=0,u=0,p=0,g=0,_=0;const x=h.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const M=c[m];if(M.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),d++}else if(M.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(x),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),p++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(x),r.identity(),o.copy(M.matrixWorld),o.premultiply(x),r.extractRotation(o),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(M.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(x),u++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(x),_++}}}return{setup:a,setupView:l,state:n}}function Il(i){const t=new ym(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function Sm(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new Il(i),t.set(s,[a])):o>=r.length?(a=new Il(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const bm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tm=`uniform sampler2D shadow_pass;
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
}`;function Em(i,t,e){let n=new aa;const s=new Ut,o=new Ut,r=new we,a=new $d({depthPacking:mh}),l=new Kd,c={},h=e.maxTextureSize,d={[jn]:Xe,[Xe]:jn,[_e]:_e},u=new Pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:bm,fragmentShader:Tm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ce;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new f(g,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zl;let m=this.type;this.render=function(b,U,L){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||b.length===0)return;const T=i.getRenderTarget(),E=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),J=i.state;J.setBlending(Dn),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const j=m!==Pn&&this.type===Pn,Q=m===Pn&&this.type!==Pn;for(let Y=0,X=b.length;Y<X;Y++){const I=b[Y],C=I.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;s.copy(C.mapSize);const k=C.getFrameExtents();if(s.multiply(k),o.copy(C.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/k.x),s.x=o.x*k.x,C.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/k.y),s.y=o.y*k.y,C.mapSize.y=o.y)),C.map===null||j===!0||Q===!0){const G=this.type!==Pn?{minFilter:mn,magFilter:mn}:{};C.map!==null&&C.map.dispose(),C.map=new gn(s.x,s.y,G),C.map.texture.name=I.name+".shadowMap",C.camera.updateProjectionMatrix()}i.setRenderTarget(C.map),i.clear();const B=C.getViewportCount();for(let G=0;G<B;G++){const tt=C.getViewport(G);r.set(o.x*tt.x,o.y*tt.y,o.x*tt.z,o.y*tt.w),J.viewport(r),C.updateMatrices(I,G),n=C.getFrustum(),v(U,L,C.camera,I,this.type)}C.isPointLightShadow!==!0&&this.type===Pn&&S(C,L),C.needsUpdate=!1}m=this.type,x.needsUpdate=!1,i.setRenderTarget(T,E,O)};function S(b,U){const L=t.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new gn(s.x,s.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(U,null,L,u,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(U,null,L,p,_,null)}function M(b,U,L,T){let E=null;const O=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(O!==void 0)E=O;else if(E=L.isPointLight===!0?l:a,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const J=E.uuid,j=U.uuid;let Q=c[J];Q===void 0&&(Q={},c[J]=Q);let Y=Q[j];Y===void 0&&(Y=E.clone(),Q[j]=Y,U.addEventListener("dispose",A)),E=Y}if(E.visible=U.visible,E.wireframe=U.wireframe,T===Pn?E.side=U.shadowSide!==null?U.shadowSide:U.side:E.side=U.shadowSide!==null?U.shadowSide:d[U.side],E.alphaMap=U.alphaMap,E.alphaTest=U.alphaTest,E.map=U.map,E.clipShadows=U.clipShadows,E.clippingPlanes=U.clippingPlanes,E.clipIntersection=U.clipIntersection,E.displacementMap=U.displacementMap,E.displacementScale=U.displacementScale,E.displacementBias=U.displacementBias,E.wireframeLinewidth=U.wireframeLinewidth,E.linewidth=U.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const J=i.properties.get(E);J.light=L}return E}function v(b,U,L,T,E){if(b.visible===!1)return;if(b.layers.test(U.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===Pn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const j=t.update(b),Q=b.material;if(Array.isArray(Q)){const Y=j.groups;for(let X=0,I=Y.length;X<I;X++){const C=Y[X],k=Q[C.materialIndex];if(k&&k.visible){const B=M(b,k,T,E);b.onBeforeShadow(i,b,U,L,j,B,C),i.renderBufferDirect(L,null,j,B,b,C),b.onAfterShadow(i,b,U,L,j,B,C)}}}else if(Q.visible){const Y=M(b,Q,T,E);b.onBeforeShadow(i,b,U,L,j,Y,null),i.renderBufferDirect(L,null,j,Y,b,null),b.onAfterShadow(i,b,U,L,j,Y,null)}}const J=b.children;for(let j=0,Q=J.length;j<Q;j++)v(J[j],U,L,T,E)}function A(b){b.target.removeEventListener("dispose",A);for(const L in c){const T=c[L],E=b.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const Am={[rr]:ar,[lr]:dr,[cr]:ur,[Vi]:hr,[ar]:rr,[dr]:lr,[ur]:cr,[hr]:Vi};function Rm(i,t){function e(){let q=!1;const Et=new we;let K=null;const lt=new we(0,0,0,0);return{setMask:function(St){K!==St&&!q&&(i.colorMask(St,St,St,St),K=St)},setLocked:function(St){q=St},setClear:function(St,Tt,zt,qt,de){de===!0&&(St*=qt,Tt*=qt,zt*=qt),Et.set(St,Tt,zt,qt),lt.equals(Et)===!1&&(i.clearColor(St,Tt,zt,qt),lt.copy(Et))},reset:function(){q=!1,K=null,lt.set(-1,0,0,0)}}}function n(){let q=!1,Et=!1,K=null,lt=null,St=null;return{setReversed:function(Tt){if(Et!==Tt){const zt=t.get("EXT_clip_control");Et?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const qt=St;St=null,this.setClear(qt)}Et=Tt},getReversed:function(){return Et},setTest:function(Tt){Tt?Z(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(Tt){K!==Tt&&!q&&(i.depthMask(Tt),K=Tt)},setFunc:function(Tt){if(Et&&(Tt=Am[Tt]),lt!==Tt){switch(Tt){case rr:i.depthFunc(i.NEVER);break;case ar:i.depthFunc(i.ALWAYS);break;case lr:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case cr:i.depthFunc(i.EQUAL);break;case hr:i.depthFunc(i.GEQUAL);break;case dr:i.depthFunc(i.GREATER);break;case ur:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=Tt}},setLocked:function(Tt){q=Tt},setClear:function(Tt){St!==Tt&&(Et&&(Tt=1-Tt),i.clearDepth(Tt),St=Tt)},reset:function(){q=!1,K=null,lt=null,St=null,Et=!1}}}function s(){let q=!1,Et=null,K=null,lt=null,St=null,Tt=null,zt=null,qt=null,de=null;return{setTest:function(ie){q||(ie?Z(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(ie){Et!==ie&&!q&&(i.stencilMask(ie),Et=ie)},setFunc:function(ie,ve,Fe){(K!==ie||lt!==ve||St!==Fe)&&(i.stencilFunc(ie,ve,Fe),K=ie,lt=ve,St=Fe)},setOp:function(ie,ve,Fe){(Tt!==ie||zt!==ve||qt!==Fe)&&(i.stencilOp(ie,ve,Fe),Tt=ie,zt=ve,qt=Fe)},setLocked:function(ie){q=ie},setClear:function(ie){de!==ie&&(i.clearStencil(ie),de=ie)},reset:function(){q=!1,Et=null,K=null,lt=null,St=null,Tt=null,zt=null,qt=null,de=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,_=!1,x=null,m=null,S=null,M=null,v=null,A=null,b=null,U=new Jt(0,0,0),L=0,T=!1,E=null,O=null,J=null,j=null,Q=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,I=0;const C=i.getParameter(i.VERSION);C.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(C)[1]),X=I>=1):C.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),X=I>=2);let k=null,B={};const G=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),at=new we().fromArray(G),F=new we().fromArray(tt);function z(q,Et,K,lt){const St=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(q,Tt),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<K;zt++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(Et+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return Tt}const $={};$[i.TEXTURE_2D]=z(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),r.setFunc(Vi),vt(!1),It(Sa),Z(i.CULL_FACE),D(Dn);function Z(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function ot(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function _t(q,Et){return d[q]!==Et?(i.bindFramebuffer(q,Et),d[q]=Et,q===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Et),q===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function Rt(q,Et){let K=p,lt=!1;if(q){K=u.get(Et),K===void 0&&(K=[],u.set(Et,K));const St=q.textures;if(K.length!==St.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,zt=St.length;Tt<zt;Tt++)K[Tt]=i.COLOR_ATTACHMENT0+Tt;K.length=St.length,lt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,lt=!0);lt&&i.drawBuffers(K)}function xt(q){return g!==q?(i.useProgram(q),g=q,!0):!1}const it={[hi]:i.FUNC_ADD,[qc]:i.FUNC_SUBTRACT,[Zc]:i.FUNC_REVERSE_SUBTRACT};it[jc]=i.MIN,it[$c]=i.MAX;const mt={[Kc]:i.ZERO,[Jc]:i.ONE,[Qc]:i.SRC_COLOR,[sr]:i.SRC_ALPHA,[oh]:i.SRC_ALPHA_SATURATE,[ih]:i.DST_COLOR,[eh]:i.DST_ALPHA,[th]:i.ONE_MINUS_SRC_COLOR,[or]:i.ONE_MINUS_SRC_ALPHA,[sh]:i.ONE_MINUS_DST_COLOR,[nh]:i.ONE_MINUS_DST_ALPHA,[rh]:i.CONSTANT_COLOR,[ah]:i.ONE_MINUS_CONSTANT_COLOR,[lh]:i.CONSTANT_ALPHA,[ch]:i.ONE_MINUS_CONSTANT_ALPHA};function D(q,Et,K,lt,St,Tt,zt,qt,de,ie){if(q===Dn){_===!0&&(ot(i.BLEND),_=!1);return}if(_===!1&&(Z(i.BLEND),_=!0),q!==Yc){if(q!==x||ie!==T){if((m!==hi||v!==hi)&&(i.blendEquation(i.FUNC_ADD),m=hi,v=hi),ie)switch(q){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gs:i.blendFunc(i.ONE,i.ONE);break;case ba:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ta:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ba:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ta:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}S=null,M=null,A=null,b=null,U.set(0,0,0),L=0,x=q,T=ie}return}St=St||Et,Tt=Tt||K,zt=zt||lt,(Et!==m||St!==v)&&(i.blendEquationSeparate(it[Et],it[St]),m=Et,v=St),(K!==S||lt!==M||Tt!==A||zt!==b)&&(i.blendFuncSeparate(mt[K],mt[lt],mt[Tt],mt[zt]),S=K,M=lt,A=Tt,b=zt),(qt.equals(U)===!1||de!==L)&&(i.blendColor(qt.r,qt.g,qt.b,de),U.copy(qt),L=de),x=q,T=!1}function Pt(q,Et){q.side===_e?ot(i.CULL_FACE):Z(i.CULL_FACE);let K=q.side===Xe;Et&&(K=!K),vt(K),q.blending===Bi&&q.transparent===!1?D(Dn):D(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),r.setFunc(q.depthFunc),r.setTest(q.depthTest),r.setMask(q.depthWrite),o.setMask(q.colorWrite);const lt=q.stencilWrite;a.setTest(lt),lt&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ct(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function vt(q){E!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),E=q)}function It(q){q!==Wc?(Z(i.CULL_FACE),q!==O&&(q===Sa?i.cullFace(i.BACK):q===Xc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),O=q}function ht(q){q!==J&&(X&&i.lineWidth(q),J=q)}function Ct(q,Et,K){q?(Z(i.POLYGON_OFFSET_FILL),(j!==Et||Q!==K)&&(i.polygonOffset(Et,K),j=Et,Q=K)):ot(i.POLYGON_OFFSET_FILL)}function dt(q){q?Z(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function R(q){q===void 0&&(q=i.TEXTURE0+Y-1),k!==q&&(i.activeTexture(q),k=q)}function y(q,Et,K){K===void 0&&(k===null?K=i.TEXTURE0+Y-1:K=k);let lt=B[K];lt===void 0&&(lt={type:void 0,texture:void 0},B[K]=lt),(lt.type!==q||lt.texture!==Et)&&(k!==K&&(i.activeTexture(K),k=K),i.bindTexture(q,Et||$[q]),lt.type=q,lt.texture=Et)}function V(){const q=B[k];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function nt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ct(){try{i.compressedTexImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ft(){try{i.texSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Lt(){try{i.texStorage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function wt(){try{i.texStorage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Bt(q){at.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),at.copy(q))}function Dt(q){F.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),F.copy(q))}function Mt(q,Et){let K=c.get(Et);K===void 0&&(K=new WeakMap,c.set(Et,K));let lt=K.get(q);lt===void 0&&(lt=i.getUniformBlockIndex(Et,q.name),K.set(q,lt))}function yt(q,Et){const lt=c.get(Et).get(q);l.get(Et)!==lt&&(i.uniformBlockBinding(Et,lt,q.__bindingPointIndex),l.set(Et,lt))}function Vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},k=null,B={},d={},u=new WeakMap,p=[],g=null,_=!1,x=null,m=null,S=null,M=null,v=null,A=null,b=null,U=new Jt(0,0,0),L=0,T=!1,E=null,O=null,J=null,j=null,Q=null,at.set(0,0,i.canvas.width,i.canvas.height),F.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:Z,disable:ot,bindFramebuffer:_t,drawBuffers:Rt,useProgram:xt,setBlending:D,setMaterial:Pt,setFlipSided:vt,setCullFace:It,setLineWidth:ht,setPolygonOffset:Ct,setScissorTest:dt,activeTexture:R,bindTexture:y,unbindTexture:V,compressedTexImage2D:nt,compressedTexImage3D:ct,texImage2D:At,texImage3D:Ot,updateUBOMapping:Mt,uniformBlockBinding:yt,texStorage2D:Lt,texStorage3D:wt,texSubImage2D:rt,texSubImage3D:ft,compressedTexSubImage2D:ut,compressedTexSubImage3D:bt,scissor:Bt,viewport:Dt,reset:Vt}}function Cm(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,y){return p?new OffscreenCanvas(R,y):go("canvas")}function _(R,y,V){let nt=1;const ct=dt(R);if((ct.width>V||ct.height>V)&&(nt=V/Math.max(ct.width,ct.height)),nt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const rt=Math.floor(nt*ct.width),ft=Math.floor(nt*ct.height);d===void 0&&(d=g(rt,ft));const ut=y?g(rt,ft):d;return ut.width=rt,ut.height=ft,ut.getContext("2d").drawImage(R,0,0,rt,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+rt+"x"+ft+")."),ut}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),R;return R}function x(R){return R.generateMipmaps}function m(R){i.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,y,V,nt,ct=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let rt=y;if(y===i.RED&&(V===i.FLOAT&&(rt=i.R32F),V===i.HALF_FLOAT&&(rt=i.R16F),V===i.UNSIGNED_BYTE&&(rt=i.R8)),y===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(rt=i.R8UI),V===i.UNSIGNED_SHORT&&(rt=i.R16UI),V===i.UNSIGNED_INT&&(rt=i.R32UI),V===i.BYTE&&(rt=i.R8I),V===i.SHORT&&(rt=i.R16I),V===i.INT&&(rt=i.R32I)),y===i.RG&&(V===i.FLOAT&&(rt=i.RG32F),V===i.HALF_FLOAT&&(rt=i.RG16F),V===i.UNSIGNED_BYTE&&(rt=i.RG8)),y===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(rt=i.RG8UI),V===i.UNSIGNED_SHORT&&(rt=i.RG16UI),V===i.UNSIGNED_INT&&(rt=i.RG32UI),V===i.BYTE&&(rt=i.RG8I),V===i.SHORT&&(rt=i.RG16I),V===i.INT&&(rt=i.RG32I)),y===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),V===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),V===i.UNSIGNED_INT&&(rt=i.RGB32UI),V===i.BYTE&&(rt=i.RGB8I),V===i.SHORT&&(rt=i.RGB16I),V===i.INT&&(rt=i.RGB32I)),y===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),V===i.UNSIGNED_INT&&(rt=i.RGBA32UI),V===i.BYTE&&(rt=i.RGBA8I),V===i.SHORT&&(rt=i.RGBA16I),V===i.INT&&(rt=i.RGBA32I)),y===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),y===i.RGBA){const ft=ct?po:he.getTransfer(nt);V===i.FLOAT&&(rt=i.RGBA32F),V===i.HALF_FLOAT&&(rt=i.RGBA16F),V===i.UNSIGNED_BYTE&&(rt=ft===ge?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function v(R,y){let V;return R?y===null||y===fi||y===Yi?V=i.DEPTH24_STENCIL8:y===Ln?V=i.DEPTH32F_STENCIL8:y===xs&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===fi||y===Yi?V=i.DEPTH_COMPONENT24:y===Ln?V=i.DEPTH_COMPONENT32F:y===xs&&(V=i.DEPTH_COMPONENT16),V}function A(R,y){return x(R)===!0||R.isFramebufferTexture&&R.minFilter!==mn&&R.minFilter!==xn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function b(R){const y=R.target;y.removeEventListener("dispose",b),L(y),y.isVideoTexture&&h.delete(y)}function U(R){const y=R.target;y.removeEventListener("dispose",U),E(y)}function L(R){const y=n.get(R);if(y.__webglInit===void 0)return;const V=R.source,nt=u.get(V);if(nt){const ct=nt[y.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&T(R),Object.keys(nt).length===0&&u.delete(V)}n.remove(R)}function T(R){const y=n.get(R);i.deleteTexture(y.__webglTexture);const V=R.source,nt=u.get(V);delete nt[y.__cacheKey],r.memory.textures--}function E(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(y.__webglFramebuffer[nt]))for(let ct=0;ct<y.__webglFramebuffer[nt].length;ct++)i.deleteFramebuffer(y.__webglFramebuffer[nt][ct]);else i.deleteFramebuffer(y.__webglFramebuffer[nt]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[nt])}else{if(Array.isArray(y.__webglFramebuffer))for(let nt=0;nt<y.__webglFramebuffer.length;nt++)i.deleteFramebuffer(y.__webglFramebuffer[nt]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let nt=0;nt<y.__webglColorRenderbuffer.length;nt++)y.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[nt]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=R.textures;for(let nt=0,ct=V.length;nt<ct;nt++){const rt=n.get(V[nt]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),r.memory.textures--),n.remove(V[nt])}n.remove(R)}let O=0;function J(){O=0}function j(){const R=O;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),O+=1,R}function Q(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function Y(R,y){const V=n.get(R);if(R.isVideoTexture&&ht(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const nt=R.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(V,R,y);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+y)}function X(R,y){const V=n.get(R);if(R.version>0&&V.__version!==R.version){F(V,R,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+y)}function I(R,y){const V=n.get(R);if(R.version>0&&V.__version!==R.version){F(V,R,y);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+y)}function C(R,y){const V=n.get(R);if(R.version>0&&V.__version!==R.version){z(V,R,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+y)}const k={[ws]:i.REPEAT,[Te]:i.CLAMP_TO_EDGE,[mr]:i.MIRRORED_REPEAT},B={[mn]:i.NEAREST,[fh]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[bo]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},G={[wh]:i.NEVER,[Sh]:i.ALWAYS,[xh]:i.LESS,[rc]:i.LEQUAL,[_h]:i.EQUAL,[yh]:i.GEQUAL,[vh]:i.GREATER,[Mh]:i.NOTEQUAL};function tt(R,y){if(y.type===Ln&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===xn||y.magFilter===bo||y.magFilter===Ls||y.magFilter===ui||y.minFilter===xn||y.minFilter===bo||y.minFilter===Ls||y.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,k[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,k[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,k[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,B[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,B[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,G[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===mn||y.minFilter!==Ls&&y.minFilter!==ui||y.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function at(R,y){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",b));const nt=y.source;let ct=u.get(nt);ct===void 0&&(ct={},u.set(nt,ct));const rt=Q(y);if(rt!==R.__cacheKey){ct[rt]===void 0&&(ct[rt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,V=!0),ct[rt].usedTimes++;const ft=ct[R.__cacheKey];ft!==void 0&&(ct[R.__cacheKey].usedTimes--,ft.usedTimes===0&&T(y)),R.__cacheKey=rt,R.__webglTexture=ct[rt].texture}return V}function F(R,y,V){let nt=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(nt=i.TEXTURE_3D);const ct=at(R,y),rt=y.source;e.bindTexture(nt,R.__webglTexture,i.TEXTURE0+V);const ft=n.get(rt);if(rt.version!==ft.__version||ct===!0){e.activeTexture(i.TEXTURE0+V);const ut=he.getPrimaries(he.workingColorSpace),bt=y.colorSpace===Yn?null:he.getPrimaries(y.colorSpace),Lt=y.colorSpace===Yn||ut===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let wt=_(y.image,!1,s.maxTextureSize);wt=Ct(y,wt);const At=o.convert(y.format,y.colorSpace),Ot=o.convert(y.type);let Bt=M(y.internalFormat,At,Ot,y.colorSpace,y.isVideoTexture);tt(nt,y);let Dt;const Mt=y.mipmaps,yt=y.isVideoTexture!==!0,Vt=ft.__version===void 0||ct===!0,q=rt.dataReady,Et=A(y,wt);if(y.isDepthTexture)Bt=v(y.format===qi,y.type),Vt&&(yt?e.texStorage2D(i.TEXTURE_2D,1,Bt,wt.width,wt.height):e.texImage2D(i.TEXTURE_2D,0,Bt,wt.width,wt.height,0,At,Ot,null));else if(y.isDataTexture)if(Mt.length>0){yt&&Vt&&e.texStorage2D(i.TEXTURE_2D,Et,Bt,Mt[0].width,Mt[0].height);for(let K=0,lt=Mt.length;K<lt;K++)Dt=Mt[K],yt?q&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Dt.width,Dt.height,At,Ot,Dt.data):e.texImage2D(i.TEXTURE_2D,K,Bt,Dt.width,Dt.height,0,At,Ot,Dt.data);y.generateMipmaps=!1}else yt?(Vt&&e.texStorage2D(i.TEXTURE_2D,Et,Bt,wt.width,wt.height),q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt.width,wt.height,At,Ot,wt.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,wt.width,wt.height,0,At,Ot,wt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){yt&&Vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Bt,Mt[0].width,Mt[0].height,wt.depth);for(let K=0,lt=Mt.length;K<lt;K++)if(Dt=Mt[K],y.format!==pn)if(At!==null)if(yt){if(q)if(y.layerUpdates.size>0){const St=ll(Dt.width,Dt.height,y.format,y.type);for(const Tt of y.layerUpdates){const zt=Dt.data.subarray(Tt*St/Dt.data.BYTES_PER_ELEMENT,(Tt+1)*St/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Tt,Dt.width,Dt.height,1,At,zt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Dt.width,Dt.height,wt.depth,At,Dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Bt,Dt.width,Dt.height,wt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else yt?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Dt.width,Dt.height,wt.depth,At,Ot,Dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,Bt,Dt.width,Dt.height,wt.depth,0,At,Ot,Dt.data)}else{yt&&Vt&&e.texStorage2D(i.TEXTURE_2D,Et,Bt,Mt[0].width,Mt[0].height);for(let K=0,lt=Mt.length;K<lt;K++)Dt=Mt[K],y.format!==pn?At!==null?yt?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Dt.width,Dt.height,At,Dt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,Bt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?q&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Dt.width,Dt.height,At,Ot,Dt.data):e.texImage2D(i.TEXTURE_2D,K,Bt,Dt.width,Dt.height,0,At,Ot,Dt.data)}else if(y.isDataArrayTexture)if(yt){if(Vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Bt,wt.width,wt.height,wt.depth),q)if(y.layerUpdates.size>0){const K=ll(wt.width,wt.height,y.format,y.type);for(const lt of y.layerUpdates){const St=wt.data.subarray(lt*K/wt.data.BYTES_PER_ELEMENT,(lt+1)*K/wt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,wt.width,wt.height,1,At,Ot,St)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,At,Ot,wt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,wt.width,wt.height,wt.depth,0,At,Ot,wt.data);else if(y.isData3DTexture)yt?(Vt&&e.texStorage3D(i.TEXTURE_3D,Et,Bt,wt.width,wt.height,wt.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,At,Ot,wt.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,wt.width,wt.height,wt.depth,0,At,Ot,wt.data);else if(y.isFramebufferTexture){if(Vt)if(yt)e.texStorage2D(i.TEXTURE_2D,Et,Bt,wt.width,wt.height);else{let K=wt.width,lt=wt.height;for(let St=0;St<Et;St++)e.texImage2D(i.TEXTURE_2D,St,Bt,K,lt,0,At,Ot,null),K>>=1,lt>>=1}}else if(Mt.length>0){if(yt&&Vt){const K=dt(Mt[0]);e.texStorage2D(i.TEXTURE_2D,Et,Bt,K.width,K.height)}for(let K=0,lt=Mt.length;K<lt;K++)Dt=Mt[K],yt?q&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,At,Ot,Dt):e.texImage2D(i.TEXTURE_2D,K,Bt,At,Ot,Dt);y.generateMipmaps=!1}else if(yt){if(Vt){const K=dt(wt);e.texStorage2D(i.TEXTURE_2D,Et,Bt,K.width,K.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Ot,wt)}else e.texImage2D(i.TEXTURE_2D,0,Bt,At,Ot,wt);x(y)&&m(nt),ft.__version=rt.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function z(R,y,V){if(y.image.length!==6)return;const nt=at(R,y),ct=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);const rt=n.get(ct);if(ct.version!==rt.__version||nt===!0){e.activeTexture(i.TEXTURE0+V);const ft=he.getPrimaries(he.workingColorSpace),ut=y.colorSpace===Yn?null:he.getPrimaries(y.colorSpace),bt=y.colorSpace===Yn||ft===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Lt=y.isCompressedTexture||y.image[0].isCompressedTexture,wt=y.image[0]&&y.image[0].isDataTexture,At=[];for(let lt=0;lt<6;lt++)!Lt&&!wt?At[lt]=_(y.image[lt],!0,s.maxCubemapSize):At[lt]=wt?y.image[lt].image:y.image[lt],At[lt]=Ct(y,At[lt]);const Ot=At[0],Bt=o.convert(y.format,y.colorSpace),Dt=o.convert(y.type),Mt=M(y.internalFormat,Bt,Dt,y.colorSpace),yt=y.isVideoTexture!==!0,Vt=rt.__version===void 0||nt===!0,q=ct.dataReady;let Et=A(y,Ot);tt(i.TEXTURE_CUBE_MAP,y);let K;if(Lt){yt&&Vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Mt,Ot.width,Ot.height);for(let lt=0;lt<6;lt++){K=At[lt].mipmaps;for(let St=0;St<K.length;St++){const Tt=K[St];y.format!==pn?Bt!==null?yt?q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,0,0,Tt.width,Tt.height,Bt,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,Mt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):yt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,0,0,Tt.width,Tt.height,Bt,Dt,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St,Mt,Tt.width,Tt.height,0,Bt,Dt,Tt.data)}}}else{if(K=y.mipmaps,yt&&Vt){K.length>0&&Et++;const lt=dt(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Mt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(wt){yt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,At[lt].width,At[lt].height,Bt,Dt,At[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Mt,At[lt].width,At[lt].height,0,Bt,Dt,At[lt].data);for(let St=0;St<K.length;St++){const zt=K[St].image[lt].image;yt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,0,0,zt.width,zt.height,Bt,Dt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,Mt,zt.width,zt.height,0,Bt,Dt,zt.data)}}else{yt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Bt,Dt,At[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Mt,Bt,Dt,At[lt]);for(let St=0;St<K.length;St++){const Tt=K[St];yt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,0,0,Bt,Dt,Tt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St+1,Mt,Bt,Dt,Tt.image[lt])}}}x(y)&&m(i.TEXTURE_CUBE_MAP),rt.__version=ct.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function $(R,y,V,nt,ct,rt){const ft=o.convert(V.format,V.colorSpace),ut=o.convert(V.type),bt=M(V.internalFormat,ft,ut,V.colorSpace),Lt=n.get(y),wt=n.get(V);if(wt.__renderTarget=y,!Lt.__hasExternalTextures){const At=Math.max(1,y.width>>rt),Ot=Math.max(1,y.height>>rt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,rt,bt,At,Ot,y.depth,0,ft,ut,null):e.texImage2D(ct,rt,bt,At,Ot,0,ft,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),It(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,ct,wt.__webglTexture,0,vt(y)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,ct,wt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(R,y,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){const nt=y.depthTexture,ct=nt&&nt.isDepthTexture?nt.type:null,rt=v(y.stencilBuffer,ct),ft=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=vt(y);It(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,rt,y.width,y.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,rt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,rt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,R)}else{const nt=y.textures;for(let ct=0;ct<nt.length;ct++){const rt=nt[ct],ft=o.convert(rt.format,rt.colorSpace),ut=o.convert(rt.type),bt=M(rt.internalFormat,ft,ut,rt.colorSpace),Lt=vt(y);V&&It(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,bt,y.width,y.height):It(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,bt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,bt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=n.get(y.depthTexture);nt.__renderTarget=y,(!nt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const ct=nt.__webglTexture,rt=vt(y);if(y.depthTexture.format===ki)It(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(y.depthTexture.format===qi)It(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function _t(R){const y=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const nt=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),nt){const ct=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,nt.removeEventListener("dispose",ct)};nt.addEventListener("dispose",ct),y.__depthDisposeCallback=ct}y.__boundDepthTexture=nt}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ot(y.__webglFramebuffer,R)}else if(V){y.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[nt]),y.__webglDepthbuffer[nt]===void 0)y.__webglDepthbuffer[nt]=i.createRenderbuffer(),Z(y.__webglDepthbuffer[nt],R,!1);else{const ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Z(y.__webglDepthbuffer,R,!1);else{const nt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(R,y,V){const nt=n.get(R);y!==void 0&&$(nt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&_t(R)}function xt(R){const y=R.texture,V=n.get(R),nt=n.get(y);R.addEventListener("dispose",U);const ct=R.textures,rt=R.isWebGLCubeRenderTarget===!0,ft=ct.length>1;if(ft||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=y.version,r.memory.textures++),rt){V.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[ut]=[];for(let bt=0;bt<y.mipmaps.length;bt++)V.__webglFramebuffer[ut][bt]=i.createFramebuffer()}else V.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let ut=0;ut<y.mipmaps.length;ut++)V.__webglFramebuffer[ut]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ft)for(let ut=0,bt=ct.length;ut<bt;ut++){const Lt=n.get(ct[ut]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),r.memory.textures++)}if(R.samples>0&&It(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ut=0;ut<ct.length;ut++){const bt=ct[ut];V.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ut]);const Lt=o.convert(bt.format,bt.colorSpace),wt=o.convert(bt.type),At=M(bt.internalFormat,Lt,wt,bt.colorSpace,R.isXRRenderTarget===!0),Ot=vt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,At,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,V.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Z(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),tt(i.TEXTURE_CUBE_MAP,y);for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0)for(let bt=0;bt<y.mipmaps.length;bt++)$(V.__webglFramebuffer[ut][bt],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,bt);else $(V.__webglFramebuffer[ut],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);x(y)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let ut=0,bt=ct.length;ut<bt;ut++){const Lt=ct[ut],wt=n.get(Lt);e.bindTexture(i.TEXTURE_2D,wt.__webglTexture),tt(i.TEXTURE_2D,Lt),$(V.__webglFramebuffer,R,Lt,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),x(Lt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ut=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,nt.__webglTexture),tt(ut,y),y.mipmaps&&y.mipmaps.length>0)for(let bt=0;bt<y.mipmaps.length;bt++)$(V.__webglFramebuffer[bt],R,y,i.COLOR_ATTACHMENT0,ut,bt);else $(V.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,ut,0);x(y)&&m(ut),e.unbindTexture()}R.depthBuffer&&_t(R)}function it(R){const y=R.textures;for(let V=0,nt=y.length;V<nt;V++){const ct=y[V];if(x(ct)){const rt=S(R),ft=n.get(ct).__webglTexture;e.bindTexture(rt,ft),m(rt),e.unbindTexture()}}}const mt=[],D=[];function Pt(R){if(R.samples>0){if(It(R)===!1){const y=R.textures,V=R.width,nt=R.height;let ct=i.COLOR_BUFFER_BIT;const rt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(R),ut=y.length>1;if(ut)for(let bt=0;bt<y.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let bt=0;bt<y.length;bt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[bt]);const Lt=n.get(y[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,V,nt,0,0,V,nt,ct,i.NEAREST),l===!0&&(mt.length=0,D.length=0,mt.push(i.COLOR_ATTACHMENT0+bt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(mt.push(rt),D.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let bt=0;bt<y.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[bt]);const Lt=n.get(y[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function vt(R){return Math.min(s.maxSamples,R.samples)}function It(R){const y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ht(R){const y=r.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Ct(R,y){const V=R.colorSpace,nt=R.format,ct=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Zi&&V!==Yn&&(he.getTransfer(V)===ge?(nt!==pn||ct!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function dt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=J,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=I,this.setTextureCube=C,this.rebindTextures=Rt,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=$,this.useMultisampledRTT=It}function Pm(i,t){function e(n,s=Yn){let o;const r=he.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===ta)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ea)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jl)return i.BYTE;if(n===$l)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===Qr)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===Un)return i.HALF_FLOAT;if(n===Jl)return i.ALPHA;if(n===Ql)return i.RGB;if(n===pn)return i.RGBA;if(n===tc)return i.LUMINANCE;if(n===ec)return i.LUMINANCE_ALPHA;if(n===ki)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===nc)return i.RED;if(n===na)return i.RED_INTEGER;if(n===ic)return i.RG;if(n===ia)return i.RG_INTEGER;if(n===sa)return i.RGBA_INTEGER;if(n===ro||n===ao||n===lo||n===co)if(r===ge)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ro)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===co)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ro)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ao)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===co)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gr||n===wr||n===xr||n===_r)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===gr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_r)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vr||n===Mr||n===yr)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===vr||n===Mr)return r===ge?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===yr)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sr||n===br||n===Tr||n===Er||n===Ar||n===Rr||n===Cr||n===Pr||n===Lr||n===Ir||n===Dr||n===Ur||n===Nr||n===Fr)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Sr)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===br)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tr)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Er)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ar)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rr)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cr)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pr)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lr)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ir)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dr)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ur)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nr)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fr)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ho||n===Or||n===Br)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===ho)return r===ge?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Or)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Br)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sc||n===kr||n===zr||n===Hr)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===ho)return o.COMPRESSED_RED_RGTC1_EXT;if(n===kr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hr)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Lm={type:"move"};class ir{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const x=e.getJointPose(_,n),m=this._getHandJoint(c,_);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Im=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dm=`
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

}`;class Um{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ye,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pe({vertexShader:Im,fragmentShader:Dm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new f(new ae(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nm extends Ji{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const _=new Um,x=e.getContextAttributes();let m=null,S=null;const M=[],v=[],A=new Ut;let b=null;const U=new en;U.viewport=new we;const L=new en;L.viewport=new we;const T=[U,L],E=new t0;let O=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let z=M[F];return z===void 0&&(z=new ir,M[F]=z),z.getTargetRaySpace()},this.getControllerGrip=function(F){let z=M[F];return z===void 0&&(z=new ir,M[F]=z),z.getGripSpace()},this.getHand=function(F){let z=M[F];return z===void 0&&(z=new ir,M[F]=z),z.getHandSpace()};function j(F){const z=v.indexOf(F.inputSource);if(z===-1)return;const $=M[z];$!==void 0&&($.update(F.inputSource,F.frame,c||r),$.dispatchEvent({type:F.type,data:F.inputSource}))}function Q(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",Y);for(let F=0;F<M.length;F++){const z=v[F];z!==null&&(v[F]=null,M[F].disconnect(z))}O=null,J=null,_.reset(),t.setRenderTarget(m),p=null,u=null,d=null,s=null,S=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",Y),x.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let $=null,Z=null,ot=null;x.depth&&(ot=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=x.stencil?qi:ki,Z=x.stencil?Yi:fi);const _t={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:o};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(_t),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new gn(u.textureWidth,u.textureHeight,{format:pn,type:kn,depthTexture:new wc(u.textureWidth,u.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}else{const $={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new gn(p.framebufferWidth,p.framebufferHeight,{format:pn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(F){for(let z=0;z<F.removed.length;z++){const $=F.removed[z],Z=v.indexOf($);Z>=0&&(v[Z]=null,M[Z].disconnect($))}for(let z=0;z<F.added.length;z++){const $=F.added[z];let Z=v.indexOf($);if(Z===-1){for(let _t=0;_t<M.length;_t++)if(_t>=v.length){v.push($),Z=_t;break}else if(v[_t]===null){v[_t]=$,Z=_t;break}if(Z===-1)break}const ot=M[Z];ot&&ot.connect($)}}const X=new w,I=new w;function C(F,z,$){X.setFromMatrixPosition(z.matrixWorld),I.setFromMatrixPosition($.matrixWorld);const Z=X.distanceTo(I),ot=z.projectionMatrix.elements,_t=$.projectionMatrix.elements,Rt=ot[14]/(ot[10]-1),xt=ot[14]/(ot[10]+1),it=(ot[9]+1)/ot[5],mt=(ot[9]-1)/ot[5],D=(ot[8]-1)/ot[0],Pt=(_t[8]+1)/_t[0],vt=Rt*D,It=Rt*Pt,ht=Z/(-D+Pt),Ct=ht*-D;if(z.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Ct),F.translateZ(ht),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),ot[10]===-1)F.projectionMatrix.copy(z.projectionMatrix),F.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{const dt=Rt+ht,R=xt+ht,y=vt-Ct,V=It+(Z-Ct),nt=it*xt/R*dt,ct=mt*xt/R*dt;F.projectionMatrix.makePerspective(y,V,nt,ct,dt,R),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function k(F,z){z===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(z.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let z=F.near,$=F.far;_.texture!==null&&(_.depthNear>0&&(z=_.depthNear),_.depthFar>0&&($=_.depthFar)),E.near=L.near=U.near=z,E.far=L.far=U.far=$,(O!==E.near||J!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),O=E.near,J=E.far),U.layers.mask=F.layers.mask|2,L.layers.mask=F.layers.mask|4,E.layers.mask=U.layers.mask|L.layers.mask;const Z=F.parent,ot=E.cameras;k(E,Z);for(let _t=0;_t<ot.length;_t++)k(ot[_t],Z);ot.length===2?C(E,U,L):E.projectionMatrix.copy(U.projectionMatrix),B(F,E,Z)};function B(F,z,$){$===null?F.matrix.copy(z.matrixWorld):(F.matrix.copy($.matrixWorld),F.matrix.invert(),F.matrix.multiply(z.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(z.projectionMatrix),F.projectionMatrixInverse.copy(z.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=_s*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(F){l=F,u!==null&&(u.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let G=null;function tt(F,z){if(h=z.getViewerPose(c||r),g=z,h!==null){const $=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let Z=!1;$.length!==E.cameras.length&&(E.cameras.length=0,Z=!0);for(let _t=0;_t<$.length;_t++){const Rt=$[_t];let xt=null;if(p!==null)xt=p.getViewport(Rt);else{const mt=d.getViewSubImage(u,Rt);xt=mt.viewport,_t===0&&(t.setRenderTargetTextures(S,mt.colorTexture,u.ignoreDepthValues?void 0:mt.depthStencilTexture),t.setRenderTarget(S))}let it=T[_t];it===void 0&&(it=new en,it.layers.enable(_t),it.viewport=new we,T[_t]=it),it.matrix.fromArray(Rt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Rt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(xt.x,xt.y,xt.width,xt.height),_t===0&&(E.matrix.copy(it.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Z===!0&&E.cameras.push(it)}const ot=s.enabledFeatures;if(ot&&ot.includes("depth-sensing")){const _t=d.getDepthInformation($[0]);_t&&_t.isValid&&_t.texture&&_.init(t,_t,s.renderState)}}for(let $=0;$<M.length;$++){const Z=v[$],ot=M[$];Z!==null&&ot!==void 0&&ot.update(Z,z,c||r)}G&&G(F,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),g=null}const at=new Rc;at.setAnimationLoop(tt),this.setAnimationLoop=function(F){G=F},this.dispose=function(){}}}const ai=new Mn,Fm=new xe;function Om(i,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function n(x,m){m.color.getRGB(x.fogColor.value,fc(i)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,S,M,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(x,m):m.isMeshToonMaterial?(o(x,m),d(x,m)):m.isMeshPhongMaterial?(o(x,m),h(x,m)):m.isMeshStandardMaterial?(o(x,m),u(x,m),m.isMeshPhysicalMaterial&&p(x,m,v)):m.isMeshMatcapMaterial?(o(x,m),g(x,m)):m.isMeshDepthMaterial?o(x,m):m.isMeshDistanceMaterial?(o(x,m),_(x,m)):m.isMeshNormalMaterial?o(x,m):m.isLineBasicMaterial?(r(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?l(x,m,S,M):m.isSpriteMaterial?c(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===Xe&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===Xe&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);const S=t.get(m),M=S.envMap,v=S.envMapRotation;M&&(x.envMap.value=M,ai.copy(v),ai.x*=-1,ai.y*=-1,ai.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),x.envMapRotation.value.setFromMatrix4(Fm.makeRotationFromEuler(ai)),x.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function r(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function l(x,m,S,M){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*S,x.scale.value=M*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function c(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function d(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function u(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function p(x,m,S){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xe&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=S.texture,x.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,m){m.matcap&&(x.matcap.value=m.matcap)}function _(x,m){const S=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(S.matrixWorld),x.nearDistance.value=S.shadow.camera.near,x.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Bm(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const v=M.program;n.uniformBlockBinding(S,v)}function c(S,M){let v=s[S.id];v===void 0&&(g(S),v=h(S),s[S.id]=v,S.addEventListener("dispose",x));const A=M.program;n.updateUBOMapping(S,A);const b=t.render.frame;o[S.id]!==b&&(u(S),o[S.id]=b)}function h(S){const M=d();S.__bindingPointIndex=M;const v=i.createBuffer(),A=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function d(){for(let S=0;S<a;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const M=s[S.id],v=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,U=v.length;b<U;b++){const L=Array.isArray(v[b])?v[b]:[v[b]];for(let T=0,E=L.length;T<E;T++){const O=L[T];if(p(O,b,T,A)===!0){const J=O.__offset,j=Array.isArray(O.value)?O.value:[O.value];let Q=0;for(let Y=0;Y<j.length;Y++){const X=j[Y],I=_(X);typeof X=="number"||typeof X=="boolean"?(O.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,J+Q,O.__data)):X.isMatrix3?(O.__data[0]=X.elements[0],O.__data[1]=X.elements[1],O.__data[2]=X.elements[2],O.__data[3]=0,O.__data[4]=X.elements[3],O.__data[5]=X.elements[4],O.__data[6]=X.elements[5],O.__data[7]=0,O.__data[8]=X.elements[6],O.__data[9]=X.elements[7],O.__data[10]=X.elements[8],O.__data[11]=0):(X.toArray(O.__data,Q),Q+=I.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,J,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,M,v,A){const b=S.value,U=M+"_"+v;if(A[U]===void 0)return typeof b=="number"||typeof b=="boolean"?A[U]=b:A[U]=b.clone(),!0;{const L=A[U];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return A[U]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function g(S){const M=S.uniforms;let v=0;const A=16;for(let U=0,L=M.length;U<L;U++){const T=Array.isArray(M[U])?M[U]:[M[U]];for(let E=0,O=T.length;E<O;E++){const J=T[E],j=Array.isArray(J.value)?J.value:[J.value];for(let Q=0,Y=j.length;Q<Y;Q++){const X=j[Q],I=_(X),C=v%A,k=C%I.boundary,B=C+k;v+=k,B!==0&&A-B<I.storage&&(v+=A-B),J.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=v,v+=I.storage}}}const b=v%A;return b>0&&(v+=A-b),S.__size=v,S.__cache={},this}function _(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function x(S){const M=S.target;M.removeEventListener("dispose",x);const v=r.indexOf(M.__bindingPointIndex);r.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function m(){for(const S in s)i.deleteBuffer(s[S]);r=[],s={},o={}}return{bind:l,update:c,dispose:m}}class km{constructor(t={}){const{canvas:e=Hh(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=Zn,this.toneMappingExposure=1;const v=this;let A=!1,b=0,U=0,L=null,T=-1,E=null;const O=new we,J=new we;let j=null;const Q=new Jt(0);let Y=0,X=e.width,I=e.height,C=1,k=null,B=null;const G=new we(0,0,X,I),tt=new we(0,0,X,I);let at=!1;const F=new aa;let z=!1,$=!1;this.transmissionResolutionScale=1;const Z=new xe,ot=new xe,_t=new w,Rt=new we,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function mt(){return L===null?C:1}let D=n;function Pt(P,et){return e.getContext(P,et)}try{const P={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kr}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),D===null){const et="webgl2";if(D=Pt(et,P),D===null)throw Pt(et)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let vt,It,ht,Ct,dt,R,y,V,nt,ct,rt,ft,ut,bt,Lt,wt,At,Ot,Bt,Dt,Mt,yt,Vt,q;function Et(){vt=new Zf(D),vt.init(),yt=new Pm(D,vt),It=new Gf(D,vt,t,yt),ht=new Rm(D,vt),It.reverseDepthBuffer&&u&&ht.buffers.depth.setReversed(!0),Ct=new Kf(D),dt=new mm,R=new Cm(D,vt,ht,dt,It,yt,Ct),y=new Wf(v),V=new qf(v),nt=new i0(D),Vt=new zf(D,nt),ct=new jf(D,nt,Ct,Vt),rt=new Qf(D,ct,nt,Ct),Bt=new Jf(D,It,R),wt=new Vf(dt),ft=new pm(v,y,V,vt,It,Vt,wt),ut=new Om(v,dt),bt=new wm,Lt=new Sm(vt),Ot=new kf(v,y,V,ht,rt,p,l),At=new Em(v,rt,It),q=new Bm(D,Ct,It,ht),Dt=new Hf(D,vt,Ct),Mt=new $f(D,vt,Ct),Ct.programs=ft.programs,v.capabilities=It,v.extensions=vt,v.properties=dt,v.renderLists=bt,v.shadowMap=At,v.state=ht,v.info=Ct}Et();const K=new Nm(v,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const P=vt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=vt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(P){P!==void 0&&(C=P,this.setSize(X,I,!1))},this.getSize=function(P){return P.set(X,I)},this.setSize=function(P,et,pt=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=P,I=et,e.width=Math.floor(P*C),e.height=Math.floor(et*C),pt===!0&&(e.style.width=P+"px",e.style.height=et+"px"),this.setViewport(0,0,P,et)},this.getDrawingBufferSize=function(P){return P.set(X*C,I*C).floor()},this.setDrawingBufferSize=function(P,et,pt){X=P,I=et,C=pt,e.width=Math.floor(P*pt),e.height=Math.floor(et*pt),this.setViewport(0,0,P,et)},this.getCurrentViewport=function(P){return P.copy(O)},this.getViewport=function(P){return P.copy(G)},this.setViewport=function(P,et,pt,gt){P.isVector4?G.set(P.x,P.y,P.z,P.w):G.set(P,et,pt,gt),ht.viewport(O.copy(G).multiplyScalar(C).round())},this.getScissor=function(P){return P.copy(tt)},this.setScissor=function(P,et,pt,gt){P.isVector4?tt.set(P.x,P.y,P.z,P.w):tt.set(P,et,pt,gt),ht.scissor(J.copy(tt).multiplyScalar(C).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(P){ht.setScissorTest(at=P)},this.setOpaqueSort=function(P){k=P},this.setTransparentSort=function(P){B=P},this.getClearColor=function(P){return P.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(P=!0,et=!0,pt=!0){let gt=0;if(P){let st=!1;if(L!==null){const Nt=L.texture.format;st=Nt===sa||Nt===ia||Nt===na}if(st){const Nt=L.texture.type,Gt=Nt===kn||Nt===fi||Nt===xs||Nt===Yi||Nt===ta||Nt===ea,Wt=Ot.getClearColor(),Yt=Ot.getClearAlpha(),Qt=Wt.r,te=Wt.g,jt=Wt.b;Gt?(g[0]=Qt,g[1]=te,g[2]=jt,g[3]=Yt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Qt,_[1]=te,_[2]=jt,_[3]=Yt,D.clearBufferiv(D.COLOR,0,_))}else gt|=D.COLOR_BUFFER_BIT}et&&(gt|=D.DEPTH_BUFFER_BIT),pt&&(gt|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(gt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),Ot.dispose(),bt.dispose(),Lt.dispose(),dt.dispose(),y.dispose(),V.dispose(),rt.dispose(),Vt.dispose(),q.dispose(),ft.dispose(),K.dispose(),K.removeEventListener("sessionstart",ze),K.removeEventListener("sessionend",bn),Oe.stop()};function lt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=Ct.autoReset,et=At.enabled,pt=At.autoUpdate,gt=At.needsUpdate,st=At.type;Et(),Ct.autoReset=P,At.enabled=et,At.autoUpdate=pt,At.needsUpdate=gt,At.type=st}function Tt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function zt(P){const et=P.target;et.removeEventListener("dispose",zt),qt(et)}function qt(P){de(P),dt.remove(P)}function de(P){const et=dt.get(P).programs;et!==void 0&&(et.forEach(function(pt){ft.releaseProgram(pt)}),P.isShaderMaterial&&ft.releaseShaderCache(P))}this.renderBufferDirect=function(P,et,pt,gt,st,Nt){et===null&&(et=xt);const Gt=st.isMesh&&st.matrixWorld.determinant()<0,Wt=Bc(P,et,pt,gt,st);ht.setMaterial(gt,Gt);let Yt=pt.index,Qt=1;if(gt.wireframe===!0){if(Yt=ct.getWireframeAttribute(pt),Yt===void 0)return;Qt=2}const te=pt.drawRange,jt=pt.attributes.position;let ce=te.start*Qt,fe=(te.start+te.count)*Qt;Nt!==null&&(ce=Math.max(ce,Nt.start*Qt),fe=Math.min(fe,(Nt.start+Nt.count)*Qt)),Yt!==null?(ce=Math.max(ce,0),fe=Math.min(fe,Yt.count)):jt!=null&&(ce=Math.max(ce,0),fe=Math.min(fe,jt.count));const Ae=fe-ce;if(Ae<0||Ae===1/0)return;Vt.setup(st,gt,Wt,pt,Yt);let Ee,ue=Dt;if(Yt!==null&&(Ee=nt.get(Yt),ue=Mt,ue.setIndex(Ee)),st.isMesh)gt.wireframe===!0?(ht.setLineWidth(gt.wireframeLinewidth*mt()),ue.setMode(D.LINES)):ue.setMode(D.TRIANGLES);else if(st.isLine){let Kt=gt.linewidth;Kt===void 0&&(Kt=1),ht.setLineWidth(Kt*mt()),st.isLineSegments?ue.setMode(D.LINES):st.isLineLoop?ue.setMode(D.LINE_LOOP):ue.setMode(D.LINE_STRIP)}else st.isPoints?ue.setMode(D.POINTS):st.isSprite&&ue.setMode(D.TRIANGLES);if(st.isBatchedMesh)if(st._multiDrawInstances!==null)ue.renderMultiDrawInstances(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount,st._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))ue.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{const Kt=st._multiDrawStarts,Ne=st._multiDrawCounts,pe=st._multiDrawCount,cn=Yt?nt.get(Yt).bytesPerElement:1,xi=dt.get(gt).currentProgram.getUniforms();for(let $e=0;$e<pe;$e++)xi.setValue(D,"_gl_DrawID",$e),ue.render(Kt[$e]/cn,Ne[$e])}else if(st.isInstancedMesh)ue.renderInstances(ce,Ae,st.count);else if(pt.isInstancedBufferGeometry){const Kt=pt._maxInstanceCount!==void 0?pt._maxInstanceCount:1/0,Ne=Math.min(pt.instanceCount,Kt);ue.renderInstances(ce,Ae,Ne)}else ue.render(ce,Ae)};function ie(P,et,pt){P.transparent===!0&&P.side===_e&&P.forceSinglePass===!1?(P.side=Xe,P.needsUpdate=!0,Ps(P,et,pt),P.side=jn,P.needsUpdate=!0,Ps(P,et,pt),P.side=_e):Ps(P,et,pt)}this.compile=function(P,et,pt=null){pt===null&&(pt=P),m=Lt.get(pt),m.init(et),M.push(m),pt.traverseVisible(function(st){st.isLight&&st.layers.test(et.layers)&&(m.pushLight(st),st.castShadow&&m.pushShadow(st))}),P!==pt&&P.traverseVisible(function(st){st.isLight&&st.layers.test(et.layers)&&(m.pushLight(st),st.castShadow&&m.pushShadow(st))}),m.setupLights();const gt=new Set;return P.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;const Nt=st.material;if(Nt)if(Array.isArray(Nt))for(let Gt=0;Gt<Nt.length;Gt++){const Wt=Nt[Gt];ie(Wt,pt,st),gt.add(Wt)}else ie(Nt,pt,st),gt.add(Nt)}),M.pop(),m=null,gt},this.compileAsync=function(P,et,pt=null){const gt=this.compile(P,et,pt);return new Promise(st=>{function Nt(){if(gt.forEach(function(Gt){dt.get(Gt).currentProgram.isReady()&&gt.delete(Gt)}),gt.size===0){st(P);return}setTimeout(Nt,10)}vt.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let ve=null;function Fe(P){ve&&ve(P)}function ze(){Oe.stop()}function bn(){Oe.start()}const Oe=new Rc;Oe.setAnimationLoop(Fe),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(P){ve=P,K.setAnimationLoop(P),P===null?Oe.stop():Oe.start()},K.addEventListener("sessionstart",ze),K.addEventListener("sessionend",bn),this.render=function(P,et){if(et!==void 0&&et.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),et.parent===null&&et.matrixWorldAutoUpdate===!0&&et.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(et),et=K.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,et,L),m=Lt.get(P,M.length),m.init(et),M.push(m),ot.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),F.setFromProjectionMatrix(ot),$=this.localClippingEnabled,z=wt.init(this.clippingPlanes,$),x=bt.get(P,S.length),x.init(),S.push(x),K.enabled===!0&&K.isPresenting===!0){const Nt=v.xr.getDepthSensingMesh();Nt!==null&&nn(Nt,et,-1/0,v.sortObjects)}nn(P,et,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(k,B),it=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,it&&Ot.addToRenderList(x,P),this.info.render.frame++,z===!0&&wt.beginShadows();const pt=m.state.shadowsArray;At.render(pt,P,et),z===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const gt=x.opaque,st=x.transmissive;if(m.setupLights(),et.isArrayCamera){const Nt=et.cameras;if(st.length>0)for(let Gt=0,Wt=Nt.length;Gt<Wt;Gt++){const Yt=Nt[Gt];_a(gt,st,P,Yt)}it&&Ot.render(P);for(let Gt=0,Wt=Nt.length;Gt<Wt;Gt++){const Yt=Nt[Gt];es(x,P,Yt,Yt.viewport)}}else st.length>0&&_a(gt,st,P,et),it&&Ot.render(P),es(x,P,et);L!==null&&U===0&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),P.isScene===!0&&P.onAfterRender(v,P,et),Vt.resetDefaultState(),T=-1,E=null,M.pop(),M.length>0?(m=M[M.length-1],z===!0&&wt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?x=S[S.length-1]:x=null};function nn(P,et,pt,gt){if(P.visible===!1)return;if(P.layers.test(et.layers)){if(P.isGroup)pt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(et);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||F.intersectsSprite(P)){gt&&Rt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ot);const Gt=rt.update(P),Wt=P.material;Wt.visible&&x.push(P,Gt,Wt,pt,Rt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||F.intersectsObject(P))){const Gt=rt.update(P),Wt=P.material;if(gt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Rt.copy(P.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),Rt.copy(Gt.boundingSphere.center)),Rt.applyMatrix4(P.matrixWorld).applyMatrix4(ot)),Array.isArray(Wt)){const Yt=Gt.groups;for(let Qt=0,te=Yt.length;Qt<te;Qt++){const jt=Yt[Qt],ce=Wt[jt.materialIndex];ce&&ce.visible&&x.push(P,Gt,ce,pt,Rt.z,jt)}}else Wt.visible&&x.push(P,Gt,Wt,pt,Rt.z,null)}}const Nt=P.children;for(let Gt=0,Wt=Nt.length;Gt<Wt;Gt++)nn(Nt[Gt],et,pt,gt)}function es(P,et,pt,gt){const st=P.opaque,Nt=P.transmissive,Gt=P.transparent;m.setupLightsView(pt),z===!0&&wt.setGlobalState(v.clippingPlanes,pt),gt&&ht.viewport(O.copy(gt)),st.length>0&&Cs(st,et,pt),Nt.length>0&&Cs(Nt,et,pt),Gt.length>0&&Cs(Gt,et,pt),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function _a(P,et,pt,gt){if((pt.isScene===!0?pt.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[gt.id]===void 0&&(m.state.transmissionRenderTarget[gt.id]=new gn(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?Un:kn,minFilter:ui,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const Nt=m.state.transmissionRenderTarget[gt.id],Gt=gt.viewport||O;Nt.setSize(Gt.z*v.transmissionResolutionScale,Gt.w*v.transmissionResolutionScale);const Wt=v.getRenderTarget();v.setRenderTarget(Nt),v.getClearColor(Q),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),it&&Ot.render(pt);const Yt=v.toneMapping;v.toneMapping=Zn;const Qt=gt.viewport;if(gt.viewport!==void 0&&(gt.viewport=void 0),m.setupLightsView(gt),z===!0&&wt.setGlobalState(v.clippingPlanes,gt),Cs(P,pt,gt),R.updateMultisampleRenderTarget(Nt),R.updateRenderTargetMipmap(Nt),vt.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let jt=0,ce=et.length;jt<ce;jt++){const fe=et[jt],Ae=fe.object,Ee=fe.geometry,ue=fe.material,Kt=fe.group;if(ue.side===_e&&Ae.layers.test(gt.layers)){const Ne=ue.side;ue.side=Xe,ue.needsUpdate=!0,va(Ae,pt,gt,Ee,ue,Kt),ue.side=Ne,ue.needsUpdate=!0,te=!0}}te===!0&&(R.updateMultisampleRenderTarget(Nt),R.updateRenderTargetMipmap(Nt))}v.setRenderTarget(Wt),v.setClearColor(Q,Y),Qt!==void 0&&(gt.viewport=Qt),v.toneMapping=Yt}function Cs(P,et,pt){const gt=et.isScene===!0?et.overrideMaterial:null;for(let st=0,Nt=P.length;st<Nt;st++){const Gt=P[st],Wt=Gt.object,Yt=Gt.geometry,Qt=gt===null?Gt.material:gt,te=Gt.group;Wt.layers.test(pt.layers)&&va(Wt,et,pt,Yt,Qt,te)}}function va(P,et,pt,gt,st,Nt){P.onBeforeRender(v,et,pt,gt,st,Nt),P.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),st.onBeforeRender(v,et,pt,gt,P,Nt),st.transparent===!0&&st.side===_e&&st.forceSinglePass===!1?(st.side=Xe,st.needsUpdate=!0,v.renderBufferDirect(pt,et,gt,st,P,Nt),st.side=jn,st.needsUpdate=!0,v.renderBufferDirect(pt,et,gt,st,P,Nt),st.side=_e):v.renderBufferDirect(pt,et,gt,st,P,Nt),P.onAfterRender(v,et,pt,gt,st,Nt)}function Ps(P,et,pt){et.isScene!==!0&&(et=xt);const gt=dt.get(P),st=m.state.lights,Nt=m.state.shadowsArray,Gt=st.state.version,Wt=ft.getParameters(P,st.state,Nt,et,pt),Yt=ft.getProgramCacheKey(Wt);let Qt=gt.programs;gt.environment=P.isMeshStandardMaterial?et.environment:null,gt.fog=et.fog,gt.envMap=(P.isMeshStandardMaterial?V:y).get(P.envMap||gt.environment),gt.envMapRotation=gt.environment!==null&&P.envMap===null?et.environmentRotation:P.envMapRotation,Qt===void 0&&(P.addEventListener("dispose",zt),Qt=new Map,gt.programs=Qt);let te=Qt.get(Yt);if(te!==void 0){if(gt.currentProgram===te&&gt.lightsStateVersion===Gt)return ya(P,Wt),te}else Wt.uniforms=ft.getUniforms(P),P.onBeforeCompile(Wt,v),te=ft.acquireProgram(Wt,Yt),Qt.set(Yt,te),gt.uniforms=Wt.uniforms;const jt=gt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(jt.clippingPlanes=wt.uniform),ya(P,Wt),gt.needsLights=zc(P),gt.lightsStateVersion=Gt,gt.needsLights&&(jt.ambientLightColor.value=st.state.ambient,jt.lightProbe.value=st.state.probe,jt.directionalLights.value=st.state.directional,jt.directionalLightShadows.value=st.state.directionalShadow,jt.spotLights.value=st.state.spot,jt.spotLightShadows.value=st.state.spotShadow,jt.rectAreaLights.value=st.state.rectArea,jt.ltc_1.value=st.state.rectAreaLTC1,jt.ltc_2.value=st.state.rectAreaLTC2,jt.pointLights.value=st.state.point,jt.pointLightShadows.value=st.state.pointShadow,jt.hemisphereLights.value=st.state.hemi,jt.directionalShadowMap.value=st.state.directionalShadowMap,jt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,jt.spotShadowMap.value=st.state.spotShadowMap,jt.spotLightMatrix.value=st.state.spotLightMatrix,jt.spotLightMap.value=st.state.spotLightMap,jt.pointShadowMap.value=st.state.pointShadowMap,jt.pointShadowMatrix.value=st.state.pointShadowMatrix),gt.currentProgram=te,gt.uniformsList=null,te}function Ma(P){if(P.uniformsList===null){const et=P.currentProgram.getUniforms();P.uniformsList=uo.seqWithValue(et.seq,P.uniforms)}return P.uniformsList}function ya(P,et){const pt=dt.get(P);pt.outputColorSpace=et.outputColorSpace,pt.batching=et.batching,pt.batchingColor=et.batchingColor,pt.instancing=et.instancing,pt.instancingColor=et.instancingColor,pt.instancingMorph=et.instancingMorph,pt.skinning=et.skinning,pt.morphTargets=et.morphTargets,pt.morphNormals=et.morphNormals,pt.morphColors=et.morphColors,pt.morphTargetsCount=et.morphTargetsCount,pt.numClippingPlanes=et.numClippingPlanes,pt.numIntersection=et.numClipIntersection,pt.vertexAlphas=et.vertexAlphas,pt.vertexTangents=et.vertexTangents,pt.toneMapping=et.toneMapping}function Bc(P,et,pt,gt,st){et.isScene!==!0&&(et=xt),R.resetTextureUnits();const Nt=et.fog,Gt=gt.isMeshStandardMaterial?et.environment:null,Wt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Zi,Yt=(gt.isMeshStandardMaterial?V:y).get(gt.envMap||Gt),Qt=gt.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,te=!!pt.attributes.tangent&&(!!gt.normalMap||gt.anisotropy>0),jt=!!pt.morphAttributes.position,ce=!!pt.morphAttributes.normal,fe=!!pt.morphAttributes.color;let Ae=Zn;gt.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ae=v.toneMapping);const Ee=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,ue=Ee!==void 0?Ee.length:0,Kt=dt.get(gt),Ne=m.state.lights;if(z===!0&&($===!0||P!==E)){const He=P===E&&gt.id===T;wt.setState(gt,P,He)}let pe=!1;gt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Ne.state.version||Kt.outputColorSpace!==Wt||st.isBatchedMesh&&Kt.batching===!1||!st.isBatchedMesh&&Kt.batching===!0||st.isBatchedMesh&&Kt.batchingColor===!0&&st.colorTexture===null||st.isBatchedMesh&&Kt.batchingColor===!1&&st.colorTexture!==null||st.isInstancedMesh&&Kt.instancing===!1||!st.isInstancedMesh&&Kt.instancing===!0||st.isSkinnedMesh&&Kt.skinning===!1||!st.isSkinnedMesh&&Kt.skinning===!0||st.isInstancedMesh&&Kt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&Kt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&Kt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&Kt.instancingMorph===!1&&st.morphTexture!==null||Kt.envMap!==Yt||gt.fog===!0&&Kt.fog!==Nt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==wt.numPlanes||Kt.numIntersection!==wt.numIntersection)||Kt.vertexAlphas!==Qt||Kt.vertexTangents!==te||Kt.morphTargets!==jt||Kt.morphNormals!==ce||Kt.morphColors!==fe||Kt.toneMapping!==Ae||Kt.morphTargetsCount!==ue)&&(pe=!0):(pe=!0,Kt.__version=gt.version);let cn=Kt.currentProgram;pe===!0&&(cn=Ps(gt,et,st));let xi=!1,$e=!1,ns=!1;const Me=cn.getUniforms(),sn=Kt.uniforms;if(ht.useProgram(cn.program)&&(xi=!0,$e=!0,ns=!0),gt.id!==T&&(T=gt.id,$e=!0),xi||E!==P){ht.buffers.depth.getReversed()?(Z.copy(P.projectionMatrix),Vh(Z),Wh(Z),Me.setValue(D,"projectionMatrix",Z)):Me.setValue(D,"projectionMatrix",P.projectionMatrix),Me.setValue(D,"viewMatrix",P.matrixWorldInverse);const qe=Me.map.cameraPosition;qe!==void 0&&qe.setValue(D,_t.setFromMatrixPosition(P.matrixWorld)),It.logarithmicDepthBuffer&&Me.setValue(D,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(gt.isMeshPhongMaterial||gt.isMeshToonMaterial||gt.isMeshLambertMaterial||gt.isMeshBasicMaterial||gt.isMeshStandardMaterial||gt.isShaderMaterial)&&Me.setValue(D,"isOrthographic",P.isOrthographicCamera===!0),E!==P&&(E=P,$e=!0,ns=!0)}if(st.isSkinnedMesh){Me.setOptional(D,st,"bindMatrix"),Me.setOptional(D,st,"bindMatrixInverse");const He=st.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),Me.setValue(D,"boneTexture",He.boneTexture,R))}st.isBatchedMesh&&(Me.setOptional(D,st,"batchingTexture"),Me.setValue(D,"batchingTexture",st._matricesTexture,R),Me.setOptional(D,st,"batchingIdTexture"),Me.setValue(D,"batchingIdTexture",st._indirectTexture,R),Me.setOptional(D,st,"batchingColorTexture"),st._colorsTexture!==null&&Me.setValue(D,"batchingColorTexture",st._colorsTexture,R));const on=pt.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Bt.update(st,pt,cn),($e||Kt.receiveShadow!==st.receiveShadow)&&(Kt.receiveShadow=st.receiveShadow,Me.setValue(D,"receiveShadow",st.receiveShadow)),gt.isMeshGouraudMaterial&&gt.envMap!==null&&(sn.envMap.value=Yt,sn.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),gt.isMeshStandardMaterial&&gt.envMap===null&&et.environment!==null&&(sn.envMapIntensity.value=et.environmentIntensity),$e&&(Me.setValue(D,"toneMappingExposure",v.toneMappingExposure),Kt.needsLights&&kc(sn,ns),Nt&&gt.fog===!0&&ut.refreshFogUniforms(sn,Nt),ut.refreshMaterialUniforms(sn,gt,C,I,m.state.transmissionRenderTarget[P.id]),uo.upload(D,Ma(Kt),sn,R)),gt.isShaderMaterial&&gt.uniformsNeedUpdate===!0&&(uo.upload(D,Ma(Kt),sn,R),gt.uniformsNeedUpdate=!1),gt.isSpriteMaterial&&Me.setValue(D,"center",st.center),Me.setValue(D,"modelViewMatrix",st.modelViewMatrix),Me.setValue(D,"normalMatrix",st.normalMatrix),Me.setValue(D,"modelMatrix",st.matrixWorld),gt.isShaderMaterial||gt.isRawShaderMaterial){const He=gt.uniformsGroups;for(let qe=0,So=He.length;qe<So;qe++){const ei=He[qe];q.update(ei,cn),q.bind(ei,cn)}}return cn}function kc(P,et){P.ambientLightColor.needsUpdate=et,P.lightProbe.needsUpdate=et,P.directionalLights.needsUpdate=et,P.directionalLightShadows.needsUpdate=et,P.pointLights.needsUpdate=et,P.pointLightShadows.needsUpdate=et,P.spotLights.needsUpdate=et,P.spotLightShadows.needsUpdate=et,P.rectAreaLights.needsUpdate=et,P.hemisphereLights.needsUpdate=et}function zc(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(P,et,pt){dt.get(P.texture).__webglTexture=et,dt.get(P.depthTexture).__webglTexture=pt;const gt=dt.get(P);gt.__hasExternalTextures=!0,gt.__autoAllocateDepthBuffer=pt===void 0,gt.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),gt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,et){const pt=dt.get(P);pt.__webglFramebuffer=et,pt.__useDefaultFramebuffer=et===void 0};const Hc=D.createFramebuffer();this.setRenderTarget=function(P,et=0,pt=0){L=P,b=et,U=pt;let gt=!0,st=null,Nt=!1,Gt=!1;if(P){const Yt=dt.get(P);if(Yt.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(D.FRAMEBUFFER,null),gt=!1;else if(Yt.__webglFramebuffer===void 0)R.setupRenderTarget(P);else if(Yt.__hasExternalTextures)R.rebindTextures(P,dt.get(P.texture).__webglTexture,dt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const jt=P.depthTexture;if(Yt.__boundDepthTexture!==jt){if(jt!==null&&dt.has(jt)&&(P.width!==jt.image.width||P.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(P)}}const Qt=P.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Gt=!0);const te=dt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(te[et])?st=te[et][pt]:st=te[et],Nt=!0):P.samples>0&&R.useMultisampledRTT(P)===!1?st=dt.get(P).__webglMultisampledFramebuffer:Array.isArray(te)?st=te[pt]:st=te,O.copy(P.viewport),J.copy(P.scissor),j=P.scissorTest}else O.copy(G).multiplyScalar(C).floor(),J.copy(tt).multiplyScalar(C).floor(),j=at;if(pt!==0&&(st=Hc),ht.bindFramebuffer(D.FRAMEBUFFER,st)&&gt&&ht.drawBuffers(P,st),ht.viewport(O),ht.scissor(J),ht.setScissorTest(j),Nt){const Yt=dt.get(P.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+et,Yt.__webglTexture,pt)}else if(Gt){const Yt=dt.get(P.texture),Qt=et;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Yt.__webglTexture,pt,Qt)}else if(P!==null&&pt!==0){const Yt=dt.get(P.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Yt.__webglTexture,pt)}T=-1},this.readRenderTargetPixels=function(P,et,pt,gt,st,Nt,Gt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=dt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Gt!==void 0&&(Wt=Wt[Gt]),Wt){ht.bindFramebuffer(D.FRAMEBUFFER,Wt);try{const Yt=P.texture,Qt=Yt.format,te=Yt.type;if(!It.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}et>=0&&et<=P.width-gt&&pt>=0&&pt<=P.height-st&&D.readPixels(et,pt,gt,st,yt.convert(Qt),yt.convert(te),Nt)}finally{const Yt=L!==null?dt.get(L).__webglFramebuffer:null;ht.bindFramebuffer(D.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(P,et,pt,gt,st,Nt,Gt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=dt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Gt!==void 0&&(Wt=Wt[Gt]),Wt){const Yt=P.texture,Qt=Yt.format,te=Yt.type;if(!It.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(et>=0&&et<=P.width-gt&&pt>=0&&pt<=P.height-st){ht.bindFramebuffer(D.FRAMEBUFFER,Wt);const jt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,jt),D.bufferData(D.PIXEL_PACK_BUFFER,Nt.byteLength,D.STREAM_READ),D.readPixels(et,pt,gt,st,yt.convert(Qt),yt.convert(te),0);const ce=L!==null?dt.get(L).__webglFramebuffer:null;ht.bindFramebuffer(D.FRAMEBUFFER,ce);const fe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Gh(D,fe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,jt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Nt),D.deleteBuffer(jt),D.deleteSync(fe),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,et=null,pt=0){P.isTexture!==!0&&(Ni("WebGLRenderer: copyFramebufferToTexture function signature has changed."),et=arguments[0]||null,P=arguments[1]);const gt=Math.pow(2,-pt),st=Math.floor(P.image.width*gt),Nt=Math.floor(P.image.height*gt),Gt=et!==null?et.x:0,Wt=et!==null?et.y:0;R.setTexture2D(P,0),D.copyTexSubImage2D(D.TEXTURE_2D,pt,0,0,Gt,Wt,st,Nt),ht.unbindTexture()};const Gc=D.createFramebuffer(),Vc=D.createFramebuffer();this.copyTextureToTexture=function(P,et,pt=null,gt=null,st=0,Nt=null){P.isTexture!==!0&&(Ni("WebGLRenderer: copyTextureToTexture function signature has changed."),gt=arguments[0]||null,P=arguments[1],et=arguments[2],Nt=arguments[3]||0,pt=null),Nt===null&&(st!==0?(Ni("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Nt=st,st=0):Nt=0);let Gt,Wt,Yt,Qt,te,jt,ce,fe,Ae;const Ee=P.isCompressedTexture?P.mipmaps[Nt]:P.image;if(pt!==null)Gt=pt.max.x-pt.min.x,Wt=pt.max.y-pt.min.y,Yt=pt.isBox3?pt.max.z-pt.min.z:1,Qt=pt.min.x,te=pt.min.y,jt=pt.isBox3?pt.min.z:0;else{const on=Math.pow(2,-st);Gt=Math.floor(Ee.width*on),Wt=Math.floor(Ee.height*on),P.isDataArrayTexture?Yt=Ee.depth:P.isData3DTexture?Yt=Math.floor(Ee.depth*on):Yt=1,Qt=0,te=0,jt=0}gt!==null?(ce=gt.x,fe=gt.y,Ae=gt.z):(ce=0,fe=0,Ae=0);const ue=yt.convert(et.format),Kt=yt.convert(et.type);let Ne;et.isData3DTexture?(R.setTexture3D(et,0),Ne=D.TEXTURE_3D):et.isDataArrayTexture||et.isCompressedArrayTexture?(R.setTexture2DArray(et,0),Ne=D.TEXTURE_2D_ARRAY):(R.setTexture2D(et,0),Ne=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,et.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,et.unpackAlignment);const pe=D.getParameter(D.UNPACK_ROW_LENGTH),cn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),xi=D.getParameter(D.UNPACK_SKIP_PIXELS),$e=D.getParameter(D.UNPACK_SKIP_ROWS),ns=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ee.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ee.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Qt),D.pixelStorei(D.UNPACK_SKIP_ROWS,te),D.pixelStorei(D.UNPACK_SKIP_IMAGES,jt);const Me=P.isDataArrayTexture||P.isData3DTexture,sn=et.isDataArrayTexture||et.isData3DTexture;if(P.isDepthTexture){const on=dt.get(P),He=dt.get(et),qe=dt.get(on.__renderTarget),So=dt.get(He.__renderTarget);ht.bindFramebuffer(D.READ_FRAMEBUFFER,qe.__webglFramebuffer),ht.bindFramebuffer(D.DRAW_FRAMEBUFFER,So.__webglFramebuffer);for(let ei=0;ei<Yt;ei++)Me&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,dt.get(P).__webglTexture,st,jt+ei),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,dt.get(et).__webglTexture,Nt,Ae+ei)),D.blitFramebuffer(Qt,te,Gt,Wt,ce,fe,Gt,Wt,D.DEPTH_BUFFER_BIT,D.NEAREST);ht.bindFramebuffer(D.READ_FRAMEBUFFER,null),ht.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(st!==0||P.isRenderTargetTexture||dt.has(P)){const on=dt.get(P),He=dt.get(et);ht.bindFramebuffer(D.READ_FRAMEBUFFER,Gc),ht.bindFramebuffer(D.DRAW_FRAMEBUFFER,Vc);for(let qe=0;qe<Yt;qe++)Me?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,on.__webglTexture,st,jt+qe):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,on.__webglTexture,st),sn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,He.__webglTexture,Nt,Ae+qe):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,He.__webglTexture,Nt),st!==0?D.blitFramebuffer(Qt,te,Gt,Wt,ce,fe,Gt,Wt,D.COLOR_BUFFER_BIT,D.NEAREST):sn?D.copyTexSubImage3D(Ne,Nt,ce,fe,Ae+qe,Qt,te,Gt,Wt):D.copyTexSubImage2D(Ne,Nt,ce,fe,Qt,te,Gt,Wt);ht.bindFramebuffer(D.READ_FRAMEBUFFER,null),ht.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else sn?P.isDataTexture||P.isData3DTexture?D.texSubImage3D(Ne,Nt,ce,fe,Ae,Gt,Wt,Yt,ue,Kt,Ee.data):et.isCompressedArrayTexture?D.compressedTexSubImage3D(Ne,Nt,ce,fe,Ae,Gt,Wt,Yt,ue,Ee.data):D.texSubImage3D(Ne,Nt,ce,fe,Ae,Gt,Wt,Yt,ue,Kt,Ee):P.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Nt,ce,fe,Gt,Wt,ue,Kt,Ee.data):P.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Nt,ce,fe,Ee.width,Ee.height,ue,Ee.data):D.texSubImage2D(D.TEXTURE_2D,Nt,ce,fe,Gt,Wt,ue,Kt,Ee);D.pixelStorei(D.UNPACK_ROW_LENGTH,pe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,cn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xi),D.pixelStorei(D.UNPACK_SKIP_ROWS,$e),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ns),Nt===0&&et.generateMipmaps&&D.generateMipmap(Ne),ht.unbindTexture()},this.copyTextureToTexture3D=function(P,et,pt=null,gt=null,st=0){return P.isTexture!==!0&&(Ni("WebGLRenderer: copyTextureToTexture3D function signature has changed."),pt=arguments[0]||null,gt=arguments[1]||null,P=arguments[2],et=arguments[3],st=arguments[4]||0),Ni('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,et,pt,gt,st)},this.initRenderTarget=function(P){dt.get(P).__webglFramebuffer===void 0&&R.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),ht.unbindTexture()},this.resetState=function(){b=0,U=0,L=null,ht.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}const Dc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ts{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const zm=new ma(-1,1,1,-1,0,1);class Hm extends Ce{constructor(){super(),this.setAttribute("position",new me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new me([0,2,0,0,2,0],2))}}const Gm=new Hm;class wa{constructor(t){this._mesh=new f(Gm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,zm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Vm extends ts{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Pe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=vs.clone(t.uniforms),this.material=new Pe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new wa(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Dl extends ts{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class Wm extends ts{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Xm{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Ut);this._width=n.width,this._height=n.height,e=new gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Un}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vm(Dc),this.copyPass.material.blending=Dn,this.clock=new Ac}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Dl!==void 0&&(r instanceof Dl?n=!0:r instanceof Wm&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ym extends ts{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Jt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const qm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Jt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class $i extends ts{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Ut(t.x,t.y):new Ut(256,256),this.clearColor=new Jt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new gn(o,r,{type:Un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new gn(o,r,{type:Un});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const p=new gn(o,r,{type:Un});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),o=Math.round(o/2),r=Math.round(r/2)}const a=qm;this.highPassUniforms=vs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Ut(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Dc;this.copyUniforms=vs.clone(h.uniforms),this.blendMaterial=new Pe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:gs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Jt,this.oldClearAlpha=1,this.basic=new oe,this.fsQuad=new wa(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new Ut(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=$i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=$i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Pe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ut(.5,.5)},direction:{value:new Ut(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Pe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}$i.BlurDirectionX=new Ut(1,0);$i.BlurDirectionY=new Ut(0,1);const Zm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class jm extends ts{constructor(){super();const t=Zm;this.uniforms=vs.clone(t.uniforms),this.material=new jd({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new wa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},he.getTransfer(this._outputColorSpace)===ge&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Jr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ql&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Di=.52;class Ul{constructor(t={minX:-90,maxX:90,minZ:-90,maxZ:90}){this.boxes=[],this.walkables=[],this.bounds=t,this.heightFn=()=>0,this.nav=null}setHeightFunction(t){this.heightFn=t}addBox(t,e,n,s,o,r,a="solid"){const l=s*.5,c=o*.5,h=r*.5;this.boxes.push({minX:t-l,maxX:t+l,minY:e-c,maxY:e+c,minZ:n-h,maxZ:n+h,tag:a})}addBoxMinMax(t,e,n,s,o,r,a="solid"){this.boxes.push({minX:t,minY:e,minZ:n,maxX:s,maxY:o,maxZ:r,tag:a})}addWalkable(t,e,n,s,o){this.walkables.push({minX:t-n*.5,maxX:t+n*.5,minZ:e-s*.5,maxZ:e+s*.5,topY:o})}getFloorHeight(t,e,n=0){let s=this.heightFn(t,e);for(const o of this.walkables)t>=o.minX&&t<=o.maxX&&e>=o.minZ&&e<=o.maxZ&&o.topY<=n+Di&&(s=Math.max(s,o.topY));for(const o of this.boxes)o.tag==="water"||o.tag==="bars"||t>=o.minX-.12&&t<=o.maxX+.12&&e>=o.minZ-.12&&e<=o.maxZ+.12&&o.maxY<=n+Di&&o.maxY>s&&(s=o.maxY);return s}resolveHorizontal(t,e,n,s=1.75){t.x=Math.max(this.bounds.minX+e,Math.min(this.bounds.maxX-e,t.x)),t.z=Math.max(this.bounds.minZ+e,Math.min(this.bounds.maxZ-e,t.z));for(let o=0;o<3;o++)for(const r of this.boxes){if(n+s<=r.minY+.05||r.tag!=="water"&&r.tag!=="bars"&&r.maxY<=n+Di||n>=r.maxY-.05)continue;const a=Math.max(r.minX,Math.min(t.x,r.maxX)),l=Math.max(r.minZ,Math.min(t.z,r.maxZ)),c=t.x-a,h=t.z-l,d=c*c+h*h;if(d<e*e)if(d>1e-6){const u=Math.sqrt(d),p=e-u;t.x+=c/u*p,t.z+=h/u*p}else{const u=Math.abs(t.x-r.minX),p=Math.abs(r.maxX-t.x),g=Math.abs(t.z-r.minZ),_=Math.abs(r.maxZ-t.z),x=Math.min(u,p,g,_);x===u?t.x=r.minX-e:x===p?t.x=r.maxX+e:x===g?t.z=r.minZ-e:t.z=r.maxZ+e}}}moveHorizontal(t,e,n,s,o,r=1.75){const a=Math.hypot(e,n);if(a<1e-6){this.resolveHorizontal(t,s,o,r);return}const c=Math.max(1,Math.ceil(a/.22)),h=e/c,d=n/c;let u=o;for(let p=0;p<c;p++){t.x+=h,t.z+=d,this.resolveHorizontal(t,s,u,r);const g=this.getFloorHeight(t.x,t.z,u);g>u&&g<=u+Di&&(u=g)}}isClear(t,e,n,s,o=1.75){if(t<this.bounds.minX+n||t>this.bounds.maxX-n||e<this.bounds.minZ+n||e>this.bounds.maxZ-n)return!1;for(const r of this.boxes){if(s+o<=r.minY+.05||r.tag!=="water"&&r.tag!=="bars"&&r.maxY<=s+Di||s>=r.maxY-.05)continue;const a=Math.max(r.minX,Math.min(t,r.maxX)),l=Math.max(r.minZ,Math.min(e,r.maxZ)),c=t-a,h=e-l;if(c*c+h*h<n*n)return!1}return!0}raycast(t,e,n=200){let s=n,o=null,r=new w(0,1,0);const a=e.x!==0?1/e.x:1e9,l=e.y!==0?1/e.y:1e9,c=e.z!==0?1/e.z:1e9;for(const d of this.boxes){if(d.tag==="water")continue;const u=(d.minX-t.x)*a,p=(d.maxX-t.x)*a,g=(d.minY-t.y)*l,_=(d.maxY-t.y)*l,x=(d.minZ-t.z)*c,m=(d.maxZ-t.z)*c,S=Math.min(u,p),M=Math.max(u,p),v=Math.min(g,_),A=Math.max(g,_),b=Math.min(x,m),U=Math.max(x,m),L=Math.max(S,v,b),T=Math.min(M,A,U);T>=0&&L<=T&&L>.02&&L<s&&(s=L,o=d,L===S?r.set(e.x>0?-1:1,0,0):L===v?r.set(0,e.y>0?-1:1,0):r.set(0,0,e.z>0?-1:1))}if(e.y<-.001){const u=(this.heightFn(t.x,t.z)-t.y)/e.y;u>.02&&u<s&&(s=u,o={tag:"ground"},r.set(0,1,0))}if(!o)return null;const h=t.clone().addScaledVector(e,s);return{hit:!0,dist:s,point:h,normal:r,tag:o.tag}}hasLineOfSight(t,e){const n=new w().subVectors(e,t),s=n.length();return s<.05?!0:(n.divideScalar(s),!this.raycast(t,n,s-.15))}buildNavGrid(t=1.35){const e=this.bounds.minX,n=this.bounds.minZ,s=Math.ceil((this.bounds.maxX-e)/t),o=Math.ceil((this.bounds.maxZ-n)/t),r=new Uint8Array(s*o),a=new Float32Array(s*o),l=.44;for(let c=0;c<o;c++){const h=n+(c+.5)*t;for(let d=0;d<s;d++){const u=e+(d+.5)*t;let p=this.heightFn(u,h);for(let _=0;_<8;_++){const x=this.getFloorHeight(u,h,p);if(x<=p+.001)break;p=x}const g=c*s+d;a[g]=p,r[g]=this.isClear(u,h,l,p,1.65)?1:0}}this.nav={minX:e,minZ:n,cellSize:t,cols:s,rows:o,walkable:r,heights:a}}_worldToCell(t,e){const{minX:n,minZ:s,cellSize:o,cols:r,rows:a}=this.nav,l=Math.max(0,Math.min(r-1,Math.floor((t-n)/o))),c=Math.max(0,Math.min(a-1,Math.floor((e-s)/o)));return{c:l,r:c}}_nearestWalkable(t,e){const{cols:n,rows:s,walkable:o}=this.nav;if(o[e*n+t])return{c:t,r:e};for(let r=1;r<=5;r++)for(let a=-r;a<=r;a++)for(let l=-r;l<=r;l++){const c=t+l,h=e+a;if(c>=0&&c<n&&h>=0&&h<s&&o[h*n+c])return{c,r:h}}return null}findPath(t,e,n=1800){if(!this.nav)return null;const{minX:s,minZ:o,cellSize:r,cols:a,rows:l,walkable:c,heights:h}=this.nav,d=this._worldToCell(t.x,t.z),u=this._worldToCell(e.x,e.z),p=this._nearestWalkable(d.c,d.r),g=this._nearestWalkable(u.c,u.r);if(!p||!g)return null;const _=p.r*a+p.c,x=g.r*a+g.c;if(_===x)return[e.clone()];const m=a*l,S=new Float32Array(m).fill(1e9),M=new Int32Array(m).fill(-1),v=new Uint8Array(m);S[_]=0;const A=[],b=[],U=(Q,Y)=>{A.push(Q),b.push(Y);let X=A.length-1;for(;X>0;){const I=X-1>>1;if(b[I]<=b[X])break;[A[I],A[X]]=[A[X],A[I]],[b[I],b[X]]=[b[X],b[I]],X=I}},L=()=>{const Q=A[0],Y=A.pop(),X=b.pop();if(A.length>0){A[0]=Y,b[0]=X;let I=0;const C=A.length;for(;;){let k=I*2+1,B=k+1,G=I;if(k<C&&b[k]<b[G]&&(G=k),B<C&&b[B]<b[G]&&(G=B),G===I)break;[A[G],A[I]]=[A[I],A[G]],[b[G],b[I]]=[b[I],b[G]],I=G}}return Q},T=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[-1,1,1.414],[1,-1,1.414],[-1,-1,1.414]];U(_,Math.hypot(g.c-p.c,g.r-p.r));let E=0,O=!1;for(;A.length>0&&E<n;){const Q=L();if(v[Q])continue;if(v[Q]=1,E++,Q===x){O=!0;break}const Y=Q%a,X=(Q-Y)/a,I=h[Q];for(let C=0;C<8;C++){const k=T[C][0],B=T[C][1],G=T[C][2],tt=Y+k,at=X+B;if(tt<0||tt>=a||at<0||at>=l)continue;const F=at*a+tt;if(v[F]||!c[F]||k!==0&&B!==0&&(!c[X*a+tt]||!c[at*a+Y])||Math.abs(h[F]-I)>Di)continue;const z=S[Q]+G;if(z<S[F]){S[F]=z,M[F]=Q;const $=Math.hypot(g.c-tt,g.r-at);U(F,z+$)}}}if(!O)return null;const J=[];let j=x;for(;j!==-1&&j!==_;){const Q=j%a,Y=(j-Q)/a;J.push(new w(s+(Q+.5)*r,h[j],o+(Y+.5)*r)),j=M[j]}return J.reverse(),J}canReach(t,e){return this.findPath(t,e,6e3)!==null}}class $m{constructor(t){this.scene=t,this.bursts=[],this.tracers=[],this.rings=[],this.ambient=null,this.ambientVel=[],this.ambientBounds=null,this.tumbleweeds=[],this.mistEmitters=[],this.sharedBoxGeo=new N(1,1,1),this.sharedSphereGeo=new Xt(.5,6,6)}initAmbient(t,e){this.ambientBounds=e;const n=t==="sakura"?520:t==="snow"?620:t==="alpine"?420:340,s=new Float32Array(n*3),o=new Float32Array(n*3);this.ambientVel=[];const r=new Jt(t==="sakura"?16758735:t==="snow"?16777215:t==="aegean"?16774338:t==="alpine"?15268351:16765578),a=new Jt(t==="sakura"?16770284:t==="snow"?13363455:t==="aegean"?10088703:t==="alpine"?16774604:14917204),l=e.maxX-e.minX,c=e.maxZ-e.minZ,h=new Jt;for(let p=0;p<n;p++)s[p*3]=e.minX+Math.random()*l,s[p*3+1]=.5+Math.random()*16,s[p*3+2]=e.minZ+Math.random()*c,h.copy(r).lerp(a,Math.random()),o[p*3]=h.r,o[p*3+1]=h.g,o[p*3+2]=h.b,t==="sakura"?this.ambientVel.push({vx:.9+Math.random()*1.1,vy:-(.55+Math.random()*.7),vz:.35+Math.random()*.6,phase:Math.random()*Math.PI*2}):t==="snow"?this.ambientVel.push({vx:.5+Math.random()*.9,vy:-(1.1+Math.random()*1.2),vz:-.4+Math.random()*.8,phase:Math.random()*Math.PI*2}):t==="alpine"||t==="aegean"?this.ambientVel.push({vx:.4+Math.random()*.7,vy:-.15+Math.random()*.35,vz:-.3+Math.random()*.6,phase:Math.random()*Math.PI*2}):this.ambientVel.push({vx:1.4+Math.random()*1.5,vy:-.05+Math.random()*.25,vz:-.3+Math.random()*.6,phase:Math.random()*Math.PI*2});const d=new Ce;d.setAttribute("position",new ln(s,3)),d.setAttribute("color",new ln(o,3));const u=new gc({size:t==="sakura"?.26:t==="snow"?.22:t==="alpine"?.19:.16,vertexColors:!0,transparent:!0,opacity:t==="sakura"||t==="snow"?.9:.68,depthWrite:!1});this.ambient=new md(d,u),this.scene.add(this.ambient)}addTumbleweed(t,e=1){const n=new $t,s=new H({color:8215864,roughness:.95,wireframe:!0}),o=new f(new wi(.65,1),s),r=new f(new $n(.72,0),s);n.add(o,r),n.position.copy(t),this.scene.add(n),this.tumbleweeds.push({mesh:n,vx:e*(2.6+Math.random()*1.4),vz:(Math.random()-.5)*.8,bouncePhase:Math.random()*Math.PI*2})}addMistEmitter(t,e=3.5){this.mistEmitters.push({pos:t.clone(),radius:e,timer:0})}spawnImpact(t,e=16764006,n=12,s=7){for(let o=0;o<n;o++){const r=new oe({color:e,transparent:!0,opacity:1}),a=new f(this.sharedBoxGeo,r),l=.06+Math.random()*.09;a.scale.set(l,l,l),a.position.copy(t);const c=new w((Math.random()-.5)*2,Math.random()*1.4+.3,(Math.random()-.5)*2).normalize().multiplyScalar(s*(.4+Math.random()*.8));this.scene.add(a),this.bursts.push({mesh:a,vel:c,gravity:15,life:.28+Math.random()*.32,maxLife:.6,grow:0})}}spawnSmoke(t,e=14537926,n=6,s=.4){for(let o=0;o<n;o++){const r=new oe({color:e,transparent:!0,opacity:.55,depthWrite:!1}),a=new f(this.sharedSphereGeo,r),l=s*(.6+Math.random()*.7);a.scale.set(l,l,l),a.position.copy(t).add(new w((Math.random()-.5)*.3,(Math.random()-.5)*.3,(Math.random()-.5)*.3));const c=new w((Math.random()-.5)*1.4,1.1+Math.random()*1.6,(Math.random()-.5)*1.4);this.scene.add(a),this.bursts.push({mesh:a,vel:c,gravity:-.8,life:.45+Math.random()*.45,maxLife:.9,grow:1.6})}}spawnExplosion(t,e=6){this.spawnImpact(t,16756275,28,14),this.spawnImpact(t,16729364,22,10),this.spawnSmoke(t,3681833,14,1.3);const n=new fa(.4,.9,28);n.rotateX(-Math.PI/2);const s=new oe({color:16757575,transparent:!0,opacity:.9,side:_e,depthWrite:!1}),o=new f(n,s);o.position.copy(t),o.position.y+=.25,this.scene.add(o),this.rings.push({mesh:o,life:.45,maxLife:.45,targetScale:e*1.4});const r=new oe({color:16770196,transparent:!0,opacity:.95}),a=new f(new Xt(1,12,10),r);a.position.copy(t),this.scene.add(a),this.rings.push({mesh:a,life:.25,maxLife:.25,targetScale:e*.72})}spawnTracer(t,e,n=16770457,s=.085){const o=new Ce().setFromPoints([t,e]),r=new Gr({color:n,transparent:!0,opacity:.95}),a=new ja(o,r);this.scene.add(a),this.tracers.push({line:a,life:s,maxLife:s})}spawnSlashArc(t,e,n,s=14677759){const o=[];for(let c=0;c<=12;c++){const h=-1.05+c/12*2.1,d=t.clone().addScaledVector(e,Math.cos(h)*1.9).addScaledVector(n,Math.sin(h)*1.7);d.y+=Math.sin(h)*.22-.15,o.push(d)}const r=new Ce().setFromPoints(o),a=new Gr({color:s,transparent:!0,opacity:1}),l=new ja(r,a);this.scene.add(l),this.tracers.push({line:l,life:.16,maxLife:.16})}update(t,e){if(this.ambient&&this.ambientBounds){const n=this.ambient.geometry.attributes.position.array,s=this.ambientBounds;for(let o=0;o<this.ambientVel.length;o++){const r=this.ambientVel[o],a=o*3;n[a]+=(r.vx+Math.sin(e*1.5+r.phase)*.5)*t,n[a+1]+=r.vy*t,n[a+2]+=(r.vz+Math.cos(e*1.3+r.phase)*.4)*t,n[a]>s.maxX&&(n[a]=s.minX),n[a]<s.minX&&(n[a]=s.maxX),n[a+2]>s.maxZ&&(n[a+2]=s.minZ),n[a+2]<s.minZ&&(n[a+2]=s.maxZ),n[a+1]<.2&&(n[a+1]=15+Math.random()*4),n[a+1]>20&&(n[a+1]=1)}this.ambient.geometry.attributes.position.needsUpdate=!0}for(const n of this.tumbleweeds)n.mesh.position.x+=n.vx*t,n.mesh.position.z+=n.vz*t,n.mesh.rotation.z-=n.vx*t*1.4,n.mesh.rotation.x+=n.vz*t*.8,n.mesh.position.y=.68+Math.abs(Math.sin(e*3.8+n.bouncePhase))*.35,this.ambientBounds&&(n.mesh.position.x>this.ambientBounds.maxX-4&&(n.mesh.position.x=this.ambientBounds.minX+4),n.mesh.position.x<this.ambientBounds.minX+4&&(n.mesh.position.x=this.ambientBounds.maxX-4));for(const n of this.mistEmitters)if(n.timer-=t,n.timer<=0){n.timer=.12;const s=n.pos.clone().add(new w((Math.random()-.5)*n.radius*2,Math.random()*1.2,(Math.random()-.5)*n.radius));this.spawnSmoke(s,15268351,1,1.35)}for(let n=this.bursts.length-1;n>=0;n--){const s=this.bursts[n];if(s.life-=t,s.life<=0){this.scene.remove(s.mesh),s.mesh.material.dispose(),this.bursts.splice(n,1);continue}s.vel.y-=s.gravity*t,s.mesh.position.addScaledVector(s.vel,t),s.mesh.rotation.x+=t*4,s.mesh.rotation.y+=t*3,s.grow>0&&s.mesh.scale.addScalar(s.grow*t),s.mesh.material.opacity=Math.max(0,s.life/s.maxLife*.85)}for(let n=this.tracers.length-1;n>=0;n--){const s=this.tracers[n];if(s.life-=t,s.life<=0){this.scene.remove(s.line),s.line.geometry.dispose(),s.line.material.dispose(),this.tracers.splice(n,1);continue}s.line.material.opacity=s.life/s.maxLife}for(let n=this.rings.length-1;n>=0;n--){const s=this.rings[n];if(s.life-=t,s.life<=0){this.scene.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),this.rings.splice(n,1);continue}const o=1-s.life/s.maxLife,r=.5+o*s.targetScale;s.mesh.scale.set(r,r,r),s.mesh.material.opacity=(1-o)*.85}}}class Km{constructor(){this.ctx=null,this.master=null,this.musicGain=null,this.sfxGain=null,this.muted=!1,this.musicTimer=null,this.currentTheme=null,this.step=0,this.noiseBuffer=null}ensureInit(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.72,this.master.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.28,this.musicGain.connect(this.master),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.85,this.sfxGain.connect(this.master);const e=this.ctx.sampleRate,n=Math.floor(e*1.5);this.noiseBuffer=this.ctx.createBuffer(1,n,e);const s=this.noiseBuffer.getChannelData(0);for(let o=0;o<n;o++)s[o]=Math.random()*2-1}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.72,this.ctx.currentTime,.04)}toggleMute(){return this.setMuted(!this.muted),this.muted}stopMusic(){this.musicTimer&&(clearInterval(this.musicTimer),this.musicTimer=null),this.currentTheme=null}startMusic(t){if(this.ensureInit(),!!this.ctx&&!(this.currentTheme===t&&this.musicTimer)){if(this.stopMusic(),this.currentTheme=t,this.step=0,t==="west"){const e=[73.42,73.42,110,87.31,73.42,73.42,65.41,82.41],n=[293.66,349.23,440,329.63,293.66,0,261.63,329.63],s=[587.33,659.25,698.46,880,0,698.46,659.25,587.33];this.musicTimer=setInterval(()=>{if(!this.ctx||this.muted)return;const o=this.step++,r=this.ctx.currentTime;this._tone(e[o%e.length],"triangle",.24,.26,r,this.musicGain,320);const a=n[o%n.length];if(a>0&&this._tone(a,"sawtooth",.34,.14,r,this.musicGain,1100),o%2===0&&Math.floor(o/8)%2===0){const l=s[(o>>1)%s.length];l>0&&this._whistle(l,.65,.11,r)}},340)}else if(t==="japan"){const e=[293.66,329.63,349.23,440,466.16,587.33,440,349.23],n=[587.33,0,659.25,698.46,880,0,698.46,587.33];this.musicTimer=setInterval(()=>{if(!this.ctx||this.muted)return;const s=this.step++,o=this.ctx.currentTime;if((s%8===0||s%8===5)&&this._taiko(o,s%8===0?.32:.18),s%2===0||s%7===0){const r=e[s*3%e.length];this._tone(r,"triangle",.52,.17,o,this.musicGain,2200)}if(s%4===1){const r=n[(s>>2)%n.length];r>0&&this._whistle(r,1.1,.1,o)}},380)}else if(t==="swiss"){const e=[174.61,261.63,349.23,440,523.25,440,349.23,261.63],n=[349.23,440,523.25,349.23,293.66,392,523.25,440];this.musicTimer=setInterval(()=>{if(!this.ctx||this.muted)return;const s=this.step++,o=this.ctx.currentTime,r=n[s%n.length];if(this._tone(r,"triangle",.36,.15,o,this.musicGain,1600),s%4===0){const a=e[(s>>2)%e.length];this._alphorn(a,1.25,.2,o)}},360)}else if(t==="greece"){const e=[293.66,329.63,349.23,440,493.88,440,349.23,329.63],n=[146.83,146.83,164.81,146.83,130.81,146.83,164.81,146.83],s=[587.33,659.25,587.33,523.25,440,0,523.25,587.33];this.musicTimer=setInterval(()=>{if(!this.ctx||this.muted)return;const o=this.step++,r=this.ctx.currentTime;if(o%2===0&&this._tone(n[(o>>1)%n.length],"triangle",.42,.2,r,this.musicGain,900),this._tone(e[o%e.length],"triangle",.34,.16,r,this.musicGain,2600),o%4===2){const a=s[(o>>2)%s.length];a>0&&this._whistle(a,.9,.1,r)}},310)}else if(t==="scandinavia"){const e=[73.42,73.42,110,73.42,65.41,73.42,87.31,73.42],n=[293.66,349.23,329.63,293.66,261.63,293.66,440,392];this.musicTimer=setInterval(()=>{if(!this.ctx||this.muted)return;const s=this.step++,o=this.ctx.currentTime;(s%4===0||s%8===6)&&this._taiko(o,s%8===0?.3:.18),s%2===0&&this._tone(e[(s>>1)%e.length],"sawtooth",.65,.15,o,this.musicGain,480),s%2===1&&this._tone(n[(s>>1)%n.length],"triangle",.48,.14,o,this.musicGain,1500),s%8===0&&this._alphorn(146.83,1.5,.16,o)},400)}else if(t==="normandy"){const e=[110,110,103.83,98,110,110,130.81,123.47],n=[220,0,261.63,246.94,220,0,196,207.65];this.musicTimer=setInterval(()=>{if(!this.ctx||this.muted)return;const s=this.step++,o=this.ctx.currentTime;if(s%2===0&&this._noiseBurst(.05,.09,1800,"bandpass",2.2),s%2===0&&this._tone(e[(s>>1)%e.length],"sawtooth",.62,.13,o,this.musicGain,520),s%4===0){const r=n[(s>>2)%n.length];r>0&&this._alphorn(r,1.15,.12,o)}s%16===7&&this._taiko(o,.18)},370)}else if(t==="soviet"){const e=[110,164.81,164.81,110,164.81,164.81,130.81,196,196,98,146.83,146.83],n=[329.63,392,440,523.25,493.88,440,392,329.63,293.66,329.63,392,329.63];this.musicTimer=setInterval(()=>{if(!this.ctx||this.muted)return;const s=this.step++,o=this.ctx.currentTime,r=s%3;this._tone(e[s%e.length],"triangle",r===0?.42:.22,r===0?.2:.12,o,this.musicGain,680);const a=n[s%n.length];for(let l=0;l<3;l++)this._tone(a,"triangle",.13,.11,o+l*.11,this.musicGain,2800);s%6===0&&this._noiseBurst(.9,.06,480,"bandpass",2.4),s%18===11&&(this._tone(1320,"sine",.35,.09,o,this.musicGain,4e3),this._tone(1320,"sine",.35,.08,o+.18,this.musicGain,4e3)),s%24===17&&(this._tone(420,"sawtooth",.16,.07,o,this.musicGain,1100),this._tone(395,"sawtooth",.18,.06,o+.24,this.musicGain,1050))},420)}else if(t==="tibet"){const e=[293.66,329.63,392,440,523.25,440,392,329.63];this.musicTimer=setInterval(()=>{if(!this.ctx||this.muted)return;const n=this.step++,s=this.ctx.currentTime;if(n%8===0&&this._alphorn(82.41,2.4,.24,s),n%6===2&&(this._tone(246.94,"sine",1.8,.16,s,this.musicGain,1200),this._tone(495.5,"sine",1.4,.08,s,this.musicGain,2e3)),n%4===1&&(this._tone(1760,"sine",.45,.07,s,this.musicGain,5e3),this._tone(2349,"sine",.35,.05,s+.05,this.musicGain,5e3)),n%2===0){const o=e[(n>>1)%e.length];this._whistle(o,.95,.11,s)}n%5===0&&this._noiseBurst(.7,.07,680,"bandpass",1.8),n%7===3&&this._noiseBurst(.06,.08,1600,"highpass",1)},450)}}}_tone(t,e,n,s,o,r,a=1800){const l=this.ctx.createOscillator(),c=this.ctx.createBiquadFilter(),h=this.ctx.createGain();l.type=e,l.frequency.setValueAtTime(t,o),c.type="lowpass",c.frequency.setValueAtTime(a,o),c.frequency.exponentialRampToValueAtTime(220,o+n),h.gain.setValueAtTime(.001,o),h.gain.linearRampToValueAtTime(s,o+.015),h.gain.exponentialRampToValueAtTime(8e-4,o+n),l.connect(c),c.connect(h),h.connect(r),l.start(o),l.stop(o+n+.02)}_whistle(t,e,n,s){const o=this.ctx.createOscillator(),r=this.ctx.createOscillator(),a=this.ctx.createGain(),l=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(t*.96,s),o.frequency.exponentialRampToValueAtTime(t,s+.09),r.frequency.value=5.5,a.gain.value=t*.012,r.connect(a),a.connect(o.frequency),l.gain.setValueAtTime(.001,s),l.gain.linearRampToValueAtTime(n,s+.12),l.gain.exponentialRampToValueAtTime(8e-4,s+e),o.connect(l),l.connect(this.musicGain),o.start(s),r.start(s),o.stop(s+e+.03),r.stop(s+e+.03)}_alphorn(t,e,n,s){const o=this.ctx.createOscillator(),r=this.ctx.createOscillator(),a=this.ctx.createBiquadFilter(),l=this.ctx.createGain();o.type="sawtooth",r.type="triangle",o.frequency.setValueAtTime(t,s),r.frequency.setValueAtTime(t*.5,s),a.type="lowpass",a.frequency.setValueAtTime(750,s),a.Q.value=2,l.gain.setValueAtTime(.001,s),l.gain.linearRampToValueAtTime(n,s+.18),l.gain.setValueAtTime(n*.85,s+e*.7),l.gain.exponentialRampToValueAtTime(8e-4,s+e),o.connect(a),r.connect(a),a.connect(l),l.connect(this.musicGain),o.start(s),r.start(s),o.stop(s+e+.05),r.stop(s+e+.05)}_taiko(t,e){const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(115,t),n.frequency.exponentialRampToValueAtTime(42,t+.35),s.gain.setValueAtTime(e,t),s.gain.exponentialRampToValueAtTime(.001,t+.45),n.connect(s),s.connect(this.musicGain),n.start(t),n.stop(t+.48)}_noiseBurst(t,e,n,s="bandpass",o=1){if(!this.ctx||!this.noiseBuffer)return;const r=this.ctx.currentTime,a=this.ctx.createBufferSource();a.buffer=this.noiseBuffer;const l=this.ctx.createBiquadFilter();l.type=s,l.frequency.setValueAtTime(n,r),l.Q.value=o;const c=this.ctx.createGain();c.gain.setValueAtTime(e,r),c.gain.exponentialRampToValueAtTime(.001,r+t),a.connect(l),l.connect(c),c.connect(this.sfxGain),a.start(r),a.stop(r+t+.02)}playShot(t="revolver"){if(this.ensureInit(),!this.ctx)return;const e=this.ctx.currentTime;if(t==="revolver"||t==="rifle"){const n=t==="rifle";this._noiseBurst(n?.32:.22,n?.9:.72,n?1150:1450,"lowpass");const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sawtooth",s.frequency.setValueAtTime(n?240:320,e),s.frequency.exponentialRampToValueAtTime(42,e+(n?.22:.14)),o.gain.setValueAtTime(n?.65:.5,e),o.gain.exponentialRampToValueAtTime(.001,e+.22),s.connect(o),o.connect(this.sfxGain),s.start(e),s.stop(e+.24)}else if(t==="shotgun"||t==="musket"){this._noiseBurst(.45,1,950,"lowpass");const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(175,e),n.frequency.exponentialRampToValueAtTime(28,e+.32),s.gain.setValueAtTime(.85,e),s.gain.exponentialRampToValueAtTime(.001,e+.34),n.connect(s),s.connect(this.sfxGain),n.start(e),n.stop(e+.36)}else if(t==="bow"||t==="crossbow"){this._noiseBurst(.11,.45,2200,"bandpass",2);const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(t==="crossbow"?420:280,e),n.frequency.exponentialRampToValueAtTime(110,e+.16),s.gain.setValueAtTime(.55,e),s.gain.exponentialRampToValueAtTime(.001,e+.18),n.connect(s),s.connect(this.sfxGain),n.start(e),n.stop(e+.2)}else if(t==="shuriken")this._noiseBurst(.09,.4,3800,"highpass"),this._tone(1650,"sine",.08,.22,e,this.sfxGain,4e3);else if(t==="slash"){this._noiseBurst(.18,.6,2600,"bandpass",1.4);const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(900,e),n.frequency.exponentialRampToValueAtTime(220,e+.16),s.gain.setValueAtTime(.28,e),s.gain.exponentialRampToValueAtTime(.001,e+.18),n.connect(s),s.connect(this.sfxGain),n.start(e),n.stop(e+.19)}else if(t==="javelin"||t==="axe_throw"){const n=t==="axe_throw";this._noiseBurst(n?.17:.13,n?.52:.45,n?1500:2500,"bandpass",1.5);const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(n?240:480,e),s.frequency.exponentialRampToValueAtTime(n?95:170,e+.14),o.gain.setValueAtTime(.38,e),o.gain.exponentialRampToValueAtTime(.001,e+.16),s.connect(o),o.connect(this.sfxGain),s.start(e),s.stop(e+.17)}else if(t==="smg")this._noiseBurst(.09,.52,1950,"bandpass",1.1),this._tone(210,"sawtooth",.075,.34,e,this.sfxGain,950);else if(t==="sniper"){this._noiseBurst(.42,.96,1250,"lowpass");const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(220,e),n.frequency.exponentialRampToValueAtTime(34,e+.28),s.gain.setValueAtTime(.75,e),s.gain.exponentialRampToValueAtTime(.001,e+.3),n.connect(s),s.connect(this.sfxGain),n.start(e),n.stop(e+.32)}else t==="throw"&&this._noiseBurst(.14,.35,1600,"bandpass")}playReload(){if(this.ensureInit(),!this.ctx)return;const t=this.ctx.currentTime;this._tone(780,"square",.045,.16,t,this.sfxGain,2200),this._tone(1120,"square",.055,.18,t+.18,this.sfxGain,2600),this._tone(640,"triangle",.06,.2,t+.36,this.sfxGain,1800)}playExplosion(){if(this.ensureInit(),!this.ctx)return;const t=this.ctx.currentTime;this._noiseBurst(.95,1,520,"lowpass");const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(22,t+.7),n.gain.setValueAtTime(.95,t),n.gain.exponentialRampToValueAtTime(.001,t+.8),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.85)}playHit(t=!1){if(this.ensureInit(),!this.ctx)return;const e=this.ctx.currentTime;this._tone(t?1320:840,"triangle",.09,.32,e,this.sfxGain,3200),t&&this._tone(1760,"sine",.14,.34,e+.04,this.sfxGain,4200)}playHurt(){if(this.ensureInit(),!this.ctx)return;const t=this.ctx.currentTime;this._noiseBurst(.16,.45,650,"lowpass"),this._tone(130,"sawtooth",.18,.38,t,this.sfxGain,450)}playPickup(){if(this.ensureInit(),!this.ctx)return;const t=this.ctx.currentTime;this._tone(587.33,"triangle",.11,.28,t,this.sfxGain,2800),this._tone(880,"triangle",.18,.28,t+.09,this.sfxGain,3200)}playBossHorn(){if(this.ensureInit(),!this.ctx)return;const t=this.ctx.currentTime;this._alphorn(146.83,1.4,.45,t),this._alphorn(220,1.4,.35,t+.15)}playDogBark(){if(this.ensureInit(),!this.ctx)return;const t=this.ctx.currentTime;for(const e of[0,.17]){const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(360,t+e),n.frequency.exponentialRampToValueAtTime(145,t+e+.11),s.gain.setValueAtTime(.001,t+e),s.gain.linearRampToValueAtTime(.36,t+e+.018),s.gain.exponentialRampToValueAtTime(.001,t+e+.12),n.connect(s),s.connect(this.sfxGain),n.start(t+e),n.stop(t+e+.13),this._noiseBurst(.09,.28,950,"bandpass",1.6)}}}const Jm={west:[{id:"revolver",name:".45 PEACEMAKER",shortName:"Revolver",kind:"hitscan",sound:"revolver",damage:38,headMult:2.1,pellets:1,spread:.012,fireRate:.28,magSize:6,reserve:48,reloadTime:1.05,recoil:.14,altMode:"fan",altHint:"RMB: Fan Hammer",tracerColor:16770206},{id:"shotgun",name:"10-GAUGE COACH GUN",shortName:"Shotgun",kind:"hitscan",sound:"shotgun",damage:19,headMult:1.5,pellets:8,spread:.085,fireRate:.65,magSize:2,reserve:24,reloadTime:1.15,recoil:.28,altMode:"double",altHint:"RMB: Both Barrels",tracerColor:16762480},{id:"rifle",name:"HENRY .44 SCOPED",shortName:"Rifle",kind:"hitscan",sound:"rifle",damage:74,headMult:2.4,pellets:1,spread:.004,fireRate:.72,magSize:8,reserve:32,reloadTime:1.3,recoil:.18,altMode:"scope",scopeLabel:"HENRY .44 BRASS OPTIC",scopeFov:26,altHint:"RMB: Brass Scope Zoom",tracerColor:16774084},{id:"dynamite",name:"DYNAMITE STICKS",shortName:"Dynamite",kind:"throwable",sound:"throw",damage:145,blastRadius:7.5,fireRate:.85,magSize:1,reserve:6,reloadTime:.55,recoil:.12,altMode:"none",altHint:"Arc Throw Explosive",projColor:14235170}],japan:[{id:"katana",name:"MURAMASA KATANA",shortName:"Katana",kind:"melee",sound:"slash",damage:68,headMult:1.5,range:4,fireRate:.36,magSize:99,reserve:99,infinite:!0,reloadTime:.1,recoil:.22,altMode:"heavy_slash",altHint:"RMB: Iaido Power Cleave",slashColor:15137279},{id:"yumi",name:"YUMI LONGBOW",shortName:"Yumi Bow",kind:"hitscan",sound:"bow",damage:78,headMult:2.3,pellets:1,spread:.005,fireRate:.62,magSize:1,reserve:40,reloadTime:.45,recoil:.11,altMode:"scope",scopeLabel:"KYUDO SPIRIT FOCUS",scopeFov:30,altHint:"RMB: Spirit Focus Zoom",tracerColor:16773314},{id:"shuriken",name:"SHINOBI SHURIKEN",shortName:"Shuriken",kind:"hitscan",sound:"shuriken",damage:34,headMult:2,pellets:1,spread:.018,fireRate:.2,magSize:9,reserve:63,reloadTime:.85,recoil:.07,altMode:"fan_stars",altHint:"RMB: 3-Star Fan Throw",tracerColor:13692159},{id:"matchlock",name:"TANEGASHIMA MUSKET",shortName:"Matchlock",kind:"hitscan",sound:"musket",damage:115,headMult:1.9,pellets:4,spread:.045,fireRate:1.05,magSize:1,reserve:18,reloadTime:1.25,recoil:.3,altMode:"none",altHint:"Heavy Edo Firepower",tracerColor:16757596}],swiss:[{id:"crossbow",name:"TELL'S ARMBRUST",shortName:"Crossbow",kind:"hitscan",sound:"crossbow",damage:86,headMult:2.5,pellets:1,spread:.003,fireRate:.65,magSize:1,reserve:45,reloadTime:.62,recoil:.14,altMode:"scope",scopeLabel:"WILHELM TELL EAGLE-EYE",scopeFov:24,altHint:"RMB: Eagle-Eye Zoom",tracerColor:16054783},{id:"halberd",name:"SWISS HALBERD",shortName:"Halberd",kind:"melee",sound:"slash",damage:78,headMult:1.5,range:4.4,fireRate:.48,magSize:99,reserve:99,infinite:!0,reloadTime:.1,recoil:.25,altMode:"heavy_slash",altHint:"RMB: Armor-Breaker Sweep",slashColor:14676735},{id:"repeater",name:"ALPINE REPEATER",shortName:"Repeater",kind:"hitscan",sound:"crossbow",damage:36,headMult:2,pellets:1,spread:.016,fireRate:.22,magSize:8,reserve:56,reloadTime:1.1,recoil:.09,altMode:"fan",altHint:"RMB: Rapid Volley",tracerColor:15135487},{id:"firepot",name:"ALPINE FIRE-POT",shortName:"Fire-Pot",kind:"throwable",sound:"throw",damage:150,blastRadius:7.5,fireRate:.9,magSize:1,reserve:6,reloadTime:.6,recoil:.12,altMode:"none",altHint:"Arc Throw Fire-Bomb",projColor:16739876}],greece:[{id:"javelin",name:"BRONZE JAVELIN",shortName:"Javelin",kind:"hitscan",sound:"javelin",damage:56,headMult:2.1,pellets:1,spread:.009,fireRate:.56,magSize:5,reserve:45,reloadTime:.88,recoil:.16,altMode:"scope",scopeLabel:"AEGEAN SPEAR SIGHT",scopeFov:36,altHint:"RMB: Steady Aim Focus",tracerColor:16770206},{id:"xiphos",name:"XIPHOS SHORT SWORD",shortName:"Short Sword",kind:"melee",sound:"slash",damage:66,headMult:1.5,range:3.9,fireRate:.34,magSize:99,reserve:99,infinite:!0,reloadTime:.1,recoil:.22,altMode:"heavy_slash",altHint:"RMB: Heroic Thrust Cleave",slashColor:16770723}],scandinavia:[{id:"throwing_axe",name:"THROWING AXE",shortName:"Throwing Axe",kind:"hitscan",sound:"axe_throw",damage:58,headMult:2.1,pellets:1,spread:.011,fireRate:.54,magSize:5,reserve:45,reloadTime:.85,recoil:.17,altMode:"scope",scopeLabel:"NORSE RAIDER AIM",scopeFov:38,altHint:"RMB: Steady Aim Focus",tracerColor:12776959},{id:"viking_sword",name:"ULFBERHT SWORD",shortName:"Viking Sword",kind:"melee",sound:"slash",damage:72,headMult:1.5,range:4.1,fireRate:.38,magSize:99,reserve:99,infinite:!0,reloadTime:.1,recoil:.24,altMode:"heavy_slash",altHint:"RMB: Shield-Breaker Cleave",slashColor:10417640}],normandy:[{id:"mosin_scoped",name:"BOLT-ACTION SNIPER RIFLE",shortName:"Sniper Rifle",kind:"hitscan",sound:"sniper",damage:105,headMult:2.2,pellets:1,spread:.002,fireRate:1.25,magSize:5,reserve:30,reloadTime:1.65,recoil:.24,altMode:"scope",scopeLabel:"PU 3.5× TELESCOPIC SIGHT",scopeFov:18,altHint:"RMB: Telescopic Scope",tracerColor:16774084},{id:"sten_smg",name:"STEN MK II SMG",shortName:"Sten SMG",kind:"hitscan",sound:"smg",autoFire:!0,damage:19,headMult:1.75,pellets:1,spread:.032,fireRate:.11,magSize:32,reserve:160,reloadTime:1.15,recoil:.065,altMode:"none",altHint:"Hold LMB: Full-Auto Fire",tracerColor:16765562},{id:"heavy_pistol",name:"BAVAUD HEAVY PISTOL",shortName:"Heavy Pistol",kind:"hitscan",sound:"revolver",damage:58,headMult:2,pellets:1,spread:.008,fireRate:.34,magSize:8,reserve:64,reloadTime:.95,recoil:.15,altMode:"none",altHint:"High-Impact Sidearm",tracerColor:16770206},{id:"combat_knife",name:"RESISTANCE KNIFE",shortName:"Knife",kind:"melee",sound:"slash",damage:65,headMult:1.6,range:3.3,fireRate:.32,magSize:99,reserve:99,infinite:!0,reloadTime:.1,recoil:.16,altMode:"heavy_slash",altHint:"RMB: Close Thrust",slashColor:14216447}],soviet:[{id:"soviet_smg",name:"PPSH-41 SUBMACHINE GUN",shortName:"Soviet SMG",kind:"hitscan",sound:"smg",damage:25,headMult:1.75,pellets:1,spread:.036,fireRate:.115,auto:!0,magSize:35,reserve:175,reloadTime:1.35,recoil:.085,altMode:"none",altHint:"Hold LMB: Automatic Fire",tracerColor:16770206},{id:"soviet_pistol",name:"MAKAROV 9MM PISTOL",shortName:"Pistol",kind:"hitscan",sound:"revolver",damage:44,headMult:2.1,pellets:1,spread:.011,fireRate:.28,magSize:8,reserve:64,reloadTime:1,recoil:.13,altMode:"none",altHint:"Accurate Sidearm",tracerColor:16770206},{id:"combat_knife",name:"UTILITY KNIFE",shortName:"Knife",kind:"melee",sound:"slash",damage:65,headMult:1.6,range:3.3,fireRate:.32,magSize:99,reserve:99,infinite:!0,reloadTime:.1,recoil:.16,altMode:"heavy_slash",altHint:"RMB: Close Thrust",slashColor:14216447}],tibet:[{id:"khampa_rifle",name:"KHAMPA BOLT-ACTION RIFLE",shortName:"Bolt Rifle",kind:"hitscan",sound:"sniper",damage:105,headMult:2.3,pellets:1,spread:.004,fireRate:.92,magSize:5,reserve:45,reloadTime:1.45,recoil:.21,altMode:"scope",scopeLabel:"IRON SIGHTS FOCUS",scopeFov:40,altHint:"RMB: Iron Sights Aim",tracerColor:16774084},{id:"tibet_pistol",name:"RESISTANCE PISTOL",shortName:"Pistol",kind:"hitscan",sound:"revolver",damage:48,headMult:2.1,pellets:1,spread:.012,fireRate:.27,magSize:10,reserve:70,reloadTime:1,recoil:.13,altMode:"none",altHint:"Nimble Sidearm",tracerColor:16770206},{id:"tibet_bow",name:"TIBETAN RECURVE BOW",shortName:"Bow",kind:"hitscan",sound:"bow",damage:80,headMult:2.2,pellets:1,spread:.006,fireRate:.58,magSize:1,reserve:55,reloadTime:.42,recoil:.1,altMode:"scope",scopeLabel:"ROYAL ARCHER FOCUS",scopeFov:36,altHint:"RMB: Aim Focus",tracerColor:16176522},{id:"tibet_sword",name:"ROYAL TIBETAN SWORD",shortName:"Sword",kind:"melee",sound:"slash",damage:78,headMult:1.6,range:4.1,fireRate:.36,magSize:99,reserve:99,infinite:!0,reloadTime:.1,recoil:.2,altMode:"heavy_slash",altHint:"RMB: Sweeping Strike",slashColor:16768921},{id:"combat_knife",name:"KHAMPA KNIFE",shortName:"Knife",kind:"melee",sound:"slash",damage:65,headMult:1.6,range:3.3,fireRate:.32,magSize:99,reserve:99,infinite:!0,reloadTime:.1,recoil:.16,altMode:"heavy_slash",altHint:"RMB: Close Thrust",slashColor:14216447}]};function Qm(i){const t=new $t,e=new H({color:3817546,metalness:.85,roughness:.26}),n=new H({color:14213354,metalness:.92,roughness:.16}),s=new H({color:14263361,metalness:.82,roughness:.28}),o=new H({color:6042653,roughness:.72,metalness:.05}),r=new H({color:3087122,roughness:.75}),a=new H({color:12067869,roughness:.5}),l=new oe({color:16759603});if(i==="revolver"){const c=new f(new W(.022,.024,.44,10),e);c.rotation.x=Math.PI/2,c.position.set(0,.03,-.32);const h=new f(new W(.011,.011,.36,8),e);h.rotation.x=Math.PI/2,h.position.set(0,.004,-.28);const d=new f(new N(.048,.095,.17),s);d.position.set(0,0,-.05);const u=new f(new W(.038,.038,.09,12),e);u.rotation.x=Math.PI/2,u.position.set(0,.015,-.055),u.name="cylinder";const p=new f(new N(.008,.026,.02),s);p.position.set(0,.058,-.51);const g=new f(new N(.014,.04,.03),e);g.position.set(0,.052,.03),g.rotation.x=-.35;const _=new f(new N(.042,.16,.068),o);_.position.set(0,-.09,.05),_.rotation.x=.28,t.add(c,h,d,u,p,g,_),t.position.set(.24,-.22,-.35)}else if(i==="shotgun"){for(const u of[-.024,.024]){const p=new f(new W(.022,.024,.72,12),e);p.rotation.x=Math.PI/2,p.position.set(u,.02,-.45),t.add(p)}const c=new f(new N(.078,.048,.28),o);c.position.set(0,-.012,-.32);const h=new f(new N(.082,.078,.18),s);h.position.set(0,0,-.04);const d=new f(new N(.065,.11,.36),o);d.position.set(0,-.055,.18),d.rotation.x=.16,t.add(c,h,d),t.position.set(.24,-.24,-.32)}else if(i==="rifle"){const c=new f(new W(.018,.021,.88,8),e);c.rotation.x=Math.PI/2,c.position.set(0,.025,-.52);const h=new f(new W(.014,.014,.78,8),s);h.rotation.x=Math.PI/2,h.position.set(0,-.006,-.48);const d=new f(new N(.054,.088,.22),s);d.position.set(0,0,-.04);const u=new f(new W(.02,.024,.48,12),s);u.rotation.x=Math.PI/2,u.position.set(0,.078,-.22);const p=new f(new W(.018,.018,.01,12),new oe({color:9099519}));p.rotation.x=Math.PI/2,p.position.set(0,.078,.02);const g=new f(new N(.052,.11,.36),o);g.position.set(0,-.048,.2),g.rotation.x=.12,t.add(c,h,d,u,p,g),t.position.set(.24,-.24,-.32)}else if(i==="dynamite"){for(const[p,g]of[[-.024,0],[.024,0],[0,.032]]){const _=new f(new W(.022,.022,.26,10),a);_.position.set(p,g,0),t.add(_)}const c=new f(new W(.054,.054,.022,12),r);c.position.y=.06;const h=c.clone();h.position.y=-.06;const d=new f(new W(.006,.006,.09,6),o);d.position.set(.01,.17,0),d.rotation.z=-.35;const u=new f(new Xt(.022,8,8),l);u.position.set(.028,.21,0),u.name="spark",t.add(c,h,d,u),t.rotation.set(.25,.2,.15),t.position.set(.26,-.24,-.45)}else if(i==="katana"){const c=new f(new N(.014,.92,.044),n);c.position.set(0,.44,0);const h=new f(new N(.005,.92,.014),new oe({color:16777215}));h.position.set(0,.44,-.023);const d=new f(new N(.024,.05,.052),s);d.position.set(0,.01,0);const u=new f(new W(.065,.065,.014,16),s);u.position.set(0,-.02,0);const p=new f(new W(.024,.026,.28,10),a);p.position.set(0,-.16,0),t.add(c,h,d,u,p),t.rotation.set(-.35,-.28,.28),t.position.set(.32,-.34,-.52)}else if(i==="yumi"){const c=new f(new ee(.52,.018,8,22,Math.PI*.88),r);c.rotation.z=-Math.PI*.44,c.position.set(0,.06,-.22);const h=new f(new W(.003,.003,.96,6),new oe({color:16050385}));h.position.set(0,.06,.04);const d=new f(new W(.008,.008,.72,6),o);d.rotation.x=Math.PI/2,d.position.set(.02,.02,-.24);const u=new f(new kt(.02,.07,4),n);u.rotation.x=-Math.PI/2,u.position.set(.02,.02,-.62);const p=new f(new N(.05,.004,.1),a);p.position.set(.02,.02,.07),t.add(c,h,d,u,p),t.position.set(.25,-.18,-.45)}else if(i==="shuriken"){const c=new $t;for(let d=0;d<4;d++){const u=new f(new kt(.036,.12,4),n),p=d*Math.PI/2;u.position.set(Math.cos(p)*.06,0,Math.sin(p)*.06),u.rotation.z=-Math.PI/2,u.rotation.y=-p,c.add(u)}const h=new f(new W(.032,.032,.012,10),e);c.add(h),c.name="spinner",t.add(c),t.rotation.set(.35,.2,.1),t.position.set(.24,-.2,-.48)}else if(i==="matchlock"){const c=new f(new W(.026,.03,.92,8),e);c.rotation.x=Math.PI/2,c.position.set(0,.03,-.5);const h=new f(new N(.064,.075,.72),r);h.position.set(0,-.01,-.25);for(const u of[-.15,-.42,-.68]){const p=new f(new N(.07,.082,.032),s);p.position.set(0,.005,u),t.add(p)}const d=new f(new Xt(.016,6,6),l);d.position.set(.045,.045,-.08),t.add(c,h,d),t.position.set(.25,-.25,-.3)}else if(i==="crossbow"||i==="repeater"){const c=i==="repeater",h=new f(new N(.072,.082,c?.62:.74),o);h.position.set(0,-.01,-.28);const d=new f(new N(.035,.022,.6),s);d.position.set(0,.036,-.32);const u=new f(new N(c?.26:.36,.024,.038),e);u.position.set(c?-.14:-.19,.025,-.55),u.rotation.y=.24;const p=u.clone();p.position.x=-u.position.x,p.rotation.y=-.24;const g=new f(new W(.003,.003,c?.3:.42,6),new oe({color:15261384}));g.rotation.z=Math.PI/2,g.rotation.y=-.52,g.position.set(c?-.12:-.16,.032,-.44);const _=g.clone();_.position.x=-g.position.x,_.rotation.y=.52;const x=new f(new W(.009,.009,.44,6),r);x.rotation.x=Math.PI/2,x.position.set(0,.048,-.44);const m=new f(new kt(.022,.075,4),n);if(m.rotation.x=-Math.PI/2,m.position.set(0,.048,-.68),c){const S=new f(new N(.068,.085,.22),r);S.position.set(0,.078,-.24),t.add(S)}t.add(h,d,u,p,g,_,x,m),t.position.set(.22,-.23,-.32)}else if(i==="halberd"){const c=new f(new W(.022,.024,1.35,8),o);c.position.set(0,.15,0);const h=new f(new kt(.028,.38,4),n);h.position.set(0,.98,0);const d=new f(new N(.014,.28,.25),n);d.position.set(0,.68,-.12);const u=new f(new kt(.024,.2,4),e);u.rotation.x=Math.PI/2,u.position.set(0,.68,.1);const p=new f(new W(.032,.032,.16,8),s);p.position.set(0,.68,0);const g=new f(new kt(.045,.14,8),new H({color:15910441,roughness:.6}));g.position.set(0,.54,0);const _=new f(new ee(.035,.014,6,10),a);_.rotation.x=Math.PI/2,_.position.set(0,.6,0),t.add(c,h,d,u,p,g,_),t.rotation.set(-.34,-.22,.22),t.position.set(.36,-.42,-.56)}else if(i==="firepot"){const c=new f(new Xt(.095,12,10),new H({color:9193255,roughness:.85})),h=new f(new W(.042,.055,.06,10),new H({color:7222812,roughness:.85}));h.position.y=.095;const d=new f(new kt(.038,.095,8),l);d.position.y=.165,d.name="spark",t.add(c,h,d),t.position.set(.26,-.24,-.46)}else if(i==="javelin"){const c=new H({color:14394187,metalness:.86,roughness:.24}),h=new f(new W(.014,.016,1.35,8),o);h.rotation.x=Math.PI/2,h.position.set(0,.02,-.35);const d=new f(new W(.018,.018,.24,8),a);d.rotation.x=Math.PI/2,d.position.set(0,.02,-.05);const u=new f(new W(.018,.016,.12,8),c);u.rotation.x=Math.PI/2,u.position.set(0,.02,-1);const p=new f(new kt(.036,.24,4),c);p.rotation.x=-Math.PI/2,p.position.set(0,.02,-1.16),t.add(h,d,u,p),t.rotation.set(.06,.08,0),t.position.set(.27,-.2,-.25)}else if(i==="xiphos"){const c=new H({color:14920786,metalness:.88,roughness:.22}),h=new f(new N(.016,.66,.068),c);h.position.set(0,.34,0);const d=new f(new kt(.036,.16,4),c);d.position.set(0,.74,0);const u=new f(new N(.036,.036,.18),s);u.position.set(0,.01,0);const p=new f(new W(.024,.024,.22,8),r);p.position.set(0,-.12,0);const g=new f(new Xt(.036,8,8),s);g.position.set(0,-.24,0),t.add(h,d,u,p,g),t.rotation.set(-.38,-.26,.26),t.position.set(.32,-.32,-.52)}else if(i==="throwing_axe"){const c=new f(new W(.018,.022,.56,8),o);c.position.set(0,.06,0);const h=new f(new W(.024,.024,.16,8),r);h.position.set(0,-.14,0);const d=new f(new N(.022,.14,.16),e);d.position.set(0,.28,-.06);const u=new f(new N(.014,.22,.12),n);u.position.set(0,.23,-.15),t.add(c,h,d,u),t.rotation.set(.28,-.18,.18),t.position.set(.28,-.26,-.48)}else if(i==="viking_sword"){const c=new f(new N(.016,.88,.064),n);c.position.set(0,.44,0);const h=new f(new N(.02,.72,.02),e);h.position.set(0,.42,0);const d=new f(new kt(.034,.14,4),n);d.position.set(0,.94,0);const u=new f(new N(.036,.036,.22),e);u.position.set(0,0,0);const p=new f(new W(.024,.026,.22,8),r);p.position.set(0,-.12,0);const g=new f(new N(.05,.055,.1),s);g.position.set(0,-.24,0),t.add(c,h,d,u,p,g),t.rotation.set(-.34,-.24,.24),t.position.set(.32,-.34,-.52)}else if(i==="mosin_scoped"){const c=new f(new W(.017,.02,.96,8),e);c.rotation.x=Math.PI/2,c.position.set(0,.028,-.56);const h=new f(new N(.056,.072,.78),o);h.position.set(0,-.008,-.26);const d=new f(new W(.01,.01,.09,6),n);d.rotation.z=Math.PI/2,d.position.set(.05,.02,-.06);const u=new f(new W(.022,.025,.38,12),e);u.rotation.x=Math.PI/2,u.position.set(0,.082,-.18);const p=new f(new N(.028,.048,.12),e);p.position.set(0,.052,-.16);const g=new f(new W(.019,.019,.01,12),new oe({color:10216191}));g.rotation.x=Math.PI/2,g.position.set(0,.082,.015);const _=new f(new N(.052,.11,.34),o);_.position.set(0,-.048,.2),_.rotation.x=.12,t.add(c,h,d,u,p,g,_),t.position.set(.24,-.24,-.32)}else if(i==="sten_smg"){const c=new f(new W(.032,.032,.42,12),e);c.rotation.x=Math.PI/2,c.position.set(0,.01,-.16);const h=new f(new W(.028,.028,.28,12),e);h.rotation.x=Math.PI/2,h.position.set(0,.01,-.48);const d=new f(new W(.014,.014,.14,8),e);d.rotation.x=Math.PI/2,d.position.set(0,.01,-.66);const u=new f(new N(.26,.028,.046),e);u.position.set(-.14,.01,-.24);const p=new f(new W(.012,.012,.34,8),e);p.rotation.x=Math.PI/2,p.position.set(0,-.02,.18);const g=new f(new N(.036,.13,.05),r);g.position.set(0,-.08,.05),g.rotation.x=.22,t.add(c,h,d,u,p,g),t.position.set(.24,-.22,-.34)}else if(i==="heavy_pistol"){const c=new f(new N(.048,.068,.34),e);c.position.set(0,.035,-.22);const h=new f(new N(.044,.044,.28),r);h.position.set(0,-.01,-.18);const d=new f(new N(.008,.02,.02),n);d.position.set(0,.075,-.37);const u=new f(new N(.042,.15,.068),r);u.position.set(0,-.09,-.05),u.rotation.x=.26,t.add(c,h,d,u),t.position.set(.23,-.22,-.36)}else if(i==="combat_knife"){const c=new f(new N(.012,.34,.045),n);c.position.set(0,.18,0);const h=new f(new kt(.024,.1,4),n);h.position.set(0,.39,0);const d=new f(new N(.028,.022,.11),e);d.position.set(0,.01,0);const u=new f(new W(.02,.022,.16,8),r);u.position.set(0,-.08,0),t.add(c,h,d,u),t.rotation.set(-.42,-.28,.32),t.position.set(.28,-.26,-.48)}else if(i==="soviet_smg"){const c=new f(new W(.026,.028,.56,10),e);c.rotation.x=Math.PI/2,c.position.set(0,.024,-.42);const h=new f(new N(.056,.068,.36),o);h.position.set(0,-.014,-.08);const d=new f(new W(.095,.095,.052,14),e);d.rotation.x=Math.PI/2,d.position.set(0,-.085,-.26);const u=new f(new N(.052,.11,.32),o);u.position.set(0,-.05,.22),u.rotation.x=.14,t.add(c,h,d,u),t.position.set(.24,-.23,-.34)}else if(i==="soviet_pistol"||i==="tibet_pistol"){const c=new f(new N(.044,.064,.3),e);c.position.set(0,.032,-.2);const h=new f(new N(.04,.04,.24),r);h.position.set(0,-.01,-.16);const d=new f(new N(.008,.018,.018),n);d.position.set(0,.07,-.34);const u=new f(new N(.04,.14,.064),i==="soviet_pistol"?a:o);u.position.set(0,-.085,-.04),u.rotation.x=.26,t.add(c,h,d,u),t.position.set(.23,-.22,-.36)}else if(i==="khampa_rifle"){const c=new f(new W(.017,.02,.98,8),e);c.rotation.x=Math.PI/2,c.position.set(0,.028,-.58);const h=new f(new N(.056,.072,.8),o);h.position.set(0,-.008,-.26);const d=new f(new W(.01,.01,.09,6),n);d.rotation.z=Math.PI/2,d.position.set(.048,.022,-.06);const u=new f(new N(.008,.034,.018),e);u.position.set(0,.058,-1.04);const p=new f(new N(.034,.024,.02),e);p.position.set(0,.052,-.28);const g=new f(new N(.052,.11,.34),o);g.position.set(0,-.048,.2),g.rotation.x=.12,t.add(c,h,d,u,p,g),t.position.set(.24,-.24,-.32)}else if(i==="tibet_bow"){const c=new f(new ee(.46,.018,8,22,Math.PI*.9),a);c.rotation.z=-Math.PI*.45,c.position.set(0,.06,-.22);const h=new f(new W(.003,.003,.86,6),new oe({color:16050385}));h.position.set(0,.06,.03);const d=new f(new W(.008,.008,.72,6),o);d.rotation.x=Math.PI/2,d.position.set(.02,.02,-.24);const u=new f(new kt(.02,.07,4),s);u.rotation.x=-Math.PI/2,u.position.set(.02,.02,-.62);const p=new f(new N(.05,.004,.1),s);p.position.set(.02,.02,.07),t.add(c,h,d,u,p),t.position.set(.25,-.18,-.45)}else if(i==="tibet_sword"){const c=new f(new N(.016,.86,.06),n);c.position.set(0,.44,0);const h=new f(new kt(.032,.14,4),n);h.position.set(0,.93,0);const d=new f(new N(.04,.04,.2),s);d.position.set(0,.01,0);const u=new f(new W(.024,.026,.24,8),a);u.position.set(0,-.12,0);const p=new f(new Xt(.042,8,8),s);p.position.set(0,-.26,0),t.add(c,h,d,u,p),t.rotation.set(-.34,-.24,.24),t.position.set(.32,-.34,-.52)}return t.userData.basePos=t.position.clone(),t.userData.baseRot=t.rotation.clone(),t}const Qe={west:[{id:"earp",era:"west",name:"Wyatt Earp",bio:"Lawman of Tombstone, 1881.",strengthLabel:"Iron Lawman",strengthDesc:"Takes 25% less damage from enemy fire.",hudTag:"-25% DMG",defaultWeaponIdx:0,mods:{damageTakenMult:.75}},{id:"jane",era:"west",name:"Calamity Jane",bio:"Scout and sharpshooter of Deadwood.",strengthLabel:"Deadwood Scout",strengthDesc:"Moves 18% faster across streets and cover.",hudTag:"+18% SPEED",defaultWeaponIdx:2,mods:{moveSpeedMult:1.18}},{id:"billy",era:"west",name:"Billy the Kid",bio:"Young gunman of New Mexico.",strengthLabel:"Quick Draw",strengthDesc:"Fires 22% faster and reloads 28% faster.",hudTag:"FAST DRAW",defaultWeaponIdx:0,mods:{fireRateMult:.78,reloadTimeMult:.72}}],japan:[{id:"musashi",era:"japan",name:"Miyamoto Musashi",bio:"Undefeated duellist, master of two swords.",strengthLabel:"Two Heavens Style",strengthDesc:"Faster katana strikes (+28% speed) with +1.2 m reach.",hudTag:"SWIFT BLADE",defaultWeaponIdx:0,mods:{meleeFireRateMult:.72,meleeRangeBonus:1.2}},{id:"tomoe",era:"japan",name:"Tomoe Gozen",bio:"Woman warrior of the Genpei War, famous archer.",strengthLabel:"Genpei Archer",strengthDesc:"Shoots and nocks the Yumi Longbow nearly twice as fast.",hudTag:"2× BOW RATE",defaultWeaponIdx:1,mods:{weaponOverrides:{yumi:{fireRateMult:.52,reloadTimeMult:.52}}}},{id:"masamune",era:"japan",name:"Date Masamune",bio:"The One-Eyed Dragon of Sendai.",strengthLabel:"Black Lacquer Armor",strengthDesc:"Takes 30% less damage from enemy attacks.",hudTag:"-30% DMG",defaultWeaponIdx:0,mods:{damageTakenMult:.7}}],swiss:[{id:"tell",era:"swiss",name:"Wilhelm Tell",bio:"The crossbowman of Uri.",strengthLabel:"Uri Marksman",strengthDesc:"Reloads the crossbow 40% faster.",hudTag:"40% FASTER BOLTS",defaultWeaponIdx:0,mods:{weaponOverrides:{crossbow:{reloadTimeMult:.6,fireRateMult:.8},repeater:{reloadTimeMult:.6}}}},{id:"winkelried",era:"swiss",name:"Arnold von Winkelried",bio:"Hero of Sempach, from Nidwalden.",strengthLabel:"Heart of Sempach",strengthDesc:"Starts with 50% more health.",hudTag:"+50% HEALTH",defaultWeaponIdx:1,mods:{maxHpMult:1.5}},{id:"stauffacher",era:"swiss",name:"Werner Stauffacher",bio:"Man of Schwyz, of the Rütli oath.",strengthLabel:"Elder of Schwyz",strengthDesc:"Slowly recovers health when out of danger.",hudTag:"OUT-OF-COMBAT REGEN",defaultWeaponIdx:0,mods:{regenRate:5,regenDelay:4}}],greece:[{id:"ulysses",era:"greece",name:"Ulysses",bio:"King of Ithaca, the cunning one.",strengthLabel:"King of Ithaca",strengthDesc:"Throws javelins 25% faster and 25% harder.",hudTag:"+25% JAVELIN",defaultWeaponIdx:0,mods:{weaponOverrides:{javelin:{fireRateMult:.78,reloadTimeMult:.8,damageMult:1.25}}}},{id:"achilles",era:"greece",name:"Achilles",bio:"Greatest warrior of the Trojan War.",strengthLabel:"Bronze Panoply",strengthDesc:"Takes 33% less damage from enemy attacks.",hudTag:"-33% DMG",defaultWeaponIdx:0,mods:{damageTakenMult:.67}},{id:"heracles",era:"greece",name:"Heracles",bio:"Strongest of heroes.",strengthLabel:"Twelve Labors",strengthDesc:"Starts with 60% more health.",hudTag:"+60% HEALTH",defaultWeaponIdx:1,mods:{maxHpMult:1.6}}],scandinavia:[{id:"erik",era:"scandinavia",name:"Erik the Red",bio:"Outlaw and founder of Greenland.",strengthLabel:"Greenland Outlaw",strengthDesc:"Throws axes 30% faster and reloads 25% faster.",hudTag:"FAST AXES",defaultWeaponIdx:0,mods:{weaponOverrides:{throwing_axe:{fireRateMult:.7,reloadTimeMult:.75}}}},{id:"leif",era:"scandinavia",name:"Leif Erikson",bio:"His son, who sailed to Vinland.",strengthLabel:"Vinland Voyager",strengthDesc:"Takes 33% less damage from enemy attacks.",hudTag:"-33% DMG",defaultWeaponIdx:0,mods:{damageTakenMult:.67}},{id:"ragnar",era:"scandinavia",name:"Ragnar Lothbrok",bio:"Legendary sea-king and raider.",strengthLabel:"Sea-King Blade",strengthDesc:"Strikes 28% faster and 35% harder with the Viking Sword.",hudTag:"FIERCE SWORD",defaultWeaponIdx:1,mods:{meleeFireRateMult:.72,meleeDamageMult:1.35}}],normandy:[{id:"pavlichenko",era:"normandy",name:"Lyudmila Pavlichenko",bio:"Soviet sniper of the Eastern Front.",strengthLabel:"Scoped Bolt Rifle",strengthDesc:"Telescopic bolt-action rifle (RMB scope); one shot fells an ordinary soldier, slow fire & 5-round clip.",hudTag:"SNIPER RIFLE",defaultWeaponIdx:0,weaponIds:["mosin_scoped","combat_knife"],mods:{}},{id:"hall",era:"normandy",name:"Virginia Hall",bio:'American spy with the French Resistance, "the limping lady".',strengthLabel:"Sten SMG & Stealth",strengthDesc:"Full-auto 32-round Sten SMG; enemies notice her later by sight and sound.",hudTag:"STEN + STEALTH",defaultWeaponIdx:0,weaponIds:["sten_smg","combat_knife"],mods:{stealthMult:.42,soundAlertRadius:13}},{id:"bavaud",era:"normandy",name:"Maurice Bavaud",bio:"Young man from Neuchâtel, Switzerland, who set out to shoot Hitler in 1938.",strengthLabel:"Heavy Pistol",strengthDesc:"Carries a hard-hitting semi-automatic pistol that deals high damage per shot.",hudTag:"HEAVY PISTOL",defaultWeaponIdx:0,weaponIds:["heavy_pistol","combat_knife"],mods:{}}],soviet:[{id:"solzhenitsyn",era:"soviet",name:"Aleksandr Solzhenitsyn",bio:"Chronicler of the camps, winter of 1974.",strengthLabel:"Camp Survivor",strengthDesc:"Carries an automatic submachine gun and takes 15% less damage.",hudTag:"SMG · -15% DMG",defaultWeaponIdx:0,weaponIds:["soviet_smg","combat_knife"],mods:{damageTakenMult:.85}},{id:"sakharov",era:"soviet",name:"Andrei Sakharov",bio:"Physicist and defender of human rights.",strengthLabel:"Precision Shot",strengthDesc:"Carries a pistol whose shots hit 60% harder.",hudTag:"+60% PISTOL DMG",defaultWeaponIdx:0,weaponIds:["soviet_pistol","combat_knife"],mods:{weaponOverrides:{soviet_pistol:{damageMult:1.6}}}},{id:"nureyev",era:"soviet",name:"Rudolf Nureyev",bio:"Dancer who leapt to freedom.",strengthLabel:"Grace in Winter",strengthDesc:"Moves 25% faster and is noticed later by enemies.",hudTag:"+25% SPD · STEALTH",defaultWeaponIdx:0,weaponIds:["soviet_pistol","combat_knife"],mods:{moveSpeedMult:1.25,stealthMult:.52,soundAlertRadius:15}}],tibet:[{id:"gompo",era:"tibet",name:"Gompo Tashi Andrugtsang",bio:"Leader of the Khampa resistance, 1959.",strengthLabel:"Khampa Marksman",strengthDesc:"Carries a bolt-action rifle with iron sights; one shot fells a soldier.",hudTag:"1-SHOT RIFLE",defaultWeaponIdx:0,weaponIds:["khampa_rifle","combat_knife"],mods:{}},{id:"pachen",era:"tibet",name:"Ani Pachen",bio:"Tibetan warrior nun of Kham.",strengthLabel:"Mountain Stride",strengthDesc:"Carries a pistol and knife; moves 20% faster across the high valley.",hudTag:"+20% SPEED",defaultWeaponIdx:0,weaponIds:["tibet_pistol","combat_knife"],mods:{moveSpeedMult:1.2}},{id:"songtsen",era:"tibet",name:"Songtsen Gampo",bio:"Founder of the Tibetan Empire.",strengthLabel:"Imperial Mantle",strengthDesc:"Fights with bow and sword and takes 20% less damage.",hudTag:"BOW · -20% DMG",defaultWeaponIdx:0,weaponIds:["tibet_bow","tibet_sword"],mods:{damageTakenMult:.8}}]};function Nl(i,t){const e=Qe[i]||Qe.west;return e.find(n=>n.id===t)||e[0]}function tg(i){const t=new $t,e=new H({color:15120018,roughness:.7}),n=new H({color:14263422,roughness:.74}),s=new H({color:14858394,roughness:.76}),o=new H({color:1578776,roughness:.82}),r=new H({color:1447967,metalness:.62,roughness:.32}),a=new H({color:2763826,roughness:.8}),l=new H({color:15722196,roughness:.84}),c=new H({color:16184300,roughness:.78}),h=new H({color:12067362,roughness:.62}),d=new H({color:12751448,roughness:.88}),u=new H({color:10054968,roughness:.9}),p=new H({color:7035458,roughness:.9}),g=new H({color:3875862,roughness:.8}),_=new H({color:1709331,roughness:.88}),x=new H({color:7027488,roughness:.85}),m=new H({color:4862238,roughness:.92}),S=new H({color:15394784,roughness:.9}),M=new H({color:10003634,metalness:.78,roughness:.42}),v=new H({color:14213868,metalness:.92,roughness:.18}),A=new H({color:15909444,metalness:.88,roughness:.22}),b=new H({color:4532247,roughness:.82}),U=new oe({color:1445900});function L({torsoMat:I,legsMat:C,armsMat:k,bootsMat:B=g,skin:G=e,slim:tt=!1}){const at=tt?.095:.11,F=new W(at,at*.88,.84,10),z=new f(F,C);z.position.set(-.15,.42,0);const $=new f(F,C);$.position.set(.15,.42,0);const Z=new N(.16,.22,.27),ot=new f(Z,B);ot.position.set(0,-.34,.04),z.add(ot),$.add(ot.clone());const _t=tt?.48:.56,Rt=new f(new N(_t,.74,.3),I);Rt.position.set(0,1.18,0);const xt=tt?.072:.085,it=new W(xt,xt*.86,.64,8),mt=new f(it,k);mt.position.set(-(_t*.5+.1),1.18,.04),mt.rotation.z=.12;const D=new f(it,k);D.position.set(_t*.5+.1,1.18,.14),D.rotation.x=-.65,D.rotation.z=-.1;const Pt=new Xt(.068,8,8),vt=new f(Pt,G);vt.position.set(0,-.33,0),mt.add(vt);const It=new f(Pt,G);It.position.set(0,-.33,0),D.add(It);const ht=new f(new Xt(.205,14,12),G);ht.position.set(0,1.74,0);const Ct=new f(new Xt(.023,6,6),U);Ct.position.set(-.07,.03,.185);const dt=Ct.clone();return dt.position.x=.07,ht.add(Ct,dt),t.add(z,$,Rt,mt,D,ht),{legL:z,legR:$,torso:Rt,armL:mt,armR:D,head:ht,eyeL:Ct,eyeR:dt}}function T(){const I=new $t,C=new f(new W(.022,.024,.38,8),v);C.rotation.x=Math.PI/2,C.position.set(0,.02,.22);const k=new f(new N(.055,.09,.15),A);k.position.set(0,0,.03);const B=new f(new N(.045,.13,.065),b);return B.position.set(0,-.07,-.04),B.rotation.x=-.25,I.add(C,k,B),I}function E(){const I=new $t,C=new f(new W(.02,.022,1.15,8),v);C.rotation.x=Math.PI/2,C.position.set(0,.02,.35);const k=new f(new N(.055,.08,.24),A);k.position.set(0,0,-.05);const B=new f(new N(.05,.11,.42),b);return B.position.set(0,-.04,-.34),I.add(C,k,B),I}function O(I=1.05){const C=new $t,k=new f(new N(.024,I,.048),v);k.position.y=I*.5+.08;const B=new f(new W(.055,.055,.016,12),A);B.position.y=.08;const G=new f(new W(.024,.024,.24,8),h);return G.position.y=-.04,C.add(k,B,G),C}function J(){const I=new $t,C=new f(new N(.08,.08,.72),b);C.position.set(0,0,.18);const k=new f(new N(.76,.032,.045),v);k.position.set(0,.03,.48);const B=new f(new N(.72,.008,.008),c);B.position.set(0,.03,.36);const G=new f(new W(.01,.01,.42,6),v);return G.rotation.x=Math.PI/2,G.position.set(0,.055,.38),I.add(C,k,B,G),I}function j(){const I=new $t,C=new f(new W(.028,.032,2.35,8),b);C.position.y=.55;const k=new f(new kt(.038,.44,4),v);k.position.y=1.92;const B=new f(new N(.025,.36,.3),v);B.position.set(0,1.54,.15);const G=new f(new kt(.032,.22,4),v);G.rotation.x=-Math.PI/2,G.position.set(0,1.54,-.12);const tt=new f(new kt(.06,.18,8),h);return tt.position.y=1.32,I.add(C,k,B,G,tt),I}if(i==="earp"){const I=L({torsoMat:o,legsMat:o,armsMat:o,bootsMat:o,skin:n}),C=new f(new N(.62,.72,.14),o);C.position.set(0,.58,-.14);const k=new f(new N(.22,.72,.24),o);k.position.set(-.22,.58,.04);const B=k.clone();B.position.x=.22,t.add(C,k,B);const G=new f(new N(.2,.42,.04),c);G.position.set(0,1.28,.15);const tt=new f(new N(.05,.3,.05),o);tt.position.set(0,1.26,.165);const at=new f(new W(.068,.068,.02,6),A);at.rotation.x=Math.PI/2,at.position.set(.16,1.34,.165),t.add(G,tt,at);const F=new f(new N(.22,.055,.07),_);F.position.set(0,-.055,.18);const z=new f(new N(.08,.075,.06),_);z.position.set(-.11,-.085,.17),z.rotation.z=-.35;const $=z.clone();$.position.x=.11,$.rotation.z=.35,I.head.add(F,z,$);const Z=new f(new W(.45,.46,.036,18),o);Z.position.y=.14;const ot=new f(new W(.22,.23,.17,16),o);ot.position.y=.23;const _t=new f(new W(.235,.235,.035,16),A);_t.position.y=.17,I.head.add(Z,ot,_t);const Rt=T();Rt.position.set(0,-.34,.04),Rt.rotation.x=.6,I.armR.add(Rt)}else if(i==="jane"){const I=L({torsoMat:d,legsMat:d,armsMat:d,bootsMat:g,skin:n,slim:!0}),C=new f(new N(.54,.18,.33),u);C.position.set(0,1.45,0);const k=new f(new N(.52,.28,.32),u);k.position.set(0,.78,0);const B=new f(new N(.54,.1,.34),g);B.position.set(0,.92,0),t.add(C,k,B);const G=new f(new ee(.17,.055,8,14),h);G.rotation.x=Math.PI/2,G.position.set(0,1.54,0);const tt=new f(new kt(.16,.24,5),h);tt.rotation.x=Math.PI,tt.position.set(0,1.44,.16),t.add(G,tt);const at=new f(new N(.36,.56,.16),x);at.position.set(0,-.14,-.14);const F=new f(new W(.065,.05,.44,8),x);F.position.set(-.18,-.1,-.02);const z=F.clone();z.position.x=.18,I.head.add(at,F,z);const $=new f(new W(.42,.44,.036,16),g);$.position.y=.15;const Z=new f(new W(.19,.22,.21,12),g);Z.position.y=.25,I.head.add($,Z);const ot=E();ot.position.set(-.08,-.25,.12),ot.rotation.set(.3,-.45,0),I.armR.add(ot)}else if(i==="billy"){const I=L({torsoMat:a,legsMat:a,armsMat:l,bootsMat:g,skin:e,slim:!0}),C=new f(new N(.16,.34,.04),l);C.position.set(0,1.38,.15);const k=new f(new ee(.15,.04,6,12),a);k.rotation.x=Math.PI/2,k.position.set(0,1.54,0);const B=new f(new N(.54,.11,.34),g);B.position.set(0,.88,0),B.rotation.z=-.14;for(let F=0;F<3;F++){const z=new f(new Xt(.022,6,6),A);z.position.set(0,1.24-F*.12,.16),t.add(z)}t.add(C,k,B);const G=new f(new W(.38,.46,.06,16),g);G.position.set(.02,.14,0),G.rotation.set(.12,0,-.14);const tt=new f(new kt(.22,.28,10),g);tt.position.set(.04,.27,-.01),tt.rotation.z=-.14,I.head.add(G,tt);const at=T();at.position.set(0,-.34,.06),at.rotation.x=.65,I.armR.add(at)}else if(i==="musashi"){const I=new H({color:2238e3,roughness:.88}),C=L({torsoMat:I,legsMat:I,armsMat:I,bootsMat:l,skin:n}),k=new f(new W(.28,.42,.86,10),I);k.position.set(0,.56,0);const B=new f(new N(.59,.18,.34),l);B.position.set(0,.96,0);const G=new f(new N(.14,.48,.04),a);G.position.set(-.08,1.32,.155),G.rotation.z=-.35;const tt=G.clone();tt.position.x=.08,tt.rotation.z=.35,t.add(k,B,G,tt);const at=new f(new Xt(.225,10,8),_);at.position.set(0,.06,-.04);const F=new f(new $n(.26,0),_);F.position.set(0,-.06,-.18),F.scale.set(1.2,1.45,.85);const z=new f(new kt(.08,.44,6),_);z.rotation.x=Math.PI,z.position.set(-.2,-.08,.02);const $=z.clone();$.position.x=.2;const Z=new f(new ee(.215,.024,6,16),l);Z.rotation.x=Math.PI/2,Z.position.y=.09,C.head.add(at,F,z,$,Z);const ot=O(1.08);ot.position.set(0,-.32,.06),ot.rotation.set(.85,0,-.2),C.armR.add(ot),C.armL.rotation.x=-.55;const _t=O(.68);_t.position.set(0,-.32,.06),_t.rotation.set(.95,0,.25),C.armL.add(_t)}else if(i==="tomoe"){const I=L({torsoMat:c,legsMat:h,armsMat:c,bootsMat:l,skin:e,slim:!0}),C=new f(new W(.26,.4,.84,12),h);C.position.set(0,.56,0);const k=new f(new N(.51,.46,.33),h);k.position.set(0,1.18,0);const B=new f(new N(.53,.08,.35),A);B.position.set(0,1.4,0);const G=new f(new N(.12,.32,.26),h);G.position.set(-.34,1.38,0);const tt=G.clone();tt.position.x=.34;const at=new f(new N(.54,.14,.35),c);at.position.set(0,.94,0),t.add(C,k,B,G,tt,at);const F=new f(new Xt(.215,12,10),_);F.position.set(0,.06,-.02);const z=new f(new N(.32,.88,.14),_);z.position.set(0,-.32,-.17);const $=new f(new ee(.21,.026,6,16),h);$.rotation.x=Math.PI/2,$.position.y=.09,I.head.add(F,z,$),I.armL.rotation.x=-.85;const Z=new f(new ee(.75,.022,8,22,Math.PI*.9),b);Z.rotation.y=Math.PI/2,Z.rotation.z=-Math.PI*.45,Z.position.set(0,-.15,.24);const ot=new f(new W(.005,.005,1.42,6),c);ot.position.set(0,-.15,-.08),I.armL.add(Z,ot);const _t=new f(new W(.01,.01,.85,6),b);_t.rotation.x=Math.PI/2,_t.position.set(0,-.32,.18),I.armR.add(_t)}else if(i==="masamune"){const I=L({torsoMat:r,legsMat:r,armsMat:r,bootsMat:o,skin:n}),C=new f(new W(.32,.46,.56,8),r);C.position.set(0,.72,0);const k=new f(new N(.16,.38,.32),r);k.position.set(-.39,1.4,0);const B=k.clone();B.position.x=.39;const G=new f(new N(.6,.12,.35),A);G.position.set(0,.96,0),t.add(C,k,B,G);const tt=new f(new Xt(.062,8,8),o);tt.scale.set(1.15,.9,.45),tt.position.set(-.072,.02,.198);const at=new f(new ee(.208,.015,6,16),o);at.rotation.set(Math.PI/2,.22,0),at.position.y=.04,I.head.add(tt,at);const F=new f(new Xt(.245,14,10,0,Math.PI*2,0,Math.PI*.5),r);F.position.y=.095;const z=new f(new W(.24,.32,.18,12,1,!0,Math.PI*.45,Math.PI*1.1),r);z.position.set(0,-.01,-.02);const $=new f(new ee(.34,.036,8,22,Math.PI*1.15),A);$.position.set(.12,.47,.19),$.rotation.z=-Math.PI*.85;const Z=new f(new W(.045,.045,.04,10),A);Z.rotation.x=Math.PI/2,Z.position.set(0,.23,.23),I.head.add(F,z,$,Z);const ot=O(1.06);ot.position.set(0,-.32,.06),ot.rotation.set(.85,0,-.15),I.armR.add(ot)}else if(i==="tell"){const I=L({torsoMat:p,legsMat:g,armsMat:p,bootsMat:g,skin:n}),C=new f(new W(.3,.38,.46,10),p);C.position.set(0,.72,0);const k=new f(new N(.6,.15,.34),A);k.position.set(0,.96,0);const B=new f(new N(.58,.86,.09),h);B.position.set(0,1.06,-.2),B.rotation.x=.12,t.add(C,k,B);const G=new f(new kt(.19,.34,10),m);G.rotation.x=Math.PI,G.position.set(0,-.21,.1);const tt=new f(new N(.24,.065,.08),m);tt.position.set(0,-.07,.18);const at=new f(new W(.24,.26,.17,12),h);at.position.y=.17;const F=new f(new kt(.05,.44,6),c);F.position.set(.18,.36,-.02),F.rotation.z=-.38,I.head.add(G,tt,at,F);const z=J();z.position.set(-.08,-.28,.06),z.rotation.set(.45,-.25,0),I.armR.add(z)}else if(i==="winkelried"){const I=L({torsoMat:h,legsMat:M,armsMat:M,bootsMat:g,skin:n}),C=new f(new N(.29,.76,.32),c);C.position.set(.145,1.18,.005);const k=new f(new N(.3,.44,.32),h);k.position.set(-.15,.68,0);const B=new f(new N(.3,.44,.32),c);B.position.set(.15,.68,0);const G=new f(new N(.62,.11,.35),g);G.position.set(0,.92,0);const tt=new f(new ee(.2,.065,8,14),M);tt.rotation.x=Math.PI/2,tt.position.set(0,1.54,0),t.add(C,k,B,G,tt);const at=new f(new Xt(.228,12,10,0,Math.PI*2,0,Math.PI*.72),M);at.position.set(0,.03,-.02);const F=new f(new kt(.19,.32,10),m);F.rotation.x=Math.PI,F.position.set(0,-.2,.11);const z=new f(new N(.24,.06,.08),m);z.position.set(0,-.07,.18),I.head.add(at,F,z);const $=j();$.position.set(.06,-.58,.1),$.rotation.x=.62,I.armR.add($)}else if(i==="stauffacher"){const I=L({torsoMat:a,legsMat:g,armsMat:a,bootsMat:g,skin:s}),C=new f(new W(.3,.42,.62,10),a);C.position.set(0,.62,0);const k=new f(new kt(.46,.48,12),h);k.position.set(0,1.44,0);const B=new f(new N(.58,.11,.34),g);B.position.set(0,.96,0);const G=new f(new N(.04,.15,.03),c);G.position.set(-.14,1.35,.25);const tt=new f(new N(.15,.04,.03),c);tt.position.set(-.14,1.35,.25),t.add(C,k,B,G,tt);const at=new f(new kt(.17,.46,12),S);at.rotation.x=Math.PI,at.position.set(0,-.3,.11);const F=new f(new N(.22,.055,.07),S);F.position.set(0,-.08,.18);const z=new f(new N(.21,.028,.04),S);z.position.set(0,.085,.185);const $=new f(new Xt(.245,14,12,0,Math.PI*2,0,Math.PI*.56),h);$.position.set(0,.095,-.05);const Z=new f(new W(.23,.25,.26,12,1,!0,Math.PI*.55,Math.PI*.9),h);Z.position.set(0,-.02,-.05);const ot=new f(new kt(.12,.45,8),h);ot.position.set(0,.12,-.32),ot.rotation.x=-1.15,I.head.add(at,F,z,$,Z,ot);const _t=J();_t.position.set(-.06,-.28,.08),_t.rotation.set(.45,-.2,0),I.armR.add(_t)}else if(i==="ulysses"){const I=new H({color:2383260,roughness:.8}),C=new H({color:9403748,roughness:.94}),k=L({torsoMat:l,legsMat:n,armsMat:n,bootsMat:g,skin:n}),B=new f(new W(.28,.35,.42,10),l);B.position.set(0,.76,0);const G=new f(new N(.58,.1,.33),A);G.position.set(0,.95,0);const tt=new f(new N(.62,1.05,.1),I);tt.position.set(0,1.04,-.2),tt.rotation.x=.12;const at=new f(new Xt(.05,8,8),A);at.position.set(.18,1.48,.16),t.add(B,G,tt,at);const F=new f(new kt(.18,.32,10),m);F.rotation.x=Math.PI,F.position.set(0,-.22,.1);const z=new f(new N(.22,.055,.07),m);z.position.set(0,-.07,.18);const $=new f(new kt(.24,.38,14),C);$.position.set(0,.27,-.01),k.head.add(F,z,$);const Z=new f(new W(.02,.022,1.95,8),b);Z.position.set(0,.2,.08),Z.rotation.x=.65;const ot=new f(new kt(.042,.24,4),A);ot.position.set(0,1.06,.68),ot.rotation.x=.65,k.armR.add(Z,ot)}else if(i==="achilles"){const I=new H({color:14459972,metalness:.86,roughness:.24}),C=L({torsoMat:I,legsMat:n,armsMat:n,bootsMat:I,skin:n}),k=new f(new W(.29,.36,.4,10),h);k.position.set(0,.76,0);const B=new f(new N(.6,1.08,.09),h);B.position.set(0,1.04,-.21),B.rotation.x=.13;const G=new f(new W(.115,.1,.44,10),I);G.position.set(0,-.18,0),C.legL.add(G),C.legR.add(G.clone()),t.add(k,B);const tt=new f(new Xt(.245,14,10,0,Math.PI*2,0,Math.PI*.56),I);tt.position.y=.085;const at=new f(new N(.055,.16,.13),I);at.position.set(-.17,-.05,.12);const F=at.clone();F.position.x=.17;const z=new f(new N(.11,.26,.58),h);z.position.set(0,.36,-.04),C.head.add(tt,at,F,z);const $=new f(new W(.46,.46,.06,22),I);$.rotation.x=Math.PI/2,$.position.set(-.08,-.16,.22);const Z=new f(new Xt(.12,10,8),A);Z.position.set(0,.03,0),$.add(Z),C.armL.add($);const ot=O(.76);ot.position.set(0,-.3,.08),ot.rotation.set(.85,0,-.15),C.armR.add(ot)}else if(i==="heracles"){const I=new H({color:13210428,roughness:.92}),C=new H({color:9394974,roughness:.95}),k=L({torsoMat:n,legsMat:n,armsMat:n,bootsMat:g,skin:n});k.torso.scale.set(1.16,1.06,1.14);const B=new f(new N(.76,.3,.44),C);B.position.set(0,1.48,-.02);const G=new f(new N(.68,1.1,.12),I);G.position.set(0,1,-.23),G.rotation.x=.12;const tt=new f(new W(.32,.38,.44,10),I);tt.position.set(0,.78,0),t.add(B,G,tt);const at=new f(new Xt(.26,12,10,0,Math.PI*2,0,Math.PI*.58),I);at.position.set(0,.09,-.02);const F=new f(new ee(.25,.075,8,14),C);F.position.set(0,.04,-.02);const z=new f(new Xt(.065,8,8),I);z.position.set(-.18,.26,.02);const $=z.clone();$.position.x=.18;const Z=new f(new kt(.18,.3,10),m);Z.rotation.x=Math.PI,Z.position.set(0,-.22,.1),k.head.add(at,F,z,$,Z);const ot=new f(new W(.11,.042,1.15,8),b);ot.position.set(0,-.05,.25),ot.rotation.x=.85,k.armR.add(ot)}else if(i==="erik"){const I=new H({color:12074520,roughness:.88}),C=new H({color:3877922,roughness:.95}),k=new H({color:5195324,roughness:.88}),B=L({torsoMat:k,legsMat:g,armsMat:k,bootsMat:g,skin:e}),G=new f(new N(.74,.28,.42),C);G.position.set(0,1.48,-.02);const tt=new f(new N(.68,1.12,.12),C);tt.position.set(0,1,-.22),tt.rotation.x=.12;const at=new f(new N(.6,.11,.34),g);at.position.set(0,.94,0),t.add(G,tt,at);const F=new f(new Xt(.225,12,10,0,Math.PI*2,0,Math.PI*.6),I);F.position.set(0,.07,-.02);const z=new f(new N(.36,.44,.16),I);z.position.set(0,-.08,-.15);const $=new f(new kt(.2,.38,10),I);$.rotation.x=Math.PI,$.position.set(0,-.24,.1);const Z=new f(new N(.24,.06,.08),I);Z.position.set(0,-.07,.18),B.head.add(F,z,$,Z);const ot=new f(new W(.024,.026,.85,8),b);ot.position.set(0,-.12,.22),ot.rotation.x=.85;const _t=new f(new N(.028,.24,.2),v);_t.position.set(0,.18,.56),B.armR.add(ot,_t)}else if(i==="leif"){const I=new H({color:15123557,roughness:.86}),C=new H({color:1985932,roughness:.78}),k=L({torsoMat:M,legsMat:a,armsMat:C,bootsMat:g,skin:e}),B=new f(new N(.68,.24,.38),C);B.position.set(0,1.48,-.01);const G=new f(new N(.66,1.14,.1),C);G.position.set(0,1,-.22),G.rotation.x=.12;const tt=new f(new Xt(.055,8,8),v);tt.position.set(.18,1.48,.18);const at=new f(new N(.59,.1,.34),g);at.position.set(0,.94,0),t.add(B,G,tt,at);const F=new f(new Xt(.22,12,10,0,Math.PI*2,0,Math.PI*.58),I);F.position.set(0,.075,-.02);const z=new f(new N(.32,.36,.14),I);z.position.set(0,-.06,-.14);const $=new f(new kt(.17,.3,10),I);$.rotation.x=Math.PI,$.position.set(0,-.22,.1);const Z=new f(new N(.22,.055,.07),I);Z.position.set(0,-.07,.18),k.head.add(F,z,$,Z);const ot=new f(new W(.024,.026,.85,8),b);ot.position.set(0,-.12,.22),ot.rotation.x=.85;const _t=new f(new N(.028,.24,.2),v);_t.position.set(0,.18,.56),k.armR.add(ot,_t)}else if(i==="ragnar"){const I=new H({color:3154972,roughness:.76}),C=new H({color:5393480,roughness:.95}),k=L({torsoMat:I,legsMat:a,armsMat:I,bootsMat:g,skin:n}),B=new f(new N(.74,.26,.42),C);B.position.set(0,1.48,-.02);const G=new f(new N(.6,.1,.34),g);G.position.set(0,1.24,0),G.rotation.z=.42;const tt=new f(new W(.3,.38,.42,8),I);tt.position.set(0,.74,0),t.add(B,G,tt);const at=new f(new Xt(.22,12,10,0,Math.PI*2,0,Math.PI*.58),_);at.position.set(0,.07,-.02);const F=new f(new W(.042,.032,.48,6),_);F.position.set(-.18,-.12,-.06);const z=F.clone();z.position.x=.18;const $=new f(new W(.055,.04,.56,6),_);$.position.set(0,-.14,-.19);const Z=new f(new kt(.18,.44,10),_);Z.rotation.x=Math.PI,Z.position.set(0,-.27,.1);const ot=new f(new ee(.055,.016,6,10),A);ot.rotation.x=Math.PI/2,ot.position.set(0,-.34,.11),k.head.add(at,F,z,$,Z,ot);const _t=O(1);_t.position.set(0,-.3,.06),_t.rotation.set(.85,0,-.15),k.armR.add(_t)}else if(i==="pavlichenko"){const I=new H({color:6120514,roughness:.84}),C=L({torsoMat:I,legsMat:I,armsMat:I,bootsMat:o,skin:e,slim:!0}),k=new f(new W(.24,.34,.44,10),I);k.position.set(0,.74,0);const B=new f(new N(.52,.1,.33),g);B.position.set(0,.96,0);const G=new f(new N(.24,.09,.32),I);G.position.set(0,1.54,0),t.add(k,B,G);const tt=new f(new N(.32,.32,.14),_);tt.position.set(0,-.05,-.13);const at=new f(new W(.055,.05,.24,8),_);at.position.set(-.17,-.04,-.02);const F=at.clone();F.position.x=.17;const z=new f(new N(.18,.15,.42),I);z.position.set(.03,.21,.02),z.rotation.z=-.18;const $=new f(new Xt(.028,6,6),h);$.position.set(.05,.21,.23),C.head.add(tt,at,F,z,$);const Z=E(),ot=new f(new W(.022,.024,.36,10),a);ot.rotation.x=Math.PI/2,ot.position.set(0,.08,.05),Z.add(ot),Z.position.set(-.08,-.24,.12),Z.rotation.set(.3,-.45,0),C.armR.add(Z)}else if(i==="hall"){const I=new H({color:10259309,roughness:.85}),C=new H({color:2500660,roughness:.88}),k=L({torsoMat:I,legsMat:a,armsMat:I,bootsMat:g,skin:e,slim:!0}),B=new f(new W(.27,.38,.66,12),I);B.position.set(0,.64,0);const G=new f(new N(.54,.1,.34),I);G.position.set(0,.96,0);const tt=new f(new N(.24,.32,.04),a);tt.position.set(0,1.36,.155);const at=new f(new W(.06,.055,.36,8),b);at.position.set(0,-.18,0),k.legL.add(at),t.add(B,G,tt);const F=new f(new N(.32,.34,.14),x);F.position.set(0,-.05,-.13);const z=new f(new W(.26,.21,.1,16),C);z.position.set(-.04,.19,-.01),z.rotation.z=.22,k.head.add(F,z);const $=new $t,Z=new f(new W(.026,.026,.62,10),a);Z.rotation.x=Math.PI/2,Z.position.set(0,0,.22);const ot=new f(new N(.24,.026,.042),a);ot.position.set(-.12,0,.18),$.add(Z,ot),$.position.set(0,-.32,.06),$.rotation.x=.65,k.armR.add($)}else if(i==="bavaud"){const I=new H({color:2237998,roughness:.82}),C=L({torsoMat:I,legsMat:a,armsMat:I,bootsMat:o,skin:e,slim:!0}),k=new f(new N(.54,.68,.32),I);k.position.set(0,.62,0);const B=new f(new N(.16,.26,.04),c);B.position.set(0,1.38,.155);const G=new f(new N(.045,.22,.05),a);G.position.set(0,1.35,.165),t.add(k,B,G);const tt=new f(new Xt(.215,12,10,0,Math.PI*2,0,Math.PI*.54),_);tt.position.set(0,.065,-.02),C.head.add(tt);const at=new $t,F=new f(new N(.048,.068,.28),a);F.position.set(0,.02,.16);const z=new f(new N(.042,.12,.06),g);z.position.set(0,-.06,.02),at.add(F,z),at.position.set(0,-.34,.05),at.rotation.x=.62,C.armR.add(at)}else if(i==="solzhenitsyn"){const I=new H({color:3883576,roughness:.92}),C=new H({color:4930351,roughness:.96}),k=L({torsoMat:I,legsMat:a,armsMat:I,bootsMat:o,skin:n}),B=new f(new N(.6,.34,.34),I);B.position.set(0,.82,0);const G=new f(new N(.62,.09,.36),g);G.position.set(0,.96,0),t.add(B,G);const tt=new f(new N(.28,.24,.16),m);tt.position.set(0,-.15,.14);const at=new f(new W(.24,.25,.2,12),C);at.position.set(0,.21,0);const F=new f(new N(.08,.24,.16),C);F.position.set(-.24,.06,-.02);const z=F.clone();z.position.x=.24,k.head.add(tt,at,F,z);const $=new $t,Z=new f(new W(.025,.025,.62,8),a);Z.rotation.x=Math.PI/2,Z.position.set(0,0,.22);const ot=new f(new W(.09,.09,.05,12),a);ot.rotation.x=Math.PI/2,ot.position.set(0,-.09,.18),$.add(Z,ot),$.position.set(0,-.32,.05),$.rotation.x=.62,k.armR.add($)}else if(i==="sakharov"){const I=new H({color:7041142,roughness:.8}),C=new H({color:12368564,roughness:.9}),k=L({torsoMat:I,legsMat:I,armsMat:I,bootsMat:o,skin:s,slim:!0}),B=new f(new N(.16,.28,.04),c);B.position.set(0,1.36,.155);const G=new f(new N(.045,.24,.05),a);G.position.set(0,1.33,.165),t.add(B,G);const tt=new f(new N(.06,.14,.22),C);tt.position.set(-.2,.04,-.04);const at=tt.clone();at.position.x=.2;const F=new f(new N(.36,.16,.08),C);F.position.set(0,.02,-.18);const z=new H({color:1710621,metalness:.6,roughness:.3}),$=new f(new ee(.055,.01,6,12),z);$.position.set(-.072,.02,.215);const Z=$.clone();Z.position.x=.072;const ot=new f(new N(.04,.012,.012),z);ot.position.set(0,.02,.215),k.head.add(tt,at,F,$,Z,ot);const _t=new $t,Rt=new f(new N(.044,.064,.26),a);Rt.position.set(0,.02,.15);const xt=new f(new N(.04,.12,.055),g);xt.position.set(0,-.06,.02),_t.add(Rt,xt),_t.position.set(0,-.34,.05),_t.rotation.x=.62,k.armR.add(_t)}else if(i==="nureyev"){const I=L({torsoMat:o,legsMat:o,armsMat:o,bootsMat:o,skin:e,slim:!0}),C=new f(new W(.26,.36,.72,12),o);C.position.set(0,.62,0);const k=new f(new ee(.18,.055,8,16),c);k.rotation.x=Math.PI/2,k.position.set(0,1.54,.02);const B=new f(new N(.14,.76,.045),c);B.position.set(.09,1.15,.175),B.rotation.z=.08;const G=new f(new N(.14,.85,.045),c);G.position.set(-.08,1.12,-.18),G.rotation.x=.12,t.add(C,k,B,G);const tt=new f(new Xt(.225,12,10,0,Math.PI*2,0,Math.PI*.58),_);tt.position.set(0,.07,-.02);const at=new f(new N(.32,.24,.12),_);at.position.set(0,-.02,-.14),I.head.add(tt,at);const F=new $t,z=new f(new N(.042,.06,.25),a);z.position.set(0,.02,.14);const $=new f(new N(.038,.11,.055),o);$.position.set(0,-.06,.02),F.add(z,$),F.position.set(0,-.34,.05),F.rotation.x=.62,I.armR.add(F)}else if(i==="gompo"){const I=new H({color:6043170,roughness:.88}),C=new H({color:13929282,roughness:.94}),k=L({torsoMat:I,legsMat:a,armsMat:I,bootsMat:g,skin:n}),B=new f(new W(.3,.42,.72,12),I);B.position.set(0,.6,0);const G=new f(new W(.425,.44,.14,12),C);G.position.set(0,.28,0);const tt=new f(new N(.6,.12,.34),h);tt.position.set(0,.96,0),t.add(B,G,tt);const at=new f(new ee(.24,.095,10,16),C);at.rotation.x=Math.PI/2,at.position.set(0,.2,0);const F=new f(new kt(.2,.2,10),h);F.position.set(0,.28,0),k.head.add(at,F);const z=E();z.position.set(-.08,-.24,.12),z.rotation.set(.3,-.45,0),k.armR.add(z)}else if(i==="pachen"){const I=new H({color:7280924,roughness:.85}),C=new H({color:15119906,roughness:.78}),k=L({torsoMat:I,legsMat:I,armsMat:I,bootsMat:g,skin:n,slim:!0}),B=new f(new W(.26,.42,.78,12),I);B.position.set(0,.56,0);const G=new f(new N(.56,.11,.34),C);G.position.set(0,.94,0);const tt=new f(new N(.14,.78,.33),C);tt.position.set(-.06,1.24,0),tt.rotation.z=-.36,t.add(B,G,tt);const at=new $t,F=new f(new N(.044,.064,.26),a);F.position.set(0,.02,.15);const z=new f(new N(.04,.12,.055),b);z.position.set(0,-.06,.02),at.add(F,z),at.position.set(0,-.34,.05),at.rotation.x=.62,k.armR.add(at)}else if(i==="songtsen"){const I=new H({color:10230557,roughness:.72}),C=L({torsoMat:I,legsMat:I,armsMat:I,bootsMat:g,skin:n}),k=new f(new W(.3,.44,.78,12),I);k.position.set(0,.56,0);const B=new f(new W(.445,.455,.1,12),A);B.position.set(0,.22,0);const G=new f(new ee(.22,.045,8,16),A);G.rotation.x=Math.PI/2,G.position.set(0,1.54,0);const tt=new f(new N(.6,.1,.34),A);tt.position.set(0,.96,0),t.add(k,B,G,tt);const at=new f(new W(.24,.22,.26,14),I);at.position.set(0,.24,0);const F=new f(new Xt(.18,12,10),I);F.position.set(0,.42,0);const z=new f(new ee(.23,.03,6,16),A);z.rotation.x=Math.PI/2,z.position.set(0,.2,0);const $=new f(new Rs(.06,0),A);$.position.set(0,.32,.22),C.head.add(at,F,z,$);const Z=new f(new ee(.45,.022,8,18,Math.PI*.95),A);Z.rotation.z=-Math.PI*.48,Z.position.set(-.08,-.1,.12),C.armL.add(Z);const ot=new $t,_t=new f(new N(.03,.85,.08),v);_t.position.y=.48;const Rt=new f(new N(.05,.05,.24),A);Rt.position.y=.04,ot.add(_t,Rt),ot.position.set(0,-.32,.08),ot.rotation.x=.72,C.armR.add(ot)}const Q=i==="earp"||i==="jane"||i==="billy"?7029800:i==="musashi"||i==="tomoe"||i==="masamune"?4540738:i==="ulysses"||i==="achilles"||i==="heracles"?15261904:i==="erik"||i==="leif"||i==="ragnar"?4938862:i==="pavlichenko"||i==="hall"||i==="bavaud"?6053980:i==="solzhenitsyn"||i==="sakharov"||i==="nureyev"?7041144:i==="gompo"||i==="pachen"||i==="songtsen"?9386540:6120041,Y=new f(new W(.72,.82,.16,20),new H({color:Q,roughness:.78}));Y.position.y=-.08;const X=new f(new ee(.76,.025,8,28),A);return X.rotation.x=Math.PI/2,X.position.y=.01,t.add(Y,X),t}const Zt=new Map;function ye(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,e}function Se(i,t=1,e=1,n=!0){const s=new gd(i);return s.wrapS=ws,s.wrapT=ws,s.repeat.set(t,e),n&&(s.colorSpace=tn),s.anisotropy=8,s.needsUpdate=!0,s}function vn(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Fn(i="western",t=2,e=2){const n=`wood_${i}_${t}_${e}`;if(Zt.has(n))return Zt.get(n);const s=512,o=ye(s,s),r=o.getContext("2d"),a=ye(s,s),l=a.getContext("2d"),c={western:["#8b5a34","#7a4c2a","#9c673c","#6e4223","#a67346"],saloon:["#6a3820","#5b2e19","#794126","#4f2614","#864c2e"],weathered:["#9c8669","#8a765c","#ab9578","#7d6a52","#b39e82"],darkJapan:["#3d271c","#332017","#493022","#2b1a12","#523626"],cedar:["#7d4e2d","#6f4426","#8a5935","#633c20","#94623c"],alpine:["#6b4428","#5c3920","#7a4f30","#4f301a","#855838"],redLacquer:["#b8291e","#a32118","#c73226","#911c14","#cf3b2e"]},h=c[i]||c.western,d=8,u=s/d;for(let g=0;g<d;g++){const _=g*u,x=h[g%h.length];r.fillStyle=x,r.fillRect(0,_,s,u),l.fillStyle="#9a9a9a",l.fillRect(0,_,s,u);for(let S=0;S<36;S++){const M=_+Math.random()*u,v=.05+Math.random()*.1;r.strokeStyle=Math.random()>.5?`rgba(255,220,180,${v})`:`rgba(20,10,4,${v*1.4})`,r.lineWidth=1+Math.random()*2,r.beginPath(),r.moveTo(0,M);for(let A=0;A<=s;A+=64)r.lineTo(A,M+Math.sin(A*.02+g*2.1+S)*2.2);r.stroke(),l.strokeStyle=Math.random()>.5?"rgba(220,220,220,0.16)":"rgba(60,60,60,0.18)",l.lineWidth=1.2,l.beginPath(),l.moveTo(0,M),l.lineTo(s,M),l.stroke()}if(vn(g,3.7)>.45){const S=60+vn(g,9.1)*(s-120),M=_+u*(.3+vn(g,5.2)*.4),v=r.createRadialGradient(S,M,1,S,M,12);v.addColorStop(0,"rgba(30,15,6,0.65)"),v.addColorStop(1,"rgba(30,15,6,0)"),r.fillStyle=v,r.beginPath(),r.ellipse(S,M,14,7,0,0,Math.PI*2),r.fill()}r.fillStyle="rgba(15, 8, 3, 0.85)",r.fillRect(0,_,s,3),r.fillStyle="rgba(255, 225, 185, 0.14)",r.fillRect(0,_+3,s,2),l.fillStyle="#141414",l.fillRect(0,_,s,3.5);const m=(g*173+95)%(s-80)+40;r.fillStyle="rgba(12,6,2,0.75)",r.fillRect(m,_,2.5,u),l.fillStyle="#1a1a1a",l.fillRect(m,_,2.5,u);for(const S of[m-10,m+12])for(const M of[_+12,_+u-12])r.fillStyle="#241c16",r.beginPath(),r.arc(S,M,2.6,0,Math.PI*2),r.fill()}const p={map:Se(o,t,e,!0),bumpMap:Se(a,t,e,!1)};return Zt.set(n,p),p}function Ze(i="desert",t=24,e=24){const n=`ground_${i}_${t}_${e}`;if(Zt.has(n))return Zt.get(n);const s=512,o=ye(s,s),r=o.getContext("2d"),a=ye(s,s),l=a.getContext("2d");if(i==="desert"){r.fillStyle="#c48f56",r.fillRect(0,0,s,s),l.fillStyle="#808080",l.fillRect(0,0,s,s);for(let h=0;h<420;h++){const d=Math.random()*s,u=Math.random()*s,p=6+Math.random()*34,g=Math.random();r.fillStyle=g>.6?"rgba(218, 168, 108, 0.16)":g>.25?"rgba(155, 96, 48, 0.16)":"rgba(122, 74, 38, 0.12)",r.beginPath(),r.ellipse(d,u,p*1.4,p*.7,Math.random()*Math.PI,0,Math.PI*2),r.fill(),l.fillStyle=g>.5?"rgba(195,195,195,0.18)":"rgba(65,65,65,0.18)",l.beginPath(),l.arc(d,u,p*.45,0,Math.PI*2),l.fill()}for(let h=0;h<240;h++){const d=Math.random()*s,u=Math.random()*s;r.fillStyle=Math.random()>.5?"#8f5d34":"#dcb27b",r.fillRect(d,u,2+Math.random()*3,2+Math.random()*2)}}else if(i==="japan_moss"){r.fillStyle="#4e6338",r.fillRect(0,0,s,s),l.fillStyle="#808080",l.fillRect(0,0,s,s);for(let h=0;h<500;h++){const d=Math.random()*s,u=Math.random()*s,p=8+Math.random()*26,g=Math.random();r.fillStyle=g>.65?"rgba(98, 128, 62, 0.22)":g>.3?"rgba(64, 84, 42, 0.22)":"rgba(115, 92, 62, 0.18)",r.beginPath(),r.arc(d,u,p,0,Math.PI*2),r.fill(),l.fillStyle=g>.5?"rgba(200,200,200,0.16)":"rgba(60,60,60,0.16)",l.beginPath(),l.arc(d,u,p*.5,0,Math.PI*2),l.fill()}for(let h=0;h<95;h++)r.fillStyle="rgba(255, 196, 214, 0.65)",r.beginPath(),r.ellipse(Math.random()*s,Math.random()*s,3,1.8,Math.random()*3,0,Math.PI*2),r.fill()}else if(i==="zen_sand"){r.fillStyle="#dfd8c8",r.fillRect(0,0,s,s),l.fillStyle="#808080",l.fillRect(0,0,s,s);for(let h=0;h<s;h+=16){r.strokeStyle="rgba(145, 136, 120, 0.55)",r.lineWidth=5,r.beginPath();for(let d=0;d<=s;d+=16){const u=h+Math.sin(d/s*Math.PI*4)*5;d===0?r.moveTo(d,u):r.lineTo(d,u)}r.stroke(),l.strokeStyle="#303030",l.lineWidth=6,l.beginPath();for(let d=0;d<=s;d+=16){const u=h+Math.sin(d/s*Math.PI*4)*5;d===0?l.moveTo(d,u):l.lineTo(d,u)}l.stroke()}}else if(i==="alpine_meadow"){r.fillStyle="#4f8236",r.fillRect(0,0,s,s),l.fillStyle="#808080",l.fillRect(0,0,s,s);for(let d=0;d<650;d++){const u=Math.random()*s,p=Math.random()*s,g=6+Math.random()*26,_=Math.random();r.fillStyle=_>.6?"rgba(112, 162, 62, 0.24)":_>.25?"rgba(62, 110, 42, 0.22)":"rgba(146, 178, 72, 0.16)",r.beginPath(),r.arc(u,p,g,0,Math.PI*2),r.fill(),l.fillStyle=_>.5?"rgba(200,200,200,0.16)":"rgba(70,70,70,0.16)",l.beginPath(),l.arc(u,p,g*.4,0,Math.PI*2),l.fill()}const h=["#ffe359","#ffffff","#63a8ff","#ff94b8"];for(let d=0;d<110;d++)r.fillStyle=h[d%h.length],r.beginPath(),r.arc(Math.random()*s,Math.random()*s,2.2,0,Math.PI*2),r.fill()}else if(i==="cobble"){r.fillStyle="#6c655d",r.fillRect(0,0,s,s),l.fillStyle="#252525",l.fillRect(0,0,s,s);const h=8,d=8,u=s/d,p=s/h;for(let g=0;g<h;g++)for(let _=0;_<d;_++){const x=g%2*(u*.5),m=(_*u+x)%s,S=g*p,M=118+Math.floor(vn(_,g)*44);r.fillStyle=`rgb(${M}, ${M-4}, ${M-10})`,r.fillRect(m+3,S+3,u-6,p-6),l.fillStyle="#d4d4d4",l.fillRect(m+3,S+3,u-6,p-6)}}else if(i==="greek_sand"){r.fillStyle="#e5cf9c",r.fillRect(0,0,s,s),l.fillStyle="#808080",l.fillRect(0,0,s,s);for(let h=0;h<420;h++){const d=Math.random()*s,u=Math.random()*s,p=8+Math.random()*28;r.fillStyle=Math.random()>.5?"rgba(248, 234, 198, 0.24)":"rgba(196, 162, 104, 0.16)",r.beginPath(),r.ellipse(d,u,p*1.5,p*.65,.25,0,Math.PI*2),r.fill(),l.fillStyle=Math.random()>.5?"rgba(190,190,190,0.16)":"rgba(70,70,70,0.16)",l.beginPath(),l.arc(d,u,p*.4,0,Math.PI*2),l.fill()}}else if(i==="arctic_snow"){r.fillStyle="#e6eff8",r.fillRect(0,0,s,s),l.fillStyle="#828282",l.fillRect(0,0,s,s);for(let h=0;h<380;h++){const d=Math.random()*s,u=Math.random()*s,p=10+Math.random()*34;r.fillStyle=Math.random()>.5?"rgba(255, 255, 255, 0.35)":"rgba(176, 202, 230, 0.22)",r.beginPath(),r.ellipse(d,u,p*1.4,p*.7,.4,0,Math.PI*2),r.fill(),l.fillStyle=Math.random()>.5?"rgba(210,210,210,0.18)":"rgba(65,65,65,0.18)",l.beginPath(),l.arc(d,u,p*.45,0,Math.PI*2),l.fill()}for(let h=0;h<120;h++)r.fillStyle="rgba(255, 255, 255, 0.8)",r.fillRect(Math.random()*s,Math.random()*s,2,2)}else if(i==="soviet_snow"){r.fillStyle="#adb4bc",r.fillRect(0,0,s,s),l.fillStyle="#808080",l.fillRect(0,0,s,s);for(let h=0;h<420;h++){const d=Math.random()*s,u=Math.random()*s,p=10+Math.random()*34,g=Math.random();r.fillStyle=g>.55?"rgba(225, 232, 240, 0.34)":g>.25?"rgba(130, 138, 146, 0.24)":"rgba(92, 98, 104, 0.2)",r.beginPath(),r.ellipse(d,u,p*1.3,p*.75,.3,0,Math.PI*2),r.fill()}}else if(i==="tibet_ochre"){r.fillStyle="#b48d52",r.fillRect(0,0,s,s),l.fillStyle="#808080",l.fillRect(0,0,s,s);for(let h=0;h<480;h++){const d=Math.random()*s,u=Math.random()*s,p=8+Math.random()*28,g=Math.random();r.fillStyle=g>.6?"rgba(198, 160, 96, 0.24)":g>.3?"rgba(148, 110, 58, 0.22)":"rgba(128, 108, 72, 0.2)",r.beginPath(),r.ellipse(d,u,p*1.4,p*.7,Math.random()*Math.PI,0,Math.PI*2),r.fill(),l.fillStyle=g>.5?"rgba(195,195,195,0.16)":"rgba(65,65,65,0.16)",l.beginPath(),l.arc(d,u,p*.45,0,Math.PI*2),l.fill()}for(let h=0;h<200;h++)r.fillStyle=Math.random()>.5?"#8e6a3a":"#d2b47c",r.fillRect(Math.random()*s,Math.random()*s,3,2)}const c={map:Se(o,t,e,!0),bumpMap:Se(a,t,e,!1)};return Zt.set(n,c),c}function Kn(i="castle",t=2,e=2){const n=`stone_${i}_${t}_${e}`;if(Zt.has(n))return Zt.get(n);const s=512,o=ye(s,s),r=o.getContext("2d"),a=ye(s,s),l=a.getContext("2d"),c=i==="redrock"?"#7a3b22":i==="temple"?"#4a4d46":"#57534e";if(r.fillStyle=c,r.fillRect(0,0,s,s),l.fillStyle="#222222",l.fillRect(0,0,s,s),i==="redrock")for(let d=0;d<s;d+=6){const u=Math.sin(d*.045)*18+Math.cos(d*.11)*10,p=Math.min(255,Math.max(80,178+u)),g=Math.min(255,Math.max(40,86+u*.6)),_=Math.min(255,Math.max(25,50+u*.4));r.fillStyle=`rgb(${p|0},${g|0},${_|0})`,r.fillRect(0,d,s,7);const x=Math.min(240,Math.max(40,128+u*2.5))|0;l.fillStyle=`rgb(${x},${x},${x})`,l.fillRect(0,d,s,7)}else{const u=s/8;for(let p=0;p<8;p++){let g=p%2*-36;for(;g<s;){const _=64+Math.floor(vn(g,p)*58),x=i==="temple"?108+Math.floor(vn(g+3,p+5)*42):122+Math.floor(vn(g+1,p+9)*52),m=i==="temple"?6:0;r.fillStyle=`rgb(${x}, ${x+m}, ${x-4})`,r.fillRect(g+3,p*u+3,_-5,u-5),r.fillStyle="rgba(255,255,255,0.12)",r.fillRect(g+3,p*u+3,_-5,4),l.fillStyle="#cfcfcf",l.fillRect(g+3,p*u+3,_-5,u-5),g+=_}}for(let p=0;p<90;p++)r.fillStyle=i==="temple"?"rgba(72, 108, 52, 0.22)":"rgba(60, 56, 48, 0.16)",r.beginPath(),r.arc(Math.random()*s,Math.random()*s,6+Math.random()*18,0,Math.PI*2),r.fill()}const h={map:Se(o,t,e,!0),bumpMap:Se(a,t,e,!1)};return Zt.set(n,h),h}function eg(i=2,t=1){const e=`shoji_${i}_${t}`;if(Zt.has(e))return Zt.get(e);const n=512,s=ye(n,n),o=s.getContext("2d"),r=o.createLinearGradient(0,0,0,n);r.addColorStop(0,"#fff2d2"),r.addColorStop(.55,"#f6dfb2"),r.addColorStop(1,"#e6c388"),o.fillStyle=r,o.fillRect(0,0,n,n);for(let h=0;h<200;h++)o.fillStyle="rgba(255,255,255,0.14)",o.fillRect(Math.random()*n,Math.random()*n,12,1);o.fillStyle="#2d1a11";const a=6,l=8;for(let h=0;h<=a;h++){const d=h/a*n;o.fillRect(d-5,0,10,n)}for(let h=0;h<=l;h++){const d=h/l*n;o.fillRect(0,d-4,n,8)}o.lineWidth=24,o.strokeStyle="#23130c",o.strokeRect(0,0,n,n);const c=Se(s,i,t,!0);return Zt.set(e,c),c}function xa(i="japan",t=4,e=2){const n=`roof_${i}_${t}_${e}`;if(Zt.has(n))return Zt.get(n);const s=512,o=ye(s,s),r=o.getContext("2d"),a=ye(s,s),l=a.getContext("2d");if(i==="japan"){r.fillStyle="#2e353f",r.fillRect(0,0,s,s),l.fillStyle="#404040",l.fillRect(0,0,s,s);const h=10,d=10,u=s/h,p=s/d;for(let g=0;g<d;g++)for(let _=0;_<h;_++){const x=_*u,m=g*p,S=r.createLinearGradient(x,m,x+u,m);S.addColorStop(0,"#1e242c"),S.addColorStop(.5,"#4c5766"),S.addColorStop(1,"#1d232b"),r.fillStyle=S,r.fillRect(x+2,m+2,u-4,p-3),r.fillStyle="rgba(0,0,0,0.55)",r.fillRect(x,m+p-4,u,4),l.fillStyle="#cccccc",l.beginPath(),l.arc(x+u/2,m+p/2,u*.42,0,Math.PI*2),l.fill()}}else if(i==="terracotta"){r.fillStyle="#a8472a",r.fillRect(0,0,s,s),l.fillStyle="#404040",l.fillRect(0,0,s,s);const h=10,d=9,u=s/h,p=s/d;for(let g=0;g<d;g++)for(let _=0;_<h;_++){const x=_*u,m=g*p,S=r.createLinearGradient(x,m,x+u,m);S.addColorStop(0,"#8c351e"),S.addColorStop(.5,"#d46b44"),S.addColorStop(1,"#7a2b17"),r.fillStyle=S,r.fillRect(x+2,m+2,u-4,p-3),r.fillStyle="rgba(0,0,0,0.4)",r.fillRect(x,m+p-4,u,4),l.fillStyle="#d0d0d0",l.fillRect(x+2,m+2,u-4,p-4)}}else{r.fillStyle="#4a3525",r.fillRect(0,0,s,s),l.fillStyle="#333333",l.fillRect(0,0,s,s);const h=12,d=10,u=s/d,p=s/h;for(let g=0;g<h;g++)for(let _=0;_<d;_++){const x=g%2*(u*.5),m=(_*u+x)%s,S=g*p,M=78+Math.floor(vn(_,g)*34);r.fillStyle=`rgb(${M+18}, ${M}, ${M-16})`,r.fillRect(m+1,S+1,u-3,p-3),l.fillStyle="#c8c8c8",l.fillRect(m+1,S+1,u-3,p-3)}}const c={map:Se(o,t,e,!0),bumpMap:Se(a,t,e,!1)};return Zt.set(n,c),c}function ng(i=1,t=1){const e=`alpine_fachwerk_${i}_${t}`;if(Zt.has(e))return Zt.get(e);const n=512,s=ye(n,n),o=s.getContext("2d");o.fillStyle="#ebe1cd",o.fillRect(0,0,n,n);for(let a=0;a<300;a++)o.fillStyle=Math.random()>.5?"rgba(255,255,255,0.16)":"rgba(145,125,95,0.12)",o.beginPath(),o.arc(Math.random()*n,Math.random()*n,6+Math.random()*20,0,Math.PI*2),o.fill();o.strokeStyle="#3e2718",o.fillStyle="#3e2718",o.fillRect(0,0,n,28),o.fillRect(0,n-28,n,28),o.fillRect(0,n/2-12,n,24),o.fillRect(0,0,26,n),o.fillRect(n-26,0,26,n),o.fillRect(n/2-12,0,24,n),o.lineWidth=20,o.beginPath(),o.moveTo(20,n/2),o.lineTo(n/2,20),o.moveTo(n-20,n/2),o.lineTo(n/2,20),o.stroke();const r=Se(s,i,t,!0);return Zt.set(e,r),r}function ig(i,t={}){const{bg:e="#3b2112",border:n="#d49a45",fg:s="#f8e6c1",sub:o="",width:r=512,height:a=160,font:l="bold 72px Georgia, serif"}=t,c=`sign_${i}_${o}_${e}_${s}`;if(Zt.has(c))return Zt.get(c);const h=ye(r,a),d=h.getContext("2d");d.fillStyle=e,d.fillRect(0,0,r,a);for(let p=0;p<6;p++)d.fillStyle="rgba(0,0,0,0.16)",d.fillRect(0,p/6*a,r,2);d.strokeStyle=n,d.lineWidth=10,d.strokeRect(10,10,r-20,a-20),d.lineWidth=3,d.strokeRect(20,20,r-40,a-40),d.fillStyle=s,d.font=l,d.textAlign="center",d.textBaseline="middle",d.shadowColor="rgba(0,0,0,0.7)",d.shadowBlur=4,d.shadowOffsetY=3,d.fillText(i,r/2,o?a*.44:a*.52),o&&(d.font="bold 24px Georgia, serif",d.fillStyle=n,d.fillText(o,r/2,a*.78));const u=Se(h,1,1,!0);return u.wrapS=Te,u.wrapT=Te,Zt.set(c,u),u}function fo(i="austria"){const t=`banner_${i}`;if(Zt.has(t))return Zt.get(t);const e=ye(256,512),n=e.getContext("2d");i==="austria"?(n.fillStyle="#c41e22",n.fillRect(0,0,256,512),n.fillStyle="#f2ede0",n.fillRect(0,170,256,170),n.strokeStyle="#d4a63e",n.lineWidth=14,n.strokeRect(7,7,242,498),n.fillStyle="#1d1916",n.beginPath(),n.moveTo(128,195),n.lineTo(170,245),n.lineTo(148,258),n.lineTo(160,315),n.lineTo(128,294),n.lineTo(96,315),n.lineTo(108,258),n.lineTo(86,245),n.closePath(),n.fill()):i==="uri"?(n.fillStyle="#f2c629",n.fillRect(0,0,256,512),n.strokeStyle="#1a1510",n.lineWidth=10,n.strokeRect(5,5,246,502),n.strokeStyle="#141210",n.lineWidth=22,n.lineCap="round",n.beginPath(),n.moveTo(78,178),n.quadraticCurveTo(32,130,56,78),n.moveTo(178,178),n.quadraticCurveTo(224,130,200,78),n.stroke(),n.fillStyle="#141210",n.beginPath(),n.ellipse(54,194,24,11,-.3,0,Math.PI*2),n.ellipse(202,194,24,11,.3,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(70,172),n.lineTo(186,172),n.lineTo(166,305),n.quadraticCurveTo(128,336,90,305),n.closePath(),n.fill(),n.fillStyle="#fff5dc",n.beginPath(),n.ellipse(98,224,14,9,.15,0,Math.PI*2),n.ellipse(158,224,14,9,-.15,0,Math.PI*2),n.fill(),n.fillStyle="#c41e22",n.beginPath(),n.arc(100,224,5,0,Math.PI*2),n.arc(156,224,5,0,Math.PI*2),n.fill(),n.fillStyle="#d12026",n.beginPath(),n.moveTo(116,316),n.quadraticCurveTo(128,378,140,316),n.closePath(),n.fill(),n.strokeStyle="#d12026",n.lineWidth=11,n.beginPath(),n.arc(128,304,22,.15*Math.PI,.85*Math.PI),n.stroke(),n.fillStyle="#1a1510",n.font="bold 34px Georgia, serif",n.textAlign="center",n.fillText("URI • 1307",128,456)):i==="swiss"?(n.fillStyle="#c92323",n.fillRect(0,0,256,512),n.fillStyle="#ffffff",n.fillRect(102,130,52,190),n.fillRect(33,199,190,52),n.strokeStyle="#e8c468",n.lineWidth=10,n.strokeRect(5,5,246,502)):i==="japan"&&(n.fillStyle="#1b2845",n.fillRect(0,0,256,512),n.strokeStyle="#e3b859",n.lineWidth=10,n.strokeRect(8,8,240,496),n.strokeStyle="#f0c663",n.lineWidth=12,n.beginPath(),n.arc(128,180,62,0,Math.PI*2),n.stroke(),n.fillStyle="#f0c663",n.font="bold 94px Georgia, serif",n.textAlign="center",n.fillText("武",128,212),n.fillText("士",128,370));const s=Se(e,1,1,!0);return s.wrapS=Te,s.wrapT=Te,Zt.set(t,s),s}function sg(){const i="wanted_poster";if(Zt.has(i))return Zt.get(i);const t=ye(256,340),e=t.getContext("2d");e.fillStyle="#e5cf9e",e.fillRect(0,0,256,340),e.strokeStyle="#4a3118",e.lineWidth=8,e.strokeRect(10,10,236,320),e.fillStyle="#2d180a",e.font="bold 40px Georgia, serif",e.textAlign="center",e.fillText("WANTED",128,56),e.fillStyle="#3b2412",e.beginPath(),e.ellipse(128,130,56,12,0,0,Math.PI*2),e.fill(),e.fillRect(98,96,60,34),e.beginPath(),e.arc(128,162,26,0,Math.PI*2),e.fill(),e.fillRect(88,190,80,46),e.font="bold 26px Georgia, serif",e.fillText("DEAD OR ALIVE",128,272),e.fillStyle="#992214",e.font="bold 34px Georgia, serif",e.fillText("$5,000",128,312);const n=Se(t,1,1,!0);return Zt.set(i,n),n}function og(i=2,t=2){const e=`marble_${i}_${t}`;if(Zt.has(e))return Zt.get(e);const n=512,s=ye(n,n),o=s.getContext("2d"),r=ye(n,n),a=r.getContext("2d");o.fillStyle="#f5f1e8",o.fillRect(0,0,n,n),a.fillStyle="#909090",a.fillRect(0,0,n,n);for(let c=0;c<26;c++){o.strokeStyle=c%3===0?"rgba(186, 174, 152, 0.26)":"rgba(155, 162, 172, 0.2)",o.lineWidth=1.5+Math.random()*3.5,o.beginPath();let h=Math.random()*n;o.moveTo(0,h);for(let d=0;d<=n;d+=32)h+=Math.sin(d*.02+c)*8+(Math.random()-.5)*6,o.lineTo(d,h);o.stroke()}o.strokeStyle="rgba(140, 128, 108, 0.35)",o.lineWidth=2,a.strokeStyle="#383838",a.lineWidth=3;for(let c=0;c<4;c++){const h=c/4*n;o.beginPath(),o.moveTo(0,h),o.lineTo(n,h),o.stroke(),a.beginPath(),a.moveTo(0,h),a.lineTo(n,h),a.stroke()}const l={map:Se(s,i,t,!0),bumpMap:Se(r,i,t,!1)};return Zt.set(e,l),l}function rg(){const i="spartan_shield_lambda";if(Zt.has(i))return Zt.get(i);const t=256,e=ye(t,t),n=e.getContext("2d"),s=n.createRadialGradient(128,128,12,128,128,126);s.addColorStop(0,"#f3ca6b"),s.addColorStop(.7,"#c78f34"),s.addColorStop(.92,"#8c5d19"),s.addColorStop(1,"#5e3c0e"),n.fillStyle=s,n.beginPath(),n.arc(128,128,126,0,Math.PI*2),n.fill(),n.strokeStyle="#ffe394",n.lineWidth=10,n.beginPath(),n.arc(128,128,114,0,Math.PI*2),n.stroke(),n.strokeStyle="#9e1919",n.lineWidth=24,n.lineCap="round",n.lineJoin="miter",n.beginPath(),n.moveTo(64,198),n.lineTo(128,54),n.lineTo(192,198),n.stroke();const o=Se(e,1,1,!0);return o.wrapS=Te,o.wrapT=Te,Zt.set(i,o),o}function Uc(i=0){const t=`viking_shield_${i}`;if(Zt.has(t))return Zt.get(t);const e=256,n=ye(e,e),s=n.getContext("2d"),o=[["#a82424","#e8dec8"],["#204b7a","#e8dec8"],["#1e523a","#d9a438"],["#8c2420","#d9a438"]],[r,a]=o[i%o.length];for(let h=0;h<8;h++)s.fillStyle=h%2===0?r:a,s.beginPath(),s.moveTo(128,128),s.arc(128,128,122,h*Math.PI/4,(h+1)*Math.PI/4),s.closePath(),s.fill();s.strokeStyle="#4a3a2a",s.lineWidth=14,s.beginPath(),s.arc(128,128,118,0,Math.PI*2),s.stroke();const l=s.createRadialGradient(122,122,4,128,128,30);l.addColorStop(0,"#eef3f7"),l.addColorStop(.6,"#7a8490"),l.addColorStop(1,"#2b3036"),s.fillStyle=l,s.beginPath(),s.arc(128,128,28,0,Math.PI*2),s.fill();const c=Se(n,1,1,!0);return c.wrapS=Te,c.wrapT=Te,Zt.set(t,c),c}function Nc(i="greece"){const t=`sail_${i}`;if(Zt.has(t))return Zt.get(t);const e=ye(256,256),n=e.getContext("2d"),s=6,o=256/s,r=i==="greece"?"#f5efe2":"#f2e8d5",a=i==="greece"?"#2366a8":"#a82222";for(let c=0;c<s;c++)n.fillStyle=c%2===0?r:a,n.fillRect(c*o,0,o+1,256);n.strokeStyle="rgba(0,0,0,0.18)",n.lineWidth=4,n.strokeRect(2,2,252,252);const l=Se(e,1,1,!0);return l.wrapS=Te,l.wrapT=Te,Zt.set(t,l),l}function Fc(i=2,t=2){const e=`concrete_${i}_${t}`;if(Zt.has(e))return Zt.get(e);const n=512,s=ye(n,n),o=s.getContext("2d"),r=ye(n,n),a=r.getContext("2d");o.fillStyle="#7e817d",o.fillRect(0,0,n,n),a.fillStyle="#808080",a.fillRect(0,0,n,n);for(let c=0;c<n;c+=64)o.fillStyle="rgba(42, 45, 42, 0.35)",o.fillRect(0,c,n,3),a.fillStyle="#383838",a.fillRect(0,c,n,3);for(let c=0;c<360;c++){const h=Math.random()*n,d=Math.random()*n,u=6+Math.random()*24;o.fillStyle=Math.random()>.5?"rgba(170,174,168,0.14)":"rgba(55,58,54,0.16)",o.beginPath(),o.arc(h,d,u,0,Math.PI*2),o.fill()}for(let c=0;c<45;c++){const h=Math.random()*n;o.fillStyle="rgba(45, 50, 42, 0.16)",o.fillRect(h,0,3+Math.random()*6,n)}const l={map:Se(s,i,t,!0),bumpMap:Se(r,i,t,!1)};return Zt.set(e,l),l}function ag(i="#565c52"){const t=`balkenkreuz_${i}`;if(Zt.has(t))return Zt.get(t);const e=256,n=ye(e,e),s=n.getContext("2d");s.fillStyle=i,s.fillRect(0,0,e,e),s.fillStyle="#ebe8df",s.fillRect(100,32,56,192),s.fillRect(32,100,192,56),s.fillStyle="#1b1d1c",s.fillRect(110,42,36,172),s.fillRect(42,110,172,36);const o=Se(n,1,1,!0);return o.wrapS=Te,o.wrapT=Te,Zt.set(t,o),o}function lg(i=3,t=2){const e=`soviet_panel_${i}_${t}`;if(Zt.has(e))return Zt.get(e);const n=512,s=ye(n,n),o=s.getContext("2d");o.fillStyle="#8b8f91",o.fillRect(0,0,n,n);const r=4,a=5,l=n/r,c=n/a;for(let d=0;d<a;d++)for(let u=0;u<r;u++){const p=u*l,g=d*c,_=132+Math.floor(vn(u,d)*20);o.fillStyle=`rgb(${_},${_+2},${_+3})`,o.fillRect(p+2,g+2,l-4,c-4),o.strokeStyle="#5a5d60",o.lineWidth=3,o.strokeRect(p+1,g+1,l-2,c-2);const x=p+18,m=g+16,S=l-36,M=c-32,v=vn(u*3+1,d*5+2)>.42;o.fillStyle=v?"#e8c474":"#323a44",o.fillRect(x,m,S,M),o.strokeStyle="#d6d4cc",o.lineWidth=4,o.strokeRect(x,m,S,M),o.beginPath(),o.moveTo(x+S*.5,m),o.lineTo(x+S*.5,m+M),o.moveTo(x,m+M*.38),o.lineTo(x+S,m+M*.38),o.stroke()}const h=Se(s,i,t,!0);return Zt.set(e,h),h}function ms(i,t="#a61c1c",e="#f7e4b2",n=512,s=128){const o="slogan_"+i+"_"+t+"_"+e+"_"+n+"_"+s;if(Zt.has(o))return Zt.get(o);const r=ye(n,s),a=r.getContext("2d");a.fillStyle=t,a.fillRect(0,0,n,s),a.strokeStyle=e,a.lineWidth=6,a.strokeRect(6,6,n-12,s-12),a.fillStyle=e,a.font="bold "+Math.floor(s*.46)+"px Georgia, serif",a.textAlign="center",a.textBaseline="middle",a.fillText(i,n/2,s/2+2,n-32);const l=Se(r,1,1,!0);return l.wrapS=Te,l.wrapT=Te,Zt.set(o,l),l}function cg(){const i="tibet_thangka";if(Zt.has(i))return Zt.get(i);const t=ye(256,384),e=t.getContext("2d");e.fillStyle="#1d3c6a",e.fillRect(0,0,256,384),e.strokeStyle="#d4a63a",e.lineWidth=8,e.strokeRect(12,12,232,360),e.fillStyle="#7e1d1c",e.fillRect(28,36,200,312),e.fillStyle="#e5b842",e.beginPath(),e.arc(128,150,56,0,Math.PI*2),e.fill(),e.fillStyle="#992822",e.beginPath(),e.arc(128,150,44,0,Math.PI*2),e.fill(),e.fillStyle="#f0c858",e.beginPath(),e.arc(128,138,18,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(86,224),e.lineTo(128,156),e.lineTo(170,224),e.closePath(),e.fill(),e.fillStyle="#e67e88";for(let s=-3;s<=3;s++)e.beginPath(),e.ellipse(128+s*16,238,12,20,s*.14,0,Math.PI*2),e.fill();const n=Se(t,1,1,!0);return n.wrapS=Te,n.wrapT=Te,Zt.set(i,n),n}const $r={cowboy:{name:"Outlaw Cowboy",hp:65,speed:3.6,range:34,fireRate:1.55,damage:11,score:150,style:"ranged",projectileColor:16765542},bandito:{name:"Mexican Bandito",hp:75,speed:4.5,range:30,fireRate:1.25,damage:13,score:200,style:"ranged",projectileColor:16756290},boss_west:{name:"EL DIABLO — KING OF RED GULCH",hp:360,speed:4.2,range:42,fireRate:.78,damage:16,score:1200,style:"boss_ranged",scale:1.28,projectileColor:16739115},ninja:{name:"Shadow Ninja",hp:60,speed:6.4,range:24,fireRate:1.15,damage:12,score:200,style:"skirmisher",projectileColor:13955583},ronin:{name:"Rōnin Samurai",hp:95,speed:4.6,range:22,fireRate:1.4,damage:16,score:260,style:"hybrid",projectileColor:16758876},boss_japan:{name:"LORD KUROGANE — IRON SHOGUN",hp:420,speed:5,range:34,fireRate:.85,damage:18,score:1500,style:"boss_hybrid",scale:1.32,projectileColor:16734774},halberdier:{name:"Austrian Halberdier",hp:95,speed:4.9,range:3.4,fireRate:1.05,damage:18,score:220,style:"melee",projectileColor:16777215},arquebusier:{name:"Habsburg Arquebusier",hp:75,speed:3.4,range:38,fireRate:1.5,damage:15,score:240,style:"ranged",projectileColor:16770204},boss_swiss:{name:"CAPTAIN VON GESSLER — HABSBURG VOGT",hp:460,speed:4.6,range:38,fireRate:.8,damage:19,score:1800,style:"boss_ranged",scale:1.32,projectileColor:16732728},spartan_hoplite:{name:"Spartan Hoplite",hp:95,speed:4.8,range:3.5,fireRate:1.05,damage:17,score:230,style:"melee",projectileColor:16765542},spartan_skirmisher:{name:"Spartan Javelineer",hp:78,speed:4.1,range:35,fireRate:1.4,damage:14,score:240,style:"ranged",projectileColor:16765542},boss_greece:{name:"ARCHIDAMOS — SPARTAN POLEMARCH",hp:460,speed:4.7,range:36,fireRate:.85,damage:18,score:1800,style:"boss_hybrid",scale:1.32,projectileColor:16747563},viking_warrior:{name:"Viking Huscarl",hp:95,speed:4.6,range:24,fireRate:1.35,damage:16,score:240,style:"hybrid",projectileColor:11464959},viking_archer:{name:"Norse Bowman",hp:74,speed:3.8,range:38,fireRate:1.45,damage:14,score:230,style:"ranged",projectileColor:14284543},viking_berserker:{name:"Viking Berserker",hp:105,speed:6.2,range:3.4,fireRate:.88,damage:19,score:280,style:"melee",projectileColor:16777215},viking_chieftain:{name:"Viking Chieftain",hp:190,speed:5,range:3.6,fireRate:.92,damage:21,score:420,style:"melee",scale:1.18,projectileColor:16777215},boss_scandinavia:{name:"JARL HAKON — LORD OF THE FJORD",hp:490,speed:4.9,range:36,fireRate:.82,damage:19,score:2e3,style:"boss_hybrid",scale:1.34,projectileColor:6484680},german_rifleman:{name:"German Rifleman",hp:85,speed:3.9,range:40,fireRate:1.45,damage:15,score:240,style:"ranged",projectileColor:16769162},german_officer:{name:"German Officer",hp:85,speed:4.5,range:32,fireRate:1.05,damage:13,score:270,style:"ranged",projectileColor:16762470},german_mg:{name:"MG Bunker Gunner",hp:115,speed:0,range:44,fireRate:.36,damage:7,score:340,style:"turret",projectileColor:16752194},guard_dog:{name:"Guard Dog",hp:38,speed:7.8,range:2.35,fireRate:.85,damage:14,score:180,style:"dog",projectileColor:16777215},boss_normandy:{name:"MAJOR VOGEL — BATTERY COMMANDER",hp:460,speed:4.4,range:42,fireRate:.65,damage:15,score:2200,style:"boss_ranged",scale:1.28,projectileColor:16739896},kgb_agent:{name:"Committee Agent",hp:80,speed:4.5,range:34,fireRate:1.2,damage:14,score:260,style:"ranged",projectileColor:16766320},soviet_militia:{name:"Soviet Militiaman",hp:90,speed:4.1,range:36,fireRate:.72,damage:10,score:280,style:"ranged",projectileColor:16754253},boss_soviet:{name:"COLONEL VORONIN — COMMITTEE CHIEF",hp:490,speed:4.7,range:42,fireRate:.58,damage:16,score:2400,style:"boss_ranged",scale:1.28,projectileColor:16731192},pla_rifleman:{name:"Occupying Rifleman",hp:85,speed:4,range:40,fireRate:1.38,damage:14,score:260,style:"ranged",projectileColor:16769162},pla_mg:{name:"Machine-Gunner",hp:100,speed:3.1,range:42,fireRate:.55,damage:8,score:310,style:"ranged",projectileColor:16752194},red_guard:{name:"Red Guard",hp:80,speed:6.1,range:3.2,fireRate:.9,damage:16,score:240,style:"melee",projectileColor:16777215},boss_tibet:{name:"COMMANDER ZHAO — GARRISON CHIEF",hp:510,speed:4.6,range:42,fireRate:.62,damage:17,score:2600,style:"boss_ranged",scale:1.3,projectileColor:16734774}};function hg(i){const t=new $t,e=i.startsWith("boss_");if(i==="guard_dog"){const Y=new H({color:9397820,roughness:.92}),X=new H({color:2498330,roughness:.94}),I=new H({color:1315088,roughness:.6}),C=new H({color:7349276,roughness:.7}),k=new f(new N(.32,.32,.78),Y);k.position.set(0,.5,0),k.castShadow=!0,k.userData.hitZone="body";const B=new f(new N(.34,.2,.48),X);B.position.set(0,.58,-.02);const G=new f(new ee(.14,.032,6,12),C);G.position.set(0,.56,.34);const tt=new W(.052,.044,.42,7),at=new f(tt,Y);at.position.set(-.11,.21,.26);const F=new f(tt,Y);F.position.set(.11,.21,.26);const z=new f(tt,Y);z.position.set(-.11,.21,-.26);const $=new f(tt,Y);$.position.set(.11,.21,-.26);const Z=new f(new N(.24,.24,.3),Y);Z.position.set(0,.68,.44),Z.userData.hitZone="head";const ot=new f(new N(.14,.13,.22),X);ot.position.set(0,-.03,.2);const _t=new f(new Xt(.036,6,6),I);_t.position.set(0,0,.31);const Rt=new f(new kt(.055,.16,4),X);Rt.position.set(-.08,.17,-.02);const xt=Rt.clone();xt.position.x=.08;const it=new oe({color:16769126}),mt=new f(new Xt(.022,6,6),it);mt.position.set(-.06,.04,.14);const D=mt.clone();D.position.x=.06,Z.add(ot,_t,Rt,xt,mt,D);const Pt=new f(new W(.03,.045,.42,6),X);Pt.position.set(0,.56,-.5),Pt.rotation.x=-.65;const vt=new f(new Xt(.05,4,4),new oe({color:16765530,transparent:!0,opacity:0}));Z.add(vt);const It=new f(new ae(.75,.09),new oe({color:1445130,side:_e}));It.position.set(0,1.15,0),It.visible=!1;const ht=new f(new ae(.7,.06),new oe({color:15219500,side:_e}));return ht.position.set(0,0,.01),It.add(ht),t.add(k,B,G,at,F,z,$,Z,Pt,It),{root:t,legL:at,legR:F,armL:z,armR:$,torso:k,head:Z,muzzle:vt,hpBg:It,hpFill:ht}}const n=new H({color:i==="bandito"?13011548:14922122,roughness:.72}),s=new H({color:2759700,roughness:.8}),o=new H({color:11977423,metalness:.85,roughness:.25}),r=new H({color:15119943,metalness:.85,roughness:.25}),a=new H({color:12067362,roughness:.6}),l=new H({color:15657180,roughness:.7});let c=6044708,h=3091240;i==="bandito"?(c=10368030,h=3877920):i==="boss_west"?(c=1971988,h=1446416):i==="ninja"?(c=1580070,h=1316640):i==="ronin"?(c=2374492,h=1975344):i==="boss_japan"?(c=8197140,h=1709076):i==="halberdier"||i==="arquebusier"?(c=11871268,h=3551792):i==="boss_swiss"?(c=9377816,h=2631208):i==="spartan_hoplite"||i==="spartan_skirmisher"||i==="boss_greece"?(c=12090925,h=11018272):i==="viking_warrior"||i==="viking_archer"?(c=4935512,h=3812901):i==="viking_berserker"?(c=6046512,h=2958108):i==="viking_chieftain"?(c=3877930,h=2498588):i==="boss_scandinavia"?(c=2700098,h=2498588):i==="german_rifleman"||i==="german_mg"?(c=5660245,h=4672838):i==="german_officer"||i==="boss_normandy"?(c=3949372,h=3159600):i==="kgb_agent"?(c=5065284,h=3026219):i==="soviet_militia"?(c=5199174,h=4080184):i==="boss_soviet"?(c=2897456,h=2370600):i==="pla_rifleman"||i==="pla_mg"?(c=9077333,h=7827529):i==="red_guard"?(c=6056775,h=4542264):i==="boss_tibet"&&(c=7038530,h=5525556);const d=new H({color:c,roughness:.68}),u=new H({color:h,roughness:.78}),p=new W(.11,.095,.82,8),g=new f(p,u);g.position.set(-.15,.41,0),g.castShadow=!0;const _=new f(p,u);_.position.set(.15,.41,0),_.castShadow=!0;const x=new N(.17,.22,.28),m=new f(x,s);m.position.set(0,-.34,.04),g.add(m);const S=m.clone();_.add(S);const M=new f(new N(.56,.72,.32),d);M.position.set(0,1.16,0),M.castShadow=!0,M.userData.hitZone="body";const v=new W(.085,.075,.62,8),A=new f(v,d);A.position.set(-.37,1.18,.08),A.rotation.x=-.35,A.castShadow=!0;const b=new f(v,d);b.position.set(.37,1.18,.2),b.rotation.x=-1.1,b.castShadow=!0;const U=new f(new Xt(.21,12,10),i==="ninja"?d:n);U.position.set(0,1.72,0),U.castShadow=!0,U.userData.hitZone="head";const L=new oe({color:e?16759603:1182728}),T=new f(new Xt(.026,6,6),L);T.position.set(-.07,.03,.19);const E=T.clone();if(E.position.x=.07,U.add(T,E),i==="cowboy"||i==="boss_west"){const Y=new f(new W(.42,.44,.04,14),s);Y.position.y=.15;const X=new f(new W(.19,.23,.22,12),s);X.position.y=.26;const I=new f(new W(.22,.23,.05,12),e?r:a);I.position.y=.19,U.add(Y,X,I);const C=new f(new kt(.24,.26,5),a);C.rotation.x=Math.PI,C.position.set(0,1.48,.12),t.add(C);const k=new f(new N(.58,.56,.12),d);k.position.set(0,.72,-.14),t.add(k);const B=new f(new N(.06,.08,.46),o);B.position.set(0,-.28,.22),b.add(B)}else if(i==="bandito"){const Y=new f(new W(.56,.62,.05,18),new H({color:13212757,roughness:.75}));Y.position.y=.15;const X=new f(new ee(.58,.025,6,20),a);X.rotation.x=Math.PI/2,X.position.y=.15;const I=new f(new kt(.22,.34,12),new H({color:12093762,roughness:.75}));I.position.y=.32,U.add(Y,X,I);const C=new f(new kt(.48,.62,8),new H({color:13189668,roughness:.8}));C.position.set(0,1.24,0);const k=new f(new W(.36,.44,.12,8),r);k.position.set(0,1.04,0),t.add(C,k);const B=new f(new W(.028,.032,.88,8),s);B.rotation.x=Math.PI/2,B.position.set(0,-.26,.32),b.add(B)}else if(i==="ninja"){const Y=new f(new ee(.215,.022,6,14),o);Y.rotation.x=Math.PI/2,Y.position.y=.08,U.add(Y);const X=new f(new ee(.22,.055,6,12),a);X.rotation.x=Math.PI/2,X.position.set(0,1.52,0);const I=new f(new N(.14,.58,.03),a);I.position.set(.08,1.32,-.26),I.rotation.x=.35,t.add(X,I);const C=new f(new N(.03,.75,.05),o);C.position.set(0,-.35,.28),C.rotation.x=Math.PI/2,b.add(C)}else if(i==="ronin"||i==="boss_japan"){if(e){const k=new f(new Xt(.25,12,8,0,Math.PI*2,0,Math.PI*.6),new H({color:1906455,metalness:.7,roughness:.3}));k.position.y=.08;const B=new f(new N(.05,.36,.04),r);B.position.set(-.14,.34,.16),B.rotation.z=.45;const G=B.clone();G.position.x=.14,G.rotation.z=-.45,U.add(k,B,G)}else{const k=new f(new kt(.52,.25,16),new H({color:12755556,roughness:.9}));k.position.y=.22,U.add(k)}const Y=new N(.14,.34,.28),X=new f(Y,e?r:a);X.position.set(-.38,1.4,0);const I=X.clone();I.position.x=.38,t.add(X,I);const C=new f(new N(.035,1.05,.055),o);C.position.set(0,-.35,.42),C.rotation.x=Math.PI/2,b.add(C)}else if(i==="halberdier"||i==="arquebusier"||i==="boss_swiss"){const Y=new f(new N(.58,.52,.35),e?r:o);Y.position.set(0,1.22,0);const X=new f(new N(.6,.16,.36),l);X.position.set(0,1.06,0),t.add(Y,X);const I=new f(new Xt(.24,12,8,0,Math.PI*2,0,Math.PI*.62),e?r:o);I.position.y=.08;const C=new f(new W(.32,.36,.04,14),e?r:o);C.position.y=.09;const k=new f(new kt(.08,.42,8),a);if(k.position.set(0,.34,-.08),k.rotation.x=-.38,U.add(I,C,k),i==="halberdier"){const B=new f(new W(.025,.025,2.2,8),s);B.position.set(0,.1,.34);const G=new f(new N(.03,.42,.28),o);G.position.set(0,1,.44),b.add(B,G)}else{const B=new f(new W(.03,.035,1.05,8),o);B.rotation.x=Math.PI/2,B.position.set(0,-.25,.42),b.add(B)}}else if(i==="spartan_hoplite"||i==="spartan_skirmisher"||i==="boss_greece"){const Y=new H({color:e?15381832:13209398,metalness:.84,roughness:.28}),X=new f(new N(.58,.56,.34),Y);X.position.set(0,1.2,0);const I=new f(new N(.64,1.15,.1),a);I.position.set(0,1.02,-.22),I.rotation.x=.14;const C=new f(new W(.28,.34,.36,8),a);C.position.set(0,.78,0),t.add(X,I,C);const k=new f(new Xt(.245,12,10,0,Math.PI*2,0,Math.PI*.72),Y);k.position.y=.06;const B=new f(new N(.06,.18,.14),Y);B.position.set(-.17,-.05,.12);const G=B.clone();G.position.x=.17;const tt=new f(e?new N(.58,.24,.11):new N(.11,.24,.54),a);tt.position.set(0,.34,e?0:-.04),U.add(k,B,G,tt);const at=new H({map:rg(),metalness:.5,roughness:.38}),F=new f(new W(.46,.46,.06,20),[Y,at,Y]);F.rotation.x=Math.PI/2,F.position.set(-.08,-.18,.24),A.add(F);const z=i==="spartan_hoplite"?2.25:1.75,$=new f(new W(.024,.026,z,8),s);$.rotation.x=Math.PI/2,$.position.set(0,-.26,.45);const Z=new f(new kt(.045,.28,4),Y);Z.rotation.x=Math.PI/2,Z.position.set(0,-.26,.45+z*.5+.1),b.add($,Z)}else if(i==="viking_warrior"||i==="viking_archer"||i==="viking_berserker"||i==="viking_chieftain"||i==="boss_scandinavia"){const Y=i==="viking_chieftain",X=new H({color:i==="viking_berserker"?4863269:3879725,roughness:.95}),I=i==="viking_berserker"?8141598:Y?3023126:5061160,C=new H({color:I,roughness:.92}),k=e?r:o,B=Y||e||i!=="viking_berserker"&&Math.random()<.32,G=new f(new N(.68,.26,.4),X);G.position.set(0,1.48,-.02);const tt=new f(new N(.6,.95,.1),e||Y?a:X);tt.position.set(0,1,-.22),t.add(G,tt);const at=new f(new kt(.18,.34,10),C);if(at.rotation.x=Math.PI,at.position.set(0,-.2,.1),U.add(at),i==="viking_berserker"){const F=new f(new Xt(.245,10,8,0,Math.PI*2,0,Math.PI*.62),X);F.position.set(0,.08,-.03),U.add(F)}else{const F=new f(new Xt(.24,12,10,0,Math.PI*2,0,Math.PI*.56),k);F.position.y=.08;const z=new f(new ee(.238,.028,6,16),B?r:k);z.rotation.x=Math.PI/2,z.position.y=.08;const $=new f(new N(.04,.15,.03),k);if($.position.set(0,.01,.22),U.add(F,z,$),B){const Z=new H({color:15458502,roughness:.58}),ot=new H({color:3024415,roughness:.6});for(const _t of[-1,1]){const Rt=new $t,xt=new f(new ee(.055,.014,6,10),r);xt.rotation.y=Math.PI/2;const it=new f(new W(.04,.052,.24,8),Z);it.rotation.z=-_t*1.15,it.position.set(_t*.11,.04,0);const mt=new f(new kt(.04,.24,8),ot);mt.rotation.z=-_t*.35,mt.position.set(_t*.25,.18,.02),Rt.add(xt,it,mt),Rt.position.set(_t*.22,.16,.02),U.add(Rt)}}}if(i!=="viking_berserker"&&i!=="viking_archer"){const F=Uc(e?3:Y?2:0),z=new H({map:F,roughness:.72}),$=new f(new W(Y?.5:.45,Y?.5:.45,.06,18),[s,z,s]);$.rotation.x=Math.PI/2,$.position.set(-.08,-.18,.24),A.add($)}if(i==="viking_archer"){const F=new f(new ee(.55,.024,6,14,Math.PI*.9),s);F.rotation.y=Math.PI/2,F.rotation.z=-Math.PI*.45,F.position.set(0,-.18,.28),A.add(F)}else if(Y&&Math.random()<.5){const F=new f(new N(.04,.09,1.05),o);F.position.set(0,-.26,.56);const z=new f(new N(.24,.05,.05),r);z.position.set(0,-.26,.08),b.add(F,z)}else{const F=z=>{const $=new f(new W(.024,.026,.92,8),s);$.rotation.x=Math.PI/2,$.position.set(0,-.26,.34);const Z=new f(new N(.03,.26,.22),o);Z.position.set(0,-.26,.74),z.add($,Z)};F(b),i==="viking_berserker"&&(A.rotation.x=-1.1,F(A))}}else if(i==="german_rifleman"||i==="german_officer"||i==="german_mg"||i==="boss_normandy"){const Y=new H({color:3883580,metalness:.45,roughness:.48}),X=new H({color:2961974,metalness:.8,roughness:.32}),I=new f(new N(.58,.1,.34),s);if(I.position.set(0,.92,0),t.add(I),i==="german_officer"||e){const C=new f(new N(.6,.62,.34),d);C.position.set(0,.64,-.02),t.add(C);const k=new f(new W(.25,.21,.16,14),d);k.position.y=.18;const B=new f(new N(.26,.03,.22),s);B.position.set(0,.1,.18),B.rotation.x=.18,U.add(k,B);const G=new f(new N(.06,.09,e?.68:.36),X);G.position.set(0,-.26,e?.34:.2),b.add(G)}else{const C=new f(new Xt(.245,14,10,0,Math.PI*2,0,Math.PI*.58),Y);C.position.y=.08;const k=new f(new W(.24,.28,.1,14,1,!0),Y);if(k.position.y=.04,U.add(C,k),i==="german_mg"){const B=new f(new W(.042,.046,1.15,8),X);B.rotation.x=Math.PI/2,B.position.set(0,-.22,.56),b.add(B)}else{const B=new f(new W(.025,.03,1.05,8),s);B.rotation.x=Math.PI/2,B.position.set(0,-.26,.42),b.add(B)}}}else if(i==="kgb_agent"||i==="soviet_militia"||i==="boss_soviet"){const Y=new H({color:2500909,metalness:.8,roughness:.32}),X=new H({color:3880242,roughness:.94}),I=new H({color:1919884,roughness:.65}),C=new f(new N(.6,.68,.34),d);C.position.set(0,.6,0);const k=new f(new N(.62,.09,.36),s);if(k.position.set(0,.94,0),t.add(C,k),i==="kgb_agent"){const B=new f(new W(.32,.32,.03,14),s);B.position.y=.14;const G=new f(new W(.2,.22,.16,12),s);G.position.y=.23,U.add(B,G);const tt=new f(new N(.055,.08,.32),Y);tt.position.set(0,-.26,.22),b.add(tt)}else if(i==="soviet_militia"){const B=new f(new W(.24,.25,.2,12),X);B.position.y=.19;const G=new f(new Xt(.032,6,6),a);G.position.set(0,.2,.24),U.add(B,G);const tt=new f(new W(.028,.03,.72,8),Y);tt.rotation.x=Math.PI/2,tt.position.set(0,-.26,.34);const at=new f(new W(.09,.09,.05,10),Y);at.rotation.x=Math.PI/2,at.position.set(0,-.35,.26),b.add(tt,at)}else{const B=new f(new W(.26,.22,.14,14),d);B.position.y=.2;const G=new f(new W(.226,.226,.06,14),I);G.position.y=.14;const tt=new f(new N(.26,.03,.22),s);tt.position.set(0,.11,.18),U.add(B,G,tt);const at=new f(new N(.06,.09,.36),Y);at.position.set(0,-.26,.24),b.add(at),A.rotation.x=-1.1;const F=at.clone();A.add(F)}}else if(i==="pla_rifleman"||i==="pla_mg"||i==="red_guard"||i==="boss_tibet"){const Y=new H({color:2500909,metalness:.78,roughness:.35}),X=new f(new N(.58,.09,.34),s);if(X.position.set(0,.92,0),t.add(X),i==="red_guard"){const I=new f(new W(.11,.11,.14,8),a);I.position.set(0,.06,0),A.add(I);const C=new f(new W(.22,.23,.12,12),d);C.position.y=.17;const k=new f(new N(.22,.025,.18),d);k.position.set(0,.12,.17);const B=new f(new Xt(.03,6,6),a);B.position.set(0,.17,.22),U.add(C,k,B);const G=new f(new W(.055,.03,.85,8),s);G.rotation.x=Math.PI/2,G.position.set(0,-.26,.38),b.add(G)}else if(i==="boss_tibet"){const I=new f(new W(.26,.22,.15,14),d);I.position.y=.19;const C=new f(new N(.26,.03,.22),s);C.position.set(0,.11,.18);const k=new f(new Xt(.035,6,6),a);k.position.set(0,.19,.24),U.add(I,C,k);const B=new f(new N(.065,.095,.7),Y);B.position.set(0,-.26,.35),b.add(B)}else{const I=new f(new W(.22,.23,.12,12),d);I.position.y=.17;const C=new f(new N(.22,.025,.18),d);C.position.set(0,.12,.17);const k=new f(new Xt(.03,6,6),a);if(k.position.set(0,.17,.22),U.add(I,C,k),i==="pla_mg"){const B=new f(new W(.036,.042,1.08,8),Y);B.rotation.x=Math.PI/2,B.position.set(0,-.24,.48);const G=new f(new W(.14,.14,.05,12),Y);G.position.set(0,-.17,.36),b.add(B,G)}else{const B=new f(new W(.024,.028,1.05,8),s);B.rotation.x=Math.PI/2,B.position.set(0,-.26,.42),b.add(B)}}}const O=new f(new Xt(.14,6,6),new oe({color:16765530,transparent:!0,opacity:0}));O.position.set(0,-.28,.68),b.add(O);const J=new f(new ae(.95,.11),new oe({color:1445130,side:_e}));J.position.set(0,2.35,0),J.visible=!1;const j=new f(new ae(.9,.075),new oe({color:e?16755234:15219500,side:_e}));j.position.set(0,0,.01),J.add(j),t.add(g,_,M,A,b,U,J);const Q=$r[i];return Q.scale&&t.scale.setScalar(Q.scale),{root:t,legL:g,legR:_,armL:A,armR:b,torso:M,head:U,muzzle:O,hpBg:J,hpFill:j}}class Fl{constructor(t,e,n=1,s={}){const o=$r[t];this.type=t,this.name=o.name,this.isBoss=t.startsWith("boss_"),this.maxHp=Math.round(o.hp*n),this.hp=this.maxHp,this.speed=o.speed,this.range=o.range,this.fireRate=o.fireRate/(.8+n*.2),this.damage=Math.round(o.damage*n),this.score=o.score,this.style=o.style,this.projectileColor=o.projectileColor,this.parts=hg(t),this.mesh=this.parts.root,this.mesh.position.copy(e),this.spawnPos=e.clone(),this.alive=!0,this.alert=!1,this.hideUntilClose=!!s.hideUntilClose,this.ambushDist=s.ambushDist||12.5,this.hideUntilClose&&(this.mesh.visible=!1),this.fireCooldown=.6+Math.random()*.9,this.strafeDir=Math.random()>.5?1:-1,this.strafeTimer=1.2+Math.random()*2,this.hurtFlash=0,this.muzzleFlash=0,this.deathTimer=0,this.fallChecked=!1,this.slumpDeath=!1,this.walkPhase=Math.random()*Math.PI*2,this.radius=this.style==="dog"?.36:this.isBoss?.68:.46,this.headHeight=this.style==="dog"?.72:this.isBoss?2.15:1.72,this.path=null,this.pathIdx=0,this.pathTimer=Math.random()*.5}getHitMeshes(){if(!this.alive||!this.mesh.visible)return[];const t=[];return this.mesh.traverse(e=>{e.isMesh&&e!==this.parts.hpBg&&e!==this.parts.hpFill&&e!==this.parts.muzzle&&(e.userData.enemy=this,t.push(e))}),t}takeDamage(t,e=!1){if(!this.alive)return!1;if(this.alert=!0,this.hideUntilClose=!1,this.mesh.visible=!0,this.hp-=t,this.hurtFlash=.16,!this.isBoss){this.parts.hpBg.visible=!0;const n=Math.max(0,this.hp/this.maxHp);this.parts.hpFill.scale.x=Math.max(.001,n),this.parts.hpFill.position.x=-(1-n)*.45}return this.hp<=0?(this.alive=!1,this.hp=0,this.parts.hpBg.visible=!1,!0):!1}update(t,e,n,s,o=1){if(!this.alive){if(!this.fallChecked){this.fallChecked=!0;const T=new w(this.mesh.position.x,this.mesh.position.y+.85,this.mesh.position.z),E=[this.mesh.rotation.y+Math.PI,this.mesh.rotation.y,this.mesh.rotation.y+Math.PI*.5,this.mesh.rotation.y-Math.PI*.5];let O=null;for(const J of E){const j=new w(-Math.sin(J),0,-Math.cos(J));if(!n.raycast(T,j,1.55)){O=J;break}}O!==null?(this.mesh.rotation.y=O,this.slumpDeath=!1):this.slumpDeath=!0}this.deathTimer=Math.min(1,this.deathTimer+t*2.8);const L=n.getFloorHeight(this.mesh.position.x,this.mesh.position.z,this.mesh.position.y);if(this.slumpDeath){const T=Math.max(.28,1-this.deathTimer*.72);this.mesh.scale.y=T*($r[this.type].scale||1),this.mesh.position.y=L}else this.mesh.rotation.x=-this.deathTimer*(Math.PI*.48),this.mesh.position.y=Math.max(L+.18,this.mesh.position.y-t*1.4);return}const r=new w().subVectors(e,this.mesh.position),a=Math.hypot(r.x,r.z);if(this.hideUntilClose)if(a<=this.ambushDist)this.hideUntilClose=!1,this.mesh.visible=!0,this.alert=!0;else return;if(this.parts.hpBg.visible&&this.parts.hpBg.lookAt(e.x,this.mesh.position.y+(this.style==="dog"?1.15:2.3),e.z),this.hurtFlash>0){this.hurtFlash-=t;const L=this.hurtFlash>0?6689041:0;this.parts.torso.material.emissive.setHex(L)}this.muzzleFlash>0&&(this.muzzleFlash-=t,this.parts.muzzle.material.opacity=Math.max(0,this.muzzleFlash*8));const l=this.style==="dog"?.7:1.55,c=new w(this.mesh.position.x,this.mesh.position.y+l,this.mesh.position.z),h=new w(e.x,e.y+1.45,e.z),d=42*o,u=(this.style==="dog"?28:26)*o,p=a<54&&n.hasLineOfSight(c,h);if(!this.alert)if(a<u||p&&a<d)this.alert=!0,this.style==="dog"&&s.onDogBark&&s.onDogBark(this);else{const L=this.style==="dog"?.5:1.16;this.parts.torso.position.y=L+Math.sin(performance.now()*.002+this.walkPhase)*.02;return}this.strafeTimer-=t,this.strafeTimer<=0&&(this.strafeTimer=1.1+Math.random()*1.6,this.strafeDir*=-1);const g=this.style==="melee"||this.style==="dog",_=this.style==="turret",x=this.style==="hybrid"||this.style==="boss_hybrid",m=this.style==="dog"?1.55:g?2:x?7:12.5,S=this.style==="dog"?2:g?2.5:x?15:25,M=new w;let v=e.x,A=e.z;if(!_&&this.speed>0)if((!p||g&&a>4||a>S)&&n.nav)if(this.pathTimer-=t,(this.pathTimer<=0||!this.path||this.pathIdx>=this.path.length)&&(this.pathTimer=.55+Math.random()*.3,this.path=n.findPath(this.mesh.position,e,1400),this.pathIdx=0),this.path&&this.pathIdx<this.path.length){for(;this.pathIdx<this.path.length;){const T=this.path[this.pathIdx];if(Math.hypot(T.x-this.mesh.position.x,T.z-this.mesh.position.z)<1.05)this.pathIdx++;else break}if(this.pathIdx<this.path.length){const T=this.path[this.pathIdx];M.set(T.x-this.mesh.position.x,0,T.z-this.mesh.position.z),p||(v=T.x,A=T.z)}}else M.set(r.x,0,r.z);else{const T=Math.atan2(r.x,r.z),E=new w(Math.sin(T),0,Math.cos(T)),O=new w(Math.cos(T),0,-Math.sin(T));!p||a>S?M.add(E):a<m&&!g&&M.addScaledVector(E,-.55),a<S+6&&this.style!=="dog"&&M.addScaledVector(O,this.strafeDir*(this.style==="skirmisher"?1.15:.65))}let U=Math.atan2(v-this.mesh.position.x,A-this.mesh.position.z)-this.mesh.rotation.y;for(;U>Math.PI;)U-=Math.PI*2;for(;U<-Math.PI;)U+=Math.PI*2;if(this.mesh.rotation.y+=U*Math.min(1,t*8),M.lengthSq()>.001&&this.speed>0){M.normalize().multiplyScalar(this.speed*t),n.moveHorizontal(this.mesh.position,M.x,M.z,this.radius,this.mesh.position.y);const L=n.getFloorHeight(this.mesh.position.x,this.mesh.position.z,this.mesh.position.y);this.mesh.position.y+=(L-this.mesh.position.y)*Math.min(1,t*14),this.walkPhase+=t*this.speed*(this.style==="dog"?2.8:2.2),this.parts.legL.rotation.x=Math.sin(this.walkPhase)*.6,this.parts.legR.rotation.x=-Math.sin(this.walkPhase)*.6,this.style==="dog"?(this.parts.armL.rotation.x=-Math.sin(this.walkPhase)*.6,this.parts.armR.rotation.x=Math.sin(this.walkPhase)*.6):this.parts.armL.rotation.x=-.35-Math.sin(this.walkPhase)*.35}if(this.fireCooldown-=t,this.fireCooldown<=0){const L=this.style==="dog"?2.45:3.5;if(g||x&&a<3.6)a<L&&n.hasLineOfSight(c,h)&&(this.fireCooldown=this.fireRate,this.style==="dog"?(this.parts.head.rotation.x=.35,setTimeout(()=>{this.parts.head&&(this.parts.head.rotation.x=0)},160)):(this.parts.armR.rotation.x=-2.1,setTimeout(()=>{this.parts.armR&&(this.parts.armR.rotation.x=-1.1)},160)),s.onMeleeHitPlayer(this.damage,this));else if(p&&a<=this.range){this.fireCooldown=this.fireRate*(.85+Math.random()*.35),this.muzzleFlash=.14;const T=new w;this.parts.muzzle.getWorldPosition(T),s.onEnemyFire(this,T,h)}}}}function Qn(i){const{topColor:t=2759739,midColor:e=14248747,horizonColor:n=16761192,sunColor:s=16773830,sunDirection:o=new w(.45,.22,-.86).normalize(),cloudTint:r=16766364,cloudDensity:a=.45}=i,l=new Xt(420,40,28),c={uTopColor:{value:new Jt(t)},uMidColor:{value:new Jt(e)},uHorizonColor:{value:new Jt(n)},uSunColor:{value:new Jt(s)},uCloudTint:{value:new Jt(r)},uSunDir:{value:o.clone().normalize()},uCloudDensity:{value:a},uTime:{value:0}},h=new Pe({side:Xe,depthWrite:!1,uniforms:c,vertexShader:`
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
    `}),d=new f(l,h);return d.frustumCulled=!1,{mesh:d,uniforms:c}}function Ki(i,t,e={}){const{deepColor:n=741993,shallowColor:s=3056552,foamColor:o=14678271,sunColor:r=16774614,sunDir:a=new w(.4,.6,-.6).normalize(),opacity:l=.88,waveScale:c=.14}=e,h=new ae(i,t,64,64);h.rotateX(-Math.PI/2);const d={uTime:{value:0},uDeepColor:{value:new Jt(n)},uShallowColor:{value:new Jt(s)},uFoamColor:{value:new Jt(o)},uSunColor:{value:new Jt(r)},uSunDir:{value:a.clone().normalize()},uOpacity:{value:l},uWaveScale:{value:c}},u=new Pe({transparent:!0,uniforms:d,vertexShader:`
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
    `}),p=new f(h,u);return p.receiveShadow=!0,{mesh:p,uniforms:d}}function dg(i,t){const e=new ae(i,t,12,24),n={uTime:{value:0}},s=new Pe({transparent:!0,side:_e,depthWrite:!1,uniforms:n,vertexShader:`
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
    `});return{mesh:new f(e,s),uniforms:n}}function Ol(i=240,t=65){const e=new ae(i,t,64,12),n={uTime:{value:0}},s=new Pe({transparent:!0,side:_e,depthWrite:!1,blending:gs,uniforms:n,vertexShader:`
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
    `});return{mesh:new f(e,s),uniforms:n}}function Ft(i,t,e,n,s,o,r,a,l,c="solid",h=!0){const d=new f(new N(o,r,a),l);return d.position.set(e,n,s),d.castShadow=h,d.receiveShadow=!0,i.add(d),t.addBox(e,n,s,o,r,a,c),d}function oo(i,t,e){const{axis:n,center:s,baseY:o,length:r,height:a,thickness:l=.36,mat:c,openings:h=[],frameMat:d=null,tag:u="solid"}=e,p=r*.5,g=[...h].sort((m,S)=>m.offset-S.offset),_=(m,S,M,v,A=u,b=c,U=l)=>{const L=S-m,T=v-M;if(L<=.05||T<=.05)return;const E=(m+S)*.5,O=o+(M+v)*.5;n==="x"?Ft(i,t,s.x+E,O,s.z,L,T,U,b,A):Ft(i,t,s.x,O,s.z+E,U,T,L,b,A)};let x=-p;for(const m of g){const S=m.width*.5,M=Math.max(-p,m.offset-S),v=Math.min(p,m.offset+S);if(M>x&&_(x,M,0,a),m.type==="door"){const A=Math.min(a-.15,m.height||2.8);a-A>.08&&_(M,v,A,a),d&&(_(M-.1,M,0,A,u,d,l+.06),_(v,v+.1,0,A,u,d,l+.06))}else if(m.type==="window"){const A=m.sill??.98,b=Math.min(a-.15,m.top??2.3);if(_(M,v,0,A),a-b>.08&&_(M,v,b,a),m.barred){const U=Math.max(2,Math.round(m.width/.24)),L=d||new H({color:2500651,metalness:.7,roughness:.4}),T=b-A;for(let E=1;E<U;E++){const O=M+(v-M)*(E/U),J=new f(new W(.025,.025,T,6),L);n==="x"?J.position.set(s.x+O,o+A+T*.5,s.z):J.position.set(s.x,o+A+T*.5,s.z+O),i.add(J)}n==="x"?t.addBox(s.x+(M+v)*.5,o+A+T*.5,s.z,v-M,T,.16,"bars"):t.addBox(s.x,o+A+T*.5,s.z+(M+v)*.5,.16,T,v-M,"bars")}}x=Math.max(x,v)}x<p&&_(x,p,0,a)}function qn(i,t,e){const{axis:n,center:s,baseY:o,length:r,height:a,doors:l=[],barColor:c=2369066}=e,h=new H({color:c,metalness:.78,roughness:.32}),d=r*.5,u=[...l].sort((_,x)=>_.offset-x.offset),p=(_,x)=>{const m=x-_;if(m<=.15)return;const S=Math.max(2,Math.floor(m/.22));for(let M=0;M<=S;M++){const v=_+m*M/S,A=new f(new W(.028,.028,a,6),h);n==="x"?A.position.set(s.x+v,o+a*.5,s.z):A.position.set(s.x,o+a*.5,s.z+v),A.castShadow=!0,i.add(A)}for(const M of[.18,a*.5,a-.18]){const v=new f(n==="x"?new N(m,.07,.07):new N(.07,.07,m),h);n==="x"?v.position.set(s.x+(_+x)*.5,o+M,s.z):v.position.set(s.x,o+M,s.z+(_+x)*.5),i.add(v)}n==="x"?t.addBox(s.x+(_+x)*.5,o+a*.5,s.z,m,a,.22,"bars"):t.addBox(s.x,o+a*.5,s.z+(_+x)*.5,.22,a,m,"bars")};let g=-d;for(const _ of u){const x=_.width*.5,m=Math.max(-d,_.offset-x),S=Math.min(d,_.offset+x);m>g&&p(g,m);const M=Math.min(1.1,_.width*.55),v=new f(n==="x"?new N(.06,a-.15,M):new N(M,a-.15,.06),h);n==="x"?v.position.set(s.x+m+.03,o+(a-.15)*.5,s.z-M*.5):v.position.set(s.x-M*.5,o+(a-.15)*.5,s.z+m+.03),i.add(v),g=Math.max(g,S)}g<d&&p(g,d)}function ug(i,t,e,n,s,o,r,a,l,c){const h=a-l;if(h<=.35)return;const d=Math.max(2,Math.ceil(h/.36)),u=h/d,p=.65;for(let g=0;g<d;g++){const _=a-u*g,x=(g+.5)*p,m=e+s*x,S=n+o*x,M=Math.abs(s)>.5?p:r,v=Math.abs(o)>.5?p:r,A=Math.max(.25,_-l+.4),b=new f(new N(M,A,v),c);b.position.set(m,_-A*.5,S),b.receiveShadow=!0,b.castShadow=!0,i.add(b),t.addWalkable(m,S,M+.18,v+.18,_)}}function le(i,t,e){const{cx:n,cz:s,w:o,d:r,h:a,floorY:l=null,wallMat:c,floorMat:h,roofMat:d=null,roofStyle:u="flat",roofColor:p=3877920,thickness:g=.38,north:_=[],south:x=[],west:m=[],east:S=[],stepMat:M=null,interiorLight:v=null,parapetColor:A=null}=e,b=t.heightFn(n,s),U=Math.max(b,t.heightFn(n-o*.45,s-r*.45),t.heightFn(n+o*.45,s-r*.45),t.heightFn(n-o*.45,s+r*.45),t.heightFn(n+o*.45,s+r*.45)),L=l!==null?l:Math.max(b+.12,U+.08),T=Math.max(.4,L-(t.heightFn(n,s)-2.2)),E=new f(new N(o,T,r),h);E.position.set(n,L-T*.5,s),E.receiveShadow=!0,i.add(E),t.addWalkable(n,s,o+.25,r+.25,L),oo(i,t,{axis:"x",center:{x:n,z:s-r*.5+g*.5},baseY:L,length:o,height:a,thickness:g,mat:c,openings:_}),oo(i,t,{axis:"x",center:{x:n,z:s+r*.5-g*.5},baseY:L,length:o,height:a,thickness:g,mat:c,openings:x}),oo(i,t,{axis:"z",center:{x:n-o*.5+g*.5,z:s},baseY:L,length:r-g*2,height:a,thickness:g,mat:c,openings:m}),oo(i,t,{axis:"z",center:{x:n+o*.5-g*.5,z:s},baseY:L,length:r-g*2,height:a,thickness:g,mat:c,openings:S});const O=M||h,J=(Q,Y)=>{for(const X of Q){if(X.type!=="door")continue;let I=0,C=0,k=n,B=s;Y==="north"?(k=n+X.offset,B=s-r*.5,C=-1):Y==="south"?(k=n+X.offset,B=s+r*.5,C=1):Y==="west"?(k=n-o*.5,B=s+X.offset,I=-1):Y==="east"&&(k=n+o*.5,B=s+X.offset,I=1);const G=t.heightFn(k+I*1.4,B+C*1.4);ug(i,t,k,B,I,C,Math.max(X.width+.4,2.2),L,G,O)}};J(_,"north"),J(x,"south"),J(m,"west"),J(S,"east");const j=d||new H({color:p,roughness:.85});if(u!=="none"){const Q=new f(new N(o+.2,.28,r+.2),j);if(Q.position.set(n,L+a+.14,s),Q.castShadow=!0,Q.receiveShadow=!0,i.add(Q),t.addBox(n,L+a+.14,s,o+.2,.28,r+.2),u==="gable"){const Y=Math.min(2.8,Math.min(o,r)*.34),X=Math.hypot(o*.5+.55,Y),I=Math.atan2(Y,o*.5+.55);for(const B of[-1,1]){const G=new f(new N(X,.18,r+.9),j);G.position.set(n+B*(o*.25+.18),L+a+.2+Y*.5,s),G.rotation.z=-B*I,G.castShadow=!0,i.add(G)}const C=new yc;C.moveTo(-o*.5,0),C.lineTo(o*.5,0),C.lineTo(0,Y),C.closePath();const k=new ua(C,{depth:.24,bevelEnabled:!1});for(const B of[-r*.5,r*.5-.24]){const G=new f(k,c);G.position.set(n,L+a+.2,s+B),i.add(G)}}else if(u==="hip"){const Y=new f(new kt(Math.max(o,r)*.74,Math.min(3.2,Math.min(o,r)*.38),4),j);Y.rotation.y=Math.PI/4,Y.position.set(n,L+a+Math.min(3.2,Math.min(o,r)*.38)*.5+.2,s),Y.castShadow=!0,i.add(Y)}else if(u==="parapet"){const Y=A?new H({color:A,roughness:.85}):j,X=.65,I=new f(new N(o+.24,X,.24),Y);I.position.set(n,L+a+.28+X*.5,s-r*.5);const C=I.clone();C.position.z=s+r*.5;const k=new f(new N(.24,X,r+.24),Y);k.position.set(n-o*.5,L+a+.28+X*.5,s);const B=k.clone();B.position.x=n+o*.5,i.add(I,C,k,B)}}if(v){const Q=new Hi(v.color||16764040,v.intensity??1.3,v.distance||Math.max(o,r)*1.4);Q.position.set(n,L+a-.55,s),i.add(Q)}return{floorY:L,roofY:L+a}}function We(i,t,e,n,s,o=1.6,r=.8,a,l=1){Ft(i,t,e,n+.42,s,o,.84,r,a);const c=new f(new N(.55,.9,.55),a);c.position.set(e,n+.45,s+l*(r*.5+.4)),i.add(c),t.addBox(e,n+.45,s+l*(r*.5+.4),.55,.9,.55)}function On(i,t,e,n,s,o=!1,r,a=6048572){const l=o?.95:2,c=o?2:.95,h=r||new H({color:3880240,roughness:.8}),d=new H({color:a,roughness:.9});Ft(i,t,e,n+.32,s,l,.64,c,h);const u=new f(new N(l-.08,.16,c-.08),d);u.position.set(e,n+.7,s),i.add(u)}function Bn(i,t,e,n,s,o=3.2,r){Ft(i,t,e,n+.5,s,o,1,.65,r)}function _n(i,t,e,n,s,o=2.6,r=1,a,l=10035746){Ft(i,t,e,n+.55,s,o,1.1,r,a);const c=new f(new N(o+.04,.16,r+.04),new H({color:l,roughness:.85}));c.position.set(e,n+1.08,s),i.add(c);const h=new H({color:13938487,metalness:.7,roughness:.3});for(const d of[-1,1]){const u=new f(new W(.05,.09,.45,6),h);u.position.set(e+d*(o*.35),n+1.35,s),i.add(u)}}function Gi(i,t,e,n,s,o=.95){const r=new H({color:5591629,roughness:.95}),a=new f(new W(o,o+.12,.42,8),r);a.position.set(e,n+.21,s),i.add(a);const l=new f(new W(o*.68,o*.72,.22,8),new oe({color:16734746}));l.position.set(e,n+.34,s),i.add(l),t.addBox(e,n+.6,s,o*1.9,1.2,o*1.9)}function Bl(i,t,e,n,s,o=3.2){const r=new H({color:2237222,metalness:.65,roughness:.45});Ft(i,t,e,n+.55,s,.85,1.1,.85,r);const a=new f(new W(.11,.11,o,8),r);a.position.set(e,n+1.1+o*.5,s),i.add(a);const l=new f(new N(.32,.22,.05),new oe({color:16736794}));l.position.set(e,n+.52,s+.43),i.add(l)}function Oc(i,t,e,n,s,o=0){const r=new $t,a=new H({color:1709331,roughness:.35,metalness:.15}),l=new f(new N(1.75,1.28,.72),a);l.position.y=.64,r.add(l);const c=new f(new N(1.52,.08,.28),new H({color:16052452,roughness:.5}));c.position.set(0,.76,.38),r.add(c),r.position.set(e,n,s),r.rotation.y=o,i.add(r);const h=Math.abs(Math.sin(o))>.5?.95:1.8,d=Math.abs(Math.sin(o))>.5?1.8:.95;t.addBox(e,n+.64,s,h,1.28,d)}const fg={id:"west",index:0,themeClass:"",act:"ACT I • 1884",title:"RED GULCH",subtitle:"Dust & Reckoning",heroName:"MARSHAL ANDERSON",objective:"Clear Red Gulch, the Jail & Boot Hill, and Defeat El Diablo",quote:'"They burned my homestead and took everything I loved. Today, Red Gulch learns that a marshal never buries his badge."',musicTheme:"west",enemyIcon:"★",currency:"$",arsenalSummary:[["1 • .45 Peacemaker","Reliable 6-shooter. RMB fans the hammer."],["2 • 10-Gauge Coach Gun","Devastating spread for saloon clearouts."],["3 • Henry .44 Scoped","Vintage brass telescope zoom (RMB)."],["4 • Dynamite Sticks","Blasts outlaws out from behind cover."]],spawnPos:new w(0,0,52),spawnYaw:0,cameraPreview:{center:new w(0,4,-4),radius:42,height:14,speed:.14}};function pg(i,t,e){const n=[],s=[],o=[];t.bounds={minX:-82,maxX:82,minZ:-84,maxZ:76};const r=new w(.35,.24,-.9).normalize(),a=Qn({topColor:2497858,midColor:13195302,horizonColor:16760678,sunColor:16774084,sunDirection:r,cloudTint:16755299,cloudDensity:.42});i.add(a.mesh),s.push(K=>{a.uniforms.uTime.value=K}),i.fog=new yn(14255434,.0068);const l=new Jn(16763788,7027234,.88);i.add(l);const c=new je(16764802,2.5);c.position.copy(r).multiplyScalar(110),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),c.shadow.camera.left=-85,c.shadow.camera.right=85,c.shadow.camera.top=85,c.shadow.camera.bottom=-85,c.shadow.camera.near=10,c.shadow.camera.far=250,c.shadow.bias=-5e-4,i.add(c);const h=new je(8936596,.45);h.position.set(-40,20,60),i.add(h);const d=Ze("desert",34,34),u=new H({map:d.map,bumpMap:d.bumpMap,bumpScale:.24,roughness:.94,metalness:.02}),p=new f(new ae(420,420),u);p.rotation.x=-Math.PI/2,p.receiveShadow=!0,i.add(p);const g=Fn("western",2,2),_=Fn("saloon",2,2),x=Fn("weathered",2,2),m=Kn("redrock",3,2),S=Kn("castle",2,2),M=new H({map:g.map,bumpMap:g.bumpMap,bumpScale:.1,roughness:.85}),v=new H({map:_.map,bumpMap:_.bumpMap,bumpScale:.12,roughness:.8}),A=new H({map:x.map,bumpMap:x.bumpMap,bumpScale:.1,roughness:.9}),b=new H({color:3875604,roughness:.88}),U=new H({color:6044706,roughness:.9}),L=new H({map:m.map,bumpMap:m.bumpMap,bumpScale:.3,roughness:.92}),T=new H({map:S.map,bumpMap:S.bumpMap,bumpScale:.18,roughness:.88}),E=new H({color:16765562,emissive:16751150,emissiveIntensity:1.2,roughness:.3}),O=new H({color:13740363,roughness:.95}),J=new H({color:4156214,roughness:.82}),j=new H({color:15391680,roughness:.92,side:_e}),Q=new H({color:2894378,metalness:.72,roughness:.4}),Y=new H({color:15644980,metalness:.86,roughness:.24}),X=new H({map:sg(),roughness:.85});function I(K,lt,St,Tt,zt,qt,de,ie="",ve="#2d1b10"){const Fe=ig(de,{sub:ie,bg:ve,border:"#e8ad4a",fg:"#fff2d2"}),ze=new f(new N(Tt,zt,.16),[b,b,b,b,new H({map:Fe,roughness:.65}),b]);ze.position.set(K,lt,St),ze.rotation.y=qt,i.add(ze)}function C(K,lt,St){const Tt=new f(new W(.15,.12,.34,8),E);Tt.position.set(K,lt,St),i.add(Tt);const zt=new Hi(16755015,5.5,15,1.6);zt.position.set(K,lt-.15,St),i.add(zt),s.push(qt=>{zt.intensity=5+Math.sin(qt*7.2+K)*.9})}const k=le(i,t,{cx:0,cz:-28,w:16,d:11,h:4.8,floorY:.16,wallMat:v,floorMat:U,roofMat:b,roofStyle:"parapet",south:[{type:"window",offset:-5,width:2.2},{type:"door",offset:0,width:2.8,height:3.1},{type:"window",offset:5,width:2.2}],west:[{type:"window",offset:0,width:2}],east:[{type:"window",offset:0,width:2}],interiorLight:{color:16757596,intensity:2.2,distance:18}}),B=new f(new N(16.2,3.6,1.2),v);B.position.set(0,6.8,-23),B.castShadow=!0,i.add(B),I(0,7.1,-22.25,7.8,2.1,0,"SALOON","WHISKEY • FARO • POKER","#4a1812"),C(0,4.1,-21.8),Ft(i,t,-1.2,k.floorY+.58,-31.2,8.2,1.16,1,b,"wood"),Oc(i,t,5.8,k.floorY,-31.8,0),Ft(i,t,-4.8,k.floorY+.42,-26.2,1.6,.84,1.6,M,"wood"),Ft(i,t,4.8,k.floorY+.42,-26.2,1.6,.84,1.6,M,"wood");const G=le(i,t,{cx:-15.5,cz:-27.5,w:11,d:10.5,h:4.3,floorY:.16,wallMat:T,floorMat:U,roofMat:b,roofStyle:"parapet",south:[{type:"window",offset:-3.2,width:1.8},{type:"door",offset:.6,width:2.2,height:2.9}],north:[{type:"window",offset:-2.6,width:1.5,barred:!0},{type:"window",offset:2.6,width:1.5,barred:!0}],interiorLight:{color:16761976,intensity:1.8,distance:14}});I(-15.5,5.2,-22.1,6.2,1.75,0,"JAIL","RED GULCH MARSHAL","#2a221c"),C(-14.9,3.8,-21.6),qn(i,t,{axis:"x",center:{x:-15.5,z:-28.2},baseY:G.floorY,length:10.2,height:4.1,doors:[{offset:-2.6,width:1.95},{offset:2.6,width:1.95}]}),qn(i,t,{axis:"z",center:{x:-15.5,z:-30.4},baseY:G.floorY,length:4.2,height:4.1,doors:[]}),We(i,t,-18.5,G.floorY,-25.2,1.7,.85,b,-1),Bl(i,t,-11.5,G.floorY,-24.2,3);const tt=new f(new N(.25,1.6,1.4),b);tt.position.set(-20.4,G.floorY+1,-26.8),i.add(tt);for(let K=0;K<3;K++){const lt=new f(new W(.03,.03,1.25,6),Q);lt.position.set(-20.28,G.floorY+1,-27.2+K*.4),i.add(lt)}for(const K of[-24.5,-25.6]){const lt=new f(new ae(.7,.92),X);lt.position.set(-10.45,G.floorY+1.9,K),lt.rotation.y=-Math.PI/2,i.add(lt)}On(i,t,-19.8,G.floorY,-31.2,!0,Q,6047285),On(i,t,-11.2,G.floorY,-31.2,!0,Q,5196094);const at=le(i,t,{cx:-21,cz:4,w:10.5,d:12,h:4.8,floorY:.16,wallMat:A,floorMat:U,roofMat:b,roofStyle:"parapet",east:[{type:"window",offset:-3.6,width:1.9},{type:"door",offset:0,width:2.3,height:3},{type:"window",offset:3.6,width:1.9}],interiorLight:{color:16765576,intensity:1.7,distance:14}});I(-15.55,5.7,4,6.8,1.9,Math.PI/2,"BANK","GOLD & BULLION"),C(-15,4,4),Ft(i,t,-22.2,at.floorY+.58,3,1,1.16,6.4,b,"wood"),qn(i,t,{axis:"z",center:{x:-22.2,z:3},baseY:at.floorY+1.16,length:6.4,height:1.6,doors:[]}),Ft(i,t,-24.8,at.floorY+.85,7.8,1.6,1.7,1.5,Q,"solid");for(let K=0;K<4;K++){const lt=new f(new N(.32,.14,.62),Y);lt.position.set(-24.8+K%2*.36-.18,at.floorY+1.78+Math.floor(K/2)*.15,7.8),i.add(lt)}const F=le(i,t,{cx:21,cz:6,w:11.5,d:13.5,h:5.2,floorY:.12,wallMat:M,floorMat:U,roofMat:b,roofStyle:"gable",west:[{type:"door",offset:0,width:3.4,height:3.6}],east:[{type:"door",offset:0,width:2.6,height:3.2}],interiorLight:{color:16758886,intensity:1.5,distance:16}});I(15,5.8,6,6.2,1.8,-Math.PI/2,"BARN","LIVERY & STABLES","#3f1e14");for(const K of[1.2,10.8])Ft(i,t,21,F.floorY+.75,K,4.2,1.5,.32,b,"wood");for(const[K,lt]of[[18.5,2.8],[23.5,2.8],[18.5,9.2],[23.5,9.2]])Ft(i,t,K,F.floorY+2.5,lt,.36,5,.36,b,"wood");Ft(i,t,24.4,F.floorY+.55,1.2,1.8,1.1,1.3,O,"wood"),Ft(i,t,24.4,F.floorY+.55,10.8,1.8,1.1,1.3,O,"wood");const z=le(i,t,{cx:20,cz:-14,w:10,d:11,h:4.5,floorY:.16,wallMat:A,floorMat:U,roofMat:b,roofStyle:"parapet",west:[{type:"window",offset:-3.2,width:1.8},{type:"door",offset:0,width:2.3,height:2.9},{type:"window",offset:3.2,width:1.8}],interiorLight:{color:16761970,intensity:1.6,distance:13}});I(14.8,5.4,-14,6.8,1.8,-Math.PI/2,"GENERAL","DRY GOODS & AMMO"),C(14.3,3.8,-14),Ft(i,t,22.8,z.floorY+.55,-14,1.1,1.1,6,M,"wood");const $=le(i,t,{cx:-24,cz:46,w:9.5,d:8.5,h:3.8,floorY:.15,wallMat:A,floorMat:U,roofMat:b,roofStyle:"gable",east:[{type:"door",offset:0,width:2.2,height:2.7},{type:"window",offset:2.6,width:1.5}],north:[{type:"window",offset:0,width:1.6}],interiorLight:{color:16759912,intensity:1.3,distance:12}});Bl(i,t,-27.2,$.floorY,43.2,2.8),On(i,t,-26.8,$.floorY,48.6,!1,b,8145458),We(i,t,-22.5,$.floorY,43.4,1.5,.85,M,1);function Z(K,lt,St,Tt,zt=A,qt=1.8){const de=St-K,ie=Tt-lt,ve=Math.hypot(de,ie),Fe=Math.atan2(de,ie),ze=new $t;ze.position.set((K+St)*.5,0,(lt+Tt)*.5),ze.rotation.y=Fe;for(const Oe of[.5,1.05,1.55]){const nn=new f(new N(.14,.14,ve),zt);nn.position.y=Oe,nn.castShadow=!0,ze.add(nn)}const bn=Math.max(2,Math.round(ve/3));for(let Oe=0;Oe<=bn;Oe++){const nn=-ve*.5+Oe/bn*ve,es=new f(new N(.22,qt,.22),b);es.position.set(0,qt*.5,nn),ze.add(es)}i.add(ze),t.addBox((K+St)*.5,qt*.5,(lt+Tt)*.5,Math.abs(de)+.4,qt,Math.abs(ie)+.4,"wood")}Z(-32,38,-14,38),Z(-32,54,-14,54),Z(-32,38,-32,54),Z(-14,38,-14,43),Z(-14,49,-14,54);const ot=20,_t=54,Rt=-70,xt=-40;function it(K,lt,St,Tt){const zt=St-K,qt=Tt-lt,de=Math.hypot(zt,qt),ie=Math.max(4,Math.floor(de/.55));for(let bn=0;bn<=ie;bn++){const Oe=bn/ie,nn=new f(new W(.035,.035,2.1,6),Q);nn.position.set(K+zt*Oe,1.05,lt+qt*Oe),i.add(nn)}const ve=(K+St)*.5,Fe=(lt+Tt)*.5,ze=new f(new N(Math.abs(zt)+.14,.12,Math.abs(qt)+.14),Q);ze.position.set(ve,1.85,Fe),i.add(ze),t.addBox(ve,1.05,Fe,Math.abs(zt)+.32,2.1,Math.abs(qt)+.32,"bars")}it(ot,Rt,_t,Rt),it(_t,Rt,_t,xt),it(ot,Rt,ot,xt),it(ot,xt,31.8,xt),it(36.2,xt,_t,xt),Ft(i,t,31.4,1.9,xt,1,3.8,1,T,"stone"),Ft(i,t,36.6,1.9,xt,1,3.8,1,T,"stone");const mt=new f(new N(6.6,.75,1.1),T);mt.position.set(34,4.1,xt),i.add(mt),I(34,4.95,xt+.45,5.4,1.35,0,"BOOT HILL","CEMETERY","#1e1916");const D=new $t;D.position.set(27.5,0,-35.5),D.rotation.y=.25;const Pt=new H({color:1775897,roughness:.75}),vt=new f(new N(2,1.5,3.8),Pt);vt.position.y=1.45,vt.castShadow=!0,D.add(vt);for(const[K,lt]of[[-1.1,-1.2],[1.1,-1.2],[-1.1,1.2],[1.1,1.2]]){const St=new f(new ee(.62,.07,6,12),b);St.rotation.y=Math.PI/2,St.position.set(K,.64,lt),D.add(St)}i.add(D),t.addBox(27.5,1.2,-35.5,2.6,2.4,4.2,"wood");const It=new H({color:7227950,roughness:.96}),ht=[[25,-46],[29,-46],[25,-52],[29,-52],[25,-58],[29,-58],[40,-46],[44,-46],[48,-46],[48,-52]];for(let K=0;K<ht.length;K++){const[lt,St]=ht[K],Tt=new f(new N(1.1,.24,2.1),It);if(Tt.position.set(lt,.12,St),i.add(Tt),K%2===0){const zt=new f(new N(.78,1.2,.22),T);zt.position.set(lt,.6,St-1.15),zt.castShadow=!0,i.add(zt),t.addBox(lt,.6,St-1.15,.84,1.2,.34,"stone")}else{const zt=new f(new N(.14,1.35,.14),A);zt.position.set(lt,.68,St-1.15);const qt=new f(new N(.75,.14,.14),A);qt.position.set(lt,1,St-1.15),i.add(zt,qt),t.addBox(lt,.68,St-1.15,.5,1.35,.32,"wood")}}const Ct=new f(new N(1.3,.08,2.3),new H({color:1708556,roughness:1}));Ct.position.set(36,.04,-52),i.add(Ct);const dt=new f(new N(1.2,.45,2),It);dt.position.set(34.5,.22,-52),i.add(dt),Ft(i,t,37.8,.32,-52,.85,.64,2.05,M,"wood");const R=new f(new W(.03,.03,1.4,6),A);R.position.set(34.5,.9,-51.4),R.rotation.z=.22;const y=new f(new N(.28,.36,.04),Q);y.position.set(34.35,.35,-51.4),i.add(R,y);const V=new $t;V.position.set(24.5,0,-64.5);const nt=new f(new W(.42,.62,5.2,8),b);nt.position.y=2.6,nt.castShadow=!0;const ct=new f(new W(.16,.28,3.8,6),b);ct.position.set(1.6,4.4,.3),ct.rotation.z=-1.25;const rt=new f(new W(.12,.2,2.6,6),b);rt.position.set(-1.1,4.8,-.4),rt.rotation.z=.9;const ft=new f(new W(.025,.025,1.8,6),O);ft.position.set(2.5,3.3,.3);const ut=new f(new ee(.18,.028,6,12),O);ut.position.set(2.5,2.3,.3),V.add(nt,ct,rt,ft,ut),i.add(V),t.addBox(24.5,2.6,-64.5,1.25,5.2,1.25,"wood");const bt=le(i,t,{cx:45,cz:-62.5,w:8,d:8,h:3.9,floorY:.16,wallMat:T,floorMat:T,roofMat:T,roofStyle:"gable",south:[{type:"door",offset:0,width:2.3,height:2.9}],interiorLight:{color:10075135,intensity:1.1,distance:11}});I(45,4.35,-58.3,3.6,.9,0,"CRYPT","R.I.P.","#242428"),Ft(i,t,45,bt.floorY+.55,-65,2.6,1.1,1.2,T,"stone");function Lt(K,lt,St){const Tt=new $t;Tt.position.set(K,0,lt),Tt.rotation.y=St;const zt=new f(new N(2.4,.9,4.6),M);zt.position.y=1.25,zt.castShadow=!0,Tt.add(zt);const qt=new f(new W(1.25,1.25,4.4,12,1,!0,0,Math.PI),j);qt.rotation.z=Math.PI/2,qt.rotation.y=Math.PI/2,qt.position.y=1.72,Tt.add(qt);for(const[de,ie]of[[-1.3,-1.5],[1.3,-1.5],[-1.3,1.5],[1.3,1.5]]){const ve=new f(new ee(.68,.08,6,14),b);ve.rotation.y=Math.PI/2,ve.position.set(de,.72,ie),Tt.add(ve)}i.add(Tt),t.addBox(K,1.4,lt,3,2.8,4.8,"wood")}Lt(6.5,24,.35),Lt(-7.5,-2,-.25);const wt=new $t;wt.position.set(-32,0,-28);for(const[K,lt]of[[-2,-2],[2,-2],[-2,2],[2,2]]){const St=new f(new N(.45,9.5,.45),b);St.position.set(K,4.75,lt),wt.add(St)}const At=new f(new W(3.2,3.2,4.8,16),A);At.position.y=11.4;const Ot=new f(new kt(3.7,2.4,16),b);Ot.position.y=15,wt.add(At,Ot),i.add(wt),t.addBox(-32,4.5,-28,4.8,9,4.8,"wood");const Bt=[[-6,34],[7,36],[-10,16],[10,14],[-6,-12],[6,-15],[10,-25],[-9,-18]];for(const[K,lt]of Bt){Ft(i,t,K,.68,lt,1.45,1.36,1.45,M,"wood");const St=new f(new W(.46,.42,1.25,10),v);St.position.set(K+1.1,.62,lt+.35),i.add(St),t.addBox(K+1.1,.62,lt+.35,.96,1.25,.96,"wood")}function Dt(K,lt,St=1){const Tt=new $t;Tt.position.set(K,0,lt);const zt=new f(new W(.32,.38,4.2,10),J);zt.position.y=2.1;const qt=new f(new W(.22,.24,1.6,8),J);qt.position.set(.75,2.7,0);const de=new f(new W(.22,.24,1.4,8),J);de.position.set(-.72,3.1,0),Tt.add(zt,qt,de),Tt.rotation.y=K*.8,Tt.scale.setScalar(St),i.add(Tt),t.addBox(K,2.1*St,lt,.9*St,4.2*St,.9*St,"solid")}const Mt=[[-46,38,1.1],[42,40,1.2],[-48,-22,1.3],[58,-24,1.1],[-52,6,1.15],[50,12,1.25],[16,52,.95],[-42,62,1.1],[34,58,1.15]];for(const[K,lt,St]of Mt)Dt(K,lt,St);const yt=[[0,-135,62,38,28],[-98,-112,48,44,34],[102,-108,52,40,32],[-132,-10,36,36,58],[134,8,38,34,62],[-95,110,56,30,36],[88,114,58,32,34]];for(const[K,lt,St,Tt]of yt){const zt=new f(new W(St*.42,St*.68,Tt,7),L);zt.position.set(K,Tt*.5-1,lt),i.add(zt);const qt=new f(new W(St*.46,St*.42,4.5,7),L);qt.position.set(K,Tt-1.5,lt),i.add(qt)}e.initAmbient("dust",t.bounds),e.addTumbleweed(new w(-25,.7,22),1),e.addTumbleweed(new w(24,.7,-4),-1);const Vt=[{type:"health",pos:new w(-12.8,.9,-30.5),label:"JAIL CELL TONIC (+35 HP)"},{type:"health",pos:new w(45,.9,-62.5),label:"CRYPT ELIXIR (+35 HP)"},{type:"health",pos:new w(-23.5,.9,46.5),label:"HOMESTEAD TONIC (+35 HP)"},{type:"ammo",pos:new w(-19.5,.9,4),label:"BANK AMMO BOX"},{type:"ammo",pos:new w(21,.9,6),label:"BARN SHELL CRATE"},{type:"health",pos:new w(3.5,.9,-29),label:"SALOON WHISKEY (+35 HP)"},{type:"ammo",pos:new w(19,.9,-14),label:"GENERAL STORE AMMO"}];for(const K of Vt){const lt=ti(K.type);lt.position.copy(K.pos),i.add(lt),o.push({...K,mesh:lt,collected:!1})}const q=[{type:"cowboy",pos:new w(-8,0,38)},{type:"cowboy",pos:new w(9,0,34)},{type:"bandito",pos:new w(-17,0,46)},{type:"cowboy",pos:new w(-23,.16,46)},{type:"cowboy",pos:new w(-10,0,20)},{type:"bandito",pos:new w(10,0,18)},{type:"bandito",pos:new w(-19,.16,5)},{type:"cowboy",pos:new w(20,.12,6)},{type:"cowboy",pos:new w(0,0,10)},{type:"bandito",pos:new w(-10,0,-4)},{type:"cowboy",pos:new w(10,0,-6)},{type:"bandito",pos:new w(19,.16,-14)},{type:"cowboy",pos:new w(-14.5,.16,-25.8)},{type:"bandito",pos:new w(-2.5,.16,-28)},{type:"cowboy",pos:new w(3,.16,-28)},{type:"bandito",pos:new w(-8,0,-18)},{type:"cowboy",pos:new w(9,0,-21)},{type:"cowboy",pos:new w(18,0,-34)},{type:"bandito",pos:new w(28,0,-44)},{type:"cowboy",pos:new w(38,0,-49)},{type:"bandito",pos:new w(45,.16,-61.5),options:{hideUntilClose:!0,ambushDist:14}},{type:"bandito",pos:new w(10,0,-34)},{type:"boss_west",pos:new w(0,0,-19),isBossWave:!0}],Et=[{name:"Saloon",inside:new w(0,.16,-27.5),outside:new w(0,0,-20.5)},{name:"Jail",inside:new w(-15,.16,-26),outside:new w(-14.9,0,-20.5)},{name:"Bank",inside:new w(-19.2,.16,4),outside:new w(-14,0,4)},{name:"Barn",inside:new w(20,.12,6),outside:new w(13.5,0,6)},{name:"Boot Hill Crypt",inside:new w(45,.16,-61.8),outside:new w(45,0,-56.5)}];return{enemySpawns:q,pickups:o,animated:s,disposables:n,enterableBuildings:Et}}function ti(i,t="default"){const e=new $t,n=i==="health";if(n&&t==="tea_glass"){const a=new H({color:13200936,emissive:7024392,emissiveIntensity:.7,roughness:.25}),l=new H({color:12107976,metalness:.85,roughness:.25}),c=new f(new W(.24,.2,.56,12),a),h=new f(new W(.26,.23,.34,12),l);h.position.y=-.11;const d=new f(new ee(.14,.03,6,10),l);d.position.set(.27,-.06,0);const u=new f(new ee(.46,.035,6,18),new oe({color:16761192}));return u.rotation.x=Math.PI/2,u.position.y=-.3,e.add(c,h,d,u),e}if(n&&t==="butter_tea"){const a=new H({color:9055262,roughness:.55}),l=new H({color:15120488,emissive:9198104,emissiveIntensity:.65,roughness:.3}),c=new f(new W(.36,.18,.32,14),a),h=new f(new W(.32,.32,.08,14),l);h.position.y=.13;const d=new f(new ee(.48,.035,6,18),new oe({color:16240747}));return d.rotation.x=Math.PI/2,d.position.y=-.22,e.add(c,h,d),e}const s=new H({color:n?3066993:15906633,emissive:n?1474627:11760658,emissiveIntensity:.75,metalness:.35,roughness:.3}),o=n?new f(new W(.28,.34,.72,10),s):new f(new N(.75,.48,.52),s),r=new f(new ee(.55,.04,6,18),new oe({color:n?7208874:16770180}));return r.rotation.x=Math.PI/2,r.position.y=-.32,e.add(o,r),e}const mg={id:"japan",index:1,themeClass:"theme-japan",act:"ACT II • 1603",title:"KYOTO MIST",subtitle:"Blossom & Steel",heroName:"KENSHIN THE SAMURAI",objective:"Purge the Shrine, Dojo & Hermitage, and Defeat Lord Kurogane",quote:'"Beneath falling blossoms, honor is weighed by the quiet edge of steel. Step through the Torii gate and reclaim the sacred hill."',musicTheme:"japan",enemyIcon:"⚔",currency:"両 ",arsenalSummary:[["1 • Muramasa Katana","Swift folded-steel blade. RMB unleashes Iaido cleave."],["2 • Yumi Longbow","Silent piercing arrows with Spirit Focus Zoom (RMB)."],["3 • Shinobi Shuriken","Rapid steel stars. RMB throws a 3-star fan."],["4 • Tanegashima Musket","Thunderous Edo black-powder firepower."]],spawnPos:new w(0,0,52),spawnYaw:0,cameraPreview:{center:new w(0,5,-6),radius:42,height:15,speed:.13}};function gg(i,t,e){const n=[],s=[],o=[];t.bounds={minX:-80,maxX:80,minZ:-82,maxZ:74};const r=new w(-.35,.22,-.9).normalize(),a=Qn({topColor:1778503,midColor:9391725,horizonColor:16762029,sunColor:16771276,sunDirection:r,cloudTint:16757690,cloudDensity:.48});i.add(a.mesh),s.push(V=>{a.uniforms.uTime.value=V}),i.fog=new yn(8149614,.0072);const l=new Jn(16765142,2964268,.92);i.add(l);const c=new je(16764856,2.3);c.position.copy(r).multiplyScalar(110),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),c.shadow.camera.left=-85,c.shadow.camera.right=85,c.shadow.camera.top=85,c.shadow.camera.bottom=-85,c.shadow.near=10,c.shadow.far=250,c.shadow.bias=-5e-4,i.add(c);const h=new je(7968488,.55);h.position.set(50,26,55),i.add(h);const d=Ze("japan_moss",34,34),u=new f(new ae(420,420),new H({map:d.map,bumpMap:d.bumpMap,bumpScale:.2,roughness:.92}));u.rotation.x=-Math.PI/2,u.receiveShadow=!0,i.add(u);const p=Ze("cobble",3,28),g=new f(new ae(7.2,118),new H({map:p.map,bumpMap:p.bumpMap,bumpScale:.18,roughness:.85}));g.rotation.x=-Math.PI/2,g.position.set(0,.04,4),g.receiveShadow=!0,i.add(g);const _=Fn("darkJapan",2,2),x=Fn("redLacquer",2,2),m=Kn("temple",2,2),S=xa("japan",4,2),M=eg(2,1),v=Ze("zen_sand",4,4),A=fo("japan"),b=new H({map:_.map,bumpMap:_.bumpMap,bumpScale:.1,roughness:.78}),U=new H({map:x.map,roughness:.48,metalness:.08}),L=new H({map:m.map,bumpMap:m.bumpMap,bumpScale:.2,roughness:.88}),T=new H({map:S.map,bumpMap:S.bumpMap,bumpScale:.18,roughness:.58,metalness:.15}),E=new H({map:M,emissive:16757596,emissiveIntensity:.35,roughness:.6}),O=new H({color:12167800,roughness:.9}),J=new H({color:16770216,emissive:16749622,emissiveIntensity:1.5,roughness:.25}),j=new H({color:15119943,metalness:.85,roughness:.28}),Q=new H({color:4949820,roughness:.45}),Y=new H({color:3894834,roughness:.8}),X=new H({color:16757707,emissive:6036016,emissiveIntensity:.2,roughness:.85}),I=new H({color:16766692,emissive:7021627,emissiveIntensity:.22,roughness:.85}),C=new H({map:A,side:_e,roughness:.7}),k=new H({color:14998992,roughness:.85});function B(V,nt,ct=1,rt=0){const ft=new $t;ft.position.set(V,0,nt),ft.rotation.y=rt,ft.scale.setScalar(ct);for(const Dt of[-3.2,3.2]){const Mt=new f(new W(.46,.55,1.1,10),L);Mt.position.set(Dt,.55,0);const yt=new f(new W(.32,.38,6.8,12),U);yt.position.set(Dt,4,0),yt.castShadow=!0,ft.add(Mt,yt)}const ut=new f(new N(8.6,.42,.44),U);ut.position.set(0,5.9,0);const bt=new f(new N(9.8,.54,.68),U);bt.position.set(0,7.25,0);const Lt=new f(new N(10.3,.34,.86),T);Lt.position.set(0,7.62,0);const wt=new f(new N(.9,1.15,.26),b);wt.position.set(0,6.55,0);const At=new f(new N(.98,1.24,.16),j);At.position.set(0,6.55,0),ft.add(ut,bt,Lt,wt,At),i.add(ft);const Ot=Math.cos(rt),Bt=Math.sin(rt);for(const Dt of[-3.2*ct,3.2*ct])t.addBox(V+Dt*Ot,3.5,nt-Dt*Bt,1.1*ct,7.5*ct,1.1*ct,"wood")}B(0,38,1.15),B(0,22,1),B(0,-14,1.1),B(34,-36,.92,Math.PI/2);const G=Ki(22,14,{deepColor:1064005,shallowColor:2520440,foamColor:16767462,sunColor:16765109,sunDir:r,opacity:.9,waveScale:.05});G.mesh.position.set(16,.08,4),i.add(G.mesh),s.push(V=>{G.uniforms.uTime.value=V}),t.addBox(9.5,.8,4,8.2,1.6,13.5,"water"),t.addBox(22.5,.8,4,8.2,1.6,13.5,"water");const tt=new oe({color:16739886}),at=new oe({color:16773350});for(let V=0;V<6;V++){const nt=new f(new da(.12,.45,4,6),V%2===0?tt:at);nt.rotation.x=Math.PI/2,i.add(nt);const ct=3.2+V%3*1.9,rt=.45+V*.1,ft=V*1.1;s.push(ut=>{const bt=ut*rt+ft;nt.position.set(16+Math.cos(bt)*ct,.05,4+Math.sin(bt)*(ct*.65)),nt.rotation.z=bt})}const F=new f(new N(4.6,.35,16),b);F.position.set(16,.25,4),F.receiveShadow=!0,i.add(F),t.addWalkable(16,4,4.8,16.4,.42);for(const V of[13.8,18.2])Ft(i,t,V,1,4,.22,1.35,15.6,U,"wood");const z=new f(new N(18,.18,16),new H({map:v.map,bumpMap:v.bumpMap,bumpScale:.22,roughness:.95}));z.position.set(-19,.09,4),z.receiveShadow=!0,i.add(z);for(const[V,nt,ct]of[[-22,2,1.6],[-15,7,1.35],[-20,8,1.15],[-16,-1,1.45]]){const rt=new f(new $n(ct,1),L);rt.position.set(V,ct*.65,nt),rt.castShadow=!0,i.add(rt),t.addBox(V,ct*.6,nt,ct*2,ct*1.5,ct*1.8,"stone")}const $=le(i,t,{cx:0,cz:-34,w:16,d:11,h:4.8,floorY:.36,wallMat:E,floorMat:O,roofMat:T,roofStyle:"hip",south:[{type:"window",offset:-5,width:2.2},{type:"door",offset:0,width:3.2,height:3.2},{type:"window",offset:5,width:2.2}],west:[{type:"door",offset:0,width:2.2,height:2.8}],east:[{type:"door",offset:0,width:2.2,height:2.8}],stepMat:L,interiorLight:{color:16757596,intensity:2.2,distance:18}}),Z=new f(new N(9,2.8,6.6),U);Z.position.set(0,$.roofY+2.8,-34);const ot=new f(new kt(8.5,3,4),T);ot.rotation.y=Math.PI/4,ot.position.set(0,$.roofY+5.6,-34);const _t=new f(new W(.08,.18,2.4,8),j);_t.position.set(0,$.roofY+8,-34),i.add(Z,ot,_t);for(const V of[-5.2,5.2]){const nt=new f(new ae(1.4,3.2),C);nt.position.set(V,3.2,-28.2),i.add(nt)}_n(i,t,0,$.floorY,-37.8,3.6,1.1,U,13935671);const Rt=le(i,t,{cx:-23,cz:-16,w:10.5,d:9,h:3.9,floorY:.25,wallMat:E,floorMat:O,roofMat:T,roofStyle:"hip",east:[{type:"door",offset:0,width:2.4,height:2.8}],south:[{type:"door",offset:0,width:2.4,height:2.8}],north:[{type:"window",offset:0,width:2.2}],interiorLight:{color:16760434,intensity:1.5,distance:13}});We(i,t,-25.8,Rt.floorY,-17.5,1.6,.9,b,1);const xt=le(i,t,{cx:23,cz:-16,w:10.5,d:9,h:3.9,floorY:.25,wallMat:E,floorMat:O,roofMat:T,roofStyle:"hip",west:[{type:"door",offset:0,width:2.4,height:2.8}],south:[{type:"door",offset:0,width:2.4,height:2.8}],north:[{type:"window",offset:0,width:2.2}],interiorLight:{color:16760434,intensity:1.5,distance:13}});We(i,t,25.8,xt.floorY,-17.5,1.6,.9,b,1);const it=le(i,t,{cx:-24,cz:24,w:10,d:8.5,h:3.8,floorY:.25,wallMat:E,floorMat:O,roofMat:T,roofStyle:"hip",east:[{type:"door",offset:0,width:2.4,height:2.8}],north:[{type:"door",offset:0,width:2.2,height:2.8}],interiorLight:{color:16760434,intensity:1.5,distance:12}});We(i,t,-26.5,it.floorY,25.6,1.5,.9,b,-1),Ft(i,t,47,1.6,-54,26,3.2,.55,k,"stone"),Ft(i,t,47,1.6,-24,26,3.2,.55,k,"stone"),Ft(i,t,60,1.6,-39,.55,3.2,30,k,"stone"),Ft(i,t,34,1.6,-47.5,.55,3.2,13,k,"stone"),Ft(i,t,34,1.6,-28,.55,3.2,8.5,k,"stone");const mt=le(i,t,{cx:49,cz:-39,w:12,d:13,h:4.5,floorY:.28,wallMat:E,floorMat:O,roofMat:T,roofStyle:"hip",west:[{type:"window",offset:-3.6,width:2},{type:"door",offset:0,width:2.8,height:3},{type:"window",offset:3.6,width:2}],interiorLight:{color:16764032,intensity:1.8,distance:16}});_n(i,t,53.4,mt.floorY,-39,1.2,3,b,10231326);const D=le(i,t,{cx:-52,cz:32,w:9,d:8,h:3.6,floorY:.22,wallMat:b,floorMat:O,roofMat:T,roofStyle:"gable",east:[{type:"door",offset:0,width:2.3,height:2.7}],north:[{type:"window",offset:0,width:1.8}],interiorLight:{color:16758886,intensity:1.4,distance:12}});We(i,t,-54.5,D.floorY,32,1.4,.85,b,1);function Pt(V,nt){const ct=new $t;ct.position.set(V,0,nt);const rt=new f(new W(.18,.26,1.5,8),L);rt.position.y=.75;const ft=new f(new N(.45,.45,.45),J);ft.position.y=1.72;const ut=new f(new kt(.58,.38,6),L);ut.position.y=2.12,ct.add(rt,ft,ut),i.add(ct),t.addBox(V,1,nt,.75,2.2,.75,"stone")}for(const V of[32,16,0,-10,-22])Pt(-4.8,V),Pt(4.8,V);function vt(V,nt,ct=1){const rt=new $t;rt.position.set(V,0,nt);const ft=new f(new W(.32,.56,4.4,8),b);ft.position.y=2.2,ft.castShadow=!0,rt.add(ft);for(const[ut,bt,Lt,wt,At]of[[0,5.2,0,2.7,X],[-1.9,4.5,.8,2.1,I],[1.8,4.7,-.7,2.2,X],[.4,6.2,.5,1.9,I]]){const Ot=new f(new wi(wt,1),At);Ot.position.set(ut,bt,Lt),Ot.scale.set(1.25,.72,1.15),rt.add(Ot)}rt.scale.setScalar(ct),i.add(rt),t.addBox(V,2,nt,1.2*ct,4.2*ct,1.2*ct,"wood")}for(const[V,nt,ct]of[[-12,-26,1.2],[12,-26,1.25],[-10,16,1.05],[10,18,1.1],[-33,4,1.3],[32,-4,1.2],[-14,-6,1],[38,-46,1.15],[-40,26,1.1]])vt(V,nt,ct);function It(V,nt,ct=12,rt=4.2){const ft=new $t;for(let ut=0;ut<ct;ut++){const bt=ut/ct*Math.PI*2+V*.3,Lt=.6+ut*1.37%1*rt,wt=V+Math.cos(bt)*Lt,At=nt+Math.sin(bt)*Lt,Ot=11+ut*3.1%5,Bt=new f(new W(.11,.15,Ot,6),Q);if(Bt.position.set(wt,Ot*.5,At),ft.add(Bt),ut%2===0){const Dt=new f(new $n(1.5,0),Y);Dt.position.set(wt,Ot-1,At),Dt.scale.set(1.4,.48,1.4),ft.add(Dt)}}i.add(ft),t.addBox(V,3,nt,rt*1.15,6,rt*1.15,"wood")}for(const[V,nt,ct,rt]of[[-14,42,12,4.5],[14,42,12,4.5],[-38,44,12,4.5],[32,36,12,4.8],[42,16,12,4.8],[44,-8,12,4.5],[-44,-10,12,4.8],[-42,-36,12,4.8],[-64,18,12,5]])It(V,nt,ct,rt);const ht=new f(new kt(110,76,24),new H({color:3882339,roughness:.95}));ht.position.set(0,36,-190);const Ct=new f(new kt(40,28,24),new H({color:16772070,roughness:.85}));Ct.position.set(0,62,-190),i.add(ht,Ct),e.initAmbient("petals",t.bounds);const dt=[{type:"health",pos:new w(-23,.9,-16),label:"TEA HOUSE HERBS (+35 HP)"},{type:"health",pos:new w(-51.5,.9,32),label:"HERMITAGE TONIC (+35 HP)"},{type:"health",pos:new w(48,.9,-39),label:"DOJO SALVE (+35 HP)"},{type:"health",pos:new w(0,1.1,-34),label:"SHRINE ELIXIR (+35 HP)"},{type:"ammo",pos:new w(23,.9,-16),label:"ARROW & SHURIKEN QUIVER"},{type:"ammo",pos:new w(-24,.9,24),label:"POWDER & STARS"}];for(const V of dt){const nt=ti(V.type);nt.position.copy(V.pos),i.add(nt),o.push({...V,mesh:nt,collected:!1})}const R=[{type:"ninja",pos:new w(-8,0,32)},{type:"ninja",pos:new w(8,0,30)},{type:"ronin",pos:new w(0,0,18)},{type:"ninja",pos:new w(-12,0,12)},{type:"ronin",pos:new w(-23,.25,24)},{type:"ninja",pos:new w(-36,0,28)},{type:"ronin",pos:new w(-50,.22,32)},{type:"ninja",pos:new w(-25,0,4)},{type:"ronin",pos:new w(16,.42,4)},{type:"ninja",pos:new w(16,0,16)},{type:"ronin",pos:new w(0,0,-4)},{type:"ninja",pos:new w(-12,0,-10)},{type:"ronin",pos:new w(-22,.25,-16)},{type:"ninja",pos:new w(14,0,-10)},{type:"ronin",pos:new w(22,.25,-16)},{type:"ninja",pos:new w(26,0,-34)},{type:"ronin",pos:new w(39,0,-38)},{type:"ninja",pos:new w(41,0,-46)},{type:"ronin",pos:new w(48,.28,-39)},{type:"ninja",pos:new w(49,.28,-35)},{type:"ronin",pos:new w(-8,0,-24)},{type:"ninja",pos:new w(8,0,-24)},{type:"ronin",pos:new w(-3,.36,-33)},{type:"ninja",pos:new w(3,.36,-33)},{type:"boss_japan",pos:new w(0,0,-23),isBossWave:!0}],y=[{name:"Shinto Shrine Hall",inside:new w(0,.36,-33.5),outside:new w(0,0,-26.5)},{name:"West Tea House",inside:new w(-23,.25,-16),outside:new w(-16,0,-16)},{name:"Dojo Hall",inside:new w(48,.28,-39),outside:new w(40,0,-39)},{name:"Bamboo Hermitage",inside:new w(-51.5,.22,32),outside:new w(-45.5,0,32)}];return{enemySpawns:R,pickups:o,animated:s,disposables:n,enterableBuildings:y}}const wg={id:"swiss",index:2,themeClass:"theme-swiss",act:"ACT III • 1307",title:"RÜTLI VALLEY",subtitle:"Tell's Arrow & The Uri Banner",heroName:"WILHELM TELL (URI)",objective:"Drive the Austrian Army from the Valley, Chapel & Watchtower",quote:'"Upon the Rütli meadow we swore our oath beneath the Uri Bull: Uri, Schwyz, and Unterwalden shall bow to no tyrant’s hat!"',musicTheme:"swiss",enemyIcon:"✚",currency:"Fl ",arsenalSummary:[["1 • Tell's Armbrust","Precision Swiss crossbow with Eagle-Eye Zoom (RMB)."],["2 • Swiss Halberd","Cleaves Austrian steel armor at close quarters."],["3 • Alpine Repeater","Rapid-fire light crossbow for skirmishes."],["4 • Alpine Fire-Pot","Blazing medieval black-powder grenade."]],spawnPos:new w(-4,0,50),spawnYaw:0,cameraPreview:{center:new w(-4,6,-6),radius:44,height:15,speed:.12}};function xg(i,t,e){const n=[],s=[],o=[];t.bounds={minX:-72,maxX:46,minZ:-80,maxZ:70};const r=new w(.48,.52,-.7).normalize(),a=Qn({topColor:1463976,midColor:6137064,horizonColor:14283007,sunColor:16776160,sunDirection:r,cloudTint:16777215,cloudDensity:.48});i.add(a.mesh),s.push(ht=>{a.uniforms.uTime.value=ht}),i.fog=new yn(12902386,.0046),i.add(new Jn(14676735,3892017,.95));const l=new je(16774620,2.4);l.position.copy(r).multiplyScalar(120),l.castShadow=!0,l.shadow.mapSize.set(2048,2048),l.shadow.camera.left=-85,l.shadow.camera.right=85,l.shadow.camera.top=85,l.shadow.camera.bottom=-85,l.shadow.near=10,l.shadow.far=260,l.shadow.bias=-5e-4,i.add(l);const c=new je(9426175,.5);c.position.set(-55,22,40),i.add(c);const h=Ze("alpine_meadow",34,34),d=new f(new ae(420,420),new H({map:h.map,bumpMap:h.bumpMap,bumpScale:.2,roughness:.92}));d.rotation.x=-Math.PI/2,d.receiveShadow=!0,i.add(d);const u=Ze("cobble",3,28),p=new f(new ae(6.8,114),new H({map:u.map,bumpMap:u.bumpMap,bumpScale:.16,roughness:.88}));p.rotation.x=-Math.PI/2,p.position.set(-4,.04,4),p.receiveShadow=!0,i.add(p);const g=Fn("alpine",2,2),_=Kn("castle",2,2),x=xa("swiss",4,2),m=ng(2,1),S=new H({map:g.map,bumpMap:g.bumpMap,bumpScale:.12,roughness:.85}),M=new H({color:3547155,roughness:.86}),v=new H({map:_.map,bumpMap:_.bumpMap,bumpScale:.22,roughness:.88}),A=new H({map:x.map,bumpMap:x.bumpMap,bumpScale:.16,roughness:.84}),b=new H({map:m,roughness:.82}),U=new H({color:16054783,roughness:.72}),L=new H({color:6777712,roughness:.92}),T=new H({color:2051371,roughness:.88}),E=new H({color:2843446,roughness:.88}),O=new H({color:14232363,roughness:.7}),J=new H({color:15590868,roughness:.82}),j=new H({map:fo("austria"),side:_e,roughness:.65}),Q=new H({map:fo("uri"),side:_e,roughness:.65});new H({map:fo("swiss"),side:_e,roughness:.65});const Y=Ki(150,260,{deepColor:743544,shallowColor:3065036,foamColor:15465727,sunColor:16776416,sunDir:r,opacity:.9,waveScale:.16});Y.mesh.position.set(98,.08,0),i.add(Y.mesh),s.push(ht=>{Y.uniforms.uTime.value=ht}),t.addBox(36,2,0,22,4,180,"water");for(let ht=-64;ht<=60;ht+=8){const Ct=new f(new $n(1.5,1),v);Ct.position.set(24.5+Math.sin(ht*.14)*1.8,.4,ht),Ct.scale.set(1.3,.65,1.2),i.add(Ct),t.addBox(Ct.position.x,.6,ht,2.4,1.2,2.2,"stone")}const X=new f(new N(10,.35,3.6),S);X.position.set(28,.4,18),i.add(X);const I=new f(new N(3.2,.65,1.35),S);I.position.set(34,.25,21),i.add(I),s.push(ht=>{I.position.y=.28+Math.sin(ht*2.2)*.1});for(let ht=0;ht<6;ht++){const Ct=-50+ht*18,dt=30+ht%3*8,R=new f(new $n(15,1),L);R.position.set(-84,dt*.45,Ct),R.scale.set(1.1,dt/14,1.45),i.add(R)}const C=dg(9.5,32);C.mesh.position.set(-68.5,15.5,-18),C.mesh.rotation.y=Math.PI/2-.25,i.add(C.mesh),s.push(ht=>{C.uniforms.uTime.value=ht}),e.addMistEmitter(new w(-64,.8,-18),4.5);const k=Ki(94,6,{deepColor:1800598,shallowColor:6085864,foamColor:16777215,sunColor:16776416,sunDir:r,opacity:.88,waveScale:.08});k.mesh.position.set(-22,.06,-8),i.add(k.mesh),s.push(ht=>{k.uniforms.uTime.value=ht*1.5}),t.addBox(-42,.8,-8,66,1.6,5.4,"water"),t.addBox(14,.8,-8,26,1.6,5.4,"water");const B=new f(new N(8.4,.35,9.6),S);B.position.set(-4,.24,-8),B.receiveShadow=!0,i.add(B),t.addWalkable(-4,-8,8.6,10,.42);for(const ht of[-8,0])Ft(i,t,ht,.95,-8,.24,1.3,9.2,M,"wood");function G(ht,Ct,dt=0,R=!0){const y=new $t;y.position.set(ht,0,Ct),y.rotation.y=dt;const V=new H({color:14922122,roughness:.72}),nt=new H({color:5059360,roughness:.92}),ct=new H({color:6048308,roughness:.85}),rt=new H({color:9380900,roughness:.8}),ft=new H({color:2825492,roughness:.85}),ut=new H({color:15910441,roughness:.65}),bt=new H({color:13687526,metalness:.88,roughness:.22});for(const q of[-.17,.17]){const Et=new f(new W(.11,.1,.84,8),ft);Et.position.set(q,.42,0),y.add(Et)}const Lt=new f(new N(.62,.78,.36),ct);Lt.position.set(0,1.18,0);const wt=new f(new N(.65,.18,.38),ut);wt.position.set(0,1,0);const At=new f(new N(.64,.95,.1),rt);At.position.set(0,1.05,-.22);const Ot=new f(new Xt(.22,12,10),V);Ot.position.set(0,1.76,0);const Bt=new f(new kt(.21,.38,10),nt);Bt.rotation.x=Math.PI,Bt.position.set(0,1.54,.11);const Dt=new f(new W(.24,.25,.16,12),rt);Dt.position.set(0,1.94,0),y.add(Lt,wt,At,Ot,Bt,Dt);const Mt=new f(new W(.036,.04,3.05,8),M);Mt.position.set(-.46,1.55,.35);const yt=new f(new kt(.045,.55,4),bt);yt.position.set(-.46,3.3,.35);const Vt=new f(new N(.03,.44,.36),bt);if(Vt.position.set(-.46,2.86,.52),y.add(Mt,yt,Vt),R){const q=new f(new W(.045,.055,5.4,8),M);q.position.set(.48,2.7,.42);const Et=new ae(1.75,2.6,8,4),K=new f(Et,Q);K.position.set(1.36,4.05,.42),y.add(q,K);const lt=Et.attributes.position.array.slice();s.push(St=>{const Tt=Et.attributes.position;for(let zt=0;zt<Tt.count;zt++){const qt=lt[zt*3]+.875;Tt.setZ(zt,Math.sin(St*4.5+qt*2.6)*.14*qt)}Tt.needsUpdate=!0})}i.add(y),t.addBox(ht,1.2,Ct,1.2,2.4,1.2,"wood")}G(2.8,43.5,-.55,!0),G(-9.2,43.2,.45,!1);const tt=new f(new W(.08,.1,1.75,8),M);tt.position.set(5.5,.875,38),i.add(tt),t.addBox(5.5,.88,38,.36,1.75,.36,"wood");const at=new f(new Xt(.24,12,10),new H({color:14229793,roughness:.3,emissive:3802373,emissiveIntensity:.35}));at.position.set(5.5,1.92,38),at.userData.isTellApple=!0,i.add(at);function F(ht,Ct,dt,R,y){const V={cx:ht,cz:Ct,w:dt,d:R,h:3.6,floorY:.18,wallMat:v,floorMat:S,roofMat:A,roofStyle:"none",interiorLight:{color:16761976,intensity:1.5,distance:12}};V[y]=[{type:"door",offset:0,width:2.3,height:2.8}];const nt=y==="east"?"west":y==="west"?"east":"north";V[nt]=[{type:"window",offset:0,width:1.8}];const ct=le(i,t,V),rt=new f(new N(dt+.6,3,R+.6),b);rt.position.set(ht,ct.roofY+1.5,Ct),rt.castShadow=!0;const ft=new f(new kt(Math.max(dt,R)*.88,2.8,4),A);ft.rotation.y=Math.PI/4,ft.position.set(ht,ct.roofY+4.3,Ct);const ut=new f(new N(dt*.6,.36,.4),O);return ut.position.set(ht+(y==="east"?dt*.5+.5:y==="west"?-(dt*.5+.5):0),ct.roofY+.5,Ct),i.add(rt,ft,ut),t.addBox(ht,ct.roofY+1.6,Ct,dt+.6,3.2,R+.6,"wood"),ct}const z=F(-22,22,10,9,"east");Gi(i,t,-25.2,z.floorY,22,.85),On(i,t,-23.5,z.floorY,18.6,!1,M,9380900);const $=F(11,20,9.5,8.5,"west");We(i,t,13.8,$.floorY,20,1.5,.85,S,1);const Z=F(-24,4,10,9,"east");Gi(i,t,-27.2,Z.floorY,4,.85);const ot=le(i,t,{cx:11,cz:-22,w:10.5,d:13.5,h:4.6,floorY:.2,wallMat:J,floorMat:v,roofMat:A,roofStyle:"gable",west:[{type:"door",offset:0,width:2.3,height:3},{type:"window",offset:-4,width:1.5},{type:"window",offset:4,width:1.5}],south:[{type:"door",offset:0,width:2.2,height:2.9}],interiorLight:{color:16764808,intensity:1.8,distance:15}}),_t=new f(new N(2.6,4.2,2.6),J);_t.position.set(11,ot.roofY+2.4,-26.5);const Rt=new f(new kt(2.1,4.8,4),A);Rt.rotation.y=Math.PI/4,Rt.position.set(11,ot.roofY+6.9,-26.5),i.add(_t,Rt),_n(i,t,11,ot.floorY,-27.2,2.8,1,v,11017244),Bn(i,t,13.2,ot.floorY,-23,3,M),Bn(i,t,13.2,ot.floorY,-20.5,3,M);const xt=le(i,t,{cx:-4,cz:-40,w:11.5,d:11.5,h:4.8,floorY:.22,wallMat:v,floorMat:v,roofMat:v,roofStyle:"none",south:[{type:"door",offset:0,width:2.8,height:3.2}],west:[{type:"window",offset:0,width:1.6}],east:[{type:"window",offset:0,width:1.6}],interiorLight:{color:16755285,intensity:1.9,distance:14}}),it=new f(new N(11.5,9.2,11.5),v);it.position.set(-4,xt.roofY+4.6,-40),it.castShadow=!0,i.add(it),t.addBox(-4,xt.roofY+4.6,-40,11.5,9.2,11.5,"stone");for(const ht of[-7.2,-.8]){const Ct=new f(new ae(2.2,5.2),j);Ct.position.set(ht,9.4,-34),i.add(Ct)}We(i,t,-7.2,xt.floorY,-43,1.8,.9,M,1);const mt=le(i,t,{cx:-44,cz:-48,w:9.5,d:8.5,h:3.6,floorY:.2,wallMat:S,floorMat:S,roofMat:A,roofStyle:"gable",east:[{type:"door",offset:0,width:2.2,height:2.7}],south:[{type:"window",offset:0,width:1.7}],interiorLight:{color:16758886,intensity:1.4,distance:11}});Gi(i,t,-47.2,mt.floorY,-48,.85),On(i,t,-45.5,mt.floorY,-51,!1,M,5598020);for(const[ht,Ct,dt,R,y]of[[-11,14,5.2,1.35,1.1],[4,10,5,1.35,1.1],[-12,-20,5.2,1.4,1.1],[1,-26,5.2,1.4,1.1],[-26,-34,5,1.35,1.1]])Ft(i,t,ht,R*.5,Ct,dt,R,y,v,"stone");function D(ht,Ct,dt=1){const R=new $t;R.position.set(ht,0,Ct);const y=new f(new W(.24,.36,2.6,7),M);y.position.y=1.3,R.add(y);for(const[V,nt,ct,rt]of[[3.4,2.4,3.2,T],[5.4,1.85,2.8,E],[7.2,1.25,2.2,T]]){const ft=new f(new kt(nt,ct,8),rt);ft.position.y=V,R.add(ft)}R.scale.setScalar(dt),i.add(R),t.addBox(ht,2,Ct,1.1*dt,4*dt,1.1*dt,"wood")}for(const[ht,Ct,dt]of[[-36,36,1.25],[-42,18,1.35],[-36,-24,1.2],[-30,-38,1.3],[-56,-38,1.3],[16,36,1.15],[17,6,1.1],[16,-42,1.3],[-18,-32,1.2],[-28,48,1.2],[10,48,1.15]])D(ht,Ct,dt);for(const[ht,Ct,dt,R]of[[-125,-165,80,98],[-20,-180,92,122],[80,-165,84,108],[175,-90,76,98],[185,25,86,112],[160,125,80,92],[60,170,84,98],[-50,175,80,92],[-155,115,82,98],[-165,-25,86,108]]){const y=new f(new kt(dt,R,7),L);y.position.set(ht,R*.45,Ct);const V=new f(new kt(dt*.56,R*.52,7),U);V.position.set(ht,R*.72,Ct),i.add(y,V)}e.initAmbient("alpine",t.bounds);const Pt=[{type:"health",pos:new w(-21.5,.9,22),label:"CHALET CHEESE & CIDER (+35 HP)"},{type:"health",pos:new w(11,.9,-22),label:"CHAPEL TONIC (+35 HP)"},{type:"health",pos:new w(-43.5,.9,-48),label:"ALP HUT RATIONS (+35 HP)"},{type:"ammo",pos:new w(11,.9,20),label:"STEEL QUARREL BOLTS"},{type:"ammo",pos:new w(-4,.9,-40),label:"WATCHTOWER BOLT CRATE"},{type:"health",pos:new w(-23,.9,4),label:"MOUNTAIN HERB TONIC (+35 HP)"}];for(const ht of Pt){const Ct=ti(ht.type);Ct.position.copy(ht.pos),i.add(Ct),o.push({...ht,mesh:Ct,collected:!1})}const vt=[{type:"halberdier",pos:new w(-10,0,30)},{type:"arquebusier",pos:new w(6,0,26)},{type:"halberdier",pos:new w(-21,.18,22)},{type:"arquebusier",pos:new w(11,.18,20)},{type:"halberdier",pos:new w(-4,0,12)},{type:"arquebusier",pos:new w(-15,0,4)},{type:"halberdier",pos:new w(-23,.18,4)},{type:"arquebusier",pos:new w(8,0,2)},{type:"halberdier",pos:new w(-4,.42,-8)},{type:"arquebusier",pos:new w(-14,0,-18)},{type:"halberdier",pos:new w(2,0,-18)},{type:"arquebusier",pos:new w(10,.2,-22)},{type:"halberdier",pos:new w(11,.2,-18)},{type:"arquebusier",pos:new w(-24,0,-30)},{type:"halberdier",pos:new w(-34,0,-40)},{type:"arquebusier",pos:new w(-43,.2,-48)},{type:"halberdier",pos:new w(-12,0,-32)},{type:"arquebusier",pos:new w(4,0,-32)},{type:"halberdier",pos:new w(-4,.22,-39)},{type:"arquebusier",pos:new w(-1,.22,-42)},{type:"halberdier",pos:new w(-4,0,-28)},{type:"boss_swiss",pos:new w(-4,0,-31),isBossWave:!0}],It=[{name:"Alpine Chapel",inside:new w(10.5,.2,-22),outside:new w(3.5,0,-22)},{name:"Habsburg Watchtower",inside:new w(-4,.22,-40),outside:new w(-4,0,-32)},{name:"West Chalet",inside:new w(-22,.18,22),outside:new w(-14.5,0,22)},{name:"Alp Hut",inside:new w(-43.5,.2,-48),outside:new w(-37,0,-48)}];return{enemySpawns:vt,pickups:o,animated:s,disposables:n,tellApple:at,enterableBuildings:It}}const _g={id:"greece",index:3,themeClass:"theme-greece",act:"ACT IV • 480 BC",title:"AEGEAN ISLE",subtitle:"Marble & Turquoise Sea",heroName:"ULYSSES",objective:"Break the Spartan Garrison & Claim the Marble Temple Sanctuary",quote:'"Under the blazing Aegean sun, bronze rings against marble. Walk from the sandy shore to the pillared sanctuary."',musicTheme:"greece",enemyIcon:"Λ",currency:"Δ ",spawnPos:new w(0,0,52),spawnYaw:0,cameraPreview:{center:new w(0,6,-6),radius:46,height:16,speed:.13}};function vg(i,t,e){const n=[],s=[],o=[];t.bounds={minX:-72,maxX:74,minZ:-74,maxZ:68};const r=new w(.45,.58,-.68).normalize(),a=Qn({topColor:673948,midColor:3905259,horizonColor:14677503,sunColor:16776160,sunDirection:r,cloudTint:16777215,cloudDensity:.34});i.add(a.mesh),s.push(xt=>{a.uniforms.uTime.value=xt}),i.fog=new yn(12904695,.004),i.add(new Jn(15267583,13085044,.86));const l=new je(16774876,2.25);l.position.copy(r).multiplyScalar(120),l.castShadow=!0,l.shadow.mapSize.set(2048,2048),l.shadow.camera.left=-85,l.shadow.camera.right=85,l.shadow.camera.top=85,l.shadow.camera.bottom=-85,l.shadow.near=10,l.shadow.far=260,l.shadow.bias=-5e-4,i.add(l);const c=new je(6611179,.5);c.position.set(-55,18,40),i.add(c);const h=Ki(520,520,{deepColor:416903,shallowColor:2543822,foamColor:15793663,sunColor:16776416,sunDir:r,opacity:.92,waveScale:.16});h.mesh.position.set(0,-.22,0),i.add(h.mesh),s.push(xt=>{h.uniforms.uTime.value=xt});const d=Ze("greek_sand",26,26),u=new f(new N(156,1.2,152),new H({map:d.map,bumpMap:d.bumpMap,bumpScale:.18,roughness:.92}));u.position.set(2,-.6,-2),u.receiveShadow=!0,i.add(u);const p=og(3,24),g=new f(new ae(7.6,108),new H({map:p.map,roughness:.68,metalness:.04}));g.rotation.x=-Math.PI/2,g.position.set(0,.04,4),g.receiveShadow=!0,i.add(g);const _=new H({map:p.map,roughness:.64,metalness:.04}),x=new H({color:16052196,roughness:.84});new H({color:1928898,roughness:.58});const m=xa("terracotta",3,2),S=new H({map:m.map,bumpMap:m.bumpMap,bumpScale:.16,roughness:.78}),M=new H({color:12739900,roughness:.78}),v=Kn("castle",2,2),A=new H({map:v.map,color:14273976,roughness:.9}),b=new H({color:7029798,roughness:.85}),U=new H({color:14459970,metalness:.82,roughness:.28}),L=new H({color:7310422,roughness:.85}),T=new H({color:2379050,roughness:.88}),E=new H({map:Nc("greece"),side:_e,roughness:.8}),O=new oe({color:16757560}),J=new f(new N(24,.38,22),_);J.position.set(0,.19,-40),J.receiveShadow=!0,i.add(J),t.addWalkable(0,-40,24.6,22.6,.38);const j=le(i,t,{cx:0,cz:-40,w:14,d:13,h:5.4,floorY:.38,wallMat:_,floorMat:_,roofMat:S,roofStyle:"gable",south:[{type:"door",offset:0,width:3.4,height:3.8}],west:[{type:"window",offset:0,width:2}],east:[{type:"window",offset:0,width:2}],interiorLight:{color:16770216,intensity:2,distance:18}}),Q=[[-10,-50],[-5,-50],[0,-50],[5,-50],[10,-50],[-10,-30],[-5,-30],[5,-30],[10,-30],[-10,-45],[-10,-40],[-10,-35],[10,-45],[10,-40],[10,-35]];for(const[xt,it]of Q){const mt=new f(new W(.45,.54,5.8,12),_);mt.position.set(xt,.38+2.9,it),mt.castShadow=!0;const D=new f(new N(1.3,.34,1.3),_);D.position.set(xt,.38+5.9,it),i.add(mt,D),t.addBox(xt,3.2,it,1.15,6,1.15,"stone")}for(const[xt,it,mt,D]of[[0,-50,22,1.4],[0,-30,22,1.4],[-10,-40,1.4,21],[10,-40,1.4,21]]){const Pt=new f(new N(mt,.85,D),_);Pt.position.set(xt,6.65,it),i.add(Pt)}Ft(i,t,0,j.floorY+.6,-43.5,2.4,1.2,2.2,_,"stone");const Y=new f(new W(.55,.72,2.4,10),U);Y.position.set(0,j.floorY+2.4,-43.5);const X=new f(new Xt(.42,10,10),U);X.position.set(0,j.floorY+3.9,-43.5);const I=new f(new W(.05,.05,4.2,6),U);I.position.set(.9,j.floorY+2.8,-43.2),i.add(Y,X,I);function C(xt,it,mt,D,Pt){const vt={cx:xt,cz:it,w:mt,d:D,h:3.8,floorY:.16,wallMat:x,floorMat:A,roofMat:S,roofStyle:"parapet",parapetColor:1928898,interiorLight:{color:16766361,intensity:1.5,distance:12}};vt[Pt]=[{type:"door",offset:0,width:2.3,height:2.8}];const It=Pt==="east"?"west":Pt==="west"?"east":Pt==="south"?"north":"south";vt[It]=[{type:"window",offset:0,width:1.7}];const ht=le(i,t,vt);We(i,t,xt+(Pt==="east"?-2.2:2.2),ht.floorY,it,1.5,.85,b,1);const Ct=new f(new W(.24,.34,.95,10),M);return Ct.position.set(xt,ht.floorY+.48,it-D*.32),i.add(Ct),t.addBox(xt,ht.floorY+.48,it-D*.32,.72,.96,.72,"stone"),ht}C(-22,22,9.5,9,"east"),C(22,22,9.5,9,"west"),C(-22,-6,10,9.5,"east"),C(22,-6,10,9.5,"west");const k=C(44,34,9,8.5,"west");On(i,t,46.2,k.floorY,36.4,!1,b,2516392);const B=C(48,16,9,8.5,"west");_n(i,t,50.8,B.floorY,16,1.2,2.2,A,1928898);const G=le(i,t,{cx:56,cz:-14,w:8.5,d:8.5,h:4.2,floorY:.2,wallMat:A,floorMat:A,roofMat:A,roofStyle:"none",west:[{type:"door",offset:0,width:2.3,height:2.8}],south:[{type:"window",offset:0,width:1.5}],interiorLight:{color:16757589,intensity:1.4,distance:12}}),tt=new f(new W(3.4,4,8.5,10),A);tt.position.set(56,G.roofY+4.25,-14);const at=new f(new W(1.6,1.1,.9,10),U);at.position.set(56,G.roofY+8.9,-14);const F=new f(new kt(1.3,2.6,8),O);F.position.set(56,G.roofY+10.5,-14),i.add(tt,at,F),s.push(xt=>{F.scale.y=.85+Math.sin(xt*9)*.22});function z(xt,it,mt){const D=new $t;D.position.set(xt,0,it),D.rotation.y=mt;const Pt=new f(new N(3.2,1.4,10.5),b);Pt.position.y=.7;const vt=new f(new W(.14,.18,8.5,8),b);vt.position.y=4.6;const It=new f(new ae(5.6,4.8),E);It.position.set(0,5.2,.35),D.add(Pt,vt,It),i.add(D),t.addBox(xt,1.2,it,4.2,2.4,10.5,"wood")}z(-36,54,.3),z(34,56,-.35);function $(xt,it){const mt=new f(new W(.28,.42,3,7),b);mt.position.set(xt,1.5,it);const D=new f(new wi(2.3,1),L);D.position.set(xt,3.6,it),D.scale.set(1.3,.72,1.2),i.add(mt,D),t.addBox(xt,1.8,it,1,3.6,1,"wood")}function Z(xt,it){const mt=new f(new W(.2,.28,2,6),b);mt.position.set(xt,1,it);const D=new f(new kt(1.15,7.2,8),T);D.position.set(xt,5.2,it),i.add(mt,D),t.addBox(xt,2.2,it,1.1,4.4,1.1,"wood")}for(const[xt,it]of[[-12,34],[12,36],[-36,12],[-44,-18],[36,4],[40,-28],[-28,-32],[28,-34]])$(xt,it);for(const[xt,it]of[[-10,12],[10,12],[-12,-20],[12,-20],[-34,-40],[34,-40],[56,28],[-50,26]])Z(xt,it);for(const[xt,it,mt,D]of[[-7,30,4.5,1],[8,26,4.5,1],[-8,4,4.5,1],[8,0,4.5,1],[-8,-18,4.8,1],[8,-18,4.8,1],[34,24,1,4.5]])Ft(i,t,xt,.65,it,mt,1.3,D,_,"stone");e.initAmbient("dust",t.bounds);const ot=[{type:"health",pos:new w(-22,.9,22),label:"AEGEAN WINE & OLIVES (+35 HP)"},{type:"health",pos:new w(44,.9,34),label:"FISHERMAN STEW (+35 HP)"},{type:"health",pos:new w(56,.9,-14),label:"BEACON TOWER TONIC (+35 HP)"},{type:"health",pos:new w(0,1.1,-39),label:"TEMPLE AMBROSIA (+35 HP)"},{type:"ammo",pos:new w(22,.9,22),label:"BRONZE JAVELIN BUNDLE"},{type:"ammo",pos:new w(-22,.9,-6),label:"SPARTAN JAVELIN RACK"}];for(const xt of ot){const it=ti(xt.type);it.position.copy(xt.pos),i.add(it),o.push({...xt,mesh:it,collected:!1})}const _t=[{type:"spartan_hoplite",pos:new w(-8,0,36)},{type:"spartan_skirmisher",pos:new w(8,0,34)},{type:"spartan_hoplite",pos:new w(-21,.16,22)},{type:"spartan_skirmisher",pos:new w(21,.16,22)},{type:"spartan_hoplite",pos:new w(0,0,16)},{type:"spartan_skirmisher",pos:new w(-12,0,10)},{type:"spartan_hoplite",pos:new w(12,0,8)},{type:"spartan_skirmisher",pos:new w(34,0,30)},{type:"spartan_hoplite",pos:new w(44,.16,33)},{type:"spartan_skirmisher",pos:new w(47,.16,16)},{type:"spartan_hoplite",pos:new w(46,0,-4)},{type:"spartan_skirmisher",pos:new w(55,.2,-14)},{type:"spartan_hoplite",pos:new w(-21,.16,-6)},{type:"spartan_skirmisher",pos:new w(21,.16,-6)},{type:"spartan_hoplite",pos:new w(-8,0,-14)},{type:"spartan_skirmisher",pos:new w(8,0,-14)},{type:"spartan_hoplite",pos:new w(-16,0,-24)},{type:"spartan_skirmisher",pos:new w(16,0,-24)},{type:"spartan_hoplite",pos:new w(-6,0,-26)},{type:"spartan_skirmisher",pos:new w(6,0,-26)},{type:"spartan_hoplite",pos:new w(-3,.38,-38)},{type:"spartan_skirmisher",pos:new w(3,.38,-38)},{type:"spartan_hoplite",pos:new w(-16,0,-40)},{type:"spartan_skirmisher",pos:new w(16,0,-40)},{type:"boss_greece",pos:new w(0,.38,-32),isBossWave:!0}],Rt=[{name:"Marble Temple Cella",inside:new w(0,.38,-39),outside:new w(0,.38,-31)},{name:"Beacon Tower",inside:new w(56,.2,-14),outside:new w(49,0,-14)},{name:"Village House",inside:new w(-22,.16,22),outside:new w(-14.5,0,22)}];return{enemySpawns:_t,pickups:o,animated:s,disposables:n,enterableBuildings:Rt}}const Mg={id:"scandinavia",index:4,themeClass:"theme-scandinavia",act:"ACT V • 985 AD",title:"FJORD OF THE NORTH",subtitle:"Frost, Iron & Northern Lights",heroName:"ERIK THE RED",objective:"Storm the Palisade, Defeat the Horned Chieftains & Claim the Great Hall",quote:'"Beneath dancing northern lights, longships grind upon frozen shingle. Cross the timber palisade and claim the Great Hall."',musicTheme:"scandinavia",enemyIcon:"ᛟ",currency:"ℳ ",spawnPos:new w(0,0,54),spawnYaw:0,cameraPreview:{center:new w(0,6,-6),radius:46,height:16,speed:.12}};function yg(i,t,e){const n=[],s=[],o=[];t.bounds={minX:-74,maxX:74,minZ:-76,maxZ:70};const r=new w(-.35,.42,-.84).normalize(),a=Qn({topColor:330788,midColor:860743,horizonColor:2116974,sunColor:14284799,sunDirection:r,cloudTint:4422300,cloudDensity:.25});i.add(a.mesh),s.push(F=>{a.uniforms.uTime.value=F});const l=Ol(320,74);l.mesh.position.set(0,72,-125),l.mesh.rotation.x=.22,i.add(l.mesh);const c=Ol(270,60);c.mesh.position.set(40,80,-90),c.mesh.rotation.y=-.35,c.mesh.rotation.x=.26,i.add(c.mesh),s.push(F=>{l.uniforms.uTime.value=F,c.uniforms.uTime.value=F*.85+2.1}),i.fog=new yn(1453383,.0058),i.add(new Jn(8050376,2767695,1.05));const h=new je(13363455,1.9);h.position.copy(r).multiplyScalar(120),h.castShadow=!0,h.shadow.mapSize.set(2048,2048),h.shadow.camera.left=-85,h.shadow.camera.right=85,h.shadow.camera.top=85,h.shadow.camera.bottom=-85,h.shadow.near=10,h.shadow.far=260,h.shadow.bias=-5e-4,i.add(h);const d=new je(3862704,.6);d.position.set(45,55,-70),i.add(d);const u=Ki(540,540,{deepColor:400694,shallowColor:1460846,foamColor:13363455,sunColor:11466726,sunDir:r,opacity:.92,waveScale:.14});u.mesh.position.set(0,-.25,0),i.add(u.mesh),s.push(F=>{u.uniforms.uTime.value=F});const p=Ze("arctic_snow",28,28),g=new f(new N(160,1.2,158),new H({map:p.map,roughness:.86}));g.position.set(0,-.6,-2),g.receiveShadow=!0,i.add(g);const _=Ze("cobble",3,28),x=new f(new ae(7.2,114),new H({map:_.map,color:11188164,roughness:.88}));x.rotation.x=-Math.PI/2,x.position.set(0,.04,4),x.receiveShadow=!0,i.add(x);const m=Fn("alpine",2,2),S=Kn("castle",2,2),M=new H({map:m.map,color:7033404,roughness:.86}),v=new H({color:3023129,roughness:.88}),A=new H({color:4535336,roughness:.9}),b=new H({color:14937591,roughness:.78}),U=new H({map:S.map,color:8095120,roughness:.9}),L=new H({color:1850669,roughness:.88}),T=new H({color:14459962,metalness:.75,roughness:.3}),E=new H({color:12754506,roughness:.95}),O=new H({map:Nc("scandinavia"),side:_e,roughness:.82});Ft(i,t,-24,2,6,36,4,1.1,M,"wood"),Ft(i,t,24,2,6,36,4,1.1,M,"wood"),Ft(i,t,-5.6,2.6,6,1.2,5.2,1.4,v,"wood"),Ft(i,t,5.6,2.6,6,1.2,5.2,1.4,v,"wood");const J=new f(new N(12.6,.8,1.2),v);J.position.set(0,4.8,6),i.add(J);const j=le(i,t,{cx:0,cz:-42,w:16,d:16,h:5,floorY:.25,wallMat:M,floorMat:A,roofMat:b,roofStyle:"gable",south:[{type:"door",offset:0,width:3.4,height:3.4},{type:"window",offset:-5.2,width:1.8},{type:"window",offset:5.2,width:1.8}],west:[{type:"window",offset:0,width:2}],east:[{type:"window",offset:0,width:2}],interiorLight:{color:16754253,intensity:2.5,distance:20}});for(const[F,z]of[[-5,-38],[5,-38],[-5,-45],[5,-45]])Ft(i,t,F,j.floorY+2.5,z,.45,5,.45,v,"wood");Gi(i,t,0,j.floorY,-41.5,1.25),Bn(i,t,-5.6,j.floorY,-41.5,1.2,v),Bn(i,t,5.6,j.floorY,-41.5,1.2,v),Ft(i,t,0,j.floorY+.55,-48.2,2.2,1.1,1.3,v,"wood");const Q=new f(new N(1.8,2.4,.28),v);Q.position.set(0,j.floorY+1.8,-48.7);const Y=new f(new Rs(.32,0),T);Y.position.set(0,j.floorY+3.15,-48.7),i.add(Q,Y);function X(F,z,$,Z,ot){const _t={cx:F,cz:z,w:$,d:Z,h:4,floorY:.18,wallMat:M,floorMat:A,roofMat:b,roofStyle:"gable",interiorLight:{color:16754258,intensity:1.6,distance:14}};_t[ot]=[{type:"door",offset:0,width:2.5,height:2.9}];const Rt=ot==="east"?"west":ot==="west"?"east":"north";_t[Rt]=[{type:"window",offset:0,width:1.6}];const xt=le(i,t,_t);return Gi(i,t,F,xt.floorY,z,.85),Ft(i,t,F,xt.floorY+.36,z-Z*.36,$*.52,.72,.65,v,"wood"),Ft(i,t,F,xt.floorY+.36,z+Z*.36,$*.52,.72,.65,v,"wood"),xt}X(-24,-14,11,13,"east"),X(24,-14,11,13,"west"),X(-22,24,11,12,"east"),X(22,24,11,12,"west");const I=le(i,t,{cx:-52,cz:26,w:10,d:9,h:3.7,floorY:.18,wallMat:M,floorMat:A,roofMat:b,roofStyle:"gable",east:[{type:"door",offset:0,width:2.3,height:2.8}],south:[{type:"window",offset:0,width:1.6}],interiorLight:{color:16757606,intensity:1.4,distance:12}});On(i,t,-55,I.floorY,28.6,!1,v,6045228),Ft(i,t,-44,.6,32,1.8,1.2,1.3,E,"wood"),Ft(i,t,-41.5,.6,32,1.8,1.2,1.3,E,"wood");const C=le(i,t,{cx:50,cz:-34,w:10.5,d:10.5,h:4.4,floorY:.22,wallMat:v,floorMat:A,roofMat:b,roofStyle:"hip",west:[{type:"door",offset:0,width:2.5,height:3}],south:[{type:"window",offset:0,width:1.6}],interiorLight:{color:6484680,intensity:1.7,distance:14}});_n(i,t,53.2,C.floorY,-34,1.2,2.8,U,9380900),Ft(i,t,53.4,C.floorY+1.9,-34,.65,2,1.1,U,"stone");function k(F,z,$){const Z=new $t;Z.position.set(F,0,z),Z.rotation.y=$;const ot=new f(new N(3.4,1.35,13),v);ot.position.y=.7;const _t=new f(new W(.14,.18,9.2,8),M);_t.position.y=4.9;const Rt=new f(new ae(6,5),O);Rt.position.set(0,5.4,.35),Z.add(ot,_t,Rt);const xt=Uc(1),it=new H({map:xt,roughness:.72});for(let mt=-2;mt<=2;mt++)for(const D of[-1.75,1.75]){const Pt=new f(new W(.45,.45,.06,12),[v,it,v]);Pt.rotation.z=Math.PI/2,Pt.position.set(D,1.15,mt*1.9),Z.add(Pt)}i.add(Z),t.addBox(F,1.3,z,4.4,2.6,13,"wood")}k(-34,56,.22),k(34,54,-.28);function B(F,z,$=1){const Z=new $t;Z.position.set(F,0,z);const ot=new f(new W(.24,.36,2.5,7),v);ot.position.y=1.25,Z.add(ot);for(const[_t,Rt,xt]of[[3.2,2.4,3],[5.1,1.85,2.6],[6.8,1.25,2.1]]){const it=new f(new kt(Rt,xt,8),L);it.position.y=_t;const mt=new f(new kt(Rt*.72,xt*.45,8),b);mt.position.y=_t+xt*.3,Z.add(it,mt)}Z.scale.setScalar($),i.add(Z),t.addBox(F,2,z,1.15*$,4*$,1.15*$,"wood")}for(const[F,z,$]of[[-14,42,1.2],[14,42,1.2],[-38,12,1.3],[38,12,1.25],[-42,-16,1.3],[42,-16,1.25],[-34,-46,1.35],[34,-48,1.3],[-58,-32,1.25],[58,22,1.2],[-60,44,1.2]])B(F,z,$);for(const[F,z,$,Z]of[[-125,-155,75,88],[0,-175,92,112],[125,-150,78,92],[-165,10,74,86],[165,15,76,88]]){const ot=new f(new kt($,Z,7),U);ot.position.set(F,Z*.45,z);const _t=new f(new kt($*.56,Z*.52,7),b);_t.position.set(F,Z*.72,z),i.add(ot,_t)}for(const[F,z,$,Z]of[[-8,34,4.2,1],[8,32,4.2,1],[-9,-2,4.4,1],[9,-2,4.4,1],[-9,-24,4.6,1],[9,-24,4.6,1]])Ft(i,t,F,.7,z,$,1.4,Z,M,"wood");e.initAmbient("snow",t.bounds);const G=[{type:"health",pos:new w(-22,.9,24),label:"LONGHOUSE MEAD (+35 HP)"},{type:"health",pos:new w(-52,.9,26),label:"FARMHOUSE RATIONS (+35 HP)"},{type:"health",pos:new w(50,.9,-34),label:"TEMPLE OFFERING (+35 HP)"},{type:"health",pos:new w(0,1,-45),label:"GREAT HALL MEAD (+35 HP)"},{type:"ammo",pos:new w(22,.9,24),label:"THROWING AXE RACK"},{type:"ammo",pos:new w(-24,.9,-14),label:"FORGED IRON AXES"}];for(const F of G){const z=ti(F.type);z.position.copy(F.pos),i.add(z),o.push({...F,mesh:z,collected:!1})}const tt=[{type:"viking_warrior",pos:new w(-8,0,38)},{type:"viking_archer",pos:new w(8,0,36)},{type:"viking_warrior",pos:new w(-21,.18,24)},{type:"viking_archer",pos:new w(21,.18,24)},{type:"viking_chieftain",pos:new w(0,0,18)},{type:"viking_berserker",pos:new w(-36,0,26)},{type:"viking_warrior",pos:new w(-51,.18,26)},{type:"viking_archer",pos:new w(-12,0,14)},{type:"viking_warrior",pos:new w(12,0,14)},{type:"viking_berserker",pos:new w(-6,0,-2)},{type:"viking_archer",pos:new w(7,0,-4)},{type:"viking_chieftain",pos:new w(-14,0,-14)},{type:"viking_warrior",pos:new w(-23,.18,-14)},{type:"viking_warrior",pos:new w(23,.18,-14)},{type:"viking_archer",pos:new w(14,0,-16)},{type:"viking_berserker",pos:new w(0,0,-16)},{type:"viking_warrior",pos:new w(36,0,-28)},{type:"viking_chieftain",pos:new w(42,0,-34)},{type:"viking_archer",pos:new w(50,.22,-34)},{type:"viking_archer",pos:new w(-12,0,-28)},{type:"viking_warrior",pos:new w(12,0,-28)},{type:"viking_berserker",pos:new w(-6,0,-30)},{type:"viking_warrior",pos:new w(6,0,-30)},{type:"viking_chieftain",pos:new w(0,.25,-39)},{type:"viking_warrior",pos:new w(-4,.25,-43)},{type:"viking_archer",pos:new w(4,.25,-43)},{type:"boss_scandinavia",pos:new w(0,0,-28),isBossWave:!0}],at=[{name:"Jarl's Great Hall",inside:new w(-2.6,.25,-39.5),outside:new w(0,0,-31.5)},{name:"West Longhouse",inside:new w(-24,.18,-14),outside:new w(-16.5,0,-14)},{name:"Temple of the Old Gods",inside:new w(50,.22,-34),outside:new w(42.5,0,-34)},{name:"Outlying Farm",inside:new w(-52,.18,26),outside:new w(-45,0,26)}];return{enemySpawns:tt,pickups:o,animated:s,disposables:n,enterableBuildings:at}}const Sg={id:"normandy",index:5,themeClass:"theme-normandy",act:"ACT VI • 6 JUNE 1944",title:"NORMANDY",subtitle:"Before First Light",heroName:"LYUDMILA PAVLICHENKO",objective:"Cross the Village, Manor & Church and Silence the Cliff Battery",quote:'"The armada waits on the dark Channel horizon. Cross the bocage lanes and occupied village, and silence the cliffside battery before first light."',historicalNote:"Historical note: these three real resistance figures did not meet in Normandy in June 1944; they appear together here as legends.",musicTheme:"normandy",enemyIcon:"✚",currency:"★ ",spawnPos:new w(0,0,56),spawnYaw:0,cameraPreview:{center:new w(0,6,-8),radius:48,height:16,speed:.11}};function bg(i,t,e){const n=[],s=[],o=[];t.bounds={minX:-76,maxX:76,minZ:-74,maxZ:72};const r=new w(.32,.24,-.92).normalize(),a=Qn({topColor:1054774,midColor:4930150,horizonColor:14261128,sunColor:16766901,sunDirection:r,cloudTint:10058918,cloudDensity:.42});i.add(a.mesh),s.push(dt=>{a.uniforms.uTime.value=dt}),i.fog=new yn(3815250,.0052),i.add(new Jn(10730726,3884342,1.15));const l=new je(13426943,2.2);l.position.set(-48,72,62),l.castShadow=!0,l.shadow.mapSize.set(2048,2048),l.shadow.camera.left=-88,l.shadow.camera.right=88,l.shadow.camera.top=88,l.shadow.camera.bottom=-88,l.shadow.near=10,l.shadow.far=260,l.shadow.bias=-5e-4,i.add(l);const c=new je(16760739,.6);c.position.copy(r).multiplyScalar(110),i.add(c);const h=Ki(540,280,{deepColor:860472,shallowColor:2246502,foamColor:11454174,sunColor:16764853,sunDir:r,opacity:.94,waveScale:.16});h.mesh.position.set(0,-4.5,-210),i.add(h.mesh),s.push(dt=>{h.uniforms.uTime.value=dt});const d=new oe({color:1448745}),u=new oe({color:16770211});for(let dt=0;dt<18;dt++){const R=-170+dt*20,y=-195-dt%4*26,V=dt%3===0,nt=new f(new N(V?14:7.5,V?3.2:1.8,3.6),d);nt.position.set(R,-3.2,y);const ct=new f(new N(V?4.2:2.2,V?4.5:2.2,2.4),d);ct.position.set(R,-.5,y);const rt=new f(new Xt(.32,6,6),u);rt.position.set(R,V?2.1:.8,y),i.add(nt,ct,rt)}const p=new oe({color:14281983,transparent:!0,opacity:.15,blending:gs,depthWrite:!1,side:_e});for(const dt of[{x:-28,z:-64,phase:0,speed:.45,range:.48},{x:0,z:-66,phase:2.1,speed:.36,range:.42},{x:28,z:-64,phase:4,speed:.52,range:.5}]){const R=new $t;R.position.set(dt.x,4.5,dt.z);const y=new f(new kt(9.5,125,14,1,!0),p);y.position.y=62,y.rotation.x=Math.PI,R.add(y),i.add(R),s.push(V=>{R.rotation.z=Math.sin(V*dt.speed+dt.phase)*dt.range,R.rotation.x=-.22+Math.cos(V*dt.speed*.7+dt.phase)*.14})}const g=[[-36,44,-82,.4],[12,52,-96,1.7],[42,42,-78,3.1],[-12,48,-110,4.5]];for(const[dt,R,y,V]of g){const nt=new f(new Xt(2.6,8,8),new oe({color:16762480,transparent:!0,opacity:0}));nt.position.set(dt,R,y),i.add(nt),s.push(ct=>{const rt=(ct*.65+V)%3;nt.material.opacity=rt<.25?(1-rt/.25)*.85:0,nt.scale.setScalar(1+rt*.6)})}const _=Ze("alpine_meadow",32,32),x=new f(new ae(360,260),new H({map:_.map,color:6452057,roughness:.94}));x.rotation.x=-Math.PI/2,x.position.set(0,0,50),x.receiveShadow=!0,i.add(x);const m=Ze("cobble",3,28),S=new f(new ae(7.2,128),new H({map:m.map,color:9079944,roughness:.88}));S.rotation.x=-Math.PI/2,S.position.set(0,.04,4),S.receiveShadow=!0,i.add(S);const M=Kn("castle",2,2),v=Fc(2,2),A=Fn("weathered",2,2),b=new H({map:M.map,color:11578012,roughness:.9}),U=new H({map:v.map,roughness:.88}),L=new H({color:3883597,roughness:.82}),T=new H({map:A.map,roughness:.86}),E=new H({color:3351578,roughness:.86}),O=new H({color:2770214,roughness:.95}),J=new H({color:10062958,roughness:.94}),j=new H({color:5396817,roughness:.65,metalness:.35}),Q=new H({color:2895924,metalness:.72,roughness:.38}),Y=new H({map:ag("#525951"),roughness:.65}),X=new H({color:6448726,roughness:.9});for(const[dt,R,y,V]of[[-10,44,10,2.2],[10,44,10,2.2],[-22,36,2.4,16],[22,36,2.4,16],[-12,30,12,2.2],[12,30,12,2.2]])Ft(i,t,dt,1.35,R,y,2.7,V,O,"wood");function I(dt,R,y,V,nt){const ct={cx:dt,cz:R,w:y,d:V,h:3.6,floorY:.16,wallMat:b,floorMat:T,roofMat:L,roofStyle:"none",interiorLight:{color:16762504,intensity:1.4,distance:12}};ct[nt]=[{type:"door",offset:0,width:2.3,height:2.8},{type:"window",offset:3.2,width:1.5}];const rt=nt==="east"?"west":nt==="west"?"east":"north";ct[rt]=[{type:"window",offset:0,width:1.6}];const ft=le(i,t,ct),ut=new f(new N(y,3,V),b);ut.position.set(dt,ft.roofY+1.5,R);const bt=new f(new kt(Math.max(y,V)*.82,2.8,4),L);return bt.rotation.y=Math.PI/4,bt.position.set(dt,ft.roofY+4.4,R),i.add(ut,bt),t.addBox(dt,ft.roofY+1.5,R,y,3,V,"stone"),We(i,t,dt+(nt==="east"?-2.4:2.4),ft.floorY,R,1.5,.85,E,1),ft}I(-19,16,10,10,"east"),I(19,16,10,10,"west"),I(-19,-4,10,10,"east");const C=le(i,t,{cx:21,cz:-12,w:11.5,d:16,h:5,floorY:.2,wallMat:b,floorMat:b,roofMat:L,roofStyle:"gable",west:[{type:"door",offset:0,width:2.4,height:3.1},{type:"window",offset:-4.5,width:1.5},{type:"window",offset:4.5,width:1.5}],south:[{type:"door",offset:0,width:2.3,height:3}],interiorLight:{color:16765593,intensity:1.7,distance:16}}),k=new f(new N(3.4,6.5,3.4),b);k.position.set(21,C.roofY+3.4,-17.5);const B=new f(new kt(2.6,5.5,4),L);B.rotation.y=Math.PI/4,B.position.set(21,C.roofY+9.2,-17.5),i.add(k,B),_n(i,t,21,C.floorY,-18.2,2.8,1,b,9380386),Bn(i,t,23.2,C.floorY,-13.5,3.2,E),Bn(i,t,23.2,C.floorY,-10.5,3.2,E),Bn(i,t,23.2,C.floorY,-7.5,3.2,E);const G=le(i,t,{cx:0,cz:-46,w:16,d:12,h:4.2,floorY:.2,wallMat:U,floorMat:U,roofMat:U,roofStyle:"flat",south:[{type:"window",offset:-5.2,width:2.4,sill:1.15,top:2.25},{type:"door",offset:0,width:2.8,height:3},{type:"window",offset:5.2,width:2.4,sill:1.15,top:2.25}],west:[{type:"door",offset:0,width:2.2,height:2.8}],east:[{type:"door",offset:0,width:2.2,height:2.8}],interiorLight:{color:16765576,intensity:2,distance:18}}),tt=new f(new W(.28,.38,9.5,10),Q);tt.rotation.x=Math.PI/2-.12,tt.position.set(0,3.4,-55),i.add(tt),Ft(i,t,0,G.floorY+.48,-46,2.6,.96,1.5,E,"wood");const at=new f(new ae(2.2,1.15),new H({color:15130312,roughness:.85}));at.rotation.x=-Math.PI/2,at.position.set(0,G.floorY+.98,-46),i.add(at),We(i,t,-5.6,G.floorY,-49.5,1.8,.85,Q,1);const F=new f(new N(.75,.55,.45),Q);F.position.set(-5.6,G.floorY+1.12,-49.5),i.add(F),On(i,t,5.6,G.floorY,-49.5,!1,Q,4936262),Ft(i,t,-50,1.4,-28,28,2.8,.6,b,"stone"),Ft(i,t,-50,1.4,2,28,2.8,.6,b,"stone"),Ft(i,t,-64,1.4,-13,.6,2.8,30,b,"stone"),Ft(i,t,-36,1.4,-22,.6,2.8,12,b,"stone"),Ft(i,t,-36,1.4,-4,.6,2.8,12,b,"stone");const z=le(i,t,{cx:-52,cz:-13,w:12,d:14,h:4.2,floorY:.18,wallMat:b,floorMat:T,roofMat:L,roofStyle:"gable",east:[{type:"window",offset:-4,width:1.8},{type:"door",offset:0,width:2.5,height:3},{type:"window",offset:4,width:1.8}],interiorLight:{color:16762504,intensity:1.7,distance:15}});We(i,t,-55.2,z.floorY,-13,1.8,.9,E,1),On(i,t,-55,z.floorY,-18,!1,E,7027258);const $=le(i,t,{cx:50,cz:24,w:9,d:9,h:4,floorY:.2,wallMat:b,floorMat:T,roofMat:L,roofStyle:"none",west:[{type:"door",offset:0,width:2.3,height:2.8}],south:[{type:"window",offset:0,width:1.5}],interiorLight:{color:16760434,intensity:1.4,distance:12}}),Z=new f(new W(3.2,4.4,7.5,10),b);Z.position.set(50,$.roofY+3.75,24);const ot=new f(new kt(3.6,2.8,10),L);ot.position.set(50,$.roofY+8.9,24),i.add(Z,ot);const _t=new $t;_t.position.set(46.2,$.roofY+6.8,24);for(let dt=0;dt<4;dt++){const R=new f(new N(.14,5.2,.9),T);R.position.set(0,Math.cos(dt*Math.PI/2)*2.6,Math.sin(dt*Math.PI/2)*2.6),R.rotation.x=dt*Math.PI/2,_t.add(R)}i.add(_t),s.push(dt=>{_t.rotation.x=dt*.42});const Rt=new $t;Rt.position.set(-10,0,-24),Rt.rotation.y=.28;const xt=new f(new N(3.2,1.35,5.8),j);xt.position.y=.95;const it=new f(new N(2.1,.95,2.4),Y);it.position.set(0,2.05,.2);const mt=new f(new W(.1,.13,3.6,8),Q);mt.rotation.x=Math.PI/2,mt.position.set(0,2.05,2.6),Rt.add(xt,it,mt),i.add(Rt),t.addBox(-10,1.3,-24,3.8,2.6,6.2,"solid");const D=new $t;D.position.set(11,0,28),D.rotation.y=-.2;const Pt=new f(new N(2.4,2.1,2.1),j);Pt.position.set(0,1.45,2.2);const vt=new f(new N(2.5,2.3,4.4),X);vt.position.set(0,1.7,-1),D.add(Pt,vt),i.add(D),t.addBox(11,1.4,28,3,2.8,6.8,"solid");for(const[dt,R]of[[-7,-30],[7,-30],[0,-14]])Ft(i,t,dt,.58,R,3.8,1.16,1.1,J,"stone");Ft(i,t,-4.5,1.2,-14,1.8,2.4,1.8,T,"wood");for(const[dt,R]of[[-32,30],[34,36],[-30,8],[38,4],[-32,-38],[38,-32],[58,-10]]){const y=new f(new W(.32,.44,4,7),E);y.position.set(dt,2,R);const V=new f(new wi(2.5,1),O);V.position.set(dt,4.8,R),i.add(y,V),t.addBox(dt,2.2,R,1.2,4.4,1.2,"wood")}e.initAmbient("alpine",t.bounds);const It=[{type:"health",pos:new w(-19,.9,16),label:"RESISTANCE MEDKIT (+35 HP)"},{type:"health",pos:new w(21,.9,-12),label:"CHURCH FIRST AID (+35 HP)"},{type:"health",pos:new w(-52,.9,-13),label:"MANOR BANDAGES (+35 HP)"},{type:"health",pos:new w(50,.9,24),label:"WINDMILL RATIONS (+35 HP)"},{type:"health",pos:new w(0,.9,-43),label:"BUNKER MEDKIT (+35 HP)"},{type:"ammo",pos:new w(19,.9,16),label:"ALLIED AMMO DROP"},{type:"ammo",pos:new w(-19,.9,-4),label:"RESISTANCE AMMO CACHE"}];for(const dt of It){const R=ti(dt.type);R.position.copy(dt.pos),i.add(R),o.push({...dt,mesh:R,collected:!1})}const ht=[{type:"german_rifleman",pos:new w(-5,0,38)},{type:"guard_dog",pos:new w(4,0,36)},{type:"german_rifleman",pos:new w(6,0,26)},{type:"german_officer",pos:new w(-6,0,22)},{type:"german_rifleman",pos:new w(-18,.16,16)},{type:"german_rifleman",pos:new w(18,.16,16)},{type:"german_rifleman",pos:new w(34,0,22)},{type:"guard_dog",pos:new w(41,0,24)},{type:"german_officer",pos:new w(50,.2,24)},{type:"german_rifleman",pos:new w(0,0,10)},{type:"guard_dog",pos:new w(-8,0,4)},{type:"german_rifleman",pos:new w(-18,.16,-4)},{type:"german_officer",pos:new w(10,0,-4)},{type:"german_rifleman",pos:new w(20,.2,-12)},{type:"german_officer",pos:new w(20,.2,-16)},{type:"german_rifleman",pos:new w(-30,0,-12)},{type:"guard_dog",pos:new w(-42,0,-13)},{type:"german_officer",pos:new w(-51,.18,-13)},{type:"german_rifleman",pos:new w(-52,.18,-9)},{type:"german_mg",pos:new w(0,0,-15.5)},{type:"german_rifleman",pos:new w(-11,0,-18)},{type:"german_rifleman",pos:new w(11,0,-22)},{type:"guard_dog",pos:new w(4,0,-24)},{type:"german_mg",pos:new w(-7,0,-31.5)},{type:"german_mg",pos:new w(7,0,-31.5)},{type:"german_rifleman",pos:new w(-16,0,-36)},{type:"german_officer",pos:new w(16,0,-36)},{type:"german_rifleman",pos:new w(-4,.2,-45)},{type:"german_officer",pos:new w(4,.2,-45)},{type:"guard_dog",pos:new w(-8,0,-38)},{type:"boss_normandy",pos:new w(0,0,-36),isBossWave:!0}],Ct=[{name:"Parish Church",inside:new w(20.5,.2,-12),outside:new w(13,0,-12)},{name:"Command Bunker",inside:new w(0,.2,-44),outside:new w(0,0,-37.5)},{name:"Walled Manor",inside:new w(-52,.18,-13),outside:new w(-43,0,-13)},{name:"Norman Windmill",inside:new w(50,.2,24),outside:new w(43,0,24)}];return{enemySpawns:ht,pickups:o,animated:s,disposables:n,enterableBuildings:Ct}}const Tg={id:"soviet",index:6,themeClass:"theme-soviet",act:"ACT VII • WINTER 1974",title:"STALNOGORSK",subtitle:"Snow, Concrete & The Manuscript",heroName:"ALEKSANDR SOLZHENITSYN",objective:"Cross the District, Break into the Committee Building & Reclaim the Manuscript",quote:'"The Committee seized the manuscript naming every camp and every grave. Cross the frozen avenue and bring the truth back out."',historicalNote:"Stalnogorsk is an invented 1974 Soviet city; three real figures who defied Soviet tyranny stand together here as legends.",musicTheme:"soviet",enemyIcon:"★",currency:"₽ ",spawnPos:new w(0,0,74),spawnYaw:0,cameraPreview:{center:new w(0,8,-10),radius:52,height:18,speed:.1}};function Eg(i,t,e){const n=[],s=[],o=[];t.bounds={minX:-84,maxX:84,minZ:-86,maxZ:84};const r=new w(.25,.36,-.88).normalize(),a=Qn({topColor:4936540,midColor:8292240,horizonColor:12371148,sunColor:15132907,sunDirection:r,cloudTint:10134445,cloudDensity:.72});i.add(a.mesh),s.push(Mt=>{a.uniforms.uTime.value=Mt}),i.fog=new yn(10265773,.0056),i.add(new Jn(13489630,5067351,1.1));const l=new je(15659767,1.85);l.position.copy(r).multiplyScalar(120),l.castShadow=!0,l.shadow.mapSize.set(2048,2048),l.shadow.camera.left=-95,l.shadow.camera.right=95,l.shadow.camera.top=95,l.shadow.camera.bottom=-95,l.shadow.near=10,l.shadow.far=280,l.shadow.bias=-5e-4,i.add(l);const c=Ze("soviet_snow",36,36),h=new f(new ae(460,460),new H({map:c.map,roughness:.9}));h.rotation.x=-Math.PI/2,h.receiveShadow=!0,i.add(h);const d=new H({color:3882820,roughness:.92}),u=new f(new ae(14,155),d);u.rotation.x=-Math.PI/2,u.position.set(0,.03,2),u.receiveShadow=!0,i.add(u);const p=new H({color:8291724,metalness:.82,roughness:.32});for(const Mt of[-2.4,-1,1,2.4]){const yt=new f(new N(.1,.05,148),p);yt.position.set(Mt,.05,4),i.add(yt)}const g=Ze("cobble",10,10),_=new f(new ae(46,36),new H({map:g.map,color:8159365,roughness:.88}));_.rotation.x=-Math.PI/2,_.position.set(0,.04,-8),_.receiveShadow=!0,i.add(_);const x=lg(3,2),m=Fc(2,2),S=Fn("weathered",2,2),M=new H({map:x,roughness:.85}),v=new H({map:m.map,color:10067358,roughness:.88}),A=new H({color:13617336,roughness:.84}),b=new H({color:8079933,roughness:.88}),U=new H({color:7218208,roughness:.55,metalness:.12}),L=new H({color:3884094,metalness:.65,roughness:.42}),T=new H({color:11672604,roughness:.65}),E=new H({color:15082018,emissive:12849682,emissiveIntensity:1.35,roughness:.35}),O=new H({color:3685698,metalness:.7,roughness:.38}),J=new H({color:6906974,roughness:.88}),j=new H({map:S.map,roughness:.85}),Q=new H({color:14999768,roughness:.86}),Y=new H({color:9288404,roughness:.25,metalness:.2}),X=new oe({color:16770216});for(const Mt of[64,42,20,-24,-44])for(const yt of[-8.2,8.2]){const Vt=new f(new W(.11,.16,6.2,8),O);Vt.position.set(yt,3.1,Mt);const q=new f(new N(1.4,.12,.12),O);q.position.set(yt+(yt<0?.65:-.65),6.1,Mt);const Et=new f(new Xt(.24,8,8),X);Et.position.set(yt+(yt<0?1.25:-1.25),5.95,Mt),i.add(Vt,q,Et),t.addBox(yt,3,Mt,.48,6,.48,"solid")}const I=[[-44,56,28,16,11],[-64,30,11,16,26],[46,56,28,16,11],[66,30,11,16,26]];for(const[Mt,yt,Vt,q,Et]of I)Ft(i,t,Mt,q*.5,yt,Vt,q,Et,M,"stone");Ft(i,t,-38,1.5,34,.22,3,.22,O,"solid"),Ft(i,t,-34,1.5,34,.22,3,.22,O,"solid");const C=new f(new N(4.4,.18,.18),O);C.position.set(-36,3,34);const k=new f(new N(.8,.08,.35),T);k.position.set(-36,.75,34),i.add(C,k);const B=new f(new W(.45,.85,3.2,8),T);B.position.set(-44,2.2,26);const G=new f(new kt(.46,1.1,8),Q);G.position.set(-44,4.35,26),i.add(B,G),t.addBox(-44,2.2,26,1.8,4.4,1.8,"solid");for(const[Mt,yt]of[[-32,42],[-48,42],[30,42]])Ft(i,t,Mt,.45,yt,2,.9,.65,j,"wood"),Ft(i,t,Mt+1.5,.42,yt,.5,.84,.5,O,"solid");function tt(Mt,yt){const Vt=new f(new W(.16,.24,6.2,7),Q);Vt.position.set(Mt,3.1,yt);const q=new f(new wi(1.8,0),new H({color:6711918,wireframe:!0}));q.position.set(Mt,6.4,yt),i.add(Vt,q),t.addBox(Mt,3,yt,.7,6,.7,"wood")}for(const[Mt,yt]of[[-28,38],[-50,36],[-36,18],[32,34],[52,40],[-34,-30],[34,-32],[58,-12],[68,-6]])tt(Mt,yt);const at=le(i,t,{cx:-19,cz:46,w:11,d:10,h:4,floorY:.16,wallMat:A,floorMat:J,roofMat:v,roofStyle:"flat",east:[{type:"window",offset:-3,width:2.2},{type:"door",offset:0,width:2.3,height:2.9},{type:"window",offset:3,width:2.2}],interiorLight:{color:16768921,intensity:1.6,distance:13}}),F=new f(new ae(6.4,1.3),new H({map:ms("ПРОДУКТЫ","#1c4f7a","#f7f4eb"),roughness:.65}));F.position.set(-13.3,4.6,46),F.rotation.y=Math.PI/2,i.add(F),Ft(i,t,-22.2,at.floorY+.55,46,1.1,1.1,6,j,"wood");for(let Mt=0;Mt<2;Mt++){const yt=34+Mt*12,Vt=le(i,t,{cx:21,cz:yt,w:10,d:9,h:3.8,floorY:.14,wallMat:v,floorMat:v,roofMat:O,roofStyle:"flat",west:[{type:"door",offset:0,width:3.4,height:3.1}],interiorLight:{color:14543103,intensity:1.2,distance:11}});We(i,t,24.4,Vt.floorY,yt,1.6,.85,O,1)}Ft(i,t,11,1.4,58,.3,2.8,4.6,O,"solid");const z=new f(new N(2.4,.2,5),O);z.position.set(10,2.85,58),i.add(z),Ft(i,t,-11.5,1.4,24,3,2.8,3.8,A,"solid");const $=new f(new ae(3.2,.7),new H({map:ms("СОЮЗПЕЧАТЬ","#9e1c1c","#fff4d4")}));$.position.set(-9.9,2.55,24),$.rotation.y=Math.PI/2,i.add($);function Z(Mt,yt,Vt,q,Et=!1){const K=new $t;K.position.set(Mt,0,yt),K.rotation.y=Vt;const lt=new H({color:q,roughness:.45,metalness:.35}),St=new f(new N(Et?2.1:1.85,Et?1.8:.9,Et?4.8:4.2),lt);if(St.position.y=Et?1.15:.75,K.add(St),Et){const qt=new f(new N(2.14,.25,4.84),new H({color:1854366}));qt.position.y=1.15;const de=new f(new W(.14,.14,.22,8),new oe({color:3902719}));de.position.set(0,2.16,1.5),K.add(qt,de)}else{const qt=new f(new N(1.7,.75,2.1),lt);qt.position.set(0,1.52,-.15),K.add(qt)}i.add(K);const Tt=Math.abs(Math.sin(Vt))>.5?Et?5:4.4:Et?2.3:2.1,zt=Math.abs(Math.sin(Vt))>.5?Et?2.3:2.1:Et?5:4.4;t.addBox(Mt,1.2,yt,Tt,2.4,zt,"solid")}Z(-5.2,54,.05,3694197),Z(5.4,42,-.06,8159862),Ft(i,t,-7.8,1.4,16,2.2,2.8,2.2,v,"stone");const ot=new f(new N(.14,5.2,.14),T);ot.position.set(-6,3.2,16),ot.rotation.z=-.35,i.add(ot),Z(7.2,16,.18,13940274,!0),Ft(i,t,0,1.7,-8,4.4,3.4,4.4,U,"stone");const _t=new f(new N(1.4,2.2,1),L);_t.position.set(0,4.5,-8);const Rt=new f(new N(1.8,2.2,1.1),L);Rt.position.set(0,6.7,-8);const xt=new f(new Xt(.58,10,10),L);xt.position.set(0,8.4,-8);const it=new f(new W(.22,.26,2.6,8),L);it.rotation.x=Math.PI/2-.3,it.position.set(.9,7.6,-6.5),i.add(_t,Rt,xt,it);for(const[Mt,yt]of[[-14,-2],[14,-2],[-14,-18],[14,-18]]){const Vt=new f(new W(.08,.11,7.8,8),O);Vt.position.set(Mt,3.9,yt);const q=new f(new ae(2.6,1.5),T);q.position.set(Mt+1.32,6.8,yt),i.add(Vt,q),t.addBox(Mt,3.8,yt,.45,7.6,.45,"solid"),s.push(Et=>{q.rotation.y=Math.sin(Et*3+Mt)*.16})}Ft(i,t,21,1.2,-10,3.6,2.4,2.6,U,"stone");for(const Mt of[20.1,21.9]){const yt=new f(new W(.45,.55,3.2,8),L);yt.position.set(Mt,4,-10);const Vt=new f(new Xt(.38,8,8),L);Vt.position.set(Mt,5.9,-10),i.add(yt,Vt)}const mt=new f(new ee(.95,.12,6,14,Math.PI),L);mt.position.set(21,6.2,-10),i.add(mt),Ft(i,t,-42,7,-8,16,14,26,A,"stone");const D=new f(new N(.4,2.6,18),new H({map:ms("СЛАВА ТРУДУ!","#a61c1c","#fff4cc")}));D.position.set(-34.2,15.6,-8),i.add(D);const Pt=le(i,t,{cx:-40,cz:-38,w:18,d:18,h:5.4,floorY:.25,wallMat:A,floorMat:j,roofMat:v,roofStyle:"flat",east:[{type:"window",offset:-5.5,width:2.2},{type:"door",offset:0,width:3.2,height:3.4},{type:"window",offset:5.5,width:2.2}],south:[{type:"door",offset:0,width:2.6,height:3.2}],interiorLight:{color:16768938,intensity:2,distance:20}});for(const Mt of[-44,-40,-36,-32]){const yt=new f(new W(.36,.42,5.4,10),A);yt.position.set(-29.2,2.7,Mt),i.add(yt),t.addBox(-29.2,2.7,Mt,.9,5.4,.9,"stone")}const vt=new f(new N(3.4,.65,16),A);vt.position.set(-30,5.7,-38),i.add(vt);const It=new H({color:10033950,roughness:.8});for(const Mt of[-35.5,-38.5])Bn(i,t,Mt,Pt.floorY,-42.5,4.2,It),Bn(i,t,Mt,Pt.floorY,-33.5,4.2,It);Ft(i,t,-46.6,Pt.floorY+.22,-38,3.8,.44,14,j,"wood");for(const Mt of[-44.5,-31.5]){const yt=new f(new N(.4,4.8,2.2),T);yt.position.set(-44.8,Pt.floorY+2.6,Mt),i.add(yt)}Oc(i,t,-46.2,Pt.floorY+.44,-38,Math.PI/2);const ht=le(i,t,{cx:48,cz:-38,w:18,d:16,h:5.8,floorY:.16,wallMat:b,floorMat:v,roofMat:O,roofStyle:"gable",west:[{type:"door",offset:0,width:3.6,height:3.6}],south:[{type:"door",offset:0,width:2.8,height:3.2}],interiorLight:{color:14215423,intensity:1.6,distance:18}});for(const Mt of[-43,-33]){const yt=new f(new W(1.1,1.7,24,10),b);yt.position.set(58,12,Mt),i.add(yt),t.addBox(58,6,Mt,3.4,12,3.4,"stone"),e.addMistEmitter(new w(58,24.5,Mt),2.8)}Ft(i,t,51,ht.floorY+.9,-42,3.6,1.8,1.8,O,"solid"),Ft(i,t,51,ht.floorY+.9,-34,3.6,1.8,1.8,O,"solid");const Ct=new f(new W(9.5,9.5,.1,18),Y);Ct.position.set(44,.05,4),i.add(Ct);const dt=new f(new W(3.6,3.8,.35,8),j);dt.position.set(60,.18,4);const R=new f(new kt(4.2,2.2,8),O);R.position.set(60,4.4,4),i.add(dt,R),t.addWalkable(60,4,7.2,7.2,.36);const y=le(i,t,{cx:0,cz:-62,w:28,d:18,h:5.2,floorY:.25,wallMat:A,floorMat:J,roofMat:v,roofStyle:"none",south:[{type:"window",offset:-8.5,width:2.4},{type:"door",offset:0,width:3.6,height:3.6},{type:"window",offset:8.5,width:2.4}],west:[{type:"door",offset:0,width:2.4,height:3}],east:[{type:"door",offset:0,width:2.4,height:3}],interiorLight:{color:16770232,intensity:2.2,distance:26}}),V=new f(new N(28.4,6,18.4),A);V.position.set(0,y.roofY+3,-62);const nt=new f(new N(16,8.5,12),A);nt.position.set(0,y.roofY+10.2,-62);const ct=new f(new N(8,6.5,8),A);ct.position.set(0,y.roofY+17.5,-62);const rt=new f(new kt(1.1,10,8),O);rt.position.set(0,y.roofY+25.5,-62);const ft=new f(new Rs(1.45,0),E);ft.position.set(0,y.roofY+31.2,-62),i.add(V,nt,ct,rt,ft),t.addBox(0,y.roofY+3.2,-62,28.4,6.4,18.4,"stone");const ut=new f(new ae(3.4,14.5),T);ut.rotation.x=-Math.PI/2,ut.position.set(0,y.floorY+.03,-61.5),i.add(ut);for(const[Mt,yt]of[[-4.2,-57.5],[4.2,-57.5],[-4.2,-64.5],[4.2,-64.5]])Ft(i,t,Mt,y.floorY+2.6,yt,.72,5.2,.72,A,"stone");We(i,t,-1.8,y.floorY,-58.5,2.2,.9,j,1),qn(i,t,{axis:"x",center:{x:-9,z:-65},baseY:y.floorY,length:9,height:4.8,doors:[{offset:1.5,width:2.1}]}),qn(i,t,{axis:"z",center:{x:-4.5,z:-68},baseY:y.floorY,length:6,height:4.8,doors:[]}),Ft(i,t,-10,y.floorY+.45,-68.5,1.4,.9,1,j,"wood");const bt=new f(new N(.65,.22,.48),new H({color:16775398,emissive:16765562,emissiveIntensity:.75,roughness:.4}));bt.position.set(-10,y.floorY+1.02,-68.5),i.add(bt),qn(i,t,{axis:"x",center:{x:8.5,z:-65.2},baseY:y.floorY,length:10.6,height:4.8,doors:[{offset:-3.2,width:1.9},{offset:.2,width:1.9},{offset:3.4,width:1.9}]}),qn(i,t,{axis:"z",center:{x:6.8,z:-68},baseY:y.floorY,length:5.5,height:4.8,doors:[]}),qn(i,t,{axis:"z",center:{x:10.4,z:-68},baseY:y.floorY,length:5.5,height:4.8,doors:[]}),We(i,t,8.8,y.floorY,-60.5,1.8,.9,O,1);for(const[Mt,yt,Vt,q]of[[-125,-145,38,28],[120,-140,42,32],[-145,30,32,24],[148,20,36,26]]){const Et=new f(new N(Vt,q,18),M);Et.position.set(Mt,q*.5,yt),i.add(Et)}const Lt=new f(new W(1.2,5.2,118,12),v);Lt.position.set(78,59,-155);const wt=new f(new W(5.5,4.2,4.5,12),O);wt.position.set(78,86,-155);const At=new f(new W(.25,.8,36,8),T);At.position.set(78,134,-155),i.add(Lt,wt,At),e.initAmbient("snow",t.bounds);const Ot=[{type:"health",variant:"tea_glass",pos:new w(-19,.9,46),label:"GLASS OF HOT TEA (+35 HP)"},{type:"health",variant:"tea_glass",pos:new w(21,.9,46),label:"GARAGE HOT TEA (+35 HP)"},{type:"health",variant:"tea_glass",pos:new w(-40,.9,-38),label:"PALACE HOT TEA (+35 HP)"},{type:"health",variant:"tea_glass",pos:new w(48,.9,-38),label:"FACTORY HOT TEA (+35 HP)"},{type:"health",variant:"tea_glass",pos:new w(0,.9,-62),label:"COMMITTEE HOT TEA (+35 HP)"},{type:"ammo",pos:new w(21,.9,34),label:"GARAGE AMMO BOX"},{type:"ammo",pos:new w(-12,.9,-22),label:"MILITIA AMMO CRATE"}];for(const Mt of Ot){const yt=ti(Mt.type,Mt.variant||"default");yt.position.copy(Mt.pos),i.add(yt),o.push({...Mt,mesh:yt,collected:!1})}const Bt=[{type:"soviet_militia",pos:new w(-6,0,58)},{type:"kgb_agent",pos:new w(6,0,54)},{type:"kgb_agent",pos:new w(-18,.16,46)},{type:"guard_dog",pos:new w(-28,0,44)},{type:"soviet_militia",pos:new w(-36,0,28)},{type:"soviet_militia",pos:new w(21,.14,46)},{type:"kgb_agent",pos:new w(21,.14,34)},{type:"guard_dog",pos:new w(5,0,32)},{type:"soviet_militia",pos:new w(-4,0,20)},{type:"kgb_agent",pos:new w(3,0,15)},{type:"guard_dog",pos:new w(-12,0,14)},{type:"soviet_militia",pos:new w(16,0,12)},{type:"kgb_agent",pos:new w(-10,0,-2)},{type:"soviet_militia",pos:new w(10,0,-2)},{type:"soviet_militia",pos:new w(32,0,4)},{type:"kgb_agent",pos:new w(56,0,4)},{type:"kgb_agent",pos:new w(-16,0,-16)},{type:"soviet_militia",pos:new w(16,0,-16)},{type:"kgb_agent",pos:new w(-26,0,-34)},{type:"soviet_militia",pos:new w(-34,.25,-38)},{type:"kgb_agent",pos:new w(-42,.25,-38)},{type:"soviet_militia",pos:new w(34,0,-36)},{type:"guard_dog",pos:new w(38,0,-40)},{type:"soviet_militia",pos:new w(46,.16,-38)},{type:"kgb_agent",pos:new w(52,.16,-38)},{type:"soviet_militia",pos:new w(-8,0,-34)},{type:"soviet_militia",pos:new w(8,0,-34)},{type:"guard_dog",pos:new w(0,0,-44)},{type:"kgb_agent",pos:new w(-8,.25,-60)},{type:"soviet_militia",pos:new w(8,.25,-62)},{type:"kgb_agent",pos:new w(-9,.25,-67)},{type:"boss_soviet",pos:new w(0,.25,-62),isBossWave:!0}],Dt=[{name:"Food Shop",inside:new w(-19,.16,46),outside:new w(-12,0,46)},{name:"Palace of Culture",inside:new w(-39,.25,-38),outside:new w(-27,0,-38)},{name:"Factory Hall",inside:new w(46,.16,-38),outside:new w(36,0,-38)},{name:"Committee Building",inside:new w(0,.25,-61),outside:new w(0,0,-50)}];return{enemySpawns:Bt,pickups:o,animated:s,disposables:n,enterableBuildings:Dt}}const Ag={id:"tibet",index:7,themeClass:"theme-tibet",act:"ACT VIII • MARCH 1959",title:"ROAD TO LHASA",subtitle:"High Valley & Ridge Monastery",heroName:"GOMPO TASHI ANDRUGTSANG",objective:"Break the Army Camp & Free the Ridge Monastery Above the Valley",quote:'"In March 1959 the caravan moves south beneath five-coloured prayer flags. Clear the road and drive the garrison from the monastery on the ridge."',historicalNote:"Historical note: Gompo Tashi Andrugtsang, Ani Pachen, and King Songtsen Gampo appear together as legends; Red Guards belong historically to the years after 1966.",musicTheme:"tibet",enemyIcon:"☸",currency:"ༀ ",spawnPos:new w(0,0,74),spawnYaw:0,cameraPreview:{center:new w(0,9,-12),radius:54,height:18,speed:.1}};function Rg(i,t,e){const n=[],s=[],o=[];t.bounds={minX:-84,maxX:84,minZ:-86,maxZ:84};const r=new w(.42,.62,-.66).normalize(),a=Qn({topColor:470136,midColor:1992388,horizonColor:11195637,sunColor:16776422,sunDirection:r,cloudTint:16777215,cloudDensity:.24});i.add(a.mesh),s.push(ft=>{a.uniforms.uTime.value=ft}),i.fog=new yn(10208486,.0036),i.add(new Jn(14282495,8216888,.88));const l=new je(16775136,2.25);l.position.copy(r).multiplyScalar(130),l.castShadow=!0,l.shadow.mapSize.set(2048,2048),l.shadow.camera.left=-95,l.shadow.camera.right=95,l.shadow.camera.top=95,l.shadow.camera.bottom=-95,l.shadow.near=10,l.shadow.far=280,l.shadow.bias=-5e-4,i.add(l);const c=Ze("tibet_ochre",36,36),h=new f(new ae(480,480),new H({map:c.map,roughness:.94}));h.rotation.x=-Math.PI/2,h.receiveShadow=!0,i.add(h);const d=new H({color:10191449,roughness:.94}),u=new f(new ae(9,126),d);u.rotation.x=-Math.PI/2,u.position.set(0,.03,18),u.receiveShadow=!0,i.add(u);const p=Kn("castle",2,2),g=new H({color:15657436,roughness:.86}),_=new H({color:7019551,roughness:.82}),x=new H({color:14987816,roughness:.72}),m=new H({color:15119416,metalness:.82,roughness:.28}),S=new H({color:10034718,roughness:.65}),M=new H({color:3876377,roughness:.86}),v=new H({map:p.map,color:10392965,roughness:.92}),A=new H({color:1973533,roughness:.88}),b=new H({color:6121028,roughness:.9}),U=new H({color:12065820,side:_e,roughness:.68}),L=new H({color:15791352,roughness:.78}),T=new H({color:7301216,roughness:.94}),E=new H({color:4569282,roughness:.3,metalness:.15}),O=new H({map:cg(),roughness:.75}),J=[1990837,15921384,12854565,2654790,15448106];function j(ft,ut,bt,Lt,wt,At,Ot=12){for(let Bt=1;Bt<Ot;Bt++){const Dt=Bt/Ot,Mt=ft+(Lt-ft)*Dt,yt=bt+(At-bt)*Dt,Vt=Math.sin(Dt*Math.PI)*.85,q=ut+(wt-ut)*Dt-Vt,Et=new f(new ae(.55,.7),new H({color:J[Bt%5],side:_e,roughness:.82}));Et.position.set(Mt,q,yt),Et.rotation.y=Math.atan2(Lt-ft,At-bt)+Math.PI/2,i.add(Et),s.push(K=>{Et.rotation.x=Math.sin(K*5.2+Bt)*.25})}}function Q(ft,ut,bt,Lt=1){const wt=new $t;wt.position.set(ft,ut,bt);const At=new f(new N(2.6*Lt,1.5*Lt,2.6*Lt),g);At.position.y=.75*Lt;const Ot=new f(new Xt(1.1*Lt,12,10),g);Ot.position.y=2.2*Lt;const Bt=new f(new kt(.55*Lt,2.1*Lt,8),m);Bt.position.y=4*Lt,wt.add(At,Ot,Bt),i.add(wt),t.addBox(ft,ut+2*Lt,bt,2.7*Lt,4*Lt,2.7*Lt,"stone")}function Y(ft,ut,bt,Lt){const wt=new $t;wt.position.set(ft,0,ut),wt.rotation.y=bt;const At=new H({color:14460798,roughness:.72}),Ot=new H({color:Lt.robeColor,roughness:.84}),Bt=new f(new W(.24,.38,1.38,10),Ot);Bt.position.y=.72;const Dt=new f(new Xt(.2,12,10),At);if(Dt.position.y=1.62,wt.add(Bt,Dt),Lt.sashYellow){const Mt=new f(new N(.46,.34,.38),x);Mt.position.set(0,1.15,.04),wt.add(Mt)}if(Lt.glasses){const Mt=new f(new ee(.055,.01,6,10),A);Mt.position.set(-.07,1.64,.19);const yt=Mt.clone();yt.position.x=.07,wt.add(Mt,yt)}if(Lt.blessingHand){const Mt=new f(new W(.065,.07,.52,8),_);Mt.position.set(.32,1.24,.16),Mt.rotation.x=-.9;const yt=new f(new Xt(.07,8,8),At);yt.position.set(.32,1.46,.35),wt.add(Mt,yt)}if(Lt.khampaHat){const Mt=new f(new ee(.21,.08,8,12),new H({color:12745272,roughness:.9}));Mt.rotation.x=Math.PI/2,Mt.position.y=1.78;const yt=new f(new W(.025,.028,1.15,6),M);yt.position.set(.34,1.15,.12),wt.add(Mt,yt)}i.add(wt),t.addBox(ft,.9,ut,.85,1.8,.85,"solid")}Y(-5.8,72,.6,{robeColor:7019551,sashYellow:!0,glasses:!0,blessingHand:!0}),Y(-8.2,73.5,.5,{robeColor:7019551,sashYellow:!1}),Y(-7.5,70,.7,{robeColor:7019551,sashYellow:!1}),Y(-11,72,.4,{robeColor:5190948,khampaHat:!0}),Y(-10.2,68.5,.4,{robeColor:5190948,khampaHat:!0});function X(ft,ut,bt,Lt,wt=!1){const At=new $t;At.position.set(ft,0,ut),At.rotation.y=bt;const Ot=new H({color:Lt,roughness:.92}),Bt=new f(new N(wt?1.1:.78,wt?1.15:.85,wt?2.1:1.95),Ot);Bt.position.y=wt?1.05:1.15;const Dt=new f(new N(.45,.75,.55),Ot);Dt.position.set(0,wt?1.35:1.65,wt?1.05:.95),At.add(Bt,Dt);for(const[Mt,yt]of[[-.28,-.7],[.28,-.7],[-.28,.7],[.28,.7]]){const Vt=new f(new W(.09,.08,.95,6),Ot);Vt.position.set(Mt,.48,yt),At.add(Vt)}if(wt){const Mt=new H({color:15130312,roughness:.6});for(const yt of[-1,1]){const Vt=new f(new kt(.06,.55,6),Mt);Vt.position.set(yt*.34,1.62,1.15),Vt.rotation.z=-yt*.7,At.add(Vt)}}i.add(At),t.addBox(ft,.95,ut,1.5,1.9,2.3,"solid")}X(-14,74,.4,7029286,!1),X(-16.5,70,.25,3877406,!1),X(-13.5,66.5,.6,9399112,!1),Ft(i,t,-4.5,3.6,68,.2,7.2,.2,M,"wood"),j(-4.5,6.8,68,-14,4.2,74,10);function I(ft,ut,bt,Lt,wt){const At={cx:ft,cz:ut,w:bt,d:Lt,h:4,floorY:.16,wallMat:g,floorMat:v,roofMat:M,roofStyle:"parapet",parapetColor:7019551,interiorLight:{color:16762480,intensity:1.5,distance:13}};At[wt]=[{type:"door",offset:0,width:2.3,height:2.8},{type:"window",offset:3,width:1.4}];const Ot=wt==="east"?"west":wt==="west"?"east":"north";At[Ot]=[{type:"window",offset:0,width:1.5}];const Bt=le(i,t,At);for(const[Mt,yt]of[[-bt*.44,-Lt*.44],[bt*.44,Lt*.44]]){const Vt=new f(new W(.05,.07,2.8,6),M);Vt.position.set(ft+Mt,Bt.roofY+1.8,ut+yt),i.add(Vt)}Gi(i,t,ft,Bt.floorY,ut,.72);const Dt=wt==="east"?-bt*.34:bt*.34;return Ft(i,t,ft+Dt,Bt.floorY+.32,ut-Lt*.24,1.1,.64,2.4,S,"wood"),_n(i,t,ft+Dt,Bt.floorY,ut+Lt*.26,1.1,2,M,14987816),Bt}I(-22,46,10.5,9.5,"east"),I(22,46,10.5,9.5,"west"),I(-22,24,10.5,9.5,"east"),I(22,24,10.5,9.5,"west"),j(-16,4.6,46,16,4.6,46,16),j(-16,4.6,24,16,4.6,24,16),Q(-12,0,56,1),Q(12,0,35,.95),Ft(i,t,-11,.85,35,1.2,1.7,9,v,"stone"),X(-42,48,.9,2367002,!0),X(-47,42,-.4,3024160,!0),X(-39,36,1.4,1972503,!0);const C=new f(new W(16,16,.12,22),E);C.position.set(52,.06,24),i.add(C);const k=new f(new kt(4.2,3.2,4),A);k.position.set(44,1.6,48),k.rotation.y=Math.PI/4,i.add(k),t.addBox(44,1.4,48,5.4,2.8,5.4,"solid");const B=le(i,t,{cx:-50,cz:4,w:12,d:12,h:3.9,floorY:.2,wallMat:v,floorMat:v,roofMat:v,roofStyle:"none",east:[{type:"door",offset:0,width:2.8,height:3}],south:[{type:"door",offset:0,width:2.4,height:2.9}],interiorLight:{color:16765576,intensity:1.2,distance:12}});Ft(i,t,-53,B.floorY+.6,4,1.4,1.2,2.4,v,"stone");for(const[ft,ut]of[[-24,-4],[-14,-10],[20,-4]])Ft(i,t,ft,1.35,ut,4.6,2.7,6.4,b,"solid");for(const[ft,ut]of[[12,4],[-12,6]])Ft(i,t,ft,1.4,ut,2.6,2.8,6.2,b,"solid");const G=new f(new W(.08,.11,8.2,8),A);G.position.set(8,4.1,-12);const tt=new f(new ae(2.8,1.7),U);tt.position.set(9.45,7.1,-12),i.add(G,tt),t.addBox(8,4,-12,.5,8,.5,"solid");const at=new f(new W(.12,.48,22,6),A);at.position.set(30,11,-14),i.add(at),t.addBox(30,5,-14,1.2,10,1.2,"solid");const F=new f(new N(5.6,1.8,.22),new H({map:ms("前进 • 营地","#a61c1c","#ffe866")}));F.position.set(-10,2.2,12),i.add(F),t.addBox(-10,1.5,12,5.8,3,.5,"wood");const z=3.2,$=9;for(let ft=0;ft<$;ft++){const ut=z*((ft+1)/$),bt=-18-ft*1.9,Lt=new f(new N(10,ut,2),v);Lt.position.set(0,ut*.5,bt),Lt.receiveShadow=!0,i.add(Lt),t.addWalkable(0,bt,10.4,2.2,ut)}Ft(i,t,-5.6,3.5,-26,2.2,7,2.6,g,"stone"),Ft(i,t,5.6,3.5,-26,2.2,7,2.6,g,"stone");const Z=new f(new N(14,1.8,2.8),g);Z.position.set(0,7.2,-26);const ot=new f(new Xt(1.5,10,8),g);ot.position.set(0,9,-26);const _t=new f(new kt(.65,2.4,8),m);_t.position.set(0,11.2,-26),i.add(Z,ot,_t);const Rt=new f(new N(132,z,50),v);Rt.position.set(0,z*.5,-60),Rt.receiveShadow=!0,i.add(Rt),t.addWalkable(0,-60,132,50.5,z),t.addBox(-36,z*.5,-35.5,61,z,1.2,"stone"),t.addBox(36,z*.5,-35.5,61,z,1.2,"stone");const xt=le(i,t,{cx:0,cz:-66,w:22,d:18,h:6,floorY:z+.2,wallMat:g,floorMat:M,roofMat:m,roofStyle:"parapet",parapetColor:7019551,south:[{type:"window",offset:-6.8,width:2.2},{type:"door",offset:0,width:3.6,height:3.8},{type:"window",offset:6.8,width:2.2}],west:[{type:"door",offset:0,width:2.4,height:3.2}],east:[{type:"door",offset:0,width:2.4,height:3.2}],interiorLight:{color:16764784,intensity:2.6,distance:26}}),it=new f(new kt(13,3.2,4),m);it.rotation.y=Math.PI/4,it.position.set(0,xt.roofY+2.2,-66);const mt=new f(new ee(.95,.14,8,16),m);mt.position.set(0,xt.roofY+1.4,-56.6);const D=new f(new N(.85,.75,.45),m);D.position.set(-1.6,xt.roofY+1,-56.6);const Pt=D.clone();Pt.position.x=1.6,i.add(it,mt,D,Pt);for(const ft of[-1,1])for(let ut=0;ut<4;ut++){const bt=new f(new W(.24,.24,.65,10),m);bt.position.set(ft*(3.2+ut*1.15),xt.floorY+1.05,-56.5),i.add(bt),s.push(Lt=>{bt.rotation.y=Lt*1.6+ut})}for(const[ft,ut]of[[-5.5,-62],[5.5,-62],[-5.5,-69],[5.5,-69]])Ft(i,t,ft,xt.floorY+3,ut,.62,6,.62,S,"wood");Ft(i,t,0,xt.floorY+.65,-72.2,3.4,1.3,2.2,_,"wood");const vt=new f(new kt(1.35,2.6,12),m);vt.position.set(0,xt.floorY+2.6,-72.2);const It=new f(new Xt(.58,12,10),m);It.position.set(0,xt.floorY+4.15,-72.2);const ht=new f(new ee(1.15,.08,8,20),m);ht.position.set(0,xt.floorY+3.9,-72.8),i.add(vt,It,ht),_n(i,t,0,xt.floorY,-68.8,3.2,.9,M,14987816);for(const[ft,ut]of[[-7.2,-65],[7.2,-65]])Ft(i,t,ft,xt.floorY+.2,ut,1.2,.4,4.4,x,"wood");for(const ft of[-7.5,7.5]){const ut=new f(new ae(2.2,3.2),O);ut.position.set(ft,xt.floorY+3.2,-74.5),i.add(ut)}const Ct=le(i,t,{cx:-28,cz:-56,w:10,d:10,h:3.9,floorY:z+.16,wallMat:g,floorMat:v,roofMat:M,roofStyle:"parapet",parapetColor:7019551,east:[{type:"door",offset:0,width:2.3,height:2.8}],south:[{type:"window",offset:0,width:1.6}],interiorLight:{color:16762480,intensity:1.5,distance:12}});_n(i,t,-31.2,Ct.floorY,-56,1.1,2,M,14987816);const dt=le(i,t,{cx:28,cz:-56,w:10,d:10,h:3.9,floorY:z+.16,wallMat:g,floorMat:v,roofMat:M,roofStyle:"parapet",parapetColor:7019551,west:[{type:"door",offset:0,width:2.3,height:2.8}],south:[{type:"window",offset:0,width:1.6}],interiorLight:{color:16762480,intensity:1.5,distance:12}});_n(i,t,31.2,dt.floorY,-56,1.1,2,M,14987816),Q(-22,z,-42,1.55),Ft(i,t,20,z+5,-42,.25,10,.25,M,"wood"),j(20,z+9.4,-42,0,xt.roofY+.5,-57,14),Ft(i,t,0,z+.35,-45,2.2,.7,2.2,M,"wood");const R=new f(new kt(1.1,2.2,8),new oe({color:16739866}));R.position.set(0,z+1.5,-45);const y=new Hi(16743970,6,16,1.5);y.position.set(0,z+2.2,-45),i.add(R,y),s.push(ft=>{R.scale.y=.85+Math.sin(ft*11)*.22,y.intensity=5.5+Math.sin(ft*9)*1.2});const V=new f(new N(7.2,1.4,.16),new H({map:ms("破旧立新","#a61c1c","#ffe866")}));V.position.set(0,z+4.4,-52),i.add(V);for(const[ft,ut,bt,Lt]of[[-145,-180,92,118],[-25,-195,105,138],[105,-175,95,124],[195,-75,90,114],[195,55,95,122],[155,165,88,108],[35,195,96,118],[-85,185,92,112],[-185,95,94,118],[-185,-45,96,124]]){const wt=new f(new kt(bt,Lt,7),T);wt.position.set(ft,Lt*.45,ut);const At=new f(new kt(bt*.58,Lt*.54,7),L);At.position.set(ft,Lt*.72,ut),i.add(wt,At)}e.initAmbient("alpine",t.bounds);const nt=[{type:"health",variant:"butter_tea",pos:new w(-22,.9,46),label:"BOWL OF BUTTER TEA (+35 HP)"},{type:"health",variant:"butter_tea",pos:new w(-50,.9,4),label:"FORT BUTTER TEA (+35 HP)"},{type:"health",variant:"butter_tea",pos:new w(22,.9,24),label:"VILLAGE BUTTER TEA (+35 HP)"},{type:"health",variant:"butter_tea",pos:new w(-28,z+1,-56),label:"MONKS BUTTER TEA (+35 HP)"},{type:"health",variant:"butter_tea",pos:new w(0,z+1,-64),label:"ASSEMBLY HALL BUTTER TEA (+35 HP)"},{type:"ammo",pos:new w(22,.9,46),label:"KHAMPA CARTRIDGE POUCH"},{type:"ammo",pos:new w(28,z+1,-56),label:"MONASTERY ARROWS & ROUNDS"}];for(const ft of nt){const ut=ti(ft.type,ft.variant||"default");ut.position.copy(ft.pos),i.add(ut),o.push({...ft,mesh:ut,collected:!1})}const ct=[{type:"pla_rifleman",pos:new w(-6,0,56)},{type:"pla_rifleman",pos:new w(7,0,52)},{type:"red_guard",pos:new w(0,0,44)},{type:"pla_rifleman",pos:new w(-21,.16,46)},{type:"pla_rifleman",pos:new w(21,.16,46)},{type:"red_guard",pos:new w(34,0,40)},{type:"pla_rifleman",pos:new w(-21,.16,24)},{type:"pla_rifleman",pos:new w(21,.16,24)},{type:"pla_mg",pos:new w(0,0,26)},{type:"pla_rifleman",pos:new w(-36,0,12)},{type:"red_guard",pos:new w(-42,0,6)},{type:"pla_rifleman",pos:new w(-49,.2,4)},{type:"pla_mg",pos:new w(-51,.2,1)},{type:"pla_rifleman",pos:new w(-6,0,10)},{type:"pla_rifleman",pos:new w(6,0,10)},{type:"red_guard",pos:new w(-16,0,0)},{type:"pla_mg",pos:new w(0,0,-2)},{type:"pla_rifleman",pos:new w(14,0,-4)},{type:"pla_rifleman",pos:new w(-8,0,-10)},{type:"red_guard",pos:new w(6,0,-14)},{type:"pla_rifleman",pos:new w(24,0,-10)},{type:"pla_rifleman",pos:new w(0,1.8,-26)},{type:"pla_mg",pos:new w(-10,z,-40)},{type:"pla_rifleman",pos:new w(10,z,-40)},{type:"red_guard",pos:new w(-5,z,-46)},{type:"red_guard",pos:new w(5,z,-46)},{type:"pla_rifleman",pos:new w(-27,z+.16,-56)},{type:"pla_rifleman",pos:new w(27,z+.16,-56)},{type:"pla_rifleman",pos:new w(-5,z+.2,-64)},{type:"pla_mg",pos:new w(5,z+.2,-64)},{type:"red_guard",pos:new w(0,z+.2,-60)},{type:"boss_tibet",pos:new w(0,z,-50),isBossWave:!0}],rt=[{name:"Tibetan Village House",inside:new w(-22,.16,46),outside:new w(-14.5,0,46)},{name:"Ruined Stone Fort",inside:new w(-50,.2,4),outside:new w(-42,0,4)},{name:"Monastery Assembly Hall",inside:new w(0,z+.2,-64),outside:new w(0,z,-54)},{name:"Monks' House West",inside:new w(-28,z+.16,-56),outside:new w(-21,z,-56)}];return{enemySpawns:ct,pickups:o,animated:s,disposables:n,enterableBuildings:rt}}const an=[{meta:fg,builder:pg},{meta:mg,builder:gg},{meta:wg,builder:xg},{meta:_g,builder:vg},{meta:Mg,builder:yg},{meta:Sg,builder:bg},{meta:Tg,builder:Eg},{meta:Ag,builder:Rg}],kl={good:{label:"THE GOOD",enemyMult:.72,playerHp:130},bad:{label:"THE BAD",enemyMult:1,playerHp:100},ugly:{label:"THE UGLY",enemyMult:1.4,playerHp:75}};class Cg{constructor(){this.container=document.getElementById("game-container"),this.sound=new Km,this.renderer=new km({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Hl,this.renderer.toneMapping=Jr,this.renderer.toneMappingExposure=1.12,this.container.appendChild(this.renderer.domElement),this.scene=new ud,this.camera=new en(72,window.innerWidth/window.innerHeight,.1,600),this.scene.add(this.camera),this.weaponHolder=new $t,this.camera.add(this.weaponHolder),this.muzzleLight=new Hi(16758861,0,12,2),this.muzzleLight.position.set(.25,-.1,-.9),this.camera.add(this.muzzleLight),this.heroStage=new $t,this.heroStage.visible=!1,this.heroFigureHolder=new $t,this.heroStage.add(this.heroFigureHolder);const t=new Hi(16773590,9,10,1.4);t.position.set(1.4,2.2,2.2);const e=new Hi(10406655,4.5,10,1.5);e.position.set(-1.8,1.9,-1.6),this.heroStage.add(t,e),this.camera.add(this.heroStage),this.heroStagePop=1,this.composer=new Xm(this.renderer),this.renderPass=new Ym(this.scene,this.camera),this.bloomPass=new $i(new Ut(window.innerWidth,window.innerHeight),.34,.55,.82),this.outputPass=new jm,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(this.outputPass),this.state="title",this.levelIndex=0,this.difficultyKey="bad",this.selectedHeroIds={west:Qe.west[0].id,japan:Qe.japan[0].id,swiss:Qe.swiss[0].id,greece:Qe.greece[0].id,scandinavia:Qe.scandinavia[0].id,normandy:Qe.normandy[0].id,soviet:Qe.soviet[0].id,tibet:Qe.tibet[0].id},this.activeHero=Qe.west[0],this.timeSinceLastDamage=999,this.practiceMode=!1,this.usedPracticeThisRun=!1,this.paxBuffer="",this.clock=new Ac,this.elapsed=0,this.worldGroup=new $t,this.scene.add(this.worldGroup),this.collision=new Ul,this.particles=null,this.animatedCallbacks=[],this.enemies=[],this.bossSpawnPending=null,this.activeBoss=null,this.pickups=[],this.enemyProjectiles=[],this.playerThrowables=[],this.tellApple=null,this.player={pos:new w,vel:new w,yaw:0,pitch:0,hp:100,maxHp:100,stamina:100,grounded:!0,bobPhase:0},this.weapons=[],this.weaponMeshes=[],this.currentWeaponIdx=0,this.fireTimer=0,this.reloading=!1,this.reloadTimer=0,this.scoped=!1,this.recoilOffset=0,this.slashAnim=0,this.baseFov=72,this.stats={score:0,shots:0,hits:0,headshots:0,kills:0},this.keys={},this.mouseDownL=!1,this.mouseDownR=!1,this.pointerLocked=!1,this.raycaster=new e0,this._cacheDom(),this._bindEvents();const n=new URLSearchParams(window.location.search),s=window.location.hash.replace("#","").toLowerCase(),o={west:0,japan:1,swiss:2,greece:3,scandinavia:4,normandy:5};let r=0;if(s in o)r=o[s];else if(n.has("level")){const a=n.get("level").toLowerCase();r=a in o?o[a]:Math.max(0,Math.min(an.length-1,parseInt(a,10)||0))}if(this.loadLevel(r,!0),document.querySelectorAll(".level-card").forEach((a,l)=>a.classList.toggle("active",l===r)),n.has("hero")){const a=an[r].meta.id,l=Nl(a,n.get("hero").toLowerCase());this.selectedHeroIds[a]=l.id,this.activeHero=l}n.get("select")==="1"?this.showIntroCard():n.get("autostart")==="1"&&(this.startMission(),this.dom.callout.classList.add("hidden")),window.__outlawsGame=this,this._loop()}_cacheDom(){this.dom={titleScreen:document.getElementById("title-screen"),introCard:document.getElementById("intro-card"),pauseScreen:document.getElementById("pause-screen"),endScreen:document.getElementById("end-screen"),hud:document.getElementById("hud"),crosshair:document.getElementById("hud-crosshair"),hitmarker:document.getElementById("hitmarker"),scopeOverlay:document.getElementById("scope-overlay"),scopeLabel:document.getElementById("scope-label"),damageOverlay:document.getElementById("damage-overlay"),hitFlash:document.getElementById("hit-flash"),paxBadge:document.getElementById("pax-badge"),callout:document.getElementById("callout-banner"),pickupToast:document.getElementById("pickup-toast"),eraBadge:document.getElementById("hud-era-badge"),objective:document.getElementById("hud-objective"),enemyIcon:document.getElementById("hud-enemy-icon"),enemiesLeft:document.getElementById("hud-enemies-left"),bossBarWrap:document.getElementById("boss-bar-wrap"),bossName:document.getElementById("boss-name"),bossBarFill:document.getElementById("boss-bar-fill"),scoreVal:document.getElementById("hud-score"),heroName:document.getElementById("hud-hero-name"),heroPerk:document.getElementById("hud-hero-perk"),hpText:document.getElementById("hud-hp-text"),hpBar:document.getElementById("hud-hp-bar"),staminaBar:document.getElementById("hud-stamina-bar"),weaponStrip:document.getElementById("hud-weapon-strip"),weaponName:document.getElementById("hud-weapon-name"),ammoPips:document.getElementById("hud-ammo-pips"),ammoMag:document.getElementById("hud-ammo-mag"),ammoReserve:document.getElementById("hud-ammo-reserve"),altHint:document.getElementById("hud-alt-hint"),comicAct:document.getElementById("comic-act"),comicTitle:document.getElementById("comic-title"),comicQuote:document.getElementById("comic-quote"),heroHistoricalNote:document.getElementById("hero-historical-note"),heroCardsList:document.getElementById("hero-cards-list"),heroPreviewName:document.getElementById("hero-preview-name"),heroPreviewBio:document.getElementById("hero-preview-bio"),heroPreviewStrength:document.getElementById("hero-preview-strength"),pauseLevelName:document.getElementById("pause-level-name"),btnToggleAudio:document.getElementById("btn-toggle-audio"),endEyebrow:document.getElementById("end-eyebrow"),endTitle:document.getElementById("end-title"),endPracticeNote:document.getElementById("end-practice-note"),endSummary:document.getElementById("end-summary"),endStats:document.getElementById("end-stats"),btnNextLevel:document.getElementById("btn-next-level")}}_bindEvents(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)}),document.querySelectorAll(".level-card").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".level-card").forEach(n=>n.classList.remove("active")),t.classList.add("active");const e=parseInt(t.dataset.level,10);this.loadLevel(e,!0)})}),document.querySelectorAll(".diff-btn").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".diff-btn").forEach(e=>e.classList.remove("active")),t.classList.add("active"),this.difficultyKey=t.dataset.diff})}),document.getElementById("btn-play").addEventListener("click",()=>{this.sound.ensureInit(),this.showIntroCard()}),document.getElementById("btn-start-mission").addEventListener("click",()=>{this.startMission()}),document.getElementById("btn-hero-back").addEventListener("click",()=>{this.returnToTitle()}),document.getElementById("btn-resume").addEventListener("click",()=>this.resumeGame()),document.getElementById("btn-restart").addEventListener("click",()=>this.restartLevel()),document.getElementById("btn-pause-change-hero").addEventListener("click",()=>this.showIntroCard()),document.getElementById("btn-main-menu").addEventListener("click",()=>this.returnToTitle()),document.getElementById("btn-end-restart").addEventListener("click",()=>this.restartLevel()),document.getElementById("btn-end-change-hero").addEventListener("click",()=>this.showIntroCard()),document.getElementById("btn-end-menu").addEventListener("click",()=>this.returnToTitle()),document.getElementById("btn-next-level").addEventListener("click",()=>{const t=(this.levelIndex+1)%an.length;this.loadLevel(t,!0),this.showIntroCard()}),this.dom.btnToggleAudio.addEventListener("click",()=>{const t=this.sound.toggleMute();this.dom.btnToggleAudio.textContent=t?"SOUND: OFF":"SOUND: ON"}),window.addEventListener("keydown",t=>{if(this.keys[t.code]=!0,!t.ctrlKey&&!t.metaKey&&!t.altKey&&t.key&&t.key.length===1){const e=t.key.toLowerCase();e>="a"&&e<="z"&&(this.paxBuffer=(this.paxBuffer+e).slice(-3),this.paxBuffer==="pax"&&(this.paxBuffer="",this.togglePracticeMode()))}if(t.code==="KeyM"){const e=this.sound.toggleMute();this.dom.btnToggleAudio.textContent=e?"SOUND: OFF":"SOUND: ON",this.toast(e?"AUDIO MUTED":"AUDIO ENABLED")}if(this.state==="intro"){t.code==="Digit1"||t.code==="Numpad1"?(t.preventDefault(),this.selectHeroByIndex(0)):t.code==="Digit2"||t.code==="Numpad2"?(t.preventDefault(),this.selectHeroByIndex(1)):t.code==="Digit3"||t.code==="Numpad3"?(t.preventDefault(),this.selectHeroByIndex(2)):t.code==="Enter"||t.code==="NumpadEnter"?(t.preventDefault(),this.startMission()):t.code==="Escape"&&(t.preventDefault(),this.returnToTitle());return}this.state==="playing"&&(t.code==="Digit1"&&this.switchWeapon(0),t.code==="Digit2"&&this.switchWeapon(1),t.code==="Digit3"&&this.switchWeapon(2),t.code==="Digit4"&&this.switchWeapon(3),t.code==="KeyR"&&this.startReload(),t.code==="Escape"&&this.pauseGame())}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1}),window.addEventListener("wheel",t=>{if(this.state!=="playing")return;const e=t.deltaY>0?1:-1,n=(this.currentWeaponIdx+e+this.weapons.length)%this.weapons.length;this.switchWeapon(n)}),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===this.renderer.domElement,!this.pointerLocked&&this.state==="playing"&&this.pauseGame()}),window.addEventListener("mousemove",t=>{if(this.state!=="playing"||!this.pointerLocked)return;const e=this.scoped?85e-5:.0021;this.player.yaw-=t.movementX*e,this.player.pitch=Math.max(-1.28,Math.min(1.28,this.player.pitch-t.movementY*e))}),window.addEventListener("mousedown",t=>{if(this.state==="playing"){if(!this.pointerLocked){this._requestLock();return}t.button===0?(this.mouseDownL=!0,this.tryFire(!1)):t.button===2&&(this.mouseDownR=!0,this.handleRightClickDown())}}),window.addEventListener("mouseup",t=>{t.button===0&&(this.mouseDownL=!1),t.button===2&&(this.mouseDownR=!1,this.setScope(!1))}),window.addEventListener("contextmenu",t=>t.preventDefault())}_clearWorld(){for(;this.worldGroup.children.length>0;){const t=this.worldGroup.children[0];this.worldGroup.remove(t)}for(;this.weaponHolder.children.length>0;)this.weaponHolder.remove(this.weaponHolder.children[0]);this.animatedCallbacks=[],this.enemies=[],this.bossSpawnPending=null,this.activeBoss=null,this.pickups=[],this.enemyProjectiles=[],this.playerThrowables=[],this.tellApple=null,this.setScope(!1)}loadLevel(t,e=!1){this._clearWorld(),this.levelIndex=t;const{meta:n,builder:s}=an[t];document.body.className=n.themeClass,this.practiceMode&&document.body.classList.add("pax-active"),this.collision=new Ul,this.particles=new $m(this.worldGroup);const o=s(this.worldGroup,this.collision,this.particles);this.collision.buildNavGrid(1.35),this.animatedCallbacks=o.animated||[],this.pickups=o.pickups||[],this.tellApple=o.tellApple||null,this.enterableBuildings=o.enterableBuildings||[];const r=kl[this.difficultyKey],a=Nl(n.id,this.selectedHeroIds[n.id]);this.activeHero=a;const l=a.mods||{},c=Math.round(r.playerHp*(l.maxHpMult||1));this.player.pos.copy(n.spawnPos),this.player.vel.set(0,0,0),this.player.yaw=n.spawnYaw,this.player.pitch=0,this.player.maxHp=c,this.player.hp=c,this.player.stamina=100,this.player.grounded=!0,this.timeSinceLastDamage=999,this.stats={score:0,shots:0,hits:0,headshots:0,kills:0};for(const p of o.enemySpawns)if(p.isBossWave)this.bossSpawnPending=p;else{const g=new Fl(p.type,p.pos,r.enemyMult,p.options||{});this.worldGroup.add(g.mesh),this.enemies.push(g)}const h=Jm[n.id],d=a.weaponIds?a.weaponIds.map(p=>h.find(g=>g.id===p)).filter(Boolean):h;this.weapons=d.map(p=>{const g=l.weaponOverrides&&l.weaponOverrides[p.id]||{},_=(p.kind==="melee"&&l.meleeFireRateMult?l.meleeFireRateMult:1)*(l.fireRateMult||1)*(g.fireRateMult||1),x=(l.reloadTimeMult||1)*(g.reloadTimeMult||1),m=(p.kind==="melee"&&l.meleeDamageMult?l.meleeDamageMult:1)*(l.damageMult||1)*(g.damageMult||1),S=p.kind==="melee"&&l.meleeRangeBonus?l.meleeRangeBonus:0;return{...p,damage:Math.round(p.damage*m),fireRate:+(p.fireRate*_).toFixed(3),reloadTime:+(p.reloadTime*x).toFixed(3),range:p.range?+(p.range+S).toFixed(2):p.range,mag:p.magSize,curReserve:p.reserve}}),this.weaponMeshes=this.weapons.map(p=>{const g=Qm(p.id);return g.visible=!1,this.weaponHolder.add(g),g});const u=Math.min(this.weapons.length-1,Math.max(0,a.defaultWeaponIdx||0));this.currentWeaponIdx=u,this.reloading=!1,this.fireTimer=0,e||(this.weaponMeshes[u].visible=!0),this._buildWeaponStripUI(),this._updateHud(),this.dom.bossBarWrap.classList.add("hidden")}selectHeroByIndex(t){const e=an[this.levelIndex].meta.id,n=Qe[e];if(!n||t<0||t>=n.length)return;const s=n[t];for(this.selectedHeroIds[e]=s.id,this.activeHero=s,this.dom.heroCardsList.querySelectorAll(".hero-card").forEach((r,a)=>{const l=a===t;r.classList.toggle("active",l),r.setAttribute("aria-checked",l?"true":"false")}),this.dom.heroPreviewName.textContent=s.name,this.dom.heroPreviewBio.textContent=s.bio,this.dom.heroPreviewStrength.textContent=s.strengthDesc;this.heroFigureHolder.children.length>0;)this.heroFigureHolder.remove(this.heroFigureHolder.children[0]);const o=tg(s.id);this.heroFigureHolder.add(o),this.heroFigureHolder.rotation.y=.25,this.heroStagePop=.82}showIntroCard(){this.state="intro",this.setScope(!1),document.pointerLockElement&&document.exitPointerLock();const t=an[this.levelIndex].meta,e=Qe[t.id],n=this.selectedHeroIds[t.id]||e[0].id,s=Math.max(0,e.findIndex(o=>o.id===n));this.dom.titleScreen.classList.add("hidden"),this.dom.endScreen.classList.add("hidden"),this.dom.pauseScreen.classList.add("hidden"),this.dom.hud.classList.add("hidden"),this.dom.crosshair.classList.add("hidden"),this.dom.introCard.classList.remove("hidden"),this.dom.comicAct.textContent=`${t.act} — ${t.subtitle}`,this.dom.comicTitle.textContent=t.title,this.dom.comicQuote.textContent=t.quote,this.dom.heroHistoricalNote&&(t.historicalNote?(this.dom.heroHistoricalNote.textContent=t.historicalNote,this.dom.heroHistoricalNote.classList.remove("hidden")):this.dom.heroHistoricalNote.classList.add("hidden")),this.dom.heroCardsList.innerHTML=e.map((o,r)=>`
      <button type="button" class="hero-card" data-hero-idx="${r}" role="radio" aria-checked="false">
        <div class="hero-card-key">${r+1}</div>
        <div class="hero-card-body">
          <div class="hero-card-name">${o.name}</div>
          <div class="hero-card-bio">${o.bio}</div>
          <div class="hero-card-strength"><span>${o.strengthLabel}</span>${o.strengthDesc}</div>
        </div>
      </button>
    `).join(""),this.dom.heroCardsList.querySelectorAll(".hero-card").forEach((o,r)=>{o.addEventListener("mouseenter",()=>this.selectHeroByIndex(r)),o.addEventListener("focus",()=>this.selectHeroByIndex(r)),o.addEventListener("click",()=>this.selectHeroByIndex(r)),o.addEventListener("dblclick",()=>{this.selectHeroByIndex(r),this.startMission()})}),this.weaponHolder.visible=!1,this.heroStage.visible=!0,this.selectHeroByIndex(s),this.sound.startMusic(t.musicTheme)}_requestLock(){try{const t=this.renderer.domElement.requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}}togglePracticeMode(){this.practiceMode=!this.practiceMode,this.practiceMode&&this.state==="playing"&&(this.usedPracticeThisRun=!0),document.body.classList.toggle("pax-active",this.practiceMode),this.dom.paxBadge&&this.dom.paxBadge.classList.toggle("hidden",!this.practiceMode),this.state==="playing"&&this.toast(this.practiceMode?"Practice mode: they cannot hurt you":"Practice mode off")}startMission(){this.heroStage.visible=!1,this.usedPracticeThisRun=this.practiceMode,this.loadLevel(this.levelIndex,!1),this.state="playing",this.dom.introCard.classList.add("hidden"),this.dom.titleScreen.classList.add("hidden"),this.dom.pauseScreen.classList.add("hidden"),this.dom.endScreen.classList.add("hidden"),this.dom.hud.classList.remove("hidden"),this.dom.crosshair.classList.remove("hidden"),this.weaponHolder.visible=!0;const t=an[this.levelIndex].meta;this.camera.rotation.set(0,t.spawnYaw,0,"YXZ"),this.sound.startMusic(t.musicTheme),this._requestLock(),this.showCallout(`${this.activeHero.name.toUpperCase()} — DRAW!`)}pauseGame(){if(this.state!=="playing")return;this.state="paused",this.mouseDownL=!1,this.mouseDownR=!1,this.setScope(!1),this.dom.pauseScreen.classList.remove("hidden"),this.dom.crosshair.classList.add("hidden");const t=an[this.levelIndex].meta;this.dom.pauseLevelName.textContent=`${t.act} — ${t.title}`,document.pointerLockElement&&document.exitPointerLock()}resumeGame(){this.state="playing",this.dom.pauseScreen.classList.add("hidden"),this.dom.crosshair.classList.remove("hidden"),this._requestLock()}restartLevel(){this.startMission()}returnToTitle(){this.state="title",this.setScope(!1),this.weaponHolder.visible=!1,this.heroStage.visible=!1,this.dom.hud.classList.add("hidden"),this.dom.crosshair.classList.add("hidden"),this.dom.pauseScreen.classList.add("hidden"),this.dom.endScreen.classList.add("hidden"),this.dom.introCard.classList.add("hidden"),this.dom.titleScreen.classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),this.sound.stopMusic(),this.loadLevel(this.levelIndex,!0)}switchWeapon(t){t===this.currentWeaponIdx||t<0||t>=this.weapons.length||(this.setScope(!1),this.reloading=!1,this.weaponMeshes[this.currentWeaponIdx].visible=!1,this.currentWeaponIdx=t,this.weaponMeshes[t].visible=!0,this.recoilOffset=-.18,this._updateHud())}setScope(t){const e=this.weapons[this.currentWeaponIdx],n=t&&e&&e.altMode==="scope"&&!this.reloading&&this.state==="playing";this.scoped=n,n?(this.dom.scopeOverlay.classList.remove("hidden"),this.dom.scopeLabel.textContent=e.scopeLabel||"OPTIC ZOOM",this.dom.crosshair.classList.add("hidden"),this.weaponHolder.visible=!1):(this.dom.scopeOverlay.classList.add("hidden"),this.state==="playing"&&(this.dom.crosshair.classList.remove("hidden"),this.weaponHolder.visible=!0))}handleRightClickDown(){const t=this.weapons[this.currentWeaponIdx];t&&(t.altMode==="scope"?this.setScope(!0):this.tryFire(!0))}startReload(){const t=this.weapons[this.currentWeaponIdx];!t||t.infinite||this.reloading||t.mag>=t.magSize||t.curReserve<=0||(this.setScope(!1),this.reloading=!0,this.reloadTimer=t.reloadTime,this.sound.playReload(),this.toast("RELOADING..."))}tryFire(t){if(this.fireTimer>0||this.reloading)return;const e=this.weapons[this.currentWeaponIdx];if(!e)return;if(!e.infinite&&e.mag<=0){e.curReserve>0?this.startReload():this.toast("OUT OF AMMO!");return}if(e.kind==="melee"){const _=t&&e.altMode==="heavy_slash";this.fireTimer=_?e.fireRate*1.45:e.fireRate,this.slashAnim=1,this.sound.playShot("slash");const x=new w;this.camera.getWorldDirection(x);const m=new w().crossVectors(x,new w(0,1,0)).normalize(),S=this.camera.getWorldPosition(new w);this.particles.spawnSlashArc(S,x,m,e.slashColor);const M=_?e.damage*1.65:e.damage,v=_?e.range+1:e.range;let A=!1;for(const b of this.enemies){if(!b.alive||!b.mesh.visible)continue;const U=new w(b.mesh.position.x,b.mesh.position.y+(b.style==="dog"?.55:1.15),b.mesh.position.z),L=new w().subVectors(U,S);L.length()<=v&&(L.normalize(),L.dot(x)>.35&&this.collision.hasLineOfSight(S,U)&&(A=!0,this._damageEnemy(b,M,_,b.mesh.position.clone().add(new w(0,1.3,0)))))}A&&this._flashHitmarker(_);return}if(e.kind==="throwable"){e.mag--,this.fireTimer=e.fireRate,this.recoilOffset=e.recoil,this.sound.playShot("throw");const _=this.camera.getWorldPosition(new w),x=new w;this.camera.getWorldDirection(x);const m=new f(new Xt(.16,8,8),new oe({color:e.projColor}));m.position.copy(_).addScaledVector(x,.8),this.worldGroup.add(m),this.playerThrowables.push({mesh:m,vel:x.multiplyScalar(22).add(new w(0,6.2,0)),fuse:1.65,damage:e.damage,radius:e.blastRadius}),e.mag===0&&e.curReserve>0&&this.startReload(),this._updateHud();return}let n=1,s=e.pellets,o=this.scoped?e.spread*.12:e.spread,r=e.fireRate;if(t&&e.altMode==="fan"?(r=e.fireRate*.42,o=e.spread*3.5):t&&e.altMode==="double"&&e.mag>=2?(n=2,s=e.pellets*2,o=e.spread*1.35,r=e.fireRate*1.25):t&&e.altMode==="fan_stars"&&(n=Math.min(3,e.mag),s=n,o=.095,r=e.fireRate*1.5),e.mag=Math.max(0,e.mag-n),this.fireTimer=r,this.recoilOffset=e.recoil*(n>1?1.5:1),this.stats.shots++,this.sound.playShot(e.sound),["revolver","shotgun","rifle","musket","smg","sniper"].includes(e.sound)){this.muzzleLight.intensity=e.sound==="smg"?7:10;const x=(this.activeHero&&this.activeHero.mods||{}).soundAlertRadius||34;for(const m of this.enemies){if(!m.alive||m.alert)continue;Math.hypot(m.mesh.position.x-this.player.pos.x,m.mesh.position.z-this.player.pos.z)<=x&&(m.alert=!0,m.style==="dog"&&this.sound.playDogBark())}}this.dom.crosshair.classList.add("spread"),setTimeout(()=>this.dom.crosshair.classList.remove("spread"),95);const l=this.camera.getWorldPosition(new w),c=new w;this.camera.getWorldDirection(c);const h=new w().crossVectors(c,new w(0,1,0)).normalize(),d=l.clone().addScaledVector(c,.75).addScaledVector(h,this.scoped?0:.18).add(new w(0,-.1,0)),u=[];for(const _ of this.enemies)_.alive&&u.push(..._.getHitMeshes());this.tellApple&&this.tellApple.visible&&u.push(this.tellApple);let p=!1,g=!1;for(let _=0;_<s;_++){const x=c.clone();o>0&&(x.x+=(Math.random()-.5)*o*2,x.y+=(Math.random()-.5)*o*2,x.z+=(Math.random()-.5)*o*2,x.normalize());const m=this.collision.raycast(l,x,150),S=m?m.dist:150;this.raycaster.set(l,x),this.raycaster.far=S;const M=this.raycaster.intersectObjects(u,!1);if(M.length>0){const v=M[0];if(this.particles.spawnTracer(d,v.point,e.tracerColor),v.object.userData.isTellApple){this.tellApple.visible=!1,this.particles.spawnImpact(v.point,16765517,22,9),this.sound.playHit(!0),this.stats.score+=500,this.showCallout("APPLE SPLIT! +500"),this._flashHitmarker(!0);continue}const A=v.object.userData.enemy;if(A&&A.alive){const b=v.object.userData.hitZone==="head",U=b?e.damage*e.headMult:e.damage;p=!0,b&&(g=!0),this._damageEnemy(A,U,b,v.point)}}else{const v=m?m.point:l.clone().addScaledVector(x,90);this.particles.spawnTracer(d,v,e.tracerColor),m&&this.particles.spawnImpact(m.point,m.tag==="stone"?14275269:13410664,5,5)}}p&&(this.stats.hits++,this._flashHitmarker(g)),e.mag===0&&e.curReserve>0&&this.startReload(),this._updateHud()}_damageEnemy(t,e,n,s){this.particles.spawnImpact(s,n?16765517:14234662,n?14:9,7);const o=t.takeDamage(e,n);if(this.sound.playHit(n),t.isBoss&&this.activeBoss===t){const r=Math.max(0,t.hp/t.maxHp*100);this.dom.bossBarFill.style.width=`${r}%`}if(o){if(this.stats.kills++,this.stats.score+=t.score+(n?75:0),n?(this.stats.headshots++,this.showCallout(this.levelIndex===2?"BULLSEYE!":"HEADSHOT!")):t.isBoss&&this.showCallout(`${t.name.split("—")[0].trim()} DEFEATED!`),!t.isBoss&&Math.random()<.35){const r=this.player.hp<this.player.maxHp*.65?"health":"ammo",a=t.mesh.position.clone();a.y+=.8;const l=this._spawnRuntimePickup(r,a);this.pickups.push({type:r,pos:a,mesh:l,label:r==="health"?"FIELD TONIC (+30 HP)":"LOOTED AMMO",collected:!1})}this._checkStageProgression()}this._updateHud()}_spawnRuntimePickup(t,e){const n=new $t,s=t==="health",o=new f(s?new W(.24,.28,.62,10):new N(.62,.4,.45),new H({color:s?3066993:15906633,emissive:s?1474627:11760658,emissiveIntensity:.85}));return n.add(o),n.position.copy(e),this.worldGroup.add(n),n}_checkStageProgression(){const t=this.enemies.filter(e=>e.alive).length;if(this.bossSpawnPending&&t<=3){const e=this.bossSpawnPending;this.bossSpawnPending=null;const n=kl[this.difficultyKey],s=new Fl(e.type,e.pos,n.enemyMult);s.alert=!0,this.worldGroup.add(s.mesh),this.enemies.push(s),this.activeBoss=s,this.dom.bossBarWrap.classList.remove("hidden"),this.dom.bossName.textContent=s.name,this.dom.bossBarFill.style.width="100%",this.sound.playBossHorn(),this.showCallout(`SHOWDOWN: ${s.name.split("—")[0].trim()}`),this.particles.spawnSmoke(e.pos.clone().add(new w(0,1.5,0)),16764006,12,1)}!this.bossSpawnPending&&t===0&&(this.dom.bossBarWrap.classList.add("hidden"),setTimeout(()=>{this.state==="playing"&&this._showEndScreen(!0)},950))}_damagePlayer(t){if(this.state!=="playing")return;if(this.practiceMode){this.usedPracticeThisRun=!0;return}const e=this.activeHero&&this.activeHero.mods||{},n=t*(e.damageTakenMult||1);this.timeSinceLastDamage=0,this.player.hp=Math.max(0,this.player.hp-n),this.sound.playHurt(),this.dom.damageOverlay.style.opacity="0.9",setTimeout(()=>{const s=this.player.hp<30?.35:0;this.dom.damageOverlay.style.opacity=String(s)},150),this._updateHud(),this.player.hp<=0&&this._showEndScreen(!1)}_showEndScreen(t){this.state="ended",this.setScope(!1),document.pointerLockElement&&document.exitPointerLock(),this.dom.hud.classList.add("hidden"),this.dom.crosshair.classList.add("hidden"),this.dom.endScreen.classList.remove("hidden");const e=an[this.levelIndex].meta,n=this.stats.shots>0?Math.round(this.stats.hits/this.stats.shots*100):100,s=this.practiceMode||this.usedPracticeThisRun;if(this.dom.endPracticeNote&&this.dom.endPracticeNote.classList.toggle("hidden",!s),t){const o=this.levelIndex===an.length-1,r=o?"ALL SIX HORIZONS CONQUERED":`${e.act} COMPLETE`;this.dom.endEyebrow.textContent=s?`${r} • PRACTICE MODE`:r,this.dom.endTitle.textContent=o?"LEGEND OF SIX ERAS":"HORIZON CLEARED",this.dom.endSummary.textContent=o?"From Red Gulch and Kyoto Mist to Rütli Valley, the Aegean Isle, the Fjord of the North, and the beaches of Normandy — your legend endures across six eras!":`${e.title} is free. Ready your gear for the next horizon!`,this.dom.btnNextLevel.classList.remove("hidden"),this.dom.btnNextLevel.textContent=o?"REPLAY FROM ACT I ▶":`PROCEED TO ACT ${this.levelIndex+2} ▶`}else this.dom.endEyebrow.textContent=`${e.act} — FALLEN`,this.dom.endTitle.textContent="OUTGUNNED",this.dom.endSummary.textContent="Dust yourself off, steady your aim, and ride back into the fray.",this.dom.btnNextLevel.classList.add("hidden");this.dom.endStats.innerHTML=`
      <div class="stat-card"><div class="stat-val">${e.currency}${this.stats.score}</div><div class="stat-lbl">BOUNTY</div></div>
      <div class="stat-card"><div class="stat-val">${this.stats.headshots}</div><div class="stat-lbl">CRIT SHOTS</div></div>
      <div class="stat-card"><div class="stat-val">${n}%</div><div class="stat-lbl">ACCURACY</div></div>
    `}_buildWeaponStripUI(){this.dom.weaponStrip.innerHTML=this.weapons.map((t,e)=>`
      <div class="w-slot ${e===this.currentWeaponIdx?"active":""}" data-slot="${e}">
        <div class="w-slot-key">[${e+1}]</div>
        <div class="w-slot-name">${t.shortName}</div>
      </div>
    `).join("")}_updateHud(){const t=an[this.levelIndex].meta,e=this.enemies.filter(s=>s.alive).length+(this.bossSpawnPending?1:0);this.dom.eraBadge.textContent=`${t.act} • ${t.title}`,this.dom.objective.textContent=t.objective,this.dom.enemyIcon.textContent=t.enemyIcon,this.dom.enemiesLeft.textContent=String(e),this.dom.scoreVal.textContent=`${t.currency}${this.stats.score}`,this.dom.heroName.textContent=(this.activeHero?this.activeHero.name:t.heroName).toUpperCase(),this.dom.heroPerk&&this.activeHero&&(this.dom.heroPerk.textContent=`${this.activeHero.strengthLabel} • ${this.activeHero.hudTag}`),this.dom.hpText.textContent=`${Math.ceil(this.player.hp)} / ${this.player.maxHp}`,this.dom.hpBar.style.width=`${this.player.hp/this.player.maxHp*100}%`,this.dom.staminaBar.style.width=`${this.player.stamina}%`;const n=this.weapons[this.currentWeaponIdx];if(n)if(this.dom.weaponName.textContent=n.name,this.dom.altHint.textContent=this.reloading?"RELOADING...":n.altHint,this.dom.ammoMag.textContent=n.infinite?"∞":String(n.mag),this.dom.ammoReserve.textContent=n.infinite?"∞":String(n.curReserve),n.infinite)this.dom.ammoPips.innerHTML="";else{const s=Math.min(n.magSize,10);let o="";for(let r=0;r<s;r++)o+=`<span class="ammo-pip ${r<n.mag?"":"spent"}"></span>`;this.dom.ammoPips.innerHTML=o}document.querySelectorAll(".w-slot").forEach((s,o)=>{s.classList.toggle("active",o===this.currentWeaponIdx)})}_flashHitmarker(t){this.dom.hitmarker.classList.remove("hidden"),this.dom.hitmarker.classList.toggle("crit",t),this.dom.hitFlash.style.opacity=t?"0.9":"0.45",clearTimeout(this._hmTimeout),this._hmTimeout=setTimeout(()=>{this.dom.hitmarker.classList.add("hidden"),this.dom.hitFlash.style.opacity="0"},115)}showCallout(t){this.dom.callout.textContent=t,this.dom.callout.classList.remove("hidden"),clearTimeout(this._calloutTimer),this._calloutTimer=setTimeout(()=>{this.dom.callout.classList.add("hidden")},2200)}toast(t){const e=document.createElement("div");e.className="toast-item",e.textContent=t,this.dom.pickupToast.appendChild(e),setTimeout(()=>e.remove(),1950)}_updatePlayer(t){const e=this.weapons[this.currentWeaponIdx],n=this.scoped&&e&&e.scopeFov?e.scopeFov:this.baseFov;Math.abs(this.camera.fov-n)>.1&&(this.camera.fov+=(n-this.camera.fov)*Math.min(1,t*14),this.camera.updateProjectionMatrix());const s=this.activeHero&&this.activeHero.mods||{},o=s.moveSpeedMult||1,r=(this.keys.KeyW||this.keys.ArrowUp?1:0)-(this.keys.KeyS||this.keys.ArrowDown?1:0),a=(this.keys.KeyD||this.keys.ArrowRight?1:0)-(this.keys.KeyA||this.keys.ArrowLeft?1:0),l=(this.keys.ShiftLeft||this.keys.ShiftRight)&&r>0&&!this.scoped&&this.player.stamina>6,c=(this.scoped?4.2:l?11.4:7.6)*o;this.timeSinceLastDamage+=t;let h=!1;s.regenRate&&this.player.hp>0&&this.player.hp<this.player.maxHp&&this.timeSinceLastDamage>=(s.regenDelay||4)&&(h=!0,this.player.hp=Math.min(this.player.maxHp,this.player.hp+s.regenRate*t),this.dom.hpText.textContent=`${Math.ceil(this.player.hp)} / ${this.player.maxHp}`,this.dom.hpBar.style.width=`${this.player.hp/this.player.maxHp*100}%`,this.player.hp>=30&&(this.dom.damageOverlay.style.opacity="0")),this.dom.heroPerk&&this.dom.heroPerk.classList.toggle("regen-active",h),l?this.player.stamina=Math.max(0,this.player.stamina-t*26):this.player.stamina=Math.min(100,this.player.stamina+t*20),this.dom.staminaBar.style.width=`${this.player.stamina}%`;const d=new w(-Math.sin(this.player.yaw),0,-Math.cos(this.player.yaw)),u=new w(Math.cos(this.player.yaw),0,-Math.sin(this.player.yaw)),p=new w().addScaledVector(d,r).addScaledVector(u,a),g=p.lengthSq()>.01;g&&p.normalize().multiplyScalar(c),this.collision.moveHorizontal(this.player.pos,p.x*t,p.z*t,.52,this.player.pos.y),this.keys.Space&&this.player.grounded&&(this.player.vel.y=7.4,this.player.grounded=!1),this.player.vel.y-=20.5*t,this.player.pos.y+=this.player.vel.y*t;const _=this.collision.getFloorHeight(this.player.pos.x,this.player.pos.z,this.player.pos.y);this.player.pos.y<=_&&(this.player.pos.y=_,this.player.vel.y=0,this.player.grounded=!0),g&&this.player.grounded&&(this.player.bobPhase+=t*(l?12.5:8.5));const x=g&&this.player.grounded&&!this.scoped?Math.sin(this.player.bobPhase)*.055:0;if(this.camera.position.set(this.player.pos.x,this.player.pos.y+1.68+x,this.player.pos.z),this.camera.rotation.order="YXZ",this.camera.rotation.z=0,this.camera.rotation.y=this.player.yaw,this.camera.rotation.x=this.player.pitch+this.recoilOffset*.22,this.fireTimer>0&&(this.fireTimer-=t),this.reloading&&(this.reloadTimer-=t,this.reloadTimer<=0)){this.reloading=!1;const S=e.magSize-e.mag,M=Math.min(S,e.curReserve);e.mag+=M,e.curReserve-=M,this._updateHud()}this.mouseDownL&&this.fireTimer<=0&&!this.reloading&&e&&(e.auto||e.autoFire||e.fireRate<=.4)&&this.tryFire(!1),this.recoilOffset*=Math.max(0,1-t*13),this.slashAnim>0&&(this.slashAnim=Math.max(0,this.slashAnim-t*4.5)),this.muzzleLight.intensity>0&&(this.muzzleLight.intensity=Math.max(0,this.muzzleLight.intensity-t*85));const m=this.weaponMeshes[this.currentWeaponIdx];if(m&&m.visible){const S=m.userData.basePos,M=m.userData.baseRot,v=g?Math.cos(this.player.bobPhase*.5)*.014:0,A=g?Math.abs(Math.sin(this.player.bobPhase*.5))*.014:0;m.position.set(S.x+v-this.slashAnim*.35,S.y-A-(this.reloading?.14:0),S.z+this.recoilOffset*.45),m.rotation.set(M.x+this.recoilOffset*1.15-(this.reloading?.65:0)+this.slashAnim*1.1,M.y+this.slashAnim*1.25,M.z+this.slashAnim*.85);const b=m.getObjectByName("spark");if(b){const L=.85+Math.sin(this.elapsed*28)*.35;b.scale.setScalar(L)}const U=m.getObjectByName("spinner");U&&(U.rotation.y+=t*4.5)}for(const S of this.pickups){if(S.collected)continue;if(S.mesh.rotation.y+=t*2.1,S.mesh.position.y=S.pos.y+Math.sin(this.elapsed*3+S.pos.x)*.16,Math.hypot(S.pos.x-this.player.pos.x,S.pos.z-this.player.pos.z)<2.1){if(S.type==="health"&&this.player.hp>=this.player.maxHp)continue;if(S.collected=!0,S.mesh.visible=!1,this.sound.playPickup(),S.type==="health")this.player.hp=Math.min(this.player.maxHp,this.player.hp+35);else for(const v of this.weapons)v.infinite||(v.curReserve=Math.min(v.reserve*2,v.curReserve+Math.ceil(v.reserve*.45)));this.toast(S.label),this._updateHud()}}}_updateProjectiles(t){for(let n=this.playerThrowables.length-1;n>=0;n--){const s=this.playerThrowables[n];s.fuse-=t,s.vel.y-=17.5*t,s.mesh.position.addScaledVector(s.vel,t),s.mesh.rotation.x+=t*9,s.mesh.rotation.z+=t*7;const o=this.collision.getFloorHeight(s.mesh.position.x,s.mesh.position.z,s.mesh.position.y);if(s.mesh.position.y<=o+.16&&(s.mesh.position.y=o+.16,s.vel.y*=-.4,s.vel.x*=.65,s.vel.z*=.65),s.fuse<=0){this.particles.spawnExplosion(s.mesh.position,s.radius),this.sound.playExplosion();for(const r of this.enemies){if(!r.alive)continue;const a=r.mesh.position.distanceTo(s.mesh.position);if(a<s.radius){const l=1-a/s.radius*.55;this._damageEnemy(r,s.damage*l,!1,r.mesh.position.clone().add(new w(0,1.2,0)))}}this.worldGroup.remove(s.mesh),this.playerThrowables.splice(n,1)}}const e=new w(this.player.pos.x,this.player.pos.y+1.2,this.player.pos.z);for(let n=this.enemyProjectiles.length-1;n>=0;n--){const s=this.enemyProjectiles[n];s.life-=t;const o=s.vel.clone().multiplyScalar(t),r=o.length(),a=o.clone().normalize(),l=this.collision.raycast(s.mesh.position,a,r+.15);if(l||s.life<=0){l&&this.particles.spawnImpact(l.point,16765562,4,4),this.worldGroup.remove(s.mesh),this.enemyProjectiles.splice(n,1);continue}s.mesh.position.add(o),s.mesh.position.distanceTo(e)<.85&&(this._damagePlayer(s.damage),this.worldGroup.remove(s.mesh),this.enemyProjectiles.splice(n,1))}}_updateEnemies(t){const n=(this.activeHero&&this.activeHero.mods||{}).stealthMult||1,s={onDogBark:()=>{this.sound.playDogBark()},onMeleeHitPlayer:o=>{this._damagePlayer(o)},onEnemyFire:(o,r,a)=>{const l=new w().subVectors(a,r).normalize(),c=o.isBoss?.04:.07;l.x+=(Math.random()-.5)*c,l.y+=(Math.random()-.5)*c*.6,l.z+=(Math.random()-.5)*c,l.normalize();const h=new f(new Xt(.11,6,6),new oe({color:o.projectileColor}));h.position.copy(r),this.worldGroup.add(h),this.particles.spawnTracer(r,r.clone().addScaledVector(l,3.5),o.projectileColor,.08),this.enemyProjectiles.push({mesh:h,vel:l.multiplyScalar(o.isBoss?38:30),damage:o.damage,life:2.8})}};for(const o of this.enemies)o.update(t,this.player.pos,this.collision,s,n);this._resolveLivingSeparation(),this.bossSpawnPending&&this.player.pos.z<-12&&this._checkStageProgression()}_resolveLivingSeparation(){const t=this.enemies.filter(n=>n.alive&&n.mesh.visible),e=.52;for(const n of t){if(Math.abs(n.mesh.position.y-this.player.pos.y)>1.7)continue;const s=this.player.pos.x-n.mesh.position.x,o=this.player.pos.z-n.mesh.position.z,r=e+n.radius,a=s*s+o*o;if(a<r*r){const l=Math.sqrt(a)||.001,c=(r-l)*.52,h=s/l,d=o/l;this.collision.moveHorizontal(this.player.pos,h*c,d*c,e,this.player.pos.y),n.speed>0&&this.collision.moveHorizontal(n.mesh.position,-h*c,-d*c,n.radius,n.mesh.position.y)}}for(let n=0;n<t.length;n++){const s=t[n];for(let o=n+1;o<t.length;o++){const r=t[o];if(Math.abs(s.mesh.position.y-r.mesh.position.y)>1.7)continue;const a=s.mesh.position.x-r.mesh.position.x,l=s.mesh.position.z-r.mesh.position.z,c=s.radius+r.radius,h=a*a+l*l;if(h<c*c){const d=Math.sqrt(h)||.001,u=(c-d)*.5,p=a/d,g=l/d;s.speed>0&&this.collision.moveHorizontal(s.mesh.position,p*u,g*u,s.radius,s.mesh.position.y),r.speed>0&&this.collision.moveHorizontal(r.mesh.position,-p*u,-g*u,r.radius,r.mesh.position.y)}}}}_loop(){requestAnimationFrame(()=>this._loop());const t=Math.min(.05,this.clock.getDelta());this.elapsed+=t;for(const e of this.animatedCallbacks)e(this.elapsed,t);if(this.particles&&this.particles.update(t,this.elapsed),this.state==="playing")this._updatePlayer(t),this._updateEnemies(t),this._updateProjectiles(t);else if(this.state==="title"||this.state==="intro"){const e=an[this.levelIndex].meta.cameraPreview,n=this.elapsed*e.speed;if(this.camera.position.set(e.center.x+Math.sin(n)*e.radius,e.height+Math.sin(this.elapsed*.45)*1.8,e.center.z+Math.cos(n)*e.radius),this.camera.lookAt(e.center),this.weaponHolder.visible=!1,this.state==="intro"&&this.heroStage.visible){const r=Math.tan(zh.degToRad(this.camera.fov*.5))*3.25*this.camera.aspect,a=window.innerWidth<=860,l=a?0:-r*.45,c=a?.15:-.96;this.heroStage.position.set(l,c,-3.25),this.heroStagePop+=(1-this.heroStagePop)*Math.min(1,t*10);const h=(a?.72:.96)*this.heroStagePop;this.heroFigureHolder.scale.setScalar(h),this.heroFigureHolder.rotation.y+=t*.55}}this.composer.render()}}window.addEventListener("DOMContentLoaded",()=>{window.__OUTLAWS_GAME__=new Cg});
