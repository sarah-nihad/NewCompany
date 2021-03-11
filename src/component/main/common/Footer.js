import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <div className="footer-content">
          <div className=" first-col ">
            {/* start First column  */}
            <h2 className="logo">Future Company</h2>
            <p className="footer-des">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              odio dolorum porro vel sequi amet?
            </p>
            <ul className="footer-social-media">
              <li>
                <a >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a >
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          {/* End First column  */}
          <div className="d-col ">
            {/* start Second column  */}
            <div className="explore-content">
              <h3>Explore</h3>
              <ul className="Explore-item">
                <li>
                  <a >Home</a>
                </li>
                <li>
                  <a >About US</a>
                </li>
                <li>
                  <a >Our Works</a>
                </li>
              
                <li>
                  <a >Contact US</a>
                </li>
              </ul>
            </div>
            {/* End Second column  */}
          </div>
          <div className="d-col ">
            <h3>contact us</h3>
            {/* start Third column  */}
            <ul className="contact-item">
              <li>
                <i class="fal fa-map-marker-alt"></i>
                <a >Harthiya,Baghdad,Iraq</a>
              </li>
              <li>
                <i class="fab fa-whatsapp"></i>
                <a >+964 1234556</a>
              </li>
              <li>
                <i class="fal fa-envelope"></i>
                <a >info@Future-Company</a>
              </li>
            </ul>
            {/* start Third column  */}
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Footer;
