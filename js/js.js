let text = document.querySelector(".text");
let message = document.querySelector(".message");
let btnCopy = document.querySelector(".copy");
btnCopy.style.display = "none"


//Encrypt

function encrypted() {
    let textoEncript = encrypt(text.value)
    message.value = textoEncript
    message.style.backgroundImage="none"
    text.value = ""
    btnCopy.style.display = "block"

}

function encrypt(stringEncrip) {
    let matrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringEncrip = stringEncrip.toLowerCase();

    for(let i=0; i < matrix.length; i++) {
        if(stringEncrip.includes(matrix[i][0])) {
            stringEncrip = stringEncrip.replaceAll(matrix[i][0], matrix[i][1])
        }                
    }
    return stringEncrip;

    
}


//Decrypt

function decrypt() {
    let textoEncript = desencrip(text.value)
    message.value = textoEncript
    text.value = ""  
}

function desencrip(stringDesencrip) {
    let matrix = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencrip = stringDesencrip.toLowerCase();

    for(let i=0; i < matrix.length; i++) {
        if(stringDesencrip.includes(matrix[i][1])) {
            stringDesencrip = stringDesencrip.replaceAll(matrix[i][1], matrix[i][0])
        }
    }

    return stringDesencrip;
}


//Copy button

function copy() {
    
    message.select();
    navigator.clipboard.writeText(message.value)
    message.value = "";
    alert("Copied");
}
