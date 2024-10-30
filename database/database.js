const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('address_book', 'address_book', '123456789', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,

    define: {
        freezeTableName: true,
        timestamps: false,
    }
});

module.exports = sequelize
