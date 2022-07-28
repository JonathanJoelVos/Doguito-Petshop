# Doguito Petshop
**Sistema de cadastros de nome e email (CRUD), utilizando API REST (metodos fetch, async, await, tratamento de erro...)**
![image](https://user-images.githubusercontent.com/106450890/181623235-4ab3b815-3ce9-4815-94d3-8985bf0404ac.png)
![image](https://user-images.githubusercontent.com/106450890/181623851-76152b99-11e3-452b-be77-076f6a15f359.png)
![image](https://user-images.githubusercontent.com/106450890/181623903-77fa048f-0e67-47e3-91f7-56c6f7532446.png)
![image](https://user-images.githubusercontent.com/106450890/181623284-084c1f5e-6384-4666-ac5e-7e9ab5d75cb0.png)
![image](https://user-images.githubusercontent.com/106450890/181623616-5931c7c4-ae2d-43e8-8f70-c767cf5ce554.png)
![image](https://user-images.githubusercontent.com/106450890/181623706-7885440d-3f79-47a3-a38a-fb49d46d3f0a.png)



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
