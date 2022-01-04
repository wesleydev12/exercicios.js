// Funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a * b)
    console.log(a / b)
}

imprimirSoma(5, 3)
imprimirSoma(5)
imprimirSoma(5, 3, 10, 25, 12, 48)
imprimirSoma()

// Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))