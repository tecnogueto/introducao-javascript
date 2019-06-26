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

  var pesoEhValido = true;
  var alturaEhValida = true;

  if (altura <= 0 || altura >= 3.0) {
    console.log('Altura inválida');
    pesoEhValido = false;
    tdImc.textContent = 'Altura inválida!';
    paciente.classList.add('erro');
  }

  if (peso <= 0 || peso >= 1000) {
    console.log('Peso inválido');
    alturaEhValida = false;
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
