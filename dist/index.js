"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=n(function(R,v){
function g(e,r,t,s){var o,i,a,u;for(o=r.data,i=r.accessors[1],a=s,u=1;u<=e;u++)i(o,a,u),a+=t;return r}v.exports=g
});var c=n(function(h,q){
var l=require('@stdlib/array-base-arraylike2object/dist'),T=f();function b(e,r,t,s){var o,i,a;if(e<=0)return r;if(i=l(r),i.accessorProtocol)return T(e,i,t,s),r;for(o=s,a=1;a<=e;a++)r[o]=a,o+=t;return r}q.exports=b
});var d=n(function(w,y){
var j=require('@stdlib/strided-base-stride2offset/dist'),k=c();function m(e,r,t){return k(e,r,t,j(e,t))}y.exports=m
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=d(),O=c();x(p,"ndarray",O);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
