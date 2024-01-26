
import react, {useEffect} from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import meter1 from '../assets/img/meter1.svg'
// import meter2 from '../assets/img/meter2.svg'
// import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
              I possess a diverse set of skills that positions me as a valuable asset in the field of web development. My strengths encompass effective communication, leadership, and team management, enabling me to successfully coordinate and drive projects to completion.
<br />
On the technical front, I boast expertise in both front-end and back-end technologies, such as React, Node.js, Express, and MongoDB.
<br />
I boast a proven track record in the design and development of user-friendly, responsive web applications.
<br />
With a robust foundation in web development and an unwavering passion for innovation, I am eager to contribute my skills to groundbreaking projects and make a meaningful impact in the industry.
              
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                autoPlay={true}
                autoPlaySpeed={1000}
              >
                <div className="item">
                  <img src="/meter1.svg" alt=" Image" />
                  <h5>Web Developer</h5>
                </div>
                <div className="item">
                  <img src="/meter2.svg" alt=" Image" />
                  <h5>Front End Developer</h5>
                </div>
                <div className="item">
                  <img src="/meter3.svg" alt=" Image" />
                  <h5>Back End Developer</h5>
                </div>
                <div className="item">
                  <img src="/meter1.svg" alt=" Image" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src="/meter1.svg" alt=" Image" />
                  <h5>ReactJs</h5>
                </div>
                <div className="item">
                  <img src="/meter2.svg" alt=" Image" />
                  <h5>NodeJs</h5>
                </div>
                <div className="item">
                  <img src="/meter3.svg" alt=" Image" />
                  <h5>ExpressJs</h5>
                </div>
                <div className="item">
                  <img src="/meter1.svg" alt=" Image" />
                  <h5>MongoDb</h5>
                </div>
                <div className="item">
                  <img src="/meter1.svg" alt=" Image" />
                  <h5>SQL</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src="/color-sharp.png" alt="Gradient" />
    </section>
  );
};
