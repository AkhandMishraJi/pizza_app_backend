const express = require('express')
const serverconfig = require('./config/serverConfig.js')
const connectDB = require('./config/dbConfig')
const userRouter = require('./routes/userRoute.js')
const cartRouter = require('./routes/cartRoute.js')
const authRouter = require('./routes/authRoute.js')
const cookieParser = require('cookie-parser')
const { isLoggedIn } = require('./validation/authValidator.js')
const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended: true}))
app.use('/users' , userRouter)
app.use("/cart" , cartRouter)
app.use('/auth' , authRouter)

app.get('/ping' , isLoggedIn , (req , res)=>{
    console.log(req.body);
    console.log(req.cookies);
    return res.json({message : 'pong'})
})

app.listen(serverconfig.PORT , async ()=>{
 await connectDB()    
 console.log(`SERVER GOT STARTED ON PORT NO. ${serverconfig.PORT}`);
  
})