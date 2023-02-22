import React from 'react';
import './App.css';
import { Main } from './components/main/Main';
import { Content } from './components/content/Content';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Main />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
