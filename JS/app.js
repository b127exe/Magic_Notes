console.log('Hello World');
ShowNote();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function () {

    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    noteObj.push(myObj);
    console.log(noteObj);
    localStorage.setItem('notes', JSON.stringify(noteObj));
    addTitle.value = "";
    addTxt.value = "";
    ShowNote();

});

function ShowNote() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }

    let cards = "";

    noteObj.forEach(function (element, index) {
        cards += `
    <div class="grid-child">
    <div class="stock-note">
        <strong>${element.title}</strong>
        <p>${element.text}</p>
        <button id="${index}" onclick="RemoveNote(this.id)" class="btn Delete">Delete Note</button>
    </div>
</div>
    `;
    });

    let appendNotes = document.getElementById('NotesBox');
    if (noteObj.length != 0) {
        appendNotes.innerHTML = cards;
    }
    else {
        appendNotes.innerHTML = `Notes are empty!`
    }
}



function RemoveNote(index) {

    console.log(index)
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }
    noteObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(noteObj));
    ShowNote();
}


let SearchNote = document.getElementById('SearchNote');
SearchNote.addEventListener('input', function () {

    let InpVal = document.getElementById('SearchNote').value.toUpperCase();
    let grid_child = document.getElementsByClassName('grid-child');

    Array.from(grid_child).forEach(function (element) {

        let cardTitle = element.getElementsByTagName('strong')[0].innerHTML;

        if (cardTitle.includes(InpVal)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }

    })
})