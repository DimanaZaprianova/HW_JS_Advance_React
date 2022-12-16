/* --------------------------------- Structural Patterns. Mixins --------------------------------- */

let toppings = {
	caramel(){
		console.log(`Caramel is added`);
	},
	chocolate(){
		console.log(`Chocolate is added`);
	}
}

let cupColors ={
	red(){
		console.log(`Red cup`);
	},
	blue(){
		console.log(`Blue cup`);
	}
}

class Icecream{
	constructor(){
		Object.assign(this, toppings, cupColors);
	}
    mix(top, cup) {
    console.log('Mixing: ');
    top();
    cup();
    }
}
const icecream = new Icecream();
// iceream.mix(toppings.caramel(), cupColors.red());
icecream.caramel();
icecream.mix(icecream.caramel, icecream.blue);

// Caramel is added
// Mixing: 
// Caramel is added
// Blue cup