const numbers = [2, 4, 5, 7, 6, 3, 4];
const numbers2 = [3, 5, 4, 9, 7, 1];

function oddAvg(myArray) {
  let odds = [];
  for (let element of myArray) {
    // console.log(element);
    if (element % 2 === 1) {
    //   console.log(element, "odd number");
      odds.push(element);
    }
  }
  console.log(odds);
  let oddsLength = odds.length;
  console.log('odds array length is: ',oddsLength);

  let sum = 0;
  for(let item of odds){
    console.log(item);
    sum = sum + item;
  }
  console.log('odd sum is: ',sum);
  let avg = sum / oddsLength;
  console.log('odd avg is: ',avg);
  return avg;
}
console.log(oddAvg(numbers));
console.log(oddAvg(numbers2));
