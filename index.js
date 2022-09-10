var express = require('express');   
var app = express();
var axios = require('axios');
var authorize = require('./gsheets.js');
const {google} = require('googleapis');
const listMajors = require('./gsheetsshow.js');
const writeMajors = require('./gsheetswrite.js');
var techextract = require('./techextract.js');
var checktech = require('./checktech.js');
const mainfunction = require('./mainFunction.js');
const { forEach } = require('p-iteration');


app.get('/',async function (req, res) {
    const auth = await authorize();
    var websitelist = await listMajors(auth);
    // var websitelist = [""]
    var index = 0;
    let techlist = "";
    await writeMajors(auth, 'B1', 'RAW', "Category"); 
    // async function loop for each website
   for (const file of websitelist) {
      // await mainfunction(file,auth,index);
      let urlPro = file;
      techlist =  await techextract(urlPro)
      console.log(techlist);
      // var techlist = await checktech(tech);
      if(techlist==undefined){
        techlist = "NOT_WORKING";
      }
      await writeMajors(auth, 'B'+(index+2), 'RAW', techlist); 
      index++;
   }
    
    res.send('Hello World!');
}); 



app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
}); 
