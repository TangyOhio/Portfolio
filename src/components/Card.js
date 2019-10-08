import React from "react";

const Card = ({ eventPic, logo1, logo2, logo3, title, description, link }) => {
  const checkLogo = logo => {
    if (logo)
      return (
        <img
          className="logo-image logo3"
          src={logo}
          alt="Logo 3"
          height="20px"
          width="20px"
        />
      );
  };

  return (
    <a href={link} target="_blank">
      <div className="card">
        <div className="images-container">
          <img className="project-image" src={eventPic} alt="Dictionary App" />
          <img
            className="logo-image logo1"
            src={logo1}
            alt="Logo 1"
            height="20px"
            width="20px"
          />
          <img
            className="logo-image logo2"
            src={logo2}
            alt="Logo 2"
            height="20px"
            width="20px"
          />
          {checkLogo(logo3)}
        </div>

        <div className="bottom-container">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
