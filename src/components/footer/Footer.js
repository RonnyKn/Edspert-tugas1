import React from "react"
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <span>Edspert.id</span>
          <p>
            Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten
            Sleman, Daerah Istimewa Yogyakarta 55581
          </p>
        </div>
        <div className="footer-right">
          <ul>
            <li>
              <strong>Program </strong>
            </li>
            <li>Online Course</li>
            <li>Bootcamp</li>
            <li>Mini bootcamp</li>
          </ul>
          <ul>
            <li>
              <strong>Bidang ilmu </strong>
            </li>
            <li>Digital marketing</li>
            <li>Product management</li>
            <li>English</li>
            <li>Programming</li>
          </ul>
          <ul>
            <li>
              <strong>Tentang edspert </strong>
            </li>
            <li>Bantuan</li>
            <li>Kontak kami</li>
            <li>Media sosial</li>
          </ul>
        </div>
      </div>
      <h5 className="copyright">Copyright Edspert 2023</h5>
    </footer>
  )
}

export default Footer
