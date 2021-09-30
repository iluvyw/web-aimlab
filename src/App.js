import { useState } from 'react';
import './App.css';
import PlayScreen from './components/PlayScreen';

function App() {
  const [point, setPoint] = useState(0)
  const [total, setTotal] = useState(0)

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <div className='app'>
      <PlayScreen setPoint={setPoint} setTotal={setTotal} />
      <div className='information'>
        <h1>Point: {point}</h1>
        <div className='small-container'>
          <button onClick={() => refreshPage()}>Restart</button>
          <a href='https://github.com/iluvyw'>
            <h1>AIM LAB by ILUVYW</h1>
          </a>
        </div>
        <h1>Total: {total}</h1>
      </div>
    </div>
  );
}

export default App;
