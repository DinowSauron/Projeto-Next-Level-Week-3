const dataBase = require('./database/db')
const save = require('./database/saveOrphanage')

module.exports = {

    index(req, res) {
        return res.render("index");
    },

    async orphanage(req, res) {
        const id = req.query.id;

        try{
            const db = await dataBase;
            const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`);
            const orphanage = results[0];

            orphanage.id = id;
            orphanage.images = orphanage.images.split(",");
            
            orphanage.names = orphanage.names.split("|%20SPACE%20|");
            orphanage.texts = orphanage.texts.split("|%20SPACE%20|");
            orphanage.datas = orphanage.datas.split("|%20SPACE%20|");
            orphanage.data = { comments : [ ] };
            for(var i = 0; i < orphanage.names.length; ++i){
                if(orphanage.names[i].length > 1)
                orphanage.data.comments.push({
                name: orphanage.names[i],
                text: orphanage.texts[i],
                data: orphanage.datas[i]});
            }
            // console.log(orphanage.data)

            orphanage.firstImage = orphanage.images[0];
            orphanage.images.splice(0,1);
            orphanage.openOnWeekends = orphanage.openOnWeekends == "1" ? true : false; 

            return res.render("orphanage", {orphanage});
        }catch(error){
            console.log(error);
            return res.send("Erro no banco de dados...");
        }
        
    }, 
    
    async orphanages(req, res) {
        try{
            const db = await dataBase;
            const orphanages = await db.all("SELECT * FROM orphanages");
            return res.render("orphanages", {orphanages});
        }catch(error){
            console.log(error);
            return res.send("Erro no banco de dados!");
        }
    },

    createOrphanage(req, res) {
        return res.render("create-orphanage");
    },

    async saveOrphanage(req, res) {
        const fields = req.body;

        if(Object.values(fields).includes("")){
            return res.render("Todos os campos devem ser preenchidos!");
        }

        try{
            const db = await dataBase;
            await save.saveOrphanage(db,
            {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                openingHours: fields.openingHours,
                openOnWeekends: fields.openOnWeekends,
                names: " ", 
                texts: " ",
                datas: " "
            });
            //redirecionamento
            return res.redirect("/orphanages")
        }catch(error){
            console.log(error);
            return res.send("Erro ao salvar um novo orfanato!");
        }
    },

    async saveComment(req, res) {
        // console.log(req.body);
        const fields = req.body;

        if(Object.values(fields).includes("")){
            return res.render("Todos os campos devem ser preenchidos!");
        }


        clock = new Date();
        try{
            const result = {
                id: fields.id,
                name: fields.name,
                text: fields.text,
                data: `${clock.getDate()}/${clock.getMonth() + 1}/${clock.getFullYear()}`
            }

            const db = await dataBase;
            await save.saveComment(db, result)
            return res.redirect(`/orphanage?id=${fields.id}`)
        }catch(error){
            console.log(error);
            return res.send("Erro ao enviar o comentário.")
        }
    }
}



    // return response.send("oi do back-end!");
    // request.query retorna objetos depois do ?
    // return response.sendFile(path.join(__dirname, "views", "index.html"));