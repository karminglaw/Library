import React from 'react';
import Navbar from '../src/components/Navbar';
import Catalog from '../src/components/Catalog'; // Corrected the path
import Note from './components/Note';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Catalog />
      <Note/>
      <Footer/>
    </>
  );
}

export default App;
