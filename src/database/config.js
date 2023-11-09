import Tarefa from "../entities/Tarefa.js"
import Usuario from "../entities/Usuario.js"

const db = {
  usuarios: [ // constructor (id, nome, email)
    new Usuario(1, "Fulano", "email@email.com"),
    new Usuario(2, "Ciclano", "outroemail@email.com")
  ],
  tarefas: [ // constructor (id, titulo, concluida, usuarioId)
    new Tarefa(1, "Estudar JS", false, 1),
    new Tarefa(2, "Estudar Node", false, 1),
    new Tarefa(3, "Estudar Express", false, 2),
  ]
}

export default db