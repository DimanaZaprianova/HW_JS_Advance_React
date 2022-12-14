// const strings = [
// 	'abc',
// 	'cba',
// 	'bbbbb'
// ];

// const rx = /a/;


// // if(userPass.match(rx)){
// if(rx.test(userPass)){
// 	console.log(`MATCH`);
// }else{
// 	console.log(`NO MATCH`);
// }

// const strings = [
// 	'!@',  		// ok
// 	'aaaaaaaa'
// ];

// const rx = /a*/i;


// strings.forEach( string=>{
// 	if(rx.test(string)){
// 		console.log(`OK`);
// 	}else{
// 		console.log(`NO`);
// 	}

// 	// let res = string.match(rx)
// 	// console.log(res);
// })

// for (let index = 0; index < strings.length; index++) {
// 	const string = strings[index];

// 	if(rx.test(string)){
// 		console.log(`MATCH`);
// 	}else{
// 		console.log(`NO MATCH`);
// 	}
// };

// for (let string of strings){
// 	if(rx.test(string)){
// 		console.log(`MATCH`);
// 	}else{
// 		console.log(`NO MATCH`);
// 	}
// };



/* ------------------------------ replace demo (remove empty rows)------------------------------ */
// test_string =`1. jdsfjdkds
// 2. dkgfdkgj
// jdskjfkdsjgds
// y
// 3. kjfdjgkfdjgk
// jfdkgkkfd`;

// const rx = /^[^0-9].*$/mg;

// const cleaned = test_string
// 	.replace(rx,"")
// 	.replace(/\n{2,}/, "\n");
// console.log(cleaned);

// var strings = [
//     'alabala',
//     ' alabala',
//     'Astronomy',
//     'the apple'
//   ];
//   var re = /^a/;
  
//   strings.forEach((str)=>
//     re.test(str) ?
//       console.log(str+' -> match!') :
//       console.log(str+'  -> NO match!')
//   )

// var matched, str = `alAbAla`;

// matched = str.match(/a/); // no flags
// console.log(`matched: ${matched}`);
// // matched: a (the first one)

// matched = str.match(/a/g); // g flag added
// console.log(`matched: ${matched}`);
// //matched: a,a

// matched = str.match(/a/gi); // g and i flags
// console.log(`matched: ${matched}`);
// //matched: a,A,A,a

// match single vocals
// matched = "asteroid".match(/[aeiouy]/g);
// console.log(`matched: ${matched}`);
// // matched: a,e,o,i

// // match any consecutive vocals
// matched = "asteroid".match(/[aeiouy]+/g);
// console.log(`matched: ${matched}`);
// // matched: a,e,oi

// // match bg mobile phone numbers
// matched = "+359888123456".match(/\+3598[7-9][0-9]{7}/g);
// console.log(`matched: ${matched}`);
// // matched: +359888123456

// var re = /[a-z]\w+/;
// var strings = [
//   'petrov42',
//   '42petrov',
//   'ivan_pterov',
//   'p1dthetrt5655'
// ]
// strings.forEach(str=>console.log(`${str.match(re)} matched in ${str}:`));

// matched = "alla aa bala".match(/a.?a/g);
// console.log(`matched: ${matched}`);
// // matched: ala,aa,ala

// matched = "ala aa bala".match(/a.{3,5}a/g);
// console.log(`matched: ${matched}`);
// // matched: ala aa

// const tests = [
//   "abcd", 		// not (missing digit)
//   "ab1d", 		// ok
//   "1bcd", 		// ok
//   "abcd123", 		// ok
//   "123", 		// not (length)
// ];

// const rx = /\b(?=.*\d).{4,}/;

// tests.filter( str => str.match(rx) ).forEach( str => console.log(str) );

// const tests = [
//   "a@# cdfasas!", 	// not (missing digit)
//   "a@#9cdfas", 		// ok
//   "1a@#sda", 		// ok
//   "1@@@1344", 		// not (missong letter)
//   "123ab", 		// not (length)
// ];

// const rx = /^(?=.*\d)(?=.*[A-Za-z]).{6,}/
// tests.filter( str => str.match(rx) ).forEach( str => console.log(str) );

// var words = ["ябълка", "ария", "ягода", "ясен"];

// // Match string starting with 'я' and ending with 'а':
// //  RegExp literals:
// var re1 = /^я.*а$/i;
// words.forEach(word=>{
//   // re1 is compiled only once !!!:
//   let re1Matched = word.match(re1);
//   re1Matched && console.log('re1: ' + re1Matched);
// });

// // RegExp Constructor
// var re2 = new RegExp('^я.*а$','i');
// words.forEach(word=>{
//   // re2 is re-compiled in each iteration:
//   let re2Matched = word.match(re2);
//   re2Matched && console.log('re2: ' + re2Matched);
// })

// var commentsREs = [/\/\/.*/gm, /\/\*[^]+?\*\//g];
// var str = `
//   // single line comment 1
//   var x = 5;
//   // single line comment 2
//   var y = 10;
//   /*this is multiline
//   comment in JS */
//   const pi = 3.14;
//   for (let i = 0; i< x; i++) console.log(i);
// `;
// commentsREs.forEach( re=>{
//   var matched = str.match(re);
//   matched && matched.forEach(m=>
//     console.log(m.toString())
//   );
// });

// var str = `The RegExp constructor creates a regular expression object for matching text with a pattern.
// For an introduction to regular expressions, read the Regular Expressions chapter in the JavaScript Guide`;

// // next regexp can be user input or coming form elsewhare,
// // but it's just a string:
// var searchTerm  =  'reg(?:ular)?\\s*exp?(?:ression)?';

// // we can convert string to regex only byRegExp Constructor
// var re = new RegExp('('+searchTerm+')', 'gi');
// // console.dir(re);

// str.match(re).forEach(m=>console.log(m));

// var str = 'abracadabra';

// var resultSimple = str.match(/r/);
// console.dir(resultSimple);

// var resultGlobal = str.match(/r/g);
// console.dir(resultGlobal);

var regex = /\b[a-zA-Z][\w-]{2,}/g

const testStr = `this is not meaningful.R2-D2 is a robot, first_second,1st of July`;
testStr.match(regex).forEach(m=>console.log(m));

// this
// not
// meaningful
// R2-D2
// robot
// first_second
// July