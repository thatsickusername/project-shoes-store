import { Link } from 'react-router-dom';
import {useContext} from 'react';
import { ProductsContext } from '../ProductContext'
import '../css/Navbar.css'

function Navbar() {

    const [cartItems,] = useContext(ProductsContext)

    return (
        <div>
        
            <div class="navigation one" id="navleft">
                
                    <div class="logo">Edge</div>
                
                <div class="media">
                <Link className="linkIcon" to='/'>
                    <i class="fas fa-home"></i>
                </Link>
                </div>
            </div>

            <div class="navigation two">
                <div class="logo">LogIn</div>
                <div class="media">
                    <Link className="linkIcon" to='/cart'>
                        <i class="fas fa-shopping-bag" data-badge={cartItems.length}></i>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Navbar;