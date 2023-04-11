

const cartReducer = (state, action) => {





    if (action.type === "ADD_TO_CART") {
        let { id, color, cartno, products } = action.payload

        let existingProduct = state.cart.find((currElem) =>
            currElem.id === id + color
        )
        if (existingProduct) {
            let updatedProduct = state.cart.map((currElem) => {
                if (currElem.id === id + color) {
                    let newAmount = currElem.amount + cartno
                    if (newAmount >= currElem.max) {
                        newAmount = currElem.max
                    }
                    return {
                        ...currElem,
                        amount: newAmount
                    }
                } else {
                    return currElem
                }
            }

            )
            return {
                ...state,
                cart: updatedProduct
            }
        } else {
            let cartProduct
            cartProduct = {
                id: id + color,
                name: products.name,
                color,
                price: products.price,
                amount: cartno,
                img: products.images[0].url,
                max: products.stock

            }
            console.log(cartProduct, "cp")
            return {
                ...state,
                cart: [...state.cart, cartProduct]
            }
        }




        // console.log(amount, "amount", name, products)


    }
    if (action.type === "REMOVE_ITEM") {
        let clearedCart = state.cart.filter((currElem) =>
            currElem.id !== action.payload
        )
        return {
            ...state,
            cart: clearedCart
        }

    }
    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: []
        }

    }
    if (action.type === "INCREASE_CART") {
        let updatedProduct = state.cart.map((currElem) => {
            if (currElem.id === action.payload) {
                let newAmount = currElem.amount + 1
                if (newAmount >= currElem.max) {
                    newAmount = currElem.max
                }
                return {
                    ...currElem,
                    amount: newAmount
                }
            } else {
                return currElem
            }

        })
        return { ...state, cart: updatedProduct }
    }

    if (action.type === "DECREASE_CART") {
        let updatedProduct = state.cart.map((currElem) => {
            if (currElem.id === action.payload) {
                let newAmount = currElem.amount - 1
                if (newAmount <= 1) {
                    newAmount = 1
                }
                return {
                    ...currElem,
                    amount: newAmount
                }
            } else {
                return currElem
            }

        })
        return { ...state, cart: updatedProduct }
    }
    if (action.type === "UPDATE_CART_VALUE_ITEM") {
        let{ updatedCartVal , updatedCartPrice} = state.cart.reduce((accumulator, currElem) => {
            
            let { amount , price} = currElem
            
            accumulator.updatedCartVal += amount
            accumulator.updatedCartPrice += amount * price
            

            return accumulator

        }, {
            updatedCartVal:0,
            updatedCartPrice:0

        })
        return{
            ...state,
            totalItem:updatedCartVal,
            totalPrice:updatedCartPrice
        }

    }
//     if(action.type ==="CART_TOTAL"){
//         let updatedCartPrice = state.cart.reduce((initialVal, currElem) => {
            
//             let { price , amount} = currElem
//             initialVal = initialVal + (price * amount)
//             return initialVal
//     },0)
//     return{
//         ...state,
//         totalPrice:updatedCartPrice
//     }
   
// }
return state
}

export default cartReducer
