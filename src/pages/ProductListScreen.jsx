import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Error from '../components/Error';
import Loader from '../components/Loader';
import Table from '../components/Table';
import { PRODUCTS_SET } from '../const/actions';
import { productListTableColumns } from '../const/tableColumn';
import useFetch from '../hooks/useFetch';
import { Store } from '../Store';

const ProductListScreen = () => {
    const { state } = useFetch('products.json', PRODUCTS_SET)
    const navigate = useNavigate()
    const { state: ctxState } = useContext(Store)
    const { products } = ctxState.product

    // Passed actions array as a props of <Table/> (Table->Row->CellData) 
    // and called onClick method from <CellData/> when a particular event is fired
    const actions = [
        {
            name: 'Details',
            value: 'details',
            onClick: (id) => {
                navigate(`/productList/${id}`)
            }
        },
    ]
    const productAddAction = {
        name: 'Add Product',
        onClick: () => {
            navigate(`/addProduct`)
        }
    }

    if (state.isLoading) {
        return <Loader />
    }
    if (state.error) {
        return <Error error={state.error} />
    }
    return (
        <div className="container mx-auto">
            <Table
                data={products}
                columns={productListTableColumns}
                actions={actions}
                topAction = {productAddAction}
                title="Product List" />
        </div>
    );
};

export default ProductListScreen;