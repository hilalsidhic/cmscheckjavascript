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

app.get('/website',async function (req, res) {
  await techextract("https://www.boat-lifestyle.com/");
// var data = '';
// var uri = 'http://www.puma.com';
// var config = {
//   method: 'get',
//   url: `https://api.wappalyzer.com/v2/lookup/?urls=${uri}`,
//   headers: { 
//     'x-api-key': 'OVPkZRp7oX20ihsoezygq9Afv9PGarNIFA5rEdYb'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
//   if(response.data[0].errors){
//     res.send('Error');
//   }
//   else{
//     var technologies = response.data[0].technologies;
//     technologies.forEach(element => {
//       console.log(JSON.stringify(element.name));
//     });
//     res.send("OK")
//   }
// })
// .catch(function (error) {
//   console.log(error);
// });
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
}); 
