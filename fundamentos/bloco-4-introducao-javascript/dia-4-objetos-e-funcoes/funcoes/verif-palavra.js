function verificaFim(string_word, string_fim){
tamanho = string_word.length - string_fim.length
lista_nova = ''

for (index = tamanho; index < string_word.length; index +=1){
    lista_nova += string_word[index]
    
}
if (lista_nova == string_fim) {
    return true
}
else {
    return false
}
}
console.log(verificaFim('Tu viste', 'viu'))
