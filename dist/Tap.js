"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),Tap=function(){function t(e){if(_classCallCheck(this,t),!this.checkBrowserSupport())return void console.error("浏览器不支持");this.defaultData={coods:{},sensitivity:10},this.data=Object.assign({},e,this.defaultData),this.init()}return _createClass(t,[{key:"init",value:function(){var t=this;this.data.evt=this.createEvt(),document.addEventListener("touchstart",function(e){var a=e.touches[0];t.data.coods.start={x:a.pageX,y:a.pageY}}),document.addEventListener("touchend",function(e){var a=e.changedTouches[0];t.data.coods.distance={h:a.pageX-t.data.coods.start.x,v:a.pageY-t.data.coods.start.y},t.data.coods.distance.h<=t.data.sensitivity&&t.data.coods.distance.v<=t.data.sensitivity&&e.target.dispatchEvent(t.data.evt)})}},{key:"createEvt",value:function(){var t=document.createEvent("MouseEvents");return t.initMouseEvent("tap",!1,!0),t}},{key:"checkBrowserSupport",value:function(){return"addEventListener"in window&&"ontouchend"in document}}]),t}();new Tap({sensitivity:11});