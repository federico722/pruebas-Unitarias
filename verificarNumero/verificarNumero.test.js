const verificarNumero=require('./verificarNumero');

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