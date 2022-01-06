// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa'  // contexto léxico 2
    return saudacao
}

// Objetos são grupos aniinhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Viriato Ribeiro 1190',
        numero: '1190',
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)