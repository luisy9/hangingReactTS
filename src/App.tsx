import { letters } from './helpers/letters';

import './App.css';

function App() {
  return (
    <div className=''>
      <h1>Hola Mundo</h1>
      {letters.map((letter: string) => {
        return <button key={letter}>{letter}</button>;
      })}
    </div>
  );
}

export default App;
