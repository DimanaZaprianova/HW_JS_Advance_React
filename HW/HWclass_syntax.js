/* --------------------------- Person constructor --------------------------- */
class Person{
    constructor(name, age){
    this.name = name;
    this.age = age;
  }
  // Person greet method
  greet (){
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
  }
}  
  
  /* --------------------------- Manager constructor -------------------------- */
  class Manager extends Person {
    // reuse Person constructor
    constructor(name, age, managed){
    super(name,age);
    this.managed = managed;
  }
  // Manager objects should inherit all methods from Person:
//   Manager.prototype = Object.create(Person.prototype);
    greet(){ 
        super.greet();
        for(let el of this.managed){
        let x= el.name.toString();
        console.log(`I manage ${x}, `)}
    }
  }
  /* -------------------------- Developer constructor ------------------------- */
  class Developer extends Person {
    // reuse Person constructor
    constructor(name, age, skillset){
    super(name, age);
    this.skillset = skillset;
  }
  // Developer objects should inherit all methods from Person:
//   Developer.prototype = Object.create(Person.prototype);
    greet  (){
      super.greet();
    
      let text = '';
      for (let el of this.skillset) {
        let x = el.toString();
        text+= x+' '
        }
        console.log(`I know ${text}.`)
    }
  }
  /* ----------------------------- Create Objects ----------------------------- */
  // Developer instances
  let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
  let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);
  
  // Manager instances
  let gates = new Manager('Bill Gates', 43, [maria, pesho]);
  
  /* ----------------------------- Use the objects ---------------------------- */
  maria.greet();
  pesho.greet();
  gates.greet();