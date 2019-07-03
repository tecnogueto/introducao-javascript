var campoFiltro = document.querySelector("#filtro");

campoFiltro.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");

    if (campoFiltro.value.length > 0) {
        pacientes.forEach(function (paciente) {
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            if (nome != campoFiltro.value) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        });
    } else {
        pacientes.forEach(function (paciente) {
            paciente.classList.remove("invisivel");
        });
    }


});