'use strict';
const {
  Model
} = require('sequelize');

const { Enums } = require('../utils/common');
const { SUCCESS, PENDING, FAILED } = Enums.EMAIL_STATUS;
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init({
    subject: { 
      type: DataTypes.STRING,
      allowNull: false 
    },
    content: { 
      type: DataTypes.STRING,
      allowNull: false 
    },
    recepientEmail: { 
      type: DataTypes.STRING,
      allowNull: false 
    },
    status: { 
      type: DataTypes.ENUM,
      values: [SUCCESS, PENDING, FAILED],
      defaultValue: PENDING,
      allowNull: false 
    }
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};