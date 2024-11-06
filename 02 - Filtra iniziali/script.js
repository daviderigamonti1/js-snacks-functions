/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function printInitials(names, letter) {
    //Array in cui inserirò i nomi filtrati
    let initialNames = [];
    //Ciclo su tutti i nomi
    for(let i = 0; i < names.length; i++) {
        //Condizione per confrontare la prima lettera dei nomi con la lettera data dall'utente
        if (names[i][0].toUpperCase() === letter.toUpperCase()) {
            initialNames.push(names[i]);
        }
    }
    return initialNames;
}

// Invoca la funzione qui e stampa il risultato in console
//Chiedo all'utente di inserire una lettera
const letter = prompt("Inserisci una lettera per filtrare i nomi");
//Condizione per verificare che inserisca soltanto una lettera
if (letter.length === 1) {
    const initialNames = printInitials(names, letter);
    console.log(initialNames);
} else {
    console.log("Per favore, inserisci solo una lettera.");
}



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]