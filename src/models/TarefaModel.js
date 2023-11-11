import BaseModel from "./BaseModel.js"
// não importa db, pois se importasse, ele criaria outro e daria erro. Por isso, faz-se apenas a referência

export default class TarefaModel extends BaseModel {
    constructor(db) {
        super(db, 'tarefas') 
        // faz referência aos atributos da classe superior(BaseModel), no caso db e entity. 
        // 'tarefas' é o nome da entidade que está no config.js
    }

    findAllByUserId(userId) {
        return this.db[this.entity].filter(item => item.usuarioId === userId)
    }
    // para usá-lo, tem criar uma rota específica que muito provavelmente seria "tarefas/usuario/:id"
    // pois se usasse "tarefas/:id" ou mesmo "tarefas/:usuarioId", o compilador não conseguiria diferenciar quando queremos o 
    // findById ou findAllByUserId. Por isso, tem criar uma rota específica
}