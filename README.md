# probable-octo-happiness
A small MCV framework by Aco. Built with 
[![Javascript](https://img.shields.io/badge/JavaScript-informational?style=flat&logo=javascript&logoColor=F1EB2B&color=34342E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-informational?style=flat&logo=node.js&logoColor=68a063&color=34342E)](https://github.com/nodejs/node)
[![Express.js](https://img.shields.io/badge/Express.js-informational?style=flat&logo=express&logoColor=white&color=34342E)](https://github.com/expressjs/express)

## Table of contents
- [Folder structure](#folder-structure)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#basic-usage)  
  - [Connecting to database](#connecting-to-your-database)  
  - [Creating a new route](#creating-a-new-route)  
  - [Creating a new controller](#creating-a-new-controller)  
  - [Creating a new model](#creating-a-new-model)  
  - [Creating a new view](#creating-a-new-view)  
    - [Views with partials](#views-with-partials)  
    
## Folder structure
```bash

📦mvc
 ┣ 📂application
 ┃ ┣ 📂config
 ┃ ┃  ┣ 📜database.js
 ┃ ┃  ┗ 📜routes.js
 ┃ ┣ 📂controllers
 ┃ ┃  ┗📜main.js
 ┃ ┣ 📂models
 ┃ ┃  ┗📜connection.js
 ┃ ┗ 📂views
 ┃   ┗ 📂main
 ┃      ┣ 📂partials
 ┃      ┃  ┣ 📜header.ejs
 ┃      ┃  ┗ 📜footer.ejs
 ┃      ┗ 📜index.ejs
 ┣ 📂assets
 ┃ ┣ 📂scripts
 ┃ ┣ 📂css
 ┃ ┗ 📂svg
 ┣ 📜app.js
 ┣ 📜.gitignore
 ┣ 📜LICENSE
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md

```

## Installation
1. Install [nodejs](https://nodejs.org/en/download/).
2. Install nodemon.
```bash
npm install -g nodemon
```
3. Clone the repository.
4. After cloning the repository, type in your terminal.
```bash
cd probable-octo-happiness
npm install
```
This will install the following.
  - express
  - body-parser
  - ejs
  - mysql


## Basic Usage
To start the server, type in your terminal.
```bash
nodemon app.js
```
### Connecting to your database.
Navigate to `application\config\database.js` and put your database info. 
  ``` js
    const DatabaseConnectionInfo = {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    connectionLimit: 50,
    database: "jsmysql",
    };
  ```
 ### Creating a new route.
 - Navigate to `application\config\routes.js`
 - Import your controller
 ``` js
 const MyController    = require("../controllers/MyController");
 ```
 - Add the new route
 ``` js
 Routes.get("/myNewRoute", function(req,res){
    return new MyController(req,res).myFunction();
});
 ```
 ### Creating a new controller
 - Navigate to `application\controllers`
 - Your controller and class name must be the same. Example: `MyController.js`
 - `MyController.js` class should look like:
 ``` js
class MyController{
    #req;
    #res;

    constructor(req,res){
        this.#req = req;
        this.#res = res;
    }


    myFunction = async function(){
        // your code here
    }
}

module.exports = MyController;
 ```
  ### Creating a new model
  - Navigate to `application\models`
  - Your model and class name must be the same. Example: `MyModel.js`
  - Import database connection and mysql.
  ``` js
  const  DatabaseConnection   = require("../config/database");
  const Mysql                 = require("mysql");
  ```
  - `MyModel.js` class should look like:
 ``` js
const DatabaseConnection   = require("../config/database");
const Mysql                = require("mysql");

class MyModel{

    async myModelFunction() {
        // your code here
    }
}

module.exports = MyModel;
 ```
### Creating a new view
- Navigate to `application\views`
- You may directly create a view inside the `views` folder, but I recommend to create a folder with the name of the controller then create the view inside the folder. See the [folder structure](#folder-structure). Example:` MyController/MyView.ejs`
- `MyView.ejs` should look like:
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
  #### Views with partials
  - `MyView.ejs` should look like:
  ``` html
  <%- include("partials/header.ejs") %>
<main>
    <h1>Hello Universe!</h1>
</main>
<%- include("partials/footer.ejs") %>

  ```
  - inside `partials\header.ejs`
  ``` html
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <title><%= title%></title>
</head>
<body>
  ```
  
  - inside `partials\footer.ejs`
  ``` html
  </body>
</html>
  ```
Features are to be added in the future.
  
