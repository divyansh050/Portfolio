import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";
import DescriptionIcon from "@material-ui/icons/Description";
import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";


export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right">
          Hi, I am <span className="about__name">Divynash</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          {/* A Full Stack Developer who loves solving problems and building
          projects. I am equipped with a variety of technologies and tools to
          help me build the best possible product. */}
          Attentive Full-Stack Web Developer with strong front-end design ,
          problem-solving skills and expertise in MERN stack. Self disciplined
          and able to handle multiple things and competing deadlines. Always
          curious and consistent to learn new technologies.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/divyansh050"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:sikarwar.divyansh.13@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+918109949361"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/divyansh-singh-sikarwar-26858882?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bpjt3x%2FDuT4aTHScLyGy5Ww%3D%3D"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://drive.google.com/file/d/1qUmlwz5cbUi1XUoeJqQhzKk0O03nrvG6/view?usp=sharing"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <DescriptionIcon />
          </a>
         
          <a
            href="https://www.google.com/maps/place/Gwalior,+Madhya+Pradesh/@26.214396,78.0508106,11z/data=!3m1!4b1!4m5!3m4!1s0x3976c5d1792291fb:0xff4fb56d65bc3adf!8m2!3d26.2124007!4d78.1772053"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <PublicIcon />
          </a>
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
