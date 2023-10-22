function getPatente() {
  var select = document.getElementById("patente");
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
                    </select><br><br>
                    <label for="NDepartamento${i}">Novo departamento ${
      i + 1
    }:<br><br></label>
                    <input type="NDepartamento" id="NDepartamento${i}" name="NDepartamento${i}" required><br><br>
                    <label for="ADepartamento${i}">Antigo departamento ${
      i + 1
    }:<br></label>
                      <input type="ADepartamento" id="ADepartamento${i}" name="ADepartamento${i}" required><br><br>
                    
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
  var quantidade = parseInt(document.getElementById("quantidade_Cadet").value);
  var resultados = "";

  resultados += "<code>```diff<br>+ Transferência<br><br></code>";
  for (var i = 0; i < quantidade; i++) {
    var nomeCadete = document.getElementById(`nomeCadete${i}`).value;
    var distintivo = document.getElementById(`distintivo${i}`).value;
    var patente = document.getElementById(`patente${i}`).value;

    resultados += `<code>${patente} #${distintivo} ${nomeCadete}<br></code>`;
  }
  var NDepartamento = document.getElementById(
    `NDepartamento${quantidade - 1}`
  ).value;
  var ADepartamento = document.getElementById(
    `ADepartamento${quantidade - 1}`
  ).value;

  resultados +=
    "<code><br>Antigo departamento: " + ADepartamento + "<br></code>";
  resultados += "<code>Novo departamento: " + NDepartamento + "<br></code>";
  resultados += "<code>```</code>";

  document.getElementById("resultados").innerHTML = resultados;
  document.getElementById("resultados").style.display = "block";
  document.getElementById("formularios").style.display = "none";
  document.querySelector(".Grupo-Resultado").style.display = "none";
  document.getElementById("resultado").style.display = "block";
}
