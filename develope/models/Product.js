const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');


class Product extends Model {}


Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    product_name: {
    allowNull: false,
      type: DataTypes.STRING,
    },    
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(20, 2),
      validate: { isDecimal: true }, 
    },
    stock: {
      defaultValue: 10,
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { isNumeric: true },          
    }, 

    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;