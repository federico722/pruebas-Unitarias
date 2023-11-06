function verificarParImpar(numero1, numero2, numero3) {
    let resultadoDivision = (numero1 / numero2) / numero3;

    if (resultadoDivision % 2 === 0) {
        return "El resultado de la división es un número par.";
    } else {
        return "El resultado de la división es un número impar.";
    }
}

module.exports=verificarParImpar;