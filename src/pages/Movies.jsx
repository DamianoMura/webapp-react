const endpoint="http://localhost:3000/movies/";
import axios from "axios";
import { useState, useEffect } from "react";

const Movies = () => {
  const [movies,setMovies]=useState([]);

  useEffect(()=>{
    
      axios.get(endpoint).then((resp)=>{
         setMovies(resp.data)
        
      })
  },[])
  return (
   <div className="container">
    <div className="row">
      <div className="col-12">
        <h1 className="text-center">Movies List</h1>
      </div>
    </div>
   </div>
  )
}

export default Movies