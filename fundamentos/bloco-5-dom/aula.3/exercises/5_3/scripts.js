function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
/*O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. 
Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione 
como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro 
estão no array pois representam respectivamente Domingo e Segunda-feira.*/
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function diasDoMes() {
  const days = document.getElementById('days')
  for (x of dezDaysList) {
    let li = document.createElement('li')
    if (x === 24 || x === 31) {
      li.classList = 'day holiday'
    } else if (x === 4 || x === 11 || x === 18) {
      li.classList = 'day friday'
    } else if (x === 25) {
      li.classList = 'day holiday friday'
    } else {
      li.classList = 'day'
    }
    li.innerText = x
    days.appendChild(li)
  }
}
diasDoMes()

/*Implemente uma função que receba como parâmetro a string "Feriados" e crie 
dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .*/
let botaoContainer = document.querySelector('.buttons-container');

function feriado(nomeDoBotao) {
  let botao = document.createElement('button')
  botao.innerHTML = nomeDoBotao;
  botao.id = "btn-holiday"
  botaoContainer.appendChild(botao)
}
feriado("Feriados")

/*Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda 
a cor de fundo dos dias que possuem a classe "holiday". É interessante que este botão
possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração 
inicial com a cor "rgb(238,238,238)" .*/
let holy = document.querySelectorAll(".holiday")
let btnFeriado = document.querySelector('#btn-holiday')
btnFeriado.addEventListener("click", bgcolor)

function bgcolor() {
  for (let x of holy) {
    if (x.style.background === "blue") {
      x.style.background = "rgb(238,238,238)"
    } else {
      x.style.background = "blue"
    }
  }
}

/*Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie 
dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .*/
function friday(dia) {
  let sextou = document.createElement('button')
  sextou.innerText = dia
  sextou.id = "btn-friday"
  botaoContainer.appendChild(sextou)
}
friday("Sexta-feira")

/*Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" 
que modifica o texto exibido nos dias que são Sexta-feira.*/
function modSexta() {
  let btnSextou = document.getElementById('btn-friday')
  btnSextou.addEventListener('click', clickSexta)
  let sexta = document.querySelectorAll('.friday')
  let sextaArray = [4, 11, 18, 25]

  function clickSexta() {
    for (let x in sexta) {
      if (isNaN(sexta[x].innerText) === false) {
        sexta[x].innerText = "SEXTOU!!!"
      } else {
        sexta[x].innerText = (sextaArray[x])
      }
    }
  }
}

modSexta()

//Implemente duas funções que criem um efeito de "zoom". Ao passar o mouse em um dia 
//o texto desse dia deve aumentar e, quando o mouse sair do dia, o texto deve retornar ao tamanho original.
let zoom = document.querySelectorAll('.day')
for (let x of zoom) {
  x.addEventListener('mouseover', zoomIn)
  x.addEventListener('mouseout', zoomOut)
}
function zoomIn() {
  event.target.style.fontSize = '21px';
  event.target.style.fontWeight = '1000';
}
function zoomOut() {
  event.target.style.fontSize = '20px';
  event.target.style.fontWeight = '200';
}

/* Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função
deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar 
dinamicamente um elemento com a tag <span> contendo a tarefa. O elemento criado deverá
ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .*/

let myTasks = document.querySelector(".my-tasks")
function aleatoria(tarefa) {
  let aleatorio = document.createElement('span')
  aleatorio.innerText = tarefa
  myTasks.appendChild(aleatorio)
}
aleatoria("Escovar dentes")

/*Implemente uma função que adiciona uma legenda com cor para a tarefa criada no 
exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e 
criar dinamicamente um elemento de tag <div> com a classe task. O parâmetro cor deverá 
ser utilizado como cor de fundo da <div> criada. O elemento criado deverá ser adc como 
filho da tag <div> que possui a classe "my-tasks" .*/

function colorir(cor) {
  let task = document.createElement('div')
  task.className = "task"
  task.style.background = cor
  myTasks.appendChild(task)
}

colorir("red")

/*Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag 
<div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, 
ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou 
seja, esta tarefa está deixando de ser uma tarefa selecionada.*/

let taskei = document.querySelector('.task')
taskei.addEventListener('click', clickInOut)

function clickInOut(event) {
  if (event.target.className === 'task selected') {
    taskei.className = 'task'
  } else {
    taskei.className = 'task selected'
  }
}

/*Implemente uma função que adiciona um evento que, ao clicar em um dia do mês, atribua
a este dia a cor da legenda da sua tarefa selecionada. Ao clicar novamente no dia com 
a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .*/
let setCor = 'orange'
days.addEventListener('click', colorDay)

function colorDay(event) {
  if (event.target.style.color === setCor) {
    event.target.style.color = 'rgb(119,119,119)'
  } else {
    event.target.style.color = setCor
  }
}

/*Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS",
adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR". Se nenhum
caractere for inserido no campo input, a função deve retornar um alert com uma mensagem
de erro ao clicar em "ADICIONAR". Ao pressionar a tecla "enter" o evento também 
deverá ser disparado*/

let taskeiNaList = document.querySelector('.task-list')
let compromisso = document.querySelector("#task-input")
let botaoAdc = document.querySelector('#btn-add')
botaoAdc.addEventListener('click', adicionei)
compromisso.addEventListener('keyup', adicioneiEnter)

function adicionei() {
  if (compromisso.value.length > 0) {
    let temQueAdc = document.createElement('li')
    temQueAdc.innerText = compromisso.value
    taskeiNaList.appendChild(temQueAdc)
    compromisso.value = ''
  } else {
    alert('Nenhum caracter inserido')
  }
}

function adicioneiEnter(event) {
  if (event.key === 'Enter' && compromisso.value.length === 0) {
    alert('Nenhum caracter inserido')
  } else if (event.key === 'Enter') {
    let temQueAdc = document.createElement('li')
    temQueAdc.innerText = compromisso.value
    taskeiNaList.appendChild(temQueAdc)
    compromisso.value = ''
  }
}

