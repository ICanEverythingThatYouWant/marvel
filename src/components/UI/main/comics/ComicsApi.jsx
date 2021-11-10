import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HomeWrapper } from './style';
import CarouselComics from './Carousel/CarouselComics';

export default function ComicsApi() {
  const hash = 'e5ae61907640d6909c3c7f3069fcfbbb';

  const [items, setItems] = useState([]);
  const [item, setVenom] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const result = await axios(`http://gateway.marvel.com/v1/public/characters/1009368/comics?ts=100&apikey=cfbf8d4df78b945360d8256fe49e446a&hash=${hash}`);
      console.log(result.data.data.results);
      setItems(result.data.data.results);
      setLoading(false);
    };

    fetch();
  }, [query]);

  useEffect(() => {
    const getComics = async () => {
      const result = await axios(`http://gateway.marvel.com/v1/public/characters/1010788/comics?ts=100&apikey=cfbf8d4df78b945360d8256fe49e446a&hash=${hash}`);
      console.log(result.data.data.results);
      setVenom(result.data.data.results);
      setLoading(false);
    };

    getComics();
  }, [query]);

  return (
    <div className="carousel-content">
      <HomeWrapper>
        <h1 className="name-carousel"> comics with iron man</h1>
        <CarouselComics items={items} isLoadins={isLoading} />
        <h1 className="name-carousel"> comics with venom</h1>
        <CarouselComics items={item} isLoadins={isLoading} />
      </HomeWrapper>
    </div>
  );
}
