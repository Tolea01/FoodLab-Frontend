import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Template/Layout';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About us/About';
import Services from './components/Pages/Services/Services';
import Menu from './components/Pages/Menu/Menu';
import Contact from './components/Pages/Contact us/Contact';
import Navbar from './components/Template/Navbar';
import Footer from './components/Template/Footer';
import Search from './components/Pages/Search Page/Search';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="menu" element={<Menu />} />
        <Route path="contacts" element={<Contact />} />
        <Route path="search" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}