var textoIntro = document.querySelector("#input-texto");
var botonEncriptarClick = document.querySelector("#btn-encriptar");
var botosDesencriptar = document.querySelector("#btn-desencriptar");
var mensajeText = document.querySelector("#msg");

function checarTexto(){

    var textAChecar = textoIntro.value;


}

function encriptar(wrd) {
   if(wrd == "a"){
       wrd = "ai";
   }else if(wrd == "e"){
       wrd = "enter";
   }else if(wrd == "i"){
       wrd = "imes";
   }else if(wrd == "o"){
       wrd = "ober";
   }else if(wrd == "u"){
       wrd = "ufat";
   }
    

   return wrd;
}


function desencriptar(wrd){
    
    if(wrd == "ai"){
        wrd = "a";
    }else if(wrd == "enter"){
        wrd = "e";
    }else if(wrd == "imes"){
        wrd = "i";
    }else if(wrd == "ober"){
        wrd = "o";
    }else if(wrd == "ufat"){
        wrd = "u"
    }
    return wrd;
    
}


function mensajeEncriptado(){
    
    var newtexto = textoIntro.value.replace(/[aeiou]/g, encriptar);

    mensajeText.value = newtexto;
    return false;

}
function mensajeDesencriptado(){

    var newtexto = textoIntro.value.replace(/ai|enter|imes|ober|ufat/g, desencriptar);
    
    mensajeText.value = newtexto;
    return false;

}
 
 botonEncriptarClick.onclick = mensajeEncriptado;
 botosDesencriptar.onclick = mensajeDesencriptado;

