// QUANDO EU QUISER ZERAR UMA VARIAVEL REFERENCIA 
// QUE APONTA PARA UM OBJETO APONTA PARA UM FUNÇÃO
// COLOCAMOS O NULL

// PRA QUE DEFINIR UNDEFIND SE O PRÓPRIO JS DEFINI ISSO ?

let valor // não inicializada 
console.log(valor)

valor = null // ausência de valor
console.log(valor)

/*
NÃO TENTAR ACESSAR ALGO EM UMA VARIAVEL QUE ESTÁ NULL
OU UNDEFINED !
POR QUE CONSEQUENTEMENTE VAI DAR UM ERRO !
*/

// CONSOLE.LOG(VALOR.toString()) erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = undefined // NÃO É UMA PRÁTICA BOA FAZER ISSO
// ESSA SERIA A MELHOR FORMA DE DELETAR O ATRIBUTO DE UM OBJECT A BAIXO
// delete produto.preco
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço