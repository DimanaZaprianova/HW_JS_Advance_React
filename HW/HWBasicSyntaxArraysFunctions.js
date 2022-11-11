
/* -------------------------------------------------------------------------- */
/*                      Basic Syntax. Arrays. Functions.                      */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                Basic Syntax.                               */
/* -------------------------------------------------------------------------- */


// let manHeight;
// let manWeight;
// let BMI;
// manHeight = 1.95;
// manWeight = 95;
// BMI = manWeight/manHeight**2;

// console.log(`The BMI is: ${(BMI).toFixed(2)}.`);

// if (BMI < 16) {
//     console.log('Пациентът е в с поднормено тегло състояние на тежко недохранване.')
// }
// else if (16 <= BMI && BMI <= 16.99) {
//     console.log('Пациентът е с поднормено тегло в състояние на средно недохранване.')
// }
// else if (17 <= BMI && BMI <= 18.49) {
//     console.log('Пациентът е с поднормено тегло в състояние на леко недохранване.')
// }
// else if (18.50 <= BMI && BMI <= 24.99) {
//     console.log('Пациентът е с нормално тегло.')
// }
// else if (25 <= BMI && BMI <= 29.99) {
//     console.log('Пациентът е с наднормено тегло в състояние на предзатлъстяване.')
// }
// else if (30 < BMI && BMI < 34.99) {
//     console.log('Пациентът е с наднормено тегло в състояние на затлъстяване I степен.')
// }
// else if (35 <= BMI && BMI <= 39.99) {
//     console.log('Пациентът е с наднормено тегло в състояние на затлъстяване II степен.')
// }
// else {
//     console.log('Пациентът е с наднормено тегло в състояние на затлъстяване III степен.')
// }

/* ----------------------------------- new ---------------------------------- */


// let manHeight;
// let manWeight;
// let BMI;
// manHeight = 1.70;
// manWeight = 77;
// BMI = manWeight/manHeight**2;

// console.log('The BMI is: ' + (BMI).toFixed(2));
// 


/* ----------------------------------- new ---------------------------------- */

// // HW1: Comparison Operators & Conditional Statement
// let userTown = "Париж";
// if(userTown ==="София"){
//     console.log("Здравей!")
// }
// else if(userTown === "Париж"){
//     console.log("Salut!")
// }
// else {
//     console.log("Hi!")
// };

/* ----------------------------------- new ---------------------------------- */

// let sum = 0;
// for(let i = 1; i <= 20; i++) {
//     if (i%2 == 0 && i%3 == 0) {
//         sum = sum + i
//     };
// };
// console.log(sum);

/* ----------------------------------- new ---------------------------------- */

// var treeDeep = 5;
// for (var i = 1; i <= treeDeep; i++) {
//   console.log("*".repeat(i));
// }


/* ----------------------------------- new ---------------------------------- */

// let userAge = 2022 - userBirthYear;
// 	let x = 18 - userAge;

// 	if (userAge >= 18) {
// 			console.log(`Добре дошли, ${userName}!`);
// 	} else if (userAge >= 12 && userAge < 18) {		
// 			console.log(`${userName}, ще имате достъп само до определена функционалност от този сайт.`);
// 	} else {
// 			console.log(`Съжaлявам ${userName}, отбий се тук след ${x} години!`);
// 	}


/* ----------------------------------- new ---------------------------------- */

// let sum = 0;
// for(let i = 1; i <= 20; i++) {
//     if (i%2 == 0 && i%3 == 0) {
//         sum = sum + i
//     };
// };
// console.log(sum);

// let numbers = [-2, 3, 7, 8, -1, 4, 2];
// // >>>>>>>>> write your code bellow:

// var sum = 0;
// for ( var x = 0; x < numbers.length; x++ ){
// 	if (numbers[x]>0 && numbers[x]%2===0){
//         sum = sum + numbers[x];
// 	};
// };
// console.log("sum = " + sum);

// // expected output: 14

/* ----------------------------------- new ---------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                   Arrays.                                  */
/* -------------------------------------------------------------------------- */

// // TASK: Given the array: numbersArr bellow, write the code (using a for loop) which will create two new arrays:
// // evenNums - which elements will be the positive even numbers from numbersArr.
// // oddNums - which elements will be the negative odd numbers from numbersArr.

// // Note that the Zero is neither positive nor negative number!

// // HINT: you can push a value in a array by using array.push(value) method. 

// const numbersArr = [1, 6, -3, 5, 2, -8, 0, 4, 3];
// let evenNums = [];
// let oddNums = [];

// // >>>>> your code goes bellow:


// for ( var x = 0; x < numbersArr.length; x++ ){
//     	if (numbersArr[x]!==0 && numbersArr[x]%2===0){       
//             evenNums.push(numbersArr[x]);
//         };
// };
// for ( var x = 0; x < numbersArr.length; x++ ){
//     if (numbersArr[x]!==0 && numbersArr[x]%2!==0){       
//         oddNums.push(numbersArr[x]);
//     };
// };
// console.log(`The new array with even numbers is: evenNums [${evenNums}]`);
// console.log(`The new array with odd numbers is: oddNums [${oddNums}]`);


/* ----------------------------------- new ---------------------------------- */

// // store students data as array of arrays:
// let students = [
//     ["male",24,"Ivan","Ivanov"],
//     ["female",22,"Maria","Petrova"],
//     ["male",18,"Georgi","Georgiev"],
//     ["male",21,"Nikolai","Nikolov"]
// ];
// //////////////////// EXAMPLE ////////////////////
// // print in console the youngest student names: /
// /////////////////////////////////////////////////

