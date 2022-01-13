// var pantalla = document.querySelector("canvas");
// var pincel = pantalla.getContext("2d");

// pincel.fillStyle = "white",
// pincel.fillRect(0,0,900,600);
// pincel.strokeRect(0,0,900,600);


// var colores = ["green","white","red"];


// function DrawFlag(){

//     var posX = 0; 

//     colores.forEach(color => {
//         pincel.fillStyle = color;
//         pincel.fillRect(posX,0,300,600);
    

//         posX = posX + 300;
        
//     });
// }

// function drawShield(){

//     pincel.fillStyle = "yellow";
//     pincel.beginPath();
//     pincel.moveTo(450,300);
//     pincel.lineTo(350,110);
//     pincel.lineTo(550,110);
//     pincel.fill();

//     pincel.beginPath();
//     pincel.moveTo(450,300);
//     pincel.lineTo(350,490);
//     pincel.lineTo(550,490);
//     pincel.fill();

//     pincel.fillStyle = "blue";
//     pincel.beginPath();
//     // pincel.moveTo(350,300);
//     pincel.arc(450,300,30,0,2*Math.PI);
//     pincel.fill();
// }
// DrawFlag();
// drawShield();

//#############################################################################
//#############################################################################


var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var colores = ["green","white","red"];

var cantidadDeCuadros = prompt("cuantos cuadros por color quieres?");
var widthFlag = prompt("De cuantos pixeles de ancha quieres la bandera?")

function smallSquare(x,y,color){

    pincel.fillStyle = color;
    pincel.fillRect(x,y,50,50);
    pincel.strokeRect(x,y,50,50);
    
}

function makeFlag(numHeigh,numwidth){

    var Ypos = 0;
    var numberheightFlag = numHeigh;
    var numberWidthFlag = numwidth

    colores.forEach(color => {

        for(var squares = 1; squares <= numberheightFlag; squares++){

            for(var x = 0; x <= numberWidthFlag; x += 50){
                smallSquare(x,Ypos,color);
            }
                    Ypos += 50;


        }
    });
}

makeFlag(parseInt(cantidadDeCuadros),parseInt(widthFlag));