import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import headerImg from "../assets/img/coding boy.svg";

import { useEffect, useState } from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const toRotate = [
    "Web Developer",
    "Front end Developer",
    "Back end Developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);

      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);

      setDelta(10);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : " "
                  }
                >
                  <span className="tagline">Welcome to my portfolio</span>
                  <h1>
                    {`Hi I am Ashish Raj`}
                    <span className="wrap"> {text}</span>
                  </h1>
                  <p>
                    result-oriented professional a strong foundation in web
                    development Skilled in front-end and back-end technologies,
                    including React, Node.js, Express, and MongoDB. Proven
                    ability to design and develop user-friendly and responsive
                    web applications.
                  </p>

                  <a href="#connect" style={{ textDecoration: "none" }}>
                    <button>
                      Let's Connect <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src= "/coding boy.svg" alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
