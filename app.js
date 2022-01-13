// function Jugador(nombre) {

//     this.nombre = nombre,
//         this.pv = 100,
//         this.sp = 100,
//         this.curar = function (jugadorObj) {

//             if (this.sp >= 40) {
//                 this.sp -= 40;
//                 jugadorObj.pv += 20;

//             } else {
//                 console.info("El jugador ya no tiene suficiente sp");
//             }
//             this.estado(jugadorObj);

//         }
//         this.estado = function(jugadorObj){
//             console.info(this);
//             console.info(jugadorObj);

//         }

//         this.tirarFlecha = function(jugadorObj){
//             if(jugadorObj.pv > 20  ){
//                 jugadorObj.pv -=20;

//             }else{
//                 jugadorObj.pv = 0;
//                 console.info(jugadorObj.nombre + " ha muerto....")
//             }

//             this.estado(jugadorObj);

//         }

// }


// var gandalf = new Jugador("Gandalf");
// var legolas = new Jugador("Legolas");

// console.log(legolas);
// console.log(gandalf);



// // gandalf.curar(legolas);

//#######################################################################################################################

// function jugador(nombre){

//     this.nombre = nombre,
//     this.pv = 100,
//     this.sp = 100,

//     this.estado = function(jugadorObjetivo){
//         console.info(this);
//         console.info(jugadorObjetivo);
//     }

//     this.curar = function(jugadorObjetivo){
//         if(this.sp >= 40){
//             if(jugadorObjetivo.pv < 100){
//                 jugadorObjetivo.pv += 20;
//                 this.sp -= 40;
//             }else{
//                 console.info(jugadorObjetivo.nombre + " esta completamente curado");
//             }
//         }else{
//             console.info(this.nombre + " no tiene suficiente sp para curar a "+ jugadorObjetivo.nombre);
//         }
//         this.estado(jugadorObjetivo);
//     }

//     this.flechazo = function (jugadorObjetivo){
//         if (jugadorObjetivo.pv > 20){
//             jugadorObjetivo.pv -= 20;
//         }else{
//             jugadorObjetivo.pv = 0;
//             console.info(jugadorObjetivo.nombre + " ha muerto");
//         }

//         this.estado(jugadorObjetivo);

//     }

// }

// var legolas = new jugador("Legolas");
// var gandalf = new jugador("Gandalf");

// console.log(legolas);
// console.log(gandalf);
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$




// function Persona(nombre) {

//     this.nombre = nombre;
//     this.pv = 100;
//     this.sp = 100;

//     this.estado = function (jugadorObj) {
//         console.info(this);
//         console.info(jugadorObj);
//     }

//     this.curar = function (jugadorObj) {
//         if (this.sp > 20) {
//             if (jugadorObj.pv < 100) {
//                 jugadorObj.pv += 20;
//                 this.sp -= 20;
//             } else {
//                 jugadorObj.pv = 100;
//                 console.log(jugadorObj.nombre + " Esta completamente curado");
//             }
//         } else {
//             console.log(this.nombre + " no tiene sufuciente sp para cuar a " + jugadorObj.nombre);
//         }
//         this.estado(jugadorObj);
//     }

//     this.atacarConEspada = function (jugadorObj) {

//         if (jugadorObj.pv > 40) {
//             jugadorObj.pv -= 40;
//         } else {
//             jugadorObj.pv = 0;
//             console.log(jugadorObj.nombre + " esta muerto....");
//         }
//         this.estado(jugadorObj);
//     }


// }

// //esto es para provar el prototypo  una funcion que se establece fuera de la clase
// //esto para que solo una vez se defina en memoria y solo las propiedades cambiantes se reserven en memoria
// Persona.prototype.atacarConFlecha = function (jugadorObj) {
//     if (jugadorObj.pv > 20) {
//         jugadorObj.pv -= 20;
//     } else {
//         jugadorObj.pv = 0;
//         console.log(jugadorObj.nombre + " esta muerto....");
//     }
//     this.estado(jugadorObj);
// }

// var gandalf = new Persona("Gandalf");
// var legolas = new Persona("Legolas");
// var leonidas = new Persona("Leonidas");

// console.log(gandalf);
// console.log(legolas);
// console.log(leonidas);



//###############################################################################################


// function crearArreglos(){

//     var arr = [];
//     var numero = 1;

//     arr.push( 
//         (function(numero){
//           return  function (){
//                 console.log(numero);
//             } 

//         })(numero)
//         );


//     numero = 2;
//     arr.push( 
//         (function(numero){
//           return  function (){
//                 console.log(numero);
//             } 

//         })(numero)
//         );

