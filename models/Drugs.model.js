const mongoose = require("mongoose");

const DrugSchema = mongoose.Schema({
    name: String,
    price: Number,
    categoriesId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Categories"
    },
    recipe: {
        type: Boolean,
        default: false,
    },
})

const Drug = mongoose.model("Drug", DrugSchema);

module.exports = Drug; 