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
//     pincel.lineTo(3git50,490);
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

// var pantalla = document.querySelector("canvas");
// var pincel = pantalla.getContext("2d");

// var colores = ["blue","white","red"];

// function DrawFlag(){

//     var posY = 0;

//     colores.forEach(color => {
        
//         pincel.fillStyle = color;
//         pincel.fillRect(0,posY,900,200 );   
//         pincel.strokeStyle;
//         pincel.strokeRect(0,posY,900,200);
//         posY += 200;
//     });
// }

// function drawShield(){

//     pincel.fillStyle = "grey";
//     pincel.beginPath();
//     pincel.moveTo(450,300);
//     pincel.lineTo(350,210,);
//     pincel.lineTo(550,210);
//     pincel.fill();

//     pincel.moveTo(450,300);
//     pincel.lineTo(350,390);
//     pincel.lineTo(550, 390);
//     pincel.fill();

//     pincel.fillStyle = "black";
//     pincel.beginPath();
//     pincel.moveTo(448,300);
//     pincel.lineTo(350,212);
//     pincel.lineTo(350,388);
//     pincel.fill();

//     pincel.fillStyle = "red";
//     pincel.beginPath();
//     pincel.arc(500,300,30,0,2*Math.PI);
//     pincel.fill();


// }

// DrawFlag();
// drawShield();

//####################################################################

var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var serie2009 = [6,47,41,3,3];
var serie2019 = [81,9,3,3,4];
var colores = ["blue","green","yellow","red","gray"];
var browsers = ["Chrome","Firefox","Internet Explo.","Safari","Otros"];



function drawText(x,y,texto){
    pincel.font = "15px Georgia";
    pincel.fillStyle = "black";
    pincel.fillText(texto,x,y,);
}

function drawRectangle(x,y,width,height,color){


    pincel.fillStyle = color;
    pincel.fillRect(x,y,width,height);
    pincel.strokeStyle = "black";
    pincel.strokeRect(x,y,width,height);


}


function drawColumnDate(x,height, texto){

    var posY = 50;
    drawText(x,posY-20,texto);
    for(var i = 0; i <= colores.length; i++){

        drawRectangle(x,posY,50,height[i],colores[i]);

        posY += height[i];

    }

}

function drawDataTable(x){

    var posY = 60;
    var i = 0;

    browsers.forEach(browser => {
        
        drawText(x,posY,browser);
        drawRectangle(x-28,posY-8,20,10,colores[i]);
        i++;
        posY += 20;


    });


}



drawColumnDate(20,serie2009,"2009");
drawColumnDate(150,serie2019,"2019");
drawDataTable(280);
