import { Col, Container, Row } from "react-bootstrap";
// import logo from "../assets/img/logo.svg";
// import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";
export const Footer = () => {
  return (
    <footer>
      <Container  className="cont">
        <Row className="align-items-center">
          
          
            
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/ashish-raj-528437220/" target="_blank" >
                  {" "}
                  <img src="/nav-icon1.svg" alt="" />
                </a>
                <a href="https://github.com/ashi258" target="_blank"  >
                  
                  <img src="/nav-icon2.svg" alt="" />
                </a>
                <a href="https://www.instagram.com/" target="_blank"  >
                  {" "}
                  <img src="/nav-icon3.svg" alt="" />
                </a>
          
              </div>
             
           
      
        </Row>
      </Container>
    </footer>
  );
};
