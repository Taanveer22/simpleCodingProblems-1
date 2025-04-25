// leap year conditions:
// leap year is divisible by 4 and not divisible by 100
// leap year is divisible by 400

function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
console.log(isLeapYear(2020));
console.log(isLeapYear(2100));

console.log('2026 is a leap year', isLeapYear(2026));
console.log('2028 is a leap year', isLeapYear(2028));
console.log('2022 is a leap year', isLeapYear(2022));
console.log('2034 is a leap year', isLeapYear(2034));
console.log('2029 is a leap year', isLeapYear(2029));


