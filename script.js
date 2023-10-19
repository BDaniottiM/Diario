function showMessage(message) {
  var output = document.getElementById("output");
  output.innerHTML = message;
  output.style.display = "block";
}

function getPatente() {
  var patente = prompt(
    "Selecione a patente:\n[ 0 ] Cadet\n[ 1 ] Officer I\n[ 2 ] Officer II\n[ 3 ] Officer III\n[ 4 ] Senior Officer\n[ 5 ] Sergeant III\n[ 6 ] Sergeant II\n[ 7 ] Sergeant I\n[ 8 ] Lieutenant\n[ 9 ] Captain\n[ 10 ] Police Commander\n[ 11 ] Department Chief\n[ 12 ] Superintendent\n[ 13 ] General Superintendent\n[ 14 ] Chief Of Police"
  );
  switch (parseInt(patente)) {
    case 0:
      return "Cadet";
    case 1:
      return "Officer I";
    case 2:
      return "Officer II";
    case 3:
      return "Officer III";
    case 4:
      return "Senior Officer";
    case 5:
      return "Sergeant III";
    case 6:
      return "Sergeant II";
    case 7:
      return "Sergeant I";
    case 8:
      return "Lieutenant";
    case 9:
      return "Captain";
    case 10:
      return "Police Commander";
    case 11:
      return "Department Chief";
    case 12:
      return "Superintendent";
    case 13:
      return "General Superintendent";
    case 14:
      return "Chief Of Police";
    default:
      return "Desconhecido";
  }
}

function cadete() {
  var quantidade_cadete = parseInt(prompt("Quantos cadetes serão admitidos? "));
  var output = "```diff<br>+ Admissão de cadetes<br>";

  for (var i = 0; i < quantidade_cadete; i++) {
    var nome_cadete = prompt("Qual o nome do cadete? ");
    var distintivo_cadete = prompt("Qual o distintivo? ");
    output += "<br>Cadet #" + distintivo_cadete + " " + nome_cadete;
  }
  output += "<br>```";

  showMessage(output);
}

function desligamento() {
  var quantidade_deslig = parseInt(
    prompt("Quantos oficiais serão desligados? ")
  );
  var output = "```diff<br>- Desligamento<br>";

  for (var i = 0; i < quantidade_deslig; i++) {
    var nome_desligamento = prompt("Qual o nome do oficial? ");
    var dist_deslig = prompt("Qual o distintivo do oficial? ");
    var patente = getPatente();
    var motivo_desligamento = prompt("Qual o motivo do desligamento? ");
    output += "<br>" + patente + " #" + dist_deslig + " " + nome_desligamento;
  }
  output += "<br>";
  output += "<br>Motivo: " + motivo_desligamento;
  output += "<br>```";
  showMessage(output);
}

function readmissao() {
  var quantidade_readmissao = parseInt(
    prompt("Quantos oficiais serão readmitidos? ")
  );

  var output = "```diff";
  output += "<br>+ Readmissão de oficial<br>";

  for (var i = 0; i < quantidade_readmissao; i++) {
    var nome_readmissao = prompt("Qual o nome do oficial? ");
    var distintivo_readmissao = prompt("Qual o distintivo? ");
    var patente = getPatente();
    output +=
      "<br>" + patente + " #" + distintivo_readmissao + " " + nome_readmissao;
  }
  output += "<br>```";
  showMessage(output);
}

function transferencia() {
  var nome_transferencia = prompt("Qual o nome do oficial? ");
  var distintivo_transferencia = prompt("Qual o distintivo? ");
  var patente = getPatente();
  var antigo_dept = prompt("Qual a sigla do antigo Departamento?");
  var novo_dept = prompt("Qual a sigla do novo Departamento? ");
  var output =
    "```diff<br>+ Transferência<br><br>" +
    patente +
    " #" +
    distintivo_transferencia +
    " " +
    nome_transferencia +
    "<br><br>Antigo Departamento: " +
    antigo_dept +
    "<br>Novo Departamento: " +
    novo_dept +
    "<br>```";
  showMessage(output);
}

function cf() {
  var nome_curso = prompt("Qual o nome do curso? ");
  var nome_cfoficial = prompt("Qual o nome do oficial? ");
  var patente = getPatente();
  var dist_cf = prompt("Qual o distintivo do oficial? ");
  var situacao = prompt("Ele foi aprovado ou reprovado? ");
  var output =
    "```diff<br>+ Curso de formação de " +
    nome_curso +
    "<br><br>" +
    patente +
    " #" +
    dist_cf +
    " " +
    nome_cfoficial +
    "<br><br>Situação: " +
    situacao +
    "<br>```";
  showMessage(output);
}

function afastamento() {
  var nome_afast = prompt("Qual o nome do oficial? ");
  var dist_afast = prompt("Qual o distintivo do oficial? ");
  var patente = getPatente();
  var motivo_afast = prompt("Qual o motivo do afastamento? ");
  var output =
    "```diff<br>- Afastamento<br><br>" +
    patente +
    " #" +
    dist_afast +
    " " +
    nome_afast +
    "<br><br>Motivo: " +
    motivo_afast +
    "<br>```";
  showMessage(output);
}
function advertencia() {
  var nome_adv = prompt("Qual o nome do oficial? ");
  var dist_adv = prompt("Qual o distintivo do oficial? ");
  var patente = getPatente();
  var motivo_adv = prompt("Qual o motivo da advertência? ");
  var output =
    "```diff<br>- Advertência (1/3)<br><br>" +
    patente +
    " #" +
    dist_adv +
    " " +
    nome_adv +
    "<br><br>Motivo: " +
    motivo_adv +
    "<br>```";
  showMessage(output);
}
