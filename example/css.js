// dependencies
var fs = require("fs")
var postcss = require("postcss")
var atImport = require("postcss-import")

// css to be processed
var css = fs.readFileSync("example/style.css", "utf8")

// process css
postcss()
  .use(atImport())
  .process(css, {
    // `from` option is required so relative import can work from input dirname
    from: "example/style.css"
  })
  .then(function (result) {
    var output = result.css
    console.log(output)
  })