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

var colores = ["blue","white","red"];

function DrawFlag(){

    var posY = 0;

    colores.forEach(color => {
        
        pincel.fillStyle = color;
        pincel.fillRect(0,posY,900,200 );   
        pincel.strokeStyle;
        pincel.strokeRect(0,posY,900,200);
        posY += 200;
    });
}

function drawShield(){

    pincel.fillStyle = "grey";
    pincel.beginPath();
    pincel.moveTo(450,300);
    pincel.lineTo(350,210,);
    pincel.lineTo(550,210);
    pincel.fill();

    pincel.moveTo(450,300);
    pincel.lineTo(350,390);
    pincel.lineTo(550, 390);
    pincel.fill();

    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(448,300);
    pincel.lineTo(350,212);
    pincel.lineTo(350,388);
    pincel.fill();

    pincel.fillStyle = "red";
    pincel.beginPath();
    pincel.arc(500,300,30,0,2*Math.PI);
    pincel.fill();


}

DrawFlag();
drawShield();