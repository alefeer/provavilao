import { Router } from "express"

import {InserirVilao, listartodososviloes} from "../Repository/VilaoRepository.js"
const server = Router();

server.post ('/vilao', async (req, resp) => {
    try {
        const addvilao = req.body
        const resposta = await InserirVilao (addvilao);

        resp.status(200).send(resposta);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        }) 
    }
}) 



server.get ('/vilao', async (req, resp) =>{
    try {
        const resposta = await listartodososviloes();
        resp.send(resposta);
    } catch(err) {
        resp.status(404).send ({
            erro: err.message
        })
    }
})

export default server;