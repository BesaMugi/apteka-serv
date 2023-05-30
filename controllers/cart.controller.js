//очистить (все лек)
//добавить (по одному) {рецепт юй}
//убрать одно лек
//сумма при покупке {ахча дуй, очищать корзину после покупки}

const Cart = require('../models/Cart.model');

module.exports.cartController = {
    createCart: async (req, res) => {
        await Cart.create({
            drugs: req.params.drugs,
            clientId: req.params.clientId,
        }).then(() => {
            res.json('Корзина создана')
        })
    },
    
}