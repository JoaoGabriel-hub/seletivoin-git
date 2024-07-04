// criando um array e lendo as dimensões de A
var A = [];
var linhasA = parseInt(prompt("Digite o número de linhas da matriz A:"));
var colunasA = parseInt(prompt("Digite o número de colunas da matriz A:"));

// lendo os elementos de A
for (var i = 0; i < linhasA; i++) {
    A[i] = [];
    for (var j = 0; j < colunasA; j++) 
        {   A[i][j] = parseInt(prompt(`Digite o elemento A[${i+1}][${j+1}]:`));  }
}

// criando um array e lendo as dimensões de B
var B = [];
var linhasB = parseInt(prompt("Digite o número de linhas da matriz B:"));
var colunasB = parseInt(prompt("Digite o número de colunas da matriz B:"));

// lendo os elementos de B
for (var i = 0; i < linhasB; i++) {
    B[i] = [];
    for (var j = 0; j < colunasB; j++) 
        {   B[i][j] = parseInt(prompt(`Digite o elemento B[${i+1}][${j+1}]:`));   }
}

if (colunasA !== linhasB) 
    {  console.log("Impossível fazer a multiplicação");  } 
else {
    // criando uma matriz resultado com 0 em todos os elementos
    var resultado = [];
    for (var i = 0; i < linhasA; i++) {
        resultado[i] = [];
        for (var j = 0; j < colunasB; j++) {
            resultado[i][j] = 0;
        }
    }

    // multiplicando A e B
    for (var i = 0; i < linhasA; i++) {
        for (var j = 0; j < colunasB; j++) {
            for (var k = 0; k < colunasA; k++) {
                resultado[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    for (var i = 0; i < resultado.length; i++) 
        {   console.log(resultado[i]);   }
}
