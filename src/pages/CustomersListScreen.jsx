import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Error from '../components/Error'
import Loader from '../components/Loader'
import Table from '../components/Table'
import { CUSTMERS_SET } from '../const/actions'
import { customerListTableColumns } from '../const/tableColumn'
import useFetch from '../hooks/useFetch'
import { Store } from '../Store'

function CustomersListScreen() {
  const navigate = useNavigate()
  const { state } = useFetch('customers.json', CUSTMERS_SET)
  const { state: ctxState } = useContext(Store)
  const { customers } = ctxState.customer

  const modifiedCustomers = customers.map((customer)=>{
    return {
      _id: customer._id,
      name: `${customer.firstName} ${customer.lastName}`,
      email: customer.email,
      createdAt: customer.createdAt

    }
  })

  // Passed actions array as a props of <Table/> (Table->Row->CellData) 
  // and call onClick method from <CellData/> when a particular event is fired
  const actions = [
    {
      name: 'Details',
      value: 'details',
      onClick: (id) => {
        navigate(`/customerList/${id}`)
      }
    },
  ]
  const customerAddAction = {
    name: 'Add Customer',
    onClick: () => {
        navigate(`/addCustomer`)
    }
}

  if (state.isLoading) {
    return <Loader />
  }

  if (state.error) {
    return <Error error={state.error} />
  }
  return (
    <Table
      data={modifiedCustomers}
      columns={customerListTableColumns}
      actions={actions}
      topAction = {customerAddAction}
      title='Customer List'
    />
  )
}

export default CustomersListScreen