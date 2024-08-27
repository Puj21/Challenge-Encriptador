const encriptacion = document.querySelector(".encriptacion");
const mensaje = document.querySelector(".mensaje");

function botonEncriptar(){
    const textoEncriptado= encriptar(encriptacion.value);
    mensaje.value = textoEncriptado;
    encriptacion.value = "";
}

function encriptar(mensajeEncriptado){
    let arrayVocales = ["e","i","a","o","u"];
    let arrayCodigos = ["enter","imes","ai","ober","ufat"];
    mensajeEncriptado = mensajeEncriptado.toLowerCase()

    for(let i=0; i<= arrayVocales.length; i++){
        if (mensajeEncriptado.includes(arrayVocales[i])){
            mensajeEncriptado = mensajeEncriptado.replaceAll(arrayVocales[i], arrayCodigos[i])
        }
    }
    return mensajeEncriptado
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(encriptacion.value);
    mensaje.value = textoEncriptado;
    encriptacion.value ="";
}

function desencriptar(mensajeDesencriptado){
    let arrayVocales = ["e","i","a","o","u"];
    let arrayCodigos = ["enter","imes","ai","ober","ufat"];
    mensajeDesencriptado = mensajeDesencriptado.toLowerCase();

    for(let i=0; i<= arrayCodigos.length; i++){
        if (mensajeDesencriptado.includes(arrayCodigos[i])){
            mensajeDesencriptado = mensajeDesencriptado.replaceAll(arrayCodigos[i], arrayVocales[i])
        }
    }
    return mensajeDesencriptado
}

function copiar(){
    const textoCopiado= mensaje;
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value);
    alert("Texto copiado");
    textoCopiado.value = "";
}

