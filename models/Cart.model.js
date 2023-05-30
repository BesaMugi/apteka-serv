const mongoose = require("mongoose");

const CartSchema = mongoose.Schema({
    drugs: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Drug",
    }],
    clientId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Client"
    },
    
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;