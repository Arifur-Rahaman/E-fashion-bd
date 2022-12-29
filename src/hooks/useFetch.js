import axios from "axios"
import { useContext, useEffect, useReducer } from "react"
import { FETCHING_FAIL, FETCHING_START, FETCHING_SUCCESS } from "../const/actions"
import { Store } from "../Store"
import { getErrorMessage } from "../utils/getErrorMessage"

const initialState = {
    isLoading: false,
    error: '',
}

const reducer = (state, action) => {
    switch (action.type) {
        case FETCHING_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case FETCHING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
            }
        case FETCHING_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

function useFetch(url, ON_SUCCESS_ACTION) {
    const {dispatch:ctxDispatch} = useContext(Store)
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        const fetchData = async () => {
            dispatch({type: FETCHING_START})
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/${url}`)
                if(data){
                    dispatch({type: FETCHING_SUCCESS})
                    ctxDispatch({type: ON_SUCCESS_ACTION, payload: data})
                }
                
            } catch (error) {
                const message = getErrorMessage(error)
                dispatch({type: FETCHING_FAIL, payload: message})
            }
        }
        fetchData()
    }, [ON_SUCCESS_ACTION, url, ctxDispatch])

    return {state}
}

export default useFetch