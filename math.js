// behind the scenes of Math object in js

const mathObject = {
  max: function maxNumber(n1, n2) {
    if (n1 > n2) {
      return n1;
    } else {
      return n2;
    }
  },

  min: function minNumber(x1, x2) {
    if (x1 < x2) {
      return x1;
    } else {
      return x2;
    }
  },
};

console.log(mathObject.max(22, 34));
console.log(mathObject.min(2, 5));

// Math object in shortcut
let largestNumber = Math.max(22, 44, 88, 99);
console.log(largestNumber);

let smallestNumber = Math.min(33, 443, 43, 22);
console.log(smallestNumber);

let piNumber = Math.PI;
console.log(piNumber);

let absoluteNumber = Math.abs(-88);
console.log(absoluteNumber);

let absolutNumber2 = Math.abs(5-10);
console.log(absolutNumber2);

let roundNumber = Math.round(8.25);
console.log(roundNumber);

let roundNumber2 = Math.round(8.88);
console.log(roundNumber2);

let roundNumber3 = Math.round(8.5);
console.log(roundNumber3);

let ceilNumber = Math.ceil(3.44);
console.log(ceilNumber);

let floorNumber = Math.floor(3.44);
console.log(floorNumber);

let belowOneRandom = Math.random();
console.log(belowOneRandom);

let aboveOneRandom = Math.random() * 10;
console.log(aboveOneRandom);

let roundedRandom = Math.round(Math.random() * 10);
console.log(roundedRandom);


