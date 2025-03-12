import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './Pages/home/HomePage'
import Like from './Pages/Like/Like'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path="like" element={<Like />} />
          <Route path="brands" element={<BrandsPage />} />
          <Route path="brands/:id" element={<SingleBrandPage />} />
          <Route path="services/uslugbuggies" element={<UslugBuggiesPage />} />
          <Route path="services/uslugcar" element={<UslugCarPage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/singleblog" element={<SingleBlogPage />} />
          <Route path="blog/singleblog2" element={<SingleBlogPage2 />} />
          <Route path="blog/singleblog3" element={<SingleBlogPage3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App