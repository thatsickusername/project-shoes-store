import { Link } from 'react-router-dom';
import {useContext} from 'react';
import { ProductsContext } from '../ProductContext'
import '../css/Navbar.css'

function Navbar() {

    const [cartItems,] = useContext(ProductsContext)

    return (
        <div>
        
            <div className="navigation navone" id="navleft">
                
                    <div className="logo">Edge</div>
                
                <div className="media">
                <Link className="linkIcon" to='/'>
                    <i className="fas fa-home"></i>
                </Link>
                </div>
            </div>

            <div className="navigation navtwo">
                <div className="logo">LogIn</div>
                <div className="media">
                    <Link className="linkIcon" to='/cart'>
                        <i className="fas fa-shopping-bag" data-badge={cartItems.length}></i>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Navbar;