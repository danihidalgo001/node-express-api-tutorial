# `06` Returning JSON

Las API REST deben devolver datos en formato JSON, no en formato HTML.

Puedes usar el método `.json()` para convertir fácilmente cualquiera de los tipos de datos básicos a datos JSON en la respuesta, así:

```js
app.get('/', (req, res) => {
  res.status(200).json({'name': 'Joe Doe'})
})
```

Si aplicamos este conocimiento a nuestro proyecto de To do list, podemos crear una variable global llamada `todos` que contendrá la lista de todos así:

```js
todos = [
    { "label": "Drink some water", "done": false },
    { "label": "Do my homework", "done": false }
]
```

## 📝 Instrucciones:

1. Crea una variable global `todos`. No declares la variable dentro de ninguna función, asegúrate de declarar la variable en cualquier lugar del ámbito global. Asegúrate de que la variable contenga al menos un elemento de tarea dentro con la siguiente estructura:

```js
[ { "label": "Drink some water", "done": false } ]
```

2. Agrega una nueva solicitud `GET /todos` con el siguiente código (esto incluirá la lista de todos que acabamos de crear):

```js
app.get('/todos', (req, res) => {
  res.status(200).json(todos)
})
```

## 💡 Pistas:

+ El método `.status()` especifica el código de estado con el que te gustaría enviar la respuesta.

+ El método `.json()` convierte fácilmente cualquiera de los tipos de datos básicos en datos JSON en la respuesta.
