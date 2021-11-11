let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald', 
    recorrente: 'Sim'
  };

  lista2 = ['Tio Patinhas', "Christmas on Bear Mountain Dell's Four Color Comics #178",
  'O último MacPatinhas', 'Sim']

  lista3={}
let i=0

for (x in info) {
    lista3[x] = lista2[i]
    i++
    if (info[x] == 'Sim' && lista3[x] == 'Sim') {
      console.log('Ambos são "Sim"')
    }
    else {
      console.log(info[x] + " e " + lista3[x])
    }
}