//     numero = 3;
//     arr.push( 
//         (function(numero){
//           return  function (){
//                 console.log(numero);
//             } 

//         })(numero)
//         );



//     return arr;

// }

// var listaDeArrglos  =  crearArreglos();

// listaDeArrglos[0]();
// listaDeArrglos[1]();
// listaDeArrglos[2]();


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// COOKIES

// function crearCookie(nombre, valor) {
//     valor = escape(valor);

//     var hoy = new Date();
//     hoy.setMonth(hoy.getMonth() + 1);

//     document.cookie = nombre + " = " + valor + ";expires= " + hoy.toUTCString() + ";@#";

// }

// function borrarCookie(nombre) {
//     var hoy = new Date();
//     hoy.setMonth(hoy.getMonth() - 1);
//     document.cookie = nombre + " = " + "=x;expires= " + hoy.toUTCString() + ";@#";

// }

// function getCookie(propiedad){

//     var cookies = document.cookie;
//     var cookieArr = cookies.split("; ");
//     //  console.log(cookieArr);

//     for(var i=0; i<cookieArr.length; i++){
//         var arrPar = cookieArr[i].split("=");
//         cookieArr[i] = arrPar;

//            if(arrPar[0] === propiedad){
//                    return unescape(arrPar[1]);
//                }
//         }


// }


// // crearCookie("nombre", "Ernesto");
// // crearCookie("direccion", "blvd. del rodeo 155 int 84");
// // crearCookie("correo", "ernesto_71@live.com.mx");

// // borrarCookie("correo");
// // borrarCookie("nombre");
// // borrarCookie("direccion");

// console.log(getCookie('direccion'));
// console.log(getCookie('nombre'));
// console.log(getCookie('correo'));

// var cookies = document.cookie;//esto es para agrupar todas las cookies en una variale
// console.log(cookies);//esto para mostrar todas las cookies en consola

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// Funciones call,bind,apply.


// var carro = {
//     color: "Blanco",
//     marca: "Toyota",
//     imprimir: function () {
//         var salida = this.marca + "----" + this.color;
//         return salida;
//     }
// }

// var carro2 = {
//     color: "Rojo",
//     marca: "Audi"
// }

// var logCarro = function (arg1, arg2) {
//     console.log("carro: ", this.imprimir());
//     console.log("Arguments: ", arg1, arg2);
//     console.log("==========================");
// }


// var logModeloCarro = logCarro.bind(carro);
// logModeloCarro("abc","123");

// logModeloCarro.call(carro2, "123", "4556");
// logModeloCarro.apply(carro2, ["qwe","eewr"]);

// // funcion prestada del carro para mostrar los parametros del carro2
// console.log (carro.imprimir.call(carro2));


// ##############################################################################################

// JSON

// var objetoJS = {

//     nombre: "Ernesto",
//     edad: 31,
//     sexo: "Masculino",
//     trabajo: "Mecanico"

// }
// // De JS objet a JSON 
// var convertToJsonString = JSON.stringify(objetoJS);
// console.log(convertToJsonString);
// // De JSON a JS objet
// var deJsonAObjetJS = JSON.parse(convertToJsonString);
// console.log(deJsonAObjetJS);

// #############################################################################################

// For in

// var Persona = function(){
//     this.nombre =  "Ernesto",
//     this.apellido = "Ruiz",
//     this.edad = 31

// };

// /*Es esta seccion esta el uso del for in con la extraccion de las propidades
// del objeto persona */

// // var ernesto = new Persona();

// // for(propiedad in ernesto){
// //     console.log(propiedad + " : " + ernesto[propiedad]);
// // }

// /**En esta parte esta la misma extraccion de las propiedades del objeto persona
//  * pero ya se agrego una propiedad por medio del prototype "direccion"
//  */
// var ernesto = new Persona();

// Persona.prototype.direccion = "Jalisco,Mexico";

// for(propiedad in ernesto){
//     /**en esta seccion se condiciona si el obejto persona tiene propiedades
//      * ajenas al mismo continuar y solo muestra las que no son propieas del
//      * objeto
//      */

//     // if( ernesto.hasOwnProperty(propiedad))
//     // continue;

//     /**En esta lo mismo que la enterior pero al ponerle la negativa al 
//      * principio se condicion a que solo se muestre la propiedades del objeto
//      */
//     if( !ernesto.hasOwnProperty(propiedad))
//     continue;

//     console.log(propiedad + " : " + ernesto[propiedad]);
// }

//#######################################################################3333333333

// funciones de tiempo JS

/**esta funcion para al pasar un segundo */

