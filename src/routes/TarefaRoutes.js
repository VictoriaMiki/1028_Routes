import { Router } from "express"
import TarefaModel from "../models/TarefaModel.js"

export default class TarefaRoutes {
  constructor(db) {
    this.db = new TarefaModel(db)
  }

  // Aqui estão todas as rotas possíveis de tarefa
  routes() {
    const router = Router()
    router.get('/', (req, res) => {
      const tarefas = this.db.findAll()
      res.json(tarefas)
    })
    router.get('/:id', (req, res) => {
      const tarefa = this.db.findById(req.params.id)
      if (!tarefa) {
        res.status(404).json({ message: 'Tarefa não encontrada' })
      } else {
        res.json(tarefa)
      }
    })
    router.post('/', (req, res) => {
      const novaTarefa = req.body
      
      if(!novaTarefa.titulo) return res.status(400).json({ message: 'O título é obrigatório' })
      if(!novaTarefa.concluida) return res.status(400).json({ message: 'O campo concluída é obrigatório' })
      if(!novaTarefa.usuarioId) return res.status(400).json({ message: 'O campo usuárioId é obrigatório' })

      this.db.create(novaTarefa)
      res.json(novaTarefa)
    })
    router.put('/:id', (req, res) => {
      const { id } = req.params
      const tarefa = req.body

      if(!tarefa.titulo) return res.status(400).json({ message: 'O título é obrigatório' })
      if(!tarefa.concluida) return res.status(400).json({ message: 'O campo concluída é obrigatório' })
      if(!tarefa.usuarioId) return res.status(400).json({ message: 'O campo usuárioId é obrigatório' })

      this.db.update(id, tarefa)
      res.json(tarefa)
    })
    router.delete('/:id', (req, res) => {
      const { id } = req.params
      this.db.delete(id)
      res.json({ message: 'Tarefa removida com sucesso' })
    })
    return router
  }
}
