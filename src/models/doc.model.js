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

//Actualizar documentos
docModel.updateDoc = (userData , callback) => {
    if(connection){
        const SQL = `
        UPDATE Documento SET
        doc_date = ${connection.escape(userData.doc_date)},
        doc_folio = ${connection.escape(userData.doc_folio)},
        doc_name_client = ${connection.escape(userData.doc_name_client)},
        doc_total = ${connection.escape(userData.doc_total)}
        WHERE doc_id = ${connection.escape(userData.doc_id)}
    `;
        connection.query(SQL, (err, result)=>{
            if(err){
                throw err;
            } else{
                callback(null, {
                    msg: 'actualizacion lista'
                })
            }
        })
    };
}



module.exports = docModel;