import React from "react"
import ProgramCard from "../programCard/ProgramCard"
import "./Program.css"
const Program = () => {
  const programData = [
    {
      title: "Programing Laravel",
      subtitle: "Getting started with laravel",
      batch: "22 September 2022",
      mentor: "Farrel Prayogo",
      price: "150.000",
    },
    {
      title: "Frontend ReactJs",
      subtitle: "Getting started with ReactJs",
      batch: "22 Januari 2025",
      mentor: "Jokowi Dodo",
      price: "160.000",
    },
    {
      title: "Programing Fullstack",
      subtitle: "Getting started with Phyton",
      batch: "22 Agustus 2021",
      mentor: "Megawati Sulityowati",
      price: "200.000",
    },
  ]

  return (
    <div className="program">
      <h2 className="program-title">~Program~</h2>
      <div className="container program-container">
        {programData.map((val, idx) => (
          <ProgramCard val={val} id={idx} />
        ))}
      </div>
    </div>
  )
}

export default Program
