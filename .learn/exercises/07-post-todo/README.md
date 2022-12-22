# `07` Post Todo 

In a normal API if we want to add new items to our database, we have to use the POST request. In this exercise, we are going to add a POST request to our API that will receive a todo (object with the properties `label` and `done`), and we are going to add into the todos list.

Here is an example of a POST request:

```js
app.post('/signup', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(200).json(users);
})
```

## 📝 Instructions:

1. Create a `POST /todos` request that receives a `todo` from the body.

2. In the request, add that `todo` to the list of `todos`, then return the `todos` list updated.

## 💡 Hints:

+ You can test the API using postman [https://www.postman.com/](https://www.postman.com/)

+ Make sure the port is public.