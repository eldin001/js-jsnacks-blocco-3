// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

let conatainer = [];

let userNumber = parseInt(prompt('Inserisci un numero'));

while (conatainer < 50) {
    conatainer.push(userNumber);
    console.log(conatainer);
    userNumber = parseInt(prompt('Inserisci un numero'));
    
}




