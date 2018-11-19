//Pedimos un numero entre 1 y 100
var numero=Number(prompt("Dame un numero entre 1 y 100"));

//Comprobacion
while (numero<1 || numero>100) {
  console.log("El número no es válido");
  numero=Number(prompt("Dame un numero entre 1 y 100"));
}

//Sacamos por pantalla la tabla de multiplicar
for (let i = 1; i < 11; i++) {
  console.log(`${i}x${numero}=${i*numero}`);
}