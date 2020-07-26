const mysql = require("mysql");

const conMysql = ()=>{
    console.log("Conexão criada.");
    return mysql.createConnection({
        "host": "localhost",
        "user": "root",
        "password": "",
        "database": "portal_noticias"
    });
};

module.exports = () =>{
    console.log("Auto load carregou dbConnection");
    return conMysql;
};
