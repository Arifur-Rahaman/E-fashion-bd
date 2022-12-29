import { Route, Routes } from 'react-router-dom';
import MainLayout from "./layouts/MainLayout";
import './index.css';
import StoreProvider from './Store';
import HomeScreen from './pages/HomeScreen';
function App() {
  return (
    <StoreProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </MainLayout>
    </StoreProvider>
  );
}

export default App;
