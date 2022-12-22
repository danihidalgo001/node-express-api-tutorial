# `05` Your First Route

¡Agreguemos nuestra primera ruta de nuestra API!🙌

## 📝 Instrucciones:

1. Agrega el siguiente código al final del archivo `app.js`:

```js
app.get('/', (req, res) => {
  res.send('Hello World!')
})
```

> Esta es una solicitud GET que devolverá el string: `Hello World!`

2. Ahora, si abres el puerto 8080, deberías poder ver `Hello World!`.