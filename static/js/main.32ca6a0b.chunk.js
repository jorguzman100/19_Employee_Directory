(this.webpackJsonp19_employee_directory=this.webpackJsonp19_employee_directory||[]).push([[0],{32:function(e,t,a){e.exports=a(61)},37:function(e,t,a){},38:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),o=a.n(r),c=(a(37),a(38),function(){return l.a.createElement("header",{className:"App-header"},l.a.createElement("div",{className:"sticky-top bg-info text-white text-center py-2"},l.a.createElement("h3",null,l.a.createElement("span",{role:"img","aria-label":"employee emoji"},"\ud83d\udc69\ud83c\udffb\u200d\ud83d\udcbc\ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbc")," Employee Directory")))}),s=a(11),i=a(26),u=a(27),m=a(31),d=a(30),f=function(e){return l.a.createElement("div",{className:"row"},e.children)},p=function(e){return l.a.createElement("div",{className:"col"},e.children)},y=function(e){return l.a.createElement("div",{className:"card mt-4"},l.a.createElement("div",{className:"card-header py-1 px-3"},e.title),l.a.createElement("div",{className:"card-body"},e.children))},g=function(e){return l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{className:"form-control",type:"text",placeholder:"Find name, email, DOB, address, city, or mobile",name:"search",value:e.value,onChange:e.handleInputChange}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:e.handleFormSubmit},"Search")))},h=function(e){return l.a.createElement("tr",{onClick:e.handleSelectRow,dataid:e.dataid},l.a.createElement("td",{dataid:e.dataid},l.a.createElement("img",{alt:"".concat(e.firstName," ").concat(e.lastName),className:"img-fluid picture",src:e.picture,dataid:e.dataid})),l.a.createElement("td",{dataid:e.dataid},"".concat(e.firstName," ").concat(e.lastName)),l.a.createElement("td",{dataid:e.dataid},e.email),l.a.createElement("td",{dataid:e.dataid},e.dob),l.a.createElement("td",{dataid:e.dataid},e.address),l.a.createElement("td",{dataid:e.dataid},e.city),l.a.createElement("td",{dataid:e.dataid},e.mobile))},E=function(e){return console.log("Table()"),console.log("props.results: ",e.results),l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Picture"),l.a.createElement("th",null,"Name "," ",l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fas fa-sort text-info sortIcon","data-value":"Name",onClick:e.handleSortBtnClick}))),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"DOB"),l.a.createElement("th",null,"Address"),l.a.createElement("th",null,"City "," ",l.a.createElement("a",{href:"#"},l.a.createElement("i",{className:"fas fa-sort text-info sortIcon","data-value":"City",onClick:e.handleSortBtnClick}))),l.a.createElement("th",null,"Cell"))),l.a.createElement("tbody",null,e.results.map((function(t,a){return l.a.createElement(h,{key:a,dataid:t.id.value,picture:t.picture.thumbnail,firstName:t.name.first,lastName:t.name.last,email:t.email,dob:t.dob.date.slice(0,10),address:"".concat(t.location.street.number," ").concat(t.location.street.name),city:t.location.city,mobile:t.cell,handleSelectRow:e.handleSelectRow})})))))},b=a(7),v=a.n(b),w=a(12),C=a(13),k=a(14),N=a(9),S=a(63),T=a(5),O=a(8),R=(a(43),["places"]),j={width:"100%",height:"30vh"},x={lat:37.0902,lng:-95.7129},L={styles:[{featureType:"landscape",elementType:"geometry",stylers:[{saturation:"-100"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text",stylers:[{color:"#545454"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{saturation:"-87"},{lightness:"-40"},{color:"#ffffff"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.fill",stylers:[{color:"#f0f0f0"},{saturation:"-22"},{lightness:"-16"}]},{featureType:"road.highway.controlled_access",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road.highway.controlled_access",elementType:"labels.icon",stylers:[{visibility:"on"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{saturation:"-52"},{hue:"#00e4ff"},{lightness:"-16"}]}],disableDefaultUI:!0,zoomControl:!0},I=function(e){var t=Object(N.d)({googleMapsApiKey:"AIzaSyCkbGC77i8l2nu_IXwM-m0jB4dJajkacwM",libraries:R}),a=t.isLoaded,r=t.loadError,o=l.a.useState([]),c=Object(k.a)(o,2),s=c[0],i=c[1],u=Object(n.useState)(null),m=Object(k.a)(u,2),d=m[0],f=m[1],p=l.a.useCallback((function(e){i((function(t){return[].concat(Object(C.a)(t),[{lat:e.latLng.lat(),lng:e.latLng.lng(),time:new Date,picture:"/markerIcon.svg"}])}))})),y=l.a.useCallback((function(e){i((function(t){return[].concat(Object(C.a)(t),[{lat:e.lat,lng:e.lng,time:new Date,picture:e.picture}])}))})),g=l.a.useRef(),h=l.a.useCallback((function(e){g.current=e}),[]),E=l.a.useCallback((function(e){var t=e.lat,a=e.lng;g.current.panTo({lat:t,lng:a}),g.current.setZoom(10)}),[]);return r?"Error loading Maps":a?l.a.createElement("div",null,l.a.createElement(B,{panTo:E}),l.a.createElement(M,{panTo:E}),l.a.createElement(D,{results:e.results,getEmployeeMarkers:y}),l.a.createElement(N.a,{mapContainerStyle:j,zoom:3,center:x,options:L,onClick:p,onLoad:h},s.map((function(e){return l.a.createElement(N.c,{key:e.time.toISOString(),position:{lat:e.lat,lng:e.lng},icon:{url:e.picture,scaledSize:new window.google.maps.Size(20,20),origin:new window.google.maps.Point(0,0),anchor:new window.google.maps.Point(10,10)},onClick:function(){f(e)}})})),d?l.a.createElement(N.b,{position:{lat:d.lat,lng:d.lng},onCloseClick:function(){f(null)}},l.a.createElement("div",null,l.a.createElement("p",null,"Employee selected"),l.a.createElement("p",null,"Spotted ",Object(S.a)(d.time,new Date)))):null)):"Loading Maps..."},B=function(e){var t=e.panTo,a=Object(T.a)({requestOptions:{location:{lat:function(){return 43.6532},lng:function(){return-79.3832}},radius:1e5}}),n=a.ready,r=a.value,o=a.suggestions,c=o.status,s=o.data,i=a.setValue,u=a.clearSuggestions;return l.a.createElement("div",{className:"mapSearch"},l.a.createElement(O.a,{onSelect:function(){var e=Object(w.a)(v.a.mark((function e(a){var n,l,r,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("address: ",a),i(a,!1),u(),e.prev=3,e.next=6,Object(T.b)({address:a});case 6:return n=e.sent,e.next=9,Object(T.c)(n[0]);case 9:l=e.sent,r=l.lat,o=l.lng,t({lat:r,lng:o}),console.log("geoCode results[0]: ",n[0]),console.log("lat, lng: ",r,o),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[3,17]])})));return function(t){return e.apply(this,arguments)}}()},l.a.createElement(O.b,{value:r,onChange:function(e){i(e.target.value)},disabled:!n,placeholder:"Enter an address"}),l.a.createElement(O.d,null,"OK"===c&&s.map((function(e){var t=e.id,a=e.description;return l.a.createElement(O.c,{key:t,value:a})})))))};function D(e){return l.a.createElement("button",{className:"mapEmployeeIcon",onClick:function(){console.log("EmployeeMarker()"),e.results.forEach(function(){var t=Object(w.a)(v.a.mark((function t(a){var n,l,r,o,c,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(a.location.city," ").concat(a.location.country),l=a.picture.thumbnail,console.log("adress: ",n),t.prev=3,t.next=6,Object(T.b)({address:n});case 6:return r=t.sent,t.next=9,Object(T.c)(r[0]);case 9:o=t.sent,c=o.lat,s=o.lng,console.log("geoResults[0]: ",r[0]),console.log("lat, lng: ",c,s),e.getEmployeeMarkers({lat:c,lng:s,picture:l}),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(3),console.log(t.t0);case 20:case"end":return t.stop()}}),t,null,[[3,17]])})));return function(e){return t.apply(this,arguments)}}())}},l.a.createElement("img",{src:"/employeeImage.svg",alt:"employees"}))}function M(e){var t=e.panTo;return l.a.createElement("button",{className:"mapLocate",onClick:function(){navigator.geolocation.getCurrentPosition((function(e){t({lat:e.coords.latitude,lng:e.coords.longitude})}),(function(){return null}))}},l.a.createElement("i",{className:"fas fa-street-view text-info"}))}var _=a(29),A=a.n(_),z="".concat("https://randomuser.me/api/?results=200","&").concat("nat=us"),F=function(){return A.a.get(z)},P=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={results:[],filteredResults:[],selectedResult:{},order:"ascend",search:""},e.searchEmployees=function(t){F(t).then((function(t){e.setState({results:t.data.results,filteredResults:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var a,n=t.target.value.toLowerCase(),l=t.target.name;e.setState((a={},Object(s.a)(a,l,n),Object(s.a)(a,"filteredResults",e.state.results.filter((function(e){if("\n                ".concat(e.name.first," \n                ").concat(e.name.last," \n                ").concat(e.email," \n                ").concat(e.dob.date.slice(0,10)," \n                ").concat(e.location.street.number," \n                ").concat(e.location.street.name," \n                ").concat(e.location.city," \n                ").concat(e.cell,"\n                ").toLowerCase().includes(n))return e}))),a))},e.handleFormSubmit=function(t){t.preventDefault(),e.searchEmployees(e.state.search)},e.handleSortBtnClick=function(t){var a=t.target.attributes.getNamedItem("data-value").value.toLowerCase();console.log("sortType: ",a);var n="name",l="first";"name"===a?(n="name",l="first"):"city"===a&&(n="location",l="city"),"ascend"===e.state.order?e.setState({filteredResults:e.state.filteredResults.sort((function(e,t){return e["".concat(n)]["".concat(l)].toLowerCase()<t["".concat(n)]["".concat(l)].toLowerCase()?-1:e["".concat(n)]["".concat(l)].toLowerCase()>t["".concat(n)]["".concat(l)].toLowerCase()?1:0})),order:"descend"}):e.setState({filteredResults:e.state.filteredResults.sort((function(e,t){return e["".concat(n)]["".concat(l)].toLowerCase()>t["".concat(n)]["".concat(l)].toLowerCase()?-1:e["".concat(n)]["".concat(l)].toLowerCase()<t["".concat(n)]["".concat(l)].toLowerCase()?1:0})),order:"ascend"})},e.handleSelectRow=function(t){console.log("event.target: ",t.target),console.log("id: ",t.target.attributes.getNamedItem("dataid").value);var a=t.target.attributes.getNamedItem("dataid").value;e.setState({selectedResult:e.state.filteredResults.filter((function(e){if(e.id.value===a)return e}))}),console.log("selectedResult: ",e.state.selectedResult)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.searchEmployees()}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(f,null,l.a.createElement(p,null,l.a.createElement(y,{title:"Search"},l.a.createElement(g,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}))),l.a.createElement(p,null,l.a.createElement(y,{title:"Locations \ud83c\udf0d"},l.a.createElement(I,{results:this.state.filteredResults,selectedResult:this.state.selectedResult})))),l.a.createElement(f,null,l.a.createElement(p,null,l.a.createElement(y,{title:"Details"},l.a.createElement(E,{results:this.state.filteredResults,handleSortBtnClick:this.handleSortBtnClick,handleSelectRow:this.handleSelectRow})))))}}]),a}(n.Component),J=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"fixed-bottom bg-info text-white p-1"},l.a.createElement("p",{className:"m-0"},"Copyright @ 2020 Company")))};var K=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(c,null),l.a.createElement(P,null),l.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.32ca6a0b.chunk.js.map