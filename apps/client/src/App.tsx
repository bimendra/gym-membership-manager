import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [message, setMesage] = useState('');

  useEffect(() => {}, [
    fetch('api')
      .then((response) => response.text())
      .then(setMesage),
  ]);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome!</h1>
      <p className="read-the-docs">{message}</p>
    </div>
  );
}

export default App;
