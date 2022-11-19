

// // properties
// name: string,
// salary: number,

// // methods
// getSalary()
//   returns salary
// increaseSalary(incrValue, pass)
//    increments salary with incrValue, 
//    if pass == 'abracadabra'


   "use strict";
let devFactory = function(name, salary){
  let obj = {};
  obj.personName = name;
  obj.personSalary = salary;
  obj.getSalary = function() {return obj.personSalary};
  obj.increaseSalary = function(amount, pass){
    if (pass === 'abracadabra') {return obj.personSalary += amount} 
    else {return obj.personSalary}};
  return obj
};


let dev1 = devFactory('Peter', 1000);
let dev2 = devFactory('Maria', 1200);

console.log(`${dev1.personName} salary is ${dev1.getSalary()}`);
console.log(`${dev2.personName} salary is ${dev2.getSalary()}`);

dev1.increaseSalary(500, 'abracadabra');
dev2.increaseSalary(100, '123');

console.log(`${dev1.personName} salary after promotion is ${dev1.getSalary()}`);
console.log(`${dev2.personName} salary after promotion is ${dev2.getSalary()}`);


// *** OUTPUT ***
// Peter salary is 1000