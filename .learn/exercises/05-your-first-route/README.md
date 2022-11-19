# `05` Your First Route

Let's add our first route of our API!🙌

## 📝 Instructions:

1. Add the following code at the end `app.js` file:

```js
app.get('/', (req, res) => {
  res.send('Hello World!')
})
```

2. Now if you open the port 8080 you should be able to see `Hello World!`.

