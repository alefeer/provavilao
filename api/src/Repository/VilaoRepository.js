import {con} from './Connection.js'
export async function InserirVilao (vilao) {
    const comando =
    `INSERT INTO tb_vilao(id_vilao, nm_vilao, ds_maldades, bt_poderes)
        values (?,?,?,?)`;

    const resposta = await con.query (comando, [vilao.id, vilao.nome, vilao.maldaes, vilao.poderes])
    vilao.id = resposta.InserirVilao;

    return vilao
}
