(function(t){function e(e){for(var n,r,o=e[0],c=e[1],u=e[2],d=0,f=[];d<o.length;d++)r=o[d],a[r]&&f.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,o=1;o<i.length;o++){var c=i[o];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},a={app:0},s=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"016e":function(t,e,i){"use strict";i("85ff")},"034f":function(t,e,i){"use strict";i("64a9")},"0746":function(t,e,i){},2447:function(t,e,i){},"34dc":function(t,e,i){},"3bfb":function(t,e,i){"use strict";i("b1b4")},"3e53":function(t,e){t.exports="data:image/webp;base64,UklGRiIDAABXRUJQVlA4WAoAAAAQAAAAIgAAKgAAQUxQSPoAAAABkHNb27FH9xXbLFPbtpMqlW2X7PIPbLuynSmnss3e1nsPnu9d791NGRETQEYjome4v9WPDAUUUZf5X23VRx90F3xlk68C9EB3zDfW+cjVBACn8sVrr7UPzw56/K+y7j4FAN/BD2z0OxsiAKh7y4LxAGA5y6IlACzWWDYfoD4WDgLyNKHnZrB5ysLthHYWPjcns4dCxy5EMSz6qtkSRL0yHWYA0YHMjuKpzEPFe5n3ChZWvJN5q7ghcw3/TMuMK6plihXu3yTeOwBERBsSs1ClCGihABERC9P/MJ1OV0xodWS85y2F1kCSPg+YWWsgWd87/K2EpD0vZZKRVlA4IAICAACQCgCdASojACsAPtVYpEwoJSOiMdmaAQAaiWwAuzAwFAjdegA56rTAN4yrJsiB2A5YDWMM7ioKgTa0PvsZpZc6LEXVbSAA+094dHpMQYdpTAgiJVn5iMbIjzpO3YAA/vdx5ZCxnh8CY/sbIsZLF+6tlfYnuULJ/e3MugaljGGB+xUBS05Z2nR8aLtldikL3+w9DfQZi4/RUEsHYVALVgRRM8Dmm+jGh/EuJh8B10q0isrOniX2XzjUgGlIscEiocXnPOq8r77Ps7ssDMNCrosztK1eWxIyhRaF8HiL3PdqCKb0Pboj+8Su9y9bRMcA3TM40O1Olx+CoE4u/1VmEZby+8zE743xlmncoeohzXeLSbu42Xyfk2Ih2b6BjAFFiHD81UmQ3Ojf5o/VV/KQL3nvHF/JYKaUv1fA2FoMZkclGiV93R0C+PTN9dJqiK5MvfH97vtgZe5uyOkS/J0PfvSDB5KjZixSb0g1XnWulwg5YkmRB/lZXxlU1H+zM//5+bRkqR35B9WjHII47oUZa4Bkmm3A5jH61Bk+dfx647q4GN3JtK3OsXJdkgYH4L59TrSfdiF/DAM/wRn/8Mcac0JV/YQw+2c/h7Ey31Hl2O0kqxlD3Oi4k0zWrAjUNi0WTeXnO4B4NjG4zhppXDsd5YYTAYtSZ0x4t79iEVDmQQjJ2AAA"},"3fc8":function(t,e,i){"use strict";i("d45f")},"49b4":function(t,e,i){"use strict";i("ded4")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Header"),i("div",{staticClass:"wrapper"},[i("router-view")],1)],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:i("9b19"),alt:"Jumbo logo"}})])],1),n("nav",{staticClass:"nav"},[n("menu",{staticClass:"menu"},[n("ul",{staticClass:"menu__list"},[n("li",{staticClass:"menu__item"},[n("router-link",{staticClass:"menu__link",attrs:{to:"/","exact-active-class":"menu__link_active"}},[t._v("\n            Map\n          ")])],1),n("li",{staticClass:"menu__item"},[n("router-link",{staticClass:"menu__link",attrs:{to:"/stores-by-city","exact-active-class":"menu__link_active"}},[t._v("\n            Stores by city\n          ")])],1)])])])])},o=[],c=(i("a2c4"),i("2877")),u={},l=Object(c["a"])(u,r,o,!1,null,"c3d6ed74",null),d=l.exports,f={name:"App",components:{Header:d}},p=f,h=(i("034f"),Object(c["a"])(p,a,s,!1,null,null,null)),m=h.exports,v=i("2f62"),g=(i("4de4"),i("d3b7"),i("ac1f"),i("1276"),i("d81d"),{map:void 0,listRef:void 0,listItemActiveIndex:void 0}),b={getSearchResult:function(t,e,i){return function(t){return""!==t?i.dataStore.data.filter((function(e){return e.city.toLowerCase()===t.toLowerCase()})):i.dataStore.data}},getMarkers:function(t,e,i){return i.dataStore.data},getListRef:function(t){return t.listRef},getFilterStoresOpenUtilTime:function(t,e,i){return function(t){return i.dataStore.data.filter((function(e){return e.todayClose.split(":")[0]>=t}))}},getFilters:function(t,e,i){return function(t){switch(t){case"sundayOpen":return i.dataStore.data.filter((function(t){return t.sundayOpen}));case"new":return i.dataStore.data.filter((function(t){return 0!==t.newStore}));case"openUntil19":return e.getFilterStoresOpenUtilTime(19);case"openUntil20":return e.getFilterStoresOpenUtilTime(20);case"openUntil21":return e.getFilterStoresOpenUtilTime(21);case"openUntil22":return e.getFilterStoresOpenUtilTime(22);default:return i.dataStore.data}}}},y={getCenter:function(t,e){var i=t.commit;i("setCenter",{position:e})},getZoom:function(t,e){var i=t.commit;i("setZoom",{zoom:e})},getMap:function(t,e){var i=t.commit;i("setMap",{map:e})},getListRef:function(t,e){var i=t.commit;i("setListRef",{ref:e})},getListItemActiveIndex:function(t,e){var i=t.commit;i("setListItemActiveIndex",{index:e})}},C={setCenter:function(t,e){var i=e.position;t.map.panTo(i)},setZoom:function(t,e){var i=e.zoom;t.map.setZoom(i)},setMap:function(t,e){var i=e.map;t.map=i},setListRef:function(t,e){var i=e.ref;t.listRef=i},setListItemActiveIndex:function(t,e){var i=e.index;t.listItemActiveIndex=i}},S={state:g,actions:y,mutations:C,getters:b},_=i("5530"),A=i("2909"),O=(i("fb6a"),i("6062"),i("3ca3"),i("ddb0"),i("99af"),i("5319"),i("a9e3"),i("bc3a")),k=i.n(O),x={data:[],isLoading:!0,searchedData:[],isLoadingSearchedData:!1,isLoadingUpdateSearchedData:!1},j={capitalizeFirstLetter:function(){return function(t){return t.charAt(0).toUpperCase()+t.slice(1)}},getUniqueSearchedCities:function(t,e){return function(i){var n=t.searchedData.map((function(t){return e.capitalizeFirstLetter(t)}));return Object(A["a"])(new Set([e.capitalizeFirstLetter(i)].concat(Object(A["a"])(n))))}},getFilteredSearchedData:function(t){return function(e){return t.searchedData.filter((function(t){return t!==e}))}},getSearchedLoading:function(t){return t.isLoadingSearchedData||t.isLoadingUpdateSearchedData}},D={getData:function(t){var e=t.commit,i=t.state;i.data.length||k.a.get("https://api.jsonstorage.net/v1/json/00000000-0000-0000-0000-000000000000/c4357a15-46e2-4542-8e93-6aa6a0c33c1e").then((function(t){e("setData",{result:t.data})}))},getSearchedData:function(t){var e=t.commit;e("setIsLoadingSearchedData",{flag:!0}),k.a.get("https://api.jsonstorage.net/v1/json/d7a24bbc-6c1e-414b-b649-5e60058dd58c/6372c018-aaf9-4b71-9444-2a68369466fb").then((function(t){e("setSearchedData",{result:t.data})})).finally((function(){e("setIsLoadingSearchedData",{flag:!1})}))},updateSearchedData:function(t,e){var i=t.dispatch,n=t.commit;n("setIsLoadingUpdateSearchedData",{flag:!0}),k.a.put("https://api.jsonstorage.net/v1/json/d7a24bbc-6c1e-414b-b649-5e60058dd58c/6372c018-aaf9-4b71-9444-2a68369466fb?apiKey=4af4f9cf-fb66-402b-903b-daec12d598ad",e).then((function(){i("getSearchedData")})).finally((function(){n("setIsLoadingUpdateSearchedData",{flag:!1})}))},removeSearchedDataItem:function(t,e){var i=t.dispatch;i("updateSearchedData",e)}},w={setData:function(t,e){var i=e.result;t.data=i.map((function(t){return Object(_["a"])(Object(_["a"])({},t),{},{addressName:t.addressName.replace(/Jumbo /gi,""),position:{lat:Number(t.latitude),lng:Number(t.longitude)}})})),t.isLoading=!1},setSearchedData:function(t,e){var i=e.result;t.searchedData=i},setIsLoadingSearchedData:function(t,e){var i=e.flag;t.isLoadingSearchedData=i},setIsLoadingUpdateSearchedData:function(t,e){var i=e.flag;t.isLoadingUpdateSearchedData=i}},L={state:x,actions:D,mutations:w,getters:j},I=(i("4ec9"),{activeIndex:void 0}),F={getFilterStoresByCities:function(t,e,i){return function(t){return i.dataStore.data.filter((function(e){return e.city===t}))}},getUniqCities:function(t,e,i){return Object(A["a"])(new Map(i.dataStore.data.map((function(t){return[t["city"],{city:""===t.city?"Without city name":t.city,storesLength:e.getFilterStoresByCities(t.city).length,stores:e.getFilterStoresByCities(t.city)}]}))).values())},getCitySearchResult:function(t,e){return function(t){return""!==t?e.getUniqCities.filter((function(e){return e.city.toLowerCase()===t.toLowerCase()})):e.getUniqCities}}},M={getActiveIndex:function(t,e){var i=t.commit;i("setActiveIndex",{index:e})}},T={setActiveIndex:function(t,e){var i=e.index;t.activeIndex=i}},U={state:I,actions:M,mutations:T,getters:F};n["default"].use(v["a"]);var E=new v["a"].Store({modules:{mapStore:S,cityStore:U,dataStore:L}}),B=i("8c4f");n["default"].use(B["a"]);var N=new B["a"]({mode:"history",routes:[{path:"/",name:"main",component:i("e5ee").default},{path:"/stores-by-city",name:"city",component:i("6a6e").default},{path:"*",redirect:"/"}]}),P=i("89c1"),R=i.n(P);n["default"].component("virtual-list",R.a),n["default"].directive("click-outside",{bind:function(t,e,i){t.clickOutsideEvent=function(n){t.contains(n.target)||i.context[e.expression](n)},document.body.addEventListener("click",t.clickOutsideEvent)},unbind:function(t){document.body.removeEventListener("click",t.clickOutsideEvent)}}),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(m)},store:E,router:N}).$mount("#app")},"5a62":function(t,e,i){},6303:function(t,e,i){},"64a9":function(t,e,i){},"6a6e":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("SearchBlock",{on:{onSearch:function(e){return t.onSearch(e)},onClear:function(e){return t.onClear()}}}),this.dataStore.isLoading?i("div",[i("p",[t._v("\n      Loading...\n    ")])]):i("div",{staticClass:"block"},[i("CityList",{attrs:{list:t.filteredCities?t.filteredCities:t.getUniqCities,isNotFound:t.isNotFound}}),i("TableStores",{attrs:{item:t.filteredCities?t.filteredCities[this.cityStore.activeIndex]:t.getUniqCities[this.cityStore.activeIndex]}})],1)],1)},a=[],s=i("5530"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list-block"},[t.isNotFound?i("div",[i("p",[t._v("\n      Not Found\n    ")])]):i("virtual-list",{ref:"list",staticClass:"list",staticStyle:{"min-height":"85px","overflow-y":"auto","max-height":"500px"},attrs:{"data-key":"city","data-sources":t.list,"data-component":t.item,"estimate-size":85}})],1)},o=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item",class:{item_active:this.cityStore.activeIndex===this.index},on:{click:function(e){return t.clickOnItem()}}},[i("div",[t._v("City name: "+t._s(t.source.city))]),i("div",[t._v("Stores in this city: "+t._s(t.source.storesLength))])])},u=[],l=(i("a9e3"),i("2f62")),d={name:"item",props:{source:{type:Object,default:function(){return{}}},index:{type:Number}},computed:Object(s["a"])({},Object(l["d"])(["cityStore"])),methods:{clickOnItem:function(){this.$store.dispatch("getActiveIndex",this.index)}}},f=d,p=(i("ebd9"),i("2877")),h=Object(p["a"])(f,c,u,!1,null,"fd67b82e",null),m=h.exports,v={props:{list:{type:Array,required:!0},isNotFound:{type:Boolean,required:!0,default:!1}},data:function(){return{item:m}}},g=v,b=(i("016e"),Object(p["a"])(g,r,o,!1,null,"149b6d92",null)),y=b.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[t.item?i("div",[i("div",{staticClass:"table__block"},[i("table",[t._m(0),i("tbody",t._l(t.item.stores,(function(e){return i("tr",{key:e.uuid},[i("td",[t._v(t._s(e.addressName))]),i("td",[t._v(t._s(t.item.city))]),i("td",[t._v(t._s(e.sundayOpen?"Yes":"No"))]),i("td",[t._v(t._s(e.todayOpen))]),i("td",[t._v(t._s(e.todayClose))])])})),0)])])]):i("div",{staticClass:"empty"},[i("p",[t._v("\n      Please click on the item on the left\n    ")])])])},S=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",[t._v("Address name")]),i("th",[t._v("City name")]),i("th",[t._v("Open on Sunday")]),i("th",[t._v("Time open")]),i("th",[t._v("Time close")])])])}],_={props:{item:{type:Object}}},A=_,O=(i("d534"),Object(p["a"])(A,C,S,!1,null,"7ebbeba0",null)),k=O.exports,x=i("fe59"),j={components:{CityList:y,TableStores:k,SearchBlock:x["a"]},data:function(){return{filteredCities:void 0}},mounted:function(){this.$store.dispatch("getData")},methods:{onSearch:function(t){this.filteredCities=this.getCitySearchResult(t)},onClear:function(){}},computed:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(l["d"])(["dataStore","cityStore"])),Object(l["c"])(["getUniqCities","getCitySearchResult"])),{},{isNotFound:function(){return this.filteredCities&&0===this.filteredCities.length}})},D=j,w=(i("84e9"),Object(p["a"])(D,n,a,!1,null,"061937c2",null));e["default"]=w.exports},"84e9":function(t,e,i){"use strict";i("94c8")},"85ff":function(t,e,i){},"94c8":function(t,e,i){},"99aa":function(t,e,i){"use strict";i("5a62")},"9b19":function(t,e,i){t.exports=i.p+"img/logo.e45ea7a2.svg"},a2c4:function(t,e,i){"use strict";i("2447")},b1b4:function(t,e,i){},c3ba:function(t,e){t.exports="data:image/webp;base64,UklGRqICAABXRUJQVlA4WAoAAAAQAAAAIgAAKgAAQUxQSDYBAAABkHPbtrG94vf+bLOzjdhGlcq2badNZduV7aS0bae19Zzgvve5JyImAK5ZN2PZolHZcEoa6p+V/70dGXa07vpNAr4ss6F1w+9i+TAhAMm4PluuvvE+PTs8o/SyWC80kMxc8klcv48ASHLwO1FsQpKhG0S1J8nQnaLbhcRCUS4nO3tKz4IY+USUx4BjRPlUMIIeKB1PABqK6ssRoQTm60wJIoHDOvsNT3QeGD7ofDCIsuG9zjvDdZ2r/G+dzirDAJ0ehuTvGh9iSADYrbGBppYKXjUJ4zl3u0mYWzr7VkAE3u9qAWyzPrl5EGmFCU5+NYE9D7uYC78pr/0dD/aF5r/8PEqBwyk+3pXD6Rar763hNvSUxa8ecJ1wOYA3GO5Tbxq8odDMuC8i3lDoZt6W7z2hnXKmHVwCVlA4IEYBAAAQBwCdASojACsAPtlmq1EoJSOio4sBABsJQBlYRAG8PEqs8ZaTtaH1+yrk7fA+jN1IPgx8Dnvz19ndf2vWaadOIAD+9BlceeOvr2DKjdQOIPD/SOjmjKXmbdLZTJmOIiLDlF0HtQdiMGMJlO1VQf/jYuw8xiADSrXTfyLoURanXl6zmlv/1DfDm28SIJhIEG1nuR7+9SP5jnqEPvv4rFBvZkOQx+DGMiNzBo5CNBjFBOGX2ndv2a8Z3eoojo0CT4P2xxG24PY24vyPuhKxbaAA1IDcZvgarq9VEeqPCkBS9aiQEnXoyJ3c+g6DwSCsqpiVequWqMlw1mEMe2nF/GhTdKCpcUmKbXeUgi+kwrJQKCVmHy88SWObVbRcDSvdxXxA8ca8eO/ESJsbYVNwkTden5/+Fg4eD/1bv2//tJFw7e67AtCAAA=="},d45f:function(t,e,i){},d534:function(t,e,i){"use strict";i("34dc")},ded4:function(t,e,i){},e5ee:function(t,e,i){"use strict";i.r(e);var n,a,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"filters"},[i("div",{staticClass:"filters__title"},[t._v("Filters")]),t._l(t.filters,(function(e){return i("button",{key:e.type,staticClass:"filters__btn",class:{filters__btn_active:t.filterType===e.type},on:{click:function(i){return t.onFilterChange(e.type)}}},[t._v("\n      "+t._s(e.title)+"\n    ")])}))],2),this.dataStore.isLoading?i("div",[i("p",[t._v("\n      Loading...\n    ")])]):i("div",{staticClass:"map"},[i("GoogleMapLoader",{attrs:{mapConfig:t.mapConfig,apiKey:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.google,a=e.map;return t._l(t.filteredCities?t.filteredCities:t.getMarkers,(function(t,e){return i("GoogleMapMarker",{key:t.uuid,attrs:{marker:t,google:n,map:a,index:e}})}))}}],null,!1,309523705)}),i("div",{staticClass:"list-block"},[i("SearchBlock",{on:{onSearch:function(e){return t.onSearch(e)},onClear:function(e){return t.onClear()}}}),i("StoreList",{attrs:{getSearch:t.filteredCities?t.filteredCities:t.getMarkers,isNotFound:t.isNotFound}})],1)],1)])},r=[],o=i("5530"),c=i("2f62"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{ref:"googleMap",staticClass:"google-map"}),Boolean(this.google)&&Boolean(this.map)?[t._t("default",null,{google:t.google,map:t.map})]:t._e()],2)},l=[],d=(i("d81d"),i("4272")),f={props:{mapConfig:Object,apiKey:String},data:function(){return{google:null,map:null}},mounted:function(){var t=this,e=new d["a"]({apiKey:this.apiKey,version:"weekly",libraries:["places"]}),i=this.$refs.googleMap;e.load().then((function(e){t.google=e,t.map=new e.maps.Map(i,t.mapConfig),t.$store.dispatch("getMap",t.map)})).catch((function(t){console.error(t)}))}},p=f,h=(i("3fc8"),i("2877")),m=Object(h["a"])(p,u,l,!1,null,"616baf74",null),v=m.exports,g=(i("a9e3"),i("99af"),i("c3ba")),b=i.n(g),y=i("3e53"),C=i.n(y),S={props:{google:{type:Object,required:!0},map:{type:Object,required:!0},marker:{type:Object,required:!0},index:{type:Number,required:!0}},data:function(){return{isClick:!1,m:null}},computed:Object(o["a"])({},Object(c["c"])(["getListRef"])),mounted:function(){var t=this,e=this.google.maps,i=e.Marker,n=e.InfoWindow,a=0!==this.marker.newStore?C.a:b.a,s=new i({position:this.marker.position,marker:this.marker,map:this.map,icon:a});this.m=s;var r=new n({content:"<div>\n                    <div><strong>".concat(this.marker.addressName,"</strong></div>\n                    <div>").concat(this.marker.street," ").concat(this.marker.street2,"</div>\n                    <div>").concat(this.marker.city,"</div>\n                    <div>Opening hours: ").concat(this.marker.todayOpen,"-").concat(this.marker.todayClose,"</div>\n                </div>")});s.addListener("click",(function(){return t.clickHandler(r)}))},methods:{clickHandler:function(t){this.isClick?t.close():(t.open(this.m.get("map"),this.m),this.getListRef.scrollToIndex(this.index),this.$store.dispatch("getListItemActiveIndex",this.index)),this.map.setZoom(15),this.map.panTo(this.m.getPosition()),this.isClick=!this.isClick}},beforeDestroy:function(){this.m.setMap(null)},render:function(){return null}},_=S,A=Object(h["a"])(_,n,a,!1,null,null,null),O=A.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list__wrapper"},[t.isNotFound?i("div",{staticClass:"notFound"},[i("p",[t._v("\n      Not Found\n    ")])]):i("virtual-list",{ref:"list",staticClass:"list",staticStyle:{"min-height":"112px","overflow-y":"auto","max-height":"360px"},attrs:{"data-key":"uuid","data-sources":t.getSearch,"data-component":t.item,"estimate-size":105}})],1)},x=[],j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item",class:{item_active:this.mapStore.listItemActiveIndex===this.index},on:{click:function(e){return t.clickOnItem()}}},[i("div",{staticClass:"item__img"},[i("img",{attrs:{src:t.imgSource,alt:"marker"}})]),i("div",{staticClass:"item__info"},[i("div",{staticClass:"item__title"},[t._v(t._s(t.source.addressName))]),i("div",{staticClass:"item__description"},[t._v(t._s(t.source.street)+" "+t._s(t.source.street2))]),i("div",{staticClass:"item__description"},[t._v(t._s(t.source.city))]),i("div",{staticClass:"item__description"},[t._v("Opening hours: "+t._s(t.source.todayOpen)+"-"+t._s(t.source.todayClose))])])])},D=[],w={name:"item",props:{source:{type:Object,default:function(){return{}}},index:{type:Number}},methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["getCenter","getListItemActiveIndex","getZoom"])),{},{clickOnItem:function(){this.getCenter(this.source.position),this.getListItemActiveIndex(this.index),this.getZoom(15)}}),computed:Object(o["a"])(Object(o["a"])({},Object(c["d"])(["mapStore"])),{},{imgSource:function(){return 0!==this.source.newStore?C.a:b.a}})},L=w,I=(i("f1fb"),Object(h["a"])(L,j,D,!1,null,"3146e984",null)),F=I.exports,M={props:{getSearch:{type:Array,required:!0},isNotFound:{type:Boolean,required:!0,default:!1}},data:function(){return{item:F}},computed:Object(o["a"])({},Object(c["c"])(["getMarkers"])),mounted:function(){this.$store.dispatch("getListRef",this.$refs.list)}},T=M,U=(i("3bfb"),Object(h["a"])(T,k,x,!1,null,"16995877",null)),E=U.exports,B=i("fe59"),N={clickableIcons:!1,streetViewControl:!1,panControlOptions:!1,gestureHandling:"cooperative",backgroundColor:"#edb716",mapTypeControl:!1,zoomControlOptions:{style:"SMALL"},zoom:7,minZoom:2,maxZoom:20,styles:[{featureType:"landscape",stylers:[{hue:"#edb716"},{saturation:50.2},{lightness:-34.8},{gamma:1}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"road.highway",stylers:[{hue:"#edb716"},{saturation:-19.8},{lightness:-1.8},{gamma:1}]},{featureType:"road.arterial",stylers:[{hue:"#edb716"},{saturation:72.4},{lightness:-32.6},{gamma:1}]},{featureType:"road.local",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"off"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:"rgb(195,230,255)"}]},{featureType:"administrative",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{hue:"blue"},{saturation:-63.2},{lightness:38},{gamma:1}]}]},P=[{title:"Show all",type:"all"},{title:"Open on sunday",type:"sundayOpen"},{title:"New",type:"new"},{title:"Open until 19:00",type:"openUntil19"},{title:"Open until 20:00",type:"openUntil20"},{title:"Open until 21:00",type:"openUntil21"},{title:"Open until 22:00",type:"openUntil22"}],R={components:{GoogleMapLoader:v,GoogleMapMarker:O,StoreList:E,SearchBlock:B["a"]},data:function(){return{filteredCities:void 0,filterType:"all",filters:P}},mounted:function(){this.$store.dispatch("getData")},methods:{changeCenterAndZoomMap:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;this.$store.dispatch("getCenter",this.filteredCities[0].position),this.$store.dispatch("getZoom",t)},onSearch:function(t){this.filteredCities=this.getSearchResult(t),this.filterType="all",this.isNotFound||this.changeCenterAndZoomMap()},onClear:function(){this.changeCenterAndZoomMap(7),this.filterType="all"},onFilterChange:function(t){this.filteredCities=this.getFilters(t),this.filterType=t,this.changeCenterAndZoomMap(7)}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(c["c"])(["getSearchResult","getMarkers","getFilters"])),Object(c["d"])(["dataStore"])),{},{isNotFound:function(){return this.filteredCities&&0===this.filteredCities.length},mapConfig:function(){return Object(o["a"])(Object(o["a"])({},N),{},{center:this.getMarkers[0].position})}})},Z=R,q=(i("99aa"),Object(h["a"])(Z,s,r,!1,null,"21363c9a",null));e["default"]=q.exports},ebd9:function(t,e,i){"use strict";i("0746")},f1fb:function(t,e,i){"use strict";i("6303")},fe59:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.clickOutside,expression:"clickOutside"}],staticClass:"search-block"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter the name of the city"},domProps:{value:t.search},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSearch()},focus:function(e){return t.onFocus()},input:function(e){e.target.composing||(t.search=e.target.value)}}}),i("button",{directives:[{name:"show",rawName:"v-show",value:t.search,expression:"search"}],staticClass:"cross",on:{click:function(e){return t.onClear()}}},[t._v("+")]),i("button",{staticClass:"btn",on:{click:function(e){return t.onSearch()}}},[t._v("Search")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isFocus,expression:"isFocus"}],staticClass:"suggestion__block",class:{suggestion__block_loading:t.getSearchedLoading}},[t.dataStore.searchedData.length?i("div",t._l(t.dataStore.searchedData,(function(e){return i("div",{key:e,staticClass:"suggestion__item",on:{click:function(i){return t.onClickSuggestion(e)}}},[t._v("\n        "+t._s(e)+"\n        "),i("button",{staticClass:"cross cross_small",on:{click:function(i){return i.stopPropagation(),t.onRemoveSearchedItem(e)}}},[t._v("+")])])})),0):i("div",{staticClass:"suggestion__empty"},[i("p",[t._v("Do a search and the city will be added")])])])])},a=[],s=i("5530"),r=(i("ac1f"),i("841c"),i("2f62")),o={data:function(){return{search:"",isFocus:!1}},computed:Object(s["a"])(Object(s["a"])({},Object(r["d"])(["dataStore"])),Object(r["c"])(["getUniqueSearchedCities","getFilteredSearchedData","getSearchedLoading"])),mounted:function(){this.$store.dispatch("getSearchedData")},watch:{search:function(t){""===t&&this.$emit("onSearch",this.search)}},methods:Object(s["a"])(Object(s["a"])({},Object(r["b"])(["updateSearchedData","removeSearchedDataItem"])),{},{onClear:function(){this.$emit("onClear"),this.search=""},onClickSuggestion:function(t){this.search=t,this.onSearch()},onSearch:function(){this.isFocus=!1,this.$emit("onSearch",this.search),this.updateSearchedData(this.getUniqueSearchedCities(this.search))},clickOutside:function(){this.isFocus=!1},onFocus:function(){this.isFocus=!0},onRemoveSearchedItem:function(t){this.removeSearchedDataItem(this.getFilteredSearchedData(t))}})},c=o,u=(i("49b4"),i("2877")),l=Object(u["a"])(c,n,a,!1,null,"76cc798e",null);e["a"]=l.exports}});
//# sourceMappingURL=app.c9a382a1.js.map