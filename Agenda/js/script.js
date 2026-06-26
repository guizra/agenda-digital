const inputTarefa = document.getElementById("tarefaInput");
const lista = document.getElementById("listaTarefas");
const contador = document.getElementById("contador");

let tarefas = [];

function atualizarContador() {
    contador.textContent = Math.max(0, tarefas.length);
}

function adicionarTarefa() {
    const texto = inputTarefa.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa.");
        return;
    }

    tarefas.push(texto);

    renderizar();

    inputTarefa.value = "";
    inputTarefa.focus();
}

function removerTarefa(index) {
    tarefas.splice(index, 1);
    renderizar();
}

function renderizar() {
    lista.innerHTML = "";

    tarefas.forEach((tarefa, index) => {

        const div = document.createElement("div");
        div.className = "tarefa";

        div.innerHTML = `
            <span onclick="alternarRisco(this)">${tarefa}</span>

            <button class="remover"
                onclick="removerTarefa(${index})">

                Excluir

            </button>
        `;

        lista.appendChild(div);

    });

    atualizarContador();
}

inputTarefa.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {
        adicionarTarefa();
    }

});

function alternarRisco(item) {

    if (item.style.textDecoration === "line-through") {

        item.style.textDecoration = "none";
        item.style.opacity = "1";

    } else {

        item.style.textDecoration = "line-through";
        item.style.opacity = "0.6";

    }

}

function mostrarTela(idTela) {

    let telas = document.querySelectorAll(".tela");

    telas.forEach(function (item) {
        item.classList.remove("ativa");
    });

    document.getElementById(idTela).classList.add("ativa");

}

function alterarTema() {

    let escolha = document.getElementById("tema").value;

    if (escolha === "escuro") {

        document.body.classList.add("escuro");
        localStorage.setItem("tema", "escuro");

    } else {

        document.body.classList.remove("escuro");
        localStorage.setItem("tema", "claro");

    }

}

window.onload = function () {

    let temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "escuro") {

        document.body.classList.add("escuro");
        document.getElementById("tema").value = "escuro";

    }

};