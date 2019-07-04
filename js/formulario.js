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
 var ordem = ["João", "Paulo", "Douglas", "Erica", "tatiana"];
ordem.sort();
console.log(ordem); 

var pesoss = [100, 80, 54, 85, 46];
pesoss.sort(function(a,b ){return(b-a)} );
console.log(pesoss);

var altura = [2.00, 1.72, 1.64, 1.73, 1.65];
pesoss.sort(function(c,d){return(c-d)} );
console.log(altura);

var linha1 = ["paulo", 100]
var linha2 = "eu";
ordem = [];
ordem = [linha1, linha2]
ordem.sort()

var x = [
  ["paulo", 24],
  ["Joao", 20]
];

x.sort()
console.log(x)
