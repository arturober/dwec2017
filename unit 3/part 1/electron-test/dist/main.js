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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu__ = __webpack_require__(4);




let win = null;
let winDialog = null;
__WEBPACK_IMPORTED_MODULE_0_electron__["app"].setName('Electron example');
__WEBPACK_IMPORTED_MODULE_0_electron__["app"].on('ready', () => {
    const tray = new __WEBPACK_IMPORTED_MODULE_0_electron__["Tray"](__WEBPACK_IMPORTED_MODULE_2_path__["join"]('img', 'icon.png'));
    const trayMenu = __WEBPACK_IMPORTED_MODULE_0_electron__["Menu"].buildFromTemplate([
        {
            label: 'Item 1'
        }, {
            role: 'quit'
        }
    ]);
    tray.setContextMenu(trayMenu);
    tray.setToolTip('Electron example');
    win = new __WEBPACK_IMPORTED_MODULE_0_electron__["BrowserWindow"]();
    win.setContentSize(800, 600);
    win.loadURL(__WEBPACK_IMPORTED_MODULE_1_url__["format"]({
        pathname: __WEBPACK_IMPORTED_MODULE_2_path__["join"](__WEBPACK_IMPORTED_MODULE_0_electron__["app"].getAppPath(), 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    // win.webContents.openDevTools();
    const menu = __WEBPACK_IMPORTED_MODULE_0_electron__["Menu"].buildFromTemplate(__WEBPACK_IMPORTED_MODULE_3__menu__["a" /* menuTemplate */]);
    win.setMenu(menu);
    win.on('closed', () => {
        // When the app is closed
        console.log('Bye bye!');
        win = null;
    });
});
__WEBPACK_IMPORTED_MODULE_0_electron__["ipcMain"].on('openDialog', (event, name) => {
    if (winDialog)
        return;
    winDialog = new __WEBPACK_IMPORTED_MODULE_0_electron__["BrowserWindow"]();
    winDialog.setBounds({ x: 0, y: 0, width: 320, height: 240 });
    winDialog.loadURL(__WEBPACK_IMPORTED_MODULE_1_url__["format"]({
        pathname: __WEBPACK_IMPORTED_MODULE_2_path__["join"](__WEBPACK_IMPORTED_MODULE_0_electron__["app"].getAppPath(), 'dialog.html'),
        protocol: 'file:',
        slashes: true
    }));
    winDialog.setMenu(null);
    winDialog.on('closed', () => (winDialog = null));
    winDialog.webContents.on('did-finish-load', () => {
        winDialog.webContents.send('name', name);
    });
});
__WEBPACK_IMPORTED_MODULE_0_electron__["ipcMain"].on('closeDialog', event => {
    if (winDialog)
        winDialog.close();
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const menuTemplate = [
    {
        label: 'My app',
        submenu: [
            {
                label: 'Say hello',
                click: (menuItem, browserWindow, event) => {
                    browserWindow.webContents.send('sayHello');
                },
                accelerator: 'CommandOrControl+H'
            },
            {
                label: 'Check me',
                type: 'checkbox',
                checked: true
            },
            {
                role: 'quit'
            }
        ]
    },
    {
        role: 'editMenu'
    }
];
/* harmony export (immutable) */ __webpack_exports__["a"] = menuTemplate;



/***/ })
/******/ ]);