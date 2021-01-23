const Database = require('sqlite-async')

function execute(db) {
    //Criando as tabelas do banco de dadods
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXt,
            bio TEXT
        );
                
        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject TEXT,
            cost TEXT,
            proffy_id INTEGER
        );
        
        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `)
}

// O module.exports passa a ser retornar a função Dabase.open.then(execute) - toda vez que o arquivo for requerido, este será o retorno
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)