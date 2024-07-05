/* Faça um programa que leia 6 valores. Estes valores são somente
negativos ou positivos (desconsidere os valores nulos). A seguir, mostre a
quantidade de valores positivos digitados. */


let contPos = 0;
let lista = [];

for (let i = 0; i < 6; i++) {
    let valor = parseFloat(prompt("Digite um valor (positivo ou negativo):"));
    lista.push(valor);
}


for (let i = 0; i < lista.length; i++) {
    if (lista[i] > 0) {
        contPos++;
    }
}

console.log(contPos);