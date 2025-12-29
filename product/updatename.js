const readData = require("../readFile");
const writeData = require("../writeFile");

const [, , productId,  newName] = process.argv;

async function updateNmae() {
    try {
        if (!productId) throw new Error("product id kiriting");

        let products = await readData("products.json");
        let findProduct = products.find(product => product.id == productId);
        if (!findProduct) throw new Error("bunday product mavjud emas yoki siz yangilashdan oldin Id raqam kiritmadingiz!!!");
             
             if (!isNaN(newName)) {
            throw new Error("Siz mahsulot  yangillamoqchi bo'lsangiz nom sifatida iltimos raqam kirita olmaysiz!!!")};
             //Agar foydalanuvchi nomni yani name ni yangilayman dep so'zni orniga raqam kiritmoqchi bo'lip izdevatsiya qilsa!!!!!

      
        if (newName)        findProduct.product_name = newName;;
    
     

        findProduct.updatedAt = new Date().toLocaleString();

        await writeData("products.json", products);

        console.log("name muvaffaqiyatli yangilandi, molodsi!!!");

    } catch (error) {
        console.log(error);
    }
}

updateNmae();