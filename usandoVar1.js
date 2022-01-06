
{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
                // em outras linguagens essa variavel só estaria visivel dentro deste bloco 
            }
        }
    }
}
console.log(sera)

// oque sera scopo ? até onde a sua variavel é visivel?

function teste() {
    var local = 123
    // console.log(local)
}
//  2---- O local onde a variavel foi definida esta dentro do mesmo SCOPOE
// OQUE É ESCOPO ?
//Escopo é a acessibilidade de objetos, variáveis e funções em diferentes partes do código. Em outras palavras, o que determina quais são os dados que podem ser acessados em uma determinada parte do código é o escopo.


//  1---- quando eu defino uma variavel dentro de uma função o ESCOPO dessa variavel é dentro dessa função apenas !
teste()
console.log(local)


// QUANDO EU CRIO UMA VARIAVEL FORA DE UMA FUNÇÃO ESSA VARIÁVEL SE TORNA GLOBAL
// ISSO TUDO COM VAR
