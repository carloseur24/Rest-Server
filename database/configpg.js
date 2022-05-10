const {
    Sequelize
} = require('sequelize');

const test = async () => {
    const sequelize = new Sequelize('testdb', 'postgres', '28456273', {
        host: 'localhost',
        port: process.env.PGPORT,
        dialect: 'postgres'
    })
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

    } catch (error) {
        throw new Error('Unable to connect to the database:', error);
    }
}

module.exports = {test};