const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {

}

const addNotes = (title, body) => {
    const notes = loadNotes();

    //const duplicateNotes = notes.filter(n => n.title == title);
    const duplicateNote = notes.find(n => n.title == title);

    //if (duplicateNotes.length === 0) {
    if (!duplicateNote) {
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

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blueBright.inverse("Your Notes"));
    if (notes.length > 0) {
        notes.forEach(note => {
            console.log(chalk.magentaBright.inverse(note.title));
        });
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const noteResult = notes.find(note => note.title === title);
    //console.log(noteResult);
    if (noteResult) {
        console.log(chalk.magenta.inverse(noteResult.title))
        console.log(noteResult.body);
    }
    else {
        console.log(chalk.redBright.inverse("Note not found!!!"));
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}