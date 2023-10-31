
const  verificarParImpar=require('./verificarParImpar');

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
