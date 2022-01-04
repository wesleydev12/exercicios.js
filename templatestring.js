 const nome = "Rebeca";
 const concatenacao = 'Olá' //+ nome + '!';
 const humor = "Você está se sentindo bem ?"
 const template = `
    Olá ${nome}!`

console.log(template)
console.log(concatenacao)
console.log(template, humor)


// EXPRESSOES

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)