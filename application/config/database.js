const Mysql = require("mysql");

const DatabaseConnectionInfo = {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    connectionLimit: 50,
    database: "jsmysql",
};

const DatabaseConnection = Mysql.createPool(DatabaseConnectionInfo);


DatabaseConnection.executeQuery = async (query) => {
    return new Promise((resolve, reject) => {
        DatabaseConnection.query(query, function (error, result) {
            let response_data = { status: false, result: null, error: null };

            if (error) {
                response_data.error = error;
                reject(response_data);
            } else {
                response_data.status = true;
                response_data.result = result;
                resolve(response_data);
            }
        });
    });
};

module.exports = DatabaseConnection;
