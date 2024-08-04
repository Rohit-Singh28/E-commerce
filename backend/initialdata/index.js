const initData = require('./data.js');
const Product = require('../model/product.js');
const mongoose = require('mongoose')
require('dotenv').config();

main()
.then(() => {
    console.log("Connection successful");
})
.catch(err => console.log(err))

async function main(){
    await mongoose.connect(process.env.MONGOOSE_URL);
}

const initDb = async () => {
    await Product.deleteMany({});
    await Product.insertMany(initData.data);
} 

initDb();