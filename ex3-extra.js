/* Escolha 5 valores inteiros e ordene-os em ordem crescente. No final,
mostre os valores em ordem crescente, uma linha em branco e em
seguida, os valores na sequência */


let lista = [];


for (let i = 0; i < 5; i++) {
    let valor = parseFloat(prompt("Digite um valor: "));
    lista.push(valor);
}

let listaOrdem = lista.slice()

console.log(listaOrdem.sort())
console.log("")
console.log(lista)