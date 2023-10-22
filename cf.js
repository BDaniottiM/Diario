function getPatente() {
  var select = document.getElementById("patente");
  var option = select.options[select.selectedIndex];

  document.getElementById("value").value = option.value;
  document.getElementById("text").value = option.text;
}

function curso() {
  var select = document.getElementById("curso");
  var option = select.options[select.selectedIndex];

  document.getElementById("value").value = option.value;
  document.getElementById("text").value = option.text;
}
function situação() {
  var select = document.getElementById("situação");
  var option = select.options[select.selectedIndex];

  document.getElementById("value").value = option.value;
  document.getElementById("text").value = option.text;
}

function abrirCadete() {
  document.getElementsByClassName("Popup-Cadete")[0].style.display = "block";
}
function PopupCadete() {
  document.getElementsByClassName("Grupo-Quantidade")[0].style.display = "none";

  document.getElementById("formularios").style.display = "block";
  var quantidade = parseInt(document.getElementById("quantidade_Cadet").value);
  var campos = "";

  for (var i = 0; i < quantidade; i++) {
    campos += `
                  <div>
                    <div class="form">
                      <label for="nomeCadete${i}">Oficial ${i + 1}:<br></label>
                      <input type="text" id="nomeCadete${i}" name="nomeCadete${i}" required><br><br>
                    
                      <label for="distintivo${i}">Distintivo ${
      i + 1
    }:<br></label>
                      <input type="distintivo" id="distintivo${i}" name="distintivo${i}" required><br><br>
                      <div class="Dropdown">
                      <label for="patente${i}">Patente ${i + 1}:<br></label>
                      <select id="patente${i}" onChange="getPatente()">
                          <option value="Cadet">Cadet</option>
                          <option value="Officer I">Officer I</option>
                          <option value="Officer II">Officer II</option>
                          <option value="Officer III">Officer III</option>
                          <option value="Senior Officer">Senior Officer</option>
                          <option value="Sergeant III">Sergeant III</option>
                          <option value="Sergeant II">Sergeant II</option>
                          <option value="Sergeant I">Sergeant I</option>
                          <option value="Lieutenant">Lieutenant</option>
                          <option value="Captain">Captain</option>
                          <option value="Police Commander">Police Commander</option>
                          <option value="Department Chief">Department Chief</option>
                          <option value="Superintendent">Superintendent</option>
                          <option value="General Superintendent">General Superintendent</option>
                          <option value="Chief Of Police">Chief Of Police</option>
                      </select><br><br>
                      <label for="situação${i}">Situação ${i + 1}:<br></label>
                      <select id="situação" onChange="situação()">
                      <option value="">Selecione</option>
                      <option value="Aprovado">Aprovado</option>
                      <option value="Aprovada">Aprovada</option>
                      <option value="Aprovade">Aprovade</option></select
                    ><br/>
                      
                  </div>
                  <br>
                </div>
                  <br> 
                  `;
  }

  document.getElementById("campos").innerHTML = campos;
  document.getElementById("formularios").style.display = "block";
  document.querySelector(".Grupo-Quantidade").style.display = "none";
  document.querySelector(".Grupo-Resultado").style.display = "block";
}
function ResultadoCadete() {
  document.getElementsByClassName("Grupo-Resultado")[0].style.display = "none";
  var cursoOficial = document.getElementById("cursoOficial").value;
  var quantidade = parseInt(document.getElementById("quantidade_Cadet").value);
  var resultados = "";
  resultados +=
    "<code>```diff<br>+ Curso de Formação de " +
    cursoOficial +
    "<br><br></code>";
  for (var i = 0; i < quantidade; i++) {
    var nomeCadete = document.getElementById(`nomeCadete${i}`).value;
    var distintivo = document.getElementById(`distintivo${i}`).value;
    var patente = document.getElementById(`patente${i}`).value;

    resultados += `<code>${patente} #${distintivo} ${nomeCadete}<br></code>`;
  }
  var Situação = document.getElementById("situação").value;

  resultados += "<code><br>Situação: " + Situação + "<br></code>";
  resultados += "<code>```</code>";

  document.getElementById("resultados").innerHTML = resultados;
  document.getElementById("resultados").style.display = "block";
  document.getElementById("formularios").style.display = "none";
  document.querySelector(".Grupo-Resultado").style.display = "none";
  document.getElementById("resultado").style.display = "block";
}
