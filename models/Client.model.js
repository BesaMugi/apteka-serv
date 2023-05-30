const mongoose = require("mongoose");

const ClientSchema = mongoose.Schema({
    name: String,
    cash: Number,
    recipe: {
        type: Boolean,
        default: false,
    },
    cart: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Drug",
    }],
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;