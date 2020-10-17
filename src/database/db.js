
const dataBase = require('sqlite-async');

/*ao retornar o valor podemos reutilizar o then se necessitar de algum retorno, utilizando.then(function(db){..}) e esse db seria o valor retornado do ultimo .then! */

function execute(db){
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            openingHours TEXT,
            openOnWeekends TEXT,
            names TEXT,
            texts TEXT,
            datas TEXT
        );
    `);
}

/*cria o banco de dados e resulta num db*/
module.exports = dataBase.open(__dirname + "/database.sqlite").then(execute); 
