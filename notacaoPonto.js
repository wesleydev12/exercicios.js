console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola-2'
console.log(obj1.nome)


// this - - - - O NOME ASSOCIADO AO OBJETO QUE FOR CRIADO A PARTIR DA FUNÇÃO

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Barbearia') //CRIAR INSTANCIA COM new
const obj3 = new Obj('Tapa no Corte!') //CRIAR INSTANCIA COM new
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()