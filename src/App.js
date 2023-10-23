import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Service from './Component/Service';
import Navbar from './Component/NavComponent/Navbar';
import Footer from './Component/NavComponent/Footer';
import Project from './Component/Project';
import Icon from './Component/Icon';

const App = () => {
  return (
    <div>
           
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        

      </Routes>
      <Icon/>
      <Footer />
    </div>
  );
};

export default App;
