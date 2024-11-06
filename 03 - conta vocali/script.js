/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

//Inizializzo le variabili
const word = 'javascript';
const vowels = "aeiou";

// Dichiara la funzione qui.
function printVowels(word) {
    //Inizializzo la variabile per contare il numero di vocali
    let vowelCount = 0;
    //Ciclo per tutte le lettere di word
    for (let i = 0; i < word.length; i++) {
        //Condizione per contare le vocali
        if (vowels.includes(word[i])) {
            vowelCount ++;
        }
    }
    return vowelCount;
}

// Invoca la funzione qui e stampa il risultato in console
const result = printVowels(word);
console.log(result);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)