//Imports
const express = require('express')
const app = express()

require('dotenv').config()
const path = require('path') //para no usar DIRNAMES
//Middlewares
//Static files. Archivos HTML, CSS, JS, IMAGENES. Los que son app.use son middlewares
app.use(express.static(path.join(__dirname, 'public')))  //para conectar css, etc.

//View
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','hbs')

//To use req.body
app.use(express.urlencoded({extended: true}))
//Rutas
//Home
app.use('/', require('./routes')) //automaticamente llamara el archivo index.js de la carpeta de routes, siempre y cuando se llame index.js


//Exportar 
module.exports = app