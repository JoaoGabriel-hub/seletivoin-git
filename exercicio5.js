var cont = 0

for (; cont < 5; cont++) {
    var num = prompt("Digite um número: ")
    num = parseInt(num)

    if (num % 3 == 0 && num % 5 == 0) {
        console.log("fizzbuzz")
    }
    else {
        if (num % 3 == 0) {
            console.log("fizz")
        }
        if (num % 5 == 0) {
            console.log("buzz")
        }
    }
}
