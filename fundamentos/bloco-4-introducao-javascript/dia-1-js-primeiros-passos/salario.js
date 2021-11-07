var salario = 3000
var desconto
var leao 
var salario_base

if (salario < 1556.94) {
    desconto = salario * 0.08 
}
else if (salario > 1556.94 && salario < 2594.93) {
    desconto = salario * 0.09 
}
else if (salario > 2594.92 && salario < 5189.83)  {
    desconto = salario * 0.11 
}
else if (salario > 5189.82) {
    desconto = 570.88
}
salario_base = salario - desconto

if (salario_base <= 1903.98) {
    leao = 0
}

else if (salario_base > 1903.98 && salario <=2826.65) {
    leao = salario_base * 0.075
}

else if (salario_base > 2826.65 && salario <=3751.05) {
    leao = salario_base * 0.15
}
else if (salario_base > 3751.05 && salario <=4664.68) {
    leao = salario_base * 0.225
}
else if (salario_base > 4664.68) {
    leao = salario_base * 0.275
}
var liq = salario_base - leao

console.log(leao)