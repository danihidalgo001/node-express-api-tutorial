const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello World!")
})

const server = app.listen(8080, function () {
  let port = server.address().port
  console.log("Server running on port:", port)
})