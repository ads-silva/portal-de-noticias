module.exports.noticias = (application, req, res) => {
    const noticiasDao = new application.app.models.NoticiasDao(application);

    noticiasDao.getNoticias((erro, result) => {
        res.render('noticias/noticias', { noticias: result });
    });
};
module.exports.noticia = (application, req, res) => {
    const noticiasDao = new application.app.models.NoticiasDao(application);

    let query = req.query;

    noticiasDao.getNoticia(query.id, (erro, result) => {
        res.render('noticias/noticia', { noticia: result });
    });
};