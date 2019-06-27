var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', adicionarPaciente);

function adicionarPaciente(evento) {
  evento.preventDefault();

  var form = document.querySelector('#form-paciente');

  var nome = form.nome.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;
  var peso = form.peso.value;

  var pacienteTr = document.createElement('tr');

  var nomeTd = document.createElement('td');
  var pesoTd = document.createElement('td');
  var alturaTd = document.createElement('td');
  var gorduraTd = document.createElement('td');
  var imcTd = document.createElement('td');

  var tabela = document.querySelector('#tabela-pacientes');

  tabela.appendChild(pacienteTr);

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  imcTd.textContent = calculaImc(peso, altura);

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);
}
