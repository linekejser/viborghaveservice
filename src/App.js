import React from 'react';

//CSS
import './App.css';

//Layout
import Navbar from './components/layout/Navbar.jsx'
import Header from './components/layout/Header.jsx'
import AboutUs from './components/pages/AboutUs';
import Services from './components/pages/Services';
import Gallery from './components/pages/Gallery';
import Reviews from './components/pages/Reviews';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
   <>
    <Navbar />
    <Header />
    <main>
    <AboutUs />
    <Services />
    <Gallery />
    <Reviews />
    <Contact />
    </main>
    <Footer />
   </>
  );
}

export default App;
