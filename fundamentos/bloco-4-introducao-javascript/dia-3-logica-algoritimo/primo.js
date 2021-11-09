var n = 8
var lista_primo = []
for (index = 0;index<=n; index++) {
    if (n%index==0){
        lista_primo.push(index)
    }   
}
if (lista_primo.length == 2) {
    console.log('O numero é primo')
}
else {
    console.log('O numero não é primo')
}