// setTimeout(function (){
//     console.log("paso un segundo");
// },1000);


/**En esta funcion se ejecuta el ecodigo hasta que llegue al tiempo establecido
 * de 5 segundos y se detiene
 */
// var segundo = 1;

// var intervalo = setInterval(function(){
//     segundo++;
//     document.write("seg",segundo );

//     if(segundo === 5 ){
//         clearInterval(intervalo);
//     }
// },1000);
//###########################################################################################

//Programa de Gasolina vs Alcohol
// var modeloDeAuto = document.querySelector(".ModeloAuto");
// var tanqueDeCombustible = document.querySelector(".TamanioTanque");
// var kmRecorridosGas = document.querySelector(".KmRecorridosGas");
// var kmRecorridosAlco = document.querySelector(".KmRecorridosAlco");

// function imprimirInput() {
//     document.write(modeloDeAuto.value);
// }

// function resultado() {

//     var consumoGas = kmRecorridosGas.value / tanqueDeCombustible.value;
//     var consumoAlco = kmRecorridosAlco.value / tanqueDeCombustible.value;

//     document.write("<h2> El auto " + modeloDeAuto.value + " tiene un consumo de: </h2>");
//     // document.write("<br>");
//     document.write("<h3>" + consumoGas + " Km/L con Gasolina y " + consumoAlco + " Km/L con Alcohol</h3>" );
//     document.write("<br>");

//     if (consumoGas > consumoAlco) {
//         document.write("<h2> Es mas eficiente usando Gasolina</h2>");
//     } else if (consumoGas == consumoAlco) {
//         document.write("<h2>Es igual de eficiente usando Gasolina o Alcohol</h2>");
//     } else {
//         document.write("<h2>Es mas eficiente usando Alcohol</h2>");
//     }


// }

// var botonClick = document.querySelector("button");

// botonClick.onclick = resultado;
// ###########################################################################################
// ###########################################################################################

// var ingredientes = [];
// var cantidad = parseInt(prompt("¿Cuantos ingredientes vas a Añadir?"));
// var contador = 1;
// while (contador <= cantidad) {
//     var ingrediente = prompt("Ingrese el ingrediente No. " + contador);
//     var coincidencia = false;

//     for (var i = 0; i < ingredientes.length; i++) {

//         if (ingrediente == ingredientes[i]) {
//             alert("Este ingrediente ya fue añadido favor de ingresar otro");
//             coincidencia = true
//             break
//         }
//     }
//     if (coincidencia == false) {

//         ingredientes.push(ingrediente);
//         contador++

//     }

// }

// function doc(contenido) {

//     document.write(contenido);
// }

// function iterar(){

//     ingredientes.forEach(item => {
//         doc("<li>" + item + "</li>");
//     });
// }

// function mostrarIngredientes() {

//     doc("<h2>Los ingredientes de la receta son:</h2>");
//     doc("<br>");
//     doc("<ol>");
//     iterar();
//     doc("</ol>");

// }

// mostrarIngredientes();

// ###########################################################################################################
// ###########################################################################################################
// ###########################################################################################################
// Dibujando con Canvas
// var pantalla = document.querySelector("canvas");
// var pincel = pantalla.getContext("2d");


// pincel.fillStyle = "green";
// pincel.fillRect(0,0,350,300);

// pincel.fillStyle = "black";
// pincel.fillRect(50,40,90,90);

// pincel.fillStyle = "black";
// pincel.fillRect(200,40,90,90);

// pincel.fillStyle = "black";
// pincel.fillRect(135,130,70,100);

// pincel.fillStyle = "black";
// pincel.fillRect(150,50,40,110);

// pincel.fillStyle = "black";
// pincel.fillRect(135,130,40,110);
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// pincel.fillStyle = "black";
// pincel.beginPath();
// pincel.moveTo(50, 50);
// pincel.lineTo(50,400);
// pincel.lineTo(400,400);
// pincel.fill();

// pincel.fillStyle = "White";
// pincel.beginPath();
// pincel.moveTo(100,175);
// pincel.lineTo(100,350);
// pincel.lineTo(275,350);
// pincel.fill();
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// var pantalla = document.querySelector("canvas");
// var pincel = pantalla.getContext("2d");

// function dibujarCuadro(x,y,color){

//     pincel.fillStyle = color;
//     pincel.fillRect(x,y,100,100);
//     pincel.strokeStyle = "balck";
//     pincel.strokeRect(x,y,100,100);
// }

// for(var x = 0; x < 600; x = x + 100){

//     dibujarCuadro(x,0,"green");
//     dibujarCuadro(x,100,"white");
//     dibujarCuadro(x,200,"red");

