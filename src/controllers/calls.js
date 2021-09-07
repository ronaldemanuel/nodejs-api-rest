const Calls = require('../models/calls');

module.exports = app => {
    //  INDEX
    app.get('/atendimentos', (req, res) => {
        Calls.index(res);
    });

    // SHOW
    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Calls.show(id, res);
    });

    // STORE
    app.post('/atendimentos', (req, res) => {
        const call = req.body;
        Calls.store(call ,res);
    });
}