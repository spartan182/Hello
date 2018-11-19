
/* Hacemos un for donde hacemos el bucle hasta 100 con if los cuales muestran el resultado segun sea disvisible o no*/
for (var i=1; i < 101; i++){
    if (i % 15 == 0) document.write("<br> FizzBuzz");
    else if (i % 3 == 0) document.write("<br> Fizz");
    else if (i % 5 == 0) document.write("<br> Buzz");
    else document.write("<br>"+i);
}