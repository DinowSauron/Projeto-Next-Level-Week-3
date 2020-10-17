module.exports = {
    saveOrphanage(db, orphanage){
        return db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            openingHours,
            openOnWeekends,
            names,
            texts,
            datas
        ) 
        VALUES 
        (
            "${orphanage.lat}",
            "${orphanage.lng}",
            "${orphanage.name}",
            "${orphanage.about}",
            "${orphanage.whatsapp}",
            "${orphanage.images}",
            "${orphanage.instructions}",
            "${orphanage.openingHours}",
            "${orphanage.openOnWeekends}",
            "${orphanage.names}",
            "${orphanage.texts}",
            "${orphanage.datas}"
        );
    `)
    },

    async saveComment(db, {id, name, text, data}){
        const sqlTextUp = `UPDATE orphanages SET texts = ? WHERE id = ?`;
        const sqlNameUp = `UPDATE orphanages SET names = ? WHERE id = ?`;
        const sqlDataUp = `UPDATE orphanages SET datas = ? WHERE id = ?`;
        const orphanage = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`);

        const encodeSeparator = "|%20SPACE%20|"

        const saveText = text + encodeSeparator + orphanage[0].texts;
        const saveName = name + encodeSeparator + orphanage[0].names;
        const saveData = data + encodeSeparator + orphanage[0].datas;

        db.run(sqlTextUp,[saveText, id])
        db.run(sqlNameUp,[saveName, id])
        db.run(sqlDataUp,[saveData, id])
        return db;
    }
}