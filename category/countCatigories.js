const readData = require("../readFile");



async function countCatigories() {
    try {
       
        let catigories = await readData("Category.json");

     
        const totalcatigories = catigories.length;

        console.log(`Jami catigorylar soni: ${totalcatigories}`);
    } catch (error) {
        console.log(error);
    }
}

countCatigories();