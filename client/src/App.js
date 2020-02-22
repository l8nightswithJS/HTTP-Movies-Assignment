import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import {MovieListTwo} from "./Movies/MovieListTwo";
import Movie from "./Movies/Movie";
import UpdateItemForm from "./Movies/UpdateForm";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };
  

  // const updateMovie = movie => {
  //   setSavedList([...savedList, movie])
  // }

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieListTwo} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route 
        path="/update-movie/:id"
        render={props => {
          return <UpdateItemForm {...props} />
        }}
      />
    </>
  );
};

export default App;
