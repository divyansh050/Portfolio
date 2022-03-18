import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img
                src="https://avatars.githubusercontent.com/u/94886249?s=400&u=4f2da39808278104cea6e49ba4dfb51a78a4e0f5&v=4"
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Stranger, I am{" "}
                <span className="different">Divyansh Singh Sikarwar </span> from{" "}
                <span className="different"> Gwalior, Madhya Pradesh,India</span>. I
                have completed my graduation in Bachelor of Commerce from Jiwaji
                University Gwalior.
              </h4>
              <h4>Some of my interests apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Watching Sci-Fi Movies
              </h4>
              {/* <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Football Enthusiast{" "}
              </h4> */}
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Gaming Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Cooking{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
