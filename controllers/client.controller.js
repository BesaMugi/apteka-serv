const Client = require("../models/Client.model");

module.exports.clientController = {
    createClient: async (req, res) => {
        await Client.create({
            name: req.body.name,
            cash: req.body.cash,
            recipe: req.body.recipe,
        }).then(() => {
            res.json("Пользователь создан")
        })
    },
    getClient: async (req, res) => {
        const data = await Client.find({})
        res.json(data);
    },
    deleteClient: async (req, res) => {
        const data = await Client.findByIdAndRemove(req.params.id);
        res.json("Пользователь удален");
    },
    patchClinet: async (req, res) => {
        const data = await Client.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            cash: req.body.cash,
            recipe: req.body.recipe,
        }).then(() => {
            res.json("Пользователь изменен")
        })
    },
    patchClientCash: async (req, res) => {
        const data = await Client.findByIdAndUpdate(req.params.id, {
            cash: req.body.cash
        }).then(() => {
            res.json("Читы на деньги")
        })
    }
}