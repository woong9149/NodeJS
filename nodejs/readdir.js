const testFolder = './data'; //그냥 data와 같음
const fs = require('fs');

fs.readdir(testFolder,function(err,filelist){
  console.log(filelist);
})
