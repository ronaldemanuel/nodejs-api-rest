const connection = require('../database/connection')

class Atendimento {
    adiciona(atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?'

        connection.query(sql, atendimento, (error, results) => {
            if (error) {
                console.log(error)
            } else {
                console.log(results)
            }
        })
    }
}

module.exports = new Atendimento