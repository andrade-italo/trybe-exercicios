const n = 7
let cont = 1
var asterisco = '*'
var espace = ' '
var x = n

while (n >= cont) {
    if (cont != n && cont != 1) {
        console.log(espace.repeat(x) + asterisco + espace.repeat(cont-2) + asterisco)
    }

    else {
        console.log(espace.repeat(x) + asterisco.repeat(cont))
    }
x -= 1
cont+=2   
}
