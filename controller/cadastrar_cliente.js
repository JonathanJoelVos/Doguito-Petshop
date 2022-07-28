import { servidorClientes } from "../service/cliente-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (event) => {
    event.preventDefault()

    let nome = event.target.querySelector("[data-nome]").value;
    let email = event.target.querySelector("[data-email]").value;

    console.log(nome, email)

    servidorClientes.cadastraCliente(nome, email)
        .then(() => {
            window.location.href = "../telas/cadastro_concluido.html"
        })
})