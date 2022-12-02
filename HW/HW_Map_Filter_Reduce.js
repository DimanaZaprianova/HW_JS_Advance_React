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


// /* ------------------------ I-st TASK from Exercises ------------------------ */

// // description

// // Given is the next Douglas Adams quote:

// // A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.

// // Make a program, which will write in the console only the words that starts with letter 't' and are longer than 2 symbols
// // that
// // trying
// // the
// // Hint: to split a string into array of words you can use the String.prototype.split() method

// let quote = "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools."
// let quoteArr = quote.split(" ");

// let filteredQuoteArr = quoteArr.filter(el=>(el.substring(0, 1) == 't' && el.length>2));
// console.log(...filteredQuoteArr);


// /* ------------------------ II-nd TASK from Exercises ------------------------ */

// Given is the next array of numbers: [1,2,3,4,5,6,7,8,9,10]
// Write a program which will output in the console the sum of the squares of even numbers
// Expected output: 220

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let sum = arr.filter(e=> e%2==0).reduce((acc, curr)=>(acc+curr**2),0);
// console.log(`sum: ${sum}`);

// /* ----------------------- III-rd TASK  from Exercises ---------------------- */

// // Given is next Array of Objects:
// const products = [
// 	{
// 		code:1,
// 		name:"product1",
// 		category: "music",
// 		price:1
// 	},
// 	{
// 		code:2,
// 		name:"product2",
// 		category: "books",
// 		price:2
// 	},
// 	{
// 		code:3,
// 		name:"product3",
// 		category: "books",
// 		price:3
// 	},
// 	{
// 		code:4,
// 		name:"product4",
// 		category: "music",
// 		price:4
// 	}
// ]

// // /* -------------------------------------------------------------------------- */
// /*                                   TASK1:                                   */
// /* -------------------------------------------------------------------------- */
// // Implement calcTotalPrice function, so that it will return the sum of all
// // products price
// function calcTotalPrice(articles){
// 	// YOUR CODE HERE
//     return sum = articles.map(e=>e.price).reduce((acc,curr)=>acc+curr); 

// }

// // TEST
// let totalPrice = calcTotalPrice(products)
// console.log(totalPrice);

// // EXPECTED OUTPUT:
// // 10



// /* -------------------------------------------------------------------------- */
// /*                                   TASK2:                                   */
// /* -------------------------------------------------------------------------- */
// // Implement calcTotalPriceByCategory function, so that it will return the
// // price sum of all products matching the given catgory
// function calcTotalPriceByCategory(articles, key) {
// 	// YOUR CODE HERE
//     return sum = articles.filter(e=>e.category==key).reduce((acc,curr)=>acc.price+curr.price); 
// }

// // TEST
// let totalPriceByCategory = calcTotalPriceByCategory(products,'music')
// console.log(totalPriceByCategory);

// // EXPECTED OUTPUT:
// // 5

/* -------------------------------- THE TASK -------------------------------- */
// Given is an array of objects: todos.
// Your task is to create a new array of objects: newTodos, which maps the values of todos so that a todo.completed value is inverted for given todoID
// Make sure, that the original todos array is not changed!

// const todos = [
//     {
//       "title": "Lean HMTL",
//       "completed": true,
//       "id": 1
//     },
//     {
//       "title": "Lean React",
//       "completed": false,
//       "id": 2
//     }
// ];

// const todoID = 2;

// /* ----------------------------- YOUR CODE HERE ----------------------------- */
// let newTodos = todos.map(e=>e.id==todoID? {...e, completed : !e.completed} : e);

// /* ---------------------------------- TEST ---------------------------------- */
// console.log(`Original todos:`, todos);
// console.log(`New todos:`, newTodos);


/* ----------------------------- EXPECTED OUTPUT ---------------------------- */
// Original todos: [
//   { title: 'Lean HMTL', completed: true, id: 1 },
//   { title: 'Lean React', completed: false, id: 2 }
// ]
// New todos: [
//   { title: 'Lean HMTL', completed: true, id: 1 },
//   { title: 'Lean React', completed: true, id: 2 }
// ]


/* ----------------------- IV-th TASK  from Exercises ----------------------- */

// TASK: getCityNameWithMinimalPopulation
// Implement findMinPopulationCityName function, so that it will return the
// // name of the city with minimum population

// const cities = [
// 	{name: 'Sofia', population: 1_236_000},
// 	{name: 'Plovdiv', population: 343_424 },
// 	{name: 'Burgas', population: 202_766},
// 	{name: 'Varna', population: 335_177},
// ];

// function findMinPopulationCityName(citiesArr) {
// 	// YOUR CODE HERE
//     return citiesArr.reduce((acc, curr) => {
//         if (curr.population < acc.population) {
//             acc = curr;
//         }
//         return acc;
//     });
// }

// // TEST:
// const minCityName = findMinPopulationCityName(cities);
// console.log( minCityName );

// // EXPECTED OUTPUT:
// // 'Burgas'


/* ----------------------- V-th TASK  from Exercises ----------------------- */

/* ---------------------------------- TASK ---------------------------------- */
// Implement the groupProductsByCategory() function, which takes an array of
// products as input and returns an array of products grouped by category,
// as given in EXPECTED OUTPUT section bellow

const products = [
	{
		code:1,
		name:"product1",
		category: "music",
		price:1
	},
	{
		code:2,
		name:"product2",
		category: "books",
		price:2
	},
	{
		code:3,
		name:"product3",
		category: "books",
		price:3
	},
	{
		code:4,
		name:"product4",
		category: "music",
		price:4
	}
]

/* -------------------------- EXPECTED OUTPUT ------------------------- */
// {
// 	music: [
// 		{ code: 1, name: 'product1', category: 'music', price: 1 },
// 		{ code: 4, name: 'product4', category: 'music', price: 4 }
// 	],
// 	books: [
// 		{ code: 2, name: 'product2', category: 'books', price: 2 },
// 		{ code: 3, name: 'product3', category: 'books', price: 3 }
// 	]
// }


/* -------------------------- Solution with forLoop ------------------------- */
// function groupProductsByCategory_ForLoop(products) {
// 	let groupedProducts = [];

// 	for (let i = 0; i < products.length; i++) {
// 		const product = products[i];
// 		const category = product.category;

// 		if( !groupedProducts[category] ){
// 			groupedProducts[category] = []
// 		}

// 		groupedProducts[category].push(product);
// 	}

// 	return groupedProducts;
// }

// /* -------------------------- Solution with Reduce -------------------------- */
function groupProductsByCategory_Reduce(products) {
	return products.reduce((acc, product) => {
		const category = product.category;

		if( !acc[category] ){
			acc[category] = []
		}
		acc[product.category].push(product);
		return acc;
	}, {});
}


// TEST:
// console.log( groupProductsByCategory_ForLoop(products) );
console.log( groupProductsByCategory_Reduce(products) );
// view rawgroupProductsByCategory.js hosted with ❤ by GitHub