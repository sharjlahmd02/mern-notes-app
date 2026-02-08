import NoteModel from "../models/notesModel.js";

//get all notes
const getAllNotes = async (req, res) => {
  try {
    const notes = await NoteModel.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create note
const createNote = async (req, res) => {
  try {
    const newNote = new NoteModel(req.body);
    await newNote.save();

    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update note
const updateNote = async (req, res) => {
  try {
    const updatedNote = await NoteModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete note
const deleteNote = async (req, res) => {
  try {
    await NoteModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllNotes, createNote, updateNote, deleteNote };
