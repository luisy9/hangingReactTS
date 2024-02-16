import { letters } from './helpers/letters';
import SECRET_WORD from './utils/SECRET_WORD';
import Buttons from './components/Buttons';
import { useState } from 'react';

function App() {
  const [intento, setIntento] = useState(0);
  const [palabras, setPalabras] = useState([
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
  ]);

  function getLetter(letter) {
    for (let i = 0; i < SECRET_WORD.length; i++) {
      if (SECRET_WORD[i] === letter) {
        setPalabras((palabras) => {
          return palabras.map((p, index) => {
            if (index === i) {
              return letter;
            } else {
              return p;
            }
          });
        });
        // setPalabras((palabras) => {
        //   const newPalabras = [...palabras];
        //   newPalabras[i] = letter;
        //   return newPalabras;
        // });
      }
    }
    // if (intento < 10) {
    //   setIntento(intento + 1);
    // } else {
    //   console.log('Has perdido');
    // }
  }

  return (
    <div className='w-screen'>
      <h1 className='text-center pt-10'>Juego del Ahorcado</h1>

      {/* Contador de Intentos */}
      <h1 className='text-center pt-5'>Intentos: {intento}</h1>

      {/* Aciertos de palabras */}
      <h1 className='text-center'>{palabras.join('')}</h1>

      {/* Botones del Abecedario */}
      <div className='flex justify-center gap-2 pt-10'>
        {letters.map((letter): string => {
          return <Buttons letter={letter} key={letter} getLetter={getLetter} />;
        })}
      </div>
    </div>
  );
}

export default App;
