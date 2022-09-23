require ("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const router = require("routes")
const mongoose = require("mongoose")

database_url = "mongodb+srv://sadik:sadik@cluster0.fepxejp.mongodb.net/test" || process.env.DATABASE_URL

mongoose.connect(database_url).then(()=>{
    console.log("Database Connected!")
}).catch((error)=>{
    console.log(error)
})

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json)

app.use(router)

app.set("view engine" , "ejs")
app.set("views", __dirname, + "views")

app.listen(port,() =>{
    console.log("Runnig on port ${port}")
});