import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/manpasand.png";
import projImg2 from "../assets/img/moviehub.png";
import projImg3 from "../assets/img/crypto.png";
import projImg4 from "../assets/img/expense.png";
import projImg5 from "../assets/img/quiz app.png";
import projImg6 from "../assets/img/expense.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import "animate.css";
//"Fitness Website"https://admin-dashboard-by-khan.netlify.app/E-Commerce-website
export const Projects = () => {
  const projects = [
    {
      title: (
        <a
          href="https://manpasand-alpha.vercel.app/"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h4 style={{ fontWeight: "bold" }}>Manpasand</h4>
        </a>
      ),
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: (
        <a
          href="https://movie-hub-ashi258.vercel.app/"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h4 style={{ fontWeight: "bold" }}>Movie-Hub</h4>
        </a>
      ),

      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: (
        <a
          href="https://react-crypto-app-master-8ppf000c2-ashi258.vercel.app/"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h4 style={{ fontWeight: "bold" }}>Crypto-World</h4>
        </a>
      ),
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: (
        <a
          href="https://github.com/ashi258/expense-tracker"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h4 style={{ fontWeight: "bold" }}>Expense Tracker</h4>
        </a>
      ),
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: (
        <a
          href="https://github.com/ashi258/Quiz-app"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h4 style={{ fontWeight: "bold" }}>Quiz App</h4>
        </a>
      ),
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: (
        <a
          href="https://github.com/ashi258/expense-tracker"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h4 style={{ fontWeight: "bold" }}>Expense Tracker</h4>
        </a>
      ),
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                <div >
                  <h2>Projects</h2>
                  <p  >
                  I bring a wealth of web development expertise, highlighted by a diverse portfolio that includes a food-delivery website, a movie review platform, a crypto exchange & analyzer site, an expense tracker application, and a quiz application. This array of projects serves as a testament to my proficiency in both front-end and back-end technologies such as React, Node.js, Express, and MongoDB. My capabilities extend to designing user-friendly interfaces, integrating APIs seamlessly, and delivering responsive web applications. Notably, I've crafted a personal portfolio website to showcase my skills and project accomplishments. Grounded in a robust foundation of web development and fueled by a fervent passion for creating innovative solutions, I am well-prepared to take on a diverse range of projects within the web development domain.                  </p>
                  </div>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {/* <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
