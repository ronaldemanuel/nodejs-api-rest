const moment = require('moment')
const connection = require('../database/connection')

class Atendimento {
    adiciona(atendimento, res) {
        const data_criacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        
        const dataValida = moment(data).isSameOrAfter(data_criacao)
        const clienteValido = atendimento.cliente.length >= 5
        
        const validacoes = [
            {
                nome: 'data',
                valido: dataValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if (existemErros) {
            res.json(erros)
        } else {
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
}

module.exports = new Atendimento