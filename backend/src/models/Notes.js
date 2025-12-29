const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema(
    {
       userId: { type: String, index: true },//optional (frontend passes it)
       title: { type: String, required: true, trim: true },
       content: { type: String, default:"" },
    }, 

    { timestamps: true }
);

notesSchema.index({ userId: 1, createdAt: -1 });

const Note = mongoose.model('Note', notesSchema);

module.exports = Note;