# Doguito Petshop
**Sistema de cadastros de nome e email (CRUD), utilizando API REST (metodos fetch, async, await, tratamento de erro...)**

Para rodar o projeto na máquina é necessário seguir os passos:

* Baixar as dependencias com npm install

* Subir o servidor do package.json:

  + Abrir a pasta admin no vscode e rodar o json server: 
```js
json-server --watch db.json
```
* Subir um servidor com browser-sync:

  + Rodar: npm install -g browser-sync
  
  + Rodar: browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html
