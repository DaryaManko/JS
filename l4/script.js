let notes = JSON.parse(localStorage.getItem('notes')) || [];

document.addEventListener('DOMContentLoaded', () => {
    renderNotes();
});

document.getElementById('add-note').addEventListener('click', (e) => {
    e.preventDefault();
    addNote();
});

function addNote() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const color = document.getElementById('color').value;

    notes.push({
        title,
        description,
        date: Date.now(),
        color,
        id: Math.max(...notes.map(o => o.id + 1)),
        pinned: false
    });

    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes();
}

function removeNote(id) {
    notes = notes.filter(note => note.id!== id);
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes();
}

function pinNote(id) {
    const note = notes.find(note => note.id === id);
    note.pinned =!note.pinned;
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes();
}

function renderNotes() {
    const pinnedNotes = document.getElementById('pinned-notes');
    const otherNotes = document.getElementById('other-notes');

    pinnedNotes.innerHTML = '';
    otherNotes.innerHTML = '';

    notes.forEach(note => {
        const noteHtml = renderNote(note);
        if (note.pinned) {
            pinnedNotes.innerHTML += noteHtml;
        } else {
            otherNotes.innerHTML += noteHtml;
        }
    });
}

function renderNote(note) {
    return `
        <div class="note" style="background-color:${note.color}">
            <h3>${note.title}</h3>
            <p>${note.description}</p>
            <p>${new Date(note.date).toISOString()}</p>
            <div>
                <input type="button" value="X" onclick="removeNote(${note.id})">
                <input type="button" value="Pin" onclick="pinNote(${note.id})">
            </div>
        </div>
    `;
}