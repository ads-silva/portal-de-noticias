const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

// Express
const application = express();
application.set("view engine", "ejs");
application.set("views", "./app/views");

application.use(express.static("./app/public"));
application.use(bodyParser.urlencoded({extended: true}));
application.use(expressValidator());

consign()
    .include("app/routes")
    .then("config/dbConnection.js")
    .then("app/models")
    .then("app/controllers")
    .into(application);

module.exports = application;