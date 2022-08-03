const http = require('http');

const server = http.createServer((req, res) => { //request and response objects
  console.log('request made');
});

server.listen(4000, 'localhost', () => {
  console.log('listening for requests on port 4000')
}); //port number, name of host (localhost is default), and a function that will
    //fire when the server starts listening