const app = require('./app')
require('./connection')

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

async function init(){
    await app.listen(port,host);
    console.log('Servidor funcionando')
}

init();