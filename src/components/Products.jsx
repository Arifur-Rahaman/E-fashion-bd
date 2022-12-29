import React, { useContext} from 'react';
import ProductItem from './ProductItem';
import { Store } from '../Store';
import useFetch from '../hooks/useFetch';
import { PRODUCTS_SET } from '../const/actions';
import Loader from './Loader';
import Error from './Error';

const Products = () => {
    const {state} = useFetch('products.json', PRODUCTS_SET)
    const {state:ctxState} = useContext(Store)
    const {products} = ctxState.product

    if(state.isLoading){
        return <Loader/>
    }
    if(state.error){
        return <Error error={state.error}/>
    }

    return (
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {
                products.map(product => (
                    <ProductItem key={product._id} product={product} />
                ))
            }
        </div>
    );
};

export default Products;