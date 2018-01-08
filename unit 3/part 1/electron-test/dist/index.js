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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);



let input = document.getElementById('name');
document.getElementById('open').addEventListener('click', e => {
    let name = input.value;
    __WEBPACK_IMPORTED_MODULE_0_electron__["ipcRenderer"].send('openDialog', name);
});
document.getElementById('close').addEventListener('click', e => {
    __WEBPACK_IMPORTED_MODULE_0_electron__["ipcRenderer"].send('search');
});
__WEBPACK_IMPORTED_MODULE_0_electron__["ipcRenderer"].on('sayHello', event => {
    document.getElementById('hello').innerText = 'Hello World!';
});
document.getElementById('copy').addEventListener('click', e => {
    __WEBPACK_IMPORTED_MODULE_0_electron__["clipboard"].writeText(input.value);
});
document.getElementById('paste').addEventListener('click', e => {
    input.value = __WEBPACK_IMPORTED_MODULE_0_electron__["clipboard"].readText();
});
document.getElementById('screenshot').addEventListener('click', e => {
    capture(['screen'], 'screen');
});
document.getElementById('screenshot2').addEventListener('click', e => {
    capture(['window'], 'Visual Studio Code');
});
function capture(types, name) {
    const options = {
        types: types,
        //thumbnailSize: screen.getPrimaryDisplay().workAreaSize // Screen size
        thumbnailSize: { width: 800, height: 600 } // Max w:800px h:600px (keeps aspect ratio)
    };
    __WEBPACK_IMPORTED_MODULE_0_electron__["desktopCapturer"].getSources(options, (error, sources) => {
        if (error)
            return;
        const source = sources.filter(s => s.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))[0];
        const png = source.thumbnail.toPNG();
        let filePath = __WEBPACK_IMPORTED_MODULE_2_path__["join"](__WEBPACK_IMPORTED_MODULE_0_electron__["remote"].app.getAppPath(), 'img', new Date() + '.png');
        __WEBPACK_IMPORTED_MODULE_1_fs__["writeFile"](filePath, png, error => {
            if (error)
                return;
            let img = document.getElementById('img');
            img.src = filePath;
            // Open the folder where the image is
            __WEBPACK_IMPORTED_MODULE_0_electron__["shell"].showItemInFolder(filePath);
            // Open the image with the default application
            __WEBPACK_IMPORTED_MODULE_0_electron__["shell"].openItem(filePath);
        });
    });
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ]);