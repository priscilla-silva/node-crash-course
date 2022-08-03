
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'}); //A replacement for the toString() method

const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => { //This is a type of "event listener", that when it listens
//   //to the "data" will begin streaming it on chunks
//   console.log('-----NEW CHUNK------'); //to divide the chunks of data
//   console.log(chunk);

//   writeStream.write('\nNEW CHUNK\n'); //to create a new line for each chunk
//   writeStream.write(chunk);
// });


/*----------Piping----------*/
//Basically the same as the above method but shorter
readStream.pipe(writeStream);

