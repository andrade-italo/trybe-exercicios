let salario = 3000
var leao 
var salario_base


if (salario < 1556.94) {
    salario_base = salario * (1 - 0.08); 
}
else if (salario > 1556.94 && salario < 2594.93) {
    salario_base = salario * (1 - 0.09);
}
else if (salario > 2594.92 && salario < 5189.83)  {
    salario_base = salario * (1 - 0.11); 
}
else if (salario > 5189.82) {
    salario_base = salario - 570.88;
}


if (salario_base <= 1903.98) {
        leao = 0
}else if (salario_base > 1903.98 && salario_base  <= 2826.65) {
    leao = salario_base * 0.075 - 142.80
}else if (salario_base > 2826.65 && salario_base  <=3751.05) {
    leao = salario_base * 0.15 - 354.80
}else if (salario_base > 3751.05 && salario_base  <=4664.68) {
    leao = salario_base * 0.225 - 636.13
}else if (salario_base > 4664.68) {
    leao = salario_base * 0.275 - 869.36
}
let liq = salario_base - leao
console.log(liq)