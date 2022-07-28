





/* const listaDeClientes = () => {
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();

        http.open("GET", "http://localhost:3000/profile");

        http.send();
        http.onload = () => {
            if (http.status >= 400) {
                reject(JSON.parse(http.response));
            } else {
                resolve(JSON.parse(http.response));
            }
        };
    })
    return promise;
} */

const listaDeClientes = () => {
    return fetch(`http://localhost:3000/profile`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
            }
            throw new Error("Não foi possivel carregar a lista de Clientes!")
        })
}

const cadastraCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
        .then(resposta => {
            if (resposta.ok) {
                return resposta.body
            }
            throw new Error("Não foi possivel cadatrar o Cliente!")
        });
}

const deletaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: "DELETE"
    })
        /* .then(resposta => {
            if (resposta.ok) {
                resposta => resposta
            }
            throw new Error("Não foi possivel deletar o Cliente!")
        }) */
}

const pegarId = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
        .then(resposta => {
            if (resposta.ok) {
                return resposta.json()
            }
            throw new Error("Não foi possivel pegar o id de Clientes!")
        })
}

const atulizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
        .then((r) => {
            if (r.ok) {
                return r.json()
            }
            throw new Error("Não foi possivel atualizar a lista de Clientes!")
        })
}

export const servidorClientes = {
    listaDeClientes,
    cadastraCliente,
    deletaCliente,
    pegarId,
    atulizaCliente
}

