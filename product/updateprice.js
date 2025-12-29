const readData = require("../readFile");
const writeData = require("../writeFile");

const [, , productId,  newPrice] = process.argv;

async function updatePrice() {
    try {
        if (!productId) throw new Error("product id kiriting");

        let products = await readData("products.json");
        let findProduct = products.find(product => product.id == productId);
        if (!findProduct) throw new Error("bunday product mavjud emas yoki siz yangilashdan oldin Id raqam kiritmadingiz!!!");

      
        if (newPrice)        findProduct.price = newPrice;
    
      

        
             if (isNaN(newPrice)) {
            throw new Error("Siz mahsulot narxini yangillamoqchi bo'lsangiz iltimos raqam kiriting!!!")};
             //Agar foydalanuvchi narxni yangilayman dep raqamni orniga so'z kiritmoqchi bo'lip izdevatsiya qilsa!!!!
         


        findProduct.updatedAt = new Date().toLocaleString();

        await writeData("products.json", products);

        console.log("price muvaffaqiyatli yangilandi, molodsi");

    } catch (error) {
        console.log(error);
    }
}

updatePrice();