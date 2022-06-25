import { useState } from 'react';
import { InserirVilao } from '../../api/vilao'
import { toast } from 'react-toastify'
import './inserirvilao.scss'


export default function Index() {
    const [nome, setNome] = useState('');
    const [id, setId] = useState(0);
    const [maldades, setMaldades] = useState ('');
    const [poderes, setPoderes] = useState (false)

    

    async function salvarVilao() {
        try {
            if (id === 0) {  
                const novoVilao = await InserirVilao(nome, maldades, poderes);
                setId(novoVilao.id);
                toast.dark('Vilao cadastrado com sucesso!!');
            }
        } catch (err) {
            if (err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message)
        }
    }

    return (
        <div className='page-cadastro'>
        <h1>Cadastrar vilão</h1>

            <input type='text' placeholder='Nome do Vilão' value={nome} onChange={e => setNome(e.target.value)} />
            <input type='text' placeholder='Maldades do Vilão' value={maldades} onChange={e => setMaldades(e.target.value)} />
            <input type='checkbox' value={poderes} onChange={e => setPoderes(e.target.checked)} />
            <button onClick={salvarVilao}>Cadastrar</button>
        
        </div>
    );
}