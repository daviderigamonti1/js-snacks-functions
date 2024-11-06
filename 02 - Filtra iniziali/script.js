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




//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]