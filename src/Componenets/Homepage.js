import React from "react";
import resumephoto from '../images/Resumephoto.jpg'
import IconButton from '@material-ui/core/IconButton'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WorkIcon from '@material-ui/icons/Work';


function Homepage() {

  return (
    <div  className="description">
      <div className="card__container">
        <div className="card">
          <figure className="front">
            <img src={resumephoto} alt="dev"/>
          </figure>
          <figure className="back">
            <h1>Ripudaman Kaushik</h1>
            <h2>Full-Stack Developer</h2>
            <div classname="links">
              <IconButton href="https://www.peopleperhour.com/freelancer/development-it/ripudaman-kaushik-full-stack-developer-vmvannx#portfolio" target="_blank" >
                <WorkIcon/>
              </IconButton>
              <IconButton href="https://www.instagram.com/ripudamankaushik/"  target="_blank"  >
                <InstagramIcon/>
              </IconButton>
              <IconButton href="https://github.com/RipudamanKaushikDal" target="_blank">
                <GitHubIcon />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/ripudamankaushik" target="_blank" >
                <LinkedInIcon/>
              </IconButton>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
