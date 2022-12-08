# `07` Post Todo 

En una API normal, si queremos agregar nuevos elementos a nuestra base de datos, debemos usar la solicitud POST. En este ejercicio vamos a agregar una solicitud POST a nuestra API que recibirá un todo (objeto con las propiedades `label`/etiqueta y `done`/hecho), y lo agregaremos a la lista de todos.

Here is an example of a POST request:

```js
app.post('/signup', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(200).json(users);
})
```

## 📝 Instrucciones:

1. Crea una solicitud `POST /todos` que reciba un `todo` del cuerpo.

2. En la solicitud, agrega ese `todo` a la lista de `todos`, luego devuelve la lista `todos` actualizada.

## 💡 Pista:

+ Puedes probar la API usando postman [https://www.postman.com/](https://www.postman.com/).

+ Asegúrate de que el puerto sea público.

