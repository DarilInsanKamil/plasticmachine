import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, ProductDetail, Documentation, ProductList } from './pages'
import { Layout } from './components'
import './style.css'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path="productlist" element={<ProductList />} />
        </Route>
        <Route path="detail" element={<ProductDetail />} />
        <Route path="documentation" element={<Documentation />} />
      </Routes>
    </BrowserRouter>
  )
}