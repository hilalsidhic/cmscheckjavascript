const axios = require("axios");

async function techextract(urlPro){

    var data = '';
    var uri = urlPro;
    var testcases = ["Shopify", "WooCommerce", "BigCommerce", "Magento"]
    var config = {
    method: 'get',
    url: `https://api.wappalyzer.com/v2/lookup/?urls=${uri}`,
    headers: { 
        'x-api-key': 'KMvWLlomuq8AsROzcq0XO4AIoP26jsXU5xA43XI4'
    },
    data : data
    };

    return axios(config)
    .then(async function (response) {
        //  console.log(JSON.stringify(response.data));
    if(await response.data[0].errors){
        return "NOT_WORKING";
        console.log('Error');               //make it enter as NOT_WORKING
    }
    else{    
        var flag = 0;           
        var technologies = await response.data[0].technologies;
        for (const element of technologies) {
            for (const testcase of testcases) {
                if(await element.name === testcase){
                    flag = 1;                                               //make it enter as Any of the test cases
                    console.log(testcase);
                    return testcase;
                } 
            }
        }
    //     technologies.forEach(element => {
    //         testcases.forEach(testcase => {
                 
    //     // console.log(JSON.stringify(element.name));
    //     });
    // });
    if(flag == 0){
        return "OTHERS";
        console.log("OTHERS");                                             //make it enter as NOT_WORKING
    }
        // console.log("OK")
    }
    })
    .catch(function (error) {
        // console.log(error);
    });
}
module.exports = techextract;