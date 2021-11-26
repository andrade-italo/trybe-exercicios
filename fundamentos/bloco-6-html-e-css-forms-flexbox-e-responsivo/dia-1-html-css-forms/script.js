let dados = document.getElementById('dados');
const enviar = document.getElementById('enviar');
const input = document.querySelector('form')

function addForm(event) {
  event.preventDefault();
  dados.innerText = ''
  for (let x in input) {
    let dado = document.createElement('p')
    if (input[x] !== null && input[x].checked === true) {
      dado.innerText = input[x].value
      dados.appendChild(dado)
    } else if (input[x] !== null && input[x].checked === false && input[x].type === 'radio') {
      console.log('caguei')
    } else if (input[x] !== null && x > 0 && x < (input.length - 2) && input[x].value !== undefined) {
      dado.innerText = input[x].value
      dados.appendChild(dado)
    }
  }
}
enviar.addEventListener('click', addForm);