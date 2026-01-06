import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

/* Components */
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Tools from './components/Tools';
import Testimonials from './components/Testimonials';
import Industries from './components/Industries';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import DemoPage from './components/DemoPage';
import ScrollReveal from './components/ScrollReveal';

import ScrollToTop from './components/ScrollToTop';

/* Layout wrapper to handle conditional navbar presence if needed, 
   though design shows navbar on login page too. */
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

const HomePage = () => (
  <>
    <ScrollReveal><Hero /></ScrollReveal>
    <ScrollReveal><Features /></ScrollReveal>
    <ScrollReveal><Solutions /></ScrollReveal>
    <ScrollReveal><Tools /></ScrollReveal>
    <ScrollReveal><Testimonials /></ScrollReveal>
    <ScrollReveal><Industries /></ScrollReveal>
    <ScrollReveal><Process /></ScrollReveal>
    <ScrollReveal><Contact /></ScrollReveal>
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        {/* We wrap routes in Layout so Navbar/Footer persist, 
            or we can put them inside individual page components 
            if they differ significantly. */ }
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/demo" element={<Layout><DemoPage /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
