const readData = require("../readFile");


const writeData = require("../writeFile");




const [, , newCategory] = process.argv;

async function addCategory() {
    try {


        if(!newCategory) throw new Error("category name kiriting");

        let categories = await readData("category.json");
        let newCtegoryData = {
            id: categories.length ? categories.at(-1).id + 1 : 1,
            category_name: newCategory,
            createdAt: new Date().toLocaleString(),
           
        }

        categories.push(newCtegoryData);
        await writeData("category.json", categories);
        
    } catch (error) {
        console.log(error);
    }
    
}
addCategory();
