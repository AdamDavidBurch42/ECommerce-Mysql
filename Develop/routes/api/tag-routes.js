const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
    // find all tags
    res.json(await Tag.findAll());
    // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
    // find a single tag by its `id`
    res.json(await Tag.findByPk(req.params.id));
    // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
    // create a new tag
    const json = await Tag.create({ tag_name: req.body.tag_name });
    res.json(json);
});

router.put('/:id', (req, res) => {
    // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
    // delete on tag by its `id` value
});

module.exports = router;
