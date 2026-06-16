class Animal {    //SuperClass, BaseClass, ParentClass
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
  }

  sound() {
    console.log(`Woof Woof`);
  }
}


class Dog extends Animal { //SubClass, DerivedClass, ChildClass
    constructor(name, legs, color, breed) {
        super(name, legs)
        this.color = color
        this.breed = breed
    }
}

class Cat extends Animal {
    constrtuctor(name, legs, color) {
        supper(name, legs)
        this.color = color
    }

    sound()
    {
        console.log("Meow Meow!")
    }
}


class Bird extends Animal {
    constrtuctor(name, legs, color) {
        supper(name, legs)
        this.color = color
    }
}

dog1 = new Dog("Billy", 4, "Brown", "Beagle")

console.log(dog1)
dog1.sound()

cat1 = new Cat("Bloomy", 4, "White")
console.log(cat1)
cat1.sound()

bird1 = new Bird("Parrot", 2, "Pink")
console.log(bird1)
bird1.sound()



