/* Implemente uma função recursiva que,dados dois números inteiros x e
n, calcula o valor de xn. */

var n1 = parseInt(prompt("Primeiro numero: "))
var n2 = parseInt(prompt("Segundo numero: "))

function mult(x, n) { return x * n; }

console.log(mult(n1, n2))