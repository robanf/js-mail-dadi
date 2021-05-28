var numpc= Math.floor(Math.random()*6 + 1) ;

console.log(numpc);

document.getElementById("numeropc").innerHTML=numpc;

var numutente= Math.floor(Math.random()*6 + 1) ;

console.log(numutente);

document.getElementById("numeroutente").innerHTML=numutente;

var risultato= "PAREGGIO";

if(numpc>numutente){
    risultato=" VINCE PC";

}else if(numutente>numpc) {
    risultato="VINCE UTENTE";
}

document.getElementById("vincitore").innerHTML=risultato;