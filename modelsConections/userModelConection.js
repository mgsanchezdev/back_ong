const sequelize = require('../config/index');
const Sequelize = require('sequelize');
const modelUser = require('../models/userModel/user')
const Role = require('../modelsConections/roleModelConection')

const User = modelUser(sequelize, Sequelize);

User.belongsTo(Role, {foreignKey: 'roleId'})
Role.hasMany(User)

module.exports = User;