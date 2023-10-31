const isLowerCase=require('./isLowerCase');

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