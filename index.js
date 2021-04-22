const customExpress = require('./config/customExpress')
const connection = require('./database/connection')
const Tables = require('./database/tables')

connection.connect((erro) => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('Conectado com mysql')
        
        Tables.init(connection)
        const app = customExpress()

        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
})



