const Connection = require("../models/connection");
class Main{
    #req;
    #res;

    constructor(req,res){
        this.#req = req;
        this.#res = res;
    }


    index = async function(){
        let connection = new Connection();
        await connection.ping()
        .then(msg => console.log("Connected to the database. \n", msg))
        .catch(err => console.log("Disconnected from the database \n", err));
        let title = {title: "Main"};
        this.#res.render("main/index.ejs", {page_title: title});
    }
}

module.exports = Main;