const Categories = require("../models/Categories.model");

module.exports.categoriesController = {
    createCategories: async (req, res) => {
        await Categories.create({
            title: req.body.title
        }).then(() => {
            res.json("Категория добавлена");
        })
    },
    getCategories: async (req, res) => {
        const data = await Categories.find({});
        res.json(data);
    },
    deleteCategories: async (req, res) => {
        const data = await Categories.findByIdAndRemove(req.params.id)
        res.json("Категория удалена")
    },
    patchCategories: async (req, res) => {
        const data = await Categories.findByIdAndUpdate(req.params.id,{
            title: req.body.title
        }).then(() => {
            res.json("Категория изменена")
        })
    }
}