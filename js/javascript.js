// pegar elemento por id
var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; pacientes.length; i++) {
  var paciente = pacientes[i];

  // pegando peso
  var tdPeso = paciente.querySelector('.info-peso');
  var peso = tdPeso.textContent;

  // pegando altura
  var tdAltura = paciente.querySelector('.info-altura');
  var altura = tdAltura.textContent;

  // pegando td imc
  var tdImc = paciente.querySelector('.info-imc');

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if (!alturaEhValida) {
    pesoEhValido = false;
    tdImc.textContent = 'Altura inválida!';
    paciente.classList.add('erro');
  }

  if (!pesoEhValido) {
    pesoEhValido = false;
    tdImc.textContent = 'Peso inválido!';
    paciente.classList.add('erro');
  }

  if (alturaEhValida && pesoEhValido) {
    // calculando imc
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso) {
  if (peso >= 0 && peso <= 600) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}