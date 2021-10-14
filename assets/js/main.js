//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

const emailAccess = ['mattia@gmail.com', 'giulio@gmail.com', 'alessio@gmail.com', 'paolo@gmail.com', 'simone@gmail.com']
 

const askemail = prompt("qual'è la tua email?")

for (let i = 0; i < emailAccess.length; i++) {
    const element = emailAccess[i];
    if (emailAccess.includes(askemail)) {
        //console.log("l'email è presente, puoi iniziare il gioco");
        document.getElementById('accesso').innerHTML = ("l'email è presente, puoi iniziare il gioco");
    }
    else {
        console.log("l'email non è presente, riprova");
        document.getElementById('accesso').innerHTML = ("l'email non è presente, riprova");
    }
}
    






//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.Stabilire il vincitore, in base a chi fa il punteggio più alto.


 const number = Math.floor(Math.random() * 6) + 1;
 console.log('questo è il tuo numero:',number);
 

 const number1 = Math.floor(Math.random() * 6) + 1;
 console.log('questo è il numero del computer:',number1);
 

 if(number > number1) {
     console.log('Hai battuto il computer, il tuo punteggio è più alto');
     
 } 
 else if(number1 > number) {
     console.log('Mi dispiace, ha vinto il computer');
     
 } 
 else if(number == number1) {
     console.log('Avete pareggiato, il vostro numero è uguale');
     
 }
