/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
function hello(name) {
    let salutation = (`Hello ${name}`);
    return salutation;
}

// Invoca la funzione qui e stampa il risultato in console
const result = hello(name);
console.log(result);


//Risultato atteso se si passa 'Mario': // ciao Mario