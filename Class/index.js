
class Animal {
    constrtuctor(eye,legs){
        this.eye = eye
        this.legs = legs
    }

    sound()
    {
        console.log(`Makes this sound`)
    }
}

class Student {

    school = "Futurelabs University"

    constructor(name, age, course)
    {
        this.name = name
        this.age = age
        this.course = course
    }

    greetings(){
        console.log(`Hello, my name is ${this.name}`)
    }
}


student1 = new Student("Tommy", 23, "Botany")

console.log(student1)
student2 = new Student("Clark", 17, "Mech Engineering")

student1.greetings()
student2.greetings()