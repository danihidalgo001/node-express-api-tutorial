const express = require('express');
const app = express();

let todos = [
    { "label": "Drink some water", "done": false },
    { "label": "Do my homework", "done": false }
]

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/todos', (req, res) => {
    res.status(200).json(todos)
})

app.post('/todos', (req, res) => {
    let todo = req.body;
    todos.push(todo);
    res.status(200).json(todos);
})

app.delete('/todos/:todoPosition', (req, res) => {
    const todoPosition = req.params.todoPosition;
    todos = todos.filter((value, position) => position != todoPosition)
    res.status(200).json(todos);
})

const server = app.listen(8080, function () {
    let port = server.address().port
    console.log("Server running on port:", port)
})