module.exports = (application) => {
    application.get("/formulario_inclusao_noticia", (req, res) => {
        application.app.controllers.admin.formulario_inclusao_noticia(application, req, res);
    });

    application.post("/noticias/salvar", (req, res) => {
        application.app.controllers.admin.noticia_salvar(application, req, res);
    });
};