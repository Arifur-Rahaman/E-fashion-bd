import React, { useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Error from '../components/Error'
import Loader from '../components/Loader'
import Table from '../components/Table'
import {ORDERS_SET } from '../const/actions'
import { orderListTableColumns } from '../const/tableColumn'
import useFetch from '../hooks/useFetch'
import { Store } from '../Store'

function OrdersListScreen() {
    const navigate = useNavigate()
    const {state} = useFetch('orders.json', ORDERS_SET)
    const { state: ctxState} = useContext(Store)
    const { orders } = ctxState.order

    // Passed actions array as a props of <Table/> (Table->Row->CellData) 
    // and call onClick method from <CellData/> when a particular event is fired
    const actions = [
        {
            name: 'Details',
            value: 'details',
            onClick: (id) => {
                navigate(`/orderList/${id}`)
            }
        },
    ]

    if (state.isLoading) {
        return <Loader/>
    }

    if (state.error) {
        return <Error error={state.error}/>
    }
    return (
        <Table
            data={orders}
            columns={orderListTableColumns}
            actions={actions}
            title = 'Order List'
        />
    )
}

export default OrdersListScreen