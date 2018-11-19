/*creamos las variables*/
var num = []
var operaciones= ["+","-"];
var randomOpera = Math.floor(Math.random()*2);

/*Hacemos ramdom los numeros del  1-10*/
while(num.length < 2)
{
    var randomnumber = Math.floor(Math.random()*10) + 1;
    if(num.indexOf(randomnumber) > -1) continue;
    num[num.length] = randomnumber;
}

/*creamos la funcIon para calcular las operaciones "+,-"*/
var numOper=0;
if (operaciones[randomOpera]== "+" )
{
  alert(num[0]+" + "+num[1]);
  numOper = (num[0]+num[1])
}
else {
  alert(num[0]+" - "+num[1]);
  numOper = (num[0]-num[1])
}

/*creamos una variable para verificar el resultado*/
var resultado = prompt("Escribe el resultado: ");
if (parseInt(resultado) ==numOper)
{
  alert("CORRECTO!");
}
else
{
   alert("INCORRECTO");
}
