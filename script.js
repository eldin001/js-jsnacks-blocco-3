// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const numbers = [];

let somma = 0;

while (somma < 50) {
    const newNumber = parseInt(prompt('Inserisci un numero;'));
    if (!isNaN(newNumber)) {
        somma += newNumber;
        numbers.push(newNumber);
    }
}





