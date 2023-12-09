# Float

GitHub repository: [github.com/Artem3348/Float](github.com/Artem3348/Float)

NPM package: [npmjs.org/package/myfloat](https://www.npmjs.com/package/myfloat)

## Install

NPM: `npm install myfloat`

## Usage

### Browser

`<script src="https://unpkg.com/myfloat"></script>`

### Modules

#### ESM

`import Float from 'myfloat';`

#### CJS

`const Float = require('myfloat);`

## Documentation

* Float.random(min, max);

  * Returns a floating point number from the range min, max.

  * Parameters:
    - min (number)
    - max (number)

  * Returns:
    - number

```js
const float = Float.random(20, 21); // random fraction number between 20 & 21
```

* Float.is(number);

  * Checks if the passed number is a Float

  * Parameters:
    - number (number)

  * Returns:
    - boolean

```js
Float.is(123); // false
Float.is("12.3"); // false
Float.is("js"); // false
Float.is("1.5.5"); // false

Float.is(new Float()); // true
Float.is(new Float(-1.7)); // true
Float.is(Float(1.7)); // true
Float.is(Float.random(20, 21)); // true
```

* Float.like(value);

  * Checks if the passed value is like Float
  
  * Parameters:
    - value (any)

  * Returns:
    - boolean

```js
Float.like(123); // false
Float.like("js"); // false

Float.like("12.3"); // true
Float.like(12.3); // true
```

* Float.prototype.toFixed([digits]);

  * Similar to the Number.prototype.toFixed() method
 
  * Parameters:
    - digits (number)

  * Returns:
    - object

```js
let float = new Float(1.234);
float.toFixed(); // Float { value: 1 }

let float1 = new Flaot(1.7545);
float.toFixed(2) // Float { value: 1.75 }
```

* Float.prototype.equals(value);

  * Checks if the passed value is equal to Float.value

  * Parameters:
    - value (number/string) 

  * Returns:
    - boolean

```js
let float = new Float(1.5);
float.equal(1.5); // true
```