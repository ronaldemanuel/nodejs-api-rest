const moment = require('moment')
const connection = require('../database/connection')

class Atendimento {
    adiciona(atendimento) {
        const data_criacao = new Date()
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = {...atendimento, data_criacao, data}
        
        const sql = 'INSERT INTO Atendimentos SET ?'

        connection.query(sql, atendimentoDatado, (error, results) => {
            if (error) {
                console.log(error)
            } else {
                console.log(results)
            }
        })
    }
}

module.exports = new Atendimento