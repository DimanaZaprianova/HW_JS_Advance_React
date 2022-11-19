// const cat = {
//     name : 'Bertie',
//     breed : 'Cymric',
//     color : 'white',
//     greeting: function() {
//       console.log('Meow!');
//     }
//   }
  
//   // Put your code here
  
//   catName=cat.name;
//   cat.greeting();
//   cat.color="black";
  
  
  
//   // Don't edit the code below here
  
//   let para1 = document.createElement('p');
//   let para2 = document.createElement('p');
  
//   para1.textContent = `The cat's name is ${ catName }.`;
//   para2.textContent = `The cat's color is ${ cat.color }.`;
  
//   section.appendChild(para1);
//   section.appendChild(para2);
    
  
/* ----------------------------------- new ---------------------------------- */

// let bandInfo;

// // Add your code here

// bandInfo = {
//   name: 'Pink Floyd',
//   nationality: 'UK',
//   genre: 'rock',
//   members: 4,
//   formed: 1960,
//   split: 1985,
//   albums: [ 
//     {name: 'The Dark Side of the Moon', released: 1970}, 
//     {name: 'The Wall', released: 1982}] 
// };
// console.log(bandInfo);

/* ----------------------------------- new ---------------------------------- */

// const cat = {
//     name : 'Bertie',
//     breed : 'Cymric',
//     color : 'white',
//     greeting: function() {
//       console.log(`Hello, said ${this.name} the ${this.breed}!`);
//     }
//   };
      
//   const cat2 = {
//     name : 'Lui',
//     breed : 'Para',
//     color : 'gray',
//     greeting: function() {
//       console.log(`Hello, said ${this.name} the ${this.breed}!`);
//     }
//   };
  
//   cat.greeting();
//   cat2.greeting();

/* ----------------------------------- new ---------------------------------- */

// function Cat(name, breed, color){
//     this.name = name;
//     this.breed = breed;
//     this.color = color;
//     this.greeting = function(){
//         console.log(`Hello, said ${this.name} the ${this.breed}!`)
//     };
// }

// let cat1 = new Cat("Bertie", 'Persian', 'beige');
// let cat2 = new Cat("Lui", 'Para', 'gray');

// cat1.greeting();
// cat2.greeting();

/* ----------------------------------- new ---------------------------------- */

// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// console.log('The initial object: ', student.name, student.sclass, student.rollno);

// delete student.rollno;

// console.log('After deletion: ', student);

// //Write a JavaScript program to get the length of a JavaScript object.

// Object.objsize = function(Myobj) {
//     var osize = 0, key;
//     console.log(osize);
//     console.log(key);
//     for (key in Myobj) {
//         if (Myobj.hasOwnProperty(key)) osize++;
//         console.log(osize);
//         console.log(key);
//     }
//     return osize;
// };

// var objsize = Object.objsize(student);
// console.log('Size of the current object : '+objsize);

/* ----------------------------------- new ---------------------------------- */

// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }];

// var text = '';
// for (let element of library) {
//         for(let key in element){    
//         text += element[key] + ' ';    
//         };  
//         console.log(`The reading staus of this item: ${text}`);
//         text = '';  
//     };
        

// function Cylinder(name, radius, height){
//         this.name = name;
//         this.radius = radius;
//         this.height = height;
//         this.volume = function(){
//             let vol;
//             vol = Math.PI*Math.pow(this.radius,2)*this.height;
//             console.log(`The volume of  ${this.name} is ${vol}!`)
//         };
//     }
    
//     let cylinder1 = new Cylinder("Cylinder 1", 5, 4);
//     let cylinder2 = new Cylinder("Cylinder 2", 7, 10);
    
//     cylinder1.volume();
//     cylinder2.volume();
        
/* ----------------------------------- new ---------------------------------- */

// function bubbleSort(arr){
//     let small;
//     let resArr = [];
//     for (let i=0; i < arr.length; i++){
//         if (arr[i]>arr[i+1]){
//             small = arr[i+1];
//             arr[i+1] = arr[i];
//             arr[i]=small; 
//             bubbleSort(arr);
//         }
        
//     }
// return arr;
// };

// let myArr=[6,4,0, 3,-2,1];
// console.log(bubbleSort(myArr));

/* ----------------------------------- new ---------------------------------- */
// Do not change the object
const counter = {
	currentCount : 0,
	tick(){
		this.currentCount++;
		console.log(this.currentCount);
	}
}

// fix the problem in countdown function

function countdown(times) {
	
    
    const delay = 1000;
	while(times){
        
		setTimeout(counter.tick.bind(counter), delay*times);
		times--;
	}
}
countdown(3);