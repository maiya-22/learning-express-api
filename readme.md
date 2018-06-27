#bare-bones Express and Node.js

### This is a little app to help someone get oriented to the basic express set-up:

## Steps for set-up:

1.  - Have Node.js installed (I had version 10.4.0 for making this, but don't think it matters)
2.  - In terminal, run "npm install" inside of the root folder.
      ## (This command will create a node_modules folder in the root directory, read the package-lock.json and install whatever modules the project requires).
3.  - Start the server by typing "node server" in the terminal (the .js extension is default. That's why youd on't have to type node server.js)

## File-structure:

*Your server is configured and running in "server.js"
*You have a node module exporting an object as "data.js", which is being required into the "server.js"
*The "server.js" is also able to serve up the "index.html"
*The package.json is where you have info about your project (even the creater of node said that this file has too much unnecessary info). The "scripts" property is useful, though.

Instructions:

1.  look at the routes in the server.js file
2.  use postman and/or your browser to play with the get requests
3.  use postman to play around with the post request

## put any query-string in the url bar and see what you get back. Notice how express is giving this data back to you.

## put any keys and values in the body (instead of a form). Notice how express is giving this data back to you

## Sample Postman requests:

![sample postman](http://git_hub/postman.png)

# BRANCHES:

##on brancy 'version-two', I am making a api that does c.r.u.d. on "flower" objects.
##current road-block is that some of my static files are not rendering, and I don't know why
