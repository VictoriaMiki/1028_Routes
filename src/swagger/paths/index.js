// index do paths importa os paths existentes (ex. tarefas) e exporta as rotas (ex. '/tarefas')

import {getPostTarefas, getDeletePutTarefaById} from './tarefas.js'

export default {
    '/tarefas': getPostTarefas,
    '/tarefas/{id}': getDeletePutTarefaById
}