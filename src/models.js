const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user',{ //створюю модель юзера для БД
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // іd створюється кожного разу автоматично і інший
  email: {type: DataTypes.STRING, unique: true, }, // емейл не повинен повторюватись
  password: {type: DataTypes.STRING},
})

module.exports = {User};