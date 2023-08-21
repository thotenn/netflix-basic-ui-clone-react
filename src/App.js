import React from "react";
import "./styles/base.css";
import PosterList from "./cmp/PosterList/PosterList";
import { moviesList } from "./moviesList";
import Header from "./cmp/Header/Header";
import NavBar from "./cmp/NavBar/NavBar";

/**
 * Se obtendra una lista aleatoria a partir de otra, y con la cantidad de filas requeridas, podrian repetirse los elementos
 * @param {Array<Object>} list Lista de filas que contendran el nombre y la imagen
 * @param {int} numItems El numero de elementos que se obtendran de la lista enviada
 * @returns Array<Object>
 */
const getAleatoryList = (list, numItems) => {
  const shuffledList = [...list].sort(() => Math.random() - 0.5);
  return shuffledList.slice(0, numItems);
};

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <PosterList
        titleSection="NETFLIX ORIGINALS"
        typeSection="large"
        list={getAleatoryList(moviesList.big, 20)}
      />
      <PosterList
        titleSection="Trending Now"
        typeSection="small"
        list={getAleatoryList(moviesList.small, 10)}
      />
      <PosterList
        titleSection="Top Rated"
        typeSection="small"
        list={getAleatoryList(moviesList.small, 10)}
      />
      <PosterList
        titleSection="Action Movies"
        typeSection="small"
        list={getAleatoryList(moviesList.small, 10)}
      />
      <PosterList
        titleSection="Comedy Movies"
        typeSection="small"
        list={getAleatoryList(moviesList.small, 10)}
      />
      <PosterList
        titleSection="Horror Movies"
        typeSection="small"
        list={getAleatoryList(moviesList.small, 10)}
      />
    </>
  );
};

export default App;
