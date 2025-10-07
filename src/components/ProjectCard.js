import { Col } from "react-bootstrap";

export { Col } from "react-bootstrap";
export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
      <Col sm={6} md={4}>
        <a href={link} target="_blank" className="text-light" >
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
        </a>
      </Col>
  );
};
