import {con} from './Connection.js'
export async function InserirVilao (vilao) {
    const comando =
    `INSERT INTO tb_vilao(id_vilao, nm_vilao, ds_maldades, bt_poderes)
        values (?,?,?,?)`;

    const resposta = await con.query (comando, [vilao.id, vilao.nome, vilao.maldades, vilao.poderes])
    vilao.id = resposta.InseritId;

    return vilao
}


export async function listartodososviloes(){ 

    const comando = 
    `SELECT id_vilao, 
            nm_vilao, 
            ds_maldades, 
            bt_poderes
            FROM tb_vilao`

            const [resposta] = await con.query (comando)
            return resposta;
}


