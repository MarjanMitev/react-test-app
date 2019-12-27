import "@babel/polyfill";
import React, {useState, useEffect } from 'react';
import ImageService from './api/images.js';

import './styles/index.scss';

export const Hello = props => {

  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const fetchGalery = async () => {
      const { data } = await ImageService.getGiphies(100);
      setGifs(data);
    }
    fetchGalery();
  }, []);

  return (
    <div className="container">
      <ul>
        {gifs.map(gif => <li key={gif.id}>
          <video autoPlay loop muted width={gif.images.fixed_width.width} height={gif.images.fixed_width.height}>
            <source src={gif.images.fixed_width.mp4} type="video/mp4" />
          </video>
        </li>)}
      </ul>
    </div>
  )
}
