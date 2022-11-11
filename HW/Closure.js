

var colors = ["red", "green", "blue"];
var box = document.querySelector('.box');

function changeBG(color){
  box.style.background = color;
}

for (var i = 0; i < colors.length; i++) {
    (function(j){ 
        setTimeout(function(){
        console.log(`j:${j}`);
        changeBG( colors[j] );
        }, 1000*j)
    })(i)
}

