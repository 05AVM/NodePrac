//Node js runs on server - not in  a browser(backend not frontend)
//Has common core modules that vanilla js dont have

//The console is the terminal window
console.log("Hello World"); //prints Hello world to the terminal
console.log(global)

//we use common js modules are use instead of ES6 modules
//to include any modlue we use the require model
const os=require('os')
const path=require('path')
const http=require('http');


console.log(os.endianness())
console.log(os.arch())
console.log(os.networkInterfaces())
console.log(os.type())
console.log(os.uptime())

var server = http.createServer(function(req, res) {
  if (req.url == '/home') {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write("<html><body><h1>This is home page</h1></body></html>");
      res.end();
  } else if (req.url == '/admin') {
    res.writeHead(200, {'Content-Type': 'text/html'});
      res.write("<html><body><h1>This is admin page</h1></body></html>");
      res.end();
  } else if (req.url == '/student') {
    res.writeHead(200, {'Content-Type': 'text/html'});
      res.write("<html><body><h1>This is Student page</h1></body></html>");
      res.end();
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end("Invalid request");
  }
});

server.listen(3000);

console.log("Server listening on port 3000");


 



// A common function that performs some asynchronous task
// isnide this function the callback is invoked
/*function fetchData(callback) {
    setTimeout(function () {
      // Simulating an asynchronous operation (e.g., fetching data from a server)
      const data = { name: "John", age: 30 };
      callback(data); //here the processed data is executed.. Calling the callback function (whichi is represented by the callback parameter and pass data) with the fetched data
    }, 2000); // Simulated delay of 2 seconds
  }
  
  // A callback function to handle the fetched data
  function processData(data) {
    console.log("Data received:", data);
  }
  
  // Calling the fetchData function with the processData callback
  fetchData(processData);
  */

//const{add,subtract,multiply,divide}=require('./Math')
//console.log(add(2,3))
//console.log(subtract(7,6))
//console.log(multiply(5,6))
//console.log(divide(10,5))


/*
console.log(os.type())
console.log(os.version())
console.log(os.homedir())



console.log(__dirname)
console.log(__filename)
//console.log(path.dirname(__filename))
*/
