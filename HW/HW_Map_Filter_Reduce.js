/* -------------------------------- MAP TASK I -------------------------------- */

// // TASK: from 'cities' array generate a new array 'cityNames' which will contain only the names of the cities
// let cities = [
//       {name: 'Sofia', population: 1_236_000},
//       {name: 'Plovdiv', population: 343_424 },
//       {name: 'Burgas', population: 202_766},
//       {name: 'Varna', population: 335_177},
// ];

// // YOUR CODE HERE:
// let cityNames = cities.map((e)=>e.name);
// // TEST:
// console.log(cityNames);

// // EXPECTED OUTPUT:
// // [ 'Sofia', 'Plovdiv', 'Burgas', 'Varna' ]

// TASK: from 'cities' array generate a new array 'bgCityNames' which will contain only the names
// of the cities, but mapped to their Bulgarian equivalent

// /* ------------------------------- MAP TASK II ------------------------------- */


// let dict = {
//     'Sofia' : 'София',
//     'Plovdiv' : 'Пловдив',
//     'Burgas' : 'Бургас',
//     'Varna' : 'Варна'
//   }
//   let cities = [
//         {name: 'Sofia', population: 1_236_000},
//         {name: 'Plovdiv', population: 343_424 },
//         {name: 'Burgas', population: 202_766},
//         {name: 'Varna', population: 335_177},
//   ];
  
//   // YOUR CODE HERE:
//   let bgCityNames = cities.map((e)=>dict[e.name]); 
  
//   // TEST:
//   console.log(bgCityNames);
  
//   // EXPECTED OUTPUT:
//   // [ 'София', 'Пловдив', 'Бургас', 'Варна' ]


// /* ------------------------------- FILTER TASK ------------------------------- */

// // TASK: filter only cities which population is greater than 340_000
// let cities = [
//     {name: 'Sofia', population: 1_236_000},
//     {name: 'Plovdiv', population: 343_424 },
//     {name: 'Burgas', population: 202_766},
//     {name: 'Varna', population: 335_177},
// ];

// // YOUR CODE HERE:
// let filtered = cities.filter( x=>(x.population > 340000));
// // TEST:
// console.log(filtered);

// // EXPECTED OUTPUT:
// // [
// // 	{ name: 'Sofia', population: 1236000 },
// // 	{ name: 'Plovdiv', population: 343424 }
// // ]


/* ------------------------ I-st TASK from Exercises ------------------------ */

// description

// Given is the next Douglas Adams quote:

// A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.

// Make a program, which will write in the console only the words that starts with letter 't' and are longer than 2 symbols
// that
// trying
// the
// Hint: to split a string into array of words you can use the String.prototype.split() method

let quote = "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools."
let quoteArr = quote.split(" ");

let filteredQuoteArr = quoteArr.filter(el=>(el.substring(0, 1) == 't' && el.length>2));
console.log(...filteredQuoteArr);