(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Float)
});

// NAMESPACE OBJECT: ./lib/lib.js
var lib_namespaceObject = {};
__webpack_require__.r(lib_namespaceObject);

;// CONCATENATED MODULE: ./lib/lib.js
function getRandomInt(min, max) {
    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    return result;
}

function getRandomFloat(min, max) {
    let result = Math.random() * (max - min) + min;
    if (min === undefined) {
        result = Math.random() * getRandomInt(1, 1000);
    }

    return result;
}

function isFloat(num) {
    if (num % 1 === 0) {
        return false;
    } else {
        return true;
    }
}

function likeFloat(inputValue) {
    if (Number.isNaN(inputValue * 1)) {
        return false;
    }
    let parsed = Number.parseFloat(inputValue);
    if (Number.isInteger(parsed)) {
        return false;
    }
    return true;
}

/* harmony default export */ const lib = ({
    getRandomFloat,
    isFloat,
    likeFloat
});
;// CONCATENATED MODULE: ./src/index.js


function Float(numberValue) {
    numberValue = numberValue ?? Float.random();
    this.value = numberValue;

    return numberValue;
}

Float.random = lib_namespaceObject.getRandomFloat;

Float.is = function (num) {
    if (num instanceof Float) {
        return true;
    }
    if (typeof num === 'number' && (0,lib_namespaceObject.isFloat)(num)) {
        return true;
    }

    return false;
};

Float.like = function (inputValue) {
    if (Float.is(inputValue)) {
        return true;
    }
    if ((0,lib_namespaceObject.likeFloat)(inputValue)) {
        return true;
    }

    return false;
}

Float.prototype.toFixed = function (countCharsAfterPoint) {
    this.value = this.value.toFixed(countCharsAfterPoint);
    return this;
}

Float.prototype.toString = function () {
    return this.value;
}

Float.prototype.valueOf = function () {
    return this.value;
}

Float.prototype.equals = function (inputValue) {
    if (this.value == inputValue) {
        return true;
    }

    return false;
};
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});