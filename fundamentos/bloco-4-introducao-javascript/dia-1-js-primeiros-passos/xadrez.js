var peças = ['rei', 'rainha', 'bispo', 'torre', 'cavalo', 'peao'];
var jogadas = ['Anda uma casa em qualquer direção', 'Anda na diagonal e em linha reta', 'Anda em diagonal', 'Anda somente em linha reta', 'Anda em L', 'Anda uma casa a frente']
var saida = "Pao".toLowerCase()


for (cont = 0;  cont <= 5; cont++)  {
    if (saida == peças[cont]) {
        console.log(jogadas[cont]);
        break
    }
    else if (cont == 5)
        console.log("erro")
}