import {useContext} from 'react';
import '../css/ShoeCart.css'
import { ProductsContext } from '../ProductContext'
import ShoeCardLong from './ShoeCardLong';

function ShoeCart() {

    const [cartItems, setCartItems ] = useContext(ProductsContext)
    var totalPrice = 0
    for (var i  = 0; i < cartItems.length; i++){
        totalPrice += cartItems[i].price
        console.log(totalPrice)
    }
    return (
        <div className="ShoeCart">
            <h1>You have {cartItems.length} items in your Shopping Cart</h1>
            {
                cartItems.map(cartItem => (
                    <ShoeCardLong key={setCartItems.id} imgsrc={cartItem.img} name={cartItem.name} price={cartItem.price}/>
                ))
            }

            <div className="proceedButton">
                <h4> Your total order costs: <span>${ totalPrice } </span></h4>
            </div>
        </div>
    );
}

export default ShoeCart;