import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title.name}</a>
    {/* <Link className="navbar-brand" to="/">{props.title.name}</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggelMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} mode</label>
      </div>
    </div>
    <div className={`form-check text-${props.mode==='light'?'dark':'light'} mx-2`}>
        <input className="form-check-input" type="radio" name="exampleRadios" onClick={props.red} id="exampleRadios1" value="option1" />
        <label className="form-check-label" htmlFor="exampleRadios1">
          Red mode
        </label>
      </div>
      <div className={`form-check text-${props.mode==='light'?'dark':'light'} mx-2`}>
        <input className="form-check-input" type="radio" name="exampleRadios" onClick={props.blue} id="exampleRadios2" value="option2"/>
        <label className="form-check-label" htmlFor="exampleRadios2">
          Blue mode
        </label>
      </div>
      <div className={`form-check text-${props.mode==='light'?'dark':'light'} mx-2`}>
        <input className="form-check-input" type="radio" name="exampleRadios" onClick={props.yellow} id="exampleRadios3" value="option3"/>
        <label className="form-check-label" htmlFor="exampleRadios3">
          Yellow mode
        </label>
      </div>
  </div>
</nav>
    </>
  );
}

Navbar.propTypes = {title: PropTypes.object,
    aboutText: PropTypes.string
}