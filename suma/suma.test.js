const suma=require('./suma');

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

