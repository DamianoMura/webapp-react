import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="container">
      <div className="row g-2">
        <div className="col-12">
          <h1 className="text-center my-3">Welcome to BooleWood</h1>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3>Visita il mondo di BooleWood</h3>
            </div>
            <div className="card-body text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tempore nesciunt soluta, repellat magni iure sit voluptas corrupti mollitia pariatur recusandae debitis reprehenderit explicabo quia optio ratione voluptatem. Labore, harum!
              </p>
              <Link className="btn btn-success" to="/movies">Sfoglia i tuoi titoli preferiti</Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>i migliori film</h3>
            </div>
            <div className="card-body">
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci facilis ipsum aut rerum cum! Nam cupiditate consectetur deleniti doloribus saepe provident eum, voluptatem praesentium error adipisci, earum modi a voluptate?</p> 
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>recensioni </h3>
            </div>
            <div className="card-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci facilis ipsum aut rerum cum! Nam cupiditate consectetur deleniti doloribus saepe provident eum, voluptatem praesentium error adipisci, earum modi a voluptate?</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home