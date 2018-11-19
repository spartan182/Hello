//Funcion que realizará la comprobación de la marca nueva
function comprobarNuevaMarca(nuevaMarca,nuevoCorredor){
  //Comenzamos las comprobaciones
  //La marca nueva es mejor que la marca1? Estonces desplazamos marca1 antigua a marca2 y marca2 antigua a marca3
  if(nuevaMarca<marca1){
    marca3=marca2;//El orden es importante!!!!
    corredor3=corredor2;
    marca2=marca1;
    corredor2=corredor1;
    marca1=nuevaMarca;
    corredor1=nuevoCorredor;
  //La marca nueva es mejor que la marca2? Estonces desplazamos marca2 antigua a marca3
  }else if (nuevaMarca<marca2) {
    marca3=marca2;//El orden es importante!!!!
    corredor3=corredor2;
    marca2=nuevaMarca;
    corredor2=nuevoCorredor;
  //La marca nueva es mejor que la marca3?
  }else if (nuevaMarca<marca3) {
    marca3=nuevaMarca;
    corredor3=nuevoCorredor;
  }
}
//Inicializacion de las marcas y nombres de los corredores
var corredor1="";
var marca1=1000000;
var corredor2="";
var marca2=1000000;
var corredor3="";
var marca3=1000000;
//Pedimos el nombre del corredor hasta que el usuario introduzca SALIR
var corredor=prompt("¿Cual es el nombre del corredor?");
var marca=0;
while(corredor!="SALIR"){
  //Pedimos la marca
  marca=Number(prompt("¿Cual ha sido su marca?"));
  //Comprobamos la nueva marca
  comprobarNuevaMarca(marca,corredor);
  corredor=prompt("¿Cual es el nombre del corredor?");
}
//Sacamos por pantalla el resultado
console.log(`El corredor ${corredor1} ha tenido la mejor marca con ${marca1}`);
console.log(`El corredor ${corredor2} ha tenido la segunda mejor marca con ${marca2}`);
console.log(`El corredor ${corredor3} ha tenido la tercera mejor marca con ${marca3}`);