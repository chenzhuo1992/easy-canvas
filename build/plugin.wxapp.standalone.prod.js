!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]}}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}({0:function(e,t,o){e.exports=o(96)},96:function(e,t){"use strict";var o,n,r={},f=function(e,t){if(r[e])return r[e];var o={width:0,height:0};return r[e]=o,wx.getImageInfo({src:e,success:function(e){console.log(e),o.width=e.width,o.height=e.height,o.url=e.path,t&&t(o)}}),o},i=function(e){e.imgLoader=f},s=function(e,t){e.props[0]&&(e.props[0]=e.props[0].url)},u=!1,p=function(e){o=e.touches[0]?e.touches[0].x:o,n=e.touches[0]?e.touches[0].y:n;var t={type:e.type,targetTouches:[{pageX:o,pageY:n}],currentTarget:{offsetLeft:0,offsetTop:0},preventDefault:function(){}};if(u="touchmove"!==e.type&&"longtap"!==e.type,this.$eventHandler(t),"touchend"===e.type){var t={type:"click",targetTouches:[{pageX:o,pageY:n}],currentTarget:{offsetLeft:0,offsetTop:0},preventDefault:function(){u=!1}};this.$eventHandler(t)}},c=function(){this.imgLoader=f,this.handle=p};e.exports={onUse:i,onRender:s,onCreate:c}}})});