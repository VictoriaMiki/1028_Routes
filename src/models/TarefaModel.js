import BaseModel from "./BaseModel.js"

export default class TarefaModel extends BaseModel {
    constructor(db) {
        super(db, 'tarefas') 
        // faz referência aos atributos da classe superior, no caso BaseModel
        // 'tarefas' está no config.js
    }

    findAllByUserId(userId) {
        return this.db[this.entity].filter(item => item.usuarioId === userId)
    }
}