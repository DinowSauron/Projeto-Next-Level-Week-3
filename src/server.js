//importar as blibiotecas...
const express = require('express');
const path = require('path');
const pages = require('./pages.js')
//iniciando o express...
const server = express();


server
.use(express.static("public"))
//template engine config
.set("views", path.join(__dirname, "views"))
.set("view engine", "hbs") 
//criando uma rota... na /
.get("/", pages.index)
.get("/orphanages", pages.orphanages)
.get("/orphanage", pages.orphanage)
.get("/create-orphanage", pages.createOrphanage)
 
//abrindo o servidor
server.listen(5500)