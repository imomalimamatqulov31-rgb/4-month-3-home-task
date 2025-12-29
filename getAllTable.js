const readData = require("./readFile");


const [, , type] = process.argv;

async function getAllinfo(){
    try {

        let categories = await readData("category.json", );
        let products = await readData("products.json", );

        if(type == "1"){
            console.table(categories);
        }else if(type == "2"){
            console.table(products);
        }else {
            console.table(categories);
            console.table(products);
        }

        
    } catch (error) {
        console.log(error);
        
    }

}
getAllinfo();

//1 bosilsa categories
//2 bosilsa products