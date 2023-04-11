import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducer/cartReducer"

const CartContext = createContext()
const getLocalCartData =()=>{
   let LocalCart = localStorage.getItem("PranjitShopCart")
   if(LocalCart===[]){
    return[]
   }else{
    return JSON.parse(LocalCart)
   }
}

const initialState = {
    cart:getLocalCartData(),
    totalItem: "",
    totalPrice: "",
    shippingFees: 200

}

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (id, color, cartno, price, name, products) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, cartno, products } })
    }
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM" , payload:id} )
    }
    const clearCart=()=>{
        dispatch({
            type:"CLEAR_CART"
        })
    }
const continueShopping=()=>{
    dispatch({type:"CONTINUE_SHOPPING"})
}


const incCart=(id)=>{
    dispatch({type:"INCREASE_CART" , payload:id})
}
const decCart=(id)=>{
    dispatch({type:"DECREASE_CART" , payload:id})
}


    // to add cart items in localStorage
    useEffect(() => {
        dispatch({type:"UPDATE_CART_VALUE_ITEM"});
        // dispatch({type:"CART_TOTAL"})
      localStorage.setItem("PranjitShopCart" , JSON.stringify(state.cart))
    
    }, [state.cart])
    
    return <CartContext.Provider value={{ ...state, addToCart, removeItem , clearCart , continueShopping , incCart , decCart}}>
        {children}
    </CartContext.Provider>

}

export const useCartContext = () => {
    return useContext(CartContext)
}