// }
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// var pantalla = document.querySelector("canvas");
// var pincel = pantalla.getContext("2d");

// pincel.fillStyle = "lightgray";
// pincel.fillRect(0,0,600,400);

// function dibujarCirculo(x,y,radio,color){

//     pincel.fillStyle = color;
//     pincel.beginPath();
//     pincel.arc(x,y,radio,0,2*3.14);
//     pincel.fill();
// }

// function dibujarPetalos(){


//     var colores = ["blue","yellow","green","orange"];
//     var colorIndex = 0;

//     for(var x = 260; x <= 340; x = x + 80){

//         dibujarCirculo(x,200,20,colores[colorIndex]);
//         colorIndex++;
//     }
//     for(var y = 160; y <= 240; y = y + 80){

//         dibujarCirculo(300,y,20,colores[colorIndex]);
//         colorIndex++;
//     }

// }


// dibujarCirculo(300,200,20,"red");
// dibujarPetalos();

//############################################################################ 
//############################################################################
// Dibujar columnas 

// function dibujarRectangulo(x,y,ancho,altura,color){

//     var pantalla = document.querySelector("canvas");
//     var pincel = pantalla.getContext("2d");

//     pincel.fillStyle = color;
//     pincel.fillRect(x,y,ancho,altura);
//     pincel.strokeStyle = "black";
//     pincel.strokeRect(x,y,ancho,altura);

// }

// function escribirTexto(x,y,texto){

//     var pantalla = document.querySelector("canvas");
//     var pincel = pantalla.getContext("2d");

//     pincel.font = "15px Georgia";
//     pincel.fillStyle = "black";
//     pincel.fillText(texto,x,y);

// }

// var serie2009 = [6,47,41,3,3];
// var serie2019 = [81,9,3,3,4];
// var colores = ["blue","green","yellow","red","gray"];



// function dibujarColumna(x,y,serie,color,texto){

//     var sumatoria = 0;
//     for(var i = 0; i <= serie.length; i++ ){    

//         dibujarRectangulo(x,y+sumatoria,50,serie[i],color[i]);
//         sumatoria = sumatoria+serie[i];
//     }
//     escribirTexto(x,y-20,texto);
// }

// dibujarColumna(50,50,serie2009,colores,"2009");
// dibujarColumna(150,50,serie2019,colores,"2019");

// ########################################################################################
// ########################################################################################
// Dibujar circulos dependiendo el click


// var pantalla = document.querySelector("canvas");
// var pincel = pantalla.getContext("2d");
// pincel.fillStyle = "grey";
// pincel.fillRect(0,0,600,400);

// var colores = ["blue","red","green"];
// var i = 0;

// function dibujarCirculo(evento){

//     var x = evento.pageX - pantalla.offsetLeft;
//     var y = evento.pageY - pantalla.offsetTop;
//     pincel.fillStyle = colores[i]; 
//     pincel.beginPath();
//     pincel.arc(x,y,10,0,2*3.14);
//     pincel.fill();
//     console.log(x + " " + y);
// }

// var colores = ["blue","red","green"];

// var colorEstablecido = colores[0];

// pantalla.onclick = dibujarCirculo;

// function alterarColor(){

//     i++;
//     if(i >= colores.length){
//         i = 0;
//     }


//     return false;
// }

// pantalla.oncontextmenu = alterarColor;

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// dibujar circulo en movimiento

// var pantalla = document.querySelector("canvas");
// var pincel = pantalla.getContext("2d");
// pincel.fillStyle = "grey";
// pincel.fillRect(0, 0, 600, 400);
// var x = 20;
// var i = 0;

// function dibujarCirculo(x, y, radio,) {

//     pincel.fillStyle = "blue";
//     pincel.beginPath();
//     pincel.arc(x, y, radio, 0, 2 * Math.PI);
//     pincel.fill();

// }

// function limpiarPantalla() {
//     pincel.clearRect(0, 0, 600, 400);
// }

// function renderizadoDeCirculo() {



//     limpiarPantalla();
//     dibujarCirculo(x, 20, 20);


//     switch (i) {
//         case 0:
//             if (x == 580) {
//                 i = 1;
//             } else {
//                 x++
//             }

//             break;
//         case 1:
//             if (x == 20) {
//                 i = 0;
//             } else {
//                 x--;
//             }
//         default:
//             break;

//     }


// }


// setInterval(renderizadoDeCirculo, 5);
// 

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// Juego de la diana aleatoria

// var pantalla = document.querySelector("canvas");
// var pincel = pantalla.getContext("2d");
// pincel.fillStyle = "grey";
// pincel.fillRect(0, 0, 600, 400);
// var x = 20;
// var i = 0;
// var radio = 10;
// var xAleatorio;
// var yAleatorio;

