const customExpress = require('./config/customExpress')
const conexao = require('./database/conexao')

conexao.connect((erro) => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('Conectado com mysql')
        
        const app = customExpress()

        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
})



