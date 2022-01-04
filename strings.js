const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
// vai mostrar o caractere do indice 4 começando do ZERO onde ZERO é o primeiro.
console.log(escola.charCodeAt(3))

// EU TENHO UM DIGITO E QUERO SABER EM QUE INDICE ELE ESTÁ DENTRO DA PALAVRA.
console.log(escola.indexOf('3'))
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

// concatenando

console.log('Escola '.concat(escola).concat("!"))

console.log('Escola ' + escola + '!')
console.log(escola.replace(3, 'e'))

// ARRAY?
// É UMA ESTRUTURA LINEAR, AGRUPADOR DE VARIÁVEIS, DENTRO DA ESTRUTURA TEM AS POSIÇÕES CADA UMA COM SEU VALOR
// POSSO PEGAR UMA STRING E CONVERTER.

console.log('Ana,Maria,Pedro')
console.log('Ana,Maria,Pedro'.split(','))   // (/,/)
