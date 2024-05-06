import './sidebar.css'
import {Link} from 'react-router-dom';

function Sidebar(){
    return(
        <div className='sidebar'>
            <Link to={'/addproduct'} style={{textDecoration: "none"}}>
                <div className="sidebar-item">
                    <p>
                        Add product
                    </p>
                </div>
            </Link>

            <Link to={'/listproduct'} style={{textDecoration: "none"}}>
                <div className="sidebar-item">
                    <p>
                        List product
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar;