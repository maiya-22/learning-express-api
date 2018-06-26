const express = require("express"); //express is a node module, so no need to put a file-path
const app = express(); //the express module is a function that returns an object.  When we invoke express, we now have an object with a bunch of methods.  Those methods configure our routes and set up our server to listen on a port, etc.
const data = require("./data"); //this is not a node module, it's a module that we wrote, so it has ./ in front to signal to look via a file-path

// express makes an object that allows us to access things on the request object.  Then, we attatch whatever we want to the response object and send it back to the server.
app.get("/", (request, response) => {
  response.send("hello");
});

app.get("/data", (request, response) => {
  response.json(data);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listenting on ${PORT}`);
});
