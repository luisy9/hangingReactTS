import { useState } from 'react';
import { letters } from './helpers/letters';
import SECRET_WORD from './utils/SECRET_WORD';
import Buttons from './components/Buttons';
import Images from './components/Images';

function App() {
  const [intento, setIntento] = useState(new Array(SECRET_WORD)[0].length);
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

  const [imagen, setImagen] = useState([
    '0.png',
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
  ]);

  function intentosUsuario() {
    //Refactorizar esto
    const lengthArray = new Array(SECRET_WORD)[0].length;
    if (intento === lengthArray) {
      setIntento(intento - 1);
    } else if (intento < lengthArray && intento > 0) {
      setIntento(intento - 1);
    } else if (intento === 0) {
      console.log('has perdido');
    }
  }

  function getLetter(letter) {
    intentosUsuario();
    for (let i = 0; i < SECRET_WORD.length; i++) {
      if (SECRET_WORD[i] === letter) {
        //Primera forma de hacerlo tambien valida hecha por mi
        setPalabras((palabras) => {
          return palabras.map((p, index) => {
            if (index === i) {
              return letter;
            } else {
              return p;
            }
          });
        });
        //Segunda forma de hacerlo muy valida
        // setPalabras((palabras) => {
        //   const newPalabras = [...palabras];
        //   newPalabras[i] = letter;
        //   return newPalabras;
        // });
      }
    }
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

      {/* Intentos con Imagenes */}
      <h1>hOLA</h1>
      <Images intento={intento} imagen={imagen} />
    </div>
  );
}

export default App;
