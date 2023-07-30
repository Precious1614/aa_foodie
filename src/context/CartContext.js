import React, {createContext, useState} from 'react'

const CartContext = createContext();

const CartProvider = ({children}) => {
    const[cart, setCart] = useState([])
    const [cartLength, setCartLength] = useState(cart.length)
    return(
        <CartContext.Provider value={{
            cart, cartLength, setCart, setCartLength
        }}>
            {children}
        </CartContext.Provider>
    )
}
export {CartProvider, CartContext}