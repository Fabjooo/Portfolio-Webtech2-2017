function talk ( permission ){
    var talking;
    if(permission){ //is eigenlijke "permission != false"
        let talking = "yes";  //let steekt talking in deze kleine blok terwijl var het in de hele function zet
        //vervang waar je kunt var door let !
        console.log( talking );
    }
    else{
        console.log( talking );
    }
}

//CONSTANTS zijn waarden die niet worden veranderd, maar je kan wel via een push een extra constante toevoegen (uitzondering)
//new array syntax komt in loadNotes
console.log("<H1> Hi, my name is, </H1> " + firstname + " " + lastname);
console.log(`Hi, my name is, ${firstname} ${lastname}`); //BETER!!




talk( false );