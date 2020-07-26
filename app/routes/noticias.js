module.exports = (application) => {

    // Rota noticias
    application.get("/noticias", (req, res) => {
        application.app.controllers.noticias.noticias(application, req, res);
    });

    // Rota noticia
    application.get("/noticia", (req, res) => {
        application.app.controllers.noticias.noticia(application, req, res);
    });
};
