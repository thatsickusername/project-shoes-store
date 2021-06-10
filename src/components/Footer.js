import '../css/Footer.css'

function Footer() {
    return (
        <div>
           <div className="footer">
            <div className="footerMenu">
            <div className="col_1">
                <div className="title">
                    Company  
                </div>  
                <ul>
                    <li>About Us</li>
                    <li>Contacts</li>
                    <li>Home Page</li>
                    <li>Out Of Words</li>
                </ul>
            </div>
            <div className="col_2">
                <div className="title">
                    Help & Support 
                </div>  
                <ul>
                    <li>Support Center</li>
                    <li>FAQ</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div className="col_3">
                <div className="title">
                    Services  
                </div>  
                <ul>
                    <li>Fashion Magazine</li>
                    <li>Web Store</li>
                    <li>Deliveries</li>
                    <li>Shoes Related Term</li>
                </ul>
            </div>
            </div>

            <div className="socialMedia">
                <p>Copyright February 2021 © EDGE.</p>
            </div>
        </div>
        </div>
    );
}

export default Footer;