import React, { useState } from 'react';
import './App.css';
import emoji from './components/Emoji';

const App = () => {
  const [fnum, fsetnum] = useState('');
  const [snum, ssetnum] = useState('');
  const [tnum, tsetnum] = useState('');
  const [result, setResult] = useState('');

  const Slotgame = () => {
    setResult('');
    
    let interval1, interval2, interval3;

    interval1 = setInterval(() => {
      fsetnum(emoji[Math.floor(Math.random() * emoji.length)]);
    }, 100);

    interval2 = setInterval(() => {
      ssetnum(emoji[Math.floor(Math.random() * emoji.length)]);
    }, 100);

    interval3 = setInterval(() => {
      tsetnum(emoji[Math.floor(Math.random() * emoji.length)]);
    }, 100);

    setTimeout(() => {
      clearInterval(interval1);
      let x = Math.floor(Math.random() * emoji.length);
      fsetnum(emoji[x]);

      clearInterval(interval2);
      let y = Math.floor(Math.random() * emoji.length);
      ssetnum(emoji[y]);

      clearInterval(interval3);
      let z = Math.floor(Math.random() * emoji.length);
      tsetnum(emoji[z]);

      if (x === y && y === z) {
        setResult('Winner');
      } else {
        setResult('Lose');
      }
    }, 3000);
  };

  return (
    <div className="container">
      <h1>🎰 Welcome to the <span>Slot Machine Game 🎰</span></h1>
      <button onClick={Slotgame}>Spin Me</button>
      <div id='para'>
        <p>{fnum}</p>
        <p>{snum}</p>
        <p>{tnum}</p>
      </div>
      <h1 className={`win ${result}`}>{result}</h1>
    </div>
  );
};

export default App;
