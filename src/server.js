import express from "express"
import db from "./database/config.js"
import TarefaRoutes from "./routes/TarefaRoutes.js"
// o processo é inverso do que se pensa: 
// aqui é onde faz referência a tarefas e ao db, depois vai:
// TarefaRoutes.js -> TarefaModel.js -> BaseModel.js -> config.js -> Tarefa.js
// É assim que o processo é organizado. Por isso não importa o db nesses outros arquivos

import swaggerUi from "swagger-ui-express"
import swaggerDocument from "./swagger/config.js"

const app = new express()

app.use(express.json())

const tarefaRoutes = new TarefaRoutes(db)
app.use('/tarefas', tarefaRoutes.routes())

// Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: true}))

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
})

