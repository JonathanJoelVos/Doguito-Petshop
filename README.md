# Doguito Petshop
**Sistema de cadastros de nome e email (CRUD), utilizando API REST (metodos fetch, async, await, tratamento de erro...)**

Para rodar o projeto na máquina é necessário seguir os passos:
1. Baixar as dependencias com npm install
2.Subir o servidor do package.json:
  a. Abrir a pasta admin no vscode e rodar o json server: 
```js
json-server --watch db.json
```
3.Subir um servidor com browser-sync:
  a. Rodar: npm install -g browser-sync
  b. Rodar: browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html
