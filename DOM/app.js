let div = document.getElementsByTagName('div')
let paragraph = document.getElementById('paragraph')

// let h1 = document.querySelector('h1') // Returns the first item
// h1.style.color = 'red'

let h1 = document.querySelectorAll('h1') // Returns the all items with the query name


for(let i = 0; i < h1.length; i++)
{
    h1[i].style.color = 'red'
}


let section = document.createElement('section')
let pEle = document.createElement('p')
let divEle = document.querySelector('div')

divEle.appendChild(section)
section.appendChild(pEle)

let message = "Welcome to Javascript Class";

pEle.textContent = message

section.classList.add('paragraphStyle')
// document.body.appendChild(section)

console.log(document.body)