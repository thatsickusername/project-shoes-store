import { Link } from 'react-router-dom';
import '../css/Navbar.css'

function Navbar() {
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
                        <i class="fas fa-shopping-bag"></i>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Navbar;