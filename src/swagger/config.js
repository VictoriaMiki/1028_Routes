// informações gerais do projeto

import paths from './paths/index.js'
import * as schemas from './schemas/index.js' // importa todos os schemas do index.js e salva como "schemas". Se não fosse assim, teria que importar separadamente cada um dos schemas

const swaggerDocument = { 
    openapi: "3.1.0",
    info: {
        title: "API Fatec CRUD",
        version: "0.1.0",
        description:
            "Documentação API",
    },
    servers: [
        {
            url: "http://localhost:3000",
        }
    ],
    paths,
    schemas: {
        ...schemas // espalha todos os schemas importados. Se não fosse assim, teria que citar schema por schema
    }
}

export default swaggerDocument