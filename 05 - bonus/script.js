/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function hello(name) {
    //Inizializzo le variabili che mi serviranno per fare il saluto
    let currentTime = new Date().getHours();
    let salutation;
    //Condizione per verificare l'ora del giorno e di conseguenza modificare il saluto
    if (currentTime < 13) {
        salutation = "Buongiorno";
    } else if (currentTime < 17) {
        salutation = "Buon pomeriggio";
    } else {
        salutation = "Buonasera";
    }
    return `${salutation} ${name}`;
}

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.