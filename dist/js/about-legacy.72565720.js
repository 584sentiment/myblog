(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0737":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading||!t.srcLoaded,expression:"loading || !srcLoaded"}],staticClass:"about-container"},[t.src?e("iframe",{staticClass:"about-content",attrs:{src:t.src,frameborder:"0"},on:{load:function(a){t.srcLoaded=!0}}}):t._e()])},o=[],c=e("5880"),s={data:function(){return{srcLoaded:!1}},computed:Object(c["mapState"])("about",{src:"data",loading:"loading"}),created:function(){this.$store.dispatch("about/fetchAbout")}},r=s,i=(e("532f"),e("2877")),d=Object(i["a"])(r,n,o,!1,null,"13fa74e7",null);a["default"]=d.exports},"32e0":function(t,a,e){},"532f":function(t,a,e){"use strict";e("32e0")}}]);