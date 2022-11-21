const express = require('express');
const app = express();

let todos = [
  { "label": "Drink some water", "done": false },
  { "label": "Do my homework", "done": false }
]

app.get('/', (req, res) => {
  res.send("Hello World!")
})

app.get('/todos', (req, res) => {
  res.status(200).json(todos)
})

const server = app.listen(8080, function () {
  let port = server.address().port
  console.log("Server running on port:", port)
})