import React from 'react'

const About = () => {
  return (
   <div className="container">
    <div className="row g-2">
      <div className="col-12">
        <h1>About Us</h1>
      </div>
      <div className="col-12 col-md-6">
        <div className="card">
          <div className="card-header">
            <h3>lo staff IT</h3>
          </div>
          <div className="card-body">
            <ul>
              <li>Tizio</li>
              <li>Caio</li>
              <li>Sempronio</li>
              <li>Franco</li>
              <li>Passassasughe</li>
            </ul>
            
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="card">
          <div className="card-header">
            <h3>Filmologi</h3>
          </div>
          <div className="card-body"> 

            <ul>
              <li>Asdrubale</li>
              <li>GianMariaGiannino</li>
              <li>Arnaldo</li>
              <li>Ascanio</li>
              <li>GualtierAngelo</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3>contatti</h3>
          </div>
          <div className="card-body"></div>
            <ul>
              <li>non contattateci per favore!</li>
            </ul>
          
        </div>
      </div>
    </div>
   </div>
  )
}

export default About