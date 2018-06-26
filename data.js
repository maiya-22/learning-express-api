// the point of this file is just to show how you can make your own module in Node and export data from a file.

exports.heineken = {
  name: "heineken",
  flavor: "I don't know about beer.  It's drinkable",
  texture: "bubbly"
};

exports.corona = {
  name: "corona",
  flavor: "a little more my speed",
  texture: "bubbly"
};

exports.guinnes = {
  name: "guinnes",
  flavor: "I can't.  I just can't.",
  texture: "bubbly"
};

// all of that is refactoring of this:
// every Node.js file has this variable:  module.exports = {}
// there is a module object that Node wraps around each document.  It has an "exports" property
// by default, the module.exports is an object
// if you re-assign it, it can be anything ... ie, module.exports = "hello" ... etc.

// in another file, you do:  const data = require("./data");
// in that file, the const data will now equal whatever you assigned to module.exports
// I was able to write exports.guinness  because, under the hood, Node has:
// const exports = module.exports
// you could also have written:
// module.exports = {heineken: {}, corona: {}, guinnes: {}}
// but then later, it won't catch any other exports ... or something? ... I'm not sure
// just be aware of the different ways to export
