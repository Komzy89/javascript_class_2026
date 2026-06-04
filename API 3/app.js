const form = document.forms[0]


form.addEventListener('submit', function(event) {
    event.preventDefault()

    let titleValue = document.getElementById('title').value
    let descriptionValue = document.getElementById('description').value
    let completedValue = document.getElementById('completed').value

    console.log(title, description, completed)

    createTodo({
        title: titleValue,
        description: descriptionValue,
        completed: Boolean(completedValue)
    })

    form.reset()
})


async function createTodo(payload)
{
    const response = await fetch("https://js-todo-api-express.vercel.app/api/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })

    const data = await response.json()
    console.log(data)
}