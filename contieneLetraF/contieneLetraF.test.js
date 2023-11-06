
const contieneLetraF=require('./contieneLetraF');

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
