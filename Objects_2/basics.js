

let person = {
    name: 'Tony',
    age: 34,
    gender: 'male',
    hobbies: ['football', 'singer']
}

// console.log(person['hobbies'][1])



let numbers = [1, 20, 3, 42, 51, 6, 1];

// console.log(...numbers)


function sum(a, ...numbers)
{
    return numbers.reduce((acc, b) => acc + b);
}


let result = sum(2,3,50,2,3,1,23)
// console.log(result)


let names = ['Tony', 'Jackson', 'Liam', 'Mary']

let [firstName, ...rest] = names


// console.log(rest)


let person2 = {
    name: 'Tony',
    age: 34,
    gender: 'male',
    hobbies: ['football', 'singer']
}

let {name, gender, ...otherDetails} = person2

console.log(name, gender, otherDetails)




