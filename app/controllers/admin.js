module.exports.formulario_inclusao_noticia = (application, req, res) => {
    res.render('admin/form_add_noticia', {validacao : false, noticia : {} });
};

module.exports.noticia_salvar = (application, req, res) => {
    const noticia = req.body;

    req.assert("titulo","Título é obrigatório!").notEmpty();
    req.assert("resumo","Resumo é obrigatório!").notEmpty();
    req.assert("resumo","Resumo deve conter entre 10 e 100 caracteres!").len(10,100);
    req.assert("autor","Autor é obrigatório!").notEmpty();
    req.assert("data_noticia","Data da Notícia é obrigatória!").notEmpty().isDate({format :"YYYY-MM-DD"});
    req.assert("noticia","Notícia é obrigatório!").notEmpty();

    let erros = req.validationErrors();

    if(erros){
        res.render('admin/form_add_noticia', {validacao : erros, noticia : noticia});
        return;
    }

    const noticiasDao = new application.app.models.NoticiasDao(application);

    noticiasDao.salvarNoticia(noticia, (erro, result) => {
        res.redirect('/noticias');
    });
};