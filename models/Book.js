const express               = require('express');
const mongoose              = require('mongoose');

const bookSchema            = mongoose.Schema ({
    author: {
       type: String ,
       required: true
    },
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String
    },
    description: {
        type:String
    },
    date: {
        type: Date,
        default: Date.now()
    }
})


const Book = (module.exports  = mongoose.model('Book', bookSchema));


//function to get Books
module.exports.getBooks = function(callback, limit) {
    Book.find(callback)
    .limit(limit);
}

//FUnction get a single Book
module.exports.getBookById = function(id, callback){
    Book.findById(id, callback) 
    
}
