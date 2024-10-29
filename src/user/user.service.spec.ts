import { somar } from "../utils/somar"

test('Este é o meu primeiro teste', () =>{

    const resultado = somar(3,2);
    
    expect(resultado).toEqual(5);
})