//Import
const router = require('express').Router()
const home = require('./../controllers')

//Routes, todas las get son para mostrar las vistas.
router.get('/', home)

//Export
module.exports = router