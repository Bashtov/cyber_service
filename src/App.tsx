import React from 'react';
import './App.css';
import { Main } from './components/main/Main';
import { Content } from './components/content/Content';
import { Footer } from './components/footer/Footer';
import { Form } from './components/form/Form';

function App() {
  return (
    <div className="App">
      <Main />
      <Content />
      <Footer />
      {/* <Form /> */}
    </div>
  );
}

export default App;
