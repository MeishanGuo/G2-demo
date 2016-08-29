webpackJsonp([120],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var G2 = __webpack_require__(2);
	var data = [{ "time": "9/1", "price": 10, "name": "商品A" }, { "time": "9/1", "price": 30, "name": "商品B" }, { "time": "9/2", "price": 12, "name": "商品A" }, { "time": "9/2", "price": 32, "name": "商品B" }, { "time": "9/3", "price": 11, "name": "商品A" }, { "time": "9/3", "price": 35, "name": "商品B" }, { "time": "9/4", "price": 15, "name": "商品A" }, { "time": "9/4", "price": 40, "name": "商品B" }, { "time": "9/5", "price": 20, "name": "商品A" }, { "time": "9/5", "price": 42, "name": "商品B" }, { "time": "9/6", "price": 22, "name": "商品A" }, { "time": "9/6", "price": 35, "name": "商品B" }, { "time": "9/7", "price": 21, "name": "商品A" }, { "time": "9/7", "price": 36, "name": "商品B" }, { "time": "9/8", "price": 25, "name": "商品A" }, { "time": "9/8", "price": 31, "name": "商品B" }, { "time": "9/9", "price": 31, "name": "商品A" }, { "time": "9/9", "price": 35, "name": "商品B" }, { "time": "9/10", "price": 32, "name": "商品A" }, { "time": "9/10", "price": 36, "name": "商品B" }, { "time": "9/11", "price": 28, "name": "商品A" }, { "time": "9/11", "price": 40, "name": "商品B" }, { "time": "9/12", "price": 29, "name": "商品A" }, { "time": "9/12", "price": 42, "name": "商品B" }, { "time": "9/13", "price": 40, "name": "商品A" }, { "time": "9/13", "price": 40, "name": "商品B" }, { "time": "9/14", "price": 41, "name": "商品A" }, { "time": "9/14", "price": 38, "name": "商品B" }, { "time": "9/15", "price": 45, "name": "商品A" }, { "time": "9/15", "price": 40, "name": "商品B" }, { "time": "9/16", "price": 50, "name": "商品A" }, { "time": "9/16", "price": 40, "name": "商品B" }, { "time": "9/17", "price": 65, "name": "商品A" }, { "time": "9/17", "price": 38, "name": "商品B" }, { "time": "9/18", "price": 45, "name": "商品A" }, { "time": "9/18", "price": 36, "name": "商品B" }, { "time": "9/19", "price": 50, "name": "商品A" }, { "time": "9/19", "price": 30, "name": "商品B" }, { "time": "9/20", "price": 51, "name": "商品A" }, { "time": "9/20", "price": 29, "name": "商品B" }, { "time": "9/21", "price": 65, "name": "商品A" }, { "time": "9/21", "price": 28, "name": "商品B" }, { "time": "9/22", "price": 60, "name": "商品A" }, { "time": "9/22", "price": 25, "name": "商品B" }, { "time": "9/23", "price": 62, "name": "商品A" }, { "time": "9/23", "price": 28, "name": "商品B" }, { "time": "9/24", "price": 65, "name": "商品A" }, { "time": "9/24", "price": 29, "name": "商品B" }, { "time": "9/25", "price": 45, "name": "商品A" }, { "time": "9/25", "price": 30, "name": "商品B" }, { "time": "9/26", "price": 55, "name": "商品A" }, { "time": "9/26", "price": 40, "name": "商品B" }, { "time": "9/27", "price": 59, "name": "商品A" }, { "time": "9/27", "price": 32, "name": "商品B" }, { "time": "9/28", "price": 52, "name": "商品A" }, { "time": "9/28", "price": 33, "name": "商品B" }, { "time": "9/29", "price": 53, "name": "商品A" }, { "time": "9/29", "price": 34, "name": "商品B" }, { "time": "9/30", "price": 40, "name": "商品A" }, { "time": "9/30", "price": 30, "name": "商品B" }, { "time": "9/31", "price": 45, "name": "商品A" }, { "time": "9/31", "price": 35, "name": "商品B" }];

	var chart = new G2.Chart({
	  id: 'c1',
	  width: 1000,
	  height: 500
	});

	chart.source(data, {
	  time: {
	    type: 'time',
	    mask: 'm/dd'
	  }
	});
	chart.line().position('time*price').color('name').shape('spline').size(2);
	chart.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZXMvbGluZS9saW5lLXNwbGluZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leGFtcGxlcy9saW5lL2xpbmUtc3BsaW5lLm1kIiwid2VicGFjazovLy8/ZDQxZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIEcyID0gcmVxdWlyZSgnZzInKTtcbnZhciBkYXRhID0gW3tcInRpbWVcIjpcIjkvMVwiLFwicHJpY2VcIjoxMCxcIm5hbWVcIjpcIuWVhuWTgUFcIn0se1widGltZVwiOlwiOS8xXCIsXCJwcmljZVwiOjMwLFwibmFtZVwiOlwi5ZWG5ZOBQlwifSx7XCJ0aW1lXCI6XCI5LzJcIixcInByaWNlXCI6MTIsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMlwiLFwicHJpY2VcIjozMixcIm5hbWVcIjpcIuWVhuWTgUJcIn0se1widGltZVwiOlwiOS8zXCIsXCJwcmljZVwiOjExLFwibmFtZVwiOlwi5ZWG5ZOBQVwifSx7XCJ0aW1lXCI6XCI5LzNcIixcInByaWNlXCI6MzUsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvNFwiLFwicHJpY2VcIjoxNSxcIm5hbWVcIjpcIuWVhuWTgUFcIn0se1widGltZVwiOlwiOS80XCIsXCJwcmljZVwiOjQwLFwibmFtZVwiOlwi5ZWG5ZOBQlwifSx7XCJ0aW1lXCI6XCI5LzVcIixcInByaWNlXCI6MjAsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvNVwiLFwicHJpY2VcIjo0MixcIm5hbWVcIjpcIuWVhuWTgUJcIn0se1widGltZVwiOlwiOS82XCIsXCJwcmljZVwiOjIyLFwibmFtZVwiOlwi5ZWG5ZOBQVwifSx7XCJ0aW1lXCI6XCI5LzZcIixcInByaWNlXCI6MzUsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvN1wiLFwicHJpY2VcIjoyMSxcIm5hbWVcIjpcIuWVhuWTgUFcIn0se1widGltZVwiOlwiOS83XCIsXCJwcmljZVwiOjM2LFwibmFtZVwiOlwi5ZWG5ZOBQlwifSx7XCJ0aW1lXCI6XCI5LzhcIixcInByaWNlXCI6MjUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvOFwiLFwicHJpY2VcIjozMSxcIm5hbWVcIjpcIuWVhuWTgUJcIn0se1widGltZVwiOlwiOS85XCIsXCJwcmljZVwiOjMxLFwibmFtZVwiOlwi5ZWG5ZOBQVwifSx7XCJ0aW1lXCI6XCI5LzlcIixcInByaWNlXCI6MzUsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTBcIixcInByaWNlXCI6MzIsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTBcIixcInByaWNlXCI6MzYsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTFcIixcInByaWNlXCI6MjgsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTFcIixcInByaWNlXCI6NDAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTJcIixcInByaWNlXCI6MjksXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTJcIixcInByaWNlXCI6NDIsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTNcIixcInByaWNlXCI6NDAsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTNcIixcInByaWNlXCI6NDAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTRcIixcInByaWNlXCI6NDEsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTRcIixcInByaWNlXCI6MzgsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTVcIixcInByaWNlXCI6NDUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTVcIixcInByaWNlXCI6NDAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTZcIixcInByaWNlXCI6NTAsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTZcIixcInByaWNlXCI6NDAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTdcIixcInByaWNlXCI6NjUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTdcIixcInByaWNlXCI6MzgsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMThcIixcInByaWNlXCI6NDUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMThcIixcInByaWNlXCI6MzYsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMTlcIixcInByaWNlXCI6NTAsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMTlcIixcInByaWNlXCI6MzAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjBcIixcInByaWNlXCI6NTEsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjBcIixcInByaWNlXCI6MjksXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjFcIixcInByaWNlXCI6NjUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjFcIixcInByaWNlXCI6MjgsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjJcIixcInByaWNlXCI6NjAsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjJcIixcInByaWNlXCI6MjUsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjNcIixcInByaWNlXCI6NjIsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjNcIixcInByaWNlXCI6MjgsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjRcIixcInByaWNlXCI6NjUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjRcIixcInByaWNlXCI6MjksXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjVcIixcInByaWNlXCI6NDUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjVcIixcInByaWNlXCI6MzAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjZcIixcInByaWNlXCI6NTUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjZcIixcInByaWNlXCI6NDAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjdcIixcInByaWNlXCI6NTksXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjdcIixcInByaWNlXCI6MzIsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjhcIixcInByaWNlXCI6NTIsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjhcIixcInByaWNlXCI6MzMsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMjlcIixcInByaWNlXCI6NTMsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMjlcIixcInByaWNlXCI6MzQsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMzBcIixcInByaWNlXCI6NDAsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMzBcIixcInByaWNlXCI6MzAsXCJuYW1lXCI6XCLllYblk4FCXCJ9LHtcInRpbWVcIjpcIjkvMzFcIixcInByaWNlXCI6NDUsXCJuYW1lXCI6XCLllYblk4FBXCJ9LHtcInRpbWVcIjpcIjkvMzFcIixcInByaWNlXCI6MzUsXCJuYW1lXCI6XCLllYblk4FCXCJ9XTtcblxudmFyIGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgaWQ6ICdjMScsXG4gIHdpZHRoOiAxMDAwLFxuICBoZWlnaHQ6IDUwMFxufSk7XG5cbmNoYXJ0LnNvdXJjZShkYXRhLCB7XG4gIHRpbWU6IHtcbiAgICB0eXBlOiAndGltZScsXG4gICAgbWFzazogJ20vZGQnXG4gIH1cbn0pO1xuY2hhcnQubGluZSgpLnBvc2l0aW9uKCd0aW1lKnByaWNlJykuY29sb3IoJ25hbWUnKS5zaGFwZSgnc3BsaW5lJykuc2l6ZSgyKTtcbmNoYXJ0LnJlbmRlcigpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV4YW1wbGVzL2xpbmUvbGluZS1zcGxpbmUubWRcbiAqKi8iLCJ1bmRlZmluZWRcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==