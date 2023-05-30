const Client = require("../models/Client.model");

module.exports.clientController = {
    createClient: async (req, res) => {
        await Client.create({
            name: req.body.name,
            cash: req.body.cash,
            recipe: req.body.recipe,
            drugs: req.params.drugs
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
            drugs: req.params.drugs
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
    },
    patchCleanCart: async (req, res) => {
        const data = await Client.findByIdAndUpdate(req.params.id, {cart: []} )
        res.json("Корзина очищена")
    },
    patchDrugInCart: async (req, res) => {
        const drug = await Drug.findById(req.body.drugId);
        const client = await Client.findById(req.params.id)

        if(drug.recipe === true && client.recipe === false)
        return res.json("Нужен рецепт");

        await Client.findByIdAndUpdate(req.params.id, {
            $push: {cart: req.body.drugId}
        })
        
        res.json("лекарство добавлено в корзину")
    },
    deleteDrugInCart: async (req, res) => {
        await Client.findByIdAndUpdate(req.params.id, {
            $pull: {cart: req.body.drugId}
        })

        res.json("лекарство удалено из корзины");
    },
    buyDrugs: async (req, res) => {
        const { cash, cart } = await Client.findById(req.body.userId).populate("cart")
    
        const price = cart.reduce((acc, sum) => acc + sum.price, 0);
        if(price > wallet) {
            return res.jsonn("не хватает ахч");
        }

        await Client.findByIdAndUpdate(req.body.userId, {
            cash: cash - price,
            cart: [],
        })
        res.json("спасибо за покупку")
    }

}