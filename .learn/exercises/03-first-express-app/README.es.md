# `03` First Express App

Creemos nuestra primera aplicación **ExpressJS**.

## 📝 Instrucciones:

1. Crea un archivo llamado `app.js` en la raíz del proyecto.

2. Agregua el siguiente código en tu archivo `app.js`:

```js
const express = require('express');
const app = express();

app.use(express.json());

const server = app.listen(8080, function () {
  let port = server.address().port
  console.log("Server running on port", port)
})
```

> Esto inicializará tu aplicación en el puerto 8080 una vez que ejecutes este archivo.

