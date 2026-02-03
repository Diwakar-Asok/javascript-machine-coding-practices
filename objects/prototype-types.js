// prtotype based access, Prototype evey object has hidden property called __proto, it's simple link between the objects where it can inherit the properties and methods. Simple say "If the property and method are not there, i will ask my prototype."

//prototype based on object

const Animal = {
  eats: true,
  walk: function() {
    console.log("Animals walk");
  }
}

const dog = Object.create(Animal);
dog.barks = true;

console.log(dog.eats);
dog.walk();

//prototype inheritance using constructor funcction

//create a consturctor function
function Animals(name){
  this.name = name;
}

//Add methods to Animals prototype.

Animals.prototype.speak = function () {
  console.log(`${this.name} makes a sound`);
}

//create a child consturtor

function Dog(name, breed){
  Animals.call(this, name);
  this.breed = breed;
}

//Link prototypes

Dog.prototype = Object.create(Animals.prototype);
Dog.prototype.constructor = Dog;

//Add specific dog prototype method

Dog.prototype.bark = function (){
  console.log(`${this.name} barks`)
}

// use it with new keyword

const myDog = new Dog("Rocky", "Labrador");

console.log(myDog.name);
console.log(myDog.breed);

//class based inhertiance

class AnimalClass {
  constructor(name){
    this.name = name;
  }

  speak (){
    console.log(`${this.name} speaks`)
  }
}

// child class

class DogClass extends AnimalClass {
  constructor(name, breed){
    super(name);
    this.breed = breed;
  }

  bark () {
    console.log(`${this.breed} barks`);
  }
}

const myClassDog = new DogClass("Rocky", "Labrador")

myClassDog.speak()
