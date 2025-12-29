
const readData = require("../readFile");
const writeData = require("../writeFile");

const [, , deleteCategoryId] = process.argv;

async function deleteCatigory() {
    try {
        if (!deleteCategoryId) throw new Error("ID yozish majburiy!");

        let Catigories = await readData("category.json");

        let checkProduct = Catigories.some((cat) => cat.id == deleteCategoryId);
        if (!checkProduct) throw new Error("Bunday mahsulot mavjud emas");

        Catigories = Catigories.filter((cat) => cat.id != deleteCategoryId);

        await writeData("category.json", Catigories);

        console.log("Mahsulot muvaffaqiyatli o'chirildi");

    } catch (error) {
        console.log(error);
    }
}

deleteCatigory();