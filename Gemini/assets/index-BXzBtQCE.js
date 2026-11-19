(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bo="172",nc=0,$o=1,ic=2,ol=1,al=2,xn=3,Bn=0,Ue=1,be=2,Sn=0,vi=1,Ur=2,Zo=3,jo=4,sc=5,Zn=100,rc=101,oc=102,ac=103,lc=104,cc=200,hc=201,uc=202,dc=203,Nr=204,Fr=205,fc=206,pc=207,mc=208,gc=209,_c=210,vc=211,xc=212,Mc=213,yc=214,Or=0,Br=1,zr=2,wi=3,kr=4,Hr=5,Gr=6,Vr=7,ll=0,Sc=1,wc=2,Fn=0,cl=1,hl=2,ul=3,To=4,Ec=5,dl=6,fl=7,pl=300,Ei=301,bi=302,Wr=303,Xr=304,Ws=306,$i=1e3,nn=1001,qr=1002,rn=1003,bc=1004,rs=1005,ln=1006,Js=1007,Kn=1008,Tn=1009,ml=1010,gl=1011,Zi=1012,Ao=1013,Jn=1014,Mn=1015,wn=1016,Ro=1017,Co=1018,Ti=1020,_l=35902,vl=1021,xl=1022,sn=1023,Ml=1024,yl=1025,xi=1026,Ai=1027,Sl=1028,Po=1029,wl=1030,Lo=1031,Io=1033,Ls=33776,Is=33777,Ds=33778,Us=33779,Yr=35840,$r=35841,Zr=35842,jr=35843,Kr=36196,Jr=37492,Qr=37496,to=37808,eo=37809,no=37810,io=37811,so=37812,ro=37813,oo=37814,ao=37815,lo=37816,co=37817,ho=37818,uo=37819,fo=37820,po=37821,Ns=36492,mo=36494,go=36495,El=36283,_o=36284,vo=36285,xo=36286,Tc=3200,Ac=3201,bl=0,Rc=1,Nn="",Ge="srgb",Ri="srgb-linear",zs="linear",ae="srgb",ni=7680,Ko=519,Cc=512,Pc=513,Lc=514,Tl=515,Ic=516,Dc=517,Uc=518,Nc=519,Jo=35044,Qo="300 es",yn=2e3,ks=2001;class Ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qs=Math.PI/180,Mo=180/Math.PI;function Ki(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[s&255]+Pe[s>>8&255]+Pe[s>>16&255]+Pe[s>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Kt(s,t,e){return Math.max(t,Math.min(e,s))}function Fc(s,t){return(s%t+t)%t}function tr(s,t,e){return(1-e)*s+e*t}function Bi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Oe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,i,r,o,a,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],y=i[4],x=i[7],C=i[2],A=i[5],P=i[8];return r[0]=o*_+a*S+l*C,r[3]=o*m+a*y+l*A,r[6]=o*p+a*x+l*P,r[1]=c*_+h*S+u*C,r[4]=c*m+h*y+u*A,r[7]=c*p+h*x+u*P,r[2]=d*_+f*S+g*C,r[5]=d*m+f*y+g*A,r[8]=d*p+f*x+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(er.makeScale(t,e)),this}rotate(t){return this.premultiply(er.makeRotation(-t)),this}translate(t,e){return this.premultiply(er.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const er=new $t;function Al(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Hs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Oc(){const s=Hs("canvas");return s.style.display="block",s}const ta={};function gi(s){s in ta||(ta[s]=!0,console.warn(s))}function Bc(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function zc(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kc(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ea=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),na=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hc(){const s={enabled:!0,workingColorSpace:Ri,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ae&&(i.r=En(i.r),i.g=En(i.g),i.b=En(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(i.r=Mi(i.r),i.g=Mi(i.g),i.b=Mi(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Nn?zs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ri]:{primaries:t,whitePoint:n,transfer:zs,toXYZ:ea,fromXYZ:na,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:ea,fromXYZ:na,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),s}const ne=Hc();function En(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Mi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ii;class Gc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ii===void 0&&(ii=Hs("canvas")),ii.width=t.width,ii.height=t.height;const n=ii.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Hs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=En(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(En(e[n]/255)*255):e[n]=En(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vc=0;class Rl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=Ki(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(nr(i[o].image)):r.push(nr(i[o]))}else r=nr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function nr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Gc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wc=0;class Ne extends Ii{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=nn,i=nn,r=ln,o=Kn,a=sn,l=Tn,c=Ne.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=Ki(),this.name="",this.source=new Rl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $i:t.x=t.x-Math.floor(t.x);break;case nn:t.x=t.x<0?0:1;break;case qr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $i:t.y=t.y-Math.floor(t.y);break;case nn:t.y=t.y<0?0:1;break;case qr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=pl;Ne.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,i=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(f+1)/2,C=(p+1)/2,A=(h+d)/4,P=(u+_)/4,D=(g+m)/4;return y>x&&y>C?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=P/n):x>C?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=D/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=P/r,i=D/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xc extends Ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ne(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Rl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends Xc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Cl extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qc extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const C=Math.sqrt(y),A=Math.atan2(C,p*S);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const x=a*S;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,n=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ia.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ia.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ir.copy(this).projectOnVector(t),this.sub(ir)}reflect(t){return this.sub(ir.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ir=new b,ia=new Ji;class Qi{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Je):Je.fromBufferAttribute(r,o),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),os.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),os.copy(n.boundingBox)),os.applyMatrix4(t.matrixWorld),this.union(os)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zi),as.subVectors(this.max,zi),si.subVectors(t.a,zi),ri.subVectors(t.b,zi),oi.subVectors(t.c,zi),Cn.subVectors(ri,si),Pn.subVectors(oi,ri),Hn.subVectors(si,oi);let e=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-Hn.z,Hn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,Hn.z,0,-Hn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-Hn.y,Hn.x,0];return!sr(e,si,ri,oi,as)||(e=[1,0,0,0,1,0,0,0,1],!sr(e,si,ri,oi,as))?!1:(ls.crossVectors(Cn,Pn),e=[ls.x,ls.y,ls.z],sr(e,si,ri,oi,as))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fn=[new b,new b,new b,new b,new b,new b,new b,new b],Je=new b,os=new Qi,si=new b,ri=new b,oi=new b,Cn=new b,Pn=new b,Hn=new b,zi=new b,as=new b,ls=new b,Gn=new b;function sr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Gn.fromArray(s,r);const a=i.x*Math.abs(Gn.x)+i.y*Math.abs(Gn.y)+i.z*Math.abs(Gn.z),l=t.dot(Gn),c=e.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Yc=new Qi,ki=new b,rr=new b;class ts{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yc.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ki.subVectors(t,this.center);const e=ki.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ki,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ki.copy(t.center).add(rr)),this.expandByPoint(ki.copy(t.center).sub(rr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new b,or=new b,cs=new b,Ln=new b,ar=new b,hs=new b,lr=new b;class Xs{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){or.copy(t).add(e).multiplyScalar(.5),cs.copy(e).sub(t).normalize(),Ln.copy(this.origin).sub(or);const r=t.distanceTo(e)*.5,o=-this.direction.dot(cs),a=Ln.dot(this.direction),l=-Ln.dot(cs),c=Ln.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(or).addScaledVector(cs,d),f}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),i=pn.dot(pn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,i,r){ar.subVectors(e,t),hs.subVectors(n,t),lr.crossVectors(ar,hs);let o=this.direction.dot(lr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,t);const l=a*this.direction.dot(hs.crossVectors(Ln,hs));if(l<0)return null;const c=a*this.direction.dot(ar.cross(Ln));if(c<0||l+c>o)return null;const h=-a*Ln.dot(lr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,g,_,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ai.setFromMatrixColumn(t,0).length(),r=1/ai.setFromMatrixColumn(t,1).length(),o=1/ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($c,t,Zc)}lookAt(t,e,n){const i=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),In.crossVectors(n,ke),In.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),In.crossVectors(n,ke)),In.normalize(),us.crossVectors(ke,In),i[0]=In.x,i[4]=us.x,i[8]=ke.x,i[1]=In.y,i[5]=us.y,i[9]=ke.y,i[2]=In.z,i[6]=us.z,i[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],y=n[7],x=n[11],C=n[15],A=i[0],P=i[4],D=i[8],E=i[12],M=i[1],U=i[5],V=i[9],G=i[13],et=i[2],$=i[6],W=i[10],J=i[14],H=i[3],st=i[7],dt=i[11],Et=i[15];return r[0]=o*A+a*M+l*et+c*H,r[4]=o*P+a*U+l*$+c*st,r[8]=o*D+a*V+l*W+c*dt,r[12]=o*E+a*G+l*J+c*Et,r[1]=h*A+u*M+d*et+f*H,r[5]=h*P+u*U+d*$+f*st,r[9]=h*D+u*V+d*W+f*dt,r[13]=h*E+u*G+d*J+f*Et,r[2]=g*A+_*M+m*et+p*H,r[6]=g*P+_*U+m*$+p*st,r[10]=g*D+_*V+m*W+p*dt,r[14]=g*E+_*G+m*J+p*Et,r[3]=S*A+y*M+x*et+C*H,r[7]=S*P+y*U+x*$+C*st,r[11]=S*D+y*V+x*W+C*dt,r[15]=S*E+y*G+x*J+C*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,y=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,C=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,A=e*S+n*y+i*x+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return t[0]=S*P,t[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*P,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*P,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*P,t[4]=y*P,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*P,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*P,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*f+e*l*f)*P,t[8]=x*P,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*P,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*P,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*P,t[12]=C*P,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*P,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*P,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,S=l*c,y=l*h,x=l*u,C=n.x,A=n.y,P=n.z;return i[0]=(1-(_+p))*C,i[1]=(f+x)*C,i[2]=(g-y)*C,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(d+p))*A,i[6]=(m+S)*A,i[7]=0,i[8]=(g+y)*P,i[9]=(m-S)*P,i[10]=(1-(d+_))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ai.set(i[0],i[1],i[2]).length();const o=ai.set(i[4],i[5],i[6]).length(),a=ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Qe.copy(this);const c=1/r,h=1/o,u=1/a;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=u,Qe.elements[9]*=u,Qe.elements[10]*=u,e.setFromRotationMatrix(Qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=yn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===yn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ks)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=yn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,f=(n+i)*h;let g,_;if(a===yn)g=(o+r)*u,_=-2*u;else if(a===ks)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ai=new b,Qe=new ue,$c=new b(0,0,0),Zc=new b(1,1,1),In=new b,us=new b,ke=new b,sa=new ue,ra=new Ji;class hn{constructor(t=0,e=0,n=0,i=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ra.setFromEuler(this),this.setFromQuaternion(ra,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class Do{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jc=0;const oa=new b,li=new Ji,mn=new ue,ds=new b,Hi=new b,Kc=new b,Jc=new Ji,aa=new b(1,0,0),la=new b(0,1,0),ca=new b(0,0,1),ha={type:"added"},Qc={type:"removed"},ci={type:"childadded",child:null},cr={type:"childremoved",child:null};class Me extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new b,e=new hn,n=new Ji,i=new b(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new $t}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Do,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.multiply(li),this}rotateOnWorldAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.premultiply(li),this}rotateX(t){return this.rotateOnAxis(aa,t)}rotateY(t){return this.rotateOnAxis(la,t)}rotateZ(t){return this.rotateOnAxis(ca,t)}translateOnAxis(t,e){return oa.copy(t).applyQuaternion(this.quaternion),this.position.add(oa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(aa,t)}translateY(t){return this.translateOnAxis(la,t)}translateZ(t){return this.translateOnAxis(ca,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ds.copy(t):ds.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Hi,ds,this.up):mn.lookAt(ds,Hi,this.up),this.quaternion.setFromRotationMatrix(mn),i&&(mn.extractRotation(i.matrixWorld),li.setFromRotationMatrix(mn),this.quaternion.premultiply(li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ha),ci.child=t,this.dispatchEvent(ci),ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qc),cr.child=t,this.dispatchEvent(cr),cr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ha),ci.child=t,this.dispatchEvent(ci),ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,t,Kc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,Jc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Me.DEFAULT_UP=new b(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new b,gn=new b,hr=new b,_n=new b,hi=new b,ui=new b,ua=new b,ur=new b,dr=new b,fr=new b,pr=new le,mr=new le,gr=new le;class en{constructor(t=new b,e=new b,n=new b){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),tn.subVectors(t,e),i.cross(tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){tn.subVectors(i,e),gn.subVectors(n,e),hr.subVectors(t,e);const o=tn.dot(tn),a=tn.dot(gn),l=tn.dot(hr),c=gn.dot(gn),h=gn.dot(hr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_n.x),l.addScaledVector(o,_n.y),l.addScaledVector(a,_n.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return pr.setScalar(0),mr.setScalar(0),gr.setScalar(0),pr.fromBufferAttribute(t,e),mr.fromBufferAttribute(t,n),gr.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(pr,r.x),o.addScaledVector(mr,r.y),o.addScaledVector(gr,r.z),o}static isFrontFacing(t,e,n,i){return tn.subVectors(n,e),gn.subVectors(t,e),tn.cross(gn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),tn.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return en.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return en.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return en.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return en.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return en.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;hi.subVectors(i,n),ui.subVectors(r,n),ur.subVectors(t,n);const l=hi.dot(ur),c=ui.dot(ur);if(l<=0&&c<=0)return e.copy(n);dr.subVectors(t,i);const h=hi.dot(dr),u=ui.dot(dr);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(hi,o);fr.subVectors(t,r);const f=hi.dot(fr),g=ui.dot(fr);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ui,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ua.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(ua,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(hi,o).addScaledVector(ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},fs={h:0,s:0,l:0};function _r(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=Fc(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=_r(o,r,t+1/3),this.g=_r(o,r,t),this.b=_r(o,r,t-1/3)}return ne.toWorkingColorSpace(this,i),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){const n=Pl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return ne.fromWorkingColorSpace(Le.copy(this),t),Math.round(Kt(Le.r*255,0,255))*65536+Math.round(Kt(Le.g*255,0,255))*256+Math.round(Kt(Le.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,i=Le.g,r=Le.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Ge){ne.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,i=Le.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(fs);const n=tr(Dn.h,fs.h,e),i=tr(Dn.s,fs.s,e),r=tr(Dn.l,fs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new Bt;Bt.NAMES=Pl;let th=0;class Qn extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=vi,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nr,this.blendDst=Fr,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ko,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nr&&(n.blendSrc=this.blendSrc),this.blendDst!==Fr&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ko&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class me extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new b,ps=new Mt;class je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jo,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ps.fromBufferAttribute(this,e),ps.applyMatrix3(t),this.setXY(e,ps.x,ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jo&&(t.usage=this.usage),t}}class Ll extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Il extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ce extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let eh=0;const Ze=new ue,vr=new Me,di=new b,He=new Qi,Gi=new Qi,Ee=new b;class ye extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Al(t)?Il:Ll)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return vr.lookAt(t),vr.updateMatrix(),this.applyMatrix4(vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Gi.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(He.min,Gi.min),He.expandByPoint(Ee),Ee.addVectors(He.max,Gi.max),He.expandByPoint(Ee)):(He.expandByPoint(Gi.min),He.expandByPoint(Gi.max))}He.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ee.fromBufferAttribute(a,c),l&&(di.fromBufferAttribute(t,c),Ee.add(di)),i=Math.max(i,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new b,l[D]=new b;const c=new b,h=new b,u=new b,d=new Mt,f=new Mt,g=new Mt,_=new b,m=new b;function p(D,E,M){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(U),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(U),a[D].add(_),a[E].add(_),a[M].add(_),l[D].add(m),l[E].add(m),l[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,E=S.length;D<E;++D){const M=S[D],U=M.start,V=M.count;for(let G=U,et=U+V;G<et;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const y=new b,x=new b,C=new b,A=new b;function P(D){C.fromBufferAttribute(i,D),A.copy(C);const E=a[D];y.copy(E),y.sub(C.multiplyScalar(C.dot(E))).normalize(),x.crossVectors(A,E);const U=x.dot(l[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,U)}for(let D=0,E=S.length;D<E;++D){const M=S[D],U=M.start,V=M.count;for(let G=U,et=U+V;G<et;G+=3)P(t.getX(G+0)),P(t.getX(G+1)),P(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new b,r=new b,o=new b,a=new b,l=new b,c=new b,h=new b,u=new b;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new je(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const da=new ue,Vn=new Xs,ms=new ts,fa=new b,gs=new b,_s=new b,vs=new b,xr=new b,xs=new b,pa=new b,Ms=new b;class R extends Me{constructor(t=new ye,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){xs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(xr.fromBufferAttribute(u,t),o?xs.addScaledVector(xr,h):xs.addScaledVector(xr.sub(e),h))}e.add(xs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(r),Vn.copy(t.ray).recast(t.near),!(ms.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(ms,fa)===null||Vn.origin.distanceToSquared(fa)>(t.far-t.near)**2))&&(da.copy(r).invert(),Vn.copy(t.ray).applyMatrix4(da),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,C=y;x<C;x+=3){const A=a.getX(x),P=a.getX(x+1),D=a.getX(x+2);i=ys(this,p,t,n,c,h,u,A,P,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=ys(this,o,t,n,c,h,u,S,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,C=y;x<C;x+=3){const A=x,P=x+1,D=x+2;i=ys(this,p,t,n,c,h,u,A,P,D),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=m,y=m+1,x=m+2;i=ys(this,o,t,n,c,h,u,S,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function nh(s,t,e,n,i,r,o,a){let l;if(t.side===Ue?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Bn,a),l===null)return null;Ms.copy(a),Ms.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ms);return c<e.near||c>e.far?null:{distance:c,point:Ms.clone(),object:s}}function ys(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,gs),s.getVertexPosition(l,_s),s.getVertexPosition(c,vs);const h=nh(s,t,e,n,gs,_s,vs,pa);if(h){const u=new b;en.getBarycoord(pa,gs,_s,vs,u),i&&(h.uv=en.getInterpolatedAttribute(i,a,l,c,u,new Mt)),r&&(h.uv1=en.getInterpolatedAttribute(r,a,l,c,u,new Mt)),o&&(h.normal=en.getInterpolatedAttribute(o,a,l,c,u,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new b,materialIndex:0};en.getNormal(gs,_s,vs,d.normal),h.face=d,h.barycoord=u}return h}class rt extends ye{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(u,2));function g(_,m,p,S,y,x,C,A,P,D,E){const M=x/P,U=C/D,V=x/2,G=C/2,et=A/2,$=P+1,W=D+1;let J=0,H=0;const st=new b;for(let dt=0;dt<W;dt++){const Et=dt*U-G;for(let kt=0;kt<$;kt++){const Yt=kt*M-V;st[_]=Yt*S,st[m]=Et*y,st[p]=et,c.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[p]=A>0?1:-1,h.push(st.x,st.y,st.z),u.push(kt/P),u.push(1-dt/D),J+=1}}for(let dt=0;dt<D;dt++)for(let Et=0;Et<P;Et++){const kt=d+Et+$*dt,Yt=d+Et+$*(dt+1),Q=d+(Et+1)+$*(dt+1),ct=d+(Et+1)+$*dt;l.push(kt,Yt,ct),l.push(Yt,Q,ct),H+=6}a.addGroup(f,H,E),f+=H,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ci(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function De(s){const t={};for(let e=0;e<s.length;e++){const n=Ci(s[e]);for(const i in n)t[i]=n[i]}return t}function ih(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Dl(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const ji={clone:Ci,merge:De};var sh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Te extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sh,this.fragmentShader=rh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ci(t.uniforms),this.uniformsGroups=ih(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ul extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Un=new b,ma=new Mt,ga=new Mt;class Ve extends Ul{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Mo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mo*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,ma,ga),e.subVectors(ga,ma)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fi=-90,pi=1;class oh extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ve(fi,pi,t,e);i.layers=this.layers,this.add(i);const r=new Ve(fi,pi,t,e);r.layers=this.layers,this.add(r);const o=new Ve(fi,pi,t,e);o.layers=this.layers,this.add(o);const a=new Ve(fi,pi,t,e);a.layers=this.layers,this.add(a);const l=new Ve(fi,pi,t,e);l.layers=this.layers,this.add(l);const c=new Ve(fi,pi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Nl extends Ne{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ei,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ah extends on{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Nl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new rt(5,5,5),r=new Te({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Sn});r.uniforms.tEquirect.value=e;const o=new R(i,r),a=e.minFilter;return e.minFilter===Kn&&(e.minFilter=ln),new oh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class es{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=e}clone(){return new es(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class lh extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Mr=new b,ch=new b,hh=new $t;class Yn{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Mr.subVectors(n,e).cross(ch.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Mr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||hh.getNormalMatrix(t),i=this.coplanarPoint(Mr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new ts,Ss=new b;class Uo{constructor(t=new Yn,e=new Yn,n=new Yn,i=new Yn,r=new Yn,o=new Yn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],S=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+o,d+h,m+g,x+S).normalize(),n[3].setComponents(l-o,d-h,m-g,x-S).normalize(),n[4].setComponents(l-a,d-u,m-_,x-y).normalize(),e===yn)n[5].setComponents(l+a,d+u,m+_,x+y).normalize();else if(e===ks)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ss.x=i.normal.x>0?t.max.x:t.min.x,Ss.y=i.normal.y>0?t.max.y:t.min.y,Ss.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yo extends Qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Gs=new b,Vs=new b,_a=new ue,Vi=new Xs,ws=new ts,yr=new b,va=new b;class xa extends Me{constructor(t=new ye,e=new yo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Gs.fromBufferAttribute(e,i-1),Vs.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Gs.distanceTo(Vs);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(i),ws.radius+=r,t.ray.intersectsSphere(ws)===!1)return;_a.copy(i).invert(),Vi.copy(t.ray).applyMatrix4(_a);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),S=h.getX(_+1),y=Es(this,t,Vi,l,p,S);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Es(this,t,Vi,l,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=Es(this,t,Vi,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Es(this,t,Vi,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Es(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(Gs.fromBufferAttribute(o,i),Vs.fromBufferAttribute(o,r),e.distanceSqToSegment(Gs,Vs,yr,va)>n)return;yr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(yr);if(!(l<t.near||l>t.far))return{distance:l,point:va.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}class Fl extends Qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ma=new ue,So=new Xs,bs=new ts,Ts=new b;class uh extends Me{constructor(t=new ye,e=new Fl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(i),bs.radius+=r,t.ray.intersectsSphere(bs)===!1)return;Ma.copy(i).invert(),So.copy(t.ray).applyMatrix4(Ma);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Ts.fromBufferAttribute(u,m),ya(Ts,m,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Ts.fromBufferAttribute(u,g),ya(Ts,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ya(s,t,e,n,i,r,o){const a=So.distanceSqToPoint(s);if(a<e){const l=new b;So.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class se extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}class dh extends Ne{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ol extends Ne{constructor(t,e,n,i,r,o,a,l,c,h=xi){if(h!==xi&&h!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xi&&(n=Jn),n===void 0&&h===Ai&&(n=Ti),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new Mt:new b);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new b,i=[],r=[],o=[],a=new b,l=new ue;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new b)}r[0]=new b,o[0]=new b;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Kt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Kt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class No extends un{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Mt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class fh extends No{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fo(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const As=new b,Sr=new Fo,wr=new Fo,Er=new Fo;class ph extends un{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new b){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(As.subVectors(i[0],i[1]).add(i[0]),c=As);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(As.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=As),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Sr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),wr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Er.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Sr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),wr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Er.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Sr.calc(l),wr.calc(l),Er.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new b().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Sa(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function mh(s,t){const e=1-s;return e*e*t}function gh(s,t){return 2*(1-s)*s*t}function _h(s,t){return s*s*t}function qi(s,t,e,n){return mh(s,t)+gh(s,e)+_h(s,n)}function vh(s,t){const e=1-s;return e*e*e*t}function xh(s,t){const e=1-s;return 3*e*e*s*t}function Mh(s,t){return 3*(1-s)*s*s*t}function yh(s,t){return s*s*s*t}function Yi(s,t,e,n,i){return vh(s,t)+xh(s,e)+Mh(s,n)+yh(s,i)}class Bl extends un{constructor(t=new Mt,e=new Mt,n=new Mt,i=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Mt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Yi(t,i.x,r.x,o.x,a.x),Yi(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sh extends un{constructor(t=new b,e=new b,n=new b,i=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new b){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Yi(t,i.x,r.x,o.x,a.x),Yi(t,i.y,r.y,o.y,a.y),Yi(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zl extends un{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wh extends un{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kl extends un{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(qi(t,i.x,r.x,o.x),qi(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eh extends un{constructor(t=new b,e=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new b){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(qi(t,i.x,r.x,o.x),qi(t,i.y,r.y,o.y),qi(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hl extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Sa(a,l.x,c.x,h.x,u.x),Sa(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Mt().fromArray(i))}return this}}var wa=Object.freeze({__proto__:null,ArcCurve:fh,CatmullRomCurve3:ph,CubicBezierCurve:Bl,CubicBezierCurve3:Sh,EllipseCurve:No,LineCurve:zl,LineCurve3:wh,QuadraticBezierCurve:kl,QuadraticBezierCurve3:Eh,SplineCurve:Hl});class bh extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new wa[i.type]().fromJSON(i))}return this}}class Th extends bh{constructor(t){super(),this.type="Path",this.currentPoint=new Mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new zl(this.currentPoint.clone(),new Mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new kl(this.currentPoint.clone(),new Mt(t,e),new Mt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Bl(this.currentPoint.clone(),new Mt(t,e),new Mt(n,i),new Mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Hl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new No(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Oo extends ye{constructor(t=[new Mt(0,-.5),new Mt(.5,0),new Mt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Kt(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new b,d=new Mt,f=new b,g=new b,_=new b;let m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let S=0;S<=e;S++){const y=n+S*h*i,x=Math.sin(y),C=Math.cos(y);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*x,u.y=t[A].y,u.z=t[A].x*C,o.push(u.x,u.y,u.z),d.x=S/e,d.y=A/(t.length-1),a.push(d.x,d.y);const P=l[3*A+0]*x,D=l[3*A+1],E=l[3*A+0]*C;c.push(P,D,E)}}for(let S=0;S<e;S++)for(let y=0;y<t.length-1;y++){const x=y+S*t.length,C=x,A=x+t.length,P=x+t.length+1,D=x+1;r.push(C,A,D),r.push(P,D,A)}this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("uv",new ce(a,2)),this.setAttribute("normal",new ce(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.points,t.segments,t.phiStart,t.phiLength)}}class Bo extends Oo{constructor(t=1,e=1,n=4,i=8){const r=new Th;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Bo(t.radius,t.length,t.capSegments,t.radialSegments)}}class Tt extends ye{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ce(u,3)),this.setAttribute("normal",new ce(d,3)),this.setAttribute("uv",new ce(f,2));function S(){const x=new b,C=new b;let A=0;const P=(e-t)/n;for(let D=0;D<=r;D++){const E=[],M=D/r,U=M*(e-t)+t;for(let V=0;V<=i;V++){const G=V/i,et=G*l+a,$=Math.sin(et),W=Math.cos(et);C.x=U*$,C.y=-M*n+m,C.z=U*W,u.push(C.x,C.y,C.z),x.set($,P,W).normalize(),d.push(x.x,x.y,x.z),f.push(G,1-M),E.push(g++)}_.push(E)}for(let D=0;D<i;D++)for(let E=0;E<r;E++){const M=_[E][D],U=_[E+1][D],V=_[E+1][D+1],G=_[E][D+1];(t>0||E!==0)&&(h.push(M,U,G),A+=3),(e>0||E!==r-1)&&(h.push(U,V,G),A+=3)}c.addGroup(p,A,0),p+=A}function y(x){const C=g,A=new Mt,P=new b;let D=0;const E=x===!0?t:e,M=x===!0?1:-1;for(let V=1;V<=i;V++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const U=g;for(let V=0;V<=i;V++){const et=V/i*l+a,$=Math.cos(et),W=Math.sin(et);P.x=E*W,P.y=m*M,P.z=E*$,u.push(P.x,P.y,P.z),d.push(0,M,0),A.x=$*.5+.5,A.y=W*.5*M+.5,f.push(A.x,A.y),g++}for(let V=0;V<i;V++){const G=C+V,et=U+V;x===!0?h.push(et,et+1,G):h.push(et+1,et,G),D+=3}c.addGroup(p,D,x===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ee extends Tt{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ee(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qs extends ye{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const y=new b,x=new b,C=new b;for(let A=0;A<e.length;A+=3)f(e[A+0],y),f(e[A+1],x),f(e[A+2],C),l(y,x,C,S)}function l(S,y,x,C){const A=C+1,P=[];for(let D=0;D<=A;D++){P[D]=[];const E=S.clone().lerp(x,D/A),M=y.clone().lerp(x,D/A),U=A-D;for(let V=0;V<=U;V++)V===0&&D===A?P[D][V]=E:P[D][V]=E.clone().lerp(M,V/U)}for(let D=0;D<A;D++)for(let E=0;E<2*(A-D)-1;E++){const M=Math.floor(E/2);E%2===0?(d(P[D][M+1]),d(P[D+1][M]),d(P[D][M])):(d(P[D][M+1]),d(P[D+1][M+1]),d(P[D+1][M]))}}function c(S){const y=new b;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(S),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){const S=new b;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];const x=m(S)/2/Math.PI+.5,C=p(S)/Math.PI+.5;o.push(x,1-C)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){const y=o[S+0],x=o[S+2],C=o[S+4],A=Math.max(y,x,C),P=Math.min(y,x,C);A>.9&&P<.1&&(y<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),C<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,y){const x=S*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const S=new b,y=new b,x=new b,C=new b,A=new Mt,P=new Mt,D=new Mt;for(let E=0,M=0;E<r.length;E+=9,M+=6){S.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),A.set(o[M+0],o[M+1]),P.set(o[M+2],o[M+3]),D.set(o[M+4],o[M+5]),C.copy(S).add(y).add(x).divideScalar(3);const U=m(C);_(A,M+0,S,U),_(P,M+2,y,U),_(D,M+4,x,U)}}function _(S,y,x,C){C<0&&S.x===1&&(o[y]=S.x-1),x.x===0&&x.z===0&&(o[y]=C/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qs(t.vertices,t.indices,t.radius,t.details)}}class bn extends qs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bn(t.radius,t.detail)}}class Ys extends qs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ys(t.radius,t.detail)}}class ve extends ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const S=p*d-o;for(let y=0;y<c;y++){const x=y*u-r;g.push(x,-S,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const y=S+c*p,x=S+c*(p+1),C=S+1+c*(p+1),A=S+1+c*p;f.push(y,x,A),f.push(x,C,A)}this.setIndex(f),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.width,t.height,t.widthSegments,t.heightSegments)}}class zo extends ye{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new b,g=new Mt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const S=p+m,y=S,x=S+n+1,C=S+n+2,A=S+1;a.push(y,x,A),a.push(x,C,A)}}this.setIndex(a),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class xe extends ye{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new b,d=new b,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const S=[],y=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){const A=C/e;u.x=-t*Math.cos(i+A*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+A*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+x,1-y),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const y=h[p][S+1],x=h[p][S],C=h[p+1][S],A=h[p+1][S+1];(p!==0||o>0)&&f.push(y,x,A),(p!==n-1||l<Math.PI)&&f.push(x,C,A)}this.setIndex(f),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class cn extends ye{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new b,u=new b,d=new b;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,S=(i+1)*f+g;o.push(_,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ah extends Te{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vt extends Qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bl,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Rh extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ch extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ko extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ho extends ko{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const br=new ue,Ea=new b,ba=new b;class Gl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uo,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ea.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ea),ba.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ba),e.updateMatrixWorld(),br.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(br),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(br)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ta=new ue,Wi=new b,Tr=new b;class Ph extends Gl{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Wi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Wi),Tr.copy(n.position),Tr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Tr),n.updateMatrixWorld(),i.makeTranslation(-Wi.x,-Wi.y,-Wi.z),Ta.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ta)}}class $s extends ko{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ph}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Go extends Ul{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Lh extends Gl{constructor(){super(new Go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pi extends ko{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Lh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ih extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Vl{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Aa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Aa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Aa(){return performance.now()}const Ra=new ue;class Dh{constructor(t,e,n=0,i=1/0){this.ray=new Xs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Do,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ra.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ra),this}intersectObject(t,e=!0,n=[]){return wo(t,this,n,e),n.sort(Ca),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)wo(t[i],this,n,e);return n.sort(Ca),n}}function Ca(s,t){return s.distance-t.distance}function wo(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)wo(r[o],t,e,!0)}}function Pa(s,t,e,n){const i=Uh(n);switch(e){case vl:return s*t;case Ml:return s*t;case yl:return s*t*2;case Sl:return s*t/i.components*i.byteLength;case Po:return s*t/i.components*i.byteLength;case wl:return s*t*2/i.components*i.byteLength;case Lo:return s*t*2/i.components*i.byteLength;case xl:return s*t*3/i.components*i.byteLength;case sn:return s*t*4/i.components*i.byteLength;case Io:return s*t*4/i.components*i.byteLength;case Ls:case Is:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ds:case Us:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $r:case jr:return Math.max(s,16)*Math.max(t,8)/4;case Yr:case Zr:return Math.max(s,8)*Math.max(t,8)/2;case Kr:case Jr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case eo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case no:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case io:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case so:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ro:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case oo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ao:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case lo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case co:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ho:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case uo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case fo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case po:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ns:case mo:case go:return Math.ceil(s/4)*Math.ceil(t/4)*16;case El:case _o:return Math.ceil(s/4)*Math.ceil(t/4)*8;case vo:case xo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Uh(s){switch(s){case Tn:case ml:return{byteLength:1,components:1};case Zi:case gl:case wn:return{byteLength:2,components:1};case Ro:case Co:return{byteLength:2,components:4};case Jn:case Ao:case Mn:return{byteLength:4,components:1};case _l:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bo);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wl(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Nh(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Fh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oh=`#ifdef USE_ALPHAHASH
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
#endif`,Bh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gh=`#ifdef USE_AOMAP
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
#endif`,Vh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wh=`#ifdef USE_BATCHING
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
#endif`,Xh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$h=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zh=`#ifdef USE_IRIDESCENCE
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
#endif`,jh=`#ifdef USE_BUMPMAP
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
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ru=`#define PI 3.141592653589793
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
} // validated`,ou=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,au=`vec3 transformedNormal = objectNormal;
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
#endif`,lu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,du="gl_FragColor = linearToOutputTexel( gl_FragColor );",fu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pu=`#ifdef USE_ENVMAP
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
#endif`,mu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gu=`#ifdef USE_ENVMAP
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
#endif`,_u=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vu=`#ifdef USE_ENVMAP
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
#endif`,xu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Su=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wu=`#ifdef USE_GRADIENTMAP
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
}`,Eu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Au=`uniform bool receiveShadow;
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
#endif`,Ru=`#ifdef USE_ENVMAP
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
#endif`,Cu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Du=`PhysicalMaterial material;
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
#endif`,Uu=`struct PhysicalMaterial {
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
}`,Nu=`
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
#endif`,Fu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ou=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ku=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xu=`#if defined( USE_POINTS_UV )
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
#endif`,qu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$u=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ju=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ku=`#ifdef USE_MORPHTARGETS
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
#endif`,Ju=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,td=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,id=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sd=`#ifdef USE_NORMALMAP
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
#endif`,rd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ad=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ld=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ud=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,md=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Md=`float getShadowMask() {
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
}`,yd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sd=`#ifdef USE_SKINNING
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
#endif`,wd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ed=`#ifdef USE_SKINNING
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
#endif`,bd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Td=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ad=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cd=`#ifdef USE_TRANSMISSION
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
#endif`,Pd=`#ifdef USE_TRANSMISSION
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
#endif`,Ld=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ud=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fd=`uniform sampler2D t2D;
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
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hd=`#include <common>
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
}`,Gd=`#if DEPTH_PACKING == 3200
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
}`,Vd=`#define DISTANCE
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
}`,Wd=`#define DISTANCE
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
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`uniform float scale;
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
}`,$d=`uniform vec3 diffuse;
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
}`,Zd=`#include <common>
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
}`,jd=`uniform vec3 diffuse;
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
}`,Kd=`#define LAMBERT
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
}`,Jd=`#define LAMBERT
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
}`,Qd=`#define MATCAP
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
}`,tf=`#define MATCAP
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
}`,ef=`#define NORMAL
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
}`,nf=`#define NORMAL
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
}`,sf=`#define PHONG
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
}`,rf=`#define PHONG
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
}`,of=`#define STANDARD
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
}`,af=`#define STANDARD
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
}`,lf=`#define TOON
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
}`,cf=`#define TOON
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
}`,hf=`uniform float size;
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
}`,uf=`uniform vec3 diffuse;
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
}`,df=`#include <common>
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
}`,ff=`uniform vec3 color;
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
}`,pf=`uniform float rotation;
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
}`,mf=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Fh,alphahash_pars_fragment:Oh,alphamap_fragment:Bh,alphamap_pars_fragment:zh,alphatest_fragment:kh,alphatest_pars_fragment:Hh,aomap_fragment:Gh,aomap_pars_fragment:Vh,batching_pars_vertex:Wh,batching_vertex:Xh,begin_vertex:qh,beginnormal_vertex:Yh,bsdfs:$h,iridescence_fragment:Zh,bumpmap_pars_fragment:jh,clipping_planes_fragment:Kh,clipping_planes_pars_fragment:Jh,clipping_planes_pars_vertex:Qh,clipping_planes_vertex:tu,color_fragment:eu,color_pars_fragment:nu,color_pars_vertex:iu,color_vertex:su,common:ru,cube_uv_reflection_fragment:ou,defaultnormal_vertex:au,displacementmap_pars_vertex:lu,displacementmap_vertex:cu,emissivemap_fragment:hu,emissivemap_pars_fragment:uu,colorspace_fragment:du,colorspace_pars_fragment:fu,envmap_fragment:pu,envmap_common_pars_fragment:mu,envmap_pars_fragment:gu,envmap_pars_vertex:_u,envmap_physical_pars_fragment:Ru,envmap_vertex:vu,fog_vertex:xu,fog_pars_vertex:Mu,fog_fragment:yu,fog_pars_fragment:Su,gradientmap_pars_fragment:wu,lightmap_pars_fragment:Eu,lights_lambert_fragment:bu,lights_lambert_pars_fragment:Tu,lights_pars_begin:Au,lights_toon_fragment:Cu,lights_toon_pars_fragment:Pu,lights_phong_fragment:Lu,lights_phong_pars_fragment:Iu,lights_physical_fragment:Du,lights_physical_pars_fragment:Uu,lights_fragment_begin:Nu,lights_fragment_maps:Fu,lights_fragment_end:Ou,logdepthbuf_fragment:Bu,logdepthbuf_pars_fragment:zu,logdepthbuf_pars_vertex:ku,logdepthbuf_vertex:Hu,map_fragment:Gu,map_pars_fragment:Vu,map_particle_fragment:Wu,map_particle_pars_fragment:Xu,metalnessmap_fragment:qu,metalnessmap_pars_fragment:Yu,morphinstance_vertex:$u,morphcolor_vertex:Zu,morphnormal_vertex:ju,morphtarget_pars_vertex:Ku,morphtarget_vertex:Ju,normal_fragment_begin:Qu,normal_fragment_maps:td,normal_pars_fragment:ed,normal_pars_vertex:nd,normal_vertex:id,normalmap_pars_fragment:sd,clearcoat_normal_fragment_begin:rd,clearcoat_normal_fragment_maps:od,clearcoat_pars_fragment:ad,iridescence_pars_fragment:ld,opaque_fragment:cd,packing:hd,premultiplied_alpha_fragment:ud,project_vertex:dd,dithering_fragment:fd,dithering_pars_fragment:pd,roughnessmap_fragment:md,roughnessmap_pars_fragment:gd,shadowmap_pars_fragment:_d,shadowmap_pars_vertex:vd,shadowmap_vertex:xd,shadowmask_pars_fragment:Md,skinbase_vertex:yd,skinning_pars_vertex:Sd,skinning_vertex:wd,skinnormal_vertex:Ed,specularmap_fragment:bd,specularmap_pars_fragment:Td,tonemapping_fragment:Ad,tonemapping_pars_fragment:Rd,transmission_fragment:Cd,transmission_pars_fragment:Pd,uv_pars_fragment:Ld,uv_pars_vertex:Id,uv_vertex:Dd,worldpos_vertex:Ud,background_vert:Nd,background_frag:Fd,backgroundCube_vert:Od,backgroundCube_frag:Bd,cube_vert:zd,cube_frag:kd,depth_vert:Hd,depth_frag:Gd,distanceRGBA_vert:Vd,distanceRGBA_frag:Wd,equirect_vert:Xd,equirect_frag:qd,linedashed_vert:Yd,linedashed_frag:$d,meshbasic_vert:Zd,meshbasic_frag:jd,meshlambert_vert:Kd,meshlambert_frag:Jd,meshmatcap_vert:Qd,meshmatcap_frag:tf,meshnormal_vert:ef,meshnormal_frag:nf,meshphong_vert:sf,meshphong_frag:rf,meshphysical_vert:of,meshphysical_frag:af,meshtoon_vert:lf,meshtoon_frag:cf,points_vert:hf,points_frag:uf,shadow_vert:df,shadow_frag:ff,sprite_vert:pf,sprite_frag:mf},xt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},an={basic:{uniforms:De([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:De([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:De([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:De([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:De([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:De([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:De([xt.points,xt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:De([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:De([xt.common,xt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:De([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:De([xt.sprite,xt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:De([xt.common,xt.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:De([xt.lights,xt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};an.physical={uniforms:De([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Rs={r:0,b:0,g:0},Xn=new hn,gf=new ue;function _f(s,t,e,n,i,r,o){const a=new Bt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const C=g(y);C===null?p(a,l):C&&C.isColor&&(p(C,1),x=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,x){const C=g(x);C&&(C.isCubeTexture||C.mapping===Ws)?(h===void 0&&(h=new R(new rt(1,1,1),new Te({name:"BackgroundCubeMaterial",uniforms:Ci(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Xn.copy(x.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gf.makeRotationFromEuler(Xn)),h.material.toneMapped=ne.getTransfer(C.colorSpace)!==ae,(u!==C||d!==C.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=C,d=C.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new R(new ve(2,2),new Te({name:"BackgroundMaterial",uniforms:Ci(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ne.getTransfer(C.colorSpace)!==ae,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||d!==C.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=C,d=C.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(Rs,Dl(s)),n.buffers.color.setClear(Rs.r,Rs.g,Rs.b,x,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m,dispose:S}}function vf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,U,V,G,et){let $=!1;const W=u(G,V,U);r!==W&&(r=W,c(r.object)),$=f(M,G,V,et),$&&g(M,G,V,et),et!==null&&t.update(et,s.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(M,U,V,G),et!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,U,V){const G=V.wireframe===!0;let et=n[M.id];et===void 0&&(et={},n[M.id]=et);let $=et[U.id];$===void 0&&($={},et[U.id]=$);let W=$[G];return W===void 0&&(W=d(l()),$[G]=W),W}function d(M){const U=[],V=[],G=[];for(let et=0;et<e;et++)U[et]=0,V[et]=0,G[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:G,object:M,attributes:{},index:null}}function f(M,U,V,G){const et=r.attributes,$=U.attributes;let W=0;const J=V.getAttributes();for(const H in J)if(J[H].location>=0){const dt=et[H];let Et=$[H];if(Et===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(Et=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(Et=M.instanceColor)),dt===void 0||dt.attribute!==Et||Et&&dt.data!==Et.data)return!0;W++}return r.attributesNum!==W||r.index!==G}function g(M,U,V,G){const et={},$=U.attributes;let W=0;const J=V.getAttributes();for(const H in J)if(J[H].location>=0){let dt=$[H];dt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor));const Et={};Et.attribute=dt,dt&&dt.data&&(Et.data=dt.data),et[H]=Et,W++}r.attributes=et,r.attributesNum=W,r.index=G}function _(){const M=r.newAttributes;for(let U=0,V=M.length;U<V;U++)M[U]=0}function m(M){p(M,0)}function p(M,U){const V=r.newAttributes,G=r.enabledAttributes,et=r.attributeDivisors;V[M]=1,G[M]===0&&(s.enableVertexAttribArray(M),G[M]=1),et[M]!==U&&(s.vertexAttribDivisor(M,U),et[M]=U)}function S(){const M=r.newAttributes,U=r.enabledAttributes;for(let V=0,G=U.length;V<G;V++)U[V]!==M[V]&&(s.disableVertexAttribArray(V),U[V]=0)}function y(M,U,V,G,et,$,W){W===!0?s.vertexAttribIPointer(M,U,V,et,$):s.vertexAttribPointer(M,U,V,G,et,$)}function x(M,U,V,G){_();const et=G.attributes,$=V.getAttributes(),W=U.defaultAttributeValues;for(const J in $){const H=$[J];if(H.location>=0){let st=et[J];if(st===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const dt=st.normalized,Et=st.itemSize,kt=t.get(st);if(kt===void 0)continue;const Yt=kt.buffer,Q=kt.type,ct=kt.bytesPerElement,yt=Q===s.INT||Q===s.UNSIGNED_INT||st.gpuType===Ao;if(st.isInterleavedBufferAttribute){const _t=st.data,It=_t.stride,Nt=st.offset;if(_t.isInstancedInterleavedBuffer){for(let Gt=0;Gt<H.locationSize;Gt++)p(H.location+Gt,_t.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Gt=0;Gt<H.locationSize;Gt++)m(H.location+Gt);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let Gt=0;Gt<H.locationSize;Gt++)y(H.location+Gt,Et/H.locationSize,Q,dt,It*ct,(Nt+Et/H.locationSize*Gt)*ct,yt)}else{if(st.isInstancedBufferAttribute){for(let _t=0;_t<H.locationSize;_t++)p(H.location+_t,st.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let _t=0;_t<H.locationSize;_t++)m(H.location+_t);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let _t=0;_t<H.locationSize;_t++)y(H.location+_t,Et/H.locationSize,Q,dt,Et*ct,Et/H.locationSize*_t*ct,yt)}}else if(W!==void 0){const dt=W[J];if(dt!==void 0)switch(dt.length){case 2:s.vertexAttrib2fv(H.location,dt);break;case 3:s.vertexAttrib3fv(H.location,dt);break;case 4:s.vertexAttrib4fv(H.location,dt);break;default:s.vertexAttrib1fv(H.location,dt)}}}}S()}function C(){D();for(const M in n){const U=n[M];for(const V in U){const G=U[V];for(const et in G)h(G[et].object),delete G[et];delete U[V]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const U=n[M.id];for(const V in U){const G=U[V];for(const et in G)h(G[et].object),delete G[et];delete U[V]}delete n[M.id]}function P(M){for(const U in n){const V=n[U];if(V[M.id]===void 0)continue;const G=V[M.id];for(const et in G)h(G[et].object),delete G[et];delete V[M.id]}}function D(){E(),o=!0,r!==i&&(r=i,c(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function xf(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Mf(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(P){return!(P!==sn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const D=P===wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Tn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Mn&&!D)}function l(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:C,maxSamples:A}}function yf(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Yn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,y=S*4;let x=p.clippingState||null;l.value=x,x=h(g,d,y,f);for(let C=0;C!==y;++C)x[C]=e[C];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Sf(s){let t=new WeakMap;function e(o,a){return a===Wr?o.mapping=Ei:a===Xr&&(o.mapping=bi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wr||a===Xr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ah(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const _i=4,La=[.125,.215,.35,.446,.526,.582],jn=20,Ar=new Go,Ia=new Bt;let Rr=null,Cr=0,Pr=0,Lr=!1;const $n=(1+Math.sqrt(5))/2,mi=1/$n,Da=[new b(-$n,mi,0),new b($n,mi,0),new b(-mi,0,$n),new b(mi,0,$n),new b(0,$n,-mi),new b(0,$n,mi),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class Ua{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Rr=this._renderer.getRenderTarget(),Cr=this._renderer.getActiveCubeFace(),Pr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rr,Cr,Pr),this._renderer.xr.enabled=Lr,t.scissorTest=!1,Cs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rr=this._renderer.getRenderTarget(),Cr=this._renderer.getActiveCubeFace(),Pr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:wn,format:sn,colorSpace:Ri,depthBuffer:!1},i=Na(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Na(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wf(r)),this._blurMaterial=Ef(r,t,e)}return i}_compileMaterial(t){const e=new R(this._lodPlanes[0],t);this._renderer.compile(e,Ar)}_sceneToCubeUV(t,e,n,i){const a=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ia),h.toneMapping=Fn,h.autoClear=!1;const f=new me({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),g=new R(new rt,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Ia),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Cs(i,S*y,p>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ei||t.mapping===bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fa());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new R(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Cs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ar)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Da[(i-r-1)%Da.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new R(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*jn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):jn;m>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);const p=[];let S=0;for(let P=0;P<jn;++P){const D=P/_,E=Math.exp(-D*D/2);p.push(E),P===0?S+=E:P<m&&(S+=2*E)}for(let P=0;P<p.length;P++)p[P]=p[P]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[i],C=3*x*(i>y-_i?i-y+_i:0),A=4*(this._cubeSize-x);Cs(e,C,A,3*x,2*x),l.setRenderTarget(e),l.render(u,Ar)}}function wf(s){const t=[],e=[],n=[];let i=s;const r=s-_i+1+La.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-_i?l=La[o-s+_i-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const P=A%3*2/3-1,D=A>2?0:-1,E=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];S.set(E,_*g*A),y.set(d,m*g*A);const M=[A,A,A,A,A,A];x.set(M,p*g*A)}const C=new ye;C.setAttribute("position",new je(S,_)),C.setAttribute("uv",new je(y,m)),C.setAttribute("faceIndex",new je(x,p)),t.push(C),i>_i&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Na(s,t,e){const n=new on(s,t,e);return n.texture.mapping=Ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Ef(s,t,e){const n=new Float32Array(jn),i=new b(0,1,0);return new Te({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vo(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Fa(){return new Te({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vo(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Oa(){return new Te({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Vo(){return`

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
	`}function bf(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wr||l===Xr,h=l===Ei||l===bi;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ua(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Ua(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Tf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&gi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Af(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let y=0,x=S.length;y<x;y+=3){const C=S[y+0],A=S[y+1],P=S[y+2];d.push(C,A,A,P,P,C)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,x=S.length/3-1;y<x;y+=3){const C=y+0,A=y+1,P=y+2;d.push(C,A,A,P,P,C)}}else return;const m=new(Al(d)?Il:Ll)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Rf(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*_[S];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Cf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Pf(s,t,e){const n=new WeakMap,i=new le;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let C=a.attributes.position.count*x,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const P=new Float32Array(C*A*4*u),D=new Cl(P,C,A,u);D.type=Mn,D.needsUpdate=!0;const E=x*4;for(let U=0;U<u;U++){const V=p[U],G=S[U],et=y[U],$=C*A*4*U;for(let W=0;W<V.count;W++){const J=W*E;g===!0&&(i.fromBufferAttribute(V,W),P[$+J+0]=i.x,P[$+J+1]=i.y,P[$+J+2]=i.z,P[$+J+3]=0),_===!0&&(i.fromBufferAttribute(G,W),P[$+J+4]=i.x,P[$+J+5]=i.y,P[$+J+6]=i.z,P[$+J+7]=0),m===!0&&(i.fromBufferAttribute(et,W),P[$+J+8]=i.x,P[$+J+9]=i.y,P[$+J+10]=i.z,P[$+J+11]=et.itemSize===4?i.w:1)}}d={count:u,texture:D,size:new Mt(C,A)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Lf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Xl=new Ne,Ba=new Ol(1,1),ql=new Cl,Yl=new qc,$l=new Nl,za=[],ka=[],Ha=new Float32Array(16),Ga=new Float32Array(9),Va=new Float32Array(4);function Di(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=za[i];if(r===void 0&&(r=new Float32Array(i),za[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Se(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function we(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Zs(s,t){let e=ka[t];e===void 0&&(e=new Int32Array(t),ka[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function If(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2fv(this.addr,t),we(e,t)}}function Uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;s.uniform3fv(this.addr,t),we(e,t)}}function Nf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4fv(this.addr,t),we(e,t)}}function Ff(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Se(e,n))return;Va.set(n),s.uniformMatrix2fv(this.addr,!1,Va),we(e,n)}}function Of(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Se(e,n))return;Ga.set(n),s.uniformMatrix3fv(this.addr,!1,Ga),we(e,n)}}function Bf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Se(e,n))return;Ha.set(n),s.uniformMatrix4fv(this.addr,!1,Ha),we(e,n)}}function zf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function kf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2iv(this.addr,t),we(e,t)}}function Hf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3iv(this.addr,t),we(e,t)}}function Gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4iv(this.addr,t),we(e,t)}}function Vf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Wf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2uiv(this.addr,t),we(e,t)}}function Xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3uiv(this.addr,t),we(e,t)}}function qf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4uiv(this.addr,t),we(e,t)}}function Yf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ba.compareFunction=Tl,r=Ba):r=Xl,e.setTexture2D(t||r,i)}function $f(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Yl,i)}function Zf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||$l,i)}function jf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ql,i)}function Kf(s){switch(s){case 5126:return If;case 35664:return Df;case 35665:return Uf;case 35666:return Nf;case 35674:return Ff;case 35675:return Of;case 35676:return Bf;case 5124:case 35670:return zf;case 35667:case 35671:return kf;case 35668:case 35672:return Hf;case 35669:case 35673:return Gf;case 5125:return Vf;case 36294:return Wf;case 36295:return Xf;case 36296:return qf;case 35678:case 36198:case 36298:case 36306:case 35682:return Yf;case 35679:case 36299:case 36307:return $f;case 35680:case 36300:case 36308:case 36293:return Zf;case 36289:case 36303:case 36311:case 36292:return jf}}function Jf(s,t){s.uniform1fv(this.addr,t)}function Qf(s,t){const e=Di(t,this.size,2);s.uniform2fv(this.addr,e)}function tp(s,t){const e=Di(t,this.size,3);s.uniform3fv(this.addr,e)}function ep(s,t){const e=Di(t,this.size,4);s.uniform4fv(this.addr,e)}function np(s,t){const e=Di(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function ip(s,t){const e=Di(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function sp(s,t){const e=Di(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function rp(s,t){s.uniform1iv(this.addr,t)}function op(s,t){s.uniform2iv(this.addr,t)}function ap(s,t){s.uniform3iv(this.addr,t)}function lp(s,t){s.uniform4iv(this.addr,t)}function cp(s,t){s.uniform1uiv(this.addr,t)}function hp(s,t){s.uniform2uiv(this.addr,t)}function up(s,t){s.uniform3uiv(this.addr,t)}function dp(s,t){s.uniform4uiv(this.addr,t)}function fp(s,t,e){const n=this.cache,i=t.length,r=Zs(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Xl,r[o])}function pp(s,t,e){const n=this.cache,i=t.length,r=Zs(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Yl,r[o])}function mp(s,t,e){const n=this.cache,i=t.length,r=Zs(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||$l,r[o])}function gp(s,t,e){const n=this.cache,i=t.length,r=Zs(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ql,r[o])}function _p(s){switch(s){case 5126:return Jf;case 35664:return Qf;case 35665:return tp;case 35666:return ep;case 35674:return np;case 35675:return ip;case 35676:return sp;case 5124:case 35670:return rp;case 35667:case 35671:return op;case 35668:case 35672:return ap;case 35669:case 35673:return lp;case 5125:return cp;case 36294:return hp;case 36295:return up;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return fp;case 35679:case 36299:case 36307:return pp;case 35680:case 36300:case 36308:case 36293:return mp;case 36289:case 36303:case 36311:case 36292:return gp}}class vp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kf(e.type)}}class xp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_p(e.type)}}class Mp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Ir=/(\w+)(\])?(\[|\.)?/g;function Wa(s,t){s.seq.push(t),s.map[t.id]=t}function yp(s,t,e){const n=s.name,i=n.length;for(Ir.lastIndex=0;;){const r=Ir.exec(n),o=Ir.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Wa(e,c===void 0?new vp(a,s,t):new xp(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Mp(a),Wa(e,u)),e=u}}}class Fs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);yp(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Xa(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Sp=37297;let wp=0;function Ep(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const qa=new $t;function bp(s){ne._getMatrix(qa,ne.workingColorSpace,s);const t=`mat3( ${qa.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(s)){case zs:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ya(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Ep(s.getShaderSource(t),o)}else return i}function Tp(s,t){const e=bp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ap(s,t){let e;switch(t){case cl:e="Linear";break;case hl:e="Reinhard";break;case ul:e="Cineon";break;case To:e="ACESFilmic";break;case dl:e="AgX";break;case fl:e="Neutral";break;case Ec:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ps=new b;function Rp(){ne.getLuminanceCoefficients(Ps);const s=Ps.x.toFixed(4),t=Ps.y.toFixed(4),e=Ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xi).join(`
`)}function Pp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Xi(s){return s!==""}function $a(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Za(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ip=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(s){return s.replace(Ip,Up)}const Dp=new Map;function Up(s,t){let e=Zt[t];if(e===void 0){const n=Dp.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Eo(e)}const Np=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ja(s){return s.replace(Np,Fp)}function Fp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ka(s){let t=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Op(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ol?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===al?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===xn&&(t="SHADOWMAP_TYPE_VSM"),t}function Bp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ei:case bi:t="ENVMAP_TYPE_CUBE";break;case Ws:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case bi:t="ENVMAP_MODE_REFRACTION";break}return t}function kp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ll:t="ENVMAP_BLENDING_MULTIPLY";break;case Sc:t="ENVMAP_BLENDING_MIX";break;case wc:t="ENVMAP_BLENDING_ADD";break}return t}function Hp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Gp(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Op(e),c=Bp(e),h=zp(e),u=kp(e),d=Hp(e),f=Cp(e),g=Pp(r),_=i.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xi).join(`
`),p.length>0&&(p+=`
`)):(m=[Ka(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),p=[Ka(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Fn?Ap("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Tp("linearToOutputTexel",e.outputColorSpace),Rp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xi).join(`
`)),o=Eo(o),o=$a(o,e),o=Za(o,e),a=Eo(a),a=$a(a,e),a=Za(a,e),o=ja(o),a=ja(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+o,x=S+p+a,C=Xa(i,i.VERTEX_SHADER,y),A=Xa(i,i.FRAGMENT_SHADER,x);i.attachShader(_,C),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function P(U){if(s.debug.checkShaderErrors){const V=i.getProgramInfoLog(_).trim(),G=i.getShaderInfoLog(C).trim(),et=i.getShaderInfoLog(A).trim();let $=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,C,A);else{const J=Ya(i,C,"vertex"),H=Ya(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+J+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(G===""||et==="")&&(W=!1);W&&(U.diagnostics={runnable:$,programLog:V,vertexShader:{log:G,prefix:m},fragmentShader:{log:et,prefix:p}})}i.deleteShader(C),i.deleteShader(A),D=new Fs(i,_),E=Lp(i,_)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Sp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let Vp=0;class Wp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Xp(t),e.set(t,n)),n}}class Xp{constructor(t){this.id=Vp++,this.code=t,this.usedTimes=0}}function qp(s,t,e,n,i,r,o){const a=new Do,l=new Wp,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,U,V,G){const et=V.fog,$=G.geometry,W=E.isMeshStandardMaterial?V.environment:null,J=(E.isMeshStandardMaterial?e:t).get(E.envMap||W),H=J&&J.mapping===Ws?J.image.height:null,st=g[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const dt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Et=dt!==void 0?dt.length:0;let kt=0;$.morphAttributes.position!==void 0&&(kt=1),$.morphAttributes.normal!==void 0&&(kt=2),$.morphAttributes.color!==void 0&&(kt=3);let Yt,Q,ct,yt;if(st){const Jt=an[st];Yt=Jt.vertexShader,Q=Jt.fragmentShader}else Yt=E.vertexShader,Q=E.fragmentShader,l.update(E),ct=l.getVertexShaderID(E),yt=l.getFragmentShaderID(E);const _t=s.getRenderTarget(),It=s.state.buffers.depth.getReversed(),Nt=G.isInstancedMesh===!0,Gt=G.isBatchedMesh===!0,Qt=!!E.map,qt=!!E.matcap,Rt=!!J,L=!!E.aoMap,zt=!!E.lightMap,ht=!!E.bumpMap,Ct=!!E.normalMap,ot=!!E.displacementMap,Ht=!!E.emissiveMap,bt=!!E.metalnessMap,T=!!E.roughnessMap,v=E.anisotropy>0,N=E.clearcoat>0,k=E.dispersion>0,B=E.iridescence>0,I=E.sheen>0,q=E.transmission>0,j=v&&!!E.anisotropyMap,nt=N&&!!E.clearcoatMap,it=N&&!!E.clearcoatNormalMap,tt=N&&!!E.clearcoatRoughnessMap,ut=B&&!!E.iridescenceMap,pt=B&&!!E.iridescenceThicknessMap,St=I&&!!E.sheenColorMap,mt=I&&!!E.sheenRoughnessMap,Ut=!!E.specularMap,Dt=!!E.specularColorMap,Vt=!!E.specularIntensityMap,F=q&&!!E.transmissionMap,gt=q&&!!E.thicknessMap,Z=!!E.gradientMap,K=!!E.alphaMap,at=E.alphaTest>0,lt=!!E.alphaHash,Pt=!!E.extensions;let jt=Fn;E.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(jt=s.toneMapping);const he={shaderID:st,shaderType:E.type,shaderName:E.name,vertexShader:Yt,fragmentShader:Q,defines:E.defines,customVertexShaderID:ct,customFragmentShaderID:yt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Gt,batchingColor:Gt&&G._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&G.instanceColor!==null,instancingMorph:Nt&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:_t===null?s.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Ri,alphaToCoverage:!!E.alphaToCoverage,map:Qt,matcap:qt,envMap:Rt,envMapMode:Rt&&J.mapping,envMapCubeUVHeight:H,aoMap:L,lightMap:zt,bumpMap:ht,normalMap:Ct,displacementMap:d&&ot,emissiveMap:Ht,normalMapObjectSpace:Ct&&E.normalMapType===Rc,normalMapTangentSpace:Ct&&E.normalMapType===bl,metalnessMap:bt,roughnessMap:T,anisotropy:v,anisotropyMap:j,clearcoat:N,clearcoatMap:nt,clearcoatNormalMap:it,clearcoatRoughnessMap:tt,dispersion:k,iridescence:B,iridescenceMap:ut,iridescenceThicknessMap:pt,sheen:I,sheenColorMap:St,sheenRoughnessMap:mt,specularMap:Ut,specularColorMap:Dt,specularIntensityMap:Vt,transmission:q,transmissionMap:F,thicknessMap:gt,gradientMap:Z,opaque:E.transparent===!1&&E.blending===vi&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:at,alphaHash:lt,combine:E.combine,mapUv:Qt&&_(E.map.channel),aoMapUv:L&&_(E.aoMap.channel),lightMapUv:zt&&_(E.lightMap.channel),bumpMapUv:ht&&_(E.bumpMap.channel),normalMapUv:Ct&&_(E.normalMap.channel),displacementMapUv:ot&&_(E.displacementMap.channel),emissiveMapUv:Ht&&_(E.emissiveMap.channel),metalnessMapUv:bt&&_(E.metalnessMap.channel),roughnessMapUv:T&&_(E.roughnessMap.channel),anisotropyMapUv:j&&_(E.anisotropyMap.channel),clearcoatMapUv:nt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:St&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(E.sheenRoughnessMap.channel),specularMapUv:Ut&&_(E.specularMap.channel),specularColorMapUv:Dt&&_(E.specularColorMap.channel),specularIntensityMapUv:Vt&&_(E.specularIntensityMap.channel),transmissionMapUv:F&&_(E.transmissionMap.channel),thicknessMapUv:gt&&_(E.thicknessMap.channel),alphaMapUv:K&&_(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ct||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!$.attributes.uv&&(Qt||K),fog:!!et,useFog:E.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:It,skinning:G.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:kt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:jt,decodeVideoTexture:Qt&&E.map.isVideoTexture===!0&&ne.getTransfer(E.map.colorSpace)===ae,decodeVideoTextureEmissive:Ht&&E.emissiveMap.isVideoTexture===!0&&ne.getTransfer(E.emissiveMap.colorSpace)===ae,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===be,flipSided:E.side===Ue,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Pt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&E.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return he.vertexUv1s=c.has(1),he.vertexUv2s=c.has(2),he.vertexUv3s=c.has(3),c.clear(),he}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)M.push(U),M.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(S(M,E),y(M,E),M.push(s.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function S(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const M=g[E.type];let U;if(M){const V=an[M];U=ji.clone(V.uniforms)}else U=E.uniforms;return U}function C(E,M){let U;for(let V=0,G=h.length;V<G;V++){const et=h[V];if(et.cacheKey===M){U=et,++U.usedTimes;break}}return U===void 0&&(U=new Gp(s,M,E,r),h.push(U)),U}function A(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function P(E){l.remove(E)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:D}}function Yp(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function $p(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ja(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Qa(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||$p),n.length>1&&n.sort(d||Ja),i.length>1&&i.sort(d||Ja)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Zp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Qa,s.set(n,[o])):i>=r.length?(o=new Qa,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function jp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new Bt};break;case"SpotLight":e={position:new b,direction:new b,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new b,halfWidth:new b,halfHeight:new b};break}return s[t.id]=e,e}}}function Kp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Jp=0;function Qp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function tm(s){const t=new jp,e=Kp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new b);const i=new b,r=new ue,o=new ue;function a(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,y=0,x=0,C=0,A=0,P=0;c.sort(Qp);for(let E=0,M=c.length;E<M;E++){const U=c[E],V=U.color,G=U.intensity,et=U.distance,$=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=V.r*G,u+=V.g*G,d+=V.b*G;else if(U.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(U.sh.coefficients[W],G);P++}else if(U.isDirectionalLight){const W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const J=U.shadow,H=e.get(U);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=U.shadow.matrix,S++}n.directional[f]=W,f++}else if(U.isSpotLight){const W=t.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(V).multiplyScalar(G),W.distance=et,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,n.spot[_]=W;const J=U.shadow;if(U.map&&(n.spotLightMap[C]=U.map,C++,J.updateMatrices(U),U.castShadow&&A++),n.spotLightMatrix[_]=J.matrix,U.castShadow){const H=e.get(U);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=$,x++}_++}else if(U.isRectAreaLight){const W=t.get(U);W.color.copy(V).multiplyScalar(G),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=W,m++}else if(U.isPointLight){const W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),W.distance=U.distance,W.decay=U.decay,U.castShadow){const J=U.shadow,H=e.get(U);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=U.shadow.matrix,y++}n.point[g]=W,g++}else if(U.isHemisphereLight){const W=t.get(U);W.skyColor.copy(U.color).multiplyScalar(G),W.groundColor.copy(U.groundColor).multiplyScalar(G),n.hemi[p]=W,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==S||D.numPointShadows!==y||D.numSpotShadows!==x||D.numSpotMaps!==C||D.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=S,D.numPointShadows=y,D.numSpotShadows=x,D.numSpotMaps=C,D.numLightProbes=P,n.version=Jp++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const y=c[p];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function tl(s){const t=new tm(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function em(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new tl(s),t.set(i,[a])):r>=o.length?(a=new tl(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const nm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,im=`uniform sampler2D shadow_pass;
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
}`;function sm(s,t,e){let n=new Uo;const i=new Mt,r=new Mt,o=new le,a=new Rh({depthPacking:Ac}),l=new Ch,c={},h=e.maxTextureSize,u={[Bn]:Ue,[Ue]:Bn,[be]:be},d=new Te({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:nm,fragmentShader:im}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ye;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new R(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ol;let p=this.type;this.render=function(A,P,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=s.getRenderTarget(),M=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),V=s.state;V.setBlending(Sn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const G=p!==xn&&this.type===xn,et=p===xn&&this.type!==xn;for(let $=0,W=A.length;$<W;$++){const J=A[$],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const st=H.getFrameExtents();if(i.multiply(st),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||G===!0||et===!0){const Et=this.type!==xn?{minFilter:rn,magFilter:rn}:{};H.map!==null&&H.map.dispose(),H.map=new on(i.x,i.y,Et),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const dt=H.getViewportCount();for(let Et=0;Et<dt;Et++){const kt=H.getViewport(Et);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),V.viewport(o),H.updateMatrices(J,Et),n=H.getFrustum(),x(P,D,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===xn&&S(H,D),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,M,U)};function S(A,P){const D=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new on(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(P,null,D,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(P,null,D,f,_,null)}function y(A,P,D,E){let M=null;const U=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)M=U;else if(M=D.isPointLight===!0?l:a,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const V=M.uuid,G=P.uuid;let et=c[V];et===void 0&&(et={},c[V]=et);let $=et[G];$===void 0&&($=M.clone(),et[G]=$,P.addEventListener("dispose",C)),M=$}if(M.visible=P.visible,M.wireframe=P.wireframe,E===xn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=s.properties.get(M);V.light=D}return M}function x(A,P,D,E,M){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===xn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const G=t.update(A),et=A.material;if(Array.isArray(et)){const $=G.groups;for(let W=0,J=$.length;W<J;W++){const H=$[W],st=et[H.materialIndex];if(st&&st.visible){const dt=y(A,st,E,M);A.onBeforeShadow(s,A,P,D,G,dt,H),s.renderBufferDirect(D,null,G,dt,A,H),A.onAfterShadow(s,A,P,D,G,dt,H)}}}else if(et.visible){const $=y(A,et,E,M);A.onBeforeShadow(s,A,P,D,G,$,null),s.renderBufferDirect(D,null,G,$,A,null),A.onAfterShadow(s,A,P,D,G,$,null)}}const V=A.children;for(let G=0,et=V.length;G<et;G++)x(V[G],P,D,E,M)}function C(A){A.target.removeEventListener("dispose",C);for(const D in c){const E=c[D],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const rm={[Or]:Br,[zr]:Gr,[kr]:Vr,[wi]:Hr,[Br]:Or,[Gr]:zr,[Vr]:kr,[Hr]:wi};function om(s,t){function e(){let F=!1;const gt=new le;let Z=null;const K=new le(0,0,0,0);return{setMask:function(at){Z!==at&&!F&&(s.colorMask(at,at,at,at),Z=at)},setLocked:function(at){F=at},setClear:function(at,lt,Pt,jt,he){he===!0&&(at*=jt,lt*=jt,Pt*=jt),gt.set(at,lt,Pt,jt),K.equals(gt)===!1&&(s.clearColor(at,lt,Pt,jt),K.copy(gt))},reset:function(){F=!1,Z=null,K.set(-1,0,0,0)}}}function n(){let F=!1,gt=!1,Z=null,K=null,at=null;return{setReversed:function(lt){if(gt!==lt){const Pt=t.get("EXT_clip_control");gt?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT);const jt=at;at=null,this.setClear(jt)}gt=lt},getReversed:function(){return gt},setTest:function(lt){lt?_t(s.DEPTH_TEST):It(s.DEPTH_TEST)},setMask:function(lt){Z!==lt&&!F&&(s.depthMask(lt),Z=lt)},setFunc:function(lt){if(gt&&(lt=rm[lt]),K!==lt){switch(lt){case Or:s.depthFunc(s.NEVER);break;case Br:s.depthFunc(s.ALWAYS);break;case zr:s.depthFunc(s.LESS);break;case wi:s.depthFunc(s.LEQUAL);break;case kr:s.depthFunc(s.EQUAL);break;case Hr:s.depthFunc(s.GEQUAL);break;case Gr:s.depthFunc(s.GREATER);break;case Vr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=lt}},setLocked:function(lt){F=lt},setClear:function(lt){at!==lt&&(gt&&(lt=1-lt),s.clearDepth(lt),at=lt)},reset:function(){F=!1,Z=null,K=null,at=null,gt=!1}}}function i(){let F=!1,gt=null,Z=null,K=null,at=null,lt=null,Pt=null,jt=null,he=null;return{setTest:function(Jt){F||(Jt?_t(s.STENCIL_TEST):It(s.STENCIL_TEST))},setMask:function(Jt){gt!==Jt&&!F&&(s.stencilMask(Jt),gt=Jt)},setFunc:function(Jt,Ae,qe){(Z!==Jt||K!==Ae||at!==qe)&&(s.stencilFunc(Jt,Ae,qe),Z=Jt,K=Ae,at=qe)},setOp:function(Jt,Ae,qe){(lt!==Jt||Pt!==Ae||jt!==qe)&&(s.stencilOp(Jt,Ae,qe),lt=Jt,Pt=Ae,jt=qe)},setLocked:function(Jt){F=Jt},setClear:function(Jt){he!==Jt&&(s.clearStencil(Jt),he=Jt)},reset:function(){F=!1,gt=null,Z=null,K=null,at=null,lt=null,Pt=null,jt=null,he=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,y=null,x=null,C=null,A=null,P=new Bt(0,0,0),D=0,E=!1,M=null,U=null,V=null,G=null,et=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=J>=2);let st=null,dt={};const Et=s.getParameter(s.SCISSOR_BOX),kt=s.getParameter(s.VIEWPORT),Yt=new le().fromArray(Et),Q=new le().fromArray(kt);function ct(F,gt,Z,K){const at=new Uint8Array(4),lt=s.createTexture();s.bindTexture(F,lt),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pt=0;Pt<Z;Pt++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(gt,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,at):s.texImage2D(gt+Pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,at);return lt}const yt={};yt[s.TEXTURE_2D]=ct(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_t(s.DEPTH_TEST),o.setFunc(wi),ht(!1),Ct($o),_t(s.CULL_FACE),L(Sn);function _t(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function It(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Nt(F,gt){return u[F]!==gt?(s.bindFramebuffer(F,gt),u[F]=gt,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=gt),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=gt),!0):!1}function Gt(F,gt){let Z=f,K=!1;if(F){Z=d.get(gt),Z===void 0&&(Z=[],d.set(gt,Z));const at=F.textures;if(Z.length!==at.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,Pt=at.length;lt<Pt;lt++)Z[lt]=s.COLOR_ATTACHMENT0+lt;Z.length=at.length,K=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,K=!0);K&&s.drawBuffers(Z)}function Qt(F){return g!==F?(s.useProgram(F),g=F,!0):!1}const qt={[Zn]:s.FUNC_ADD,[rc]:s.FUNC_SUBTRACT,[oc]:s.FUNC_REVERSE_SUBTRACT};qt[ac]=s.MIN,qt[lc]=s.MAX;const Rt={[cc]:s.ZERO,[hc]:s.ONE,[uc]:s.SRC_COLOR,[Nr]:s.SRC_ALPHA,[_c]:s.SRC_ALPHA_SATURATE,[mc]:s.DST_COLOR,[fc]:s.DST_ALPHA,[dc]:s.ONE_MINUS_SRC_COLOR,[Fr]:s.ONE_MINUS_SRC_ALPHA,[gc]:s.ONE_MINUS_DST_COLOR,[pc]:s.ONE_MINUS_DST_ALPHA,[vc]:s.CONSTANT_COLOR,[xc]:s.ONE_MINUS_CONSTANT_COLOR,[Mc]:s.CONSTANT_ALPHA,[yc]:s.ONE_MINUS_CONSTANT_ALPHA};function L(F,gt,Z,K,at,lt,Pt,jt,he,Jt){if(F===Sn){_===!0&&(It(s.BLEND),_=!1);return}if(_===!1&&(_t(s.BLEND),_=!0),F!==sc){if(F!==m||Jt!==E){if((p!==Zn||x!==Zn)&&(s.blendEquation(s.FUNC_ADD),p=Zn,x=Zn),Jt)switch(F){case vi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ur:s.blendFunc(s.ONE,s.ONE);break;case Zo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case vi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ur:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Zo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,y=null,C=null,A=null,P.set(0,0,0),D=0,m=F,E=Jt}return}at=at||gt,lt=lt||Z,Pt=Pt||K,(gt!==p||at!==x)&&(s.blendEquationSeparate(qt[gt],qt[at]),p=gt,x=at),(Z!==S||K!==y||lt!==C||Pt!==A)&&(s.blendFuncSeparate(Rt[Z],Rt[K],Rt[lt],Rt[Pt]),S=Z,y=K,C=lt,A=Pt),(jt.equals(P)===!1||he!==D)&&(s.blendColor(jt.r,jt.g,jt.b,he),P.copy(jt),D=he),m=F,E=!1}function zt(F,gt){F.side===be?It(s.CULL_FACE):_t(s.CULL_FACE);let Z=F.side===Ue;gt&&(Z=!Z),ht(Z),F.blending===vi&&F.transparent===!1?L(Sn):L(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const K=F.stencilWrite;a.setTest(K),K&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ht(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?_t(s.SAMPLE_ALPHA_TO_COVERAGE):It(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(F){M!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),M=F)}function Ct(F){F!==nc?(_t(s.CULL_FACE),F!==U&&(F===$o?s.cullFace(s.BACK):F===ic?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):It(s.CULL_FACE),U=F}function ot(F){F!==V&&(W&&s.lineWidth(F),V=F)}function Ht(F,gt,Z){F?(_t(s.POLYGON_OFFSET_FILL),(G!==gt||et!==Z)&&(s.polygonOffset(gt,Z),G=gt,et=Z)):It(s.POLYGON_OFFSET_FILL)}function bt(F){F?_t(s.SCISSOR_TEST):It(s.SCISSOR_TEST)}function T(F){F===void 0&&(F=s.TEXTURE0+$-1),st!==F&&(s.activeTexture(F),st=F)}function v(F,gt,Z){Z===void 0&&(st===null?Z=s.TEXTURE0+$-1:Z=st);let K=dt[Z];K===void 0&&(K={type:void 0,texture:void 0},dt[Z]=K),(K.type!==F||K.texture!==gt)&&(st!==Z&&(s.activeTexture(Z),st=Z),s.bindTexture(F,gt||yt[F]),K.type=F,K.texture=gt)}function N(){const F=dt[st];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function k(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function B(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function I(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function nt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function St(F){Yt.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Yt.copy(F))}function mt(F){Q.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Q.copy(F))}function Ut(F,gt){let Z=c.get(gt);Z===void 0&&(Z=new WeakMap,c.set(gt,Z));let K=Z.get(F);K===void 0&&(K=s.getUniformBlockIndex(gt,F.name),Z.set(F,K))}function Dt(F,gt){const K=c.get(gt).get(F);l.get(gt)!==K&&(s.uniformBlockBinding(gt,K,F.__bindingPointIndex),l.set(gt,K))}function Vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,dt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,y=null,x=null,C=null,A=null,P=new Bt(0,0,0),D=0,E=!1,M=null,U=null,V=null,G=null,et=null,Yt.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_t,disable:It,bindFramebuffer:Nt,drawBuffers:Gt,useProgram:Qt,setBlending:L,setMaterial:zt,setFlipSided:ht,setCullFace:Ct,setLineWidth:ot,setPolygonOffset:Ht,setScissorTest:bt,activeTexture:T,bindTexture:v,unbindTexture:N,compressedTexImage2D:k,compressedTexImage3D:B,texImage2D:ut,texImage3D:pt,updateUBOMapping:Ut,uniformBlockBinding:Dt,texStorage2D:it,texStorage3D:tt,texSubImage2D:I,texSubImage3D:q,compressedTexSubImage2D:j,compressedTexSubImage3D:nt,scissor:St,viewport:mt,reset:Vt}}function am(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return f?new OffscreenCanvas(T,v):Hs("canvas")}function _(T,v,N){let k=1;const B=bt(T);if((B.width>N||B.height>N)&&(k=N/Math.max(B.width,B.height)),k<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const I=Math.floor(k*B.width),q=Math.floor(k*B.height);u===void 0&&(u=g(I,q));const j=v?g(I,q):u;return j.width=I,j.height=q,j.getContext("2d").drawImage(T,0,0,I,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+I+"x"+q+")."),j}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(T,v,N,k,B=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let I=v;if(v===s.RED&&(N===s.FLOAT&&(I=s.R32F),N===s.HALF_FLOAT&&(I=s.R16F),N===s.UNSIGNED_BYTE&&(I=s.R8)),v===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(I=s.R8UI),N===s.UNSIGNED_SHORT&&(I=s.R16UI),N===s.UNSIGNED_INT&&(I=s.R32UI),N===s.BYTE&&(I=s.R8I),N===s.SHORT&&(I=s.R16I),N===s.INT&&(I=s.R32I)),v===s.RG&&(N===s.FLOAT&&(I=s.RG32F),N===s.HALF_FLOAT&&(I=s.RG16F),N===s.UNSIGNED_BYTE&&(I=s.RG8)),v===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(I=s.RG8UI),N===s.UNSIGNED_SHORT&&(I=s.RG16UI),N===s.UNSIGNED_INT&&(I=s.RG32UI),N===s.BYTE&&(I=s.RG8I),N===s.SHORT&&(I=s.RG16I),N===s.INT&&(I=s.RG32I)),v===s.RGB_INTEGER&&(N===s.UNSIGNED_BYTE&&(I=s.RGB8UI),N===s.UNSIGNED_SHORT&&(I=s.RGB16UI),N===s.UNSIGNED_INT&&(I=s.RGB32UI),N===s.BYTE&&(I=s.RGB8I),N===s.SHORT&&(I=s.RGB16I),N===s.INT&&(I=s.RGB32I)),v===s.RGBA_INTEGER&&(N===s.UNSIGNED_BYTE&&(I=s.RGBA8UI),N===s.UNSIGNED_SHORT&&(I=s.RGBA16UI),N===s.UNSIGNED_INT&&(I=s.RGBA32UI),N===s.BYTE&&(I=s.RGBA8I),N===s.SHORT&&(I=s.RGBA16I),N===s.INT&&(I=s.RGBA32I)),v===s.RGB&&N===s.UNSIGNED_INT_5_9_9_9_REV&&(I=s.RGB9_E5),v===s.RGBA){const q=B?zs:ne.getTransfer(k);N===s.FLOAT&&(I=s.RGBA32F),N===s.HALF_FLOAT&&(I=s.RGBA16F),N===s.UNSIGNED_BYTE&&(I=q===ae?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(I=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(I=s.RGB5_A1)}return(I===s.R16F||I===s.R32F||I===s.RG16F||I===s.RG32F||I===s.RGBA16F||I===s.RGBA32F)&&t.get("EXT_color_buffer_float"),I}function x(T,v){let N;return T?v===null||v===Jn||v===Ti?N=s.DEPTH24_STENCIL8:v===Mn?N=s.DEPTH32F_STENCIL8:v===Zi&&(N=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Jn||v===Ti?N=s.DEPTH_COMPONENT24:v===Mn?N=s.DEPTH_COMPONENT32F:v===Zi&&(N=s.DEPTH_COMPONENT16),N}function C(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==rn&&T.minFilter!==ln?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){const v=T.target;v.removeEventListener("dispose",A),D(v),v.isVideoTexture&&h.delete(v)}function P(T){const v=T.target;v.removeEventListener("dispose",P),M(v)}function D(T){const v=n.get(T);if(v.__webglInit===void 0)return;const N=T.source,k=d.get(N);if(k){const B=k[v.__cacheKey];B.usedTimes--,B.usedTimes===0&&E(T),Object.keys(k).length===0&&d.delete(N)}n.remove(T)}function E(T){const v=n.get(T);s.deleteTexture(v.__webglTexture);const N=T.source,k=d.get(N);delete k[v.__cacheKey],o.memory.textures--}function M(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(v.__webglFramebuffer[k]))for(let B=0;B<v.__webglFramebuffer[k].length;B++)s.deleteFramebuffer(v.__webglFramebuffer[k][B]);else s.deleteFramebuffer(v.__webglFramebuffer[k]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[k])}else{if(Array.isArray(v.__webglFramebuffer))for(let k=0;k<v.__webglFramebuffer.length;k++)s.deleteFramebuffer(v.__webglFramebuffer[k]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let k=0;k<v.__webglColorRenderbuffer.length;k++)v.__webglColorRenderbuffer[k]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[k]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=T.textures;for(let k=0,B=N.length;k<B;k++){const I=n.get(N[k]);I.__webglTexture&&(s.deleteTexture(I.__webglTexture),o.memory.textures--),n.remove(N[k])}n.remove(T)}let U=0;function V(){U=0}function G(){const T=U;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),U+=1,T}function et(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function $(T,v){const N=n.get(T);if(T.isVideoTexture&&ot(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const k=T.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(N,T,v);return}}e.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+v)}function W(T,v){const N=n.get(T);if(T.version>0&&N.__version!==T.version){Q(N,T,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+v)}function J(T,v){const N=n.get(T);if(T.version>0&&N.__version!==T.version){Q(N,T,v);return}e.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+v)}function H(T,v){const N=n.get(T);if(T.version>0&&N.__version!==T.version){ct(N,T,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+v)}const st={[$i]:s.REPEAT,[nn]:s.CLAMP_TO_EDGE,[qr]:s.MIRRORED_REPEAT},dt={[rn]:s.NEAREST,[bc]:s.NEAREST_MIPMAP_NEAREST,[rs]:s.NEAREST_MIPMAP_LINEAR,[ln]:s.LINEAR,[Js]:s.LINEAR_MIPMAP_NEAREST,[Kn]:s.LINEAR_MIPMAP_LINEAR},Et={[Cc]:s.NEVER,[Nc]:s.ALWAYS,[Pc]:s.LESS,[Tl]:s.LEQUAL,[Lc]:s.EQUAL,[Uc]:s.GEQUAL,[Ic]:s.GREATER,[Dc]:s.NOTEQUAL};function kt(T,v){if(v.type===Mn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ln||v.magFilter===Js||v.magFilter===rs||v.magFilter===Kn||v.minFilter===ln||v.minFilter===Js||v.minFilter===rs||v.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,st[v.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,st[v.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,st[v.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,dt[v.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,dt[v.minFilter]),v.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,Et[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===rn||v.minFilter!==rs&&v.minFilter!==Kn||v.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Yt(T,v){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));const k=v.source;let B=d.get(k);B===void 0&&(B={},d.set(k,B));const I=et(v);if(I!==T.__cacheKey){B[I]===void 0&&(B[I]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,N=!0),B[I].usedTimes++;const q=B[T.__cacheKey];q!==void 0&&(B[T.__cacheKey].usedTimes--,q.usedTimes===0&&E(v)),T.__cacheKey=I,T.__webglTexture=B[I].texture}return N}function Q(T,v,N){let k=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(k=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(k=s.TEXTURE_3D);const B=Yt(T,v),I=v.source;e.bindTexture(k,T.__webglTexture,s.TEXTURE0+N);const q=n.get(I);if(I.version!==q.__version||B===!0){e.activeTexture(s.TEXTURE0+N);const j=ne.getPrimaries(ne.workingColorSpace),nt=v.colorSpace===Nn?null:ne.getPrimaries(v.colorSpace),it=v.colorSpace===Nn||j===nt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let tt=_(v.image,!1,i.maxTextureSize);tt=Ht(v,tt);const ut=r.convert(v.format,v.colorSpace),pt=r.convert(v.type);let St=y(v.internalFormat,ut,pt,v.colorSpace,v.isVideoTexture);kt(k,v);let mt;const Ut=v.mipmaps,Dt=v.isVideoTexture!==!0,Vt=q.__version===void 0||B===!0,F=I.dataReady,gt=C(v,tt);if(v.isDepthTexture)St=x(v.format===Ai,v.type),Vt&&(Dt?e.texStorage2D(s.TEXTURE_2D,1,St,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,St,tt.width,tt.height,0,ut,pt,null));else if(v.isDataTexture)if(Ut.length>0){Dt&&Vt&&e.texStorage2D(s.TEXTURE_2D,gt,St,Ut[0].width,Ut[0].height);for(let Z=0,K=Ut.length;Z<K;Z++)mt=Ut[Z],Dt?F&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,mt.width,mt.height,ut,pt,mt.data):e.texImage2D(s.TEXTURE_2D,Z,St,mt.width,mt.height,0,ut,pt,mt.data);v.generateMipmaps=!1}else Dt?(Vt&&e.texStorage2D(s.TEXTURE_2D,gt,St,tt.width,tt.height),F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,ut,pt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,St,tt.width,tt.height,0,ut,pt,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Dt&&Vt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,St,Ut[0].width,Ut[0].height,tt.depth);for(let Z=0,K=Ut.length;Z<K;Z++)if(mt=Ut[Z],v.format!==sn)if(ut!==null)if(Dt){if(F)if(v.layerUpdates.size>0){const at=Pa(mt.width,mt.height,v.format,v.type);for(const lt of v.layerUpdates){const Pt=mt.data.subarray(lt*at/mt.data.BYTES_PER_ELEMENT,(lt+1)*at/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,lt,mt.width,mt.height,1,ut,Pt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,mt.width,mt.height,tt.depth,ut,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,St,mt.width,mt.height,tt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,mt.width,mt.height,tt.depth,ut,pt,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,St,mt.width,mt.height,tt.depth,0,ut,pt,mt.data)}else{Dt&&Vt&&e.texStorage2D(s.TEXTURE_2D,gt,St,Ut[0].width,Ut[0].height);for(let Z=0,K=Ut.length;Z<K;Z++)mt=Ut[Z],v.format!==sn?ut!==null?Dt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,mt.width,mt.height,ut,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,St,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?F&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,mt.width,mt.height,ut,pt,mt.data):e.texImage2D(s.TEXTURE_2D,Z,St,mt.width,mt.height,0,ut,pt,mt.data)}else if(v.isDataArrayTexture)if(Dt){if(Vt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,St,tt.width,tt.height,tt.depth),F)if(v.layerUpdates.size>0){const Z=Pa(tt.width,tt.height,v.format,v.type);for(const K of v.layerUpdates){const at=tt.data.subarray(K*Z/tt.data.BYTES_PER_ELEMENT,(K+1)*Z/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,ut,pt,at)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ut,pt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,St,tt.width,tt.height,tt.depth,0,ut,pt,tt.data);else if(v.isData3DTexture)Dt?(Vt&&e.texStorage3D(s.TEXTURE_3D,gt,St,tt.width,tt.height,tt.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ut,pt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,St,tt.width,tt.height,tt.depth,0,ut,pt,tt.data);else if(v.isFramebufferTexture){if(Vt)if(Dt)e.texStorage2D(s.TEXTURE_2D,gt,St,tt.width,tt.height);else{let Z=tt.width,K=tt.height;for(let at=0;at<gt;at++)e.texImage2D(s.TEXTURE_2D,at,St,Z,K,0,ut,pt,null),Z>>=1,K>>=1}}else if(Ut.length>0){if(Dt&&Vt){const Z=bt(Ut[0]);e.texStorage2D(s.TEXTURE_2D,gt,St,Z.width,Z.height)}for(let Z=0,K=Ut.length;Z<K;Z++)mt=Ut[Z],Dt?F&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,ut,pt,mt):e.texImage2D(s.TEXTURE_2D,Z,St,ut,pt,mt);v.generateMipmaps=!1}else if(Dt){if(Vt){const Z=bt(tt);e.texStorage2D(s.TEXTURE_2D,gt,St,Z.width,Z.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut,pt,tt)}else e.texImage2D(s.TEXTURE_2D,0,St,ut,pt,tt);m(v)&&p(k),q.__version=I.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ct(T,v,N){if(v.image.length!==6)return;const k=Yt(T,v),B=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+N);const I=n.get(B);if(B.version!==I.__version||k===!0){e.activeTexture(s.TEXTURE0+N);const q=ne.getPrimaries(ne.workingColorSpace),j=v.colorSpace===Nn?null:ne.getPrimaries(v.colorSpace),nt=v.colorSpace===Nn||q===j?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);const it=v.isCompressedTexture||v.image[0].isCompressedTexture,tt=v.image[0]&&v.image[0].isDataTexture,ut=[];for(let K=0;K<6;K++)!it&&!tt?ut[K]=_(v.image[K],!0,i.maxCubemapSize):ut[K]=tt?v.image[K].image:v.image[K],ut[K]=Ht(v,ut[K]);const pt=ut[0],St=r.convert(v.format,v.colorSpace),mt=r.convert(v.type),Ut=y(v.internalFormat,St,mt,v.colorSpace),Dt=v.isVideoTexture!==!0,Vt=I.__version===void 0||k===!0,F=B.dataReady;let gt=C(v,pt);kt(s.TEXTURE_CUBE_MAP,v);let Z;if(it){Dt&&Vt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Ut,pt.width,pt.height);for(let K=0;K<6;K++){Z=ut[K].mipmaps;for(let at=0;at<Z.length;at++){const lt=Z[at];v.format!==sn?St!==null?Dt?F&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,0,0,lt.width,lt.height,St,lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,Ut,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,0,0,lt.width,lt.height,St,mt,lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,at,Ut,lt.width,lt.height,0,St,mt,lt.data)}}}else{if(Z=v.mipmaps,Dt&&Vt){Z.length>0&&gt++;const K=bt(ut[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Ut,K.width,K.height)}for(let K=0;K<6;K++)if(tt){Dt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ut[K].width,ut[K].height,St,mt,ut[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ut,ut[K].width,ut[K].height,0,St,mt,ut[K].data);for(let at=0;at<Z.length;at++){const Pt=Z[at].image[K].image;Dt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,0,0,Pt.width,Pt.height,St,mt,Pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,Ut,Pt.width,Pt.height,0,St,mt,Pt.data)}}else{Dt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,St,mt,ut[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ut,St,mt,ut[K]);for(let at=0;at<Z.length;at++){const lt=Z[at];Dt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,0,0,St,mt,lt.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,at+1,Ut,St,mt,lt.image[K])}}}m(v)&&p(s.TEXTURE_CUBE_MAP),I.__version=B.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function yt(T,v,N,k,B,I){const q=r.convert(N.format,N.colorSpace),j=r.convert(N.type),nt=y(N.internalFormat,q,j,N.colorSpace),it=n.get(v),tt=n.get(N);if(tt.__renderTarget=v,!it.__hasExternalTextures){const ut=Math.max(1,v.width>>I),pt=Math.max(1,v.height>>I);B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?e.texImage3D(B,I,nt,ut,pt,v.depth,0,q,j,null):e.texImage2D(B,I,nt,ut,pt,0,q,j,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),Ct(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,k,B,tt.__webglTexture,0,ht(v)):(B===s.TEXTURE_2D||B>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,k,B,tt.__webglTexture,I),e.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(T,v,N){if(s.bindRenderbuffer(s.RENDERBUFFER,T),v.depthBuffer){const k=v.depthTexture,B=k&&k.isDepthTexture?k.type:null,I=x(v.stencilBuffer,B),q=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=ht(v);Ct(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j,I,v.width,v.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,j,I,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,I,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,q,s.RENDERBUFFER,T)}else{const k=v.textures;for(let B=0;B<k.length;B++){const I=k[B],q=r.convert(I.format,I.colorSpace),j=r.convert(I.type),nt=y(I.internalFormat,q,j,I.colorSpace),it=ht(v);N&&Ct(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,it,nt,v.width,v.height):Ct(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it,nt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,nt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=n.get(v.depthTexture);k.__renderTarget=v,(!k.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);const B=k.__webglTexture,I=ht(v);if(v.depthTexture.format===xi)Ct(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,B,0,I):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,B,0);else if(v.depthTexture.format===Ai)Ct(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,B,0,I):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function Nt(T){const v=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const k=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),k){const B=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,k.removeEventListener("dispose",B)};k.addEventListener("dispose",B),v.__depthDisposeCallback=B}v.__boundDepthTexture=k}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");It(v.__webglFramebuffer,T)}else if(N){v.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[k]),v.__webglDepthbuffer[k]===void 0)v.__webglDepthbuffer[k]=s.createRenderbuffer(),_t(v.__webglDepthbuffer[k],T,!1);else{const B=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,I=v.__webglDepthbuffer[k];s.bindRenderbuffer(s.RENDERBUFFER,I),s.framebufferRenderbuffer(s.FRAMEBUFFER,B,s.RENDERBUFFER,I)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),_t(v.__webglDepthbuffer,T,!1);else{const k=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,B=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,B),s.framebufferRenderbuffer(s.FRAMEBUFFER,k,s.RENDERBUFFER,B)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Gt(T,v,N){const k=n.get(T);v!==void 0&&yt(k.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Nt(T)}function Qt(T){const v=T.texture,N=n.get(T),k=n.get(v);T.addEventListener("dispose",P);const B=T.textures,I=T.isWebGLCubeRenderTarget===!0,q=B.length>1;if(q||(k.__webglTexture===void 0&&(k.__webglTexture=s.createTexture()),k.__version=v.version,o.memory.textures++),I){N.__webglFramebuffer=[];for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[j]=[];for(let nt=0;nt<v.mipmaps.length;nt++)N.__webglFramebuffer[j][nt]=s.createFramebuffer()}else N.__webglFramebuffer[j]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let j=0;j<v.mipmaps.length;j++)N.__webglFramebuffer[j]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(q)for(let j=0,nt=B.length;j<nt;j++){const it=n.get(B[j]);it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&Ct(T)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let j=0;j<B.length;j++){const nt=B[j];N.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[j]);const it=r.convert(nt.format,nt.colorSpace),tt=r.convert(nt.type),ut=y(nt.internalFormat,it,tt,nt.colorSpace,T.isXRRenderTarget===!0),pt=ht(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,ut,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.RENDERBUFFER,N.__webglColorRenderbuffer[j])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),_t(N.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(I){e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture),kt(s.TEXTURE_CUBE_MAP,v);for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0)for(let nt=0;nt<v.mipmaps.length;nt++)yt(N.__webglFramebuffer[j][nt],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,nt);else yt(N.__webglFramebuffer[j],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(v)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(q){for(let j=0,nt=B.length;j<nt;j++){const it=B[j],tt=n.get(it);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),kt(s.TEXTURE_2D,it),yt(N.__webglFramebuffer,T,it,s.COLOR_ATTACHMENT0+j,s.TEXTURE_2D,0),m(it)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let j=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(j=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(j,k.__webglTexture),kt(j,v),v.mipmaps&&v.mipmaps.length>0)for(let nt=0;nt<v.mipmaps.length;nt++)yt(N.__webglFramebuffer[nt],T,v,s.COLOR_ATTACHMENT0,j,nt);else yt(N.__webglFramebuffer,T,v,s.COLOR_ATTACHMENT0,j,0);m(v)&&p(j),e.unbindTexture()}T.depthBuffer&&Nt(T)}function qt(T){const v=T.textures;for(let N=0,k=v.length;N<k;N++){const B=v[N];if(m(B)){const I=S(T),q=n.get(B).__webglTexture;e.bindTexture(I,q),p(I),e.unbindTexture()}}}const Rt=[],L=[];function zt(T){if(T.samples>0){if(Ct(T)===!1){const v=T.textures,N=T.width,k=T.height;let B=s.COLOR_BUFFER_BIT;const I=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=n.get(T),j=v.length>1;if(j)for(let nt=0;nt<v.length;nt++)e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,q.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let nt=0;nt<v.length;nt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(B|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(B|=s.STENCIL_BUFFER_BIT)),j){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,q.__webglColorRenderbuffer[nt]);const it=n.get(v[nt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,it,0)}s.blitFramebuffer(0,0,N,k,0,0,N,k,B,s.NEAREST),l===!0&&(Rt.length=0,L.length=0,Rt.push(s.COLOR_ATTACHMENT0+nt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Rt.push(I),L.push(I),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Rt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),j)for(let nt=0;nt<v.length;nt++){e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,q.__webglColorRenderbuffer[nt]);const it=n.get(v[nt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,q.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,it,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function ht(T){return Math.min(i.maxSamples,T.samples)}function Ct(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ot(T){const v=o.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function Ht(T,v){const N=T.colorSpace,k=T.format,B=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==Ri&&N!==Nn&&(ne.getTransfer(N)===ae?(k!==sn||B!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function bt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=V,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=Gt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Ct}function lm(s,t){function e(n,i=Nn){let r;const o=ne.getTransfer(i);if(n===Tn)return s.UNSIGNED_BYTE;if(n===Ro)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Co)return s.UNSIGNED_SHORT_5_5_5_1;if(n===_l)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ml)return s.BYTE;if(n===gl)return s.SHORT;if(n===Zi)return s.UNSIGNED_SHORT;if(n===Ao)return s.INT;if(n===Jn)return s.UNSIGNED_INT;if(n===Mn)return s.FLOAT;if(n===wn)return s.HALF_FLOAT;if(n===vl)return s.ALPHA;if(n===xl)return s.RGB;if(n===sn)return s.RGBA;if(n===Ml)return s.LUMINANCE;if(n===yl)return s.LUMINANCE_ALPHA;if(n===xi)return s.DEPTH_COMPONENT;if(n===Ai)return s.DEPTH_STENCIL;if(n===Sl)return s.RED;if(n===Po)return s.RED_INTEGER;if(n===wl)return s.RG;if(n===Lo)return s.RG_INTEGER;if(n===Io)return s.RGBA_INTEGER;if(n===Ls||n===Is||n===Ds||n===Us)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ls)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ls)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yr||n===$r||n===Zr||n===jr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$r)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kr||n===Jr||n===Qr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kr||n===Jr)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qr)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===to||n===eo||n===no||n===io||n===so||n===ro||n===oo||n===ao||n===lo||n===co||n===ho||n===uo||n===fo||n===po)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===to)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===no)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===io)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===so)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ro)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ao)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===co)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ho)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===po)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ns||n===mo||n===go)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ns)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===El||n===_o||n===vo||n===xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ns)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ti?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const cm={type:"move"};class Dr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const hm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,um=`
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

}`;class dm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ne,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Te({vertexShader:hm,fragmentShader:um,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new R(new ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fm extends Ii{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new dm,m=e.getContextAttributes();let p=null,S=null;const y=[],x=[],C=new Mt;let A=null;const P=new Ve;P.viewport=new le;const D=new Ve;D.viewport=new le;const E=[P,D],M=new Ih;let U=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ct=y[Q];return ct===void 0&&(ct=new Dr,y[Q]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(Q){let ct=y[Q];return ct===void 0&&(ct=new Dr,y[Q]=ct),ct.getGripSpace()},this.getHand=function(Q){let ct=y[Q];return ct===void 0&&(ct=new Dr,y[Q]=ct),ct.getHandSpace()};function G(Q){const ct=x.indexOf(Q.inputSource);if(ct===-1)return;const yt=y[ct];yt!==void 0&&(yt.update(Q.inputSource,Q.frame,c||o),yt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function et(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",et),i.removeEventListener("inputsourceschange",$);for(let Q=0;Q<y.length;Q++){const ct=x[Q];ct!==null&&(x[Q]=null,y[Q].disconnect(ct))}U=null,V=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,S=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",et),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(C),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let yt=null,_t=null,It=null;m.depth&&(It=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=m.stencil?Ai:xi,_t=m.stencil?Ti:Jn);const Nt={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Nt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new on(d.textureWidth,d.textureHeight,{format:sn,type:Tn,depthTexture:new Ol(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const yt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,yt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new on(f.framebufferWidth,f.framebufferHeight,{format:sn,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(Q){for(let ct=0;ct<Q.removed.length;ct++){const yt=Q.removed[ct],_t=x.indexOf(yt);_t>=0&&(x[_t]=null,y[_t].disconnect(yt))}for(let ct=0;ct<Q.added.length;ct++){const yt=Q.added[ct];let _t=x.indexOf(yt);if(_t===-1){for(let Nt=0;Nt<y.length;Nt++)if(Nt>=x.length){x.push(yt),_t=Nt;break}else if(x[Nt]===null){x[Nt]=yt,_t=Nt;break}if(_t===-1)break}const It=y[_t];It&&It.connect(yt)}}const W=new b,J=new b;function H(Q,ct,yt){W.setFromMatrixPosition(ct.matrixWorld),J.setFromMatrixPosition(yt.matrixWorld);const _t=W.distanceTo(J),It=ct.projectionMatrix.elements,Nt=yt.projectionMatrix.elements,Gt=It[14]/(It[10]-1),Qt=It[14]/(It[10]+1),qt=(It[9]+1)/It[5],Rt=(It[9]-1)/It[5],L=(It[8]-1)/It[0],zt=(Nt[8]+1)/Nt[0],ht=Gt*L,Ct=Gt*zt,ot=_t/(-L+zt),Ht=ot*-L;if(ct.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ht),Q.translateZ(ot),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),It[10]===-1)Q.projectionMatrix.copy(ct.projectionMatrix),Q.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const bt=Gt+ot,T=Qt+ot,v=ht-Ht,N=Ct+(_t-Ht),k=qt*Qt/T*bt,B=Rt*Qt/T*bt;Q.projectionMatrix.makePerspective(v,N,k,B,bt,T),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function st(Q,ct){ct===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ct.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let ct=Q.near,yt=Q.far;_.texture!==null&&(_.depthNear>0&&(ct=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),M.near=D.near=P.near=ct,M.far=D.far=P.far=yt,(U!==M.near||V!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,V=M.far),P.layers.mask=Q.layers.mask|2,D.layers.mask=Q.layers.mask|4,M.layers.mask=P.layers.mask|D.layers.mask;const _t=Q.parent,It=M.cameras;st(M,_t);for(let Nt=0;Nt<It.length;Nt++)st(It[Nt],_t);It.length===2?H(M,P,D):M.projectionMatrix.copy(P.projectionMatrix),dt(Q,M,_t)};function dt(Q,ct,yt){yt===null?Q.matrix.copy(ct.matrixWorld):(Q.matrix.copy(yt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ct.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ct.projectionMatrix),Q.projectionMatrixInverse.copy(ct.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Mo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Et=null;function kt(Q,ct){if(h=ct.getViewerPose(c||o),g=ct,h!==null){const yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let _t=!1;yt.length!==M.cameras.length&&(M.cameras.length=0,_t=!0);for(let Nt=0;Nt<yt.length;Nt++){const Gt=yt[Nt];let Qt=null;if(f!==null)Qt=f.getViewport(Gt);else{const Rt=u.getViewSubImage(d,Gt);Qt=Rt.viewport,Nt===0&&(t.setRenderTargetTextures(S,Rt.colorTexture,d.ignoreDepthValues?void 0:Rt.depthStencilTexture),t.setRenderTarget(S))}let qt=E[Nt];qt===void 0&&(qt=new Ve,qt.layers.enable(Nt),qt.viewport=new le,E[Nt]=qt),qt.matrix.fromArray(Gt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(Gt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Nt===0&&(M.matrix.copy(qt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_t===!0&&M.cameras.push(qt)}const It=i.enabledFeatures;if(It&&It.includes("depth-sensing")){const Nt=u.getDepthInformation(yt[0]);Nt&&Nt.isValid&&Nt.texture&&_.init(t,Nt,i.renderState)}}for(let yt=0;yt<y.length;yt++){const _t=x[yt],It=y[yt];_t!==null&&It!==void 0&&It.update(_t,ct,c||o)}Et&&Et(Q,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),g=null}const Yt=new Wl;Yt.setAnimationLoop(kt),this.setAnimationLoop=function(Q){Et=Q},this.dispose=function(){}}}const qn=new hn,pm=new ue;function mm(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Dl(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ue&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ue&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),y=S.envMap,x=S.envMapRotation;y&&(m.envMap.value=y,qn.copy(x),qn.x*=-1,qn.y*=-1,qn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),m.envMapRotation.value.setFromMatrix4(pm.makeRotationFromEuler(qn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ue&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gm(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const x=y.program;n.uniformBlockBinding(S,x)}function c(S,y){let x=i[S.id];x===void 0&&(g(S),x=h(S),i[S.id]=x,S.addEventListener("dispose",m));const C=y.program;n.updateUBOMapping(S,C);const A=t.render.frame;r[S.id]!==A&&(d(S),r[S.id]=A)}function h(S){const y=u();S.__bindingPointIndex=y;const x=s.createBuffer(),C=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,C,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=i[S.id],x=S.uniforms,C=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let A=0,P=x.length;A<P;A++){const D=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,M=D.length;E<M;E++){const U=D[E];if(f(U,A,E,C)===!0){const V=U.__offset,G=Array.isArray(U.value)?U.value:[U.value];let et=0;for(let $=0;$<G.length;$++){const W=G[$],J=_(W);typeof W=="number"||typeof W=="boolean"?(U.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,V+et,U.__data)):W.isMatrix3?(U.__data[0]=W.elements[0],U.__data[1]=W.elements[1],U.__data[2]=W.elements[2],U.__data[3]=0,U.__data[4]=W.elements[3],U.__data[5]=W.elements[4],U.__data[6]=W.elements[5],U.__data[7]=0,U.__data[8]=W.elements[6],U.__data[9]=W.elements[7],U.__data[10]=W.elements[8],U.__data[11]=0):(W.toArray(U.__data,et),et+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(S,y,x,C){const A=S.value,P=y+"_"+x;if(C[P]===void 0)return typeof A=="number"||typeof A=="boolean"?C[P]=A:C[P]=A.clone(),!0;{const D=C[P];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return C[P]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(S){const y=S.uniforms;let x=0;const C=16;for(let P=0,D=y.length;P<D;P++){const E=Array.isArray(y[P])?y[P]:[y[P]];for(let M=0,U=E.length;M<U;M++){const V=E[M],G=Array.isArray(V.value)?V.value:[V.value];for(let et=0,$=G.length;et<$;et++){const W=G[et],J=_(W),H=x%C,st=H%J.boundary,dt=H+st;x+=st,dt!==0&&C-dt<J.storage&&(x+=C-dt),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=J.storage}}}const A=x%C;return A>0&&(x+=C-A),S.__size=x,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class _m{constructor(t={}){const{canvas:e=Oc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this.toneMapping=Fn,this.toneMappingExposure=1;const x=this;let C=!1,A=0,P=0,D=null,E=-1,M=null;const U=new le,V=new le;let G=null;const et=new Bt(0);let $=0,W=e.width,J=e.height,H=1,st=null,dt=null;const Et=new le(0,0,W,J),kt=new le(0,0,W,J);let Yt=!1;const Q=new Uo;let ct=!1,yt=!1;this.transmissionResolutionScale=1;const _t=new ue,It=new ue,Nt=new b,Gt=new le,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function Rt(){return D===null?H:1}let L=n;function zt(w,O){return e.getContext(w,O)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bo}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",at,!1),e.addEventListener("webglcontextcreationerror",lt,!1),L===null){const O="webgl2";if(L=zt(O,w),L===null)throw zt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ht,Ct,ot,Ht,bt,T,v,N,k,B,I,q,j,nt,it,tt,ut,pt,St,mt,Ut,Dt,Vt,F;function gt(){ht=new Tf(L),ht.init(),Dt=new lm(L,ht),Ct=new Mf(L,ht,t,Dt),ot=new om(L,ht),Ct.reverseDepthBuffer&&d&&ot.buffers.depth.setReversed(!0),Ht=new Cf(L),bt=new Yp,T=new am(L,ht,ot,bt,Ct,Dt,Ht),v=new Sf(x),N=new bf(x),k=new Nh(L),Vt=new vf(L,k),B=new Af(L,k,Ht,Vt),I=new Lf(L,B,k,Ht),St=new Pf(L,Ct,T),tt=new yf(bt),q=new qp(x,v,N,ht,Ct,Vt,tt),j=new mm(x,bt),nt=new Zp,it=new em(ht),pt=new _f(x,v,N,ot,I,f,l),ut=new sm(x,I,Ct),F=new gm(L,Ht,Ct,ot),mt=new xf(L,ht,Ht),Ut=new Rf(L,ht,Ht),Ht.programs=q.programs,x.capabilities=Ct,x.extensions=ht,x.properties=bt,x.renderLists=nt,x.shadowMap=ut,x.state=ot,x.info=Ht}gt();const Z=new fm(x,L);this.xr=Z,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(W,J,!1))},this.getSize=function(w){return w.set(W,J)},this.setSize=function(w,O,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,J=O,e.width=Math.floor(w*H),e.height=Math.floor(O*H),X===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(W*H,J*H).floor()},this.setDrawingBufferSize=function(w,O,X){W=w,J=O,H=X,e.width=Math.floor(w*X),e.height=Math.floor(O*X),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(Et)},this.setViewport=function(w,O,X,Y){w.isVector4?Et.set(w.x,w.y,w.z,w.w):Et.set(w,O,X,Y),ot.viewport(U.copy(Et).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(kt)},this.setScissor=function(w,O,X,Y){w.isVector4?kt.set(w.x,w.y,w.z,w.w):kt.set(w,O,X,Y),ot.scissor(V.copy(kt).multiplyScalar(H).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(w){ot.setScissorTest(Yt=w)},this.setOpaqueSort=function(w){st=w},this.setTransparentSort=function(w){dt=w},this.getClearColor=function(w){return w.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor.apply(pt,arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha.apply(pt,arguments)},this.clear=function(w=!0,O=!0,X=!0){let Y=0;if(w){let z=!1;if(D!==null){const ft=D.texture.format;z=ft===Io||ft===Lo||ft===Po}if(z){const ft=D.texture.type,wt=ft===Tn||ft===Jn||ft===Zi||ft===Ti||ft===Ro||ft===Co,At=pt.getClearColor(),Lt=pt.getClearAlpha(),Wt=At.r,Xt=At.g,Ft=At.b;wt?(g[0]=Wt,g[1]=Xt,g[2]=Ft,g[3]=Lt,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Wt,_[1]=Xt,_[2]=Ft,_[3]=Lt,L.clearBufferiv(L.COLOR,0,_))}else Y|=L.COLOR_BUFFER_BIT}O&&(Y|=L.DEPTH_BUFFER_BIT),X&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",at,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),pt.dispose(),nt.dispose(),it.dispose(),bt.dispose(),v.dispose(),N.dispose(),I.dispose(),Vt.dispose(),F.dispose(),q.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",ti),Z.removeEventListener("sessionend",Ni),Ce.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function at(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const w=Ht.autoReset,O=ut.enabled,X=ut.autoUpdate,Y=ut.needsUpdate,z=ut.type;gt(),Ht.autoReset=w,ut.enabled=O,ut.autoUpdate=X,ut.needsUpdate=Y,ut.type=z}function lt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Pt(w){const O=w.target;O.removeEventListener("dispose",Pt),jt(O)}function jt(w){he(w),bt.remove(w)}function he(w){const O=bt.get(w).programs;O!==void 0&&(O.forEach(function(X){q.releaseProgram(X)}),w.isShaderMaterial&&q.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,X,Y,z,ft){O===null&&(O=Qt);const wt=z.isMesh&&z.matrixWorld.determinant()<0,At=js(w,O,X,Y,z);ot.setMaterial(Y,wt);let Lt=X.index,Wt=1;if(Y.wireframe===!0){if(Lt=B.getWireframeAttribute(X),Lt===void 0)return;Wt=2}const Xt=X.drawRange,Ft=X.attributes.position;let te=Xt.start*Wt,re=(Xt.start+Xt.count)*Wt;ft!==null&&(te=Math.max(te,ft.start*Wt),re=Math.min(re,(ft.start+ft.count)*Wt)),Lt!==null?(te=Math.max(te,0),re=Math.min(re,Lt.count)):Ft!=null&&(te=Math.max(te,0),re=Math.min(re,Ft.count));const ge=re-te;if(ge<0||ge===1/0)return;Vt.setup(z,Y,At,X,Lt);let pe,ie=mt;if(Lt!==null&&(pe=k.get(Lt),ie=Ut,ie.setIndex(pe)),z.isMesh)Y.wireframe===!0?(ot.setLineWidth(Y.wireframeLinewidth*Rt()),ie.setMode(L.LINES)):ie.setMode(L.TRIANGLES);else if(z.isLine){let Ot=Y.linewidth;Ot===void 0&&(Ot=1),ot.setLineWidth(Ot*Rt()),z.isLineSegments?ie.setMode(L.LINES):z.isLineLoop?ie.setMode(L.LINE_LOOP):ie.setMode(L.LINE_STRIP)}else z.isPoints?ie.setMode(L.POINTS):z.isSprite&&ie.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ie.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))ie.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ot=z._multiDrawStarts,Re=z._multiDrawCounts,oe=z._multiDrawCount,Ke=Lt?k.get(Lt).bytesPerElement:1,ei=bt.get(Y).currentProgram.getUniforms();for(let ze=0;ze<oe;ze++)ei.setValue(L,"_gl_DrawID",ze),ie.render(Ot[ze]/Ke,Re[ze])}else if(z.isInstancedMesh)ie.renderInstances(te,ge,z.count);else if(X.isInstancedBufferGeometry){const Ot=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Re=Math.min(X.instanceCount,Ot);ie.renderInstances(te,ge,Re)}else ie.render(te,ge)};function Jt(w,O,X){w.transparent===!0&&w.side===be&&w.forceSinglePass===!1?(w.side=Ue,w.needsUpdate=!0,An(w,O,X),w.side=Bn,w.needsUpdate=!0,An(w,O,X),w.side=be):An(w,O,X)}this.compile=function(w,O,X=null){X===null&&(X=w),p=it.get(X),p.init(O),y.push(p),X.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),w!==X&&w.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const Y=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ft=z.material;if(ft)if(Array.isArray(ft))for(let wt=0;wt<ft.length;wt++){const At=ft[wt];Jt(At,X,z),Y.add(At)}else Jt(ft,X,z),Y.add(ft)}),y.pop(),p=null,Y},this.compileAsync=function(w,O,X=null){const Y=this.compile(w,O,X);return new Promise(z=>{function ft(){if(Y.forEach(function(wt){bt.get(wt).currentProgram.isReady()&&Y.delete(wt)}),Y.size===0){z(w);return}setTimeout(ft,10)}ht.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Ae=null;function qe(w){Ae&&Ae(w)}function ti(){Ce.stop()}function Ni(){Ce.start()}const Ce=new Wl;Ce.setAnimationLoop(qe),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(w){Ae=w,Z.setAnimationLoop(w),w===null?Ce.stop():Ce.start()},Z.addEventListener("sessionstart",ti),Z.addEventListener("sessionend",Ni),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,O,D),p=it.get(w,y.length),p.init(O),y.push(p),It.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(It),yt=this.localClippingEnabled,ct=tt.init(this.clippingPlanes,yt),m=nt.get(w,S.length),m.init(),S.push(m),Z.enabled===!0&&Z.isPresenting===!0){const ft=x.xr.getDepthSensingMesh();ft!==null&&Be(ft,O,-1/0,x.sortObjects)}Be(w,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(st,dt),qt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,qt&&pt.addToRenderList(m,w),this.info.render.frame++,ct===!0&&tt.beginShadows();const X=p.state.shadowsArray;ut.render(X,w,O),ct===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,z=m.transmissive;if(p.setupLights(),O.isArrayCamera){const ft=O.cameras;if(z.length>0)for(let wt=0,At=ft.length;wt<At;wt++){const Lt=ft[wt];Fi(Y,z,w,Lt)}qt&&pt.render(w);for(let wt=0,At=ft.length;wt<At;wt++){const Lt=ft[wt];dn(m,w,Lt,Lt.viewport)}}else z.length>0&&Fi(Y,z,w,O),qt&&pt.render(w),dn(m,w,O);D!==null&&P===0&&(T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D)),w.isScene===!0&&w.onAfterRender(x,w,O),Vt.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],ct===!0&&tt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Be(w,O,X,Y){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){Y&&Gt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(It);const wt=I.update(w),At=w.material;At.visible&&m.push(w,wt,At,X,Gt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){const wt=I.update(w),At=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Gt.copy(w.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Gt.copy(wt.boundingSphere.center)),Gt.applyMatrix4(w.matrixWorld).applyMatrix4(It)),Array.isArray(At)){const Lt=wt.groups;for(let Wt=0,Xt=Lt.length;Wt<Xt;Wt++){const Ft=Lt[Wt],te=At[Ft.materialIndex];te&&te.visible&&m.push(w,wt,te,X,Gt.z,Ft)}}else At.visible&&m.push(w,wt,At,X,Gt.z,null)}}const ft=w.children;for(let wt=0,At=ft.length;wt<At;wt++)Be(ft[wt],O,X,Y)}function dn(w,O,X,Y){const z=w.opaque,ft=w.transmissive,wt=w.transparent;p.setupLightsView(X),ct===!0&&tt.setGlobalState(x.clippingPlanes,X),Y&&ot.viewport(U.copy(Y)),z.length>0&&zn(z,O,X),ft.length>0&&zn(ft,O,X),wt.length>0&&zn(wt,O,X),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Fi(w,O,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new on(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?wn:Tn,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const ft=p.state.transmissionRenderTarget[Y.id],wt=Y.viewport||U;ft.setSize(wt.z*x.transmissionResolutionScale,wt.w*x.transmissionResolutionScale);const At=x.getRenderTarget();x.setRenderTarget(ft),x.getClearColor(et),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),qt&&pt.render(X);const Lt=x.toneMapping;x.toneMapping=Fn;const Wt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),ct===!0&&tt.setGlobalState(x.clippingPlanes,Y),zn(w,X,Y),T.updateMultisampleRenderTarget(ft),T.updateRenderTargetMipmap(ft),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Ft=0,te=O.length;Ft<te;Ft++){const re=O[Ft],ge=re.object,pe=re.geometry,ie=re.material,Ot=re.group;if(ie.side===be&&ge.layers.test(Y.layers)){const Re=ie.side;ie.side=Ue,ie.needsUpdate=!0,ns(ge,X,Y,pe,ie,Ot),ie.side=Re,ie.needsUpdate=!0,Xt=!0}}Xt===!0&&(T.updateMultisampleRenderTarget(ft),T.updateRenderTargetMipmap(ft))}x.setRenderTarget(At),x.setClearColor(et,$),Wt!==void 0&&(Y.viewport=Wt),x.toneMapping=Lt}function zn(w,O,X){const Y=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ft=w.length;z<ft;z++){const wt=w[z],At=wt.object,Lt=wt.geometry,Wt=Y===null?wt.material:Y,Xt=wt.group;At.layers.test(X.layers)&&ns(At,O,X,Lt,Wt,Xt)}}function ns(w,O,X,Y,z,ft){w.onBeforeRender(x,O,X,Y,z,ft),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(x,O,X,Y,w,ft),z.transparent===!0&&z.side===be&&z.forceSinglePass===!1?(z.side=Ue,z.needsUpdate=!0,x.renderBufferDirect(X,O,Y,z,w,ft),z.side=Bn,z.needsUpdate=!0,x.renderBufferDirect(X,O,Y,z,w,ft),z.side=be):x.renderBufferDirect(X,O,Y,z,w,ft),w.onAfterRender(x,O,X,Y,z,ft)}function An(w,O,X){O.isScene!==!0&&(O=Qt);const Y=bt.get(w),z=p.state.lights,ft=p.state.shadowsArray,wt=z.state.version,At=q.getParameters(w,z.state,ft,O,X),Lt=q.getProgramCacheKey(At);let Wt=Y.programs;Y.environment=w.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(w.isMeshStandardMaterial?N:v).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Wt===void 0&&(w.addEventListener("dispose",Pt),Wt=new Map,Y.programs=Wt);let Xt=Wt.get(Lt);if(Xt!==void 0){if(Y.currentProgram===Xt&&Y.lightsStateVersion===wt)return is(w,At),Xt}else At.uniforms=q.getUniforms(w),w.onBeforeCompile(At,x),Xt=q.acquireProgram(At,Lt),Wt.set(Lt,Xt),Y.uniforms=At.uniforms;const Ft=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ft.clippingPlanes=tt.uniform),is(w,At),Y.needsLights=Jl(w),Y.lightsStateVersion=wt,Y.needsLights&&(Ft.ambientLightColor.value=z.state.ambient,Ft.lightProbe.value=z.state.probe,Ft.directionalLights.value=z.state.directional,Ft.directionalLightShadows.value=z.state.directionalShadow,Ft.spotLights.value=z.state.spot,Ft.spotLightShadows.value=z.state.spotShadow,Ft.rectAreaLights.value=z.state.rectArea,Ft.ltc_1.value=z.state.rectAreaLTC1,Ft.ltc_2.value=z.state.rectAreaLTC2,Ft.pointLights.value=z.state.point,Ft.pointLightShadows.value=z.state.pointShadow,Ft.hemisphereLights.value=z.state.hemi,Ft.directionalShadowMap.value=z.state.directionalShadowMap,Ft.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ft.spotShadowMap.value=z.state.spotShadowMap,Ft.spotLightMatrix.value=z.state.spotLightMatrix,Ft.spotLightMap.value=z.state.spotLightMap,Ft.pointShadowMap.value=z.state.pointShadowMap,Ft.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=Xt,Y.uniformsList=null,Xt}function Rn(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=Fs.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function is(w,O){const X=bt.get(w);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function js(w,O,X,Y,z){O.isScene!==!0&&(O=Qt),T.resetTextureUnits();const ft=O.fog,wt=Y.isMeshStandardMaterial?O.environment:null,At=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ri,Lt=(Y.isMeshStandardMaterial?N:v).get(Y.envMap||wt),Wt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Xt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ft=!!X.morphAttributes.position,te=!!X.morphAttributes.normal,re=!!X.morphAttributes.color;let ge=Fn;Y.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ge=x.toneMapping);const pe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ie=pe!==void 0?pe.length:0,Ot=bt.get(Y),Re=p.state.lights;if(ct===!0&&(yt===!0||w!==M)){const Ie=w===M&&Y.id===E;tt.setState(Y,w,Ie)}let oe=!1;Y.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Re.state.version||Ot.outputColorSpace!==At||z.isBatchedMesh&&Ot.batching===!1||!z.isBatchedMesh&&Ot.batching===!0||z.isBatchedMesh&&Ot.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ot.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ot.instancing===!1||!z.isInstancedMesh&&Ot.instancing===!0||z.isSkinnedMesh&&Ot.skinning===!1||!z.isSkinnedMesh&&Ot.skinning===!0||z.isInstancedMesh&&Ot.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ot.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ot.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ot.instancingMorph===!1&&z.morphTexture!==null||Ot.envMap!==Lt||Y.fog===!0&&Ot.fog!==ft||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==tt.numPlanes||Ot.numIntersection!==tt.numIntersection)||Ot.vertexAlphas!==Wt||Ot.vertexTangents!==Xt||Ot.morphTargets!==Ft||Ot.morphNormals!==te||Ot.morphColors!==re||Ot.toneMapping!==ge||Ot.morphTargetsCount!==ie)&&(oe=!0):(oe=!0,Ot.__version=Y.version);let Ke=Ot.currentProgram;oe===!0&&(Ke=An(Y,O,z));let ei=!1,ze=!1,Oi=!1;const fe=Ke.getUniforms(),Ye=Ot.uniforms;if(ot.useProgram(Ke.program)&&(ei=!0,ze=!0,Oi=!0),Y.id!==E&&(E=Y.id,ze=!0),ei||M!==w){ot.buffers.depth.getReversed()?(_t.copy(w.projectionMatrix),zc(_t),kc(_t),fe.setValue(L,"projectionMatrix",_t)):fe.setValue(L,"projectionMatrix",w.projectionMatrix),fe.setValue(L,"viewMatrix",w.matrixWorldInverse);const Fe=fe.map.cameraPosition;Fe!==void 0&&Fe.setValue(L,Nt.setFromMatrixPosition(w.matrixWorld)),Ct.logarithmicDepthBuffer&&fe.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&fe.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,ze=!0,Oi=!0)}if(z.isSkinnedMesh){fe.setOptional(L,z,"bindMatrix"),fe.setOptional(L,z,"bindMatrixInverse");const Ie=z.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),fe.setValue(L,"boneTexture",Ie.boneTexture,T))}z.isBatchedMesh&&(fe.setOptional(L,z,"batchingTexture"),fe.setValue(L,"batchingTexture",z._matricesTexture,T),fe.setOptional(L,z,"batchingIdTexture"),fe.setValue(L,"batchingIdTexture",z._indirectTexture,T),fe.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&fe.setValue(L,"batchingColorTexture",z._colorsTexture,T));const $e=X.morphAttributes;if(($e.position!==void 0||$e.normal!==void 0||$e.color!==void 0)&&St.update(z,X,Ke),(ze||Ot.receiveShadow!==z.receiveShadow)&&(Ot.receiveShadow=z.receiveShadow,fe.setValue(L,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ye.envMap.value=Lt,Ye.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(Ye.envMapIntensity.value=O.environmentIntensity),ze&&(fe.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ot.needsLights&&ss(Ye,Oi),ft&&Y.fog===!0&&j.refreshFogUniforms(Ye,ft),j.refreshMaterialUniforms(Ye,Y,H,J,p.state.transmissionRenderTarget[w.id]),Fs.upload(L,Rn(Ot),Ye,T)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Fs.upload(L,Rn(Ot),Ye,T),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&fe.setValue(L,"center",z.center),fe.setValue(L,"modelViewMatrix",z.modelViewMatrix),fe.setValue(L,"normalMatrix",z.normalMatrix),fe.setValue(L,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ie=Y.uniformsGroups;for(let Fe=0,Ks=Ie.length;Fe<Ks;Fe++){const kn=Ie[Fe];F.update(kn,Ke),F.bind(kn,Ke)}}return Ke}function ss(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Jl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(w,O,X){bt.get(w.texture).__webglTexture=O,bt.get(w.depthTexture).__webglTexture=X;const Y=bt.get(w);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const X=bt.get(w);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};const Ql=L.createFramebuffer();this.setRenderTarget=function(w,O=0,X=0){D=w,A=O,P=X;let Y=!0,z=null,ft=!1,wt=!1;if(w){const Lt=bt.get(w);if(Lt.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(Lt.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(Lt.__hasExternalTextures)T.rebindTextures(w,bt.get(w.texture).__webglTexture,bt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ft=w.depthTexture;if(Lt.__boundDepthTexture!==Ft){if(Ft!==null&&bt.has(Ft)&&(w.width!==Ft.image.width||w.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}const Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(wt=!0);const Xt=bt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xt[O])?z=Xt[O][X]:z=Xt[O],ft=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?z=bt.get(w).__webglMultisampledFramebuffer:Array.isArray(Xt)?z=Xt[X]:z=Xt,U.copy(w.viewport),V.copy(w.scissor),G=w.scissorTest}else U.copy(Et).multiplyScalar(H).floor(),V.copy(kt).multiplyScalar(H).floor(),G=Yt;if(X!==0&&(z=Ql),ot.bindFramebuffer(L.FRAMEBUFFER,z)&&Y&&ot.drawBuffers(w,z),ot.viewport(U),ot.scissor(V),ot.setScissorTest(G),ft){const Lt=bt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Lt.__webglTexture,X)}else if(wt){const Lt=bt.get(w.texture),Wt=O;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Lt.__webglTexture,X,Wt)}else if(w!==null&&X!==0){const Lt=bt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Lt.__webglTexture,X)}E=-1},this.readRenderTargetPixels=function(w,O,X,Y,z,ft,wt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At){ot.bindFramebuffer(L.FRAMEBUFFER,At);try{const Lt=w.texture,Wt=Lt.format,Xt=Lt.type;if(!Ct.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-Y&&X>=0&&X<=w.height-z&&L.readPixels(O,X,Y,z,Dt.convert(Wt),Dt.convert(Xt),ft)}finally{const Lt=D!==null?bt.get(D).__webglFramebuffer:null;ot.bindFramebuffer(L.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(w,O,X,Y,z,ft,wt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At){const Lt=w.texture,Wt=Lt.format,Xt=Lt.type;if(!Ct.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-Y&&X>=0&&X<=w.height-z){ot.bindFramebuffer(L.FRAMEBUFFER,At);const Ft=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ft),L.bufferData(L.PIXEL_PACK_BUFFER,ft.byteLength,L.STREAM_READ),L.readPixels(O,X,Y,z,Dt.convert(Wt),Dt.convert(Xt),0);const te=D!==null?bt.get(D).__webglFramebuffer:null;ot.bindFramebuffer(L.FRAMEBUFFER,te);const re=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Bc(L,re,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ft),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ft),L.deleteBuffer(Ft),L.deleteSync(re),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,X=0){w.isTexture!==!0&&(gi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const Y=Math.pow(2,-X),z=Math.floor(w.image.width*Y),ft=Math.floor(w.image.height*Y),wt=O!==null?O.x:0,At=O!==null?O.y:0;T.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,wt,At,z,ft),ot.unbindTexture()};const tc=L.createFramebuffer(),ec=L.createFramebuffer();this.copyTextureToTexture=function(w,O,X=null,Y=null,z=0,ft=null){w.isTexture!==!0&&(gi("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,w=arguments[1],O=arguments[2],ft=arguments[3]||0,X=null),ft===null&&(z!==0?(gi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ft=z,z=0):ft=0);let wt,At,Lt,Wt,Xt,Ft,te,re,ge;const pe=w.isCompressedTexture?w.mipmaps[ft]:w.image;if(X!==null)wt=X.max.x-X.min.x,At=X.max.y-X.min.y,Lt=X.isBox3?X.max.z-X.min.z:1,Wt=X.min.x,Xt=X.min.y,Ft=X.isBox3?X.min.z:0;else{const $e=Math.pow(2,-z);wt=Math.floor(pe.width*$e),At=Math.floor(pe.height*$e),w.isDataArrayTexture?Lt=pe.depth:w.isData3DTexture?Lt=Math.floor(pe.depth*$e):Lt=1,Wt=0,Xt=0,Ft=0}Y!==null?(te=Y.x,re=Y.y,ge=Y.z):(te=0,re=0,ge=0);const ie=Dt.convert(O.format),Ot=Dt.convert(O.type);let Re;O.isData3DTexture?(T.setTexture3D(O,0),Re=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(T.setTexture2DArray(O,0),Re=L.TEXTURE_2D_ARRAY):(T.setTexture2D(O,0),Re=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const oe=L.getParameter(L.UNPACK_ROW_LENGTH),Ke=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ei=L.getParameter(L.UNPACK_SKIP_PIXELS),ze=L.getParameter(L.UNPACK_SKIP_ROWS),Oi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,pe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Wt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ft);const fe=w.isDataArrayTexture||w.isData3DTexture,Ye=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const $e=bt.get(w),Ie=bt.get(O),Fe=bt.get($e.__renderTarget),Ks=bt.get(Ie.__renderTarget);ot.bindFramebuffer(L.READ_FRAMEBUFFER,Fe.__webglFramebuffer),ot.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ks.__webglFramebuffer);for(let kn=0;kn<Lt;kn++)fe&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bt.get(w).__webglTexture,z,Ft+kn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bt.get(O).__webglTexture,ft,ge+kn)),L.blitFramebuffer(Wt,Xt,wt,At,te,re,wt,At,L.DEPTH_BUFFER_BIT,L.NEAREST);ot.bindFramebuffer(L.READ_FRAMEBUFFER,null),ot.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||bt.has(w)){const $e=bt.get(w),Ie=bt.get(O);ot.bindFramebuffer(L.READ_FRAMEBUFFER,tc),ot.bindFramebuffer(L.DRAW_FRAMEBUFFER,ec);for(let Fe=0;Fe<Lt;Fe++)fe?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,$e.__webglTexture,z,Ft+Fe):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,$e.__webglTexture,z),Ye?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ie.__webglTexture,ft,ge+Fe):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ie.__webglTexture,ft),z!==0?L.blitFramebuffer(Wt,Xt,wt,At,te,re,wt,At,L.COLOR_BUFFER_BIT,L.NEAREST):Ye?L.copyTexSubImage3D(Re,ft,te,re,ge+Fe,Wt,Xt,wt,At):L.copyTexSubImage2D(Re,ft,te,re,Wt,Xt,wt,At);ot.bindFramebuffer(L.READ_FRAMEBUFFER,null),ot.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ye?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Re,ft,te,re,ge,wt,At,Lt,ie,Ot,pe.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Re,ft,te,re,ge,wt,At,Lt,ie,pe.data):L.texSubImage3D(Re,ft,te,re,ge,wt,At,Lt,ie,Ot,pe):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ft,te,re,wt,At,ie,Ot,pe.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ft,te,re,pe.width,pe.height,ie,pe.data):L.texSubImage2D(L.TEXTURE_2D,ft,te,re,wt,At,ie,Ot,pe);L.pixelStorei(L.UNPACK_ROW_LENGTH,oe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ke),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ei),L.pixelStorei(L.UNPACK_SKIP_ROWS,ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Oi),ft===0&&O.generateMipmaps&&L.generateMipmap(Re),ot.unbindTexture()},this.copyTextureToTexture3D=function(w,O,X=null,Y=null,z=0){return w.isTexture!==!0&&(gi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,w=arguments[2],O=arguments[3],z=arguments[4]||0),gi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,X,Y,z)},this.initRenderTarget=function(w){bt.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),ot.unbindTexture()},this.resetState=function(){A=0,P=0,D=null,ot.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}const Zl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ui{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const vm=new Go(-1,1,1,-1,0,1);class xm extends ye{constructor(){super(),this.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ce([0,2,0,0,2,0],2))}}const Mm=new xm;class Wo{constructor(t){this._mesh=new R(Mm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,vm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ym extends Ui{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Te?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ji.clone(t.uniforms),this.material=new Te({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Wo(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class el extends Ui{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Sm extends Ui{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class wm{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Mt);this._width=n.width,this._height=n.height,e=new on(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ym(Zl),this.copyPass.material.blending=Sn,this.clock=new Vl}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}el!==void 0&&(o instanceof el?n=!0:o instanceof Sm&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Em extends Ui{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Bt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const bm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Bt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Li extends Ui{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Mt(t.x,t.y):new Mt(256,256),this.clearColor=new Bt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new on(r,o,{type:wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new on(r,o,{type:wn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new on(r,o,{type:wn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=bm;this.highPassUniforms=ji.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Te({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Mt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Zl;this.copyUniforms=ji.clone(h.uniforms),this.blendMaterial=new Te({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ur,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Bt,this.oldClearAlpha=1,this.basic=new me,this.fsQuad=new Wo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Mt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Li.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Li.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Te({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Mt(.5,.5)},direction:{value:new Mt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Te({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Li.BlurDirectionX=new Mt(1,0);Li.BlurDirectionY=new Mt(0,1);const Tm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Am extends Ui{constructor(){super();const t=Tm;this.uniforms=ji.clone(t.uniforms),this.material=new Ah({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Wo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ne.getTransfer(this._outputColorSpace)===ae&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===cl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ul?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===To?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===dl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class nl{constructor(t={minX:-60,maxX:60,minZ:-60,maxZ:60}){this.boxes=[],this.walkables=[],this.bounds=t,this.heightFn=()=>0}setHeightFunction(t){this.heightFn=t}addBox(t,e,n,i,r,o,a="solid"){const l=i*.5,c=r*.5,h=o*.5;this.boxes.push({minX:t-l,maxX:t+l,minY:e-c,maxY:e+c,minZ:n-h,maxZ:n+h,tag:a})}addBoxMinMax(t,e,n,i,r,o,a="solid"){this.boxes.push({minX:t,minY:e,minZ:n,maxX:i,maxY:r,maxZ:o,tag:a})}addWalkable(t,e,n,i,r){this.walkables.push({minX:t-n*.5,maxX:t+n*.5,minZ:e-i*.5,maxZ:e+i*.5,topY:r})}getFloorHeight(t,e,n=0){let i=this.heightFn(t,e);for(const r of this.walkables)t>=r.minX&&t<=r.maxX&&e>=r.minZ&&e<=r.maxZ&&n>=r.topY-.65&&(i=Math.max(i,r.topY));return i}resolveHorizontal(t,e,n,i=1.75){t.x=Math.max(this.bounds.minX+e,Math.min(this.bounds.maxX-e,t.x)),t.z=Math.max(this.bounds.minZ+e,Math.min(this.bounds.maxZ-e,t.z));for(let r=0;r<2;r++)for(const o of this.boxes){if(n+i<=o.minY+.05||n>=o.maxY-.15)continue;const a=Math.max(o.minX,Math.min(t.x,o.maxX)),l=Math.max(o.minZ,Math.min(t.z,o.maxZ)),c=t.x-a,h=t.z-l,u=c*c+h*h;if(u<e*e)if(u>1e-5){const d=Math.sqrt(u),f=e-d;t.x+=c/d*f,t.z+=h/d*f}else{const d=Math.abs(t.x-o.minX),f=Math.abs(o.maxX-t.x),g=Math.abs(t.z-o.minZ),_=Math.abs(o.maxZ-t.z),m=Math.min(d,f,g,_);m===d?t.x=o.minX-e:m===f?t.x=o.maxX+e:m===g?t.z=o.minZ-e:t.z=o.maxZ+e}}}raycast(t,e,n=200){let i=n,r=null,o=new b(0,1,0);const a=e.x!==0?1/e.x:1e9,l=e.y!==0?1/e.y:1e9,c=e.z!==0?1/e.z:1e9;for(const u of this.boxes){const d=(u.minX-t.x)*a,f=(u.maxX-t.x)*a,g=(u.minY-t.y)*l,_=(u.maxY-t.y)*l,m=(u.minZ-t.z)*c,p=(u.maxZ-t.z)*c,S=Math.min(d,f),y=Math.max(d,f),x=Math.min(g,_),C=Math.max(g,_),A=Math.min(m,p),P=Math.max(m,p),D=Math.max(S,x,A),E=Math.min(y,C,P);E>=0&&D<=E&&D>.02&&D<i&&(i=D,r=u,D===S?o.set(e.x>0?-1:1,0,0):D===x?o.set(0,e.y>0?-1:1,0):o.set(0,0,e.z>0?-1:1))}if(e.y<-.001){const d=(this.heightFn(t.x,t.z)-t.y)/e.y;d>.02&&d<i&&(i=d,r={tag:"ground"},o.set(0,1,0))}if(!r)return null;const h=t.clone().addScaledVector(e,i);return{hit:!0,dist:i,point:h,normal:o,tag:r.tag}}hasLineOfSight(t,e){const n=new b().subVectors(e,t),i=n.length();return i<.01?!0:(n.divideScalar(i),!this.raycast(t,n,i-.25))}}class Rm{constructor(t){this.scene=t,this.bursts=[],this.tracers=[],this.rings=[],this.ambient=null,this.ambientVel=[],this.ambientBounds=null,this.tumbleweeds=[],this.mistEmitters=[],this.sharedBoxGeo=new rt(1,1,1),this.sharedSphereGeo=new xe(.5,6,6)}initAmbient(t,e){this.ambientBounds=e;const n=t==="sakura"?520:t==="alpine"?420:340,i=new Float32Array(n*3),r=new Float32Array(n*3);this.ambientVel=[];const o=new Bt(t==="sakura"?16758735:t==="alpine"?15268351:16765578),a=new Bt(t==="sakura"?16770284:t==="alpine"?16774604:14917204),l=e.maxX-e.minX,c=e.maxZ-e.minZ,h=new Bt;for(let f=0;f<n;f++)i[f*3]=e.minX+Math.random()*l,i[f*3+1]=.5+Math.random()*16,i[f*3+2]=e.minZ+Math.random()*c,h.copy(o).lerp(a,Math.random()),r[f*3]=h.r,r[f*3+1]=h.g,r[f*3+2]=h.b,t==="sakura"?this.ambientVel.push({vx:.9+Math.random()*1.1,vy:-(.55+Math.random()*.7),vz:.35+Math.random()*.6,phase:Math.random()*Math.PI*2}):t==="alpine"?this.ambientVel.push({vx:.4+Math.random()*.7,vy:-.15+Math.random()*.35,vz:-.3+Math.random()*.6,phase:Math.random()*Math.PI*2}):this.ambientVel.push({vx:1.4+Math.random()*1.5,vy:-.05+Math.random()*.25,vz:-.3+Math.random()*.6,phase:Math.random()*Math.PI*2});const u=new ye;u.setAttribute("position",new je(i,3)),u.setAttribute("color",new je(r,3));const d=new Fl({size:t==="sakura"?.26:t==="alpine"?.19:.16,vertexColors:!0,transparent:!0,opacity:t==="sakura"?.9:.68,depthWrite:!1});this.ambient=new uh(u,d),this.scene.add(this.ambient)}addTumbleweed(t,e=1){const n=new se,i=new vt({color:8215864,roughness:.95,wireframe:!0}),r=new R(new Ys(.65,1),i),o=new R(new bn(.72,0),i);n.add(r,o),n.position.copy(t),this.scene.add(n),this.tumbleweeds.push({mesh:n,vx:e*(2.6+Math.random()*1.4),vz:(Math.random()-.5)*.8,bouncePhase:Math.random()*Math.PI*2})}addMistEmitter(t,e=3.5){this.mistEmitters.push({pos:t.clone(),radius:e,timer:0})}spawnImpact(t,e=16764006,n=12,i=7){for(let r=0;r<n;r++){const o=new me({color:e,transparent:!0,opacity:1}),a=new R(this.sharedBoxGeo,o),l=.06+Math.random()*.09;a.scale.set(l,l,l),a.position.copy(t);const c=new b((Math.random()-.5)*2,Math.random()*1.4+.3,(Math.random()-.5)*2).normalize().multiplyScalar(i*(.4+Math.random()*.8));this.scene.add(a),this.bursts.push({mesh:a,vel:c,gravity:15,life:.28+Math.random()*.32,maxLife:.6,grow:0})}}spawnSmoke(t,e=14537926,n=6,i=.4){for(let r=0;r<n;r++){const o=new me({color:e,transparent:!0,opacity:.55,depthWrite:!1}),a=new R(this.sharedSphereGeo,o),l=i*(.6+Math.random()*.7);a.scale.set(l,l,l),a.position.copy(t).add(new b((Math.random()-.5)*.3,(Math.random()-.5)*.3,(Math.random()-.5)*.3));const c=new b((Math.random()-.5)*1.4,1.1+Math.random()*1.6,(Math.random()-.5)*1.4);this.scene.add(a),this.bursts.push({mesh:a,vel:c,gravity:-.8,life:.45+Math.random()*.45,maxLife:.9,grow:1.6})}}spawnExplosion(t,e=6){this.spawnImpact(t,16756275,28,14),this.spawnImpact(t,16729364,22,10),this.spawnSmoke(t,3681833,14,1.3);const n=new zo(.4,.9,28);n.rotateX(-Math.PI/2);const i=new me({color:16757575,transparent:!0,opacity:.9,side:be,depthWrite:!1}),r=new R(n,i);r.position.copy(t),r.position.y+=.25,this.scene.add(r),this.rings.push({mesh:r,life:.45,maxLife:.45,targetScale:e*1.4});const o=new me({color:16770196,transparent:!0,opacity:.95}),a=new R(new xe(1,12,10),o);a.position.copy(t),this.scene.add(a),this.rings.push({mesh:a,life:.25,maxLife:.25,targetScale:e*.72})}spawnTracer(t,e,n=16770457,i=.085){const r=new ye().setFromPoints([t,e]),o=new yo({color:n,transparent:!0,opacity:.95}),a=new xa(r,o);this.scene.add(a),this.tracers.push({line:a,life:i,maxLife:i})}spawnSlashArc(t,e,n,i=14677759){const r=[];for(let c=0;c<=12;c++){const h=-1.05+c/12*2.1,u=t.clone().addScaledVector(e,Math.cos(h)*1.9).addScaledVector(n,Math.sin(h)*1.7);u.y+=Math.sin(h)*.22-.15,r.push(u)}const o=new ye().setFromPoints(r),a=new yo({color:i,transparent:!0,opacity:1}),l=new xa(o,a);this.scene.add(l),this.tracers.push({line:l,life:.16,maxLife:.16})}update(t,e){if(this.ambient&&this.ambientBounds){const n=this.ambient.geometry.attributes.position.array,i=this.ambientBounds;for(let r=0;r<this.ambientVel.length;r++){const o=this.ambientVel[r],a=r*3;n[a]+=(o.vx+Math.sin(e*1.5+o.phase)*.5)*t,n[a+1]+=o.vy*t,n[a+2]+=(o.vz+Math.cos(e*1.3+o.phase)*.4)*t,n[a]>i.maxX&&(n[a]=i.minX),n[a]<i.minX&&(n[a]=i.maxX),n[a+2]>i.maxZ&&(n[a+2]=i.minZ),n[a+2]<i.minZ&&(n[a+2]=i.maxZ),n[a+1]<.2&&(n[a+1]=15+Math.random()*4),n[a+1]>20&&(n[a+1]=1)}this.ambient.geometry.attributes.position.needsUpdate=!0}for(const n of this.tumbleweeds)n.mesh.position.x+=n.vx*t,n.mesh.position.z+=n.vz*t,n.mesh.rotation.z-=n.vx*t*1.4,n.mesh.rotation.x+=n.vz*t*.8,n.mesh.position.y=.68+Math.abs(Math.sin(e*3.8+n.bouncePhase))*.35,this.ambientBounds&&(n.mesh.position.x>this.ambientBounds.maxX-4&&(n.mesh.position.x=this.ambientBounds.minX+4),n.mesh.position.x<this.ambientBounds.minX+4&&(n.mesh.position.x=this.ambientBounds.maxX-4));for(const n of this.mistEmitters)if(n.timer-=t,n.timer<=0){n.timer=.12;const i=n.pos.clone().add(new b((Math.random()-.5)*n.radius*2,Math.random()*1.2,(Math.random()-.5)*n.radius));this.spawnSmoke(i,15268351,1,1.35)}for(let n=this.bursts.length-1;n>=0;n--){const i=this.bursts[n];if(i.life-=t,i.life<=0){this.scene.remove(i.mesh),i.mesh.material.dispose(),this.bursts.splice(n,1);continue}i.vel.y-=i.gravity*t,i.mesh.position.addScaledVector(i.vel,t),i.mesh.rotation.x+=t*4,i.mesh.rotation.y+=t*3,i.grow>0&&i.mesh.scale.addScalar(i.grow*t),i.mesh.material.opacity=Math.max(0,i.life/i.maxLife*.85)}for(let n=this.tracers.length-1;n>=0;n--){const i=this.tracers[n];if(i.life-=t,i.life<=0){this.scene.remove(i.line),i.line.geometry.dispose(),i.line.material.dispose(),this.tracers.splice(n,1);continue}i.line.material.opacity=i.life/i.maxLife}for(let n=this.rings.length-1;n>=0;n--){const i=this.rings[n];if(i.life-=t,i.life<=0){this.scene.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material.dispose(),this.rings.splice(n,1);continue}const r=1-i.life/i.maxLife,o=.5+r*i.targetScale;i.mesh.scale.set(o,o,o),i.mesh.material.opacity=(1-r)*.85}}}class Cm{constructor(){this.ctx=null,this.master=null,this.musicGain=null,this.sfxGain=null,this.muted=!1,this.musicTimer=null,this.currentTheme=null,this.step=0,this.noiseBuffer=null}ensureInit(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.72,this.master.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.28,this.musicGain.connect(this.master),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.85,this.sfxGain.connect(this.master);const e=this.ctx.sampleRate,n=Math.floor(e*1.5);this.noiseBuffer=this.ctx.createBuffer(1,n,e);const i=this.noiseBuffer.getChannelData(0);for(let r=0;r<n;r++)i[r]=Math.random()*2-1}setMuted(t){this.muted=t,this.master&&this.master.gain.setTargetAtTime(t?0:.72,this.ctx.currentTime,.04)}toggleMute(){return this.setMuted(!this.muted),this.muted}stopMusic(){this.musicTimer&&(clearInterval(this.musicTimer),this.musicTimer=null),this.currentTheme=null}startMusic(t){if(this.ensureInit(),!!this.ctx&&!(this.currentTheme===t&&this.musicTimer)){if(this.stopMusic(),this.currentTheme=t,this.step=0,t==="west"){const e=[73.42,73.42,110,87.31,73.42,73.42,65.41,82.41],n=[293.66,349.23,440,329.63,293.66,0,261.63,329.63],i=[587.33,659.25,698.46,880,0,698.46,659.25,587.33];this.musicTimer=setInterval(()=>{if(!this.ctx||this.muted)return;const r=this.step++,o=this.ctx.currentTime;this._tone(e[r%e.length],"triangle",.24,.26,o,this.musicGain,320);const a=n[r%n.length];if(a>0&&this._tone(a,"sawtooth",.34,.14,o,this.musicGain,1100),r%2===0&&Math.floor(r/8)%2===0){const l=i[(r>>1)%i.length];l>0&&this._whistle(l,.65,.11,o)}},340)}else if(t==="japan"){const e=[293.66,329.63,349.23,440,466.16,587.33,440,349.23],n=[587.33,0,659.25,698.46,880,0,698.46,587.33];this.musicTimer=setInterval(()=>{if(!this.ctx||this.muted)return;const i=this.step++,r=this.ctx.currentTime;if((i%8===0||i%8===5)&&this._taiko(r,i%8===0?.32:.18),i%2===0||i%7===0){const o=e[i*3%e.length];this._tone(o,"triangle",.52,.17,r,this.musicGain,2200)}if(i%4===1){const o=n[(i>>2)%n.length];o>0&&this._whistle(o,1.1,.1,r)}},380)}else if(t==="swiss"){const e=[174.61,261.63,349.23,440,523.25,440,349.23,261.63],n=[349.23,440,523.25,349.23,293.66,392,523.25,440];this.musicTimer=setInterval(()=>{if(!this.ctx||this.muted)return;const i=this.step++,r=this.ctx.currentTime,o=n[i%n.length];if(this._tone(o,"triangle",.36,.15,r,this.musicGain,1600),i%4===0){const a=e[(i>>2)%e.length];this._alphorn(a,1.25,.2,r)}},360)}}}_tone(t,e,n,i,r,o,a=1800){const l=this.ctx.createOscillator(),c=this.ctx.createBiquadFilter(),h=this.ctx.createGain();l.type=e,l.frequency.setValueAtTime(t,r),c.type="lowpass",c.frequency.setValueAtTime(a,r),c.frequency.exponentialRampToValueAtTime(220,r+n),h.gain.setValueAtTime(.001,r),h.gain.linearRampToValueAtTime(i,r+.015),h.gain.exponentialRampToValueAtTime(8e-4,r+n),l.connect(c),c.connect(h),h.connect(o),l.start(r),l.stop(r+n+.02)}_whistle(t,e,n,i){const r=this.ctx.createOscillator(),o=this.ctx.createOscillator(),a=this.ctx.createGain(),l=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(t*.96,i),r.frequency.exponentialRampToValueAtTime(t,i+.09),o.frequency.value=5.5,a.gain.value=t*.012,o.connect(a),a.connect(r.frequency),l.gain.setValueAtTime(.001,i),l.gain.linearRampToValueAtTime(n,i+.12),l.gain.exponentialRampToValueAtTime(8e-4,i+e),r.connect(l),l.connect(this.musicGain),r.start(i),o.start(i),r.stop(i+e+.03),o.stop(i+e+.03)}_alphorn(t,e,n,i){const r=this.ctx.createOscillator(),o=this.ctx.createOscillator(),a=this.ctx.createBiquadFilter(),l=this.ctx.createGain();r.type="sawtooth",o.type="triangle",r.frequency.setValueAtTime(t,i),o.frequency.setValueAtTime(t*.5,i),a.type="lowpass",a.frequency.setValueAtTime(750,i),a.Q.value=2,l.gain.setValueAtTime(.001,i),l.gain.linearRampToValueAtTime(n,i+.18),l.gain.setValueAtTime(n*.85,i+e*.7),l.gain.exponentialRampToValueAtTime(8e-4,i+e),r.connect(a),o.connect(a),a.connect(l),l.connect(this.musicGain),r.start(i),o.start(i),r.stop(i+e+.05),o.stop(i+e+.05)}_taiko(t,e){const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(115,t),n.frequency.exponentialRampToValueAtTime(42,t+.35),i.gain.setValueAtTime(e,t),i.gain.exponentialRampToValueAtTime(.001,t+.45),n.connect(i),i.connect(this.musicGain),n.start(t),n.stop(t+.48)}_noiseBurst(t,e,n,i="bandpass",r=1){if(!this.ctx||!this.noiseBuffer)return;const o=this.ctx.currentTime,a=this.ctx.createBufferSource();a.buffer=this.noiseBuffer;const l=this.ctx.createBiquadFilter();l.type=i,l.frequency.setValueAtTime(n,o),l.Q.value=r;const c=this.ctx.createGain();c.gain.setValueAtTime(e,o),c.gain.exponentialRampToValueAtTime(.001,o+t),a.connect(l),l.connect(c),c.connect(this.sfxGain),a.start(o),a.stop(o+t+.02)}playShot(t="revolver"){if(this.ensureInit(),!this.ctx)return;const e=this.ctx.currentTime;if(t==="revolver"||t==="rifle"){const n=t==="rifle";this._noiseBurst(n?.32:.22,n?.9:.72,n?1150:1450,"lowpass");const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(n?240:320,e),i.frequency.exponentialRampToValueAtTime(42,e+(n?.22:.14)),r.gain.setValueAtTime(n?.65:.5,e),r.gain.exponentialRampToValueAtTime(.001,e+.22),i.connect(r),r.connect(this.sfxGain),i.start(e),i.stop(e+.24)}else if(t==="shotgun"||t==="musket"){this._noiseBurst(.45,1,950,"lowpass");const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(175,e),n.frequency.exponentialRampToValueAtTime(28,e+.32),i.gain.setValueAtTime(.85,e),i.gain.exponentialRampToValueAtTime(.001,e+.34),n.connect(i),i.connect(this.sfxGain),n.start(e),n.stop(e+.36)}else if(t==="bow"||t==="crossbow"){this._noiseBurst(.11,.45,2200,"bandpass",2);const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(t==="crossbow"?420:280,e),n.frequency.exponentialRampToValueAtTime(110,e+.16),i.gain.setValueAtTime(.55,e),i.gain.exponentialRampToValueAtTime(.001,e+.18),n.connect(i),i.connect(this.sfxGain),n.start(e),n.stop(e+.2)}else if(t==="shuriken")this._noiseBurst(.09,.4,3800,"highpass"),this._tone(1650,"sine",.08,.22,e,this.sfxGain,4e3);else if(t==="slash"){this._noiseBurst(.18,.6,2600,"bandpass",1.4);const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(900,e),n.frequency.exponentialRampToValueAtTime(220,e+.16),i.gain.setValueAtTime(.28,e),i.gain.exponentialRampToValueAtTime(.001,e+.18),n.connect(i),i.connect(this.sfxGain),n.start(e),n.stop(e+.19)}else t==="throw"&&this._noiseBurst(.14,.35,1600,"bandpass")}playReload(){if(this.ensureInit(),!this.ctx)return;const t=this.ctx.currentTime;this._tone(780,"square",.045,.16,t,this.sfxGain,2200),this._tone(1120,"square",.055,.18,t+.18,this.sfxGain,2600),this._tone(640,"triangle",.06,.2,t+.36,this.sfxGain,1800)}playExplosion(){if(this.ensureInit(),!this.ctx)return;const t=this.ctx.currentTime;this._noiseBurst(.95,1,520,"lowpass");const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(22,t+.7),n.gain.setValueAtTime(.95,t),n.gain.exponentialRampToValueAtTime(.001,t+.8),e.connect(n),n.connect(this.sfxGain),e.start(t),e.stop(t+.85)}playHit(t=!1){if(this.ensureInit(),!this.ctx)return;const e=this.ctx.currentTime;this._tone(t?1320:840,"triangle",.09,.32,e,this.sfxGain,3200),t&&this._tone(1760,"sine",.14,.34,e+.04,this.sfxGain,4200)}playHurt(){if(this.ensureInit(),!this.ctx)return;const t=this.ctx.currentTime;this._noiseBurst(.16,.45,650,"lowpass"),this._tone(130,"sawtooth",.18,.38,t,this.sfxGain,450)}playPickup(){if(this.ensureInit(),!this.ctx)return;const t=this.ctx.currentTime;this._tone(587.33,"triangle",.11,.28,t,this.sfxGain,2800),this._tone(880,"triangle",.18,.28,t+.09,this.sfxGain,3200)}playBossHorn(){if(this.ensureInit(),!this.ctx)return;const t=this.ctx.currentTime;this._alphorn(146.83,1.4,.45,t),this._alphorn(220,1.4,.35,t+.15)}}const Pm={west:[{id:"revolver",name:".45 PEACEMAKER",shortName:"Revolver",kind:"hitscan",sound:"revolver",damage:38,headMult:2.1,pellets:1,spread:.012,fireRate:.28,magSize:6,reserve:48,reloadTime:1.05,recoil:.14,altMode:"fan",altHint:"RMB: Fan Hammer",tracerColor:16770206},{id:"shotgun",name:"10-GAUGE COACH GUN",shortName:"Shotgun",kind:"hitscan",sound:"shotgun",damage:19,headMult:1.5,pellets:8,spread:.085,fireRate:.65,magSize:2,reserve:24,reloadTime:1.15,recoil:.28,altMode:"double",altHint:"RMB: Both Barrels",tracerColor:16762480},{id:"rifle",name:"HENRY .44 SCOPED",shortName:"Rifle",kind:"hitscan",sound:"rifle",damage:74,headMult:2.4,pellets:1,spread:.004,fireRate:.72,magSize:8,reserve:32,reloadTime:1.3,recoil:.18,altMode:"scope",scopeLabel:"HENRY .44 BRASS OPTIC",scopeFov:26,altHint:"RMB: Brass Scope Zoom",tracerColor:16774084},{id:"dynamite",name:"DYNAMITE STICKS",shortName:"Dynamite",kind:"throwable",sound:"throw",damage:145,blastRadius:7.5,fireRate:.85,magSize:1,reserve:6,reloadTime:.55,recoil:.12,altMode:"none",altHint:"Arc Throw Explosive",projColor:14235170}],japan:[{id:"katana",name:"MURAMASA KATANA",shortName:"Katana",kind:"melee",sound:"slash",damage:68,headMult:1.5,range:4,fireRate:.36,magSize:99,reserve:99,infinite:!0,reloadTime:.1,recoil:.22,altMode:"heavy_slash",altHint:"RMB: Iaido Power Cleave",slashColor:15137279},{id:"yumi",name:"YUMI LONGBOW",shortName:"Yumi Bow",kind:"hitscan",sound:"bow",damage:78,headMult:2.3,pellets:1,spread:.005,fireRate:.62,magSize:1,reserve:40,reloadTime:.45,recoil:.11,altMode:"scope",scopeLabel:"KYUDO SPIRIT FOCUS",scopeFov:30,altHint:"RMB: Spirit Focus Zoom",tracerColor:16773314},{id:"shuriken",name:"SHINOBI SHURIKEN",shortName:"Shuriken",kind:"hitscan",sound:"shuriken",damage:34,headMult:2,pellets:1,spread:.018,fireRate:.2,magSize:9,reserve:63,reloadTime:.85,recoil:.07,altMode:"fan_stars",altHint:"RMB: 3-Star Fan Throw",tracerColor:13692159},{id:"matchlock",name:"TANEGASHIMA MUSKET",shortName:"Matchlock",kind:"hitscan",sound:"musket",damage:115,headMult:1.9,pellets:4,spread:.045,fireRate:1.05,magSize:1,reserve:18,reloadTime:1.25,recoil:.3,altMode:"none",altHint:"Heavy Edo Firepower",tracerColor:16757596}],swiss:[{id:"crossbow",name:"TELL'S ARMBRUST",shortName:"Crossbow",kind:"hitscan",sound:"crossbow",damage:86,headMult:2.5,pellets:1,spread:.003,fireRate:.65,magSize:1,reserve:45,reloadTime:.62,recoil:.14,altMode:"scope",scopeLabel:"WILHELM TELL EAGLE-EYE",scopeFov:24,altHint:"RMB: Eagle-Eye Zoom",tracerColor:16054783},{id:"halberd",name:"SWISS HALBERD",shortName:"Halberd",kind:"melee",sound:"slash",damage:78,headMult:1.5,range:4.4,fireRate:.48,magSize:99,reserve:99,infinite:!0,reloadTime:.1,recoil:.25,altMode:"heavy_slash",altHint:"RMB: Armor-Breaker Sweep",slashColor:14676735},{id:"repeater",name:"ALPINE REPEATER",shortName:"Repeater",kind:"hitscan",sound:"crossbow",damage:36,headMult:2,pellets:1,spread:.016,fireRate:.22,magSize:8,reserve:56,reloadTime:1.1,recoil:.09,altMode:"fan",altHint:"RMB: Rapid Volley",tracerColor:15135487},{id:"firepot",name:"ALPINE FIRE-POT",shortName:"Fire-Pot",kind:"throwable",sound:"throw",damage:150,blastRadius:7.5,fireRate:.9,magSize:1,reserve:6,reloadTime:.6,recoil:.12,altMode:"none",altHint:"Arc Throw Fire-Bomb",projColor:16739876}]};function Lm(s){const t=new se,e=new vt({color:3817546,metalness:.85,roughness:.26}),n=new vt({color:14213354,metalness:.92,roughness:.16}),i=new vt({color:14263361,metalness:.82,roughness:.28}),r=new vt({color:6042653,roughness:.72,metalness:.05}),o=new vt({color:3087122,roughness:.75}),a=new vt({color:12067869,roughness:.5}),l=new me({color:16759603});if(s==="revolver"){const c=new R(new Tt(.022,.024,.44,10),e);c.rotation.x=Math.PI/2,c.position.set(0,.03,-.32);const h=new R(new Tt(.011,.011,.36,8),e);h.rotation.x=Math.PI/2,h.position.set(0,.004,-.28);const u=new R(new rt(.048,.095,.17),i);u.position.set(0,0,-.05);const d=new R(new Tt(.038,.038,.09,12),e);d.rotation.x=Math.PI/2,d.position.set(0,.015,-.055),d.name="cylinder";const f=new R(new rt(.008,.026,.02),i);f.position.set(0,.058,-.51);const g=new R(new rt(.014,.04,.03),e);g.position.set(0,.052,.03),g.rotation.x=-.35;const _=new R(new rt(.042,.16,.068),r);_.position.set(0,-.09,.05),_.rotation.x=.28,t.add(c,h,u,d,f,g,_),t.position.set(.24,-.22,-.35)}else if(s==="shotgun"){for(const d of[-.024,.024]){const f=new R(new Tt(.022,.024,.72,12),e);f.rotation.x=Math.PI/2,f.position.set(d,.02,-.45),t.add(f)}const c=new R(new rt(.078,.048,.28),r);c.position.set(0,-.012,-.32);const h=new R(new rt(.082,.078,.18),i);h.position.set(0,0,-.04);const u=new R(new rt(.065,.11,.36),r);u.position.set(0,-.055,.18),u.rotation.x=.16,t.add(c,h,u),t.position.set(.24,-.24,-.32)}else if(s==="rifle"){const c=new R(new Tt(.018,.021,.88,8),e);c.rotation.x=Math.PI/2,c.position.set(0,.025,-.52);const h=new R(new Tt(.014,.014,.78,8),i);h.rotation.x=Math.PI/2,h.position.set(0,-.006,-.48);const u=new R(new rt(.054,.088,.22),i);u.position.set(0,0,-.04);const d=new R(new Tt(.02,.024,.48,12),i);d.rotation.x=Math.PI/2,d.position.set(0,.078,-.22);const f=new R(new Tt(.018,.018,.01,12),new me({color:9099519}));f.rotation.x=Math.PI/2,f.position.set(0,.078,.02);const g=new R(new rt(.052,.11,.36),r);g.position.set(0,-.048,.2),g.rotation.x=.12,t.add(c,h,u,d,f,g),t.position.set(.24,-.24,-.32)}else if(s==="dynamite"){for(const[f,g]of[[-.024,0],[.024,0],[0,.032]]){const _=new R(new Tt(.022,.022,.26,10),a);_.position.set(f,g,0),t.add(_)}const c=new R(new Tt(.054,.054,.022,12),o);c.position.y=.06;const h=c.clone();h.position.y=-.06;const u=new R(new Tt(.006,.006,.09,6),r);u.position.set(.01,.17,0),u.rotation.z=-.35;const d=new R(new xe(.022,8,8),l);d.position.set(.028,.21,0),d.name="spark",t.add(c,h,u,d),t.rotation.set(.25,.2,.15),t.position.set(.26,-.24,-.45)}else if(s==="katana"){const c=new R(new rt(.014,.92,.044),n);c.position.set(0,.44,0);const h=new R(new rt(.005,.92,.014),new me({color:16777215}));h.position.set(0,.44,-.023);const u=new R(new rt(.024,.05,.052),i);u.position.set(0,.01,0);const d=new R(new Tt(.065,.065,.014,16),i);d.position.set(0,-.02,0);const f=new R(new Tt(.024,.026,.28,10),a);f.position.set(0,-.16,0),t.add(c,h,u,d,f),t.rotation.set(-.35,-.28,.28),t.position.set(.32,-.34,-.52)}else if(s==="yumi"){const c=new R(new cn(.52,.018,8,22,Math.PI*.88),o);c.rotation.z=-Math.PI*.44,c.position.set(0,.06,-.22);const h=new R(new Tt(.003,.003,.96,6),new me({color:16050385}));h.position.set(0,.06,.04);const u=new R(new Tt(.008,.008,.72,6),r);u.rotation.x=Math.PI/2,u.position.set(.02,.02,-.24);const d=new R(new ee(.02,.07,4),n);d.rotation.x=-Math.PI/2,d.position.set(.02,.02,-.62);const f=new R(new rt(.05,.004,.1),a);f.position.set(.02,.02,.07),t.add(c,h,u,d,f),t.position.set(.25,-.18,-.45)}else if(s==="shuriken"){const c=new se;for(let u=0;u<4;u++){const d=new R(new ee(.036,.12,4),n),f=u*Math.PI/2;d.position.set(Math.cos(f)*.06,0,Math.sin(f)*.06),d.rotation.z=-Math.PI/2,d.rotation.y=-f,c.add(d)}const h=new R(new Tt(.032,.032,.012,10),e);c.add(h),c.name="spinner",t.add(c),t.rotation.set(.35,.2,.1),t.position.set(.24,-.2,-.48)}else if(s==="matchlock"){const c=new R(new Tt(.026,.03,.92,8),e);c.rotation.x=Math.PI/2,c.position.set(0,.03,-.5);const h=new R(new rt(.064,.075,.72),o);h.position.set(0,-.01,-.25);for(const d of[-.15,-.42,-.68]){const f=new R(new rt(.07,.082,.032),i);f.position.set(0,.005,d),t.add(f)}const u=new R(new xe(.016,6,6),l);u.position.set(.045,.045,-.08),t.add(c,h,u),t.position.set(.25,-.25,-.3)}else if(s==="crossbow"||s==="repeater"){const c=s==="repeater",h=new R(new rt(.072,.082,c?.62:.74),r);h.position.set(0,-.01,-.28);const u=new R(new rt(.035,.022,.6),i);u.position.set(0,.036,-.32);const d=new R(new rt(c?.26:.36,.024,.038),e);d.position.set(c?-.14:-.19,.025,-.55),d.rotation.y=.24;const f=d.clone();f.position.x=-d.position.x,f.rotation.y=-.24;const g=new R(new Tt(.003,.003,c?.3:.42,6),new me({color:15261384}));g.rotation.z=Math.PI/2,g.rotation.y=-.52,g.position.set(c?-.12:-.16,.032,-.44);const _=g.clone();_.position.x=-g.position.x,_.rotation.y=.52;const m=new R(new Tt(.009,.009,.44,6),o);m.rotation.x=Math.PI/2,m.position.set(0,.048,-.44);const p=new R(new ee(.022,.075,4),n);if(p.rotation.x=-Math.PI/2,p.position.set(0,.048,-.68),c){const S=new R(new rt(.068,.085,.22),o);S.position.set(0,.078,-.24),t.add(S)}t.add(h,u,d,f,g,_,m,p),t.position.set(.22,-.23,-.32)}else if(s==="halberd"){const c=new R(new Tt(.022,.024,1.35,8),r);c.position.set(0,.15,0);const h=new R(new ee(.028,.38,4),n);h.position.set(0,.98,0);const u=new R(new rt(.014,.28,.25),n);u.position.set(0,.68,-.12);const d=new R(new ee(.024,.2,4),e);d.rotation.x=Math.PI/2,d.position.set(0,.68,.1);const f=new R(new Tt(.032,.032,.16,8),i);f.position.set(0,.68,0);const g=new R(new ee(.045,.14,8),new vt({color:15910441,roughness:.6}));g.position.set(0,.54,0);const _=new R(new cn(.035,.014,6,10),a);_.rotation.x=Math.PI/2,_.position.set(0,.6,0),t.add(c,h,u,d,f,g,_),t.rotation.set(-.34,-.22,.22),t.position.set(.36,-.42,-.56)}else if(s==="firepot"){const c=new R(new xe(.095,12,10),new vt({color:9193255,roughness:.85})),h=new R(new Tt(.042,.055,.06,10),new vt({color:7222812,roughness:.85}));h.position.y=.095;const u=new R(new ee(.038,.095,8),l);u.position.y=.165,u.name="spark",t.add(c,h,u),t.position.set(.26,-.24,-.46)}return t.userData.basePos=t.position.clone(),t.userData.baseRot=t.rotation.clone(),t}const jl={cowboy:{name:"Outlaw Cowboy",hp:65,speed:3.6,range:34,fireRate:1.55,damage:11,score:150,style:"ranged",projectileColor:16765542},bandito:{name:"Mexican Bandito",hp:75,speed:4.5,range:30,fireRate:1.25,damage:13,score:200,style:"ranged",projectileColor:16756290},boss_west:{name:"EL DIABLO — KING OF RED GULCH",hp:360,speed:4.2,range:42,fireRate:.78,damage:16,score:1200,style:"boss_ranged",scale:1.28,projectileColor:16739115},ninja:{name:"Shadow Ninja",hp:60,speed:6.4,range:24,fireRate:1.15,damage:12,score:200,style:"skirmisher",projectileColor:13955583},ronin:{name:"Rōnin Samurai",hp:95,speed:4.6,range:22,fireRate:1.4,damage:16,score:260,style:"hybrid",projectileColor:16758876},boss_japan:{name:"LORD KUROGANE — IRON SHOGUN",hp:420,speed:5,range:34,fireRate:.85,damage:18,score:1500,style:"boss_hybrid",scale:1.32,projectileColor:16734774},halberdier:{name:"Austrian Halberdier",hp:95,speed:4.9,range:3.4,fireRate:1.05,damage:18,score:220,style:"melee",projectileColor:16777215},arquebusier:{name:"Habsburg Arquebusier",hp:75,speed:3.4,range:38,fireRate:1.5,damage:15,score:240,style:"ranged",projectileColor:16770204},boss_swiss:{name:"CAPTAIN VON GESSLER — HABSBURG VOGT",hp:460,speed:4.6,range:38,fireRate:.8,damage:19,score:1800,style:"boss_ranged",scale:1.32,projectileColor:16732728}};function Im(s){const t=new se,e=s.startsWith("boss_"),n=new vt({color:s==="bandito"?13011548:14922122,roughness:.72}),i=new vt({color:2759700,roughness:.8}),r=new vt({color:11977423,metalness:.85,roughness:.25}),o=new vt({color:15119943,metalness:.85,roughness:.25}),a=new vt({color:12067362,roughness:.6}),l=new vt({color:15657180,roughness:.7});let c=6044708,h=3091240;s==="bandito"?(c=10368030,h=3877920):s==="boss_west"?(c=1971988,h=1446416):s==="ninja"?(c=1580070,h=1316640):s==="ronin"?(c=2374492,h=1975344):s==="boss_japan"?(c=8197140,h=1709076):s==="halberdier"||s==="arquebusier"?(c=11871268,h=3551792):s==="boss_swiss"&&(c=9377816,h=2631208);const u=new vt({color:c,roughness:.68}),d=new vt({color:h,roughness:.78}),f=new Tt(.11,.095,.82,8),g=new R(f,d);g.position.set(-.15,.41,0),g.castShadow=!0;const _=new R(f,d);_.position.set(.15,.41,0),_.castShadow=!0;const m=new rt(.17,.22,.28),p=new R(m,i);p.position.set(0,-.34,.04),g.add(p);const S=p.clone();_.add(S);const y=new R(new rt(.56,.72,.32),u);y.position.set(0,1.16,0),y.castShadow=!0,y.userData.hitZone="body";const x=new Tt(.085,.075,.62,8),C=new R(x,u);C.position.set(-.37,1.18,.08),C.rotation.x=-.35,C.castShadow=!0;const A=new R(x,u);A.position.set(.37,1.18,.2),A.rotation.x=-1.1,A.castShadow=!0;const P=new R(new xe(.21,12,10),s==="ninja"?u:n);P.position.set(0,1.72,0),P.castShadow=!0,P.userData.hitZone="head";const D=new me({color:e?16759603:1182728}),E=new R(new xe(.026,6,6),D);E.position.set(-.07,.03,.19);const M=E.clone();if(M.position.x=.07,P.add(E,M),s==="cowboy"||s==="boss_west"){const $=new R(new Tt(.42,.44,.04,14),i);$.position.y=.15;const W=new R(new Tt(.19,.23,.22,12),i);W.position.y=.26;const J=new R(new Tt(.22,.23,.05,12),e?o:a);J.position.y=.19,P.add($,W,J);const H=new R(new ee(.24,.26,5),a);H.rotation.x=Math.PI,H.position.set(0,1.48,.12),t.add(H);const st=new R(new rt(.58,.56,.12),u);st.position.set(0,.72,-.14),t.add(st);const dt=new R(new rt(.06,.08,.46),r);dt.position.set(0,-.28,.22),A.add(dt)}else if(s==="bandito"){const $=new R(new Tt(.56,.62,.05,18),new vt({color:13212757,roughness:.75}));$.position.y=.15;const W=new R(new cn(.58,.025,6,20),a);W.rotation.x=Math.PI/2,W.position.y=.15;const J=new R(new ee(.22,.34,12),new vt({color:12093762,roughness:.75}));J.position.y=.32,P.add($,W,J);const H=new R(new ee(.48,.62,8),new vt({color:13189668,roughness:.8}));H.position.set(0,1.24,0);const st=new R(new Tt(.36,.44,.12,8),o);st.position.set(0,1.04,0),t.add(H,st);const dt=new R(new Tt(.028,.032,.88,8),i);dt.rotation.x=Math.PI/2,dt.position.set(0,-.26,.32),A.add(dt)}else if(s==="ninja"){const $=new R(new cn(.215,.022,6,14),r);$.rotation.x=Math.PI/2,$.position.y=.08,P.add($);const W=new R(new cn(.22,.055,6,12),a);W.rotation.x=Math.PI/2,W.position.set(0,1.52,0);const J=new R(new rt(.14,.58,.03),a);J.position.set(.08,1.32,-.26),J.rotation.x=.35,t.add(W,J);const H=new R(new rt(.03,.75,.05),r);H.position.set(0,-.35,.28),H.rotation.x=Math.PI/2,A.add(H)}else if(s==="ronin"||s==="boss_japan"){if(e){const st=new R(new xe(.25,12,8,0,Math.PI*2,0,Math.PI*.6),new vt({color:1906455,metalness:.7,roughness:.3}));st.position.y=.08;const dt=new R(new rt(.05,.36,.04),o);dt.position.set(-.14,.34,.16),dt.rotation.z=.45;const Et=dt.clone();Et.position.x=.14,Et.rotation.z=-.45,P.add(st,dt,Et)}else{const st=new R(new ee(.52,.25,16),new vt({color:12755556,roughness:.9}));st.position.y=.22,P.add(st)}const $=new rt(.14,.34,.28),W=new R($,e?o:a);W.position.set(-.38,1.4,0);const J=W.clone();J.position.x=.38,t.add(W,J);const H=new R(new rt(.035,1.05,.055),r);H.position.set(0,-.35,.42),H.rotation.x=Math.PI/2,A.add(H)}else if(s==="halberdier"||s==="arquebusier"||s==="boss_swiss"){const $=new R(new rt(.58,.52,.35),e?o:r);$.position.set(0,1.22,0);const W=new R(new rt(.6,.16,.36),l);W.position.set(0,1.06,0),t.add($,W);const J=new R(new xe(.24,12,8,0,Math.PI*2,0,Math.PI*.62),e?o:r);J.position.y=.08;const H=new R(new Tt(.32,.36,.04,14),e?o:r);H.position.y=.09;const st=new R(new ee(.08,.42,8),a);if(st.position.set(0,.34,-.08),st.rotation.x=-.38,P.add(J,H,st),s==="halberdier"){const dt=new R(new Tt(.025,.025,2.2,8),i);dt.position.set(0,.1,.34);const Et=new R(new rt(.03,.42,.28),r);Et.position.set(0,1,.44),A.add(dt,Et)}else{const dt=new R(new Tt(.03,.035,1.05,8),r);dt.rotation.x=Math.PI/2,dt.position.set(0,-.25,.42),A.add(dt)}}const U=new R(new xe(.14,6,6),new me({color:16765530,transparent:!0,opacity:0}));U.position.set(0,-.28,.68),A.add(U);const V=new R(new ve(.95,.11),new me({color:1445130,side:be}));V.position.set(0,2.35,0),V.visible=!1;const G=new R(new ve(.9,.075),new me({color:e?16755234:15219500,side:be}));G.position.set(0,0,.01),V.add(G),t.add(g,_,y,C,A,P,V);const et=jl[s];return et.scale&&t.scale.setScalar(et.scale),{root:t,legL:g,legR:_,armL:C,armR:A,torso:y,head:P,muzzle:U,hpBg:V,hpFill:G}}class il{constructor(t,e,n=1){const i=jl[t];this.type=t,this.name=i.name,this.isBoss=t.startsWith("boss_"),this.maxHp=Math.round(i.hp*n),this.hp=this.maxHp,this.speed=i.speed,this.range=i.range,this.fireRate=i.fireRate/(.8+n*.2),this.damage=Math.round(i.damage*n),this.score=i.score,this.style=i.style,this.projectileColor=i.projectileColor,this.parts=Im(t),this.mesh=this.parts.root,this.mesh.position.copy(e),this.spawnPos=e.clone(),this.alive=!0,this.alert=!1,this.fireCooldown=.6+Math.random()*.9,this.strafeDir=Math.random()>.5?1:-1,this.strafeTimer=1.2+Math.random()*2,this.hurtFlash=0,this.muzzleFlash=0,this.deathTimer=0,this.walkPhase=Math.random()*Math.PI*2,this.radius=this.isBoss?.68:.46,this.headHeight=this.isBoss?2.15:1.72}getHitMeshes(){if(!this.alive)return[];const t=[];return this.mesh.traverse(e=>{e.isMesh&&e!==this.parts.hpBg&&e!==this.parts.hpFill&&e!==this.parts.muzzle&&(e.userData.enemy=this,t.push(e))}),t}takeDamage(t,e=!1){if(!this.alive)return!1;if(this.alert=!0,this.hp-=t,this.hurtFlash=.16,!this.isBoss){this.parts.hpBg.visible=!0;const n=Math.max(0,this.hp/this.maxHp);this.parts.hpFill.scale.x=Math.max(.001,n),this.parts.hpFill.position.x=-(1-n)*.45}return this.hp<=0?(this.alive=!1,this.hp=0,this.parts.hpBg.visible=!1,!0):!1}update(t,e,n,i){if(!this.alive){this.deathTimer=Math.min(1,this.deathTimer+t*2.8),this.mesh.rotation.x=-this.deathTimer*(Math.PI*.48),this.mesh.position.y=Math.max(n.getFloorHeight(this.mesh.position.x,this.mesh.position.z,this.mesh.position.y)+.18,this.mesh.position.y-t*1.4);return}if(this.parts.hpBg.visible&&this.parts.hpBg.lookAt(e.x,this.mesh.position.y+2.3,e.z),this.hurtFlash>0){this.hurtFlash-=t;const y=this.hurtFlash>0?6689041:0;this.parts.torso.material.emissive.setHex(y)}this.muzzleFlash>0&&(this.muzzleFlash-=t,this.parts.muzzle.material.opacity=Math.max(0,this.muzzleFlash*8));const r=new b().subVectors(e,this.mesh.position),o=Math.hypot(r.x,r.z),a=new b(this.mesh.position.x,this.mesh.position.y+1.55,this.mesh.position.z),l=new b(e.x,e.y+1.45,e.z),c=o<54&&n.hasLineOfSight(a,l);if(!this.alert)if(o<26||c&&o<42)this.alert=!0;else{this.parts.torso.position.y=1.16+Math.sin(performance.now()*.002+this.walkPhase)*.025;return}const h=Math.atan2(r.x,r.z);let u=h-this.mesh.rotation.y;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;this.mesh.rotation.y+=u*Math.min(1,t*8),this.strafeTimer-=t,this.strafeTimer<=0&&(this.strafeTimer=1.1+Math.random()*1.6,this.strafeDir*=-1);const d=new b(Math.sin(h),0,Math.cos(h)),f=new b(Math.cos(h),0,-Math.sin(h)),g=new b,_=this.style==="melee",m=this.style==="hybrid"||this.style==="boss_hybrid",p=_?2.1:m?7:12.5,S=_?2.6:m?15:25;if(!c||o>S?g.add(d):o<p&&!_&&g.addScaledVector(d,-.55),o<S+6&&g.addScaledVector(f,this.strafeDir*(this.style==="skirmisher"?1.15:.65)),g.lengthSq()>.01){g.normalize().multiplyScalar(this.speed*t),this.mesh.position.x+=g.x,this.mesh.position.z+=g.z,n.resolveHorizontal(this.mesh.position,this.radius,this.mesh.position.y);const y=n.getFloorHeight(this.mesh.position.x,this.mesh.position.z,this.mesh.position.y);this.mesh.position.y+=(y-this.mesh.position.y)*Math.min(1,t*14),this.walkPhase+=t*this.speed*2.2,this.parts.legL.rotation.x=Math.sin(this.walkPhase)*.55,this.parts.legR.rotation.x=-Math.sin(this.walkPhase)*.55,this.parts.armL.rotation.x=-.35-Math.sin(this.walkPhase)*.35}if(this.fireCooldown-=t,this.fireCooldown<=0){if(_||m&&o<3.6)o<3.5&&(this.fireCooldown=this.fireRate,this.parts.armR.rotation.x=-2.1,setTimeout(()=>{this.parts.armR&&(this.parts.armR.rotation.x=-1.1)},160),i.onMeleeHitPlayer(this.damage,this));else if(c&&o<=this.range){this.fireCooldown=this.fireRate*(.85+Math.random()*.35),this.muzzleFlash=.14;const y=new b;this.parts.muzzle.getWorldPosition(y),i.onEnemyFire(this,y,l)}}}}const de=new Map;function We(s,t){const e=document.createElement("canvas");return e.width=s,e.height=t,e}function Xe(s,t=1,e=1,n=!0){const i=new dh(s);return i.wrapS=$i,i.wrapT=$i,i.repeat.set(t,e),n&&(i.colorSpace=Ge),i.anisotropy=8,i.needsUpdate=!0,i}function On(s,t){const e=Math.sin(s*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function yi(s="western",t=2,e=2){const n=`wood_${s}_${t}_${e}`;if(de.has(n))return de.get(n);const i=512,r=We(i,i),o=r.getContext("2d"),a=We(i,i),l=a.getContext("2d"),c={western:["#8b5a34","#7a4c2a","#9c673c","#6e4223","#a67346"],saloon:["#6a3820","#5b2e19","#794126","#4f2614","#864c2e"],weathered:["#9c8669","#8a765c","#ab9578","#7d6a52","#b39e82"],darkJapan:["#3d271c","#332017","#493022","#2b1a12","#523626"],cedar:["#7d4e2d","#6f4426","#8a5935","#633c20","#94623c"],alpine:["#6b4428","#5c3920","#7a4f30","#4f301a","#855838"],redLacquer:["#b8291e","#a32118","#c73226","#911c14","#cf3b2e"]},h=c[s]||c.western,u=8,d=i/u;for(let g=0;g<u;g++){const _=g*d,m=h[g%h.length];o.fillStyle=m,o.fillRect(0,_,i,d),l.fillStyle="#9a9a9a",l.fillRect(0,_,i,d);for(let S=0;S<36;S++){const y=_+Math.random()*d,x=.05+Math.random()*.1;o.strokeStyle=Math.random()>.5?`rgba(255,220,180,${x})`:`rgba(20,10,4,${x*1.4})`,o.lineWidth=1+Math.random()*2,o.beginPath(),o.moveTo(0,y);for(let C=0;C<=i;C+=64)o.lineTo(C,y+Math.sin(C*.02+g*2.1+S)*2.2);o.stroke(),l.strokeStyle=Math.random()>.5?"rgba(220,220,220,0.16)":"rgba(60,60,60,0.18)",l.lineWidth=1.2,l.beginPath(),l.moveTo(0,y),l.lineTo(i,y),l.stroke()}if(On(g,3.7)>.45){const S=60+On(g,9.1)*(i-120),y=_+d*(.3+On(g,5.2)*.4),x=o.createRadialGradient(S,y,1,S,y,12);x.addColorStop(0,"rgba(30,15,6,0.65)"),x.addColorStop(1,"rgba(30,15,6,0)"),o.fillStyle=x,o.beginPath(),o.ellipse(S,y,14,7,0,0,Math.PI*2),o.fill()}o.fillStyle="rgba(15, 8, 3, 0.85)",o.fillRect(0,_,i,3),o.fillStyle="rgba(255, 225, 185, 0.14)",o.fillRect(0,_+3,i,2),l.fillStyle="#141414",l.fillRect(0,_,i,3.5);const p=(g*173+95)%(i-80)+40;o.fillStyle="rgba(12,6,2,0.75)",o.fillRect(p,_,2.5,d),l.fillStyle="#1a1a1a",l.fillRect(p,_,2.5,d);for(const S of[p-10,p+12])for(const y of[_+12,_+d-12])o.fillStyle="#241c16",o.beginPath(),o.arc(S,y,2.6,0,Math.PI*2),o.fill()}const f={map:Xe(r,t,e,!0),bumpMap:Xe(a,t,e,!1)};return de.set(n,f),f}function Si(s="desert",t=24,e=24){const n=`ground_${s}_${t}_${e}`;if(de.has(n))return de.get(n);const i=512,r=We(i,i),o=r.getContext("2d"),a=We(i,i),l=a.getContext("2d");if(s==="desert"){o.fillStyle="#c48f56",o.fillRect(0,0,i,i),l.fillStyle="#808080",l.fillRect(0,0,i,i);for(let h=0;h<420;h++){const u=Math.random()*i,d=Math.random()*i,f=6+Math.random()*34,g=Math.random();o.fillStyle=g>.6?"rgba(218, 168, 108, 0.16)":g>.25?"rgba(155, 96, 48, 0.16)":"rgba(122, 74, 38, 0.12)",o.beginPath(),o.ellipse(u,d,f*1.4,f*.7,Math.random()*Math.PI,0,Math.PI*2),o.fill(),l.fillStyle=g>.5?"rgba(195,195,195,0.18)":"rgba(65,65,65,0.18)",l.beginPath(),l.arc(u,d,f*.45,0,Math.PI*2),l.fill()}for(let h=0;h<240;h++){const u=Math.random()*i,d=Math.random()*i;o.fillStyle=Math.random()>.5?"#8f5d34":"#dcb27b",o.fillRect(u,d,2+Math.random()*3,2+Math.random()*2)}}else if(s==="japan_moss"){o.fillStyle="#4e6338",o.fillRect(0,0,i,i),l.fillStyle="#808080",l.fillRect(0,0,i,i);for(let h=0;h<500;h++){const u=Math.random()*i,d=Math.random()*i,f=8+Math.random()*26,g=Math.random();o.fillStyle=g>.65?"rgba(98, 128, 62, 0.22)":g>.3?"rgba(64, 84, 42, 0.22)":"rgba(115, 92, 62, 0.18)",o.beginPath(),o.arc(u,d,f,0,Math.PI*2),o.fill(),l.fillStyle=g>.5?"rgba(200,200,200,0.16)":"rgba(60,60,60,0.16)",l.beginPath(),l.arc(u,d,f*.5,0,Math.PI*2),l.fill()}for(let h=0;h<95;h++)o.fillStyle="rgba(255, 196, 214, 0.65)",o.beginPath(),o.ellipse(Math.random()*i,Math.random()*i,3,1.8,Math.random()*3,0,Math.PI*2),o.fill()}else if(s==="zen_sand"){o.fillStyle="#dfd8c8",o.fillRect(0,0,i,i),l.fillStyle="#808080",l.fillRect(0,0,i,i);for(let h=0;h<i;h+=16){o.strokeStyle="rgba(145, 136, 120, 0.55)",o.lineWidth=5,o.beginPath();for(let u=0;u<=i;u+=16){const d=h+Math.sin(u/i*Math.PI*4)*5;u===0?o.moveTo(u,d):o.lineTo(u,d)}o.stroke(),l.strokeStyle="#303030",l.lineWidth=6,l.beginPath();for(let u=0;u<=i;u+=16){const d=h+Math.sin(u/i*Math.PI*4)*5;u===0?l.moveTo(u,d):l.lineTo(u,d)}l.stroke()}}else if(s==="alpine_meadow"){o.fillStyle="#4f8236",o.fillRect(0,0,i,i),l.fillStyle="#808080",l.fillRect(0,0,i,i);for(let u=0;u<650;u++){const d=Math.random()*i,f=Math.random()*i,g=6+Math.random()*26,_=Math.random();o.fillStyle=_>.6?"rgba(112, 162, 62, 0.24)":_>.25?"rgba(62, 110, 42, 0.22)":"rgba(146, 178, 72, 0.16)",o.beginPath(),o.arc(d,f,g,0,Math.PI*2),o.fill(),l.fillStyle=_>.5?"rgba(200,200,200,0.16)":"rgba(70,70,70,0.16)",l.beginPath(),l.arc(d,f,g*.4,0,Math.PI*2),l.fill()}const h=["#ffe359","#ffffff","#63a8ff","#ff94b8"];for(let u=0;u<110;u++)o.fillStyle=h[u%h.length],o.beginPath(),o.arc(Math.random()*i,Math.random()*i,2.2,0,Math.PI*2),o.fill()}else if(s==="cobble"){o.fillStyle="#6c655d",o.fillRect(0,0,i,i),l.fillStyle="#252525",l.fillRect(0,0,i,i);const h=8,u=8,d=i/u,f=i/h;for(let g=0;g<h;g++)for(let _=0;_<u;_++){const m=g%2*(d*.5),p=(_*d+m)%i,S=g*f,y=118+Math.floor(On(_,g)*44);o.fillStyle=`rgb(${y}, ${y-4}, ${y-10})`,o.fillRect(p+3,S+3,d-6,f-6),l.fillStyle="#d4d4d4",l.fillRect(p+3,S+3,d-6,f-6)}}const c={map:Xe(r,t,e,!0),bumpMap:Xe(a,t,e,!1)};return de.set(n,c),c}function Xo(s="castle",t=2,e=2){const n=`stone_${s}_${t}_${e}`;if(de.has(n))return de.get(n);const i=512,r=We(i,i),o=r.getContext("2d"),a=We(i,i),l=a.getContext("2d"),c=s==="redrock"?"#7a3b22":s==="temple"?"#4a4d46":"#57534e";if(o.fillStyle=c,o.fillRect(0,0,i,i),l.fillStyle="#222222",l.fillRect(0,0,i,i),s==="redrock")for(let u=0;u<i;u+=6){const d=Math.sin(u*.045)*18+Math.cos(u*.11)*10,f=Math.min(255,Math.max(80,178+d)),g=Math.min(255,Math.max(40,86+d*.6)),_=Math.min(255,Math.max(25,50+d*.4));o.fillStyle=`rgb(${f|0},${g|0},${_|0})`,o.fillRect(0,u,i,7);const m=Math.min(240,Math.max(40,128+d*2.5))|0;l.fillStyle=`rgb(${m},${m},${m})`,l.fillRect(0,u,i,7)}else{const d=i/8;for(let f=0;f<8;f++){let g=f%2*-36;for(;g<i;){const _=64+Math.floor(On(g,f)*58),m=s==="temple"?108+Math.floor(On(g+3,f+5)*42):122+Math.floor(On(g+1,f+9)*52),p=s==="temple"?6:0;o.fillStyle=`rgb(${m}, ${m+p}, ${m-4})`,o.fillRect(g+3,f*d+3,_-5,d-5),o.fillStyle="rgba(255,255,255,0.12)",o.fillRect(g+3,f*d+3,_-5,4),l.fillStyle="#cfcfcf",l.fillRect(g+3,f*d+3,_-5,d-5),g+=_}}for(let f=0;f<90;f++)o.fillStyle=s==="temple"?"rgba(72, 108, 52, 0.22)":"rgba(60, 56, 48, 0.16)",o.beginPath(),o.arc(Math.random()*i,Math.random()*i,6+Math.random()*18,0,Math.PI*2),o.fill()}const h={map:Xe(r,t,e,!0),bumpMap:Xe(a,t,e,!1)};return de.set(n,h),h}function Dm(s=2,t=1){const e=`shoji_${s}_${t}`;if(de.has(e))return de.get(e);const n=512,i=We(n,n),r=i.getContext("2d"),o=r.createLinearGradient(0,0,0,n);o.addColorStop(0,"#fff2d2"),o.addColorStop(.55,"#f6dfb2"),o.addColorStop(1,"#e6c388"),r.fillStyle=o,r.fillRect(0,0,n,n);for(let h=0;h<200;h++)r.fillStyle="rgba(255,255,255,0.14)",r.fillRect(Math.random()*n,Math.random()*n,12,1);r.fillStyle="#2d1a11";const a=6,l=8;for(let h=0;h<=a;h++){const u=h/a*n;r.fillRect(u-5,0,10,n)}for(let h=0;h<=l;h++){const u=h/l*n;r.fillRect(0,u-4,n,8)}r.lineWidth=24,r.strokeStyle="#23130c",r.strokeRect(0,0,n,n);const c=Xe(i,s,t,!0);return de.set(e,c),c}function Kl(s="japan",t=4,e=2){const n=`roof_${s}_${t}_${e}`;if(de.has(n))return de.get(n);const i=512,r=We(i,i),o=r.getContext("2d"),a=We(i,i),l=a.getContext("2d");if(s==="japan"){o.fillStyle="#2e353f",o.fillRect(0,0,i,i),l.fillStyle="#404040",l.fillRect(0,0,i,i);const h=10,u=10,d=i/h,f=i/u;for(let g=0;g<u;g++)for(let _=0;_<h;_++){const m=_*d,p=g*f,S=o.createLinearGradient(m,p,m+d,p);S.addColorStop(0,"#1e242c"),S.addColorStop(.5,"#4c5766"),S.addColorStop(1,"#1d232b"),o.fillStyle=S,o.fillRect(m+2,p+2,d-4,f-3),o.fillStyle="rgba(0,0,0,0.55)",o.fillRect(m,p+f-4,d,4),l.fillStyle="#cccccc",l.beginPath(),l.arc(m+d/2,p+f/2,d*.42,0,Math.PI*2),l.fill()}}else{o.fillStyle="#4a3525",o.fillRect(0,0,i,i),l.fillStyle="#333333",l.fillRect(0,0,i,i);const h=12,u=10,d=i/u,f=i/h;for(let g=0;g<h;g++)for(let _=0;_<u;_++){const m=g%2*(d*.5),p=(_*d+m)%i,S=g*f,y=78+Math.floor(On(_,g)*34);o.fillStyle=`rgb(${y+18}, ${y}, ${y-16})`,o.fillRect(p+1,S+1,d-3,f-3),l.fillStyle="#c8c8c8",l.fillRect(p+1,S+1,d-3,f-3)}}const c={map:Xe(r,t,e,!0),bumpMap:Xe(a,t,e,!1)};return de.set(n,c),c}function Um(s=1,t=1){const e=`alpine_fachwerk_${s}_${t}`;if(de.has(e))return de.get(e);const n=512,i=We(n,n),r=i.getContext("2d");r.fillStyle="#ebe1cd",r.fillRect(0,0,n,n);for(let a=0;a<300;a++)r.fillStyle=Math.random()>.5?"rgba(255,255,255,0.16)":"rgba(145,125,95,0.12)",r.beginPath(),r.arc(Math.random()*n,Math.random()*n,6+Math.random()*20,0,Math.PI*2),r.fill();r.strokeStyle="#3e2718",r.fillStyle="#3e2718",r.fillRect(0,0,n,28),r.fillRect(0,n-28,n,28),r.fillRect(0,n/2-12,n,24),r.fillRect(0,0,26,n),r.fillRect(n-26,0,26,n),r.fillRect(n/2-12,0,24,n),r.lineWidth=20,r.beginPath(),r.moveTo(20,n/2),r.lineTo(n/2,20),r.moveTo(n-20,n/2),r.lineTo(n/2,20),r.stroke();const o=Xe(i,s,t,!0);return de.set(e,o),o}function Nm(s,t={}){const{bg:e="#3b2112",border:n="#d49a45",fg:i="#f8e6c1",sub:r="",width:o=512,height:a=160,font:l="bold 72px Georgia, serif"}=t,c=`sign_${s}_${r}_${e}_${i}`;if(de.has(c))return de.get(c);const h=We(o,a),u=h.getContext("2d");u.fillStyle=e,u.fillRect(0,0,o,a);for(let f=0;f<6;f++)u.fillStyle="rgba(0,0,0,0.16)",u.fillRect(0,f/6*a,o,2);u.strokeStyle=n,u.lineWidth=10,u.strokeRect(10,10,o-20,a-20),u.lineWidth=3,u.strokeRect(20,20,o-40,a-40),u.fillStyle=i,u.font=l,u.textAlign="center",u.textBaseline="middle",u.shadowColor="rgba(0,0,0,0.7)",u.shadowBlur=4,u.shadowOffsetY=3,u.fillText(s,o/2,r?a*.44:a*.52),r&&(u.font="bold 24px Georgia, serif",u.fillStyle=n,u.fillText(r,o/2,a*.78));const d=Xe(h,1,1,!0);return d.wrapS=nn,d.wrapT=nn,de.set(c,d),d}function Os(s="austria"){const t=`banner_${s}`;if(de.has(t))return de.get(t);const e=We(256,512),n=e.getContext("2d");s==="austria"?(n.fillStyle="#c41e22",n.fillRect(0,0,256,512),n.fillStyle="#f2ede0",n.fillRect(0,170,256,170),n.strokeStyle="#d4a63e",n.lineWidth=14,n.strokeRect(7,7,242,498),n.fillStyle="#1d1916",n.beginPath(),n.moveTo(128,195),n.lineTo(170,245),n.lineTo(148,258),n.lineTo(160,315),n.lineTo(128,294),n.lineTo(96,315),n.lineTo(108,258),n.lineTo(86,245),n.closePath(),n.fill()):s==="uri"?(n.fillStyle="#f2c629",n.fillRect(0,0,256,512),n.strokeStyle="#1a1510",n.lineWidth=10,n.strokeRect(5,5,246,502),n.strokeStyle="#141210",n.lineWidth=22,n.lineCap="round",n.beginPath(),n.moveTo(78,178),n.quadraticCurveTo(32,130,56,78),n.moveTo(178,178),n.quadraticCurveTo(224,130,200,78),n.stroke(),n.fillStyle="#141210",n.beginPath(),n.ellipse(54,194,24,11,-.3,0,Math.PI*2),n.ellipse(202,194,24,11,.3,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(70,172),n.lineTo(186,172),n.lineTo(166,305),n.quadraticCurveTo(128,336,90,305),n.closePath(),n.fill(),n.fillStyle="#fff5dc",n.beginPath(),n.ellipse(98,224,14,9,.15,0,Math.PI*2),n.ellipse(158,224,14,9,-.15,0,Math.PI*2),n.fill(),n.fillStyle="#c41e22",n.beginPath(),n.arc(100,224,5,0,Math.PI*2),n.arc(156,224,5,0,Math.PI*2),n.fill(),n.fillStyle="#d12026",n.beginPath(),n.moveTo(116,316),n.quadraticCurveTo(128,378,140,316),n.closePath(),n.fill(),n.strokeStyle="#d12026",n.lineWidth=11,n.beginPath(),n.arc(128,304,22,.15*Math.PI,.85*Math.PI),n.stroke(),n.fillStyle="#1a1510",n.font="bold 34px Georgia, serif",n.textAlign="center",n.fillText("URI • 1307",128,456)):s==="swiss"?(n.fillStyle="#c92323",n.fillRect(0,0,256,512),n.fillStyle="#ffffff",n.fillRect(102,130,52,190),n.fillRect(33,199,190,52),n.strokeStyle="#e8c468",n.lineWidth=10,n.strokeRect(5,5,246,502)):s==="japan"&&(n.fillStyle="#1b2845",n.fillRect(0,0,256,512),n.strokeStyle="#e3b859",n.lineWidth=10,n.strokeRect(8,8,240,496),n.strokeStyle="#f0c663",n.lineWidth=12,n.beginPath(),n.arc(128,180,62,0,Math.PI*2),n.stroke(),n.fillStyle="#f0c663",n.font="bold 94px Georgia, serif",n.textAlign="center",n.fillText("武",128,212),n.fillText("士",128,370));const i=Xe(e,1,1,!0);return i.wrapS=nn,i.wrapT=nn,de.set(t,i),i}function Fm(){const s="wanted_poster";if(de.has(s))return de.get(s);const t=We(256,340),e=t.getContext("2d");e.fillStyle="#e5cf9e",e.fillRect(0,0,256,340),e.strokeStyle="#4a3118",e.lineWidth=8,e.strokeRect(10,10,236,320),e.fillStyle="#2d180a",e.font="bold 40px Georgia, serif",e.textAlign="center",e.fillText("WANTED",128,56),e.fillStyle="#3b2412",e.beginPath(),e.ellipse(128,130,56,12,0,0,Math.PI*2),e.fill(),e.fillRect(98,96,60,34),e.beginPath(),e.arc(128,162,26,0,Math.PI*2),e.fill(),e.fillRect(88,190,80,46),e.font="bold 26px Georgia, serif",e.fillText("DEAD OR ALIVE",128,272),e.fillStyle="#992214",e.font="bold 34px Georgia, serif",e.fillText("$5,000",128,312);const n=Xe(t,1,1,!0);return de.set(s,n),n}function qo(s){const{topColor:t=2759739,midColor:e=14248747,horizonColor:n=16761192,sunColor:i=16773830,sunDirection:r=new b(.45,.22,-.86).normalize(),cloudTint:o=16766364,cloudDensity:a=.45}=s,l=new xe(420,40,28),c={uTopColor:{value:new Bt(t)},uMidColor:{value:new Bt(e)},uHorizonColor:{value:new Bt(n)},uSunColor:{value:new Bt(i)},uCloudTint:{value:new Bt(o)},uSunDir:{value:r.clone().normalize()},uCloudDensity:{value:a},uTime:{value:0}},h=new Te({side:Ue,depthWrite:!1,uniforms:c,vertexShader:`
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
    `}),u=new R(l,h);return u.frustumCulled=!1,{mesh:u,uniforms:c}}function Bs(s,t,e={}){const{deepColor:n=741993,shallowColor:i=3056552,foamColor:r=14678271,sunColor:o=16774614,sunDir:a=new b(.4,.6,-.6).normalize(),opacity:l=.88,waveScale:c=.14}=e,h=new ve(s,t,64,64);h.rotateX(-Math.PI/2);const u={uTime:{value:0},uDeepColor:{value:new Bt(n)},uShallowColor:{value:new Bt(i)},uFoamColor:{value:new Bt(r)},uSunColor:{value:new Bt(o)},uSunDir:{value:a.clone().normalize()},uOpacity:{value:l},uWaveScale:{value:c}},d=new Te({transparent:!0,uniforms:u,vertexShader:`
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
    `}),f=new R(h,d);return f.receiveShadow=!0,{mesh:f,uniforms:u}}function sl(s,t){const e=new ve(s,t,12,24),n={uTime:{value:0}},i=new Te({transparent:!0,side:be,depthWrite:!1,uniforms:n,vertexShader:`
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
    `});return{mesh:new R(e,i),uniforms:n}}const Om={id:"west",index:0,themeClass:"",act:"ACT I • 1884",title:"RED GULCH",subtitle:"Dust & Reckoning",heroName:"MARSHAL ANDERSON",objective:"Clear Red Gulch of Outlaws & Defeat El Diablo",quote:'"They burned my homestead and took everything I loved. Today, Red Gulch learns that a marshal never buries his badge."',musicTheme:"west",enemyIcon:"★",currency:"$",arsenalSummary:[["1 • .45 Peacemaker","Reliable 6-shooter. RMB fans the hammer."],["2 • 10-Gauge Coach Gun","Devastating spread for saloon clearouts."],["3 • Henry .44 Scoped","Vintage brass telescope zoom (RMB)."],["4 • Dynamite Sticks","Blasts outlaws out from behind cover."]],spawnPos:new b(0,0,44),spawnYaw:0,cameraPreview:{center:new b(0,4,2),radius:36,height:12,speed:.14}};function Bm(s,t,e){const n=[],i=[],r=[];t.bounds={minX:-54,maxX:54,minZ:-54,maxZ:54};const o=new b(.35,.24,-.9).normalize(),a=qo({topColor:2497858,midColor:13195302,horizonColor:16760678,sunColor:16774084,sunDirection:o,cloudTint:16755299,cloudDensity:.42});s.add(a.mesh),i.push(Rt=>{a.uniforms.uTime.value=Rt}),s.fog=new es(14255434,.0085);const l=new Ho(16763788,7027234,.85);s.add(l);const c=new Pi(16764802,2.75);c.position.copy(o).multiplyScalar(95),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),c.shadow.camera.left=-65,c.shadow.camera.right=65,c.shadow.camera.top=65,c.shadow.camera.bottom=-65,c.shadow.camera.near=10,c.shadow.camera.far=210,c.shadow.bias=-5e-4,s.add(c);const h=new Pi(8936596,.45);h.position.set(-40,20,60),s.add(h);const u=Si("desert",26,26),d=new vt({map:u.map,bumpMap:u.bumpMap,bumpScale:.28,roughness:.94,metalness:.02}),f=new R(new ve(340,340),d);f.rotation.x=-Math.PI/2,f.receiveShadow=!0,s.add(f);const g=yi("western",2,2),_=yi("saloon",2,2),m=yi("weathered",2,2),p=Xo("redrock",3,2),S=new vt({map:g.map,bumpMap:g.bumpMap,bumpScale:.12,roughness:.85}),y=new vt({map:_.map,bumpMap:_.bumpMap,bumpScale:.14,roughness:.8}),x=new vt({map:m.map,bumpMap:m.bumpMap,bumpScale:.12,roughness:.9}),C=new vt({color:3875604,roughness:.88}),A=new vt({map:p.map,bumpMap:p.bumpMap,bumpScale:.35,roughness:.92}),P=new vt({color:16765562,emissive:16751150,emissiveIntensity:1.4,roughness:.25}),D=new vt({color:13740363,roughness:.95}),E=new vt({color:4156214,roughness:.82}),M=new vt({color:15391680,roughness:.92,side:be}),U=new vt({color:4537914,metalness:.72,roughness:.4}),V=new vt({map:Fm(),roughness:.85});function G(Rt){const{x:L,z:zt,w:ht,h:Ct,d:ot,rotY:Ht=0,wallMat:bt=S,signText:T="",signSub:v="",twoStory:N=!1,addLantern:k=!0}=Rt,B=new se;B.position.set(L,0,zt),B.rotation.y=Ht;const I=new R(new rt(ht,Ct,ot),bt);I.position.y=Ct*.5,I.castShadow=!0,I.receiveShadow=!0,B.add(I);const q=N?2.4:1.9,j=new R(new rt(ht+.3,q,.45),bt);j.position.set(0,Ct+q*.5-.1,ot*.5-.15),j.castShadow=!0,B.add(j);const nt=new R(new rt(ht+.75,.32,.75),C);nt.position.set(0,Ct+q-.05,ot*.5-.05),B.add(nt);const it=2.8,tt=new R(new rt(ht+.4,.36,it),x);tt.position.set(0,.18,ot*.5+it*.5),tt.receiveShadow=!0,B.add(tt);const ut=N?4.2:Ct-.4,pt=new R(new rt(ht+.6,.22,it+.5),C);pt.position.set(0,ut,ot*.5+it*.5),pt.rotation.x=.14,pt.castShadow=!0,B.add(pt);const St=Math.max(2,Math.floor(ht/3.4)+1);for(let K=0;K<St;K++){const at=-ht*.46+K/(St-1)*(ht*.92),lt=new R(new rt(.24,ut-.2,.24),C);lt.position.set(at,(ut+.2)*.5,ot*.5+it-.22),lt.castShadow=!0,B.add(lt)}if(N){const K=new R(new rt(ht+.3,.14,.14),C);K.position.set(0,ut+1.15,ot*.5+it-.2),B.add(K);for(let at=-ht*.45;at<=ht*.45;at+=1.1){const lt=new R(new rt(.1,1,.1),C);lt.position.set(at,ut+.65,ot*.5+it-.2),B.add(lt)}}const mt=new R(new rt(2.1,2.9,.24),C);mt.position.set(0,1.8,ot*.5+.04),B.add(mt);const Ut=new R(new rt(1.72,2.55,.28),P);if(Ut.position.set(0,1.75,ot*.5+.05),B.add(Ut),T==="SALOON")for(const K of[-1,1]){const at=new R(new rt(.78,1.55,.1),y);at.position.set(K*.44,1.5,ot*.5+.22),at.rotation.y=K*.22,B.add(at)}const Dt=[-ht*.32,ht*.32];for(const K of Dt){const at=new R(new rt(1.65,1.75,.2),C);at.position.set(K,2.1,ot*.5+.04);const lt=new R(new rt(1.35,1.45,.24),P);if(lt.position.set(K,2.1,ot*.5+.06),B.add(at,lt),N){const Pt=at.clone();Pt.position.y=6.2;const jt=lt.clone();jt.position.y=6.2,B.add(Pt,jt)}}if(T){const K=Nm(T,{sub:v,bg:T==="SALOON"?"#4a1812":"#2d1b10",border:"#e8ad4a",fg:"#fff2d2"}),at=Math.min(ht*.82,7.6),lt=2.1,Pt=new R(new rt(at,lt,.18),[C,C,C,C,new vt({map:K,roughness:.65}),C]);Pt.position.set(0,Ct+q*.45,ot*.5+.16),B.add(Pt)}if(k){const K=new R(new Tt(.16,.12,.36,8),P);K.position.set(0,ut-.55,ot*.5+it-.35),B.add(K);const at=new $s(16755015,7.5,16,1.6);at.position.set(0,ut-.7,ot*.5+it-.35),B.add(at),i.push(lt=>{at.intensity=7+Math.sin(lt*7.2+L)*1.1})}const Vt=new R(new ve(.75,1),V);Vt.position.set(ht*.16,2,ot*.5+.16),B.add(Vt),s.add(B);const F=Math.abs(Math.cos(Ht)),gt=F>.5?ht:ot,Z=F>.5?ot:ht;t.addBox(L,Ct*.5,zt,gt,Ct+3,Z,"wood")}G({x:0,z:-30,w:17,h:8.6,d:11,rotY:0,wallMat:y,signText:"SALOON",signSub:"WHISKEY • FARO • POKER",twoStory:!0}),G({x:-20,z:-10,w:11,h:5.5,d:9,rotY:Math.PI/2,wallMat:S,signText:"SHERIFF",signSub:"RED GULCH JAIL"}),G({x:-21,z:8,w:12,h:6.2,d:9,rotY:Math.PI/2,wallMat:x,signText:"BANK",signSub:"GOLD & BULLION"}),G({x:-20,z:26,w:10,h:5,d:8.5,rotY:Math.PI/2,wallMat:S,signText:"LIVERY",signSub:"STABLES & FEED",addLantern:!1}),G({x:20,z:-11,w:11.5,h:5.8,d:9,rotY:-Math.PI/2,wallMat:x,signText:"GENERAL",signSub:"DRY GOODS & AMMO"}),G({x:21,z:7,w:11,h:5.4,d:8.5,rotY:-Math.PI/2,wallMat:y,signText:"HOTEL",signSub:"FRONTIER INN"});const et=new se,$=24,W=27,J=16,H=14;function st(Rt,L,zt,ht){const Ct=zt-Rt,ot=ht-L,Ht=Math.hypot(Ct,ot),bt=Math.atan2(Ct,ot),T=new se;T.position.set((Rt+zt)*.5,0,(L+ht)*.5),T.rotation.y=bt;for(const N of[.55,1.15,1.7]){const k=new R(new rt(.14,.14,Ht),x);k.position.y=N,k.castShadow=!0,T.add(k)}const v=Math.max(2,Math.round(Ht/3));for(let N=0;N<=v;N++){const k=-Ht*.5+N/v*Ht,B=new R(new rt(.22,2,.22),C);B.position.set(0,1,k),B.castShadow=!0,T.add(B)}et.add(T),t.addBox((Rt+zt)*.5,1,(L+ht)*.5,Math.abs(Ct)+.5,2,Math.abs(ot)+.5,"wood")}st($-J/2,W-H/2,$+J/2,W-H/2),st($+J/2,W-H/2,$+J/2,W+H/2),st($-J/2,W+H/2,$+J/2,W+H/2),st($-J/2,W-H/2,$-J/2,W-2.5),st($-J/2,W+2.5,$-J/2,W+H/2),s.add(et);const dt=[[23,25],[25,25],[24,24,1.1],[27,30],[18,22],[-9,18],[9,12],[-8,-6],[8,-14]];for(const[Rt,L,zt=.55]of dt){const ht=new R(new rt(1.9,1.1,1.3),D);ht.position.set(Rt,zt,L),ht.rotation.y=Rt*.37%1.2,ht.castShadow=!0,ht.receiveShadow=!0,s.add(ht),zt<.8&&t.addBox(Rt,.55,L,1.9,1.1,1.3,"wood")}function Et(Rt,L,zt){const ht=new se;ht.position.set(Rt,0,L),ht.rotation.y=zt;const Ct=new R(new rt(2.4,.9,4.6),S);Ct.position.y=1.25,Ct.castShadow=!0,ht.add(Ct);const ot=new R(new Tt(1.25,1.25,4.4,12,1,!0,0,Math.PI),M);ot.rotation.z=Math.PI/2,ot.rotation.y=Math.PI/2,ot.position.y=1.72,ot.castShadow=!0,ht.add(ot);for(const[Ht,bt]of[[-1.3,-1.5],[1.3,-1.5],[-1.3,1.5],[1.3,1.5]]){const T=new R(new cn(.68,.08,6,14),C);T.rotation.y=Math.PI/2,T.position.set(Ht,.72,bt),T.castShadow=!0,ht.add(T)}s.add(ht),t.addBox(Rt,1.4,L,3,2.8,4.8,"wood")}Et(6.5,22,.35),Et(-7.5,2,-.25);const kt=new se;kt.position.set(-22,0,-28);for(const[Rt,L]of[[-2,-2],[2,-2],[-2,2],[2,2]]){const zt=new R(new rt(.45,9.5,.45),C);zt.position.set(Rt,4.75,L),zt.castShadow=!0,kt.add(zt)}const Yt=new R(new Tt(3.2,3.2,4.8,16),x);Yt.position.y=11.4,Yt.castShadow=!0;const Q=new R(new cn(3.25,.09,6,20),U);Q.rotation.x=Math.PI/2,Q.position.y=10.2;const ct=Q.clone();ct.position.y=12.6;const yt=new R(new ee(3.7,2.4,16),C);yt.position.y=15,yt.castShadow=!0,kt.add(Yt,Q,ct,yt),s.add(kt),t.addBox(-22,4.5,-28,4.8,9,4.8,"wood");const _t=[[-6,30],[7,34],[-11,14],[11,4],[-5,-16],[6,-18],[13,-24],[-13,-22]];for(const[Rt,L]of _t){const zt=new R(new rt(1.45,1.35,1.45),S);zt.position.set(Rt,.675,L),zt.rotation.y=Rt*.5,zt.castShadow=!0,zt.receiveShadow=!0,s.add(zt);const ht=new R(new Tt(.48,.44,1.25,12),y);ht.position.set(Rt+1.15,.625,L+.4),ht.castShadow=!0,s.add(ht),t.addBox(Rt+.4,.7,L+.15,2.5,1.4,1.9,"wood")}function It(Rt,L,zt=1){const ht=new se;ht.position.set(Rt,0,L);const Ct=new R(new Tt(.32,.38,4.2,10),E);Ct.position.y=2.1,Ct.castShadow=!0;const ot=new R(new Tt(.22,.24,1.6,8),E);ot.position.set(.75,2.7,0);const Ht=new R(new rt(.75,.38,.38),E);Ht.position.set(.42,2,0);const bt=new R(new Tt(.22,.24,1.4,8),E);bt.position.set(-.72,3.1,0);const T=new R(new rt(.7,.38,.38),E);T.position.set(-.4,2.5,0),ht.add(Ct,ot,Ht,bt,T),ht.rotation.y=Rt*.8,ht.scale.setScalar(zt),s.add(ht)}const Nt=[[-34,38,1.1],[36,40,1.2],[-38,-22,1.3],[38,-28,1.05],[-42,6,1.15],[44,12,1.25],[14,44,.95],[-16,42,1]];for(const[Rt,L,zt]of Nt)It(Rt,L,zt);const Gt=[[0,-115,58,36,26],[-82,-96,44,42,32],[85,-90,48,38,30],[-118,-10,34,34,54],[118,5,36,32,58],[-85,95,52,28,34],[76,102,56,30,32]];for(const[Rt,L,zt,ht,Ct]of Gt){const ot=new R(new Tt(zt*.42,zt*.68,ht,7),A);ot.position.set(Rt,ht*.5-1,L),ot.rotation.y=Rt*.1,s.add(ot);const Ht=new R(new Tt(zt*.46,zt*.42,4.5,7),A);Ht.position.set(Rt,ht-1.5,L),Ht.rotation.y=Rt*.1,s.add(Ht)}e.initAmbient("dust",t.bounds),e.addTumbleweed(new b(-25,.7,15),1),e.addTumbleweed(new b(20,.7,-4),-1);const Qt=[{type:"health",pos:new b(-12,.8,20),label:"FRONTIER ELIXIR (+35 HP)"},{type:"ammo",pos:new b(12,.8,10),label:"AMMO BANDOLIER"},{type:"health",pos:new b(24,.8,28),label:"CORRAL MEDKIT (+35 HP)"},{type:"ammo",pos:new b(-10,.8,-14),label:"RIFLE & SHELL BOX"},{type:"health",pos:new b(11,.8,-22),label:"SALOON TONIC (+35 HP)"}];for(const Rt of Qt){const L=Yo(Rt.type);L.position.copy(Rt.pos),s.add(L),r.push({...Rt,mesh:L,collected:!1})}return{enemySpawns:[{type:"cowboy",pos:new b(-6,0,18)},{type:"cowboy",pos:new b(9,0,14)},{type:"bandito",pos:new b(-11,0,3)},{type:"cowboy",pos:new b(11,0,-2)},{type:"bandito",pos:new b(23,0,24)},{type:"bandito",pos:new b(-4,0,-10)},{type:"cowboy",pos:new b(9,0,-15)},{type:"bandito",pos:new b(-11,0,-20)},{type:"cowboy",pos:new b(12,0,-24)},{type:"bandito",pos:new b(0,0,-18)},{type:"boss_west",pos:new b(0,0,-21),isBossWave:!0}],pickups:r,animated:i,disposables:n}}function Yo(s){const t=new se,e=s==="health",n=new vt({color:e?3066993:15906633,emissive:e?1474627:11760658,emissiveIntensity:.75,metalness:.35,roughness:.3}),i=e?new R(new Tt(.28,.34,.72,10),n):new R(new rt(.75,.48,.52),n),r=new R(new cn(.55,.04,6,18),new me({color:e?7208874:16770180}));return r.rotation.x=Math.PI/2,r.position.y=-.32,t.add(i,r),t}const zm={id:"japan",index:1,themeClass:"theme-japan",act:"ACT II • 1603",title:"KYOTO MIST",subtitle:"Blossom & Steel",heroName:"KENSHIN THE SAMURAI",objective:"Purge the Shrine of Ninjas & Rōnin, Defeat Lord Kurogane",quote:'"Beneath falling blossoms, honor is weighed by the quiet edge of steel. Step through the Torii gate and reclaim the sacred hill."',musicTheme:"japan",enemyIcon:"⚔",currency:"両 ",arsenalSummary:[["1 • Muramasa Katana","Swift folded-steel blade. RMB unleashes Iaido cleave."],["2 • Yumi Longbow","Silent piercing arrows with Spirit Focus Zoom (RMB)."],["3 • Shinobi Shuriken","Rapid steel stars. RMB throws a 3-star fan."],["4 • Tanegashima Musket","Thunderous Edo black-powder firepower."]],spawnPos:new b(0,0,46),spawnYaw:0,cameraPreview:{center:new b(0,5,-4),radius:38,height:14,speed:.13}};function km(s,t,e){const n=[],i=[],r=[];t.bounds={minX:-54,maxX:54,minZ:-54,maxZ:54};const o=new b(-.35,.22,-.9).normalize(),a=qo({topColor:1778503,midColor:9391725,horizonColor:16762029,sunColor:16771276,sunDirection:o,cloudTint:16757690,cloudDensity:.48});s.add(a.mesh),i.push(v=>{a.uniforms.uTime.value=v}),s.fog=new es(8149614,.0092);const l=new Ho(16765142,2964268,.9);s.add(l);const c=new Pi(16764856,2.35);c.position.copy(o).multiplyScalar(95),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),c.shadow.camera.left=-65,c.shadow.camera.right=65,c.shadow.camera.top=65,c.shadow.camera.bottom=-65,c.shadow.near=10,c.shadow.far=210,c.shadow.bias=-5e-4,s.add(c);const h=new Pi(7968488,.55);h.position.set(50,26,55),s.add(h);const u=Si("japan_moss",26,26),d=new R(new ve(340,340),new vt({map:u.map,bumpMap:u.bumpMap,bumpScale:.22,roughness:.92}));d.rotation.x=-Math.PI/2,d.receiveShadow=!0,s.add(d);const f=Si("cobble",3,22),g=new R(new ve(6.8,92),new vt({map:f.map,bumpMap:f.bumpMap,bumpScale:.2,roughness:.85}));g.rotation.x=-Math.PI/2,g.position.set(0,.04,2),g.receiveShadow=!0,s.add(g);const _=yi("darkJapan",2,2),m=yi("redLacquer",2,2),p=Xo("temple",2,2),S=Kl("japan",4,2),y=Dm(2,1),x=Si("zen_sand",4,4),C=Os("japan"),A=new vt({map:_.map,bumpMap:_.bumpMap,bumpScale:.1,roughness:.78}),P=new vt({map:m.map,roughness:.48,metalness:.08}),D=new vt({map:p.map,bumpMap:p.bumpMap,bumpScale:.2,roughness:.88}),E=new vt({map:S.map,bumpMap:S.bumpMap,bumpScale:.18,roughness:.58,metalness:.15}),M=new vt({map:y,emissive:16757596,emissiveIntensity:.52,roughness:.55}),U=new vt({color:16770216,emissive:16749622,emissiveIntensity:1.9,roughness:.2}),V=new vt({color:15119943,metalness:.85,roughness:.28}),G=new vt({color:4949820,roughness:.45}),et=new vt({color:3894834,roughness:.8}),$=new vt({color:16757707,emissive:6036016,emissiveIntensity:.22,roughness:.85}),W=new vt({color:16766692,emissive:7021627,emissiveIntensity:.25,roughness:.85}),J=new vt({map:C,side:be,roughness:.7});function H(v,N,k=1,B=0){const I=new se;I.position.set(v,0,N),I.rotation.y=B,I.scale.setScalar(k);for(const St of[-3.2,3.2]){const mt=new R(new Tt(.46,.55,1.1,10),D);mt.position.set(St,.55,0),mt.castShadow=!0;const Ut=new R(new Tt(.32,.38,6.8,12),P);Ut.position.set(St,4,0),Ut.castShadow=!0,I.add(mt,Ut)}const q=new R(new rt(8.6,.42,.44),P);q.position.set(0,5.9,0),q.castShadow=!0;const j=new R(new rt(9.8,.54,.68),P);j.position.set(0,7.25,0),j.castShadow=!0;const nt=new R(new rt(10.3,.34,.86),E);nt.position.set(0,7.62,0);const it=new R(new rt(.9,1.15,.26),A);it.position.set(0,6.55,0);const tt=new R(new rt(.98,1.24,.16),V);tt.position.set(0,6.55,0),I.add(q,j,nt,it,tt),s.add(I);const ut=Math.cos(B),pt=Math.sin(B);for(const St of[-3.2*k,3.2*k]){const mt=v+St*ut,Ut=N-St*pt;t.addBox(mt,3.5,Ut,1.1*k,7.5*k,1.1*k,"wood")}}H(0,34,1.15),H(0,21,1),H(0,-14,1.1);const st=Bs(24,15,{deepColor:1064005,shallowColor:2520440,foamColor:16767462,sunColor:16765109,sunDir:o,opacity:.9,waveScale:.05});st.mesh.position.set(16,.08,4),s.add(st.mesh),i.push(v=>{st.uniforms.uTime.value=v});const dt=[[6,-3],[11,-3.5],[18,-3.5],[26,-3],[28,3],[27,10],[22,11.5],[12,11.5],[6,10],[4.5,4]];for(const[v,N]of dt){const k=new R(new bn(1.1+v*7%1,1),D);k.position.set(v,.45,N),k.scale.set(1.3,.72,1.1),k.castShadow=!0,s.add(k)}const Et=new me({color:16739886}),kt=new me({color:16773350});for(let v=0;v<6;v++){const N=new R(new Bo(.12,.45,4,6),v%2===0?Et:kt);N.rotation.x=Math.PI/2,s.add(N);const k=3.2+v%3*1.9,B=.45+v*.1,I=v*1.1;i.push(q=>{const j=q*B+I;N.position.set(16+Math.cos(j)*k,.05,4+Math.sin(j)*(k*.65)),N.rotation.z=j})}const Yt=new se;Yt.position.set(16,0,4);const Q=new R(new rt(4.4,.35,16),A);Q.position.y=.75,Q.receiveShadow=!0,Q.castShadow=!0,Yt.add(Q);for(const v of[-2,2]){const N=new R(new rt(.18,.16,16),P);N.position.set(v,1.85,0),Yt.add(N);for(let k=-7;k<=7;k+=3.5){const B=new R(new rt(.24,1.35,.24),P);B.position.set(v,1.35,k);const I=new R(new xe(.16,8,8),V);I.position.set(v,2.08,k),Yt.add(B,I)}}s.add(Yt),t.addWalkable(16,4,4.4,16.5,.92);const ct=-19,yt=4,_t=18,It=16,Nt=new R(new rt(_t,.26,It),new vt({map:x.map,bumpMap:x.bumpMap,bumpScale:.24,roughness:.95}));Nt.position.set(ct,.13,yt),Nt.receiveShadow=!0,s.add(Nt);for(const[v,N,k,B]of[[ct,yt-It/2,_t+.5,.45],[ct,yt+It/2,_t+.5,.45],[ct-_t/2,yt,.45,It],[ct+_t/2,yt,.45,It]]){const I=new R(new rt(k,.45,B),A);I.position.set(v,.22,N),s.add(I)}const Gt=[[-22,2,1.7],[-15,7,1.4],[-20,8,1.15],[-16,-1,1.55]];for(const[v,N,k]of Gt){const B=new R(new bn(k,1),D);B.position.set(v,k*.65,N),B.scale.set(1.25,.95,1),B.castShadow=!0,B.receiveShadow=!0,s.add(B),t.addBox(v,k*.6,N,k*2.1,k*1.6,k*1.8,"stone")}function Qt(v){const{x:N,z:k,w:B,h:I,d:q,rotY:j=0,isTemple:nt=!1}=v,it=new se;it.position.set(N,0,k),it.rotation.y=j;const tt=nt?1.4:.7,ut=new R(new rt(B+2.2,tt,q+2.2),D);ut.position.y=tt*.5,ut.receiveShadow=!0,ut.castShadow=!0,it.add(ut);const pt=new R(new rt(B+1.6,.22,q+1.6),A);pt.position.y=tt+.11,pt.receiveShadow=!0,it.add(pt);const St=tt+.22+I*.5,mt=new R(new rt(B,I,q),M);mt.position.y=St,mt.castShadow=!0,mt.receiveShadow=!0,it.add(mt);const Ut=nt?P:A;for(const Pt of[-B*.52,0,B*.52])for(const jt of[-q*.52,q*.52]){const he=new R(new Tt(.22,.25,I+.3,10),Ut);he.position.set(Pt,St,jt),he.castShadow=!0,it.add(he)}const Dt=tt+.22+I,Vt=new R(new ee(Math.max(B,q)*.92,nt?3.2:2.6,4),E);Vt.rotation.y=Math.PI/4,Vt.scale.set(B/Math.max(B,q)*1.15,1,q/Math.max(B,q)*1.15),Vt.position.y=Dt+(nt?1.4:1.1),Vt.castShadow=!0,it.add(Vt);const F=new R(new rt(B*.72,.36,.42),V);if(F.position.y=Dt+(nt?2.85:2.35),it.add(F),nt){const Pt=new R(new rt(B*.56,2.8,q*.56),P);Pt.position.y=Dt+3.4,Pt.castShadow=!0;const jt=new R(new ee(Math.max(B,q)*.62,3,4),E);jt.rotation.y=Math.PI/4,jt.position.y=Dt+5.9,jt.castShadow=!0;const he=new R(new Tt(.08,.18,2.4,8),V);he.position.y=Dt+8.3,it.add(Pt,jt,he);for(const Jt of[-B*.32,B*.32]){const Ae=new R(new ve(1.5,3.4),J);Ae.position.set(Jt,St+.2,q*.5+.55),it.add(Ae)}}const gt=new R(new xe(.32,10,8),U);gt.scale.set(.85,1.3,.85),gt.position.set(0,Dt-.5,q*.5+.9),it.add(gt);const Z=new $s(16752706,nt?11:7,20,1.6);Z.position.set(0,Dt-.8,q*.5+1.2),it.add(Z),s.add(it);const K=Math.abs(Math.cos(j)),at=(K>.5?B:q)+1.8,lt=(K>.5?q:B)+1.8;t.addBox(N,(tt+I)*.5,k,at,tt+I+2,lt,"wood")}Qt({x:0,z:-34,w:16,h:5.4,d:11,rotY:0,isTemple:!0}),Qt({x:-24,z:-18,w:11,h:4,d:8.5,rotY:Math.PI/3}),Qt({x:24,z:-17,w:11,h:4,d:8.5,rotY:-Math.PI/3}),Qt({x:-28,z:24,w:10.5,h:3.8,d:8,rotY:Math.PI/2});function qt(v,N){const k=new se;k.position.set(v,0,N);const B=new R(new Tt(.18,.26,1.5,8),D);B.position.y=.75;const I=new R(new rt(.45,.45,.45),U);I.position.y=1.72;const q=new R(new ee(.58,.38,6),D);q.position.y=2.12,k.add(B,I,q),s.add(k),t.addBox(v,1,N,.75,2.2,.75,"stone")}for(const v of[28,14,0,-10,-22])qt(-4.5,v),qt(4.5,v);function Rt(v,N,k=1){const B=new se;B.position.set(v,0,N);const I=new R(new Tt(.32,.56,4.4,8),A);I.position.y=2.2,I.rotation.z=.12,I.castShadow=!0,B.add(I);const q=[[0,5.2,0,2.7,$],[-1.9,4.5,.8,2.1,W],[1.8,4.7,-.7,2.2,$],[.4,6.2,.5,1.9,W],[-.9,4.3,-1.6,1.85,$]];for(const[j,nt,it,tt,ut]of q){const pt=new R(new Ys(tt,1),ut);pt.position.set(j,nt,it),pt.scale.set(1.25,.72,1.15),pt.castShadow=!0,B.add(pt)}B.scale.setScalar(k),s.add(B),t.addBox(v,2,N,1.2*k,4.2*k,1.2*k,"wood")}const L=[[-12,-26,1.2],[12,-26,1.25],[-10,16,1.05],[10,18,1.1],[-31,4,1.3],[32,-4,1.2],[-14,-6,1],[30,16,1.15]];for(const[v,N,k]of L)Rt(v,N,k);function zt(v,N,k=12,B=4.5){const I=new se;for(let q=0;q<k;q++){const j=q/k*Math.PI*2+v*.3,nt=.6+q*1.37%1*B,it=v+Math.cos(j)*nt,tt=N+Math.sin(j)*nt,ut=11+q*3.1%6,pt=new R(new Tt(.11,.15,ut,6),G);if(pt.position.set(it,ut*.5,tt),pt.rotation.z=(q%3-1)*.04,pt.castShadow=!0,I.add(pt),q%2===0){const St=new R(new bn(1.5,0),et);St.position.set(it,ut-1,tt),St.scale.set(1.4,.48,1.4),I.add(St)}}s.add(I),t.addBox(v,3,N,B*1.1,6,B*1.1,"wood")}const ht=[[-14,38,14,5],[14,38,14,5],[-26,42,12,5.5],[26,36,14,5.5],[36,26,14,5.5],[38,6,14,5.5],[-40,-6,14,5.5],[38,-26,14,5.5],[-38,-32,14,5.5],[20,26,10,3.6]];for(const[v,N,k,B]of ht)zt(v,N,k,B);const Ct=new se,ot=new R(new ee(92,68,24),new vt({color:3882339,roughness:.95}));ot.position.set(0,32,-165);const Ht=new R(new ee(34,25,24),new vt({color:16772070,emissive:3875370,emissiveIntensity:.2,roughness:.85}));Ht.position.set(0,54,-165),Ct.add(ot,Ht),s.add(Ct);for(let v=0;v<10;v++){const N=v/10*Math.PI*2;if(Math.abs(Math.sin(N)+1)<.2)continue;const k=new R(new ee(46+v%3*14,28+v%4*8,9),new vt({color:3095356,roughness:.95}));k.position.set(Math.cos(N)*138,12,Math.sin(N)*138),s.add(k)}e.initAmbient("sakura",t.bounds);const bt=[{type:"health",pos:new b(-12,.8,26),label:"MATCHA TEA ELIXIR (+35 HP)"},{type:"ammo",pos:new b(16,1.5,4),label:"ARROWS & SHURIKEN POUCH"},{type:"health",pos:new b(-18,.8,4),label:"ZEN SANCTUARY HERBS (+35 HP)"},{type:"ammo",pos:new b(11,.8,-14),label:"POWDER & QUIVER CACHE"},{type:"health",pos:new b(-11,.8,-20),label:"SHRINE BLESSING (+35 HP)"}];for(const v of bt){const N=Yo(v.type);N.position.copy(v.pos),s.add(N),r.push({...v,mesh:N,collected:!1})}return{enemySpawns:[{type:"ninja",pos:new b(-8,0,26)},{type:"ninja",pos:new b(9,0,24)},{type:"ronin",pos:new b(-15,0,8)},{type:"ninja",pos:new b(16,.95,4)},{type:"ronin",pos:new b(4,0,6)},{type:"ninja",pos:new b(-17,0,-4)},{type:"ronin",pos:new b(12,0,-10)},{type:"ninja",pos:new b(-9,0,-18)},{type:"ronin",pos:new b(8,0,-21)},{type:"ninja",pos:new b(0,0,-23)},{type:"boss_japan",pos:new b(0,0,-24),isBossWave:!0}],pickups:r,animated:i,disposables:n}}const Hm={id:"swiss",index:2,themeClass:"theme-swiss",act:"ACT III • 1307",title:"RÜTLI VALLEY",subtitle:"Tell's Arrow & The Uri Banner",heroName:"WILHELM TELL (URI)",objective:"Drive the Austrian Army from the Valley & Defeat Capt. von Gessler",quote:'"Upon the Rütli meadow we swore our oath beneath the Uri Bull: Uri, Schwyz, and Unterwalden shall bow to no tyrant’s hat!"',musicTheme:"swiss",enemyIcon:"✚",currency:"Fl ",arsenalSummary:[["1 • Tell's Armbrust","Precision Swiss crossbow with Eagle-Eye Zoom (RMB)."],["2 • Swiss Halberd","Cleaves Austrian steel armor at close quarters."],["3 • Alpine Repeater","Rapid-fire light crossbow for skirmishes."],["4 • Alpine Fire-Pot","Blazing medieval black-powder grenade."]],spawnPos:new b(-4,0,44),spawnYaw:0,cameraPreview:{center:new b(-4,6,-4),radius:42,height:15,speed:.12}};function Gm(s,t,e){const n=[],i=[],r=[];t.bounds={minX:-52,maxX:44,minZ:-54,maxZ:54};const o=new b(.48,.52,-.7).normalize(),a=qo({topColor:1463976,midColor:6137064,horizonColor:14283007,sunColor:16776160,sunDirection:o,cloudTint:16777215,cloudDensity:.48});s.add(a.mesh),i.push(I=>{a.uniforms.uTime.value=I}),s.fog=new es(12902386,.0052);const l=new Ho(14676735,3892017,.95);s.add(l);const c=new Pi(16774620,2.7);c.position.copy(o).multiplyScalar(110),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),c.shadow.camera.left=-70,c.shadow.camera.right=70,c.shadow.camera.top=70,c.shadow.camera.bottom=-70,c.shadow.near=10,c.shadow.far=230,c.shadow.bias=-5e-4,s.add(c);const h=new Pi(9426175,.5);h.position.set(-55,22,40),s.add(h);const u=Si("alpine_meadow",26,26),d=new R(new ve(360,360),new vt({map:u.map,bumpMap:u.bumpMap,bumpScale:.22,roughness:.92}));d.rotation.x=-Math.PI/2,d.receiveShadow=!0,s.add(d);const f=Si("cobble",3,24),g=new R(new ve(6.5,86),new vt({map:f.map,bumpMap:f.bumpMap,bumpScale:.18,roughness:.88}));g.rotation.x=-Math.PI/2,g.position.set(-4,.04,2),g.receiveShadow=!0,s.add(g);const _=yi("alpine",2,2),m=Xo("castle",2,2),p=Kl("swiss",4,2),S=Um(2,1),y=new vt({map:_.map,bumpMap:_.bumpMap,bumpScale:.14,roughness:.85}),x=new vt({color:3547155,roughness:.86}),C=new vt({map:m.map,bumpMap:m.bumpMap,bumpScale:.26,roughness:.88}),A=new vt({map:p.map,bumpMap:p.bumpMap,bumpScale:.18,roughness:.84}),P=new vt({map:S,roughness:.82}),D=new vt({color:16054783,roughness:.72}),E=new vt({color:6777712,roughness:.92}),M=new vt({color:2051371,roughness:.88}),U=new vt({color:2843446,roughness:.88}),V=new vt({color:14232363,roughness:.7}),G=new vt({color:16767882,emissive:16752691,emissiveIntensity:.75}),et=new vt({map:Os("austria"),side:be,roughness:.65}),$=new vt({map:Os("uri"),side:be,roughness:.65}),W=new vt({map:Os("swiss"),side:be,roughness:.65}),J=Bs(140,220,{deepColor:743544,shallowColor:3065036,foamColor:15465727,sunColor:16776416,sunDir:o,opacity:.9,waveScale:.16});J.mesh.position.set(92,.08,0),s.add(J.mesh),i.push(I=>{J.uniforms.uTime.value=I});for(let I=-52;I<=52;I+=6.5){const q=new R(new bn(1.5+Math.abs(I)*3%1.4,1),C);q.position.set(22.5+Math.sin(I*.14)*2.5,.35,I),q.scale.set(1.4,.65,1.3),s.add(q)}t.addBox(34,2,0,20,4,120,"water");const H=new R(new rt(10,.35,3.6),y);H.position.set(26,.6,16),H.castShadow=!0,s.add(H);for(const I of[22,26,30])for(const q of[14.5,17.5]){const j=new R(new Tt(.16,.18,1.8,8),x);j.position.set(I,.3,q),s.add(j)}const st=new R(new rt(3.2,.65,1.35),y);st.position.set(32,.25,19),s.add(st),i.push(I=>{st.position.y=.28+Math.sin(I*2.2)*.1,st.rotation.z=Math.sin(I*1.7)*.05});const dt=new se;for(let I=0;I<6;I++){const q=-40+I*16,j=28+I%3*8,nt=new R(new bn(14,1),E);nt.position.set(-64,j*.45,q),nt.scale.set(1.1,j/14,1.45),nt.castShadow=!0,dt.add(nt);const it=new R(new bn(9,1),D);it.position.set(-66,j*.9,q),it.scale.set(1.2,.45,1.3),dt.add(it)}s.add(dt);const Et=sl(9.5,31);Et.mesh.position.set(-48.5,15,-18),Et.mesh.rotation.y=Math.PI/2-.28,s.add(Et.mesh);const kt=sl(6.2,23);kt.mesh.position.set(-47.5,11.5,-26),kt.mesh.rotation.y=Math.PI/2-.18,s.add(kt.mesh),i.push(I=>{Et.uniforms.uTime.value=I,kt.uniforms.uTime.value=I*1.15});const Yt=Bs(20,24,{deepColor:1472662,shallowColor:6480363,foamColor:16777215,sunColor:16776416,sunDir:o,opacity:.92,waveScale:.12});Yt.mesh.position.set(-44,.09,-18),s.add(Yt.mesh),i.push(I=>{Yt.uniforms.uTime.value=I*1.3}),e.addMistEmitter(new b(-46,.8,-18),4.5),e.addMistEmitter(new b(-46,.8,-25),3.2);const Q=Bs(68,6.4,{deepColor:1800598,shallowColor:6085864,foamColor:16777215,sunColor:16776416,sunDir:o,opacity:.88,waveScale:.08});Q.mesh.position.set(-10,.06,-8),s.add(Q.mesh),i.push(I=>{Q.uniforms.uTime.value=I*1.5});const ct=new se;ct.position.set(-4,0,-8);const yt=new R(new rt(7.2,.35,9.2),y);yt.position.y=.55,yt.receiveShadow=!0,ct.add(yt);for(const I of[-3.4,3.4]){const q=new R(new rt(.22,.2,9.2),x);q.position.set(I,1.55,0),ct.add(q);for(const j of[-4.2,0,4.2]){const nt=new R(new rt(.26,1.35,.26),x);nt.position.set(I,1.1,j),ct.add(nt)}}s.add(ct),t.addWalkable(-4,-8,7.2,9.5,.72);function _t(I,q,j=0,nt=!0){const it=new se;it.position.set(I,0,q),it.rotation.y=j;const tt=new vt({color:14922122,roughness:.72}),ut=new vt({color:5059360,roughness:.92}),pt=new vt({color:6048308,roughness:.85}),St=new vt({color:9380900,roughness:.8}),mt=new vt({color:2825492,roughness:.85}),Ut=new vt({color:15910441,roughness:.65}),Dt=new vt({color:13687526,metalness:.88,roughness:.22});for(const Ce of[-.17,.17]){const Be=new R(new Tt(.11,.1,.84,8),mt);Be.position.set(Ce,.42,0),Be.castShadow=!0,it.add(Be)}const Vt=new R(new rt(.62,.78,.36),pt);Vt.position.set(0,1.18,0),Vt.castShadow=!0;const F=new R(new rt(.65,.18,.38),Ut);F.position.set(0,1,0);const gt=new R(new rt(.64,.95,.1),St);gt.position.set(0,1.05,-.22),gt.rotation.x=.12,it.add(Vt,F,gt);const Z=new R(new xe(.22,12,10),tt);Z.position.set(0,1.76,0),Z.castShadow=!0;const K=new R(new ee(.21,.38,10),ut);K.rotation.x=Math.PI,K.position.set(0,1.54,.11);const at=new R(new rt(.26,.07,.09),ut);at.position.set(0,1.67,.19);const lt=new R(new Tt(.24,.25,.16,12),St);lt.position.set(0,1.94,0);const Pt=new R(new ee(.05,.42,6),D);Pt.position.set(.18,2.1,-.04),Pt.rotation.z=-.35,it.add(Z,K,at,lt,Pt);const jt=new R(new Tt(.09,.08,.62,8),pt);jt.position.set(-.42,1.24,.16),jt.rotation.x=-.85;const he=new R(new Tt(.09,.08,.66,8),pt);he.position.set(.42,1.28,.22),he.rotation.x=-1.1,it.add(jt,he);const Jt=new R(new Tt(.036,.04,3.05,8),x);Jt.position.set(-.46,1.55,.35),Jt.castShadow=!0;const Ae=new R(new ee(.045,.55,4),Dt);Ae.position.set(-.46,3.3,.35);const qe=new R(new rt(.03,.44,.36),Dt);qe.position.set(-.46,2.86,.52);const ti=new R(new ee(.04,.28,4),Dt);ti.rotation.x=-Math.PI/2,ti.position.set(-.46,2.86,.18);const Ni=new R(new ee(.075,.22,8),Ut);if(Ni.position.set(-.46,2.58,.35),it.add(Jt,Ae,qe,ti,Ni),nt){const Ce=new R(new Tt(.045,.055,5.4,8),x);Ce.position.set(.48,2.7,.42),Ce.castShadow=!0;const Be=new R(new ee(.09,.3,6),Ut);Be.position.set(.48,5.5,.42);const dn=new ve(1.75,2.6,8,4),Fi=new R(dn,$);Fi.position.set(1.36,4.05,.42),it.add(Ce,Be,Fi);const zn=dn.attributes.position.array.slice();i.push(ns=>{const An=dn.attributes.position;for(let Rn=0;Rn<An.count;Rn++){const is=zn[Rn*3],js=zn[Rn*3+1],ss=is+.875;An.setZ(Rn,Math.sin(ns*4.5+ss*2.6+js*.8)*.14*ss)}An.needsUpdate=!0})}else{const Ce=new R(new Tt(.036,.04,2.9,8),x);Ce.position.set(.48,1.48,.36);const Be=new R(new ee(.045,.5,4),Dt);Be.position.set(.48,3.12,.36);const dn=new R(new rt(.03,.4,.34),Dt);dn.position.set(.48,2.72,.52),it.add(Ce,Be,dn)}s.add(it),t.addBox(I,1.2,q,1.2,2.4,1.2,"wood")}_t(2.8,37.5,-.55,!0),_t(-9.2,37.2,.45,!1);function It(I,q,j){const nt=new R(new Tt(.06,.08,6.2,8),x);nt.position.set(I,3.1,q),nt.castShadow=!0;const it=new R(new ve(1.9,3),j);it.position.set(I+.98,4.5,q),s.add(nt,it),i.push(tt=>{it.rotation.y=Math.sin(tt*2.8+I)*.18})}It(-13.8,39.5,W),It(-15.2,33.5,$);const Nt=new $s(16747571,8,16,1.6);Nt.position.set(-9,1.1,39),s.add(Nt);const Gt=new R(new ee(.42,.95,7),new me({color:16754739}));Gt.position.set(-9,.55,39),s.add(Gt),i.push(I=>{Nt.intensity=7.5+Math.sin(I*11)*1.4,Gt.scale.y=.85+Math.sin(I*14)*.2});const Qt=new R(new Tt(.08,.1,1.75,8),x);Qt.position.set(5.5,.875,33),s.add(Qt);const qt=new R(new xe(.24,12,10),new vt({color:14229793,roughness:.3,emissive:3802373,emissiveIntensity:.35}));qt.position.set(5.5,1.92,33),qt.userData.isTellApple=!0,s.add(qt);function Rt(I,q,j,nt,it,tt=0,ut=!1){const pt=new se;pt.position.set(I,0,q),pt.rotation.y=tt;const St=new R(new rt(j+.4,1.1,it+.4),C);St.position.y=.55,St.castShadow=!0,St.receiveShadow=!0,pt.add(St);const mt=new R(new rt(j,nt,it),ut?P:y);mt.position.y=1.1+nt*.5,mt.castShadow=!0,mt.receiveShadow=!0,pt.add(mt);const Ut=2.9,Dt=new ee(Math.max(j,it)*.84,Ut,4),Vt=new R(Dt,A);if(Vt.rotation.y=Math.PI/4,Vt.scale.set((j+2.4)/Math.max(j,it),1,(it+2.4)/Math.max(j,it)),Vt.position.y=1.1+nt+Ut*.48,Vt.castShadow=!0,pt.add(Vt),ut){const lt=new R(new rt(j*.72,.22,1.3),y);lt.position.set(0,3.6,it*.5+.65);const Pt=new R(new rt(j*.72,.85,.14),x);Pt.position.set(0,4.1,it*.5+1.22);const jt=new R(new rt(j*.65,.34,.36),V);jt.position.set(0,4.58,it*.5+1.32),pt.add(lt,Pt,jt)}const F=new R(new rt(2.2,2.7,.2),x);F.position.set(0,2.35,it*.5+.08),pt.add(F);for(const lt of[-j*.32,j*.32]){const Pt=new R(new rt(1.25,1.25,.18),G);Pt.position.set(lt,2.8,it*.5+.08),pt.add(Pt)}const gt=new R(new rt(1.1,1.2,3.4),x);gt.position.set(j*.5+.6,.6,0),gt.castShadow=!0,pt.add(gt),s.add(pt);const Z=Math.abs(Math.cos(tt)),K=Z>.5?j+.8:it+.8,at=Z>.5?it+.8:j+.8;t.addBox(I,(nt+2)*.5,q,K,nt+3,at,"wood")}Rt(-21,22,10,4.6,8.5,Math.PI/2,!0),Rt(12,21,9.5,4.2,8,-Math.PI/2,!1),Rt(-24,3,10.5,4.4,8.5,Math.PI/2.2,!1),Rt(11,-19,9.5,4.5,8,-Math.PI/2.5,!0);const L=-4,zt=-35,ht=new se;ht.position.set(L,0,zt);const Ct=new R(new rt(11,14,11),C);Ct.position.y=7,Ct.castShadow=!0,Ct.receiveShadow=!0,ht.add(Ct);for(let I=-4.8;I<=4.8;I+=2.4)for(const q of[-5.2,5.2]){const j=new R(new rt(1.3,1.4,.8),C);j.position.set(I,14.7,q),ht.add(j)}for(const I of[-10.5,10.5]){const q=new R(new rt(11,5.2,2.4),C);q.position.set(I,2.6,3.2),q.castShadow=!0,q.receiveShadow=!0,ht.add(q)}for(const I of[-3.4,3.4]){const q=new R(new ve(2.3,5.6),et);q.position.set(I,8.6,5.75),ht.add(q)}const ot=new R(new Tt(.1,.12,6,8),x);ot.position.set(0,17,0);const Ht=new R(new ve(3.2,2),et);Ht.position.set(1.6,18.6,0),ht.add(ot,Ht),i.push(I=>{Ht.rotation.y=Math.sin(I*3.4)*.25}),s.add(ht),t.addBox(L,7,zt,11.4,14.5,11.4,"stone"),t.addBox(L-10.5,2.6,zt+3.2,11.2,5.4,2.8,"stone"),t.addBox(L+10.5,2.6,zt+3.2,11.2,5.4,2.8,"stone");const bt=[[-11,14,5.5,1.35,1.1],[4,10,5.2,1.35,1.1],[-12,-18,5.5,1.4,1.1],[3,-22,5.5,1.4,1.1]];for(const[I,q,j,nt,it]of bt){const tt=new R(new rt(j,nt,it),C);tt.position.set(I,nt*.5,q),tt.castShadow=!0,tt.receiveShadow=!0,s.add(tt),t.addBox(I,nt*.5,q,j,nt,it,"stone")}function T(I,q,j=1){const nt=new se;nt.position.set(I,0,q);const it=new R(new Tt(.24,.36,2.6,7),x);it.position.y=1.3,it.castShadow=!0,nt.add(it);const tt=[[3.4,2.4,3.2,M],[5.2,1.9,2.8,U],[6.9,1.35,2.4,M],[8.3,.85,1.9,U]];for(const[ut,pt,St,mt]of tt){const Ut=new R(new ee(pt,St,8),mt);Ut.position.y=ut,Ut.castShadow=!0,nt.add(Ut)}nt.scale.setScalar(j),s.add(nt),t.addBox(I,2,q,1.1*j,4*j,1.1*j,"wood")}const v=[[-34,34,1.25],[-38,18,1.35],[-34,-22,1.2],[-30,-36,1.4],[16,36,1.15],[17,6,1.1],[16,-34,1.3],[-18,-32,1.25],[-26,44,1.2],[9,44,1.15],[-34,6,1.15],[-16,11,.95]];for(const[I,q,j]of v)T(I,q,j);const N=[[-110,-150,75,92],[-20,-165,86,115],[75,-150,78,102],[165,-90,72,95],[175,20,82,108],[155,115,76,88],[60,160,80,96],[-45,165,76,88],[-145,115,78,95],[-155,-25,82,104]];for(const[I,q,j,nt]of N){const it=new R(new ee(j,nt,7),E);it.position.set(I,nt*.45,q),it.rotation.y=I*.2,s.add(it);const tt=new R(new ee(j*.56,nt*.52,7),D);tt.position.set(I,nt*.72,q),tt.rotation.y=I*.2,s.add(tt)}e.initAmbient("alpine",t.bounds);const k=[{type:"health",pos:new b(-14,.8,22),label:"ALPINE CHEESE & CIDER (+35 HP)"},{type:"ammo",pos:new b(7,.8,16),label:"STEEL QUARREL BOLTS"},{type:"health",pos:new b(-18,.8,-1),label:"MOUNTAIN HERB TONIC (+35 HP)"},{type:"ammo",pos:new b(6,.8,-16),label:"CROSSBOW & FIRE-POT CRATE"},{type:"health",pos:new b(-12,.8,-22),label:"WALDSTÄTTEN RATIONS (+35 HP)"}];for(const I of k){const q=Yo(I.type);q.position.copy(I.pos),s.add(q),r.push({...I,mesh:q,collected:!1})}return{enemySpawns:[{type:"halberdier",pos:new b(-10,0,20)},{type:"arquebusier",pos:new b(5,0,15)},{type:"halberdier",pos:new b(-2,0,7)},{type:"arquebusier",pos:new b(-15,0,2)},{type:"halberdier",pos:new b(8,0,1)},{type:"arquebusier",pos:new b(-4,.75,-8)},{type:"halberdier",pos:new b(-14,0,-16)},{type:"arquebusier",pos:new b(6,0,-18)},{type:"halberdier",pos:new b(-6,0,-24)},{type:"arquebusier",pos:new b(2,0,-26)},{type:"boss_swiss",pos:new b(-4,0,-26),isBossWave:!0}],pickups:r,animated:i,disposables:n,tellApple:qt}}const vn=[{meta:Om,builder:Bm},{meta:zm,builder:km},{meta:Hm,builder:Gm}],rl={good:{label:"THE GOOD",enemyMult:.72,playerHp:130},bad:{label:"THE BAD",enemyMult:1,playerHp:100},ugly:{label:"THE UGLY",enemyMult:1.4,playerHp:75}};class Vm{constructor(){this.container=document.getElementById("game-container"),this.sound=new Cm,this.renderer=new _m({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=al,this.renderer.toneMapping=To,this.renderer.toneMappingExposure=1.12,this.container.appendChild(this.renderer.domElement),this.scene=new lh,this.camera=new Ve(72,window.innerWidth/window.innerHeight,.1,600),this.scene.add(this.camera),this.weaponHolder=new se,this.camera.add(this.weaponHolder),this.muzzleLight=new $s(16758861,0,12,2),this.muzzleLight.position.set(.25,-.1,-.9),this.camera.add(this.muzzleLight),this.composer=new wm(this.renderer),this.renderPass=new Em(this.scene,this.camera),this.bloomPass=new Li(new Mt(window.innerWidth,window.innerHeight),.34,.55,.82),this.outputPass=new Am,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(this.outputPass),this.state="title",this.levelIndex=0,this.difficultyKey="bad",this.clock=new Vl,this.elapsed=0,this.worldGroup=new se,this.scene.add(this.worldGroup),this.collision=new nl,this.particles=null,this.animatedCallbacks=[],this.enemies=[],this.bossSpawnPending=null,this.activeBoss=null,this.pickups=[],this.enemyProjectiles=[],this.playerThrowables=[],this.tellApple=null,this.player={pos:new b,vel:new b,yaw:0,pitch:0,hp:100,maxHp:100,stamina:100,grounded:!0,bobPhase:0},this.weapons=[],this.weaponMeshes=[],this.currentWeaponIdx=0,this.fireTimer=0,this.reloading=!1,this.reloadTimer=0,this.scoped=!1,this.recoilOffset=0,this.slashAnim=0,this.baseFov=72,this.stats={score:0,shots:0,hits:0,headshots:0,kills:0},this.keys={},this.mouseDownL=!1,this.mouseDownR=!1,this.pointerLocked=!1,this.raycaster=new Dh,this._cacheDom(),this._bindEvents();const t=new URLSearchParams(window.location.search),e=window.location.hash.replace("#","").toLowerCase(),n={west:0,japan:1,swiss:2};let i=0;if(e in n)i=n[e];else if(t.has("level")){const r=t.get("level").toLowerCase();i=r in n?n[r]:Math.max(0,Math.min(2,parseInt(r,10)||0))}this.loadLevel(i,!0),document.querySelectorAll(".level-card").forEach((r,o)=>r.classList.toggle("active",o===i)),t.get("autostart")==="1"&&(this.startMission(),this.dom.callout.classList.add("hidden")),this._loop()}_cacheDom(){this.dom={titleScreen:document.getElementById("title-screen"),introCard:document.getElementById("intro-card"),pauseScreen:document.getElementById("pause-screen"),endScreen:document.getElementById("end-screen"),hud:document.getElementById("hud"),crosshair:document.getElementById("hud-crosshair"),hitmarker:document.getElementById("hitmarker"),scopeOverlay:document.getElementById("scope-overlay"),scopeLabel:document.getElementById("scope-label"),damageOverlay:document.getElementById("damage-overlay"),hitFlash:document.getElementById("hit-flash"),callout:document.getElementById("callout-banner"),pickupToast:document.getElementById("pickup-toast"),eraBadge:document.getElementById("hud-era-badge"),objective:document.getElementById("hud-objective"),enemyIcon:document.getElementById("hud-enemy-icon"),enemiesLeft:document.getElementById("hud-enemies-left"),bossBarWrap:document.getElementById("boss-bar-wrap"),bossName:document.getElementById("boss-name"),bossBarFill:document.getElementById("boss-bar-fill"),scoreVal:document.getElementById("hud-score"),heroName:document.getElementById("hud-hero-name"),hpText:document.getElementById("hud-hp-text"),hpBar:document.getElementById("hud-hp-bar"),staminaBar:document.getElementById("hud-stamina-bar"),weaponStrip:document.getElementById("hud-weapon-strip"),weaponName:document.getElementById("hud-weapon-name"),ammoPips:document.getElementById("hud-ammo-pips"),ammoMag:document.getElementById("hud-ammo-mag"),ammoReserve:document.getElementById("hud-ammo-reserve"),altHint:document.getElementById("hud-alt-hint"),comicAct:document.getElementById("comic-act"),comicTitle:document.getElementById("comic-title"),comicQuote:document.getElementById("comic-quote"),comicArsenal:document.getElementById("comic-arsenal"),pauseLevelName:document.getElementById("pause-level-name"),btnToggleAudio:document.getElementById("btn-toggle-audio"),endEyebrow:document.getElementById("end-eyebrow"),endTitle:document.getElementById("end-title"),endSummary:document.getElementById("end-summary"),endStats:document.getElementById("end-stats"),btnNextLevel:document.getElementById("btn-next-level")}}_bindEvents(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)}),document.querySelectorAll(".level-card").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".level-card").forEach(n=>n.classList.remove("active")),t.classList.add("active");const e=parseInt(t.dataset.level,10);this.loadLevel(e,!0)})}),document.querySelectorAll(".diff-btn").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll(".diff-btn").forEach(e=>e.classList.remove("active")),t.classList.add("active"),this.difficultyKey=t.dataset.diff})}),document.getElementById("btn-play").addEventListener("click",()=>{this.sound.ensureInit(),this.showIntroCard()}),document.getElementById("btn-start-mission").addEventListener("click",()=>{this.startMission()}),document.getElementById("btn-resume").addEventListener("click",()=>this.resumeGame()),document.getElementById("btn-restart").addEventListener("click",()=>this.restartLevel()),document.getElementById("btn-main-menu").addEventListener("click",()=>this.returnToTitle()),document.getElementById("btn-end-restart").addEventListener("click",()=>this.restartLevel()),document.getElementById("btn-end-menu").addEventListener("click",()=>this.returnToTitle()),document.getElementById("btn-next-level").addEventListener("click",()=>{const t=(this.levelIndex+1)%vn.length;this.loadLevel(t,!0),this.showIntroCard()}),this.dom.btnToggleAudio.addEventListener("click",()=>{const t=this.sound.toggleMute();this.dom.btnToggleAudio.textContent=t?"SOUND: OFF":"SOUND: ON"}),window.addEventListener("keydown",t=>{if(this.keys[t.code]=!0,t.code==="KeyM"){const e=this.sound.toggleMute();this.dom.btnToggleAudio.textContent=e?"SOUND: OFF":"SOUND: ON",this.toast(e?"AUDIO MUTED":"AUDIO ENABLED")}this.state==="playing"&&(t.code==="Digit1"&&this.switchWeapon(0),t.code==="Digit2"&&this.switchWeapon(1),t.code==="Digit3"&&this.switchWeapon(2),t.code==="Digit4"&&this.switchWeapon(3),t.code==="KeyR"&&this.startReload(),t.code==="KeyP"&&this.pauseGame())}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1}),window.addEventListener("wheel",t=>{if(this.state!=="playing")return;const e=t.deltaY>0?1:-1,n=(this.currentWeaponIdx+e+this.weapons.length)%this.weapons.length;this.switchWeapon(n)}),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===this.renderer.domElement,!this.pointerLocked&&this.state==="playing"&&this.pauseGame()}),window.addEventListener("mousemove",t=>{if(this.state!=="playing"||!this.pointerLocked)return;const e=this.scoped?85e-5:.0021;this.player.yaw-=t.movementX*e,this.player.pitch=Math.max(-1.28,Math.min(1.28,this.player.pitch-t.movementY*e))}),window.addEventListener("mousedown",t=>{if(this.state==="playing"){if(!this.pointerLocked){this._requestLock();return}t.button===0?(this.mouseDownL=!0,this.tryFire(!1)):t.button===2&&(this.mouseDownR=!0,this.handleRightClickDown())}}),window.addEventListener("mouseup",t=>{t.button===0&&(this.mouseDownL=!1),t.button===2&&(this.mouseDownR=!1,this.setScope(!1))}),window.addEventListener("contextmenu",t=>t.preventDefault())}_clearWorld(){for(;this.worldGroup.children.length>0;){const t=this.worldGroup.children[0];this.worldGroup.remove(t)}for(;this.weaponHolder.children.length>0;)this.weaponHolder.remove(this.weaponHolder.children[0]);this.animatedCallbacks=[],this.enemies=[],this.bossSpawnPending=null,this.activeBoss=null,this.pickups=[],this.enemyProjectiles=[],this.playerThrowables=[],this.tellApple=null,this.setScope(!1)}loadLevel(t,e=!1){this._clearWorld(),this.levelIndex=t;const{meta:n,builder:i}=vn[t];document.body.className=n.themeClass,this.collision=new nl,this.particles=new Rm(this.worldGroup);const r=i(this.worldGroup,this.collision,this.particles);this.animatedCallbacks=r.animated||[],this.pickups=r.pickups||[],this.tellApple=r.tellApple||null;const o=rl[this.difficultyKey];this.player.pos.copy(n.spawnPos),this.player.vel.set(0,0,0),this.player.yaw=n.spawnYaw,this.player.pitch=0,this.player.maxHp=o.playerHp,this.player.hp=o.playerHp,this.player.stamina=100,this.player.grounded=!0,this.stats={score:0,shots:0,hits:0,headshots:0,kills:0};for(const l of r.enemySpawns)if(l.isBossWave)this.bossSpawnPending=l;else{const c=new il(l.type,l.pos,o.enemyMult);this.worldGroup.add(c.mesh),this.enemies.push(c)}const a=Pm[n.id];this.weapons=a.map(l=>({...l,mag:l.magSize,curReserve:l.reserve})),this.weaponMeshes=this.weapons.map(l=>{const c=Lm(l.id);return c.visible=!1,this.weaponHolder.add(c),c}),this.currentWeaponIdx=0,this.reloading=!1,this.fireTimer=0,e||(this.weaponMeshes[0].visible=!0),this._buildWeaponStripUI(),this._updateHud(),this.dom.bossBarWrap.classList.add("hidden")}showIntroCard(){this.state="intro";const t=vn[this.levelIndex].meta;this.dom.titleScreen.classList.add("hidden"),this.dom.endScreen.classList.add("hidden"),this.dom.pauseScreen.classList.add("hidden"),this.dom.introCard.classList.remove("hidden"),this.dom.comicAct.textContent=`${t.act} — ${t.subtitle}`,this.dom.comicTitle.textContent=t.title,this.dom.comicQuote.textContent=t.quote,this.dom.comicArsenal.innerHTML=t.arsenalSummary.map(([e,n])=>`<div class="arsenal-pill"><b>${e}</b>${n}</div>`).join(""),this.sound.startMusic(t.musicTheme)}_requestLock(){try{const t=this.renderer.domElement.requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}}startMission(){this.loadLevel(this.levelIndex,!1),this.state="playing",this.dom.introCard.classList.add("hidden"),this.dom.titleScreen.classList.add("hidden"),this.dom.pauseScreen.classList.add("hidden"),this.dom.endScreen.classList.add("hidden"),this.dom.hud.classList.remove("hidden"),this.dom.crosshair.classList.remove("hidden"),this.weaponHolder.visible=!0;const t=vn[this.levelIndex].meta;this.camera.rotation.set(0,t.spawnYaw,0,"YXZ"),this.sound.startMusic(t.musicTheme),this._requestLock(),this.showCallout(`${t.title} — DRAW!`)}pauseGame(){if(this.state!=="playing")return;this.state="paused",this.mouseDownL=!1,this.mouseDownR=!1,this.setScope(!1),this.dom.pauseScreen.classList.remove("hidden"),this.dom.crosshair.classList.add("hidden");const t=vn[this.levelIndex].meta;this.dom.pauseLevelName.textContent=`${t.act} — ${t.title}`,document.pointerLockElement&&document.exitPointerLock()}resumeGame(){this.state="playing",this.dom.pauseScreen.classList.add("hidden"),this.dom.crosshair.classList.remove("hidden"),this._requestLock()}restartLevel(){this.startMission()}returnToTitle(){this.state="title",this.setScope(!1),this.weaponHolder.visible=!1,this.dom.hud.classList.add("hidden"),this.dom.crosshair.classList.add("hidden"),this.dom.pauseScreen.classList.add("hidden"),this.dom.endScreen.classList.add("hidden"),this.dom.introCard.classList.add("hidden"),this.dom.titleScreen.classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),this.sound.stopMusic(),this.loadLevel(this.levelIndex,!0)}switchWeapon(t){t===this.currentWeaponIdx||t<0||t>=this.weapons.length||(this.setScope(!1),this.reloading=!1,this.weaponMeshes[this.currentWeaponIdx].visible=!1,this.currentWeaponIdx=t,this.weaponMeshes[t].visible=!0,this.recoilOffset=-.18,this._updateHud())}setScope(t){const e=this.weapons[this.currentWeaponIdx],n=t&&e&&e.altMode==="scope"&&!this.reloading&&this.state==="playing";this.scoped=n,n?(this.dom.scopeOverlay.classList.remove("hidden"),this.dom.scopeLabel.textContent=e.scopeLabel||"OPTIC ZOOM",this.dom.crosshair.classList.add("hidden"),this.weaponHolder.visible=!1):(this.dom.scopeOverlay.classList.add("hidden"),this.state==="playing"&&(this.dom.crosshair.classList.remove("hidden"),this.weaponHolder.visible=!0))}handleRightClickDown(){const t=this.weapons[this.currentWeaponIdx];t&&(t.altMode==="scope"?this.setScope(!0):this.tryFire(!0))}startReload(){const t=this.weapons[this.currentWeaponIdx];!t||t.infinite||this.reloading||t.mag>=t.magSize||t.curReserve<=0||(this.setScope(!1),this.reloading=!0,this.reloadTimer=t.reloadTime,this.sound.playReload(),this.toast("RELOADING..."))}tryFire(t){if(this.fireTimer>0||this.reloading)return;const e=this.weapons[this.currentWeaponIdx];if(!e)return;if(!e.infinite&&e.mag<=0){e.curReserve>0?this.startReload():this.toast("OUT OF AMMO!");return}if(e.kind==="melee"){const g=t&&e.altMode==="heavy_slash";this.fireTimer=g?e.fireRate*1.45:e.fireRate,this.slashAnim=1,this.sound.playShot("slash");const _=new b;this.camera.getWorldDirection(_);const m=new b().crossVectors(_,new b(0,1,0)).normalize(),p=this.camera.getWorldPosition(new b);this.particles.spawnSlashArc(p,_,m,e.slashColor);const S=g?e.damage*1.65:e.damage,y=g?e.range+1:e.range;let x=!1;for(const C of this.enemies){if(!C.alive)continue;const A=new b(C.mesh.position.x-p.x,C.mesh.position.y+1.1-p.y,C.mesh.position.z-p.z);A.length()<=y&&(A.normalize(),A.dot(_)>.35&&(x=!0,this._damageEnemy(C,S,g,C.mesh.position.clone().add(new b(0,1.3,0)))))}x&&this._flashHitmarker(g);return}if(e.kind==="throwable"){e.mag--,this.fireTimer=e.fireRate,this.recoilOffset=e.recoil,this.sound.playShot("throw");const g=this.camera.getWorldPosition(new b),_=new b;this.camera.getWorldDirection(_);const m=new R(new xe(.16,8,8),new me({color:e.projColor}));m.position.copy(g).addScaledVector(_,.8),this.worldGroup.add(m),this.playerThrowables.push({mesh:m,vel:_.multiplyScalar(22).add(new b(0,6.2,0)),fuse:1.65,damage:e.damage,radius:e.blastRadius}),e.mag===0&&e.curReserve>0&&this.startReload(),this._updateHud();return}let n=1,i=e.pellets,r=this.scoped?e.spread*.12:e.spread,o=e.fireRate;t&&e.altMode==="fan"?(o=e.fireRate*.42,r=e.spread*3.5):t&&e.altMode==="double"&&e.mag>=2?(n=2,i=e.pellets*2,r=e.spread*1.35,o=e.fireRate*1.25):t&&e.altMode==="fan_stars"&&(n=Math.min(3,e.mag),i=n,r=.095,o=e.fireRate*1.5),e.mag=Math.max(0,e.mag-n),this.fireTimer=o,this.recoilOffset=e.recoil*(n>1?1.5:1),this.stats.shots++,this.sound.playShot(e.sound),(e.sound==="revolver"||e.sound==="shotgun"||e.sound==="rifle"||e.sound==="musket")&&(this.muzzleLight.intensity=10),this.dom.crosshair.classList.add("spread"),setTimeout(()=>this.dom.crosshair.classList.remove("spread"),95);const a=this.camera.getWorldPosition(new b),l=new b;this.camera.getWorldDirection(l);const c=new b().crossVectors(l,new b(0,1,0)).normalize(),h=a.clone().addScaledVector(l,.75).addScaledVector(c,this.scoped?0:.18).add(new b(0,-.1,0)),u=[];for(const g of this.enemies)g.alive&&u.push(...g.getHitMeshes());this.tellApple&&this.tellApple.visible&&u.push(this.tellApple);let d=!1,f=!1;for(let g=0;g<i;g++){const _=l.clone();r>0&&(_.x+=(Math.random()-.5)*r*2,_.y+=(Math.random()-.5)*r*2,_.z+=(Math.random()-.5)*r*2,_.normalize());const m=this.collision.raycast(a,_,150),p=m?m.dist:150;this.raycaster.set(a,_),this.raycaster.far=p;const S=this.raycaster.intersectObjects(u,!1);if(S.length>0){const y=S[0];if(this.particles.spawnTracer(h,y.point,e.tracerColor),y.object.userData.isTellApple){this.tellApple.visible=!1,this.particles.spawnImpact(y.point,16765517,22,9),this.sound.playHit(!0),this.stats.score+=500,this.showCallout("APPLE SPLIT! +500"),this._flashHitmarker(!0);continue}const x=y.object.userData.enemy;if(x&&x.alive){const C=y.object.userData.hitZone==="head",A=C?e.damage*e.headMult:e.damage;d=!0,C&&(f=!0),this._damageEnemy(x,A,C,y.point)}}else{const y=m?m.point:a.clone().addScaledVector(_,90);this.particles.spawnTracer(h,y,e.tracerColor),m&&this.particles.spawnImpact(m.point,m.tag==="stone"?14275269:13410664,5,5)}}d&&(this.stats.hits++,this._flashHitmarker(f)),e.mag===0&&e.curReserve>0&&this.startReload(),this._updateHud()}_damageEnemy(t,e,n,i){this.particles.spawnImpact(i,n?16765517:14234662,n?14:9,7);const r=t.takeDamage(e,n);if(this.sound.playHit(n),t.isBoss&&this.activeBoss===t){const o=Math.max(0,t.hp/t.maxHp*100);this.dom.bossBarFill.style.width=`${o}%`}if(r){if(this.stats.kills++,this.stats.score+=t.score+(n?75:0),n?(this.stats.headshots++,this.showCallout(this.levelIndex===2?"BULLSEYE!":"HEADSHOT!")):t.isBoss&&this.showCallout(`${t.name.split("—")[0].trim()} DEFEATED!`),!t.isBoss&&Math.random()<.35){const o=this.player.hp<this.player.maxHp*.65?"health":"ammo",a=t.mesh.position.clone();a.y+=.8;const l=this._spawnRuntimePickup(o,a);this.pickups.push({type:o,pos:a,mesh:l,label:o==="health"?"FIELD TONIC (+30 HP)":"LOOTED AMMO",collected:!1})}this._checkStageProgression()}this._updateHud()}_spawnRuntimePickup(t,e){const n=new se,i=t==="health",r=new R(i?new Tt(.24,.28,.62,10):new rt(.62,.4,.45),new vt({color:i?3066993:15906633,emissive:i?1474627:11760658,emissiveIntensity:.85}));return n.add(r),n.position.copy(e),this.worldGroup.add(n),n}_checkStageProgression(){const t=this.enemies.filter(e=>e.alive).length;if(this.bossSpawnPending&&t<=3){const e=this.bossSpawnPending;this.bossSpawnPending=null;const n=rl[this.difficultyKey],i=new il(e.type,e.pos,n.enemyMult);i.alert=!0,this.worldGroup.add(i.mesh),this.enemies.push(i),this.activeBoss=i,this.dom.bossBarWrap.classList.remove("hidden"),this.dom.bossName.textContent=i.name,this.dom.bossBarFill.style.width="100%",this.sound.playBossHorn(),this.showCallout(`SHOWDOWN: ${i.name.split("—")[0].trim()}`),this.particles.spawnSmoke(e.pos.clone().add(new b(0,1.5,0)),16764006,12,1)}!this.bossSpawnPending&&t===0&&(this.dom.bossBarWrap.classList.add("hidden"),setTimeout(()=>{this.state==="playing"&&this._showEndScreen(!0)},950))}_damagePlayer(t){this.state==="playing"&&(this.player.hp=Math.max(0,this.player.hp-t),this.sound.playHurt(),this.dom.damageOverlay.style.opacity="0.9",setTimeout(()=>{const e=this.player.hp<30?.35:0;this.dom.damageOverlay.style.opacity=String(e)},150),this._updateHud(),this.player.hp<=0&&this._showEndScreen(!1))}_showEndScreen(t){this.state="ended",this.setScope(!1),document.pointerLockElement&&document.exitPointerLock(),this.dom.hud.classList.add("hidden"),this.dom.crosshair.classList.add("hidden"),this.dom.endScreen.classList.remove("hidden");const e=vn[this.levelIndex].meta,n=this.stats.shots>0?Math.round(this.stats.hits/this.stats.shots*100):100;if(t){const i=this.levelIndex===vn.length-1;this.dom.endEyebrow.textContent=i?"ALL THREE HORIZONS CONQUERED":`${e.act} COMPLETE`,this.dom.endTitle.textContent=i?"LEGEND OF THREE ERAS":"HORIZON CLEARED",this.dom.endSummary.textContent=i?"From the dusty streets of Red Gulch to the cherry blossoms of Kyoto and the snow-capped peaks of Rütli Valley — your legend echoes across history!":`${e.title} is free. Ready your gear for the next horizon!`,this.dom.btnNextLevel.classList.remove("hidden"),this.dom.btnNextLevel.textContent=i?"REPLAY FROM ACT I ▶":`PROCEED TO ACT ${this.levelIndex+2} ▶`}else this.dom.endEyebrow.textContent=`${e.act} — FALLEN`,this.dom.endTitle.textContent="OUTGUNNED",this.dom.endSummary.textContent="Dust yourself off, steady your aim, and ride back into the fray.",this.dom.btnNextLevel.classList.add("hidden");this.dom.endStats.innerHTML=`
      <div class="stat-card"><div class="stat-val">${e.currency}${this.stats.score}</div><div class="stat-lbl">BOUNTY</div></div>
      <div class="stat-card"><div class="stat-val">${this.stats.headshots}</div><div class="stat-lbl">CRIT SHOTS</div></div>
      <div class="stat-card"><div class="stat-val">${n}%</div><div class="stat-lbl">ACCURACY</div></div>
    `}_buildWeaponStripUI(){this.dom.weaponStrip.innerHTML=this.weapons.map((t,e)=>`
      <div class="w-slot ${e===this.currentWeaponIdx?"active":""}" data-slot="${e}">
        <div class="w-slot-key">[${e+1}]</div>
        <div class="w-slot-name">${t.shortName}</div>
      </div>
    `).join("")}_updateHud(){const t=vn[this.levelIndex].meta,e=this.enemies.filter(i=>i.alive).length+(this.bossSpawnPending?1:0);this.dom.eraBadge.textContent=`${t.act} • ${t.title}`,this.dom.objective.textContent=t.objective,this.dom.enemyIcon.textContent=t.enemyIcon,this.dom.enemiesLeft.textContent=String(e),this.dom.scoreVal.textContent=`${t.currency}${this.stats.score}`,this.dom.heroName.textContent=t.heroName,this.dom.hpText.textContent=`${Math.ceil(this.player.hp)} / ${this.player.maxHp}`,this.dom.hpBar.style.width=`${this.player.hp/this.player.maxHp*100}%`,this.dom.staminaBar.style.width=`${this.player.stamina}%`;const n=this.weapons[this.currentWeaponIdx];if(n)if(this.dom.weaponName.textContent=n.name,this.dom.altHint.textContent=this.reloading?"RELOADING...":n.altHint,this.dom.ammoMag.textContent=n.infinite?"∞":String(n.mag),this.dom.ammoReserve.textContent=n.infinite?"∞":String(n.curReserve),n.infinite)this.dom.ammoPips.innerHTML="";else{const i=Math.min(n.magSize,10);let r="";for(let o=0;o<i;o++)r+=`<span class="ammo-pip ${o<n.mag?"":"spent"}"></span>`;this.dom.ammoPips.innerHTML=r}document.querySelectorAll(".w-slot").forEach((i,r)=>{i.classList.toggle("active",r===this.currentWeaponIdx)})}_flashHitmarker(t){this.dom.hitmarker.classList.remove("hidden"),this.dom.hitmarker.classList.toggle("crit",t),this.dom.hitFlash.style.opacity=t?"0.9":"0.45",clearTimeout(this._hmTimeout),this._hmTimeout=setTimeout(()=>{this.dom.hitmarker.classList.add("hidden"),this.dom.hitFlash.style.opacity="0"},115)}showCallout(t){this.dom.callout.textContent=t,this.dom.callout.classList.remove("hidden"),clearTimeout(this._calloutTimer),this._calloutTimer=setTimeout(()=>{this.dom.callout.classList.add("hidden")},2200)}toast(t){const e=document.createElement("div");e.className="toast-item",e.textContent=t,this.dom.pickupToast.appendChild(e),setTimeout(()=>e.remove(),1950)}_updatePlayer(t){const e=this.weapons[this.currentWeaponIdx],n=this.scoped&&e&&e.scopeFov?e.scopeFov:this.baseFov;Math.abs(this.camera.fov-n)>.1&&(this.camera.fov+=(n-this.camera.fov)*Math.min(1,t*14),this.camera.updateProjectionMatrix());const i=(this.keys.KeyW||this.keys.ArrowUp?1:0)-(this.keys.KeyS||this.keys.ArrowDown?1:0),r=(this.keys.KeyD||this.keys.ArrowRight?1:0)-(this.keys.KeyA||this.keys.ArrowLeft?1:0),o=(this.keys.ShiftLeft||this.keys.ShiftRight)&&i>0&&!this.scoped&&this.player.stamina>6,a=this.scoped?4.2:o?11.4:7.6;o?this.player.stamina=Math.max(0,this.player.stamina-t*26):this.player.stamina=Math.min(100,this.player.stamina+t*20),this.dom.staminaBar.style.width=`${this.player.stamina}%`;const l=new b(-Math.sin(this.player.yaw),0,-Math.cos(this.player.yaw)),c=new b(Math.cos(this.player.yaw),0,-Math.sin(this.player.yaw)),h=new b().addScaledVector(l,i).addScaledVector(c,r),u=h.lengthSq()>.01;u&&h.normalize().multiplyScalar(a),this.player.pos.x+=h.x*t,this.player.pos.z+=h.z*t,this.keys.Space&&this.player.grounded&&(this.player.vel.y=7.4,this.player.grounded=!1),this.player.vel.y-=20.5*t,this.player.pos.y+=this.player.vel.y*t,this.collision.resolveHorizontal(this.player.pos,.55,this.player.pos.y);const d=this.collision.getFloorHeight(this.player.pos.x,this.player.pos.z,this.player.pos.y);this.player.pos.y<=d&&(this.player.pos.y=d,this.player.vel.y=0,this.player.grounded=!0),u&&this.player.grounded&&(this.player.bobPhase+=t*(o?12.5:8.5));const f=u&&this.player.grounded&&!this.scoped?Math.sin(this.player.bobPhase)*.055:0;if(this.camera.position.set(this.player.pos.x,this.player.pos.y+1.68+f,this.player.pos.z),this.camera.rotation.order="YXZ",this.camera.rotation.z=0,this.camera.rotation.y=this.player.yaw,this.camera.rotation.x=this.player.pitch+this.recoilOffset*.22,this.fireTimer>0&&(this.fireTimer-=t),this.reloading&&(this.reloadTimer-=t,this.reloadTimer<=0)){this.reloading=!1;const _=e.magSize-e.mag,m=Math.min(_,e.curReserve);e.mag+=m,e.curReserve-=m,this._updateHud()}this.mouseDownL&&this.fireTimer<=0&&!this.reloading&&e&&e.fireRate<=.4&&this.tryFire(!1),this.recoilOffset*=Math.max(0,1-t*13),this.slashAnim>0&&(this.slashAnim=Math.max(0,this.slashAnim-t*4.5)),this.muzzleLight.intensity>0&&(this.muzzleLight.intensity=Math.max(0,this.muzzleLight.intensity-t*85));const g=this.weaponMeshes[this.currentWeaponIdx];if(g&&g.visible){const _=g.userData.basePos,m=g.userData.baseRot,p=u?Math.cos(this.player.bobPhase*.5)*.014:0,S=u?Math.abs(Math.sin(this.player.bobPhase*.5))*.014:0;g.position.set(_.x+p-this.slashAnim*.35,_.y-S-(this.reloading?.14:0),_.z+this.recoilOffset*.45),g.rotation.set(m.x+this.recoilOffset*1.15-(this.reloading?.65:0)+this.slashAnim*1.1,m.y+this.slashAnim*1.25,m.z+this.slashAnim*.85);const y=g.getObjectByName("spark");if(y){const C=.85+Math.sin(this.elapsed*28)*.35;y.scale.setScalar(C)}const x=g.getObjectByName("spinner");x&&(x.rotation.y+=t*4.5)}for(const _ of this.pickups){if(_.collected)continue;if(_.mesh.rotation.y+=t*2.1,_.mesh.position.y=_.pos.y+Math.sin(this.elapsed*3+_.pos.x)*.16,Math.hypot(_.pos.x-this.player.pos.x,_.pos.z-this.player.pos.z)<2.1){if(_.type==="health"&&this.player.hp>=this.player.maxHp)continue;if(_.collected=!0,_.mesh.visible=!1,this.sound.playPickup(),_.type==="health")this.player.hp=Math.min(this.player.maxHp,this.player.hp+35);else for(const p of this.weapons)p.infinite||(p.curReserve=Math.min(p.reserve*2,p.curReserve+Math.ceil(p.reserve*.45)));this.toast(_.label),this._updateHud()}}}_updateProjectiles(t){for(let n=this.playerThrowables.length-1;n>=0;n--){const i=this.playerThrowables[n];i.fuse-=t,i.vel.y-=17.5*t,i.mesh.position.addScaledVector(i.vel,t),i.mesh.rotation.x+=t*9,i.mesh.rotation.z+=t*7;const r=this.collision.getFloorHeight(i.mesh.position.x,i.mesh.position.z,i.mesh.position.y);if(i.mesh.position.y<=r+.16&&(i.mesh.position.y=r+.16,i.vel.y*=-.4,i.vel.x*=.65,i.vel.z*=.65),i.fuse<=0){this.particles.spawnExplosion(i.mesh.position,i.radius),this.sound.playExplosion();for(const o of this.enemies){if(!o.alive)continue;const a=o.mesh.position.distanceTo(i.mesh.position);if(a<i.radius){const l=1-a/i.radius*.55;this._damageEnemy(o,i.damage*l,!1,o.mesh.position.clone().add(new b(0,1.2,0)))}}this.worldGroup.remove(i.mesh),this.playerThrowables.splice(n,1)}}const e=new b(this.player.pos.x,this.player.pos.y+1.2,this.player.pos.z);for(let n=this.enemyProjectiles.length-1;n>=0;n--){const i=this.enemyProjectiles[n];i.life-=t;const r=i.vel.clone().multiplyScalar(t),o=r.length(),a=r.clone().normalize(),l=this.collision.raycast(i.mesh.position,a,o+.15);if(l||i.life<=0){l&&this.particles.spawnImpact(l.point,16765562,4,4),this.worldGroup.remove(i.mesh),this.enemyProjectiles.splice(n,1);continue}i.mesh.position.add(r),i.mesh.position.distanceTo(e)<.85&&(this._damagePlayer(i.damage),this.worldGroup.remove(i.mesh),this.enemyProjectiles.splice(n,1))}}_updateEnemies(t){const e={onMeleeHitPlayer:n=>{this._damagePlayer(n)},onEnemyFire:(n,i,r)=>{const o=new b().subVectors(r,i).normalize(),a=n.isBoss?.04:.07;o.x+=(Math.random()-.5)*a,o.y+=(Math.random()-.5)*a*.6,o.z+=(Math.random()-.5)*a,o.normalize();const l=new R(new xe(.11,6,6),new me({color:n.projectileColor}));l.position.copy(i),this.worldGroup.add(l),this.particles.spawnTracer(i,i.clone().addScaledVector(o,3.5),n.projectileColor,.08),this.enemyProjectiles.push({mesh:l,vel:o.multiplyScalar(n.isBoss?38:30),damage:n.damage,life:2.8})}};for(const n of this.enemies)n.update(t,this.player.pos,this.collision,e);this.bossSpawnPending&&this.player.pos.z<-12&&this._checkStageProgression()}_loop(){requestAnimationFrame(()=>this._loop());const t=Math.min(.05,this.clock.getDelta());this.elapsed+=t;for(const e of this.animatedCallbacks)e(this.elapsed,t);if(this.particles&&this.particles.update(t,this.elapsed),this.state==="playing")this._updatePlayer(t),this._updateEnemies(t),this._updateProjectiles(t);else if(this.state==="title"||this.state==="intro"){const e=vn[this.levelIndex].meta.cameraPreview,n=this.elapsed*e.speed;this.camera.position.set(e.center.x+Math.sin(n)*e.radius,e.height+Math.sin(this.elapsed*.45)*1.8,e.center.z+Math.cos(n)*e.radius),this.camera.lookAt(e.center),this.weaponHolder.visible=!1}this.composer.render()}}window.addEventListener("DOMContentLoaded",()=>{new Vm});
