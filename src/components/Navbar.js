import React from 'react';
import '../css/Navbar.css'

function Navbar() {
    return (
        <div>
        
            <div class="navigation one" id="navleft">
                <div class="logo">Edge.</div>
                <div class="media">
                    <i class="fas fa-bars"></i>
                </div>
            </div>

            <div class="navigation two">
                <div class="logo">LogIn</div>
                <div class="media">
                    <i class="fas fa-shopping-bag"></i>
                </div>
            </div>

        </div>
    );
}

export default Navbar;