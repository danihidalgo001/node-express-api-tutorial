# `03` First Express App

Let's create our first **ExpressJS** app.

## 📝 Instructions:

1. Create a file named `app.js` in the root of the project.

2. Add the following code into your `app.js` file:

```js
const express = require('express');
const app = express();

app.use(express.json());

const server = app.listen(8080, function () {
  let port = server.address().port
  console.log("Server running on port", port)
})
```

> This will initialize your app in the port 8080 once you run this file.