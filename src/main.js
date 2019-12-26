import React, {useState, useEffect, useRef} from 'react';
import "@babel/polyfill";
import ImageService from './api/images.js';

import './styles/index.scss';

export const Hello = props => {

  const [text, setText] = useState('');
  const divElem = useRef(null);

  useEffect(() => {
    const fetchGalery = async () => {
      const result = await ImageService.getGalery();
      console.log("Result: ", result.data);
    }
    fetchGalery();
  });

  return (
    <button className="MainApp" ref={divElem} text={text} />
  )
}
