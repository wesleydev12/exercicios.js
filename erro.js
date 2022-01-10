// ERRSO QUE PODEM ACONTECER
   /*
function imprimirNomeGritado(obj) {
    console.log(obj.name.toUpperCase() + '!!!')
}

const obj = {nome: 'Wesley'}
imprimirNomeGritado(obj)
   */

// TRY é um bloco de código que dentro dele tem um código que você julga que pode gerar um certo tipo de ERRO !
// Se quiser tratar esse erro veja abaixo: -

function tratarErroELancar(erro) {
    throw new Error ('Erro no sistema tente mais tarde.')
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    } 
}

const obj = {nome: 'Wesley'}
imprimirNomeGritado(obj)