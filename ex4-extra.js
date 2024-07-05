/* 4. Crie um algoritmo que transforma as notas do sistema numérico para
sistema de notas em caracteres Tipo A, B e C
● hde 90 para cima - A
● entre 80 e 90 -B
● entre 70 e 79 - C
● entre 60 e 69 - D
● menor que 60 - F */

var nota = parseInt(prompt("Digite um numero: "))

function transforma(x) {
    if (x >= 90) { console.log("A");}
    else  if (80 <= x) { console.log("B");} 
    else  if (70 <= x) { console.log("C");} 
    else  if (60 <= x) { console.log("D");} 
    else { console.log("E");} 
}

transforma(nota)