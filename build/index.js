/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 546:
/***/ ((module) => {

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

module.exports = {
    getRandomFloat,
    isFloat,
    likeFloat
}

/***/ }),

/***/ 138:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { getRandomFloat, isFloat, likeFloat } = __webpack_require__(546);

function Float(numberValue) {
    numberValue = numberValue ?? Float.random();
    this.value = numberValue;

    return numberValue;
}

Float.random = getRandomFloat;

Float.is = function (num) {
    if (num instanceof Float) {
        return true;
    }
    if (typeof num === 'number' && isFloat(num)) {
        return true;
    }

    return false;
};

Float.like = function (inputValue) {
    if (Float.is(inputValue)) {
        return true;
    }
    if (likeFloat(inputValue)) {
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

module.exports = {
    Float
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(138);
/******/ 	
/******/ })()
;