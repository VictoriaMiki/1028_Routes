// configuração detalhada de como as rotas funcionam e quais são as rotas possiveis

// rotas sem id ("/"")
export const getPostTarefas = {
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
        description: "Cria uma nova tarefa",
        tags: ["Tarefas"], 
        requestBody: {
            required: true,
            content: {
                "application/json": { 
                    schema: { 
                        $ref: "#/schemas/Tarefa", 
                    },
                },
            },
        },
        responses: {
            200: {
                description: "A tarefa criada",
                content: { // O que eu preciso mandar:...
                    "application/json": { // ...um objeto json...
                        schema: { // ...com as informações...
                            $ref: "#/schemas/Tarefa", // ...do schema/Tarefa
                        },
                    },
                },
            },
            500: {
                description: "Erro interno",
            },
        },
    }
}

// rotas com id ("/:id")
export const getDeletePutTarefaById = {
    get: {
        description: "Retorna uma tarefa pelo Id",
        tags: ["Tarefas"], 
        parameters: [
            {
                name: "id",
                in: "path",
                description: "Id da Tarefa",
                required: true,
                schema: {
                    type: "integer",
                }
            }
        ],
        responses: {
            200: {
                description: "Tarefa pelo Id",
                content: { // igual o do post porque retorna apenas um obj e não uma lista
                    "application/json": {
                        schema: {
                            $ref: "#/schemas/Tarefa",                            
                        },
                    },
                },
            },
            500: {
                description: "Erro interno",
            },
        },
    },
    delete: {
        description: "Deleta uma tarefa pelo Id",
        tags: ["Tarefas"], 
        parameters: [
            {
                name: "id",
                in: "path",
                description: "Id da Tarefa",
                required: true,
                schema: {
                    type: "integer",
                },
            },
        ],
        responses: {
            200: {
                description: "Mensagem de sucesso",
                content: { 
                    "application/json": {
                        message: "Tarefa removida com sucesso"
                    },
                },
            },
            500: {
                description: "Erro interno",
            },
        },
    },
    put: {
        description: "Cria uma nova tarefa",
        tags: ["Tarefas"], 
        parameters: [
            {
                name: "id",
                in: "path",
                description: "Id da Tarefa",
                required: true,
                schema: {
                    type: "integer",
                }
            }
        ],
        requestBody: {
            required: true,
            content: {
                "application/json": { 
                    schema: { 
                        $ref: "#/schemas/Tarefa", 
                    },
                },
            },
        },
        responses: {
            200: {
                description: "Tarefa alterada",
                content: { // igual o do post porque retorna apenas um obj e não uma lista
                    "application/json": {
                        schema: {
                            $ref: "#/schemas/Tarefa",                            
                        },
                    },
                },
            },
            500: {
                description: "Erro interno",
            },
        },
    }
}