Faltei nesta aula (28/10)

Aula mostrando como fazer as rotas e usar o model

Parte 2 - Aula (11/11)

Aula apresentando Swagger Editor para documentação
- No terminal, instalar: npm i swagger-ui-express
- Alterações na pasta swagger no src
- importar e fazer alterações no server.js

No package.json foi adicionado um script que pode ser rodado no terminal. Ele é semelhante ao node, mas quando uma alteração é feita, não é necessário rodar o node novamente. As alterações são atualizadas automaticamente. Para rodar o nodemon no terminal:

npx nodemon src/server.js
ou
npm run dev