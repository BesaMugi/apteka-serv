const { Router } = require('express');
const { clientController } = require('../controllers/client.controller');

const router = Router();

router.post('/client', clientController.createClient);
router.get('/client', clientController.getClient);
router.delete('/client', clientController.deleteClient);
router.patch('/client', clientController.patchClinet);
router.patch('/client/cash/:id', clientController.patchClientCash); //пополнять свой кошелек
router.patch('/cart/drug/by/:id', clientController.patchDrugInCart)//добавить лекарство в корзину
router.patch('/cart/clean/:id', clientController.patchCleanCart);//чистить корзину
router.patch('/cart/drug/:id', clientController.deleteDrugInCart)//убрать лекарство из корзины
router.patch('/client/:id/buy', clientController.buyDrugs);//покупка

module.exports = router;