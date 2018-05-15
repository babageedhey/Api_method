const express               = require('express');
const port                  = process.env.PORT || 3000;
const bodyParser            = require('body-parser');
const mongoose              = require('mongoose');
const exphbs                = require('express-handlebars');
const path                  = require ('path');
const Book                  = require('./models/Book');
const app                   = express();



//Body Parser use
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, 'public')));

//Connect to MongoDB
mongoose.connect('mongodb://localhost/scores')
    .then(()=>{
        console.log('MongoDB COnnected');
    })
    .catch(err =>{
        console.log(err);
    })


//Get the Index Page
app.get('/', (req, res)=>{
    res.render('home');
})

//The Api page for books
app.get('/api/books', (req, res)=>{
     Book.getBooks(function(err, books){
         if (err){
             throw err;
         }
         res.json(books);
     })
})

//THe Api for a single book
app.get('/api/books/:_id', (req, res)=>{
    Book.getBookById(req.params._id, function(err, book){
        if(err){
            throw err;
        }
        res.json (book);
    })
})


//Start Server
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
});