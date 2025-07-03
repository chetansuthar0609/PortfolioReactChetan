import React from 'react';
import myphoto from '../../utils/images/Ellipse 5.svg';
import style from './Section1.module.css';
import Button from 'react-bootstrap/Button';

const Section1 = () => {

  const handleWhatsApp = () => {
  const phone = "919998958207"; // your number with country code
  const message = encodeURIComponent("Hi Chetan, I visited your portfolio and I'm interested in discussing a project or opportunity with you")
  const url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, "_blank");
};

  return (
    <div className={`container py-4 ${style.main}`}>
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-12 mb-4">
          <img src={myphoto} className="img-fluid" alt="Chetan Suthar" />
        </div>
        <div className="col-12">
          <h1 className={`m-0 ${style.selfname}`}>Chetan Suthar</h1>
          <h4 className={`m-0 mt-1 ${style.position}`}>Full Stack Developer</h4>
        </div>
        <div className="col-12 col-md-10 col-lg-8 mt-4">
          <p className={`${style.aboutText}`}>
            I am an entry-level full-stack web developer with a solid foundation in web technologies, including HTML, CSS, Bootstrap, JavaScript, React.js and Node.js. Driven by a passion for coding and creating efficient web applications, I aim to deliver innovative, user-centric solutions in the digital space. Eager to learn and enhance my skills, I am committed to contributing meaningfully to dynamic projects within the technology sector.
          </p>
        </div>
        <div className="col-12 mt-4">
          <Button variant="outline-secondary" className={`rounded-pill ${style.animated_border_btn}`} onClick={handleWhatsApp}>
            <a>Contact Me</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
