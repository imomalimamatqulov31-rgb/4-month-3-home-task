const readData = require("../readFile");
const writeData = require("../writeFile");

const [, , deleteProductId] = process.argv;

async function deleteProduct() {
    try {
        if (!deleteProductId) throw new Error("ID yozish majburiy!");

        let products = await readData("products.json");

        let checkProduct = products.some((product) => product.id == deleteProductId);
        if (!checkProduct) throw new Error("Bunday mahsulot mavjud emas");

        products = products.filter((product) => product.id != deleteProductId);

        await writeData("products.json", products);

        console.log("Mahsulot muvaffaqiyatli o'chirildi");

    } catch (error) {
        console.log(error);
    }
}

deleteProduct();
