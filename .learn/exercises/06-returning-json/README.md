# `06` Returning JSON

REST APIs have to return data in JSON format, not HTML format.

You can use the `.json()` method to easily convert any of the basic data-types to JSON data in the response, like this:

```js
app.get('/', (req, res) => {
  res.status(200).json({'name': 'Joe Doe'})
})
```

If we apply this knowledge to our To do list project we can create a global variable called `todos` that will contain the list of todos like this:

```js
todos = [
    { "label": "Drink some water", "done": false },
    { "label": "Do my homework", "done": false }
]
```

## 📝 Instructions:

1. Create a global variable `todos`. Do not declare the variable inside any function, make sure to declare the variable anywhere at the global scope. Make sure the variable contains at least one task item inside with the following structure:

```js
[ { "label": "Drink some water", "done": false } ]
```

2. Add a new `GET /todos` request with the following code (This will include the list of todos we just created):

```js
app.get('/todos', (req, res) => {
  res.status(200).json(todos)
})
```

## 💡 Hints:

+ The `.status()` method specifies the status code that you would like to send the response with.

+ The `.json()` method easily converts any of the basic data-types to JSON data in the response.