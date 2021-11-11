function verificaPalindromo(entrada) {
entrada = entrada.toLowerCase()
let palindromo = ''
for (x in entrada ) {
    palindromo += entrada[entrada.length - x - 1]
}
if (palindromo == entrada) {
    return true
}
else {
    return false
}
}

console.log(verificaPalindromo('ab'))
