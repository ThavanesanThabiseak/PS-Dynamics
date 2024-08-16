import React from 'react';
import './App.css';
import Header from './Components/Header';
import Section from './Components/Section';
import Footer from './Components/Footer';
import './style.css';

function App() {
  return (
    <div className="App">
      {/* Use the imported components here */}
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;

