// Armazenando uma funcao em uma variavel

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)


// Armazenando uma FUNÇÃO ARROW em uma variável
// => substitui o nome function EXEMPLO

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 4))


// USAR o return sem ao menos usa-lo de forma implicita
 // usando uma função com apenas uma linha de código tirando as {} EXEMPLO A BAIXO
// => ARROW FUNCTION =>

 const subtracao = (a, b) => a - b
 console.log(subtracao(5, 3))

 const imprimir2 = a => console.log(a)
 imprimir2('Legal!!!')