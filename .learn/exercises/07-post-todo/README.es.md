# `07` Post Todo 

En una API normal, si queremos agregar nuevos elementos a nuestra base de datos, debemos usar la solicitud POST. En este ejercicio, agregaremos una solicitud POST a nuestra API que recibirá un todo (objeto con las propiedades `label` y `done`), y lo agregaremos a la lista de to-dos.

Aquí hay un ejemplo de una solicitud POST:

```js
app.post('/signup', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(200).json(users);
})
```

## 📝 Instrucciones:

1. Crea una solicitud `POST /todos` que reciba un `todo` del body.

2. En la solicitud, agrega ese `todo` a la lista de `todos`, luego devuelve la lista `todos` actualizada.

## 💡 Pistas:

+ Puedes probar la API usando postman [https://www.postman.com/](https://www.postman.com/)

+ Asegúrate de que el puerto sea público. 