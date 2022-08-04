const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => { //request and response objects
  console.log(req.url, req.method);


  //set header content type
  res.setHeader('Content-Type', 'text/html')

  //use a switch statement to determine where the user will be directed
  let path = './views/';
  switch (req.url) { //url method required
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-me': //redirection case
      res.statusCode = 301; //status code of redirect
      res.setHeader('Location', '/about');
      res.end();
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  //Send html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //res.write(data);
      res.end(data); //we can just write "data" in the .end() function if we're only sending one data file
    }
  })
  
});

server.listen(5000, 'localhost', () => {
  console.log('listening for requests on port 5000')
}); //port number, name of host (localhost is default), and a function that will
    //fire when the server starts listening