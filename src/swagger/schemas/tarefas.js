// schema da entidade tarefas

export const Tarefa = {
    type: "object",
    required: ["id", "titulo", "concluida", "usuarioId"],
    properties: {
        id: {
            type: "number",
            description: "ID da tarefa",
        },
        titulo: {
            type: "string",
            description: "O título da tarefa",
        },
        concluida: {
            type: "boolean",
            description: "Se a tarefa foi concluída",
        },
        usuarioId: {
            type: "number",
            description: "ID do usuario",
        },
    },
    example: {
        id: 1,
        titulo: "Estudar JS",
        concluida: false,
        usuarioId: 1,
    },
}