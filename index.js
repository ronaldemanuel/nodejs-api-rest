const customExpress = require('./src/config/customExpress');
const conn = require('./src/database/connection');
const Tables = require('./src/database/tables');
const PORT = 3000;

conn.connect((err) => {
    if (err) {
        console.log('Connection fail: ' + err);
    } else {
        console.log('Connected database');
        
        Tables.init(conn);
        const app = customExpress();
        
        app.listen(PORT, () => console.log('Server running on PORT: ' + PORT));
    }
});
