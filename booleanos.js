let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)
console.log(!!isAtivo)




// COMO EU FAÇO PARA FAZER UM VALOR SER FALSE OU TRUE
//AO USAR 1 ESCLAMAÇÃO O ITEM SE TORNA FALSE
// AO USAR 2 ESCLAMAÇÕES O ITEM SE TORNA NOVAMENTE OQUE ELE ERA
// AO USAR O 2 ESCLAMAÇÕES O VALOR FICA VERDADEIRO


console.log('os verdadeiros...')

console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')

console.log(!!0)
console.log(!!'')//sem epsaço
console.log(!!null)
console.log(!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log('para finalizar')

console.log(!!('' || null || 0 || ' '))


let nome = ''
console.log(nome || 'Desconhecido')
// ele vai imprimir o desconhecido por que o nome nao foi preenchido

let nom = 'Wesley'
console.log(nom || 'Desconhecido')





const barber = 'Wesley'
console.log(barber || 'Dayane')