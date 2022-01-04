// ARRAY É UMA FORMA DE AGRUPAR MULTIPLOS VALORES COM UMA ESTRUTURA SÓ COM UM ÚNICO INDENTIFICADOR

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])// undefined

valores[4] = 10
console.log(valores)
console.log(valores.length)
//LENGTH usado para verificar quantos elementos tem dentro de um ARRAY 

//PUSH usado para adcionar varios elementos dentro de uma ARRAY

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//POP usado para retirar o ultimo elemento da ARRAY

console.log(valores.pop())


// DELETE usado para deletar os elementos da ARRAY por seu número de indice [cochete]

delete valores[0]


console.log(typeof valores)