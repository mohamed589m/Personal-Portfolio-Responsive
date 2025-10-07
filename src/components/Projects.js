import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project4.png";
import projImg5 from "../assets/img/project5.png";
import projImg6 from "../assets/img/project6.png";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import profileImg from "./../assets/img/formalImg.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "Fast React Pizza",
      // description: "Design & Development",
      imgUrl: projImg1,
      link: "https://github.com/mohamed589m/Fast-React-Pizza",
    },
    {
      title: "Popcorn",
      // description: "Design & Development",
      imgUrl: projImg2,
      link: "https://github.com/mohamed589m/Popcorn",
    },
    {
      title: "React Quiz",
      // description: "Design & Development",
      imgUrl: projImg3,
      link: "https://github.com/mohamed589m/React-Quiz",
    },
    {
      title: "World Wise",
      // description: "Design & Development",
      imgUrl: projImg4,
      link: "https://github.com/mohamed589m/WorldWise",
    },
    {
      title: "The Wild Oasis",
      // description: "Design & Development",
      imgUrl: projImg5,
      link: "https://github.com/mohamed589m/the-wild-oasis",
    },
    {
      title: "E-commerce",
      // description: "Design & Development",
      imgUrl: projImg6,
      link: "https://github.com/mohamed589m/Jewelry-Template-Responsive",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    This is a collection of some of my projects and some
                    information about me if you want to see it.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 flex-wrap justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                    <Nav.Link eventKey="second">Contact</Nav.Link>
                  </Nav.Item> */}
                <Nav.Item>
                  <Nav.Link eventKey="third">About me</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                {/* <Tab.Pane eventKey="second">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur.
                </Tab.Pane> */}
                <Tab.Pane eventKey="third">
                  <section
                    id="about"
                    className="py-5 bg-dark text-light rounded-3"
                  >
                    <div className="container">
                      <div className="row align-items-center">
                        {/* Profile Image */}
                        <div className="col-lg-5 col-md-6 text-center m-lg-0 m-md-auto mb-4 mb-md-4">
                          <img
                            src={profileImg}
                            alt="Profile"
                            className="img-fluid rounded shadow"
                            style={{ maxWidth: "300px" }}
                          />
                        </div>

                        {/* About Content */}
                        <div className="col-lg-7 col-md-12 text-start">
                          <h2 className="fw-bold mb-3 text-start">About Me</h2>

                          <p className="mb-4 ms-0 text-start w-100">
                            I’m an ambitious and results-driven{" "}
                            <strong>Full-Stack Web Developer</strong> with
                            expertise in building responsive, scalable, and
                            interactive applications. My core stack includes
                            <strong>
                              {" "}
                              React, Next.js, Node.js, Express.js, and MongoDB
                            </strong>
                            , with a strong foundation in
                            <strong>
                              {" "}
                              HTML, CSS, JavaScript, and TypeScript
                            </strong>
                            .
                          </p>

                          <p className="mb-4 ms-0 text-start w-100">
                            I deliver solutions that combine clean design,
                            smooth functionality, and strong performance —
                            ensuring each project meets client goals and exceeds
                            expectations.
                          </p>

                          {/* What I Can Deliver */}
                          <h5 className="fw-bold">✅ What I Can Deliver:</h5>
                          <ul className="list-unstyled mb-4">
                            <li>
                              🌐 Modern Web Apps – Full-stack solutions with
                              secure APIs & dynamic UIs.
                            </li>
                            <li>
                              📱 Responsive & Mobile-First Design – Perfect on
                              all devices.
                            </li>
                            <li>
                              ⚡ High-Performance Front-End – React, Next.js &
                              Tailwind CSS.
                            </li>
                            <li>
                              🔒 Reliable Back-End – Node.js, Express.js,
                              MongoDB.
                            </li>
                            <li>
                              🧩 Clean & Maintainable Code – Modular &
                              documented.
                            </li>
                          </ul>

                          {/* Additional Skills */}
                          <h5 className="fw-bold">🛠 Additional Skills:</h5>
                          <ul className="list-unstyled mb-4">
                            <li>
                              🎨 CSS frameworks (Tailwind, Bootstrap) for
                              elegant UI.
                            </li>
                            <li>
                              🔗 RESTful APIs, authentication, integrations.
                            </li>
                            <li>⚙️ Git & Version Control for collaboration.</li>
                          </ul>

                          {/* Projects */}
                          <h5 className="fw-bold">
                            🚀 Projects I’m Perfect For:
                          </h5>
                          <ul className="list-unstyled mb-4">
                            <li>
                              🏢 Business Websites – Professional &
                              brand-focused.
                            </li>
                            <li>
                              🛒 E-commerce Platforms – Secure &
                              conversion-driven.
                            </li>
                            <li>
                              🎯 Landing Pages – Optimized for performance &
                              leads.
                            </li>
                            <li>
                              💻 Custom Web Apps – Scalable & interactive.
                            </li>
                            <li>📸 Portfolios – Modern & visually striking.</li>
                          </ul>

                          {/* Why Work With Me */}
                          <h5 className="fw-bold">💡 Why Work With Me?</h5>
                          <p className="mb-4 ms-0 w-100 text-start">
                            I mix <strong>technical expertise</strong> with{" "}
                            <strong>creativity</strong> to build solutions that
                            work flawlessly and look amazing. My focus:{" "}
                            <strong>
                              client satisfaction, clear communication, and
                              timely delivery
                            </strong>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
