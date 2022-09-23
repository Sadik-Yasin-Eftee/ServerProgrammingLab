const mongoose = require("mongoose")
const bookSchema = mongoose.bookSchema({
    name:{
        required:true,
        type:String
    },
    author:{
        required : true,
        type : String
    },
    genre : String
})
module.exports = mongoose.model ("books",bookSchema)