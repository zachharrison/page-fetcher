const fs = require('fs');
const request = require('request');
const args = process.argv.slice(2, 4);
const resultStr = `Downloaded and saved 4201 bytes to`;
const url = args[0]
const path = args[1]

const fetchAndWrite = (url, path) => {

  request(url, (err, res, body) => {
    if(err)console.log(err);

    fs.writeFile(path, body, err => {
      if(err) {
        console.log(err);
      } else {
        console.log(resultStr + path)
      }
     
    });
  });
};


fetchAndWrite(url, path);