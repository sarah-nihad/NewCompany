import React from "react";
import { Container, Col } from "react-bootstrap";
import SectionWhy from "./SectionWhy";
import NavBar from './common/NavBar';
import { aboutData } from "./Data";
import TeamSection from "./TeamSection";
import Footer from './common/Footer';
function About(props) {
  return (
    <>
      <div className="about">
        <NavBar />
      <div className="img-about"></div>
        <Container>
          <header>
            <small>MORE INFO</small>
            <h2>About us</h2>
          </header>
        

          {aboutData.map((item, index) => {
            return (
              <Col key={index}>
                <div className="about-descrption">
                  <h2>{item.headline}</h2>
                  <p>{item.MainDescription}</p>
                  <small>{item.secDescription}</small>
                </div>
              </Col>
            );
          })}
       
        </Container>
      </div>
      <SectionWhy />
      <div id='aboutTitleTeam' style={{color:'#000'}  } >
          
          <small>WHO WE ARE</small>
          <h2>Meet The Team</h2>
        </div>
      <TeamSection />
     <Footer />
    </>
  );
}
export default About;
