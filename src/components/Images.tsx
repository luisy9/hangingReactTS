const Images = ({ intento, imagen }) => {
    console.log(imagen[0])
  return (
    <div className=''>
      {intento === imagen[intento] ? (
        <img src={'./' + imagen[intento]} alt='' />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Images;
