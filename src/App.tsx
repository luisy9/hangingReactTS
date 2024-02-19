import { useEffect, useState } from 'react';
import { letters } from './helpers/letters';
import SECRET_WORD from './utils/SECRET_WORD';
import Buttons from './components/Buttons';
import Images from './components/Images';

const initialState = {
  intento: SECRET_WORD.length,
  palabras: Array(SECRET_WORD.length).fill('_'),
  imagen: 0,
  gameOn: false,
};

function App() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (state.intento === 0 && state.gameOn) {
      resetGame();
    }
  }, [state.gameOn]);

  function resetGame() {
    setState(initialState);
  }

  function intentosUsuario() {
    setState((prevState) => ({
      ...prevState,
      intento: prevState.intento > 0 ? prevState.intento - 1 : 0,
    }));
  }

  function getLetter(letter) {
    const { palabras } = state;
    const newPalabras = palabras.map((p, index) =>
      SECRET_WORD[index] === letter ? letter : p
    );

    setState((prevState) => ({
      ...prevState,
      palabras: newPalabras,
      intento: newPalabras.includes('_') ? prevState.intento : 0,
    }));

    if (!SECRET_WORD.includes(letter)) {
      intentosUsuario();
    }
  }

  return (
    <div className='bg-[#16304C]'>
      <div className='w-screen h-screen'>
        <h1 className='text-center pt-10 text-4xl text-white'>
          Juego del Ahorcado
        </h1>

        <p>{state.gameOn.toString()}</p>
        {state.intento === 0 && state.palabras ? (
          <h1 className='text-center pt-5 text-2xl'>
            <h1 className='mb-5'>Has Perdido!</h1>
            <button
              className='border-2 py-1 px-4 rounded-lg bg-green-300 cursor-pointer hover:bg-green-500 transition-colors duration-300 animate-bounce'
              onClick={resetGame}
            >
              Jugar
            </button>
          </h1>
        ) : (
          <div>
            <h1 className='text-center pt-5 text-2xl'>
              Intentos: {state.intento}
            </h1>
            <h1 className='text-center'>{state.palabras.join('')}</h1>

            <div className='flex justify-center gap-2 pt-10'>
              {letters.map((letter) => (
                <Buttons letter={letter} key={letter} getLetter={getLetter} />
              ))}
            </div>

            <Images intento={state.intento} imagen={state.imagen} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
