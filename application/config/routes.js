const { Router }    = require("express");
const Controller    = require("../controllers/Main");
const Routes        = Router();


Routes.get("/", function(req,res){
    return new Controller(req,res).index();
});

module.exports = Routes;