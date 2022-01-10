function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
const obj2 = { max: 80, min: 20 }
console.log(rand(obj))
console.log(rand(obj2))
console.log(rand({ min: 955 }))
console.log(rand({}))










// SIGNIFICA QUE EU VOU PASSAR UM OBJECT PARA ESSA FUNÇÃO
// E DENTRO DA MINHA FUNÇÃO EM VEZ DE ACESSAR O (object.min, object.max)
// QUERO QUE ELE JÁ TIRE DENTRO DO OBJECT O ATRIBUTO MIN & MAX

