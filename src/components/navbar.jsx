import {FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <nav className="navbar padd-vert">
            <div className="container-w flex-horizontal space-btwn">
                <div className='flex-horizontal'>
                <FaGithub size={28}/>
                <Link to='/' className='brand-link'><h2>GitHub Finder</h2></Link>
                </div>
                <div className='flex-horizontal'>
                <Link to='/' className='brand-link'><h4>Home</h4></Link>
                <Link to='/about' className='brand-link'><h4>About</h4></Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;