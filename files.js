const fs = require('fs'); //fs is built into node and stands for file system

//reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//   //asynchronous function
//   if (err) {
//     console.log(err); //first log error in case there is one
//   }
//   //console.log(data); //logs a buffer, which is just a package of data
//   console.log(data.toString()); //if we want to se the actual text on the document
// });


//writing f

// fs.writeFile('./docs/blog1.txt', 'soy un cacahuate', () => {
//   console.log('file was written'); //replaces what was written on the file with a new string or text
// });

// fs.writeFile('./docs/blog2.txt', 'todos somos cacahuates', () => {
//   console.log('file was written'); //creates a new file that contains a new text
// });

//directories
if (!fs.existsSync('./assets')) { //if 'assets' directory DOES NOT exist, then run the mkdir code
  fs.mkdir('./assets', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('folder created'); //create a new directory/folder
});
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder deleted'); //delete the folder if it already exists
  })
}

//This code can go on and on for ever because when it doesn't detect the folder it will create it
//and if it detects the folder it will delete it por los siglos de los siglos amen


//deleting f

if (fs.existsSync('./docs/alv.txt')) { //check if the file exists, and if it does, run the code; 
                                      //if it doesn't, don't run it
  fs.unlink('./docs/alv.txt', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('file deleted')
  })
}
