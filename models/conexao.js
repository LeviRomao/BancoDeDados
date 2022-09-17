const { Sequelize, sequelize } = require('./db');
const db = require('./db');

const user_login = db.sequelize.define('user_login',
{
    name:{
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});

//user_login.sync({ force: true });

//sequelize.authenticate().then(()=> console.log('Tabela criada com sucessp.'))
//.catch((err) => console.log(`${err}`));


module.exports = user_login