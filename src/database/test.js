const dataBase = require('./db');

const saveOrphanage = require('./saveOrphanage');

dataBase.then(async (db) => {
    //ainda é a mesma tabela anterior, o mesmo db!
    const orphanage = {
        lat: "-22.8645510",
        lng: "-43.455330",
        name: "Lar do amor",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "(21) 0005-0550",
        images: [
            "https://images.unsplash.com/photo-1602636403821-e43d50123cb7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1595009503377-e3be116106b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1597791366640-e91489aaf430?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1595967783875-c371f35d8049?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        openingHours: "Horário de visitas Das 18 até 9h",
        openOnWeekends: "1",
        name: "",
        texts: ""
    }
    await saveOrphanage(db, orphanage);
    
    //consultar a tabela em todos os registos ( * = todos )
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

    //consulta pelo id
    const orphanageDetails = await db.all(`SELECT * FROM orphanages WHERE id = "2"`);
    console.log(orphanageDetails);

    //deletar dado da tabela
    // console.log(await db.run("DELETE FROM orphanages")); // deleta tudo!
    console.log(await db.run("DELETE FROM orphanages WHERE id = 3")); //deleta o orfanato 3 e não deixa outros orfanatos terem esse id!
    
})