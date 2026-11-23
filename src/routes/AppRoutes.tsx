import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ContactUs from '../pages/ContactUs'
import Blogs from '../pages/Blogs'
import NavBar from '../components/NavBar'

function AppRoutes() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blogs />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

// npm i lucide-react