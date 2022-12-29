export const productListTableColumns = [
    { heading: 'Id', value: '_id' },
    { heading: 'Name', value: 'name' },
    { heading: 'Price', value: 'price' },
    { heading: 'Category', value: 'category' },
    { heading: 'Brand', value: 'brand' },
    { heading: 'Actions', value: 'actions' }
]

export const orderListTableColumns = [
    { heading: 'Id', value: '_id' },
    { heading: 'Date', value: 'createdAt' },
    { heading: 'Total', value: 'totalPrice' },
    { heading: 'Paid', value: 'isPaid' },
    { heading: 'Delivered', value: 'isDelivered' },
    { heading: 'Actions', value: 'actions' }
]

export const customerListTableColumns = [
    { heading: 'Id', value: '_id' },
    { heading: 'Name', value: 'name' },
    { heading: 'Email', value: 'email' },
    { heading: 'Join Date', value: 'createdAt' },
    { heading: 'Actions', value: 'actions' }
  ]