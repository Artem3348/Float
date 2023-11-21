# Float

GitHub repository: github.com/Artem3348/Float

NPM package: npmjs.org/package/...

## Install

NPM: npm install ...

## Usage

```js
const float = new Float();
float // Float { value: random fraction number}
float.value // random fraction number
typeof float // "object"

/* - - - - - - - - - - - - - 1 - - - - - - - - - - - - - */

const float1 = Float();
float1 // random fraction number
typeof float1 // "number"

/* - - - - - - - - - - - - - 2 - - - - - - - - - - - - - */

const float2 = new Float(-1.7);
float2 // Float { value: -1.7 }
float2.value // -1.7
typeof float2 // object

/* - - - - - - - - - - - - - 3 - - - - - - - - - - - - - */

const float3 = Float(1.7);
float3 // 1.7
typeof float3 // number

/* - - - - - - - - - - - - - 4 - - - - - - - - - - - - - */

const float4 = Float.random(20, 21);
float4 // random fraction number between 20 & 21

/* - - - - - - - - - - - - - 5 - - - - - - - - - - - - - */

Float.is(123); // false
Float.is("12.3"); // false
Float.is("js"); // false
Float.is("1.5.5"); // false

Float.is(float); // true
Float.is(float1); // true
Float.is(float2); // true
Float.is(float3); // true
Float.is(float4); // true

/* - - - - - - - - - - - - - 6 - - - - - - - - - - - - - */

const float5 = new Float(1.234);
float5.toFixed(); // Float { value: 1 }

const float6 = Float.random(100, 500);
float6.toFixed(2); // ~250.22

/* - - - - - - - - - - - - - 7 - - - - - - - - - - - - - */

const float6 = new Float(1.5);
float6 + "kg"; // "1.5kg"
float6 + 1; // 2.5
float6 == 1.5; // true
float6.equal(1.5); // true
```

## Documentation

* Float.random(min, max);

  * Returns a floating point number from the range min, max.

  * Parameters:
    - min (number)
    - max (number)

  * Return:
    - number

* Float.is(number);

  * Checks if the passed number is a Float

  * Parameters:
    - number (number)

  * Return:
    - boolean

* Float.like(value);

  * Checks if the passed value is like Float
  
  * Parameters:
    - value (any)

  * Returns:
    - boolean

* Float.prototype.toFixed([digits]);

  * Similar to the Number.prototype.toFixed() method
 
  * Parameters:
    - digits (number)

  * Returns:
    - object

* Float.prototype.equals(value);

  * Checks if the passed value is equal to Float.value

  * Parameters:
    - value (number/string) 

  * Returns:
    - boolean