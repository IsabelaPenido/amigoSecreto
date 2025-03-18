//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

function adicionarAmigo() {
    let input = document.querySelector("#amigo");
    let nome = input.value.trim();
    if (nome == "") {
        return alert("Por favor, insira um nome.");
    }
    amigos.push(nome);
    input.value = "";
    adicionarNaLista();
}

function adicionarNaLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    amigos.map((amigo) =>{
        let li = document.createElement("li");
        li.innerText = amigo            
        ul.append(li)
    } );
}

function sortearAmigo() {
    if (amigos.length == 0) {
        return alert("O array está vazio");
    }
    let randomIndex = Math.floor(Math.random() * amigos.length);
    document.getElementById("resultado").innerHTML = amigos[randomIndex]
}
