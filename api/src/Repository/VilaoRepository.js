import {con} from './Connection.js'
export async function InserirVilao (vilao) {
    const comando =
    `INSERT INTO tb_vilao(nm_vilao, ds_maldades, bt_poderes)
        values (?,?,?)`;

    const [resposta] = await con.query (comando, [vilao.nome, vilao.maldades, vilao.poderes])
    vilao.id = resposta.insertId;

    return vilao
}


export async function listartodososviloes(){ 

    const comando = 
    `select id_vilao         'id',
            nm_vilao         'nome',
            ds_maldades      'maldades',
            bt_poderes       'poderes'
       from tb_vilao`

            const [resposta] = await con.query (comando)
            return resposta;
}