const { Router } = require('express');
const { categoriesController } = require('../controllers/categories.controller');

const router = Router();

router.post('/admin/categories', categoriesController.createCategories);
router.get('/categories', categoriesController.getCategories);
router.delete('/admin/categories/:id', categoriesController.deleteCategories);
router.patch('/admin/categories/:id', categoriesController.patchCategories);

module.exports = router;