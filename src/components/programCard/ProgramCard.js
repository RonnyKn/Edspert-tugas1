import React from "react"
import programIcon from "../../assets/manIcon.png"

const ProgramCard = ({ val }) => {
  return (
    <div className="program-card">
      <div className="card-head">
        <div className="card-head-left">
          <img src={programIcon} alt={`programIcon.png`} />
        </div>
        <div className="card-head-right">
          <h5>Intensive Bootcamp</h5>
          <h4>{val?.title}</h4>
          <p>{val?.subtitle}</p>
        </div>
      </div>

      <div className="card-content">
        <h4>{val?.title}</h4>
        <h5>{val?.subtitle}</h5>
        <p>
          Batch: <strong>{val?.batch}</strong>
        </p>
        <p>
          Mentor: <strong>{val?.mentor}</strong>
        </p>
        <div className="card-price">
          <p style={{ textDecoration: "line-through" }}>Rp 300.000</p>
          <strong>Rp {val?.price}</strong>
        </div>
      </div>
    </div>
  )
}

export default ProgramCard
