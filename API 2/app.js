// Handling responses

const form = document.forms[0]

form.addEventListener('submit', function(event){
    event.preventDefault();

    let titleValue = document.getElementById('title').value
    let bodyValue = document.getElementById('body').value

    obj = {
        title: titleValue,
        body: bodyValue,
    }

    // JsonData = JSON.stringify(obj)
    // console.log(JsonData)

    createTodo(obj)

})



async function getTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    
    if(!response.ok)
    {
        throw new Error("Failed to fetch todo")
    }

    const todos = await response.json();
    console.log(todos)

}

getTodos()

console.log("Print this First")


// POST REQUEST

async function createTodo(payload){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    });

    const data =  await response.json();
    console.log(data)
}


// PUT REQUEST

async function createTodo(payload){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/101", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    });

    const data =  await response.json();
    console.log(data)
}


// DELETE REQUEST

async function createTodo(payload){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/101", {
        method: "DELETE",
    });

    if(response.ok){
        console.log("Post deleted successfully");
    }
}


async function fetchData() {
    try{
        const response = await fetch("https://api.example.com/data")

        if(!response.ok) {
            throw new Error("Request failed!")
        }

        const data = await response.json()
        console.log(data)
    }catch(error)
    {
        console.log("Error:", error.message);
    }
}