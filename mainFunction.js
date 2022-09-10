const listMajors = require('./gsheetsshow.js');
const writeMajors = require('./gsheetswrite.js');
var techextract = require('./techextract.js');
var checktech = require('./checktech.js');

async function mainfunction(file,auth,index) {
        // var urlPro = file;
        techextract(file)
        .then((res)=>(console.log(res)))

        // var techlist = await checktech(tech);
        
        // await writeMajors(auth, 'B'+(index+2), 'RAW', techlist);     
        // index++;
}
module.exports = mainfunction;