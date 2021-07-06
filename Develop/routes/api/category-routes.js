const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
    // find all categories
    const result = await Category.findAll();
    const jsonToSend = result;
    res.json(jsonToSend);
    // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const result = await Category.findByPk(id);
    res.json(result)
});

router.post('/', async (req, res) => {
    const json = await Category.create({category_name: req.body.category_name});
    res.json(json);
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
});

module.exports = router;
