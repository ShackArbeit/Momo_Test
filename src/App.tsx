import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import GoodsDetailPage from './pages/GoodsDetailPage'
import CartPage from './pages/CartPage'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter basename="/Momo_Test">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="goods/:id" element={<GoodsDetailPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
