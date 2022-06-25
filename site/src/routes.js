import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Cadastrar from './pages/cadastrar/Inserirvilao'
import Listar from './pages/listar/listarvilao'
import Home from './pages/home.js'

export default function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/> } />
                <Route path='/inserirvilao' element={<Cadastrar/>}/>
                <Route path='/listarvilao' element={<Listar/>}/>
            </Routes>
        </BrowserRouter>
    )
}