var A = [[2, -1], [2, 0]];

var B = [[2, 3], [-2, 1]];

var resultado = [[0, 0], [0, 0]];

for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
        for (var k = 0; k < 2; k++) {
            resultado[i][j] += A[i][k] * B[k][j];
        }
    }
}

for (var i = 0; i < 2; i++) {
    console.log(resultado[i]);
}
