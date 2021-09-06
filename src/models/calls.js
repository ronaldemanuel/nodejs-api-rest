const moment = require('moment');
const conn = require('../database/connection');

class Calls {
    store(requestCall) {
        const created_at = moment().format('YYYY-MM-DD HH:MM:SS');
        const date = moment(requestCall.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');

        console.log(created_at);
        const call = {...requestCall, created_at, date};
        
        const sql = 'INSERT INTO calls SET ?;';

        conn.query(sql, call, (err, res) => {
            if (err) {
                console.log('Failed to enter call: ' + err);
            } else {
                console.log(res);
            }
        });
    }
}

module.exports = new Calls;