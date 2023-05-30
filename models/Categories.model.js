const mongoose = require("mongoose");

const CategoriesSchema = mongoose.Schema({
    title: String,
});

const Categories = mongoose.model("Categories", CategoriesSchema);

module.exports = Categories;