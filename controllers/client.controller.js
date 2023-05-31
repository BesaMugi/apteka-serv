const Client = require("../models/Client.model");
const Drug = require("../models/Drugs.model")

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
    patchDrugInCart: async (req, res) => {
        const client = await Client.findById(req.params.id);
        const drug = await Drug.findById(req.body.drugId);
        
        if (drug.recipe == true && client.recipe == false) {
            return res.json("Нужен рецепт");
        }
        
        await Client.findByIdAndUpdate(req.params.id, {
            $push: {cart: req.body.drugId}
        })
        
        res.json("лекарство добавлено в корзину")
    },
    patchCleanCart: async (req, res) => {
        const data = await Client.findByIdAndUpdate(req.params.id, {cart: []} )
        res.json("Корзина очищена")
    },
    deleteDrugInCart: async (req, res) => {
        await Client.findByIdAndUpdate(req.params.id, {
            $pull: {cart: req.body.drugId}
        })

        res.json("лекарство удалено из корзины");
    },
    buyDrugs: async (req, res) => {
        const { cash, cart } = await Client.findById(req.body.userId).populate("cart");
    
        const price = await cart.reduce((acc, sum) => acc + sum.price, 0);
       
        if(price > cash) {
            return res.jsonn("не хватает ахч");
        }

        await Client.findByIdAndUpdate(req.body.userId, {
            cash: cash - price,
            cart: [],
        })
        res.json("спасибо за покупку")
    }

}