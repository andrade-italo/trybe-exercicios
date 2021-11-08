let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var armazenado = 0
for (x in numbers) {
    if (numbers[x] > armazenado) {
        armazenado = numbers[x]
    }
}
console.log(armazenado)