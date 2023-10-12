import React from 'react'

export default function Navbar() {
  return (
    <div className="home">
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     
      <a className="navbar-brand container" href="#">Startup 3</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active container" href="#">
            Price
            <span class="sr-only">(current)</span>
          </a>
          <a className="nav-link container" href="#">Blog</a>
          <a className="nav-link container" href="#">Feedback</a>
          <a className="nav-link disabled container" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          <button size='sm' className="button container" type="submit">Purchess</button>
        </div>
      </div>
    </nav>
    
 
    </div>
  )
}
