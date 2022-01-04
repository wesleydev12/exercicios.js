// primeiro vem o nome da variavel e depois o identificador, logo em seguida vem o valor da variavel. EXEMPLO ABAIXO.

const peso1 = 1.0  //ponto flutuante
const peso2 = Number('2.0')

console.log(peso1, peso2)
// TESTE PARA VER SE A VARIAVEL TEM NUMERO INTEIRO OU NÃO. EXEMPLO A BAIXO.
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))


const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2)


console.log(media.toFixed(2))

//PARA TIRAR AS CASAS DECIMAIS DAS RESPOSTAS DO CÓDIGO
// COLOCA      console.log(variavel.toFixed) e poem entre pareteses o numero de casas decimais que tem que ser apresentado