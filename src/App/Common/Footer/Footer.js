import React from "react"
import logoLight from "../../../assets/img/logo-light.png"

const Footer = () => {
  return (
    <footer className="dark-footer skin-dark-footer">
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <img src={logoLight} className="img-footer" alt="" />
                
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="footer-widget">
                <h4 className="widget-title">Navigations</h4>
                <ul className="footer-menu">
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQs Page</a>
                  </li>
                  
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-4">
              <div className="footer-widget">
                <h4 className="widget-title">The Highlights</h4>
                <ul className="footer-menu">
                  <li>
                    <a href="#">Create Project</a>
                  </li>
                  <li>
                    <a href="#">Crowd Funding</a>
                  </li>
                  <li>
                    <a href="checkout.html">Monitor Project</a>
                  </li>
                 
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer-widget">
                <h4 className="widget-title">My Account</h4>
                <ul className="footer-menu">
                  <li>
                    <a href="#">My Profile</a>
                  </li>
                  <li>
                    <a href="#">My account</a>
                  </li>
                 
                </ul>
              </div>
            </div>

            <div className="col-lg- col-md-6">
           </div>
          </div>
        </div>
      </div>

   </footer>
  )
}

export default Footer
