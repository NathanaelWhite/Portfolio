import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';

function App() {

  const [currentPage, handlePageChange] = useState('About');

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
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {renderPage(currentPage)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
