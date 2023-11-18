/* - - - - - - - - - - - - - 1 - - - - - - - - - - - - - */

console.log('#1');
let float1 = new Float();
console.log(float1); // Float { value: случайное дробное число }
console.log(float1.value); // случайное дробное число
console.log(typeof float1); // "object"
console.log();

/* - - - - - - - - - - - - - 2 - - - - - - - - - - - - - */

console.log('#2');
let float2 = Float();
console.log(float2); // случайное дробное число
console.log(typeof float2); // "number"
console.log();

/* - - - - - - - - - - - - - 3 - - - - - - - - - - - - - */

console.log('#3');
let float3 = new Float(-1.7);
console.log(float3); // Float { value: -1.7 }
console.log(float3.value); // -1.7
console.log(typeof float3); // object
console.log();

/* - - - - - - - - - - - - - 4 - - - - - - - - - - - - - */

console.log('#4');
let float4 = Float(1.7);
console.log(float4); // 1.7
console.log(typeof float4); // number
console.log();

/* - - - - - - - - - - - - - 5 - - - - - - - - - - - - - */

console.log('#5');
let float5 = Float.random(20, 21);
console.log(float5); // какое-то дробное число между 20 включительно и 21 не включительно
console.log();

/* - - - - - - - - - - - - - 6 - - - - - - - - - - - - - */

console.log('#6');
console.log(
    Float.is(123), // false
    Float.is("12.3"), // false
    Float.is("js"), // false
    Float.is("1.5.5"), // false
);

console.log(
    Float.is(float1), // true
    Float.is(float2), // true
    Float.is(float3), // true
    Float.is(float4), // true
    Float.is(float5), // true
);
console.log();

/* - - - - - - - - - - - - - 7 - - - - - - - - - - - - - */

console.log('#7');
console.log(
    Float.like(123), // false
    Float.like("js"), // false
    Float.like("1.5.5"), // false
);

console.log(
    Float.like(float1), // true
    Float.like(float2), // true
    Float.like(float3), // true
    Float.like(float4), // true
    Float.like(float5), // true
    Float.like("12.3"), // true
    Float.like(12.3), // true
);
console.log();

/* - - - - - - - - - - - - - 8 - - - - - - - - - - - - - */

console.log('#8');
console.log(
    (1.234).toFixed() // 1
);

let float6 = new Float(1.234);
console.log(
    float6.toFixed(), // Float { value: 1 }
);

let float7 = Float.random(100, 150);
console.log(
    float7,
    float7.toFixed(2) // ~ должно произойти укарачивание дробной части до 2 знаков
);