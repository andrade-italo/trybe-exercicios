let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var armazenado = 0
for (x in numbers) {
    if (numbers[x] % 2 != 0) {
        armazenado ++
    }
}
if (armazenado == 0) {
    console.log('não há valor impar')
}
else {
    console.log(armazenado)
}