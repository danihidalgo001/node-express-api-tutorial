# `07.1` Check post todo

This is what you have so far about the `POST /todos` endpoint, take some time to analyze each line:

```js
app.post('/todos', (req, res) => {
  let todo = req.body;
  todos.push(todo);
  res.status(200).json(todos);
})
```

Use Postman, Insomnia or any other API Request Builder that you like to test your API.

|  |  |
| ------ | -------- |
| Method | Post |
| URL: | /todos |
| Request Body | `{ "done": true, "label": "Start node API tutorial" }` |