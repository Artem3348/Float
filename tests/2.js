let float = new Float(1.5);
console.log(float); // Float { value: 1.5 }

console.log(float + "kg"); // "1.5kg"
console.log(float + 1); // 2.5

console.log(float == 1.5); // true
console.log(float.equals(1.5)); // true

float += 10;
console.log(float); // 11.5