// function dibujarCirculo(x, y, radio,color) {

//     pincel.fillStyle = color;
//     pincel.beginPath();
//     pincel.arc(x, y, radio, 0, 2 * Math.PI);
//     pincel.fill();

// }

// function limpiarPantalla() {
//     pincel.clearRect(0, 0, 600, 400);
// }


// function diseniarObjetivo(x,y){

//     dibujarCirculo(x,y,radio+20,"red");
//     dibujarCirculo(x,y,radio+10,"white");
//     dibujarCirculo(x,y,radio,"red");



// }

// function sortearPosicion(maximo){

//     return Math.floor(Math.random()*maximo);

// }

// function acutalizarPantalla(){

//     limpiarPantalla();
//      xAleatorio = sortearPosicion(600);
//      yAleatorio = sortearPosicion(400);
//     diseniarObjetivo(xAleatorio,yAleatorio);
// }

// setInterval(acutalizarPantalla,700);


// function disparar(evento){

//     var x = evento.pageX - pantalla.offsetLeft;
//     var y = evento.pageY - pantalla.offsetTop;

//     if((x < xAleatorio + radio) &&
//        (x > xAleatorio - radio) &&
//        (y < yAleatorio + radio) &&
//        (y > yAleatorio - radio)){
//            alert("Tiro certero");
//        }
// }

// pantalla.onclick = disparar;


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// pincel para pintar estilo paint


// var pantalla = document.querySelector('canvas');
// var pincel = pantalla.getContext('2d');

// pincel.fillStyle = "white";
// pincel.fillRect(0, 0, 600, 400);
// pincel.strokeStyle = "black";
// pincel.strokeRect(0,0,600,400);

// var puedoDibujar = false;
// var colores = ["black","red", "green", "blue","brown","pink","orange","violet","yellow"];
// var posXTintas = 5;
// var colorInicial = "black";

// function dibujarCirculo(evento) {
//     var x = evento.pageX - pantalla.offsetLeft;
//     var y = evento.pageY - pantalla.offsetTop;

//     if (puedoDibujar && y > 54) {
//         pincel.fillStyle = colorInicial;
//         pincel.beginPath();
//         pincel.arc(x, y, 5, 0, 2 * 3.14);
//         pincel.fill();
//     }

// }


// function habilitarDibujar() {

//     puedoDibujar = true;
// }

// function deshabilitarDibujar() {

//     puedoDibujar = false;
// }

// function tintas(x, y, color) {

//     pincel.fillStyle = color;
//     pincel.fillRect(x, y, 40, 40);
//     pincel.fill();
//     pincel.strokeRect(x, y, 40, 40);

// }
// function barraDeHerramientas() {

//     pincel.fillStyle = "beige" ;
//     pincel.fillRect(0, 0, 600, 50),
//         pincel.fill();
//     pincel.strokeStyle = "black";
//     pincel.strokeRect(0, 0, 600, 50);
//     colores.forEach(color => {

//         tintas(posXTintas, 5, color);
//         posXTintas = posXTintas + 45;

//     });

// }

// function seleccionarColor(evento) {

//     var xposComprobacion = 5;

//     var x = evento.pageX - pantalla.offsetLeft;
//     var y = evento.pageY - pantalla.offsetTop;

//     if (y < 50) {
//         for (var colorI = 0; colorI <= colores.length; colorI++) {
//             if (x > xposComprobacion &&
//                 x < xposComprobacion + 40 &&
//                 y > 5 &&
//                 y < 45) {
//                 colorInicial = colores[colorI];
//                 break;
//             } else {
//                 xposComprobacion = xposComprobacion + 45;
//             }
//         }
//     }


// }



// barraDeHerramientas();
// pantalla.onmousemove = dibujarCirculo;
// pantalla.onmousedown = habilitarDibujar;
// pantalla.onmouseup = deshabilitarDibujar;
// pantalla.onclick = seleccionarColor;



function comprobacion(){
    var number1 = prompt("please select one number for check");
    var number2 = prompt("please select at second number for checking");
    document.write("click");

    if( number1 < number2){
       return document.write("The number " + number1 + " es menor que el numero " + number2);
    }else if(number1 > number2){
        return document.write("The number " + number1 + " es mayor que el numero " + number2);
    }else{
         return Document.write("The two numbers " + number1 + " and " + number2 + " it's the same number" );
    }

}

 var botonClick =  document.querySelector("button");

botonClick.onclick = comprobacion;
// comprobacion();





