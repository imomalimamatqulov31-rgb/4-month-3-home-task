const readData = require("../readFile");



async function getCategories(){
    try {

        let categories = await readData("category.json");

       
        console.table(categories);
        
    } catch (error) {
        console.log(error);
        
    }

}
getCategories();