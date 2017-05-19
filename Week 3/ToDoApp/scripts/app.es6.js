class NotesApp {
    constructor() {
        this.buttonAddNote = document.getElementById('btnAddNote');
        this.notesContainer = document.querySelector(".notes");
        this.noteInput = document.querySelector("#txtAddNote");
        this.newNote = "";
        this.buttonAddNote.addEventListener("click", this.addNote.bind(this));

        //getNotesFromCacheOrStorage();
    }

    addNote(event) {
        let newNote = document.createElement("div");
        newNote.setAttribute("class", "card");
        newNote.innerHTML = `<p> ${this.noteInput.value} </p>`;
        let notelink = document.createElement("a");
        //link to remove note
        notelink.setAttribute("class", "card-remove");
        notelink.innerHTML = "remove";
        notelink.setAttribute("href", "#");
        notelink.addEventListener("click", this.removeNote);

        newNote.appendChild(notelink);

        this.notesContainer.appendChild(newNote);
        //this.saveNotes();
        this.resetNotesForm();
        
        //event.preventDefault();
        console.log("clicked to add note " + event);
    }

    /*getNotesFromCacheOrStorage(){
        if (localStorage.getItem('Note') != null){
            this.LoadNotes();
        }else {
            console.log("ready to add a note");
        }
    }

    saveNotes(){
        console.log(this.noteInput.value);
        localStorage.setItem('Note', this.noteInput.value);
        console.log("storing Note in cache");
    }

    LoadNotes(){
        this.notes = localStorage.getItem('Note');
        console.log(this.noteInput);
    }*/

    removeNote(e){
         console.log("removing note");
 
         let elementToDelete = e.target.parentElement;
          console.log(elementToDelete);
        let notescontainer1 = document.querySelector(".notes");
        
        setTimeout(function(){            
            (notescontainer1.removeChild(elementToDelete)).fadeOut;
        },1000);
        
         console.log("clicked to remove note " + event);
         event.preventDefault();
     }

    resetNotesForm() {
        console.log("resetting the notes form");
        
        this.noteInput.value ="";
        this.noteInput.focus();
    }

}

let myApp = new NotesApp();