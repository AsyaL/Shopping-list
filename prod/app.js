/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _list = __webpack_require__(1);

var _list2 = _interopRequireDefault(_list);

var _addItem = __webpack_require__(2);

var _addItem2 = _interopRequireDefault(_addItem);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App(_ref) {
        var el = _ref.el;

        _classCallCheck(this, App);

        this.data = _data2.default;
        this.el = el;
        this.newItem = { "category": " ",
            "item": " "
        };
        this._initEvents();
        this.menu = new _list2.default({
            el: document.querySelector('.js-menu'),
            data: this.data
        });

        this.form = new _addItem2.default({
            el: el.querySelector('.form_add-item')
        });
    }

    _createClass(App, [{
        key: '_initEvents',
        value: function _initEvents() {
            this.el.addEventListener('click', this._onCLick.bind(this));
        }
    }, {
        key: '_onCLick',
        value: function _onCLick(event) {
            event.preventDefault();
            var target = event.target;

            if (target.classList.contains('menu__title')) {
                this.toggle();
            }

            if (target.classList.contains('buttom_delete')) {
                this.deleteClick(target.dataset.id);
            }

            if (target.classList.contains('buttom_ok')) {
                this.okClick(target.dataset.id);
            }

            if (target.classList.contains('add_item-button')) {
                if (document.getElementById("itemCategory").value == '' || document.getElementById("itemName").value == '') {
                    return false;
                }

                this.newItem.category = document.getElementById("itemCategory").value;
                this.newItem.item = document.getElementById("itemName").value;
                this.addNewItem();
            }
        }
    }, {
        key: 'deleteClick',
        value: function deleteClick(id) {
            this.data.items.splice(id, 1);
            this.menu.render();
        }
    }, {
        key: 'okClick',
        value: function okClick(id) {
            var elements = document.querySelectorAll('ul > li > div');
            elements[id].classList.toggle('menu__item-ok');
        }
    }, {
        key: 'addNewItem',
        value: function addNewItem() {
            this.data.items.push(this.newItem);
            this.menu.render();
            this.newItem = { "category": " ",
                "item": " "
            };
            document.getElementById("itemCategory").value = "";
            document.getElementById("itemName").value = "";
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            this.el.classList.toggle('menu_close');
        }
    }]);

    return App;
}();

// export


var app = new App({
    el: document.querySelector('.js-app')
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var List = function () {
    function List(options) {
        _classCallCheck(this, List);

        this.el = options.el;
        this.data = options.data;
        this.render();
    }

    _createClass(List, [{
        key: 'render',
        value: function render() {
            this.el.innerHTML = '';

            var title = document.createElement('a');
            title.classList.add('menu__title');
            title.classList.add('menu__title-text');
            title.innerHTML = this.data.title;

            var list = document.createElement('ul');
            list.classList.add('menu__list');

            var arrItem = this.data.items;
            arrItem.sort(function (a, b) {
                if (a.category > b.category) {
                    return 1;
                }
                if (a.category < b.category) {
                    return -1;
                }
                return 0;
            });

            arrItem.map(function (itemData, id) {
                var item = document.createElement('li');
                item.classList.add('menu_list-li');
                list.appendChild(item);

                var imgItem = document.createElement('img');
                imgItem.classList.add('img_item');
                if (itemData.category == 'food') {
                    imgItem.setAttribute("src", "image/meal.png");
                } else if (itemData.category == 'forHome') {
                    imgItem.setAttribute("src", "image/home1.png");
                } else if (itemData.category == 'other') {
                    imgItem.setAttribute("src", "image/other.png");
                };
                imgItem.setAttribute("data-category", itemData.category);
                item.appendChild(imgItem);

                var itemName = document.createElement('div');
                itemName.classList.add('menu__item');
                itemName.innerHTML = itemData.item;
                item.appendChild(itemName);

                var buttomOk = document.createElement('input');
                buttomOk.classList.add('buttom_ok');
                buttomOk.setAttribute("type", "image");
                buttomOk.setAttribute("src", "image/ok.png");
                buttomOk.setAttribute("data-id", id);
                item.appendChild(buttomOk);

                var buttomDelete = document.createElement('input');
                buttomDelete.classList.add('buttom_delete');
                buttomDelete.setAttribute("type", "image");
                buttomDelete.setAttribute("data-id", id);
                buttomDelete.setAttribute("src", "image/delete.png");
                item.appendChild(buttomDelete);
            });

            this.el.appendChild(title);
            this.el.appendChild(list);
        }
    }]);

    return List;
}();

// Export


exports.default = List;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddItem = function () {
	function AddItem(_ref) {
		var el = _ref.el,
		    data = _ref.data;

		_classCallCheck(this, AddItem);

		this.el = el;
		this.render();
	}

	_createClass(AddItem, [{
		key: "render",
		value: function render() {
			this.el.innerHTML = "\n\t\t\t<form>\n\t\t\t   <input name=\"name\" placeholder=\"Product Name\" class=\"add_item-input\" id=\"itemName\" required  autocomplete=\"off\"/>\n\t\t\t   <select name=\"category\" class=\"add_item-input\" id=\"itemCategory\" required>\n\t   \t\t\t\t<option value=\"food\">food</option>\n\t    \t\t\t<option value=\"forHome\">home goods</option>\n\t    \t\t\t<option value=\"other\">other</option>\n   \t\t\t\t</select>\n\t\t\t   <input name=\"submit\" class=\"add_item-button\" type=\"submit\" value=\"Add\" />\n\t\t\t<form>";
		}
	}]);

	return AddItem;
}();

// Export


exports.default = AddItem;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {"title":"Shopping list","items":[{"category":"food","item":"milk"},{"category":"food","item":"orange"},{"category":"forHome","item":"hampoo"},{"category":"food","item":"cherry"},{"category":"other","item":"glass"}]}

/***/ })
/******/ ]);