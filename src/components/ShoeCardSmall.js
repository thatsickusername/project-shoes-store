import {useContext} from 'react';
import '../css/ShoeCardSmall.css'
import { ProductsContext } from '../ProductContext'

function ShoeCardSmall(props) {

    const [cartItems, setCartItems ] = useContext(ProductsContext)

    const addToCart = (e) => {
        e.preventDefault();
        const addToCartId = cartItems.length + 1
        setCartItems( prevCartItems => [...prevCartItems, {img: props.imgsrc, name: props.name, price: props.price, id: addToCartId}])
    }


    return (
            <div className="box">
                <img alt="meaningfull text" className="productImage"src={props.imgsrc}/>
                <div className="productText">
                    <h2 className="productTitle">{props.name}</h2>
                    <h4 className="productPrice"> ${props.price}</h4>
                    <button className="productToCart" onClick={addToCart} >Add To Cart</button>
                </div>
                
            </div>
       
    );
}

export default ShoeCardSmall;