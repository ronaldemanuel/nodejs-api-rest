class Tables {
    init(conn) {
        this.conn = conn;

        this.createCallsTable();
    }

    createCallsTable() {
        const sql = 'CREATE TABLE IF NOT EXISTS calls (id INT NOT NULL AUTO_INCREMENT, client VARCHAR(100) NOT NULL, pet VARCHAR(50), service VARCHAR(50) NOT NULL, status VARCHAR(20) NOT NULL, comments TEXT, PRIMARY KEY(id));';

        this.conn.query(sql, err => {
            if (err) {
                console.log('Table creation fail: ' + err);
            } else {
                console.log('Table created successfully');
            }
        });
    }
}

module.exports = new Tables;