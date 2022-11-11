let x = 1;
let y = x;
x = 5;
// did  we change the value in y? No, because a number is immutable, and a new memory has to be allocated

let xArr = [1];
let yArr = xArr;
xArr[0] = 5;
// did  we change the value in yArr? Yes, because arrays are mutable, and we changed the value itself

console.log( y );    // 1
console.log( yArr ); // [5]