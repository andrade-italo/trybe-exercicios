import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [random, setRandom] = useState('');
  useEffect(() => {
    setTimeout(() => setRandom(parseInt(Math.random() * 99)), 5000)
  }, [random])
  return (
    <h1 className="App">
      { random % 3 === 0 || random % 5 === 0 ? 'acertou' : 'errou' }
    </h1>
  );
}

export default App;
