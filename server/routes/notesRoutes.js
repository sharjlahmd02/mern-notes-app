import express from 'express';
import { createNote, getAllNotes, updateNote, deleteNote } from '../controllers/notesController.js';

const router = express.Router();

// Get all notes
router.get('/', getAllNotes);   
router.post('/create', createNote); 
router.post('/update/:id', updateNote);
router.delete('/delete/:id', deleteNote); 

export default router;
