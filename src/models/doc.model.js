const mysql = require('mysql');
const db = require('../db/conf');

//Crear conexión con bd mysql
connection = mysql.createConnection(db);

let docModel = {};//variable para almacenar e interactuar con la bd

//Listar Documentos
docModel.getDoc = (callback) =>{
    //Validacion de conexion
    if(connection){
        connection.query('SELECT * FROM Documento',
        (err, rows)=>{
            if(err){
                throw err;
            } else{
                callback(null, rows);
            }
        })
    }
};

//Crear Documentos 
docModel.insertDoc = (userData, callback) => {
    if(connection){
        connection.query('INSERT INTO Documento SET ?',userData,
        (error, result)=>{
            if(error){
                throw error;
            } else{
                callback(null,{
                    'InsertId' : result.insertId
                })
            }
        })
    }
};

module.exports = docModel;