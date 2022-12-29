import { createContext, useReducer } from "react"
import { ORDERS_SET, PRODUCTS_SET, CUSTMERS_SET, ADD_TO_CART } from "./const/actions"

export const Store = createContext()
const initialState = {
    product:{
        products: [],
    },
    order:{
        orders: [],
    },
    customer:{
        customers: [],
    },
    cart: {
        carts: [],
    }
}
const reducer = (state, action)=>{
    switch(action.type){
        case PRODUCTS_SET:
            return {
                ...state,
                product: {
                    products: action.payload
                }
            }
        case ORDERS_SET:
            return {
                ...state,
                order: {
                    orders: action.payload
                }
            }
        case CUSTMERS_SET:
            return {
                ...state,
                customer: {
                    customers: action.payload
                }
            }

        case ADD_TO_CART:
            const isExist = state.cart.carts.find(item=>item._id===action.payload.product._id)
            let quantity = isExist? isExist.quantity + action.payload.quantity : action.payload.quantity
            const newItem = {...action.payload.product, quantity}
            let updatedCart = null;
            if(isExist){
                updatedCart = state.cart.carts.map(cart=>cart._id===newItem._id? newItem : cart)
            }else{
                updatedCart = [...state.cart.carts, newItem]
            }

            return {
                ...state,
                cart:{
                    carts: [...updatedCart]
                }
            }
        default:
            return state
    }
}

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const value = {state, dispatch}
    return (
        <Store.Provider
            value={value}
        >
            {children}
        </Store.Provider>
    )
}

export default StoreProvider