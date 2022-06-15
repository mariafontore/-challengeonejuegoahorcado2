let palabras = ["MONO", "PERRO", "MISTERIO", "MIO"];
let canva = document.querySelector("#horca");
let tablero = canva.getContext("2d");
let letras = [];

function elegirPalabraSecreta() {
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    console.log(palabra);
    return palabra;
}

let palabraSecreta = elegirPalabraSecreta();
dibujarGuiones(palabraSecreta);

function dibujarGuiones(palabraSecreta) {
    tablero.lineWidth = 6;
    tablero.strokeStyle = "#00000";
    tablero.beginPath();
    let ancho = 600 / palabraSecreta.length;

    for (let i = 0; i < palabraSecreta.length; i++) {

        //dibuja la primera línea 
        tablero.moveTo(450 + (ancho * i), 450);
        tablero.lineTo(400 + (ancho * i), 450);

    }
    tablero.stroke();
    tablero.closePath();
}


document.addEventListener("keypress", function(event) {


    let keycodeentero = event.which || event.keyCode; //Dependiendo del navegador usara el which o el keycode OJO ES IMPORTANTE
    let letra = (String.fromCharCode(keycodeentero)).toUpperCase(); // Y con el String obtenemos la tecla presionada.
    let posicion = [];
    console.log(letra)
    let valida = validaLetra(letra);
    console.log(palabraSecreta)


    if (valida != "") {
        alert(valida)
    } else {
        if (palabraSecreta.includes(letra)) {
            for (let i = 0; i < palabraSecreta.length; i++) {
                if (palabraSecreta[i] === letra) {
                    posicion.push(i);
                }
            }

        } else {
            console.log("letra no esta")
        }
    }


});

function validaLetra(letra) {
    let valida = "";
    const sololetras = new RegExp('^[A-Z]+$', 'i'); // solo letras    
    if (!sololetras.test(letra)) {

        valida = "Ingrese solo letras";
    }
    return valida;
}