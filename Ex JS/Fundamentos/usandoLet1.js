var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
    // A let procura dentro do escopo menor se a saida de dados, caso ao contrario ela procura fora
}
console.log('fora = ', numero)