const Finanças = {
    despesas : [  130, 450, 310  ],
    receita : [ 1200, 300 ]
}

function soma(lista) {
    let soma = lista.reduce((soma, conta) => soma + conta);
    return soma;
}

let totDes = soma(Finanças.despesas)
let totRec = soma(Finanças.receita)

var dif = totRec - totDes

if (dif >= 0) { console.log('Saldo positivo: ', dif)}
else { console.log('Saldo negativo: ', dif)}