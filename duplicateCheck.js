const numbers = [22, 35, 22, 44, 76, 35];

function duplicateChecker(myArray){
    // console.log(myArray);
    let uniqueNumbers = [];
    for(let element of myArray){
        // console.log(element);
        if(uniqueNumbers.includes(element) === false){
            uniqueNumbers.push(element);
        }
    }
    return uniqueNumbers;
    
}

console.log(duplicateChecker(numbers));