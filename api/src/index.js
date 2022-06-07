import 'dotenv/config'
import VilaoController from './Controller/VilaoController.js'
import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());
server.use(VilaoController);

server.listen (process.env.PORT, () => console.log (`API ONLINE NA PORTA ${process.env.PORT}`));