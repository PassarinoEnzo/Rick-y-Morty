export default function validation(input){
    const error = {}
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const regexPassword = new RegExp("[0-9]")

    if(!regexEmail.test(input.email)){
        error.email = "Debe ingresar un email valido!"
    }
    if(!input.email){
        error.email = "Debe ingresar un email!"
    }
    if(input.email.length > 35){
        error.email = "El email debe tener menos de 35 caracteres!"
    }
    if(!regexPassword.test(input.password)){
        error.password = "La contraseña debe tener al menos un numero!"
    }
    if(input.password.length < 6 || input.password.length > 10){
        error.password = "La contraseña debe tener entre 6 y 10 caracteres!"
    }
    
    return error;
}