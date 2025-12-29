const readData = require("../readFile");



async function countProducts() {
    try {
       
        let products = await readData("products.json");

     
        const totalProducts = products.length;

        console.log(`Jami products soni: ${totalProducts}`);
    } catch (error) {
        console.log(error);
    }
}

countProducts();
