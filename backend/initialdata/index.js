const initData = require('./data.js');
const Product = require('../model/product.js');
const mongoose = require('mongoose')
require('dotenv').config();

main()
.then(() => {
    console.log("Connection successful");
})
.catch(err => console.log(err));

async function main (){
    await mongoose.connect("mongodb+srv://rohitkamaldevsingh:C5bzBiW0jGhP1XoR@cluster0.zqy1svn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}

const initDb = async () => {
    // console.log(initData.data);
    
    await Product.deleteMany({});
    const res = await Product.insertMany(initData.data);
    console.log(res);
    
} 

initDb();