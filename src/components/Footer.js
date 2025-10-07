import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/navIcon2.svg";
import navIcon3 from "../assets/img/navIcon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          {/* <MailchimpForm /> */}
          <Col sm={6}>
            <span className="logo">M.T</span>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/mohamed-tamer-585097238/"
                target="_blank"
              >
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="https://github.com/mohamed589m" target="_blank">
                <img src={navIcon2} alt="github" />
              </a>
              <a href="mailto:mohamed53634372@gmail.com">
                <img src={navIcon3} alt="Mail" />
              </a>
            </div>
            <p>CopyRight 2025. All Right Reserved for Mohamed Tamer</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
