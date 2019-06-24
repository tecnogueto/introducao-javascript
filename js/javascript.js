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

var botaoAdicionar = document.querySelector ('#adicionar-paciente');
botaoAdicionar.addEventListener ('click', mostrarAlerta);

function mostrarAlerta (evento){
evento.preventDefault ();
alert ('Clique Aqui');

var formulario = document.querySelector ('#formulario');
var nome = formulario.nome.value;
var peso = formulario.peso.value;
var altura = formulario.altura.value;
var gordura = formulario.gordura.value;

var pacienteTr = document.createElement ("tr");
var nomeTd = document.createElement ("td"); 
var pesoTd = document.createElement ("td"); 
var alturaTd = document.createElement ("td"); 
var gorduraTd = document.createElement ("td"); 


nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;

pacienteTr.appendChild (nomeTd);
pacienteTr.appendChild (pesoTd);
pacienteTr.appendChild (alturaTd);
pacienteTr.appendChild (gorduraTd);

var table = document.querySelector ('#tabela-paciente);
table.appendChild (pacienteTr);
}