function getPatente() {
  var select = document.getElementById("patente");
  var option = select.options[select.selectedIndex];

  document.getElementById("value").value = option.value;
  document.getElementById("text").value = option.text;
}

function abrirDesligamento() {
  document.querySelector(".Popup-Desligamento").style.display = "block";
  document.querySelector(".Grupo-Quantidade").style.display = "block";
  document.querySelector(".Grupo-Resultado").style.display = "none";
  document.querySelector("#resultado").style.display = "none";
}

function PopupDesligamento() {
  var quantidade_Desligamento = parseInt(
    document.getElementById("quantidade_Desligamento").value
  );
  var campos = "";
  for (var i = 0; i < quantidade_Desligamento; i++) {
    campos += `
            <div>
              <div class="form">
                <label for="nomeDesligamento${i}">Oficial ${i + 1}:<br></label>
                <input type="text" id="nomeDesligamento${i}" name="nomeDesligamento${i}" required><br><br>
              
                <label for="distintivo${i}">Distintivo ${i + 1}:<br></label>
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
                    </select>
                  <div id="patente_selecionada"></div>
                </div>
              </div>
            <br> 
            `;
  }

  document.getElementById("campos").innerHTML = campos;
  document.getElementById("formularios").style.display = "block";
  document.querySelector(".Grupo-Quantidade").style.display = "none";
  document.querySelector(".Grupo-Resultado").style.display = "block";
}

function motivoDesligamento() {
  document.querySelector(".Grupo-Resultado").style.display = "none";

  // Exibir Grupo-Motivo
  document.querySelector(".Grupo-Motivo").style.display = "block";
}

function ResultadoDesligamento() {
  var quantidade_Desligamento = parseInt(
    document.getElementById("quantidade_Desligamento").value
  );
  var motivo = document.getElementById("motivo").value;
  var resultados = "<code>```diff<br>- Desligamento</code><br><br>";

  for (var i = 0; i < quantidade_Desligamento; i++) {
    var nomeDesligamento = document.getElementById(
      `nomeDesligamento${i}`
    ).value;
    var distintivo = document.getElementById(`distintivo${i}`).value;
    var patente = document.getElementById(`patente${i}`).value;

    resultados += `<code>${patente} #${distintivo} ${nomeDesligamento}</code><br>`;
  }

  resultados += `<br><code>Motivo: ${motivo}</code><br>`;
  resultados += "<code>```</code>";

  document.getElementById("resultados").innerHTML = resultados;
  document.querySelector(".Grupo-Resultado").style.display = "none";
  document.querySelector("#resultado").style.display = "block";
  document.querySelector("#formularios").style.display = "block";
  document.querySelector(".Grupo-Motivo").style.display = "none";
}
