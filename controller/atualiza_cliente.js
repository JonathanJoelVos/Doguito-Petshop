import { servidorClientes } from "../service/cliente-service.js";

(async () => {
    try {
        const url = new URL(window.location);
        console.log(url)

        let idUrl = url.searchParams.get("id");

        let inputName = document.querySelector("[data-nome]");
        let inputEmail = document.querySelector("[data-email]");


        const idClientes = await servidorClientes.pegarId(idUrl)
        inputName.value = idClientes.nome;
        inputEmail.value = idClientes.email;


        const form = document.querySelector('[data-form]');
        form.addEventListener("submit", async (event) => {
            try {
                event.preventDefault();

                await servidorClientes.atulizaCliente(idUrl, inputName.value, inputEmail.value)
                window.location.href = '../telas/edicao_concluida.html'
            }
            catch (error) {
                console.log(error);
                window.location.href = '../telas/erro.html';
            }

        })
    }
    catch (error) {
        console.log(error);
        window.location.href = '../telas/erro.html';
    }
})()


