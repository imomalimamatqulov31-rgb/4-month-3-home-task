const fs = require("fs/promises");
const path = require("path");

async function writeData(filename, data) {
    await fs.writeFile(path.join(process.cwd(), "db", filename), JSON.stringify(data, null, 4));
    console.log("muvaffaqiyatli qo'shildi");
    return true;
    
};


module.exports = writeData;