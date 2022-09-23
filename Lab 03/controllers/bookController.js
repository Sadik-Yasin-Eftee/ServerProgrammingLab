const books = require("../models/books")

const addBook = (req,res)=>{
    res.render("Books added")
}

const postBook = (req,res)=>{
    const data = new bookModel({
        name:req.body.name
        author:req.body.author
        genre:req.body.genre
    })
    data.save().then(()=>{
        console.log("Books added!")
    }).catch((error)=>{console.log(error)}).finally(()=>{
        res.redirect("/book-list")
    })
}

const gotBookList = (req,res)=>{
    res.render("Booklist")
}

const findResult = await books.find()

module.exports = {addBook,gotBookList,postBook}