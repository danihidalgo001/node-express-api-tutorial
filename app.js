const express =  require("express")
const app = express()

let todos = [
    { "label": "Drink some water", "done": false },
    { "label": "Drink some water", "done": false },
    { "label": "Drink some water", "done": false },
    { "label": "Drink some water", "done": false },
    { "label": "Drink some water", "done": false },
]

app.use(express.json())

const server = app.listen(8080, function() {
    let port = server.address().port
    console.log("Server running on port", port)
})

app.get("/", (req, res) => {
    // res.send("Hello World!")    
    res.status(200).json({"name": "Joe Doe"})
})

app.get("/todos", (req, res) => {
    res.status(200).json(todos)
})

app.post("/todos", (req, res) => {
    const todo = req.body

    todos.push(todo)
    res.status(200).json(todos)
})

app.delete("/todo/:id", (req, res) => {
    const todoId = req.params.id

    console.log(todoId)
    todos = todos.filter((value, position) => position !== Number(todoId))
    res.status(200).json(todos)
})