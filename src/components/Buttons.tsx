const Buttons = ({ letter, getLetter }) => {
  return (
    <div>
      <button
        className='w-9 bg-[#434342] text-white border-2'
        onClick={() => getLetter(letter)}
      >
        {letter}
      </button>
    </div>
  );
};

export default Buttons;
