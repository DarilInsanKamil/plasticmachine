import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, ProductDetail, Documentation } from './pages'
import { Layout } from './components'
import './style.css'

export const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail" element={<ProductDetail />} />
          <Route path="documentation" element={<Documentation />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}