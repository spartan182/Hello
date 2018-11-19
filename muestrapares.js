//VAriables e inicializacion
var inicio=0;
var final=0;
//Funcion pares
function pares(ini,fin){
  if((ini%2)!=0){
    ini=ini+1;
  }
  for (let i = ini; i <= fin; i=i+2) {
    console.log(i);
  }
}
//Pedir los numeros
inicio=Number(prompt("Dime el inicio"));
final=Number(prompt("Dime el final"));
pares(inicio,final);