const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencritada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencritada = stringDesencritada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencritada.includes(matrizCodigo[i][1])){
            stringDesencritada = stringDesencritada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencritada;
}

function btnCopiar() {
    const mensaje = document.querySelector(".mensaje");
    mensaje.select(); // Seleccionar el texto dentro del campo de mensaje
    document.execCommand("copy"); // Copiar el texto al portapapeles
    //alert("Texto copiado al portapapeles: " + mensaje.value); // Mostrar mensaje de éxito
  }
  