import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Sobre <span className="purple"> Mim </span>
            </h1>
            <p className="home-about-body">
              Sou um programador especializado em desenvolvimento back-end e
              mobile. Sou formado Análise e Desenvolvimento de Sistema
              <br />
              <br />
              Stacks
              <i>
                <b className="purple">
                  {" "}
                  Android com Kotlin, IOS com Swft e Hibrido com Flutter e
                  backend com C#, PHP e JAVA.{" "}
                </b>
              </i>
              <br />
              <br />
              Meus conhecimento são em Desenvolvedor &nbsp;
              <i>
                <b className="purple">Web </b> e{" "}
                <b className="purple">Mobile.</b>
              </i>
              <br />
              <br />
              Sempre que possível, coloco em prática minha paixão pelo
              desenvolvimento de sistemas, explorando tanto o frontend,{" "}
              <b className="purple">
                com tecnologias como React.js, HTML, CSS e JavaScript,
              </b>{" "}
              quanto o backend,
              <i>
                <b className="purple"> utilizando C#, Java e PHP.</b>
              </i>
              &nbsp; Tenho experiência com frameworks modernos como React.js e
              Next.js, trazendo soluções inovadoras para os projetos que
              participo.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ME ENCONTRE-ME EM</h1>
            <p>
              Sinta-se à vontade para se{" "}
              <span className="purple">conectar </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MizaelDouglasDeMello"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mizael.douglas/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
