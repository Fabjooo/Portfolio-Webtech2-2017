function NoteApp() {
	this.buttonAddNote = document.getElementById('btnAddNote');
	this.notesContainer = document.querySelector(".notes");
	this.noteInput = document.querySelector("#txtAddNote");

	this.buttonAddNote.addEventListener("click", this.addNote.bind(this));
}

NoteApp.prototype.addNote = function() {
	let newNote = document.createElement("div");
	newNote.setAttribute("class", "card");
	newNote.innerHTML = "<p>" + this.noteInput.value + "</p>";

	let notelink = document.createElement("a");
	notelink.setAttribute("class", "card-remove");
	notelink.innerHTML = "remove";
	notelink.setAttribute("href", "#");
	notelink.addEventListener("click", this.removeNote);

	newNote.appendChild(notelink);

	this.notesContainer.appendChild(newNote);
	this.resetForm();
}

NoteApp.prototype.removeNote = function() {
	
    let noteToRemove = e.target.parentElement;
    this.notesContainer.removeChild(noteToRemove);
    
    e.preventDefault();
}

NoteApp.prototype.resetForm = function() {
	this.noteInput.value ="";
	this.noteInput.focus();
}

let myApp = new NoteApp();