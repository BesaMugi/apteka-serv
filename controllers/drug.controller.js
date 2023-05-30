const Drug = require("../models/Drugs.model");

module.exports.drugController = {
    createDrug: async (req, res) => {
        await Drug.create({
            name: req.body.name,
            price: req.body.price,
            categoriesId: req.body.categoriesId,
            recipe: req.body.recipe,
        }).then(() => {
            res.json("Лекарство добавлено")
        })
    },
    getDrugs: async (req, res) => {
        const data = await Drug.find({})
        res.json(data)
    },
    deleteDrug: async (req, res) => {
        const data = await Drug.findByIdAndRemove(req.params.id)
        res.json(data)
    },
    patchDrug: async (req, res) => {
        const data = await Drug.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            price: req.body.price,
            categoriesId: req.body.categoriesId,
            recipe: req.body.recipe,
        }).then(() => {
            res.json("Лекарство изменено")
        })
    },
    getDrugById: async (req, res) => {
        const data = await Drug.find({categoriesId: req.params.categoriesId})
        res.json(data)
    },
    getDrug: async (req, res) => {
        try {
            const data = await Drug.findById(req.params.drugId)
        res.json(data)
        }
        catch (e) {
            return res.json(e)
        }
    }
}