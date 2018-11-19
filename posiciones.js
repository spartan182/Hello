
/* Creamos un array bidimensional para los numeros*/

  var numeros=
  [ [2,6,5,4,5,5],
    [4,6,6,3,2,6],
    [3,4,1,2,6,3],
    [1,4,2,5,6,1],
    [5,5,3,2,2,1],
    [4,1,4,3,1,3] ];



/*Creamos un array bidimensional para los colores*/

  var colores=["#0000FF","#FFFF00","#FF00FF","#FF0000","#FAFAFA","#01DF01"];
  var colorTablero=
  [ [colores[0],colores[1],colores[2],colores[3],colores[1],colores[0]],
    [colores[0],colores[4],colores[2],colores[3],colores[1],colores[0]],
    [colores[0],colores[1],colores[0],colores[3],colores[3],colores[2]],
    [colores[2],colores[4],colores[2],colores[3],colores[5],colores[3]],
    [colores[5],colores[4],colores[5],colores[5],colores[4],colores[1]],
    [colores[5],colores[4],colores[2],colores[4],colores[5],colores[1]] ];


document.write("<table>");
for (let i=0; i<6; i++)
     { document.write("<tr>");
for (let j=0; j<6; j++)
{
  document.write("<td style='background-color:"+colorTablero[i][j]+"'>"+numeros[i][j]+ "</td>");

}
document.write("</tr>");
}
document.write("</table>");

























/*for (let i=0; i<= numeros.length -1; i++){
      document.write(numeros[i]+"<br>");
for 
}*/




/*Creamos los console.log para mostrar los colores y los numeros
function tablero()
{
  console.log(crearNumeros());
  console.log(crearColores());
}
tablero();





document.write(<table>)
for(){
Document.write(<tr>)
for(){ 
Documen.write(<td style=colores[][]> numeros[][] <\td>}
<\tr>
}









var numPos=[1,2,3,4,5,6];
var colPos=["Azul","Amarillo","Rosa","Rojo","Blanco","Verde"];

    console.log("Posicion de inicio es: " + numPos[Math.floor(Math.random() * numPos.length)]+ " " + colPos[Math.floor(Math.random() * colPos.length)]);
    console.log("Posicion final es: " + numPos[Math.floor(Math.random() * numPos.length)]+ " " + colPos[Math.floor(Math.random() * colPos.length)]);



/* EL CODIGO DEL COLOR
Azul     #0000FF
Amarillo #FFFF00
Rosa     #FF00FF
Rojo     #FF0000
Blanco   #FAFAFA
Verde    #01DF01
*/
