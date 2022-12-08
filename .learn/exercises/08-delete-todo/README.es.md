# `08` Delete Todo 

Para eliminar elementos de nuestra base de datos, utilizamos el método `DELETE`. En este ejercicio, vamos a agregar un método `DELETE /todos` que recibirá la posición del elemento que queremos eliminar y lo eliminará de la lista de `todos`.

```js
app.delete('/signup/:userId', (req, res) => {
  const userId = req.params.userId;
  users = users.filter((value, position) => position !== userId)
  res.status(200).json(users);
})
```

## 📝 Instrucciones:

1. Crea una solicitud `DELETE /todos/:todoPosition`.

2. En la solicitud, elimina el todo en la posición dada por el parámetro url.

## 💡 Pista:

+ Puedes probar la API usando postman [https://www.postman.com/](https://www.postman.com/).

+ Asegúrate de que el puerto sea público.