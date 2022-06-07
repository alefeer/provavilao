import { Router } from "express"

import {InserirVilao} from "../Repository/VilaoRepository.js"
const server = Router();

server.post ('/vilao', async (req, resp) => {
    try {
        const addvilao = req.body
        const resposta = await InserirVilao (addvilao);

        resposta.status (204).send (resposta);
    } catch (err) {
        resp.status(404).send 
    }
}) 

export default server;