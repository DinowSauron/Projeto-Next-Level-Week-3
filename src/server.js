//importar as blibiotecas...
const express = require('express');
const path = require('path');
const pages = require('./pages.js')
//iniciando o express...
const server = express();


server
//utilizar body na requisição! Extended
.use(express.urlencoded({extended: true}))
//utilizar arquivos estaticos
.use(express.static("public"))
//template engine config
.set("views", path.join(__dirname, "views"))
.set("view engine", "hbs") 

//criando uma rota... na /
.get("/", pages.index)
.get("/orphanages", pages.orphanages)
.get("/orphanage", pages.orphanage)
.get("/create-orphanage", pages.createOrphanage)
.post("/saveOrphanage", pages.saveOrphanage)
.post("/saveComment", pages.saveComment)

//abrindo o servidor
server.listen(5500)

// utilize $ npm start para iniciar o servidor, e o link é este: http://127.0.0.1:5500/