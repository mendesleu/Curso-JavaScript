const escola = "cod3r";

console.log(escola.charAt(4)) // Seleciona a letra na palavra
console.log(escola.charAt(5)) // Mostra que se não tem caracter o espaço fica em branco
console.log(escola.charCodeAt(3)) // Codigo tabela unicode
console.log(escola.indexOf('3')) // Ve se tem a letra na palavra

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + ("!"))
console.log(escola.replace(/\d/, 'e')) // Subtitui a letra
console.log(escola.replace(/\w/g, 'e')) // Subtitui todas as letras

console.log('Ana, Maria, Pedro'.split(',')) // Gera um array