var A = [];
var linhasA = parseInt(prompt("Digite o número de linhas da matriz A:"));
var colunasA = parseInt(prompt("Digite o número de colunas da matriz A:"));

for (var i = 0; i < linhasA; i++) {
    A[i] = [];
    for (var j = 0; j < colunasA; j++) 
        {   A[i][j] = parseInt(prompt(`Digite o elemento A[${i+1}][${j+1}]:`));  }
}

var B = [];
var linhasB = parseInt(prompt("Digite o número de linhas da matriz B:"));
var colunasB = parseInt(prompt("Digite o número de colunas da matriz B:"));

for (var i = 0; i < linhasB; i++) {
    B[i] = [];
    for (var j = 0; j < colunasB; j++) 
        {   B[i][j] = parseInt(prompt(`Digite o elemento B[${i+1}][${j+1}]:`));   }
}

if (colunasA !== linhasB) 
    {  console.log("Impossível fazer a multiplicação");  } 
else {
    var resultado = [];
    for (var i = 0; i < linhasA; i++) {
        resultado[i] = [];
        for (var j = 0; j < colunasB; j++) {
            resultado[i][j] = 0;
        }
    }

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
