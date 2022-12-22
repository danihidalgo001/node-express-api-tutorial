# `08.1` Check delete todo

Esto es lo que tienes hasta ahora sobre el endpoint `DELETE /todos`, tómate un tiempo para analizar cada línea:

```js
app.delete('/todos/:todoPosition', (req, res) => {
  const todoPosition = req.params.todoPosition;
  todos = todos.filter((value, position) => position != todoPosition)
  res.status(200).json(todos);
})
```

Utiliza Postman, Insomnia o cualquier otro Creador de solicitudes de API que desees para probar tu API.

|  |  |
| ------ | -------- |
| Method | Delete |
| URL: | /todos/:todoPosition |


