const readData = require("../readFile");


const[, , categoryId] = process.argv

async function getProducts() {
    try {
        let products = await readData("products.json"); 

        let categories = await readData("category.json");
        let checkCategory = categories.some((c) => c.id == categoryId);
        if(!checkCategory) throw new Error("bunday category mavjud emas");
     products = products.filter((product) => product.category_id == categoryId);

     products.map((product) => {
        delete product.category_id
        return{
            product
        }
     })
        console.table(products);
    } catch (error) {
        console.log(error);
    }
}

getProducts();