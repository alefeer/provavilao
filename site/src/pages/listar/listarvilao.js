import { listartodososviloes } from "../../api/vilao";
import './listarvilao.scss'
import { useEffect, useState } from 'react'



export default function Index() { 
    const [vilao, setVilao] = useState([]);
    
    async function carregarTodosViloes() {
        const resp = await listartodososviloes();
        setVilao(resp);
    }

    useEffect(() => {
        carregarTodosViloes();
    }, [])


    return ( 
        <main className='pageConsultar'>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Maldades</th>
                        <th>Poderes</th>
                    </tr>
                </thead>

                <tbody>
                    {vilao.map(item =>
                        <tr>
                            <td> {item.id} </td>
                            <td> {item.nome} </td>
                            <td> {item.maldades}</td>
                            <td> {item.poderes}</td>
                        </tr>
                    )}
                </tbody>
            </table>    
       </main>  
    );
}