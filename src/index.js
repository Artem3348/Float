const { getRandomFloat, isFloat, likeFloat } = require('../lib.js');

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