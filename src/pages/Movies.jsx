const endpoint="http://localhost:3000/movies/";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies,setMovies]=useState([]);

  useEffect(()=>{
    
      axios.get(endpoint).then((resp)=>{
         setMovies(resp.data)
        console.log(movies)
      })
  },[])
  return (
   <div className="container">
    <div className="row g-2">
      <div className="col-12">
        <h1 className="text-center">Movies List</h1>
      </div>
      {
        movies.map((movie)=>{
          return(
            <div className="col-12 col-md-6 col-lg-4" key={movie.id}>
              <div className="card">
                <div className="card-header text-center">
                  <h3>{movie.title}</h3>
                </div>
                <div className="card-body ">
                    <div className="hovered">
                      <Link to={`/movies/${movie.id}`} className="btn btn-primary" >Vedi dettaglio</Link>
                    </div>
                  
                  <div className="image-frame">
                    <img src={movie.image} alt={movie.title} />
                  <span>Directed by : {movie.director}</span>
                  </div>
                </div>
              </div>
            </div>

          )
        })
      }
    </div>
   </div>
  )
}

export default Movies