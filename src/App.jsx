import { Route, Routes } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify'
import StoreProvider from './Store';
import HomeScreen from './pages/HomeScreen';
import ProductDetailsScreen from './pages/ProductDetailsScreen';
import CartViewScreen from "./pages/CartViewScreen";

function App() {
  return (
    <StoreProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="product/:slug" element={<ProductDetailsScreen />} />
          <Route path="carts" element={<CartViewScreen />} />

        </Routes>
        <ToastContainer/>
      </MainLayout>
    </StoreProvider>
  );
}

export default App;
