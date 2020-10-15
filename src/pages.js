const orphanages = require('./database/fakedata.js')

module.exports = {

    index(req, res) {
        return res.render("index");
    },

    orphanage(req, res) {
        return res.render("orphanage");
    }, 
    
    orphanages(req, res) {

        return res.render("orphanages", {orphanages});
    },

    createOrphanage(req, res) {
        return res.render("create-orphanage");
    }
}



    // return response.send("oi do back-end!");
    // request.query retorna objetos depois do ?
    // return response.sendFile(path.join(__dirname, "views", "index.html"));