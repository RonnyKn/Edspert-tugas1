import React from "react"
import "./Hero.css"
import headerImg from "../../assets/headerImg.png"

const Hero = () => {
  return (
    <header className="hero">
      <div className="container hero-container">
        <div className="hero-left">
          <h1>Jadi expert bersama edspert.id </h1>
          <small>
            Tingkatkan skill dan pengetahuan bersama para mentor terbaik di
            bidangnya,untuk siapkan karir impian anda.
          </small>
        </div>
        <div className="hero-right">
          <img src={headerImg} alt={`headerImg.png`} />
        </div>
      </div>
    </header>
  )
}

export default Hero
