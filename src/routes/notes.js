const express = require('express');
const Note = require('../models/Notes');
const router = express.Router();

//GET api/notes?userId=123 -> list (optionally filter by userId)=> READ
router.get('/', async (req, res) => {
    const { userId } = req.query;
    const filter = userId ? { userId } : {};
    const notes = await Note.find(filter).sort({ createdAt: -1 });
    res.json(notes);
});

//POST /api/notes -> create (optionally attach userId) => CREATE
router.post('/', async (req, res) => {
    const { userId, title, content } = req.body;

    if (!title) return res.status(400).json({ message: 'Give us the title my guy...' });

    const note = await Note.create({ userId, title, content });
    res.status(201).json(note);
});

//PUT /api/notes/:id -> update by id => UPDATE
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const updated = await Note.findByIdAndUpdate(
        id,
        { $set: { title, content } },
        { new: true }
    );

    if (!updated) return res.status(404).json({ message: 'Waah there was nothing there...' });
    res.json(updated);
});

//DELETE /api/notes/:id -> delete by id => DELETE
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const result = await Note.deleteOne({ _id: id });
    if (result.deleteOne == 0) {
        return res.status(404).json({ message: 'There was nothing here for you to delete...' });
    }
    res.json({ ok: true });
});


module.exports = router;