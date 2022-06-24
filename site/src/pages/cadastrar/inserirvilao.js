import { useState } from 'react';
import { Inserirvilao } from '../../api/vilao.js'
import { toast } from 'react-toastify'

import { useNavigate } from 'react-router-dom';


export default function Index() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [id, setId] = useState(0);
    
    const [ds, setMaldades] = useSate ('');
    const [bt, setPoderes] = useState ('')

    

    async function salvarVilao() {
        try {
            if (id === 0) {
                const novoVilao = await Inserirvilao(id, nome, maldades, poderes);
                setId(novoVilao.id);
                setNome(novoVilao.nome);
                setMaldades(novoVilao.maldades);
                setPoderes(novoVilao.poderes)

                toast.light('Vilao cadastrado com sucesso!!');
                navigate('/listarvilao')
            }
        } catch (err) {
            if (err.response)
                toast.error(err.response.data.erro)
            else
                toast.error(err.message)
        }
    }

    return (
        <div>
        <h1>Cadastrar vilão</h1>

            <input type='text' placeholder='Nome do Vilao' value={nome} onChange={e => setNome(e.target.value)} />
            
            <button onClick={salvarVilao}>Cadastrar</button>
        
        </div>
    );
}