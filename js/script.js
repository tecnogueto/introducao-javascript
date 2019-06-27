var titulo = document.querySelector('.titulo');
titulo.textContent = 'Dr Digão';

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector('.info-peso');
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector('.info-altura');
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector('.info-imc');

  var imc = calculaImc(peso, altura);

  var validarPeso = true;
  var validarAltura = true;

  if (peso <= 0 || peso >= 700) {
    validarPeso = false;
    tdImc.textContent = 'Peso inválido!';
    paciente.classList.add('tr-error');
  }

  if (altura <= 0 || altura >= 3.0) {
    validarAltura = false;
    tdImc.textContent = 'Altura inválida!';
    paciente.classList.add('tr-error');
  }

  if (validarAltura && validarPeso) {
    tdImc.textContent = imc;
  }
}

function calculaImc(peso, altura) {
  var imc = peso / (altura * altura);

  return imc.toFixed(2);
}
