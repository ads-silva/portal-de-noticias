const application = require("./config/server");

application.listen(3000, () => {
    console.log("Servidor Rodando com Express");
});