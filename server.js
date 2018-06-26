const express = require("express"); //express is a node module, so no need to put a file-path
const app = express(); //the express module is a function that returns an object.  When we invoke express, we now have an object with a bunch of methods.  Those methods configure our routes and set up our server to listen on a port, etc.
const bodyParser = require("body-parser");
const data = require("./data"); //this is not a node module, it's a module that we wrote, so it has ./ in front to signal to look via a file-path

// .use method runs on every single request.  That is why it's called 'middleware'
//  the request is just a string via the http protocol
// this function parses the 'body' of the request or 'payload' into a request.body object
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// express makes an object that allows us to access things on the request object.  Then, we attatch whatever we want to the response object and send it back to the server.
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html", function(error) {
    if (error) {
      response.status(500).send(error);
    }
  });
});

app.get("/hello-world", (request, response) => {
  response.send("hello");
});

app.get("/data", (request, response) => {
  response.json(data);
});

// go to postman, and run some random post requests to your port:
// put various things in the keys and the values, and/or send a query string
app.post("/", (request, response) => {
  console.log(request.body);
  const body = request.body; //es6 destructuring. body = request.body
  const { query } = request; //es6 destructuring. body = request.query
  // this is also es6 short-hand for sampleData = {body: body, query: query}
  const sampleData = {
    body: body,
    query: query || "query is default, so you will never see this?"
  };
  // the response will return your request query and parameter to you, so you can see how express structures them:
  response.json(sampleData);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listenting on ${PORT}`);
});
