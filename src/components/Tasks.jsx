import React, { useState } from 'react';
import '../styles/Tasks.css';

function Tasks() {
    const [notes, setNotes] = useState([]);

    const handleAddTask = () => {
        setNotes([...notes, { id: Date.now(), content: "" }]);
    };

    const handleDeleteTask = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    const handleBlur = (id, event) => {
        const updatedContent = event.target.textContent;
        setNotes(
            notes.map((note) =>
                note.id === id ? { ...note, content: updatedContent } : note
            )
        );
    };

    return (
        <div className="TasksContainer">
            <div id="TasksHeader">
                <p id="Title">Tasks</p>
                <button className="btn" onClick={handleAddTask}>
                    Add Task
                </button>
            </div>
            <div className="NotesContainer">
                {notes.map((note) => (
                    <div key={note.id} className="note">
                        <div
                            id="userInput"
                            contentEditable="true"
                            suppressContentEditableWarning={true}
                            onBlur={(e) => handleBlur(note.id, e)} // Update note content only on blur
                        >
                            {note.content}
                        </div>
                        <button
                            id="delete"
                            onClick={() => handleDeleteTask(note.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tasks;
