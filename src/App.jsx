import { Route, Routes } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import './index.css';
import StoreProvider from './Store';
import HomeScreen from './pages/HomeScreen';
import ProductDetailsScreen from './pages/ProductDetailsScreen';
function App() {
  return (
    <StoreProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="product/:slug" element={<ProductDetailsScreen />} />
        </Routes>
      </MainLayout>
    </StoreProvider>
  );
}

export default App;
