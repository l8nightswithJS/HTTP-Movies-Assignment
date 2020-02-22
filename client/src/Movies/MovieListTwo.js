import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

export const MovieListTwo = (props) => {
  
    const [state, setState] = useState({
        movies: []
    })
    

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => {
          setState({ movies: res.data })
          props.history.push('/')
      })
      .catch(err => console.log(err.response));
  }, []);

  


  
    return (
      <div className="movie-list">
        {state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} set={setState} state={state} />
        ))}
      </div>
    );
}

export function MovieDetails({ movie, set, state })  {
    const deleteMovie = () => {
        axios
            .delete(`http://localhost:5000/api/movies/${movie.id}`)
        axios
            .get('http://localhost:5000/api/movies')
            .then(res => {
                console.log(res.data);
                set({movies: res.data})
                
            })
            .catch(err => console.log(err));
    };
  return (
      <>
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </Link>
    <button onClick={deleteMovie}>Delete</button>
    </>
  );
}
