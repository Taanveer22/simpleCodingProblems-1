const today = new Date();
console.log(today);

// get Date mehtods
const myDate = new Date('2062-10-19');
console.log(myDate);
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getMonth());
console.log(myDate.getFullYear());


// set Date methods
const specificDate = new Date(2091, 0, 26);
console.log(specificDate);
specificDate.setDate(10);
console.log(specificDate);
specificDate.setMonth(5);
console.log(specificDate);
specificDate.setFullYear(2060);
console.log(specificDate);


// convert date to strings
console.log(specificDate.toDateString());
console.log(specificDate.toString());
console.log(specificDate.toLocaleDateString());
console.log(specificDate.toLocaleString('en-GB'));
console.log(specificDate.toLocaleTimeString());
