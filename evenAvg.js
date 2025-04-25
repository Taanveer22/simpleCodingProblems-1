const students = [2, 4, 5, 6, 7];
function evenAvg(paramArray){
    // console.log(paramArray);
    let evenStudents = [];
    for(let element of paramArray){
        // console.log(element);
        if(element % 2 === 0) {
            // console.log(element);
            evenStudents.push(element);
        }
    }
    console.log(evenStudents);
    let evenArrayLength = evenStudents.length;
    console.log('even students length: ',evenArrayLength);

    let evenSum = 0;
    for(let item of evenStudents){
        // console.log(item);
        evenSum = evenSum + item;
    }
    console.log('even students sum: ',evenSum);

    let evenAvg = evenSum / evenArrayLength;
    console.log('even students avg: ', evenAvg);
    return evenAvg;

    
}
console.log(evenAvg(students));