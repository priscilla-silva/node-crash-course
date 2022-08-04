const http = require('http');

const server = http.createServer((req, res) => { //request and response objects
  console.log(req.url, req.method);


  //set header content type
  res.setHeader('Content-Type', 'text/html')

  res.write('<h1>hello bitches!</h1>') //use the "write" method to (duh!) write content on the page
  res.write('<p>Ur cool</p>') //can use simple text or html tags
  res.end(); //always indicate the end of it
});

server.listen(4000, 'localhost', () => {
  console.log('listening for requests on port 4000')
}); //port number, name of host (localhost is default), and a function that will
    //fire when the server starts listening