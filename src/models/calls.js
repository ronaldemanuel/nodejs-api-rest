const moment = require('moment');
const conn = require('../database/connection');

class Calls {
    store(requestCall, res) {
        const created_at = moment().format('YYYY-MM-DD HH:MM:SS');
        const date = moment(requestCall.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');

        console.log(created_at);
        const call = {...requestCall, created_at, date};
        
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

module.exports = new Calls;