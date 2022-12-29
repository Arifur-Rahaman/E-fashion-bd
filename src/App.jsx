import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify'
import StoreProvider from './Store';
import HomeScreen from './pages/HomeScreen';
import ProductDetailsScreen from './pages/ProductDetailsScreen';
import CartViewScreen from "./pages/CartViewScreen";
import ShippingAddressScreen from './pages/ShippingAddressScreen';
import PaymentMethodScreen from "./pages/PaymentMethodScreen";
import OrderPreviewScreen from "./pages/OrderPreviewScreen";
import OrdersListScreen from "./pages/OrdersListScreen";
import OrderDetailsScreen from "./pages/OrderDetailsScreen";
import ProductListScreen from "./pages/ProductListScreen";
import ProductAddScreen from "./pages/ProductAddScreen";
import ProductDetailsScreenAdmin from "./pages/ProductDetailsScreenAdmin";
import CustomersListScreen from "./pages/CustomersListScreen";
import CustomerDetailsScreen from "./pages/CustomerDetailsScreen";
import CustomerAddScreen from "./pages/CustomerAddScreen";
import Page404 from './pages/Page404';

function App() {
  return (
    <StoreProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="product/:slug" element={<ProductDetailsScreen />} />
          <Route path="carts" element={<CartViewScreen />} />
          <Route path="shipping" element={<ShippingAddressScreen />} />
          <Route path="paymentMethod" element={<PaymentMethodScreen />} />
          <Route path="previewOrder" element={<OrderPreviewScreen />} />
          <Route path="404" element={<Page404/>}/>
          <Route path='/*' element={<Navigate to='/404'/>}/>
          {/* ***Admin Routes*** */}
          <Route path="orderList" element={<OrdersListScreen />}/>
          <Route path="orderList/:orderId" element={<OrderDetailsScreen />}/>
          <Route path="productList" element={<ProductListScreen />} />
          <Route path="productList/:productId" element={<ProductDetailsScreenAdmin />}/>
          <Route path="addProduct" element={<ProductAddScreen/>}/>
          <Route path="customerList" element={<CustomersListScreen />} />
          <Route path="addCustomer" element={<CustomerAddScreen/>}/>
          <Route path="customerList/:customerId" element={<CustomerDetailsScreen/>}/>

        </Routes>
        <ToastContainer/>
      </MainLayout>
    </StoreProvider>
  );
}

export default App;
