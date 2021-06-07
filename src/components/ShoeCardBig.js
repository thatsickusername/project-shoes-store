import {useContext} from 'react';
import '../css/ShoeCardBig.css'
import bigShoeCard from '../images/bigShoeCard.png'
import { ProductsContext } from '../ProductContext'

function ShoeCardBig() {


    const [cartItems, setCartItems ] = useContext(ProductsContext)

    const addToCart = (e) => {
        e.preventDefault();
        const addToCartId = cartItems.length + 1
        setCartItems( prevCartItems => [...prevCartItems, {name: 'The big Box', id: addToCartId}])
    }

    return (
        <div>
            <div class="shoeCardContainer">
            <div class="card">
                <div class="cardText">
                <div class="textContainer">
                    <h2 class="heading">Workouts to stretch your limits.</h2>
                    <h2 class="subText">You’ll find dozens of workouts to tap into, including running, walking, yoga, cycling, high-intensity interval training and dance. Apple Watch SE also pairs with compatible gym equipment.2 It brings more, so you can too.</h2>
                    <div class="buttons">
                    <button class="buyNow">Buy Now</button>
                    <button class="addToCart"  onClick={addToCart} >Add To Cart</button>
                    </div>
                </div>
                </div>
                <div class="image shoeOne">
                <div class="slantShoeText"></div>
                <img alt="important text"src={bigShoeCard}/>
                </div>
            </div>
            </div>
        </div>
    );
}

export default ShoeCardBig;