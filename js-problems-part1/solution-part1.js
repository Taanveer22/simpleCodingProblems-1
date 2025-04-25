// task 01
function toFarenheit(celsius) {
  let fahrenheitFormula = celsius * (9 / 5) + 32;
  return fahrenheitFormula;
}
console.log(toFarenheit(10));
console.log(toFarenheit(15));
console.log(toFarenheit(88));




// task 02
function repeatedNumberCounter(checkNumber, numsArray) {
  console.log(numsArray);
  let counter = 0;
  for (let element of numsArray) {
    console.log(element);
    if (element === checkNumber) {
      counter++;
    }
  }
  return counter;
}
const numbers = [5, 6, 11, 12, 98, 5];
const numbers2 = [4, 8, 7, 4, 2, 4];
const numbers3 = [5, 6, 11, 12, 98, 5];
console.log(repeatedNumberCounter(5, numbers));
console.log(repeatedNumberCounter(4, numbers2));
console.log(repeatedNumberCounter(25, numbers3));



// task 03
function vowelCounter(paramString) {
  console.log(paramString);
  let calculation = 0;
  for (let item of paramString) {
    console.log(item);
    if (item === "a") {
      calculation++;
    } else if (item === "e") {
      calculation++;
    } else if (item === "i") {
      calculation++;
    } else if (item === "o") {
      calculation++;
    } else if (item === "u") {
      calculation++;
    } else {
      calculation;
    }
  }
  return calculation;
}
console.log(vowelCounter("brendan"));
console.log(vowelCounter("eich"));
console.log(vowelCounter("javascript"));

// task 04
function longestWordFinder(sentence) {
  console.log(sentence);
  let words = sentence.split(" ");
  console.log(words);
  let longestWord = "";
  for (let item of words) {
    console.log(item);
    if (item.length > longestWord.length) {
      longestWord = item;
    }
  }
  return longestWord;
}
console.log(
  longestWordFinder("i am learning programming to become a programmer")
);

console.log(longestWordFinder("brendan eich has created js "));



// task 05 (proper random number function)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInteger(10, 20));
console.log(getRandomInteger(55, 95));
