const angulo_a = 45;
const angulo_b = 65; 
const angulo_c = -700;
var soma = angulo_a+angulo_b+angulo_c;

if ((soma) == 180) {
    console.log(true);
}
else if (soma < 0) {
    console.log("Error");
}
else {
    console.log(false);
}