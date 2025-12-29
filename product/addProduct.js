const readData = require("../readFile");
const writeData = require("../writeFile");

const [, , newProduct, categoryId, productPrice] = process.argv;

async function addProduct() {
    try {


        if(!newProduct) throw new Error("product name kiriting");
        if(!categoryId) throw new Error("category id kiriting");

        let categories = await readData("category.json");
        let checkCategory = categories.some((c) => c.id == categoryId);
        if(!checkCategory) throw new Error("bunday category mavjud emas");
        if(!productPrice) throw new Error("product price kiritish majburiy");



        let products = await readData("products.json");
        let newProductData = {
            id: products.length ? products.at(-1).id + 1 : 1,
            product_name: newProduct,
            category_id: categoryId,
            price: productPrice,
            createdAt: new Date().toLocaleString()
        }

        products.push(newProductData);
        await writeData("products.json", products);
        
    } catch (error) {
        console.log(error);
    }
    
}
addProduct();
