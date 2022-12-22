# `08` Delete Todo 

In order to delete items from our database, we use the `DELETE` method. In this exercise, we are going to add a `DELETE /todos` method that will receive the position of the element we want to delete and it will remove it from the `todos` list.

Here is an example of a DELETE request:

```js
app.delete('/signup/:userId', (req, res) => {
  const userId = req.params.userId;
  users = users.filter((value, position) => position !== userId)
  res.status(200).json(users);
})
```

## 📝 Instructions:

1. Create a `DELETE /todos/:todoPosition` request.

2. In the request, remove the todo in the position given by the url parameter.

## 💡 Hints:

+ You can test the API using postman [https://www.postman.com/](https://www.postman.com/).

+ Make sure the port is public.