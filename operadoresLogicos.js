function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    //const comprarTv32 = !!(trabalho1 ^ trabalho2); // BITWISI XOR
    const comprarTv32 = trabalho1 != trabalho2; // OU exclusivo
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}   

console.log(compras(true, true))
console.log(compras(false, true))
console.log(compras(false, false))
console.log(compras(true, false))



















/*
    v e v -> v
    v e f -> f
    v e ? -> f
*/
//Basta um ser falso que a resposta dara FALSE

/*
    v ou ? -> v
    f ou v -> v
    f ou f -> f
*/
//Basta um da verdadeiro que a resposta é TRUE
/*
    v xor v -> f
    v xor f -> v
    f xor v -> v
    f xor f -> f
*/
//Se os dois forem verdadeiros ou falsos a resposta é FALSE
//XOR ou exvlusivo
//Para dar verdadeiro precisa ter um verdadeiro e outro falso

/*
!v -> false
!f -> true
*/




