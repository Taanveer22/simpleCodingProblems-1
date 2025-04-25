const mangoPeople = [
  "abul",
  "bulbul",
  "mokbul",
  "abul",
  "kabirul",
  "monirul",
  "bulbul",
];

function noDuplicate(myArray) {
  // console.log(myArray);
  let uniquePeople = [];
  for (let item of myArray) {
    // console.log(item);
    if (uniquePeople.includes(item) === false) {
      uniquePeople.push(item);
    }
  }
  //   console.log(uniquePeople);
  return uniquePeople;
}

console.log(noDuplicate(mangoPeople));
