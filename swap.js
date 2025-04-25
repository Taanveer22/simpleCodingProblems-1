// we can not swap by exchnging the variable value
let a = 5;
let b = 7;
console.log(a, b);
a = b;
b = a;
console.log(a, b);

// we can swap easily by creating temp
let x = 44;
let y = 88;
console.log(x, y);
let temp = x;
x = y;
y = temp;
console.log(x, y);

// we can swap easily by destructuring
let j = 1995;
let s = 1997;
console.log(j, s);
[j, s] = [s, j];
console.log(j, s);
