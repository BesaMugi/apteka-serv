const { Router } = require('express');
const { drugController } = require('../controllers/drug.controller');

const router = Router();

router.post('/admin/drug', drugController.createDrug);
router.get('/drug', drugController.getDrugs);//показать все
router.get('/drug/by/:categoriesId', drugController.getDrugById);//показать в категории
router.delete('/admon/drug/:id', drugController.deleteDrug);
router.patch('/admin/drug/:id', drugController.patchDrug);
router.get('/drug/:drugId', drugController.getDrug)//показать лекарство


module.exports = router;
