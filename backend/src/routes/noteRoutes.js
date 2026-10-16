import express from "express";
import {
    createNotes,
    deleteNotes,
    getAllNotes,
    getSingleNote,
    updateNotes,
} from "../controller/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getSingleNote);
router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);

export default router;
