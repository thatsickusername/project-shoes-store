import React, { useState , createContext } from 'react';

export const ProductsContext = createContext();

export function ProductsProvider(props) {
    const [cartItems, setCartItems] = useState([])

    return (
        <ProductsContext.Provider value={[cartItems, setCartItems]}>
            {props.children}
        </ProductsContext.Provider>
    );
};