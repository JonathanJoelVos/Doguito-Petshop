import { servidorClientes } from "../service/cliente-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", async (event) => {
    try {
        event.preventDefault()

        let nome = event.target.querySelector("[data-nome]").value;
        let email = event.target.querySelector("[data-email]").value;

        console.log(nome, email)

        await servidorClientes.cadastraCliente(nome, email)
        window.location.href = "../telas/cadastro_concluido.html"
    }
    catch (error) {
        console.log(error);
        window.location.href = '../telas/erro.html';
    }
})
