const express = require('express');
const { engine } = require('express-handlebars');
//const myconnection = require('express-myconnection');
const mysql = require('mysql');
const session = require('express-session');
const bodyParser = require('body-parser');

const connection = require('../src/config/databaseCon');



const app = express();
app.set('port',4000);

app.set('views', __dirname + '/views');
app.engine('.hbs', engine({
    extname: '.hbs',
}));
app.set('view engine','hbs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.listen(app.get('port'), ()=> {
    connection.connect(function(err){
        if (err) throw err;
        console.log('Database connected');
    })
});

console.log('listening on port',app.get('port'));

  

app.get('/', (req,res)=>{
    res.render('home');
});
//clave db
//xRMnVLP690UfMGPA
//link db
//mongodb+srv://alperalt:<password>@cluster0.vyaymhz.mongodb.net/?retryWrites=true&w=majority
