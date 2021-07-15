// Import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


Category.hasMany(Product, {
  onDelete: 'CASCADE',
  foreignKey: 'category_id',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',  
})

Product.belongsToMany (Tag, {through: ProductTag});

Tag.belongsToMany (Product, {through: ProductTag});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};