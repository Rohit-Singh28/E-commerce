const express = require('express');
const app = express();
const cors = require("cors");
require('dotenv').config();
const connectdb = require('./config/db.js')
const signupRouter = require("./route/user.js")
const loginRouter = require("./route/user.js");
const userDeatilRouter = require("./route/user.js")
const newProductRouter =  require("./route/product.js");
const orderRouter =  require("./route/order.js");

const path = require("path");
const cookieParser = require('cookie-parser')


const port = 4040 || process.env.PORT ;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// app.use(methodOverride('_method'));

app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))

app.get("/",(req,res) => {
    res.send("home")
    
})


app.use('/api',signupRouter)
app.use('/api',loginRouter)
app.use('/api',userDeatilRouter)
app.use('/api',newProductRouter)
app.use('/api',orderRouter)


app.use((err, req, res, next) => {
    const { status = 500, message = "Error Occured.TryAgain!" } = err;
    res.status(status).json({
        error:true,
        success:false,
        message:message
    });
})

connectdb().then(() => {
    app.listen((port),() => {
        
        console.log(`Server is listening at port ${port}`);
    })

});

