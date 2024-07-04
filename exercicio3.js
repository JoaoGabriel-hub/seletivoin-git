var nota1 = prompt("Primeira nota: ")
var nota2 = prompt("Segunda nota: ")
var nota3 = prompt("Terceira nota: ")
nota1 = parseFloat(nota1)
nota2 = parseFloat(nota2)
nota3 = parseFloat(nota3)

media = (nota1 + nota2 + nota3)/3

if (media >= 6) {
    console.log("Aprovado") 
}
else {
    console.log("Reprovado")
}