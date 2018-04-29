const Document = require('../models/doc.model');

module.exports = function (app){
    //Rutas del servidor
    //Listar Documentos
    app.get('/doc', (req, res)=>{
        Document.getDoc((err, data) =>{
            res.status(200).json(data);
        })
    })

    //Crear Documento
    app.post('/doc',(req, res)=> {
        //console.log(req.body);
        const userData = {
            doc_id: null,
            doc_date: req.body.doc_date,
            doc_folio: req.body.doc_folio,
            doc_name_client: req.body.doc_name_client,
            doc_total: req.body.doc_total 
        }

        Document.insertDoc(userData, (error, data )=>{
            if(data && data.insertId){
                res.json({
                    success:true,
                    msg: 'Documento Creado',
                    data: data
                })
            } else {
                res.status(500).json({
                    success:false,
                    msg:error
                })
            }
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



