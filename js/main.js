var btnPiedra = document.getElementById("bnt-piedra");
var btnPapel = document.getElementById("bnt-papel");
var btnTijera = document.getElementById("bnt-tijera");

var labelUs = document.getElementById("lbl-Usuario");
var labelMa = document.getElementById("lbl-Maquina");
var resultados = document.getElementById("resultados")
var contaUs = document.getElementById("puntosUs");
var contaCPU = document.getElementById("puntosCPU");

var option = ["Piedra", "Papel","Tijera"];

var seleccionUsuario;
var seleccionCPU;
var conteo; // Guarda lo que haya en Contador Usuario
var conteoMa; // Guarda lo que haya en contador CPU
var contadorUs = 1;
var contadorMa = 1;

btnPiedra.addEventListener("click", function(){
    startGame(btnPiedra.value);
});

btnPapel.addEventListener("click", function(){
    startGame(btnPapel.value);
});

btnTijera.addEventListener("click", function(){
    startGame(btnTijera.value);
});

function startGame(valorUsuario){
    /* 
        0 = Piedra
        1 = Papel
        2 = Tijera
    */
    seleccionUsuario = valorUsuario;
    seleccionCPU = cpuNumber();
    checkGame = getCheckUserAndCPU(seleccionUsuario,seleccionCPU);
    conteo = incrementUs();
    conteoMa = incrementMa();
    labelUs.innerHTML = option[seleccionUsuario];
    labelMa.innerHTML = option[seleccionCPU];

    console.log(seleccionUsuario);
    console.log(seleccionCPU);
}

function getCheckUserAndCPU(selecUs,selecCPU){

    /*
    0 = Piedra
    1 = Papel    
    2 = Tijera
    */

    resultados;

    if (seleccionUsuario == 0 && seleccionCPU == 2 ||seleccionUsuario == 1 && seleccionCPU == 0 || seleccionUsuario == 2 && seleccionCPU == 1 ) {
        resultados.innerHTML = "Ganaste"
    }else if(seleccionUsuario == seleccionCPU){
        resultados.innerHTML = "Empate"
    }else{
        resultados.innerHTML = "Perdiste"
    }

    return resultados
}

function cpuNumber(){



    let numberCPU = Math.floor(Math.random() *3)


    if(numberCPU == 3){
        return 2
    }

    return numberCPU;

}


function incrementUs(){

    if (seleccionUsuario == 0 && seleccionCPU == 2 ||seleccionUsuario == 1 && seleccionCPU == 0 || seleccionUsuario == 2 && seleccionCPU == 1 ) {
        contaUs.innerHTML = contadorUs++;
    }else if(seleccionUsuario == seleccionCPU){
        alert(`Hubo Empate. Usuario saco ${option[seleccionUsuario]} y la Maquina ${option[seleccionCPU]}`)
    }
    return contadorUs
}

function incrementMa(){

    if (seleccionUsuario == 0 && seleccionCPU == 1 ||seleccionUsuario == 1 && seleccionCPU == 2 || seleccionUsuario == 2 && seleccionCPU == 0 ) {
        contaCPU.innerHTML = contadorMa++;
    }

    return contadorMa
}














