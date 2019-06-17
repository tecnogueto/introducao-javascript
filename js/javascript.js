var titulo = document.querySelector('.titulo');
titulo.textContent = 'Dr. Digão';

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; pacientes.length > i; i++) {
  var linhaPaciente = pacientes[i];

  var tdPeso = linhaPaciente.querySelector('.info-peso');
  var peso = tdPeso.textContent;

  var tdAltura = linhaPaciente.querySelector('.info-altura');
  var altura = tdAltura.textContent;

  var resultado = linhaPaciente.querySelector('.info-imc');

  var imc = peso / (altura * altura);

  resultado.textContent = imc.toFixed(2);

  if (peso <= 0 || peso >= 400) {
    resultado.textContent = 'Peso inválido';
    pacientes[i].classList.add('linha-erro');
  }

  if (altura <= 0 || altura >= 3) {
    resultado.textContent = 'Altura inválida';
    pacientes[i].classList.add('linha-erro');
  }
}
