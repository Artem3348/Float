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

export default {
    getRandomFloat,
    isFloat,
    likeFloat
}