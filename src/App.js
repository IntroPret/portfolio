import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Alfred Dexter. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
