const moment = require('moment');
const conn = require('../database/connection');

class Calls {
    store(requestCall, res) {
        const created_at = moment().format('YYYY-MM-DD HH:MM:SS');
        const date = moment(requestCall.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');

        const call = {...requestCall, created_at, date};

        const errors = this.storeValidation(call);
        if (errors.length) {
            res.status(400).json(errors);
        } else {
            const sql = 'INSERT INTO calls SET ?;';
    
            conn.query(sql, call, (err, results) => {
                if (err) {
                    res.status(400).json(err);
                } else {
                    res.status(201).json(results);
                }
            });
        }
    }

    storeValidation(call) {
        const validClient = call.client.length >= 4;
        const validDate = moment().isSameOrAfter(call.created_at);

        const validation = [
            {
                name: 'client',
                valid: validClient,
                message: 'O cliente deve ter pelo menos 4 caracteres',
            },
            {
                name: 'date',
                valid: validDate,
                message: 'A data deve ser maior ou igual que a data atual',
            },
        ];

        return validation.filter(field => !field.valid);
    }
}

module.exports = new Calls;