import Note from "../models/Note.js";

export const getAllNotes = async (_, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 }); // -1 will sort in desc. order (newest first)
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getSingleNote = async (req, res) => {
    try {
        const singleNote = await Note.findById(req.params.id);
        if (!singleNote) return res.status(404).json({ message: "Not Found" });
        res.status(200).json(singleNote);
    } catch (error) {
        console.error("Error in getSingleNote Controller", error);
        res.status(500).json({ message: "Internal server Error" });
    }
};

export const createNotes = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = new Note({ title, content });
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createNotes controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const updateNotes = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            {
                title,
                content,
            },
            {
                new: true,
            },
        );
        if (!updatedNote) return res.status(404).json({ message: "Not Found" });
        res.status(200).json({ message: "Updated Successfully." });
    } catch (error) {
        console.error("Error in UpdateNote controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const deleteNotes = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) return res.status(404).json({ message: "Not Found" });
        res.status(200).json({ message: "Deleted successfully." });
    } catch (error) {
        console.error("Error in deleteNote Controller.", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
