
const filterReducer = (state, action) => {
    // const maxPrice=Math.max(...priceArray)

    switch (action.type) {
        case "GET_FILTER_PRODUCTS":

            let priceArray = action.payload.map((currElem) =>
                currElem.price
            )
            let maxPrice = Math.max(...priceArray)

            return {
                ...state,
                filterProducts: [...action.payload],
                allProducts: [...action.payload],
                filters: { ...state.filters, maxPrice, price: maxPrice }

            }
        case "SET_GRID": {
            return {
                ...state,
                gridView: true,
                listView: false

            }
        }
        case "SET_LIST":
            return {
                ...state,
                listView: true,
                gridView: false
            }
        case "SORTING":
            // const userSortVal = document.getElementById("sort")
            // const sortVal = userSortVal.options[userSortVal.selectedIndex].value
            // console.log(sortVal)

            return {
                ...state,
                sortedProduct: action.payload
            }



        case "SET_SORT_PRODUCT":
            const { sortedProduct, filterProducts } = state
            let newSortProduct
            let tempSortProduct = [...filterProducts]
            console.log(state.sortedProduct, "wow")

            const sortingProduct = (a, b) => {

                if (sortedProduct === "A-z") {

                    return a.name.localeCompare(b.name)


                }
                if (sortedProduct === "Z-a") {

                    return b.name.localeCompare(a.name)
                }

                if (sortedProduct === "Lowest") {
                    return a.price - b.price
                }
                if (sortedProduct === "Highest") {
                    return b.price - a.price
                }
            }

            // if (sortedProduct === "A-z") {
            //     newSortProduct = tempSortProduct.sort((a, b) =>
            //         a.name.localeCompare(b.name)
            //     )
            //     console.log(newSortProduct, "az")
            // }

            // if (sortedProduct === "Z-a") {
            //     newSortProduct = tempSortProduct.sort((a, b) =>
            //         b.name.localeCompare(a.name)
            //     )
            //      console.log(newSortProduct, "az")
            // }
            // if (sortedProduct === "Lowest") {
            //     const sortingProduct = (a, b) => {
            //         return a.price - b.price
            //     }
            //     newSortProduct = tempSortProduct.sort(sortingProduct)
            //     console.log(newSortProduct, "lowaz")
            // }
            // if (sortedProduct === "Highest") {
            //     const sortingProduct = (a, b) => {
            //         return b.price - a.price
            //     }
            //     newSortProduct = tempSortProduct.sort(sortingProduct)
            //     console.log(newSortProduct, "hihaz")
            // }
            newSortProduct = tempSortProduct.sort(sortingProduct)
            // console.log(newSortProduct , "hello world")

            return {
                ...state,
                filterProducts: newSortProduct


            }
        case "SEARCH_FILTER":
            let { name, value } = action.payload
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value
                }
            }

        case "CHANGED_FILTER":
            let { allProducts } = state
            let tempAllProducts = [...allProducts]
            console.log(tempAllProducts, "bye")
            const { text, category, company, colors, price } = state.filters
            if (text) {
                tempAllProducts = tempAllProducts.filter((currElem) => {
                    return currElem.name.toLowerCase().includes(text)
                })
                console.log(tempAllProducts, "bye2")
            }
            if (category !== "all") {
                tempAllProducts = tempAllProducts.filter((currElem) => {
                    return currElem.category === category
                })
            }

            // if (category === "all") {
            //     tempAllProducts = [...allProducts]
            // }
            if (company !== "all") {
                tempAllProducts = tempAllProducts.filter((currElem) => {
                    return currElem.company === company
                })
            }
            if (colors !== "all") {
                tempAllProducts = tempAllProducts.filter((currElem, index) => {
                    return currElem.colors.includes(colors)
                })
            }

            if (price === 0) {
                tempAllProducts = tempAllProducts.filter((currElem, index) => {
                    return currElem.price === price
                })

            } else {

                tempAllProducts = tempAllProducts.filter((currElem, index) => {
                    return currElem.price <= price
                })
            }
            // if(company==="all"){
            //     tempAllProducts=[...allProducts]
            // }
            return {
                ...state,
                filterProducts: tempAllProducts
            }
        case "CLEAR_FILTER":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "all",
                    company: "all",
                    colors: "all",
                    price: state.filters.price,
                    maxPrice: state.filters.maxPrice,
                    minPrice: state.filters.minPrice
                }

            }
        default: return state
    }

}
export default filterReducer