//changed line 5 of package.json from '"main":"server.js"' to '"main":"app.js"'

const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');

//added the below line to import body-parser as 'bodyParser'
const bodyParser = require('body-parser');


const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homeroute');
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 

app.use(cors());//added this line

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , 'public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 


app.get('/',function(req,res){

    res.render('index',{});
    
});


//changed the port to listen to, from '5000' to '3000' (not required, for convenience)
//added another runtime environment port to listen to, for use while hosting on heroku
const PORT  = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server Ready on ${PORT}`);
});