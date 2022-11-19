

// // /*----------------------------------------------------------------
// // ~~~~~~~~~~ Ist TASK ~~~~~~~~~~
// // Примери за обекти и конструктор
// // ----------------------------------------------------------------*/

//  // конструктор за обекти от тип Patient:
//  function Patient( age, firstName, lastName ){
//   this.age = age;
//   this.firstName = firstName;
//   this.lastName= lastName;

//   // TODO: discuss why this is memory greedy:
//   this.printAge = function(){
//       console.log( this.firstName + " е на " + this.age + " години.");
//   };	   
// };

// // създаване и използване на обектите:
// var ivan = new Patient( 80, "Иван", "Иванов");
// var petyr = new Patient( 74, "Петър", "Петров");

// ivan.printAge();	
// petyr.printAge();

// // ЗАДАЧА: определяне на по-младия пациент:
// // функцията връща true, ако patient1 е по-млад (използваме '<=') от patient2.
// // в противен случй - връща false:
// function isYounger( patient1, patient2 ){
// if (patient1.age<=patient2.age){
//     return true;
// }
// }

// if ( isYounger(ivan, petyr) ){
// console.log(ivan.firstName + " е по-млад от " + petyr.firstName );
// }else{
// console.log(petyr.firstName + " е по-млад от " + ivan.firstName );
// };


/*----------------------------------------------------------------
~~~~~~~~~~ IInd TASK ~~~~~~~~~~
Пример за масив от обекти.
Задачата е дадена като коментар в JS код --------------------------*/

// // масив от обекти представящи данни за различни марки бири:
// const beers = [
// 	{name: "Ариана", color: "светло", prices:[1.3, 2, 2.4], town: "София"},
// 	{name: "Ариана", color: "тъмно", prices:[1.4, 2.2, 2.8], town: "София"},
// 	{name: "Каменица", color: "светло", prices:[1.5, 2.5, 3], town: "Пловдив"},
// 	{name: "Загорка", color: "светло", prices:[2, 3, 3.6], town: "Стара Загора"},
// ];
// console.log("The beers array: ", beers);


// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // ПРИМЕР: изписване на имената и цвета на всички бири:
// for (let i = 0, len = beers.length; i < len; i++) {
// 	const beer = beers[i];
	
// 	console.log(`${beer.name} - ${beer.color}`);
// }

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // ЗАДАЧА: намиране на най-евтината бира по 3-та цена:
// // да се изпише в конзолата името, цвета и цената на най-евтината бира, като използваме за сравнението 3-тата цена в масива prices:
// let lessPrice = beers[0].prices[2];
//   let cheapestBeer = beers[0];

// for (let i = 0; i <beers.length; i++) {
//   if ( beers[i].prices[2]<=lessPrice ) {
//     lessPrice = beers[i].prices[2];
//     cheapestBeer = beers[i];
//   }
// }

// console.log(`"${cheapestBeer.name}, ${cheapestBeer.color}" - ${lessPrice}лв.`);
// // очакван изход:
// // "Ариана, светло" - 2.4


// /*----------------------------------------------------------------
// ~~~~~~~~~~ IIIrd TASK ~~~~~~~~~~
// да се дефинира функция calcRectangleArea(), която връща лицето на правоъгълник, със зададени като пропъртита на обект дължина и ширина:
// ------------------------------------------------------------------*/

// // ---> YOUR CODE HERE <---
// function calcRectangleArea(rect){
// 	return rect.width*rect.height;
// }

// // TEST:
// let rectangle = {
// 	width: 6,
// 	height: 3
// };
// let area = calcRectangleArea(rectangle);

// console.log(`The area of rectangle is: ${area}`);

// // expected result:
// // The area of rectangle is: 18

// // /*----------------------------------------------------------------
// // ~~~~~~~~~~ IVth TASK ~~~~~~~~~~
// // Functions as properties values
// // ------------------------------------------------------------------*/ 

// // TASK: define object 'calc', with next properties and values:
// // 'add' - a function, which returns the sum of 2 numbers
// // 'sub' - a function, which returns the subtraction of 2 numbers
// // 'mult' - a function, which returns the multiplication of 2 numbers
// // 'div' - a function, which returns the division of 2 numbers

// // ---> YOUR CODE HERE <---

// let calc = {
//     add: function (num1, num2) {
//       return num1 + num2;
//     },
  
//     sub: function (num1, num2) {
//       return num1 - num2;
//     },
  
//     mult: function (num1, num2) {
//       return num1 * num2;
//     },
  
//     div: function (num1, num2) {
//       return num1 / num2;
//     }
//   };

//   let result = calc.div(5,6);
//   console.log(result);
