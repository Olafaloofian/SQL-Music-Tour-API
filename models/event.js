'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    event_id: {
      DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      DataTypes.STRING,
      allowNull: false
    },
    date: {
      DataTypes.DATE,
      allowNull: false
    },
    start_time: {
      DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'event',
    timestamps: false
  });
  return Event;
};