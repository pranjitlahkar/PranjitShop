// create a context 
// provider 
// consumer ---> usecontext hook 

import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer"

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featuredProducts:[],
    isSingleLoading:false,
    singleProduct:{}
}

const storeContext = createContext()
const StoreProvider = ({ children }) => {


const [state, dispatch] = useReducer(reducer , initialState)

const API="http://13.49.229.228:5000/api/products"

const getProducts=async(url)=>{
dispatch({type: "SET_LOADING"})

try {
    const res = await axios.get(url)
    const products = await res.data.myData
    
    
    dispatch({type: "GET_SHOPAPI_DATA" , payload:products}) 
} catch (error) {
   dispatch({type: "SEND_API_ERROR"})
}
}
const getSingleProduct=async(url)=>{
    dispatch({type:"SET_SINGLE_LOADING"})
    try {
        const res= await axios.get(url)
        const singleProduct = await res.data.myData[0]
        dispatch({type:"GET_SINGLE_PRODUCT" , payload:singleProduct})

    } catch (error) {
        dispatch({
            type:"SET_SINGLE_ERROR"
        })
        
    }

}

    useEffect(() => {
        getProducts(API)
    }, [])



    return <storeContext.Provider value={{
      ...state , getSingleProduct
    }}>
        {children}
    </storeContext.Provider>

}
// custom hooks
const useProductContext = () => {
    return useContext(storeContext);
  };

export { StoreProvider, storeContext  ,useProductContext};