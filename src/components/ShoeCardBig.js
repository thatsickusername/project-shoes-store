import {useContext} from 'react';
import { Link } from 'react-router-dom';
import '../css/ShoeCardBig.css'
import bigShoeCard from '../images/bigShoeCard.png'
import { ProductsContext } from '../ProductContext'

function ShoeCardBig() {


    const [cartItems, setCartItems ] = useContext(ProductsContext)

    const addToCart = (e) => {
        e.preventDefault();
        const addToCartId = cartItems.length + 1
        setCartItems( prevCartItems => [...prevCartItems, {name: 'The big Box', id: addToCartId, img: bigShoeCard, price: 200}])
    }
    

    return (
        <div>
            <div className="shoeCardContainer">
            <div className="card">
                <div className="cardText">
                <div className="textContainer">
                    <h2 className="heading">The All new Summer Collection</h2>
                    <h2 className="subText">You’ll find dozens of Shoes to tap into, including running shoes, dancing shoes, yoga shoes, sneakers and more, Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt facilis blanditiis ipsa voluptates aliquam placeat, iure officia delectus rerum.</h2>
                    <div className="buttons">
                    <Link className="LinkIcon" to="/collections" ><button className="buyNow">Discover</button></Link>
                    <button className="addToCart"  onClick={addToCart} >Add To Cart</button>
                    </div>
                </div>
                </div>
                <div className="image shoeOne">
                <div className="slantShoeText"></div>
                <img alt="important text"src={bigShoeCard}/>
                </div>
            </div>
            </div>
        </div>
    );
}

export default ShoeCardBig;