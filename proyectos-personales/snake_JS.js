var pantalla = document.querySelector("canvas");
var lapiz = pantalla.getContext("2d");
var posX = 200;
var posY = 32;
var direccion = "right";
var obj1 = { x: 300, y: 32 };
var item1 = {x: 300, y: 32};
var itemsComidos = 1;
var cuerpo = [{ x: 200, y: 32 }];
var cuerpoMove = cuerpo;
var cabeza = cuerpo[0];
var deborada = false;

// Esta parte define el marco del canvas disponible para trabajar

function dibujarMArco() {
  lapiz.lineWidth = 5;
  lapiz.strokeRect(0, 0, 1000, 600);
}

function dibujarCirculo(x, y, radio, color) {
  lapiz.fillStyle = color;
  lapiz.beginPath();
  lapiz.arc(x, y, radio, 0, 2 * Math.PI);
  lapiz.fill();
}

function limpiarPantalla() {
  lapiz.clearRect(0, 0, 1000, 600);
}

function teclaPress(event) {
  switch (event.keyCode) {
    case 37:
      if (direccion == "up" || direccion == "down") {
        direccion = "left";
      }
      break;
    case 38:
      if (direccion == "left" || direccion == "right") {
        direccion = "up";
      }
      break;
    case 39:
      if (direccion == "up" || direccion == "down") {
        direccion = "right";
      }
      break;
    case 40:
      if (direccion == "right" || direccion == "left") {
        direccion = "down";
      }
      break;
  }
  return false;
}

function deborarComida() {


  if (
   (item1.x >= cuerpo[0].x - 15) &&
   (item1.x <= cuerpo[0].x + 15) &&
   (item1.y >= cuerpo[0].y - 15) &&
   (item1.y <= cuerpo[0].y + 15)
  ) {
      
    for(var i = 0; i < 5; i++){

        cuerpo.unshift({x:cuerpo[0].x, y: cuerpo[0].y});
    }
      deborada = true;
      
  }
}

function movientoDelCuerpo() {
  for (var i = 0; i < cuerpo.length; i++) {
    i == 0
      ? dibujarCirculo(cuerpo[i].x, cuerpo[i].y, 15, "black")
      : dibujarCirculo(cuerpo[i].x, cuerpo[i].y, 15, "green");
  }
  choques();
  deborarComida();
  itemRandom();
  console.log(itemsComidos);
  console.log("cabeza X = "+ cuerpo[0].x);
  console.log("cabeza y = "+ cuerpo[0].y);
}

function tamanioDelCuerpo() {
  for (var i = 0; i < itemsComidos * 2; i++) {
    cuerpo.push({ x: cuerpo[i].x - 10, y: cuerpo[i].y });
  }
  console.log(cuerpo);
}
function choques() {
  
    // for(var i = 0; i <= cuerpo.length; i++){
        
    //     if (
    //         (cuerpo[0].x-15 == cuerpo[i].x - 15) ||
    //         (cuerpo[0].x+15 == cuerpo[i].x + 15) ||
    //         (cuerpo[0].y-15 == cuerpo[i].y - 15) ||
    //         (cuerpo[0].y+15 == cuerpo[i].y + 15)
    //        ){
    //            alert("Chocaste con el cuerpo");
    //         break;
    //         }
    // }
  
    if (cuerpo[0].x - 2 <= 0 || cuerpo[0].x + 2 >= 1000) {
    alert("GAME OVER CHOCASTE");
  } else if (cuerpo[0].y - 2 <= 0 || cuerpo[0].y + 2 >= 600) {
    alert("GAME OVER CHOCASTE");
  }
}
function itemRandom(){

    if(deborada == true){
        item1.x = Math.floor( Math.random()*1000);
        item1.y = Math.floor(Math.random()*600);
        deborada = false;
    }
    console.log(" item x = "+ item1.x + ", y = "+ item1.y);

}

function movimientoDeSnake() {
  limpiarPantalla();
  dibujarCirculo(item1.x, item1.y, 10, "red");
  dibujarMArco();

  switch (direccion) {
    case "right":
      movientoDelCuerpo();
      var item = cuerpo.pop();
      item.x = cuerpo[0].x;
      item.y = cuerpo[0].y;
      cuerpo.unshift(item);
      cuerpo[0].x += 10;
      break;

    case "left":
      movientoDelCuerpo();
      var item = cuerpo.pop();
      item.x = cuerpo[0].x;
      item.y = cuerpo[0].y;
      cuerpo.unshift(item);
      cuerpo[0].x -= 10;
      break;

    case "up":
      movientoDelCuerpo();
      var item = cuerpo.pop();
      item.x = cuerpo[0].x;
      item.y = cuerpo[0].y;
      cuerpo.unshift(item);
      cuerpo[0].y -= 10;
      break;

    case "down":
      movientoDelCuerpo();
      var item = cuerpo.pop();
      item.x = cuerpo[0].x;
      item.y = cuerpo[0].y;
      cuerpo.unshift(item);
      cuerpo[0].y += 10;
      break;

    default:
      break;
  }
}

setInterval(movimientoDeSnake, 50);
document.onkeydown = teclaPress;
tamanioDelCuerpo();
