import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About us/About';
import Services from './components/Pages/Services/Services';
import Menu from './components/Pages/Menu/Menu';
import Contact from './components/Pages/Contact us/Contact';



function App() {
  return (
    <BrowserRouter router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="menu" element={<Menu />} />
        <Route path="contacts" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
