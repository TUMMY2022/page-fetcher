const request = require('request');
const fs = require('fs')

function fetcher (url, filePath) {

  request(url, function (error, response, body) {
     
    if (!error) {         
      
      console.log('error: ', error);
    } 
    
    fs.writeFile(filePath, body, error => {
      if (error) {
        console.error(error)
        return
      }
      console.log('Downloaded and saved ', getFilesizeInBytes(filePath), ' bytes to ', filePath)
    })
  })

};

function getFilesizeInBytes(fileName) {
  const stats = fs.statSync(fileName);
  const fileSizeInBytes = stats.size;
  return fileSizeInBytes;
}

fetcher('http://www.example.edu', 'C:\Users\Ayham\lighthouse\week_5\page-fetcher\index.html');