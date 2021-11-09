soma = 0
for (x=0;x<=1000;x+=1) {
    soma+=x
}
console.log(soma)


let idadeCarolzita = 20
let idadeMurilo = 25
let idadeBaêta = 20 

if(idadeCarolzita == idadeMurilo && idadeCarolzita == idadeBaêta) {
    console.log('Todos tem a mesma idade')
}
else if(idadeCarolzita < idadeMurilo && idadeCarolzita < idadeBaêta) {
console.log('A Carol é a pessoa mais nova')
}
else if( idadeMurilo < idadeBaêta && idadeMurilo < idadeCarolzita) {
console.log('A Murilo é a pessoa mais nova')
}
else if(idadeBaêta < idadeMurilo && idadeBaêta < idadeCarolzita){
console.log('A Baêta é a pessoa mais nova')
} 
else {
    console.log('Tem a mesma idade')}