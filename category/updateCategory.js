
const readData = require("../readFile");
const writeData = require("../writeFile");

const [, , categoryId,  newName] = process.argv;

async function updateCategory() {
    try {
        if (!categoryId) throw new Error("category id kiriting");

        let catigories = await readData("category.json");
        let findCatigory = catigories.find(c => c.id == categoryId);
        if (!findCatigory) throw new Error("bunday product mavjud emas yoki siz yangilashdan oldin Id raqam kiritmadingiz!!!");
             
            //  if (!isNaN(newName)) {
            // throw new Error("Siz mahsulot  yangillamoqchi bo'lsangiz nom sifatida iltimos raqam kirita olmaysiz!!!")};
            //  //Agar foydalanuvchi nomni yani name ni yangilayman dep so'zni orniga raqam kiritmoqchi bo'lip izdevatsiya qilsa!!!!!

      
        if (newName)        findCatigory.category_name = newName;
    
     

        findCatigory.updatedAt = new Date().toLocaleString();

        await writeData("category.json", catigories);

        console.log("category muvaffaqiyatli yangilandi, molodsi!!!");

    } catch (error) {
        console.log(error);
    }
}

updateCategory();