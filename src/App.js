import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import './App.css';
import FeatureMovie from './components/FeatureMovie.js';
import Header from './components/Header.js';

export default () =>{
  
  const[movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null); 
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async() => {
      //pegando a lista de filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando filme em destaque
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListiner = () => {
      if(window.scrollY > 15 ){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListiner);
    return () =>{
      window.removeEventListener('scroll', scrollListiner);
    }
  },[]);
  
  return (
    <div className = "page">

      <Header black = {blackHeader} />
       {featureData && 
       
        <FeatureMovie item={featureData}/>
       
       }
      
      <section className = "lists">
        {movieList.map((item, key) =>(
           <MovieRow key={key} title={item.title} items = {item.items} />
        ))}
      </section>

      <footer>
          Feito com amor por Edson Brandon <br/>
          Com tutoria da <a href="https://b7web.com.br"> B7Web </a> <br/>
          Direitos de imagens para <a href="https://netflix.com"> Netflix </a> <br/>
          Dados pegos do site <a href="https://themoviedb.org"> Themoviedb.org </a>
      </footer>
        
    </div>
  );
}