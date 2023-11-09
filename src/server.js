import express from "express"
import db from "./database/config.js"
import TarefaRoutes from "./routes/TarefaRoutes.js"

// o processo é inverso do que se pensa: 
// aqui é onde faz referência a tarefas e ao db, depois vai:
// TarefaRoutes.js -> TarefaModel.js -> BaseModel.js -> config.js -> Tarefa.js
// É assim que o processo é organizado

const app = new express()

app.use(express.json())

const tarefaRoutes = new TarefaRoutes(db)
app.use('/tarefas', tarefaRoutes.routes())

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
})

