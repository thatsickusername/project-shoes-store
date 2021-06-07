import {useContext} from 'react';
import '../css/ShoeCart.css'
import { ProductsContext } from '../ProductContext'
import ShoeCardLong from './ShoeCardLong';

function ShoeCart() {

    const [cartItems, setCartItems ] = useContext(ProductsContext)


    return (
        <div className="ShoeCart">
            <h2>all the items in your cart</h2>
            {
                cartItems.map(cartItem => (
                    <ShoeCardLong key={setCartItems.id} name={cartItem.name}/>
                ))
            }
        </div>
    );
}

export default ShoeCart;