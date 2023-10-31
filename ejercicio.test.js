function contieneLetraF(f) {
    let cadena=f;
    return cadena.toLowerCase().includes('f');
}

test('la cadena "FEDERICO" retorna true',()=>{
    const result=contieneLetraF("FEDERICO")
    expect(result).toBe(true);
})

test('la cadena "ANDREw" retorna false',()=>{
    const result=contieneLetraF('ANDREw')
    expect(result).toBe(false);
})

test('la cadena "FFFff" retorna true',()=>{
    const result=contieneLetraF('FFFff')
    expect(result).toBe(true);
})

test('la cadena "F#222" retorna true',()=>{
    const result=contieneLetraF('F#222')
    expect(result).toBe(true);
})

test('la cadena "345gh" retorna false',()=>{
    const result=contieneLetraF('345gh')
    expect(result).toBe(false);
})

//module.exports=contieneLetraF;



function isLowerCase(sentence) {
    return (sentence == sentence.toLowerCase());
}

test('la cadena "texto" retorna true',() =>{
    const result = isLowerCase('texto')
    expect(result).toBe(true);
});

test('la cadena "Julli" retorna false',() =>{
    const result = isLowerCase('Julli')
    expect(result).toBe
});

test('la cadena "amigo23" retorna false',() =>{
    const result = isLowerCase('amigo23')
    expect(result).toBe(true);
});

test('la cadena "345" retorna true',() =>{
    const result = isLowerCase('345')
    expect(result).toBe(true);
});

test('la cadena "false" retorna true',() =>{
    const result = isLowerCase('false')
    expect(result).toBe(true);
});


//module.exports=isLowerCase;


function verificarParImpar(numero1, numero2, numero3) {
    let resultadoDivision = (numero1 / numero2) / numero3;

    if (resultadoDivision % 2 === 0) {
        return "El resultado de la división es un número par.";
    } else {
        return "El resultado de la división es un número impar.";
    }
}


test('division de (4/6)/2 es igual a El resultado de la división es un número par.',()=>{
    const result =verificarParImpar(4,6,2);
    expect(result).toBe("El resultado de la división es un número impar.");
});

test('division de (2/2)/2 es igual a El resultado de la división es un número impar.',()=>{
    const result =verificarParImpar(2,2,2);
    expect(result).toBe("El resultado de la división es un número impar.");
});

test('division de (3/12)/442 es igual a El resultado de la división es un número impar.',()=>{
    const result =verificarParImpar(3,12,442);
    expect(result).toBe("El resultado de la división es un número impar.");
});

test('division de (222/222)/222 es igual a El resultado de la división es un número par.',()=>{
    const result =verificarParImpar(222,222,222);
    expect(result).toBe("El resultado de la división es un número impar.");
});

test('division de (20/20)/20 es igual a El resultado de la división es un número par.',()=>{
    const result =verificarParImpar(20,20,20);
    expect(result).toBe("El resultado de la división es un número impar.");
});


//module.exports=verificarParImpar;


function verificarNumero(numero) {
    if (numero > 0) {
        return "El número es positivo.";
    } else if (numero < 0) {
        return "El número es negativo.";
    } else {
        return "El número es cero.";
    }
}

test('el numero 6 es positivo ',()=>{
    const result = verificarNumero(6);
    expect(result).toBe("El número es positivo.");
});

test('el numero -9 es negativo',()=>{
    const result = verificarNumero(-9);
    expect(result).toBe("El número es negativo.");
});

test('el numero 0 es cero',()=>{
    const result = verificarNumero(0);
    expect(result).toBe("El número es cero.");
});

test('el numero 24.2 es positivo',()=>{
    const result = verificarNumero(24.2);
    expect(result).toBe("El número es positivo.");
});

test('el numero -9999 es negativo',()=>{
    const result = verificarNumero(-9999);
    expect(result).toBe("El número es negativo.");
});

//module.exports=verificarNumero;


function suma(a,b){
    return a +b
}

test('sumar 1+2 es igual a 3', ()=>{
    const result = suma(1,2);
    expect(result).toBe(3);
});

test('sumar 100+100 es igual a 200', ()=>{
    const result = suma(100,100);
    expect(result).toBe(200);
});

test('sumar 50+50 es igual a 100', ()=>{
    const result = suma(50,50);
    expect(result).toBe(100);
});

test('sumar 500+500 es igual a 1000', ()=>{
    const result = suma(500,500);
    expect(result).toBe(1000);
});

test('sumar 2002+2002 es igual a 4004', ()=>{
    const result = suma(2002,2002);
    expect(result).toBe(4004);
});

//module.exports=suma;