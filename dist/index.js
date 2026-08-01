"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var f=n(function(R,v){
function g(e,r,a,s){var o,i,t,u;for(o=r.data,i=r.accessors[1],t=s,u=1;u<=e;u++)i(o,t,u),t+=a;return r}v.exports=g
});var c=n(function(h,q){
var l=require('@stdlib/array-base-arraylike2object/dist'),T=f();function b(e,r,a,s){var o,i,t;if(e<=0)return r;if(i=l(r),i.accessorProtocol)return T(e,i,a,s),r;for(o=s,t=1;t<=e;t++)r[o]=t,o+=a;return r}q.exports=b
});var d=n(function(w,y){
var j=require('@stdlib/strided-base-stride2offset/dist'),k=c();function m(e,r,a){return k(e,r,a,j(e,a))}y.exports=m
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=d(),O=c();x(p,"ndarray",O);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
