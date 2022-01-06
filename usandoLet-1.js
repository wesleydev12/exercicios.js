let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero)


// LET tem escopo de bloco, ou seja: ELE ESTARA VISIVEL APENAS DENTRO DO BLOCO AO QUAL ELE FOI DEFINIDO. 
// EMBORA OS DOIS LET TENHAM O MESMO NOME, ELES VAO PODER COEXISTIR POR CONTA DO ESCOPO (BLOCO) AO QUAL CADA UM FOI CRIADO.

let numero = 1
{
    let numero2 = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero)