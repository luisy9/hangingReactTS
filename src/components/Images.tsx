import { useEffect, useState } from 'react';

const Images = ({ intento, imagen }) => {
  // console.log(intento, imagen, 'imagen')
  const [image, setImage] = useState(-2);

  useEffect(() => {
    setImage(image + 1);
  }, [intento]);

  return (
    <div className=''>
      <p>{image < 0 ? 0 : image}</p>
      {imagen[image] ? <img src={imagen[image]} alt={intento} className='w-28' /> : <></>}
    </div>
  );
};

export default Images;
