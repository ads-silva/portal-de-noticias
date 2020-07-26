
class NoticiasDao {

    constructor(application) {
        this._connection = application.config.dbConnection();
    }

    getNoticia(id, callback) {
        this._connection.query("SELECT * FROM noticias WHERE id = " + id, callback);
    }

    getNoticias(callback) {
        this._connection.query("SELECT * FROM noticias order by data_criacao desc", callback);
    }

    salvarNoticia(noticia, callback) {
        this._connection.query("INSERT INTO noticias SET ?", noticia, callback);
    }

    getUltimasNoticias(n, callback) {
        this._connection.query("SELECT * FROM noticias order by data_criacao desc limit "+ n, callback);
    }
}
module.exports = () => {
    return NoticiasDao;
};