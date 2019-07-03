/* var pacientes = document.querySelectorAll('.paciente');

pacientes.forEach(function(paciente) {
  paciente.addEventListener('dblclick', function() {
    paciente.remove();
  });
});
*/

var tabela = document.querySelector('#tabela-paciente');

tabela.addEventListener('dblclick', function(event) {
  var alvoEvento = event.target;
  var paiDoAlvo = alvoEvento.parentNode;
  var nomeCliente = alvoEvento.textContent;

  paiDoAlvo.classList.add('animacao');

  setTimeout(function() {
    paiDoAlvo.remove();
    alert('Você removeu o ' + nomeCliente);
  }, 500);
});
