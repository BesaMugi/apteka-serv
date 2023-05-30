const { Router } = require('express');
const { clientController } = require('../controllers/client.controller');

const router = Router();

router.post('/client', clientController.createClient);
router.get('/client', clientController.getClient);
router.delete('/client', clientController.deleteClient);
router.patch('/client', clientController.patchClinet);
router.patch('/client/cash/:id', clientController.patchClientCash);

module.exports = router;