// UM SINAL DE = ELE ATRIBUI
// DOIS SINAIS DE == OPERDARO RELACIONAU QUE COMPARA A IGUALDADE ENTRE DUAS COISAS
// TAMBÉM É UM OPERADOR BINÁRIO

// TRÊS SINAIS DE === É ESTRITAMENTE IGUAL AO OUTRO VALOR ?



console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', '3' != 3) // DIFERENTE ?
console.log('04)', '3' !== 3) // EXTRITAMENTE DIFERENTE ?

console.log('05)', 3 < 2) 
console.log('06)', 3 > 2) 
console.log('07)', 3 <= 2) 
console.log('08)', 3 >= 2) 

const d1 = new Date(0)
const d2 = new Date(0)

// MUITO IMORTANTE USAR ESSE METODO DE ESTRITAMENTE IGUAL ! ! !

console.log('09)', d1 === d2)


console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', d1.getTime() == d2.getTime())

console.log('12)', undefined == null)
console.log('12)', undefined === null)

