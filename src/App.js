import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Nav from './components/Nav/index'

function App() {

  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'Contact':
        return <Contact />
      case 'Portfolio':
        return <Portfolio />
      case 'Resume':
        return <Resume />
      default:
        return <About />
    }
  }

  return (
    <div>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Header />
      <div>
        {renderPage(currentPage)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
