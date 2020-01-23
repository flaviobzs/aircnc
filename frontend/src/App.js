import React from 'react';
import './App.css'

// import logo from './assets'

function App() {
  return (
    <div className="container">
      <img src={logo} alt=""/>

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre talentos para sua empresa
        </p>

        <form>
          <label htmlFor="email"></label>
          <input type="email" name="email" id="email" placeholder="Seu melhor email"/>

        </form>
      </div>
    </div>
  );
}

export default App;
