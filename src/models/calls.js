const conn = require('../database/connection');

class Calls {
    store(call) {
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