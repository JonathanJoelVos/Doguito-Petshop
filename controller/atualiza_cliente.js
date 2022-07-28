import { servidorClientes } from "../service/cliente-service.js";

const url = new URL(window.location);
console.log(url)

let idUrl = url.searchParams.get("id");

let inputName = document.querySelector("[data-nome]");
let inputEmail = document.querySelector("[data-email]");


servidorClientes.pegarId(idUrl)
    .then(objetoResposta => {
        inputName.value = objetoResposta.nome;
        inputEmail.value = objetoResposta.email;
    })

const form = document.querySelector('[data-form]');
form.addEventListener("submit", (event) => {
    event.preventDefault();

    servidorClientes.atulizaCliente(idUrl, inputName.value, inputEmail.value)
        .then(resposta => {
            window.location.href = '../telas/edicao_concluida.html'
        })
})
