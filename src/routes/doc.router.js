const Document = require('../models/doc.model');

module.exports = function (app){
    //Rutas del servidor
    app.get('/doc', (req, res)=>{
        Document.getDoc((err, data) =>{
            res.status(200).json(data);
        })
    })
}




/*Dependencias
const express = require('express');
const router = express.Router();

//Rutas del servidor
router.get('/doc', (req, res)=>{
    res.json([]);
})

//Exportar Modulo
module.exports = router;*/



