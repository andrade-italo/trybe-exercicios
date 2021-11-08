let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var soma = 0
var cont = 0
for (x in numbers) {
    cont ++; soma += numbers[x]
}
var media = soma/x
if (media <= 20) {
    console.log("Valor menor ou igual a 20")
}
else {
    console.log("Valor maior que 20")
}