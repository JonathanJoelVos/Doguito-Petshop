





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
            return resposta.json()
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
    /* .then(resposta => {
        return resposta.body
    }); */
}

const deletaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: "DELETE"
    })
}

const pegarId = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
        .then(resposta => {
            return resposta.json()
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
    /*  .then((r) => {
         return r.json()
     }) */
}

export const servidorClientes = {
    listaDeClientes,
    cadastraCliente,
    deletaCliente,
    pegarId,
    atulizaCliente
}

