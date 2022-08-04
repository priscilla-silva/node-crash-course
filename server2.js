const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => { //request and response objects
  console.log(req.url, req.method);


  //set header content type
  res.setHeader('Content-Type', 'text/html')

  //Send html file
  fs.readFile('./views/index.html', (err, data) => {
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