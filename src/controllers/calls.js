const Calls = require('../models/calls');

module.exports = app => {
    //  INDEX
    app.get('/atendimentos', (req, res) => {
        Calls.index(res);
    });

    // STORE
    app.post('/atendimentos', (req, res) => {
        const call = req.body;
        Calls.store(call ,res);
    });
}