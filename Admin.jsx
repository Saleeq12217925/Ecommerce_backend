import './admin.css'
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Addproduct from '../../components/addproduct/Addproduct';
import Listproduct from '../../components/listproduct/Listproduct';

function Admin(){
    return (
        <div className="admin">
            <Sidebar></Sidebar>
            <Routes>
                <Route path='/addproduct' element={<Addproduct></Addproduct>}></Route>
                <Route path='/listproduct' element={<Listproduct></Listproduct>}></Route>
            </Routes>
        </div>
    )
}

export default Admin;