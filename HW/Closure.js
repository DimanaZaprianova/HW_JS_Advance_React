


// var colors = ["red", "green", "blue"];
// var box = document.querySelector('.box');

// function changeBG(color){
//   box.style.background = color;
// }

// for (var i = 0; i < colors.length; i++) {
//     (function(j){ 
//         setTimeout(function(){
//         console.log(`j:${j}`);
//         changeBG( colors[j] );
//         }, 1000*j)
//     })(i)
// }

function Constructor(id) {
  this.id = id;
  this.saidHello = 0;

  function __sayHello() {
    this.saidHello++;
    // here "this" is window object!!!
  };
  this.sayHello = function() {
    __sayHello();
    console.log(`I'm obj ${id}`);
    console.log(`I said hello ${this.saidHello} times`);
  };
}

var obj1 = new Constructor(1);
obj1.sayHello();
obj1.sayHello();