import { servidorClientes } from "../service/cliente-service.js";

const tbody = document.querySelector("[data-tabela]");
function criaLinha(nome, email) {
    const tr = document.createElement("tr");
    const conteudo = ` 
        <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td>`
    tr.innerHTML = conteudo;

    return tr;
}

servidorClientes.listaDeClientes()
    .then(valor => {
        valor.forEach(element => {
            tbody.appendChild(criaLinha(element.nome, element.email));
        })
    })