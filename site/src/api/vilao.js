import axios from 'axios';


const api = axios.create ({
    baseURL: 'http://localhost5000'
})

export async function InserirVilao (id, nome, ds, bt) {
    const resposta = await api.post ('/vilao', {
        id: id,
        nome: nome,
        ds: ds,
        bt: bt
    })

    return resposta.data;
}

export async function listartodososviloes () {
    const resposta = await api.get ('/vilao');
     return resposta.data;
}
    