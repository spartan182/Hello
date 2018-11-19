var num1=0;
var num2=0;
var res=0;
//Definicion de la funcion suma
function suma(a,b){
  let resultado=a+b;
  return resultado;
}
//Pedir numeros
num1=Number(prompt("Dame un numero"));
num2=Number(prompt("Dame un numero"));
//Usamos la function
res=suma(num1,num2);
console.log(`El resultado de sumar ${num1}+${num2} es ${res}`);