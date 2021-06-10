import {useContext} from 'react';
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
                    <h2 className="heading">Workouts to stretch your limits.</h2>
                    <h2 className="subText">You’ll find dozens of workouts to tap into, including running, walking, yoga, cycling, high-intensity interval training and dance. Apple Watch SE also pairs with compatible gym equipment.2 It brings more, so you can too.</h2>
                    <div className="buttons">
                    <button className="buyNow">Buy Now</button>
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