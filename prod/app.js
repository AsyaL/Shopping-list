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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_list__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addItem_addItem__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_json__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__data_data_json__);





console.log(__WEBPACK_IMPORTED_MODULE_2__data_data_json___default.a);
class App {
	constructor({ el }) {
		const menu = new __WEBPACK_IMPORTED_MODULE_0__list_list__["a" /* default */]({
			el: document.querySelector('.js-menu'),
			data: __WEBPACK_IMPORTED_MODULE_2__data_data_json___default.a
		});

		const form = new __WEBPACK_IMPORTED_MODULE_1__addItem_addItem__["a" /* default */]({
			el: el.querySelector('.form_add-item')
		});
	}
}

// export
const app = new App({
	el: document.querySelector('.js-app')
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class List {

    constructor(options) {
        this.el = options.el;
        this.data = options.data;
        this._initEvents();
        this.render();
    }

    _initEvents() {
        this.el.addEventListener('click', this._onCLick.bind(this));
    }

    _onCLick(event) {
        event.preventDefault();
        let target = event.target;

        if (target.classList.contains('menu__title')) {
            this.toggle();
        }

        if (target.classList.contains('buttom_delete')) {
            this.deleteClick(target.dataset.id);
        }

        if (target.classList.contains('buttom_ok')) {
            this.okClick(target.dataset.id);
        }
    }

    deleteClick(id) {
        this.data.items.splice(id, 1);
        this.render();
    }

    okClick(id) {
        var elements = document.querySelectorAll('ul > li > div');
        elements[id].classList.toggle('menu__item-ok');
    }

    render() {
        this.el.innerHTML = '';

        let title = document.createElement('a');
        title.classList.add('menu__title');
        title.classList.add('menu__title-text');
        title.innerHTML = this.data.title;

        let list = document.createElement('ul');
        list.classList.add('menu__list');

        this.data.items.map((itemData, id) => {
            let item = document.createElement('li');
            item.classList.add('menu_list-li');
            list.appendChild(item);

            let imgItem = document.createElement('img');
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

            let itemName = document.createElement('div');
            itemName.classList.add('menu__item');
            itemName.innerHTML = itemData.item;
            item.appendChild(itemName);

            let buttomOk = document.createElement('input');
            buttomOk.classList.add('buttom_ok');
            buttomOk.setAttribute("type", "image");
            buttomOk.setAttribute("src", "image/ok.png");
            buttomOk.setAttribute("data-id", id);
            item.appendChild(buttomOk);

            let buttomDelete = document.createElement('input');
            buttomDelete.classList.add('buttom_delete');
            buttomDelete.setAttribute("type", "image");
            buttomDelete.setAttribute("data-id", id);
            buttomDelete.setAttribute("src", "image/delete.png");
            item.appendChild(buttomDelete);
        });

        this.el.appendChild(title);
        this.el.appendChild(list);
    }

    toggle() {
        this.el.classList.toggle('menu_close');
    }
}

// Export
/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class AddItem {

	constructor({ el, data }) {
		this.el = el;
		this.data = data;
		this.render();
	}
	render() {
		this.el.innerHTML = `
			<div>
			   <input name="name" placeholder="Product Name" class="add_item-input" required />
			   <select name="category" class="add_item-input">
			    	<option>category</option>
	   				<option value="food">food</option>
	    			<option value="home goodsк">home goods</option>
	    			<option value="other">other</option>
   				</select>
			   <input name="submit" class="add_item-button" type="submit" value="Add" />
			</div>`;
	}
}

// Export
/* harmony default export */ __webpack_exports__["a"] = (AddItem);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {"title":"Shopping list","items":[{"category":"food","item":"milk"},{"category":"food","item":"orange"},{"category":"forHome","item":"hampoo"},{"category":"food","item":"cherry"},{"category":"other","item":"glass"}]}

/***/ })
/******/ ]);