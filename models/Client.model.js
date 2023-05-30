const mongoose = require("mongoose");

const ClientSchema = mongoose.Schema({
    name: String,
    cash: Number,
    recipe: {
        type: Boolean,
        default: false,
    },
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;