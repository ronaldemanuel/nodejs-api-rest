const customExpress = require('./config/customExpress');
const PORT = 3000;

const app = customExpress()


app.listen(PORT, () => console.log('Server running on PORT: ' + PORT));