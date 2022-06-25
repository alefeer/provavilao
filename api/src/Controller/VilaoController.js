import { Router } from "express"

import {InserirVilao, listartodososviloes} from "../Repository/VilaoRepository.js"
const server = Router();

server.post ('/vilao', async (req, resp) => {
    try {
        const addvilao = req.body

        if(! addvilao.nome) {
            throw new Error ('Nome do Vilão é Obrigatório') 
        }

        if( ! addvilao.maldades){
            throw new Error ('Maldade do Vilão é Obrigatória')
        }

        if( ! addvilao.poderes) {
            throw new Error ('Poderes do Vilão são Obrigatórios')
        }

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