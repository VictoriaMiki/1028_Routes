// configuração detalhada de como as rotas funcionam e quais são as rotas possiveis

const tarefas = {
    get: {
        description: "Retorna a lista de tarefas",
        tags: ["Tarefas"], // serve para o agrupamento (organização e pesquisa)
        responses: {
            200: {
                description: "Lista de tarefas",
                content: {
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/schemas/Tarefa", // fazendo referência ao Tarefas do schemas (formato próprio do swagger)
                            },
                        },
                    },
                },
            },
            500: {
                description: "Erro interno",
            },
        },
    },
    post: {

    }
}

export default tarefas