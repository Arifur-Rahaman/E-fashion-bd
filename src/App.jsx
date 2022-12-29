import { Route, Routes } from 'react-router-dom';
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
          {/* ***Admin Routes*** */}
          <Route path="orderList" element={<OrdersListScreen />}/>
          <Route path="orderList/:orderId" element={<OrderDetailsScreen />}/>
          <Route path="productList" element={<ProductListScreen />} />
          <Route path="productList/:productId" element={<ProductDetailsScreenAdmin />}/>
          <Route path="addProduct" element={<ProductAddScreen/>}/>

        </Routes>
        <ToastContainer/>
      </MainLayout>
    </StoreProvider>
  );
}

export default App;
