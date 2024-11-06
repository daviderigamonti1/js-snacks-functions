/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function printName(names) {
    //Inizializzo un array vuoto in cui andrò poi ad inserire le iniziali dei nomi
    let initialNames = [];
    //Ciclo for per prendere tutti i nomi uno ad uno
    for (let i = 0; i < names.length; i++) {
        initialNames.push(names[i][0].toUpperCase());
    }
    return initialNames;
}

// Invoca la funzione qui e stampa il risultato in console


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]