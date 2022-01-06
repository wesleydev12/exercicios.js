// novo recurso

// DESTRUTURANDO UM OBJECT


const pessoa = {
    nome: 'Wesley',
    idade: '30',
    dataNascimento: '09/12/1991',
    endereco: {
        logradouro: 'Rua Viriato Ribeiro',
        numero: '1190',
        cep: '60442-642'
    }
}

const {nome, dataNascimento,} = pessoa
console.log(nome, dataNascimento)

const {nome: n, dataNascimento: dtn} = pessoa
console.log(n, dtn)

const { sobreNome: sn, bemHumorado: bh = true} = pessoa
console.log(sn, bh)

const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)