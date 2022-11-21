# `08.1` Check delete todo

This is what you have so far about the `DELETE /todos` endpoint, take some time to analyze each line:

```js
app.delete('/todos/:todoPosition', (req, res) => {
  const todoPosition = req.params.todoPosition;
  todos = todos.filter((value, position) => position != todoPosition)
  res.status(200).json(todos);
})
```

Use Postman, Insomnia or any other API Request Builder that you like to test your API.

|  |  |
| ------ | -------- |
| Method | Delete |
| URL: | /todos/:todoPosition |