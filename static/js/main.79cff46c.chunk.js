(this.webpackJsonpravenous2=this.webpackJsonpravenous2||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(7),c=a.n(r),i=(a(13),a(1)),o=a(2),l=a(5),u=a(3),h=a(4),m=(a(14),a(15),{"Best Match":"best_match","Highest Rated":"rating","Most Reviewed":"review_count"}),d=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={term:"",location:"",sortBy:"best_match"},n.handleTermChange=n.handleTermChange.bind(Object(l.a)(n)),n.handleLocationChange=n.handleLocationChange.bind(Object(l.a)(n)),n.handleSearch=n.handleSearch.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value})}},{key:"handleSearch",value:function(e){this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy),e.preventDefault()}},{key:"getSortByClass",value:function(e){return e===this.state.sortBy?"active":""}},{key:"handleSortByChange",value:function(e){this.setState({sortBy:e})}},{key:"renderSortByOptions",value:function(){var e=this;return Object.keys(m).map((function(t){var a=m[t];return s.a.createElement("li",{key:a,onClick:e.handleSortByChange.bind(e,a),className:e.getSortByClass(a)},t)}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"SearchBar"},s.a.createElement("div",{className:"SearchBar-sort-options"},s.a.createElement("ul",null,this.renderSortByOptions())),s.a.createElement("div",{className:"SearchBar-fields"},s.a.createElement("input",{term:"Search Businesses",onChange:this.handleTermChange}),s.a.createElement("input",{placeholder:"Where?",onChange:this.handleLocationChange})),s.a.createElement("div",{className:"SearchBar-submit"},s.a.createElement("a",{href:"http://wwww.#.com",onClick:this.handleSearch},"Let's Go")))}}]),a}(s.a.Component),p=(a(16),a(17),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.business;return s.a.createElement("div",{class:"Business"},s.a.createElement("div",{className:"image-container"},s.a.createElement("img",{src:e.imageSrc,alt:"business img"})),s.a.createElement("h2",null,e.name),s.a.createElement("div",{className:"Business-information"},s.a.createElement("div",{className:"Business-address"},s.a.createElement("p",null,s.a.createElement("a",{target:"_blank",href:"`https://www.google.com/maps/place/${business.address},${business.city},+${business.state}+${business.zipCode}/`"},e.address)),s.a.createElement("p",null,e.city),s.a.createElement("p",null,e.state,",",e.zipCode)),s.a.createElement("div",{className:"Business-reviews"},s.a.createElement("h3",null,e.category),s.a.createElement("h3",{className:"rating"},e.rating,", stars"),s.a.createElement("p",null,e.reviewCount," reviews"))))}}]),a}(s.a.Component)),v=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"BusinessList"},this.props.businesses.map((function(e){return s.a.createElement(p,{business:e,key:e.id})})))}}]),a}(s.a.Component),b={searchYelp:function(e,t,a){return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=".concat(e,"&location=").concat(t,"&sort_by=").concat(a),{headers:{Authorization:"Bearer ".concat("pSupkM4EbuChkBT6bCX812gsIACmnTbMQBUuwvs-FNdQSuaFkcVpxbX9YLA3pHIdZqS5S6drqYtJd5TUTT5hw6_HUA1NWDCQqFkoQeeQ7rMhzkIMB7f4To1ZXFB1XnYx")}}).then((function(e){return e.json()})).then((function(e){if(e.businesses)return e.businesses.map((function(e){return console.log(e),{id:e.id,imageSrc:e.image_url,name:e.name,address:e.location.address1,city:e.location.city,state:e.location.state,zipCode:e.location.zip_code,category:e.categories[0].title,rating:e.rating,reviewCount:e.review_count}}))}))}},f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={businesses:[]},n.searchYelp=n.searchYelp.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"searchYelp",value:function(e,t,a){var n=this;b.searchYelp(e,t,a).then((function(e){n.setState({businesses:e})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,"ravenous"),s.a.createElement(d,{searchYelp:this.searchYelp}),s.a.createElement(v,{businesses:this.state.businesses}))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.79cff46c.chunk.js.map