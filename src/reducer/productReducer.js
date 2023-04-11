

const productReducer = (state, action) => {
    // if (action.type === "SET_LOADING") {
    //     return {
    //         ...state,
    //         isLoading: true
    //     }

    // }
    // if (action.type === "SEND_API_ERROR") {
    //     return {
    //         ...state,
    //         isError: true,
    //         isLoading: false
    //     }
    // }
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            };
        case "GET_SHOPAPI_DATA":
            const featuredProducts = action.payload.filter((currElem) => {

                return currElem.featured === true

            })
            console.log(featuredProducts)
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featuredProducts: featuredProducts
            }

        case "SEND_API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true
            }

        case "GET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload

            }

        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true

            }
        default:
            return state
    }

}

export default productReducer
