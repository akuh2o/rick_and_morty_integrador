const validation = (data) => {
    let errors = {};

    if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(data.email)){
        errors.email = "ingrese un email valido."
    }
    if (!data.email){
        errors.email = "ingrese un email"
    }
    if (data.email.length > 35) {
        errors.email = "no debe tener mas de 35 caracteres."
    }
    if (data.password.length < 6 || data.password.length > 10){
    errors.password = "Debe tener entre 6 y 10 cararcteres."
    }
    if (!/\d+/.test(data.password)){
        errors.password = "Debe tener un numero."
    }


    return errors;

}

export default validation;