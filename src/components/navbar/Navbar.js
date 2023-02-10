import React from "react"
import "./Navbar.css"
import Button from "react-bootstrap/Button"

const Navbar = () => {
  return (
    <navbar className="navbar">
      <div className="container nav-container">
        <div className="nav-logo">
          <span>LOGO</span>
        </div>

        <div className="nav-navigation">
          <ul>
            <li>Program</li>
            <li>Bidang Ilmu</li>
            <li>Tentang</li>
            <li>
              <Button> masuk/daftar</Button>
            </li>
          </ul>
        </div>
      </div>
    </navbar>
  )
}

export default Navbar
