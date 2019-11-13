const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {

}

const addNotes = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(n => n.title == title);

    if (duplicateNotes.length === 0) {
        notes.push({ title: title, body: body });
        saveNotes(notes);
        console.log("New note added!")
    }
    else {
        console.log("Note title taken!")
    }
}

const saveNotes = (notes) => {
    const jsonData = JSON.stringify(notes);
    fs.writeFileSync('notes.json', jsonData);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        return JSON.parse(dataBuffer.toString());
    } catch (e) {
        return [];
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(n => n.title != title);

    if (notes.length > notesToKeep.length) {
        if (notesToKeep.length != 0) {
            saveNotes(notesToKeep);
        }
        console.log(chalk.green.inverse('Note Removed!'));
    }
    else {
        console.log(chalk.red.inverse('Note not found!'));
    }


}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote
}