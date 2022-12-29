import { createContext, useReducer } from "react"
import { ORDERS_SET, PRODUCTS_SET, CUSTMERS_SET, ADD_TO_CART, DECREASE_CART_QUANTITY, DELETE_FROM_CART, SET_SHIPPING_ADDRESS, SET_PAYMENT_METHOD } from "./const/actions"

export const Store = createContext()
const initialState = {
    product: {
        products: [],
    },
    order: {
        orders: [],
    },
    customer: {
        customers: [],
    },
    cart: {
        carts: [],
        shippingAddress:{
            fullName:'',
            address: '',
            city: '',
            postalCode: '',
            country: '',
        },
        paymentMethod:'paypal',
    }
}
const reducer = (state, action) => {
    switch (action.type) {
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
                    customers: [...action.payload]
                }
            }

        case ADD_TO_CART:
            const isExist = state.cart.carts.find(item => item._id === action.payload.product._id)
            let quantity = isExist ? isExist.quantity + action.payload.quantity : action.payload.quantity
            const newItem = { ...action.payload.product, quantity }
            let updatedCart = null;
            if (isExist) {
                updatedCart = state.cart.carts.map(cart => cart._id === newItem._id ? newItem : cart)
            } else {
                updatedCart = [...state.cart.carts, newItem]
            }
            return {
                ...state,
                cart: {
                    ...state.cart,
                    carts: [...updatedCart]
                }
            }

        case DECREASE_CART_QUANTITY:
            const decreasedCart = state.cart.carts.map((cart) => cart._id === action.payload.product._id ? { ...cart, quantity: cart.quantity - 1 } : cart)

            return {
                ...state,
                cart: {
                    ...state.cart,
                    carts: [...decreasedCart]
                }
            }

        case DELETE_FROM_CART:
            const updatedAfterDelete = state.cart.carts.filter((cart) => cart._id !== action.payload.product._id)
            return {
                ...state,
                cart: {
                    ...state.cart,
                    carts: [...updatedAfterDelete]
                }
            }
        case SET_SHIPPING_ADDRESS:
            return{
                ...state,
                cart: {
                    ...state.cart,
                    shippingAddress: {...action.payload}
                }
            }
        case SET_PAYMENT_METHOD:
            return{
                ...state,
                cart: {
                    ...state.cart,
                    paymentMethod: action.payload
                }
            }
        default:
            return state
    }
}

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const value = { state, dispatch }
    return (
        <Store.Provider
            value={value}
        >
            {children}
        </Store.Provider>
    )
}

export default StoreProvider