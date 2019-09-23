const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers/helpers')

app.use(express.static(__dirname + '/public'))
//Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
 
const port = process.env.port || 3000;
 
app.get('/', function (req, res){
    res.render('home', {
        nombre: 'Ana'
    });
})

app.get('/about', function (req, res){
    res.render('about', {
        nombre: 'Ana'
    });
})
 
app.listen(port, () => {`Escuchando peticiones en el puerto ${ port }`} )