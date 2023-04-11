import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./Storecontext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();


const initialState = {
    filterProducts: [],
    allProducts: [],
    gridView: true,
    listView: false,
    sortedProduct: "Lowest",
    filters: {
        text: "",
        category:"all",
        company:"all",
        colors:"all",
        price:0,
        maxPrice:0,
        minPrice:0
    }

}

export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext()
    const [state, dispatch] = useReducer(reducer, initialState)

    const setGridView = () => {
        dispatch({ type: "SET_GRID" })
    }
    const setListView = () => {
        dispatch({ type: "SET_LIST" })
    }
    const Searchchange = (event) => {
        let name = event.target.name
        let value = event.target.value
        return dispatch({ type: "SEARCH_FILTER", payload: { name, value } })
    }
    const clearFilter=()=>{
dispatch({type:"CLEAR_FILTER"})
    }

    const Sorting = (event) => {

        dispatch({ type: "SORTING", payload: event.target.value })
    }

    useEffect(() => {
        dispatch({ type: "SET_SORT_PRODUCT" })

    }, [state.sortedProduct])

    useEffect(() => {
        dispatch({ type: "GET_FILTER_PRODUCTS", payload: products })
    }, [products])

    useEffect(() => {
        dispatch({ type: "CHANGED_FILTER" })
    }, [state.filters])

    return (<FilterContext.Provider value={{ ...state, setGridView, setListView, Sorting, Searchchange ,clearFilter}}>
        {children}
    </FilterContext.Provider>
    )
}

export const useFilterProductContext = () => {
    return useContext(FilterContext)
}