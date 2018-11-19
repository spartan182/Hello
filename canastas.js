//Definicion de variables
var jugadores=[];
var jugadorTemp="";
var canastasDos=[];
var cDosTemp=0;
var canastasTres=[];
var cTresTemp=0;
var tiempoJugador=[];
var tiempoTemp=0;
//Definición de funciones
function calcularEstadisticas(jugArray,cDosArray,cTresArray,tArray){
  //El primer paso calculamos el numero de jugadore que utilizaremos para el resto de calculamos
  let numJugadores=jugArray.length;
  //Calculamos la media de canastas de canastas de dos
  let suma=0;
  let resultado=0;
  for (let i = 0; i < cDosArray.length; i++) {
    suma=suma+cDosArray[i];
  }
  resultado=suma/numJugadores;
  console.log(`La media de canastas de dos ha sido ${resultado}`);
  //Calculamos la media de canastas de canastas de tres
  suma=0;
  resultado=0;
  for (let i = 0; i < cTresArray.length; i++) {
    suma=suma+cTresArray[i];
  }
  resultado=suma/numJugadores;
  console.log(`La media de canastas de tres ha sido ${resultado}`);
  //Calculamos el tiempo medio
  suma=0;
  resultado=0;
  for (let i = 0; i < tArray.length; i++) {
    suma=suma+tArray[i];
  }
  resultado=suma/numJugadores;
  console.log(`El tiempo medio ha sido ha sido ${resultado}`);
  //Calculamos el máximo anotador
  let nombre="";
  let maxAnotacion=0;
  let anotacionTemp=0;
  for (let i = 0; i < jugArray.length; i++) {
    anotacionTemp=cDosArray[i]*2+cTresArray[i]*3;
    //Comparamos para saber si supera al resto de jugadores
    if(anotacionTemp>maxAnotacion){
      maxAnotacion=anotacionTemp;
      nombre=jugArray[i];
    }
  }
  console.log(`El jugador máximo anotador ha sido ${nombre} y su resultado ${maxAnotacion}`);
}

//Programa principal y uso de funciones
while(jugadorTemp!="SALIR"){
  jugadorTemp=prompt("Introducir el nombre del jugador");
  //Salimos del bucle directamente si el nombre es SALIR
  if(jugadorTemp=="SALIR") break;
  cDosTemp=Number(prompt("Introducir las canastas de dos"));
  cTresTemp=Number(prompt("Introducir las canastas de tres"));
  tiempoTemp=Number(prompt("Introducir el tiempo jugado"));
  //Aunque no se pedia, comprobamos que el numero de canastas de dos, de tres y el tiempo son >=0
  if((cDosTemp>=0)&&(cTresTemp>0)&&(tiempoTemp>=0)){
    jugadores.push(jugadorTemp);
    canastasDos.push(cDosTemp);
    canastasTres.push(cTresTemp);
    tiempoJugador.push(tiempoTemp);
  }
}
//Usamos la funcion para sacar por pantalla los resultados
calcularEstadisticas(jugadores,canastasDos,canastasTres,tiempoJugador);