// // inititalize minAge with first student age:
// let minAge = students[0][1];

// // variable to store youngest student data:
// let youngestStudent;

// for (let i = 0; i < students.length; i++) {
//     const studentAge = students[i][1];

//     if( studentAge <= minAge){
//         minAge = studentAge;
//         youngestStudent = students[i];
//     }
// }

// console.log(`The youngest student is ${youngestStudent[2]} ${youngestStudent[3]}. He is ${youngestStudent[1]} years old.`);


// ////////////////////  TASK  ////////////////////
// // print in console the oldest student names:  /
// ////////////////////////////////////////////////
// // your code goes here:
// let maxAge = students[0][1];
// let oldestStudent;
// for (let i = 0; i < students.length; i++) {
//     const studentAge = students[i][1];

//     if( studentAge >= maxAge){
//         maxAge = studentAge;
//         oldestStudent = students[i];
//     }
// }

// console.log(`The oldest student is ${oldestStudent[2]} ${oldestStudent[3]}. He is ${oldestStudent[1]} years old.`);


// // Expexted output:
// //The oldest student is Ivan Ivanov. He is 24 years old.


/* ----------------------------------- new ---------------------------------- */

// Даден е масив, който съдържа информация за български владетели, и периода на тяхното управление.
// Всеки елемент на масива е масив със следните данни:
// 	[<име>, <начална година на управление>, <крайна година на управление>]

// var rulers = [
// 	["асПАРуХ",681, 700 ],
// 	["тЕРвеЛ", 700,718 ],
// 	["СеВаР", 738,753],
// 	["телЕРИГ", 766,777],
// 	["каРДАм", 777, 803],
// 	["крум", 803,814 ],
// 	["ОмурТАг",814,831],
// ];

// ЗАДАЧА: Изпишете в конзолата имената на онези български владетели, които са управлявали повече от 15 години.
// Разбира се, искаме да видим имената изписани според конвенциите за имена на съществителни-собствени: за целта може да използвате върху всяко име функцията toCamelCaseCyr(), която връща подадения й низ в скобите конвертиран до CamelCase
// Например:
	// console.log( toCamelCaseCyr('асПАРуХ') ); // Аспарух

// // >>>>>>>>>>НАЧАЛО НА ВАШИЯ КОД >>>>>>>>>>

// for ( var x = 0; x < rulers.length; x++ ){
//          if (rulers[x][2]-rulers[x][1]> 15){
// 	console.log(`${toCamelCaseCyr(rulers[x][0])} е управлявал ${rulers[x][2]-rulers[x][1]} години.`);
//         };
// };

// <<<<<<<<<< КРАЙ НА ВАШИЯ КОД <<<<<<<<<<<<<

// Очакван резултат,в конзолата:
// Аспарух е управлявал 19 години.
// Тервел е управлявал 18 години.
// Кардам е управлявал 26 години.
// Омуртаг е управлявал 17 години.

/* ----------------------------------- new ---------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                 Functions.                                 */
/* -------------------------------------------------------------------------- */



// //TASK: да се дефинира функция calcRectangleArea(), която връща лицето на правоъгълник, със зададени като пропъртита на обект дължина и ширина:

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



/* ----------------------------------- new ---------------------------------- */


// 2nd TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---


// do not modify!
// function toCamelCaseCyr(str) {
// 	return str.toLowerCase()
// 			    	.replace(/(?:\b|^|[^а-яА-Я])([а-яА-Я])/g, (all, chr) => chr.toUpperCase());
// }


// function findMaxEven(arr) {
//     let maxEven = -Infinity; 
//     for (let i = 0; i < arr.length; i++){
         
//          if (arr[i]>maxEven && arr[i]%2===0) {
//              maxEven = arr[i];
//          };
//      };
//      return maxEven;
//  }
 
//  // TEST
//  let numbers = [2, -4, 5, 3, 9, 0, 1];
//  let max = findMaxEven(numbers);
//  console.log(`The max even of ${numbers} is ${max}`);
 

/* ----------------------------------- new ---------------------------------- */



// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
// // 3rd TASK:
// // TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.
// // ---> YOUR CODE HERE <---

// function getHighestScoreIndex(arrScore) {
//     let maxScore = -Infinity; 
//     for (let i = 0; i < arrScore.length; i++){       
//             if (arrScore[i]>maxScore) {
//                 maxScore = i;
//             };
//         };
//     return maxScore; 
// };
   
// // TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// // ---> YOUR CODE HERE <---

// let students = ["Ivan", "Pesho", "Maria"];
// let scores = [5, 4, 6];
// let index = getHighestScoreIndex(scores);

// console.log(`${students[index]} has the higest score: ${scores[index]}`);

// // expected output
// // Maria has the higest score: 6



/* ----------------------------------- new ---------------------------------- */

// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// //  4th TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.

// // ---> YOUR CODE HERE <---
// function SumEven2DimArrayElements(dimArr){
//     let accum = 0;
//     for ( let i  =0; i < dimArr.length; i++) {
//         for ( let j=0; j<dimArr[i].length; j++){
//             if (dimArr[i][j]%2===0){
//                 accum = accum + dimArr[i][j];
//             }
//         }
//     }
//     return accum;
// };
// // TEST:
// let arr = [
// 	[1,2,3],
// 	[4,5,6]
// ];

// let sum = SumEven2DimArrayElements(arr);
// console.log(sum);

// // expected output: 12




/* ----------------------------------- end ---------------------------------- */

