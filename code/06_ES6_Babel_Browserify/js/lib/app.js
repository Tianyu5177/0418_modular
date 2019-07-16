'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//引入【分别暴露】的模块
(0, _jquery2.default)('body').css('background', 'skyblue');

//引入【统一暴露】的模块

(0, _module.demo)();
(0, _module.test)();
(0, _module2.foo1)();
(0, _module2.foo2)();
var p1 = new _module4.default('kobe', 19);
p1.speak();