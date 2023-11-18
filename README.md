(28/10) Faltei nesta aula 

Aula mostrando como fazer as rotas e usar o model

(11/11) Aula Parte 2 

Aula apresentando Swagger Editor para documentação
- No terminal, instalar: npm i swagger-ui-express
- Alterações na pasta swagger no src
- importar e fazer alterações no server.js

No package.json foi adicionado um script que pode ser rodado no terminal. Ele é semelhante ao node, mas quando uma alteração é feita, não é necessário rodar o node novamente. As alterações são atualizadas automaticamente. Para rodar o nodemon no terminal:

npx nodemon src/server.js
ou
npm run dev

(18/11) Aula Parte 3

Aula apresentando deploy: Render
- No render, criar uma web service com as configurações:
    - Name: nome simples
    - Region: qualquer um dos EUA
    - Branch: qual branch vai estar na web (main)
    - Root Directory: onde vai fazer o "npm i" (geralmente o campo fica vazio para fazer na raiz do projeto)
    - Runtime: Serviço utilizado (Node)
    - Build Command: qual é o comando (npm i)
    - Start Command: onde está o arquivo pra rodar o projeto (node src/server.js)
- Cors: permite que recursos de diferentes origens sejam acessados em uma página web. Os ajustes que precisam ser feitos:
    - Terminal: npm i cors
    - server.js: 
        import express, { application } from "express"
        import cors from "cors"
        const app = express()
        const port = process.env.PORT || 3000
        app.use(cors())
        app.listen(port, () => {
            console.log("Servidor rodando na porta 3000")
        })
- Caso o projeto necessite uma versão específica do node para rodar, é necessário o especificar no package.json embaixo do type module. Ex. um projeto que necessita uma versão maior ou igual ao 20:
    - "engines": {"node": ">=20"}