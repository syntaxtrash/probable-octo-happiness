const Express       = require("express");
const Routes        = require("./application/config/routes");
const Path          = require("path");
const App           = Express();
const BodyParser    = require('body-parser');
App.use(BodyParser.urlencoded({ extended: true }));
App.use(Express.static(Path.join(__dirname, "./assets")));
App.set('views', Path.join(__dirname, './application/views'));
App.set('view engine', 'ejs');



App.use("/", Routes);


App.listen(8000, function() {
    console.log("Success! Listening on port 8000");
});