const express = require('express')
const serverconfig = require('./config/serverConfig')
const connectDB = require('./config/dbConfig')
const userRouter = require('./routes/userRoute')
const cartRouter = require('./routes/cartRoute')
const authRouter = require('./routes/authRoute')
const cookieParser = require('cookie-parser')
const productRouter = require('./routes/productRoute')
const orderRouter = require('./routes/orderRoutes')
const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended: true}))
app.use('/users' , userRouter)
app.use("/carts" , cartRouter)
app.use('/auth' , authRouter)
app.use('/products' , productRouter)
app.use('/orders' , orderRouter)



app.listen(serverconfig.PORT , async ()=>{
 await connectDB()    
 console.log(`SERVER GOT STARTED ON PORT NO. ${serverconfig.PORT}`);
})
app.get('/ping' , (req , res)=>{
    return res.status(200).json({message : 'pong'})
})