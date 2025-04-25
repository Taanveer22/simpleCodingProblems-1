// formula : 1 feet = 12 inch


// practice 01
function inchToFeet(inch) {
  let feet = inch / 12;
  return feet;
}
console.log(inchToFeet(75));
console.log(inchToFeet(36));



// practice 02
function inchToFeet2(inch) {
  let feetFloat = inch / 12;
  let feetInteger = parseInt(feetFloat);
  let feetRemain = inch % 12;
  let result = feetInteger + " feet " + feetRemain + " inch "; 
  return result;
}
console.log(inchToFeet2(75));
