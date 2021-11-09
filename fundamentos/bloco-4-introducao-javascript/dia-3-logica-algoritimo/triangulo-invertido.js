const n = 5
let cont = 1
var asterisco = '*'
var espace = ' '
var x = n
while (n >= cont) {
    x-=1
    console.log(espace.repeat(x) + asterisco.repeat(cont))
    cont++
    
}