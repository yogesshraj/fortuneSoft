
'use strict';

const schema = require(__dirname + '/../models/MovieTable').Schema;
const tableName = require(__dirname + '/../models/MovieTable').TableName;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, schema);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName);
  }
};
