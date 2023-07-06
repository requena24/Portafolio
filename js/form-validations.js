export function validar (input){
    const tipoDeInput = input.dataset.tipo;

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector('.input-message-error').innerHTML = '';
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensaje (tipoDeInput, input);
    }
}

const tipoErrores = [
    "valueMissing",
    "patternMismatch",
    "typeMismatch",
];

const mensajesError = {
    name: {
        valueMissing: 'No debe de estar en blanco o vació este campo.',
        patternMismatch: 'Debe contener máximo 50 caracteres.'
    },
    email: {
        valueMissing: 'No debe de estar en blanco o vació este campo.',
        typeMismatch: 'Debe de tener el formato de email con @'
    },
    subject: {
        valueMissing: 'No debe de estar en blanco o vació este campo.',
        patternMismatch: 'Debe contener máximo 50 caracteres.'
    },
    textarea: {
        valueMissing: 'No debe de estar en blanco o vació este campo.',
        patternMismatch: 'Debe contener máximo 300 caracteres.'
    },
};

function mostrarMensaje(tipoDeInput, input){
    let mensaje = '';
    tipoErrores.forEach ( error => {
        if(input.validity[error]){
            mensaje = mensajesError[tipoDeInput][error]
        };
    });
    return mensaje;
};

function habilitarBtn(){
    let nombre = document.getElementById("name").value;
    let correo = document.getElementById("email").value;
    let telefono = document.getElementById("telephone").value;
    let asunto = document.getElementById("subject").value;
    let mensaje = document.getElementById("message").value;
    let val = 0;

    if(nombre == ''){
        val++;
    }
    if(correo == ''){
        val++;
    }
    if(telefono == ''){
        val++;
    }
    if(asunto == ''){
        val++;
    }
    if(mensaje == ''){
        val++;
    }
    if(val == 0){
        document.getElementById('boton-enviar').disabled = false;
    } else {
        document.getElementById('boton-enviar').disabled = true;
    }
}

document.getElementById("name").addEventListener('blur', habilitarBtn);
document.getElementById("email").addEventListener('blur', habilitarBtn);
document.getElementById("telephone").addEventListener('blur', habilitarBtn);
document.getElementById("subject").addEventListener('blur', habilitarBtn);
document.getElementById("message").addEventListener('blur', habilitarBtn);
document.getElementById("boton-enviar").addEventListener("click", () =>{
    
    alert("Se envió su petición!")
});



