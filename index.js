const customExpress = require('./src/config/customExpress');
const conn = require('./src/database/connection');
const PORT = 3000;

conn.connect((err) => {
    if (err) {
        console.log('Connection fail: ' + err);
    } else {
        console.log('Connected database');
        
        const app = customExpress();
        
        app.listen(PORT, () => console.log('Server running on PORT: ' + PORT));
    }
});
