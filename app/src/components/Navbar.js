import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <nav>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/About">ABOUT</Link></li>
                <li><Link to="/Contact">CONTACT</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;