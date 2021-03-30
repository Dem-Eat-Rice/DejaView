import React from "react";
import { SocialIcon } from "react-social-icons";
import './Footer.css';

const Footer = () => {

    return (
      <div className="footer-container">
        <div className="footer-container_title">
          DejaView :
          <br />
          Dream Journal App
        </div>
        <div className="footer-container_jimmy">
            <div className="name">Demeatrice James <br /> Sherrod</div>
            <div className="icon-container">
                <SocialIcon className="icon" id="github" url="https://github.com/Dem-Eat-Rice" />
                <SocialIcon className="icon" id="linkedin" url="https://www.linkedin.com/in/demeatrice-james-sherrod-2650091a4" />
                <SocialIcon className="icon" id="email" url="mailto:demeatricej.sherrod@gmail.com" />
            </div>
        </div>
    </div>
    );
}

export default Footer;
