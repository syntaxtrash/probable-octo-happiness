const  DatabaseConnection   = require("../config/database");
const Mysql                 = require("mysql");

class Connection{

    async ping() {
        let response_data = { status: false, result: null, error: null };
        let ping_query  = Mysql.format(`SELECT 1 + 1 AS result`);
        response_data = await DatabaseConnection.executeQuery(ping_query)

        return response_data; 
    }
}

module.exports = Connection;