async function checktech(response){
    var testcases = ["Shopify", "Woocommerce", "Bigcommerce", "Magento"]
    if(response.data[0].errors){
        return "NOT_WORKING";
        // console.log('Error');               //make it enter as NOT_WORKING
    }
    else{    
        var flag = 0;           
        var technologies = response.data[0].technologies;
        technologies.forEach(element => {
            testcases.forEach(testcase => {
                if(element.name == testcase){
                    flag = 1;                                               //make it enter as Any of the test cases
                    console.log(testcase);
                    return testcase;
                }  
        // console.log(JSON.stringify(element.name));
        });
    });
    if(flag == 0){
        return "OTHERS";
        // console.log("OTHERS");                                             //make it enter as NOT_WORKING
    }
        // console.log("OK")
    }
}
module.exports = checktech;