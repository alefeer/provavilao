import {Link} from "react-router-dom";

export default function Index(){
    return (
        <main>
            <h1>Home</h1>

            <ul>
                <li> <Link to = './inserirvilao'> inserirvilao</Link> </li>
                <li> <Link to = './listarvilao'> listarvilao</Link> </li>
            </ul>


        </main>
    )
}