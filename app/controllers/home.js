module.exports.index = (application, req, res) => {

    const noticiasDao = new application.app.models.NoticiasDao(application);

    noticiasDao.getUltimasNoticias(5, (erro, result) => {
        res.render("home/index", { noticias: result });
    });
};